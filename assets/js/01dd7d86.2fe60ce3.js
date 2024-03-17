"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[4566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_position:2,title:"Query Events"},o=void 0,r={unversionedId:"monpulse/events/query-events",id:"monpulse/events/query-events",title:"Query Events",description:"Introduction",source:"@site/docs/monpulse/events/query-events.mdx",sourceDirName:"monpulse/events",slug:"/monpulse/events/query-events",permalink:"/mongez/docs/monpulse/events/query-events",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Query Events"},sidebar:"mongodb",previous:{title:"Introduction",permalink:"/mongez/docs/monpulse/events/introduction"},next:{title:"Model Events",permalink:"/mongez/docs/monpulse/events/model-events"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"On Creating Event",id:"on-creating-event",level:2},{value:"On Created Event",id:"on-created-event",level:2},{value:"On Updating Event",id:"on-updating-event",level:2},{value:"On Updated Event",id:"on-updated-event",level:2},{value:"On Deleting Event",id:"on-deleting-event",level:2},{value:"On Deleted Event",id:"on-deleted-event",level:2},{value:"On Fetching Event",id:"on-fetching-event",level:2},{value:"On Fetched Event",id:"on-fetched-event",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The query builder serves as the most internal layer for other operations such as ",(0,i.kt)("strong",{parentName:"p"},"Models")," and ",(0,i.kt)("strong",{parentName:"p"},"Aggregate"),". Let's explore the events associated with the query builder."),(0,i.kt)("h2",{id:"on-creating-event"},"On Creating Event"),(0,i.kt)("p",null,"This event is triggered before creating a new document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onCreating(callback: (payload: CreatingEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onCreating(({ collection, query, data, isMany }) => {\n    // do something\n  });\n\n  // will trigger the `onCreating` event when creating a new document\n  query.create("users", { name: "John Doe" });\n\n  // will trigger the `onCreating` event when creating many documents\n  query.createMany("users", [{ name: "John Doe" }, { name: "Jane Doe" }]);\n}\n\nmain();\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/classes/Collection.html"},"Collection Query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": The data to be inserted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"createMany")," methods."),(0,i.kt)("h2",{id:"on-created-event"},"On Created Event"),(0,i.kt)("p",null,"This event is triggered after creating a new document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onCreated(callback: (payload: CreatedEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onCreated(({ collection, document, documents, data, isMany }) => {\n    // do something\n  });\n\n  // will trigger the `onCreated` event after creating a new document\n  query.create("users", { name: "John Doe" });\n\n  // will trigger the `onCreated` event after creating many documents\n  query.createMany("users", [{ name: "John Doe" }, { name: "Jane Doe" }]);\n}\n\nmain();\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document"),": The created document, exists when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"create")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documents"),": The created documents, exists when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"createMany")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": The data that was inserted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"createMany")," methods."),(0,i.kt)("h2",{id:"on-updating-event"},"On Updating Event"),(0,i.kt)("p",null,"This event is triggered before updating a document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onUpdating(callback: (payload: UpdatingEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onUpdating(\n    ({ collection, query, data, isMany, filter, updateOptions, options }) => {\n      // do something\n    }\n  );\n\n  // will trigger the `onUpdating` event when updating a document\n  const filter = { name: "John Doe" };\n\n  query.update("users", filter, { name: "Jane Doe New Name" });\n\n  // will trigger the `onUpdating` event when updating many documents\n  query.updateMany("users", filter, {\n    $set: {\n      name: "Jane Doe New Name",\n    },\n  });\n}\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/classes/Collection.html"},"Collection Query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": The data to be updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": The filter that will be used to update the document or documents based on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateOptions"),": This is the ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/interfaces/UpdateManyModel.html#update"},"Update Filter")," object which is the second argument of ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," method"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/interfaces/UpdateOptions.html"},"Update options"),", will be passed only when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," method.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"updateMany")," methods."),(0,i.kt)("h2",{id:"on-updated-event"},"On Updated Event"),(0,i.kt)("p",null,"This event is triggered after updating a document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onUpdated(callback: (payload: UpdatedEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onUpdated(\n    ({\n      collection,\n      document,\n      documents,\n      data,\n      isMany,\n      filter,\n      updateOptions,\n      options,\n      result,\n    }) => {\n      // do something\n    }\n  );\n\n  // will trigger the `onUpdated` event after updating a document\n  const filter = { name: "John Doe" };\n\n  query.update("users", filter, { name: "Jane Doe New Name" });\n\n  // will trigger the `onUpdated` event after updating many documents\n  query.updateMany("users", filter, {\n    $set: {\n      name: "Jane Doe New Name",\n    },\n  });\n}\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document"),": The updated document, exists when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documents"),": The updated documents, exists when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": The data that was updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": The filter that was used to update the document or documents based on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateOptions"),": This is the ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/interfaces/UpdateManyModel.html#update"},"Update Filter")," object which is the second argument of ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/interfaces/UpdateOptions.html"},"Update options"),", will be passed only when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/interfaces/UpdateResult.html"},"Update Result")," object.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"updateMany")," methods."),(0,i.kt)("h2",{id:"on-deleting-event"},"On Deleting Event"),(0,i.kt)("p",null,"This event is triggered before deleting a document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onDeleting(callback: (payload: DeletingEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onDeleting(({ collection, query, filter, isMany }) => {\n    // do something\n  });\n\n  // will trigger the `onDeleting` event when deleting a document\n  const filter = { name: "John Doe" };\n\n  query.deleteOne("users", filter);\n\n  // will trigger the `onDeleting` event when deleting many documents\n  query.deleteMany("users", filter);\n}\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/classes/Collection.html"},"Collection Query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": The filter that will be used to delete the document or documents based on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteOne")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteMany")," methods."),(0,i.kt)("h2",{id:"on-deleted-event"},"On Deleted Event"),(0,i.kt)("p",null,"This event is triggered after deleting a document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onDeleted(callback: (payload: DeletedEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onDeleted(\n    ({ collection, isDeleted, filter, isMany, count, result }) => {\n      // do something\n    }\n  );\n\n  // will trigger the `onDeleted` event after deleting a document\n  const filter = { name: "John Doe" };\n\n  query.delete("users", filter);\n\n  // will trigger the `onDeleted` event after deleting many documents\n  query.deleteMany("users", filter);\n}\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isDeleted"),": A boolean value that indicates if the document or documents were deleted or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": The filter that was used to delete the document or documents based on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count"),": The number of deleted documents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/interfaces/DeleteResult.html"},"Delete Result")," object.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteOne")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteMany")," methods."),(0,i.kt)("h2",{id:"on-fetching-event"},"On Fetching Event"),(0,i.kt)("p",null,"This event is triggered before fetching a document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onFetching(callback: (payload: FetchingEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onFetching(({ collection, query, filter, isMany }) => {\n    // do something\n  });\n\n  // will trigger the `onFetching` event when fetching a document\n  const filter = { name: "John Doe" };\n\n  query.first("users", filter);\n\n  // will trigger the `onFetching` event when fetching many documents\n  query.list("users", filter);\n}\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/Next/classes/Collection.html"},"Collection Query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": The filter that will be used to fetch the document or documents based on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not.")),(0,i.kt)("p",null,"That event is triggered when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"first"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"last"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"latest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oldest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"distinct")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," methods."),(0,i.kt)("h2",{id:"on-fetched-event"},"On Fetched Event"),(0,i.kt)("p",null,"This event is triggered after fetching a document or documents."),(0,i.kt)("p",null,"Method Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public onFetched(callback: (payload: FetchedEventPayload) => void): this;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src=app.ts",src:"app.ts"},'import { query } from "@mongez/monpulse";\n\nfunction main() {\n  query.onFetched(({ collection, output, filter, isMany, count }) => {\n    // do something\n  });\n\n  // will trigger the `onFetched` event after fetching a document\n  const filter = { name: "John Doe" };\n\n  query.first("users", filter);\n\n  // will trigger the `onFetched` event after fetching many documents\n  query.list("users", filter);\n}\n')),(0,i.kt)("p",null,"The payload contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": The collection name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output"),": The fetched document or documents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": The filter that was used to fetch the document or documents based on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMany"),": A boolean value that indicates if the operation is for many documents or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count"),": The number of fetched documents.")))}m.isMDXComponent=!0}}]);