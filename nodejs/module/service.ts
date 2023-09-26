import { Injectable } from "@nestjs/common";

import * as fs from "fs";
import axios from "axios";
import * as path from "path";
import API from "@mybricks/sdk-for-app/api";
import { generateComLib } from "./generateComLib";
import pkgJson from './../../package.json';
import { TargetEnv } from "./types";

@Injectable()
export default class PcPageService {
  async _generateComLibRT(comlibs, json, { domainName, fileId, noThrowError, targetEnv }) {
    /**
     * TODO:
     * 1.目前应用里配置的edit.js 一定有 rt.js
     * 2.物料体系完善后，应该都是按需加载的
     * 3.目前只有匹配到“我的组件”内组件才去物料中心拉组件代码
     */
    let mySelfComMap = {};

    comlibs.forEach((comlib) => {
      if (comlib?.defined && Array.isArray(comlib.comAray)) {
        comlib.comAray.forEach((com) => {
          mySelfComMap[`${com.namespace}@${com.version}`] = true;
        });
      }
    });

    const ignoreNamespaces = [
      "mybricks.core-comlib.fn",
      "mybricks.core-comlib.var",
      "mybricks.core-comlib.type-change",
      "mybricks.core-comlib.connector",
      "mybricks.core-comlib.frame-input",
      "mybricks.core-comlib.scenes",
    ];
    const deps = json.scenes
      .reduce((pre, scene) => [...pre, ...scene.deps], [])
      .filter((item) => !ignoreNamespaces.includes(item.namespace));
    const selfComponents = deps.filter(
      (item) => mySelfComMap[`${item.namespace}@${item.version}`]
    );
    const comLibContents = [...comlibs];

    /** 处理我的组件 */
    if (selfComponents.length) {
      try {
        const finalComponents = await Promise.all(
          selfComponents.map((component) => {
            return new Promise((resolve, reject) => {
              axios({
                method: "get",
                url: `${domainName}/api/material/namespace/content?namespace=${component.namespace}&version=${component.version}`,
                timeout: 30 * 1000,
              })
                .then(({ data }) => {
                  resolve(data.data);
                })
                .catch((error) => reject(error));
            });
          })
        );

        comLibContents.unshift({
          comAray: [],
          id: "_myself_",
          title: "我的组件",
          defined: true,
          componentRuntimeMap: {},
        });
        finalComponents.forEach((finalComponent) => {
          const { version, namespace, runtime } = finalComponent;

          const runtimeContent = targetEnv === TargetEnv.Vue2 ? encodeURIComponent(finalComponent['runtime.vue']) : encodeURIComponent(runtime);

          if (version && namespace && runtimeContent) {
            comLibContents[0].componentRuntimeMap[namespace + "@" + version] = {
              version,
              runtime: runtimeContent,
            };
          }
        });
      } catch (error) {
        throw Error(error.message || error.msg || "获取我的组件物料信息异常");
      }
    }

    return generateComLib(
      comLibContents.filter((lib) => !!lib.componentRuntimeMap),
      deps,
      { comLibId: fileId, noThrowError, targetEnv }
    );
  }

