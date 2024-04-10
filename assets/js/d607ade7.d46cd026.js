"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[8556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:7},a="Memory Cache Driver",l={unversionedId:"warlock/cache/memory",id:"warlock/cache/memory",title:"Memory Cache Driver",description:"The memory cache driver stores data in memory, it will be persisted until the application is restarted.",source:"@site/docs/warlock/cache/memory.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/memory",permalink:"/documentation/docs/warlock/cache/memory",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"warlock",previous:{title:"Redis Cache Driver",permalink:"/documentation/docs/warlock/cache/redis"},next:{title:"File Cache Driver",permalink:"/documentation/docs/warlock/cache/file"}},c={},s=[{value:"Driver name",id:"driver-name",level:2},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"memory-cache-driver"},"Memory Cache Driver"),(0,i.kt)("p",null,"The memory cache driver stores data in memory, it will be persisted until the application is restarted."),(0,i.kt)("h2",{id:"driver-name"},"Driver name"),(0,i.kt)("p",null,"The default name for the driver is ",(0,i.kt)("inlineCode",{parentName:"p"},"memory"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The memory cache driver has the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globalPrefix"),": A prefix that will be added to all keys. This is useful when you want to use the same cache driver for multiple applications, it could be a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," or a callback that returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", if not provided then there will no be prefix for the keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ttl"),": Time to live in seconds, the default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity"),".")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the memory cache driver, you need to define it in the drivers list in the cache configurations file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/config/cache.ts"',title:'"src/config/cache.ts"'},'import { env } from "@mongez/dotenv";\nimport {\n  CacheConfigurations,\n  MemoryCacheDriver,\n  requestContext,\n} from "@mongez/warlock";\n\nconst cacheConfigurations: CacheConfigurations = {\n  drivers: {\n    memory: MemoryCacheDriver,\n  },\n  default: env("CACHE_DRIVER", "memory"),\n  options: {\n    memory: {\n      globalPrefix: "online-store",\n      ttl: 60 * 60 * 24, // 24 hours\n    },\n  },\n};\n\nexport default cacheConfigurations;\n')),(0,i.kt)("p",null,"This will allow the cache manager to pick it if there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"CACHE_DRIVER")," environment variable defined."),(0,i.kt)("p",null,"We set the global prefix to ",(0,i.kt)("inlineCode",{parentName:"p"},"online-store"),", this will be added to all keys. This is useful when you want to use the same cache driver for multiple applications, it could be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or a callback that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", if not provided then there will no be prefix for the keys."),(0,i.kt)("p",null,"All cache keys will remain for 24 hours, after that they will be removed."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please note that the Memory Cache Drier implements all methods in ",(0,i.kt)("a",{parentName:"p",href:"./cache-driver-interface"},"Cache Driver Interface")," so you can use it directly as a cache driver.")))}u.isMDXComponent=!0}}]);