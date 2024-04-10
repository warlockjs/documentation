"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[3547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:9},l="Data Update",i={unversionedId:"monpulse/aggregate/update",id:"monpulse/aggregate/update",title:"Data Update",description:"Update documents using Aggregate class.",source:"@site/docs/monpulse/aggregate/update.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/update",permalink:"/docs/monpulse/aggregate/update",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mongodb",previous:{title:"Sorting",permalink:"/docs/monpulse/aggregate/sort"},next:{title:"Model Aggregate",permalink:"/docs/monpulse/aggregate/model-aggregate"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Example",id:"example",level:2},{value:"Unset fields",id:"unset-fields",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-update"},"Data Update"),(0,a.kt)("p",null,"Update documents using ",(0,a.kt)("inlineCode",{parentName:"p"},"Aggregate")," class."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Aggregate")," class also provides a way to update documents of collection using the ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate")," framework."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const totalUpdatedUsers = await aggregate\n  .where("age", ">", 18)\n  .update({ isAdult: true });\n')),(0,a.kt)("p",null,"This will update all users with age greater than 18 and set ",(0,a.kt)("inlineCode",{parentName:"p"},"isAdult")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and return the number of updated documents."),(0,a.kt)("h2",{id:"unset-fields"},"Unset fields"),(0,a.kt)("p",null,"We can also unset one field or multiple fields using ",(0,a.kt)("inlineCode",{parentName:"p"},"unset")," method."),(0,a.kt)("p",null,"Method Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public unset(...fields: string[]): this;\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const totalUpdatedUsers = await aggregate\n  .where("age", ">", 18)\n  .unset("isAdult");\n')))}d.isMDXComponent=!0}}]);