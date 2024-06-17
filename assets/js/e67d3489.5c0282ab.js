"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[6811],{7592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(4848),a=t(5680);const s={sidebar_position:23},o="Pattern",i={id:"warlock/validation/rules/pattern",title:"Pattern",description:"Check if the input value matches a given pattern.",source:"@site/docs/warlock/validation/rules/pattern.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/pattern",permalink:"/docs/warlock/validation/rules/pattern",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"warlock",previous:{title:"Object",permalink:"/docs/warlock/validation/rules/object"},next:{title:"Required With",permalink:"/docs/warlock/validation/rules/required-with"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Pass the translation key",id:"pass-the-translation-key",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"pattern",children:"Pattern"}),"\n",(0,n.jsx)(r.p,{children:"Check if the input value matches a given pattern."}),"\n",(0,n.jsxs)(r.p,{children:["The validation rule ",(0,n.jsx)(r.strong,{children:"requires a value"})," to run."]}),"\n",(0,n.jsx)(r.p,{children:"The pattern rule can not be used as a string, it must be declared as a rule class:"}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',children:'// ...\r\nimport { PatternRule } from "@warlock.js/core";\r\n\r\nconst usernamePattern = /^[a-z0-9_-]{3,16}$/;\r\n\r\ncreateAccount.validation = {\r\n  rules: {\r\n    username: ["required", new PatternRule(usernamePattern)],\r\n  },\r\n};\n'})}),"\n",(0,n.jsx)(r.h2,{id:"pass-the-translation-key",children:"Pass the translation key"}),"\n",(0,n.jsx)(r.p,{children:"If the validation failed, the error message will be something like this:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"username must match the following pattern: [[a-z0-9_-]{3,16}].\n"})}),"\n",(0,n.jsx)(r.p,{children:"To override the pattern, pass the second argument as the translation key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',children:'// ...\r\nimport { PatternRule } from "@warlock.js/core";\r\n\r\nconst usernamePattern = /^[a-z0-9_-]{3,16}$/;\r\n\r\ncreateAccount.validation = {\r\n  rules: {\r\n    username: ["required", new PatternRule(usernamePattern, "usernamePattern")],\r\n  },\r\n};\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Now you should translate the ",(0,n.jsx)(r.code,{children:"usernamePattern"})," in any of your localization files."]})]})}function p(e={}){const{wrapper:r}={...(0,a.RP)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5680:(e,r,t)=>{t.d(r,{RP:()=>c});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));p.displayName="MDXCreateElement"}}]);