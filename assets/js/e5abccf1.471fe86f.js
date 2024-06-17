"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9129],{3607:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(4848),r=i(8453);const t={sidebar_position:6},c="Redis Cache Driver",o={id:"warlock/cache/redis",title:"Redis Cache Driver",description:"Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.",source:"@site/docs/warlock/cache/redis.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/redis",permalink:"/docs/warlock/cache/redis",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"warlock",previous:{title:"Base Cache Driver",permalink:"/docs/warlock/cache/base-cache-driver"},next:{title:"Memory Cache Driver",permalink:"/docs/warlock/cache/memory"}},d={},a=[{value:"Setup",id:"setup",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Options",id:"options",level:2},{value:"Accessing the Redis Client",id:"accessing-the-redis-client",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"redis-cache-driver",children:"Redis Cache Driver"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["By default ",(0,s.jsx)(n.code,{children:"Redis"})," is shipped with ",(0,s.jsx)(n.code,{children:"Warlock"})," so you don't need to install any dependencies."]}),"\n",(0,s.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.a,{href:"./configurations",children:"Cache Configurations"})," file, and add the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/config/cache.ts"',children:'import { env } from "@mongez/dotenv";\r\nimport { CacheConfigurations, RedisCacheDriver } from "@warlock.js/core";\r\n\r\nconst cacheConfigurations: CacheConfigurations = {\r\n  drivers: {\r\n    redis: RedisCacheDriver,\r\n  },\r\n  default: env("CACHE_DRIVER", "redis"),\r\n  options: {\r\n    redis: {\r\n      host: env("REDIS_HOST"),\r\n      port: env("REDIS_PORT"),\r\n      username: env("REDIS_USERNAME"),\r\n      password: env("REDIS_PASSWORD"),\r\n    },\r\n  },\r\n};\r\n\r\nexport default cacheConfigurations;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Make sure Redis is installed on your local machine and on the server otherwise it will throw an error."})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"host"}),": Redis host, the default value is ",(0,s.jsx)(n.code,{children:"localhost"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"port"}),": Redis port, the default value is ",(0,s.jsx)(n.code,{children:"6379"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"}),": If you're using a remote Redis server, you can pass the URL directly, this will override the ",(0,s.jsx)(n.code,{children:"host"})," and ",(0,s.jsx)(n.code,{children:"port"})," options."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"username"}),": Redis username, the default value is ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"password"}),": Redis password, the default value is ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"globalPrefix"}),": A prefix that will be added to all keys. This is useful when you want to use the same cache driver for multiple applications, it could be a ",(0,s.jsx)(n.code,{children:"string"})," or a callback that returns a ",(0,s.jsx)(n.code,{children:"string"}),", if not provided then there will no be prefix for the keys."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clientOptions"}),": Any additional options that will be passed to the ",(0,s.jsx)(n.a,{href:"https://github.com/redis/node-redis/blob/a8b81bdd01329252466eb1dd608b2a92b960c3ae/docs/client-configuration.md",children:"Redis Configurations"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-the-redis-client",children:"Accessing the Redis Client"}),"\n",(0,s.jsxs)(n.p,{children:["To access the Redis client, use the ",(0,s.jsx)(n.code,{children:"client"})," property on the cache manager or the cache driver."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { cache } from "@warlock.js/core";\r\n\r\n// assuming the default driver is redis\r\nconst redisClient = cache.client;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Please note that the Redis Cache Drier implements all methods in ",(0,s.jsx)(n.a,{href:"./cache-driver-interface",children:"Cache Driver Interface"})," so you can use it directly as a cache driver."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);