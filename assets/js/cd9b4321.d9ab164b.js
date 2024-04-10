"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="Confirmed",l={unversionedId:"warlock/validation/rules/confirmed",id:"warlock/validation/rules/confirmed",title:"Confirmed",description:"Check if the input value is confirmed by another input value.",source:"@site/docs/warlock/validation/rules/confirmed.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/confirmed",permalink:"/docs/warlock/validation/rules/confirmed",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"warlock",previous:{title:"Boolean",permalink:"/docs/warlock/validation/rules/boolean"},next:{title:"Date",permalink:"/docs/warlock/validation/rules/date"}},c={},s=[{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confirmed"},"Confirmed"),(0,o.kt)("p",null,"Check if the input value is confirmed by another input value."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The validation rule ",(0,o.kt)("strong",{parentName:"p"},"requires a value")," to run against the input value.")),(0,o.kt)("p",null,"If the rule does not receive an option, the comparing input will be ",(0,o.kt)("inlineCode",{parentName:"p"},"confirm{inputName}"),", i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmPassword"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',title:'"src/app/users/controllers/create-account.ts"'},'// ...\ncreateAccount.validation = {\n  rules: {\n    password: ["confirmed"],\n  },\n};\n')),(0,o.kt)("p",null,"When passing an option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',title:'"src/app/users/controllers/create-account.ts"'},'// ...\ncreateAccount.validation = {\n  rules: {\n    password: ["confirmed:confirm_password"],\n  },\n};\n')))}d.isMDXComponent=!0}}]);