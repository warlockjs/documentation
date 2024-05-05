"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[2533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),p=l,h=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<r;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=n(7462),l=(n(7294),n(3905));const r={sidebar_position:9},a="Destroying Models",s={unversionedId:"cascade/models/destroying-models",id:"cascade/models/destroying-models",title:"Destroying Models",description:"There are two ways to destroy a model, one when we have an instance of the model and the other when we don't.",source:"@site/docs/cascade/models/destroying-models.mdx",sourceDirName:"cascade/models",slug:"/cascade/models/destroying-models",permalink:"/docs/cascade/models/destroying-models",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mongodb",previous:{title:"Saving Models",permalink:"/docs/cascade/models/saving-models"},next:{title:"Fetching Documents",permalink:"/docs/cascade/models/fetching-documents"}},d={},i=[{value:"Delete documents",id:"delete-documents",level:2},{value:"Destroy model",id:"destroy-model",level:2},{value:"Recycle bin",id:"recycle-bin",level:2},{value:"Restoring documents",id:"restoring-documents",level:2},{value:"Restoring multiple documents",id:"restoring-multiple-documents",level:2},{value:"Model Delete Strategies",id:"model-delete-strategies",level:2},{value:"hardDelete strategy",id:"harddelete-strategy",level:3},{value:"softDelete strategy",id:"softdelete-strategy",level:3}],c={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"destroying-models"},"Destroying Models"),(0,l.kt)("p",null,"There are two ways to destroy a model, one when we have an instance of the model and the other when we don't."),(0,l.kt)("h2",{id:"delete-documents"},"Delete documents"),(0,l.kt)("p",null,"If we don't care of having an instance of the model, we can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," method to delete documents from the database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'await User.delete({ name: "John" });\n')),(0,l.kt)("p",null,"This will delete all the documents that match the query and return the number of documents deleted."),(0,l.kt)("p",null,"If we want to delete a document using ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"_id"),", simply pass the value directly to the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await User.delete(1);\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note that ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," must be a string or an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"ObjectId")," class.")),(0,l.kt)("h2",{id:"destroy-model"},"Destroy model"),(0,l.kt)("p",null,"If we already have an instance of the model we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"destroy")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/User";\n\nconst user = await User.find(1);\n\nawait user.destroy();\n')),(0,l.kt)("p",null,"This will delete the document from the database but you still can work with the instance of the model."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you tried to save the model after destroying it, it will throw an error.")),(0,l.kt)("h2",{id:"recycle-bin"},"Recycle bin"),(0,l.kt)("p",null,"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"destroy")," model, by default the model is actually deleted but before that a copy of the model document is taken and moved to the trash collection. This is done to prevent accidental deletion of documents."),(0,l.kt)("p",null,"The trash collection name is the model's collection name suffixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"Trash"),". For example, if the model's collection name is ",(0,l.kt)("inlineCode",{parentName:"p"},"users"),", the trash collection name will be ",(0,l.kt)("inlineCode",{parentName:"p"},"usersTrash"),"."),(0,l.kt)("h2",{id:"restoring-documents"},"Restoring documents"),(0,l.kt)("p",null,"If documents are deleted using Recycle bin ",(0,l.kt)("inlineCode",{parentName:"p"},"destroy")," method, you can restore them using the ",(0,l.kt)("inlineCode",{parentName:"p"},"restore")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await User.restore(1);\n")),(0,l.kt)("p",null,"This will restore the document with the given id and return the restored document."),(0,l.kt)("h2",{id:"restoring-multiple-documents"},"Restoring multiple documents"),(0,l.kt)("p",null,"If you want to restore all the documents in the trash collection, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"restoreAll")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const restoredUsers = await User.restoreAll();\n")),(0,l.kt)("p",null,"If you want to restore specific documents, you can pass a query to the ",(0,l.kt)("inlineCode",{parentName:"p"},"restoreAll")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const restoredUsers = await User.restoreAll({ name: "John" });\n')),(0,l.kt)("h2",{id:"model-delete-strategies"},"Model Delete Strategies"),(0,l.kt)("p",null,"We saw earlier the ",(0,l.kt)("inlineCode",{parentName:"p"},"moveToTrash")," strategy which is the default strategy. There are two other strategies that you can use."),(0,l.kt)("p",null,"You can override the model's default delete strategy by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteStrategy")," property on the model."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Model, ModelDeleteStrategy } from "@warlock.js/cascade";\n\nexport class User extends Model {\n  /**\n   * The collection name\n   */\n  public static collection = "users";\n\n  /**\n   * The delete strategy\n   * Delete the documents forever.\n   */\n  public static deleteStrategy = ModelDeleteStrategy.hardDelete;\n}\n')),(0,l.kt)("h3",{id:"harddelete-strategy"},"hardDelete strategy"),(0,l.kt)("p",null,"This strategy will delete the document without moving it to the trash collection, so it's gone forever."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Model, ModelDeleteStrategy } from "@warlock.js/cascade";\n\nexport class User extends Model {\n  /**\n   * The collection name\n   */\n  public static collection = "users";\n\n  /**\n   * The delete strategy\n   * Delete the documents forever.\n   */\n  public static deleteStrategy = ModelDeleteStrategy.hardDelete;\n}\n')),(0,l.kt)("p",null,"Now whenever you call the ",(0,l.kt)("inlineCode",{parentName:"p"},"destroy")," method, the document will be deleted forever."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await User.find(1).destroy();\n")),(0,l.kt)("h3",{id:"softdelete-strategy"},"softDelete strategy"),(0,l.kt)("p",null,"This strategy will add a ",(0,l.kt)("inlineCode",{parentName:"p"},"deletedAt")," field to the document and set it to the current date and time. This field will be used to determine if the document is deleted or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Model, ModelDeleteStrategy } from "@warlock.js/cascade";\n\nexport class User extends Model {\n  /**\n   * The collection name\n   */\n  public static collection = "users";\n\n  /**\n   * The delete strategy\n   * Delete the documents forever.\n   */\n  public static deleteStrategy = ModelDeleteStrategy.softDelete;\n}\n')),(0,l.kt)("p",null,"Now whenever you call the ",(0,l.kt)("inlineCode",{parentName:"p"},"destroy")," method, the document will be soft deleted."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"restore")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"restoreAll")," methods to restore the documents, this will remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"deletedAt")," field from the documents.")),(0,l.kt)("p",null,"Now whenever you use any ",(0,l.kt)("a",{parentName:"p",href:"./fetching-documents"},"listing method")," the soft deleted documents will be excluded from the results."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you want to include the deleted documents in your results, pass ",(0,l.kt)("inlineCode",{parentName:"p"},"withDeleted")," option to the listing filters with ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," value.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// fetch all users including the deleted ones\nawait User.list({ withDeleted: true });\n\n// fetch all users excluding the deleted ones\nawait User.list();\n")))}u.isMDXComponent=!0}}]);