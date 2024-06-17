"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[1483],{5393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(4848),o=r(5680);const a={sidebar_position:22},i="Object",c={id:"warlock/validation/rules/object",title:"Object",description:"Check if the input value is an object.",source:"@site/docs/warlock/validation/rules/object.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/object",permalink:"/docs/warlock/validation/rules/object",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"warlock",previous:{title:"Number",permalink:"/docs/warlock/validation/rules/number"},next:{title:"Pattern",permalink:"/docs/warlock/validation/rules/pattern"}},s={},l=[{value:"Example",id:"example",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"object",children:"Object"}),"\n",(0,n.jsx)(t.p,{children:"Check if the input value is an object."}),"\n",(0,n.jsxs)(t.p,{children:["The validation rule ",(0,n.jsx)(t.strong,{children:"requires a value"})," to run."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This works in both json and form data requests as warlock automatically parses the request body."})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/products/controllers/create-product.ts"',children:'// ...\r\ncreateProduct.validation = {\r\n  rules: {\r\n    details: ["required", "object"],\r\n  },\r\n};\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>l});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));p.displayName="MDXCreateElement"}}]);