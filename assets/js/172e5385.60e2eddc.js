"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3221],{4193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(4848),a=t(8453);const s={sidebar_position:7},i="Unwind",o={id:"cascade/aggregate/unwind",title:"Unwind",description:"Unpack an array field from the input documents to output a document for each element.",source:"@site/docs/cascade/aggregate/unwind.mdx",sourceDirName:"cascade/aggregate",slug:"/cascade/aggregate/unwind",permalink:"/docs/cascade/aggregate/unwind",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mongodb",previous:{title:"Limit",permalink:"/docs/cascade/aggregate/limit"},next:{title:"Group By",permalink:"/docs/cascade/aggregate/group-by"}},c={},d=[{value:"Method Signature",id:"method-signature",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"unwind",children:"Unwind"}),"\n",(0,r.jsx)(n.p,{children:"Unpack an array field from the input documents to output a document for each element."}),"\n",(0,r.jsxs)(n.p,{children:["This is extremely useful specially if you're working with a column that have a list of values or when using ",(0,r.jsx)(n.code,{children:"group"})," stage."]}),"\n",(0,r.jsx)(n.h2,{id:"method-signature",children:"Method Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"public unwind(column: string, {\r\n    includeArrayIndex?: string,\r\n    preserveNullAndEmptyArrays?: boolean\r\n}): this;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const users = await aggregate.unwind("hobbies").get();\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Read more about ",(0,r.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/",children:"unwind"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default ",(0,r.jsx)(n.code,{children:"preserveNullAndEmptyArrays"})," is set to ",(0,r.jsx)(n.code,{children:"false"})," this will trim the result to only documents that have the ",(0,r.jsx)(n.code,{children:"hobbies"})," field."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);