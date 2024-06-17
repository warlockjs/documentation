"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4483],{8519:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const c={sidebar_position:5},n="Base Cache Driver",o={id:"warlock/cache/base-cache-driver",title:"Base Cache Driver",description:"The base cache driver is an abstract class that all built-in cache drivers are derived from. It defines the common methods and properties to reduce the amount of code duplication.",source:"@site/docs/warlock/cache/base-cache-driver.mdx",sourceDirName:"warlock/cache",slug:"/warlock/cache/base-cache-driver",permalink:"/docs/warlock/cache/base-cache-driver",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"warlock",previous:{title:"Cache Driver Interface",permalink:"/docs/warlock/cache/cache-driver-interface"},next:{title:"Redis Cache Driver",permalink:"/docs/warlock/cache/redis"}},a={},d=[{value:"Required properties",id:"required-properties",level:2},{value:"Implemented methods",id:"implemented-methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"base-cache-driver",children:"Base Cache Driver"}),"\n",(0,i.jsx)(r.p,{children:"The base cache driver is an abstract class that all built-in cache drivers are derived from. It defines the common methods and properties to reduce the amount of code duplication."}),"\n",(0,i.jsx)(r.h2,{id:"required-properties",children:"Required properties"}),"\n",(0,i.jsxs)(r.p,{children:["The Base Cache Driver implements ",(0,i.jsx)(r.a,{href:"./cache-driver-interface",children:"CacheDriverInterface"})," and requires only one property to be defined the ",(0,i.jsx)(r.code,{children:"name"})," property, this property is used to identify the cache driver name that will be used for logging purposes."]}),"\n",(0,i.jsx)(r.h2,{id:"implemented-methods",children:"Implemented methods"}),"\n",(0,i.jsx)(r.p,{children:"It implements the following methods:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"setOptions"}),": This method is used to set the cache driver options."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"parseKey"}),": This method is used to parse the cache key."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"log"}),": This method is used to log messages to the logger."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Our base driver will call ",(0,i.jsx)(r.a,{href:"./utils#parse-cache-key",children:"Prase Cache Key utility"})," when implementing the ",(0,i.jsx)(r.code,{children:"parseKey"})," method."]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>o});var i=t(6540);const s={},c=i.createContext(s);function n(e){const r=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(c.Provider,{value:r},e.children)}}}]);