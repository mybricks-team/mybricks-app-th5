import { Injectable } from '@nestjs/common'

import * as fs from "fs";
import axios from "axios";
import * as path from "path";
import API from "@mybricks/sdk-for-app/api";
import { generateComLib } from "./generateComLib";

@Injectable()
export default class PcPageService {

  async _generateComLibRT(comlibs, json, { domainName, fileId, noThrowError }) {
    /**
       * TODO:
       * 1.目前应用里配置的edit.js 一定有 rt.js
       * 2.物料体系完善后，应该都是按需加载的
       * 3.目前只有匹配到“我的组件”内组件才去物料中心拉组件代码
       */
    let mySelfComMap = {}

    comlibs.forEach((comlib) => {
      if (comlib?.defined && Array.isArray(comlib.comAray)) {
        comlib.comAray.forEach((com) => {
          mySelfComMap[`${com.namespace}@${com.version}`] = true
        })
      }
    })

    const ignoreNamespaces = [
      'mybricks.core-comlib.fn',
      'mybricks.core-comlib.var',
      'mybricks.core-comlib.type-change',
      'mybricks.core-comlib.connector',
      'mybricks.core-comlib.frame-input',
      'mybricks.core-comlib.scenes'
    ];
    const deps = json.scenes
      .reduce((pre, scene) => [...pre, ...scene.deps], [])
      .filter((item) => !ignoreNamespaces.includes(item.namespace));
    const selfComponents = deps.filter((item) => mySelfComMap[`${item.namespace}@${item.version}`]);
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
                .catch(error => reject(error));
            });
          })
        );

        comLibContents.unshift({
          comAray: [],
          id: '_myself_',
          title: '我的组件',
          defined: true,
          componentRuntimeMap: {}
        });
        finalComponents.forEach((finalComponent) => {
          const { version, namespace, runtime } = finalComponent;

          if (version && namespace && runtime) {
            comLibContents[0].componentRuntimeMap[namespace + '@' + version] = { version, runtime: encodeURIComponent(runtime) };
          }
        });
      } catch (error) {
        throw Error(error.message || error.msg || '获取我的组件物料信息异常')
      }
    }

    return generateComLib(comLibContents.filter(lib => !!lib.componentRuntimeMap), deps, { comLibId: fileId, noThrowError });
  }

  async publish(req, { json, userId, fileId, envType, commitInfo }) {
    try {

      const publishFilePath = path.resolve(__dirname, './template')

      // // let templateJS = ''
      // let templateHTMl = ''

      // if(fs.existsSync(publishFilePath)) {
      //   const files = fs.readdirSync(publishFilePath)

      //   files.forEach(file => {
      //     if (/\.js$/.test(file)) {
      //       templateJS = fs.readFileSync(publishFilePath + '/' + file, 'utf-8')
      //     }
      //   })

      //   templateHTMl = fs.readFileSync(publishFilePath + '/publish.html', 'utf8')
      // }

      // let template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf8')

      let template = fs.readFileSync(publishFilePath + '/publish.html', 'utf8')

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
      } = json.configuration

      Reflect.deleteProperty(json, 'configuration')

      /** 本地测试 根目录 npm run start:nodejs，调平台接口需要起平台（apaas-platform）服务 */
      const domainName = process.env.NODE_ENV === 'development' ? 'http://localhost:3100' : getRealDomain(req)
      console.info("[publish] domainName is:", domainName);

      let themesStyleStr = ''

      const themes = json?.plugins?.['@mybricks/plugins/theme/use']?.themes
      if (Array.isArray(themes)) {
        themes.forEach(({ namespace, content }) => {
          const variables = content?.variables

          if (Array.isArray(variables)) {
            let styleHtml = ''

            variables.forEach(({ configs }) => {
              if (Array.isArray(configs)) {
                configs.forEach(({ key, value }) => {
                  styleHtml = styleHtml + `${key}: ${value};\n`
                })
              }
            })

            styleHtml = `<style id="${namespace}">\n:root {\n${styleHtml}}\n</style>\n`
            themesStyleStr = themesStyleStr + styleHtml
          }
        })
      }

      console.info("[publish] getLatestPub begin");
      const latestPub = (await API.File.getLatestPub({
        fileId
      }))?.[0];
      console.info("[publish] getLatestPub ok");
      const version = getNextVersion(latestPub?.version);
      let comLibRtScript = '';
      let needCombo = false;
      let hasOldComLib = false;
      comlibs.forEach(lib => {
        /** 旧组件库，未带组件 runtime 描述文件 */
        if (!lib.coms && !lib.defined) {
          comLibRtScript += `<script src="${lib.rtJs}"></script>`;
          hasOldComLib = true;
        }
      });

      /** 需要聚合的组件资源 */
      if (comlibs.find(lib => lib?.defined)?.comAray?.length || comlibs.find(lib => lib.componentRuntimeMap)) {
        comLibRtScript += `<script src="./${fileId}-${version}.js"></script>`;
        needCombo = true;
      }

      template = template.replace(`--title--`, title)
        .replace(`<!-- themes-style -->`, themesStyleStr)
        .replace(`-- comlib-rt --`, comLibRtScript)
        .replace(`"--projectJson--"`, JSON.stringify(json))
        .replace(`"--executeEnv--"`, JSON.stringify(envType))
        .replace(`"--slot-project-id--"`, projectId ? projectId : JSON.stringify(null));
      let publishMaterialInfo
      const customPublishApi = await getCustomPublishApi()
      console.info("[publish] getCustomPublishApi=", customPublishApi);
      let comboScriptText = '';
      /** 生成 combo 组件库代码 */
      if (needCombo) {
        comboScriptText = await this._generateComLibRT(comlibs, json, {domainName, fileId, noThrowError: hasOldComLib});
      }

      if (customPublishApi) {
        const dataForCustom = {
          env: envType,
          productId: fileId,
          productName: title,
          publisherEmail,
          publisherName: publisherName || '',
          version,
          commitInfo,
          type: 'pc-page',
          groupId,
          groupName,
          content: {
            json: JSON.stringify(json),
            html: template,
            js: needCombo ? [{ name: `${fileId}-${version}.js`, content: comboScriptText }] : []
          }
        }
        const { code, message, data } = await axios.post(customPublishApi, dataForCustom, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.data);

        if (code !== 1) {
          throw new Error(`发布集成接口出错: ${message}`)
        } else {
          publishMaterialInfo = data
        }
      } else {
        console.info("[publish] upload to static server");
        needCombo && await API.Upload.staticServer({
          content: comboScriptText,
          folderPath: `${folderPath}/${envType || 'prod'}`,
          fileName: `${fileId}-${version}.js`,
          noHash: true
        })
        publishMaterialInfo = await API.Upload.staticServer({
          content: template,
          folderPath: `${folderPath}/${envType || 'prod'}`,
          fileName,
          noHash: true
        })
        console.info("[publish] upload to static server ok");
        //   const { url } = await uploadStatic(template, manateeUserInfo);
        if (publishMaterialInfo?.url?.startsWith('https')) {
          publishMaterialInfo.url = publishMaterialInfo.url.replace('https', 'http')
        }
      }
      console.info("[publish] API.File.publish: begin ");
      const result = await API.File.publish({
        userId,
        fileId,
        extName: "pc-page",
        commitInfo,
        content: JSON.stringify({ ...publishMaterialInfo, json }),
        type: envType,
      });
      console.info("[publish] API.File.publish: ok ");
      return result
    } catch (e) {
      console.error("pcpage publish error", e);
      throw e
    }
  }

}

