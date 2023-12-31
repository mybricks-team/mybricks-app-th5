import React from "react";
import { message } from "antd";
import servicePlugin, {
  call as callConnectorHttp,
  mock as connectorHttpMock,
} from "@mybricks/plugin-connector-http";
// import servicePlugin, {
//   call as callConnectorHttp,
//   mock as connectorHttpMock,
// } from "../../../../../plugin-connector-http/src";
// import { openFilePanel } from "@mybricks/sdk-for-app/ui";
import versionPlugin from "mybricks-plugin-version";
import toolsPlugin from "@mybricks/plugin-tools";
import { use as useTheme } from "@mybricks/plugin-theme";
// import { use as useTheme } from "../../../../../plugin-theme/src";
import { burialPoint } from "./plugins/burialPoint";
import { render as renderUI } from "@mybricks/render-web";
import comlibLoaderFunc from "./configs/comlibLoader";
import { comLibAdderFunc } from "./configs/comLibAdder";
import { trackModel } from './track-panel'
// import { runJs } from '../../utils/runJs'

import { LOCAL_EDITOR_ASSETS } from './../../constants'

import axios from "axios";
import { shapeUrlByEnv } from "../../utils/shapeUrlByEnv";

const getComs = () => {
  const comDefs = {};
  const regAry = (comAray) => {
    comAray.forEach((comDef) => {
      if (comDef.comAray) {
        regAry(comDef.comAray);
      } else {
        comDefs[`${comDef.namespace}-${comDef.version}`] = comDef;
      }
    });
  };

  const comlibs = [
    ...(window["__comlibs_edit_"] || []),
    ...(window["__comlibs_rt_"] || []),
  ];
  comlibs.forEach((lib) => {
    const comAray = lib.comAray;
    if (comAray && Array.isArray(comAray)) {
      regAry(comAray);
    }
  });
  return comDefs;
};

const getDomainFromPath = (path: string) => {
  if (!path) return path;
  if (path.startsWith("http") || path.startsWith("https")) {
    const [protocol, url] = path.split("//");
    const domain = url.split("/")[0];
    return `${protocol}//${domain}`;
  } else {
    return location.origin;
  }
};

const injectUpload = (
  editConfig: Record<string, any>,
  uploadService: string,
  manateeUserInfo: { token: string; session: string }
) => {
  if (!!editConfig && !editConfig.upload) {
    editConfig.upload = async (files: Array<File>): Promise<Array<string>> => {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("folderPath", `/files/${Date.now()}`);
      const useConfigService = !!uploadService;
      if (!useConfigService) {
        uploadService = "/paas/api/flow/saveFile";
      }
      try {
        const res = await axios<any, any>({
          url: uploadService,
          method: "post",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            ...manateeUserInfo,
          },
        });
        const { status, data, message, code } = res.data;
        if (status === 200 || code === 1) {
          let url = "";
          if (Array.isArray(data)) {
            url = data?.[0]?.url;
          } else {
            url = data.url;
          }
          if (!url) {
            throw Error(`没有返回图片地址`);
          }
          const staticUrl = /^http/.test(url)
            ? url
            : `${getDomainFromPath(uploadService)}${url}`;
          return [staticUrl].map((url) => url.replace("https", "http"));
        }
        throw Error(`【图片上传出错】: ${message}`);
      } catch (error) {
        message.error(error.message);
        return [];
      }
    };
  }
};

