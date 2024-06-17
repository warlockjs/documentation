"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9811],{806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(4848),i=n(8453);const a={sidebar_position:12},s="Image",o={id:"warlock/validation/rules/image",title:"Image",description:"Check if the input value is a file and the file type is an image.",source:"@site/docs/warlock/validation/rules/image.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/image",permalink:"/docs/warlock/validation/rules/image",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"warlock",previous:{title:"Float",permalink:"/docs/warlock/validation/rules/float"},next:{title:"In",permalink:"/docs/warlock/validation/rules/in"}},l={},c=[{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"image",children:"Image"}),"\n",(0,r.jsx)(t.p,{children:"Check if the input value is a file and the file type is an image."}),"\n",(0,r.jsxs)(t.p,{children:["The validation rule ",(0,r.jsx)(t.strong,{children:"requires a value"})," to run."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/posts/controllers/create-post.ts"',children:'// ...\r\ncreatePost.validation = {\r\n  rules: {\r\n    title: ["required"],\r\n    image: ["required", "image"],\r\n  },\r\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"It works also if the input is an array of images:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/posts/controllers/create-post.ts"',children:'// ...\r\ncreatePost.validation = {\r\n  rules: {\r\n    title: ["required"],\r\n    images: ["required", "image"],\r\n  },\r\n};\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);