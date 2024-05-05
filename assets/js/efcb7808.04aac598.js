"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[826],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},u=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(d,g(g({ref:a},u),{},{components:t})):n.createElement(d,g({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,g=new Array(o);g[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,g[1]=s;for(var i=2;i<o;i++)g[i]=t[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7214:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>g,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:5},g="$agg",s={unversionedId:"cascade/aggregate/agg",id:"cascade/aggregate/agg",title:"$agg",description:"The $agg utility is a helper that helps you build your aggregate query in a more readable way.",source:"@site/docs/cascade/aggregate/agg.mdx",sourceDirName:"cascade/aggregate",slug:"/cascade/aggregate/agg",permalink:"/docs/cascade/aggregate/agg",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mongodb",previous:{title:"Filtering",permalink:"/docs/cascade/aggregate/filtering"},next:{title:"Skip",permalink:"/docs/cascade/aggregate/skip"}},l={},i=[{value:"Example of usage",id:"example-of-usage",level:2},{value:"Available methods",id:"available-methods",level:2},{value:"Count total documents",id:"count-total-documents",level:3},{value:"Sum field",id:"sum-field",level:3},{value:"Get Field Average",id:"get-field-average",level:3},{value:"Get Field Minimum Value",id:"get-field-minimum-value",level:3},{value:"Get Field Maximum Value",id:"get-field-maximum-value",level:3},{value:"Get Field First Value",id:"get-field-first-value",level:3},{value:"Get Field Last Value",id:"get-field-last-value",level:3},{value:"Greater than operator",id:"greater-than-operator",level:3},{value:"Greater than or equal operator",id:"greater-than-or-equal-operator",level:3},{value:"Less than operator",id:"less-than-operator",level:3},{value:"Less than or equal operator",id:"less-than-or-equal-operator",level:3},{value:"Equal operator",id:"equal-operator",level:3},{value:"Not equal operator",id:"not-equal-operator",level:3},{value:"In operator",id:"in-operator",level:3},{value:"In Array operator",id:"in-array-operator",level:3},{value:"Not in operator",id:"not-in-operator",level:3},{value:"Exists operator",id:"exists-operator",level:3},{value:"Not exists operator",id:"not-exists-operator",level:3},{value:"Regex operator",id:"regex-operator",level:3},{value:"Like operator",id:"like-operator",level:3},{value:"Not like operator",id:"not-like-operator",level:3},{value:"Not Null operator",id:"not-null-operator",level:2},{value:"Is Null operator",id:"is-null-operator",level:3},{value:"Between operator",id:"between-operator",level:3},{value:"Not between operator",id:"not-between-operator",level:3},{value:"Condition Operator",id:"condition-operator",level:3},{value:"Boolean Condition Operator",id:"boolean-condition-operator",level:3},{value:"Concat Operator",id:"concat-operator",level:3},{value:"Concat With Operator",id:"concat-with-operator",level:3},{value:"Year Operator",id:"year-operator",level:3},{value:"Month Operator",id:"month-operator",level:3},{value:"Day Of Month Operator",id:"day-of-month-operator",level:3},{value:"Day Of Week Operator",id:"day-of-week-operator",level:3},{value:"First Year Operator",id:"first-year-operator",level:3},{value:"Last Year Operator",id:"last-year-operator",level:3},{value:"First Month Operator",id:"first-month-operator",level:3},{value:"Last Month Operator",id:"last-month-operator",level:3},{value:"First Day Of Month Operator",id:"first-day-of-month-operator",level:3},{value:"Last Day Of Month Operator",id:"last-day-of-month-operator",level:3},{value:"Push operator",id:"push-operator",level:3},{value:"Columns Utility",id:"columns-utility",level:2},{value:"columnName utility",id:"columnname-utility",level:3}],u={toc:i},p="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agg"},"$agg"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg")," utility is a helper that helps you build your aggregate query in a more readable way."),(0,r.kt)("p",null,"This would be used mostly with the group by stage to build the group by fields."),(0,r.kt)("p",null,"Let's see an example"),(0,r.kt)("h2",{id:"example-of-usage"},"Example of usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy("age", {\n    total: $agg.count(),\n    totalAges: $agg.sum("age"),\n    firstName: $agg.first("name"),\n    lastName: $agg.last("name"),\n  })\n  .get();\n')),(0,r.kt)("h2",{id:"available-methods"},"Available methods"),(0,r.kt)("p",null,"Here are the available methods:"),(0,r.kt)("h3",{id:"count-total-documents"},"Count total documents"),(0,r.kt)("p",null,"This method counts the total number of documents in the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy("gender", {\n    total: $agg.count(),\n  })\n  .get();\n')),(0,r.kt)("p",null,"This will return something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "_id": "male",\n    "total": 10\n  },\n  {\n    "_id": "female",\n    "total": 5\n  }\n]\n')),(0,r.kt)("h3",{id:"sum-field"},"Sum field"),(0,r.kt)("p",null,"To sum a column's value use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.sum")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy("gender", {\n    score: $agg.sum("score"),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"get-field-average"},"Get Field Average"),(0,r.kt)("p",null,"To get the average of a column's value use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.avg")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy("gender", {\n    averageScore: $agg.avg("score"),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"average")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy("gender", {\n    averageScore: $agg.average("score"),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"get-field-minimum-value"},"Get Field Minimum Value"),(0,r.kt)("p",null,"To get the minimum value of a column's value use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.min")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy(null, {\n    score: $agg.min("score"),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"get-field-maximum-value"},"Get Field Maximum Value"),(0,r.kt)("p",null,"To get the maximum value of a column's value use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.max")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy(null, {\n    score: $agg.max("score"),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"get-field-first-value"},"Get Field First Value"),(0,r.kt)("p",null,"As working with group by could be tricky, you may want to get the first value of a column, this is where ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.first")," method comes in handy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy(null, {\n    firstName: $agg.first("name"),\n  })\n  .get();\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/first/"},"first"))),(0,r.kt)("h3",{id:"get-field-last-value"},"Get Field Last Value"),(0,r.kt)("p",null,"As working with group by could be tricky, you may want to get the last value of a column, this is where ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.last")," method comes in handy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .groupBy(null, {\n    lastName: $agg.last("name"),\n  })\n  .get();\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/last/"},"last"))),(0,r.kt)("h3",{id:"greater-than-operator"},"Greater than operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is greater than a specific value, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.gt")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.gt(10),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"greaterThan")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.greaterThan(10),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"greater-than-or-equal-operator"},"Greater than or equal operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is greater than or equal a specific value, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.gte")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.gte(10),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"greaterThanOrEqual")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.greaterThanOrEqual(10),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"less-than-operator"},"Less than operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is less than a specific value, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.lt")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.lt(10),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"lessThan")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.lessThan(10),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"less-than-or-equal-operator"},"Less than or equal operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is less than or equal a specific value, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.lte")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.lte(10),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"lessThanOrEqual")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.lessThanOrEqual(10),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"equal-operator"},"Equal operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is equal a specific value, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.eq")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.eq(10),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.equal")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.equal(10),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"not-equal-operator"},"Not equal operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is not equal a specific value, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.ne")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.ne(10),\n  })\n  .get();\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notEqual")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.notEqual(10),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"in-operator"},"In operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is in a specific array of values, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.in")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate\n  .where({\n    score: $agg.in([10, 20, 30]),\n  })\n  .get();\n')),(0,r.kt)("h3",{id:"in-array-operator"},"In Array operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is in a specific array of values, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.inArray")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.inArray([10, 20, 30]),\n});\n')),(0,r.kt)("h3",{id:"not-in-operator"},"Not in operator"),(0,r.kt)("p",null,"To get the documents where the value of a field is not in a specific array of values, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.nin")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.nin([10, 20, 30]),\n});\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notIn")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.notIn([10, 20, 30]),\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notInArray")," method is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notIn")," method.")),(0,r.kt)("h3",{id:"exists-operator"},"Exists operator"),(0,r.kt)("p",null,"To get the documents where the field exists, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.exists")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.exists(),\n});\n')),(0,r.kt)("h3",{id:"not-exists-operator"},"Not exists operator"),(0,r.kt)("p",null,"To get the documents where the field does not exist, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notExists")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.notExists(),\n});\n')),(0,r.kt)("h3",{id:"regex-operator"},"Regex operator"),(0,r.kt)("p",null,"To get the documents where the field matches a specific regular expression, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.regex")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.regex(/john/i),\n});\n')),(0,r.kt)("h3",{id:"like-operator"},"Like operator"),(0,r.kt)("p",null,"This is just a syntactic sugar for ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.regex")," method, to feel more comfortable with SQL syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.like(/john/i),\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"like")," operator will also make the search ignore the case of the given value if the given value is a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.like("john"),\n});\n')),(0,r.kt)("h3",{id:"not-like-operator"},"Not like operator"),(0,r.kt)("p",null,"This is just a syntactic sugar for the ",(0,r.kt)("strong",{parentName:"p"},"negate")," of the given value of ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.regex")," method, to feel more comfortable with SQL syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.notLike(/john/i),\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"notLike")," operator will also make the search ignore the case of the given value if the given value is a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.notLike("john"),\n});\n')),(0,r.kt)("h2",{id:"not-null-operator"},"Not Null operator"),(0,r.kt)("p",null,"To get the documents where the field is not null, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notNull")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.notNull(),\n});\n')),(0,r.kt)("h3",{id:"is-null-operator"},"Is Null operator"),(0,r.kt)("p",null,"To get the documents where the field is null, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.isNull")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  name: $agg.isNull(),\n});\n')),(0,r.kt)("h3",{id:"between-operator"},"Between operator"),(0,r.kt)("p",null,"To get the documents where the field is between two values, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.between")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.between(10, 20),\n});\n')),(0,r.kt)("h3",{id:"not-between-operator"},"Not between operator"),(0,r.kt)("p",null,"To get the documents where the field is not between two values, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.notBetween")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.where({\n  score: $agg.notBetween(10, 20),\n});\n')),(0,r.kt)("h3",{id:"condition-operator"},"Condition Operator"),(0,r.kt)("p",null,"In some scenarios, you want to return a value if a condition is met, and return another value if the condition is not met."),(0,r.kt)("p",null,"To do so, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.condition")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  state: $agg.condition($agg.gte(90, "score"), "great", "bad"),\n});\n')),(0,r.kt)("p",null,"This will return the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," based on the users score, if it is greater than or equal 90, it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"great"),", otherwise, it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"bad"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"$agg.cond")," method is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.condition")," method.")),(0,r.kt)("h3",{id:"boolean-condition-operator"},"Boolean Condition Operator"),(0,r.kt)("p",null,"This is just a an easier way to return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if condition is met, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  isGoodUser: $agg.booleanCondition($agg.gte(90, "score")),\n});\n')),(0,r.kt)("h3",{id:"concat-operator"},"Concat Operator"),(0,r.kt)("p",null,"To concatenate two or more ",(0,r.kt)("inlineCode",{parentName:"p"},"columns"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.concat")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  fullName: $agg.concat("$firstName", " ", "$lastName"),\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that here if you want to concat columns, add ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," sign before the column name, otherwise, it will be treated as a string.")),(0,r.kt)("h3",{id:"concat-with-operator"},"Concat With Operator"),(0,r.kt)("p",null,"To concatenate two or more ",(0,r.kt)("inlineCode",{parentName:"p"},"columns")," with a separator, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.concatWith")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  fullName: $agg.concatWith(" ", "firstName", "lastName"),\n});\n')),(0,r.kt)("p",null,"You can concatenate as many columns as you want, just pass them as arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.concat")," method."),(0,r.kt)("p",null,"Here, you don't need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," sign before the column name, because any value will be added after the first argument (",(0,r.kt)("inlineCode",{parentName:"p"},"The separator"),") will be treated as a column name."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"$agg.mergeWith")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.concatWith")," method.")),(0,r.kt)("h3",{id:"year-operator"},"Year Operator"),(0,r.kt)("p",null,"To get the year of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.year")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  year: $agg.year("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"month-operator"},"Month Operator"),(0,r.kt)("p",null,"To get the month of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.month")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  month: $agg.month("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"day-of-month-operator"},"Day Of Month Operator"),(0,r.kt)("p",null,"To get the day of month of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.dayOfMonth")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  dayOfMonth: $agg.dayOfMonth("createdAt"),\n});\n')),(0,r.kt)("p",null,"This will return the day of month of the ",(0,r.kt)("inlineCode",{parentName:"p"},"createdAt")," column with ",(0,r.kt)("inlineCode",{parentName:"p"},"integer")," value that represents the day of month."),(0,r.kt)("h3",{id:"day-of-week-operator"},"Day Of Week Operator"),(0,r.kt)("p",null,"Returns the day of the week for a date as a number between 1 (Sunday) and 7 (Saturday)."),(0,r.kt)("p",null,"To get the day of week of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.dayOfWeek")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.select({\n  dayOfWeek: $agg.dayOfWeek("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"first-year-operator"},"First Year Operator"),(0,r.kt)("p",null,"To get the first year of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.firstYear")," method, this is useful with ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  year: $agg.firstYear("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"last-year-operator"},"Last Year Operator"),(0,r.kt)("p",null,"To get the last year of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.lastYear")," method, this is useful with ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  year: $agg.lastYear("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"first-month-operator"},"First Month Operator"),(0,r.kt)("p",null,"To get the first month of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.firstMonth")," method, this is useful with ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  month: $agg.firstMonth("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"last-month-operator"},"Last Month Operator"),(0,r.kt)("p",null,"To get the last month of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.lastMonth")," method, this is useful with ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  month: $agg.lastMonth("createdAt"),\n});\n')),(0,r.kt)("h3",{id:"first-day-of-month-operator"},"First Day Of Month Operator"),(0,r.kt)("p",null,"To get the first day of month of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.firstDayOfMonth")," method, this is useful with ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  dayOfMonth: $agg.firstDayOfMonth("createdAt"),\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that this utility return the first matched value of the day of month not the first day of month of the date.")),(0,r.kt)("h3",{id:"last-day-of-month-operator"},"Last Day Of Month Operator"),(0,r.kt)("p",null,"To get the last day of month of a date, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.lastDayOfMonth")," method, this is useful with ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  dayOfMonth: $agg.lastDayOfMonth("createdAt"),\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that this utility return the last matched value of the day of month not the last day of month of the date.")),(0,r.kt)("h3",{id:"push-operator"},"Push operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/push/"},"Push Operator")," is used to add a value to an array."),(0,r.kt)("p",null,"To use it, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.push")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  cities: $agg.push("city"),\n});\n')),(0,r.kt)("h2",{id:"columns-utility"},"Columns Utility"),(0,r.kt)("p",null,"If you want to add columns list in the ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," stage, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.columns")," method, let's first see an example without using it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, {\n  country: "$country",\n  city: "$city",\n});\n')),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.columns")," method, you can write the above code as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.group(null, $agg.columns("country", "city"));\n')),(0,r.kt)("h3",{id:"columnname-utility"},"columnName utility"),(0,r.kt)("p",null,"If you want to make sure that the column is written as it supposed to be ",(0,r.kt)("inlineCode",{parentName:"p"},"making sure that it starts with $ sign"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$agg.columnName")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { $agg, Aggregate } from "@warlock.js/cascade";\n\nconst aggregate = new Aggregate("users");\n\nconst users = await aggregate.project({\n  fullName: $agg.concat(\n    $agg.columnName("firstName"),\n    " ",\n    $agg.columnName("lastName")\n  ),\n});\n')),(0,r.kt)("p",null,"Although it is a little bit long, but could be useful with dynamic column names defined in variables."))}c.isMDXComponent=!0}}]);