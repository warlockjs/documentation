"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[3858],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},h=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?n.createElement(d,o(o({ref:a},h),{},{components:t})):n.createElement(d,o({ref:a},h))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},o="Cache Manager",c={unversionedId:"warlock/cache/cache-manager",id:"warlock/cache/cache-manager",title:"Cache Manager",description:"This is the core of the entire cache ecosystem. It is responsible for managing the cache drivers, and the cache configurations.",source:"@site/docs/warlock/cache/cache-manager.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/cache-manager",permalink:"/docs/warlock/cache/cache-manager",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"warlock",previous:{title:"Cache Configurations",permalink:"/docs/warlock/cache/configurations"},next:{title:"Cache Driver Interface",permalink:"/docs/warlock/cache/cache-driver-interface"}},l={},s=[{value:"Setting Configurations",id:"setting-configurations",level:2},{value:"Initializing the cache manager",id:"initializing-the-cache-manager",level:2},{value:"Cache Manager is a Cache Driver",id:"cache-manager-is-a-cache-driver",level:2},{value:"Get current driver",id:"get-current-driver",level:2},{value:"Set default driver",id:"set-default-driver",level:2},{value:"Get driver",id:"get-driver",level:2},{value:"Global prefix",id:"global-prefix",level:2},{value:"Setting a value in the cache",id:"setting-a-value-in-the-cache",level:2},{value:"Getting a value from the cache",id:"getting-a-value-from-the-cache",level:2},{value:"Removing a value from the cache",id:"removing-a-value-from-the-cache",level:2},{value:"Removing all values from the cache",id:"removing-all-values-from-the-cache",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Removing all values from a namespace",id:"removing-all-values-from-a-namespace",level:3}],h={toc:s},p="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cache-manager"},"Cache Manager"),(0,r.kt)("p",null,"This is the core of the entire cache ecosystem. It is responsible for managing the cache drivers, and the cache configurations."),(0,r.kt)("p",null,"You can access the cache manager by importing ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," from warlock."),(0,r.kt)("h2",{id:"setting-configurations"},"Setting Configurations"),(0,r.kt)("p",null,"After you define ",(0,r.kt)("a",{parentName:"p",href:"./configurations"},"Cache Configurations"),", you can set them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setConfigurations")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/config/cache.ts"',title:'"src/config/cache.ts"'},'import { CacheConfigurations } from "@warlock.js/core";\nconst cacheConfigurations: CacheConfigurations = {\n  //...\n};\n\nexport default cacheConfigurations;\n')),(0,r.kt)("p",null,"The configuration will be automatically loaded when the cache manager is initialized."),(0,r.kt)("h2",{id:"initializing-the-cache-manager"},"Initializing the cache manager"),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"Warlock")," initializes the cache manager to start connecting to the default driver when the ",(0,r.kt)("inlineCode",{parentName:"p"},"http server")," is about to start so you don't really need to take any action in this regard."),(0,r.kt)("h2",{id:"cache-manager-is-a-cache-driver"},"Cache Manager is a Cache Driver"),(0,r.kt)("p",null,"All methods that are available on ",(0,r.kt)("a",{parentName:"p",href:"./cache-driver-interface"},"Cache Driver")," are available on the cache manager so you will be able to use the cache manager as a cache driver."),(0,r.kt)("h2",{id:"get-current-driver"},"Get current driver"),(0,r.kt)("p",null,"If you want to directly access the current cache driver from the cache manager, use ",(0,r.kt)("inlineCode",{parentName:"p"},"currentDriver")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\nconst currentDriver = cache.currentDriver;\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If there is no current driver, then the cache manager will use the ",(0,r.kt)("a",{parentName:"p",href:"./null"},"NullCacheDriver")," instead.")),(0,r.kt)("h2",{id:"set-default-driver"},"Set default driver"),(0,r.kt)("p",null,"To change the default driver, use ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," method, this method accepts the driver name Defined in ",(0,r.kt)("a",{parentName:"p",href:"./configurations#drivers"}," Cache drivers list")," or pass the driver object directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\ncache.use("redis");\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," method is a ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," method, as if the driver was not loaded before, the cache manager will load it first before using it so make sure to use ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," keyword when calling this method.")),(0,r.kt)("h2",{id:"get-driver"},"Get driver"),(0,r.kt)("p",null,"To get another cache driver (but not set it as a default driver) use ",(0,r.kt)("inlineCode",{parentName:"p"},"driver")," method, it accepts the driver name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.ts"',title:'"src/main.ts"'},'import { cache } from "@warlock.js/core";\n\nasync function main() {\n  const redisDriver = await cache.driver("redis");\n\n  const memoryDriver = await cache.driver("memory");\n}\n\nmain();\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the driver is not loaded before, the cache manager will load it first before returning it.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If the given driver name is listed in ",(0,r.kt)("a",{parentName:"p",href:"./configurations#drivers"}," Cache drivers list"),", it will throw an error.")),(0,r.kt)("h2",{id:"global-prefix"},"Global prefix"),(0,r.kt)("p",null,"Global prefix option is implemented in all built-in drivers, it highly recommended to use it as a way to avoid key conflicts especially if you're using a common cache driver like redis."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Consider a global prefix as a database name in a database server, it is used to separate the keys from each other.")),(0,r.kt)("h2",{id:"setting-a-value-in-the-cache"},"Setting a value in the cache"),(0,r.kt)("p",null,"To set a value in the cache, use ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," method, this method accepts three parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first one is the key that will be used to store the value in the cache."),(0,r.kt)("li",{parentName:"ul"},"The second one is the value that will be stored in the cache."),(0,r.kt)("li",{parentName:"ul"},"The third one is the number of seconds that the value will be stored in the cache.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nawait cache.set("key", "value", 60 * 60 * 24);\n')),(0,r.kt)("p",null,"The value can be any type of value either a string, number, boolean, or even an object or an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nawait cache.set("key", { name: "John Doe" }, 60 * 60 * 24);\n')),(0,r.kt)("p",null,"The key could be a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or an object, if it is an object, it will be converted to a string using ",(0,r.kt)("a",{parentName:"p",href:"./utils#parse-cache-key"},"Parse Cache Key utility"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nawait cache.set({ id: 1 }, { name: "John Doe" }, 60 * 60 * 24);\n')),(0,r.kt)("p",null,"This will result a key like this : ",(0,r.kt)("inlineCode",{parentName:"p"},"id.1"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the global prefix is set, then it will be prefixed with the global prefix.")),(0,r.kt)("p",null,"If the third parameter is not set ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," then the driver will try to capture it from the driver options, if not found then the value will be stored in the cache forever."),(0,r.kt)("h2",{id:"getting-a-value-from-the-cache"},"Getting a value from the cache"),(0,r.kt)("p",null,"To get a value from the cache, use ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method, this method accepts one parameter which is the key that will be used to get the value from the cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nconst value = await cache.get("key");\n')),(0,r.kt)("p",null,"It can also accept an object as a key, it will be converted to a string using ",(0,r.kt)("a",{parentName:"p",href:"./utils#parse-cache-key"},"Parse Cache Key utility"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nconst value = await cache.get({ id: 1 }); // this will be converted to id.1\n')),(0,r.kt)("p",null,"If the key does not exists a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value will be returned."),(0,r.kt)("h2",{id:"removing-a-value-from-the-cache"},"Removing a value from the cache"),(0,r.kt)("p",null,"To remove a value from the cache, use ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," method, this method accepts one parameter which is the key that will be used to remove the value from the cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nawait cache.remove("key");\n')),(0,r.kt)("p",null,"It can also accept an object as a key, it will be converted to a string using ",(0,r.kt)("a",{parentName:"p",href:"./utils#parse-cache-key"},"Parse Cache Key utility"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nawait cache.remove({ id: 1 }); // this will be converted to id.1\n')),(0,r.kt)("h2",{id:"removing-all-values-from-the-cache"},"Removing all values from the cache"),(0,r.kt)("p",null,"To clear the entire cache, use ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// somewhere in the project\nawait cache.flush();\n')),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"Another good approach that is powered by ",(0,r.kt)("inlineCode",{parentName:"p"},"Warlock Cache")," is namespaces, it allows you easily to categorize all the cached data by a namespace."),(0,r.kt)("p",null,"A namespace is a string that is suffixed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"dot")," then the key, for example, if we have a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),", then the key ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," will be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"users.1"),"."),(0,r.kt)("h3",{id:"removing-all-values-from-a-namespace"},"Removing all values from a namespace"),(0,r.kt)("p",null,"To clear the entire cache for a namespace, use ",(0,r.kt)("inlineCode",{parentName:"p"},"removeNamespace")," method, this method accepts one parameter which is the namespace that will be used to remove the values from the cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { cache } from "@warlock.js/core";\n\n// store a value in the cache\nawait cache.set("users.1", {\n  id: 1,\n  name: "John Doe",\n});\n\nawait cache.set("users.list", [\n  {\n    id: 1,\n    name: "John Doe",\n  },\n  {\n    id: 2,\n    name: "Jane Doe",\n  },\n]);\n\n// somewhere in the project\nawait cache.removeNamespace("users");\n')),(0,r.kt)("p",null,"This will clear out all the values that are stored under the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," namespace."))}m.isMDXComponent=!0}}]);