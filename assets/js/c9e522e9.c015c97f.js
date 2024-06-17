"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4907],{5835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(4848),i=r(8453);const s={sidebar_position:10},l="File",a={id:"warlock/validation/rules/file",title:"File",description:"Check if the input value is a file.",source:"@site/docs/warlock/validation/rules/file.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/file",permalink:"/docs/warlock/validation/rules/file",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"warlock",previous:{title:"Exists",permalink:"/docs/warlock/validation/rules/exists"},next:{title:"Float",permalink:"/docs/warlock/validation/rules/float"}},o={},c=[{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"file",children:"File"}),"\n",(0,n.jsx)(t.p,{children:"Check if the input value is a file."}),"\n",(0,n.jsxs)(t.p,{children:["The validation rule ",(0,n.jsx)(t.strong,{children:"requires a value"})," to run."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/posts/controllers/create-post.ts"',children:'// ...\r\ncreatePost.validation = {\r\n  rules: {\r\n    title: ["required"],\r\n    image: ["required", "file"],\r\n  },\r\n};\n'})}),"\n",(0,n.jsx)(t.p,{children:"It works also if the input is an array of files:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/posts/controllers/create-post.ts"',children:'// ...\r\ncreatePost.validation = {\r\n  rules: {\r\n    title: ["required"],\r\n    images: ["required", "file"],\r\n  },\r\n};\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var n=r(6540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);