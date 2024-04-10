"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8},l="Lookup (Joins)",r={unversionedId:"monpulse/aggregate/lookup",id:"monpulse/aggregate/lookup",title:"Lookup (Joins)",description:"Perform lookups (joins) on your collections.",source:"@site/docs/monpulse/aggregate/lookup.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/lookup",permalink:"/docs/monpulse/aggregate/lookup",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mongodb",previous:{title:"Group By",permalink:"/docs/monpulse/aggregate/group-by"},next:{title:"Advanced Usage",permalink:"/docs/monpulse/aggregate/advanced"}},s={},p=[{value:"Method Signature",id:"method-signature",level:2},{value:"Example",id:"example",level:2},{value:"Lookup with multiple documents",id:"lookup-with-multiple-documents",level:2},{value:"Lookup with pipeline",id:"lookup-with-pipeline",level:2},{value:"Calling MongoDB Aggregate stages",id:"calling-mongodb-aggregate-stages",level:2},{value:"Available stages to use",id:"available-stages-to-use",level:3},{value:"Lookup with let",id:"lookup-with-let",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lookup-joins"},"Lookup (Joins)"),(0,a.kt)("p",null,"Perform lookups (joins) on your collections."),(0,a.kt)("p",null,"Before we get started, please review the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#lookup-pipeline"},"Lookup Pipeline")," documentation."),(0,a.kt)("h2",{id:"method-signature"},"Method Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public lookup(options: LookupPipelineOptions): this;\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"LookupOptions")," is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type LookupPipelineOptions = {\n  from: string;\n  localField?: string;\n  foreignField?: string;\n  as?: string;\n  single?: boolean;\n  pipeline?: (Pipeline | GenericObject)[];\n  let?: GenericObject;\n};\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's see a basic example, let's see we need to load posts with the updated data of the authors from users collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const posts = await new Aggregate("posts")\n  .lookup({\n    from: "users",\n    localField: "author.id",\n    foreignField: "id",\n    as: "author",\n    single: true,\n  })\n  .get();\n')),(0,a.kt)("p",null,"By adding ",(0,a.kt)("inlineCode",{parentName:"p"},"single")," option, it will return the first document in the array."),(0,a.kt)("h2",{id:"lookup-with-multiple-documents"},"Lookup with multiple documents"),(0,a.kt)("p",null,"Let's load posts with their comments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const posts = await new Aggregate("posts")\n  .lookup({\n    from: "comments",\n    localField: "id",\n    foreignField: "postId",\n    as: "comments",\n  })\n  .get();\n')),(0,a.kt)("p",null,"This will load with each post all the comments that belong to it."),(0,a.kt)("h2",{id:"lookup-with-pipeline"},"Lookup with pipeline"),(0,a.kt)("p",null,"Let's load posts with their comments, but we want to load only the comments that have more than 10 likes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const posts = await new Aggregate("posts")\n  .lookup({\n    from: "comments",\n    localField: "id",\n    foreignField: "postId",\n    as: "comments",\n    pipeline: [\n      {\n        $match: {\n          likes: {\n            $gt: 10,\n          },\n        },\n      },\n    ],\n  })\n  .get();\n')),(0,a.kt)("h2",{id:"calling-mongodb-aggregate-stages"},"Calling MongoDB Aggregate stages"),(0,a.kt)("p",null,"Most of MongoDB Aggregate stages are exported separately, so we can use them directly in the pipelines."),(0,a.kt)("p",null,"Let's load posts with their comments, but we want to load only the comments that have more than 10 likes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { wherePipeline, parsePipelines } from "@mongez/monpulse";\n\nconst posts = await new Aggregate("posts")\n  .lookup({\n    from: "comments",\n    localField: "id",\n    foreignField: "postId",\n    as: "comments",\n    pipeline: parsePipelines([wherePipeline("likes", ">", 10)]),\n  })\n  .get();\n')),(0,a.kt)("h3",{id:"available-stages-to-use"},"Available stages to use"),(0,a.kt)("p",null,"Here are the available stages to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"parsePipelines")," function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wherePipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"where")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"limitPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"limit")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"skipPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"skip")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sortPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"sort")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sortByPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"sortBy")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sortRandomPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"random")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selectPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"select")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deselectPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"deselect")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groupByPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"groupBy")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lookupPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"lookup")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orWherePipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"orWhere")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unwindPipeline"),": Receives same arguments as ",(0,a.kt)("inlineCode",{parentName:"li"},"unwind")," method.")),(0,a.kt)("h2",{id:"lookup-with-let"},"Lookup with let"),(0,a.kt)("p",null,"Let's load posts with their comments, but we want to load only the comments that have more than 10 likes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const posts = await new Aggregate("posts")\n  .lookup({\n    from: "comments",\n    localField: "id",\n    foreignField: "postId",\n    as: "comments",\n    let: {\n      postId: "$id",\n    },\n    pipeline: [\n      {\n        $match: {\n          $expr: {\n            $and: [\n              {\n                $eq: ["$postId", "$$postId"],\n              },\n              {\n                $gt: ["$likes", 10],\n              },\n            ],\n          },\n        },\n      },\n    ],\n  })\n  .get();\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is just the native MongoDB syntax, you can use it directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," option.")))}d.isMDXComponent=!0}}]);