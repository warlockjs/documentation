"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[6672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Introduction",c={unversionedId:"warlock/cache/introduction",id:"warlock/cache/introduction",title:"Introduction",description:"Cache is a very important part of any application. It is used to store data that is frequently accessed by the application. This data is stored in memory and is retrieved from the cache instead of the database. This improves the performance of the application.",source:"@site/docs/warlock/cache/introduction.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/introduction",permalink:"/documentation/docs/warlock/cache/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"warlock",previous:{title:"Cache",permalink:"/documentation/docs/category/cache"},next:{title:"Cache Configurations",permalink:"/documentation/docs/warlock/cache/configurations"}},l={},s=[{value:"Cache Manager",id:"cache-manager",level:2},{value:"Cache Drivers",id:"cache-drivers",level:2}],p={toc:s},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Cache is a very important part of any application. It is used to store data that is frequently accessed by the application. This data is stored in memory and is retrieved from the cache instead of the database. This improves the performance of the application."),(0,n.kt)("h2",{id:"cache-manager"},"Cache Manager"),(0,n.kt)("p",null,"Warlock provides a high level with single API to interact with the cache. The ",(0,n.kt)("a",{parentName:"p",href:"./cache-manager"},"CacheManager")," object, it wraps any ",(0,n.kt)("a",{parentName:"p",href:"#cache-drivers"},"cache driver")," and provides a set of methods that you can use to interact with the cache."),(0,n.kt)("h2",{id:"cache-drivers"},"Cache Drivers"),(0,n.kt)("p",null,"Warlock is shipped with the following drivers for caching process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./redis"},"Redis Cache Driver")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./file"},"File Cache Driver")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./memory"},"Memory Cache Driver")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./null"},"Null Cache Driver"))))}h.isMDXComponent=!0}}]);