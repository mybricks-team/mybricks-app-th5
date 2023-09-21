import { H5_BASIC_COM_LIB } from './../../constants'
import { getQueryString, shapeUrlByEnv } from './../../utils'
import { PreviewStorage } from './../../utils/previewStorage'
import { getRenderEnv } from './../../utils/getRenderEnv'

const fileId = getQueryString('fileId')

const previewStorage = new PreviewStorage({ fileId })

let { dumpJson, comlibs, hasPermissionFn, executeEnv, appConfig, envList } = previewStorage.getPreviewPageData()

// const promiseCustomConnector = new Promise((res, rej) => {
//   const { plugins = [] } = appConfig
//   const connectorPlugin = plugins.find(item => item?.type === 'connector')
//   if (!connectorPlugin) {
//     return res(false)
//   }
//   if (!connectorPlugin.runtimeUrl) {
//     return res(false)
//   }
//   const script = document.createElement('script')
//   script.src = connectorPlugin.runtimeUrl
//   script.onload = () => {
//     res(true)
//   }
//   script.onerror = () => {
//     return res(false)
//   }

//   document.body.appendChild(script)
// })

if (!dumpJson) {
  throw new Error('数据错误：项目数据缺失')
}

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

cssVariable(dumpJson)

if (!comlibs) {
  console.warn('数据错误: 组件库缺失')
  comlibs = [H5_BASIC_COM_LIB.rtJs]
}

const requireScript = (src) => {
  var script = document.createElement('script')
  script.setAttribute('src', src)

  return new Promise((resolve, reject) => {
    script.onload = resolve
    document.body.appendChild(script)
  })
}

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
  //   const [namespace, version] = key.split('@')

  //   comDefs[`${namespace}-${version}`] =
  //     window['CloudComponentDependentComponents'][key]
  // })
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

    const dom = renderUI(dumpJson, {
      env: {
        ...getRenderEnv(),
        async callConnector(connector, params) {
          // await promiseCustomConnector
          const plugin = window[connector.connectorName] || window['@mybricks/plugins/service'];
          if (plugin) {
            /** 兼容云组件，云组件会自带 script */
            const curConnector = connector.script
              ? connector
              : (dumpJson.plugins[connector.connectorName] || []).find(con => con.id === connector.id);
      
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

if (comlibs && Array.isArray(comlibs)) {
  Promise.all(comlibs.map((t) => requireScript(t))).then(() => {
    render()
  })
}