export default function (ctx, save, designerRef) {
  const envList = ctx?.envList || [];

  // 获得环境信息映射表
  const envMap = envList.reduce((res, item) => {
    res[item.name] = item.title;
    return res;
  }, {});

  return {
    shortcuts: {
      "ctrl+s": [save],
    },
    plugins: [
      servicePlugin(),
      burialPoint({ designerRef, sdk: ctx.sdk, onIsSelect: ({ isSelectPlan }) => { trackModel.isSelectPlan = !!isSelectPlan } }),
      versionPlugin({
        user: ctx.user,
        file: ctx.fileItem,
        disabled: ctx.disabled,
        envMap,
        onInit: (versionApi) => {
          ctx.versionApi = versionApi;
        },
      }),
      // servicePlugin({
      //   envList,
      // }),
      useTheme({ sdk: ctx.sdk }),
      toolsPlugin(),
    ],
    ...(ctx.hasMaterialApp
      ? {
          comLibAdder: comLibAdderFunc(ctx),
        }
      : {}),
    // comLibLoader: () => {
    //   return new Promise((resolve) => {
    //     resolve([H5_BASIC_COM_LIB.editJs]);
    //   });
    // },
    comLibLoader: comlibLoaderFunc(ctx),
    pageContentLoader() {
      //加载页面内容
      return new Promise((resolve, reject) => {
        const content = ctx.fileItem?.content || {};

        const _content = JSON.parse(JSON.stringify(content));
        delete _content.comlibs;

        console.log(_content);

        resolve(_content);
      });
    },
    toplView: {
      title: "交互",
      cards: {
        main: {
          title: "页面",
        },
      },
      globalIO: {
        startWithSingleton: true,
      },
      vars: {},
      fx: {},
      useStrict: false,
      // display: false,
    },
    editView: {
      panelAppender: trackModel.panelAppender,
      editorAppender(editConfig) {
        injectUpload(editConfig, ctx.uploadService, ctx.manateeUserInfo);
        return;
      },
      items({}, cate0, cate1, cate2) {
        cate0.title = `项目`;
        cate0.items = [
          {
            title: "名称",
            type: "Text",
            //options: {readOnly: true},
            value: {
              get: (context) => {
                return ctx.fileItem.name;
              },
              set: (context, v: any) => {
                ctx.setName(v);
              },
            },
          },
          {
            title: "调试",
            items: [
              {
                title: "调试环境",
                type: "select",
                ifVisible({ data }) {
                  return envList.length > 0;
                },
                description:
                  "选择调试时采用的环境配置，发布时的环境不受此控制，你可以在应用配置处修改可选环境（需管理员权限）",
                options: {
                  options: envList.map((item) => ({
                    value: item.name,
                    label: item.title,
                  })),
                  placeholder: "请选择调试环境",
                },
                value: {
                  get() {
                    return ctx.executeEnv || "";
                  },
                  set(context, v) {
                    ctx.executeEnv = v;
                  },
                },
              },
              {
                title: "环境信息设置",
                description: "可以在应用配置处修改使用的环境",
                ifVisible({ data }) {
                  return envList.length > 0;
                },
                type: "array",
                options: {
                  getTitle: (item) => {
                    return item.title;
                  },
                  items: [
                    {
                      title: "环境标识(禁止修改)",
                      type: "text",
                      value: "name",
                      options: {
                        readonly: true,
                      },
                    },
                    {
                      title: "域名",
                      type: "text",
                      value: "value",
                    },
                  ],
                  addable: false,
                  deletable: false,
                  draggable: false,
                },
                value: {
                  get({ data, focusArea }) {
                    return envList;
                  },
                  set({ data, focusArea, output, input, ...res }, value) {
                    ctx.envList = value;
                  },
                },
              },
            ],
          },
          // {
          //   title: '调试',
          //   items: [
          //     {
          //       title: '调试环境',
          //       type: 'select',
          //       ifVisible({ data }) {
          //         return envList?.length > 0;
          //       },
          //       description: '选择调试时采用的环境配置，发布时的环境不受此控制，你可以在应用配置处修改可选环境（需管理员权限）',
          //       options: {
          //         options: envList.map(item => ({
          //           value: item.name,
          //           label: item.title
          //         })),
          //         placeholder: '请选择调试环境'
          //       },
          //       value: {
          //         get() {
          //           return ctx.executeEnv || ''
          //         },
          //         set(context, v) {
          //           ctx.executeEnv = v
          //         }
          //       }
          //     },
          //     // {
          //     //   title: '路由参数',
          //     //   type: 'code',
          //     //   description: '调试模式下，路由的参数配置',
          //     //   options: {
          //     //     title: '编辑路由参数',
          //     //     language: 'json',
          //     //     width: 500,
          //     //     minimap: {
          //     //       enabled: false
          //     //     },
          //     //     displayType: 'button'
          //     //   },
          //     //   value: {
          //     //     get() {
          //     //       return ctx.debugQuery ? JSON.stringify(ctx.debugQuery, null, 2) : '{}'
          //     //     },
          //     //     set(context: any, v: string) {
          //     //       const jsonString = decodeURIComponent(v);
          //     //       try {
          //     //         const jsonData = JSON.parse(jsonString);
          //     //         ctx.debugQuery = jsonData
          //     //       } catch {
          //     //         console.error('路由参数数据格式错误');
          //     //       }
          //     //     }
          //     //   }
          //     // },
          //     // {
          //     //   title: '主应用参数',
          //     //   type: 'code',
          //     //   description: '调试模式下，主应用参数配置',
          //     //   options: {
          //     //     title: '编辑主应用参数',
          //     //     language: 'json',
          //     //     width: 500,
          //     //     minimap: {
          //     //       enabled: false
          //     //     },
          //     //     displayType: 'button'
          //     //   },
          //     //   value: {
          //     //     get() {
          //     //       return ctx.debugMainProps ? JSON.stringify(ctx.debugMainProps, null, 2) : '{}'
          //     //     },
          //     //     set(context: any, v: string) {
          //     //       const jsonString = decodeURIComponent(v);
          //     //       try {
          //     //         const jsonData = JSON.parse(jsonString);
          //     //         ctx.debugMainProps = jsonData
          //     //       } catch {
          //     //         console.error('主应用参数数据格式错误');
          //     //       }
          //     //     }
          //     //   }
          //     // },
          //   ]
          // }
        ];

        cate1.title = `高级`;
        cate1.items = [
          // {
          //   title: "头部标签",
          //   type: "code",
          //   description: "可在<head>标签内注入内容，注入位置在标签的最后",
          //   options: {
          //     title: "编辑",
          //     language: "html",
          //     width: 500,
          //     minimap: {
          //       enabled: false,
          //     },
          //     displayType: "button",
          //   },
          //   value: {
          //     get() {
          //       return ctx.headTags || "";
          //     },
          //     set(context: any, v: string) {
          //       ctx.headTags = v;
          //     },
          //   },
          // },
        ];
      },
      editorOptions: LOCAL_EDITOR_ASSETS
    },
    com: {
      env: {
        renderCom(json, opts, coms) {
          return renderUI(json, {
            comDefs: { ...getComs(), ...coms },
            // observable: window['rxui'].observable,
            ...(opts || {}),
            env: {
              ...(opts?.env || {}),
              edit: false,
              runtime: true,
            },
            callConnector(connector, params, connectorConfig = {}) {
              const plugin = designerRef.current?.getPlugin(
                connector.connectorName || "@mybricks/plugins/service"
              );
              return plugin.callConnector(
                { ...connector, executeEnv: ctx.executeEnv },
                params,
                {
                  ...connectorConfig,
                  before: (options) => {
                    return {
                      ...options,
                      url: shapeUrlByEnv(envList, ctx.executeEnv, options.url),
                    };
                  },
                }
              );
            },
          });
        },
        callConnector(connector, params, connectorConfig = {}) {
          const plugin = designerRef.current?.getPlugin(
            connector.connectorName || "@mybricks/plugins/service"
          );

          return plugin.callConnector(
            { ...connector, executeEnv: ctx.executeEnv },
            params,
            {
              ...connectorConfig,
              before: (options) => {
                return {
                  ...options,
                  url: shapeUrlByEnv(envList, ctx.executeEnv, options.url),
                };
              },
            }
          );
        },
        // 文件上传实现
        fileUploader(file) {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file.originalFileObj);
            formData.append("folderPath", `/imgs/${Date.now()}`);
            axios
              .post("/paas/api/flow/saveFile", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((res) => {
                resolve(res.data.data.url);
              })
              .catch((err) => {
                reject(err);
              });
          });
        },
        vars: {
          get getExecuteEnv() {
            return () => ctx.executeEnv;
          },
          getQuery: () => ({ ...(ctx.debugQuery || {}) }),
          getProps: () => ({ ...(ctx.debugMainProps || {}) }),
          get getRouter() {
            const toast = (info: string) => {
              message.info(info);
            };
            return () => ({
              reload: () => toast("reload"),
              redirect: ({ url }: { url: string }) => toast(`redirect: ${url}`),
              back: () => toast("back"),
              forward: () => toast("forward"),
              pushState: ({
                state,
                title,
                url,
              }: {
                state: any;
                title: string;
                url: string;
              }) =>
                toast(`pushState: ${JSON.stringify({ state, title, url })}`),
              openTab: ({ url, title }: { url: string; title: string }) =>
                toast(`open a new tab: ${JSON.stringify({ url, title })}`),
            });
          },
          get getCookies() {
            return () => {
              return {};
            };
          },
        },
        // get hasPermission() {

        //   return ({ key }) => {
        //     const hasPermissionFn = ctx?.hasPermissionFn;

        //     if (!ctx.debugHasPermissionFn) {
        //       return true
        //     }

        //     if (!hasPermissionFn) {
        //       return true;
        //     }

        //     let result: boolean;

        //     try {
        //       result = runJs(decodeURIComponent(hasPermissionFn), [
        //         { key },
        //       ]);

        //       if (typeof result !== 'boolean') {
        //         result = true;
        //         designerRef.current?.console?.log.error(
        //           '权限方法',
        //           `权限方法返回值类型应为 Boolean 请检查，[Key] ${key}; [返回值] Type: ${typeof result}; Value: ${JSON.stringify(
        //             result,
        //           )}`,
        //         );

        //         console.error(
        //           `权限方法返回值类型应为 Boolean 请检查，[Key] ${key}; [返回值] Type: ${typeof result}; Value: ${JSON.stringify(
        //             result,
        //           )}`,
        //         );
        //       }
        //     } catch (error) {
        //       result = true;
        //       designerRef.current?.console?.log.error(
        //         '权限方法',
        //         `${error.message}`,
        //       );
        //       // ctx.console?.log.error('权限方法', `${error.message}`)
        //       console.error(`权限方法出错 [Key] ${key}；`, error);
        //     }

        //     return result;
        //   };
        // }
        events: [
          //配置事件
          {
            type: "jump",
            title: "跳转到",
            exe({ options }) {
              const page = options.page;
              if (page) {
                window.location.href = page;
              }
            },
            options: [
              {
                id: "page",
                title: "页面",
                editor: "textarea",
              },
            ],
          },
          {
            type: "back",
            title: "返回上一级",
            exe() {
              message.info(`返回上一级`);
            },
          },
        ],
      },
    },
    geoView: {
      type: "mobile",
      width: 375,
      height: 667,
      // nav: {
      //   float: false,
      // },
      theme: {
        css: [
          // "https://f2.beckwai.com/udata/pkg/eshop/fangzhou/temp/editor.d5c483a324024fb6.css",
          "./public/editor.css",
        ],
      },
      module: {
        width: 375
      },
      scenes: {
        adder: [
          {
            type: "popup",
            title: "弹出层",
            template: {
              namespace: "mybricks.normal-h5-vue.popup",
              deletable: false,
              asRoot: true,
            },
          },
        ],
      },
    },
  };
}
