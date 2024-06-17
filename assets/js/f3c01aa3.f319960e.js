"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[2630],{8887:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(4848),o=t(5680);const i={sidebar_position:21},a="Number",c={id:"warlock/validation/rules/number",title:"Number",description:"Check if the input value is a number either an integer or a float.",source:"@site/docs/warlock/validation/rules/number.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/number",permalink:"/docs/warlock/validation/rules/number",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"warlock",previous:{title:"Missing If",permalink:"/docs/warlock/validation/rules/missing-if"},next:{title:"Object",permalink:"/docs/warlock/validation/rules/object"}},l={},s=[{value:"Example",id:"example",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"number",children:"Number"}),"\n",(0,n.jsx)(r.p,{children:"Check if the input value is a number either an integer or a float."}),"\n",(0,n.jsxs)(r.p,{children:["The validation rule ",(0,n.jsx)(r.strong,{children:"requires a value"})," to run."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/products/controllers/create-product.ts"',children:'// ...\r\ncreateProduct.validation = {\r\n  rules: {\r\n    price: ["required", "number"],\r\n  },\r\n};\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.RP)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5680:(e,r,t)=>{t.d(r,{RP:()=>s});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));p.displayName="MDXCreateElement"}}]);