"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[9684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(a),d=r,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||n;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:1},i="Introduction",s={unversionedId:"monpulse/aggregate/introduction",id:"monpulse/aggregate/introduction",title:"Introduction",description:"MongoDB has a powerful Aggregation framework that allows you to perform complex queries on your data. This package provides a simple way to build and execute these queries.",source:"@site/docs/monpulse/aggregate/introduction.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/introduction",permalink:"/documentation/docs/monpulse/aggregate/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mongodb",previous:{title:"Aggregation",permalink:"/documentation/docs/category/aggregation"},next:{title:"Aggregate Class",permalink:"/documentation/docs/monpulse/aggregate/aggregate-manager"}},p={},l=[{value:"What is Aggregate framework?",id:"what-is-aggregate-framework",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What is a stage?",id:"what-is-a-stage",level:2},{value:"What is a pipeline?",id:"what-is-a-pipeline",level:2},{value:"What is a stage operator?",id:"what-is-a-stage-operator",level:2},{value:"Aggregate vs Find",id:"aggregate-vs-find",level:2}],u={toc:l},g="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"MongoDB has a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/aggregation/"},"powerful Aggregation framework")," that allows you to perform complex queries on your data. This package provides a simple way to build and execute these queries."),(0,r.kt)("h2",{id:"what-is-aggregate-framework"},"What is Aggregate framework?"),(0,r.kt)("p",null,"The MongoDB Aggregation Framework is a powerful tool for processing and analyzing data within MongoDB. It provides a set of operators and stages that allow you to perform complex data manipulations and transformations, similar to the capabilities of SQL's GROUP BY and JOIN operations."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"The Aggregation framework is a pipeline of stages. Each stage takes the output of the previous stage as input and performs a specific operation on the data. The output of the last stage is the result of the aggregation pipeline."),(0,r.kt)("h2",{id:"what-is-a-stage"},"What is a stage?"),(0,r.kt)("p",null,"A stage is a step in the aggregation pipeline. Each stage takes the output of the previous stage as input and performs a specific operation on the data. The output of the last stage is the result of the aggregation pipeline."),(0,r.kt)("p",null,"We can say that a stage is an operation over the current state of the documents, which is the result of the previous stage."),(0,r.kt)("h2",{id:"what-is-a-pipeline"},"What is a pipeline?"),(0,r.kt)("p",null,"A pipeline is a sequence of stages. Each stage takes the output of the previous stage as input and performs a specific operation on the data. The output of the last stage is the result of the aggregation pipeline."),(0,r.kt)("h2",{id:"what-is-a-stage-operator"},"What is a stage operator?"),(0,r.kt)("p",null,"A stage operator is a MongoDB operator that performs a specific operation on the data. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"$match")," operator filters documents based on a condition."),(0,r.kt)("h2",{id:"aggregate-vs-find"},"Aggregate vs Find"),(0,r.kt)("p",null,"The find method is used to retrieve documents from a collection based on specified criteria. It returns a cursor that allows you to iterate over the matched documents. The find method is commonly used for simple queries to retrieve documents that match certain conditions. You can specify various query criteria using operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"$eq"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$gt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$lt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$in"),", etc. Additionally, you can chain additional methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"sort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"skip"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," to further customize the query."),(0,r.kt)("p",null,"The aggregation framework is used to perform complex queries on your data. It allows you to perform various operations on the data such as grouping, sorting, filtering, and projecting. The aggregation framework is commonly used for more complex queries that require multiple stages to be executed in order to retrieve the desired result."))}c.isMDXComponent=!0}}]);