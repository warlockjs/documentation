"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7331],{585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(4848),o=t(5680);const i={sidebar_position:3},s="Model Blueprint",l={id:"cascade/indexing/model-blueprint",title:"Model Blueprint",description:"Model Blueprint is an extended class of Blueprint that allows you to create indexes on your models.",source:"@site/docs/cascade/indexing/model-blueprint.mdx",sourceDirName:"cascade/indexing",slug:"/cascade/indexing/model-blueprint",permalink:"/docs/cascade/indexing/model-blueprint",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mongodb",previous:{title:"Blueprint",permalink:"/docs/cascade/indexing/blueprint"},next:{title:"Relationships",permalink:"/docs/category/relationships"}},a={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"model-blueprint",children:"Model Blueprint"}),"\n",(0,r.jsxs)(n.p,{children:["Model Blueprint is an extended class of ",(0,r.jsx)(n.a,{href:"./blueprint",children:"Blueprint"})," that allows you to create indexes on your models."]}),"\n",(0,r.jsx)(n.p,{children:"Any model has by default its own blueprint, so you can use it to create indexes on your models."}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["To get a blueprint for a model, use the static ",(0,r.jsx)(n.code,{children:"blueprint"})," method from the model class."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { User } from "./models/user.ts";\r\n\r\nconst userBlueprint = User.blueprint();\n'})}),"\n",(0,r.jsxs)(n.p,{children:["From this point, all methods located in the ",(0,r.jsx)(n.a,{href:"./blueprint",children:"Blueprint Class"})," are available to use."]})]})}function u(e={}){const{wrapper:n}={...(0,o.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5680:(e,n,t)=>{t.d(n,{RP:()=>c});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));u.displayName="MDXCreateElement"}}]);