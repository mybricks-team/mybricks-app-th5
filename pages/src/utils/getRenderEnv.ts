import { events } from './render-events';

export const getRenderEnv = () => {
  return {
    pxToVw: {},
    events,
    pageType: 'H5',
    silent: true,
    showErrorNotification: false,
    canvasElement: document.body,
    }
}