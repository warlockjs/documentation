"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1682],{6441:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const c={sidebar_position:12},n="Cache Utilities",a={id:"warlock/cache/utils",title:"Cache Utilities",description:"This section covers the utilities provided for cache drivers.",source:"@site/docs/warlock/cache/utils.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/utils",permalink:"/docs/warlock/cache/utils",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"warlock",previous:{title:"Make Your Own Cache Driver",permalink:"/docs/warlock/cache/make-your-own-cache-driver"},next:{title:"Image",permalink:"/docs/category/image"}},o={},l=[{value:"Parse Cache Key",id:"parse-cache-key",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"cache-utilities",children:"Cache Utilities"}),"\n",(0,i.jsx)(r.p,{children:"This section covers the utilities provided for cache drivers."}),"\n",(0,i.jsx)(r.h2,{id:"parse-cache-key",children:"Parse Cache Key"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"parseCacheKey"})," function parses a cache key either it is a string or an object then sanitizes it from any invalid characters and return a ",(0,i.jsx)(r.code,{children:"dot.notation"})," syntax."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:'import { parseCacheKey } from "@warlock.js/core";\r\n\r\nconsole.log(parseCacheKey("users:1")); // users.1\n'})}),"\n",(0,i.jsx)(r.p,{children:"Also if it is an object, it will flat map it like this:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:"import { parseCacheKey } from \"@warlock.js/core\";\r\n\r\nconst filter = {\r\n    limit: 3,\r\n    page: 1,\r\n    search: 'John',\r\n};\r\n\r\nconsole.log(parseCacheKey(filter)); // limit.3.page.1.search.John\n"})}),"\n",(0,i.jsxs)(r.p,{children:["This will be extremely useful when caching the database queries that are called based on current request filters which is implemented in ",(0,i.jsx)(r.a,{href:"./../repositories/caching",children:"Repository Cache"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>a});var i=t(6540);const s={},c=i.createContext(s);function n(e){const r=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(c.Provider,{value:r},e.children)}}}]);