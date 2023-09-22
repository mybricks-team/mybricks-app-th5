

import { getComs } from './get-coms'

interface RenderParams {
  /** ToJson */
  json: string
  /** options */
  opts: {
    env: any
  }
}

export const renderVue2 = (param: RenderParams, ele) => {
  const renderUI = window?.['mybricks-render-vue2']?.render;
  if (!renderUI) {
    console.error('找不到Vue2页面渲染器')
  }

  const { json, opts } = param

  renderUI({ json, opts }, ele);
}

export const isVue2Env = () => {
  return !!(window?.Vue || window?.vue);
}