"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:10},r="Fetching Documents",s={unversionedId:"monpulse/models/fetching-documents",id:"monpulse/models/fetching-documents",title:"Fetching Documents",description:"Introduction",source:"@site/docs/monpulse/models/fetching-documents.mdx",sourceDirName:"monpulse/models",slug:"/monpulse/models/fetching-documents",permalink:"/mongez/docs/monpulse/models/fetching-documents",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mongodb",previous:{title:"Destroying Models",permalink:"/mongez/docs/monpulse/models/destroying-models"},next:{title:"Aggregation",permalink:"/mongez/docs/category/aggregation"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Getting all documents",id:"getting-all-documents",level:2},{value:"Getting documents with certain filters",id:"getting-documents-with-certain-filters",level:2},{value:"Finding Document By Id",id:"finding-document-by-id",level:2},{value:"Finding Document By certain field",id:"finding-document-by-certain-field",level:2},{value:"Get first document",id:"get-first-document",level:2},{value:"Get last document",id:"get-last-document",level:2},{value:"Count collection documents",id:"count-collection-documents",level:2},{value:"Get distinct values",id:"get-distinct-values",level:2},{value:"Explain query",id:"explain-query",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Chunk",id:"chunk",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fetching-documents"},"Fetching Documents"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," class is shipped with powerful methods that allows you to fetch documents from the database, let's see it in depth."),(0,a.kt)("h2",{id:"getting-all-documents"},"Getting all documents"),(0,a.kt)("p",null,"To fetch all documents from database, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst users = await User.list();\n')),(0,a.kt)("p",null,"This will fetch all documents from database and return an array of models."),(0,a.kt)("admonition",{title:"Not Recommended",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This is not recommended to be used if the collection contains a lot of documents, as it will load all documents into memory and may lead to performance issues, use paginate method instead.")),(0,a.kt)("h2",{id:"getting-documents-with-certain-filters"},"Getting documents with certain filters"),(0,a.kt)("p",null,"To fetch documents with certain filters, you can use the same ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," method but with a filter object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst users = await User.list({\n  isActive: true,\n});\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can add any acceptable syntax to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/"},"find method")," in MongoDB, you may also add second argument as options.")),(0,a.kt)("h2",{id:"finding-document-by-id"},"Finding Document By Id"),(0,a.kt)("p",null,"To find a document by its id, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst user = await User.find(5123);\n')),(0,a.kt)("p",null,"This will return a single model instance, if no document found, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," method accepts the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property not ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," property.")),(0,a.kt)("h2",{id:"finding-document-by-certain-field"},"Finding Document By certain field"),(0,a.kt)("p",null,"To find a document by certain field, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"findBy")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst user = await User.findBy("_id", "5f9d2f5b2c9f6a1e3c9b1b1a");\n')),(0,a.kt)("p",null,"This will return a single model instance, if no document found, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"get-first-document"},"Get first document"),(0,a.kt)("p",null,"To get the first document of the collection, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst user = await User.first();\n')),(0,a.kt)("p",null,"You may pass a filter object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," method to get the first document that matches the filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst user = await User.first({\n  isActive: true,\n});\n')),(0,a.kt)("h2",{id:"get-last-document"},"Get last document"),(0,a.kt)("p",null,"To get the last document of the collection, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"last")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst user = await User.last();\n')),(0,a.kt)("p",null,"You may pass a filter object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"last")," method to get the last document that matches the filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst user = await User.last({\n  isActive: true,\n});\n')),(0,a.kt)("h2",{id:"count-collection-documents"},"Count collection documents"),(0,a.kt)("p",null,"To count the number of documents in a collection, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst count = await User.count();\n')),(0,a.kt)("p",null,"You may pass a filter object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," method to count the number of documents that matches the filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst count = await User.count({\n  isActive: true,\n});\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The count method may receive a second argument as options, it accepts the same options as the ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/drivers/node/current/usage-examples/count/"},"countDocuments method")," in MongoDB.")),(0,a.kt)("h2",{id:"get-distinct-values"},"Get distinct values"),(0,a.kt)("p",null,"To get distinct values of a field in a collection, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"distinct")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst emails = await User.distinct("email");\n')),(0,a.kt)("p",null,"This will return an array of distinct values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," field."),(0,a.kt)("p",null,"To add more filters, you can pass a filter object as a second argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst activeEmails = await User.distinct("email", {\n  isActive: true,\n});\n')),(0,a.kt)("h2",{id:"explain-query"},"Explain query"),(0,a.kt)("p",null,"To get the query explanation, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"explain")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst explanation = await User.explain({\n  isActive: true,\n});\n')),(0,a.kt)("p",null,"This will return an object that contains the query explanation."),(0,a.kt)("h3",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"To paginate the results, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"paginate")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nconst { documents: users, paginationInfo } = await User.paginate(1, 10);\n\nconsole.log(paginationInfo);\n')),(0,a.kt)("p",null,"This will return an object that contains the paginated documents and pagination information."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"paginationInfo")," will return an object containing the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type PaginationInfo = {\n  /**\n   * Limit of the query\n   */\n  limit: number;\n  /**\n   * Results of the query\n   */\n  result: number;\n  /**\n   * Current page of the query\n   */\n  page: number;\n  /**\n   * total results of the query\n   */\n  total: number;\n  /**\n   * total pages of the query\n   */\n  pages: number;\n};\n")),(0,a.kt)("admonition",{title:"Please Note That",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"The returned documents are an array of models not plain objects.")),(0,a.kt)("h2",{id:"chunk"},"Chunk"),(0,a.kt)("p",null,"To chunk the results, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"chunk")," method, the idea here is to split the returned documents into chunks, and pass each chunk to a callback function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nawait User.chunk(10, (users) => {\n  console.log(users);\n});\n')),(0,a.kt)("p",null,"You may also pass an object of filters, but it ",(0,a.kt)("strong",{parentName:"p"},"MUST")," contain ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nawait User.chunk(\n  {\n    limit: 10,\n    isActive: true,\n  },\n  (users) => {\n    console.log(users);\n  }\n);\n')),(0,a.kt)("p",null,"To get the pagination information, you can pass a second callback function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "./models/user";\n\nawait User.chunk(\n  {\n    limit: 10,\n    isActive: true,\n  },\n  (users) => {\n    console.log(users);\n  },\n  (paginationInfo) => {\n    console.log(paginationInfo);\n  }\n);\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To stop executing the chunk, you can return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," from the callback function.")))}d.isMDXComponent=!0}}]);