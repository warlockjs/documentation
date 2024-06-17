"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[8284],{1571:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(4848),n=o(5680);const i={sidebar_position:3},a="Uploads configurations",s={id:"warlock/upload/configurations",title:"Uploads configurations",description:"Uploads are essential for any application, this section will cover the uploads configurations to give you a better control over how files are being uploaded and transformed.",source:"@site/docs/warlock/upload/configurations.mdx",sourceDirName:"warlock/upload",slug:"/warlock/upload/configurations",permalink:"/docs/warlock/upload/configurations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"warlock",previous:{title:"Introduction",permalink:"/docs/warlock/upload/introduction"},next:{title:"Uploading Files",permalink:"/docs/warlock/upload/uploading-files"}},c={},l=[{value:"Save To Directory",id:"save-to-directory",level:2},{value:"Compressing images",id:"compressing-images",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"uploads-configurations",children:"Uploads configurations"}),"\n",(0,t.jsx)(r.p,{children:"Uploads are essential for any application, this section will cover the uploads configurations to give you a better control over how files are being uploaded and transformed."}),"\n",(0,t.jsx)(r.h2,{id:"save-to-directory",children:"Save To Directory"}),"\n",(0,t.jsxs)(r.p,{children:["All files are stored inside ",(0,t.jsx)(r.code,{children:"storage directory"})," under the ",(0,t.jsx)(r.code,{children:"uploads"})," directory ",(0,t.jsx)(r.code,{children:"storage/uploads"})," for security reasons, for now you can set the default relative path to this path."]}),"\n",(0,t.jsxs)(r.p,{children:["The default path for any uploaded file is ",(0,t.jsx)(r.code,{children:"DD-MM-YYYY/{Hash}"})," directory, but you can change this behavior by setting the ",(0,t.jsx)(r.code,{children:"saveTo"})," property to a function that returns the path to save the file to."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/config/uploads.ts"',children:'import { UploadsConfigurations, requestContext } from "@warlock.js/core";\r\n\r\nconst uploadsConfigurations: UploadsConfigurations = {\r\n  /**\r\n   * The default path to save the uploaded files\r\n   */\r\n  saveTo: () => {\r\n    return "files";\r\n  },\r\n};\r\n\r\nexport default uploadsConfigurations;\n'})}),"\n",(0,t.jsx)(r.h2,{id:"compressing-images",children:"Compressing images"}),"\n",(0,t.jsxs)(r.p,{children:["Compressing images will convert any image type into ",(0,t.jsx)(r.code,{children:"webp"}),", this will reduce the image size significantly and save the storage space, a better performance will be achieved as well."]}),"\n",(0,t.jsxs)(r.p,{children:["For more information about compressing images, please refer to ",(0,t.jsx)(r.a,{href:"./compressing-images",children:"Compressing images"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,n.RP)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5680:(e,r,o)=>{o.d(r,{RP:()=>l});var t=o(6540);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),f=n,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return o?t.createElement(g,a(a({ref:r},p),{},{components:o})):t.createElement(g,a({ref:r},p))}));p.displayName="MDXCreateElement"}}]);