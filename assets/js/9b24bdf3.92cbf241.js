"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:11},o="Auto Increment",l={unversionedId:"monpulse/advanced/auto-increment",id:"monpulse/advanced/auto-increment",title:"Auto Increment",description:"Introduction",source:"@site/docs/monpulse/advanced/auto-increment.mdx",sourceDirName:"monpulse/advanced",slug:"/monpulse/advanced/auto-increment",permalink:"/mongez/docs/monpulse/advanced/auto-increment",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"mongodb",previous:{title:"Introduction",permalink:"/mongez/docs/monpulse/advanced/introduction"},next:{title:"Master Mind",permalink:"/mongez/docs/monpulse/advanced/master-mind"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Auto Incrementing",id:"auto-incrementing",level:2},{value:"Auto Incrementing with a custom start value",id:"auto-incrementing-with-a-custom-start-value",level:2},{value:"The next auto generated id",id:"the-next-auto-generated-id",level:2},{value:"Manually Generating the next ID",id:"manually-generating-the-next-id",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auto-increment"},"Auto Increment"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Model ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is an integer field that is auto-incremented by default, which is fully managed by the model class, you can manually assign value to it or manually generate it as well."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The id is generated if and only if the model does not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," value in its data, this means it works only with newly created models.")),(0,i.kt)("h2",{id:"auto-incrementing"},"Auto Incrementing"),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field is auto-incremented, which means that when saving a new model, the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field will be automatically generated, let's take an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { Category } from "./models/category";\n\nasync function main() {\n  const category = new Category({\n    name: "Sports",\n  });\n\n  await category.save();\n\n  console.log(category.id); // 512344\n}\n\nmain();\n')),(0,i.kt)("p",null,"This will auto generate a random id for the model by default."),(0,i.kt)("h2",{id:"auto-incrementing-with-a-custom-start-value"},"Auto Incrementing with a custom start value"),(0,i.kt)("p",null,"By default the initial id value is randomly generated for an integer between ",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"499999"),", you can change this value by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialId")," property in the model class, let's take an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model } from "@mongez/monpulse";\n\nexport class Category extends Model {\n  /**\n   * The collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * The initial id value\n   */\n  public static initialId = 1;\n}\n')),(0,i.kt)("p",null,"This will start the auto incrementing from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," instead of a random value."),(0,i.kt)("h2",{id:"the-next-auto-generated-id"},"The next auto generated id"),(0,i.kt)("p",null,"Same applies to the next generated id, it is generated randomly and sums the initial id with a random number between ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"9999"),", you can change this value by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementIdBy")," property in the model class, let's take an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model } from "@mongez/monpulse";\n\nexport class Category extends Model {\n  /**\n   * The collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * The initial id value\n   */\n  public static initialId = 1;\n\n  /**\n   * The increment value\n   */\n  public static incrementIdBy = 1;\n}\n')),(0,i.kt)("p",null,"In that example, our category model will mostly interact exactly like the typical auto incrementing id in SQL databases, however, for large scale applications, it is recommended to use a random id instead of an auto incrementing one so guessing the next id will be impossible."),(0,i.kt)("h2",{id:"manually-generating-the-next-id"},"Manually Generating the next ID"),(0,i.kt)("p",null,"In some scenarios, you might need to generate the next id even before saving the model, to achieve this we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"generateNextId")," method, let's take an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { Category } from "./models/category";\n\nasync function main() {\n  const category = new Category({\n    name: "Sports",\n  });\n\n  const nextId = await category.generateNextId();\n\n  console.log(nextId); // 512344\n  console.log(category.id); // 512344\n}\n\nmain();\n')),(0,i.kt)("p",null,"This will generate the next id and assign it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property of the model."))}u.isMDXComponent=!0}}]);