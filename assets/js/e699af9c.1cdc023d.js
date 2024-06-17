"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[1009],{5457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(4848),o=r(5680);const i={sidebar_position:1},n="Introduction",s={id:"cascade/aggregate/introduction",title:"Introduction",description:"MongoDB has a powerful Aggregation framework that allows you to perform complex queries on your data. This package provides a simple way to build and execute these queries.",source:"@site/docs/cascade/aggregate/introduction.mdx",sourceDirName:"cascade/aggregate",slug:"/cascade/aggregate/introduction",permalink:"/docs/cascade/aggregate/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mongodb",previous:{title:"Aggregation",permalink:"/docs/category/aggregation"},next:{title:"Aggregate Class",permalink:"/docs/cascade/aggregate/aggregate-manager"}},c={},d=[{value:"What is Aggregate framework?",id:"what-is-aggregate-framework",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What is a stage?",id:"what-is-a-stage",level:2},{value:"What is a pipeline?",id:"what-is-a-pipeline",level:2},{value:"What is a stage operator?",id:"what-is-a-stage-operator",level:2},{value:"Aggregate vs Find",id:"aggregate-vs-find",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.RP)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["MongoDB has a ",(0,a.jsx)(t.a,{href:"https://docs.mongodb.com/manual/aggregation/",children:"powerful Aggregation framework"})," that allows you to perform complex queries on your data. This package provides a simple way to build and execute these queries."]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-aggregate-framework",children:"What is Aggregate framework?"}),"\n",(0,a.jsx)(t.p,{children:"The MongoDB Aggregation Framework is a powerful tool for processing and analyzing data within MongoDB. It provides a set of operators and stages that allow you to perform complex data manipulations and transformations, similar to the capabilities of SQL's GROUP BY and JOIN operations."}),"\n",(0,a.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,a.jsx)(t.p,{children:"The Aggregation framework is a pipeline of stages. Each stage takes the output of the previous stage as input and performs a specific operation on the data. The output of the last stage is the result of the aggregation pipeline."}),"\n",(0,a.jsx)(t.h2,{id:"what-is-a-stage",children:"What is a stage?"}),"\n",(0,a.jsx)(t.p,{children:"A stage is a step in the aggregation pipeline. Each stage takes the output of the previous stage as input and performs a specific operation on the data. The output of the last stage is the result of the aggregation pipeline."}),"\n",(0,a.jsx)(t.p,{children:"We can say that a stage is an operation over the current state of the documents, which is the result of the previous stage."}),"\n",(0,a.jsx)(t.h2,{id:"what-is-a-pipeline",children:"What is a pipeline?"}),"\n",(0,a.jsx)(t.p,{children:"A pipeline is a sequence of stages. Each stage takes the output of the previous stage as input and performs a specific operation on the data. The output of the last stage is the result of the aggregation pipeline."}),"\n",(0,a.jsx)(t.h2,{id:"what-is-a-stage-operator",children:"What is a stage operator?"}),"\n",(0,a.jsxs)(t.p,{children:["A stage operator is a MongoDB operator that performs a specific operation on the data. For example, the ",(0,a.jsx)(t.code,{children:"$match"})," operator filters documents based on a condition."]}),"\n",(0,a.jsx)(t.h2,{id:"aggregate-vs-find",children:"Aggregate vs Find"}),"\n",(0,a.jsxs)(t.p,{children:["The find method is used to retrieve documents from a collection based on specified criteria. It returns a cursor that allows you to iterate over the matched documents. The find method is commonly used for simple queries to retrieve documents that match certain conditions. You can specify various query criteria using operators such as ",(0,a.jsx)(t.code,{children:"$eq"}),", ",(0,a.jsx)(t.code,{children:"$gt"}),", ",(0,a.jsx)(t.code,{children:"$lt"}),", ",(0,a.jsx)(t.code,{children:"$in"}),", etc. Additionally, you can chain additional methods like ",(0,a.jsx)(t.code,{children:"sort"}),", ",(0,a.jsx)(t.code,{children:"limit"}),", ",(0,a.jsx)(t.code,{children:"skip"}),", and ",(0,a.jsx)(t.code,{children:"projection"})," to further customize the query."]}),"\n",(0,a.jsx)(t.p,{children:"The aggregation framework is used to perform complex queries on your data. It allows you to perform various operations on the data such as grouping, sorting, filtering, and projecting. The aggregation framework is commonly used for more complex queries that require multiple stages to be executed in order to retrieve the desired result."})]})}function g(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>d});var a=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,u=p["".concat(c,".").concat(h)]||p[h]||l[h]||i;return r?a.createElement(u,n(n({ref:t},g),{},{components:r})):a.createElement(u,n({ref:t},g))}));g.displayName="MDXCreateElement"}}]);