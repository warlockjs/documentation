"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Cache Configurations",c={unversionedId:"warlock/cache/configurations",id:"warlock/cache/configurations",title:"Cache Configurations",description:"Cache configurations are used to define the cache drivers, and the default driver and each driver's options.",source:"@site/docs/warlock/cache/configurations.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/configurations",permalink:"/mongez/docs/warlock/cache/configurations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"warlock",previous:{title:"Introduction",permalink:"/mongez/docs/warlock/cache/introduction"},next:{title:"Cache Manager",permalink:"/mongez/docs/warlock/cache/cache-manager"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Default Driver",id:"default-driver",level:2},{value:"Drivers",id:"drivers",level:2},{value:"Options",id:"options",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cache-configurations"},"Cache Configurations"),(0,i.kt)("p",null,"Cache configurations are used to define the cache drivers, and the default driver and each driver's options."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/config")," directory, make sure to create ",(0,i.kt)("inlineCode",{parentName:"p"},"cache.ts")," file if not created already."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/config/cache.ts"',title:'"src/config/cache.ts"'},'import { env } from "@mongez/dotenv";\nimport { CacheConfigurations, RedisCacheDriver } from "@mongez/warlock";\n\nconst cacheConfigurations: CacheConfigurations = {\n  drivers: {\n    redis: RedisCacheDriver,\n  },\n  default: env("CACHE_DRIVER", "redis"),\n  options: {\n    redis: {\n      host: env("REDIS_HOST"),\n      port: env("REDIS_PORT"),\n      password: env("REDIS_PASSWORD"),\n    },\n  },\n};\n\nexport default cacheConfigurations;\n')),(0,i.kt)("h2",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"The cache configurations object has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default"),": This is the default driver that will be used if no driver is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drivers"),": This is an object that holds the cache drivers, the key is the driver name, and the value is the driver class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": This is an object that holds the options for each driver, the key is the driver name, and the value is the driver options.")),(0,i.kt)("h2",{id:"default-driver"},"Default Driver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," property is used to define the default driver that will be called on application boot."),(0,i.kt)("p",null,"It should be a driver name that is named under the ",(0,i.kt)("inlineCode",{parentName:"p"},"drivers")," property."),(0,i.kt)("p",null,"For example, we can set the default cache driver to ",(0,i.kt)("inlineCode",{parentName:"p"},"redis")," which is declared under the ",(0,i.kt)("inlineCode",{parentName:"p"},"drivers")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/config/cache.ts"',title:'"src/config/cache.ts"'},'import { env } from "@mongez/dotenv";\nimport { CacheConfigurations, RedisCacheDriver } from "@mongez/warlock";\n\nconst cacheConfigurations: CacheConfigurations = {\n  drivers: {\n    redis: RedisCacheDriver,\n  },\n  default: env("CACHE_DRIVER", "redis"),\n  options: {\n    redis: {\n      host: env("REDIS_HOST"),\n      port: env("REDIS_PORT"),\n      password: env("REDIS_PASSWORD"),\n    },\n  },\n};\n\nexport default cacheConfigurations;\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If no default driver is defined, then the cache manager will use the ",(0,i.kt)("a",{parentName:"p",href:"./null"},"NullCacheDriver")," instead.")),(0,i.kt)("h2",{id:"drivers"},"Drivers"),(0,i.kt)("p",null,"This is where we define all drivers that might be used in the application, usually, we define only the default driver, but based on the application needs, we might need to define more than one driver."),(0,i.kt)("p",null,"the ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," property is an object that holds the cache drivers, the key is the driver name, and the value is the driver class."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please note we define the driver class, not an instance of the driver as it is lazy instantiated by the cache manager.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please check ",(0,i.kt)("a",{parentName:"p",href:"./introduction#cache-drivers"},"All Available Drivers")," to know more about the available drivers.")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," property, we define the options for each driver, the key is the driver name, and the value is the driver options that will be used when the cache driver is loaded."))}u.isMDXComponent=!0}}]);