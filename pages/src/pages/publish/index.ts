import { shapeUrlByEnv } from "./../../utils/shapeUrlByEnv";
import { getRenderEnv } from "./../../utils/getRenderEnv";
import { renderReact, isReactEnv } from "./render-react";
import { renderVue2, isVue2Env } from "./render-vue2";
import { USE_CUSTOM_HOST } from './../../constants'

import { tracker } from './track';

const projectJson = "--projectJson--"; //replace it
const projectId = "--slot-project-id--"; //replace it
const executeEnv = "--executeEnv--"; //replace it
const envList = "--envList--"; //replace it

function cssVariable(dumpJson) {
  const themes = dumpJson?.plugins?.["@mybricks/plugins/theme/use"]?.themes;
  if (Array.isArray(themes)) {
    themes.forEach(({ namespace, content }) => {
      const variables = content?.variables;

      if (Array.isArray(variables)) {
        const style = document.createElement("style");
        style.id = namespace;
        let innerHTML = "";

        variables.forEach(({ configs }) => {
          if (Array.isArray(configs)) {
            configs.forEach(({ key, value }) => {
              innerHTML = innerHTML + `${key}: ${value};\n`;
            });
          }
        });

        style.innerHTML = `:root {\n${innerHTML}}`;
        document.body.appendChild(style);
      }
    });
  }
}

cssVariable(projectJson);

const env = {
  ...getRenderEnv(),
  projectId,
  // callConnector(connector, params) {
  //   const plugin =
  //     window[connector.connectorName] || window["@mybricks/plugins/service"];

  //   if (plugin) {
  //     /** 兼容云组件，云组件会自带 script */
  //     const curConnector = connector.script
  //       ? connector
  //       : (projectJson.plugins[connector.connectorName] || []).find(
  //           (con) => con.id === connector.id
  //         );

  //     return curConnector
  //       ? plugin.call({ ...connector, ...curConnector, executeEnv }, params, {
  //           // 只在官方插件上做环境域名处理
  //           before:
  //             connector.connectorName === "@mybricks/plugins/service"
  //               ? (options) => {
  //                   return {
  //                     ...options,
  //                     url: shapeUrlByEnv(envList, executeEnv, options.url),
  //                   };
  //                 }
  //               : undefined,
  //         })
  //       : Promise.reject("找不到对应连接器 Script 执行脚本.");
  //   } else {
  //     return Promise.reject("错误的连接器类型.");
  //   }
  // },
  callConnector(connector, params) {
    const plugin =
      window[connector.connectorName] ||
      window["@mybricks/plugins/service"];
    //@ts-ignore
    const MYBRICKS_HOST = window?.MYBRICKS_HOST;
    //@ts-ignore
    if (executeEnv === USE_CUSTOM_HOST) {
      if (typeof MYBRICKS_HOST === "undefined") {
        console.error(`没有设置window.MYBRICKS_HOST变量`);
        return;
      } else if (!MYBRICKS_HOST.default) {
        console.error(`没有设置window.MYBRICKS_HOST.default`);
        return;
      }
    }
    let newParams = params;
    //@ts-ignore
    if (executeEnv === USE_CUSTOM_HOST) {
      if (params instanceof FormData) {
        newParams.append("MYBRICKS_HOST", JSON.stringify(MYBRICKS_HOST));
      } else {
        newParams = { ...params, MYBRICKS_HOST: { ...MYBRICKS_HOST } };
      }
    }
    if (plugin) {
      /** 兼容云组件，云组件会自带 script */
      const curConnector = connector.script
        ? connector
        : (projectJson.plugins[connector.connectorName] || []).find(
            (con) => con.id === connector.id
          );

      return curConnector
        ? plugin.call({ ...connector, ...curConnector }, newParams, {
            before: (options) => {
              return {
                ...options,
                url: shapeUrlByEnv(
                  envList,
                  executeEnv,
                  options.url,
                  MYBRICKS_HOST
                ),
              };
            },
          })
        : Promise.reject("找不到对应连接器 Script 执行脚本.");
    } else {
      return Promise.reject("错误的连接器类型.");
    }
  },
  // 自定义方法

};

