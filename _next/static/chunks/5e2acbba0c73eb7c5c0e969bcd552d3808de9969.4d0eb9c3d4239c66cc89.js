(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(i.default.useContext(o.AmpStateContext))};var n,i=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||i&&c}},"/9aa":function(e,t,r){var n=r("NykK"),i=r("ExA7");e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},"3r9c":function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},c=r("lwAK"),a=r("FYa8"),u=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function j(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(j,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var s=f[a];if(i.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?o=!1:r.add(s);else{var l=i.props[s],j=n[s]||new Set;j.has(l)?o=!1:(j.add(l),n[s]=j)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return i.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}h.rewind=function(){};var p=h;t.default=p},AP2z:function(e,t,r){var n=r("nmnc"),i=Object.prototype,o=i.hasOwnProperty,c=i.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(u){}var i=c.call(e);return n&&(t?e[a]=r:delete e[a]),i}},BMc8:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAyODEuMyA5MS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiNmNzk0MjJ9LnN0MXtmaWxsOiMzZDNjM2J9PC9zdHlsZT48ZyBpZD0iTGF5ZXJfMV8xXyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI2NS43IDg0TDI1NyA3M2gtMi43djE3LjdoMy4zdi0xMmw5LjMgMTJoMi4xVjczaC0zLjN2MTF6bS0zMi40LTguM2M0LjIgMCA1LjggMy4zIDUuOCA2LjNzLTEuNiA2LTUuOCA2LTUuNy0zLjEtNS44LTYgMS43LTYuMyA1LjgtNi4zem0wLTNjLTYuMSAwLTkuMSA0LjctOS4xIDkuMyAwIDQuNyAyLjkgOS4xIDkuMSA5LjFzOS00LjYgOS4xLTkuMi0zLTkuMi05LjEtOS4yem0tMjEuMiAxOFY3M2gtMy4zdjE3LjdoMy4zem0tMjMuNiAwaDMuM1Y3Nmg1LjZ2LTNoLTE0LjZ2M2g1LjZsLjEgMTQuN3ptLTE4LjktNi41SDE2M2wzLjMtNy42IDMuMyA3LjZ6bTIuOCA2LjVoMy42TDE2OC4yIDczaC0zLjZsLTggMTcuN2gzLjZsMS41LTMuM2g5LjNsMS40IDMuM3ptLTM4LTE0LjZoMy42YzMuOSAwIDUuNSAyLjggNS41IDUuNS4xIDIuOC0xLjUgNS44LTUuNSA1LjhoLTMuNlY3Ni4xem0zLjctMy4xaC02Ljl2MTcuN2g2LjljNi4yIDAgOC45LTQuNSA4LjktOXMtMi44LTguNy04LjktOC43em0tMjIuNCAxMUwxMDcgNzNoLTIuN3YxNy43aDMuM3YtMTJsOS4zIDEyaDIuMVY3M2gtMy4zdjExek04OC4yIDczdjEwLjJjMCAzLTEuNiA0LjktNC4zIDQuOXMtNC42LTEuNy00LjYtNC45VjczSDc2djEwLjFjMCA1LjMgMy42IDcuOSA3LjkgNy45IDQuNCAwIDcuNy0yLjcgNy43LTcuOVY3M2gtMy40em0tMzMgMi43YzQuMiAwIDUuOCAzLjMgNS44IDYuM3MtMS42IDYtNS44IDYtNS43LTMuMS01LjgtNiAxLjctNi4zIDUuOC02LjN6bTAtM2MtNi4xIDAtOS4xIDQuNy05LjEgOS4zczIuOSA5LjEgOS4xIDkuMSA5LTQuNiA5LjEtOS4yLTMtOS4yLTkuMS05LjJ6bS0yOS43IDE4di02LjVoOC45di0zLjFoLTguOXYtNC44aDkuNFY3M0gyMi4ydjE3LjZoMy4zeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNjkuNCA1NC40aC0yMi4ydi04LjloMjEuNHYtNi45aC0yMS40di05LjFoMjIuMnYtNy4yaC0yOS42djM5LjVoMjkuNnYtNy40em0tNDAtMjUuNmMtMy02LjEtOS40LTcuOC0xNS41LTcuOC03LjMgMC0xNS4zIDMuNC0xNS4zIDExLjUgMCA4LjkgNy40IDExIDE1LjUgMTIgNS4yLjYgOS4xIDIuMSA5LjEgNS44IDAgNC4zLTQuNCA1LjktOS4xIDUuOXMtOS40LTEuOS0xMS4xLTYuM2wtNi4yIDMuMmMyLjkgNy4yIDkuMSA5LjcgMTcuMiA5LjcgOC44IDAgMTYuNi0zLjggMTYuNi0xMi42IDAtOS40LTcuNy0xMS42LTE1LjktMTIuNi00LjctLjYtOC44LTEuNS04LjgtNSAwLTIuOSAyLjYtNS4yIDguMi01LjIgNC4zIDAgOCAyLjIgOS40IDQuNGw1LjktM3pNMTc2IDIyLjJjLTYuMi0uMS0xMi40IDAtMTguNiAwdjM5LjVoNy40VjUwLjFIMTc2YzE5LjQgMCAxOS40LTI3LjkgMC0yNy45em0tMTEuMSA3LjFIMTc2YzkuNSAwIDkuNSAxNCAwIDE0aC0xMS4ybC4xLTE0em0tMTggMzIuNVYyMi4yaC03LjR2MzkuNWw3LjQuMXptLTQ0LTM5LjZ2MzkuNWgyNy43di02LjloLTIwLjNWMjIuMmgtNy40ek05MC43IDUxLjdjLTIuNyAyLjUtNi4yIDQtOS45IDQtOS44IDAtMTMuNS02LjgtMTMuNi0xMy40czQuMS0xMy43IDEzLjYtMTMuN2MzLjUtLjEgNyAxLjMgOS41IDMuN2w1LTQuOGMtMy44LTMuOS05LjEtNi0xNC41LTYtMTQuMyAwLTIxIDEwLjUtMjAuOSAyMC44czYuMyAyMC4zIDIwLjkgMjAuM2M1LjYuMSAxMS0yIDE1LTUuOWwtNS4xLTV6bS0zOSAyLjdIMjkuNXYtOC45aDIxLjR2LTYuOUgyOS41di05LjFoMjIuMnYtNy4ySDIyLjJ2MzkuNWgyOS42bC0uMS03LjR6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTkuOCAxOC4yQzE4LjggNC4xIDM2LjktLjggNTIuMSA2bC0xLS43QzM1LjctNC42IDE1LjItLjEgNS4zIDE1LjNzLTUuNCAzNS45IDEwIDQ1LjhsMS4xLjZDMy44IDUwLjguOCAzMi4zIDkuOCAxOC4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNzIuMiAyNi4xYzAtMi41IDIuMS00LjYgNC42LTQuNiAyLjUgMCA0LjYgMi4xIDQuNiA0LjYgMCAyLjUtMi4xIDQuNi00LjYgNC42LTIuNiAwLTQuNi0yLjEtNC42LTQuNnptOC42IDBjMC0yLjItMS44LTQuMS00LTQuMXMtNC4xIDEuOC00LjEgNC4xYzAgMi4yIDEuNyA0IDMuOSA0LjFoLjFjMi4zIDAgNC4xLTEuOCA0LjEtNC4xem0tNi0yLjVoMi4zYzEuMSAwIDEuOS41IDEuOSAxLjYgMCAuNy0uNCAxLjMtMS4xIDEuNWwxLjIgMS43aC0xLjRsLTEtMS41aC0uN3YxLjVoLTEuMWwtLjEtNC44em0yLjIgMi4zYy41IDAgLjgtLjMuOC0uN3MtLjMtLjctLjgtLjdoLTF2MS4zbDEgLjF6Ii8+PC9nPjwvc3ZnPg=="},Cgje:function(e,t,r){"use strict";var n=r("nKUr"),i=r("8Kt/"),o=r.n(i),c=r("anbt"),a=r("sQIq"),u=r("TSYQ"),s=r.n(u),l=r("YFqc"),j=r.n(l),f=(r("SYuY"),r("q1tI")),d=r.n(f),h=r("DzJC"),p=r.n(h),y=r("17x9"),g=r.n(y);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=Object(f.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,c=e.title,a=void 0===c?"Awesome Lists":c,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["color","size","title"]);return d.a.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:n,viewBox:"0 0 24 24",ref:t},u),d.a.createElement("title",null,a),d.a.createElement("path",{d:"M24 11.438l-6.154-5.645-.865.944 5.128 4.7H1.895l5.128-4.705-.865-.943-6.154 5.649H0v3.72c0 1.683 1.62 3.053 3.61 3.053h3.795c1.99 0 3.61-1.37 3.61-3.051v-2.446h1.97v2.446c0 1.68 1.62 3.051 3.61 3.051h3.794c1.99 0 3.61-1.37 3.61-3.051v-3.721z"}))}));v.propTypes={color:g.a.string,size:g.a.oneOfType([g.a.string,g.a.number]),title:g.a.string};var b=v,O=r("Geao");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var L=Object(f.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,c=e.title,a=void 0===c?"YouTube":c,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["color","size","title"]);return d.a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:n,viewBox:"0 0 24 24",ref:t},u),d.a.createElement("title",null,a),d.a.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"}))}));L.propTypes={color:g.a.string,size:g.a.oneOfType([g.a.string,g.a.number]),title:g.a.string};var m=L,I=r("ZUFF"),N=r("ktqw");function w(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=function(){var e=Object(f.useRef)(),t=Object(f.useRef)(),i=Object(f.useState)(!1),o=i[0],u=i[1],l=Object(f.useState)(void 0),d=l[0],h=l[1],y=Object(f.useContext)(c.a.Dispatch),g=Object(f.useContext)(a.a.State);Object(f.useEffect)((function(){function t(){var t=e.current.clientHeight;y({height:t})}t();var r=p()(t,100);return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[y]);return Object(n.jsx)("div",{className:"navbar",ref:e,children:Object(n.jsxs)("div",{className:"navbar-content container",children:[Object(n.jsx)("div",{className:"navbar-logo",children:Object(n.jsx)(j.a,{href:"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("img",{src:r("y/Pd"),alt:"Vert.x Logo"})})})}),Object(n.jsxs)("div",{className:"navbar-collapse-button",onClick:function(){var e,r=0,n=w(t.current.children);try{for(n.s();!(e=n.n()).done;){r+=e.value.offsetHeight}}catch(i){n.e(i)}finally{n.f()}o?(u(!1),h(void 0)):(u(!0),h(r))},children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsxs)("div",{className:s()("navbar-right",{collapse:o}),ref:t,style:{maxHeight:d},children:[Object(n.jsxs)("div",{className:"navbar-menu",children:[Object(n.jsx)(j.a,{href:"/introduction-to-vertx-and-reactive/",children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Intro"})}),g.version?Object(n.jsx)(j.a,{href:"/docs/".concat(g.version,"/"),children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Docs"})}):Object(n.jsx)(j.a,{href:"/docs/",children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Docs"})}),Object(n.jsx)(j.a,{href:"/faq/",children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"FAQ"})}),Object(n.jsx)(j.a,{href:"/blog/",children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Blog"})}),Object(n.jsx)(j.a,{href:"/community/",children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Community"})})]}),Object(n.jsxs)("div",{className:"navbar-social",children:[Object(n.jsx)("a",{href:"https://github.com/vert-x3/vertx-awesome",className:"navbar-social-link",title:"Awesome Vert.x",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(b,{"aria-label":"List of awesome Vert.x projects",title:"Awesome Vert.x"})}),Object(n.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/vert.x",className:"navbar-social-link",title:"Stack Overflow",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(O.a,{"aria-label":"Stack Overflow questions related to Vert.x"})}),Object(n.jsx)("a",{href:"https://www.youtube.com/channel/UCGN6L3tRhs92Uer3c6VxOSA",className:"navbar-social-link",title:"YouTube",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(m,{"aria-label":"YouTube channel of Vert.x"})}),Object(n.jsx)("a",{href:"https://discord.gg/KzEMwP2",className:"navbar-social-link",title:"Discord",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(I.a,{"aria-label":"Eclipse Vert.x channel on Discord"})}),Object(n.jsx)("a",{href:"https://groups.google.com/forum/?fromgroups#!forum/vertx",className:"navbar-social-link",title:"Vert.x User Group",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(N.a,{"aria-label":"A Google group for Vert.x users",title:"Vert.x User Group"})})]})]})]})})};t.a=function(e){var t=e.title;return Object(n.jsxs)("header",{children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(n.jsx)("meta",{name:"description",content:"Vert.x | Reactive applications on the JVM"}),Object(n.jsx)("meta",{name:"robots",content:"index,follow"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500",rel:"stylesheet"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400",rel:"stylesheet"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap",rel:"stylesheet"}),Object(n.jsx)("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),Object(n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),Object(n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),Object(n.jsx)("link",{rel:"icon",type:"image/png",sizes:"48x48",href:"/favicons/favicon-48x48.png"}),Object(n.jsxs)("title",{children:[t&&t+" | ","Eclipse Vert.x"]})]}),Object(n.jsx)(A,{})]})}},DzJC:function(e,t,r){var n=r("sEfC"),i=r("GoyQ");e.exports=function(e,t,r){var o=!0,c=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(r)&&(o="leading"in r?!!r.leading:o,c="trailing"in r?!!r.trailing:c),n(e,t,{leading:o,maxWait:t,trailing:c})}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},Geao:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("17x9"),c=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,u=e.title,s=void 0===u?"Stack Overflow":u,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["color","size","title"]);return i.a.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:c,height:c,fill:n,viewBox:"0 0 24 24",ref:t},l),i.a.createElement("title",null,s),i.a.createElement("path",{d:"M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number]),title:c.a.string},t.a=u},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},JoS9:function(e,t,r){},KfNM:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},Kz5y:function(e,t,r){var n=r("WFqU"),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();e.exports=o},NykK:function(e,t,r){var n=r("nmnc"),i=r("AP2z"),o=r("KfNM"),c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?i(e):o(e)}},QIyF:function(e,t,r){var n=r("Kz5y");e.exports=function(){return n.Date.now()}},SYuY:function(e,t,r){},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=i.apply(null,n);c&&e.push(c)}else if("object"===o)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},WFqU:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r("3r9c"))},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),i=r("/GRZ"),o=r("i2R6"),c=(r("qXWd"),r("48fX")),a=r("tCBg"),u=r("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),j=function(e){c(r,e);var t=s(r);function r(e){var o;return i(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=j},YFqc:function(e,t,r){e.exports=r("cTJO")},ZUFF:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("17x9"),c=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,u=e.title,s=void 0===u?"Discord":u,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["color","size","title"]);return i.a.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:c,height:c,fill:n,viewBox:"0 0 24 24",ref:t},l),i.a.createElement("title",null,s),i.a.createElement("path",{d:"M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number]),title:c.a.string},t.a=u},anbt:function(e,t,r){"use strict";var n=r("cpVT"),i=r("nKUr"),o=r("q1tI");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(o.createContext)(),s=Object(o.createContext)(),l=function(e,t){var r=t.height;return"undefined"!==typeof r&&r!==e.height&&(e=a(a({},e),{},{height:r})),e};t.a={State:u,Dispatch:s,Provider:function(e){var t=e.children,r=Object(o.useReducer)(l,{height:0}),n=r[0],c=r[1];return Object(i.jsx)(u.Provider,{value:n,children:Object(i.jsx)(s.Provider,{value:c,children:t})})}}},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),i=r("7KCV");t.__esModule=!0,t.default=void 0;var o=i(r("q1tI")),c=r("elyg"),a=r("nOHt"),u=r("vNVm"),s={};function l(e,t,r,n){if((0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(i?"%"+i:"")]=!0}}var j=function(e){var t=!1!==e.prefetch,r=(0,a.useRouter)(),i=r&&r.pathname||"/",j=o.default.useMemo((function(){var t=(0,c.resolveHref)(i,e.href,!0),r=n(t,2),o=r[0],a=r[1];return{href:o,as:e.as?(0,c.resolveHref)(i,e.as):a||o}}),[i,e.href,e.as]),f=j.href,d=j.as,h=e.children,p=e.replace,y=e.shallow,g=e.scroll,M=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=o.Children.only(h),b=v&&"object"===typeof v&&v.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),x=n(O,2),L=x[0],m=x[1],I=o.default.useCallback((function(e){L(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,L]);(0,o.useEffect)((function(){var e=m&&t&&(0,c.isLocalURL)(f),n="undefined"!==typeof M?M:r&&r.locale,i=s[f+"%"+d+(n?"%"+n:"")];e&&!i&&l(r,f,d,{locale:n})}),[d,f,m,M,t,r]);var N={ref:I,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[i?"replace":"push"](r,n,{shallow:o,locale:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,f,d,p,y,g,M)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(r,f,d,{priority:!0}))}};return(e.passHref||"a"===v.type&&!("href"in v.props))&&(N.href=(0,c.addBasePath)((0,c.addLocale)(d,"undefined"!==typeof M?M:r&&r.locale,r&&r.defaultLocale))),o.default.cloneElement(v,N)};t.default=j},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ktqw:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("17x9"),c=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,u=e.title,s=void 0===u?"Google Messages":u,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["color","size","title"]);return i.a.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:c,height:c,fill:n,viewBox:"0 0 24 24",ref:t},l),i.a.createElement("title",null,s),i.a.createElement("path",{d:"M.92 3.332c-.776 0-1.216.67-.692 1.383l2.537 4.403v7.86c0 2.013 1.467 3.69 3.459 3.69H20.31a3.75 3.75 0 003.69-3.69V7.043a3.723 3.723 0 00-3.668-3.71zm5.786 3.71H20.1c.587 0 1.153.357 1.153.923 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.923 1.153-.923zm0 3.69H20.1c.587 0 1.153.356 1.153.922 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.922 1.153-.922zm-.021 3.71h9.705c.587 0 1.153.356 1.153.922 0 .566-.566.923-1.153.923H6.685c-.587 0-1.153-.357-1.153-.923 0-.566.566-.922 1.153-.922Z"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number]),title:c.a.string},t.a=u},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var i=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i},mPvQ:function(e,t,r){var n=r("5fIB"),i=r("rlHP"),o=r("KckH"),c=r("kG2m");e.exports=function(e){return n(e)||i(e)||o(e)||c()}},naWs:function(e,t,r){"use strict";var n=r("nKUr"),i=r("sQIq"),o=r("TSYQ"),c=r.n(o),a=(r("JoS9"),r("YFqc")),u=r.n(a),s=r("q1tI");function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(){var e=[Object(s.useRef)(),Object(s.useRef)()],t=[Object(s.useState)(void 0),Object(s.useState)(void 0)],o=[Object(s.useState)(!1),Object(s.useState)(!1)],a=Object(s.useContext)(i.a.State),j=function(r){var n,i=0,c=l(e[r].current.children);try{for(c.s();!(n=c.n()).done;){i+=n.value.offsetHeight}}catch(a){c.e(a)}finally{c.f()}o[r][0]?(o[r][1](!1),t[r][1](void 0)):(o[r][1](!0),t[r][1](i))};return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"footer-nav-section",children:[Object(n.jsx)("div",{className:"footer-nav-list footer-logo",children:Object(n.jsx)(u.a,{href:"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("img",{src:r("y/Pd"),alt:"Vert.x Logo"})})})}),Object(n.jsxs)("div",{className:"footer-nav-list",children:[Object(n.jsx)("h5",{onClick:function(){return j(0)},children:"Eclipse Vert.x"}),Object(n.jsxs)("ul",{ref:e[0],style:{maxHeight:t[0][0]},className:c()({visible:o[0][0]}),children:[Object(n.jsx)("li",{children:a.version?Object(n.jsx)(u.a,{href:"/docs/".concat(a.version,"/"),children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Docs"})}):Object(n.jsx)(u.a,{href:"/docs/",children:Object(n.jsx)("a",{className:"navbar-menu-item",children:"Docs"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/download/",children:Object(n.jsx)("a",{children:"Download"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/faq/",children:Object(n.jsx)("a",{children:"FAQ"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/blog/",children:Object(n.jsx)("a",{children:"Blog"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/community/",children:Object(n.jsx)("a",{children:"Community"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/channels/",children:Object(n.jsx)("a",{children:"Channels"})})})]})]}),Object(n.jsxs)("div",{className:"footer-nav-list",children:[Object(n.jsx)("h5",{onClick:function(){return j(1)},children:"Eclipse"}),Object(n.jsxs)("ul",{ref:e[1],style:{maxHeight:t[1][0]},className:c()({visible:o[1][0]}),children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.eclipse.org/",children:"Eclipse Foundation"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.eclipse.org/legal/privacy.php",children:"Privacy Policy"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.eclipse.org/legal/termsofuse.php",children:"Terms of Use"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.eclipse.org/legal/copyright.php",children:"Copyright Agent"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.eclipse.org/legal/",children:"Legal Resources"})})]})]})]}),Object(n.jsxs)("div",{className:"footer-copyright",children:[Object(n.jsxs)("div",{className:"footer-copyright-remarks",children:["\xa9 ",(new Date).getFullYear()," Eclipse Vert.x",Object(n.jsx)("br",{}),"Eclipse Vert.x is open source and dual-licensed under the ",Object(n.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/",target:"_blank",rel:"noopener noreferrer",children:"Eclipse Public License 2.0"})," and the ",Object(n.jsx)("a",{href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer",children:"Apache License 2.0"}),". ",Object(n.jsx)("br",{className:"footer-copyright-break"}),"Website design by ",Object(n.jsx)("a",{href:"https://michelkraemer.com",target:"_blank",rel:"noopener noreferrer",children:"Michel Kr\xe4mer"}),"."]}),Object(n.jsx)("div",{className:"footer-copyright-eclipse-logo",children:Object(n.jsx)("a",{href:"https://www.eclipse.org/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:r("BMc8"),alt:"Eclipse foundation Logo"})})})]})]})})}},nmnc:function(e,t,r){var n=r("Kz5y").Symbol;e.exports=n},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sEfC:function(e,t,r){var n=r("GoyQ"),i=r("QIyF"),o=r("tLB3"),c=Math.max,a=Math.min;e.exports=function(e,t,r){var u,s,l,j,f,d,h=0,p=!1,y=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function M(t){var r=u,n=s;return u=s=void 0,h=t,j=e.apply(n,r)}function v(e){return h=e,f=setTimeout(O,t),p?M(e):j}function b(e){var r=e-d;return void 0===d||r>=t||r<0||y&&e-h>=l}function O(){var e=i();if(b(e))return x(e);f=setTimeout(O,function(e){var r=t-(e-d);return y?a(r,l-(e-h)):r}(e))}function x(e){return f=void 0,g&&u?M(e):(u=s=void 0,j)}function L(){var e=i(),r=b(e);if(u=arguments,s=this,d=e,r){if(void 0===f)return v(d);if(y)return clearTimeout(f),f=setTimeout(O,t),M(d)}return void 0===f&&(f=setTimeout(O,t)),j}return t=o(t)||0,n(r)&&(p=!!r.leading,l=(y="maxWait"in r)?c(o(r.maxWait)||0,t):l,g="trailing"in r?!!r.trailing:g),L.cancel=function(){void 0!==f&&clearTimeout(f),h=0,u=d=s=f=void 0},L.flush=function(){return void 0===f?j:x(i())},L}},sQIq:function(e,t,r){"use strict";var n=r("cpVT"),i=r("nKUr"),o=r("q1tI");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(o.createContext)(),s=Object(o.createContext)(),l=function(e,t){var r=t.version;return a(a({},e),{},{version:r})};t.a={State:u,Dispatch:s,Provider:function(e){var t=e.children,r=Object(o.useReducer)(l,{version:void 0}),n=r[0],c=r[1];return Object(i.jsx)(u.Provider,{value:n,children:Object(i.jsx)(s.Provider,{value:c,children:t})})}}},tLB3:function(e,t,r){var n=r("GoyQ"),i=r("/9aa"),o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=a.test(e);return r||u.test(e)?s(e.slice(2),r?2:8):c.test(e)?NaN:+e}},vNVm:function(e,t,r){"use strict";var n=r("zoAU"),i=r("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,i=(0,o.useRef)(),s=(0,o.useState)(!1),l=n(s,2),j=l[0],f=l[1],d=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||j||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){o.unobserve(e),0===c.size&&(o.disconnect(),u.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,j]);return(0,o.useEffect)((function(){a||j||(0,c.default)((function(){return f(!0)}))}),[j]),[d,j]};var o=r("q1tI"),c=i(r("0G5g")),a="undefined"!==typeof IntersectionObserver;var u=new Map},"y/Pd":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMTI1LjYgMzE1LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6Izc4MmE5MX08L3N0eWxlPjxwYXRoIGQ9Ik0xMjAuOSAyMTQuMkwxOTAuNSAwaDUyLjNsLTk4LjUgMjczLjhIOTguMkwwIDBoNTIuMWw2OC44IDIxNC4yem0yOTEuMi02Mi42SDI5OS42djg0LjJINDMxdjM4SDI1MlYwaDE3Ny43djM4LjRIMjk5LjZWMTE0aDExMi41djM3LjZ6bTgzLjctMTEzLjJINTQ2YzE2LjUuMyAyOSA0LjQgMzcuMyAxMi40IDguMyA4IDEyLjUgMTkuNCAxMi41IDM0IDAgMTQtNC41IDI1LjEtMTMuNSAzMy4yLTkgOC4xLTIxLjYgMTIuMS0zNy42IDEyLjFoLTI3LjF2MjQuMmw4Ni4xIDExOS41aDUxdi0yLjRsLTc3LjItMTA2LjdjMjQuOS01LjUgNDMuMy0yMS43IDUyLjYtMzUuOSA4LjItMTIuNiAxMy4zLTI3LjcgMTMuMy00NiAwLTI2LjgtOC42LTQ3LjQtMjUuOC02MS41QzYwMC41IDcuMSA1NzYuMSAwIDU0NC41IDBoLTk2LjN2MjczLjhoNDcuNiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDUyLjMgMTU3LjdsLTQxLjUgNjIuNyAyOS43IDUzLjRoODUuMXoiLz48Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjcuOSIgY3k9IjI3NC43IiByPSI0MC41Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTEwMzcgMGwtNDcuNiA3NC4yTDk0OSAwaC04NGw4NS4zIDEzNS44LTY3LjEgMTA1LjdjNS43IDkuNSA5LjEgMjAuNSA5LjIgMzIuNGg1MC4xTDExMjEuMyAwSDEwMzd6Ii8+PHBhdGggZD0iTTc2My41IDI3My44Yy4xLTkuOSAyLjUtMTkuMiA2LjYtMjcuNVYzOC40aDg1LjRWMEg2MzguMnYzOC40aDg0LjZ2MjM1LjRoNDAuN3oiLz48L3N2Zz4="}}]);