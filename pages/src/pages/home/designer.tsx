import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import axios from "axios";
import { fAxios } from "../../services/http";
import moment from "moment";
import { message } from "antd";
import API from "@mybricks/sdk-for-app/api";
import { Locker, Toolbar } from "@mybricks/sdk-for-app/ui";
import config from "./app-config";
// import { getManateeUserInfo } from '../../utils'
import { fetchPlugins, getManateeUserInfo, traverseAllComponents } from "../../utils";
import { getRtComlibsFromConfigEdit } from "./../../utils/comlib";
import { PreviewStorage } from "./../../utils/previewStorage";
import { MySelf_COM_LIB, H5_BASIC_COM_LIB } from "../../constants";
import PublishModal from "./components/PublishModal";
import ToolbarDownload from "./components/toolbar-download";
import { TargetEnv } from "./../../types";
import { trackModel } from './track-panel'

import css from "./app.less";

// const DefaultUploadService = '/biz/uploadExternalFileLocal'

// 兜底物料
export const LOCAL_DEFAULT_COMLIBS = [H5_BASIC_COM_LIB];

export default function MyDesigner({ appData }) {
  const coms = [];

  // 处理默认组件库，是从物料中心配置读取，还是直接从本地配置读取
  if (appData?.defaultComlibs?.length) {
    // 物料中心配置
    appData?.defaultComlibs.forEach((lib) => {
      const { namespace, content, version } = lib;
      const com = LOCAL_DEFAULT_COMLIBS.find(
        (lib) => lib.namespace === namespace
      );
      const { editJs, rtJs, coms: componentComs } = JSON.parse(content);
      if (com) {
        coms.push({
          id: com.id,
          namespace,
          version,
          editJs,
          rtJs,
          coms: componentComs,
        });
      } else {
        coms.push({ ...lib, editJs, rtJs, coms: componentComs });
      }
    });
  } else {
    // 本地配置读取
    coms.push(...LOCAL_DEFAULT_COMLIBS);
  }

  let comlibs = [];

  // 处理我的组件
  if (!appData.fileContent?.content?.comlibs) {
    coms.unshift(MySelf_COM_LIB);
    comlibs = coms;
  } else {
    const myselfComlib =
      appData.fileContent?.content?.comlibs?.find(
        (lib) => lib.id === "_myself_"
      ) ?? MySelf_COM_LIB;
    coms.unshift(myselfComlib);
    if (
      appData.fileContent?.content?.comlibs?.some(
        (lib) => typeof lib === "string"
      )
    ) {
      comlibs = coms;
    } else {
      comlibs = appData.fileContent?.content?.comlibs;
    }
  }

  // comlibs = LOCAL_DEFAULT_COMLIBS

  // const designer = "https://f2.beckwai.com/kos/nlav12333/mybricks/designer-spa/1.3.68/index.min.js";
  const designer = "./public/designer-spa/1.3.68-1/index.min.js";

  // const configComlibs = comlibs.map(lib => lib.editJs)

  // const [manateeUserInfo] = useState(getManateeUserInfo())

  const appConfig = useMemo(() => {
    let config = null;
    try {
      const originConfig = appData.config[APP_NAME]?.config || {};
      config =
        typeof originConfig === "string"
          ? JSON.parse(originConfig)
          : originConfig;
    } catch (error) {
      console.error("get appConfig error", error);
    }
    return config || {};
  }, [appData.config[APP_NAME]?.config]);

  const { plugins = [] } = appConfig;
  const uploadService = appConfig?.uploadServer?.uploadService || "";

  // 初始化埋点信息
  trackModel.init(appData.fileContent?.content?.spmExtraParams)

  const [ctx, setCtx] = useState({
    sdk: appData,
    user: appData.user,
    fileId: appData.fileId,
    fileItem: appData.fileContent || {},
    setting: appData.config || {},
    hasMaterialApp: appData.hasMaterialApp,

    comlibs: comlibs,
    // comlibs: [appData.fileContent?.content?.comlibs?.find(lib => lib.id === "_myself_") ?? MySelf_COM_LIB, H5_BASIC_COM_LIB],
    envList: getMergedEnvList(appData, appConfig),
    latestComlibs: [],
    debugQuery: appData.fileContent?.content?.debugQuery,
    executeEnv: appData.fileContent?.content?.executeEnv || "",
    debugMainProps: appData.fileContent?.content?.debugMainProps,
    hasPermissionFn: appData.fileContent?.content?.hasPermissionFn,
    debugHasPermissionFn: appData.fileContent?.content?.debugHasPermissionFn,
    versionApi: null,
    appConfig,
    uploadService,
    operable: false,
    isDebugMode: false,
    saveContent(content) {
      ctx.save({ content });
    },
    save(param: { name?; shareType?; content?; icon? }, skipMessage?: boolean) {
      const { name, shareType, content, icon } = param;
      API.File.save({
        userId: ctx.user?.id,
        fileId: ctx.fileId,
        name,
        shareType,
        content,
        icon,
      })
        .then(() => {
          !skipMessage && message.success(`保存完成`);
          if (content) {
            setSaveTip(`改动已保存-${moment(new Date()).format("HH:mm")}`);
          }
        })
        .catch((e) => {
          !skipMessage && message.error(`保存失败：${e.message}`);
          if (content) {
            setSaveTip("保存失败");
          }
        })
        .finally(() => {
          setSaveLoading(false);
        });
    },
    setName(name) {
      if (ctx.fileItem.name !== name) {
        ctx.fileItem.name = name;
      }
    },
  });
  const publishingRef = useRef(false);
  const previewingRef = useRef(false);
  const designerRef = useRef<{
    dump;
    toJSON;
    geoView;
    switchActivity;
    getPluginData;
  }>();
  const [beforeunload, setBeforeunload] = useState(false);
  const [operable, setOperable] = useState(false);
  const [saveTip, setSaveTip] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [publishLoading, setPublishLoading] = useState(false);
  const [SPADesigner, setSPADesigner] = useState(null);
  const [publishModalVisible, setPublishModalVisible] = useState(false);
  const [latestComlibs, setLatestComlibs] = useState<[]>();
  const [isDebugMode, setIsDebugMode] = useState(false);

  useEffect(() => {
    const needSearchComlibs = comlibs.filter(lib => lib.id !== "_myself_");
    if (!!needSearchComlibs?.length) {
      API.Material.getLatestComponentLibrarys(needSearchComlibs.map(lib => lib.namespace)).then((res: any) => {
        const latestComlibs = (res || []).map(lib => ({ ...lib, ...JSON.parse(lib.content) }))
        setLatestComlibs(latestComlibs)
      })
    } else {
      setLatestComlibs([]);
    }
  }, [JSON.stringify(comlibs.map((lib) => lib.namespace))]);

  useEffect(() => {
    // console.log("应用数据:", appData);
  }, []);

  useEffect(() => {
    let designerSPAVerison = "";
    const regex = /(\d+?\.\d+\.\d+)/g;
    const matches = designer.match(regex);
    if (matches) {
      designerSPAVerison = matches[0];
    }
    const appInfo = {
      app: {
        verison: APP_VERSION || "",
        name: APP_NAME || "",
      },
      designerSPAVerison,
      renderWebVersion: RENDERWEB_VERSION || "",
      plugins: plugins.map((item) => {
        const { name, title, updateTime } = item || {};
        return {
          name,
          title,
          updateTime,
        };
      }),
      comlibs: comlibs
        .filter((item) => item.id !== "_myself_")
        .map((item) => {
          const { id, namespace: name, version } = item || {};
          return {
            id,
            name,
            version,
          };
        }),
    };

    // 简单判断本地环境，不上报数据
    if (window.location.origin.includes("http://localhost")) return;

    appData.report({
      jsonData: {
        type: "appInfo",
        payload: appInfo,
      },
    });
  }, []);

  useMemo(() => {
    if (designer) {
      const script = document.createElement("script");
      script.src = designer;
      document.head.appendChild(script);
      script.onload = () => {
        (window as any).mybricks.SPADesigner &&
          setSPADesigner((window as any).mybricks.SPADesigner);
      };
    }
  }, [designer]);

  useEffect(() => {
    if (beforeunload) {
      window.onbeforeunload = () => {
        return true;
      };
    } else {
      window.onbeforeunload = null;
    }
  }, [beforeunload]);

  const onEdit = useCallback(() => {
    setBeforeunload(true);
  }, []);

  const handleSwitch2SaveVersion = useCallback(() => {
    designerRef.current?.switchActivity?.("@mybricks/plugins/version");
    setTimeout(() => {
      ctx?.versionApi?.switchAciveTab?.("save");
    }, 0);
  }, []);

  const save = useCallback(async (opt, skipMessage = false) => {
    if (!ctx.operable) {
      message.warn("请先点击右上角个人头像上锁获取页面编辑权限");
      return;
    }
    if (ctx.isDebugMode) {
      console.warn("请退出调试模式，再进行保存");
      return;
    }

    setSaveLoading(true);
    //保存
    const json = designerRef.current?.dump();
    json.comlibs = ctx.comlibs;
    json.debugQuery = ctx.debugQuery;
    json.executeEnv = ctx.executeEnv;
    json.envList = ctx.envList;
    json.debugMainProps = ctx.debugMainProps;
    json.hasPermissionFn = ctx.hasPermissionFn;
    json.debugHasPermissionFn = ctx.debugHasPermissionFn;

    json.projectId = ctx.sdk.projectId;

    await ctx.save({ name: ctx.fileItem.name, content: JSON.stringify(json) }, skipMessage);

    setBeforeunload(false);

    API.App.getPreviewImage({
      // Todo... name 中文乱码
      element: designerRef.current?.geoView.canvasDom,
      // name: `${ctx.fileItem.name}.png`
    })
      .then((res) => {
        try {
          const url = new URL(res);

          if (url.protocol === "https:") {
            url.protocol = "http:";
          }

          ctx.save({ icon: url.href }, true);
        } catch (error) {
          
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const compile = useCallback(async () => {
    // const json = designerRef.current?.dump();

    // json.comlibs = ctx.comlibs;
    // json.debugQuery = ctx.debugQuery;
    // json.executeEnv = ctx.executeEnv;
    // json.debugMainProps = ctx.debugMainProps;
    // json.hasPermissionFn = ctx.hasPermissionFn;
    // json.debugHasPermissionFn = ctx.debugHasPermissionFn;
    // json.projectId = ctx.sdk.projectId;

    // await ctx.save(
    //   { content: JSON.stringify(json), name: ctx.fileItem.name },
    //   true
    // );

    // setBeforeunload(false);

    const curToJSON = designerRef?.current?.toJSON();

    const curComLibs = await genLazyloadComs(ctx.comlibs, curToJSON);

    const tracksConfig = await trackModel.getTracksConfig(curToJSON, designerRef.current.components.getAll());

    trackModel.deleteTracksConfigFromToJson(curToJSON)

    const toJSON = JSON.parse(
      JSON.stringify({
        ...curToJSON,
        configuration: {
          // scripts: encodeURIComponent(scripts),
          comlibs: curComLibs,
          title: ctx.fileItem.name,
          publisherEmail: ctx.user.email,
          publisherName: ctx.user?.name,
          projectId: ctx.sdk.projectId,
          executeEnv: ctx.executeEnv,
          tracksConfig: tracksConfig,
          htmlInjects: ctx.appConfig?.htmlInjects,
          envList: ctx.envList,
          // 非模块下的页面直接发布到项目空间下
          folderPath: "/app/th5",
          fileName: `${ctx.fileItem.id}.html`,
          groupName: appData?.hierarchy?.groupName || "",
          groupId: appData?.hierarchy?.groupId || 0,
        },
        hasPermissionFn: ctx.hasPermissionFn,
      })
    );

    return {
      toJSON,
      targetEnv: getTargetEnv(curComLibs)
    }
  }, [designerRef?.current, ctx]);

  const preview = useCallback(() => {
    if (previewingRef.current) {
      return;
    }
    previewingRef.current = true;

    const envType = "preview";
    const commitInfo = `预览 ${new Date().toLocaleString()}`;

    setPreviewLoading(true);

    const msgClose = message.loading({
      key: "preview",
      content: "预览页发布中",
      duration: 0,
    });

    return (async () => {
      const { toJSON, targetEnv } = await compile();

      const res: { code: number; message: string } = await fAxios.post(
        "/api/th5/preview",
        {
          userId: ctx.user?.id,
          fileId: ctx.fileId,
          json: toJSON,
          envType,
          commitInfo,
          targetEnv,
        }
      );

      if (res.code === 1) {
        msgClose();
        message.success({
          key: "publish",
          content: "发布成功",
          duration: 2,
        });
        window.open(`./preview.html?fileId=${ctx.fileId}`)
      } else {
        msgClose();
        message.error({
          content: res.message || "预览失败",
          duration: 2,
        });
      }

      setPreviewLoading(false);
    })()
      .catch((e) => {
        console.error(e);
        msgClose();
        message.error({
          key: "publish",
          content: "网络错误，请稍后再试",
          duration: 2,
        });
      })
      .finally(() => {
        previewingRef.current = false;
        setPreviewLoading(false);
      });
  }, [appConfig, compile]);

  const publish = useCallback(
    (publishConfig) => {
      if (publishingRef.current) {
        return;
      }

      const msgClose = message.loading({
        key: "publish",
        content: "页面发布中",
        duration: 0,
      });

      return (async () => {
        await save({}, true)

        const { envType = "prod", commitInfo } = publishConfig;
        publishingRef.current = true;

        setPublishLoading(true);

        const { toJSON, targetEnv } = await compile();

        const res: { code: number; message: string } = await fAxios.post(
          "/api/th5/publish",
          {
            userId: ctx.user?.id,
            fileId: ctx.fileId,
            json: toJSON,
            envType,
            commitInfo,
            targetEnv,
          }
        );

        if (res.code === 1) {
          msgClose();
          message.success({
            key: "publish",
            content: "发布成功",
            duration: 2,
          });

          designerRef.current?.switchActivity?.("@mybricks/plugins/version");
          setTimeout(() => {
            ctx?.versionApi?.switchAciveTab?.("publish", void 0);
          }, 0);
        } else {
          msgClose();
          message.error({
            key: "publish",
            content: res.message || "发布失败",
            duration: 2,
          });
        }

        setPublishLoading(false);
      })()
        .catch((e) => {
          console.error(e);
          message.error({
            content: "网络错误，请稍后再试",
            duration: 2,
          });
        })
        .finally(() => {
          publishingRef.current = false;
          setPublishLoading(false);
        });
    },
    [appData, compile]
  );

  const RenderLocker = useMemo(() => {
    return (
      <Locker
        statusChange={(status) => {
          setOperable(status === 1);
          ctx.operable = status === 1;
        }}
      />
    );
  }, []);

  const onMessage = useCallback((type, msg) => {
    message.destroy();
    message[type](msg);
  }, []);

  const onDebug = useCallback(() => {
    setIsDebugMode(true);
    ctx.isDebugMode = true;
    return () => {
      setIsDebugMode(false);
      ctx.isDebugMode = false;
    };
  }, []);

  return (
    <div className={`${css.view} fangzhou-theme`}>
      <Toolbar
        title={ctx.fileItem?.name}
        updateInfo={
          <Toolbar.LastUpdate
            content={saveTip}
            onClick={handleSwitch2SaveVersion}
          />
        }
      >
        {RenderLocker}
        <Toolbar.Save
          disabled={!operable || isDebugMode}
          loading={saveLoading}
          onClick={() => {
            save();
          }}
          dotTip={beforeunload}
        />
        <Toolbar.Button
          disabled={isDebugMode}
          loading={previewLoading}
          onClick={preview}
        >
          预览
        </Toolbar.Button>
        <Toolbar.Button
          disabled={!operable || isDebugMode}
          loading={publishLoading}
          onClick={() => setPublishModalVisible(true)}
        >
          发布
        </Toolbar.Button>
        <ToolbarDownload fileId={ctx.fileId} />
      </Toolbar>
      <div className={css.designer}>
        {SPADesigner && latestComlibs && window?.mybricks?.createObservable &&  (
          <>
            <SPADesigner
              ref={designerRef}
              config={config(
                window?.mybricks?.createObservable(Object.assign(ctx, { latestComlibs })),
                save,
                designerRef,
                appData
              )}
              onEdit={onEdit}
              onMessage={onMessage}
              onDebug={onDebug}
              _onError_={(ex: any) => {
                console.error(ex);
                onMessage("error", ex.message);
              }}
            />
          </>
        )}
      </div>
      <PublishModal
        envList={ctx?.appConfig?.publishEnvConfig?.envList || []}
        visible={publishModalVisible}
        onOk={(publishConfig) => {
          publish(publishConfig);
          setPublishModalVisible(false);
        }}
        onCancel={() => setPublishModalVisible(false)}
      />
    </div>
  );
}

/**
 * @description 按需加载组件
 * @param comlibs
 * @param toJSON
 * @returns
 */
const genLazyloadComs = async (comlibs, toJSON) => {
  const curComLibs = JSON.parse(JSON.stringify(comlibs));
  const mySelfComMap = {};
  comlibs.forEach((comLib) => {
    if (comLib?.defined && Array.isArray(comLib.comAray)) {
      comLib.comAray.forEach((com) => {
        mySelfComMap[`${com.namespace}@${com.version}`] = true;
      });
    }
  });

  /**
   * 过滤掉 render-web 内置的组件
   */
  const ignoreNamespaces = [
    'mybricks.core-comlib.fn',
    'mybricks.core-comlib.var',
    'mybricks.core-comlib.type-change',
    'mybricks.core-comlib.connector',
    'mybricks.core-comlib.frame-input',
    'mybricks.core-comlib.frame-output',
    'mybricks.core-comlib.scenes',
    'mybricks.core-comlib.defined-com',
    'mybricks.core-comlib.module',
  ];

  let definedComsDeps = []
  let modulesDeps = []

  if (toJSON.definedComs) {
    Object.keys(toJSON.definedComs).forEach(key => {
      definedComsDeps = [...definedComsDeps, ...toJSON.definedComs[key].json.deps]
    })
  }

  if (toJSON.modules) {
    Object.keys(toJSON.modules).forEach(key => {
      modulesDeps = [...modulesDeps, ...toJSON.modules[key].json.deps]
    })
  }

  let deps = [
    ...(toJSON.scenes || [])
      .reduce((pre, scene) => [...pre, ...scene.deps], [])
      .filter((item) => !mySelfComMap[`${item.namespace}@${item.version}`])
      .filter((item) => !ignoreNamespaces.includes(item.namespace)),
    ...(toJSON.global?.fxFrames || [])
      .reduce((pre, fx) => [...pre, ...fx.deps], [])
      .filter((item) => !mySelfComMap[`${item.namespace}@${item.version}`])
      .filter((item) => !ignoreNamespaces.includes(item.namespace)),
    ...definedComsDeps
      .filter((item) => !mySelfComMap[`${item.namespace}@${item.version}`])
      .filter((item) => !ignoreNamespaces.includes(item.namespace)),
    ...modulesDeps
      .filter((item) => !mySelfComMap[`${item.namespace}@${item.version}`])
      .filter((item) => !ignoreNamespaces.includes(item.namespace)),
  ];

  deps = deps.reduce((accumulator, current) => {
    const existingObject = accumulator.find(obj => obj.namespace === current.namespace);
    if (!existingObject) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  if (deps.length) {
    const willFetchComLibs = curComLibs.filter(
      (lib) => !lib?.defined && lib.coms
    );
    const allComLibsRuntimeMap = (
      await Promise.all(
        willFetchComLibs.map((lib) =>
          axios.get(lib.coms, { withCredentials: false })
        )
      )
    ).map((data) => data.data);
    const noThrowError = comlibs.some((lib) => !lib.coms && !lib.defined);

    deps.forEach((component) => {
      let libIndex = allComLibsRuntimeMap.findIndex(
        (lib) => lib[component.namespace + "@" + component.version]
      );
      let curComponent = null;
      if (libIndex !== -1) {
        curComponent =
          allComLibsRuntimeMap[libIndex][
            component.namespace + "@" + component.version
          ];
      } else {
        libIndex = allComLibsRuntimeMap.findIndex((lib) =>
          Object.keys(lib).find((key) => key.startsWith(component.namespace))
        );

        if (libIndex === -1) {
          if (noThrowError) {
            return;
          } else {
            throw new Error(
              `找不到 ${component.namespace}@${component.version} 对应的组件资源`
            );
          }
        }
        curComponent =
          allComLibsRuntimeMap[libIndex][
            Object.keys(allComLibsRuntimeMap[libIndex]).find((key) =>
              key.startsWith(component.namespace)
            )
          ];
      }

      if (!curComponent) {
        if (noThrowError) {
          return;
        } else {
          throw new Error(
            `找不到 ${component.namespace}@${component.version} 对应的组件资源`
          );
        }
      }

      if (!willFetchComLibs[libIndex].componentRuntimeMap) {
        willFetchComLibs[libIndex].componentRuntimeMap = {};
      }
      willFetchComLibs[libIndex].componentRuntimeMap[
        component.namespace + "@" + curComponent.version
      ] = curComponent;
    });
  }

  return curComLibs;
};

const getMergedEnvList = (appData, appConfig) => {
  const pageEnvlist = appData.fileContent?.content?.envList || [];
  const configEnvlist =
    appConfig?.publishEnvConfig?.envList?.map((item) => ({
      title: item.title,
      name: item.name,
      value: item.defaultApiPrePath,
    })) || [];
  const newEnvList = configEnvlist.filter(
    (item) => item.name && !pageEnvlist.find((env) => env.name === item.name)
  );
  return [...pageEnvlist, ...newEnvList];
};

/**
 *
 * @description TODO
 */
const getTargetEnv = (curComLibs) => {
  let hasNoVueComponent = false;

  curComLibs.forEach((lib) => {
    if (lib?.componentRuntimeMap) {
      Object.keys(lib.componentRuntimeMap).forEach((key) => {
        const comp = lib.componentRuntimeMap[key];
        hasNoVueComponent = hasNoVueComponent || !!!comp["runtime.vue"];
      });
    }
  });

  return TargetEnv.Vue2

  return hasNoVueComponent ? TargetEnv.React : TargetEnv.Vue2;
};