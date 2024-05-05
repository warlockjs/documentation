"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[6197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,u=p["".concat(r,".").concat(h)]||p[h]||m[h]||s;return n?o.createElement(u,l(l({ref:t},d),{},{components:n})):o.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=h;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},l="Syncing Models",i={unversionedId:"monpulse/relationships/syncing-models",id:"monpulse/relationships/syncing-models",title:"Syncing Models",description:"Syncing models is a major powerful feature in Monpulse, it allows you to embed documents inside other documents, and it will auto update the embedded documents whenever the original document is updated.",source:"@site/docs/monpulse/relationships/syncing-models.mdx",sourceDirName:"monpulse/relationships",slug:"/monpulse/relationships/syncing-models",permalink:"/docs/monpulse/relationships/syncing-models",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mongodb",previous:{title:"Embedded Documents",permalink:"/docs/monpulse/relationships/embedded-documents"},next:{title:"Joins (Lookups)",permalink:"/docs/monpulse/relationships/joins"}},r={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Single Embedded Document",id:"single-embedded-document",level:2},{value:"Array of Embedded Documents",id:"array-of-embedded-documents",level:2},{value:"Embedded custom data",id:"embedded-custom-data",level:2},{value:"Update multiple fields",id:"update-multiple-fields",level:2},{value:"Unset On Delete",id:"unset-on-delete",level:2},{value:"Unset the embedded document",id:"unset-the-embedded-document",level:3},{value:"Delete the document that has the embedded document",id:"delete-the-document-that-has-the-embedded-document",level:3},{value:"Ignoring the delete action",id:"ignoring-the-delete-action",level:3},{value:"Sync only when certain fields are updated",id:"sync-only-when-certain-fields-are-updated",level:2},{value:"Update with certain criteria",id:"update-with-certain-criteria",level:2},{value:"A final Note about Sync",id:"a-final-note-about-sync",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syncing-models"},"Syncing Models"),(0,a.kt)("p",null,"Syncing models is a major powerful feature in ",(0,a.kt)("inlineCode",{parentName:"p"},"Monpulse"),", it allows you to embed documents inside other documents, and it will auto update the embedded documents whenever the original document is updated."),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"Let's say we have a category model, and post model, the post has an embedded document for category, the problem here is whenever the category is updated, the post keeps the same information about the category when the post is saved."),(0,a.kt)("h2",{id:"the-solution"},"The Solution"),(0,a.kt)("p",null,"The solution here is with ",(0,a.kt)("inlineCode",{parentName:"p"},"Syncing Models"),", the concept is simple, when the category is updated, search for all categories that are embedded inside posts, and update them."),(0,a.kt)("p",null,"We have here two scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Single embedded document"),(0,a.kt)("li",{parentName:"ol"},"Array of embedded documents")),(0,a.kt)("p",null,"Let's see each one of them."),(0,a.kt)("h2",{id:"single-embedded-document"},"Single Embedded Document"),(0,a.kt)("p",null,"Let's go with the single embedded document scenario, as we mentioned we need to update the post's category when the category itself is updated."),(0,a.kt)("p",null,"Let's take a look at the post model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model, Casts, castModel } from "@warlock.js/cascade";\nimport { Category } from "./category";\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    category: castModel(Category),\n  };\n}\n')),(0,a.kt)("p",null,"Let's take a look at the category model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"This is just a normal category model, let's update the code to make it synced with the post model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category"),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"Let's understand what's happening here:"),(0,a.kt)("p",null,"First off, We added a new property called ",(0,a.kt)("inlineCode",{parentName:"p"},"syncWith")," that is an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," instances."),(0,a.kt)("p",null,"We can create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," that is linked to the model using the static method ",(0,a.kt)("inlineCode",{parentName:"p"},"sync"),", this method returns a new instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," that is linked to the model."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," method takes first argument with the name of the field that we need to update in our case it will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," field in the post model."),(0,a.kt)("p",null,"So the scenario here as follows, category data is updated, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," class will be instantly called after the model is saved, it will search in the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," collection for all posts that has the same category id, which internally searches in ",(0,a.kt)("inlineCode",{parentName:"p"},"category.id")," field, but we only pass the top field name which is ",(0,a.kt)("inlineCode",{parentName:"p"},"category")),(0,a.kt)("h2",{id:"array-of-embedded-documents"},"Array of Embedded Documents"),(0,a.kt)("p",null,"The second scenario is when we have an array of embedded documents, let's say we have a post model that has an array of comments, we want to update the comments list inside the post when a comment is updated."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This is just an example, it is ",(0,a.kt)("strong",{parentName:"p"},"not recommended")," to store comments inside each post document, it is better to store them in a separate collection.")),(0,a.kt)("p",null,"Let's take a look at the post model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model, Casts, castModel } from "@warlock.js/cascade";\nimport { Comment } from "./comment";\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    comments: castModel(Comment),\n  };\n}\n')),(0,a.kt)("p",null,"Let's take a look at the comment model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/comment.ts"',title:'"src/models/comment.ts"'},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\nimport { Post } from "./post";\n\nexport class Comment extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "comments";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync comments inside post whenever a comment is updated\n    Post.syncMany("comments"),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    content: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"syncMany")," method works exactly like ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," except that it will search inside an array of embedded documents."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The rest of the coming documentation works in both scenarios ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"syncMany")," but we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," for simplicity")),(0,a.kt)("h2",{id:"embedded-custom-data"},"Embedded custom data"),(0,a.kt)("p",null,"By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"embeddedData")," property to get the data from, but if we want to use another property we can pass it as a second argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," method."),(0,a.kt)("p",null,"Let's say we want to sync the category id and name only, we can do it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category", "embedIdAndNameOnly"),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n\n  /**\n   * Embed id and name only\n   */\n  public get embedIdAndNameOnly() {\n    return this.only(["id", "name"]);\n  }\n}\n')),(0,a.kt)("h2",{id:"update-multiple-fields"},"Update multiple fields"),(0,a.kt)("p",null,"Another scenario where we want to update multiple columns when the model is updated, let's say we want to update ",(0,a.kt)("inlineCode",{parentName:"p"},"createdBy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedBy")," fields in the post when the user is updated, in that case, pass an array of fields to the ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts" {1,14}',title:'"src/models/user.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync(["createdBy", "updatedBy"]),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"What happens here the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," will search in all columns that has the same value as the user id, which internally searches in ",(0,a.kt)("inlineCode",{parentName:"p"},"createdBy.id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedBy.id")," fields, but we only pass the top field name which is ",(0,a.kt)("inlineCode",{parentName:"p"},"createdBy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedBy")),(0,a.kt)("h2",{id:"unset-on-delete"},"Unset On Delete"),(0,a.kt)("p",null,"Another scenario is being taking care of is when the actual document of the embedded document is deleted, in that case we can perform multiple actions based on our needs."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unset the embedded document."),(0,a.kt)("li",{parentName:"ol"},"Delete the document that has the embedded document."),(0,a.kt)("li",{parentName:"ol"},"Do nothing.")),(0,a.kt)("p",null,"Let's see each one of them:"),(0,a.kt)("h3",{id:"unset-the-embedded-document"},"Unset the embedded document"),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"unsetOnDelete")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," instance, this will unset the embedded document when the actual document is deleted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\nimport { Post } from "./post";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category").unsetOnDelete(),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the default behavior, so you don't have to call ",(0,a.kt)("inlineCode",{parentName:"p"},"unsetOnDelete")," method.")),(0,a.kt)("h3",{id:"delete-the-document-that-has-the-embedded-document"},"Delete the document that has the embedded document"),(0,a.kt)("p",null,"The second scenario we can think of, when the original document is deleted, delete all related documents, for example we can delete all posts when their category is deleted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\nimport { Post } from "./post";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category").removeOnDelete(),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"By calling ",(0,a.kt)("inlineCode",{parentName:"p"},"removeOnDelete"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelSync")," will search for all posts that have the deleted category and remove them."),(0,a.kt)("h3",{id:"ignoring-the-delete-action"},"Ignoring the delete action"),(0,a.kt)("p",null,"The third scenario is when we want to ignore the delete action, in that case we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreOnDelete")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\nimport { Post } from "./post";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category").ignoreOnDelete(),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"This will keep the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," document inside the post when the category is deleted."),(0,a.kt)("h2",{id:"sync-only-when-certain-fields-are-updated"},"Sync only when certain fields are updated"),(0,a.kt)("p",null,"Because this is a costy operation, we can limit the sync to only when certain fields are updated, for example we can sync the category when the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," is updated, any other updated fields will not trigger the sync, in that case use ",(0,a.kt)("inlineCode",{parentName:"p"},"updateWhenChange")," by passing the fields that we want to sync when they are updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\nimport { Post } from "./post";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category").updateWhenChange(["name"]),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("h2",{id:"update-with-certain-criteria"},"Update with certain criteria"),(0,a.kt)("p",null,"Sometimes it is not good to update all documents that has the same id, for example we can update the category in the post only when the post is active, in that case we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," method that returns a query builder instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',title:'"src/models/category.ts"',"{1,14}":!0},'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\nimport { Post } from "./post";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * Sync with posts\n   */\n  public syncWith: ModelSync[] = [\n    // sync post\n    Post.sync("category").where(query => {\n      query.where("isActive", true);\n    }),\n    }),\n  ];\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," here is an instance of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monpulse/aggregate/model-aggregate"},"Model Aggregate Query")," so you can easily apply whatever filter you would like when fetching posts."),(0,a.kt)("h2",{id:"a-final-note-about-sync"},"A final Note about Sync"),(0,a.kt)("p",null,"All sync operations first fetch the documents then perform a ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"destroy")," actions, this will allow multiple sync operations to be performed in one query."),(0,a.kt)("p",null,"For example, if category is updated, find all posts for that category, and update each one of them, this will call all ",(0,a.kt)("inlineCode",{parentName:"p"},"syncs")," inside the post, in that sense, all comments will be updated as well if they are synced with the posts."),(0,a.kt)("p",null,"Also, all related events like ",(0,a.kt)("inlineCode",{parentName:"p"},"onSaving"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onSaved"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onDeleting"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onDeleted"),"...etc will be triggered as well."))}m.isMDXComponent=!0}}]);