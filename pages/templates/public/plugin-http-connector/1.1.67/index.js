!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@mybricks/plugins/service"]=t():e["@mybricks/plugins/service"]=t()}(this,(()=>(()=>{"use strict";var __webpack_modules__={5525:(e,t,r)=>{},8543:(e,t,r)=>{function n(e){return e?decodeURIComponent(e).replace(/export\s+default.*function.*\(/,"function _RT_("):e}r.d(t,{T:()=>n}),r(5525)},8624:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(8113),o=r(4198),i=r(6672),s=r(1333);const a={http:o.Z,xhr:i.Z};n.Z.forEach(a,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const c={getAdapter:e=>{e=n.Z.isArray(e)?e:[e];const{length:t}=e;let r,o;for(let i=0;i<t&&(r=e[i],!(o=n.Z.isString(r)?a[r.toLowerCase()]:r));i++);if(!o){if(!1===o)throw new s.Z(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(n.Z.hasOwnProp(a,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!n.Z.isFunction(o))throw new TypeError("adapter is not a function");return o},adapters:a}},6672:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(8113),o=r(1992),i=r(8308),s=r(3343),a=r(5315),c=r(8738),u=r(2913),l=r(1333),f=r(9619),d=r(2312),p=r(9698),h=r(1150),m=r(2141);function Z(e,t){let r=0;const n=(0,m.Z)(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,c=n(a);r=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){let m=e.data;const y=h.Z.from(e.headers).normalize(),g=e.responseType;let b;function _(){e.cancelToken&&e.cancelToken.unsubscribe(b),e.signal&&e.signal.removeEventListener("abort",b)}n.Z.isFormData(m)&&(p.Z.isStandardBrowserEnv||p.Z.isStandardBrowserWebWorkerEnv?y.setContentType(!1):y.setContentType("multipart/form-data;",!1));let E=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.set("Authorization","Basic "+btoa(t+":"+r))}const w=(0,a.Z)(e.baseURL,e.url);function O(){if(!E)return;const n=h.Z.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),i={data:g&&"text"!==g&&"json"!==g?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:n,config:e,request:E};(0,o.Z)((function(e){t(e),_()}),(function(e){r(e),_()}),i),E=null}if(E.open(e.method.toUpperCase(),(0,s.Z)(w,e.params,e.paramsSerializer),!0),E.timeout=e.timeout,"onloadend"in E?E.onloadend=O:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(O)},E.onabort=function(){E&&(r(new l.Z("Request aborted",l.Z.ECONNABORTED,e,E)),E=null)},E.onerror=function(){r(new l.Z("Network Error",l.Z.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const n=e.transitional||u.Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new l.Z(t,n.clarifyTimeoutError?l.Z.ETIMEDOUT:l.Z.ECONNABORTED,e,E)),E=null},p.Z.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.Z)(w))&&e.xsrfCookieName&&i.Z.read(e.xsrfCookieName);t&&y.set(e.xsrfHeaderName,t)}void 0===m&&y.setContentType(null),"setRequestHeader"in E&&n.Z.forEach(y.toJSON(),(function(e,t){E.setRequestHeader(t,e)})),n.Z.isUndefined(e.withCredentials)||(E.withCredentials=!!e.withCredentials),g&&"json"!==g&&(E.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&E.addEventListener("progress",Z(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",Z(e.onUploadProgress)),(e.cancelToken||e.signal)&&(b=t=>{E&&(r(!t||t.type?new f.Z(null,e,E):t),E.abort(),E=null)},e.cancelToken&&e.cancelToken.subscribe(b),e.signal&&(e.signal.aborted?b():e.signal.addEventListener("abort",b)));const v=(0,d.Z)(w);v&&-1===p.Z.protocols.indexOf(v)?r(new l.Z("Unsupported protocol "+v+":",l.Z.ERR_BAD_REQUEST,e)):E.send(m||null)}))}},5274:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(8113),o=r(6524),i=r(5411),s=r(8636),a=r(6239),c=r(4510),u=r(9619),l=r(2629),f=r(9126),d=r(2112),p=r(5238),h=r(1333),m=r(7990),Z=r(5511),y=r(1150),g=r(8624),b=r(2097);const _=function e(t){const r=new i.Z(t),a=(0,o.Z)(i.Z.prototype.request,r);return n.Z.extend(a,i.Z.prototype,r,{allOwnKeys:!0}),n.Z.extend(a,r,null,{allOwnKeys:!0}),a.create=function(r){return e((0,s.Z)(t,r))},a}(a.Z);_.Axios=i.Z,_.CanceledError=u.Z,_.CancelToken=l.Z,_.isCancel=f.Z,_.VERSION=d.q,_.toFormData=p.Z,_.AxiosError=h.Z,_.Cancel=_.CanceledError,_.all=function(e){return Promise.all(e)},_.spread=m.Z,_.isAxiosError=Z.Z,_.mergeConfig=s.Z,_.AxiosHeaders=y.Z,_.formToJSON=e=>(0,c.Z)(n.Z.isHTMLForm(e)?new FormData(e):e),_.getAdapter=g.Z.getAdapter,_.HttpStatusCode=b.Z,_.default=_;const E=_},2629:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9619);class o{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,o,i){r.reason||(r.reason=new n.Z(e,o,i),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new o((function(t){e=t})),cancel:e}}}const i=o},9619:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1333);function o(e,t,r){n.Z.call(this,null==e?"canceled":e,n.Z.ERR_CANCELED,t,r),this.name="CanceledError"}r(8113).Z.inherits(o,n.Z,{__CANCEL__:!0});const i=o},9126:(e,t,r)=>{function n(e){return!(!e||!e.__CANCEL__)}r.d(t,{Z:()=>n})},5411:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(8113),o=r(3343),i=r(2881),s=r(4352),a=r(8636),c=r(5315),u=r(6011),l=r(1150);const f=u.Z.validators;class d{constructor(e){this.defaults=e,this.interceptors={request:new i.Z,response:new i.Z}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,a.Z)(this.defaults,t);const{transitional:r,paramsSerializer:o,headers:i}=t;void 0!==r&&u.Z.assertOptions(r,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1),null!=o&&(n.Z.isFunction(o)?t.paramsSerializer={serialize:o}:u.Z.assertOptions(o,{encode:f.function,serialize:f.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=i&&n.Z.merge(i.common,i[t.method]);i&&n.Z.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=l.Z.concat(c,i);const d=[];let p=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(p=p&&e.synchronous,d.unshift(e.fulfilled,e.rejected))}));const h=[];let m;this.interceptors.response.forEach((function(e){h.push(e.fulfilled,e.rejected)}));let Z,y=0;if(!p){const e=[s.Z.bind(this),void 0];for(e.unshift.apply(e,d),e.push.apply(e,h),Z=e.length,m=Promise.resolve(t);y<Z;)m=m.then(e[y++],e[y++]);return m}Z=d.length;let g=t;for(y=0;y<Z;){const e=d[y++],t=d[y++];try{g=e(g)}catch(e){t.call(this,e);break}}try{m=s.Z.call(this,g)}catch(e){return Promise.reject(e)}for(y=0,Z=h.length;y<Z;)m=m.then(h[y++],h[y++]);return m}getUri(e){e=(0,a.Z)(this.defaults,e);const t=(0,c.Z)(e.baseURL,e.url);return(0,o.Z)(t,e.params,e.paramsSerializer)}}n.Z.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,r){return this.request((0,a.Z)(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.Z.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request((0,a.Z)(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}d.prototype[e]=t(),d.prototype[e+"Form"]=t(!0)}));const p=d},1333:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(8113);function o(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}n.Z.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n.Z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{s[e]={value:e}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=(e,t,r,s,a,c)=>{const u=Object.create(i);return n.Z.toFlatObject(e,u,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),o.call(u,e.message,t,r,s,a),u.cause=e,u.name=e.name,c&&Object.assign(u,c),u};const a=o},1150:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(8113),o=r(6283);const i=Symbol("internals");function s(e){return e&&String(e).trim().toLowerCase()}function a(e){return!1===e||null==e?e:n.Z.isArray(e)?e.map(a):String(e)}function c(e,t,r,o,i){return n.Z.isFunction(o)?o.call(this,t,r):(i&&(t=r),n.Z.isString(t)?n.Z.isString(o)?-1!==t.indexOf(o):n.Z.isRegExp(o)?o.test(t):void 0:void 0)}class u{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function c(e,t,r){const o=s(t);if(!o)throw new Error("header name must be a non-empty string");const c=n.Z.findKey(i,o);(!c||void 0===i[c]||!0===r||void 0===r&&!1!==i[c])&&(i[c||t]=a(e))}const u=(e,t)=>n.Z.forEach(e,((e,r)=>c(e,r,t)));return n.Z.isPlainObject(e)||e instanceof this.constructor?u(e,t):n.Z.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?u((0,o.Z)(e),t):null!=e&&c(t,e,r),this}get(e,t){if(e=s(e)){const r=n.Z.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(n.Z.isFunction(t))return t.call(this,e,r);if(n.Z.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=s(e)){const r=n.Z.findKey(this,e);return!(!r||void 0===this[r]||t&&!c(0,this[r],r,t))}return!1}delete(e,t){const r=this;let o=!1;function i(e){if(e=s(e)){const i=n.Z.findKey(r,e);!i||t&&!c(0,r[i],i,t)||(delete r[i],o=!0)}}return n.Z.isArray(e)?e.forEach(i):i(e),o}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!c(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return n.Z.forEach(this,((o,i)=>{const s=n.Z.findKey(r,i);if(s)return t[s]=a(o),void delete t[i];const c=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(i):String(i).trim();c!==i&&delete t[i],t[c]=a(o),r[c]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return n.Z.forEach(this,((r,o)=>{null!=r&&!1!==r&&(t[o]=e&&n.Z.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[i]=this[i]={accessors:{}}).accessors,r=this.prototype;function o(e){const o=s(e);t[o]||(function(e,t){const r=n.Z.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[o]=!0)}return n.Z.isArray(e)?e.forEach(o):o(e),this}}u.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),n.Z.reduceDescriptors(u.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),n.Z.freezeMethods(u);const l=u},2881:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8113);const o=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){n.Z.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}},5315:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8474),o=r(4318);function i(e,t){return e&&!(0,n.Z)(t)?(0,o.Z)(e,t):t}},4352:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4293),o=r(9126),i=r(6239),s=r(9619),a=r(1150),c=r(8624);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s.Z(null,e)}function l(e){return u(e),e.headers=a.Z.from(e.headers),e.data=n.Z.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),c.Z.getAdapter(e.adapter||i.Z.adapter)(e).then((function(t){return u(e),t.data=n.Z.call(e,e.transformResponse,t),t.headers=a.Z.from(t.headers),t}),(function(t){return(0,o.Z)(t)||(u(e),t&&t.response&&(t.response.data=n.Z.call(e,e.transformResponse,t.response),t.response.headers=a.Z.from(t.response.headers))),Promise.reject(t)}))}},8636:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(8113),o=r(1150);const i=e=>e instanceof o.Z?e.toJSON():e;function s(e,t){t=t||{};const r={};function o(e,t,r){return n.Z.isPlainObject(e)&&n.Z.isPlainObject(t)?n.Z.merge.call({caseless:r},e,t):n.Z.isPlainObject(t)?n.Z.merge({},t):n.Z.isArray(t)?t.slice():t}function s(e,t,r){return n.Z.isUndefined(t)?n.Z.isUndefined(e)?void 0:o(void 0,e,r):o(e,t,r)}function a(e,t){if(!n.Z.isUndefined(t))return o(void 0,t)}function c(e,t){return n.Z.isUndefined(t)?n.Z.isUndefined(e)?void 0:o(void 0,e):o(void 0,t)}function u(r,n,i){return i in t?o(r,n):i in e?o(void 0,r):void 0}const l={url:a,method:a,data:a,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(e,t)=>s(i(e),i(t),!0)};return n.Z.forEach(Object.keys(Object.assign({},e,t)),(function(o){const i=l[o]||s,a=i(e[o],t[o],o);n.Z.isUndefined(a)&&i!==u||(r[o]=a)})),r}},1992:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(1333);function o(e,t,r){const o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(new n.Z("Request failed with status code "+r.status,[n.Z.ERR_BAD_REQUEST,n.Z.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}},4293:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(8113),o=r(6239),i=r(1150);function s(e,t){const r=this||o.Z,s=t||r,a=i.Z.from(s.headers);let c=s.data;return n.Z.forEach(e,(function(e){c=e.call(r,c,a.normalize(),t?t.status:void 0)})),a.normalize(),c}},6239:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(8113),o=r(1333),i=r(2913),s=r(5238),a=r(6856),c=r(9698),u=r(4510);const l={transitional:i.Z,adapter:c.Z.isNode?"http":"xhr",transformRequest:[function(e,t){const r=t.getContentType()||"",o=r.indexOf("application/json")>-1,i=n.Z.isObject(e);if(i&&n.Z.isHTMLForm(e)&&(e=new FormData(e)),n.Z.isFormData(e))return o&&o?JSON.stringify((0,u.Z)(e)):e;if(n.Z.isArrayBuffer(e)||n.Z.isBuffer(e)||n.Z.isStream(e)||n.Z.isFile(e)||n.Z.isBlob(e))return e;if(n.Z.isArrayBufferView(e))return e.buffer;if(n.Z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return(0,a.Z)(e,this.formSerializer).toString();if((c=n.Z.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,s.Z)(c?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,r){if(n.Z.isString(e))try{return(0,JSON.parse)(e),n.Z.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||l.transitional,r=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&n.Z.isString(e)&&(r&&!this.responseType||i)){const r=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw o.Z.from(e,o.Z.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.Z.classes.FormData,Blob:c.Z.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};n.Z.forEach(["delete","get","head","post","put","patch"],(e=>{l.headers[e]={}}));const f=l},2913:(e,t,r)=>{r.d(t,{Z:()=>n});const n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},2112:(e,t,r)=>{r.d(t,{q:()=>n});const n="1.5.0"},7709:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5238);function o(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function i(e,t){this._pairs=[],e&&(0,n.Z)(e,this,t)}const s=i.prototype;s.append=function(e,t){this._pairs.push([e,t])},s.toString=function(e){const t=e?function(t){return e.call(this,t,o)}:o;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const a=i},2097:(e,t,r)=>{r.d(t,{Z:()=>o});const n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach((([e,t])=>{n[t]=e}));const o=n},6524:(e,t,r)=>{function n(e,t){return function(){return e.apply(t,arguments)}}r.d(t,{Z:()=>n})},3343:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(8113),o=r(7709);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t,r){if(!t)return e;const s=r&&r.encode||i,a=r&&r.serialize;let c;if(c=a?a(t,r):n.Z.isURLSearchParams(t)?t.toString():new o.Z(t,r).toString(s),c){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+c}return e}},4318:(e,t,r)=>{function n(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}r.d(t,{Z:()=>n})},8308:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8113);const o=r(9698).Z.isStandardBrowserEnv?{write:function(e,t,r,o,i,s){const a=[];a.push(e+"="+encodeURIComponent(t)),n.Z.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.Z.isString(o)&&a.push("path="+o),n.Z.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},4510:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8113);const o=function(e){function t(e,r,o,i){let s=e[i++];const a=Number.isFinite(+s),c=i>=e.length;return s=!s&&n.Z.isArray(o)?o.length:s,c?(n.Z.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):(o[s]&&n.Z.isObject(o[s])||(o[s]=[]),t(e,r,o[s],i)&&n.Z.isArray(o[s])&&(o[s]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(o[s])),!a)}if(n.Z.isFormData(e)&&n.Z.isFunction(e.entries)){const r={};return n.Z.forEachEntry(e,((e,o)=>{t(function(e){return n.Z.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),o,r,0)})),r}return null}},8474:(e,t,r)=>{function n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}r.d(t,{Z:()=>n})},5511:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8113);function o(e){return n.Z.isObject(e)&&!0===e.isAxiosError}},8738:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8113);const o=r(9698).Z.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function o(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=o(window.location.href),function(e){const t=n.Z.isString(e)?o(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0}},4198:(e,t,r)=>{r.d(t,{Z:()=>n});const n=null},6283:(e,t,r)=>{r.d(t,{Z:()=>o});const n=r(8113).Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),o=e=>{const t={};let r,o,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),r=e.substring(0,i).trim().toLowerCase(),o=e.substring(i+1).trim(),!r||t[r]&&n[r]||("set-cookie"===r?t[r]?t[r].push(o):t[r]=[o]:t[r]=t[r]?t[r]+", "+o:o)})),t}},2312:(e,t,r)=>{function n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}r.d(t,{Z:()=>n})},2141:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=n[s];o||(o=c),r[i]=a,n[i]=c;let l=s,f=0;for(;l!==i;)f+=r[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}},7990:(e,t,r)=>{function n(e){return function(t){return e.apply(null,t)}}r.d(t,{Z:()=>n})},5238:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(8113),o=r(1333),i=r(4198);function s(e){return n.Z.isPlainObject(e)||n.Z.isArray(e)}function a(e){return n.Z.endsWith(e,"[]")?e.slice(0,-2):e}function c(e,t,r){return e?e.concat(t).map((function(e,t){return e=a(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const u=n.Z.toFlatObject(n.Z,{},null,(function(e){return/^is[A-Z]/.test(e)})),l=function(e,t,r){if(!n.Z.isObject(e))throw new TypeError("target must be an object");t=t||new(i.Z||FormData);const l=(r=n.Z.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!n.Z.isUndefined(t[e])}))).metaTokens,f=r.visitor||Z,d=r.dots,p=r.indexes,h=(r.Blob||"undefined"!=typeof Blob&&Blob)&&n.Z.isSpecCompliantForm(t);if(!n.Z.isFunction(f))throw new TypeError("visitor must be a function");function m(e){if(null===e)return"";if(n.Z.isDate(e))return e.toISOString();if(!h&&n.Z.isBlob(e))throw new o.Z("Blob is not supported. Use a Buffer instead.");return n.Z.isArrayBuffer(e)||n.Z.isTypedArray(e)?h&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function Z(e,r,o){let i=e;if(e&&!o&&"object"==typeof e)if(n.Z.endsWith(r,"{}"))r=l?r:r.slice(0,-2),e=JSON.stringify(e);else if(n.Z.isArray(e)&&function(e){return n.Z.isArray(e)&&!e.some(s)}(e)||(n.Z.isFileList(e)||n.Z.endsWith(r,"[]"))&&(i=n.Z.toArray(e)))return r=a(r),i.forEach((function(e,o){!n.Z.isUndefined(e)&&null!==e&&t.append(!0===p?c([r],o,d):null===p?r:r+"[]",m(e))})),!1;return!!s(e)||(t.append(c(o,r,d),m(e)),!1)}const y=[],g=Object.assign(u,{defaultVisitor:Z,convertValue:m,isVisitable:s});if(!n.Z.isObject(e))throw new TypeError("data must be an object");return function e(r,o){if(!n.Z.isUndefined(r)){if(-1!==y.indexOf(r))throw Error("Circular reference detected in "+o.join("."));y.push(r),n.Z.forEach(r,(function(r,i){!0===(!(n.Z.isUndefined(r)||null===r)&&f.call(t,r,n.Z.isString(i)?i.trim():i,o,g))&&e(r,o?o.concat(i):[i])})),y.pop()}}(e),t}},6856:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(8113),o=r(5238),i=r(9698);function s(e,t){return(0,o.Z)(e,new i.Z.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,o){return i.Z.isNode&&n.Z.isBuffer(e)?(this.append(t,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}},6011:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2112),o=r(1333);const i={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{i[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const s={};i.transitional=function(e,t,r){function i(e,t){return"[Axios v"+n.q+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,n,a)=>{if(!1===e)throw new o.Z(i(n," has been removed"+(t?" in "+t:"")),o.Z.ERR_DEPRECATED);return t&&!s[n]&&(s[n]=!0,console.warn(i(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}};const a={assertOptions:function(e,t,r){if("object"!=typeof e)throw new o.Z("options must be an object",o.Z.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const s=n[i],a=t[s];if(a){const t=e[s],r=void 0===t||a(t,s,e);if(!0!==r)throw new o.Z("option "+s+" must be "+r,o.Z.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o.Z("Unknown option "+s,o.Z.ERR_BAD_OPTION)}},validators:i}},2004:(e,t,r)=>{r.d(t,{Z:()=>n});const n="undefined"!=typeof Blob?Blob:null},1951:(e,t,r)=>{r.d(t,{Z:()=>n});const n="undefined"!=typeof FormData?FormData:null},3358:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7709);const o="undefined"!=typeof URLSearchParams?URLSearchParams:n.Z},9698:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(3358),o=r(1951),i=r(2004);const s=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,c={isBrowser:!0,classes:{URLSearchParams:n.Z,FormData:o.Z,Blob:i.Z},isStandardBrowserEnv:s,isStandardBrowserWebWorkerEnv:a,protocols:["http","https","file","blob","url","data"]}},8113:(e,t,r)=>{r.d(t,{Z:()=>B});var n=r(6524);const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>s(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined"),d=c("ArrayBuffer"),p=u("string"),h=u("function"),m=u("number"),Z=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==s(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=c("Date"),b=c("File"),_=c("Blob"),E=c("FileList"),w=c("URLSearchParams");function O(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),l(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(n=0;n<i;n++)s=o[n],t.call(null,e[s],s,e)}}function v(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,R=e=>!f(e)&&e!==S,A=(j="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>j&&e instanceof j);var j;const T=c("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),x=c("RegExp"),C=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};O(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},N="abcdefghijklmnopqrstuvwxyz",D="0123456789",U={DIGIT:D,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+D},F=c("AsyncFunction"),B={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=s(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:Z,isPlainObject:y,isUndefined:f,isDate:g,isFile:b,isBlob:_,isRegExp:x,isFunction:h,isStream:e=>Z(e)&&h(e.pipe),isURLSearchParams:w,isTypedArray:A,isFileList:E,forEach:O,merge:function e(){const{caseless:t}=R(this)&&this||{},r={},n=(n,o)=>{const i=t&&v(r,o)||o;y(r[i])&&y(n)?r[i]=e(r[i],n):y(n)?r[i]=e({},n):l(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&O(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:o}={})=>(O(t,((t,o)=>{r&&h(t)?e[o]=(0,n.Z)(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],n&&!n(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&i(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:c,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:T,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:C,freezeMethods:e=>{C(e,((t,r)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];h(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return l(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:v,global:S,isContextDefined:R,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(Z(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=l(e)?[]:{};return O(e,((e,t)=>{const i=r(e,n+1);!f(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:F,isThenable:e=>e&&(Z(e)||h(e))&&h(e.then)&&h(e.catch)}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{call:()=>call});var axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5274),_script__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8543);function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var defaultFn=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Object.assign(Object.assign({},e),r)},httpRegExp=new RegExp("^(http|https)://");function call(connector,params,config){return new Promise((function(resolve,reject){try{var fn=connector.script?eval("(".concat(decodeURIComponent(connector.script),")")):getFetch(connector),_ref=config||{},_ref$before=_ref.before,before=void 0===_ref$before?defaultFn:_ref$before;fn(params,{then:resolve,onError:reject},{executeEnv:connector.executeEnv,ajax:function(e){var t,r=before(Object.assign({},e)),n=r.url;return n||reject("请求路径不能为空"),connector.useProxy&&httpRegExp.test(n)&&(null===(t=n.match(/^https?:\/\/([^/#&?])+/g))||void 0===t?void 0:t[0])!==location.origin?(0,axios__WEBPACK_IMPORTED_MODULE_1__.Z)(Object.assign(Object.assign({},r),{url:"/paas/api/proxy",headers:Object.assign(Object.assign({},r.headers||{}),_defineProperty({},"x-target-url",r.url)),data:r.data})).then((function(e){return e.data})).catch((function(e){var t;return reject((null===(t=e.response.data)||void 0===t?void 0:t.message)||e)})):(0,axios__WEBPACK_IMPORTED_MODULE_1__.Z)(r||e).then((function(e){return e.data})).catch((function(e){var t;return reject((null===(t=e.response.data)||void 0===t?void 0:t.message)||e)}))}})}catch(e){console.log("连接器错误",e),reject("连接器script错误.")}}))}var setData=function(e,t,r){var n=t.length;return function e(r,o,i){if(!r||o===n)return r;var s=t[o];return Array.isArray(r)?r.map((function(t,r){var n,s=i[r];return void 0===s?(n={},i.push(n)):n=s,e(t,o,n)})):o===n-1?(i[s]=r[s],r[s]):(r=r[s],Array.isArray(r)?i[s]=i[s]||[]:i[s]=i[s]||{},e(r,o+1,Array.isArray(i)?i:i[s]))}(e,0,r)},del=function(e,t){var r=t.length;!function e(n,o){if(n&&o!==r){var i=t[o];o===r-1&&Reflect.deleteProperty(n,i),Array.isArray(n)?n.forEach((function(t){e(t,o)})):e(n[i],o+1)}}(e,0)},pluginRun=function pluginRun(functionString){return eval("(() => { return ".concat(functionString?(0,_script__WEBPACK_IMPORTED_MODULE_0__.T)(functionString):"_ => _;","})()"))},getFetch=function(e){return function(t,r,n){var o=r.then,i=r.onError,s=e.method,a=e.path.trim(),c=e.outputKeys||[],u=e.excludeKeys||[];try{var l=a,f=pluginRun(e.globalParamsFn)(s.startsWith("GET")?{params:t,url:l,method:s}:{data:t,url:l,method:s});f.url=f.url||l,f.method=f.method||s;var d=pluginRun(e.input)(f),p=(d.params||d.data)instanceof FormData,h=[];d.url=(d.url||l).replace(/{([^}]+)}/g,(function(e,t){var r=t?t.split("."):[],n=d.params||d.data;r.length||i("请求路径中模板字符串错误");var o=0;for(h.push(r[0]);r.length;){var s=r.shift();if(!n)return void i("请求路径中模板字符串的参数(".concat(t,")缺失"));var a=n[s];if(n instanceof FormData&&(a=n.get(s),0===o&&r.length))try{a=JSON.parse(a)}catch(e){return void i("请求路径中模板字符串的参数(".concat(t,")缺失"))}null==a&&i("请求路径中模板字符串的参数(".concat(t,")缺失")),o++,n=a}return n})),p?(h.forEach((function(e){(d.params||d.data).delete(e)})),(d.params||d.data).delete("MYBRICKS_HOST")):(h.forEach((function(e){Reflect.deleteProperty(d.params||d.data||{},e)})),Reflect.deleteProperty(d.params||d.data||{},"MYBRICKS_HOST")),d.method=d.method||s,n.ajax(d).then((function(t){return pluginRun(e.globalResultFn)({response:t,config:d},{throwStatusCodeError:i})})).then((function(t){return pluginRun(e.output)(t,Object.assign({},d),{throwStatusCodeError:i})})).then((function(e){return null==u||u.forEach((function(t){return del(e,t.split("."))})),e})).then((function(e){var t=Array.isArray(e)?[]:{};if(void 0===c||0===c.length)t=e;else if(c.forEach((function(r){setData(e,r.split("."),t)})),Array.isArray(c)&&c.length&&(c.length>1||1!==c.length||""!==c[0]))try{for(var r=c.map((function(e){return e.split(".")}));"[object Object]"===Object.prototype.toString.call(t)&&r.every((function(e){return!!e.length}))&&1===Object.values(t).length;)t=Object.values(t)[0],r.forEach((function(e){return e.shift()}))}catch(e){console.log("connector format data error",e)}o(t)})).catch((function(e){i(e&&e.message||e)}))}catch(e){return i(e)}}}})(),__webpack_exports__})()));