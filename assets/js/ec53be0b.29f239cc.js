"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[3110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:19},i="Min Length",l={unversionedId:"warlock/validation/rules/min-length",id:"warlock/validation/rules/min-length",title:"Min Length",description:"Check if the input value length is greater than or equal to the given length.",source:"@site/docs/warlock/validation/rules/min-length.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/min-length",permalink:"/mongez/docs/warlock/validation/rules/min-length",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"warlock",previous:{title:"Max",permalink:"/mongez/docs/warlock/validation/rules/max"},next:{title:"Min",permalink:"/mongez/docs/warlock/validation/rules/min"}},c={},s=[{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"min-length"},"Min Length"),(0,a.kt)("p",null,"Check if the input value length is greater than or equal to the given length."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The validation rule ",(0,a.kt)("strong",{parentName:"p"},"requires a value")," to run against the input value.")),(0,a.kt)("p",null,"It requires to pass the minimum length as a parameter by adding a colon ",(0,a.kt)("inlineCode",{parentName:"p"},":")," then the minimum length."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/posts/controllers/create-post.ts"',title:'"src/app/posts/controllers/create-post.ts"'},'// ...\ncreatePost.validation = {\n  rules: {\n    title: ["required", "minLength:10"],\n  },\n};\n')))}m.isMDXComponent=!0}}]);