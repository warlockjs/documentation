"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,f=l["".concat(d,".").concat(m)]||l[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Introduction",c={unversionedId:"monpulse/advanced/introduction",id:"monpulse/advanced/introduction",title:"Introduction",description:"Let's dive deep into more advanced concepts of the package that would make you understand the package more.",source:"@site/docs/monpulse/advanced/introduction.mdx",sourceDirName:"monpulse/advanced",slug:"/monpulse/advanced/introduction",permalink:"/docs/monpulse/advanced/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mongodb",previous:{title:"Advanced",permalink:"/docs/category/advanced-1"},next:{title:"Auto Increment",permalink:"/docs/monpulse/advanced/auto-increment"}},d={},u=[{value:"Auto Increment",id:"auto-increment",level:2},{value:"Master Mind",id:"master-mind",level:2}],s={toc:u},l="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Let's dive deep into more advanced concepts of the package that would make you understand the package more."),(0,o.kt)("h2",{id:"auto-increment"},"Auto Increment"),(0,o.kt)("p",null,"By default Mongodb has its own ",(0,o.kt)("inlineCode",{parentName:"p"},"_id"),", but mostly we want a numeric ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," instead of the default ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," that mongodb provides, this is where the ",(0,o.kt)("inlineCode",{parentName:"p"},"autoIncrement")," comes in handy."),(0,o.kt)("p",null,"See how it works in this package in ",(0,o.kt)("a",{parentName:"p",href:"./auto-increment"},"Auto Increment")," section."),(0,o.kt)("h2",{id:"master-mind"},"Master Mind"),(0,o.kt)("p",null,"Master mind is helper class that is used exclusively to manage the id in the models, have a look at ",(0,o.kt)("a",{parentName:"p",href:"./master-mind"},"Master Mind")," section to learn more about it."))}p.isMDXComponent=!0}}]);