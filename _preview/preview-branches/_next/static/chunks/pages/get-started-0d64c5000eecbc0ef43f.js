_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"4hdO":function(e,a,t){"use strict";function n(e){document.body.scrollTop=document.documentElement.scrollTop=e}function r(e,a){requestAnimationFrame||n(e);var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(t!==e){var r=e-t,s=void 0;requestAnimationFrame((function e(c){s||(s=c);var o=c-s,l=Math.min(1,o/a);n(t+r*(l*(2-l))),l<1&&requestAnimationFrame(e)}))}}t.d(a,"a",(function(){return r}))},"7ljp":function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t("q1tI"),r=t.n(n);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),m=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"===typeof e?e(a):o(o({},a),e)),t},i={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),j=m(t),b=n,d=j["".concat(c,".").concat(b)]||j[b]||i[b]||s;return t?r.a.createElement(d,o(o({ref:a},p),{},{components:t})):r.a.createElement(d,o({ref:a},p))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"===typeof e||n){var s=t.length,c=new Array(s);c[0]=j;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"===typeof e?e:n,c[1]=o;for(var p=2;p<s;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},A4L8:function(e,a,t){"use strict";var n=t("wx14"),r=t("q1tI"),s=t.n(r),c=t("UMc4"),o=(t("Divk"),s.a.createElement);a.a=function(e){return o(c.a,Object(n.a)({narrow:!0,hashSmoothScroll:!0},e),o("div",{className:"guide"},e.children))}},DHTk:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("TSYQ"),c=t.n(s),o=(t("i0N+"),r.a.createElement);a.a=function(e){var a=e.wide,t=e.children,s=r.a.Children.map(t,(function(e){return e.props.title})),l=Object(n.useState)(s[0]),p=l[0],m=l[1];return o("div",{className:c()("code-examples",{wide:a})},o("div",{className:"code-examples-tabs"},s.map((function(e){return o("div",{className:c()("code-examples-tab",{active:p===e}),onClick:function(){return m(e)},key:e},e)}))),o("div",{className:"code-examples-content"},r.a.Children.map(t,(function(e){return r.a.cloneElement(e,{active:p===e.props.title})}))))}},Ff2n:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,"a",(function(){return n}))},Sp2p:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("TSYQ"),c=t.n(s),o=(t("wL3L"),r.a.createElement);a.a=function(e){e.title;var a=e.active,t=e.children;return o("div",{className:c()("code-examples-example",{active:a})},t)}},UMc4:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("TSYQ"),c=t.n(s),o=t("nOHt"),l=t.n(o),p=t("4hdO"),m=t("anbt"),i=t("Cgje"),j=t("naWs"),b=(t("05nU"),r.a.createElement);function d(e,a){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"===typeof e)return u(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,a)}(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){o=!0,s=e},f:function(){try{c||null==t.return||t.return()}finally{if(o)throw s}}}}function u(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}a.a=function(e){var a=e.meta,t=void 0===a?{}:a,r=e.narrow,s=e.hashSmoothScroll,o=void 0!==s&&s,u=e.children,O=Object(n.useContext)(m.a.State),h=Object(n.useRef)(),N=Object(n.useCallback)((function(e,a){var t=e.substring(e.indexOf("#")+1),n=document.getElementById(t);if(n){var r=n.offsetTop-O.height;Object(p.a)(r,a?200:500)}}),[O.height]),f=Object(n.useCallback)((function(e){N(e.newURL)}),[N]),g=Object(n.useCallback)((function(e){var a,t=d(e.current.querySelectorAll("a[href^='#']"));try{var n=function(){var e=a.value;e.onclick=function(a){a.preventDefault();var t=window.location.href;t.substring(t.indexOf("#"))!==e.getAttribute("href")?l.a.push(window.location.pathname+e.getAttribute("href")):N(t)}};for(t.s();!(a=t.n()).done;)n()}catch(r){t.e(r)}finally{t.f()}}),[N]);return Object(n.useEffect)((function(){return o&&(l.a.events.on("hashChangeStart",N),window.addEventListener("hashchange",f),g(h),N(window.location.href,!0)),function(){o&&(window.removeEventListener("hashchange",f),l.a.events.off("hashChangeStart",N))}}),[f,N,g,o]),b("main",{className:"page"},b(i.a,{title:t.title}),b("div",{className:"page-content"},b("div",{className:c()("container",{"container-narrow":r}),ref:h},u)),b(j.a,null))}},WBQt:function(e,a){e.exports="/_preview/preview-branches/_next/static/images/starter-screenshot-96612b2acc891efa9f95b1acd8fc7035.png"},ZTs3:function(e,a,t){"use strict";t.r(a),t.d(a,"meta",(function(){return u})),t.d(a,"__tfidf__terms",(function(){return O})),t.d(a,"default",(function(){return f}));var n=t("wx14"),r=t("Ff2n"),s=t("q1tI"),c=t.n(s),o=t("7ljp"),l=t("A4L8"),p=(t("rNF+"),c.a.createElement),m=function(e){return p(l.a,e,p("div",{className:"get-started"},e.children))},i=t("YFqc"),j=t.n(i),b=t("Sp2p"),d=t("DHTk"),u=(c.a.createElement,{title:"Get started"}),O=[{term:"start",tf:7},{term:"project",tf:7},{term:"request",tf:7},{term:"us",tf:5},{term:"run",tf:5},{term:"code",tf:5},{term:"maven",tf:4},{term:"http",tf:4},{term:"build",tf:4},{term:"sampl",tf:4},{term:"server",tf:4},{term:"web",tf:3},{term:"editor",tf:3},{term:"id",tf:3},{term:"go",tf:3},{term:"want",tf:3},{term:"contain",tf:3},{term:"configur",tf:3},{term:"applic",tf:3},{term:"guid",tf:2},{term:"new",tf:2},{term:"higher",tf:2},{term:"text",tf:2},{term:"perform",tf:2},{term:"creat",tf:2}],h={meta:u,__tfidf__terms:O},N=m;function f(e){var a=e.components,s=Object(r.a)(e,["components"]);return Object(o.a)(N,Object(n.a)({},h,s,{components:a,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"get-started-with-vertx"},Object(o.a)("a",Object(n.a)({parentName:"h1"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#get-started-with-vertx"})),"Get started with Vert.x"),Object(o.a)("p",null,"In this guide, you\u2019ll learn how to get started with a new Vert.x Web project."),Object(o.a)("p",null,"Be\xadfore start\xading, you need:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"JDK 1.8 or higher"),Object(o.a)("li",{parentName:"ul"},"A text ed\xadi\xadtor or IDE"),Object(o.a)("li",{parentName:"ul"},"Maven 3 or higher"),Object(o.a)("li",{parentName:"ul"},"curl or ",Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://httpie.org/"}),"HTTPie")," or a browser to per\xadform HTTP re\xadquests")),Object(o.a)("h2",{id:"1-bootstrap"},Object(o.a)("a",Object(n.a)({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#1-bootstrap"})),Object(o.a)("span",{className:"get-started-step"},"1")," Bootstrap"),Object(o.a)("p",null,"To cre\xadate a new project, go to ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://start.vertx.io"}),"start.vertx.io"),"."),Object(o.a)("a",{href:"https://start.vertx.io",className:"get-started-screenshot"},Object(o.a)("img",{src:t("WBQt")})),Object(o.a)("p",null,"Choose the ver\xadsion of Vert.x you want to use, choose Java as the lan\xadguage, Maven as the build tool, and\ntype the group id and ar\xadti\xadfact id you want. Then, add ",Object(o.a)("strong",{parentName:"p"},"Vert.x Web")," as a de\xadpen\xaddency by typ\xading it in the \u201cDe\xadpen\xadden\xadcies\u201d text box. When you\u2019re done, hit the ",Object(o.a)("strong",{parentName:"p"},"Gen\xader\xadate Project")," but\xadton.\nSave the zip on your com\xadputer and unzip it in a folder of your choice."),Object(o.a)("p",null,"The gen\xader\xadated project con\xadtains:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"The Maven build de\xadscrip\xadtor ",Object(o.a)("inlineCode",{parentName:"li"},"pom.xml")," con\xadfig\xadured to build and run your ap\xadpli\xadca\xadtion"),Object(o.a)("li",{parentName:"ul"},"A sam\xadple Ver\xadti\xadcle and a sam\xadple test using JUnit 5"),Object(o.a)("li",{parentName:"ul"},"An ed\xadi\xadtor con\xadfig\xadu\xadra\xadtion to en\xadforce code style"),Object(o.a)("li",{parentName:"ul"},"A Git con\xadfig\xadu\xadra\xadtion to ig\xadnore files")),Object(o.a)("p",null,"If you want to try it now, you can down\xadload this sam\xadple project using\n",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"http://start.vertx.io/starter.zip?vertxDependencies=vertx-web"}),"Maven")," or using\n",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"http://start.vertx.io/starter.zip?vertxDependencies=vertx-web&buildTool=gradle"}),"Gra\xaddle")),Object(o.a)("h2",{id:"2-code"},Object(o.a)("a",Object(n.a)({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#2-code"})),Object(o.a)("span",{className:"get-started-step"},"2")," Code"),Object(o.a)("p",null,"Open the project in the ed\xadi\xadtor of your choice and nav\xadi\xadgate to ",Object(o.a)("inlineCode",{parentName:"p"},"src/main/java/com/example/starter/MainVerticle.java"),".\nThis source file con\xadtains a sam\xadple ",Object(o.a)("inlineCode",{parentName:"p"},"Verticle")," (the Vert.x de\xadploy\xadment unit) that starts an HTTP server.\nYou\u2019re going to mod\xadify it to greet who\xadever per\xadforms re\xadquests to your server.\nChange the code as fol\xadlows:"),Object(o.a)(d.a,{mdxType:"CodeExamples"},Object(o.a)(b.a,{title:"Java",mdxType:"CodeExample"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-java"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"public")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-class"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"MainVerticle")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"AbstractVerticle")," "),"{\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"@Override"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-function"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"public")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"void")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"start"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-params"}),"()")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"throws")," Exception "),"{\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Create a Router"),"\n    Router router = Router.router(vertx);\n\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Mount the handler for all incoming requests at every path and HTTP method"),"\n    router.route().handler(context -> {\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Get the address of the request"),"\n      String address = context.request().connection().remoteAddress().toString();\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),'// Get the query parameter "name"'),"\n      MultiMap queryParams = context.queryParams();\n      String name = queryParams.contains(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"'),") ? queryParams.get(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"'),") : ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"unknown"'),";\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Write a json response"),"\n      context.json(\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"new")," JsonObject()\n          .put(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"'),", name)\n          .put(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"address"'),", address)\n          .put(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"message"'),", ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"Hello "')," + name + ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'" connected from "')," + address)\n      );\n    });\n\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Create the HTTP server"),"\n    vertx.createHttpServer()\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Handle every request using the router"),"\n      .requestHandler(router)\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Start listening"),"\n      .listen(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-number"}),"8888"),")\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Print the port"),"\n      .onSuccess(server ->\n        System.out.println(\n          ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"HTTP server started on port "')," + server.actualPort()\n        )\n      );\n  }\n}\n"))),Object(o.a)(b.a,{title:"Kotlin",mdxType:"CodeExample"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-kotlin"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-class"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"MainVerticle")," : ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-type"}),"AbstractVerticle")),"() {\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"override")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-function"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"fun")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"start"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-params"}),"()"))," {\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Create a Router"),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"val")," router = Router.router(vertx)\n\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Mount the handler for all incoming requests at every path and HTTP method"),"\n    router.route().handler { context ->\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Get the address of the request"),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"val")," address = context.request().connection().remoteAddress().toString()\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),'// Get the query parameter "name"'),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"val")," queryParams = context.queryParams()\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"val")," name = queryParams.",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"get"),"(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"'),") ?: ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"unknown"'),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Write a json response"),"\n      context.json(\n          json {\n            obj(\n              ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"')," to name,\n              ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"address"')," to address,\n              ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"message"')," to ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"Hello ',Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-variable"}),"$name")," connected from ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-variable"}),"$address"),'"'),"\n            )\n          }\n      )\n    }\n\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Create the HTTP server"),"\n    vertx.createHttpServer()\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Handle every request using the router"),"\n        .requestHandler(router)\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Start listening"),"\n        .listen(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-number"}),"8888"),")\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Print the port"),"\n        .onSuccess { server ->\n          println(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"HTTP server started on port "')," + server.actualPort())\n        }\n  }\n}\n"))),Object(o.a)(b.a,{title:"Groovy",mdxType:"CodeExample"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-groovy"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-class"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"MainVerticle")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-title"}),"AbstractVerticle")," {"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"@Override"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"void")," start() {\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Create a Router"),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"def")," router = Router.router(vertx)\n\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Mount the handler for all incoming requests at every path and HTTP method"),"\n    router.route().handler { context ->\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Get the address of the request"),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"def")," address = context.request().connection().remoteAddress().toString()\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),'// Get the query parameter "name"'),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"def")," queryParams = context.queryParams()\n      String name = queryParams.get(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"'),") ?: ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"unknown"'),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Write a json response"),"\n      context.json(\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-keyword"}),"new")," JsonObject()\n          .put(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"name"'),", name)\n          .put(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"address"'),", address)\n          .put(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"message"'),", ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"Hello "')," + name + ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'" connected from "')," + address)\n      )\n    }\n\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Create the HTTP server"),"\n    vertx.createHttpServer()\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Handle every request using the router"),"\n      .requestHandler(router)\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Start listening"),"\n      .listen(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-number"}),"8888"),")\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// Print the port"),"\n      .onSuccess { server ->\n        println(",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"HTTP server started on port "')," + server.actualPort())\n      }\n  }\n}\n")))),Object(o.a)("p",null,"This code cre\xadates a Vert.x Web Router (the ob\xadject used to route HTTP re\xadquests to spe\xadcific re\xadquest han\xaddlers)\nand starts an HTTP Server on port ",Object(o.a)("inlineCode",{parentName:"p"},"8888"),". On each re\xadquest, it re\xadturns a JSON ob\xadject con\xadtain\xading the ad\xaddress of the re\xadquest, the query pa\xadra\xadme\xadter ",Object(o.a)("inlineCode",{parentName:"p"},"name"),", and a greet\xading mes\xadsage."),Object(o.a)("h2",{id:"3-run"},Object(o.a)("a",Object(n.a)({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#3-run"})),Object(o.a)("span",{className:"get-started-step"},"3")," Run"),Object(o.a)("p",null,"To run the code, open a ter\xadmi\xadnal and nav\xadi\xadgate to your project folder.\nBuild the ap\xadpli\xadca\xadtion as fol\xadlows:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-better-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"$"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"bash"})," mvn package"),"\n")),Object(o.a)("p",null,"Then, run the ap\xadpli\xadca\xadtion:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-better-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"$"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"bash"})," mvn ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-built_in"}),"exec"),":java"),"\nHTTP server started on port 8888\napr 03, 2020 11:49:21 AM io.vertx.core.impl.launcher.commands.VertxIsolatedDeployer\nINFO: Succeeded in deploying verticle\n")),Object(o.a)("p",null,"Now that the server is up and run\xadning, try to send a re\xadquest:"),Object(o.a)(d.a,{mdxType:"CodeExamples"},Object(o.a)(b.a,{title:"HTTPie",mdxType:"CodeExample"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-better-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"$"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"bash"})," http http://localhost:8888"),'\nHTTP/1.1 200 OK\ncontent-length: 115\ncontent-type: application/json; charset=utf-8\n\n{\n    "address": "0:0:0:0:0:0:0:1:32806",\n    "message": "Hello unknown connected from 0:0:0:0:0:0:0:1:32806",\n    "name": "unknown"\n}\n',Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"\n$"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"bash"})," http http://localhost:8888\\?name\\=",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-string"}),'"Francesco"')),'\nHTTP/1.1 200 OK\ncontent-length: 119\ncontent-type: application/json; charset=utf-8\n\n{\n    "address": "0:0:0:0:0:0:0:1:32822",\n    "message": "Hello Francesco connected from 0:0:0:0:0:0:0:1:32822",\n    "name": "Francesco"\n}\n'))),Object(o.a)(b.a,{title:"curl",mdxType:"CodeExample"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-better-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"$"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"bash"})," curl -v http://localhost:8888"),'\n*   Trying ::1:8888...\n* Connected to localhost (::1) port 8888 (#0)\n> GET / HTTP/1.1\n> Host: localhost:8888\n> User-Agent: curl/7.69.1\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< content-type: application/json; charset=utf-8\n< content-length: 115\n<\n* Connection #0 to host localhost left intact\n{"name":"unknown","address":"0:0:0:0:0:0:0:1:59610","message":"Hello unknown connected from 0:0:0:0:0:0:0:1:59610"}\n',Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-meta"}),"\n$"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"bash"})," curl -v http://localhost:8888\\?name\\=",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-string"}),'"Francesco"')),'\n*   Trying ::1:8888...\n* Connected to localhost (::1) port 8888 (#0)\n> GET /?name=Francesco HTTP/1.1\n> Host: localhost:8888\n> User-Agent: curl/7.69.1\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< content-type: application/json; charset=utf-8\n< content-length: 119\n<\n* Connection #0 to host localhost left intact\n{"name":"Francesco","address":"0:0:0:0:0:0:0:1:59708","message":"Hello Francesco connected from 0:0:0:0:0:0:0:1:59708"}\n')))),Object(o.a)("h2",{id:"4-go-further"},Object(o.a)("a",Object(n.a)({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#4-go-further"})),Object(o.a)("span",{className:"get-started-step"},"4")," Go further"),Object(o.a)("p",null,"Now that you have had a taste of how easy and fun it is to get started with Vert.x, here are a few point\xaders to help guide you fur\xadther along your jour\xadney:"),Object(o.a)("ul",{className:"get-started-next-steps"},Object(o.a)(j.a,{href:"/introduction-to-vertx-and-reactive/",passHref:!0,mdxType:"Link"},Object(o.a)("a",null,Object(o.a)("li",null,Object(o.a)("h4",null,"Intro"),"Read our short introduction into reactive programming with Eclipse Vert.x"))),Object(o.a)(j.a,{href:"/docs/[[...slug]]",as:"/docs/",passHref:!0,mdxType:"Link"},Object(o.a)("a",null,Object(o.a)("li",null,Object(o.a)("h4",null,"Documentation"),"Deep dive through the documentation to check out all Vert.x modules"))),Object(o.a)("a",{href:"https://how-to.vertx.io/"},Object(o.a)("li",null,Object(o.a)("h4",null,"How-tos"),"Check out the Vert.x How-tos to get pragmatic guides for specific topics"))))}f.isMDXComponent=!0},mJ3S:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-started",function(){return t("ZTs3")}])},wx14:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return n}))}},[["mJ3S",0,2,1,4,3]]]);