"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="JWT",s={unversionedId:"warlock/auth/jwt",id:"warlock/auth/jwt",title:"JWT",description:"JWT stands for JSON Web Token, it's a standard for creating access tokens that can be used for authentication.",source:"@site/docs/warlock/auth/jwt.mdx",sourceDirName:"warlock/auth",slug:"/warlock/auth/jwt",permalink:"/mongez/docs/warlock/auth/jwt",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"warlock",previous:{title:"Guests",permalink:"/mongez/docs/warlock/auth/guests"},next:{title:"Localization",permalink:"/mongez/docs/category/localization"}},l={},c=[{value:"Generating JWT",id:"generating-jwt",level:2},{value:"Manually generating JWT",id:"manually-generating-jwt",level:2},{value:"Verifying JWT",id:"verifying-jwt",level:2},{value:"Storing Access Tokens",id:"storing-access-tokens",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jwt"},"JWT"),(0,r.kt)("p",null,"JWT stands for JSON Web Token, it's a standard for creating access tokens that can be used for authentication."),(0,r.kt)("h2",{id:"generating-jwt"},"Generating JWT"),(0,r.kt)("p",null,"Access token are tightly coupled with users models such as ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," which both should extends ",(0,r.kt)("a",{parentName:"p",href:"./auth-model"},"Auth Model"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," model has a ",(0,r.kt)("inlineCode",{parentName:"p"},"generateAccessToken")," method that creates and store the access token in the database related to that user."),(0,r.kt)("h2",{id:"manually-generating-jwt"},"Manually generating JWT"),(0,r.kt)("p",null,"If you would like to generate an access token away from the Auth model, you can import ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," object from ",(0,r.kt)("inlineCode",{parentName:"p"},"Warlock")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/main.ts"',title:'"src/app/main.ts"'},'import { jwt } from "@mongez/warlock";\n\nasync function main() {\n  const token = await jwt.generate({\n    id: 1,\n    userType: "user",\n  });\n}\n')),(0,r.kt)("p",null,"This will generate a JWT for the user with id ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and type ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"JWT is generating using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-jwt"},"Fastify JWT")," so any options supported by it can be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate")," method.")),(0,r.kt)("h2",{id:"verifying-jwt"},"Verifying JWT"),(0,r.kt)("p",null,"To validate a JWT, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/main.ts"',title:'"src/app/main.ts"'},'import { jwt } from "@mongez/warlock";\n\nasync function main() {\n  const token = await jwt.verify("token");\n}\n')),(0,r.kt)("h2",{id:"storing-access-tokens"},"Storing Access Tokens"),(0,r.kt)("p",null,"Kindly note that ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt.generate")," does not store the access token in the database, it just generates it, so you need to store it manually."),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"Warlock")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessToken")," model that is being used by ",(0,r.kt)("a",{parentName:"p",href:"./auth-model"},"Auth Model")," to store the access token in the database."))}d.isMDXComponent=!0}}]);