  async preview(
    req,
    { json, userId, fileId, envType, commitInfo, targetEnv = TargetEnv.React }
  ) {
    try {
      const publishFilePath = path.resolve(__dirname, "./template");

      let template = fs.readFileSync(
        publishFilePath + `/publish.${targetEnv}.html`,
        "utf8"
      );

      const {
        title,
        comlibs,
        projectId,
        fileName,
        folderPath,
        publisherEmail,
        publisherName,
        groupId,
        groupName,
        executeEnv,
        envList = [],
      } = json.configuration;

      Reflect.deleteProperty(json, "configuration");

      /** 本地测试 根目录 npm run start:nodejs，调平台接口需要起平台（apaas-platform）服务 */
      const domainName =
        process.env.NODE_ENV === "development"
          ? "http://localhost:9001"
          : getRealDomain(req);
      // const domainName = 'https://my.mybricks.world';
      console.info("[publish] domainName is:", domainName);

      const themesStyleStr = this._genThemesStyleStr(json);
      
      const appConfig = await getAppConfig();
      const headTags = await this.getHeadTagFromConfig(appConfig);

      console.info('插入代码', headTags, appConfig)

      console.info("[publish] getLatestPub begin");
      const latestPub = (
        await API.File.getLatestPub({
          fileId,
        })
      )?.[0];
      console.info("[publish] getLatestPub ok");
      const version = getNextVersion(latestPub?.version);
      let comLibRtScript = "";
      let needCombo = false;
      let hasOldComLib = false;
      comlibs.forEach((lib) => {
        if (typeof lib === "string") {
          comLibRtScript += `<script src="${lib}"></script>`;
          return;
        }

        /** 旧组件库，未带组件 runtime 描述文件 */
        if (!lib.coms && !lib.defined) {
          comLibRtScript += `<script src="${lib.rtJs}"></script>`;
          hasOldComLib = true;
        }
      });

      const comlibRtName = `${fileId}-${envType}-${version}.js`;
      /** 需要聚合的组件资源 */
      if (
        comlibs.find((lib) => lib?.defined)?.comAray?.length ||
        comlibs.find((lib) => lib.componentRuntimeMap)
      ) {
        comLibRtScript += `<script src="./${comlibRtName}"></script>`;
        needCombo = true;
      }

      template = template
        .replace(`--title--`, title)
        .replace(`-- themes-style --`, themesStyleStr)
        .replace(`-- comlib-rt --`, comLibRtScript)
        .replace(`"--projectJson--"`, JSON.stringify(json))
        .replace(`-- head-tags --`, decodeURIComponent(headTags || ""))
        .replace(`"--executeEnv--"`, JSON.stringify(executeEnv))
        .replace(`"--envList--"`, JSON.stringify(envList))
        .replace(
          `"--slot-project-id--"`,
          projectId ? projectId : JSON.stringify(null)
        );
      let publishMaterialInfo;
      const customPublishApi = await getCustomPublishApi();
      console.info("[publish] getCustomPublishApi=", customPublishApi);
      let comboScriptText = "";
      /** 生成 combo 组件库代码 */
      if (needCombo) {
        comboScriptText = await this._generateComLibRT(comlibs, json, {domainName, fileId, noThrowError: hasOldComLib, targetEnv });
      }

      if (customPublishApi) {
        // TODO
      } else {
        console.info("[publish] upload to static server");

        needCombo &&
          (await API.Upload.staticServer({
            content: comboScriptText,
            folderPath: `${folderPath}/${envType || "prod"}`,
            fileName: comlibRtName,
            noHash: true,
          }));

        publishMaterialInfo = await API.Upload.staticServer({
          content: template,
          folderPath: `${folderPath}/${envType || "prod"}`,
          fileName,
          noHash: true,
        });

        console.info(
          "[publish] upload to static server ok",
          publishMaterialInfo
        );

        if (publishMaterialInfo?.url?.startsWith("https")) {
          publishMaterialInfo.url = publishMaterialInfo.url.replace(
            "https",
            "http"
          );
        }

        return {
          code: 1,
          url: publishMaterialInfo.url,
        };
      }

      console.info("[publish] API.File.publish: begin ");
      // const result = await API.File.publish({
      //   userId,
      //   fileId,
      //   extName: "th5-page",
      //   commitInfo,
      //   content: JSON.stringify({ ...publishMaterialInfo, json }),
      //   type: envType,
      // });

      console.info("[publish] API.File.publish: ok ");

      // return result;
    } catch (e) {
      console.error("th5page publish error", e);
      throw e;
    }
  }

