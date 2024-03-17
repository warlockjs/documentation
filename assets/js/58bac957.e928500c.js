"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[6523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),g=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=g(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Introduction",l={unversionedId:"warlock/logger/introduction",id:"warlock/logger/introduction",title:"Introduction",description:"Logging is essential for any application, it helps you to track the application behavior and to debug issues.",source:"@site/docs/warlock/logger/introduction.mdx",sourceDirName:"warlock/logger",slug:"/warlock/logger/introduction",permalink:"/mongez/docs/warlock/logger/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"warlock",previous:{title:"Log",permalink:"/mongez/docs/category/log"},next:{title:"Logging Configurations",permalink:"/mongez/docs/warlock/logger/configurations"}},c={},g=[{value:"Configuring the logger",id:"configuring-the-logger",level:2},{value:"Enable logging",id:"enable-logging",level:2}],s={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Logging is essential for any application, it helps you to track the application behavior and to debug issues."),(0,o.kt)("p",null,"Warlock is shipped with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hassanzohdy/logger"},"Mongez Logger")," a powerful logger package that provides a simple way to log messages."),(0,o.kt)("h2",{id:"configuring-the-logger"},"Configuring the logger"),(0,o.kt)("p",null,"The idea is simple, just use your desired channel and set the configurations for it."),(0,o.kt)("p",null,"For configurations, please check the ",(0,o.kt)("a",{parentName:"p",href:"./configurations"},"configurations section"),"."),(0,o.kt)("h2",{id:"enable-logging"},"Enable logging"),(0,o.kt)("p",null,"By default logging is enabled in the application, you can control this behavior by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property in the logger configurations."))}u.isMDXComponent=!0}}]);