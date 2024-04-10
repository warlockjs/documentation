"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[2425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(g,c(c({ref:n},p),{},{components:t})):o.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const i={sidebar_position:4},c="Connecting To Database",r={unversionedId:"monpulse/getting-started/connecting-to-database",id:"monpulse/getting-started/connecting-to-database",title:"Connecting To Database",description:"Connecting to a database is easy. You can use the connectToDatabase method to connect to a database. The connect method accepts a single argument, which is the name of the database you want to connect to.",source:"@site/docs/monpulse/getting-started/connecting-to-database.mdx",sourceDirName:"monpulse/getting-started",slug:"/monpulse/getting-started/connecting-to-database",permalink:"/documentation/docs/monpulse/getting-started/connecting-to-database",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mongodb",previous:{title:"Installation",permalink:"/documentation/docs/monpulse/getting-started/installation"},next:{title:"Queries",permalink:"/documentation/docs/category/queries"}},s={},l=[{value:"Building Url Connection",id:"building-url-connection",level:2},{value:"Using Connection Url",id:"using-connection-url",level:2},{value:"Singleton Connection",id:"singleton-connection",level:2},{value:"Creating more than one connection",id:"creating-more-than-one-connection",level:2},{value:"Once connected",id:"once-connected",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-to-database"},"Connecting To Database"),(0,a.kt)("p",null,"Connecting to a database is easy. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectToDatabase")," method to connect to a database. The ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," method accepts a single argument, which is the name of the database you want to connect to."),(0,a.kt)("h2",{id:"building-url-connection"},"Building Url Connection"),(0,a.kt)("p",null,"If you want to make it simple, you can easily pass the database connection url segments, which contains: ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"dbAuth"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { connectToDatabase } from "@mongez/monpulse";\n\nconnectToDatabase({\n  host: "localhost",\n  port: 27017,\n  database: "my-database",\n  username: "my-username",\n  password: "my-password",\n  dbAuth: "admin",\n});\n')),(0,a.kt)("p",null,"These are the minimum configurations needed to connect to MongoDB server, but you can pass more options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectToDatabase")," function that receives the same options as the ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoClient")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{10,11}","{10,11}":!0},'import { connectToDatabase } from "@mongez/monpulse";\n\nconnectToDatabase({\n  host: "localhost",\n  port: 27017,\n  database: "my-database",\n  username: "my-username",\n  password: "my-password",\n  dbAuth: "admin",\n  retryWrites: true,\n  replicaSet: "rs0",\n});\n')),(0,a.kt)("h2",{id:"using-connection-url"},"Using Connection Url"),(0,a.kt)("p",null,"Alternatively, you can pass the connection url directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectToDatabase")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { connectToDatabase } from "@mongez/monpulse";\n\nconnectToDatabase({\n  url: "mongodb://localhost:27017/my-database",\n  database: "my-database",\n});\n')),(0,a.kt)("h2",{id:"singleton-connection"},"Singleton Connection"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"connectToDatabase")," will ensure that connection is established only once ",(0,a.kt)("inlineCode",{parentName:"p"},"Singleton Pattern"),", and will ignore any other calls to the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectToDatabase")," function."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use multiple database, you don't need to create multiple connections, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDatabase")," method to switch between databases.")),(0,a.kt)("h2",{id:"creating-more-than-one-connection"},"Creating more than one connection"),(0,a.kt)("p",null,"In some situations, you might need to create multiple connections per project, in that sense you can manually create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Connection } from "@mongez/monpulse";\n\nconst connection = new Connection();\n\nconnection.connect({\n  // same configurations as the connectToDatabase function\n});\n')),(0,a.kt)("h2",{id:"once-connected"},"Once connected"),(0,a.kt)("p",null,"Sometimes you want to execute a code when the connection is established, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"onceConnected")," method to execute a callback when the connection is established."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { onceConnected } from "@mongez/monpulse";\n\nonceConnected(() => {\n  // do something\n});\n')),(0,a.kt)("p",null,"If the connection is not established yet, the callback will be added to the queue, and will be executed once the connection is established, otherwise it will be executed immediately."))}d.isMDXComponent=!0}}]);