// 不传groupId表示获取的是全局配置
const getAppConfig = async ({ groupId } = {} as any) => {
  const _NAMESPACE_ = "mybricks-app-pcspa";
  const options = !!groupId ? { type: 'group', id: groupId } : {}
  const res = await API.Setting.getSetting([_NAMESPACE_], options);

  let config = {} as any
  const originConfig = res[_NAMESPACE_]?.config || {}
  try {
    config = typeof originConfig === 'string' ? JSON.parse(originConfig) : originConfig
  } catch (e) {
    console.error("getAppConfig error", e);
  }
  return config
};


// 使用平台设置的集成接口，不使用协作组的
const getCustomPublishApi = async () => {
  const { publishApiConfig = {} } = await getAppConfig()
  const { publishApi } = publishApiConfig
  if (!publishApi) {
    console.warn(`未配置发布集成接口`)
  }
  return publishApi;
}

function getRealHostName(requestHeaders) {
  let hostName = requestHeaders.host
  if (requestHeaders['x-forwarded-host']) {
    hostName = requestHeaders['x-forwarded-host']
  } else if (requestHeaders['x-host']) {
    hostName = requestHeaders['x-host'].replace(':443', '')
  }
  return hostName
}

/** 有问题找zouyongsheng */
function getRealDomain(request) {
  let hostName = getRealHostName(request.headers);
  const { origin } = request.headers
  if (origin) return origin
  // let protocol = request.headers['x-scheme'] ? 'https' : 'http'
  /** TODO: 暂时写死 https */
  // let protocol = 'https';
  let protocol = request.headers?.['connection'].toLowerCase() === 'upgrade' ? 'https' : 'http'
  let domain = `${protocol}:\/\/${hostName}`
  return domain
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