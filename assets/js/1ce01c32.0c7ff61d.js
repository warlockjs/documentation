"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9707],{7922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(4848),l=a(8453);const i={sidebar_position:31},o="Uploadable",r={id:"warlock/validation/rules/uploadable",title:"Uploadable",description:"Check if the input value is a hash of Uploadable.",source:"@site/docs/warlock/validation/rules/uploadable.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/uploadable",permalink:"/docs/warlock/validation/rules/uploadable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"warlock",previous:{title:"Unique",permalink:"/docs/warlock/validation/rules/unique"},next:{title:"Url",permalink:"/docs/warlock/validation/rules/url"}},s={},c=[{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"uploadable",children:"Uploadable"}),"\n",(0,n.jsxs)(t.p,{children:["Check if the input value is a hash of ",(0,n.jsx)(t.a,{href:"./../../upload/upload-model",children:"Uploadable"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"This rule is a database dependent rule. It requires a database connection to run against the input value."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The validation rule ",(0,n.jsx)(t.strong,{children:"requires a value"})," to run against the input value."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Basically it works by uploading the files in a separate request then attach the upload hash to certain model, i.e user avatar, post image etc."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/posts/controllers/create-post.ts"',children:'// ...\r\ncreatePost.validation = {\r\n  rules: {\r\n    title: ["required", "stringify"],\r\n    image: ["required", "uploadable"],\r\n  },\r\n};\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The rule will fetch the ",(0,n.jsx)(t.code,{children:"uploads collection"})," for the given hash and check if the hash exists, if not exists, the validation will fail."]})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(6540);const l={},i=n.createContext(l);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);