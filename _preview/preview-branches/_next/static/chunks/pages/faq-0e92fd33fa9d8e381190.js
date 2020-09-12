_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"3ouP":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return g})),n.d(t,"__tfidf__terms",(function(){return j})),n.d(t,"default",(function(){return x}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),s=n("7ljp"),c=n("UMc4"),l=n("TSYQ"),u=n.n(l),p=n("17x9"),f=n.n(p);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=Object(o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,s=b(e,["color","size"]);return i.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),i.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));d.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},d.displayName="ChevronRight";var h=d,v=(n("g+v8"),i.a.createElement),O=function(e){var t=e.question,n=e.children,r=Object(o.useState)(),a=r[0],i=r[1];return v("section",{className:"faq-question"},v("h3",{onClick:function(){i(!a)}},v(h,{className:u()("faq-question-chevron",{visible:a})}),t),v("div",{className:u()("faq-question-answer",{visible:a})},n))},g=(n("YFqc"),i.a.createElement,{title:"Frequently asked questions"}),j=[{term:"messag",tf:9},{term:"client",tf:7},{term:"not",tf:6},{term:"node",tf:5},{term:"rabbitmq",tf:4},{term:"option",tf:3},{term:"log",tf:3},{term:"system",tf:3},{term:"on",tf:3},{term:"non",tf:3},{term:"block",tf:3},{term:"resolv",tf:3},{term:"jvm",tf:3},{term:"network",tf:2},{term:"activ",tf:2},{term:"netti",tf:2},{term:"configur",tf:2},{term:"logger",tf:2},{term:"level",tf:2},{term:"switch",tf:2},{term:"set",tf:2},{term:"send",tf:2},{term:"event",tf:2},{term:"bu",tf:2},{term:"sent",tf:2}],y={meta:g,__tfidf__terms:j},w=c.a;function x(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)(w,Object(r.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("h2",null,"Frequently asked questions"),Object(s.a)(O,{question:Object(s.a)(i.a.Fragment,null,"The ",Object(s.a)("code",null,"logActivity")," option is enabled, but nothing is logged"),mdxType:"Question"},Object(s.a)("p",null,"Most Vert.x net\xadwork clients or servers have a ",Object(s.a)("inlineCode",{parentName:"p"},"logActivity")," op\xadtion which en\xadables net\xadwork ac\xadtiv\xadity log\xadging.\nWhen ac\xadtive, Netty\u2019s pipeline is con\xadfig\xadured for log\xadging on Netty\u2019s log\xadger, at ",Object(s.a)("inlineCode",{parentName:"p"},"DEBUG")," level"),Object(s.a)("p",null,"This is why switch\xading on the ",Object(s.a)("inlineCode",{parentName:"p"},"logActivity")," op\xadtion is not enough.\nYou also have to set the ",Object(s.a)("inlineCode",{parentName:"p"},"io.netty.handler.logging.LoggingHandler")," log\xadger to ",Object(s.a)("inlineCode",{parentName:"p"},"DEBUG")," level in your log\xadging frame\xadwork con\xadfig\xadu\xadra\xadtion.")),Object(s.a)(O,{question:"When Vert.x is clustered, what happens to event-bus messages if a node crashes?",mdxType:"Question"},Object(s.a)("p",null,"When you send a mes\xadsage on the event-\u200bbus, it is sent to the re\xadcip\xadi\xadent\u2019s node and stored in mem\xadory until it is processed.\nIt is ",Object(s.a)("strong",{parentName:"p"},"not")," per\xadsisted to disk or a data\xadbase."),Object(s.a)("p",null,"Con\xadse\xadquently, if the re\xadcip\xadi\xadent\u2019s node crashes be\xadfore the mes\xadsage is processed, the mes\xadsage is lost."),Object(s.a)("p",null,"If it\u2019s not pos\xadsi\xadble to tol\xader\xadate loss of some mes\xadsages, there are a few op\xadtions in\xadclud\xading:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"idem\xadpo\xadtent retry when send\xading fails with an error"),Object(s.a)("li",{parentName:"ul"},"asyn\xadchro\xadnous ac\xadknowl\xadegde\xadment")),Object(s.a)("p",null,"Oth\xader\xadwise, con\xadsider using a full-\u200bfledged broker-\u200bbased mes\xadsag\xading sys\xadtem like ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"http://activemq.apache.org/"}),"Apache Ac\xadtiveMQ")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.rabbitmq.com/"}),"Rab\xadbitMQ"),"."),Object(s.a)("p",null,"Vert.x has clients for such so\xadlu\xadtions: ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-amqp-client/java/"}),"Vert.x AMQP Client"),", ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-rabbitmq-client/java/"}),"Rab\xadbitMQ Client for Vert.x")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-stomp/java/"}),"Vert.x-\u200bStomp"),".")),Object(s.a)(O,{question:"Why doesn't my event-bus consumer pickup messages sent previously?",mdxType:"Question"},Object(s.a)("p",null,"When you pub\xadlish a mes\xadsage on the event-\u200bbus, it is sent to all nodes hav\xading one or more con\xadsumers reg\xadis\xadtered for the cor\xadre\xadspond\xading mes\xadsage ad\xaddress.\nIt is ",Object(s.a)("strong",{parentName:"p"},"not")," per\xadsisted to disk or a data\xadbase."),Object(s.a)("p",null,"Con\xadse\xadquently, new con\xadsumers on ex\xadist\xading nodes or nodes join\xading the clus\xadter later will ",Object(s.a)("strong",{parentName:"p"},"not")," re\xadceive this mes\xadsage."),Object(s.a)("p",null,"If you need this fea\xadture, con\xadsider using a full-\u200bfledged broker-\u200bbased mes\xadsag\xading sys\xadtem like ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"http://activemq.apache.org/"}),"Apache Ac\xadtiveMQ")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.rabbitmq.com/"}),"Rab\xadbitMQ"),"."),Object(s.a)("p",null,"Vert.x has clients for such so\xadlu\xadtions: ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-amqp-client/java/"}),"Vert.x AMQP Client"),", ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-rabbitmq-client/java/"}),"Rab\xadbitMQ Client for Vert.x")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-stomp/java/"}),"Vert.x-\u200bStomp"),".")),Object(s.a)(O,{question:"How to use the JVM built-in address resolver?",mdxType:"Question"},Object(s.a)("p",null,"By de\xadfault, Vert.x re\xadlies on a non-\u200bblocking ad\xaddress re\xadsolver in\xadstead of the JVM built-\u200bin one.\nFor most users this is trans\xadpar\xadent but the non-\u200bblocking re\xadsolver is less ma\xadture and may not work in some en\xadvi\xadron\xadments."),Object(s.a)("p",null,"In this case, please file an issue on the ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eclipse-vertx/vert.x/issues"}),"Vert.x core repos\xadi\xadtory"),"."),Object(s.a)("p",null,"As a workaround, you can switch the non-\u200bblocking re\xadsolver off and fall\xadback to the JVM built-\u200bin one.\nTo do so, start the JVM with the ",Object(s.a)("inlineCode",{parentName:"p"},"vertx.disableDnsResolver")," sys\xadtem prop\xaderty set to ",Object(s.a)("inlineCode",{parentName:"p"},"true"),":"),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{className:"hljs language-ini"}),Object(s.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-attr"}),"-Dvertx.disableDnsResolver"),"=",Object(s.a)("span",Object(r.a)({parentName:"code"},{className:"hljs-literal"}),"true"),"\n"))))}x.isMDXComponent=!0},"4hdO":function(e,t,n){"use strict";function r(e){document.body.scrollTop=document.documentElement.scrollTop=e}function a(e,t){requestAnimationFrame||r(e);var n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(n!==e){var a=e-n,o=void 0;requestAnimationFrame((function e(i){o||(o=i);var s=i-o,c=Math.min(1,s/t);r(n+a*(c*(2-c))),c<1&&requestAnimationFrame(e)}))}}n.d(t,"a",(function(){return a}))},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,b=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},UMc4:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),s=n("nOHt"),c=n.n(s),l=n("4hdO"),u=n("anbt"),p=n("Cgje"),f=n("naWs"),m=(n("05nU"),a.a.createElement);function b(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.meta,n=void 0===t?{}:t,a=e.narrow,o=e.hashSmoothScroll,s=void 0!==o&&o,d=e.children,h=Object(r.useContext)(u.a.State),v=Object(r.useRef)(),O=Object(r.useCallback)((function(e,t){var n=e.substring(e.indexOf("#")+1),r=document.getElementById(n);if(r){var a=r.offsetTop-h.height;Object(l.a)(a,t?200:500)}}),[h.height]),g=Object(r.useCallback)((function(e){O(e.newURL)}),[O]),j=Object(r.useCallback)((function(e){var t,n=b(e.current.querySelectorAll("a[href^='#']"));try{var r=function(){var e=t.value;e.onclick=function(t){t.preventDefault();var n=window.location.href;n.substring(n.indexOf("#"))!==e.getAttribute("href")?c.a.push(window.location.pathname+e.getAttribute("href")):O(n)}};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}}),[O]);return Object(r.useEffect)((function(){return s&&(c.a.events.on("hashChangeStart",O),window.addEventListener("hashchange",g),j(v),O(window.location.href,!0)),function(){s&&(window.removeEventListener("hashchange",g),c.a.events.off("hashChangeStart",O))}}),[g,O,j,s]),m("main",{className:"page"},m(p.a,{title:n.title}),m("div",{className:"page-content"},m("div",{className:i()("container",{"container-narrow":a}),ref:v},d)),m(f.a,null))}},ijRy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("3ouP")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["ijRy",0,2,1,4,3]]]);