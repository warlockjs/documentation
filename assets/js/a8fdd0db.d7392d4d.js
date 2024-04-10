"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[9891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="Getting Uploaded Files",l={unversionedId:"warlock/upload/getting-uploaded-files",id:"warlock/upload/getting-uploaded-files",title:"Getting Uploaded Files",description:"There are two ways to get the uploaded file, either using the file path directly, or using the file hash.",source:"@site/docs/warlock/upload/getting-uploaded-files.mdx",sourceDirName:"warlock/upload",slug:"/warlock/upload/getting-uploaded-files",permalink:"/docs/warlock/upload/getting-uploaded-files",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"warlock",previous:{title:"Upload Model",permalink:"/docs/warlock/upload/upload-model"},next:{title:"Compressing images",permalink:"/docs/warlock/upload/compressing-images"}},p={},d=[{value:"Getting Uploaded File using the File Path",id:"getting-uploaded-file-using-the-file-path",level:2},{value:"Example",id:"example",level:3},{value:"Images resizing",id:"images-resizing",level:2}],s={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-uploaded-files"},"Getting Uploaded Files"),(0,a.kt)("p",null,"There are two ways to get the uploaded file, either using the file path directly, or using the file hash."),(0,a.kt)("h2",{id:"getting-uploaded-file-using-the-file-path"},"Getting Uploaded File using the File Path"),(0,a.kt)("p",null,"This way is a little bit performant as it ignores the database query, and it's used to get the uploaded file using the file path directly."),(0,a.kt)("p",null,"To get the uploaded file using the file path, use ",(0,a.kt)("inlineCode",{parentName:"p"},"/uploads/*")," endpoint with ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," method."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3} title="src/app/uploads/routes.ts"',"{3}":!0,title:'"src/app/uploads/routes.ts"'},'import { router, getUploadedFile } from "@mongez/warlock";\n\nrouter.get("/uploads/*", getUploadedFile);\n')),(0,a.kt)("h2",{id:"images-resizing"},"Images resizing"),(0,a.kt)("p",null,"Any image url that is being served by ",(0,a.kt)("inlineCode",{parentName:"p"},"getUploadedFile")," endpoint can be resized for ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," respectively to query parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://example.com/uploads/images/image.jpg?w=200&h=200\n")),(0,a.kt)("p",null,"We can send either ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," or both, if we send only one of them, the other will be calculated automatically."))}c.isMDXComponent=!0}}]);