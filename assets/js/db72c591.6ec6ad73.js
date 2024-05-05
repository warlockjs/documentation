"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[4726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,b=m["".concat(r,".").concat(u)]||m[u]||p[u]||s;return n?a.createElement(b,d(d({ref:t},l),{},{components:n})):a.createElement(b,d({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,d=new Array(s);d[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[m]="string"==typeof e?e:o,d[1]=i;for(var c=2;c<s;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:7},d="Embedded documents",i={unversionedId:"cascade/models/embedded-documents",id:"cascade/models/embedded-documents",title:"Embedded documents",description:"Introduction",source:"@site/docs/cascade/models/embedded-documents.mdx",sourceDirName:"cascade/models",slug:"/cascade/models/embedded-documents",permalink:"/docs/cascade/models/embedded-documents",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mongodb",previous:{title:"Model Data",permalink:"/docs/cascade/models/model-data"},next:{title:"Saving Models",permalink:"/docs/cascade/models/saving-models"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Embedded data",id:"embedded-data",level:2},{value:"Defining what data to be embedded",id:"defining-what-data-to-be-embedded",level:2},{value:"Using embedded property.",id:"using-embedded-property",level:2},{value:"Embed documents except timestamps",id:"embed-documents-except-timestamps",level:2},{value:"Embed all data except",id:"embed-all-data-except",level:2},{value:"Default embedded data",id:"default-embedded-data",level:2},{value:"Documents Association",id:"documents-association",level:2},{value:"Re-associate documents",id:"re-associate-documents",level:2},{value:"Disassociate documents",id:"disassociate-documents",level:2}],l={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embedded-documents"},"Embedded documents"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"MongoDB flexibility allows us to store documents inside other documents. This is called embedded documents. In this section, we will learn how to use embedded documents using Monpulse."),(0,o.kt)("h2",{id:"embedded-data"},"Embedded data"),(0,o.kt)("p",null,"Let's take a simple example of a category model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,o.kt)("p",null,"This category model has a simple structure, let's create a new category:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { Category } from "./models/category";\n\nasync function main() {\n    const category = await Category.create({\n        name: "Sports",\n        isActive: true,\n    });\n\n    console.log(category.data);\n}\n\nmain();\n')),(0,o.kt)("p",null,"This will create a new category, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"category.data")," will be something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 512312,\n    "_id": "5f9b1b3c1b9c4e0b4c7b23a1",\n    "name": "Sports",\n    "isActive": true,\n    "createdAt": "2020-10-30T12:00:00.000Z",\n    "updatedAt": "2020-10-30T12:00:00.000Z"\n}\n')),(0,o.kt)("p",null,"The category that we created we need to embed it into our post model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model, Casts, castModel } from "@warlock.js/cascade";\nimport { Category } from "./category";\n\nexport class Post extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    category: castModel(Category),\n  };\n}\n')),(0,o.kt)("p",null,"Now we can create a new post and embed the category into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { Post } from "./models/post";\n\nasync function main() {\n    const post = await Post.create({\n        title: "Hello world",\n        content: "This is my first post",\n        category: 512312,\n    });\n\n    console.log(post.data);\n}\n\nmain();\n')),(0,o.kt)("p",null,"The output will be something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 512312,\n    "_id": "5f9b1b3c1b9c4e0b4c7b23a1",\n    "title": "Hello world",\n    "content": "This is my first post",\n    "category": {\n        "id": 512312,\n        "_id": "5f9b1b3c1b9c4e0b4c7b23a1",\n        "name": "Sports",\n        "isActive": true,\n        "createdAt": "2020-10-30T12:00:00.000Z",\n        "updatedAt": "2020-10-30T12:00:00.000Z"\n    },\n    "createdAt": "2020-10-30T12:00:00.000Z",\n    "updatedAt": "2020-10-30T12:00:00.000Z"\n}\n')),(0,o.kt)("p",null,"The data of the injected category has some redundant fields such as ",(0,o.kt)("inlineCode",{parentName:"p"},"_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createdAt"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedAt"),". In that sense, we can specify what data to be embedded from the category model:"),(0,o.kt)("h2",{id:"defining-what-data-to-be-embedded"},"Defining what data to be embedded"),(0,o.kt)("p",null,"Now we illustrated the problem, let's see how to solve it, when we want to specify what data to be embedded when the model is going to be embedded in another document, we can define the getter property ",(0,o.kt)("inlineCode",{parentName:"p"},"embeddedData")," in the category model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public get embeddedData() {\n    return this.only([\'id\', \'name\']);\n  }\n}\n')),(0,o.kt)("p",null,"Now when we create a new post, the category data will be something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 512312,\n    "_id": "5f9b1b3c1b9c4e0b4c7b23a1",\n    "title": "Hello world",\n    "content": "This is my first post",\n    "category": {\n        "id": 512312,\n        "name": "Sports",\n    },\n    "createdAt": "2020-10-30T12:00:00.000Z",\n    "updatedAt": "2020-10-30T12:00:00.000Z"\n}\n')),(0,o.kt)("p",null,"This makes the data more clean and readable and most important we added only what we need."),(0,o.kt)("h2",{id:"using-embedded-property"},"Using embedded property."),(0,o.kt)("p",null,"Mongez ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," class already implemented the ",(0,o.kt)("inlineCode",{parentName:"p"},"embeddedData")," for you, to make it easier we can define the ",(0,o.kt)("inlineCode",{parentName:"p"},"embedded")," property that receives the array of fields that we need to embed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public embedded = [\'id\', \'name\'];\n}\n')),(0,o.kt)("p",null,"This is the same as defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"embeddedData")," getter property but in a more readable and simpler way."),(0,o.kt)("h2",{id:"embed-documents-except-timestamps"},"Embed documents except timestamps"),(0,o.kt)("p",null,"When we embed a document, we don't need to embed the timestamps,  To exclude the timestamps from the embedded document, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"embedAllExceptTimestampsAndUserColumns")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public embedAllExceptTimestampsAndUserColumns = true;\n}\n')),(0,o.kt)("h2",{id:"embed-all-data-except"},"Embed all data except"),(0,o.kt)("p",null,"We can also exclude only some fields from the embedded document, to do that we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"embedAllExcept")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public embedAllExcept = [\'isActive\'];\n}\n')),(0,o.kt)("h2",{id:"default-embedded-data"},"Default embedded data"),(0,o.kt)("p",null,"If none of the above embedded data properties are defined, then the default embedded data will be the entire document data."),(0,o.kt)("admonition",{title:"DO NOT DO THIS",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"It's highly recommended to define the embedded data to avoid embedding the entire document data, this will cause a huge performance issue and the database size will increase dramatically.")),(0,o.kt)("h2",{id:"documents-association"},"Documents Association"),(0,o.kt)("p",null,"Let's say we have a post, with list of comments, we need to add the comment to the post's comments list, we can do this using ",(0,o.kt)("inlineCode",{parentName:"p"},"associate")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { Post } from "./models/post";\nimport { Comment } from "./models/comment";\n\nconst post = await Post.first();\n\nconst comment = await Comment.create({\n    content: "This is my first comment",\n    post: post.only([\'id\']),\n});\n\npost.associate(\'comments\', comment);\n\nawait post.save();\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"associate")," method will add the comment to the post's comments list, and save the post."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the second argument is an instance of model, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"associate")," method will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"embeddedData")," property to embed the document.")),(0,o.kt)("p",null,"To add certain fields, you must pass a plain object instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"post.associate('comments', comment.only(['id', 'content']));\n\n// or using plain object\npost.associate('comments', comment.embedToPost); // you need to define it in the comment model\n")),(0,o.kt)("h2",{id:"re-associate-documents"},"Re-associate documents"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"associate")," method works only when we need to add new document to the list, but what if we need to update the comment inside the post's comments list? we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"reAssociate")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"const comment = await Comment.first();\n\npost.reassociate('comments', comment);\n\nawait post.save();\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"reassociate")," method to add new document to the list, but it's recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"associate")," method instead.")),(0,o.kt)("h2",{id:"disassociate-documents"},"Disassociate documents"),(0,o.kt)("p",null,"If you want to pull a document from the list, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"disassociate")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"const comment = await Comment.first();\n\npost.disassociate('comments', comment);\n\nawait post.save();\n")))}p.isMDXComponent=!0}}]);