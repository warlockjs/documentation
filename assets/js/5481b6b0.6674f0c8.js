"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[1911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const s={sidebar_position:5},a="Promise All Object",l={unversionedId:"warlock/utils/promise-all-object",id:"warlock/utils/promise-all-object",title:"Promise All Object",description:"promiseAllObject is a utility function that allows you to run multiple promises at once, and return the results as an object.",source:"@site/docs/warlock/utils/promise-all-object.mdx",sourceDirName:"warlock/utils",slug:"/warlock/utils/promise-all-object",permalink:"/docs/warlock/utils/promise-all-object",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"warlock",previous:{title:"Sleep",permalink:"/docs/warlock/utils/sleep"},next:{title:"Sluggable",permalink:"/docs/warlock/utils/sluggable"}},i={},c=[{value:"Usage",id:"usage",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"promise-all-object"},"Promise All Object"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"promiseAllObject")," is a utility function that allows you to run multiple promises at once, and return the results as an object."),(0,n.kt)("p",null,"This is a more convenient way to use ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise.all")," when you need to return the results as an object."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"In anywhere in your code, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"promiseAllObject")," function as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/posts/controllers/get-posts.ts"',title:'"src/app/posts/controllers/get-posts.ts"'},'import { promiseAllObject, Request, Response } from "@mongez/warlock";\nimport postsRepository from "./../repositories/posts";\nimport categoriesRepository from "app/categories/repositories/categories";\n\nexport default async function getPosts(request: Request, response: Response) {\n  const { posts, categories } = await promiseAllToObject({\n    categories: categoriesRepository.all(),\n    posts: postsRepository.all(),\n  });\n  // rest of the code\n}\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note that you should not use the ",(0,n.kt)("inlineCode",{parentName:"p"},"await")," keyword beside each promise, because ",(0,n.kt)("inlineCode",{parentName:"p"},"promiseAllObject")," will do that for you.")))}m.isMDXComponent=!0}}]);