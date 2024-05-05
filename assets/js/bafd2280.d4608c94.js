"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[1974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9},i="Fetching Documents",l={unversionedId:"monpulse/aggregate/fetching",id:"monpulse/aggregate/fetching",title:"Fetching Documents",description:"Fetching documents using Mongez Aggregate class.",source:"@site/docs/monpulse/aggregate/fetching.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/fetching",permalink:"/docs/monpulse/aggregate/fetching",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mongodb",previous:{title:"Delete Documents",permalink:"/docs/monpulse/aggregate/delete"},next:{title:"Sorting",permalink:"/docs/monpulse/aggregate/sort"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Using get method",id:"using-get-method",level:2},{value:"Get first document",id:"get-first-document",level:2},{value:"Get last document",id:"get-last-document",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Count documents",id:"count-documents",level:2},{value:"Chunks",id:"chunks",level:2},{value:"Explain",id:"explain",level:2},{value:"Get certain field values",id:"get-certain-field-values",level:2},{value:"Get Unique/Distinct values for a field",id:"get-uniquedistinct-values-for-a-field",level:2},{value:"Get Heavy Unique/Distinct values for a field",id:"get-heavy-uniquedistinct-values-for-a-field",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fetching-documents"},"Fetching Documents"),(0,r.kt)("p",null,"Fetching documents using Mongez Aggregate class."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As we saw, ",(0,r.kt)("inlineCode",{parentName:"p"},"Aggregate")," is a pipeline that hold multiple stages, we saw how to build the pipeline, now let's see how to fetch the documents."),(0,r.kt)("h2",{id:"using-get-method"},"Using get method"),(0,r.kt)("p",null,"This is the most common method to fetch documents, it will return an array of documents."),(0,r.kt)("p",null,"Let's see an example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Aggregate } from "@warlock.js/cascade";\n\nconst users = await new Aggregate("users").where("id", ">", 1500).get();\n')),(0,r.kt)("p",null,"This will return list of documents for the users collection."),(0,r.kt)("p",null,"If we want to map the date before final return, we can pass a callback to the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await new Aggregate("users").get((user) => {\n  user.age = new Date().getFullYear() - user.birthYear;\n  return user;\n});\n')),(0,r.kt)("h2",{id:"get-first-document"},"Get first document"),(0,r.kt)("p",null,"To fetch only first matched document, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await new Aggregate("users").where("id", 1500).first();\n')),(0,r.kt)("p",null,"If no results found, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will be returned."),(0,r.kt)("h2",{id:"get-last-document"},"Get last document"),(0,r.kt)("p",null,"Return last matched document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await new Aggregate("users").where("id", 1500).last();\n')),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Another powerful feature of ",(0,r.kt)("inlineCode",{parentName:"p"},"Aggregate")," is pagination, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"paginate")," method to paginate the results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const results = await new Aggregate("users").paginate(1, 10);\n')),(0,r.kt)("p",null,"The first argument is the page number, and the second argument is the limit."),(0,r.kt)("p",null,"The results contains an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type PaginationInfo = {\n  /**\n   * Limit of the query\n   */\n  limit: number;\n  /**\n   * Results of the query\n   */\n  result: number;\n  /**\n   * Current page of the query\n   */\n  page: number;\n  /**\n   * total results of the query\n   */\n  total: number;\n  /**\n   * total pages of the query\n   */\n  pages: number;\n};\n/**\n * The result of the paginate query\n */\nexport type PaginationListing<T> = {\n  /**\n   * Results of the query\n   */\n  documents: T[];\n  /**\n   * The pagination results\n   */\n  paginationInfo: PaginationInfo;\n};\n")),(0,r.kt)("p",null,"So basically, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"paginationInfo")," object, the ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," is an array of documents, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"paginationInfo")," contains the pagination information."),(0,r.kt)("h2",{id:"count-documents"},"Count documents"),(0,r.kt)("p",null,"To count the number of documents, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const count = await new Aggregate("users").count();\n')),(0,r.kt)("h2",{id:"chunks"},"Chunks"),(0,r.kt)("p",null,"The chunk concept is to split the documents into multiple chunks, this will reduce the loaded documents in the memory especially if we have a large number of documents."),(0,r.kt)("p",null,"To use chunks, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"chunk")," method, it receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," of documents per chunk and a callback to handle the chunk."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await new Aggregate("users").chunk(100, (users) => {\n  // handle the chunk\n});\n')),(0,r.kt)("p",null,"You can also receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"pagination information")," in the second callback argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await new Aggregate("users").chunk(100, (users, pagination) => {\n  // handle the chunk\n});\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you want to stop the chunking process, you can return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," from the callback.")),(0,r.kt)("h2",{id:"explain"},"Explain"),(0,r.kt)("p",null,"Sometimes we need to know how the query is executed, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"explain")," method to get the execution plan of the query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const results = await new Aggregate("users").explain();\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/#return-information-on-aggregation-pipeline-operation"},"explain")," for more information."),(0,r.kt)("h2",{id:"get-certain-field-values"},"Get certain field values"),(0,r.kt)("p",null,"To get certain field values, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const results = await new Aggregate("users").values("name");\n')),(0,r.kt)("p",null,"This will return all values from all documents for the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," method will return an array of values, not an array of documents.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The returned values may return duplicated values, to get unique values, use ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," method.")),(0,r.kt)("h2",{id:"get-uniquedistinct-values-for-a-field"},"Get Unique/Distinct values for a field"),(0,r.kt)("p",null,"To get unique values for a given field, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const results = await new Aggregate("users").unique("name");\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"distinct")," method as an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," method.")),(0,r.kt)("h2",{id:"get-heavy-uniquedistinct-values-for-a-field"},"Get Heavy Unique/Distinct values for a field"),(0,r.kt)("p",null,"In some scenarios, the unique values may contain ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value, to ensure only a ",(0,r.kt)("inlineCode",{parentName:"p"},"non-null")," values are returned, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueHeavy")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const results = await new Aggregate("users").uniqueHeavy("name");\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"distinctHeavy")," method as an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueHeavy")," method.")))}d.isMDXComponent=!0}}]);