"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[879],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),g=l(t),u=r,d=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var m={};for(var s in a)hasOwnProperty.call(a,s)&&(m[s]=a[s]);m.originalType=e,m[g]="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8574:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},o="Introduction",m={unversionedId:"warlock/image/introduction",id:"warlock/image/introduction",title:"Introduction",description:"Almost no application is complete without uploading files, especially images, this section is all about images.",source:"@site/docs/warlock/image/introduction.mdx",sourceDirName:"warlock/image",slug:"/warlock/image/introduction",permalink:"/documentation/docs/warlock/image/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"warlock",previous:{title:"Image",permalink:"/documentation/docs/category/image"},next:{title:"Mail",permalink:"/documentation/docs/category/mail"}},s={},l=[{value:"Setup",id:"setup",level:2},{value:"Upload an image",id:"upload-an-image",level:2},{value:"Manual image processing",id:"manual-image-processing",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Watermark",id:"watermark",level:2},{value:"Multiple Watermarks",id:"multiple-watermarks",level:2}],p={toc:l},g="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(g,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Almost no application is complete without uploading files, especially images, this section is all about images."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Warlock is shipped with ",(0,r.kt)("a",{parentName:"p",href:"https://sharp.pixelplumbing.com"},"Sharp")," which is a high performance Node.js image processing library."),(0,r.kt)("h2",{id:"upload-an-image"},"Upload an image"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"./../upload/compressing-images"},"Uploading images")," and with the ",(0,r.kt)("strong",{parentName:"p"},"compress")," mode activated, Warlock uses Sharp to compress the images."),(0,r.kt)("h2",{id:"manual-image-processing"},"Manual image processing"),(0,r.kt)("p",null,"Warlock provides a simple way to process images using Sharp by wrapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharp")," class by Warlock ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," class."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," class, import it from ",(0,r.kt)("inlineCode",{parentName:"p"},"@mongez/warlock"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/main.ts"',title:'"src/app/main.ts"'},'import { storagePath, Image } from "@mongez/warlock";\n\nasync function main() {\n  const imagePath = storagePath("images/image.jpg");\n\n  const image = new Image(imagePath);\n}\n\nmain();\n')),(0,r.kt)("p",null,"Now let's resize the image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/main.ts"',title:'"src/app/main.ts"'},'import { storagePath, Image } from "@mongez/warlock";\n\nasync function main() {\n  const imagePath = storagePath("images/image.jpg");\n\n  const image = new Image(imagePath);\n\n  image.resize(200, 200);\n\n  await image.save(storagePath("images/resized-image.jpg"));\n}\n')),(0,r.kt)("p",null,"Here we resized the image to 200x200, and saved it to ",(0,r.kt)("inlineCode",{parentName:"p"},"storage/images/resized-image.jpg"),"."),(0,r.kt)("h2",{id:"watermark"},"Watermark"),(0,r.kt)("p",null,"Another good and important feature is to add watermarks in the images, luckily, Warlock provides a simple way to do that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/main.ts"',title:'"src/app/main.ts"'},'import { storagePath, Image } from "@mongez/warlock";\n\nasync function main() {\n  const imagePath = storagePath("images/image.jpg");\n\n  const image = new Image(imagePath);\n\n  await image.watermark(storagePath("images/watermark.png"), {\n    gravity: "northwest",\n  });\n\n  await image.save(storagePath("images/watermarked-image.jpg"));\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"watermark")," method accepts the watermark image path or an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," class."),(0,r.kt)("h2",{id:"multiple-watermarks"},"Multiple Watermarks"),(0,r.kt)("p",null,"In some situations, you may need to add multiple watermarks to the image, for example, you may need to add a watermark to the top left corner, and another one to the bottom right corner."),(0,r.kt)("p",null,"To do that, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"watermarks")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/main.ts"',title:'"src/app/main.ts"'},'import { storagePath, Image } from "@mongez/warlock";\nimport watermarkImage1 from "./../images/watermark-1.png";\nimport watermarkImage2 from "./../images/watermark-2.png";\nimport image from "./../images/image.jpg";\n\nasync function main() {\n  const imagePath = storagePath("images/image.jpg");\n\n  const image = new Image(imagePath);\n\n  await image.watermarks([\n    {\n      image: watermarkImage1,\n      gravity: "northwest",\n    },\n    {\n      image: watermarkImage2,\n      gravity: "southeast",\n    },\n  ]);\n\n  await image.save(storagePath("images/watermarked-image.jpg"));\n}\n')))}c.isMDXComponent=!0}}]);