"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[8601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(d,g(g({ref:t},c),{},{components:r})):n.createElement(d,g({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,g=new Array(o);g[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,g[1]=i;for(var l=2;l<o;l++)g[l]=r[l];return n.createElement.apply(null,g)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},g="Aggregate Class",i={unversionedId:"monpulse/aggregate/aggregate-manager",id:"monpulse/aggregate/aggregate-manager",title:"Aggregate Class",description:"We had a quick overview over the MongoDB Aggregate Framework, now let's see how we can use it in our application.",source:"@site/docs/monpulse/aggregate/aggregate-manager.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/aggregate-manager",permalink:"/docs/monpulse/aggregate/aggregate-manager",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mongodb",previous:{title:"Introduction",permalink:"/docs/monpulse/aggregate/introduction"},next:{title:"Selecting Columns / Projecting",permalink:"/docs/monpulse/aggregate/selecting-columns"}},s={},l=[{value:"Create a new Aggregate",id:"create-a-new-aggregate",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregate-class"},"Aggregate Class"),(0,a.kt)("p",null,"We had a quick overview over the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/aggregation/"},"MongoDB Aggregate Framework"),", now let's see how we can use it in our application."),(0,a.kt)("h2",{id:"create-a-new-aggregate"},"Create a new Aggregate"),(0,a.kt)("p",null,"Let's start by creating a new Aggregate instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Aggregate } from "@mongez/monpulse";\n\nconst aggregate = new Aggregate("users"); // pass the collection name\n\nconst usersList = await aggregate.where("id", ">=", 10).get();\n')),(0,a.kt)("p",null,"Consider using the ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate")," class as a query builder, it will help you build your query in a more readable way."))}p.isMDXComponent=!0}}]);