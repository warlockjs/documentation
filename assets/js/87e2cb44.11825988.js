"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5246],{9285:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(4848),a=n(8453);const r={sidebar_position:1},o="Introduction",i={id:"cascade/getting-started/introduction",title:"Introduction",description:"Cascade is a package that helps you to connect to MongoDB database and perform CRUD operations for nodejs.",source:"@site/docs/cascade/getting-started/introduction.mdx",sourceDirName:"cascade/getting-started",slug:"/cascade/getting-started/introduction",permalink:"/docs/cascade/getting-started/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mongodb",previous:{title:"Getting Started",permalink:"/docs/category/getting-started-1"},next:{title:"Road Map",permalink:"/docs/cascade/getting-started/roadmap"}},c={},d=[{value:"Why Cascade?",id:"why-cascade",level:2},{value:"Cascade Features",id:"cascade-features",level:2},{value:"Peek inside Cascade",id:"peek-inside-cascade",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(s.p,{children:"Cascade is a package that helps you to connect to MongoDB database and perform CRUD operations for nodejs."}),"\n",(0,t.jsx)(s.h2,{id:"why-cascade",children:"Why Cascade?"}),"\n",(0,t.jsxs)(s.p,{children:["There are few packages that manages MongoDB for nodejs applications, most popular one is ",(0,t.jsx)(s.a,{href:"https://mongoosejs.com/",children:"Mongoose"}),". But Mongoose is in somehow a little bit hard to use,\r\nalso there is ",(0,t.jsx)(s.a,{href:"https://www.prisma.io/",children:"Prisma"})," which is a great package, it manages multiple databases drivers, but not the best for MongoDB."]}),"\n",(0,t.jsx)(s.h2,{id:"cascade-features",children:"Cascade Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Easy to use:"})," Cascade is very easy to use, it's just a wrapper around MongoDB driver."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Supports multiple connections:"})," You can perform multiple connections to different MongoDB connections and use each one of them separately."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Supports multiple databases:"})," Cascade supports multiple databases, you can connect to multiple databases at the same time."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Powerful Aggregate framework:"})," Cascade has a powerful aggregate framework that helps you to perform complex queries."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Basic CRUD operations:"})," Cascade supports basic CRUD operations, you can perform create, read, update and delete operations."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Events Driven:"})," Cascade is events driven, you can listen to events and perform actions, for example before creating, updating or deleting a document."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Powerful Models:"})," Cascade has a powerful models system, a Model is a collection manager document based, it manages a collection's document easily with many utilities."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Learning curve:"})," Cascade has a very small learning curve, you can learn it in few minutes."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Pagination support:"})," Cascade supports pagination, you can paginate your results easily."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Output formatting:"})," Cascade supports output formatting, you can format your output easily when model is sent as a response."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Auto incremented id:"})," Cascade supports auto incremented id, you can use it as a primary key for your documents."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Random or sequential id:"})," Cascade supports random or sequential id."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Recycle Bin:"})," Reduce collection documents by removing the document entirely from the collection, but move it to a separate collection trash."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Migration system:"})," Cascade has a migration system, you can create migrations and run them easily."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Data casting:"})," You can cast your data to a specific type or using custom casting."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Embedded documents:"})," Cascade supports single and multiple embedded documents, you can embed documents inside other documents."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Syncing Models"}),": Auto update documents when model's data is updated or deleted."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"And many more features."}),"\n",(0,t.jsx)(s.h2,{id:"peek-inside-cascade",children:"Peek inside Cascade"}),"\n",(0,t.jsx)(s.p,{children:"Here is a simple example of defining a User model:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * The collection name\r\n   * Must be defined explicitly.\r\n   */\r\n  public static collection = "users";\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"A quick example of creating a user:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="src/controllers/users.ts"',children:'import { User } from "src/models/user";\r\n\r\nexport async function createUser() {\r\n  const user = await User.create({\r\n    name: "Hasan Zohdy",\r\n    email: "hassanzohdy@gmail.com",\r\n  });\r\n\r\n  console.log(user.data);\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Outputs something similar to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\r\n  "id": 1231412,\r\n  "_id": "fagtrw43qwedasjoijwq",\r\n  "name": "Hasan Zohdy",\r\n  "email": "hassanzohdy@gmail.com",\r\n  "createdAt": "2023-06-01 00:00:00",\r\n  "updatedAt": "2023-06-01 00:00:00"\r\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var t=n(6540);const a={},r=t.createContext(a);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);