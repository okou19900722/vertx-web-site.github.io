(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i({},t,{},e)),n},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"===typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},MuE9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("xEgi")}])},miPH:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,i,s,l=r(t),u=r(n);if(l&&u){if((i=t.length)!=n.length)return!1;for(c=i;0!==c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=u)return!1;var p=t instanceof Date,f=n instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==n.getTime();var d=t instanceof RegExp,m=n instanceof RegExp;if(d!=m)return!1;if(d&&m)return t.toString()==n.toString();var y=a(t);if((i=y.length)!==a(n).length)return!1;for(c=i;0!==c--;)if(!o.call(n,y[c]))return!1;for(c=i;0!==c--;)if(!e(t[s=y[c]],n[s]))return!1;return!0}return t!==t&&n!==n}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xEgi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return _e})),n.d(t,"default",(function(){return Ke}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("7ljp"),s=(n("Oinn"),c.a.createElement),l=function(e){var t=e.children;return s("div",{className:"features"},t)},u=(n("8qJd"),c.a.createElement),p=function(e){var t=e.icon,n=e.title,r=e.children,a=c.a.cloneElement(t,{size:46});return u("div",{className:"features-item"},u("span",{className:"features-item-icon"},a),u("h5",null,n),r)},f=n("Cgje"),d=n("TSYQ"),m=n.n(d),y=(n("bZUv"),c.a.createElement),b=function(e){var t=e.children,n=e.primary;return y("div",{className:m()("button",{primary:n})},t)},O=(n("4wvP"),c.a.createElement,{}),j="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(j,Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"hljs language-java"}),Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-keyword"}),"import")," io.vertx.core.AbstractVerticle;\n\n",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-keyword"}),"public")," ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-class"}),Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-title"}),"Server")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-title"}),"AbstractVerticle")," "),"{\n  ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-function"}),Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-keyword"}),"public")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-keyword"}),"void")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-title"}),"start"),Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-params"}),"()")," "),"{\n    vertx.createHttpServer().requestHandler(req -> {\n      req.response()\n        .putHeader(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"content-type"'),", ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"text/plain"'),")\n        .end(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"Hello from Vert.x!"'),");\n    }).listen(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-number"}),"8080"),");\n  }\n}\n")))}v.isMDXComponent=!0;c.a.createElement;var h={},g="wrapper";function x(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(g,Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"hljs language-kotlin"}),Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-keyword"}),"import")," io.vertx.core.AbstractVerticle\n\n",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-class"}),Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-title"}),"Server")," : ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-type"}),"AbstractVerticle")),"() {\n  ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-keyword"}),"override")," ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-function"}),Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-keyword"}),"fun")," ",Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-title"}),"start"),Object(i.a)("span",Object(r.a)({parentName:"span"},{className:"hljs-params"}),"()"))," {\n    vertx.createHttpServer().requestHandler { req ->\n      req.response()\n        .putHeader(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"content-type"'),", ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"text/plain"'),")\n        .end(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"Hello from Vert.x!"'),")\n    }.listen(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-number"}),"8080"),")\n  }\n}\n")))}x.isMDXComponent=!0;c.a.createElement;var w={},N="wrapper";function E(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(N,Object(r.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"hljs language-groovy"}),"vertx.createHttpServer().requestHandler({ req ->\n  req.response()\n    .putHeader(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"content-type"'),", ",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"text/plain"'),")\n    .end(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-string"}),'"Hello from Vert.x!"'),")\n}).listen(",Object(i.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-number"}),"8080"),")\n\n\n\n\n\n\n")))}E.isMDXComponent=!0;var k=c.a.createElement,T=function(){var e=Object(o.useRef)(),t=Object(o.useState)("java"),n=t[0],r=t[1];Object(o.useEffect)((function(){for(var t,n=e.current.getElementsByTagName("code")[0],r=document.createNodeIterator(n,NodeFilter.SHOW_TEXT),a=[];t=r.nextNode();)if(t.length>0){var o=document.createRange();o.setStart(t,0),o.setEnd(t,1);var c=document.createElement("span"),i=document.createElement("span");c.style.opacity=0,c.appendChild(o.extractContents()),i.appendChild(c),o.insertNode(i),r.nextNode(),a.push(i)}e.current.style.opacity=1;setTimeout((function e(){if(0!==a.length){var t,n=a.shift();n.childNodes[0].style.opacity=1,n.style.borderLeft="",a.length>0&&" "!==a[0].innerText&&(a[0].style.borderLeft="1px solid #fff"),a.length>0&&" "===a[0].innerText?t=0:(t=Math.floor(0+10*Math.random()),Math.random()>.9&&(t+=10)),setTimeout(e,t*t/3)}}),500)}),[]);var a=function(e){return{active:n===e}},c=m()("code-examples-tab",a("java")),i=m()("code-examples-tab",a("kotlin")),s=m()("code-examples-tab",a("groovy")),l=m()("code-examples-example",a("java")),u=m()("code-examples-example",a("kotlin")),p=m()("code-examples-example",a("groovy"));return k("div",{className:"code-examples"},k("div",{className:"code-examples-tabs"},k("div",{className:c,onClick:function(){return r("java")}},"Java"),k("div",{className:i,onClick:function(){return r("kotlin")}},"Kotlin"),k("div",{className:s,onClick:function(){return r("groovy")}},"Groovy")),k("div",{className:"code-examples-content"},k("div",{className:l,ref:e},k(v,null)),k("div",{className:u},k(x,null)),k("div",{className:p},k(E,null))))},P=(n("Cisd"),n("8Kt/")),S=n.n(P),C=n("17x9"),L=n.n(C);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M=function(e){var t=e.color,n=e.size,r=I(e,["color","size"]);return c.a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))};M.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},M.defaultProps={color:"currentColor",size:"24"};var V=M,R=n("miPH"),D=n.n(R);function q(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function H(){return"undefined"===typeof navigator.onLine||navigator.onLine}const W=new Map;function F(e){return W.get(e)}function X(e,t){return W.set(e,t)}const A={},B={},_={},J={},U={};const K="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),G={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,a){if(!q())return;if(n.errorRetryCount&&a.retryCount>n.errorRetryCount)return;const o=Math.min(a.retryCount||0,8),c=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,c,a)},errorRetryInterval:1e3*(K?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(K?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:D.a};let Y=!1;if("undefined"!==typeof window&&window.addEventListener&&!Y){const e=()=>{if(q()&&H())for(let e in _)_[e][0]&&_[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),Y=!0}var Q=G;const Z=new WeakMap;let $=0;const ee=Object(o.createContext)({});ee.displayName="SWRConfigContext";var te=ee;const ne="undefined"===typeof window,re=ne?o.useEffect:o.useLayoutEffect,ae=e=>e?"err@"+e:"",oe=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):Z.has(e[n])?r=Z.get(e[n]):(r=$,Z.set(e[n],$++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t]},ce=(e,t,n)=>{const r=J[e];if(e&&r)for(let a=0;a<r.length;++a)r[a](!1,t,n)},ie=async(e,t,n=!0)=>{const[r]=oe(e);if(!r)return;if("undefined"===typeof t)return((e,t=!0)=>{const[n]=oe(e);if(!n)return;const r=J[n];if(n&&r){const e=F(n),a=F(ae(n));for(let n=0;n<r.length;++n)r[n](t,e,a,!1)}})(e,n);let a,o;if(U[r]=Date.now()-1,t&&"function"===typeof t)try{a=await t(F(r))}catch(i){o=i}else if(t&&"function"===typeof t.then)try{a=await t}catch(i){o=i}else a=t;"undefined"!==typeof a&&X(r,a);const c=J[r];if(c)for(let s=0;s<c.length;++s)c[s](!!n,a,o,!1);if(o)throw o;return a};te.Provider;var se=function(...e){let t,n,r={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],r=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(r=e[1]);const[a,c]=oe(t),i=ae(a);r=Object.assign({},Q,Object(o.useContext)(te),r),"undefined"===typeof n&&(n=r.fetcher);const s=F(a)||r.initialData,l=F(i),u=Object(o.useRef)({data:!1,error:!1,isValidating:!1}),p=Object(o.useRef)({data:s,error:l,isValidating:!1}),f=Object(o.useState)(null)[1];let d=Object(o.useCallback)(e=>{let t=!1;for(let n in e)p.current[n]=e[n],u.current[n]&&(t=!0);(t||r.suspense)&&f({})},[]);const m=Object(o.useRef)(!1),y=Object(o.useRef)(a),b=Object(o.useCallback)((e,t)=>ie(a,e,t),[a]),O=Object(o.useCallback)(async(e={})=>{if(!a||!n)return!1;if(m.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,o="undefined"!==typeof A[a]&&e.dedupe;try{let e,s;if(d({isValidating:!0}),o?(s=B[a],e=await A[a]):(A[a]&&(U[a]=Date.now()-1),r.loadingTimeout&&!F(a)&&setTimeout(()=>{t&&r.onLoadingSlow(a,r)},r.loadingTimeout),A[a]=null!==c?n(...c):n(a),B[a]=s=Date.now(),e=await A[a],setTimeout(()=>{delete A[a],delete B[a]},r.dedupingInterval),r.onSuccess(e,a,r)),U[a]&&s<=U[a])return d({isValidating:!1}),!1;X(a,e),X(i,void 0),y.current=a;const l={isValidating:!1};"undefined"!==typeof p.current.error&&(l.error=void 0),r.compare(p.current.data,e)||(l.data=e),d(l),o||ce(a,e,void 0)}catch(s){if(delete A[a],delete B[a],X(i,s),y.current=a,p.current.error!==s&&(d({isValidating:!1,error:s}),o||ce(a,void 0,s)),r.onError(s,a,r),r.shouldRetryOnError){const t=(e.retryCount||0)+1;r.onErrorRetry(s,a,r,O,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[a]);if(re(()=>{if(!a)return;m.current=!1;const e=p.current.data,t=F(a)||r.initialData;y.current===a&&r.compare(e,t)||(d({data:t}),y.current=a);const n=()=>O({dedupe:!0});let o;r.initialData||("undefined"!==typeof t&&!ne&&window.requestIdleCallback?window.requestIdleCallback(n):n()),r.revalidateOnFocus&&(o=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,r.focusThrottleInterval),_[a]?_[a].push(o):_[a]=[o]);const c=(e=!0,t,o,c=!0)=>{const i={};let s=!1;return"undefined"===typeof t||r.compare(p.current.data,t)||(i.data=t,s=!0),p.current.error!==o&&(i.error=o,s=!0),s&&d(i),y.current=a,!!e&&(c?n():O())};J[a]?J[a].push(c):J[a]=[c];let i=null;return"undefined"!==typeof addEventListener&&r.revalidateOnReconnect&&(i=addEventListener("online",n)),()=>{if(d=()=>null,m.current=!0,o&&_[a]){const e=_[a],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}if(J[a]){const e=J[a],t=e.indexOf(c);t>=0&&(e[t]=e[e.length-1],e.pop())}"undefined"!==typeof removeEventListener&&null!==i&&removeEventListener("online",i)}},[a,O]),re(()=>{let e=null;const t=async()=>{p.current.error||!r.refreshWhenHidden&&!q()||r.refreshWhenOffline||!H()||await O({dedupe:!0}),r.refreshInterval&&(e=setTimeout(t,r.refreshInterval))};return r.refreshInterval&&(e=setTimeout(t,r.refreshInterval)),()=>{e&&clearTimeout(e)}},[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,O]),r.suspense){if(ne)throw new Error("Suspense on server side is not yet supported!");let e=F(a),t=F(i);if("undefined"===typeof e&&"undefined"===typeof t){if(A[a]||O(),A[a]&&"function"===typeof A[a].then)throw A[a];e=A[a]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:O,mutate:b,isValidating:p.current.isValidating}}return Object(o.useMemo)(()=>{const e={revalidate:O,mutate:b};return Object.defineProperties(e,{error:{get:function(){return u.current.error=!0,y.current===a?p.current.error:l}},data:{get:function(){return u.current.data=!0,y.current===a?p.current.data:s}},isValidating:{get:function(){return u.current.isValidating=!0,p.current.isValidating}}}),e},[O])};new Map;var le=se,ue=n("vcXL"),pe=n.n(ue),fe=(n("2O2n"),c.a.createElement),de=function(){var e=le("https://api.github.com/repos/eclipse-vertx/vert.x",(function(e){return pe()(e).then((function(e){return e.json()}))})),t=e.data;e.error;return fe(c.a.Fragment,null,fe(S.a,null,fe("link",{rel:"preload",href:"https://api.github.com/repos/eclipse-vertx/vert.x",as:"fetch",crossOrigin:"anonymous"})),fe("div",{className:"github-stars-button"},fe("a",{href:"https://github.com/eclipse-vertx/vert.x"},fe(b,null,fe(V,{className:"feather"})," ",t&&Math.floor(t.stargazers_count/1e3)+"K+ stars"))))};function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var be=function(e){var t=e.color,n=e.size,r=ye(e,["color","size"]);return c.a.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("polygon",{points:"13 19 22 12 13 5 13 19"}),c.a.createElement("polygon",{points:"2 19 11 12 2 5 2 19"}))};be.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},be.defaultProps={color:"currentColor",size:"24"};var Oe=be,je=n("YFqc"),ve=n.n(je),he=c.a.createElement,ge=function(){return he("section",{className:"hero"},he("div",{className:"hero-background"}),he("div",{className:"hero-main container"},he("div",{className:"hero-left"},he("div",{className:"hero-slogan"},he("span",{className:"hero-product-name"},"Eclipse Vert.x",he("span",{className:"hero-product-name-separator"}," |"))," Reactive applications on the JVM"),he("div",{className:"hero-buttons"},he(ve.a,{href:"/get-started/"},he("a",null,he(b,{primary:!0},he(Oe,{className:"feather"})," Get started"))),he(de,null))),he("div",{className:"hero-right"},he(T,null))))},xe=n("naWs"),we=c.a.createElement,Ne=function(e){return we("main",null,we(f.a,{title:e.meta.title}),we(ge,null),we("div",{className:"container"},e.children),we(xe.a,null))};function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Te=function(e){var t=e.color,n=e.size,r=ke(e,["color","size"]);return c.a.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),c.a.createElement("rect",{x:"9",y:"9",width:"6",height:"6"}),c.a.createElement("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),c.a.createElement("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),c.a.createElement("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),c.a.createElement("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),c.a.createElement("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),c.a.createElement("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),c.a.createElement("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),c.a.createElement("line",{x1:"1",y1:"14",x2:"4",y2:"14"}))};Te.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},Te.defaultProps={color:"currentColor",size:"24"};var Pe=Te;function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Le=function(e){var t=e.color,n=e.size,r=Ce(e,["color","size"]);return c.a.createElement("svg",Se({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),c.a.createElement("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),c.a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),c.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),c.a.createElement("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),c.a.createElement("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),c.a.createElement("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),c.a.createElement("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),c.a.createElement("line",{x1:"17",y1:"16",x2:"23",y2:"16"}))};Le.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},Le.defaultProps={color:"currentColor",size:"24"};var ze=Le;function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ve=function(e){var t=e.color,n=e.size,r=Me(e,["color","size"]);return c.a.createElement("svg",Ie({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}),c.a.createElement("line",{x1:"16",y1:"8",x2:"2",y2:"22"}),c.a.createElement("line",{x1:"17.5",y1:"15",x2:"9",y2:"15"}))};Ve.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},Ve.defaultProps={color:"currentColor",size:"24"};var Re=Ve;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var He=function(e){var t=e.color,n=e.size,r=qe(e,["color","size"]);return c.a.createElement("svg",De({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),c.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))};He.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},He.defaultProps={color:"currentColor",size:"24"};var We=He;function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Xe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ae=function(e){var t=e.color,n=e.size,r=Xe(e,["color","size"]);return c.a.createElement("svg",Fe({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),c.a.createElement("path",{d:"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"}))};Ae.propTypes={color:L.a.string,size:L.a.oneOfType([L.a.string,L.a.number])},Ae.defaultProps={color:"currentColor",size:"24"};var Be=Ae,_e=(c.a.createElement,{title:"Vert.x"}),Je={meta:_e},Ue=Ne;function Ke(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(Ue,Object(r.a)({},Je,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(l,{mdxType:"Features"},Object(i.a)(p,{icon:Object(i.a)(Pe,null),title:"Resource-efficient",mdxType:"FeaturesItem"},Object(i.a)("p",null,"Lorem ipsum dolor sit amet, con\xadsectetuer adip\xadisc\xading elit, sed diam non\xadummy nibh eu\xadis\xadmod tin\xadcidunt ut laoreet do\xadlore magna ali\xadquam erat vo\xadlut\xadpat. Ut wisi enim ad.")),Object(i.a)(p,{icon:Object(i.a)(ze,null),title:"Concurrent",mdxType:"FeaturesItem"},Object(i.a)("p",null,"Lorem ipsum dolor sit amet, con\xadsectetuer adip\xadisc\xading elit, sed diam non\xadummy nibh eu\xadis\xadmod tin\xadcidunt ut laoreet do\xadlore magna ali\xadquam erat vo\xadlut\xadpat. Ut wisi enim ad.")),Object(i.a)(p,{icon:Object(i.a)(Re,null),title:"Flexible",mdxType:"FeaturesItem"},Object(i.a)("p",null,"Lorem ipsum dolor sit amet, con\xadsectetuer adip\xadisc\xading elit, sed diam non\xadummy nibh eu\xadis\xadmod tin\xadcidunt ut laoreet do\xadlore magna ali\xadquam erat vo\xadlut\xadpat. Ut wisi enim ad.")),Object(i.a)(p,{icon:Object(i.a)(We,null),title:"Vert.x is fun",mdxType:"FeaturesItem"},Object(i.a)("p",null,"Lorem ipsum dolor sit amet, con\xadsectetuer adip\xadisc\xading elit, sed diam non\xadummy nibh eu\xadis\xadmod tin\xadcidunt ut laoreet do\xadlore magna ali\xadquam erat vo\xadlut\xadpat.")),Object(i.a)(p,{icon:Object(i.a)(Be,null),title:"Ecosystem",mdxType:"FeaturesItem"},Object(i.a)("p",null,"Lorem ipsum dolor sit amet, con\xadsectetuer adip\xadisc\xading elit, sed diam non\xadummy nibh eu\xadis\xadmod tin\xadcidunt ut laoreet do\xadlore magna ali\xadquam erat vo\xadlut\xadpat. Ut wisi enim ad."))))}Ke.isMDXComponent=!0}},[["MuE9",0,2,1,4,3]]]);