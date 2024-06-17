"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5486],{551:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(4848),o=s(8453);const i={sidebar_position:6},n="Repository Destroyer",c={id:"warlock/repositories/destroyer",title:"Repository Destroyer",description:"When it comes to deleting records, repository manager provides two ways of deleting records.",source:"@site/docs/warlock/repositories/destroyer.mdx",sourceDirName:"warlock/repositories",slug:"/warlock/repositories/destroyer",permalink:"/docs/warlock/repositories/destroyer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"warlock",previous:{title:"Repository Caching",permalink:"/docs/warlock/repositories/caching"},next:{title:"Validation",permalink:"/docs/category/validation"}},a={},d=[{value:"Delete by ID",id:"delete-by-id",level:2},{value:"Delete multiple documents",id:"delete-multiple-documents",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"repository-destroyer",children:"Repository Destroyer"}),"\n",(0,t.jsx)(r.p,{children:"When it comes to deleting records, repository manager provides two ways of deleting records."}),"\n",(0,t.jsx)(r.h2,{id:"delete-by-id",children:"Delete by ID"}),"\n",(0,t.jsxs)(r.p,{children:["The first way is to delete a record by its ID. The ",(0,t.jsx)(r.code,{children:"RepositoryManager"})," class provides a ",(0,t.jsx)(r.code,{children:"delete"})," method that you can use to delete a record by its ID."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:'import { usersRepository } from "app/users/repositories/users-repository";\r\n\r\nusersRepository.delete(1);\n'})}),"\n",(0,t.jsx)(r.p,{children:"The delete method accepts an integer (as id) or an instance of model as well:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:'import { usersRepository } from "app/users/repositories/users-repository";\r\n\r\nconst user = await usersRepository.find(1);\r\n\r\nusersRepository.delete(user);\n'})}),"\n",(0,t.jsx)(r.h2,{id:"delete-multiple-documents",children:"Delete multiple documents"}),"\n",(0,t.jsxs)(r.p,{children:["To delete multiple documents using the repository, you can use the ",(0,t.jsx)(r.code,{children:"deleteMany"})," method, it accepts a filter object, if not passed, all documents will be DELETED!"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/app/main.ts"',children:'import { usersRepository } from "app/users/repositories/users-repository";\r\n\r\nusersRepository.deleteMany({\r\n  age: 18,\r\n});\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var t=s(6540);const o={},i=t.createContext(o);function n(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);