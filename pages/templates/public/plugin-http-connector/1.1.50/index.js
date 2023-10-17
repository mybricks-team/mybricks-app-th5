!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@mybricks/plugins/service"]=t():e["@mybricks/plugins/service"]=t()}(this,(()=>(()=>{"use strict";var __webpack_modules__={5525:(e,t,n)=>{},8543:(e,t,n)=>{function r(e){return e?decodeURIComponent(e).replace(/export\s+default.*function.*\(/,"function _RT_("):e}n.d(t,{T:()=>r}),n(5525)},8624:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8113),o=n(4198),i=n(6672),s=n(1333);const a={http:o.Z,xhr:i.Z};r.Z.forEach(a,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const c={getAdapter:e=>{e=r.Z.isArray(e)?e:[e];const{length:t}=e;let n,o;for(let i=0;i<t&&(n=e[i],!(o=r.Z.isString(n)?a[n.toLowerCase()]:n));i++);if(!o){if(!1===o)throw new s.Z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(r.Z.hasOwnProp(a,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!r.Z.isFunction(o))throw new TypeError("adapter is not a function");return o},adapters:a}},6672:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(8113),o=n(1992),i=n(8308),s=n(3343),a=n(5315),c=n(8738),u=n(2913),l=n(1333),f=n(9619),d=n(2312),p=n(9698),h=n(1150),m=n(2141);function Z(e,t){let n=0;const r=(0,m.Z)(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let m=e.data;const y=h.Z.from(e.headers).normalize(),g=e.responseType;let b;function _(){e.cancelToken&&e.cancelToken.unsubscribe(b),e.signal&&e.signal.removeEventListener("abort",b)}r.Z.isFormData(m)&&(p.Z.isStandardBrowserEnv||p.Z.isStandardBrowserWebWorkerEnv?y.setContentType(!1):y.setContentType("multipart/form-data;",!1));let E=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.set("Authorization","Basic "+btoa(t+":"+n))}const w=(0,a.Z)(e.baseURL,e.url);function O(){if(!E)return;const r=h.Z.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),i={data:g&&"text"!==g&&"json"!==g?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:r,config:e,request:E};(0,o.Z)((function(e){t(e),_()}),(function(e){n(e),_()}),i),E=null}if(E.open(e.method.toUpperCase(),(0,s.Z)(w,e.params,e.paramsSerializer),!0),E.timeout=e.timeout,"onloadend"in E?E.onloadend=O:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(O)},E.onabort=function(){E&&(n(new l.Z("Request aborted",l.Z.ECONNABORTED,e,E)),E=null)},E.onerror=function(){n(new l.Z("Network Error",l.Z.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||u.Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l.Z(t,r.clarifyTimeoutError?l.Z.ETIMEDOUT:l.Z.ECONNABORTED,e,E)),E=null},p.Z.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.Z)(w))&&e.xsrfCookieName&&i.Z.read(e.xsrfCookieName);t&&y.set(e.xsrfHeaderName,t)}void 0===m&&y.setContentType(null),"setRequestHeader"in E&&r.Z.forEach(y.toJSON(),(function(e,t){E.setRequestHeader(t,e)})),r.Z.isUndefined(e.withCredentials)||(E.withCredentials=!!e.withCredentials),g&&"json"!==g&&(E.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&E.addEventListener("progress",Z(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",Z(e.onUploadProgress)),(e.cancelToken||e.signal)&&(b=t=>{E&&(n(!t||t.type?new f.Z(null,e,E):t),E.abort(),E=null)},e.cancelToken&&e.cancelToken.subscribe(b),e.signal&&(e.signal.aborted?b():e.signal.addEventListener("abort",b)));const v=(0,d.Z)(w);v&&-1===p.Z.protocols.indexOf(v)?n(new l.Z("Unsupported protocol "+v+":",l.Z.ERR_BAD_REQUEST,e)):E.send(m||null)}))}},5274:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(8113),o=n(6524),i=n(5411),s=n(8636),a=n(6239),c=n(4510),u=n(9619),l=n(2629),f=n(9126),d=n(2112),p=n(5238),h=n(1333),m=n(7990),Z=n(5511),y=n(1150),g=n(8624),b=n(2097);const _=function e(t){const n=new i.Z(t),a=(0,o.Z)(i.Z.prototype.request,n);return r.Z.extend(a,i.Z.prototype,n,{allOwnKeys:!0}),r.Z.extend(a,n,null,{allOwnKeys:!0}),a.create=function(n){return e((0,s.Z)(t,n))},a}(a.Z);_.Axios=i.Z,_.CanceledError=u.Z,_.CancelToken=l.Z,_.isCancel=f.Z,_.VERSION=d.q,_.toFormData=p.Z,_.AxiosError=h.Z,_.Cancel=_.CanceledError,_.all=function(e){return Promise.all(e)},_.spread=m.Z,_.isAxiosError=Z.Z,_.mergeConfig=s.Z,_.AxiosHeaders=y.Z,_.formToJSON=e=>(0,c.Z)(r.Z.isHTMLForm(e)?new FormData(e):e),_.getAdapter=g.Z.getAdapter,_.HttpStatusCode=b.Z,_.default=_;const E=_},2629:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(9619);class o{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,o,i){n.reason||(n.reason=new r.Z(e,o,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new o((function(t){e=t})),cancel:e}}}const i=o},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(1333);function o(e,t,n){r.Z.call(this,null==e?"canceled":e,r.Z.ERR_CANCELED,t,n),this.name="CanceledError"}n(8113).Z.inherits(o,r.Z,{__CANCEL__:!0});const i=o},9126:(e,t,n)=>{function r(e){return!(!e||!e.__CANCEL__)}n.d(t,{Z:()=>r})},5411:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(8113),o=n(3343),i=n(2881),s=n(4352),a=n(8636),c=n(5315),u=n(6011),l=n(1150);const f=u.Z.validators;class d{constructor(e){this.defaults=e,this.interceptors={request:new i.Z,response:new i.Z}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,a.Z)(this.defaults,t);const{transitional:n,paramsSerializer:o,headers:i}=t;void 0!==n&&u.Z.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1),null!=o&&(r.Z.isFunction(o)?t.paramsSerializer={serialize:o}:u.Z.assertOptions(o,{encode:f.function,serialize:f.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=i&&r.Z.merge(i.common,i[t.method]);i&&r.Z.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=l.Z.concat(c,i);const d=[];let p=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(p=p&&e.synchronous,d.unshift(e.fulfilled,e.rejected))}));const h=[];let m;this.interceptors.response.forEach((function(e){h.push(e.fulfilled,e.rejected)}));let Z,y=0;if(!p){const e=[s.Z.bind(this),void 0];for(e.unshift.apply(e,d),e.push.apply(e,h),Z=e.length,m=Promise.resolve(t);y<Z;)m=m.then(e[y++],e[y++]);return m}Z=d.length;let g=t;for(y=0;y<Z;){const e=d[y++],t=d[y++];try{g=e(g)}catch(e){t.call(this,e);break}}try{m=s.Z.call(this,g)}catch(e){return Promise.reject(e)}for(y=0,Z=h.length;y<Z;)m=m.then(h[y++],h[y++]);return m}getUri(e){e=(0,a.Z)(this.defaults,e);const t=(0,c.Z)(e.baseURL,e.url);return(0,o.Z)(t,e.params,e.paramsSerializer)}}r.Z.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,n){return this.request((0,a.Z)(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.Z.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request((0,a.Z)(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}d.prototype[e]=t(),d.prototype[e+"Form"]=t(!0)}));const p=d},1333:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(8113);function o(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.Z.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.Z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{s[e]={value:e}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=(e,t,n,s,a,c)=>{const u=Object.create(i);return r.Z.toFlatObject(e,u,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),o.call(u,e.message,t,n,s,a),u.cause=e,u.name=e.name,c&&Object.assign(u,c),u};const a=o},1150:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8113),o=n(6283);const i=Symbol("internals");function s(e){return e&&String(e).trim().toLowerCase()}function a(e){return!1===e||null==e?e:r.Z.isArray(e)?e.map(a):String(e)}function c(e,t,n,o,i){return r.Z.isFunction(o)?o.call(this,t,n):(i&&(t=n),r.Z.isString(t)?r.Z.isString(o)?-1!==t.indexOf(o):r.Z.isRegExp(o)?o.test(t):void 0:void 0)}class u{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function c(e,t,n){const o=s(t);if(!o)throw new Error("header name must be a non-empty string");const c=r.Z.findKey(i,o);(!c||void 0===i[c]||!0===n||void 0===n&&!1!==i[c])&&(i[c||t]=a(e))}const u=(e,t)=>r.Z.forEach(e,((e,n)=>c(e,n,t)));return r.Z.isPlainObject(e)||e instanceof this.constructor?u(e,t):r.Z.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?u((0,o.Z)(e),t):null!=e&&c(t,e,n),this}get(e,t){if(e=s(e)){const n=r.Z.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(r.Z.isFunction(t))return t.call(this,e,n);if(r.Z.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=s(e)){const n=r.Z.findKey(this,e);return!(!n||void 0===this[n]||t&&!c(0,this[n],n,t))}return!1}delete(e,t){const n=this;let o=!1;function i(e){if(e=s(e)){const i=r.Z.findKey(n,e);!i||t&&!c(0,n[i],i,t)||(delete n[i],o=!0)}}return r.Z.isArray(e)?e.forEach(i):i(e),o}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!c(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return r.Z.forEach(this,((o,i)=>{const s=r.Z.findKey(n,i);if(s)return t[s]=a(o),void delete t[i];const c=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();c!==i&&delete t[i],t[c]=a(o),n[c]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return r.Z.forEach(this,((n,o)=>{null!=n&&!1!==n&&(t[o]=e&&r.Z.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[i]=this[i]={accessors:{}}).accessors,n=this.prototype;function o(e){const o=s(e);t[o]||(function(e,t){const n=r.Z.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[o]=!0)}return r.Z.isArray(e)?e.forEach(o):o(e),this}}u.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),r.Z.reduceDescriptors(u.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),r.Z.freezeMethods(u);const l=u},2881:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8113);const o=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){r.Z.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}},5315:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8474),o=n(4318);function i(e,t){return e&&!(0,r.Z)(t)?(0,o.Z)(e,t):t}},4352:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(4293),o=n(9126),i=n(6239),s=n(9619),a=n(1150),c=n(8624);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s.Z(null,e)}function l(e){return u(e),e.headers=a.Z.from(e.headers),e.data=r.Z.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),c.Z.getAdapter(e.adapter||i.Z.adapter)(e).then((function(t){return u(e),t.data=r.Z.call(e,e.transformResponse,t),t.headers=a.Z.from(t.headers),t}),(function(t){return(0,o.Z)(t)||(u(e),t&&t.response&&(t.response.data=r.Z.call(e,e.transformResponse,t.response),t.response.headers=a.Z.from(t.response.headers))),Promise.reject(t)}))}},8636:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(8113),o=n(1150);const i=e=>e instanceof o.Z?e.toJSON():e;function s(e,t){t=t||{};const n={};function o(e,t,n){return r.Z.isPlainObject(e)&&r.Z.isPlainObject(t)?r.Z.merge.call({caseless:n},e,t):r.Z.isPlainObject(t)?r.Z.merge({},t):r.Z.isArray(t)?t.slice():t}function s(e,t,n){return r.Z.isUndefined(t)?r.Z.isUndefined(e)?void 0:o(void 0,e,n):o(e,t,n)}function a(e,t){if(!r.Z.isUndefined(t))return o(void 0,t)}function c(e,t){return r.Z.isUndefined(t)?r.Z.isUndefined(e)?void 0:o(void 0,e):o(void 0,t)}function u(n,r,i){return i in t?o(n,r):i in e?o(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(e,t)=>s(i(e),i(t),!0)};return r.Z.forEach(Object.keys(Object.assign({},e,t)),(function(o){const i=l[o]||s,a=i(e[o],t[o],o);r.Z.isUndefined(a)&&i!==u||(n[o]=a)})),n}},1992:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1333);function o(e,t,n){const o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new r.Z("Request failed with status code "+n.status,[r.Z.ERR_BAD_REQUEST,r.Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},4293:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(8113),o=n(6239),i=n(1150);function s(e,t){const n=this||o.Z,s=t||n,a=i.Z.from(s.headers);let c=s.data;return r.Z.forEach(e,(function(e){c=e.call(n,c,a.normalize(),t?t.status:void 0)})),a.normalize(),c}},6239:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(8113),o=n(1333),i=n(2913),s=n(5238),a=n(6856),c=n(9698),u=n(4510);const l={transitional:i.Z,adapter:c.Z.isNode?"http":"xhr",transformRequest:[function(e,t){const n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=r.Z.isObject(e);if(i&&r.Z.isHTMLForm(e)&&(e=new FormData(e)),r.Z.isFormData(e))return o&&o?JSON.stringify((0,u.Z)(e)):e;if(r.Z.isArrayBuffer(e)||r.Z.isBuffer(e)||r.Z.isStream(e)||r.Z.isFile(e)||r.Z.isBlob(e))return e;if(r.Z.isArrayBufferView(e))return e.buffer;if(r.Z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,a.Z)(e,this.formSerializer).toString();if((c=r.Z.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,s.Z)(c?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,n){if(r.Z.isString(e))try{return(0,JSON.parse)(e),r.Z.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||l.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&r.Z.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw o.Z.from(e,o.Z.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.Z.classes.FormData,Blob:c.Z.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};r.Z.forEach(["delete","get","head","post","put","patch"],(e=>{l.headers[e]={}}));const f=l},2913:(e,t,n)=>{n.d(t,{Z:()=>r});const r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},2112:(e,t,n)=>{n.d(t,{q:()=>r});const r="1.5.0"},7709:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5238);function o(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function i(e,t){this._pairs=[],e&&(0,r.Z)(e,this,t)}const s=i.prototype;s.append=function(e,t){this._pairs.push([e,t])},s.toString=function(e){const t=e?function(t){return e.call(this,t,o)}:o;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const a=i},2097:(e,t,n)=>{n.d(t,{Z:()=>o});const r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach((([e,t])=>{r[t]=e}));const o=r},6524:(e,t,n)=>{function r(e,t){return function(){return e.apply(t,arguments)}}n.d(t,{Z:()=>r})},3343:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(8113),o=n(7709);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t,n){if(!t)return e;const s=n&&n.encode||i,a=n&&n.serialize;let c;if(c=a?a(t,n):r.Z.isURLSearchParams(t)?t.toString():new o.Z(t,n).toString(s),c){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+c}return e}},4318:(e,t,n)=>{function r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}n.d(t,{Z:()=>r})},8308:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8113);const o=n(9698).Z.isStandardBrowserEnv?{write:function(e,t,n,o,i,s){const a=[];a.push(e+"="+encodeURIComponent(t)),r.Z.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.Z.isString(o)&&a.push("path="+o),r.Z.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},4510:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8113);const o=function(e){function t(e,n,o,i){let s=e[i++];const a=Number.isFinite(+s),c=i>=e.length;return s=!s&&r.Z.isArray(o)?o.length:s,c?(r.Z.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!a):(o[s]&&r.Z.isObject(o[s])||(o[s]=[]),t(e,n,o[s],i)&&r.Z.isArray(o[s])&&(o[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(o[s])),!a)}if(r.Z.isFormData(e)&&r.Z.isFunction(e.entries)){const n={};return r.Z.forEachEntry(e,((e,o)=>{t(function(e){return r.Z.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),o,n,0)})),n}return null}},8474:(e,t,n)=>{function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}n.d(t,{Z:()=>r})},5511:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8113);function o(e){return r.Z.isObject(e)&&!0===e.isAxiosError}},8738:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8113);const o=n(9698).Z.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function o(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=o(window.location.href),function(e){const t=r.Z.isString(e)?o(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},4198:(e,t,n)=>{n.d(t,{Z:()=>r});const r=null},6283:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(8113).Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),o=e=>{const t={};let n,o,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),o=e.substring(i+1).trim(),!n||t[n]&&r[n]||("set-cookie"===n?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)})),t}},2312:(e,t,n)=>{function r(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}n.d(t,{Z:()=>r})},2141:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}},7990:(e,t,n)=>{function r(e){return function(t){return e.apply(null,t)}}n.d(t,{Z:()=>r})},5238:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8113),o=n(1333),i=n(4198);function s(e){return r.Z.isPlainObject(e)||r.Z.isArray(e)}function a(e){return r.Z.endsWith(e,"[]")?e.slice(0,-2):e}function c(e,t,n){return e?e.concat(t).map((function(e,t){return e=a(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const u=r.Z.toFlatObject(r.Z,{},null,(function(e){return/^is[A-Z]/.test(e)})),l=function(e,t,n){if(!r.Z.isObject(e))throw new TypeError("target must be an object");t=t||new(i.Z||FormData);const l=(n=r.Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!r.Z.isUndefined(t[e])}))).metaTokens,f=n.visitor||Z,d=n.dots,p=n.indexes,h=(n.Blob||"undefined"!=typeof Blob&&Blob)&&r.Z.isSpecCompliantForm(t);if(!r.Z.isFunction(f))throw new TypeError("visitor must be a function");function m(e){if(null===e)return"";if(r.Z.isDate(e))return e.toISOString();if(!h&&r.Z.isBlob(e))throw new o.Z("Blob is not supported. Use a Buffer instead.");return r.Z.isArrayBuffer(e)||r.Z.isTypedArray(e)?h&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function Z(e,n,o){let i=e;if(e&&!o&&"object"==typeof e)if(r.Z.endsWith(n,"{}"))n=l?n:n.slice(0,-2),e=JSON.stringify(e);else if(r.Z.isArray(e)&&function(e){return r.Z.isArray(e)&&!e.some(s)}(e)||(r.Z.isFileList(e)||r.Z.endsWith(n,"[]"))&&(i=r.Z.toArray(e)))return n=a(n),i.forEach((function(e,o){!r.Z.isUndefined(e)&&null!==e&&t.append(!0===p?c([n],o,d):null===p?n:n+"[]",m(e))})),!1;return!!s(e)||(t.append(c(o,n,d),m(e)),!1)}const y=[],g=Object.assign(u,{defaultVisitor:Z,convertValue:m,isVisitable:s});if(!r.Z.isObject(e))throw new TypeError("data must be an object");return function e(n,o){if(!r.Z.isUndefined(n)){if(-1!==y.indexOf(n))throw Error("Circular reference detected in "+o.join("."));y.push(n),r.Z.forEach(n,(function(n,i){!0===(!(r.Z.isUndefined(n)||null===n)&&f.call(t,n,r.Z.isString(i)?i.trim():i,o,g))&&e(n,o?o.concat(i):[i])})),y.pop()}}(e),t}},6856:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(8113),o=n(5238),i=n(9698);function s(e,t){return(0,o.Z)(e,new i.Z.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,o){return i.Z.isNode&&r.Z.isBuffer(e)?(this.append(t,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}},6011:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2112),o=n(1333);const i={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const s={};i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r.q+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,a)=>{if(!1===e)throw new o.Z(i(r," has been removed"+(t?" in "+t:"")),o.Z.ERR_DEPRECATED);return t&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}};const a={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o.Z("options must be an object",o.Z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],a=t[s];if(a){const t=e[s],n=void 0===t||a(t,s,e);if(!0!==n)throw new o.Z("option "+s+" must be "+n,o.Z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o.Z("Unknown option "+s,o.Z.ERR_BAD_OPTION)}},validators:i}},2004:(e,t,n)=>{n.d(t,{Z:()=>r});const r="undefined"!=typeof Blob?Blob:null},1951:(e,t,n)=>{n.d(t,{Z:()=>r});const r="undefined"!=typeof FormData?FormData:null},3358:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7709);const o="undefined"!=typeof URLSearchParams?URLSearchParams:r.Z},9698:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(3358),o=n(1951),i=n(2004);const s=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,c={isBrowser:!0,classes:{URLSearchParams:r.Z,FormData:o.Z,Blob:i.Z},isStandardBrowserEnv:s,isStandardBrowserWebWorkerEnv:a,protocols:["http","https","file","blob","url","data"]}},8113:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(6524);const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>s(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined"),d=c("ArrayBuffer"),p=u("string"),h=u("function"),m=u("number"),Z=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==s(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=c("Date"),b=c("File"),_=c("Blob"),E=c("FileList"),w=c("URLSearchParams");function O(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function v(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,S=e=>!f(e)&&e!==R,A=(T="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>T&&e instanceof T);var T;const j=c("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=c("RegExp"),C=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},N="abcdefghijklmnopqrstuvwxyz",U="0123456789",D={DIGIT:U,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+U},F=c("AsyncFunction"),k={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=s(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:Z,isPlainObject:y,isUndefined:f,isDate:g,isFile:b,isBlob:_,isRegExp:P,isFunction:h,isStream:e=>Z(e)&&h(e.pipe),isURLSearchParams:w,isTypedArray:A,isFileList:E,forEach:O,merge:function e(){const{caseless:t}=S(this)&&this||{},n={},r=(r,o)=>{const i=t&&v(n,o)||o;y(n[i])&&y(r)?n[i]=e(n[i],r):y(r)?n[i]=e({},r):l(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&O(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(O(t,((t,o)=>{n&&h(t)?e[o]=(0,r.Z)(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:j,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:C,freezeMethods:e=>{C(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:v,global:R,isContextDefined:S,ALPHABET:D,generateString:(e=16,t=D.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Z(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return O(e,((e,t)=>{const i=n(e,r+1);!f(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:F,isThenable:e=>e&&(Z(e)||h(e))&&h(e.then)&&h(e.catch)}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{call:()=>call});var axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5274),_script__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8543),defaultFn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.assign(Object.assign({},e),n)},httpRegExp=new RegExp("^(http|https)://");function call(connector,params,config){return new Promise((function(resolve,reject){try{var fn=connector.script?eval("(".concat(decodeURIComponent(connector.script),")")):getFetch(connector),_ref=config||{},_ref$before=_ref.before,before=void 0===_ref$before?defaultFn:_ref$before;fn(params,{then:resolve,onError:reject},{executeEnv:connector.executeEnv,ajax:function(e){var t,n=before(Object.assign({},e)),r=n.url;if(r||reject("请求路径不能为空"),connector.useProxy&&httpRegExp.test(r)&&(null===(t=r.match(/^https?:\/\/([^/#&?])+/g))||void 0===t?void 0:t[0])!==location.origin){var o={url:"/paas/api/proxy",method:"post",data:n||e};return n.responseType&&(o.responseType=n.responseType),(0,axios__WEBPACK_IMPORTED_MODULE_1__.Z)(o).then((function(e){return e.data})).catch((function(e){reject(e)}))}return(0,axios__WEBPACK_IMPORTED_MODULE_1__.Z)(n||e).then((function(e){return e.data})).catch((function(e){reject(e)}))}})}catch(e){console.log("连接器错误",e),reject("连接器script错误.")}}))}var setData=function(e,t,n){var r=t.length;return function e(n,o,i){if(!n||o===r)return n;var s=t[o];return Array.isArray(n)?n.map((function(t,n){var r,s=i[n];return void 0===s?(r={},i.push(r)):r=s,e(t,o,r)})):o===r-1?(i[s]=n[s],n[s]):(n=n[s],Array.isArray(n)?i[s]=i[s]||[]:i[s]=i[s]||{},e(n,o+1,Array.isArray(i)?i:i[s]))}(e,0,n)},del=function(e,t){var n=t.length;!function e(r,o){if(r&&o!==n){var i=t[o];o===n-1&&Reflect.deleteProperty(r,i),Array.isArray(r)?r.forEach((function(t){e(t,o)})):e(r[i],o+1)}}(e,0)},pluginRun=function pluginRun(functionString){return eval("(() => { return ".concat(functionString?(0,_script__WEBPACK_IMPORTED_MODULE_0__.T)(functionString):"_ => _;","})()"))},getFetch=function(e){return function(t,n,r){var o=n.then,i=n.onError,s=e.method,a=e.path.trim(),c=e.outputKeys||[],u=e.excludeKeys||[];try{var l=a,f=pluginRun(e.globalParamsFn)(s.startsWith("GET")?{params:t,url:l,method:s}:{data:t,url:l,method:s});f.url=f.url||l,f.method=f.method||s;var d=pluginRun(e.input)(f);d.url=(d.url||l).replace(/{(\w+)}/g,(function(e,n){var r=t[n]||"";return Reflect.deleteProperty(d.params||{},n),r})),d.method=d.method||s,r.ajax(d).then((function(t){return pluginRun(e.globalResultFn)({response:t,config:d},{throwStatusCodeError:i})})).then((function(t){return pluginRun(e.output)(t,Object.assign({},d),{throwStatusCodeError:i})})).then((function(e){return null==u||u.forEach((function(t){return del(e,t.split("."))})),e})).then((function(e){var t=Array.isArray(e)?[]:{};if(void 0===c||0===c.length)t=e;else if(c.forEach((function(n){setData(e,n.split("."),t)})),Array.isArray(c)&&c.length&&(c.length>1||1!==c.length||""!==c[0]))try{for(var n=c.map((function(e){return e.split(".")}));"[object Object]"===Object.prototype.toString.call(t)&&n.every((function(e){return!!e.length}))&&1===Object.values(t).length;)t=Object.values(t)[0],n.forEach((function(e){return e.shift()}))}catch(e){console.log("connector format data error",e)}o(t)})).catch((function(e){i(e&&e.message||e)}))}catch(e){return i(e)}}}})(),__webpack_exports__})()));