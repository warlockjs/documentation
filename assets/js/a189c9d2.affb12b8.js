"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4538],{3771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(4848),o=t(8453);const a={sidebar_position:8},s="Group By",i={id:"cascade/aggregate/group-by",title:"Group By",description:"This stage represents the $group stage in MongoDB.",source:"@site/docs/cascade/aggregate/group-by.mdx",sourceDirName:"cascade/aggregate",slug:"/cascade/aggregate/group-by",permalink:"/docs/cascade/aggregate/group-by",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mongodb",previous:{title:"Unwind",permalink:"/docs/cascade/aggregate/unwind"},next:{title:"Lookup (Joins)",permalink:"/docs/cascade/aggregate/lookup"}},d={},c=[{value:"Method Signature",id:"method-signature",level:2},{value:"A quick brief about the groupBy pipeline",id:"a-quick-brief-about-the-groupby-pipeline",level:2},{value:"Example",id:"example",level:2},{value:"Group by multiple fields",id:"group-by-multiple-fields",level:2},{value:"Group By Using An object",id:"group-by-using-an-object",level:2},{value:"Group by year",id:"group-by-year",level:2},{value:"Group by month",id:"group-by-month",level:2},{value:"Group by year and month",id:"group-by-year-and-month",level:2},{value:"Group by date",id:"group-by-date",level:2},{value:"Group By day of month",id:"group-by-day-of-month",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"group-by",children:"Group By"}),"\n",(0,r.jsxs)(n.p,{children:["This stage represents the ",(0,r.jsx)(n.code,{children:"$group"})," stage in MongoDB."]}),"\n",(0,r.jsx)(n.h2,{id:"method-signature",children:"Method Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"  public groupBy(\r\n    GroupByPipeline: GenericObject,\r\n    groupByData?: GenericObject,\r\n  ): this;\r\n  public groupBy(groupBy_id: string | null): this;\r\n  public groupBy(groupBy_id: string | null, groupByData: GenericObject): this;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"a-quick-brief-about-the-groupby-pipeline",children:"A quick brief about the groupBy pipeline"}),"\n",(0,r.jsxs)(n.p,{children:["The groupBy pipeline is a pipeline that contains the ",(0,r.jsx)(n.code,{children:"_id"})," field and the fields that you want to group by, this allows you to group your data with certain fields and also return computed fields such as total documents, average, sum, etc."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Let's say we have a collection of users and we want to group them by their age and return the total number of users in each group."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const users = await aggregate\r\n  .groupBy("age", {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.p,{children:"This will return an array of objects with output like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\r\n  {\r\n    "_id": 20,\r\n    "total": 2\r\n  },\r\n  {\r\n    "_id": 21,\r\n    "total": 1\r\n  },\r\n  {\r\n    "_id": 22,\r\n    "total": 1\r\n  }\r\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"The previous example we passed the first argument with the column name that we will group with, the second argument is optionally to gather more data about the group."}),"\n",(0,r.jsx)(n.p,{children:"This is usually the most common use case for the groupBy pipeline."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Always head back to the ",(0,r.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/",children:"groupBy pipeline"})," to see all the available operators."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"group-by-multiple-fields",children:"Group by multiple fields"}),"\n",(0,r.jsx)(n.p,{children:"Sometimes we need to group by multiple fields, in this case we can pass the first argument as an object, let's say we need to group all products by category and brand."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupBy(\r\n    {\r\n      category: "$category",\r\n      brand: "$brand",\r\n    },\r\n    {\r\n      total: $agg.count(),\r\n      category: $agg.last("category"),\r\n      brand: $agg.last("brand"),\r\n    }\r\n  )\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.p,{children:"You may also pass the first argument as an array of strings, if the fields are not nested and you don't need to rename them."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupBy(["category", "brand"], {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.p,{children:"This is an exact match for the previous snippet."}),"\n",(0,r.jsx)(n.h2,{id:"group-by-using-an-object",children:"Group By Using An object"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you may pass an object directly to the group by method, this is the native syntax of MongoDB group pipeline."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupBy({\r\n    _id: {\r\n      category: "$category",\r\n      brand: "$brand",\r\n    },\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"group-by-year",children:"Group by year"}),"\n",(0,r.jsx)(n.p,{children:"This method will group documents by year, this is useful if you want to group documents by year and return the total number of documents in each year."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupByYear("createdAt", {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"group-by-month",children:"Group by month"}),"\n",(0,r.jsxs)(n.p,{children:["If we want to group only by months, we can use ",(0,r.jsx)(n.code,{children:"groupByMonth"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupByMonth("createdAt", {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"group-by-year-and-month",children:"Group by year and month"}),"\n",(0,r.jsx)(n.p,{children:"This method will group documents by year and month, this is useful if you want to group documents by year and month and return the total number of documents in each year and month."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupByYearMonth("createdAt", {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"group-by-date",children:"Group by date"}),"\n",(0,r.jsxs)(n.p,{children:["We can group by by year/month/day using ",(0,r.jsx)(n.code,{children:"groupByDate"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupByDate("createdAt", {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"group-by-day-of-month",children:"Group By day of month"}),"\n",(0,r.jsx)(n.p,{children:"This method will group documents by day of month, this is useful if you want to group documents by day of month and return the total number of documents in each day of month."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const products = await aggregate\r\n  .groupByDayOfMonth("createdAt", {\r\n    total: $agg.count(),\r\n  })\r\n  .get();\n'})}),"\n",(0,r.jsxs)(n.p,{children:["So what is the difference between ",(0,r.jsx)(n.code,{children:"groupByDate"})," and ",(0,r.jsx)(n.code,{children:"groupByDayOfMonth"}),"?"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"groupByDate"})," will group documents by year/month/day, while ",(0,r.jsx)(n.code,{children:"groupByDayOfMonth"})," will group documents by day of month only."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Group by accepts any valid Mongodb syntax for grouping, the main objective of this method is to make it easier to group documents by adding an additional layer over the builtin MongoDB group pipeline not to replace it."})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);