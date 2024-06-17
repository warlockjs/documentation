"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5430],{9376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(4848),i=r(5680);const s={sidebar_position:3},o="Auth configurations",a={id:"warlock/auth/configurations",title:"Auth configurations",description:"Auth configurations are basically related to current user either it is a logged in user or a guest user, warlock embraces the concept of guest users, so it is important to define the guest user configurations.",source:"@site/docs/warlock/auth/configurations.mdx",sourceDirName:"warlock/auth",slug:"/warlock/auth/configurations",permalink:"/docs/warlock/auth/configurations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"warlock",previous:{title:"Auth Middleware",permalink:"/docs/warlock/auth/auth-middleware"},next:{title:"Auth Model",permalink:"/docs/warlock/auth/auth-model"}},c={},u=[{value:"User Types",id:"user-types",level:3},{value:"JWT Configurations",id:"jwt-configurations",level:2},{value:"Secret Key",id:"secret-key",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"auth-configurations",children:"Auth configurations"}),"\n",(0,n.jsx)(t.p,{children:"Auth configurations are basically related to current user either it is a logged in user or a guest user, warlock embraces the concept of guest users, so it is important to define the guest user configurations."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"userType"}),": The user type model, it's used to identify the current user type, it's required when using ",(0,n.jsx)(t.a,{href:"./../auth/auth-middleware",children:"Auth Middleware"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jwt.secret"}),": JWT Secret key to sign and verify the JWT token."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"user-types",children:"User Types"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"./../auth/auth-middleware",children:"Auth Middleware"})," requires a user type that should be defined inside the ",(0,n.jsx)(t.code,{children:"auth.userType"})," configurations, so it can identifies the current model to work with it."]}),"\n",(0,n.jsxs)(t.p,{children:["For default installation, there are two user types: ",(0,n.jsx)(t.code,{children:"User"})," and ",(0,n.jsx)(t.code,{children:"Guest"})," models, but you can add more user types, and you can define the default user type."]}),"\n",(0,n.jsxs)(t.p,{children:["Each key inside the ",(0,n.jsx)(t.code,{children:"auth.userType"})," represents the user type name, and the value represents the user type model."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Each user type MUST extend ",(0,n.jsx)(t.a,{href:"./../auth/auth-model",children:"Auth model"})," because it generates and stores the JWT token"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/config/auth.ts"',children:'import { AuthConfigurations, Guest } from "@warlock.js/core";\r\nimport { User } from "app/users/models/user";\r\n\r\nconst authConfigurations: AuthConfigurations = {\r\n  userType: {\r\n    guest: Guest,\r\n    user: User,\r\n  },\r\n  jwt: {\r\n    secret: "secret",\r\n  },\r\n};\r\n\r\nexport default authConfigurations;\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Guest is a simple model that extends the ",(0,n.jsx)(t.a,{href:"./../auth/auth-model",children:"Auth model"})," and it's used to identify the guest user."]}),"\n",(0,n.jsx)(t.h2,{id:"jwt-configurations",children:"JWT Configurations"}),"\n",(0,n.jsxs)(t.p,{children:["Any options supported by ",(0,n.jsx)(t.a,{href:"https://github.com/fastify/fastify-jwt",children:"Fastify JWT"})," can be passed to the ",(0,n.jsx)(t.code,{children:"jwt"})," object."]}),"\n",(0,n.jsx)(t.h3,{id:"secret-key",children:"Secret Key"}),"\n",(0,n.jsxs)(t.p,{children:["The jwt secret key is generated automatically inside the ",(0,n.jsx)(t.code,{children:".env"})," file, so make sure to change it in the production environment."]}),"\n",(0,n.jsxs)(t.p,{children:["Secret key can be primitive (string) or can be an object contains ",(0,n.jsx)(t.code,{children:"public"})," and ",(0,n.jsx)(t.code,{children:"private"})," keys, it's used to sign and verify the JWT token."]}),"\n",(0,n.jsx)(t.p,{children:"This is the only required option for JWT configurations."}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"https://github.com/fastify/fastify-jwt#secret-required",children:"JWT Documentation"})," for more information."]})]})}function l(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>u});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=u(r),p=i,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));l.displayName="MDXCreateElement"}}]);