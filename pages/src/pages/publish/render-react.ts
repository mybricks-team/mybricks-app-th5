
import { getComs } from './get-coms'
interface RenderParams {
  /** ToJson */
  json: string
  /** options */
  opts: {
    env: any
  }
}

export const renderReact = (param: RenderParams, ele) => {
  const renderUI = window?._mybricks_render_web?.render;
  if (!renderUI) {
    console.error('找不到React页面渲染器')
  }

  const { json, opts } = param

  const env = {
    ...(opts?.env ?? {}),
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
  }

  const dom = renderUI(json, {
    env: env,
  });

  window.ReactDOM.render(
    dom,
    document.querySelector(ele)
  )
}

export const isReactEnv = () => {
  return !!(window?.ReactDOM);
}