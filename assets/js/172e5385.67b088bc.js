"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="Unwind",l={unversionedId:"cascade/aggregate/unwind",id:"cascade/aggregate/unwind",title:"Unwind",description:"Unpack an array field from the input documents to output a document for each element.",source:"@site/docs/cascade/aggregate/unwind.mdx",sourceDirName:"cascade/aggregate",slug:"/cascade/aggregate/unwind",permalink:"/docs/cascade/aggregate/unwind",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mongodb",previous:{title:"Limit",permalink:"/docs/cascade/aggregate/limit"},next:{title:"Group By",permalink:"/docs/cascade/aggregate/group-by"}},c={},u=[{value:"Method Signature",id:"method-signature",level:2},{value:"Example",id:"example",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unwind"},"Unwind"),(0,a.kt)("p",null,"Unpack an array field from the input documents to output a document for each element."),(0,a.kt)("p",null,"This is extremely useful specially if you're working with a column that have a list of values or when using ",(0,a.kt)("inlineCode",{parentName:"p"},"group")," stage."),(0,a.kt)("h2",{id:"method-signature"},"Method Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public unwind(column: string, {\n    includeArrayIndex?: string,\n    preserveNullAndEmptyArrays?: boolean\n}): this;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await aggregate.unwind("hobbies").get();\n')),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/"},"unwind"),"."),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"preserveNullAndEmptyArrays")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," this will trim the result to only documents that have the ",(0,a.kt)("inlineCode",{parentName:"p"},"hobbies")," field."))}d.isMDXComponent=!0}}]);