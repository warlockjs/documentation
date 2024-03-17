"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=a(n),d=o,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var a=2;a<l;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:4},s="Deleting Documents",i={unversionedId:"monpulse/queries/deleting-documents",id:"monpulse/queries/deleting-documents",title:"Deleting Documents",description:"We can delete a single document using deleteOne method and multiple documents using delete method.",source:"@site/docs/monpulse/queries/deleting-documents.mdx",sourceDirName:"monpulse/queries",slug:"/monpulse/queries/deleting-documents",permalink:"/mongez/docs/monpulse/queries/deleting-documents",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mongodb",previous:{title:"Saving Documents",permalink:"/mongez/docs/monpulse/queries/saving-documents"},next:{title:"Models",permalink:"/mongez/docs/category/models"}},u={},a=[{value:"Delete one document",id:"delete-one-document",level:2},{value:"Delete multiple documents",id:"delete-multiple-documents",level:2}],c={toc:a},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deleting-documents"},"Deleting Documents"),(0,o.kt)("p",null,"We can delete a single document using ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteOne")," method and multiple documents using ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," method."),(0,o.kt)("h2",{id:"delete-one-document"},"Delete one document"),(0,o.kt)("p",null,"To delete a single document, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteOne")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { query } from "@mongez/monpulse";\n\nconst result = await query.deleteOne("users", {\n  _id: "60b9b0b0b0b0b0b0b0b0b0b0",\n});\n')),(0,o.kt)("h2",{id:"delete-multiple-documents"},"Delete multiple documents"),(0,o.kt)("p",null,"To delete multiple documents, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { query } from "@mongez/monpulse";\n\nconst result = await query.delete("users");\n')),(0,o.kt)("p",null,"This will delete the entire collection documents, but will not delete the collection itself."),(0,o.kt)("p",null,"To delete certain documents, pass the filter object as the second argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { query } from "@mongez/monpulse";\n\nconst result = await query.delete("users", {\n  age: {\n    $gt: 18,\n  },\n});\n')),(0,o.kt)("p",null,"It will delete all users with age greater than 18."))}m.isMDXComponent=!0}}]);