"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[19],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},l),{},{components:n})):o.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},a="Introduction",s={unversionedId:"cascade/relationships/introduction",id:"cascade/relationships/introduction",title:"Introduction",description:"Embedding documents inside another documents is a core feature of MongoDB, and it is very useful when you want to store related data in the same document. This is a very common practice in MongoDB, and it is called Embedded Relationships.",source:"@site/docs/cascade/relationships/introduction.mdx",sourceDirName:"cascade/relationships",slug:"/cascade/relationships/introduction",permalink:"/docs/cascade/relationships/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mongodb",previous:{title:"Relationships",permalink:"/docs/category/relationships"},next:{title:"Embedded Documents",permalink:"/docs/cascade/relationships/embedded-documents"}},d={},c=[{value:"Embedding Documents",id:"embedding-documents",level:2},{value:"Syncing Models",id:"syncing-models",level:2}],l={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Embedding documents inside another documents is a core feature of MongoDB, and it is very useful when you want to store related data in the same document. This is a very common practice in MongoDB, and it is called ",(0,r.kt)("strong",{parentName:"p"},"Embedded Relationships"),"."),(0,r.kt)("p",null,"The main purpose of embedded documents is to reduce the number of queries to the database, and to make faster queries."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this section covers how embedded and syncing documents work only with ",(0,r.kt)("a",{parentName:"p",href:"./../models/introduction"},"Models"),".")),(0,r.kt)("h2",{id:"embedding-documents"},"Embedding Documents"),(0,r.kt)("p",null,"Assume that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," collection where we want to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," of the post, this could be done by two scenarios:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Embedding the author's data inside the post document like the id, name, and image."),(0,r.kt)("li",{parentName:"ol"},"Embedding the author's id inside the post document, and then query the ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," collection to get the author's data.")),(0,r.kt)("p",null,"Each one of them has its own ups and downs, for example if we added only the author id, each time we want to fetch the post or list of posts we want to lookup (join) the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," collection to get the author's data, this will increase the number of queries to the database, and it will make it slower."),(0,r.kt)("p",null,"So second solution here is to embed the author's data inside the post document, this will make the query faster because when we fetch the post we don't have to lookup the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," collection to get the author's data, it is already there."),(0,r.kt)("p",null,"This is where ",(0,r.kt)("a",{parentName:"p",href:"./embedded-documents"},"Embedded Documents")," comes in handy."),(0,r.kt)("h2",{id:"syncing-models"},"Syncing Models"),(0,r.kt)("p",null,"The previous solution is great when we need to reduce the number of queries over database, but it has a downside, the embedded documents need to be updated whenever the original document is updated."),(0,r.kt)("p",null,"Here the ",(0,r.kt)("a",{parentName:"p",href:"./syncing-models"},"Syncing Model Concept")," shines, as it auto updates the embedded documents whenever the original document is updated."))}p.isMDXComponent=!0}}]);