function render() {
  switch (true) {
    case isReactEnv(): {
      renderReact(
        {
          json: projectJson,
          opts: {
            env: env,
          },
        },
        "#root"
      );

      break;
    }
    case isVue2Env(): {
      renderVue2(
        {
          json: projectJson,
          opts: {
            env: env,
            registSpm: tracker.registSpm,
          },
        },
        "#root"
      );
      break;
    }
    default:
      console.error("没有找到渲染器，请检查");
      break;
  }
}

const injectBodyBackground = (projectJson, root) => {
  if (Array.isArray(projectJson?.scenes)) {
    const backgroundColor = projectJson?.scenes?.[0]?.slot?.style?.backgroundColor;

    const style = document.createElement("style");
    style.innerHTML = `${root} {
      background-color: ${backgroundColor ?? '#ffffff'}
    }
    `;
    document.body.appendChild(style);
  }
}

injectBodyBackground(projectJson, 'body');
render();


// // render();
// if (isMobile() || location.search.indexOf("isPc=1") > -1) {
//   injectBodyBackground(projectJson, 'body');
//   render();
// } else {
//   injectBodyBackground(projectJson, 'iframe');
//   document.querySelector("#root").remove();

//   let iframe = document.createElement("iframe");
//   iframe.style.borderWidth = "0";
//   iframe.style.width = "100%";
//   iframe.style.maxWidth = "640px";
//   iframe.style.height = "100%";
//   iframe.style.boxShadow = "0 2px 6px #aaa";
//   iframe.src = location.href + `${location.search ? "&" : "?"}isPc=1`;
//   console.warn(iframe);

//   //
//   let Qrcode = document.createElement("div");
//   Qrcode.style.width = "100%";
//   Qrcode.style.maxWidth = "280px";
//   Qrcode.style.display = "flex";
//   Qrcode.style.flexDirection = "column";
//   Qrcode.style.alignItems = "center";
//   Qrcode.style.marginTop = "60px";
//   Qrcode.style.marginLeft = "10px";

//   let QrcodeCanvas = document.createElement("canvas");
//   QrcodeCanvas.id = "preview-qrcode";
//   QrcodeCanvas.style.width = "150px";
//   QrcodeCanvas.style.height = "150px";

//   Qrcode.appendChild(QrcodeCanvas);

//   let Container = document.createElement("div");
//   Container.style.display = "flex";
//   Container.style.maxWidth = "900px";
//   Container.style.width = "100%";
//   Container.style.height = "100vh";
//   Container.style.position = "absolute";
//   Container.style.left = "50%";
//   Container.style.transform = "translateX(-50%)";
//   Container.style.marginLeft = "140px";

//   Container.appendChild(iframe);
//   Container.appendChild(Qrcode);

//   document.body.appendChild(Container);

//   let script = document.createElement("script");
//   script.src = "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/qrcode/qrcode.js";
//   script.onload = () => {
//     window.QRCode.toCanvas(
//       document.getElementById("preview-qrcode"),
//       `${location.href}`,
//       {
//         height: 150,
//         width: 150,
//       },
//       function (error) {
//         if (error) console.error(error);
//       }
//     );
//   };
//   document.body.appendChild(script);

//   // window.ReactDOM.render(
//   //   window.React.createElement(Container, null),
//   //   document.querySelector("#root")
//   // );
// }

// // function isMobile() {
// //   const ua = navigator.userAgent;
// //   return (
// //     /(iPhone|iPod|iPad|Android|ios)/i.test(ua) ||
// //     /AppleWebKit.*Mobile.*/i.test(ua)
// //   );
// // }
