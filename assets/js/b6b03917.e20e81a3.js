"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5089],{2372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=t(4848),d=t(8453);const s={sidebar_position:4},i="Upload Model",l={id:"warlock/upload/upload-model",title:"Upload Model",description:"Warlock is shipped with Upload model to store the uploaded files in the database.",source:"@site/docs/warlock/upload/upload-model.mdx",sourceDirName:"warlock/upload",slug:"/warlock/upload/upload-model",permalink:"/docs/warlock/upload/upload-model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"warlock",previous:{title:"Deleting Files",permalink:"/docs/warlock/upload/deleting-files"},next:{title:"Getting Uploaded Files",permalink:"/docs/warlock/upload/getting-uploaded-files"}},r={},a=[{value:"Stored data",id:"stored-data",level:2},{value:"Upload output",id:"upload-output",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"upload-model",children:"Upload Model"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Warlock"})," is shipped with ",(0,o.jsx)(n.code,{children:"Upload"})," model to store the uploaded files in the database."]}),"\n",(0,o.jsxs)(n.p,{children:["When a ",(0,o.jsx)(n.a,{href:"/docs/warlock/upload/uploading-files",children:"file"})," is uploaded, it will be stored in the database using the ",(0,o.jsx)(n.code,{children:"Upload"})," model."]}),"\n",(0,o.jsx)(n.h2,{id:"stored-data",children:"Stored data"}),"\n",(0,o.jsx)(n.p,{children:"The following schema is stored inside the uploads collection for each uploaded file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "hash": "string",\r\n  "name": "string",\r\n  "size": "number",\r\n  "extension": "string",\r\n  "path": "string",\r\n  "directory": "string",\r\n  "mimeType": "string"\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If the uploaded file is an image, then ",(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," will be stored as well."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"size"})," is stored in bytes."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"file name"})," will be stored as-is from the upload request, this is has nothing related to whether if the uploaded file is stored with its name or randomly."]}),"\n",(0,o.jsx)(n.h2,{id:"upload-output",children:"Upload output"}),"\n",(0,o.jsxs)(n.p,{children:["When the upload model is sent to the response, the ",(0,o.jsx)(n.code,{children:"UploadOutput"})," will return the following data:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "id": "string",\r\n  "hash": "string",\r\n  "name": "string",\r\n  "size": "number",\r\n  "extension": "string",\r\n  "url": "string",\r\n  "mimeType": "string",\r\n  "width": "number",\r\n  "height": "number"\r\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The id and hash are both the same, so you can use either of them."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"url"})," is the full URL to the uploaded file, it's generated by passing the file ",(0,o.jsx)(n.code,{children:"path"})," the ",(0,o.jsx)(n.code,{children:"uploadsUrl"})," function."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," are only returned if the uploaded file is an image."]})]})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const d={},s=o.createContext(d);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);