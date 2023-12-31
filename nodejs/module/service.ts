import { Injectable } from "@nestjs/common";

import * as fs from "fs";
import * as fse from 'fs-extra';
import * as nodeJsUrl from "url"
import axios from "axios";
import * as path from "path";
import API from "@mybricks/sdk-for-app/api";
import { generateComLib } from "./generateComLib";
// import pkgJson from './../../package.json';
import { TargetEnv } from "./types";
import { Logger } from '@mybricks/rocker-commons'
import { load } from 'cheerio';
const JSZip = require('jszip');

const pkgJson = {
  name: 'mybricks-app-th5'
}

interface Hooks {
  metaAppend: string,
  assetsPrepend: string,
  assetsAppend: string,
  bodyPrepend: string,
  bodyAppend: string
}

@Injectable()
export default class PcPageService {
  async _generateComLibRT(comlibs, json, { fileId, noThrowError, targetEnv }) {
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
    let definedComsDeps = [];
    let modulesDeps = [];

    if (json.definedComs) {
      Object.keys(json.definedComs).forEach((key) => {
        definedComsDeps = [
          ...definedComsDeps,
          ...json.definedComs[key].json.deps,
        ];
      });
    }

    if (json.modules) {
      Object.keys(json.modules).forEach((key) => {
        modulesDeps = [...modulesDeps, ...json.modules[key].json.deps];
      });
    }

    let deps = [
      ...(json.scenes || [])
        .reduce((pre, scene) => [...pre, ...scene.deps], [])
        .filter((item) => !ignoreNamespaces.includes(item.namespace)),
      ...(json.global?.fxFrames || [])
        .reduce((pre, fx) => [...pre, ...fx.deps], [])
        .filter((item) => !ignoreNamespaces.includes(item.namespace)),
      ...definedComsDeps
        .filter((item) => !mySelfComMap[`${item.namespace}@${item.version}`])
        .filter((item) => !ignoreNamespaces.includes(item.namespace)),
      ...modulesDeps
        .filter((item) => !mySelfComMap[`${item.namespace}@${item.version}`])
        .filter((item) => !ignoreNamespaces.includes(item.namespace)),
    ];

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
              API.Material.getMaterialContent({
                namespace: component.namespace,
                version: component.version,
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

  /**
   * @description 读取模板文件获取需要依赖的本地文件，将本地文件上传到
   */
  private getHtmlDepsAssets = async (templateString: string) => {
    // TODO
    const $ = load(templateString);
    const resourceURLs = [...$("script").map((_, el) => $(el).attr('src'))].concat([...$("link").map((_, el) => $(el).attr('href'))]).filter(url => !!url && url.startsWith('./public'));

    const fileResourceURLs = resourceURLs.map(url => {
      return {
        fileAbsolutePath: path.join(__dirname, './../../assets', url),
        originRelativeUrl: url,
      }
    });

    const existFiles = fileResourceURLs.filter(({ fileAbsolutePath }) => fs.existsSync(fileAbsolutePath)).map(({ fileAbsolutePath, originRelativeUrl }) => {
      const relativePathArray = originRelativeUrl.split('/');
      const path = relativePathArray.slice(0, -1).join('/').replace('./public', '/public');
      const name = relativePathArray.slice(-1)[0];
      
      return {
        content: fs.readFileSync(fileAbsolutePath, 'utf-8'),
        path,
        name
      }
    });

    return existFiles
  }

  private loadAssetFromUrl = async (url: string) => {
    const result = await axios.get(url);
    return result.data
  }

  private DOWNLOAD_TEMP_FOLDER = path.resolve(__dirname, './.download-assets');

  downloadAssetesFromUrl = async (url: string) => {
    const urlObject = new nodeJsUrl.URL(url);
    const assetsPrefixPath = urlObject.pathname.split('/').slice(0, -1).join('/')
    const assetsFolderName = urlObject.pathname.replace('/', '').replace('.html', '').replace(/\//g, '-');

    // 如果压缩包在就不用生成了
    if (fse.existsSync(path.resolve(this.DOWNLOAD_TEMP_FOLDER, `./${assetsFolderName}.zip`))) {
      Logger.info("[download] 已存在" + assetsFolderName + ' 直接返回');
      return path.resolve(this.DOWNLOAD_TEMP_FOLDER, `./${assetsFolderName}.zip`)
    }

    Logger.info(`[download] 获取Html内容 ${url}`);
    const htmlString = await this.loadAssetFromUrl(url);
    
    
    Logger.info(`[download] 获取依赖资源 ${url}`);
    
    const $ = load(htmlString);
    // 获取相对路径的url
    const relativeResourcePaths = [...$("script").map((_, el) => $(el).attr('src'))].concat([...$("link").map((_, el) => $(el).attr('href'))]).filter(url => !!url && url.startsWith('./'))

    // 获取资源内容
    const relativeResources = await Promise.all(relativeResourcePaths.map(async (relativePath) => {
      const urlWithDomain = relativePath.replace('./', `${urlObject.origin}${assetsPrefixPath}/`);
      const content = await this.loadAssetFromUrl(urlWithDomain);
      return {
        content,
        relativePath: relativePath.replace('./', ''),
      }
    }))

    Logger.info(`[download] 获取依赖资源成功 ${url}`);

    const zip = new JSZip();
    
    Logger.info("[download] 写入依赖文件");
    // 写入依赖文件
    for (let index = 0; index < relativeResources.length; index++) {
      const resource = relativeResources[index];
      zip.file(resource.relativePath, resource.content)
    }

    Logger.info("[download] 写入主文件");
    // 写入主文件
    zip.file('index.html', htmlString)
  

    Logger.info("[download] 压缩" + assetsFolderName);
     // 压缩
    const zipResult = await zip.generateAsync({ type: 'nodebuffer' });
    fse.ensureDirSync(this.DOWNLOAD_TEMP_FOLDER)
    fs.writeFileSync(path.resolve(this.DOWNLOAD_TEMP_FOLDER, `./${assetsFolderName}.zip`), zipResult);

    Logger.info("[download] 压缩成功" + assetsFolderName);
    return path.resolve(this.DOWNLOAD_TEMP_FOLDER, `./${assetsFolderName}.zip`)
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
        tracksConfig = {},
        htmlInjects = {},
      } = json.configuration;

      Reflect.deleteProperty(json, "configuration");

      /** 本地测试 根目录 npm run start:nodejs，调平台接口需要起平台（apaas-platform）服务 */

      const themesStyleStr = this._genThemesStyleStr(json);
      
      const appConfig = await getAppConfig();
      const htmlHooks = await this.genHtmlInjects({
        tracksConfig,
        lazyImage: appConfig?.lazyImage,
        htmlInjects,
      });

      // Logger.info('插入代码', headTags)
      // Logger.info('插入代码', appConfig)

      Logger.info("[publish] getLatestPub begin");
      const latestPub = (
        await API.File.getLatestPub({
          fileId,
        })
      )?.[0];
      Logger.info("[publish] getLatestPub ok");
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
        .replace(`-- themes-style --`, themesStyleStr || '')
        .replace(`-- comlib-rt --`, comLibRtScript)
        .replace(`"--projectJson--"`, JSON.stringify(json))
        .replace(`-- metaAppend --`, decodeURIComponent(htmlHooks?.metaAppend || ""))
        .replace(`-- assetsPrepend --`, decodeURIComponent(htmlHooks?.assetsPrepend || ""))
        .replace(`-- assetsAppend --`, decodeURIComponent(htmlHooks?.assetsAppend || ""))
        .replace(`-- bodyPrepend --`, decodeURIComponent(htmlHooks?.bodyPrepend || ""))
        .replace(`-- bodyAppend --`, decodeURIComponent(htmlHooks?.bodyAppend || ""))
        .replace(`"--executeEnv--"`, JSON.stringify(executeEnv))
        .replace(`"--envList--"`, JSON.stringify(envList))
        .replace(
          `"--slot-project-id--"`,
          projectId ? projectId : JSON.stringify(null)
        );
      let publishMaterialInfo;
      const customPublishApi = await getCustomPublishApi();
      Logger.info("[publish] getCustomPublishApi=", customPublishApi);
      let comboScriptText = "";
      /** 生成 combo 组件库代码 */
      if (needCombo) {
        comboScriptText = await this._generateComLibRT(comlibs, json, { fileId, noThrowError: hasOldComLib, targetEnv });
      }

      if (customPublishApi) {
        // TODO
      } else {
        Logger.info("[publish] upload to static server");

        try {
          // 将所有的公共依赖上传到对应位置
          const globalDeps = await this.getHtmlDepsAssets(template);
          await Promise.all(globalDeps.map(({ content, path, name }) => {
            Logger.info(`[publish] 上传依赖文件 name: ${name}, path: ${path}`);
            return API.Upload.staticServer({
              content,
              folderPath: `${folderPath}/${envType || 'prod'}/${path}`,
              fileName: name,
              noHash: true
            })
          }))
        } catch (error) {
          Logger.error(`[publish] 上传公共依赖失败`, error);
          throw new Error(error)
        }
        
        
        // let targetPath = path.resolve(__dirname, "./../../assets/public");
        // Logger.info(`[publish] targetPath: ${targetPath}`);

        // // 读取 targetPath 下的所有文件，可能是文件夹，也可能是文件
        // let resourceURLs = [];
        // const readDir = (targetPath) => {
        //   let files = fs.readdirSync(targetPath);
        //   files.forEach(filename => {
        //     let filePath = `${targetPath}/${filename}`;
        //     let stats = fs.statSync(filePath);
        //     if (stats.isDirectory()) {
        //       readDir(filePath);
        //     } else {
        //       resourceURLs.push(filePath);
        //     }
        //   })
        // }
        // readDir(targetPath);

        // Logger.info(`[publish] resourceURLs: ${JSON.stringify(resourceURLs)}`);

        // // 读取文件内容，组合成 { content, path, name } 的数组
        // let globalDeps = resourceURLs.map(url => {
        //   let content = fs.readFileSync(url, 'utf-8');

        //   // url 是资源的绝对路径，需要去掉 /public 之前的部分
        //   let publicPath = url.split('/assets').slice(-1)[0]; 

        //   return {
        //     content,
        //     path: publicPath.split('/').slice(0, -1).join('/'),
        //     name: url.split('/').slice(-1)[0]
        //   }
        // });

        // await Promise.all(globalDeps.map(({ content, path, name }) => {
        //   Logger.info(`[publish] name: ${name}, path: ${path}`);
        //   return API.Upload.staticServer({
        //     content,
        //     folderPath: `${folderPath}/${envType || 'prod'}/${path}`,
        //     fileName: name,
        //     noHash: true,
        //   })
        // }))
        Logger.info("[publish] 公共依赖上传成功！");

        needCombo &&
          (await API.Upload.staticServer({
            content: comboScriptText,
            folderPath: `${folderPath}/${envType || "prod"}`,
            fileName: comlibRtName,
            noHash: true
          }));

        publishMaterialInfo = await API.Upload.staticServer({
          content: template,
          folderPath: `${folderPath}/${envType || "prod"}`,
          fileName,
          noHash: true
        });

        Logger.info(
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

      Logger.info("[publish] API.File.publish: begin ");
      // const result = await API.File.publish({
      //   userId,
      //   fileId,
      //   extName: "th5-page",
      //   commitInfo,
      //   content: JSON.stringify({ ...publishMaterialInfo, json }),
      //   type: envType,
      // });

      Logger.info("[publish] API.File.publish: ok ");

      // return result;
    } catch (e) {
      Logger.info("th5page publish error", e);
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
        tracksConfig = {},
        htmlInjects = {},
      } = json.configuration;

      Reflect.deleteProperty(json, "configuration");

      /** 本地测试 根目录 npm run start:nodejs，调平台接口需要起平台（apaas-platform）服务 */

      const themesStyleStr = this._genThemesStyleStr(json);
      
      const appConfig = await getAppConfig();
      const htmlHooks = await this.genHtmlInjects({
        tracksConfig,
        lazyImage: appConfig?.lazyImage,
        htmlInjects,
      });

      Logger.info("[publish] getLatestPub begin");
      const latestPub = (
        await API.File.getLatestPub({
          fileId,
        })
      )?.[0];
      Logger.info("[publish] getLatestPub ok");
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
        .replace(`-- themes-style --`, themesStyleStr || '')
        .replace(`-- comlib-rt --`, comLibRtScript)
        .replace(`"--projectJson--"`, JSON.stringify(json))
        .replace(`-- metaAppend --`, decodeURIComponent(htmlHooks?.metaAppend || ""))
        .replace(`-- assetsPrepend --`, decodeURIComponent(htmlHooks?.assetsPrepend || ""))
        .replace(`-- assetsAppend --`, decodeURIComponent(htmlHooks?.assetsAppend || ""))
        .replace(`-- bodyPrepend --`, decodeURIComponent(htmlHooks?.bodyPrepend || ""))
        .replace(`-- bodyAppend --`, decodeURIComponent(htmlHooks?.bodyAppend || ""))
        .replace(`"--executeEnv--"`, JSON.stringify(envType))
        .replace(`"--envList--"`, JSON.stringify(envList))
        .replace(
          `"--slot-project-id--"`,
          projectId ? projectId : JSON.stringify(null)
        );
      let publishMaterialInfo;
      const customPublishApi = await getCustomPublishApi();
      Logger.info("[publish] getCustomPublishApi=", customPublishApi);
      let comboScriptText = "";
      /** 生成 combo 组件库代码 */
      if (needCombo) {
        comboScriptText = await this._generateComLibRT(comlibs, json, {
          fileId,
          noThrowError: hasOldComLib,
          targetEnv,
        });
      }

      if (customPublishApi) {
        // TODO
      } else {
        Logger.info("[publish] upload to static server");

        try {
          // 将所有的公共依赖上传到对应位置
          const globalDeps = await this.getHtmlDepsAssets(template);
          await Promise.all(globalDeps.map(({ content, path, name }) => {
            Logger.info(`[publish] 上传依赖文件 name: ${name}, path: ${path}`);
            return API.Upload.staticServer({
              content,
              folderPath: `${folderPath}/${envType || 'prod'}/${path}`,
              fileName: name,
              noHash: true
            })
          }))
        } catch (error) {
          Logger.error(`[publish] 上传公共依赖失败`, error);
          throw new Error(error)
        }
        
        
        // let targetPath = path.resolve(__dirname, "./../../assets/public");
        // Logger.info(`[publish] targetPath: ${targetPath}`);

        // // 读取 targetPath 下的所有文件，可能是文件夹，也可能是文件
        // let resourceURLs = [];
        // const readDir = (targetPath) => {
        //   let files = fs.readdirSync(targetPath);
        //   files.forEach(filename => {
        //     let filePath = `${targetPath}/${filename}`;
        //     let stats = fs.statSync(filePath);
        //     if (stats.isDirectory()) {
        //       readDir(filePath);
        //     } else {
        //       resourceURLs.push(filePath);
        //     }
        //   })
        // }
        // readDir(targetPath);

        // Logger.info(`[publish] resourceURLs: ${JSON.stringify(resourceURLs)}`);

        // // 读取文件内容，组合成 { content, path, name } 的数组
        // let globalDeps = resourceURLs.map(url => {
        //   let content = fs.readFileSync(url, 'utf-8');

        //   // url 是资源的绝对路径，需要去掉 /public 之前的部分
        //   let publicPath = url.split('/assets').slice(-1)[0]; 

        //   return {
        //     content,
        //     path: publicPath.split('/').slice(0, -1).join('/'),
        //     name: url.split('/').slice(-1)[0]
        //   }
        // });

        // await Promise.all(globalDeps.map(({ content, path, name }) => {
        //   Logger.info(`[publish] name: ${name}, path: ${path}`);
        //   return API.Upload.staticServer({
        //     content,
        //     folderPath: `${folderPath}/${envType || 'prod'}/${path}`,
        //     fileName: name,
        //     noHash: true,
        //   })
        // }))
        Logger.info("[publish] 公共依赖上传成功！");

        needCombo &&
          (await API.Upload.staticServer({
            content: comboScriptText,
            folderPath: `${folderPath}/${envType || "prod"}`,
            fileName: comlibRtName,
            noHash: true
          }));

        publishMaterialInfo = await API.Upload.staticServer({
          content: template,
          folderPath: `${folderPath}/${envType || "prod"}`,
          fileName,
          noHash: true
        });

        Logger.info(
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

      Logger.info("[publish] API.File.publish: begin ");
      const result = await API.File.publish({
        userId,
        fileId,
        extName: "th5-page",
        commitInfo,
        content: JSON.stringify({ ...publishMaterialInfo, json }),
        type: envType,
      });

      Logger.info("[publish] API.File.publish: ok ");

      return result;
    } catch (e) {
      Logger.info("th5page publish error", e);
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

  private genHtmlInjects({
    tracksConfig,
    htmlInjects,
    lazyImage = false,
  }: {
    tracksConfig?: any,
    htmlInjects: Hooks,
    lazyImage?: boolean
  }) {
    const hooks = htmlInjects ?? {} as Hooks

    hooks.assetsAppend = hooks.assetsAppend || '';

    // 懒加载相关
    const mutationObserver = '';
    hooks.assetsAppend += `${lazyImage ? mutationObserver : ''}`;

    //埋点相关
    if (tracksConfig?.scriptContent) {
      hooks.assetsAppend += `<script>${tracksConfig?.scriptContent}</script>`
    }
    if (tracksConfig?.pageHooks?.initial) {
      hooks.assetsAppend += (tracksConfig?.pageHooks?.initial || '');
    }

    return hooks
  }


  // private getHeadTagFromConfig(appConfig, tracksConfig) {
  //   const { headTags, lazyImage } = appConfig ?? {};

  //   const mutationObserver = '<script data-must="1" crossorigin="anonymous" src="//f2.eckwai.com/udata/pkg/eshop/fangzhou/res/mutationobserver.min.js"></script>'

  //   let scriptsContent = `${headTags ?? ''}${lazyImage ? mutationObserver : ''}`;


  //   if (tracksConfig?.scriptContent) {
  //     scriptsContent += `<script>${tracksConfig?.scriptContent}</script>`
  //   }

  //   if (tracksConfig?.pageHooks?.initial) {
  //     scriptsContent+=tracksConfig?.pageHooks?.initial;
  //   }

  //   return scriptsContent
  // }
}

function getSpmFuncsFromConfig (spmDefinitions, spmExtraParams) {

  const spmDefinitionsWithoutFunction = {};
  Object.keys(spmDefinitions ?? {}).forEach(namespace => {
    const points = spmDefinitions[namespace];
    spmDefinitionsWithoutFunction[namespace] = (points ?? []).map(({ func, ...p }) => p);
  })

  let scripts = `
    var t = {};
    var p = {};
  `;

  const backupFunc = `() => console.warn("没有找到当前组件的埋点定义");`

  let comItem = '';
  Object.keys(spmDefinitions ?? {}).forEach(namespace => {
    comItem+= `t["${namespace}"] = {};`
    const spmDefinition = spmDefinitions[namespace];
    spmDefinition.forEach(spm => {
      if (spm.id) {
        comItem+= `if(!t["${namespace}"]["${spm.id}"]) {t["${namespace}"]["${spm.id}"] = {};};`
        comItem+=`
t["${namespace}"]["${spm.id}"]["${spm.type ?? 'CUSTOM'}"] = (common, extra) => {
  var func = ${spm?.func ?? backupFunc};
  func(common, extra);
};`
      }
    })
  })

  Object.keys(spmExtraParams ?? {}).forEach(comId => {
    comItem+= `p["${comId}"] = {};`

    const spms = spmExtraParams[comId]?.spms ?? [];

    spms.forEach(spm => {
      if (spm.id && spm.params) {
        comItem+= `if(!p["${comId}"]["${spm.id}"]) {p["${comId}"]["${spm.id}"] = {};};`
        comItem+=`
p["${comId}"]["${spm.id}"]["${spm.type ?? 'CUSTOM'}"] = ${JSON.stringify(spm.params)};`
      }
    })
  })

  scripts+=comItem

  return scripts+= 'window.__mybricks_collect_function_defines__ = t;window.__mybricks_collect_extra_params__ = p;'
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
    Logger.info("getAppConfig error", e);
  }

  console.log('options', options, config)
  return config;
};

// 使用平台设置的集成接口，不使用协作组的
const getCustomPublishApi = async () => {
  const { publishApiConfig = {} } = await getAppConfig();
  const { publishApi } = publishApiConfig;
  if (!publishApi) {
    Logger.info(`未配置发布集成接口`);
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
