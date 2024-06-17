"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[1682],{7896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(4848),c=t(5680);const i={sidebar_position:12},a="Cache Utilities",s={id:"warlock/cache/utils",title:"Cache Utilities",description:"This section covers the utilities provided for cache drivers.",source:"@site/docs/warlock/cache/utils.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/utils",permalink:"/docs/warlock/cache/utils",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"warlock",previous:{title:"Make Your Own Cache Driver",permalink:"/docs/warlock/cache/make-your-own-cache-driver"},next:{title:"Image",permalink:"/docs/category/image"}},o={},l=[{value:"Parse Cache Key",id:"parse-cache-key",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"cache-utilities",children:"Cache Utilities"}),"\n",(0,n.jsx)(r.p,{children:"This section covers the utilities provided for cache drivers."}),"\n",(0,n.jsx)(r.h2,{id:"parse-cache-key",children:"Parse Cache Key"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"parseCacheKey"})," function parses a cache key either it is a string or an object then sanitizes it from any invalid characters and return a ",(0,n.jsx)(r.code,{children:"dot.notation"})," syntax."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:'import { parseCacheKey } from "@warlock.js/core";\r\n\r\nconsole.log(parseCacheKey("users:1")); // users.1\n'})}),"\n",(0,n.jsx)(r.p,{children:"Also if it is an object, it will flat map it like this:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:"import { parseCacheKey } from \"@warlock.js/core\";\r\n\r\nconst filter = {\r\n    limit: 3,\r\n    page: 1,\r\n    search: 'John',\r\n};\r\n\r\nconsole.log(parseCacheKey(filter)); // limit.3.page.1.search.John\n"})}),"\n",(0,n.jsxs)(r.p,{children:["This will be extremely useful when caching the database queries that are called based on current request filters which is implemented in ",(0,n.jsx)(r.a,{href:"./../repositories/caching",children:"Repository Cache"})]})]})}function h(e={}){const{wrapper:r}={...(0,c.RP)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5680:(e,r,t)=>{t.d(r,{RP:()=>l});var n=t(6540);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=c,f=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return t?n.createElement(f,a(a({ref:r},h),{},{components:t})):n.createElement(f,a({ref:r},h))}));h.displayName="MDXCreateElement"}}]);