  async publish(
    req,
    { json, userId, fileId, envType, commitInfo, targetEnv = TargetEnv.React }
  ) {
    try {
      const publishFilePath = path.resolve(__dirname, "./template");

      let template = fs.readFileSync(
        publishFilePath + `/publish.${targetEnv}.html`,
        "utf8"
      );

      const {
        title,
        comlibs,
        projectId,
        fileName,
        folderPath,
        publisherEmail,
        publisherName,
        groupId,
        groupName,
        envList = [],
      } = json.configuration;

      Reflect.deleteProperty(json, "configuration");

      /** 本地测试 根目录 npm run start:nodejs，调平台接口需要起平台（apaas-platform）服务 */
      const domainName =
        process.env.NODE_ENV === "development"
          ? "http://localhost:9001"
          : getRealDomain(req);
      // const domainName = 'https://my.mybricks.world';
      console.info("[publish] domainName is:", domainName);

      const themesStyleStr = this._genThemesStyleStr(json);
      
      const appConfig = await getAppConfig();
      const headTags = await this.getHeadTagFromConfig(appConfig);

      console.info("[publish] getLatestPub begin");
      const latestPub = (
        await API.File.getLatestPub({
          fileId,
        })
      )?.[0];
      console.info("[publish] getLatestPub ok");
      const version = getNextVersion(latestPub?.version);
      let comLibRtScript = "";
      let needCombo = false;
      let hasOldComLib = false;
      comlibs.forEach((lib) => {
        if (typeof lib === "string") {
          comLibRtScript += `<script src="${lib}"></script>`;
          return;
        }

        /** 旧组件库，未带组件 runtime 描述文件 */
        if (!lib.coms && !lib.defined) {
          comLibRtScript += `<script src="${lib.rtJs}"></script>`;
          hasOldComLib = true;
        }
      });

      const comlibRtName = `${fileId}-${envType}-${version}.js`;
      /** 需要聚合的组件资源 */
      if (
        comlibs.find((lib) => lib?.defined)?.comAray?.length ||
        comlibs.find((lib) => lib.componentRuntimeMap)
      ) {
        comLibRtScript += `<script src="./${comlibRtName}"></script>`;
        needCombo = true;
      }

      template = template
        .replace(`--title--`, title)
        .replace(`-- themes-style --`, themesStyleStr)
        .replace(`-- comlib-rt --`, comLibRtScript)
        .replace(`"--projectJson--"`, JSON.stringify(json))
        .replace(`-- head-tags --`, decodeURIComponent(headTags || ""))
        .replace(`"--executeEnv--"`, JSON.stringify(envType))
        .replace(`"--envList--"`, JSON.stringify(envList))
        .replace(
          `"--slot-project-id--"`,
          projectId ? projectId : JSON.stringify(null)
        );
      let publishMaterialInfo;
      const customPublishApi = await getCustomPublishApi();
      console.info("[publish] getCustomPublishApi=", customPublishApi);
      let comboScriptText = "";
      /** 生成 combo 组件库代码 */
      if (needCombo) {
        comboScriptText = await this._generateComLibRT(comlibs, json, {
          domainName,
          fileId,
          noThrowError: hasOldComLib,
          targetEnv,
        });
      }

      if (customPublishApi) {
        // TODO
      } else {
        console.info("[publish] upload to static server");

        needCombo &&
          (await API.Upload.staticServer({
            content: comboScriptText,
            folderPath: `${folderPath}/${envType || "prod"}`,
            fileName: comlibRtName,
            noHash: true,
          }));

        publishMaterialInfo = await API.Upload.staticServer({
          content: template,
          folderPath: `${folderPath}/${envType || "prod"}`,
          fileName,
          noHash: true,
        });

        console.info(
          "[publish] upload to static server ok",
          publishMaterialInfo
        );

        if (publishMaterialInfo?.url?.startsWith("https")) {
          publishMaterialInfo.url = publishMaterialInfo.url.replace(
            "https",
            "http"
          );
        }
      }

      console.info("[publish] API.File.publish: begin ");
      const result = await API.File.publish({
        userId,
        fileId,
        extName: "th5-page",
        commitInfo,
        content: JSON.stringify({ ...publishMaterialInfo, json }),
        type: envType,
      });

      console.info("[publish] API.File.publish: ok ");

      return result;
    } catch (e) {
      console.error("th5page publish error", e);
      throw e;
    }
  }

