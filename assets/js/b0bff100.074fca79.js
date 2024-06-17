"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7774],{1e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(4848),i=r(5680);const o={sidebar_position:21},a="Missing If",s={id:"warlock/validation/rules/missing-if",title:"Missing If",description:"The input must be not present or empty if another input is equal to the given value.",source:"@site/docs/warlock/validation/rules/missing-if.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/missing-if",permalink:"/docs/warlock/validation/rules/missing-if",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"warlock",previous:{title:"Min",permalink:"/docs/warlock/validation/rules/min"},next:{title:"Number",permalink:"/docs/warlock/validation/rules/number"}},c={},l=[{value:"Example",id:"example",level:2}];function u(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"missing-if",children:"Missing If"}),"\n",(0,n.jsx)(t.p,{children:"The input must be not present or empty if another input is equal to the given value."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The validation rule ",(0,n.jsx)(t.strong,{children:"does not require a value"})," to run against the input value."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"min"})," rule works against floats and integers."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/products/controllers/create-product.ts"',children:'// ...\r\ncreateProduct.validation = {\r\n  rules: {\r\n    category: ["missingIf:type,variation"],\r\n  },\r\n};\n'})}),"\n",(0,n.jsx)(t.p,{children:"The previous validation works in a good use case, where you have an online store with multiple type of products, in this use case, the variation (child product) should not have a category because the parent product already has a category."})]})}function p(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>l});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));p.displayName="MDXCreateElement"}}]);