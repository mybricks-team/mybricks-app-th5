!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("react"),require("vue"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","vue","react-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).React,e.vue,e.ReactDOM)}(this,(function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),a=r(n);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){return(f="function"==typeof Symbol&&"symbol"==s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);return function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,t?(n=b(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(e){i=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||j(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){var n;if(e)return"string"==typeof e?C(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e){return e=function(e,t){if("object"!=s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);if("object"!=s(n=n.call(e,t||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string"),"symbol"==s(e)?e:String(e)}var A={react:{componentWrap:"div",slotWrap:"div",componentWrapAttrs:{__use_react_component_wrap:"",style:{all:"unset"}},slotWrapAttrs:{__use_react_slot_wrap:"",style:{all:"unset"}},vueNamedSlotsKey:["node:"]},vue:{componentWrapHOC:function(t){return function(){var n=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).portals;return e.createElement(e.Fragment,null,t,(void 0===n?[]:n).map((function(t){var n=t.Portal;t=t.key;return e.createElement(n,{key:t})})))}},componentWrapAttrs:{"data-use-vue-component-wrap":"",style:{all:"unset"}},slotWrapAttrs:{"data-use-vue-slot-wrap":"",style:{all:"unset"}}}};function I(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{react:{},vue:{}},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:A,n=2<arguments.length?arguments[2]:void 0;e.vue||(e.vue={}),e.react||(e.react={}),t=[t,p(p({},e),{},{react:p(p(p({},t.react),e.react),{},{componentWrapAttrs:p(p({},t.react.componentWrapAttrs),e.react.componentWrapAttrs),slotWrapAttrs:p(p({},t.react.slotWrapAttrs),e.react.slotWrapAttrs)}),vue:p(p(p({},t.vue),e.vue),{},{componentWrapAttrs:p(p({},t.vue.componentWrapAttrs),e.vue.componentWrapAttrs),slotWrapAttrs:p(p({},t.vue.slotWrapAttrs),e.vue.slotWrapAttrs)})})];return n&&t.unshift({}),Object.assign.apply(this,t)}var V=["getElementById","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","querySelector","querySelectorAll"],k={Document:{},Element:{}};function $(e){Object.keys(k).forEach((function(t){V.forEach((function(n){var r=window[t].prototype[n];k[t][n]=r,window[t].prototype[n]=function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];var u=r.apply(this,o);return u&&(u.constructor!==NodeList||u.constructor===NodeList&&0<u.length)?u:Element.prototype[n].apply(e,o)}}))}))}var T=["ref"],W=["key"],N=["hashList"],D=parseInt(e.version);var F=function(){m(n,e.Component);var t=P(n);function n(e){return _(this,n),t.call(this,e)}return v(n,[{key:"render",value:function(){var t=this.props.component,n=((n=this.props.passedProps).ref,S(n,T));return e.createElement(t,n,this.props.children)}}]),n}();function U(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return r.__esModule&&r.default&&(r=r.default),o.isSlots&&(r=r()),o=I(o,void 0,!0),{originReactComponent:r,setup:function(e,n){var a,u,i,s;if(!o.isSlots)return a={},u=t.reactive({}),i=t.getCurrentInstance(),"function"==typeof(s=o.useInjectPropsFromWrapper||r.__veauryInjectPropsFromWrapper__)&&("function"!=typeof(s=s.call(i.proxy,e))?(Object.assign(u,s),a.__veauryInjectedProps__=u):i.proxy.__veauryInjectedComputed__=s),a},data:function(){return{VEAURY_Portals:[]}},created:function(){this.__veauryPortalKeyPool__=[],this.__veauryMaxPortalCount__=0},computed:{__veauryInjectedProps__:function(){var e;return null==(e=this.__veauryInjectedComputed__)?void 0:e.call(this)}},render:function(){var e=t.h(o.react.componentWrap,p({ref:"react"},o.react.componentWrapAttrs||{}),this.VEAURY_Portals.map((function(e){var n=e.Portal;e=e.key;return n(t.h,e)})));return this.__veauryCheckReactSlot__(this.$slots),e},methods:{__veauryCheckReactSlot__:function(e){var n=this;function r(e,t,n){return t[n]&&(e[n]=t[n],1)}Object.keys(e).forEach((function(o){try{var a,u,i,s=e[o],c=s.apply(n,s.__reactArgs||[{}]);(s.__trueChildren=c).forEach((function(e){e.children&&n.__veauryCheckReactSlot__(e.children)})),1!==c.length||r(s,u=c[0],"reactSlot")||r(s,u,"reactFunction")||u.type!==t.Fragment||1!==(null==(a=u.children)?void 0:a.length)||r(s,i=u.children[0],"reactSlot")||r(s,i,"reactFunction")}catch(o){}}))},__veauryPushVuePortal__:function(e){var t=this.__veauryPortalKeyPool__.shift()||this.__veauryMaxPortalCount__++;this.VEAURY_Portals.push({Portal:e,key:t})},__veauryRemoveVuePortal__:function(e){var t,n=this.VEAURY_Portals.find((function(n,r){if(n.Portal===e)return t=r,!0}));this.__veauryPortalKeyPool__.push(n.key),this.VEAURY_Portals.splice(t,1)},__veauryGetScopeSlot__:function(e,t,n){var r=this;function a(a){function u(){for(var n,u=this,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return e.reactFunction?e.reactFunction.apply(this,s):o.defaultSlotsFormatter?((n=e.apply(this,s)).__top__=r,(n=o.defaultSlotsFormatter(n,r.__veauryVueInReactCall__,t))instanceof Array||-1<f(n).indexOf("string","number")?n=E(n):"object"===f(n)&&(n=p({},n)),n):re(a((function(){return e.apply(u,s)})),p(p({},o),{},{isSlots:!0,wrapInstance:r})).render()}return o.pureTransformer&&n?u.vueFunction=n:u.vueFunction=e,u}return a.__scopedSlot=!0,a},__veaurySyncUpdateProps__:function(e){this.__veauryReactInstance__&&this.__veauryReactInstance__.setState(e)},__veauryMountReactComponent__:function(t,u){var i,s,c=this,l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},y={},b=[],g=((A=this.$.vnode.scopeId)&&(y[A]="",b.push(A)),{}),R={};if(!t||null!=u&&u.slot)for(var j in this.$slots||{})!function(e){var t;c.$slots.hasOwnProperty(e)&&null!=c.$slots[e]&&((t=o.react.vueNamedSlotsKey.find((function(t){return 0===e.indexOf(t)})))||"default"===e?(t=e.replace(new RegExp("^".concat(t)),""),g[t]=c.$slots[e],g[t].__slot=!0):R[e]=c.__veauryGetScopeSlot__(c.$slots[e],b,null==(t=c.$.vnode)||null==(t=t.children)?void 0:t[e]))}(j);(!t||null!=u&&u.slot)&&(s=p({},g),i=s.default,delete s.default),this.__veauryLast__=this.__veauryLast__||{},this.__veauryLast__.slot=this.__veauryLast__.slot||{},this.__veauryLast__.attrs=this.__veauryLast__.attrs||{};var C={slot:function(){c.__veauryLast__.slot=p(p(p({},i?{children:i}:{children:null}),s),R)},attrs:function(){c.__veauryLast__.attrs=c.$attrs}};if(u&&Object.keys(u).forEach((function(e){return C[e]()})),t){var w=function(){c.__veauryReactInstance__&&c.__veauryReactInstance__.setState((function(e){return Object.keys(e).forEach((function(t){o.isSlots&&"children"===t||delete e[t]})),p(p(p(p({},c.__veauryCache__),c.__veauryInjectedProps__),!o.isSlots&&c.__veauryLast__.slot),c.__veauryLast__.attrs)})),c.__veauryCache__=null};!this.microTaskUpdate||this.__veauryCache__||this.$nextTick((function(){w(),c.microTaskUpdate=!1})),this.macroTaskUpdate&&(clearTimeout(this.updateTimer),this.updateTimer=setTimeout((function(){clearTimeout(c.updateTimer),w(),c.macroTaskUpdate=!1}))),this.__veauryCache__=p(p({},this.__veauryCache__||{}),p(p(p(p({},l),this.$attrs.class?{className:this.$attrs.class}:{}),p({},y)),{},{hashList:b},this.$attrs.style?{style:this.$attrs.style}:{})),this.macroTaskUpdate||this.microTaskUpdate||w()}else{C.slot(),C.attrs();var A=function(t,n,r){var o=function(){m(a,e.Component);var o=P(a);function a(e){var u;return _(this,a),(u=o.call(this,e)).state=p(p({},e),n.isSlots?{children:t}:{}),u.setRef=u.setRef.bind(O(u)),u.vueInReactCall=u.vueInReactCall.bind(O(u)),(u.__veauryVueWrapperRef__=r).__veauryVueInReactCall__=u.vueInReactCall,u}return v(a,[{key:"reactPropsLinkToVueInstance",value:function(e){Object.keys(e).forEach((function(t){r[t]||(r[t]=e[t])})),Object.getOwnPropertyNames(e.__proto__).filter((function(e){return["constructor","render"].indexOf(e)<0})).forEach((function(t){r[t]||(r[t]=e[t])}))}},{key:"setRef",value:function(e){var t=this;e&&(r.__veauryReactRef__=e,this.reactPropsLinkToVueInstance(e),Promise.resolve().then((function(){return t.reactPropsLinkToVueInstance(e)})),(this.setRef.current=e).__veauryVueWrapperRef__=r)}},{key:"createSlot",value:function(e){return{originVNode:e,inheritAttrs:!1,__fromReactSlot:!0,render:function(){var t,n;return 1===(null==(t=e=(e=(null==(n=this.$slots)||null==(t=n.default)?void 0:t.call(n))||e)instanceof Function?e(this):e)?void 0:t.length)&&null!=(n=e[0])&&n.data&&((t=this.$attrs).key,n=S(t,W),e[0].props=p(p({},n),e[0].props)),e}}}},{key:"componentWillUnmount",value:function(){r.__veauryReactRef__&&(r.__veauryReactRef__.__veauryVueWrapperRef__=null,r.__veauryReactRef__=null)}},{key:"vueInReactCall",value:function(e){var t=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return(2<arguments.length?arguments[2]:void 0)&&e&&e[0]?e.map((function(e,a){return re(t.createSlot(e instanceof Function?e:[e]),p(p(p({},n),o),{},{isSlots:!0,wrapInstance:r})).render({key:(null==e||null==(e=e.data)?void 0:e.key)||a})})):re(this.createSlot(e),p(p(p({},n),o),{},{isSlots:!0,wrapInstance:r})).render()}},{key:"render",value:function(){var o,u,i,s,c,l=this,_=(c=this.state).hashList,y=S(c,N),v={},d={};for(o in y)u=o,i=void 0,y.hasOwnProperty(u)&&null!=y[u]&&(y[u].__slot?(y[u].reactSlot?y[u]=y[u].reactSlot:(i=y[u],n.defaultSlotsFormatter&&y[u].__trueChildren?(y[u].__top__=l.__veauryVueWrapperRef__,y[u]=n.defaultSlotsFormatter(y[u].__trueChildren,l.vueInReactCall,_),y[u]instanceof Array?y[u]=E(y[u]):-1<["string","number"].indexOf(f(y[u]))?y[u]=[y[u]]:"object"===f(y[u])&&(y[u]=p({},y[u]))):y[u]=p({},re(l.createSlot(y[u]),p(p({},n),{},{isSlots:!0,wrapInstance:r})).render()),y[u].vueFunction=i),v[u]=y[u]):y[u].__scopedSlot&&(y[u]=y[u](l.createSlot),d[u]=y[u]));return(c={}).ref=this.setRef,n.isSlots?this.state.children||this.props.children:(s=y,s=p(p(p({},s=n.defaultPropsFormatter?n.defaultPropsFormatter(y,this.vueInReactCall,_):s),v),d),Object.getPrototypeOf(t)!==Function.prototype&&("object"!==f(t)||t.render)||a.catchVueRefs()?(Object.getPrototypeOf(t)===Function.prototype&&delete c.ref,e.createElement(t,h({},s,c))):e.createElement(F,h({passedProps:s,component:t},c),s.children))}}],[{key:"catchVueRefs",value:function(){if(r.$parent)for(var e in r.$parent.$refs)if(r.$parent.$refs[e]===r)return!0;return!1}}]),a}();return d(o,"displayName","applyReact_".concat(t.displayName||t.name||"Component")),o}(r,o,this),I=e.createElement(A,h({},this.$attrs,this.__veauryInjectedProps__,{children:i},s,R,this.$attrs.class?{className:this.$attrs.class}:{},y,{hashList:b},this.$attrs.style?{style:this.$attrs.style}:{},{ref:function(e){return c.__veauryReactInstance__=e}})),V=this.$refs.react,k=o.wrapInstance;if(k)(k=o.wrapInstance).__veauryVueWrapperRef__=this;else for(var $=this.$parent;$;){if($.parentReactWrapperRef){k=$.parentReactWrapperRef;break}if($.reactWrapperRef){k=$.reactWrapperRef;break}$=$.$parent}k?(this.parentReactWrapperRef=k,this.reactPortal=function(){return n.createPortal(I,V)},k.pushReactPortal(this.reactPortal)):17<D?(void 0!==a.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED&&(a.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint=!0),this.__veauryReactApp__=a.default.createRoot(V),this.__veauryReactApp__.render(I)):a.default.render(I,V)}}},mounted:function(){var e=this;this.__VEAURY_IGNORE_STRANGE_UPDATE__=!0,Promise.resolve().then((function(){e.__VEAURY_IGNORE_STRANGE_UPDATE__=!1})),clearTimeout(this.updateTimer),this.__veauryMountReactComponent__()},beforeUnmount:function(){var e;clearTimeout(this.updateTimer),this.reactPortal?($(this.$refs.react),null!=(e=this.parentReactWrapperRef)&&e.removeReactPortal(this.reactPortal)):($(this.$refs.react),17<D?this.__veauryReactApp__.unmount():a.default.unmountComponentAtNode(this.$refs.react)),Object.keys(k).forEach((function(e){V.forEach((function(t){window[e].prototype[t]=k[e][t]}))}))},updated:function(){this.__VEAURY_IGNORE_STRANGE_UPDATE__||this.__veauryMountReactComponent__(!0,{slot:!0})},inheritAttrs:!1,watch:{$attrs:{handler:function(){this.__veauryMountReactComponent__(!0,{attrs:!0})},deep:!0},__veauryInjectedProps__:{handler:function(){this.__veauryMountReactComponent__(!0,{attrs:!0})},deep:!0}}}}var x=new Set(["onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onChange","onInput","onInvalid","onReset","onSubmit","onError","onLoad","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onError","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"]);function L(e,t,n){var r={};return n.forEach((function(e){r[e]=!0})),e[("modelValue"===t?"model":t)+"Modifiers"]=r}function M(e,t,n){var r=this,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"v-model",a=t;if(!(a instanceof Array))throw Error("[error:veaury] Parameter type error from '".concat(o,"', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));if("function"!=typeof a[1])throw Error("[error:veaury] Parameter type error from '".concat(o,"', a single v-model is an array, the second element of the array must be a setter function"));var u=a[1],i=("string"==typeof a[2]?(n=a[2],a[3]instanceof Array&&L(e,n,a[3])):a[2]instanceof Array&&L(e,n,a[2]),e["onUpdate:"+n]);e["onUpdate:"+n]="function"==typeof i?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i.apply(r,t),u.apply(r,t)}:u,e[n]=a[0]}function K(e){var t=this,n={},r=p({},e);return Object.keys(e).forEach((function(o){var a,u=o.match(/^onUpdate-([^-]+)/);if(u)delete r[o],a=n["onUpdate:".concat(u[1])],n["onUpdate:".concat(u[1])]="function"==typeof a?function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];a.apply(t,r),e[o].apply(t,r)}:e[o];else if(u=o.match(/^v-model($|:([^:]+)|-([^:]+))/))u=u[2]||u[3]||"modelValue",M(n,e[o],u),delete r[o];else if("v-models"===o){if("object"!==f(e[o])||e[o]instanceof Array)throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");var i=e[o];Object.keys(i).forEach((function(e){M(n,i[e],e,"v-models")})),delete r[o]}})),p(p({},r),n)}var Y=function(){function e(){_(this,e),d(this,"pool",new Set)}return v(e,[{key:"getRandomId",value:function(e){var t=e+(Math.random()+"").substr(2);return this.pool.has(t)?this.getRandomId(e):(this.pool.add(t),t)}}]),e}();function B(e,t){var n;if("function"==typeof(e=e.node)&&(e=e()),null!=(n=t)&&n.current||"function"==typeof t||null!=(n=t)&&n.toString().match(/^function/)||(t=null),-1<["string","number"].indexOf(f(e)))return e;if(e instanceof Array){if(1!==e.length)return e;e=e[0]}return p(p({},e),{},{ref:t})}var G=U(B);function q(e){return t.h(G,{node:function(){return e.node}})}q.originReactComponent=e.forwardRef(B);var H=["component","node"],Z=["component","$slots","children","class","style"],z=["className","classname"],J="veaury-options",Q=new Y;function X(e){if(e)return Object.keys(e).forEach((function(t){var n=e[t];null!=n&&("function"==typeof n?(e[t]=n,e[t].reactFunction=n):(e[t]=function(){return n},e[t].reactSlot=n),n.vueFunction&&(e[t].vueFunction=n.vueFunction))})),e}function ee(e){var t;return null==(t=e.node)?void 0:t.call(e)}var te=e.forwardRef((function(t,n){var r,o=t.component,a=t.node;t=S(t,H);if(null==o&&null==a)return null;if(null!=a){if(a.$$typeof||"string"==typeof a||"number"==typeof a)return a;"function"!=typeof a&&(r=a,a=function(){return r})}o=o||ee;var u,i=I(t[J]||{},void 0,!0),s=i.useInjectPropsFromWrapper||o.__veauryInjectPropsFromWrapper__;return i.isSlots||"function"==typeof s&&(u=s(t)),e.createElement(ne,h({},p(p(p(p({component:o},a?{node:a}:{}),t),u),{},d({},J,i)),{ref:n}))})),ne=function(){m(r,e.Component);var n=P(r);function r(e){var t;return _(this,r),(t=n.call(this,e)).state={portals:[]},t.__veauryPortalKeyPool__=[],t.__veauryMaxPortalCount__=0,t.__veauryCurrentVueComponent__=e.component,t.__veauryCreateVueInstance__=t.__veauryCreateVueInstance__.bind(O(t)),t.__veauryVueComponentContainer__=t.createVueComponentContainer(),t}return v(r,[{key:"pushReactPortal",value:function(e){var t=this.state.portals,n=this.__veauryPortalKeyPool__.shift()||this.__veauryMaxPortalCount__++;t.push({Portal:e,key:n}),this.setState({portals:t})}},{key:"removeReactPortal",value:function(e){var t,n=this.state.portals,r=n.find((function(n,r){if(n.Portal===e)return t=r,!0}));this.__veauryPortalKeyPool__.push(r.key),n.splice(t,1),this.__veauryVueRef__&&this.setState({portals:n})}},{key:"createVueComponentContainer",value:function(){var t=this,n={},r=this.props[J];return r.isSlots?(Object.keys(this.props).forEach((function(e){x.has(e)&&"function"==typeof t.props[e]&&(n[e]=t.props[e])})),r.vue.slotWrapAttrs&&(n=p(p({},n),r.vue.slotWrapAttrs))):r.vue.componentWrapAttrs&&(n=p(p({},n),r.vue.componentWrapAttrs)),r.vue.componentWrapHOC(e.createElement("div",h({},r.vue.componentWrapAttrs,{ref:this.__veauryCreateVueInstance__,key:null})),n)}},{key:"shouldComponentUpdate",value:function(e,t,n){var r,o,a,u,i=this;return e===this.props||(r=e.component,e[J],o=void 0===(o=e["v-slots"])?null:o,a=e.children,e=S(e,["component",J,"v-slots","children"].map(w)),this.__veauryCurrentVueComponent__!==r&&this.updateVueComponent(r),!!r.__fromReactSlot||(this.__veauryVueInstance__?(a&&(o=o||{},"object"!==f(a)||a instanceof Array||a.$$typeof?o.default=a:o=a),(u=this.__veauryVueInstance__.$data.$slots)&&Object.keys(u).forEach((function(e){delete u[e]})),o&&(u||(this.__veauryVueInstance__.$data.$slots={}),Object.assign(this.__veauryVueInstance__.$data.$slots,X(o))),Object.keys(this.__veauryVueInstance__.$data).forEach((function(e){"$slots"!==e&&delete i.__veauryVueInstance__.$data[e]})),this.__veauryVueInstance__&&Object.assign(this.__veauryVueInstance__.$data,K(e)),!0):void 0))}},{key:"componentWillUnmount",value:function(){this.vuePortal?this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal):(this.__veauryVueInstance__&&this.__veauryVueInstance__.$.appContext.app.unmount(),Q.pool.delete(this.__veauryVueTargetId__))}},{key:"__veauryCreateVueInstance__",value:function(e){var n=this,r=this,o=((i=this.props).component,i[J]),a=i.children,u=void 0===(u=i["v-slots"])?{}:u,i=S(i,["component",J,"children","v-slots"].map(w));function s(e){this.__veauryVueInstance__||(this.__veauryVueInstance__=e)}a&&("object"!==f(a)||a instanceof Array||a.$$typeof?u.default=a:u=a),(u=X(u))&&(i.$slots=u),s=s.bind(this);var c,l=p({},K(i)),_={data:function(){return o.isSlots?{children:r.__veauryCurrentVueComponent__.originVNode}:l},created:function(){this.reactWrapperRef=r,s(this)},methods:{reactInVueCall:function(e){return(2<arguments.length?arguments[2]:void 0)&&e&&e[0]?e.map((function(e,n){return t.h(q,{node:e,key:(null==e||null==(e=e.data)?void 0:e.key)||n})})):t.h(q,{node:e})},getScopedSlots:function(e,t){var n,a=this,u=(this.getScopedSlots.__scopeSlots||(this.getScopedSlots.__scopeSlots={}),p({},t));for(n in u)!function(t){var n,i;!u.hasOwnProperty(t)||null==(n=u[t])||(u[t]=(i=n,function(){for(var n,u,s,c,l=arguments.length,f=new Array(l),_=0;_<l;_++)f[_]=arguments[_];return i.vueFunction?i.vueFunction.apply(a,f):(s=i.reactSlot,c=i.reactFunction,s=s||(null==c?void 0:c.apply(a,f)),c=o.defaultSlotsFormatter,null!=(n=a.getScopedSlots.__scopeSlots[t])&&null!=(n=n.component)&&null!=(n=n.ctx)&&n.__veauryReactInstance__?(u=a.getScopedSlots.__scopeSlots[t],Promise.resolve().then((function(){var e;null!=(e=u)&&null!=(e=e.component)&&null!=(e=e.ctx)&&null!=(e=e.__veauryReactInstance__)&&e.setState({children:i.apply(a,f)})}))):(u=c&&s?[c(s,a.reactInVueCall)]:e(U((function(){return i.apply(a,f)}),p(p({},o),{},{isSlots:!0,wrapInstance:r}))),a.getScopedSlots.__scopeSlots[t]=u),i.reactFunction?u.reactFunction=i.reactFunction:i.reactSlot&&(u.reactSlot=i.reactSlot),u)}),u[t].reactFunction=n)}(n);return u}},mounted:function(){e.removeAttribute("id"),r.__veauryVueRef__=this.$refs.use_vue_wrapper,this.$refs.use_vue_wrapper.reactWrapperRef=r},beforeUnmount:function(){r.__veauryVueRef__=null,this.$refs.use_vue_wrapper.reactWrapperRef=null},render:function(){var e=this,n=((i=this.$data).component,i.$slots),a=(i.children,i.class),u=i.style,i=S(i,Z),s=this.getScopedSlots(t.h,p({},n)),c=(n=i.className,i.classname),l=(i=S(i,z),{});return Object.keys(s).forEach((function(e){var t=s[e];l[e]="function"==typeof t?t:function(){return t}})),t.h(function(e,t){var n;return"string"==typeof e&&t?null==(t=t.$)||null==(t=t.appContext)||null==(t=t.app)||null==(n=t.component)?void 0:n.call(t,e):e}(r.__veauryCurrentVueComponent__,this),p(p(p(p({},i),a||n||c?{class:a||n||c}:{}),u?{style:u}:{}),{},{ref:"use_vue_wrapper"}),p({},o.isSlots&&this.children?{default:"function"==typeof this.children?this.children:function(){return e.children}}:p({},l)))}};e&&(c=Q.getRandomId("__vue_wrapper_container_"),e.id=c,this.__veauryVueTargetId__=c,(a=o.wrapInstance)?(a=o.wrapInstance).reactWrapperRef=r:a=function(e,t){for(var n=null==(e=t=(null==e?void 0:e._reactInternals)||(null==e?void 0:e._reactInternalFiber)||t)?void 0:e.return;n;){var r=n.stateNode;if(r=(null==r?void 0:r.parentVueWrapperRef)||(null==r?void 0:r.__veauryVueWrapperRef__))return r;n=n.return}}(this),a&&document.getElementById(c)?(this.parentVueWrapperRef=a,this.vuePortal=function(e,r){return e(t.Teleport,{to:"#"+c,key:c},[e(Object.assign(_,{router:n._router}))])},a.__veauryPushVuePortal__(this.vuePortal)):(u=t.createApp(_),"function"==typeof o.beforeVueAppMount&&o.beforeVueAppMount(u),this.__veauryVueInstance__=u.mount(e)))}},{key:"updateVueComponent",value:function(e){this.__veauryVueInstance__&&(e.__fromReactSlot?this.__veauryVueInstance__.children="function"==typeof e.originVNode?e.originVNode:function(){return e.originVNode}:(this.__veauryCurrentVueComponent__=e,this.__veauryVueInstance__.$forceUpdate()))}},{key:"render",value:function(){return e.createElement(this.__veauryVueComponentContainer__,{portals:this.state.portals})}}]),r}();function re(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=(t||console.warn("Component must be passed in applyVueInReact!"),t.__esModule&&t.default&&(t=t.default),e.forwardRef((function(r,o){return e.createElement(te,h({},r,{component:t,ref:o},d({},J,n)))})));return r.originVueComponent=t,r}function oe(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function ae(e){var t;return e?"string"==typeof e?(e=e.trim()).split(/\s*;\s*/).reduce((function(e,t){return t&&2===(t=t.split(/\s*:\s*/)).length&&Object.assign(e,d({},oe(t[0]),t[1])),e}),{}):"object"===f(e)?(t={},Object.keys(e).forEach((function(n){t[oe(n)]=e[n]})),t):{}:{}}function ue(e){return e?e instanceof Array?e:"string"==typeof e?(e=e.trim()).split(/\s+/):"object"===f(e)?Object.keys(e).filter((function(t){return!!e[t]})):[]:[]}new Y;var ie=["ref"];function se(e){return e.type===t.Text}function ce(t,n){var r;return 0<(null==(r=t.dirs)?void 0:r.length)?e.createElement(le,{vnode:t},n):n}new Y;var le=function(){m(n,e.Component);var t=P(n);function n(e){var r;return _(this,n),(r=t.call(this,e)).state={prevVnode:null,savedDirectives:[],ref:null,prevProps:e},r}return v(n,[{key:"findDirectiveName",value:function(e){var t=e.dir,n=-1;return[this.state.savedDirectives.find((function(e,r){if(e.dir===t)return n=r,!0})),n]}},{key:"doDirective",value:function(){var e=this,t=(r=this.state).savedDirectives;if(!(n=r.ref)){for(var n=(this._reactInternals||this._reactInternalFiber).child;n&&5!==n.tag;)n=n.child;if(!n)return;n=n.stateNode}var r,o=this.props.vnode;(r=o.dirs)&&(r.forEach((function(r){var a,u,i,s,c,l,f;r&&(f=(a=R(e.findDirectiveName(r),2))[0],a=a[1],u=(c=r.dir).created,i=c.beforeMount,s=c.mounted,l=c.beforeUpdate,c=c.updated,f?(t[a]=p(p(p({},f),r),{},{oldValue:f.oldValue}),f=[n,t[a],o,e.state.prevVnode],null!=l&&l.apply(null,f),null!=c&&c.apply(null,f),t[a].oldValue=r.value):(t.push(r),l=[n,r,o,null],null!=u&&u.apply(null,l),null!=i&&i.apply(null,l),null!=s&&s.apply(null,l),r.oldValue=r.value))})),this.setState({prevVnode:p({},o),savedDirectives:t,ref:n}))}},{key:"componentDidMount",value:function(){this.doDirective()}},{key:"componentDidUpdate",value:function(e){e.vnode!==this.props.vnode&&this.doDirective()}},{key:"componentWillUnmount",value:function(){var e,t=this,n=this.props.vnode,r=(e=this.state).savedDirectives,o=e.ref,a=e.prevVnode;(e=n.dirs)&&(e.forEach((function(e){var u,i,s,c;e&&(u=(c=R(t.findDirectiveName(e),2))[0],c=c[1],u&&(i=(s=e.dir).beforeUnmount,s=s.unmounted,r[c]=p(p({},u),e),c=[o,u,n,a],null!=i&&i.apply(null,c),null!=s&&s.apply(null,c)))})),this.setState({prevVnode:p({},n),savedDirectives:r}))}},{key:"render",value:function(){var e=this.props;return e.vnode,e.children}}]),n}();function pe(e){var t,n;return"function"!=typeof(null==(n=e.type)?void 0:n.originReactComponent)||function(e,t){var n;return"function"==typeof e&&(n=e.toString(),void 0!==e.prototype&&e.prototype.constructor===e&&("class"==n.slice(0,5)||2<=Object.getOwnPropertyNames(e.prototype).length||!/^function\s+\(|^function\s+anonymous\(/.test(n)&&(!(!t||!/^function\s+[A-Z]/.test(n))||!!/\b\(this\b|\bthis[\.\[]\b/.test(n)&&(!(t&&!/classCallCheck\(this/.test(n))||/^function\sdefault_\d+\s*\(/.test(n)))))}(null==(n=e.type)?void 0:n.originReactComponent)?((n=null==(n=e.ref)?void 0:n.r)&&"string"==typeof n&&(t=n,n=function(n){var r;n&&(e.ref.i.refs&&((r=p({},e.ref.i.refs))[t]=n,e.ref.i.refs=r),void 0!==(null==(r=e.ref.i.setupState)?void 0:r[t])&&(e.ref.i.setupState[t]=n))},n=new Proxy(n,{get:function(e,t){return e[t]},set:function(n,r,o){var a;return null!=(a=e.ref.i.refs)&&a[t]&&((a=p({},e.ref.i.refs))[r]=o,e.ref.i.refs=a),o}})),n):null}function fe(e,t){return!t||t instanceof Array&&0===t.length||("string"==typeof t&&(t=[t]),(e=p({},e)).props=p({},e.props),t.forEach((function(t){e.props[t]=""}))),e}var _e=["style","class"];function ye(e,n,r,a,u,i,s){var c,l,_;return"all"===n||n instanceof Array||(n=n?[n]:[]),e.type===t.Fragment?u(e.children,r,i):"string"==typeof e.type&&("all"===n||-1<n.indexOf(e.type))?(n=pe(e),_=(l=e.props||{}).style,c=l.class,l=p(p({},S(l,_e)),{},{style:ae(_),className:Array.from(new Set(ue(c))).join(" ")},n?{ref:n}:{}),(_=e.children||l.children)&&((_=-1<["string","number"].indexOf(f(_))?[_]:E(_)).__top__=s),ce(e,fe(o.default.createElement(e.type,l,u(_,r,i)),e.scopeId))):r([e],null,a)}function ve(e,t,n){return!((e=e instanceof Array&&1===e.length?e[0]:e)instanceof Array)&&null==e.key&&1<t.length&&((e=p({},e)).key="_key_".concat(n)),e}function de(e){var n=e.reactComponents,r=e.domTags,a=void 0===(e=e.division)||e;return function e(u,i,s){var c;return u&&u.forEach?(c=[],u.forEach((function(l,f){if(l&&l.type!==t.Comment){if(null==(v=l.type)||!v.originReactComponent)return l.$$typeof||"string"==typeof l||"number"==typeof l?void c.push(l):se(l)?void(""!==l.children.trim()&&c.push(l.children.trim())):void(l.type&&(fe(v=ve(ye(l,r,i,a,e,s,u.__top__),u,f),l.scopeId),c.push(v)));var _,y,v=l.type.originReactComponent;fe(_=ve(_="all"===(n="all"===n||n instanceof Array?n:[n])||-1<n.indexOf(v)?(l.__top__=u.__top__,_=function(e,t,n,r,o){var a=((a=e.props||{}).ref,S(a,ie)),u={},i=(Object.keys(e.children||{}).forEach((function(t){var a=e.children[t],i=A.react.vueNamedSlotsKey.find((function(e){return 0===t.indexOf(e)}));i||"default"===t?(i=t.replace(new RegExp("^".concat(i)),"").replace(/^default$/,"children"),u[i]=r(a(),n,o)):u[t]=function(){for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];return a.__reactArgs=t,r(a.apply(this,t),n,o)}})),{}),s=ae(a.style),c=Array.from(new Set(ue(a.class))).join(" ");return 0<Object.keys(s).length&&(i.style=s),""!==c&&(i.className=c),Object.assign(a,p(p({},i),u)),delete a.class,a}(l,"_key_".concat(f),i,e,s),y=pe(l),l.children&&(l.children.__top__=u.__top__),ce(l,o.default.createElement(v,p(p(p({},function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}}(_,l,v)),l.__extraData||{}),y?{ref:y}:{})))):se(l)?l.text:ye(l,r,i,a,e,s),u,f),l.scopeId),c.push(_)}})),1===c.length?c[0]:c):u}}de({reactComponents:"all",domTags:"all"}),de({reactComponents:"all",domTags:"all"});var he=["ref","children","v-slots"];function me(e){var t=e.ref;if(t)return"object"===f(t)?function(t){e.ref.current=t}:"function"==typeof t?t:void 0}var be=["style","class","children"];function ge(n,r,o,a,u,i){var s,c,l,_;return"all"===r||r instanceof Array||(r=r?[r]:[]),n.type===e.Fragment?u(null==(s=n.props)?void 0:s.children,o):"string"==typeof n.type&&("all"===r||-1<r.indexOf(n.type))?(s=me(n),_=(r=n.props||{}).style,l=r.class,c=r.children,r=S(r,be),l=Array.from(new Set(ue(l))).join(" "),_=ae(_),r=p(p(p(p({},r),0===Object.keys(_).length?{}:{style:_}),l?{className:l}:{}),s?{ref:s}:{}),0===Object.keys(r).length&&(r=null),(_=c)&&((_=-1<["string","number"].indexOf(f(_))?[_]:_ instanceof Array?E(_):p({},_)).__top__=i),t.h(n.type,r,u(_,o))):o([n],null,a)}function Se(e){var n=e.vueComponents,r=e.domTags,o=void 0===(e=e.division)||e;return function e(a,u){if(null==a)return a;a instanceof Array||(a=[a]);var i=[];return a.forEach((function(s,c){if((null==(l=s.type)||!l.originVueComponent)&&s.type!==te)return s.__v_isVNode||"string"==typeof s||"number"==typeof s?void i.push(s):void(s.type&&(l=ge(s,r,u,o,e,a.__top__),i.push(l)));var l=s.type.originVueComponent;if(s.type===te){if(!s.props.component)return void i.push(s.props.node);l=s.props.component,s=p({},s);var _=p({},s.props);delete _.component,s.props=_}l="all"===(n="all"===n||n instanceof Array?n:[n])||-1<n.indexOf(l)?((s=p({},s)).__top__=a.__top__,c=(_=function(e,t,n,r,o){var a=((e=e.props||{}).ref,e.children),u=void 0===(i=e["v-slots"])?{}:i,i=S(e,he),s=(a&&("object"!==f(a)||a instanceof Array||a.$$typeof?u.default=a:u=a),null),c=(Object.keys(u||{}).forEach((function(e){var t=u[e];(s=s||{})[e]=function(){if("function"==typeof t){for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];t=t.apply(this,a)}return r(t,n,o)}})),e={},a=ae(i.style),Array.from(new Set(ue(i.className))).join(" "));return 0<Object.keys(a).length&&(e.style=a),""!==c&&(e.class=c),Object.assign(i,p({},e)),delete i.className,{props:i=K(i),slots:s}}(s,"_key_".concat(c),u,e)).props,_=_.slots,me(s),s.children&&(s.children.__top__=a.__top__),t.h(l,p({},c),_)):ge(s,r,u,o,e),i.push(l)})),1===(i=i.flat(1/0)).length?i[0]:i}}var Oe=Se({vueComponents:"all",domTags:"all"});function Pe(e,t){return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=(t.globalName,t.combinedOption);return t.transparentApi,re(e,n||{})}(e,{combinedOption:p({pureTransformer:!0,defaultSlotsFormatter:Oe},t)})}Se({reactComponents:"all",domTags:"all"}),new Y;var Re=function(e){var t,n,r=e.slots,a=e.name,u=e.params,i=void 0===u?{}:u;return o.default.createElement(o.default.Fragment,null,null===(t=r[a])||void 0===t||null===(n=t.render)||void 0===n?void 0:n.call(t,i))},Ee=function(t){return e.useMemo((function(){return new Proxy({},{get:function(e,n){return"toString"===n?function(){return"_"}:t[n]}})}),[t])};window.VUEHoc=function(e){var t=Pe(e);return function(e){var n=e.data,r=e.outputs,a=e.inputs,u=e.slots,s=e.style,c=e.env,l=e.logger,p={},f={},_=function(e){Object.prototype.hasOwnProperty.call(u,e)&&(p[e]=function(t){return o.default.createElement(Re,{slots:u,name:e,params:t})},f[e]=u[e])};for(var y in u)_(y);var v=Ee(a),d=Ee(r);return o.default.createElement(t,{config:{style:s},env:c,logger:l,data:i({},n),outputs:d,inputs:v,slots:f,"v-slots":p})}}}));
