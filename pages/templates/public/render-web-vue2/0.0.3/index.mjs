var Ae = Object.defineProperty;
var Me = (o, e, t) => e in o ? Ae(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var ke = (o, e, t) => (Me(o, typeof e != "symbol" ? e + "" : e, t), t);
import Vue from "vue";
import require$$0 from "react";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var comlibCore = { exports: {} };
(function(module, exports) {
  (function(o, e) {
    module.exports = e(require$$0);
  })(commonjsGlobal, (__WEBPACK_EXTERNAL_MODULE__359__) => (() => {
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
    }, 359: (o) => {
      o.exports = __WEBPACK_EXTERNAL_MODULE__359__;
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
      __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => b, getCom: () => x });
      const o = JSON.parse('{"title":"Fn计算","namespace":"mybricks.core-comlib.fn","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"Fn计算","icon":"./icon.png","runtime":"./Fn.tsx","rtType":"js","visibility":false}'), e = JSON.parse('{"visibility":false,"title":"变量","namespace":"mybricks.core-comlib.var","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"变量","icon":"./icon.png","data":"./data.json","runtime":"./Var.tsx","editors":"./editors.tsx","rtType":"js","inputs":[{"id":"get","title":"读取","schema":{"type":"any"},"rels":["return"]},{"id":"set","title":"赋值","schema":{"type":"follow"},"rels":["return"]},{"id":"reset","title":"重置","schema":{"type":"any"}}],"outputs":[{"id":"return","title":"完成","schema":{"type":"unknown"}},{"id":"changed","title":"当值发生变化","schema":{"type":"unknown"}}]}');
      function t(a) {
        if (a && typeof a == "object")
          try {
            return a instanceof FormData ? a : JSON.parse(JSON.stringify(a));
          } catch {
            return a;
          }
        return a;
      }
      const n = JSON.parse('{"title":"类型转换","visibility":false,"namespace":"mybricks.core-comlib.type-change","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"类型转换","icon":"./icon.png","runtime":"./rt.tsx","editors":"./editors.tsx","rtType":"js","inputs":[{"id":"from","title":"从","schema":{"type":"follow"},"rels":["to"]}],"outputs":[{"id":"to","title":"到","schema":{"type":"follow"},"conMax":1,"editable":true}]}');
      var s = __webpack_require__(356);
      const i = JSON.parse('{"deprecated":true,"visibility":false,"title":"连接器","namespace":"mybricks.core-comlib.connector","author":"MyBricks","author_name":"MyBricks","version":"1.0.0","description":"连接器","runtime":"./runtime.ts","editors":"./editors.tsx","icon":"./icon.svg","rtType":"js-autorun","inputs":[{"id":"call","rels":["then","catch"],"title":"调用","schema":{"type":"object"}}],"outputs":[{"id":"then","title":"结果","schema":{"type":"unknown"}},{"id":"catch","title":"发生错误","schema":{"type":"string"}}]}');
      function c({ env: a, data: _, outputs: S, onError: f }, I = {}) {
        if (_.connector)
          try {
            a.callConnector(_.connector, I, _.connectorConfig).then((j) => {
              S.then(j);
            }).catch((j) => {
              S.catch(j);
            });
          } catch (j) {
            console.error(j), S.catch(`执行错误 ${j.message || j}`);
          }
        else
          S.catch("没有选择接口");
      }
      const g = JSON.parse('{"visibility":false,"title":"作用域输入","namespace":"mybricks.core-comlib.frame-input","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"作用域输入","rtType":"js","runtime":"./runtime.ts","editors":"./editor.tsx","inputs":[{"id":"getCurValue","title":"获取","schema":{"type":"any"},"rels":["return"]}],"outputs":[{"id":"return","title":"结果","schema":{"type":"follow"}}]}'), d = JSON.parse('{"visibility":false,"title":"打开对话框","namespace":"mybricks.core-comlib.scenes","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"切换场景","icon":"./icon.png","runtime":"./runtime.ts","data":"./data.json","rtType":"js","inputs":[{"id":"open","title":"打开","schema":{"type":"any"}}]}'), p = JSON.parse('{"title":"模块","namespace":"mybricks.core-comlib.module","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"模块","icon":"./icon.png","data":"./data.json","runtime":"./runtime.ts","editors":"./editors.ts"}');
      var l = __webpack_require__(359);
      const u = { id: "mybricks-core-comlib", title: "Mybrics核心组件库", author: "CheMingjun", icon: "", version: "1.0.1", comAray: [C({ comDef: o, rt: function({ inputs: a, outputs: _ }) {
      } }), C({ comDef: e, rt: function({ env: a, data: _, outputs: S, inputs: f, _notifyBindings: I }) {
        f.get((j, w) => {
          const U = t(_.val !== void 0 ? _.val : _.initValue);
          w.return(U);
        }), f.set((j, w) => {
          _.val = j;
          const U = t(j);
          S.changed(U, !0), I(U), w.return(U);
        }), f.reset(() => {
          const j = _.initValue;
          _.val = j;
          const w = t(j);
          S.changed(w, !0), I(w);
        });
      } }), C({ comDef: n, rt: s.Z }), C({ comDef: i, rt: function({ env: a, data: _, inputs: S, outputs: f, onError: I }) {
        a.runtime && (_.immediate ? c({ env: a, data: _, outputs: f }) : S.call((j) => {
          c({ env: a, data: _, outputs: f, onError: I }, j);
        }));
      } }), C({ comDef: g, rt: function({ env: a, data: _, inputs: S, outputs: f }) {
        a.runtime && S.getCurValue((I, j) => {
          j.return(I);
        });
      } }), C({ comDef: d, rt: function({ env: a, data: _, inputs: S, _inputs: f, _inputsCallable: I }) {
        S.open((j) => {
          a.canvas.open(_._sceneId, j, _._sceneShowType === "popup" ? null : _.openType), I._open(j);
        });
      } }), C({ comDef: p, rt: function({ env: a, data: _, inputs: S, outputs: f }) {
        return (0, l.useMemo)(() => {
          const I = a.getModuleJSON(_.definedId);
          return a.renderModule(I, { ref(j) {
            if (a.runtime) {
              const { inputs: w, outputs: U } = I;
              w.forEach(({ id: B }) => {
                S[B]((H) => {
                  j.inputs[B](H);
                });
              }), U.forEach(({ id: B }) => {
                j.outputs(B, f[B]);
              });
            }
            j.run();
          }, disableAutoRun: !0 });
        }, []);
      } })] }, b = u;
      function x(a) {
        return u.comAray.find((_) => _.namespace === a);
      }
      function C({ comDef: a, rt: _, data: S }) {
        return Object.assign(a, { runtime: _, data: S });
      }
    })(), __webpack_exports__;
  })());
})(comlibCore);
var comlibCoreExports = comlibCore.exports;
const coreLib = /* @__PURE__ */ getDefaultExportFromCjs(comlibCoreExports), globalKey = "__IOEventList__", ioLogger = {
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
    var g = parseFloat(c);
    return !c || g <= t ? i : "".concat(toFixed(g / e, n)).concat(s);
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
    logger: g,
    debug: d,
    debugLogger: p
  } = o, l = s._context, u = o.scenesOperate || s.scenesOperate, {
    slot: b,
    coms: x = {},
    comsAutoRun: C = {},
    cons: a = [],
    pinRels: _ = {},
    pinProxies: S = {},
    pinValueProxies: f = {},
    type: I
  } = t, j = s, w = {}, U = {}, B = {}, H = {}, G = {};
  Object.keys(a).forEach((m) => {
    const h = a[m], { startPinParentKey: r } = h[0];
    r && (G[r] = m);
  });
  const fe = {}, ae = {}, _e = {};
  function ye(m, h, r) {
    if (m === "com") {
      const { com: J, pinHostId: v, val: E, fromCon: $, notifyAll: y, comDef: O, conId: z } = h;
      p ? p("com", "output", { id: J.id, pinHostId: v, val: E, fromCon: $, notifyAll: y, comDef: O, sceneId: t.id, conId: z }, r) : logOutputVal(J.title, O, v, E);
    } else if (m === "frame") {
      const { comId: J, frameId: v, pinHostId: E, val: $, sceneId: y, conId: O } = h;
      p && p("frame", "output", { comId: J, frameId: v, pinHostId: E, val: $, sceneId: y || t.id, conId: O }, r);
    }
  }
  function ge(m, h) {
    const { com: r, pinHostId: J, val: v, frameKey: E, finishPinParentKey: $, comDef: y, conId: O } = m;
    p ? p("com", "input", { id: r.id, pinHostId: J, val: v, frameKey: E, finishPinParentKey: $, comDef: y, sceneId: t.id, conId: O }, h) : logInputVal(r.title, y, J, v);
  }
  function de(m, h, r, J, v, E) {
    function $(y, O, z) {
      var ie, T;
      const R = S[y.comId + "-" + y.pinId];
      if (R) {
        if (_e[`${R.frameId}-${R.pinId}`] = z, v && v.finishPinParentKey !== y.startPinParentKey)
          return;
        if (R.type === "frame") {
          const P = K(y.comId, O);
          let k;
          k = {
            // id: nextScope?.id || uuid(10, 16),
            id: uuid$1(10, 16),
            frameId: R.frameId,
            parent: O,
            proxyComProps: P
            //current proxied component instance
          };
          const A = y.def.namespace === "mybricks.core-comlib.frame-output";
          if (A && O && (R.frameId = O.proxyComProps.id, k = O.parent), y.def.namespace === "mybricks.core-comlib.fn") {
            const { configs: D } = P.data;
            D && Object.entries(D).forEach(([M, L]) => {
              const { frameId: W, comId: V, pinId: Q } = R, oe = V ? `${V}-${W}` : `${W}`, pe = a[oe + "-" + M];
              pe && de(null, pe, L, k);
            });
          }
          ce({ options: R, value: z, scope: k, comProps: P }), A || re({ frameId: R.frameId, scope: k });
          return;
        }
      }
      if (y.type === "com")
        v ? v.finishPinParentKey === y.startPinParentKey && be(y, z, O) : be(y, z, O);
      else if (y.type === "frame") {
        if (v && v.finishPinParentKey !== y.startPinParentKey)
          return;
        if (y.comId) {
          if (y.direction === "inner-input") {
            const P = U[y.comId + "-" + y.frameId + "-" + ((ie = O == null ? void 0 : O.parent) != null && ie.id ? O.parent.id + "-" : "") + y.pinId];
            P && P(z);
          } else if (y.direction === "inner-output" && y.pinType === "joint") {
            const P = a[y.comId + "-" + y.frameId + "-" + y.pinId];
            P && de(null, P, z);
          }
        } else {
          const P = O == null ? void 0 : O.proxyComProps;
          if (P) {
            const k = P.outputs[y.pinId];
            if (k) {
              k(z, O.parent);
              return;
            }
          }
          (T = H[y.pinId]) == null || T.call(H, z);
        }
      } else
        throw new Error("尚未实现");
    }
    h.forEach(async (y) => {
      var A, q;
      const { comId: O, pinId: z, pinType: R, timerPinInputId: ie } = y, T = x[O];
      if (d && y.isIgnored)
        return;
      d && I !== "module" && ((A = l.debuggerPanel) != null && A.hasBreakpoint(y)) ? await ((q = l.debuggerPanel) == null ? void 0 : q.wait(y, () => {
        m && (m[1].conId = y.id, ye(...m, !0));
      })) : ye(...m);
      function P({ pinId: D, value: M }) {
        let L = J;
        const W = D ? { ...y, pinId: D } : y;
        if (E) {
          const V = W.frameKey;
          if (!V)
            throw new Error("数据异常，请检查toJSON结果.");
          if (V === ROOT_FRAME_KEY)
            $(W, {}, M);
          else {
            const Q = V.split("-");
            if (Q.length >= 2) {
              const oe = ee(Q[0], Q[1], L, E);
              oe.curScope ? (oe.curScope !== L && (L = oe.curScope), $(W, L, M)) : oe.pushTodo((pe) => {
                pe !== L && (L = pe), $(W, L, M);
              });
            }
          }
        } else {
          const V = W.frameKey.split("-");
          if (V.length >= 2 && !L) {
            const Q = ee(V[0], V[1], null, !1);
            if ((Q == null ? void 0 : Q.type) === "scope" && !(Q != null && Q.curScope)) {
              Q.pushTodo((oe) => {
                oe !== L && (L = oe), $(W, L, M);
              });
              return;
            }
          }
          $(W, L, M);
        }
      }
      if (R === "timer")
        P({ value: r });
      else {
        const { isReady: D, isMultipleInput: M, pinId: L, value: W, cb: V } = k({ pinId: z, value: r, component: T });
        if (D) {
          const Q = {
            pinId: M ? L : null,
            value: W
          };
          if (ie) {
            const oe = J ? ie + "-" + J.id : ie, pe = ae[oe];
            if (pe) {
              const { ready: je, todo: X } = pe;
              if (je) {
                let F = !1;
                Object.entries(X).forEach(([N, Y]) => {
                  N === L ? (P(Q), F = !0) : Y();
                }), F || P(Q), V == null || V(), Reflect.deleteProperty(ae, oe);
              } else
                X[L] = () => {
                  V == null || V(), P(Q);
                };
            } else
              ae[oe] = {
                ready: !1,
                todo: {
                  [L]: () => {
                    V == null || V(), P(Q);
                  }
                }
              };
          } else
            V == null || V(), P(Q);
        }
      }
      function k({ pinId: D, value: M, component: L }) {
        let W = D, V = M, Q = !0;
        const oe = D.indexOf(".");
        if (L && oe !== -1) {
          const { inputs: je } = L;
          W = D.substring(0, oe);
          const X = D.substring(oe + 1);
          let F = fe[O];
          F || (F = fe[O] = {}), F[X] = r;
          const N = new RegExp(`${W}.`), Y = je.filter((Z) => !!Z.match(N));
          Object.keys(F).length === Y.length ? V = F : Q = !1;
        }
        let pe = W !== D;
        return {
          pinId: W,
          value: V,
          isReady: Q,
          isMultipleInput: pe,
          cb: pe ? () => {
            Reflect.deleteProperty(fe, O);
          } : null
        };
      }
    });
  }
  function K(m, h) {
    var je;
    const r = x[m];
    if (!r)
      return null;
    const J = m + (r.frameId || ROOT_FRAME_KEY);
    let v = w[J];
    v || (v = w[J] = {});
    let E, $ = h;
    for (!$ && r.parentComId && r.frameId && ($ = (je = w[`${r.parentComId}-${r.frameId}`]) == null ? void 0 : je.curScope); $; ) {
      const X = $.id + "-" + m;
      if ($.frameId === r.frameId) {
        E = $.id;
        const F = v[X];
        if (F)
          return F;
        {
          const N = $.parentComId;
          if (N) {
            if (N === r.paramId || N === r.parentComId)
              break;
          } else
            break;
        }
      }
      $ = $.parent;
    }
    const y = (E ? E + "-" : "") + m, O = v[y];
    if (O)
      return O;
    const z = r.def, R = r.model, ie = JSON.parse(JSON.stringify(R.data)), T = JSON.parse(JSON.stringify(R.style));
    T.__model_style__ = !0;
    const P = {}, k = {}, A = {}, q = (X, F, N, Y) => {
      let Z = k[X];
      Z || (k[X] = Z = []), Z.push({ val: F, fromCon: N, fromScope: Y });
    }, D = function(X) {
      return new Proxy({}, {
        ownKeys(F) {
          return r.inputs;
        },
        getOwnPropertyDescriptor(F) {
          return {
            enumerable: !0,
            configurable: !0
          };
        },
        get(F, N) {
          return function(Y) {
            if (Object.prototype.toString.call(N) === "[object Symbol]")
              return;
            const Z = X == null ? void 0 : X.inputs;
            if (Z) {
              const se = Z[N];
              typeof se == "function" && se(Y);
            }
            P[N] = Y;
            const ne = k[N];
            ne && (ne.forEach(({ val: se, fromCon: le, fromScope: we }) => {
              Y(se, new Proxy({}, {
                //relOutputs
                get(he, $e) {
                  return function(Ie) {
                    if (Object.prototype.toString.call($e) === "[object Symbol]")
                      return;
                    const Ce = W()[$e];
                    if (typeof Ce == "function")
                      Ce(Ie, we || $, le);
                    else
                      throw new Error(`outputs.${$e} not found`);
                  };
                }
              }));
            }), k[N] = void 0);
          };
        }
      });
    }, M = new Proxy({}, {
      get(X, F) {
        return function(N) {
          if (Object.prototype.toString.call(F) === "[object Symbol]")
            return;
          const Y = _[m + "-" + F];
          if (Y) {
            const Z = {}, ne = {};
            return Y.forEach((se) => {
              Z[se] = (le) => {
                ne[se] = le;
              };
            }), Promise.resolve().then(() => {
              be({ comId: m, def: z, pinId: F }, N, h, ne);
            }), Z;
          } else
            be({ comId: m, def: z, pinId: F }, N, h);
        };
      }
    }), L = new Proxy({}, {
      get(X, F) {
        return function(N) {
          if (Object.prototype.toString.call(F) === "[object Symbol]")
            return;
          const Y = S[m + "-" + F];
          Y && (u == null || u.inputs({
            ...Y,
            value: N,
            parentScope: pe
          }));
        };
      }
    }), W = function(X) {
      return new Proxy({}, {
        ownKeys(F) {
          return r.outputs;
        },
        getOwnPropertyDescriptor(F) {
          return {
            enumerable: !0,
            configurable: !0
          };
        },
        get(F, N, Y) {
          const Z = function(ne, se, le, we) {
            if (Object.prototype.toString.call(N) === "[object Symbol]")
              return;
            const he = typeof se == "boolean" && se;
            if (r.global && he && !we) {
              u == null || u.exeGlobalCom({
                com: r,
                value: ne,
                pinId: N
              });
              return;
            }
            const $e = arguments, Ie = X == null ? void 0 : X.outputs;
            if (Ie) {
              const Se = Ie[N];
              typeof Se == "function" && Se(ne);
            }
            let Ce;
            se && typeof se == "object" && (Ce = se);
            const Fe = n(z), Re = R.outputEvents;
            let ue;
            if (Re) {
              const Se = Re[N];
              if (Se && Array.isArray(Se)) {
                const Pe = Se.find((Ee) => Ee.active);
                if (Pe) {
                  const { type: Ee } = Pe;
                  switch (Ee) {
                    case "none":
                      ue = [];
                      break;
                    case "fx":
                      const ve = S[m + "-" + N];
                      if ((ve == null ? void 0 : ve.type) === "frame") {
                        const Oe = `${ve.frameId}-${ve.pinId}`;
                        ue = a[Oe] || [], _e[Oe] = ne;
                      } else
                        ue = [];
                      break;
                    case "defined":
                      break;
                    default:
                      if (ue = [], Array.isArray(s == null ? void 0 : s.events)) {
                        const Oe = s.events.find((Te) => {
                          if (Te.type === Ee)
                            return Te;
                        });
                        Oe && typeof Oe.exe == "function" && Oe.exe({ options: Pe.options });
                      }
                      break;
                  }
                }
              }
            }
            ue = ue || a[m + "-" + N], ue != null && ue.length ? $e.length >= 3 ? de(["com", { com: r, pinHostId: N, val: ne, fromCon: le, notifyAll: he, comDef: Fe }], ue, ne, Ce, le) : de(["com", { com: r, pinHostId: N, val: ne, fromCon: le, notifyAll: he, comDef: Fe }], ue, ne, Ce || h, le, he) : ye("com", { com: r, pinHostId: N, val: ne, fromCon: le, notifyAll: he, comDef: Fe });
          };
          return Z.getConnections = () => a[m + "-" + N] || [], Z;
        }
      });
    }, V = new Proxy({}, {
      get(X, F, N) {
        return function(Y) {
          if (Object.prototype.toString.call(F) === "[object Symbol]")
            return;
          const Z = A[F];
          Z && (Z.forEach((ne) => {
            Y(ne);
          }), A[F] = void 0);
        };
      }
    }), Q = new Proxy({}, {
      get(X, F, N) {
        return function(Y) {
          if (Object.prototype.toString.call(F) === "[object Symbol]")
            return;
          const Z = a[m + "-" + F];
          Z ? de(["com", { com: r, pinHostId: F, val: Y, comDef: z }], Z, Y, h) : ye("com", { com: r, pinHostId: F, val: Y, comDef: z });
        };
      }
    });
    function oe(X) {
      if (r.global) {
        u == null || u._notifyBindings(X, r);
        return;
      }
      const { bindingsTo: F } = r.model;
      if (F)
        for (let N in F) {
          const Y = K(N);
          if (Y) {
            const Z = F[N];
            Array.isArray(Z) && Z.forEach((ne) => {
              let se = Y;
              const le = ne.split(".");
              le.forEach((we, he) => {
                he !== le.length - 1 ? se = se[we] : se[we] = X;
              });
            });
          }
        }
    }
    const pe = {
      id: r.id,
      title: r.title,
      frameId: r.frameId,
      parentComId: r.parentComId,
      data: e(ie),
      style: e(T),
      _inputRegs: P,
      addInputTodo: q,
      inputs: D(),
      inputsCallable: M,
      _inputsCallable: L,
      outputs: W(),
      _inputs: V,
      _outputs: Q,
      clone(X) {
        const F = {
          inputs: D(X),
          outputs: W(X)
        };
        return Object.setPrototypeOf(F, this), F;
      },
      _notifyBindings: oe,
      logger: g,
      onError: d ? (X) => c({ comId: m, error: X }) : c
    };
    return v[y] = pe, pe;
  }
  function xe(m, h) {
    let r = _e[`${m}${h ? `-${h.id}-${h.frameId}` : ""}`];
    return typeof r > "u" && (h != null && h.parent) && (r = xe(m, h.parent)), r;
  }
  function be(m, h, r, J) {
    var ie;
    const { comId: v, def: E, pinId: $, pinType: y, frameKey: O, finishPinParentKey: z, timerPinInputId: R } = m;
    if (y === "ext") {
      const T = w[v] || K(v, r);
      if ($ === "show")
        T.style.display = "";
      else if ($ === "hide")
        T.style.display = "none";
      else if ($ === "showOrHide") {
        const k = T.style;
        typeof h > "u" ? k.display === "none" ? k.display = "" : k.display = "none" : k.display = h ? "" : "none";
      }
      const P = n(E);
      ge({ com: T, val: h, pinHostId: $, frameKey: O, finishPinParentKey: z, comDef: P, conId: m.id });
    } else if (y === "config") {
      const T = K(v, r), P = n(E);
      ge({ com: T, pinHostId: $, val: h, frameKey: O, finishPinParentKey: z, comDef: P, conId: m.id });
      const { extBinding: k } = m, A = k.split(".");
      let q = T;
      A.forEach((D, M) => {
        M !== A.length - 1 ? q = q[D] : q[D] = h;
      });
    } else if (y === "timer") {
      const T = K(v, r), P = n(E);
      ge({ com: T, pinHostId: $, val: h, frameKey: O, finishPinParentKey: z, comDef: P, conId: m.id });
      const k = r ? R + "-" + r.id : R, A = ae[k];
      if (A) {
        const { todo: q } = A;
        Object.entries(q).forEach(([D, M]) => M()), Reflect.deleteProperty(ae, k);
      } else
        ae[k] = {
          ready: !0,
          todo: {}
        };
    } else if ((ie = E.rtType) != null && ie.match(/^js/gi)) {
      const T = x[v];
      if (T) {
        const P = K(v, r), k = n(E);
        if (T.global) {
          const M = u == null ? void 0 : u.getGlobalComProps(v);
          M && (P.data = M.data);
        }
        const A = r == null ? void 0 : r.id, q = (A ? A + "-" : "") + v;
        T.inputs.find((M) => M === $) ? ge({ com: T, val: h, pinHostId: $, frameKey: O, finishPinParentKey: z, comDef: k, conId: m.id }) : Object.entries(h).forEach(([M, L]) => {
          ge({ com: T, val: L, pinHostId: `${$}.${M}`, frameKey: O, finishPinParentKey: z, comDef: k, conId: m.id });
        }), B[q] || (B[q] = !0, k.runtime({
          //exe once
          env: j,
          data: P.data,
          inputs: P.inputs,
          outputs: P.outputs,
          _notifyBindings: P._notifyBindings,
          _inputsCallable: P._inputsCallable,
          logger: g,
          onError: d ? (M) => c({ comId: v, error: M }) : c
        }));
        const D = P._inputRegs[$];
        typeof D == "function" && D(h, new Proxy({}, {
          //relOutputs
          get(M, L) {
            return function(W) {
              if (Object.prototype.toString.call(L) !== "[object Symbol]") {
                if (f) {
                  const V = f[`${v}-${$}`];
                  V && (W = xe(`${O}-${V.pinId}`, r), typeof W > "u" && (W = xe(`${O}-${V.pinId}`, null)));
                }
                P.outputs[L](W, r, m);
              }
            };
          }
        }));
      }
    } else {
      const T = K(v, r);
      if (!T)
        return;
      const P = n(E);
      ge({ com: T, pinHostId: $, val: h, frameKey: O, finishPinParentKey: z, comDef: P, conId: m.id });
      const k = T._inputRegs[$];
      if (typeof k == "function") {
        let A;
        J ? A = J : A = new Proxy({}, {
          //relOutputs
          get(q, D) {
            return function(M) {
              Object.prototype.toString.call(D) !== "[object Symbol]" && T.outputs[D](M, r, m);
            };
          }
        }), k(h, A);
      } else
        T.addInputTodo($, h, m, r);
    }
    if (z) {
      const T = a[G[z]];
      T && !_[`${v}-${$}`] && de(null, T, void 0);
    }
  }
  function te(m, h) {
    let r;
    return m != null && m.comAry && m.comAry.find((J) => {
      if (J.id === h)
        return r = J, J;
      if (J.slots) {
        for (let v in J.slots)
          if (r = te(J.slots[v], h), r)
            return r;
      }
    }), r;
  }
  function ee(m, h, r, J) {
    let v = m + "-" + h + (r ? `-${r.id}` : ""), E = w[v];
    if (J && !E && (E = w[Object.keys(w).find(($) => $.startsWith(v))]), !E) {
      const $ = te(b, m);
      if (!($ != null && $.slots))
        return null;
      const y = $ == null ? void 0 : $.slots[h], O = {};
      let z;
      if (r) {
        const A = w[m + "-" + h];
        A && (z = A.todo);
      }
      const R = { scope: r, todo: z }, ie = new Proxy({}, {
        get(A, q) {
          return function(D) {
            Object.prototype.toString.call(q) !== "[object Symbol]" && (O[q] = D);
          };
        }
      }), T = new Proxy({}, {
        get(A, q) {
          const D = function(M, L) {
            if (Object.prototype.toString.call(q) === "[object Symbol]")
              return;
            const W = m + "-" + h + "-" + q, V = a[W];
            _e[`${W}${L ? `-${L.id}-${L.frameId}` : ""}`] = M, V ? de(["frame", { comId: m, frameId: h, pinHostId: q, val: M }], V, M, L || R.scope) : ye("frame", { comId: m, frameId: h, pinHostId: q, val: M });
          };
          return D.getConnections = () => a[m + "-" + h + "-" + q] || [], D;
        }
      }), P = new Proxy({}, {
        get(A, q, D) {
          return function(M) {
            Object.prototype.toString.call(q) !== "[object Symbol]" && (U[v + "-" + q] = M);
          };
        }
      });
      let k = {};
      E = w[v] = {
        type: y == null ? void 0 : y.type,
        run(A) {
          R.scope = A;
          const q = (A == null ? void 0 : A.id) || "none";
          k[q] || (k[q] = !0, re({ comId: m, frameId: h, scope: A })), Array.isArray(R.todo) && (R.todo.forEach((D) => {
            Promise.resolve().then(() => {
              D(A);
            });
          }), R.todo = void 0);
        },
        destroy() {
          Reflect.deleteProperty(w, v);
        },
        //_outputRegs,
        _inputs: ie,
        _inputRegs: O,
        inputs: T,
        outputs: P,
        get curScope() {
          return R.scope;
        },
        get todo() {
          return R.todo;
        },
        pushTodo(A) {
          R.todo || (R.todo = []), R.todo.push(A);
        }
      };
    }
    return E;
  }
  function re(m) {
    const { comId: h, frameId: r, scope: J } = m, v = h ? `${h}-${r}` : `${r}`, E = C[v];
    E && E.forEach(($) => {
      const { id: y, def: O } = $;
      if (x[y]) {
        const R = K(y, J), ie = n(O);
        log(`${ie.namespace} 开始执行`), ie.runtime({
          env: j,
          data: R.data,
          inputs: R.inputs,
          outputs: R.outputs,
          _inputsCallable: R._inputsCallable,
          logger: g,
          onError: d ? (T) => c({ comId: y, error: T }) : c
        });
      }
    });
  }
  function ce({ options: m, value: h, scope: r = void 0, log: J = !0, comProps: v }) {
    const { frameId: E, comId: $, pinId: y, sceneId: O } = m, z = $ ? `${$}-${E}` : `${E}`, R = a[z + "-" + y];
    _e[`${E}-${y}`] = h, R ? de(["frame", { comId: $, frameId: E, pinHostId: y, val: h, sceneId: O }], R, h, r) : (J && ye("frame", { comId: $, frameId: E, pinHostId: y, val: h, sceneId: O }), E !== ROOT_FRAME_KEY && (t.id === E ? H[y](h) : u == null || u.open({
      frameId: E,
      todo: {
        pinId: y,
        value: h
      },
      comProps: v,
      parentScope: r.proxyComProps
    })));
  }
  const me = {
    get(m, h, r, J) {
      let v, E, $;
      for (let y = 0; y < arguments.length; y++) {
        const O = arguments[y];
        y > 0 && typeof O == "string" && (v = O), typeof O == "object" && (O.inputs || O.outputs || O._inputs || O._outputs ? $ = O : (O.id || O.parent) && (E = O));
      }
      if (v)
        return ee(m, v, E);
      {
        const y = K(m, E);
        return $ ? y.clone($) : y;
      }
    },
    getComInfo(m) {
      return x[m];
    }
  };
  if (typeof i == "function") {
    const m = {
      run() {
        re({ frameId: ROOT_FRAME_KEY });
      },
      inputs: new Proxy({}, {
        get(h, r) {
          return function(J, v = void 0, E = !0) {
            Object.prototype.toString.call(r) !== "[object Symbol]" && ce({ options: { frameId: ROOT_FRAME_KEY, pinId: r, sceneId: v }, value: J, scope: void 0, log: E });
          };
        }
      }),
      outputs(h, r) {
        H[h] = r;
      },
      get: me.get,
      getComInfo: me.getComInfo
    };
    l && I === "module" && l.setRefs(t.id, m), i(m);
  }
  return me;
}
function normalizeComponent(o, e, t, n, s, i, c, g) {
  var d = typeof o == "function" ? o.options : o;
  e && (d.render = e, d.staticRenderFns = t, d._compiled = !0), n && (d.functional = !0), i && (d._scopeId = "data-v-" + i);
  var p;
  if (c ? (p = function(b) {
    b = b || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !b && typeof __VUE_SSR_CONTEXT__ < "u" && (b = __VUE_SSR_CONTEXT__), s && s.call(this, b), b && b._registeredComponents && b._registeredComponents.add(c);
  }, d._ssrRegister = p) : s && (p = g ? function() {
    s.call(
      this,
      (d.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), p)
    if (d.functional) {
      d._injectStyles = p;
      var l = d.render;
      d.render = function(x, C) {
        return p.call(C), l(x, C);
      };
    } else {
      var u = d.beforeCreate;
      d.beforeCreate = u ? [].concat(u, p) : [p];
    }
  return {
    exports: o,
    options: d
  };
}
const _sfc_main$6 = {
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
    const { propsSlot: e, scope: t, props: n, env: s, _env: i, getComDef: c, registSpm: g, context: d, onError: p, logger: l, params: u } = this.$props;
    if (Object.assign(u, u.m), (e == null ? void 0 : e.type) === "scope" ? (o = {
      id: uuid(10, 16),
      frameId: slotId
    }, t && (o.parent = t)) : o = t, u) {
      const b = u.inputValues;
      if (typeof b == "object")
        for (let x in b)
          n.inputs[x](b[x], o);
      typeof u.wrap == "function" && u.wrap;
    }
    n.run(o), this.slotProps = {
      scope: o,
      env: s,
      // createPortal={createPortal}
      _env: i,
      propsSlot: e,
      params: u,
      // wrapper={wrapFn}
      // template={params?.itemWrap}
      getComDef: c,
      registSpm: g,
      context: d,
      inputs: u == null ? void 0 : u.inputs,
      outputs: u == null ? void 0 : u.outputs,
      _inputs: u == null ? void 0 : u._inputs,
      _outputs: u == null ? void 0 : u._outputs,
      onError: p,
      logger: l
      // __rxui_child__={__rxui_child__}
    }, this.slotComponent = RenderSlot;
  }
};
var _sfc_render$6 = function o() {
  var e = this, t = e._self._c;
  return t(e.slotComponent, e._b({ tag: "component" }, "component", e.slotProps, !1));
}, _sfc_staticRenderFns$6 = [], __component__$6 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  !1,
  null,
  null,
  null,
  null
);
const SlotRender = __component__$6.exports, com = "_com_z9da4_2", flex = "_flex_z9da4_7", style0$2 = {
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
    var be;
    const { _env: o, env: e, com: t, props: n, getComDef: s, registSpm: i, onError: c, logger: g, context: d, scope: p } = this.$props, { pxToRem: l, pxToVw: u } = e, { id: b, def: x, name: C, slots: a = {} } = t, {
      data: _,
      title: S,
      style: f,
      inputs: I,
      outputs: j,
      _inputs: w,
      _outputs: U,
      _notifyBindings: B
    } = n, H = this.getStyleAry({ env: e, def: x, style: f });
    if (Array.isArray(H)) {
      const te = (e == null ? void 0 : e.shadowRoot) || ((be = document.getElementById("_mybricks-geo-webview_")) == null ? void 0 : be.shadowRoot);
      if (!(te || document).querySelector(`style[id="${b}"]`)) {
        const ee = document.createElement("style");
        let re = "";
        ee.id = b, H.forEach(({ css: ce, selector: me, global: m }) => {
          me === ":root" && (me = "> *:first-child"), re = re + `
            ${m ? "" : `#${b} `}${me.replace(/\{id\}/g, `${b}`)} {
              ${Object.keys(ce).map((h) => {
            let r = ce[h];
            return l && typeof r == "string" && r.indexOf("px") !== -1 ? r = pxToRem(r) : u && typeof r == "string" && r.indexOf("px") !== -1 && (r = pxToVw(r)), `${convertCamelToHyphen(h)}: ${r};`;
          }).join(`
`)}
            }
          `;
        }), ee.innerHTML = re, te ? te.appendChild(ee) : document.head.appendChild(ee);
      }
    }
    Reflect.deleteProperty(f, "styleAry"), Reflect.deleteProperty(f, "themesId");
    const G = s(x), fe = [], ae = {};
    t.slots && Object.entries(t.slots).forEach(([te, ee]) => {
      const re = d.get(b, te, p);
      ae[te] = {
        get size() {
          var ce;
          return ((ce = ee == null ? void 0 : ee.comAry) == null ? void 0 : ce.length) || 0;
        }
      }, fe.push({
        slotId: te,
        propsSlot: ee,
        // params 入参数 { inputValues }
        props: re,
        propsStyle: f,
        onError: c,
        // createPortal
        logger: g,
        env: e,
        _env: o,
        scope: p,
        getComDef: s,
        context: d
        // __rxui_child__
      });
    }), this.templateSlots = fe;
    let _e;
    if (n.frameId && n.parentComId) {
      const te = d.get(n.parentComId, n.frameId, p == null ? void 0 : p.parent);
      te && (_e = {
        get _inputs() {
          return new Proxy({}, {
            get(ee, re) {
              return te._inputRegs[re];
            }
          });
        }
      });
    }
    const ye = this.getClasses({ style: f, id: b }), ge = this.getSizeStyle({ style: f, env: e }), de = this.getMarginStyle({ style: f, env: e }), K = {};
    if (["fixed", "absolute"].includes(f.position)) {
      const { top: te, left: ee, right: re, bottom: ce } = f;
      (te || isNumber(te)) && (K.top = isNumber(te) ? te + "px" : te), (ce || isNumber(ce)) && (K.bottom = isNumber(ce) ? ce + "px" : ce), (ee || isNumber(ee)) && (K.left = isNumber(ee) ? ee + "px" : ee), (re || isNumber(re)) && (K.right = isNumber(re) ? re + "px" : re), f.position === "fixed" ? K.zIndex = 1e3 : f.position === "absolute" && (K.zIndex = 1);
      const { pxToVw: me } = e;
      me && (typeof K.top == "string" && K.top.indexOf("px") !== -1 && (K.top = pxToVw(K.top)), typeof K.bottom == "string" && K.bottom.indexOf("px") !== -1 && (K.bottom = pxToVw(K.bottom)), typeof K.left == "string" && K.left.indexOf("px") !== -1 && (K.left = pxToVw(K.left)), typeof K.right == "string" && K.right.indexOf("px") !== -1 && (K.right = pxToVw(K.right)));
    }
    this.component = G.runtime, this.comDef = G, this.containerProps = {
      id: b,
      key: b,
      style: {
        display: f.display,
        // overflow: "hidden",
        position: f.position || "relative",
        ...K,
        ...ge,
        ...de,
        ...f.ext || {}
      }
      // className: classes
    }, this.containerClass = ye;
    const xe = {
      id: b,
      env: {
        ...e,
        pxToVw,
        spm: i ? i == null ? void 0 : i(b, { title: S, namespace: x.namespace }) : null
      },
      _env: o,
      data: _,
      name: C,
      title: S,
      slots: ae,
      propsStyle: f,
      // TODO: style是保留字段
      inputs: I,
      outputs: j,
      _inputs: w,
      _outputs: U,
      _notifyBindings: B,
      // slots: slotsProxy,
      // createPortal,
      parentSlot: _e,
      // __rxui_child__,
      onError: c,
      logger: g
    };
    this.componentProps = {
      ...xe,
      m: {
        ...xe,
        style: f
      }
    };
  },
  methods: {
    getStyleAry({ env: o, def: e, style: t }) {
      var g;
      const n = (g = o == null ? void 0 : o.themes) == null ? void 0 : g.comThemes;
      if (!n)
        return t.styleAry;
      let s;
      const { themesId: i } = t, { namespace: c } = e;
      if (i)
        if (i === "_defined")
          s = t.styleAry;
        else {
          const d = n[c];
          if (Array.isArray(d)) {
            const p = d.find(({ id: l }) => l === i);
            p && (s = p.styleAry);
          }
        }
      else {
        const d = n[c];
        if (Array.isArray(d)) {
          const p = d.find(({ isDefault: l }) => l);
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
        marginBottom: g
      } = o;
      isNumber(s) && (t.marginTop = s + "px"), isNumber(i) && (typeof n == "number" || i < 0 ? t.marginLeft = i + "px" : t.paddingLeft = i + "px"), isNumber(c) && (typeof n == "number" || c < 0 ? t.marginRight = c + "px" : t.paddingRight = c + "px"), isNumber(g) && (t.marginBottom = g + "px");
      const { pxToVw: d } = e;
      return d && (typeof t.marginTop == "string" && t.marginTop.indexOf("px") !== -1 && (t.marginTop = pxToVw(t.marginTop)), typeof t.marginLeft == "string" && t.marginLeft.indexOf("px") !== -1 && (t.marginLeft = pxToVw(t.marginLeft)), typeof t.marginRight == "string" && t.marginRight.indexOf("px") !== -1 && (t.marginRight = pxToVw(t.marginRight)), typeof t.marginBottom == "string" && t.marginBottom.indexOf("px") !== -1 && (t.marginBottom = pxToVw(t.marginBottom)), typeof t.paddingLeft == "string" && t.paddingLeft.indexOf("px") !== -1 && (t.paddingLeft = pxToVw(t.paddingLeft)), typeof t.paddingRight == "string" && t.paddingRight.indexOf("px") !== -1 && (t.paddingRight = pxToVw(t.paddingRight))), t;
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
      const { env: o, _env: e, propsSlot: t, context: n, getComDef: s, registSpm: i, onError: c, logger: g, scope: d, inputs: p, _inputs: l, outputs: u, _outputs: b } = this.$props, { comAry: x } = t, C = [];
      return x.forEach((a, _) => {
        var H;
        const { id: S, def: f, name: I } = a, j = n.getComInfo(S), { hasPermission: w } = o, U = (H = j == null ? void 0 : j.model) == null ? void 0 : H.permissions;
        if (U && typeof w == "function" && !w(U.id))
          return;
        if (s(f)) {
          const G = n.get(S, d, {
            inputs: p,
            outputs: u,
            _inputs: l,
            _outputs: b
          }), fe = (d ? d.id : "") + _;
          C.push({
            id: S,
            props: {
              key: fe,
              com: a,
              getComDef: s,
              registSpm: i,
              context: n,
              scope: d,
              props: G,
              env: o,
              _env: e,
              // template
              onError: c,
              logger: g
              // createPortal
              // __rxui_child__
            },
            component: RenderCom,
            name: I,
            inputs: G.inputsCallable,
            style: G.style
          });
        } else
          console.error(`组件 (namespace = {${f.namespace}}）未找到.`);
      }), C;
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
        background: g,
        backgroundColor: d,
        backgroundImage: p,
        backgroundPosition: l,
        backgroundRepeat: u,
        backgroundSize: b,
        ...x
      } = o;
      let C = {
        paddingLeft: n || 0,
        paddingTop: s || 0,
        paddingRight: i || 0,
        paddingBottom: c || 0,
        //height: style.customHeight || '100%'
        // backgroundColor: backgroundColor || (root ? '#ffffff' : void 0), // TODO
        backgroundColor: d,
        backgroundImage: p,
        backgroundPosition: l,
        backgroundRepeat: u,
        backgroundSize: b
      };
      if (g)
        if (typeof g == "object") {
          const {
            background: _,
            backgroundImage: S,
            backgroundColor: f,
            backgroundRepeat: I,
            backgroundSize: j
          } = g;
          C.backgroundRepeat = I, C.backgroundSize = j, _ ? C.background = _ : (C.backgroundImage = S, C.backgroundColor = f);
        } else
          C.background = g;
      return e && (C = Object.assign(C, x)), C;
    },
    calSlotClasses(o) {
      var s, i;
      const e = this.$style, t = [e.slot, "slot"], n = o;
      if (n) {
        ((s = n.layout) == null ? void 0 : s.toLowerCase()) == "flex-column" ? t.push(e.lyFlexColumn) : ((i = n.layout) == null ? void 0 : i.toLowerCase()) == "flex-row" && t.push(e.lyFlexRow);
        const c = n.justifyContent;
        c && (c.toUpperCase() === "FLEX-START" ? t.push(e.justifyContentFlexStart) : c.toUpperCase() === "CENTER" ? t.push(e.justifyContentFlexCenter) : c.toUpperCase() === "FLEX-END" ? t.push(e.justifyContentFlexFlexEnd) : c.toUpperCase() === "SPACE-AROUND" ? t.push(e.justifyContentFlexSpaceAround) : c.toUpperCase() === "SPACE-BETWEEN" && t.push(e.justifyContentFlexSpaceBetween));
        const g = n.alignItems;
        g && (g.toUpperCase() === "FLEX-START" ? t.push(e.alignItemsFlexStart) : g.toUpperCase() === "CENTER" ? t.push(e.alignItemsFlexCenter) : g.toUpperCase() === "FLEX-END" && t.push(e.alignItemsFlexFlexEnd));
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
    }), this.comDefs = t, e.env.renderCom || (e.env.renderCom = (s, i) => render(s, { ...i, env })), e.env.renderModule || (e.env.renderModule = (s, i) => render(s, { ...i, env }));
    try {
      let s, i = !0;
      const c = executor({
        json: o,
        getComDef: this.getComDef,
        events: e.events,
        env: e.env,
        ref(g) {
          s = g, typeof e.ref == "function" && (e.ref(g), i = !1);
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
          let g;
          if (o.debug && typeof c < "u")
            try {
              g = JSON.parse(decodeURIComponent(c));
            } catch {
              g = c;
            }
          t[i](g);
        });
      }
      refs.run();
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
      const d = o.scenes.findIndex((p) => p.id === e.sceneId);
      if (d !== -1) {
        const p = o.scenes.splice(d, 1);
        o.scenes.unshift(...p), p[0].type === "popup" && this.setPopupIds([p[0].id]);
      }
    }
    const t = [];
    o.scenes.forEach((d, p) => {
      d.type === "popup" ? p || this.setPopupIds([d.id]) : t.push(d);
    }), this.setPageScenes(t);
    const { modules: n, definedComs: s } = o;
    if (e.env.getDefinedComJSON || (e.env.getDefinedComJSON = (d) => s[d].json), e.env.getModuleJSON || (e.env.getModuleJSON = (d) => {
      var C;
      const p = (C = n == null ? void 0 : n[d]) == null ? void 0 : C.json;
      if (!p)
        return p;
      const { global: l } = o;
      let u = {}, b = {}, x = {};
      return l && (u = l.comsReg, b = l.consReg, x = l.pinRels, Object.keys(u).forEach((a) => {
        u[a].global = !0;
      })), Object.assign(p.coms, u), Object.assign(p.cons, b), Object.assign(p.pinRels, x), p;
    }), this.scenesMap = o.scenes.reduce((d, p, l) => {
      var u;
      return {
        ...d,
        [p.id]: {
          show: l === 0,
          todo: [],
          json: p,
          disableAutoRun: !!l,
          useEntryAnimation: !1,
          type: ((u = p.slot) == null ? void 0 : u.showType) || p.type
        }
      };
    }, {}), this.scenesOperateInputsTodo = {}, this.themes = o.themes, this.permissions = o.permissions || [], this.globalVarMap = {}, e.ref) {
      const d = e.ref;
      e.ref = (p) => (l) => (p(l), d.call(e, l));
    } else
      e.ref = (d) => (p) => {
        d(p);
      };
    const i = {}, c = [], { global: g } = o;
    if (g) {
      const { fxFrames: d } = g;
      Array.isArray(d) && d.forEach((p) => {
        var S;
        const { id: l } = p, u = {};
        i[l] = u;
        const b = {
          open({ todo: f, frameId: I, parentScope: j }) {
            const w = i[I];
            w != null && w._refs && (w.parentScope = j, w._refs.inputs[f.pinId](f.value, void 0, !1), w._refs.run());
          },
          inputs({ frameId: f, parentScope: I, value: j, pinId: w }) {
            const U = scenesMap[f];
            U ? (U.parentScope = I, U._refs ? U._refs.inputs[w](j) : U.todo = U.todo.concat({ type: "inputs", todo: {
              pinId: w,
              value: j
            } })) : scenesOperateInputsTodo[f] ? scenesOperateInputsTodo[f].todo.push({ frameId: f, parentScope: I, value: j, pinId: w }) : scenesOperateInputsTodo[f] = {
              parentScope: I,
              todo: [{ value: j, pinId: w }]
            };
          },
          _notifyBindings(f, I) {
            const { bindingsTo: j } = I.model;
            if (j)
              for (let w in j)
                for (let U in scenesMap) {
                  const B = scenesMap[U];
                  if (B.json.coms[w])
                    if (B._refs)
                      this._notifyBindings(B._refs, w, j[w], f);
                    else {
                      const G = j[w];
                      B.todo = B.todo.concat({ type: "globalVar", todo: { comId: w, bindings: G, value: f } });
                    }
                }
          },
          getGlobalComProps(f) {
            return scenesMap[o.scenes[0].id]._refs.get(f);
          },
          exeGlobalCom({ com: f, value: I, pinId: j }) {
            const w = f.id;
            this.globalVarMap[w] = I, Object.keys(scenesMap).forEach((B) => {
              const H = scenesMap[B];
              if (H.show && H._refs) {
                const G = H._refs.get(w);
                G && G.outputs[j](I, !0, null, !0);
              }
            });
            const U = e.env._context.getRefsMap();
            Object.entries(U).forEach(([B, H]) => {
              const G = H.get(w);
              G && G.outputs[j](I, !0, null, !0);
            });
          }
        }, x = {
          ...e,
          env: {
            ...e.env,
            canvas: Object.assign({
              id: l,
              type: (window == null ? void 0 : window.document.body.clientWidth) <= 414 ? "mobile" : "pc",
              // 服务端渲染没有window
              open: async (f, I, j) => {
                var U;
                let w = scenesMap[f];
                if (!w) {
                  if (typeof e.scenesLoader != "function") {
                    console.error(`缺少场景信息: ${f}`);
                    return;
                  }
                  const B = await e.scenesLoader({ id: f });
                  if (w = {
                    disableAutoRun: !1,
                    json: B,
                    show: !1,
                    parentScope: null,
                    todo: [],
                    type: ((U = B.slot) == null ? void 0 : U.showType) || B.type,
                    useEntryAnimation: !1
                  }, scenesMap[f] = w, B.type === "popup" || setPageScenes((H) => [...H, B]), scenesOperateInputsTodo[f]) {
                    const { parentScope: H, todo: G } = scenesOperateInputsTodo[f];
                    w.parentScope = H, G.forEach(({ value: fe, pinId: ae, parentScope: _e }) => {
                      w.todo = w.todo.concat({ type: "inputs", todo: {
                        pinId: ae,
                        value: fe
                      } });
                    });
                  }
                }
                j ? Object.entries(scenesMap).forEach(([B, H]) => {
                  B === f ? (j === "blank" ? H.useEntryAnimation = !0 : H.useEntryAnimation = !1, H.show = !0, H.type === "popup" ? this.setPopupIds([...this.popupIds, f]) : setCount((G) => G + 1)) : (H.show = !1, H.type === "popup" ? this.setPopupIds(this.popupIds.filter((G) => G !== H.json.id)) : setCount((G) => G + 1));
                }) : w.show || (j === "blank" ? w.useEntryAnimation = !0 : w.useEntryAnimation = !1, w.show = !0, w.type === "popup" ? this.setPopupIds([...this.popupIds, f]) : setCount((B) => B + 1));
              }
            }, (S = e.env) == null ? void 0 : S.canvas)
          },
          disableAutoRun: !0,
          ref: e.ref((f) => {
            u._refs = f;
            const { inputs: I, outputs: j } = f;
            p.outputs.forEach((w) => {
              j(w.id, (U) => {
                var B;
                (B = u.parentScope) == null || B.outputs[w.id](U);
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
          scenesOperate: b
        };
        let C = g.comsReg, a = g.consReg, _ = g.pinRels;
        Object.keys(C).forEach((f) => {
          C[f].global = !0;
        }), Object.assign(p.coms, C), Object.assign(p.cons, a), Object.assign(p.pinRels, _), c.push({
          key: l,
          component: Main,
          json: { ...p, rtType: "js" },
          options: x
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
      return n && (s = n.comsReg, i = n.consReg, c = n.pinRels, Object.keys(s).forEach((g) => {
        s[g].global = !0;
      })), o.map((g, d) => {
        const { id: p } = g;
        Object.assign(g.coms, s), Object.assign(g.cons, i), Object.assign(g.pinRels, c);
        const l = e[p];
        return {
          show: l.show,
          key: p,
          json: { ...g, scenesMap: e },
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
      return n && (s = n.comsReg, i = n.consReg, c = n.pinRels, Object.keys(s).forEach((g) => {
        s[g].global = !0;
      })), o.map((g) => {
        const p = e[g].json, { id: l } = p;
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
      const { opts: e } = this.$props, { scenesMap: t, themes: n, permissions: s } = this, i = this, c = t[o], g = e.env.hasPermission, d = {
        open({ todo: l, frameId: u, parentScope: b }) {
          const x = t[u];
          if (x)
            x.show || (x.show = !0, x.todo = x.todo.concat({ type: "inputs", todo: l }), x.parentScope = b, x.type === "popup" ? i.setPopupIds([...i.popupIds, u]) : setCount((C) => C + 1));
          else {
            const C = fxFramesMap[u];
            C != null && C._refs && (C.parentScope = b, C._refs.inputs[l.pinId](l.value, void 0, !1), C._refs.run());
          }
        },
        inputs({ frameId: l, parentScope: u, value: b, pinId: x }) {
          const C = t[l];
          C ? (C.parentScope = u, C._refs ? C._refs.inputs[x](b) : C.todo = C.todo.concat({ type: "inputs", todo: {
            pinId: x,
            value: b
          } })) : scenesOperateInputsTodo[l] ? scenesOperateInputsTodo[l].todo.push({ frameId: l, parentScope: u, value: b, pinId: x }) : scenesOperateInputsTodo[l] = {
            parentScope: u,
            todo: [{ value: b, pinId: x }]
          };
        },
        _notifyBindings(l, u) {
          const { bindingsTo: b } = u.model;
          if (b)
            for (let x in b)
              for (let C in t) {
                const a = t[C];
                if (a.json.coms[x])
                  if (a._refs)
                    this._notifyBindings(a._refs, x, b[x], l);
                  else {
                    const S = b[x];
                    a.todo = a.todo.concat({ type: "globalVar", todo: { comId: x, bindings: S, value: l } });
                  }
              }
        },
        getGlobalComProps(l) {
          return t[json.scenes[0].id]._refs.get(l);
        },
        exeGlobalCom({ com: l, value: u, pinId: b }) {
          const x = l.id;
          i.globalVarMap[x] = u, Object.keys(t).forEach((a) => {
            const _ = t[a];
            if (_.show && _._refs) {
              const S = _._refs.get(x);
              S && S.outputs[b](u, !0, null, !0);
            }
          });
          const C = e.env._context.getRefsMap();
          Object.entries(C).forEach(([a, _]) => {
            const S = _.get(x);
            S && S.outputs[b](u, !0, null, !0);
          });
        }
      };
      return {
        ...e,
        env: {
          ...e.env,
          themes: n,
          permissions: s,
          hasPermission: typeof g == "function" ? (l) => {
            if (typeof l == "string") {
              const u = s.find((b) => b.id === l);
              return g({ permission: u });
            }
            return g(l);
          } : null,
          canvas: Object.assign({
            id: o,
            type: (window == null ? void 0 : window.document.body.clientWidth) <= 414 ? "mobile" : "pc",
            open: async (l, u, b) => {
              var C;
              let x = t[l];
              if (!x) {
                if (typeof e.scenesLoader != "function") {
                  console.error(`缺少场景信息: ${l}`);
                  return;
                }
                const a = await e.scenesLoader({ id: l });
                if (x = {
                  disableAutoRun: !1,
                  json: a,
                  show: !1,
                  parentScope: null,
                  todo: [],
                  type: ((C = a.slot) == null ? void 0 : C.showType) || a.type,
                  useEntryAnimation: !1
                }, t[l] = x, a.type === "popup" || setPageScenes((_) => [..._, a]), scenesOperateInputsTodo[l]) {
                  const { parentScope: _, todo: S } = scenesOperateInputsTodo[l];
                  x.parentScope = _, S.forEach(({ value: f, pinId: I, parentScope: j }) => {
                    x.todo = x.todo.concat({ type: "inputs", todo: {
                      pinId: I,
                      value: f
                    } });
                  });
                }
              }
              b ? Object.entries(t).forEach(([a, _]) => {
                a === l ? (b === "blank" ? _.useEntryAnimation = !0 : _.useEntryAnimation = !1, _.show = !0, _.type === "popup" ? i.setPopupIds([...i.popupIds, l]) : setCount((S) => S + 1)) : (_.show = !1, _.type === "popup" ? i.setPopupIds(i.popupIds.filter((S) => S !== _.json.id)) : setCount((S) => S + 1));
              }) : x.show || (b === "blank" ? x.useEntryAnimation = !0 : x.useEntryAnimation = !1, x.show = !0, x.type === "popup" ? i.setPopupIds([...i.popupIds, l]) : setCount((a) => a + 1));
            }
          }, (p = e.env) == null ? void 0 : p.canvas)
        },
        get disableAutoRun() {
          return c.disableAutoRun;
        },
        ref: e.ref((l) => {
          c._refs = l;
          const u = c.todo, { inputs: b, outputs: x } = l, C = c.disableAutoRun;
          c.json.outputs.forEach((a) => {
            x(a.id, (_) => {
              var S;
              c.show = !1, c.todo = [], c._refs = null, (S = c.parentScope) == null || S.outputs[a.id](_), c.parentScope = null, c.type === "popup" ? i.setPopupIds(i.popupIds.filter((f) => f !== c.json.id)) : setCount((f) => f + 1);
            });
          }), u.length ? (u.forEach(({ type: a, todo: _ }) => {
            if (a === "inputs")
              Promise.resolve().then(() => {
                b[_.pinId](_.value, o);
              });
            else if (a === "globalVar") {
              const { comId: S, value: f, bindings: I } = _;
              i._notifyBindings(l, S, I, f);
            }
          }), c.todo = []) : C || (c.disableAutoRun = !0, Promise.resolve().then(() => {
            var a, _;
            (_ = (a = c.json.inputs) == null ? void 0 : a.forEach) == null || _.call(a, (S) => {
              const { id: f, mockData: I } = S;
              let j;
              if (e.debug && typeof I < "u")
                try {
                  j = JSON.parse(decodeURIComponent(I));
                } catch {
                  j = I;
                }
              b[f](j);
            });
          })), C && Promise.resolve().then(() => {
            l.run();
          }), Object.entries(i.globalVarMap).forEach(([a, _]) => {
            const S = c._refs.get(a);
            S && S.outputs.changed(_, !0, null, !0);
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
        scenesOperate: d
      };
    },
    _notifyBindings(o, e, t, n) {
      const s = o.get(e);
      s && Array.isArray(t) && t.forEach((i) => {
        let c = s;
        const g = i.split(".");
        g.forEach((d, p) => {
          p !== g.length - 1 ? c = c[d] : c[d] = n;
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
    ke(this, "_refsMap", {});
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
function render$1(o, e) {
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
  render$1 as render
};
