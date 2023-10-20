import 'intersection-observer'

type ComNamespace = string
type ComId = string
type SPMId = string
type SPMType = 'CLK' | 'EXP' | 'CUSTOM'

declare global {
  interface Window {
    // mybrikcs上报能力
    // __mybricks_spms_collect__: Record<string, (...p) => void>;
    // 埋点方案定义的函数Map
    __mybricks_collect_function_defines__: Record<ComNamespace, Record<SPMId, Record<SPMType, Record<string, any>>>>;
    // 搭建时的额外参数Map
    __mybricks_collect_extra_params__: Record<ComId,  Record<SPMId, Record<SPMType, Record<string, any>>>>
  }
}

const requestIdleCallback =
  window.requestIdleCallback ||
  function (callback, options?) {
    var options = options || {};
    var relaxation = 1;
    var timeout = options.timeout || relaxation;
    var start = Date.now();
    return setTimeout(function () {
      callback({
        get didTimeout() {
          return options.timeout
            ? false
            : Date.now() - start - relaxation > timeout;
        },
        timeRemaining: function () {
          return Math.max(0, relaxation + (Date.now() - start));
        }
      });
    }, relaxation);
  };

const SPM_ATTR = 'data-spm';

class MybricksLogger {
  intersectionObserver: IntersectionObserver
  intersectionObserverMap: WeakMap<Element, any> = new WeakMap()
  mutationObserver: MutationObserver
  

  constructor() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
          this.intersectionObserverMap.get(entry.target)?.();
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.5, 1]
    });

    const isInView = (ele, callback) => {
      if (this.intersectionObserverMap.has(ele)) {
        return
      }
      this.intersectionObserver.observe(ele)
      this.intersectionObserverMap.set(ele, callback)
    }


    this.mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(`[${SPM_ATTR}]`).forEach(ele => {
        let clkConfig, expConfig;
        try {
          const configs = JSON.parse(ele.getAttribute(SPM_ATTR));
          clkConfig = configs.find(t => t.type === 'CLK');
          expConfig = configs.find(t => t.type === 'EXP');
          // if (!expConfig?.func) {
          //   expConfig = null
          // }
          // if (clkConfig?.func) {
          //   clkConfig = null
          // }
        } catch (error) {
          
        }

        if (expConfig) {
          // 检测是否进入视口上报
          isInView(ele, () => {
            requestIdleCallback(() => {
              this.recordExposeTracks(ele, expConfig)
            })
          })

          // 立即上报
          // requestIdleCallback(() => {
          //   this.recordExposeTracks(ele)
          // })
        } if (clkConfig) {
          requestIdleCallback(() => {
            this.recordClickTracks(ele, clkConfig)
          })
        }
      })
    })

    this.mutationObserver.observe(document.body, {
      attributeFilter: [SPM_ATTR],
      attributes: true,
      childList: true,
      subtree: true,
    })
  }

  private cacheDomExposeMap: WeakMap<Element, string> = new WeakMap()

  recordExposeTracks = (ele: Element, config) => {
    const { comId, spmId, type, params } = config ?? {};
    if (!ele['__expTracked__']) {

      this.collectFunctions[comId](spmId, type, params)

      const key = Math.random();
      ele['__expTracked__'] = key;
      this.cacheDomExposeMap.set(ele, JSON.stringify(params))
    } else {
      if (this.cacheDomExposeMap.get(ele) !== JSON.stringify(params)) {

        this.collectFunctions[comId](spmId, type, params)
      }
    }
  }

  recordClickTracks = (ele: Element, config) => {
    const { comId, spmId, type, params } = config ?? {};
    if (ele['__clkBinded__']) {
      return
    }

    ele.addEventListener('click', () => {
      this.collectFunctions[comId](spmId, type, params)
    }, true)

    ele['__clkBinded__'] = true
  }
  
  cachedSpmDefinitionsMap = {}
  /**
   * @description 需要缓存Map，渲染同一个组件的时候不需要重新获取
   * @param comSpmMap 
   */
  getSpmDefinitionsFromComSpmMap = (namespace, spmId) => {
    const comSpmMap = window.__mybricks_collect_function_defines__?.[namespace] ?? {};
    if (!this.cachedSpmDefinitionsMap[namespace]) {
      this.cachedSpmDefinitionsMap[namespace] = {};
    }

    if (this.cachedSpmDefinitionsMap?.[namespace]?.[spmId]) {
      return this.cachedSpmDefinitionsMap?.[namespace]?.[spmId]
    }

    Object.keys(comSpmMap ?? {}).forEach(_spmId => {
      this.cachedSpmDefinitionsMap[namespace][_spmId] = Object.keys(comSpmMap[_spmId]).map(type => {
        return {
          spmId: _spmId,
          type,
        }
      })
    })

    return this.cachedSpmDefinitionsMap?.[namespace]?.[spmId]
  }

  /** 从全局获取定义好的上报函数，不管自动手动都通过这里上报 */
  collectFunctions: Record<string, (spmId, evtType, params) => any> = {}

  /** 注入到renderWeb里每个组件渲染时会调用 */
  registSpm = (comId: string, { title, namespace }) => {
    // 收集每个组件每个点位的上报函数
    this.collectFunctions[comId] = (spmId, evtType = 'CUSTOM', params = {}) => {
      const extraParams = window.__mybricks_collect_extra_params__?.[comId]?.[spmId]?.[evtType] ?? {};
      window.__mybricks_collect_function_defines__?.[namespace]?.[spmId]?.[evtType]?.({ title }, Object.assign(params, extraParams))
    }

    const spmInstance = (spmId, extra) => {
      this.collectFunctions[comId](spmId, 'CUSTOM', extra)
    }
  
    spmInstance.auto = (spmId, extra) => {
      const spmString = (params) => {
        const spmParams = this.getSpmDefinitionsFromComSpmMap(namespace, spmId);
        return JSON.stringify((spmParams ?? []).map(p => ({
          ...p,
          comId,
          params: params ?? {}
        })))
      }
      return spmString(extra)
    }

    return spmInstance
  }

}

export const tracker = new MybricksLogger();

function warn (id, point, message) {
  console.warn(`[埋点]组件id为${id} point为${point}的点位${message}`)
}