  _genThemesStyleStr(json) {
    let themesStyleStr = "";

    const themes = json?.plugins?.["@mybricks/plugins/theme/use"]?.themes;

    if (Array.isArray(themes)) {
      themes.forEach(({ namespace, content }) => {
        const variables = content?.variables;

        if (Array.isArray(variables)) {
          let styleHtml = "";

          variables.forEach(({ configs }) => {
            if (Array.isArray(configs)) {
              configs.forEach(({ key, value }) => {
                styleHtml = styleHtml + `${key}: ${value};\n`;
              });
            }
          });

          styleHtml = `<style id="${namespace}">\n:root {\n${styleHtml}}\n</style>\n`;
          themesStyleStr = themesStyleStr + styleHtml;
        }
      });
    }

    return themesStyleStr;
  }

  private getHeadTagFromConfig(appConfig) {
    const { headTags, lazyImage } = appConfig ?? {};

    const mutationObserver = '<script data-must="1" crossorigin="anonymous" src="https://f2.eckwai.com/udata/pkg/eshop/fangzhou/res/mutationobserver.min.js"></script>'

    const scriptsContent = `${headTags ?? ''}${lazyImage ? mutationObserver : ''}`;

    return scriptsContent
  }
}

// 不传groupId表示获取的是全局配置
const getAppConfig = async ({ groupId } = {} as any) => {
  const _NAMESPACE_ = pkgJson.name;
  const options = !!groupId ? { type: "group", id: groupId } : {};
  const res = await API.Setting.getSetting([_NAMESPACE_], options);

  let config = {} as any;
  const originConfig = res[_NAMESPACE_]?.config || {};
  try {
    config =
      typeof originConfig === "string"
        ? JSON.parse(originConfig)
        : originConfig;
  } catch (e) {
    console.error("getAppConfig error", e);
  }
  return config;
};

// 使用平台设置的集成接口，不使用协作组的
const getCustomPublishApi = async () => {
  const { publishApiConfig = {} } = await getAppConfig();
  const { publishApi } = publishApiConfig;
  if (!publishApi) {
    console.warn(`未配置发布集成接口`);
  }
  return publishApi;
};

function getRealHostName(requestHeaders) {
  let hostName = requestHeaders.host;
  if (requestHeaders["x-forwarded-host"]) {
    hostName = requestHeaders["x-forwarded-host"];
  } else if (requestHeaders["x-host"]) {
    hostName = requestHeaders["x-host"].replace(":443", "");
  }
  return hostName;
}

/** 有问题找zouyongsheng */
function getRealDomain(request) {
  let hostName = getRealHostName(request.headers);
  const { origin } = request.headers;
  if (origin) return origin;
  // let protocol = request.headers['x-scheme'] ? 'https' : 'http'
  /** TODO: 暂时写死 https */
  // let protocol = 'https';
  let protocol =
    request.headers?.["connection"].toLowerCase() === "upgrade"
      ? "https"
      : "http";
  let domain = `${protocol}:\/\/${hostName}`;
  return domain;
}

function getNextVersion(version, max = 100) {
  if (!version) return "1.0.0";
  const vAry = version.split(".");
  let carry = false;
  const isMaster = vAry.length === 3;
  if (!isMaster) {
    max = -1;
  }

  for (let i = vAry.length - 1; i >= 0; i--) {
    const res = Number(vAry[i]) + 1;
    if (i === 0) {
      vAry[i] = res;
    } else {
      if (res === max) {
        vAry[i] = 0;
        carry = true;
      } else {
        vAry[i] = res;
        carry = false;
      }
    }
    if (!carry) break;
  }

  return vAry.join(".");
}
