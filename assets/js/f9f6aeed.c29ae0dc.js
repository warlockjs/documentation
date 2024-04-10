"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},g=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),s=i(n),d=o,y=s["".concat(l,".").concat(d)]||s[d]||c[d]||r;return n?a.createElement(y,u(u({ref:t},g),{},{components:n})):a.createElement(y,u({ref:t},g))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,u=new Array(r);u[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,u[1]=p;for(var i=2;i<r;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:8},u="Group By",p={unversionedId:"monpulse/aggregate/group-by",id:"monpulse/aggregate/group-by",title:"Group By",description:"This stage represents the $group stage in MongoDB.",source:"@site/docs/monpulse/aggregate/group-by.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/group-by",permalink:"/docs/monpulse/aggregate/group-by",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mongodb",previous:{title:"Unwind",permalink:"/docs/monpulse/aggregate/unwind"},next:{title:"Lookup (Joins)",permalink:"/docs/monpulse/aggregate/lookup"}},l={},i=[{value:"Method Signature",id:"method-signature",level:2},{value:"A quick brief about the groupBy pipeline",id:"a-quick-brief-about-the-groupby-pipeline",level:2},{value:"Example",id:"example",level:2},{value:"Group by multiple fields",id:"group-by-multiple-fields",level:2},{value:"Group By Using An object",id:"group-by-using-an-object",level:2},{value:"Group by year",id:"group-by-year",level:2},{value:"Group by month",id:"group-by-month",level:2},{value:"Group by year and month",id:"group-by-year-and-month",level:2},{value:"Group by date",id:"group-by-date",level:2},{value:"Group By day of month",id:"group-by-day-of-month",level:2}],g={toc:i},s="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"group-by"},"Group By"),(0,o.kt)("p",null,"This stage represents the ",(0,o.kt)("inlineCode",{parentName:"p"},"$group")," stage in MongoDB."),(0,o.kt)("h2",{id:"method-signature"},"Method Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  public groupBy(\n    GroupByPipeline: GenericObject,\n    groupByData?: GenericObject,\n  ): this;\n  public groupBy(groupBy_id: string | null): this;\n  public groupBy(groupBy_id: string | null, groupByData: GenericObject): this;\n")),(0,o.kt)("h2",{id:"a-quick-brief-about-the-groupby-pipeline"},"A quick brief about the groupBy pipeline"),(0,o.kt)("p",null,"The groupBy pipeline is a pipeline that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," field and the fields that you want to group by, this allows you to group your data with certain fields and also return computed fields such as total documents, average, sum, etc."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's say we have a collection of users and we want to group them by their age and return the total number of users in each group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await aggregate\n  .groupBy("age", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("p",null,"This will return an array of objects with output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "_id": 20,\n    "total": 2\n  },\n  {\n    "_id": 21,\n    "total": 1\n  },\n  {\n    "_id": 22,\n    "total": 1\n  }\n]\n')),(0,o.kt)("p",null,"The previous example we passed the first argument with the column name that we will group with, the second argument is optionally to gather more data about the group."),(0,o.kt)("p",null,"This is usually the most common use case for the groupBy pipeline."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Always head back to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/"},"groupBy pipeline")," to see all the available operators.")),(0,o.kt)("h2",{id:"group-by-multiple-fields"},"Group by multiple fields"),(0,o.kt)("p",null,"Sometimes we need to group by multiple fields, in this case we can pass the first argument as an object, let's say we need to group all products by category and brand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupBy(\n    {\n      category: "$category",\n      brand: "$brand",\n    },\n    {\n      total: $agg.count(),\n      category: $agg.last("category"),\n      brand: $agg.last("brand"),\n    }\n  )\n  .get();\n')),(0,o.kt)("p",null,"You may also pass the first argument as an array of strings, if the fields are not nested and you don't need to rename them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupBy(["category", "brand"], {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("p",null,"This is an exact match for the previous snippet."),(0,o.kt)("h2",{id:"group-by-using-an-object"},"Group By Using An object"),(0,o.kt)("p",null,"Alternatively, you may pass an object directly to the group by method, this is the native syntax of MongoDB group pipeline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupBy({\n    _id: {\n      category: "$category",\n      brand: "$brand",\n    },\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("h2",{id:"group-by-year"},"Group by year"),(0,o.kt)("p",null,"This method will group documents by year, this is useful if you want to group documents by year and return the total number of documents in each year."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupByYear("createdAt", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("h2",{id:"group-by-month"},"Group by month"),(0,o.kt)("p",null,"If we want to group only by months, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByMonth")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupByMonth("createdAt", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("h2",{id:"group-by-year-and-month"},"Group by year and month"),(0,o.kt)("p",null,"This method will group documents by year and month, this is useful if you want to group documents by year and month and return the total number of documents in each year and month."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupByYearMonth("createdAt", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("h2",{id:"group-by-date"},"Group by date"),(0,o.kt)("p",null,"We can group by by year/month/day using ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByDate")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupByDate("createdAt", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("h2",{id:"group-by-day-of-month"},"Group By day of month"),(0,o.kt)("p",null,"This method will group documents by day of month, this is useful if you want to group documents by day of month and return the total number of documents in each day of month."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const products = await aggregate\n  .groupByDayOfMonth("createdAt", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,o.kt)("p",null,"So what is the difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByDate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByDayOfMonth"),"?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"groupByDate")," will group documents by year/month/day, while ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByDayOfMonth")," will group documents by day of month only."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Group by accepts any valid Mongodb syntax for grouping, the main objective of this method is to make it easier to group documents by adding an additional layer over the builtin MongoDB group pipeline not to replace it.")))}c.isMDXComponent=!0}}]);