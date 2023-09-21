import { shapeUrlByEnv } from './../../utils/shapeUrlByEnv'
import { getRenderEnv } from './../../utils/getRenderEnv'

const projectJson = '--projectJson--' //replace it
const projectId = '--slot-project-id--' //replace it
const executeEnv = '--executeEnv--' //replace it
const envList = "--envList--" //replace it


function cssVariable(dumpJson) {
  const themes = dumpJson?.plugins?.['@mybricks/plugins/theme/use']?.themes
  if (Array.isArray(themes)) {
    themes.forEach(({ namespace, content }) => {
      const variables = content?.variables

      if (Array.isArray(variables)) {
        const style = document.createElement('style')
        style.id = namespace
        let innerHTML = ''

        variables.forEach(({ configs }) => {
          if (Array.isArray(configs)) {
            configs.forEach(({ key, value }) => {
              innerHTML = innerHTML + `${key}: ${value};\n`
            })
          }
        })

        style.innerHTML = `:root {\n${innerHTML}}`
        document.body.appendChild(style)
      }
    })
  }
}

cssVariable(projectJson)

const getComs = () => {
  const comDefs = {}
  const regAry = (comAray) => {
    comAray.forEach((comDef) => {
      if (comDef.comAray) {
        regAry(comDef.comAray)
      } else {
        comDefs[`${comDef.namespace}-${comDef.version}`] = comDef
      }
    })
  }
  // Object.keys(window['CloudComponentDependentComponents']).forEach((key) => {
  //   const [namespace, version] = key.split('@');

  //   comDefs[`${namespace}-${version}`] =
  //     window['CloudComponentDependentComponents'][key];
  // });
  const comlibs = [
    ...(window['__comlibs_edit_'] || []),
    ...(window['__comlibs_rt_'] || []),
  ]
  comlibs.forEach((lib) => {
    const comAray = lib.comAray
    if (comAray && Array.isArray(comAray)) {
      regAry(comAray)
    }
  })
  return comDefs
}

function render() {
  if (window._mybricks_render_web && window.ReactDOM) {
    const renderUI = window._mybricks_render_web.render;

    const dom = renderUI(projectJson, {
      env: {
        ...getRenderEnv(),
        projectId,
        callConnector(connector, params) {
          const plugin = window[connector.connectorName] || window['@mybricks/plugins/service'];

          if (plugin) {
            /** 兼容云组件，云组件会自带 script */
            const curConnector = connector.script
              ? connector
              : (projectJson.plugins[connector.connectorName] || []).find(con => con.id === connector.id);

            return curConnector ? plugin.call({ ...connector, ...curConnector, executeEnv }, params, {
              // 只在官方插件上做环境域名处理
              before: connector.connectorName === '@mybricks/plugins/service'
                ? options => {
                  return {
                    ...options,
                    url: shapeUrlByEnv(envList, executeEnv, options.url)
                  }
                } : undefined
            }) : Promise.reject('找不到对应连接器 Script 执行脚本.');
          } else {
            return Promise.reject('错误的连接器类型.');
          }
        },
        renderCom(json, opts, coms) {
          return renderUI(json, {
            comDefs: { ...getComs(), ...coms },
            // observable: window['rxui'].observable,
            ...(opts || {}),
          })
        },
        createPortal(children) {
          return window.ReactDOM.createPortal(children, document.body);
        },
      },
    });

    window.ReactDOM.render(
      dom,
      document.querySelector('#root')
    )
  } else {

  }
}

render();
