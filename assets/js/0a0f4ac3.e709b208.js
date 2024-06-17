"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2159],{3075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(4848),a=t(8453);const r={sidebar_position:2},o="Create New Document",c={id:"cascade/models/create-document",title:"Create New Document",description:"In the previous section, we've seen how to create a document by creating a new instance of the model then calling the save method, this is a way, let's recap it quickly.",source:"@site/docs/cascade/models/create-document.mdx",sourceDirName:"cascade/models",slug:"/cascade/models/create-document",permalink:"/docs/cascade/models/create-document",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mongodb",previous:{title:"Philosophy",permalink:"/docs/cascade/models/introduction"},next:{title:"Casting Data",permalink:"/docs/cascade/models/casting-data"}},i={},d=[{value:"Creating a model",id:"creating-a-model",level:2},{value:"Creating a model instance",id:"creating-a-model-instance",level:2},{value:"Saving a model instance",id:"saving-a-model-instance",level:2},{value:"Using the <code>create</code> method",id:"using-the-create-method",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-new-document",children:"Create New Document"}),"\n",(0,s.jsxs)(n.p,{children:["In the previous section, we've seen how to create a document by creating a new instance of the model then calling the ",(0,s.jsx)(n.code,{children:"save"})," method, this is a way, let's recap it quickly."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-model",children:"Creating a model"}),"\n",(0,s.jsxs)(n.p,{children:["To create a model, you need to extend the ",(0,s.jsx)(n.code,{children:"Model"})," class and define the ",(0,s.jsx)(n.code,{children:"collection"})," property."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n    /**\r\n    * The collection name\r\n    */\r\n    public static collection = "users";\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-model-instance",children:"Creating a model instance"}),"\n",(0,s.jsxs)(n.p,{children:["When creating a new model instance, you optionally pass an object of the data that will be saved (",(0,s.jsx)(n.strong,{children:"created"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nconst user = new User({\r\n    name: "Hasan Zohdy",\r\n    email: "hassanzohdy@gmail.com",\r\n    isActive: true,\r\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"This only creates an instance of the model, but the data is not saved yet, now let's see how to save the data."}),"\n",(0,s.jsx)(n.h2,{id:"saving-a-model-instance",children:"Saving a model instance"}),"\n",(0,s.jsxs)(n.p,{children:["To save a model instance, you need to call the ",(0,s.jsx)(n.code,{children:"save"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nasync function main() {\r\n    const user = new User({\r\n        name: "Hasan Zohdy",\r\n        email: "hassanzohdy@gmail.com",\r\n        isActive: true,\r\n    });\r\n\r\n    await user.save();\r\n\r\n    console.log(user.data); // outputs all data\r\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"using-the-create-method",children:["Using the ",(0,s.jsx)(n.code,{children:"create"})," method"]}),"\n",(0,s.jsxs)(n.p,{children:["A more preferred way to create a new model instance and save it is to use the static ",(0,s.jsx)(n.code,{children:"create"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nasync function main() {\r\n    const user = await User.create({\r\n        name: "Hasan Zohdy",\r\n        email: "hassanzohdy@gmail.com",\r\n        isActive: true,\r\n    });\r\n\r\n    console.log(user.data); // outputs all data\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This is more easier and cleaner, and it's the ",(0,s.jsx)(n.strong,{children:"recommended way"})," to create a new model instance and save it."]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);