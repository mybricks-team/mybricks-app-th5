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
      function c({ env: u, data: a, outputs: j, onError: C }, f = {}) {
        if (a.connector)
          try {
            u.callConnector(a.connector, f, a.connectorConfig).then((O) => {
              j.then(O);
            }).catch((O) => {
              j.catch(O);
            });
          } catch (O) {
            console.error(O), j.catch(`执行错误 ${O.message || O}`);
          }
        else
          j.catch("没有选择接口");
      }
      const m = JSON.parse('{"visibility":false,"title":"作用域输入","namespace":"mybricks.core-comlib.frame-input","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"作用域输入","rtType":"js","runtime":"./runtime.ts","editors":"./editor.tsx","inputs":[{"id":"getCurValue","title":"获取","schema":{"type":"any"},"rels":["return"]}],"outputs":[{"id":"return","title":"结果","schema":{"type":"follow"}}]}'), y = JSON.parse('{"visibility":false,"title":"打开对话框","namespace":"mybricks.core-comlib.scenes","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"切换场景","icon":"./icon.png","runtime":"./runtime.ts","data":"./data.json","rtType":"js","inputs":[{"id":"open","title":"打开","schema":{"type":"any"}}]}'), p = JSON.parse('{"title":"模块","namespace":"mybricks.core-comlib.module","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"模块","icon":"./icon.png","data":"./data.json","runtime":"./runtime.tsx","editors":"./editors.ts"}'), l = { id: "mybricks-core-comlib", title: "Mybrics核心组件库", author: "CheMingjun", icon: "", version: "1.0.1", comAray: [g({ comDef: o, rt: function({ inputs: u, outputs: a }) {
      } }), g({ comDef: e, rt: function({ env: u, data: a, outputs: j, inputs: C, _notifyBindings: f }) {
        C.get((O, F) => {
          const w = t(a.val !== void 0 ? a.val : a.initValue);
          F.return(w);
        }), C.set((O, F) => {
          a.val = O;
          const w = t(O);
          j.changed(w, !0), f(w), F.return(w);
        }), C.reset(() => {
          const O = a.initValue;
          a.val = O;
          const F = t(O);
          j.changed(F, !0), f(F);
        });
      } }), g({ comDef: n, rt: s.Z }), g({ comDef: i, rt: function({ env: u, data: a, inputs: j, outputs: C, onError: f }) {
        u.runtime && (a.immediate ? c({ env: u, data: a, outputs: C }) : j.call((O) => {
          c({ env: u, data: a, outputs: C, onError: f }, O);
        }));
      } }), g({ comDef: m, rt: function({ env: u, data: a, inputs: j, outputs: C }) {
        u.runtime && j.getCurValue((f, O) => {
          O.return(f);
        });
      } }), g({ comDef: y, rt: function({ env: u, data: a, inputs: j, _inputs: C, _inputsCallable: f }) {
        j.open((O) => {
          u.canvas.open(a._sceneId, O, a._sceneShowType === "popup" ? null : a.openType), f._open(O);
        });
      } }), g({ comDef: p, rt: function({ env: u, data: a, inputs: j, outputs: C }) {
        const f = u.getModuleJSON(a.definedId);
        return u.renderModule(f, { ref(O) {
          const { inputs: F, outputs: w } = f;
          F.forEach(({ id: V }) => {
            j[V]((B) => {
              O.inputs[V](B);
            });
          }), w.forEach(({ id: V }) => {
            O.outputs(V, C[V]);
          });
          const q = a.configs;
          for (let V in q)
            O.inputs[V](q[V]);
          O.run();
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
    var m = parseFloat(c);
    return !c || m <= t ? i : "".concat(toFixed(m / e, n)).concat(s);
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
    logger: m,
    debug: y,
    debugLogger: p
  } = o, l = s._context, d = o.scenesOperate || s.scenesOperate, {
    slot: x,
    coms: g = {},
    comsAutoRun: u = {},
    cons: a = [],
    pinRels: j = {},
    pinProxies: C = {},
    pinValueProxies: f = {},
    type: O
  } = t, F = s, w = {}, q = {}, V = {}, B = {}, ne = {};
  Object.keys(a).forEach((_) => {
    const h = a[_], { startPinParentKey: r } = h[0];
    r && (ne[r] = _);
  });
  const he = {}, ye = {}, xe = {}, Se = {}, ve = {}, Ce = {};
  function J(_, h, r) {
    if (_ === "com") {
      const { com: k, pinHostId: $, val: P, fromCon: I, notifyAll: L, comDef: M, conId: b } = h;
      p ? p("com", "output", { id: k.id, pinHostId: $, val: P, fromCon: I, notifyAll: L, comDef: M, sceneId: t.id, conId: b }, r) : logOutputVal(k.title, M, $, P);
    } else if (_ === "frame") {
      const { comId: k, frameId: $, pinHostId: P, val: I, sceneId: L, conId: M } = h;
      p && p("frame", "output", { comId: k, frameId: $, pinHostId: P, val: I, sceneId: L || t.id, conId: M }, r);
    }
  }
  function je(_, h) {
    const { com: r, pinHostId: k, val: $, frameKey: P, finishPinParentKey: I, comDef: L, conId: M } = _;
    p ? p("com", "input", { id: r.id, pinHostId: k, val: $, frameKey: P, finishPinParentKey: I, comDef: L, sceneId: t.id, conId: M }, h) : logInputVal(r.title, L, k, $);
  }
  function de({ logProps: _, cons: h, val: r, curScope: k, fromCon: $, notifyAll: P, fromCom: I, isAutoRun: L }) {
    function M(b, D, ee) {
      var X, U;
      const S = C[b.comId + "-" + b.pinId];
      if (S) {
        if (xe[`${S.frameId}-${S.pinId}`] = ee, $ && $.finishPinParentKey !== b.startPinParentKey)
          return;
        if (S.type === "frame") {
          const N = Q(b.comId, D);
          let z;
          z = {
            // id: nextScope?.id || uuid(10, 16),
            id: uuid$1(10, 16),
            frameId: S.frameId,
            parent: D,
            proxyComProps: N
            //current proxied component instance
          };
          const A = b.def.namespace === "mybricks.core-comlib.frame-output";
          if (A && D && (S.frameId = D.proxyComProps.id, z = D.parent), b.def.namespace === "mybricks.core-comlib.fn") {
            const { configs: ie } = N.data;
            ie && Object.entries(ie).forEach(([se, K]) => {
              const { frameId: W, comId: pe, pinId: Y } = S, Z = pe ? `${pe}-${W}` : `${W}`, te = a[Z + "-" + se];
              te && de({ logProps: null, cons: te, val: K, curScope: z });
            });
          }
          Fe({ options: S, value: ee, scope: z, comProps: N }), A || Ee({ frameId: S.frameId, scope: z });
          return;
        }
      }
      if (b.type === "com")
        $ ? $.finishPinParentKey === b.startPinParentKey && le(b, ee, D) : le(b, ee, D);
      else if (b.type === "frame") {
        if ($ && $.finishPinParentKey !== b.startPinParentKey)
          return;
        if (b.comId) {
          if (b.direction === "inner-input") {
            const N = q[b.frameKey + "-" + b.pinId] || q[b.comId + "-" + b.frameId + "-" + ((X = D == null ? void 0 : D.parent) != null && X.id ? D.parent.id + "-" : "") + b.pinId];
            N && N(ee);
          } else if (b.direction === "inner-output" && b.pinType === "joint") {
            const N = a[b.comId + "-" + b.frameId + "-" + b.pinId];
            N && de({ logProps: null, cons: N, val: ee });
          }
        } else {
          const N = D == null ? void 0 : D.proxyComProps;
          if (N) {
            const z = N.outputs[b.pinId];
            if (z) {
              z(ee, D.parent);
              return;
            }
          }
          (U = B[b.pinId]) == null || U.call(B, ee);
        }
      } else
        throw new Error("尚未实现");
    }
    h.forEach(async (b) => {
      var ie, se;
      const { comId: D, pinId: ee, pinType: S, timerPinInputId: X, frameKey: U } = b, N = g[D];
      if ($ && $.finishPinParentKey !== b.startPinParentKey || y && b.isIgnored)
        return;
      y && O !== "module" && ((ie = l.debuggerPanel) != null && ie.hasBreakpoint(b)) ? await ((se = l.debuggerPanel) == null ? void 0 : se.wait(b, () => {
        _ && (_[1].conId = b.id, _ && J(..._, !0));
      })) : _ && J(..._);
      function z({ pinId: K, value: W, curScope: pe }) {
        let Y = pe;
        const Z = K ? { ...b, pinId: K } : b;
        if (P) {
          const te = Z.frameKey;
          if (!te)
            throw new Error("数据异常，请检查toJSON结果.");
          te === ROOT_FRAME_KEY ? M(Z, {}, W) : M(Z, pe, W);
        } else {
          const te = Z.frameKey.split("-");
          if (te.length >= 2 && !Y) {
            const R = we(te[0], te[1], null, !1);
            (R == null ? void 0 : R.type) === "scope" ? R.curScope ? M(Z, R.curScope, W) : R.pushTodo((T) => {
              M(Z, T, W);
            }) : M(Z, Y, W);
          } else
            M(Z, Y, W);
        }
      }
      function A({ pinId: K, value: W, component: pe, curScope: Y }) {
        const { isReady: Z, isMultipleInput: te, pinId: R, value: T, cb: v } = E({ pinId: K, value: W, component: pe, curScope: Y });
        if (Z) {
          const H = {
            pinId: te ? R : null,
            value: T,
            curScope: Y
          };
          if (X) {
            const G = X + "-" + U + (Y != null && Y.id ? `-${Y.id}` : ""), re = ye[G];
            if (re) {
              const { ready: oe, todo: ae } = re;
              if (oe) {
                let me = !1;
                Object.entries(ae).forEach(([_e, Oe]) => {
                  _e === R ? (z(H), me = !0) : Oe();
                }), me || z(H), v == null || v(), Reflect.deleteProperty(ye, G);
              } else
                ae[R] = () => {
                  v == null || v(), z(H);
                };
            } else
              ye[G] = {
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
      if (S === "timer")
        z({ value: r, curScope: k });
      else if (P) {
        const K = b.frameKey;
        if (K === ROOT_FRAME_KEY || L)
          A({ pinId: ee, value: r, component: N, curScope: null });
        else {
          const [W, pe] = K.split("-");
          if (Se[K]) {
            const Y = Se[K], Z = Y[I.id];
            Z ? Z[b.id] = b : Y[I.id] = {
              [b.id]: b
            };
          } else {
            const Y = Se[K] = {};
            Y[I.id] = {
              [b.id]: b
            };
          }
          if (I.parentComId)
            A({ pinId: ee, value: r, component: N, curScope: k });
          else {
            const Y = w[`${W}-${pe}`];
            Y && Object.entries(Y).forEach(([Z, te]) => {
              (te == null ? void 0 : te.type) === "scope" ? te.curScope ? A({ pinId: ee, value: r, component: N, curScope: te.curScope }) : te.pushTodo((R) => {
                A({ pinId: ee, value: r, component: N, curScope: R });
              }) : A({ pinId: ee, value: r, component: N, curScope: te.curScope });
            });
          }
        }
      } else
        A({ pinId: ee, value: r, component: N, curScope: k });
      function E({ pinId: K, value: W, component: pe, curScope: Y }) {
        let Z = K, te = W, R = !0;
        const T = K.indexOf("."), v = D + `${Y ? `-${Y.id}` : ""}`;
        if (pe && T !== -1) {
          const { inputs: G } = pe;
          Z = K.substring(0, T);
          const re = K.substring(T + 1);
          let oe = he[v];
          oe || (oe = he[v] = {}), oe[re] = r;
          const ae = new RegExp(`${Z}.`), me = G.filter((_e) => !!_e.match(ae));
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
  function Q(_, h) {
    var Z, te;
    const r = g[_];
    if (!r)
      return null;
    const k = _ + (r.frameId || ROOT_FRAME_KEY);
    let $ = w[k];
    $ || ($ = w[k] = {});
    let P, I = h;
    for (!I && r.parentComId && r.frameId && (I = (te = (Z = w[`${r.parentComId}-${r.frameId}`]) == null ? void 0 : Z.slot) == null ? void 0 : te.curScope); I; ) {
      const R = I.id + "-" + _;
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
    const L = (P ? P + "-" : "") + _, M = $[L];
    if (M)
      return M;
    const b = r.def, D = r.model, ee = JSON.parse(JSON.stringify(D.data)), S = JSON.parse(JSON.stringify(D.style));
    S.__model_style__ = !0;
    const X = {}, U = {}, N = {}, z = (R, T, v, H) => {
      let G = U[R];
      G || (U[R] = G = []), G.push({ val: T, fromCon: v, fromScope: H });
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
            const G = R == null ? void 0 : R.inputs;
            if (G) {
              const oe = G[v];
              typeof oe == "function" && oe(H);
            }
            X[v] = H;
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
          const H = j[_ + "-" + T];
          if (H) {
            const G = {}, re = {};
            return H.forEach((oe) => {
              G[oe] = (ae) => {
                re[oe] = ae;
              };
            }), Promise.resolve().then(() => {
              le({ comId: _, def: b, pinId: T }, v, h, re);
            }), G;
          } else
            le({ comId: _, def: b, pinId: T }, v, h);
        };
      }
    }), ie = new Proxy({}, {
      get(R, T) {
        return function(v) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const H = C[_ + "-" + T];
          H && (d == null || d.inputs({
            ...H,
            value: v,
            parentScope: Y
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
          const G = function(re, oe, ae, me) {
            if (Object.prototype.toString.call(v) === "[object Symbol]")
              return;
            const _e = typeof oe == "boolean" && oe;
            if (_e) {
              if (r.parentComId) {
                const be = `${r.parentComId}-${r.frameId}`;
                Ce[be] ? Ce[be][_] = !0 : Ce[be] = { [_]: !0 };
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
            const ke = n(b), Me = D.outputEvents;
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
                      const Pe = C[_ + "-" + v];
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
            ge = ge || a[_ + "-" + v], ge != null && ge.length ? Oe.length >= 3 && typeof me > "u" ? de({ logProps: ["com", { com: r, pinHostId: v, val: re, fromCon: ae, notifyAll: _e, comDef: ke }], cons: ge, val: re, curScope: $e, fromCon: ae, fromCom: r }) : de({ logProps: ["com", { com: r, pinHostId: v, val: re, fromCon: ae, notifyAll: _e, comDef: ke }], cons: ge, val: re, curScope: $e || h, fromCon: ae, notifyAll: _e, fromCom: r }) : J("com", { com: r, pinHostId: v, val: re, fromCon: ae, notifyAll: _e, comDef: ke });
          };
          return G.getConnections = () => a[_ + "-" + v] || [], G;
        }
      });
    }, K = new Proxy({}, {
      get(R, T, v) {
        return function(H) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const G = N[T];
          G && (G.forEach((re) => {
            H(re);
          }), N[T] = void 0);
        };
      }
    }), W = new Proxy({}, {
      get(R, T, v) {
        return function(H) {
          if (Object.prototype.toString.call(T) === "[object Symbol]")
            return;
          const G = a[_ + "-" + T];
          G ? de({ logProps: ["com", { com: r, pinHostId: T, val: H, comDef: b }], cons: G, val: H, curScope: h }) : J("com", { com: r, pinHostId: T, val: H, comDef: b });
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
            const G = T[v];
            Array.isArray(G) && G.forEach((re) => {
              let oe = H;
              const ae = re.split(".");
              ae.forEach((me, _e) => {
                _e !== ae.length - 1 ? oe = oe[me] : oe[me] = R;
              });
            });
          }
        }
    }
    const Y = {
      id: r.id,
      title: r.title,
      frameId: r.frameId,
      parentComId: r.parentComId,
      data: e(ee),
      style: e(S),
      _inputRegs: X,
      addInputTodo: z,
      inputs: A(),
      inputsCallable: E,
      _inputsCallable: ie,
      outputs: se(),
      _inputs: K,
      _outputs: W,
      clone(R) {
        const T = {
          inputs: A(R),
          outputs: se(R)
        };
        return Object.setPrototypeOf(T, this), T;
      },
      _notifyBindings: pe,
      logger: m,
      onError: y ? (R) => c({ comId: _, error: R }) : c
    };
    return $[L] = Y, Y;
  }
  function ce(_, h) {
    let r = xe[`${_}${h ? `-${h.id}-${h.frameId}` : ""}`];
    return typeof r > "u" && (h != null && h.parent) && (r = ce(_, h.parent)), r;
  }
  function le(_, h, r, k) {
    var ee;
    const { comId: $, def: P, pinId: I, pinType: L, frameKey: M, finishPinParentKey: b, timerPinInputId: D } = _;
    if (L === "ext") {
      const S = w[$] || Q($, r);
      if (I === "show")
        S.style.display = "";
      else if (I === "hide")
        S.style.display = "none";
      else if (I === "showOrHide") {
        const U = S.style;
        typeof h > "u" ? U.display === "none" ? U.display = "" : U.display = "none" : U.display = h ? "" : "none";
      }
      const X = n(P);
      je({ com: S, val: h, pinHostId: I, frameKey: M, finishPinParentKey: b, comDef: X, conId: _.id });
    } else if (L === "config") {
      const S = Q($, r), X = n(P);
      je({ com: S, pinHostId: I, val: h, frameKey: M, finishPinParentKey: b, comDef: X, conId: _.id });
      const { extBinding: U } = _, N = U.split(".");
      let z = S;
      N.forEach((A, E) => {
        E !== N.length - 1 ? z = z[A] : z[A] = h;
      });
    } else if (L === "timer") {
      const S = Q($, r), X = n(P);
      je({ com: S, pinHostId: I, val: h, frameKey: M, finishPinParentKey: b, comDef: X, conId: _.id });
      const U = D + "-" + M + (r != null && r.id ? `-${r.id}` : ""), N = ye[U];
      if (N) {
        const { todo: z } = N;
        Object.entries(z).forEach(([A, E]) => E()), Reflect.deleteProperty(ye, U);
      } else
        ye[U] = {
          ready: !0,
          todo: {}
        };
    } else if ((ee = P.rtType) != null && ee.match(/^js/gi)) {
      const S = g[$];
      if (S) {
        const X = Q($, r), U = n(P);
        if (S.global) {
          const E = d == null ? void 0 : d.getGlobalComProps($);
          E && (X.data = E.data);
        }
        const N = r == null ? void 0 : r.id, z = (N ? N + "-" : "") + $;
        S.inputs.find((E) => E === I) ? je({ com: S, val: h, pinHostId: I, frameKey: M, finishPinParentKey: b, comDef: U, conId: _.id }) : Object.entries(h).forEach(([E, ie]) => {
          je({ com: S, val: ie, pinHostId: `${I}.${E}`, frameKey: M, finishPinParentKey: b, comDef: U, conId: _.id });
        }), V[z] || (V[z] = !0, U.runtime({
          //exe once
          env: F,
          data: X.data,
          inputs: X.inputs,
          outputs: X.outputs,
          _notifyBindings: X._notifyBindings,
          _inputsCallable: X._inputsCallable,
          logger: m,
          onError: y ? (E) => c({ comId: $, error: E }) : c
        }));
        const A = X._inputRegs[I];
        typeof A == "function" && A(h, new Proxy({}, {
          //relOutputs
          get(E, ie) {
            return function(se) {
              if (Object.prototype.toString.call(ie) !== "[object Symbol]") {
                if (f) {
                  const K = f[`${$}-${I}`];
                  if (K) {
                    const W = K.frameId;
                    se = ce(`${W === t.id ? ROOT_FRAME_KEY : M}-${K.pinId}`, r), typeof se > "u" && (se = ce(`${W === t.id ? ROOT_FRAME_KEY : M}-${K.pinId}`, null));
                  }
                }
                X.outputs[ie](se, r, _);
              }
            };
          }
        }));
      }
    } else {
      const S = Q($, r);
      if (!S)
        return;
      const X = n(P);
      je({ com: S, pinHostId: I, val: h, frameKey: M, finishPinParentKey: b, comDef: X, conId: _.id });
      const U = S._inputRegs[I];
      if (typeof U == "function") {
        let N;
        k ? N = k : N = new Proxy({}, {
          //relOutputs
          get(z, A) {
            return function(E) {
              Object.prototype.toString.call(A) !== "[object Symbol]" && S.outputs[A](E, r, _);
            };
          }
        }), U(h, N);
      } else
        S.addInputTodo(I, h, _, r);
    }
    if (b) {
      const S = a[ne[b]];
      S && !j[`${$}-${I}`] && de({ logProps: null, cons: S, val: void 0 });
    }
  }
  function ue(_, h) {
    let r;
    return _ != null && _.comAry && _.comAry.find((k) => {
      if (k.id === h)
        return r = k, k;
      if (k.slots) {
        for (let $ in k.slots)
          if (r = ue(k.slots[$], h), r)
            return r;
      }
    }), r;
  }
  function we(_, h, r, k) {
    const $ = `${_}-${h}`;
    let P = w[$];
    P || (P = w[$] = {});
    let I = r ? r.id : "slot", L = P[I];
    if (k && !L && console.log("不应该再走到这儿了: ", { comId: _, slotId: h, scope: r, notifyAll: k }), !L) {
      const M = ue(x, _);
      if (!(M != null && M.slots))
        return null;
      const b = M == null ? void 0 : M.slots[h], D = {};
      let ee;
      if (r) {
        const A = w[_ + "-" + h];
        A && (ee = A.todo);
      }
      const S = { scope: r, todo: ee }, X = new Proxy({}, {
        get(A, E) {
          return function(ie) {
            Object.prototype.toString.call(E) !== "[object Symbol]" && (D[E] = ie);
          };
        }
      }), U = new Proxy({}, {
        get(A, E) {
          const ie = function(se, K) {
            if (Object.prototype.toString.call(E) === "[object Symbol]")
              return;
            const W = _ + "-" + h + "-" + E, pe = a[W];
            xe[`${W}${K ? `-${K.id}-${K.frameId}` : ""}`] = se, pe ? de({ logProps: ["frame", { comId: _, frameId: h, pinHostId: E, val: se }], cons: pe, val: se, curScope: K || S.scope }) : J("frame", { comId: _, frameId: h, pinHostId: E, val: se });
          };
          return ie.getConnections = () => a[_ + "-" + h + "-" + E] || [], ie;
        }
      }), N = new Proxy({}, {
        get(A, E, ie) {
          return function(se) {
            Object.prototype.toString.call(E) !== "[object Symbol]" && (q[I + "-" + E] = se, q[$ + "-" + E] = se);
          };
        }
      });
      let z = {};
      L = P[I] = {
        type: b == null ? void 0 : b.type,
        run(A) {
          let E = S.scope;
          A && E !== A && (S.scope = A, E = A);
          const ie = (E == null ? void 0 : E.id) || "none";
          if (z[ie] || (z[ie] = !0, Ee({ comId: _, frameId: h, scope: E })), Array.isArray(S.todo) && (S.todo.forEach((se) => {
            Promise.resolve().then(() => {
              se(E);
            });
          }), S.todo = void 0), E && I !== "slot") {
            const se = `${_}-${h}`, K = Se[se];
            Promise.resolve().then(() => {
              K && Object.entries(K).forEach(([W, pe]) => {
                if (!g[W].parentComId) {
                  const Z = Object.entries(pe).map(([te, R]) => R);
                  Z.length && de({ logProps: null, cons: Z, val: ve[W], curScope: E, notifyAll: !0, fromCom: g[W], isAutoRun: !0 });
                }
              });
            });
          }
        },
        destroy() {
          if (r) {
            const A = `${r.parentComId}-${r.frameId}`, E = Ce[A];
            E && Object.keys(E).forEach((ie) => {
              Reflect.deleteProperty(ve, `${ie}-${r.id}`);
            });
          }
          Reflect.deleteProperty(P, I);
        },
        //_outputRegs,
        _inputs: X,
        _inputRegs: D,
        inputs: U,
        outputs: N,
        get curScope() {
          return S.scope;
        },
        setCurScope(A) {
          S.scope = A;
        },
        get todo() {
          return S.todo;
        },
        pushTodo(A) {
          S.todo || (S.todo = []), S.todo.push(A);
        }
      };
    }
    return L;
  }
  function Ee(_) {
    const { comId: h, frameId: r, scope: k } = _, $ = h ? `${h}-${r}` : `${r}`, P = u[$];
    P && P.forEach((I) => {
      const { id: L, def: M } = I;
      if (g[L]) {
        const D = Q(L, k), ee = n(M);
        log(`${ee.namespace} 开始执行`), ee.runtime({
          env: F,
          data: D.data,
          inputs: D.inputs,
          outputs: D.outputs,
          _inputsCallable: D._inputsCallable,
          logger: m,
          onError: y ? (S) => c({ comId: L, error: S }) : c
        });
      }
    });
  }
  function Fe({ options: _, value: h, scope: r = void 0, log: k = !0, comProps: $ }) {
    const { frameId: P, comId: I, pinId: L, sceneId: M } = _, b = I ? `${I}-${P}` : `${P}`, D = a[b + "-" + L];
    xe[`${P}-${L}`] = h, D ? de({ logProps: ["frame", { comId: I, frameId: P, pinHostId: L, val: h, sceneId: M }], cons: D, val: h, curScope: r }) : (k && J("frame", { comId: I, frameId: P, pinHostId: L, val: h, sceneId: M }), P !== ROOT_FRAME_KEY && (t.id === P ? B[L](h) : d == null || d.open({
      frameId: P,
      todo: {
        pinId: L,
        value: h
      },
      comProps: $,
      parentScope: r.proxyComProps
    })));
  }
  const fe = {
    get({ comId: _, slotId: h, scope: r, _ioProxy: k }) {
      let $;
      if (k && (k.inputs || k.outputs || k._inputs || k._outputs) && ($ = k), h)
        return we(_, h, r);
      {
        const P = Q(_, r);
        return $ ? P.clone($) : P;
      }
    },
    getComInfo(_) {
      return g[_];
    }
  };
  if (typeof i == "function") {
    const _ = {
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
    l && O === "module" && l.setRefs(t.id, _), i(_);
  }
  return fe;
}
function normalizeComponent(o, e, t, n, s, i, c, m) {
  var y = typeof o == "function" ? o.options : o;
  e && (y.render = e, y.staticRenderFns = t, y._compiled = !0), n && (y.functional = !0), i && (y._scopeId = "data-v-" + i);
  var p;
  if (c ? (p = function(x) {
    x = x || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !x && typeof __VUE_SSR_CONTEXT__ < "u" && (x = __VUE_SSR_CONTEXT__), s && s.call(this, x), x && x._registeredComponents && x._registeredComponents.add(c);
  }, y._ssrRegister = p) : s && (p = m ? function() {
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
    const { propsSlot: e, scope: t, props: n, env: s, _env: i, getComDef: c, registSpm: m, context: y, onError: p, logger: l, params: d } = this.$props;
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
      registSpm: m,
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
        s.forEach(({ id: m }) => {
          e.inputs[m]((y) => {
            n.inputs[m](y);
          });
        }), i.forEach(({ id: m }) => {
          n.outputs(m, e.outputs[m]);
        });
        const c = e.data.configs;
        for (let m in c)
          n.inputs[m](c[m]);
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
    const { _env: o, env: e, com: t, props: n, getComDef: s, registSpm: i, onError: c, logger: m, context: y, scope: p } = this.$props, { pxToRem: l, pxToVw: d } = e, { id: x, def: g, name: u, slots: a = {} } = t, {
      data: j,
      title: C,
      style: f,
      inputs: O,
      outputs: F,
      _inputs: w,
      _outputs: q,
      _notifyBindings: V
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
        logger: m,
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
    const Se = this.getClasses({ style: f, id: x }), ve = this.getSizeStyle({ style: f, env: e }), Ce = this.getMarginStyle({ style: f, env: e }), J = {};
    if (["fixed", "absolute"].includes(f.position)) {
      const { top: Q, left: ce, right: le, bottom: ue } = f;
      (Q || isNumber(Q)) && (J.top = isNumber(Q) ? Q + "px" : Q), (ue || isNumber(ue)) && (J.bottom = isNumber(ue) ? ue + "px" : ue), (ce || isNumber(ce)) && (J.left = isNumber(ce) ? ce + "px" : ce), (le || isNumber(le)) && (J.right = isNumber(le) ? le + "px" : le), f.position === "fixed" ? J.zIndex = 1e3 : f.position === "absolute" && (J.zIndex = 1);
      const { pxToVw: we } = e;
      we && (typeof J.top == "string" && J.top.indexOf("px") !== -1 && (J.top = pxToVw(J.top)), typeof J.bottom == "string" && J.bottom.indexOf("px") !== -1 && (J.bottom = pxToVw(J.bottom)), typeof J.left == "string" && J.left.indexOf("px") !== -1 && (J.left = pxToVw(J.left)), typeof J.right == "string" && J.right.indexOf("px") !== -1 && (J.right = pxToVw(J.right)));
    }
    g.namespace === "mybricks.core-comlib.module" ? this.component = Module : this.component = ne.runtime, this.comDef = ne, this.containerProps = {
      id: x,
      key: x,
      style: {
        display: f.display,
        // overflow: "hidden",
        position: f.position || "relative",
        ...J,
        ...ve,
        ...Ce,
        ...f.ext || {}
      }
      // className: classes
    }, this.containerClass = Se;
    const je = {
      id: x,
      env: {
        ...e,
        pxToVw,
        spm: i ? i == null ? void 0 : i(x, { title: C, namespace: g.namespace }) : null
      },
      _env: o,
      data: j,
      name: u,
      title: C,
      slots: ye,
      propsStyle: f,
      // TODO: style是保留字段
      inputs: O,
      outputs: F,
      _inputs: w,
      _outputs: q,
      _notifyBindings: V,
      // slots: slotsProxy,
      // createPortal,
      parentSlot: xe,
      // __rxui_child__,
      onError: c,
      logger: m
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
      var m;
      const n = (m = o == null ? void 0 : o.themes) == null ? void 0 : m.comThemes;
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
        marginBottom: m
      } = o;
      isNumber(s) && (t.marginTop = s + "px"), isNumber(i) && (typeof n == "number" || i < 0 ? t.marginLeft = i + "px" : t.paddingLeft = i + "px"), isNumber(c) && (typeof n == "number" || c < 0 ? t.marginRight = c + "px" : t.paddingRight = c + "px"), isNumber(m) && (t.marginBottom = m + "px");
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
      const { env: o, _env: e, propsSlot: t, context: n, getComDef: s, registSpm: i, onError: c, logger: m, scope: y, inputs: p, _inputs: l, outputs: d, _outputs: x } = this.$props, { comAry: g } = t, u = [];
      return g.forEach((a, j) => {
        var B;
        const { id: C, def: f, name: O } = a, F = n.getComInfo(C), { hasPermission: w } = o, q = (B = F == null ? void 0 : F.model) == null ? void 0 : B.permissions;
        if (q && typeof w == "function" && !w(q.id))
          return;
        if (s(f)) {
          const ne = n.get({ comId: C, scope: y, _ioProxy: {
            inputs: p,
            outputs: d,
            _inputs: l,
            _outputs: x
          } }), he = (y ? y.id : "") + j;
          u.push({
            id: C,
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
              logger: m
              // createPortal
              // __rxui_child__
            },
            component: RenderCom,
            name: O,
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
        background: m,
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
      if (m)
        if (typeof m == "object") {
          const {
            background: j,
            backgroundImage: C,
            backgroundColor: f,
            backgroundRepeat: O,
            backgroundSize: F
          } = m;
          u.backgroundRepeat = O, u.backgroundSize = F, j ? u.background = j : (u.backgroundImage = C, u.backgroundColor = f);
        } else
          u.background = m;
      return e && (u = Object.assign(u, g)), u;
    },
    calSlotClasses(o) {
      var s, i;
      const e = this.$style, t = [e.slot, "slot"], n = o;
      if (n) {
        ((s = n.layout) == null ? void 0 : s.toLowerCase()) == "flex-column" ? t.push(e.lyFlexColumn) : ((i = n.layout) == null ? void 0 : i.toLowerCase()) == "flex-row" && t.push(e.lyFlexRow);
        const c = n.justifyContent;
        c && (c.toUpperCase() === "FLEX-START" ? t.push(e.justifyContentFlexStart) : c.toUpperCase() === "CENTER" ? t.push(e.justifyContentFlexCenter) : c.toUpperCase() === "FLEX-END" ? t.push(e.justifyContentFlexFlexEnd) : c.toUpperCase() === "SPACE-AROUND" ? t.push(e.justifyContentFlexSpaceAround) : c.toUpperCase() === "SPACE-BETWEEN" && t.push(e.justifyContentFlexSpaceBetween));
        const m = n.alignItems;
        m && (m.toUpperCase() === "FLEX-START" ? t.push(e.alignItemsFlexStart) : m.toUpperCase() === "CENTER" ? t.push(e.alignItemsFlexCenter) : m.toUpperCase() === "FLEX-END" && t.push(e.alignItemsFlexFlexEnd));
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
        ref(m) {
          s = m, typeof e.ref == "function" && (e.ref(m), i = !1);
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
          let m;
          if (o.debug && typeof c < "u")
            try {
              m = JSON.parse(decodeURIComponent(c));
            } catch {
              m = c;
            }
          t[i](m);
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
    const i = {}, c = [], { global: m } = o;
    if (m) {
      const { fxFrames: y } = m;
      Array.isArray(y) && y.forEach((p) => {
        var C;
        const { id: l } = p, d = {};
        i[l] = d;
        const x = {
          open({ todo: f, frameId: O, parentScope: F }) {
            const w = i[O];
            w != null && w._refs && (w.parentScope = F, w._refs.inputs[f.pinId](f.value, void 0, !1), w._refs.run());
          },
          inputs({ frameId: f, parentScope: O, value: F, pinId: w }) {
            const q = scenesMap[f];
            q ? (q.parentScope = O, q._refs ? q._refs.inputs[w](F) : q.todo = q.todo.concat({ type: "inputs", todo: {
              pinId: w,
              value: F
            } })) : scenesOperateInputsTodo[f] ? scenesOperateInputsTodo[f].todo.push({ frameId: f, parentScope: O, value: F, pinId: w }) : scenesOperateInputsTodo[f] = {
              parentScope: O,
              todo: [{ value: F, pinId: w }]
            };
          },
          _notifyBindings(f, O) {
            const { bindingsTo: F } = O.model;
            if (F)
              for (let w in F)
                for (let q in scenesMap) {
                  const V = scenesMap[q];
                  if (V.json.coms[w])
                    if (V._refs)
                      this._notifyBindings(V._refs, w, F[w], f);
                    else {
                      const ne = F[w];
                      V.todo = V.todo.concat({ type: "globalVar", todo: { comId: w, bindings: ne, value: f } });
                    }
                }
          },
          getGlobalComProps(f) {
            return scenesMap[o.scenes[0].id]._refs.get({ comId: f });
          },
          exeGlobalCom({ com: f, value: O, pinId: F }) {
            const w = f.id;
            this.globalVarMap[w] = O, Object.keys(scenesMap).forEach((V) => {
              const B = scenesMap[V];
              if (B.show && B._refs) {
                const ne = B._refs.get({ comId: w });
                ne && ne.outputs[F](O, !0, null, !0);
              }
            });
            const q = e.env._context.getRefsMap();
            Object.entries(q).forEach(([V, B]) => {
              const ne = B.get({ comId: w });
              ne && ne.outputs[F](O, !0, null, !0);
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
              open: async (f, O, F) => {
                var q;
                let w = scenesMap[f];
                if (!w) {
                  if (typeof e.scenesLoader != "function") {
                    console.error(`缺少场景信息: ${f}`);
                    return;
                  }
                  const V = await e.scenesLoader({ id: f });
                  if (w = {
                    disableAutoRun: !1,
                    json: V,
                    show: !1,
                    parentScope: null,
                    todo: [],
                    type: ((q = V.slot) == null ? void 0 : q.showType) || V.type,
                    useEntryAnimation: !1
                  }, scenesMap[f] = w, V.type === "popup" || setPageScenes((B) => [...B, V]), scenesOperateInputsTodo[f]) {
                    const { parentScope: B, todo: ne } = scenesOperateInputsTodo[f];
                    w.parentScope = B, ne.forEach(({ value: he, pinId: ye, parentScope: xe }) => {
                      w.todo = w.todo.concat({ type: "inputs", todo: {
                        pinId: ye,
                        value: he
                      } });
                    });
                  }
                }
                F ? Object.entries(scenesMap).forEach(([V, B]) => {
                  V === f ? (F === "blank" ? B.useEntryAnimation = !0 : B.useEntryAnimation = !1, B.show = !0, B.type === "popup" ? this.setPopupIds([...this.popupIds, f]) : setCount((ne) => ne + 1)) : (B.show = !1, B.type === "popup" ? this.setPopupIds(this.popupIds.filter((ne) => ne !== B.json.id)) : setCount((ne) => ne + 1));
                }) : w.show || (F === "blank" ? w.useEntryAnimation = !0 : w.useEntryAnimation = !1, w.show = !0, w.type === "popup" ? this.setPopupIds([...this.popupIds, f]) : setCount((V) => V + 1));
              }
            }, (C = e.env) == null ? void 0 : C.canvas)
          },
          disableAutoRun: !0,
          ref: e.ref((f) => {
            d._refs = f;
            const { inputs: O, outputs: F } = f;
            p.outputs.forEach((w) => {
              F(w.id, (q) => {
                var V;
                (V = d.parentScope) == null || V.outputs[w.id](q);
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
        let u = m.comsReg, a = m.consReg, j = m.pinRels;
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
      return n && (s = n.comsReg, i = n.consReg, c = n.pinRels, Object.keys(s).forEach((m) => {
        s[m].global = !0;
      })), o.map((m, y) => {
        const { id: p } = m;
        Object.assign(m.coms, s), Object.assign(m.cons, i), Object.assign(m.pinRels, c);
        const l = e[p];
        return {
          show: l.show,
          key: p,
          json: { ...m, scenesMap: e },
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
      return n && (s = n.comsReg, i = n.consReg, c = n.pinRels, Object.keys(s).forEach((m) => {
        s[m].global = !0;
      })), o.map((m) => {
        const p = e[m].json, { id: l } = p;
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
      const { opts: e } = this.$props, { scenesMap: t, themes: n, permissions: s } = this, i = this, c = t[o], m = e.env.hasPermission, y = {
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
                    const C = x[g];
                    a.todo = a.todo.concat({ type: "globalVar", todo: { comId: g, bindings: C, value: l } });
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
              const C = j._refs.get({ comId: g });
              C && C.outputs[x](d, !0, null, !0);
            }
          });
          const u = e.env._context.getRefsMap();
          Object.entries(u).forEach(([a, j]) => {
            const C = j.get({ comId: g });
            C && C.outputs[x](d, !0, null, !0);
          });
        }
      };
      return {
        ...e,
        env: {
          ...e.env,
          themes: n,
          permissions: s,
          hasPermission: typeof m == "function" ? (l) => {
            if (typeof l == "string") {
              const d = s.find((x) => x.id === l);
              return m({ permission: d });
            }
            return m(l);
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
                  const { parentScope: j, todo: C } = scenesOperateInputsTodo[l];
                  g.parentScope = j, C.forEach(({ value: f, pinId: O, parentScope: F }) => {
                    g.todo = g.todo.concat({ type: "inputs", todo: {
                      pinId: O,
                      value: f
                    } });
                  });
                }
              }
              x ? Object.entries(t).forEach(([a, j]) => {
                a === l ? (x === "blank" ? j.useEntryAnimation = !0 : j.useEntryAnimation = !1, j.show = !0, j.type === "popup" ? i.setPopupIds([...i.popupIds, l]) : setCount((C) => C + 1)) : (j.show = !1, j.type === "popup" ? i.setPopupIds(i.popupIds.filter((C) => C !== j.json.id)) : setCount((C) => C + 1));
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
              var C;
              c.show = !1, c.todo = [], c._refs = null, (C = c.parentScope) == null || C.outputs[a.id](j), c.parentScope = null, c.type === "popup" ? i.setPopupIds(i.popupIds.filter((f) => f !== c.json.id)) : setCount((f) => f + 1);
            });
          }), d.length ? (d.forEach(({ type: a, todo: j }) => {
            if (a === "inputs")
              Promise.resolve().then(() => {
                x[j.pinId](j.value, o);
              });
            else if (a === "globalVar") {
              const { comId: C, value: f, bindings: O } = j;
              i._notifyBindings(l, C, O, f);
            }
          }), c.todo = []) : u || (c.disableAutoRun = !0, Promise.resolve().then(() => {
            var a, j;
            (j = (a = c.json.inputs) == null ? void 0 : a.forEach) == null || j.call(a, (C) => {
              const { id: f, mockData: O } = C;
              let F;
              if (e.debug && typeof O < "u")
                try {
                  F = JSON.parse(decodeURIComponent(O));
                } catch {
                  F = O;
                }
              x[f](F);
            });
          })), u && Promise.resolve().then(() => {
            l.run();
          }), Object.entries(i.globalVarMap).forEach(([a, j]) => {
            const C = c._refs.get({ comId: a });
            C && C.outputs.changed(j, !0, null, !0);
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
        const m = i.split(".");
        m.forEach((y, p) => {
          p !== m.length - 1 ? c = c[y] : c[y] = n;
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
