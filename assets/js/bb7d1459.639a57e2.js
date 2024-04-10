"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[8173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:9},l="Sorting",s={unversionedId:"monpulse/aggregate/sort",id:"monpulse/aggregate/sort",title:"Sorting",description:"Sorting is the process of arranging documents in a collection in a specific order, The Aggregate class provides multiple methods to easily sort your documents.",source:"@site/docs/monpulse/aggregate/sort.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/sort",permalink:"/docs/monpulse/aggregate/sort",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mongodb",previous:{title:"Fetching Documents",permalink:"/docs/monpulse/aggregate/fetching"},next:{title:"Data Update",permalink:"/docs/monpulse/aggregate/update"}},i={},p=[{value:"Sort method",id:"sort-method",level:2},{value:"sortByDesc method",id:"sortbydesc-method",level:2},{value:"Sort By multiple fields",id:"sort-by-multiple-fields",level:2},{value:"Sort randomly",id:"sort-randomly",level:2},{value:"Sort by latest",id:"sort-by-latest",level:2},{value:"Sort by oldest",id:"sort-by-oldest",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sorting"},"Sorting"),(0,a.kt)("p",null,"Sorting is the process of arranging documents in a collection in a specific order, The ",(0,a.kt)("inlineCode",{parentName:"p"},"Aggregate")," class provides multiple methods to easily sort your documents."),(0,a.kt)("h2",{id:"sort-method"},"Sort method"),(0,a.kt)("p",null,"This is the basic method to sort using a single field."),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'public sort(field: string, order?: "asc" | "desc" = "asc"): this;\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await aggregate.sort("age", "desc").get();\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"orderBy")," is an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"sort")," method.")),(0,a.kt)("h2",{id:"sortbydesc-method"},"sortByDesc method"),(0,a.kt)("p",null,"This method is an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"sort")," method with ",(0,a.kt)("inlineCode",{parentName:"p"},"desc")," order."),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public sortByDesc(field: string): this;\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await aggregate.sortByDesc("age").get();\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"orderByDesc")," is an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"sortByDesc")," method.")),(0,a.kt)("h2",{id:"sort-by-multiple-fields"},"Sort By multiple fields"),(0,a.kt)("p",null,"If we want to sort by multiple fields, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"sortBy")," method."),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'public sortBy(columns: Record<string, "desc" | "asc">): this;\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await aggregate\n  .sortBy({\n    age: "desc",\n    name: "asc",\n  })\n  .get();\n')),(0,a.kt)("p",null,"This will update documents in the collection to be sorted by ",(0,a.kt)("inlineCode",{parentName:"p"},"age")," in descending order, then by ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," in ascending order."),(0,a.kt)("h2",{id:"sort-randomly"},"Sort randomly"),(0,a.kt)("p",null,"If you want to sort documents randomly, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"random")," method, however, this method requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"@see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/sample/"},"Sample"))),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public random(limit: number): this;\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await aggregate.random(10).get();\n")),(0,a.kt)("h2",{id:"sort-by-latest"},"Sort by latest"),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," method to sort documents using ",(0,a.kt)("inlineCode",{parentName:"p"},"createdAt")," field."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We can not rely on ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," as it would return unexpected results if we used ",(0,a.kt)("inlineCode",{parentName:"p"},"_id"))),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'public latest(column = "createdAt"): this;\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await aggregate.latest().get();\n")),(0,a.kt)("p",null,"If you want to sort by a different column, you can pass it as the first argument."),(0,a.kt)("h2",{id:"sort-by-oldest"},"Sort by oldest"),(0,a.kt)("p",null,"Same thing applies here but this time we use ",(0,a.kt)("inlineCode",{parentName:"p"},"oldest")," method, If we need to sort documents by oldest documents first, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"oldest")," method."),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'public oldest(column = "createdAt"): this;\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await aggregate.oldest().get();\n")))}d.isMDXComponent=!0}}]);