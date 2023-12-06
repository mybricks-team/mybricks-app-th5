var De = Object.defineProperty;
var Ke = (o, e, t) => e in o ? De(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var Ve = (o, e, t) => (Ke(o, typeof e != "symbol" ? e + "" : e, t), t);
import Vue from "vue";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var fn = { exports: {} };
(function(module, exports) {
  (function(o, e) {
    module.exports = e();
  })(commonjsGlobal, () => (() => {
    var __webpack_modules__ = { 356: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      function __WEBPACK_DEFAULT_EXPORT__({ data, outputs, inputs, onError }) {
        inputs.from((val, relOutpus) => {
          var _a;
          const script = (_a = data.exchange) === null || _a === void 0 ? void 0 : _a.script;
          if (script) {
            let fn, returnVal, isOk;
            try {
              eval(`fn = ${script}`), returnVal = fn(val), isOk = !0;
            } catch (o) {
              console.error(o), onError(`数据转换错误:${o.message}`, o);
            }
            isOk && outputs.to(returnVal);
          } else
            onError("未配置转换规则");
        });
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
    } }, __webpack_module_cache__ = {};
    function __webpack_require__(o) {
      var e = __webpack_module_cache__[o];
      if (e !== void 0)
        return e.exports;
      var t = __webpack_module_cache__[o] = { exports: {} };
      return __webpack_modules__[o](t, t.exports, __webpack_require__), t.exports;
    }
    __webpack_require__.d = (o, e) => {
      for (var t in e)
        __webpack_require__.o(e, t) && !__webpack_require__.o(o, t) && Object.defineProperty(o, t, { enumerable: !0, get: e[t] });
    }, __webpack_require__.o = (o, e) => Object.prototype.hasOwnProperty.call(o, e), __webpack_require__.r = (o) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
    };
    var __webpack_exports__ = {};
    return (() => {
      __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => d, getCom: () => x });
      const o = JSON.parse('{"title":"Fn计算","namespace":"mybricks.core-comlib.fn","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"Fn计算","icon":"./icon.png","runtime":"./Fn.tsx","rtType":"js","visibility":false}'), e = JSON.parse('{"visibility":false,"title":"变量","namespace":"mybricks.core-comlib.var","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"变量","icon":"./icon.png","data":"./data.json","runtime":"./Var.tsx","editors":"./editors.tsx","rtType":"js","inputs":[{"id":"get","title":"读取","schema":{"type":"any"},"rels":["return"]},{"id":"set","title":"赋值","schema":{"type":"follow"},"rels":["return"]},{"id":"reset","title":"重置","schema":{"type":"any"}}],"outputs":[{"id":"return","title":"完成","schema":{"type":"unknown"}},{"id":"changed","title":"当值发生变化","schema":{"type":"unknown"}}]}');
      function t(u) {
        if (u && typeof u == "object")
          try {
            return u instanceof FormData ? u : JSON.parse(JSON.stringify(u));
          } catch {
            return u;
          }
        return u;
      }
      const n = JSON.parse('{"title":"类型转换","visibility":false,"namespace":"mybricks.core-comlib.type-change","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"类型转换","icon":"./icon.png","runtime":"./rt.tsx","editors":"./editors.tsx","rtType":"js","inputs":[{"id":"from","title":"从","schema":{"type":"follow"},"rels":["to"]}],"outputs":[{"id":"to","title":"到","schema":{"type":"follow"},"conMax":1,"editable":true}]}');
      var s = __webpack_require__(356);
      const i = JSON.parse('{"deprecated":true,"visibility":false,"title":"连接器","namespace":"mybricks.core-comlib.connector","author":"MyBricks","author_name":"MyBricks","version":"1.0.0","description":"连接器","runtime":"./runtime.ts","editors":"./editors.tsx","icon":"./icon.svg","rtType":"js-autorun","inputs":[{"id":"call","rels":["then","catch"],"title":"调用","schema":{"type":"object"}}],"outputs":[{"id":"then","title":"结果","schema":{"type":"unknown"}},{"id":"catch","title":"发生错误","schema":{"type":"string"}}]}');
      function c({ env: u, data: a, outputs: j, onError: S }, f = {}) {
        if (a.connector)
          try {
            u.callConnector(a.connector, f, a.connectorConfig).then((w) => {
              j.then(w);
            }).catch((w) => {
              j.catch(w);
            });
          } catch (w) {
            console.error(w), j.catch(`执行错误 ${w.message || w}`);
          }
        else
          j.catch("没有选择接口");
      }
      const _ = JSON.parse('{"visibility":false,"title":"作用域输入","namespace":"mybricks.core-comlib.frame-input","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"作用域输入","rtType":"js","runtime":"./runtime.ts","editors":"./editor.tsx","inputs":[{"id":"getCurValue","title":"获取","schema":{"type":"any"},"rels":["return"]}],"outputs":[{"id":"return","title":"结果","schema":{"type":"follow"}}]}'), y = JSON.parse('{"visibility":false,"title":"打开对话框","namespace":"mybricks.core-comlib.scenes","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"切换场景","icon":"./icon.png","runtime":"./runtime.ts","data":"./data.json","rtType":"js","inputs":[{"id":"open","title":"打开","schema":{"type":"any"}}]}'), p = JSON.parse('{"title":"模块","namespace":"mybricks.core-comlib.module","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"模块","icon":"./icon.png","data":"./data.json","runtime":"./runtime.tsx","editors":"./editors.ts"}'), l = { id: "mybricks-core-comlib", title: "Mybrics核心组件库", author: "CheMingjun", icon: "", version: "1.0.1", comAray: [g({ comDef: o, rt: function({ inputs: u, outputs: a }) {
      } }), g({ comDef: e, rt: function({ env: u, data: a, outputs: j, inputs: S, _notifyBindings: f }) {
        S.get((w, F) => {
          const O = t(a.val !== void 0 ? a.val : a.initValue);
          F.return(O);
        }), S.set((w, F) => {
          a.val = w;
          const O = t(w);
          j.changed(O, !0), f(O), F.return(O);
        }), S.reset(() => {
          const w = a.initValue;
          a.val = w;
          const F = t(w);
          j.changed(F, !0), f(F);
        });
      } }), g({ comDef: n, rt: s.Z }), g({ comDef: i, rt: function({ env: u, data: a, inputs: j, outputs: S, onError: f }) {
        u.runtime && (a.immediate ? c({ env: u, data: a, outputs: S }) : j.call((w) => {
          c({ env: u, data: a, outputs: S, onError: f }, w);
        }));
      } }), g({ comDef: _, rt: function({ env: u, data: a, inputs: j, outputs: S }) {
        u.runtime && j.getCurValue((f, w) => {
          w.return(f);
        });
      } }), g({ comDef: y, rt: function({ env: u, data: a, inputs: j, _inputs: S, _inputsCallable: f }) {
        j.open((w) => {
          u.canvas.open(a._sceneId, w, a._sceneShowType === "popup" ? null : a.openType), f._open(w);
        });
      } }), g({ comDef: p, rt: function({ env: u, data: a, inputs: j, outputs: S }) {
        const f = u.getModuleJSON(a.definedId);
        return u.renderModule(f, { ref(w) {
          const { inputs: F, outputs: O } = f;
          F.forEach(({ id: D }) => {
            j[D]((B) => {
              w.inputs[D](B);
            });
          }), O.forEach(({ id: D }) => {
            w.outputs(D, S[D]);
          });
          const G = a.configs;
          for (let D in G)
            w.inputs[D](G[D]);
          w.run();
        }, disableAutoRun: !0 });
      } })] }, d = l;
      function x(u) {
        return l.comAray.find((a) => a.namespace === u);
      }
      function g({ comDef: u, rt: a, data: j }) {
        return Object.assign(u, { runtime: a, data: j });
      }
    })(), __webpack_exports__;
  })());
})(fn);
var fnExports = fn.exports;
const coreLib = /* @__PURE__ */ getDefaultExportFromCjs(fnExports), globalKey = "__IOEventList__", ioLogger = {
  log: (...o) => {
    window[globalKey] || (window[globalKey] = []), window[globalKey].push(o[0]), console.log(...o);
  }
};
function log(o) {
  console.log(
    `%c[Mybricks]%c ${o}
`,
    "color:#FFF;background:#fa6400",
    "",
    ""
  );
}
function logInputVal(o, e, t, n) {
  let s;
  try {
    s = JSON.stringify(n);
  } catch {
    s = n;
  }
  ioLogger.log(
    `%c[Mybricks] 输入项 %c ${o || e.title || e.namespace} | ${t} -> ${s}`,
    "color:#FFF;background:#000",
    "",
    ""
  );
}
function logOutputVal(o, e, t, n) {
  let s;
  try {
    s = JSON.stringify(n);
  } catch {
    s = n;
  }
  ioLogger.log(
    `%c[Mybricks] 输出项 %c ${o || e.title || e.namespace} | ${t} -> ${s}`,
    "color:#FFF;background:#fa6400",
    "",
    ""
  );
}
function isNumber(o) {
  return typeof o == "number" && !isNaN(o);
}
function uuid$1(o = 5, e = 8) {
  const t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
  if (e = e || t.length, o)
    for (let s = 0; s < o; s++)
      n[s] = t[0 | Math.random() * e];
  else {
    let s;
    n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
    for (let i = 0; i < 36; i++)
      n[i] || (s = 0 | Math.random() * 16, n[i] = t[i == 19 ? s & 3 | 8 : s]);
  }
  return n.join("");
}
function convertCamelToHyphen(o) {
  return o.replace(/([A-Z])/g, "-$1").toLowerCase();
}
const toFixed = function o(e, t) {
  var n = Math.pow(10, t + 1), s = Math.floor(e * n);
  return Math.round(s / 10) * 10 / n;
}, createPxReplacer = function o(e, t, n, s) {
  return function(i, c) {
    var _ = parseFloat(c);
    return !c || _ <= t ? i : "".concat(toFixed(_ / e, n)).concat(s);
  };
}, remReplace = createPxReplacer(12, 0, 5, "rem"), vwReplace = createPxReplacer(3.75, 0, 5, "vw"), REG_PX = /"[^"]+"|'[^']+'|url\([^)]+\)|(\d*\.?\d+)px/g, pxToRem = (o) => o.replace(REG_PX, remReplace), pxToVw = (o) => o.replace(REG_PX, vwReplace);
function dataSlim(o) {
  return o;
}
const ROOT_FRAME_KEY = "_rootFrame_";
function executor(o, { observable: e }) {
  const {
    json: t,
    getComDef: n,
    env: s,
    ref: i,
    onError: c,
    logger: _,
    debug: y,
    debugLogger: p
  } = o, l = s._context, d = o.scenesOperate || s.scenesOperate, {
    slot: x,
    coms: g = {},
    comsAutoRun: u = {},
    cons: a = [],
    pinRels: j = {},
    pinProxies: S = {},
    pinValueProxies: f = {},
    type: w
  } = t, F = s, O = {}, G = {}, D = {}, B = {}, ne = {};
  Object.keys(a).forEach((m) => {
    const h = a[m], { startPinParentKey: r } = h[0];
    r && (ne[r] = m);
  });
  const he = {}, ye = {}, xe = {}, Ce = {}, ve = {}, Se = {};
  function L(m, h, r) {
    if (m === "com") {
      const { com: k, pinHostId: $, val: P, fromCon: I, notifyAll: J, comDef: M, conId: b } = h;
      p ? p("com", "output", { id: k.id, pinHostId: $, val: P, fromCon: I, notifyAll: J, comDef: M, sceneId: t.id, conId: b }, r) : logOutputVal(k.title, M, $, P);
    } else if (m === "frame") {
      const { comId: k, frameId: $, pinHostId: P, val: I, sceneId: J, conId: M } = h;
      p && p("frame", "output", { comId: k, frameId: $, pinHostId: P, val: I, sceneId: J || t.id, conId: M }, r);
    }
  }
  function je(m, h) {
    const { com: r, pinHostId: k, val: $, frameKey: P, finishPinParentKey: I, comDef: J, conId: M } = m;
    p ? p("com", "input", { id: r.id, pinHostId: k, val: $, frameKey: P, finishPinParentKey: I, comDef: J, sceneId: t.id, conId: M }, h) : logInputVal(r.title, J, k, $);
  }
  function de({ logProps: m, cons: h, val: r, curScope: k, fromCon: $, notifyAll: P, fromCom: I, isAutoRun: J }) {
    function M(b, N, ee) {
      var W, U;
      const C = S[b.comId + "-" + b.pinId];
      if (C) {
        if (xe[`${C.frameId}-${C.pinId}`] = ee, $ && $.finishPinParentKey !== b.startPinParentKey)
          return;
        if (C.type === "frame") {
          const V = Q(b.comId, N);
          let z;
          z = {
            // id: nextScope?.id || uuid(10, 16),
            id: uuid$1(10, 16),
            frameId: C.frameId,
            parent: N,
            proxyComProps: V
            //current proxied component instance
          };
          const A = b.def.namespace === "mybricks.core-comlib.frame-output";
          if (A && N && (C.frameId = N.proxyComProps.id, z = N.parent), b.def.namespace === "mybricks.core-comlib.fn") {
            const { configs: ie } = V.data;
            ie && Object.entries(ie).forEach(([se, K]) => {
              const { frameId: Y, comId: pe, pinId: q } = C, Z = pe ? `${pe}-${Y}` : `${Y}`, te = a[Z + "-" + se];
              te && de({ logProps: null, cons: te, val: K, curScope: z });
            });
          }
          Fe({ options: C, value: ee, scope: z, comProps: V }), A || Ee({ frameId: C.frameId, scope: z });
          return;
        }
      }
      if (b.type === "com")
        $ ? $.finishPinParentKey === b.startPinParentKey && le(b, ee, N) : le(b, ee, N);
      else if (b.type === "frame") {
        if ($ && $.finishPinParentKey !== b.startPinParentKey)
          return;
        if (b.comId) {
          if (b.direction === "inner-input") {
            const V = G[b.frameKey + "-" + b.pinId] || G[b.comId + "-" + b.frameId + "-" + ((W = N == null ? void 0 : N.parent) != null && W.id ? N.parent.id + "-" : "") + b.pinId];
            V && V(ee);
          } else if (b.direction === "inner-output" && b.pinType === "joint") {
            const V = a[b.comId + "-" + b.frameId + "-" + b.pinId];
            V && de({ logProps: null, cons: V, val: ee });
          }
        } else {
          const V = N == null ? void 0 : N.proxyComProps;
          if (V) {
            const z = V.outputs[b.pinId];
            if (z) {
              z(ee, N.parent);
              return;
            }
          }
          (U = B[b.pinId]) == null || U.call(B, ee);
        }
      } else
        throw new Error("尚未实现");
    }
    y && w !== "module" && h.sort((b, N) => b.isBreakpoint && !N.isBreakpoint ? -1 : !b.isBreakpoint && N.isBreakpoint ? 1 : 0), h.forEach(async (b) => {
      var ie, se;
      const { comId: N, pinId: ee, pinType: C, timerPinInputId: W, frameKey: U } = b, V = g[N];
      if ($ && $.finishPinParentKey !== b.startPinParentKey || y && b.isIgnored)
        return;
      if (y && w !== "module" && ((ie = l.debuggerPanel) != null && ie.hasBreakpoint(b))) {
        let K = !0;
        await ((se = l.debuggerPanel) == null ? void 0 : se.wait(b, () => {
          K = !1, m && (m[1].conId = b.id, m && L(...m, !0));
        })), K && m && (m[1].conId = b.id, m && L(...m));
      } else
        m && L(...m);
      function z({ pinId: K, value: Y, curScope: pe }) {
        let q = pe;
        const Z = K ? { ...b, pinId: K } : b;
        if (P) {
          const te = Z.frameKey;
          if (!te)
            throw new Error("数据异常，请检查toJSON结果.");
          te === ROOT_FRAME_KEY ? M(Z, {}, Y) : M(Z, pe, Y);
        } else {
          const te = Z.frameKey.split("-");
          if (te.length >= 2 && !q) {
            const R = we(te[0], te[1], null, !1);
            (R == null ? void 0 : R.type) === "scope" ? R.curScope ? M(Z, R.curScope, Y) : R.pushTodo((T) => {
              M(Z, T, Y);
            }) : M(Z, q, Y);
          } else
            M(Z, q, Y);
        }
      }
      function A({ pinId: K, value: Y, component: pe, curScope: q }) {
        const { isReady: Z, isMultipleInput: te, pinId: R, value: T, cb: v } = E({ pinId: K, value: Y, component: pe, curScope: q });
        if (Z) {
          const H = {
            pinId: te ? R : null,
            value: T,
            curScope: q
          };
          if (W) {
            const X = W + "-" + U + (q != null && q.id ? `-${q.id}` : ""), re = ye[X];
            if (re) {
              const { ready: oe, todo: ae } = re;
              if (oe) {
                let me = !1;
                Object.entries(ae).forEach(([_e, Oe]) => {
                  _e === R ? (z(H), me = !0) : Oe();
                }), me || z(H), v == null || v(), Reflect.deleteProperty(ye, X);
              } else
                ae[R] = () => {
                  v == null || v(), z(H);
                };
            } else
              ye[X] = {
                ready: !1,
                todo: {
                  [R]: () => {
                    v == null || v(), z(H);
                  }
                }
              };
          } else
            v == null || v(), z(H);
        }
      }
      if (C === "timer")
        z({ value: r, curScope: k });
      else if (P) {
        const K = b.frameKey;
        if (K === ROOT_FRAME_KEY || J)
          A({ pinId: ee, value: r, component: V, curScope: null });
        else {
          const [Y, pe] = K.split("-");
          if (Ce[K]) {
            const q = Ce[K], Z = q[I.id];
            Z ? Z[b.id] = b : q[I.id] = {
              [b.id]: b
            };
          } else {
            const q = Ce[K] = {};
            q[I.id] = {
              [b.id]: b
            };
          }
          if (I.parentComId)
            A({ pinId: ee, value: r, component: V, curScope: k });
          else {
            const q = O[`${Y}-${pe}`];
            q && Object.entries(q).forEach(([Z, te]) => {
              (te == null ? void 0 : te.type) === "scope" ? te.curScope ? A({ pinId: ee, value: r, component: V, curScope: te.curScope }) : te.pushTodo((R) => {
                A({ pinId: ee, value: r, component: V, curScope: R });
              }) : A({ pinId: ee, value: r, component: V, curScope: te.curScope });
            });
          }
        }
      } else
        A({ pinId: ee, value: r, component: V, curScope: k });
      function E({ pinId: K, value: Y, component: pe, curScope: q }) {
        let Z = K, te = Y, R = !0;
        const T = K.indexOf("."), v = N + `${q != null && q.id ? `-${q.id}` : ""}`;
        if (pe && T !== -1) {
          const { inputs: X } = pe;
          Z = K.substring(0, T);
          const re = K.substring(T + 1);
          let oe = he[v];
          oe || (oe = he[v] = {}), oe[re] = r;
          const ae = new RegExp(`${Z}.`), me = X.filter((_e) => !!_e.match(ae));
          Object.keys(oe).length === me.length ? te = oe : R = !1;
        }
        let H = Z !== K;
        return {
          pinId: Z,
          value: te,
          isReady: R,
          isMultipleInput: H,
          cb: H ? () => {
            Reflect.deleteProperty(he, v);
          } : null
        };
      }
    });
  }
  function Q(m, h) {
    var Z, te;
    const r = g[m];
    if (!r)
      return null;
    const k = m + (r.frameId || ROOT_FRAME_KEY);
    let $ = O[k];
    $ || ($ = O[k] = {});
    let P, I = h;
    for (!I && r.parentComId && r.frameId && (I = (te = (Z = O[`${r.parentComId}-${r.frameId}`]) == null ? void 0 : Z.slot) == null ? void 0 : te.curScope); I; ) {
      const R = I.id + "-" + m;
      if (I.frameId === r.frameId) {
        P = I.id;
        const T = $[R];
        if (T)
          return T;
        {
          const v = I.parentComId;
          if (v) {
            if (v === r.paramId || v === r.parentComId)
              break;
          } else
            break;
        }
      }
      I = I.parent;
    }
    const J = (P ? P + "-" : "") + m, M = $[J];
    if (M)
      return M;
    const b = r.def, N = r.model, ee = JSON.parse(JSON.stringify(N.data)), C = JSON.parse(JSON.stringify(N.style));
    C.__model_style__ = !0;
    const W = {}, U = {}, V = {}, z = (R, T, v, H) => {
      let X = U[R];
      X || (U[R] = X = []), X.push({ val: T, fromCon: v, fromScope: H });
    }, A = function(R) {
      return new Proxy({}, {
        ownKeys(T) {
          return r.inputs;
        },
        getOwnPropertyDescriptor(T) {
          return {
            enumerable: !0,
            configurable: !0
          };
        },
        get(T, v) {
          return function(H) {
            if (Object.prototype.toString.call(v) === "[object Symbol]")
              return;
            const X = R == null ? void 0 : R.inputs;
            if (X) {
              const oe = X[v];
              typeof oe == "function" && oe(H);
            }
            W[v] = H;
            const re = U[v];
            re && (re.forEach(({ val: oe, fromCon: ae, fromScope: me }) => {
              H(oe, new Proxy({}, {
                //relOutputs
                get(_e, Oe) {
                  return function(Re) {
                    if (Object.prototype.toString.call(Oe) === "[object Symbol]")
                      return;
                    const $e = se()[Oe];
                    if (typeof $e == "function")
                      $e(Re, me || I, ae);
                    else
                      throw new Error(`outputs.${Oe} not found`);
                  };
                }
              }));
            }), U[v] = void 0);
          };
        }
      });
    }, E = new Proxy({}, {
      get(R, T) {
        return function(v) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const H = j[m + "-" + T];
          if (H) {
            const X = {}, re = {};
            return H.forEach((oe) => {
              X[oe] = (ae) => {
                re[oe] = ae;
              };
            }), Promise.resolve().then(() => {
              le({ comId: m, def: b, pinId: T }, v, h, re);
            }), X;
          } else
            le({ comId: m, def: b, pinId: T }, v, h);
        };
      }
    }), ie = new Proxy({}, {
      get(R, T) {
        return function(v) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const H = S[m + "-" + T];
          H && (d == null || d.inputs({
            ...H,
            value: v,
            parentScope: q
          }));
        };
      }
    }), se = function(R) {
      return new Proxy({}, {
        ownKeys(T) {
          return r.outputs;
        },
        getOwnPropertyDescriptor(T) {
          return {
            enumerable: !0,
            configurable: !0
          };
        },
        get(T, v, H) {
          const X = function(re, oe, ae, me) {
            if (Object.prototype.toString.call(v) === "[object Symbol]")
              return;
            const _e = typeof oe == "boolean" && oe;
            if (_e) {
              if (r.parentComId) {
                const be = `${r.parentComId}-${r.frameId}`;
                Se[be] ? Se[be][m] = !0 : Se[be] = { [m]: !0 };
              }
              if (ve[`${r.id}${h != null && h.id ? `-${h.id}` : ""}`] = re, r.global && !me) {
                d == null || d.exeGlobalCom({
                  com: r,
                  value: re,
                  pinId: v
                });
                return;
              }
            }
            const Oe = arguments, Re = R == null ? void 0 : R.outputs;
            if (Re) {
              const be = Re[v];
              typeof be == "function" && be(re);
            }
            let $e;
            oe && typeof oe == "object" && ($e = oe);
            const ke = n(b), Me = N.outputEvents;
            let ge;
            if (Me) {
              const be = Me[v];
              if (be && Array.isArray(be)) {
                const Ae = be.find((Te) => Te.active);
                if (Ae) {
                  const { type: Te } = Ae;
                  switch (Te) {
                    case "none":
                      ge = [];
                      break;
                    case "fx":
                      const Pe = S[m + "-" + v];
                      if ((Pe == null ? void 0 : Pe.type) === "frame") {
                        const Ie = `${Pe.frameId}-${Pe.pinId}`;
                        ge = a[Ie] || [], xe[Ie] = re;
                      } else
                        ge = [];
                      break;
                    case "defined":
                      break;
                    default:
                      if (ge = [], Array.isArray(s == null ? void 0 : s.events)) {
                        const Ie = s.events.find((Ne) => {
                          if (Ne.type === Te)
                            return Ne;
                        });
                        Ie && typeof Ie.exe == "function" && Ie.exe({ options: Ae.options });
                      }
                      break;
                  }
                }
              }
            }
            ge = ge || a[m + "-" + v], ge != null && ge.length ? Oe.length >= 3 && typeof me > "u" ? de({ logProps: ["com", { com: r, pinHostId: v, val: re, fromCon: ae, notifyAll: _e, comDef: ke }], cons: ge, val: re, curScope: $e, fromCon: ae, fromCom: r }) : de({ logProps: ["com", { com: r, pinHostId: v, val: re, fromCon: ae, notifyAll: _e, comDef: ke }], cons: ge, val: re, curScope: $e || h, fromCon: ae, notifyAll: _e, fromCom: r }) : L("com", { com: r, pinHostId: v, val: re, fromCon: ae, notifyAll: _e, comDef: ke });
          };
          return X.getConnections = () => a[m + "-" + v] || [], X;
        }
      });
    }, K = new Proxy({}, {
      get(R, T, v) {
        return function(H) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const X = V[T];
          X && (X.forEach((re) => {
            H(re);
          }), V[T] = void 0);
        };
      }
    }), Y = new Proxy({}, {
      get(R, T, v) {
        return function(H) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const X = a[m + "-" + T];
          X ? de({ logProps: ["com", { com: r, pinHostId: T, val: H, comDef: b }], cons: X, val: H, curScope: h }) : L("com", { com: r, pinHostId: T, val: H, comDef: b });
        };
      }
    });
    function pe(R) {
      if (r.global) {
        d == null || d._notifyBindings(R, r);
        return;
      }
      const { bindingsTo: T } = r.model;
      if (T)
        for (let v in T) {
          const H = Q(v);
          if (H) {
            const X = T[v];
            Array.isArray(X) && X.forEach((re) => {
              let oe = H;
              const ae = re.split(".");
              ae.forEach((me, _e) => {
                _e !== ae.length - 1 ? oe = oe[me] : oe[me] = R;
              });
            });
          }
        }
    }
    const q = {
      id: r.id,
      title: r.title,
      frameId: r.frameId,
      parentComId: r.parentComId,
      data: e(ee),
      style: e(C),
      _inputRegs: W,
      addInputTodo: z,
      inputs: A(),
      inputsCallable: E,
      _inputsCallable: ie,
      outputs: se(),
      _inputs: K,
      _outputs: Y,
      clone(R) {
        const T = {
          inputs: A(R),
          outputs: se(R)
        };
        return Object.setPrototypeOf(T, this), T;
      },
      _notifyBindings: pe,
      logger: _,
      onError: y ? (R) => c({ comId: m, error: R }) : c
    };
    return $[J] = q, q;
  }
  function ce(m, h) {
    let r = xe[`${m}${h ? `-${h.id}-${h.frameId}` : ""}`];
    return typeof r > "u" && (h != null && h.parent) && (r = ce(m, h.parent)), r;
  }
  function le(m, h, r, k) {
    var ee;
    const { comId: $, def: P, pinId: I, pinType: J, frameKey: M, finishPinParentKey: b, timerPinInputId: N } = m;
    if (J === "ext") {
      const C = O[$] || Q($, r);
      if (I === "show")
        C.style.display = "";
      else if (I === "hide")
        C.style.display = "none";
      else if (I === "showOrHide") {
        const U = C.style;
        typeof h > "u" ? U.display === "none" ? U.display = "" : U.display = "none" : U.display = h ? "" : "none";
      }
      const W = n(P);
      je({ com: C, val: h, pinHostId: I, frameKey: M, finishPinParentKey: b, comDef: W, conId: m.id });
    } else if (J === "config") {
      const C = Q($, r), W = n(P);
      je({ com: C, pinHostId: I, val: h, frameKey: M, finishPinParentKey: b, comDef: W, conId: m.id });
      const { extBinding: U } = m, V = U.split(".");
      let z = C;
      V.forEach((A, E) => {
        E !== V.length - 1 ? z = z[A] : z[A] = h;
      });
    } else if (J === "timer") {
      const C = Q($, r), W = n(P);
      je({ com: C, pinHostId: I, val: h, frameKey: M, finishPinParentKey: b, comDef: W, conId: m.id });
      const U = N + "-" + M + (r != null && r.id ? `-${r.id}` : ""), V = ye[U];
      if (V) {
        const { todo: z } = V;
        Object.entries(z).forEach(([A, E]) => E()), Reflect.deleteProperty(ye, U);
      } else
        ye[U] = {
          ready: !0,
          todo: {}
        };
    } else if ((ee = P.rtType) != null && ee.match(/^js/gi)) {
      const C = g[$];
      if (C) {
        const W = Q($, r), U = n(P);
        if (C.global) {
          const E = d == null ? void 0 : d.getGlobalComProps($);
          E && (W.data = E.data);
        }
        const V = r == null ? void 0 : r.id, z = (V ? V + "-" : "") + $;
        C.inputs.find((E) => E === I) ? je({ com: C, val: h, pinHostId: I, frameKey: M, finishPinParentKey: b, comDef: U, conId: m.id }) : Object.entries(h).forEach(([E, ie]) => {
          je({ com: C, val: ie, pinHostId: `${I}.${E}`, frameKey: M, finishPinParentKey: b, comDef: U, conId: m.id });
        }), D[z] || (D[z] = !0, U.runtime({
          //exe once
          env: F,
          data: W.data,
          inputs: W.inputs,
          outputs: W.outputs,
          _notifyBindings: W._notifyBindings,
          _inputsCallable: W._inputsCallable,
          logger: _,
          onError: y ? (E) => c({ comId: $, error: E }) : c
        }));
        const A = W._inputRegs[I];
        typeof A == "function" && A(h, new Proxy({}, {
          //relOutputs
          get(E, ie) {
            return function(se) {
              if (Object.prototype.toString.call(ie) !== "[object Symbol]") {
                if (f) {
                  const K = f[`${$}-${I}`];
                  if (K) {
                    const Y = K.frameId;
                    se = ce(`${Y === t.id ? ROOT_FRAME_KEY : M}-${K.pinId}`, r), typeof se > "u" && (se = ce(`${Y === t.id ? ROOT_FRAME_KEY : M}-${K.pinId}`, null));
                  }
                }
                W.outputs[ie](se, r, m);
              }
            };
          }
        }));
      }
    } else {
      const C = Q($, r);
      if (!C)
        return;
      const W = n(P);
      je({ com: C, pinHostId: I, val: h, frameKey: M, finishPinParentKey: b, comDef: W, conId: m.id });
      const U = C._inputRegs[I];
      if (typeof U == "function") {
        let V;
        k ? V = k : V = new Proxy({}, {
          //relOutputs
          get(z, A) {
            return function(E) {
              Object.prototype.toString.call(A) !== "[object Symbol]" && C.outputs[A](E, r, m);
            };
          }
        }), U(h, V);
      } else
        C.addInputTodo(I, h, m, r);
    }
    if (b) {
      const C = a[ne[b]];
      C && !j[`${$}-${I}`] && de({ logProps: null, cons: C, val: void 0 });
    }
  }
  function ue(m, h) {
    let r;
    return m != null && m.comAry && m.comAry.find((k) => {
      if (k.id === h)
        return r = k, k;
      if (k.slots) {
        for (let $ in k.slots)
          if (r = ue(k.slots[$], h), r)
            return r;
      }
    }), r;
  }
  function we(m, h, r, k) {
    const $ = `${m}-${h}`;
    let P = O[$];
    P || (P = O[$] = {});
    let I = r ? r.id : "slot", J = P[I];
    if (k && !J && console.log("不应该再走到这儿了: ", { comId: m, slotId: h, scope: r, notifyAll: k }), !J) {
      const M = ue(x, m);
      if (!(M != null && M.slots))
        return null;
      const b = M == null ? void 0 : M.slots[h], N = {};
      let ee;
      if (r) {
        const A = O[m + "-" + h];
        A && (ee = A.todo);
      }
      const C = { scope: r, todo: ee }, W = new Proxy({}, {
        get(A, E) {
          return function(ie) {
            Object.prototype.toString.call(E) !== "[object Symbol]" && (N[E] = ie);
          };
        }
      }), U = new Proxy({}, {
        get(A, E) {
          const ie = function(se, K) {
            if (Object.prototype.toString.call(E) === "[object Symbol]")
              return;
            const Y = m + "-" + h + "-" + E, pe = a[Y];
            xe[`${Y}${K ? `-${K.id}-${K.frameId}` : ""}`] = se, pe ? de({ logProps: ["frame", { comId: m, frameId: h, pinHostId: E, val: se }], cons: pe, val: se, curScope: K || C.scope }) : L("frame", { comId: m, frameId: h, pinHostId: E, val: se });
          };
          return ie.getConnections = () => a[m + "-" + h + "-" + E] || [], ie;
        }
      }), V = new Proxy({}, {
        get(A, E, ie) {
          return function(se) {
            Object.prototype.toString.call(E) !== "[object Symbol]" && (G[I + "-" + E] = se, G[$ + "-" + E] = se);
          };
        }
      });
      let z = {};
      J = P[I] = {
        type: b == null ? void 0 : b.type,
        run(A) {
          let E = C.scope;
          A && E !== A && (C.scope = A, E = A);
          const ie = (E == null ? void 0 : E.id) || "none";
          if (z[ie] || (z[ie] = !0, Ee({ comId: m, frameId: h, scope: E })), Array.isArray(C.todo) && (C.todo.forEach((se) => {
            Promise.resolve().then(() => {
              se(E);
            });
          }), C.todo = void 0), E && I !== "slot") {
            const se = `${m}-${h}`, K = Ce[se];
            Promise.resolve().then(() => {
              K && Object.entries(K).forEach(([Y, pe]) => {
                if (!g[Y].parentComId) {
                  const Z = Object.entries(pe).map(([te, R]) => R);
                  Z.length && de({ logProps: null, cons: Z, val: ve[Y], curScope: E, notifyAll: !0, fromCom: g[Y], isAutoRun: !0 });
                }
              });
            });
          }
        },
        destroy() {
          if (r) {
            const A = `${r.parentComId}-${r.frameId}`, E = Se[A];
            E && Object.keys(E).forEach((ie) => {
              Reflect.deleteProperty(ve, `${ie}-${r.id}`);
            });
          }
          Reflect.deleteProperty(P, I);
        },
        //_outputRegs,
        _inputs: W,
        _inputRegs: N,
        inputs: U,
        outputs: V,
        get curScope() {
          return C.scope;
        },
        setCurScope(A) {
          C.scope = A;
        },
        get todo() {
          return C.todo;
        },
        pushTodo(A) {
          C.todo || (C.todo = []), C.todo.push(A);
        }
      };
    }
    return J;
  }
  function Ee(m) {
    const { comId: h, frameId: r, scope: k } = m, $ = h ? `${h}-${r}` : `${r}`, P = u[$];
    P && P.forEach((I) => {
      const { id: J, def: M } = I;
      if (g[J]) {
        const N = Q(J, k), ee = n(M);
        log(`${ee.namespace} 开始执行`), ee.runtime({
          env: F,
          data: N.data,
          inputs: N.inputs,
          outputs: N.outputs,
          _inputsCallable: N._inputsCallable,
          logger: _,
          onError: y ? (C) => c({ comId: J, error: C }) : c
        });
      }
    });
  }
  function Fe({ options: m, value: h, scope: r = void 0, log: k = !0, comProps: $ }) {
    const { frameId: P, comId: I, pinId: J, sceneId: M } = m, b = I ? `${I}-${P}` : `${P}`, N = a[b + "-" + J];
    xe[`${P}-${J}`] = h, N ? de({ logProps: ["frame", { comId: I, frameId: P, pinHostId: J, val: h, sceneId: M }], cons: N, val: h, curScope: r }) : (k && L("frame", { comId: I, frameId: P, pinHostId: J, val: h, sceneId: M }), P !== ROOT_FRAME_KEY && (t.id === P ? B[J](h) : d == null || d.open({
      frameId: P,
      todo: {
        pinId: J,
        value: h
      },
      comProps: $,
      parentScope: r.proxyComProps
    })));
  }
  const fe = {
    get({ comId: m, slotId: h, scope: r, _ioProxy: k }) {
      let $;
      if (k && (k.inputs || k.outputs || k._inputs || k._outputs) && ($ = k), h)
        return we(m, h, r);
      {
        const P = Q(m, r);
        return $ ? P.clone($) : P;
      }
    },
    getComInfo(m) {
      return g[m];
    }
  };
  if (typeof i == "function") {
    const m = {
      run() {
        Ee({ frameId: ROOT_FRAME_KEY });
      },
      inputs: new Proxy({}, {
        get(h, r) {
          return function(k, $ = void 0, P = !0) {
            Object.prototype.toString.call(r) !== "[object Symbol]" && Fe({ options: { frameId: ROOT_FRAME_KEY, pinId: r, sceneId: $ }, value: k, scope: void 0, log: P });
          };
        }
      }),
      outputs(h, r) {
        B[h] = r;
      },
      get: fe.get,
      getComInfo: fe.getComInfo
    };
    l && w === "module" && l.setRefs(t.id, m), i(m);
  }
  return fe;
}
function normalizeComponent(o, e, t, n, s, i, c, _) {
  var y = typeof o == "function" ? o.options : o;
  e && (y.render = e, y.staticRenderFns = t, y._compiled = !0), n && (y.functional = !0), i && (y._scopeId = "data-v-" + i);
  var p;
  if (c ? (p = function(x) {
    x = x || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !x && typeof __VUE_SSR_CONTEXT__ < "u" && (x = __VUE_SSR_CONTEXT__), s && s.call(this, x), x && x._registeredComponents && x._registeredComponents.add(c);
  }, y._ssrRegister = p) : s && (p = _ ? function() {
    s.call(
      this,
      (y.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), p)
    if (y.functional) {
      y._injectStyles = p;
      var l = y.render;
      y.render = function(g, u) {
        return p.call(u), l(g, u);
      };
    } else {
      var d = y.beforeCreate;
      y.beforeCreate = d ? [].concat(d, p) : [p];
    }
  return {
    exports: o,
    options: y
  };
}
const _sfc_main$7 = {
  props: {
    slotId: {
      type: String
    },
    propsSlot: {
      type: Object
    },
    params: {
      type: Object
    },
    props: {
      type: Object
    },
    propsStyle: {
      type: Object
    },
    onError: {
      type: Function
    },
    // createPortal
    logger: {
      type: Object
    },
    env: {
      type: Object
    },
    _env: {
      type: Object
    },
    scope: {
      type: Object
    },
    getComDef: {
      type: Function
    },
    context: {
      type: Object
    }
    // __rxui_child__
  },
  created() {
    let o;
    const { propsSlot: e, scope: t, props: n, env: s, _env: i, getComDef: c, registSpm: _, context: y, onError: p, logger: l, params: d } = this.$props;
    if (Object.assign(d, d.m), (e == null ? void 0 : e.type) === "scope" ? (o = {
      id: uuid(10, 16),
      frameId: slotId
    }, t && (o.parent = t)) : o = t, d) {
      const x = d.inputValues;
      if (typeof x == "object")
        for (let g in x)
          n.inputs[g](x[g], o);
      typeof d.wrap == "function" && d.wrap;
    }
    n.run(o), this.slotProps = {
      scope: o,
      env: s,
      // createPortal={createPortal}
      _env: i,
      propsSlot: e,
      params: d,
      // wrapper={wrapFn}
      // template={params?.itemWrap}
      getComDef: c,
      registSpm: _,
      context: y,
      inputs: d == null ? void 0 : d.inputs,
      outputs: d == null ? void 0 : d.outputs,
      _inputs: d == null ? void 0 : d._inputs,
      _outputs: d == null ? void 0 : d._outputs,
      onError: p,
      logger: l
      // __rxui_child__={__rxui_child__}
    }, this.slotComponent = RenderSlot;
  }
};
var _sfc_render$7 = function o() {
  var e = this, t = e._self._c;
  return t(e.slotComponent, e._b({ tag: "component" }, "component", e.slotProps, !1));
}, _sfc_staticRenderFns$7 = [], __component__$7 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  !1,
  null,
  null,
  null,
  null
);
const SlotRender = __component__$7.exports, _sfc_main$6 = {
  functional: !0,
  props: {
    env: Object,
    data: Object,
    inputs: Object,
    outputs: Object
  },
  render(o, { props: e }) {
    const t = e.env.getModuleJSON(e.data.definedId);
    return o(Render, { props: e.env.renderModule(t, {
      ref: (n) => {
        const { inputs: s, outputs: i } = t;
        s.forEach(({ id: _ }) => {
          e.inputs[_]((y) => {
            n.inputs[_](y);
          });
        }), i.forEach(({ id: _ }) => {
          n.outputs(_, e.outputs[_]);
        });
        const c = e.data.configs;
        for (let _ in c)
          n.inputs[_](c[_]);
        n.run();
      },
      disableAutoRun: !0
    }) });
  }
}, _sfc_render$6 = null, _sfc_staticRenderFns$6 = null;
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  !1,
  null,
  null,
  null,
  null
);
const Module = __component__$6.exports, com = "_com_z9da4_2", flex = "_flex_z9da4_7", style0$2 = {
  com,
  flex
}, _sfc_main$5 = {
  props: {
    // key: comKey,
    com: {
      type: Object
    },
    getComDef: {
      type: Function
    },
    registSpm: {
      type: Function
    },
    context: {
      type: Object
    },
    scope: {
      type: Object
    },
    props: {
      type: Object
    },
    env: {
      type: Object
    },
    _env: {
      type: Object
    },
    onError: {
      type: Function
    },
    logger: {
      type: Object
    }
  },
  components: {
    SlotRender
  },
  created() {
    var de;
    const { _env: o, env: e, com: t, props: n, getComDef: s, registSpm: i, onError: c, logger: _, context: y, scope: p } = this.$props, { pxToRem: l, pxToVw: d } = e, { id: x, def: g, name: u, slots: a = {} } = t, {
      data: j,
      title: S,
      style: f,
      inputs: w,
      outputs: F,
      _inputs: O,
      _outputs: G,
      _notifyBindings: D
    } = n, B = this.getStyleAry({ env: e, def: g, style: f });
    if (Array.isArray(B)) {
      const Q = (e == null ? void 0 : e.shadowRoot) || ((de = document.getElementById("_mybricks-geo-webview_")) == null ? void 0 : de.shadowRoot);
      if (!(Q || document).querySelector(`style[id="${x}"]`)) {
        const ce = document.createElement("style");
        let le = "";
        ce.id = x, B.forEach(({ css: ue, selector: we, global: Ee }) => {
          we === ":root" && (we = "> *:first-child"), le = le + `
            ${Ee ? "" : `#${x} `}${we.replace(/\{id\}/g, `${x}`)} {
              ${Object.keys(ue).map((Fe) => {
            let fe = ue[Fe];
            return l && typeof fe == "string" && fe.indexOf("px") !== -1 ? fe = pxToRem(fe) : d && typeof fe == "string" && fe.indexOf("px") !== -1 && (fe = pxToVw(fe)), `${convertCamelToHyphen(Fe)}: ${fe};`;
          }).join(`
`)}
            }
          `;
        }), ce.innerHTML = le, Q ? Q.appendChild(ce) : document.head.appendChild(ce);
      }
    }
    Reflect.deleteProperty(f, "styleAry"), Reflect.deleteProperty(f, "themesId");
    const ne = s(g), he = [], ye = {};
    t.slots && Object.entries(t.slots).forEach(([Q, ce]) => {
      const le = y.get({ comId: x, slotId: Q, scope: p });
      ye[Q] = {
        get size() {
          var ue;
          return ((ue = ce == null ? void 0 : ce.comAry) == null ? void 0 : ue.length) || 0;
        }
      }, he.push({
        slotId: Q,
        propsSlot: ce,
        // params 入参数 { inputValues }
        props: le,
        propsStyle: f,
        onError: c,
        // createPortal
        logger: _,
        env: e,
        _env: o,
        scope: p,
        getComDef: s,
        context: y
      });
    }), this.templateSlots = he;
    let xe;
    if (n.frameId && n.parentComId) {
      const Q = y.get({ comId: n.parentComId, slotId: n.frameId, scope: p == null ? void 0 : p.parent });
      Q && (xe = {
        get _inputs() {
          return new Proxy({}, {
            get(ce, le) {
              return Q._inputRegs[le];
            }
          });
        }
      });
    }
    const Ce = this.getClasses({ style: f, id: x }), ve = this.getSizeStyle({ style: f, env: e }), Se = this.getMarginStyle({ style: f, env: e }), L = {};
    if (["fixed", "absolute"].includes(f.position)) {
      const { top: Q, left: ce, right: le, bottom: ue } = f;
      (Q || isNumber(Q)) && (L.top = isNumber(Q) ? Q + "px" : Q), (ue || isNumber(ue)) && (L.bottom = isNumber(ue) ? ue + "px" : ue), (ce || isNumber(ce)) && (L.left = isNumber(ce) ? ce + "px" : ce), (le || isNumber(le)) && (L.right = isNumber(le) ? le + "px" : le), f.position === "fixed" ? L.zIndex = 1e3 : f.position === "absolute" && (L.zIndex = 1);
      const { pxToVw: we } = e;
      we && (typeof L.top == "string" && L.top.indexOf("px") !== -1 && (L.top = pxToVw(L.top)), typeof L.bottom == "string" && L.bottom.indexOf("px") !== -1 && (L.bottom = pxToVw(L.bottom)), typeof L.left == "string" && L.left.indexOf("px") !== -1 && (L.left = pxToVw(L.left)), typeof L.right == "string" && L.right.indexOf("px") !== -1 && (L.right = pxToVw(L.right)));
    }
    g.namespace === "mybricks.core-comlib.module" ? this.component = Module : this.component = ne.runtime, this.comDef = ne, this.containerProps = {
      id: x,
      key: x,
      style: {
        display: f.display,
        // overflow: "hidden",
        position: f.position || "relative",
        ...L,
        ...ve,
        ...Se,
        ...f.ext || {}
      }
      // className: classes
    }, this.containerClass = Ce;
    const je = {
      id: x,
      env: {
        ...e,
        pxToVw,
        spm: i ? i == null ? void 0 : i(x, { title: S, namespace: g.namespace }) : null
      },
      _env: o,
      data: j,
      name: u,
      title: S,
      slots: ye,
      propsStyle: f,
      // TODO: style是保留字段
      inputs: w,
      outputs: F,
      _inputs: O,
      _outputs: G,
      _notifyBindings: D,
      // slots: slotsProxy,
      // createPortal,
      parentSlot: xe,
      // __rxui_child__,
      onError: c,
      logger: _
    };
    this.componentProps = {
      ...je,
      m: {
        ...je,
        style: f
      }
    };
  },
  methods: {
    getStyleAry({ env: o, def: e, style: t }) {
      var _;
      const n = (_ = o == null ? void 0 : o.themes) == null ? void 0 : _.comThemes;
      if (!n)
        return t.styleAry;
      let s;
      const { themesId: i } = t, { namespace: c } = e;
      if (i)
        if (i === "_defined")
          s = t.styleAry;
        else {
          const y = n[c];
          if (Array.isArray(y)) {
            const p = y.find(({ id: l }) => l === i);
            p && (s = p.styleAry);
          }
        }
      else {
        const y = n[c];
        if (Array.isArray(y)) {
          const p = y.find(({ isDefault: l }) => l);
          p && (s = p.styleAry);
        }
      }
      return s || t.styleAry;
    },
    getClasses({ style: o, id: e }) {
      const t = [e, this.$style.com];
      return o.flex === 1 && t.push(this.$style.flex), t.join(" ");
    },
    getSizeStyle({ style: o, env: e }) {
      const t = {}, { width: n, height: s } = o;
      n ? isNumber(n) ? t.width = n + "px" : n && (t.width = n) : t.width = "100%", isNumber(s) ? t.height = s + "px" : s && (t.height = s);
      const { pxToVw: i } = e;
      return i && (typeof t.width == "string" && t.width.indexOf("px") !== -1 && (t.width = pxToVw(t.width)), typeof t.height == "string" && t.height.indexOf("px") !== -1 && (t.height = pxToVw(t.height))), t;
    },
    getMarginStyle({ style: o, env: e }) {
      const t = {}, {
        width: n,
        marginTop: s,
        marginLeft: i,
        marginRight: c,
        marginBottom: _
      } = o;
      isNumber(s) && (t.marginTop = s + "px"), isNumber(i) && (typeof n == "number" || i < 0 ? t.marginLeft = i + "px" : t.paddingLeft = i + "px"), isNumber(c) && (typeof n == "number" || c < 0 ? t.marginRight = c + "px" : t.paddingRight = c + "px"), isNumber(_) && (t.marginBottom = _ + "px");
      const { pxToVw: y } = e;
      return y && (typeof t.marginTop == "string" && t.marginTop.indexOf("px") !== -1 && (t.marginTop = pxToVw(t.marginTop)), typeof t.marginLeft == "string" && t.marginLeft.indexOf("px") !== -1 && (t.marginLeft = pxToVw(t.marginLeft)), typeof t.marginRight == "string" && t.marginRight.indexOf("px") !== -1 && (t.marginRight = pxToVw(t.marginRight)), typeof t.marginBottom == "string" && t.marginBottom.indexOf("px") !== -1 && (t.marginBottom = pxToVw(t.marginBottom)), typeof t.paddingLeft == "string" && t.paddingLeft.indexOf("px") !== -1 && (t.paddingLeft = pxToVw(t.paddingLeft)), typeof t.paddingRight == "string" && t.paddingRight.indexOf("px") !== -1 && (t.paddingRight = pxToVw(t.paddingRight))), t;
    },
    getSlotProps() {
    }
  }
};
var _sfc_render$5 = function o() {
  var e = this, t = e._self._c;
  return t("div", e._b({ class: e.containerClass }, "div", e.containerProps, !1), [t(e.component, e._b({ tag: "component", scopedSlots: e._u([e._l(e.templateSlots, function(n) {
    return { key: n.slotId, fn: function(s) {
      return [t("SlotRender", e._b({}, "SlotRender", { ...n, params: s }, !1))];
    } };
  })], null, !0) }, "component", e.componentProps, !1))], 1);
}, _sfc_staticRenderFns$5 = [];
const __cssModules$2 = {
  $style: style0$2
};
function _sfc_injectStyles$2(o) {
  for (var e in __cssModules$2)
    this[e] = __cssModules$2[e];
}
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  !1,
  _sfc_injectStyles$2,
  null,
  null,
  null
);
const RenderCom = __component__$5.exports, slot = "_slot_rwhgo_1", lyFlexColumn = "_lyFlexColumn_rwhgo_6", lyFlexRow = "_lyFlexRow_rwhgo_10", justifyContentFlexStart = "_justifyContentFlexStart_rwhgo_14", justifyContentFlexCenter = "_justifyContentFlexCenter_rwhgo_17", justifyContentFlexFlexEnd = "_justifyContentFlexFlexEnd_rwhgo_20", justifyContentFlexSpaceAround = "_justifyContentFlexSpaceAround_rwhgo_23", justifyContentFlexSpaceBetween = "_justifyContentFlexSpaceBetween_rwhgo_26", alignItemsFlexStart = "_alignItemsFlexStart_rwhgo_29", alignItemsFlexCenter = "_alignItemsFlexCenter_rwhgo_32", alignItemsFlexFlexEnd = "_alignItemsFlexFlexEnd_rwhgo_35", debugFocus = "_debugFocus_rwhgo_38", error = "_error_rwhgo_42", errorRT = "_errorRT_rwhgo_47", tt = "_tt_rwhgo_51", info = "_info_rwhgo_57", style0$1 = {
  slot,
  lyFlexColumn,
  lyFlexRow,
  justifyContentFlexStart,
  justifyContentFlexCenter,
  justifyContentFlexFlexEnd,
  justifyContentFlexSpaceAround,
  justifyContentFlexSpaceBetween,
  alignItemsFlexStart,
  alignItemsFlexCenter,
  alignItemsFlexFlexEnd,
  debugFocus,
  error,
  errorRT,
  tt,
  info
}, _sfc_main$4 = {
  props: {
    env: {
      type: Object
    },
    propsStyle: {
      type: Object
    },
    _env: {
      type: Object
    },
    propsSlot: {
      type: Object
    },
    getComDef: {
      type: Function
    },
    registSpm: {
      type: Function
    },
    context: {
      type: Object
    },
    className: {
      type: String
    },
    onError: {
      type: Function
    },
    logger: {
      type: Object
    },
    root: {
      type: Boolean
    },
    scope: {
      type: Object
    },
    inputs: {
      type: Object
    },
    outputs: {
      type: Object
    },
    _inputs: {
      type: Object
    },
    _outputs: {
      type: Object
    },
    params: {
      type: Object
    }
  },
  created() {
  },
  computed: {
    comAry() {
      const { env: o, _env: e, propsSlot: t, context: n, getComDef: s, registSpm: i, onError: c, logger: _, scope: y, inputs: p, _inputs: l, outputs: d, _outputs: x } = this.$props, { comAry: g } = t, u = [];
      return g.forEach((a, j) => {
        var B;
        const { id: S, def: f, name: w } = a, F = n.getComInfo(S), { hasPermission: O } = o, G = (B = F == null ? void 0 : F.model) == null ? void 0 : B.permissions;
        if (G && typeof O == "function" && !O(G.id))
          return;
        if (s(f)) {
          const ne = n.get({ comId: S, scope: y, _ioProxy: {
            inputs: p,
            outputs: d,
            _inputs: l,
            _outputs: x
          } }), he = (y ? y.id : "") + j;
          u.push({
            id: S,
            props: {
              key: he,
              com: a,
              getComDef: s,
              registSpm: i,
              context: n,
              scope: y,
              props: ne,
              env: o,
              _env: e,
              // template
              onError: c,
              logger: _
              // createPortal
              // __rxui_child__
            },
            component: RenderCom,
            name: w,
            inputs: ne.inputsCallable,
            style: ne.style
          });
        } else
          console.error(`组件 (namespace = {${f.namespace}}）未找到.`);
      }), u;
    },
    classes() {
      const { root: o, className: e, params: t, propsStyle: n } = this.$props, i = (t == null ? void 0 : t.style) || (t == null ? void 0 : t._style) || n;
      return `${this.calSlotClasses(i || {})}${o && e ? ` ${e}` : ""}`;
    },
    styles() {
      const { root: o, propsStyle: e, params: t } = this.$props, n = (t == null ? void 0 : t.style) || (t == null ? void 0 : t._style), s = n || e;
      return { ...this.calSlotStyles(s || {}, !!n, o), ...e };
    }
  },
  methods: {
    calSlotStyles(o, e, t) {
      const {
        paddingLeft: n,
        paddingTop: s,
        paddingRight: i,
        paddingBottom: c,
        background: _,
        backgroundColor: y,
        backgroundImage: p,
        backgroundPosition: l,
        backgroundRepeat: d,
        backgroundSize: x,
        ...g
      } = o;
      let u = {
        paddingLeft: n || 0,
        paddingTop: s || 0,
        paddingRight: i || 0,
        paddingBottom: c || 0,
        //height: style.customHeight || '100%'
        // backgroundColor: backgroundColor || (root ? '#ffffff' : void 0), // TODO
        backgroundColor: y,
        backgroundImage: p,
        backgroundPosition: l,
        backgroundRepeat: d,
        backgroundSize: x
      };
      if (_)
        if (typeof _ == "object") {
          const {
            background: j,
            backgroundImage: S,
            backgroundColor: f,
            backgroundRepeat: w,
            backgroundSize: F
          } = _;
          u.backgroundRepeat = w, u.backgroundSize = F, j ? u.background = j : (u.backgroundImage = S, u.backgroundColor = f);
        } else
          u.background = _;
      return e && (u = Object.assign(u, g)), u;
    },
    calSlotClasses(o) {
      var s, i;
      const e = this.$style, t = [e.slot, "slot"], n = o;
      if (n) {
        ((s = n.layout) == null ? void 0 : s.toLowerCase()) == "flex-column" ? t.push(e.lyFlexColumn) : ((i = n.layout) == null ? void 0 : i.toLowerCase()) == "flex-row" && t.push(e.lyFlexRow);
        const c = n.justifyContent;
        c && (c.toUpperCase() === "FLEX-START" ? t.push(e.justifyContentFlexStart) : c.toUpperCase() === "CENTER" ? t.push(e.justifyContentFlexCenter) : c.toUpperCase() === "FLEX-END" ? t.push(e.justifyContentFlexFlexEnd) : c.toUpperCase() === "SPACE-AROUND" ? t.push(e.justifyContentFlexSpaceAround) : c.toUpperCase() === "SPACE-BETWEEN" && t.push(e.justifyContentFlexSpaceBetween));
        const _ = n.alignItems;
        _ && (_.toUpperCase() === "FLEX-START" ? t.push(e.alignItemsFlexStart) : _.toUpperCase() === "CENTER" ? t.push(e.alignItemsFlexCenter) : _.toUpperCase() === "FLEX-END" && t.push(e.alignItemsFlexFlexEnd));
      }
      return t.join(" ");
    }
  }
};
var _sfc_render$4 = function o() {
  var e = this, t = e._self._c;
  return t("div", { class: e.classes, style: e.styles, attrs: { "data-isslot": "1" } }, [e._l(e.comAry, function(n) {
    return t(n.component, e._b({ key: n.id, tag: "component" }, "component", n.props, !1));
  }), t("div")], 2);
}, _sfc_staticRenderFns$4 = [];
const __cssModules$1 = {
  $style: style0$1
};
function _sfc_injectStyles$1(o) {
  for (var e in __cssModules$1)
    this[e] = __cssModules$1[e];
}
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  !1,
  _sfc_injectStyles$1,
  null,
  null,
  null
);
const RenderSlot = __component__$4.exports, _sfc_main$3 = {
  components: {
    RenderSlot
  },
  props: {
    json: {
      type: Object
    },
    opts: {
      type: Object
    },
    propsStyle: {
      type: Object
    },
    className: {
      type: String
    },
    root: {
      type: Boolean
    }
  },
  created() {
    const { json: o, opts: e } = this.$props;
    this.hasUi = o.rtType !== "js";
    let t = {};
    e.comDefs && Object.assign(t, e.comDefs);
    let n = [...window.__comlibs_edit_ || [], ...window.__comlibs_rt_ || []];
    n.push(coreLib), n.forEach((s) => {
      const i = s.comAray;
      i && Array.isArray(i) && this.regAry(i, t);
    }), this.comDefs = t, e.env.renderModule || (e.env.renderModule = (s, i) => ({ json: s, opts: { ...i, env: e.env } }));
    try {
      let s, i = !0;
      const c = executor({
        json: o,
        getComDef: this.getComDef,
        events: e.events,
        env: e.env,
        ref(_) {
          s = _, typeof e.ref == "function" && (e.ref(_), i = !1);
        },
        onError: this.onError,
        debug: e.debug,
        debugLogger: e.debugLogger,
        logger: this.logger,
        scenesOperate: e.scenesOperate
      }, {
        //////TODO goon
        observable: e.observable || Vue.observable
        //传递获取响应式的方法
      });
      this.context = c, this.refs = s, this.activeTriggerInput = i;
    } catch (s) {
      throw console.error(s), new Error("导出的JSON.script执行异常.");
    }
  },
  mounted() {
    const { opts: o, json: e } = this.$props;
    if (!o.disableAutoRun) {
      if (this.activeTriggerInput) {
        const { inputs: t } = this.refs, n = e.inputs;
        t && Array.isArray(n) && n.forEach((s) => {
          const { id: i, mockData: c } = s;
          let _;
          if (o.debug && typeof c < "u")
            try {
              _ = JSON.parse(decodeURIComponent(c));
            } catch {
              _ = c;
            }
          t[i](_);
        });
      }
      this.refs.run();
    }
  },
  computed: {
    logger() {
      return {
        ...console
      };
    },
    onError() {
      return (o) => {
        console.error(o);
      };
    },
    props() {
      const { json: o, opts: e, propsStyle: t, className: n, root: s = !0 } = this.$props;
      return {
        env: e.env,
        propsStyle: t,
        _env: e._env,
        registSpm: e.registSpm,
        propsSlot: o.slot,
        getComDef: this.getComDef,
        context: this.context,
        className: n,
        onError: this.onError,
        logger: this.logger,
        root: s
        // __rxui_child__={!opts.observable}
        // createPortal={opts.createPortal || (() => {})}
      };
    }
  },
  methods: {
    regAry(o, e) {
      o.forEach((t) => {
        t.comAray ? this.regAry(t.comAray, e) : e[`${t.namespace}-${t.version}`] = t;
      });
    },
    getComDef(o) {
      const { comDefs: e } = this, t = e[o.namespace + "-" + o.version];
      if (!t) {
        const n = [];
        for (let s in e)
          s.startsWith(o.namespace + "-") && n.push(e[s]);
        if (n && n.length > 0) {
          n.sort((i, c) => compareVersion(i.version, c.version));
          const s = n[0];
          return console.warn(`【Mybricks】组件${o.namespace + "@" + o.version}未找到，使用${s.namespace}@${s.version}代替.`), s;
        } else
          throw console.log(e), new Error(`组件${o.namespace + "@" + o.version}未找到，请确定是否存在该组件以及对应的版本号.`);
      }
      return t;
    }
  }
};
var _sfc_render$3 = function o() {
  var e = this, t = e._self._c;
  return e.hasUi ? t("RenderSlot", e._b({}, "RenderSlot", e.props, !1)) : e._e();
}, _sfc_staticRenderFns$3 = [], __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  !1,
  null,
  null,
  null,
  null
);
const Main = __component__$3.exports, main = "_main_1oukw_14", slipInto = "_slipInto_1oukw_1", style0 = {
  main,
  slipInto
}, _sfc_main$2 = {
  components: {
    Main
  },
  props: {
    json: {
      type: Object
    },
    opts: {
      type: Object
    }
  },
  data() {
    return {
      count: 0,
      popupIds: [],
      pageScenes: []
    };
  },
  created() {
    const { json: o, opts: e } = this.$props;
    if (e.sceneId) {
      const y = o.scenes.findIndex((p) => p.id === e.sceneId);
      if (y !== -1) {
        const p = o.scenes.splice(y, 1);
        o.scenes.unshift(...p), p[0].type === "popup" && this.setPopupIds([p[0].id]);
      }
    }
    const t = [];
    o.scenes.forEach((y, p) => {
      y.type === "popup" ? p || this.setPopupIds([y.id]) : t.push(y);
    }), this.setPageScenes(t);
    const { modules: n, definedComs: s } = o;
    if (e.env.getDefinedComJSON || (e.env.getDefinedComJSON = (y) => s[y].json), e.env.getModuleJSON || (e.env.getModuleJSON = (y) => {
      var u;
      const p = (u = n == null ? void 0 : n[y]) == null ? void 0 : u.json;
      if (!p)
        return p;
      const { global: l } = o;
      let d = {}, x = {}, g = {};
      return l && (d = l.comsReg, x = l.consReg, g = l.pinRels, Object.keys(d).forEach((a) => {
        d[a].global = !0;
      })), Object.assign(p.coms, d), Object.assign(p.cons, x), Object.assign(p.pinRels, g), p;
    }), this.scenesMap = o.scenes.reduce((y, p, l) => {
      var d;
      return {
        ...y,
        [p.id]: {
          show: l === 0,
          todo: [],
          json: p,
          disableAutoRun: !!l,
          useEntryAnimation: !1,
          type: ((d = p.slot) == null ? void 0 : d.showType) || p.type
        }
      };
    }, {}), this.scenesOperateInputsTodo = {}, this.themes = o.themes, this.permissions = o.permissions || [], this.globalVarMap = {}, e.ref) {
      const y = e.ref;
      e.ref = (p) => (l) => (p(l), y.call(e, l));
    } else
      e.ref = (y) => (p) => {
        y(p);
      };
    const i = {}, c = [], { global: _ } = o;
    if (_) {
      const { fxFrames: y } = _;
      Array.isArray(y) && y.forEach((p) => {
        var S;
        const { id: l } = p, d = {};
        i[l] = d;
        const x = {
          open({ todo: f, frameId: w, parentScope: F }) {
            const O = i[w];
            O != null && O._refs && (O.parentScope = F, O._refs.inputs[f.pinId](f.value, void 0, !1), O._refs.run());
          },
          inputs({ frameId: f, parentScope: w, value: F, pinId: O }) {
            const G = scenesMap[f];
            G ? (G.parentScope = w, G._refs ? G._refs.inputs[O](F) : G.todo = G.todo.concat({ type: "inputs", todo: {
              pinId: O,
              value: F
            } })) : scenesOperateInputsTodo[f] ? scenesOperateInputsTodo[f].todo.push({ frameId: f, parentScope: w, value: F, pinId: O }) : scenesOperateInputsTodo[f] = {
              parentScope: w,
              todo: [{ value: F, pinId: O }]
            };
          },
          _notifyBindings(f, w) {
            const { bindingsTo: F } = w.model;
            if (F)
              for (let O in F)
                for (let G in scenesMap) {
                  const D = scenesMap[G];
                  if (D.json.coms[O])
                    if (D._refs)
                      this._notifyBindings(D._refs, O, F[O], f);
                    else {
                      const ne = F[O];
                      D.todo = D.todo.concat({ type: "globalVar", todo: { comId: O, bindings: ne, value: f } });
                    }
                }
          },
          getGlobalComProps(f) {
            return scenesMap[o.scenes[0].id]._refs.get({ comId: f });
          },
          exeGlobalCom({ com: f, value: w, pinId: F }) {
            const O = f.id;
            this.globalVarMap[O] = w, Object.keys(scenesMap).forEach((D) => {
              const B = scenesMap[D];
              if (B.show && B._refs) {
                const ne = B._refs.get({ comId: O });
                ne && ne.outputs[F](w, !0, null, !0);
              }
            });
            const G = e.env._context.getRefsMap();
            Object.entries(G).forEach(([D, B]) => {
              const ne = B.get({ comId: O });
              ne && ne.outputs[F](w, !0, null, !0);
            });
          }
        }, g = {
          ...e,
          env: {
            ...e.env,
            canvas: Object.assign({
              id: l,
              type: (window == null ? void 0 : window.document.body.clientWidth) <= 414 ? "mobile" : "pc",
              // 服务端渲染没有window
              open: async (f, w, F) => {
                var G;
                let O = scenesMap[f];
                if (!O) {
                  if (typeof e.scenesLoader != "function") {
                    console.error(`缺少场景信息: ${f}`);
                    return;
                  }
                  const D = await e.scenesLoader({ id: f });
                  if (O = {
                    disableAutoRun: !1,
                    json: D,
                    show: !1,
                    parentScope: null,
                    todo: [],
                    type: ((G = D.slot) == null ? void 0 : G.showType) || D.type,
                    useEntryAnimation: !1
                  }, scenesMap[f] = O, D.type === "popup" || setPageScenes((B) => [...B, D]), scenesOperateInputsTodo[f]) {
                    const { parentScope: B, todo: ne } = scenesOperateInputsTodo[f];
                    O.parentScope = B, ne.forEach(({ value: he, pinId: ye, parentScope: xe }) => {
                      O.todo = O.todo.concat({ type: "inputs", todo: {
                        pinId: ye,
                        value: he
                      } });
                    });
                  }
                }
                F ? Object.entries(scenesMap).forEach(([D, B]) => {
                  D === f ? (F === "blank" ? B.useEntryAnimation = !0 : B.useEntryAnimation = !1, B.show = !0, B.type === "popup" ? this.setPopupIds([...this.popupIds, f]) : setCount((ne) => ne + 1)) : (B.show = !1, B.type === "popup" ? this.setPopupIds(this.popupIds.filter((ne) => ne !== B.json.id)) : setCount((ne) => ne + 1));
                }) : O.show || (F === "blank" ? O.useEntryAnimation = !0 : O.useEntryAnimation = !1, O.show = !0, O.type === "popup" ? this.setPopupIds([...this.popupIds, f]) : setCount((D) => D + 1));
              }
            }, (S = e.env) == null ? void 0 : S.canvas)
          },
          disableAutoRun: !0,
          ref: e.ref((f) => {
            d._refs = f;
            const { inputs: w, outputs: F } = f;
            p.outputs.forEach((O) => {
              F(O.id, (G) => {
                var D;
                (D = d.parentScope) == null || D.outputs[O.id](G);
              });
            });
          }),
          _env: {
            loadCSSLazy() {
            },
            currentScenes: {
              close() {
              }
            }
          },
          scenesOperate: x
        };
        let u = _.comsReg, a = _.consReg, j = _.pinRels;
        Object.keys(u).forEach((f) => {
          u[f].global = !0;
        }), Object.assign(p.coms, u), Object.assign(p.cons, a), Object.assign(p.pinRels, j), c.push({
          key: l,
          component: Main,
          json: { ...p, rtType: "js" },
          options: g
        });
      });
    }
    this.fxFramesMap = i, this.fxFramesJsx = c;
  },
  computed: {
    scenes() {
      const { pageScenes: o, scenesMap: e } = this;
      if (!o.length)
        return [];
      const { json: t } = this.$props, { global: n } = t;
      let s = {}, i = {}, c = {};
      return n && (s = n.comsReg, i = n.consReg, c = n.pinRels, Object.keys(s).forEach((_) => {
        s[_].global = !0;
      })), o.map((_, y) => {
        const { id: p } = _;
        Object.assign(_.coms, s), Object.assign(_.cons, i), Object.assign(_.pinRels, c);
        const l = e[p];
        return {
          show: l.show,
          key: p,
          json: { ..._, scenesMap: e },
          opts: this.options(p),
          // className: scene.useEntryAnimation ? css.main : ''
          className: l.useEntryAnimation ? $style.main : "",
          style: l.type === "popup" ? { position: "absolute", top: 0, left: 0, backgroundColor: "#ffffff00" } : {}
        };
      });
    },
    popups() {
      const { popupIds: o, scenesMap: e } = this;
      if (!o.length)
        return [];
      const { json: t } = this.$props, { global: n } = t;
      let s = {}, i = {}, c = {};
      return n && (s = n.comsReg, i = n.consReg, c = n.pinRels, Object.keys(s).forEach((_) => {
        s[_].global = !0;
      })), o.map((_) => {
        const p = e[_].json, { id: l } = p;
        return Object.assign(p.coms, s), Object.assign(p.cons, i), Object.assign(p.pinRels, c), {
          key: p.id,
          json: { ...p, scenesMap: e },
          opts: this.options(l),
          style: { position: "absolute", top: 0, left: 0, backgroundColor: "#ffffff00" }
        };
      });
    }
  },
  methods: {
    setCount(o) {
      this.count = o;
    },
    setPopupIds(o) {
      this.popupIds = o;
    },
    setPageScenes(o) {
      this.pageScenes = o;
    },
    options(o) {
      var p;
      const { opts: e } = this.$props, { scenesMap: t, themes: n, permissions: s } = this, i = this, c = t[o], _ = e.env.hasPermission, y = {
        open({ todo: l, frameId: d, parentScope: x }) {
          const g = t[d];
          if (g)
            g.show || (g.show = !0, g.todo = g.todo.concat({ type: "inputs", todo: l }), g.parentScope = x, g.type === "popup" ? i.setPopupIds([...i.popupIds, d]) : setCount((u) => u + 1));
          else {
            const u = fxFramesMap[d];
            u != null && u._refs && (u.parentScope = x, u._refs.inputs[l.pinId](l.value, void 0, !1), u._refs.run());
          }
        },
        inputs({ frameId: l, parentScope: d, value: x, pinId: g }) {
          const u = t[l];
          u ? (u.parentScope = d, u._refs ? u._refs.inputs[g](x) : u.todo = u.todo.concat({ type: "inputs", todo: {
            pinId: g,
            value: x
          } })) : scenesOperateInputsTodo[l] ? scenesOperateInputsTodo[l].todo.push({ frameId: l, parentScope: d, value: x, pinId: g }) : scenesOperateInputsTodo[l] = {
            parentScope: d,
            todo: [{ value: x, pinId: g }]
          };
        },
        _notifyBindings(l, d) {
          const { bindingsTo: x } = d.model;
          if (x)
            for (let g in x)
              for (let u in t) {
                const a = t[u];
                if (a.json.coms[g])
                  if (a._refs)
                    this._notifyBindings(a._refs, g, x[g], l);
                  else {
                    const S = x[g];
                    a.todo = a.todo.concat({ type: "globalVar", todo: { comId: g, bindings: S, value: l } });
                  }
              }
        },
        getGlobalComProps(l) {
          return t[json.scenes[0].id]._refs.get({ comId: l });
        },
        exeGlobalCom({ com: l, value: d, pinId: x }) {
          const g = l.id;
          i.globalVarMap[g] = d, Object.keys(t).forEach((a) => {
            const j = t[a];
            if (j.show && j._refs) {
              const S = j._refs.get({ comId: g });
              S && S.outputs[x](d, !0, null, !0);
            }
          });
          const u = e.env._context.getRefsMap();
          Object.entries(u).forEach(([a, j]) => {
            const S = j.get({ comId: g });
            S && S.outputs[x](d, !0, null, !0);
          });
        }
      };
      return {
        ...e,
        env: {
          ...e.env,
          themes: n,
          permissions: s,
          hasPermission: typeof _ == "function" ? (l) => {
            if (typeof l == "string") {
              const d = s.find((x) => x.id === l);
              return _({ permission: d });
            }
            return _(l);
          } : null,
          canvas: Object.assign({
            id: o,
            type: (window == null ? void 0 : window.document.body.clientWidth) <= 414 ? "mobile" : "pc",
            open: async (l, d, x) => {
              var u;
              let g = t[l];
              if (!g) {
                if (typeof e.scenesLoader != "function") {
                  console.error(`缺少场景信息: ${l}`);
                  return;
                }
                const a = await e.scenesLoader({ id: l });
                if (g = {
                  disableAutoRun: !1,
                  json: a,
                  show: !1,
                  parentScope: null,
                  todo: [],
                  type: ((u = a.slot) == null ? void 0 : u.showType) || a.type,
                  useEntryAnimation: !1
                }, t[l] = g, a.type === "popup" || setPageScenes((j) => [...j, a]), scenesOperateInputsTodo[l]) {
                  const { parentScope: j, todo: S } = scenesOperateInputsTodo[l];
                  g.parentScope = j, S.forEach(({ value: f, pinId: w, parentScope: F }) => {
                    g.todo = g.todo.concat({ type: "inputs", todo: {
                      pinId: w,
                      value: f
                    } });
                  });
                }
              }
              x ? Object.entries(t).forEach(([a, j]) => {
                a === l ? (x === "blank" ? j.useEntryAnimation = !0 : j.useEntryAnimation = !1, j.show = !0, j.type === "popup" ? i.setPopupIds([...i.popupIds, l]) : setCount((S) => S + 1)) : (j.show = !1, j.type === "popup" ? i.setPopupIds(i.popupIds.filter((S) => S !== j.json.id)) : setCount((S) => S + 1));
              }) : g.show || (x === "blank" ? g.useEntryAnimation = !0 : g.useEntryAnimation = !1, g.show = !0, g.type === "popup" ? i.setPopupIds([...i.popupIds, l]) : setCount((a) => a + 1));
            }
          }, (p = e.env) == null ? void 0 : p.canvas)
        },
        get disableAutoRun() {
          return c.disableAutoRun;
        },
        ref: e.ref((l) => {
          c._refs = l;
          const d = c.todo, { inputs: x, outputs: g } = l, u = c.disableAutoRun;
          c.json.outputs.forEach((a) => {
            g(a.id, (j) => {
              var S;
              c.show = !1, c.todo = [], c._refs = null, (S = c.parentScope) == null || S.outputs[a.id](j), c.parentScope = null, c.type === "popup" ? i.setPopupIds(i.popupIds.filter((f) => f !== c.json.id)) : setCount((f) => f + 1);
            });
          }), d.length ? (d.forEach(({ type: a, todo: j }) => {
            if (a === "inputs")
              Promise.resolve().then(() => {
                x[j.pinId](j.value, o);
              });
            else if (a === "globalVar") {
              const { comId: S, value: f, bindings: w } = j;
              i._notifyBindings(l, S, w, f);
            }
          }), c.todo = []) : u || Promise.resolve().then(() => {
            var a, j;
            c.disableAutoRun = !0, (j = (a = c.json.inputs) == null ? void 0 : a.forEach) == null || j.call(a, (S) => {
              const { id: f, mockData: w } = S;
              let F;
              if (e.debug && typeof w < "u")
                try {
                  F = JSON.parse(decodeURIComponent(w));
                } catch {
                  F = w;
                }
              x[f](F);
            });
          }), u && Promise.resolve().then(() => {
            l.run();
          }), Object.entries(i.globalVarMap).forEach(([a, j]) => {
            const S = c._refs.get({ comId: a });
            S && S.outputs.changed(j, !0, null, !0);
          });
        }),
        _env: {
          loadCSSLazy() {
          },
          currentScenes: {
            close() {
              c.show = !1, c.todo = [], c._refs = null, c.type === "popup" ? (console.log(i, "that"), i.setPopupIds(i.popupIds.filter((l) => l !== c.json.id))) : setCount((l) => l + 1);
            }
          }
        },
        scenesOperate: y
      };
    },
    _notifyBindings(o, e, t, n) {
      const s = o.get({ comId: e });
      s && Array.isArray(t) && t.forEach((i) => {
        let c = s;
        const _ = i.split(".");
        _.forEach((y, p) => {
          p !== _.length - 1 ? c = c[y] : c[y] = n;
        });
      });
    }
  }
};
var _sfc_render$2 = function o() {
  var e = this, t = e._self._c;
  return t("div", [e._l(e.fxFramesJsx, function(n) {
    return t(n.component, { key: n.key, tag: "component", attrs: { json: n.json, opts: n.options } });
  }), e._l(e.scenes, function(n) {
    return n.show ? t("Main", { key: n.key, attrs: { json: n.json, opts: n.opts, className: n.className, propsStyle: n.style } }) : e._e();
  }), e._l(e.popups, function(n) {
    return t("Main", { key: n.key, attrs: { json: n.json, opts: n.opts, className: n.className, propsStyle: n.style } });
  })], 2);
}, _sfc_staticRenderFns$2 = [];
const __cssModules = {
  $style: style0
};
function _sfc_injectStyles(o) {
  for (var e in __cssModules)
    this[e] = __cssModules[e];
}
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  !1,
  _sfc_injectStyles,
  null,
  null,
  null
);
const MultiScene = __component__$2.exports;
console.log("%c @mybricks/render-web-vue %c@0.0.1", "color:#FFF;background:#fa6400", "", "");
class Context {
  constructor() {
    Ve(this, "_refsMap", {});
  }
  setRefs(e, t) {
    this._refsMap[e] = t;
  }
  getRefsMap() {
    return this._refsMap;
  }
}
const _sfc_main$1 = {
  functional: !0,
  render(o, { props: e }) {
    const { json: t, opts: n } = e;
    if (!t)
      return null;
    n.env._context || (n.env._context = new Context());
    const s = Array.isArray(t.scenes), i = s ? MultiScene : Main;
    return !s && t.type === "module" && (e.root = !1), o(i, { props: e }, []);
  }
}, _sfc_render$1 = null, _sfc_staticRenderFns$1 = null;
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  !1,
  null,
  null,
  null,
  null
);
const Render = __component__$1.exports, _sfc_main = {
  components: {
    Render
  },
  props: {
    json: {
      type: Object
    },
    opts: {
      type: Object
    }
  }
};
var _sfc_render = function o() {
  var e = this, t = e._self._c;
  return t("Render", e._b({}, "Render", this.$props, !1));
}, _sfc_staticRenderFns = [], __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  !1,
  null,
  null,
  null,
  null
);
const App = __component__.exports;
function render(o, e) {
  return Vue.extend({
    render: (t) => t(App, { props: { json: o, opts: e } })
  });
}
window["mybricks-render-vue2"] = function o({ json: e, opts: t }, n) {
  new Vue({
    render: (s) => s(App, { props: { json: e, opts: t } }, [])
  }).$mount(n);
};
export {
  render
};
