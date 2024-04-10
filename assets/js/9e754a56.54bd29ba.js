"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Download url",l={unversionedId:"warlock/utils/download-url",id:"warlock/utils/download-url",title:"Download url",description:"downloadFileFromUrl is a function that receives three parameters:",source:"@site/docs/warlock/utils/download-url.mdx",sourceDirName:"warlock/utils",slug:"/warlock/utils/download-url",permalink:"/docs/warlock/utils/download-url",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"warlock",previous:{title:"Date Output",permalink:"/docs/warlock/utils/date-output"},next:{title:"Paths",permalink:"/docs/warlock/utils/paths"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download-url"},"Download url"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"downloadFileFromUrl")," is a function that receives three parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": The url of the file to download."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"destination"),": The destination path to save the file to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fileName"),": Optionally The file name to save the file with.")),(0,o.kt)("p",null,"It fetches the file from the given url and saves it to the given destination path."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/posts/controllers/get-posts.ts"',title:'"src/app/posts/controllers/get-posts.ts"'},'import {\n  storagePath,\n  downloadFileFromUrl,\n  Request,\n  Response,\n} from "@mongez/warlock";\n\nexport default async function getPosts(request: Request, response: Response) {\n  const response = await downloadFileFromUrl(\n    "https://example.com/image.jpg",\n    storagePath("images")\n  );\n\n  // rest of the code\n}\n')),(0,o.kt)("p",null,"If the third argument is not passed, then the function will generate a random file name but keep the file extension."),(0,o.kt)("p",null,"The output of the function is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#response-schema"},"AxiosResponse"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The function will throw an error if the given url is not valid.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The function is not going to create the directory if it doesn't exist, so make sure to create it before calling the function.")))}d.isMDXComponent=!0}}]);