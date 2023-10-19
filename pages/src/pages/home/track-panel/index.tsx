import * as React from 'react';
import { traverseAllComponents } from './utils'
import { default as TrackPanelComParams } from './com-params'

type SpmParams = Record<string, any>

interface SPMExtraParams {
  [key: string]: {
    namespace: string,
    spms?: SpmParams
  }
}

class TrackModel {

  paramsState: SPMExtraParams = {}

  init = (params: SPMExtraParams) => {
    this.paramsState = params ?? {}
  }

  saveSpmExtraParamsByComId = (comId: string, namespace, spmParams: SpmParams) => {
    this.paramsState[comId] = {
      namespace,
      spms: spmParams
    }
  }

  getSpmExtraParams = ():SPMExtraParams => {
    return this.paramsState
  }


  getTracksConfig = (toJSON, allComsJson) => {
    // const allComponents = traverseAllComponents(allComsJson);
    // const spmExtraParams = {};
    // allComponents.forEach(com => {
    //   const { model, id, title } = com
    //   const { spm } = model
    //   if (Array.isArray(spm)) {
    //     spmExtraParams[id] = spm
    //   }
    // })

    const pluginToJson = toJSON.plugins?.['@mybricks/plugins/trackPoint'] ?? {};


    // return MockTrackJson

    return {
      ...pluginToJson,
      spmExtraParams: this.paramsState
    }
  }

  /** 引用类型删除toJson中的多余数据 */
  deleteTracksConfigFromToJson = (toJSON) => {
    if (toJSON?.plugins?.['@mybricks/plugins/trackPoint']) {
      delete toJSON.plugins?.['@mybricks/plugins/trackPoint']
    }
  }


  panelAppender = (type, model, ...p) => {
    if (type === 'com') {
  
      const namespace = model.def?.namespace;
      // const editorsSpms = model.def?.editors?.spm ?? [];
      const editorsSpms = [
        {
          id: 'button',
          type: ['CLK', 'EXP'],
          title: '按钮曝光',
        },
        {
          id: 'ccc',
          title: '自定义事件',
        }
      ]
  
      const spmExtraParams = this.getSpmExtraParams();

      const extraParams = spmExtraParams?.[model.id]?.spms ?? [];
  
      const hasSpmDefines = !!(Array.isArray(editorsSpms) && editorsSpms?.length);
  
      const handleChange = defines => {
        this.saveSpmExtraParamsByComId(model.id, namespace, defines)
      }
      
  
      return hasSpmDefines ? {
        title: '埋点',
        render: () => <TrackPanelComParams initValues={extraParams} configs={editorsSpms} onChange={handleChange} />
      } : null
    }
  }
}


export const trackModel = new TrackModel();


var MockTrackJson = {
  "pageEnv": {
      "pageCode": "我是pageCode"
  },
  "pageHooks": {
      "initial": "<script>\n  window.aplus = {\n    record: (params) => {\n      console.warn('SDK携带的环境参数', spm_context?.pageCode);\n      console.warn('我是SDK上报的参数', params);\n    }\n  }\n</script>"
  },
  "spmDefinitions": {
      "mybricks.normal-vue.button": [
        {
          "id": "button",
          "type": "CLK",
          "func": "({ title }, extra) => { aplus.record({ title, extra }) }"
        },
        {
          "id": "button",
          "type": "EXP",
          "func": "({ title }, extra) => { aplus.record({ title, extra }) }"
        },
        {
          "id": "action",
          "func": "({ title }, extra) => { aplus.record({ title, extra }) }"
        }
      ]
  },
  "spmExtraParams": {
    "u_tCK81": {
        "namespace": "mybricks.normal-vue.button",
        "spms": [
          {
            id: "button",
            params: {
              "hhhhhh": "我是测试参数哈哈哈哈"
            }
          }
        ]
    },
    "u_7Ipt_": {
        "namespace": "mybricks.normal-vue.button",
        "spms": [],
    }
  }
}