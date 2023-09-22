import { shapeUrlByEnv } from './../../utils/shapeUrlByEnv'
import { getRenderEnv } from './../../utils/getRenderEnv'
import { renderReact, isReactEnv } from './render-react';
import { renderVue2, isVue2Env } from './render-vue2';

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

const env = {
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
}

function render() {

  switch (true) {
    case isReactEnv(): {
      renderReact({
        json: projectJson,
        opts: {
          env: env,
        }
      }, '#root')

      break;
    }
    case isVue2Env(): {
      renderVue2({
        json: projectJson,
        opts: {
          env: env,
        }
      }, '#root');
      break;
    }
    default:
      console.error('没有找到渲染器，请检查')
      break;
  }
}

render();
