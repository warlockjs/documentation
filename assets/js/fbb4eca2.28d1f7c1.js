"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[9385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},s="Introduction",i={unversionedId:"monpulse/getting-started/introduction",id:"monpulse/getting-started/introduction",title:"Introduction",description:"Monpulse is a package that helps you to connect to MongoDB database and perform CRUD operations for nodejs.",source:"@site/docs/monpulse/getting-started/introduction.mdx",sourceDirName:"monpulse/getting-started",slug:"/monpulse/getting-started/introduction",permalink:"/documentation/docs/monpulse/getting-started/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mongodb",previous:{title:"Getting Started",permalink:"/documentation/docs/category/getting-started-1"},next:{title:"Road Map",permalink:"/documentation/docs/monpulse/getting-started/roadmap"}},l={},u=[{value:"Why Monpulse?",id:"why-monpulse",level:2},{value:"Monpulse Features",id:"monpulse-features",level:2},{value:"Peek inside Monpulse",id:"peek-inside-monpulse",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Monpulse is a package that helps you to connect to MongoDB database and perform CRUD operations for nodejs."),(0,a.kt)("h2",{id:"why-monpulse"},"Why Monpulse?"),(0,a.kt)("p",null,"There are few packages that manages MongoDB for nodejs applications, most popular one is ",(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/"},"Mongoose"),". But Mongoose is in somehow a little bit hard to use,\nalso there is ",(0,a.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma")," which is a great package, it manages multiple databases drivers, but not the best for MongoDB."),(0,a.kt)("h2",{id:"monpulse-features"},"Monpulse Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy to use:")," Monpulse is very easy to use, it's just a wrapper around MongoDB driver."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supports multiple connections:")," You can perform multiple connections to different MongoDB connections and use each one of them separately."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supports multiple databases:")," Monpulse supports multiple databases, you can connect to multiple databases at the same time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Powerful Aggregate framework:")," Monpulse has a powerful aggregate framework that helps you to perform complex queries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic CRUD operations:")," Monpulse supports basic CRUD operations, you can perform create, read, update and delete operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Events Driven:")," Monpulse is events driven, you can listen to events and perform actions, for example before creating, updating or deleting a document."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Powerful Models:")," Monpulse has a powerful models system, a Model is a collection manager document based, it manages a collection's document easily with many utilities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Learning curve:")," Monpulse has a very small learning curve, you can learn it in few minutes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pagination support:")," Monpulse supports pagination, you can paginate your results easily."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output formatting:")," Monpulse supports output formatting, you can format your output easily when model is sent as a response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auto incremented id:")," Monpulse supports auto incremented id, you can use it as a primary key for your documents."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Random or sequential id:")," Monpulse supports random or sequential id."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Recycle Bin:")," Reduce collection documents by removing the document entirely from the collection, but move it to a separate collection trash."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Migration system:")," Monpulse has a migration system, you can create migrations and run them easily."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data casting:")," You can cast your data to a specific type or using custom casting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Embedded documents:")," Monpulse supports single and multiple embedded documents, you can embed documents inside other documents."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Syncing Models"),": Auto update documents when model's data is updated or deleted.")),(0,a.kt)("p",null,"And many more features."),(0,a.kt)("h2",{id:"peek-inside-monpulse"},"Peek inside Monpulse"),(0,a.kt)("p",null,"Here is a simple example of defining a User model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * The collection name\n   * Must be defined explicitly.\n   */\n  public static collection = "users";\n}\n')),(0,a.kt)("p",null,"A quick example of creating a user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/controllers/users.ts"',title:'"src/controllers/users.ts"'},'import { User } from "src/models/user";\n\nexport async function createUser() {\n  const user = await User.create({\n    name: "Hasan Zohdy",\n    email: "hassanzohdy@gmail.com",\n  });\n\n  console.log(user.data);\n}\n')),(0,a.kt)("p",null,"Outputs something similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1231412,\n  "_id": "fagtrw43qwedasjoijwq",\n  "name": "Hasan Zohdy",\n  "email": "hassanzohdy@gmail.com",\n  "createdAt": "2023-06-01 00:00:00",\n  "updatedAt": "2023-06-01 00:00:00"\n}\n')))}m.isMDXComponent=!0}}]);