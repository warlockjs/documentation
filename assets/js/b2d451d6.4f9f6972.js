"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[3428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="Unwind",l={unversionedId:"monpulse/aggregate/unwind",id:"monpulse/aggregate/unwind",title:"Unwind",description:"Unpack an array field from the input documents to output a document for each element.",source:"@site/docs/monpulse/aggregate/unwind.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/unwind",permalink:"/documentation/docs/monpulse/aggregate/unwind",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mongodb",previous:{title:"Limit",permalink:"/documentation/docs/monpulse/aggregate/limit"},next:{title:"Group By",permalink:"/documentation/docs/monpulse/aggregate/group-by"}},u={},p=[{value:"Method Signature",id:"method-signature",level:2},{value:"Example",id:"example",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unwind"},"Unwind"),(0,a.kt)("p",null,"Unpack an array field from the input documents to output a document for each element."),(0,a.kt)("p",null,"This is extremely useful specially if you're working with a column that have a list of values or when using ",(0,a.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,a.kt)("h2",{id:"method-signature"},"Method Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public unwind(column: string, {\n    includeArrayIndex?: string,\n    preserveNullAndEmptyArrays?: boolean\n}): this;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await aggregate.unwind("hobbies").get();\n')),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/"},"unwind"),"."),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"preserveNullAndEmptyArrays")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," this will trim the result to only documents that have the ",(0,a.kt)("inlineCode",{parentName:"p"},"hobbies")," field."))}m.isMDXComponent=!0}}]);