"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8239],{5508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(4848),r=t(8453);const o={sidebar_position:3},c="Syncing Models",d={id:"cascade/relationships/syncing-models",title:"Syncing Models",description:"Syncing models is a major powerful feature in Cascade, it allows you to embed documents inside other documents, and it will auto update the embedded documents whenever the original document is updated.",source:"@site/docs/cascade/relationships/syncing-models.mdx",sourceDirName:"cascade/relationships",slug:"/cascade/relationships/syncing-models",permalink:"/docs/cascade/relationships/syncing-models",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mongodb",previous:{title:"Embedded Documents",permalink:"/docs/cascade/relationships/embedded-documents"},next:{title:"Joins (Lookups)",permalink:"/docs/cascade/relationships/joins"}},i={},a=[{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Single Embedded Document",id:"single-embedded-document",level:2},{value:"Array of Embedded Documents",id:"array-of-embedded-documents",level:2},{value:"Embedded custom data",id:"embedded-custom-data",level:2},{value:"Update multiple fields",id:"update-multiple-fields",level:2},{value:"Unset On Delete",id:"unset-on-delete",level:2},{value:"Unset the embedded document",id:"unset-the-embedded-document",level:3},{value:"Delete the document that has the embedded document",id:"delete-the-document-that-has-the-embedded-document",level:3},{value:"Ignoring the delete action",id:"ignoring-the-delete-action",level:3},{value:"Sync only when certain fields are updated",id:"sync-only-when-certain-fields-are-updated",level:2},{value:"Update with certain criteria",id:"update-with-certain-criteria",level:2},{value:"A final Note about Sync",id:"a-final-note-about-sync",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"syncing-models",children:"Syncing Models"}),"\n",(0,s.jsxs)(n.p,{children:["Syncing models is a major powerful feature in ",(0,s.jsx)(n.code,{children:"Cascade"}),", it allows you to embed documents inside other documents, and it will auto update the embedded documents whenever the original document is updated."]}),"\n",(0,s.jsx)(n.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,s.jsx)(n.p,{children:"Let's say we have a category model, and post model, the post has an embedded document for category, the problem here is whenever the category is updated, the post keeps the same information about the category when the post is saved."}),"\n",(0,s.jsx)(n.h2,{id:"the-solution",children:"The Solution"}),"\n",(0,s.jsxs)(n.p,{children:["The solution here is with ",(0,s.jsx)(n.code,{children:"Syncing Models"}),", the concept is simple, when the category is updated, search for all categories that are embedded inside posts, and update them."]}),"\n",(0,s.jsx)(n.p,{children:"We have here two scenarios:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Single embedded document"}),"\n",(0,s.jsx)(n.li,{children:"Array of embedded documents"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's see each one of them."}),"\n",(0,s.jsx)(n.h2,{id:"single-embedded-document",children:"Single Embedded Document"}),"\n",(0,s.jsx)(n.p,{children:"Let's go with the single embedded document scenario, as we mentioned we need to update the post's category when the category itself is updated."}),"\n",(0,s.jsx)(n.p,{children:"Let's take a look at the post model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/post.ts"',children:'import { Model, Casts, castModel } from "@warlock.js/cascade";\r\nimport { Category } from "./category";\r\n\r\nexport class Post extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "posts";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    title: "string",\r\n    content: "string",\r\n    category: castModel(Category),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's take a look at the category model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts"',children:'import { Model, Casts } from "@warlock.js/cascade";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This is just a normal category model, let's update the code to make it synced with the post model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category"),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's understand what's happening here:"}),"\n",(0,s.jsxs)(n.p,{children:["First off, We added a new property called ",(0,s.jsx)(n.code,{children:"syncWith"})," that is an array of ",(0,s.jsx)(n.code,{children:"ModelSync"})," instances."]}),"\n",(0,s.jsxs)(n.p,{children:["We can create an instance of ",(0,s.jsx)(n.code,{children:"ModelSync"})," that is linked to the model using the static method ",(0,s.jsx)(n.code,{children:"sync"}),", this method returns a new instance of ",(0,s.jsx)(n.code,{children:"ModelSync"})," that is linked to the model."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sync"})," method takes first argument with the name of the field that we need to update in our case it will be the ",(0,s.jsx)(n.code,{children:"category"})," field in the post model."]}),"\n",(0,s.jsxs)(n.p,{children:["So the scenario here as follows, category data is updated, the ",(0,s.jsx)(n.code,{children:"ModelSync"})," class will be instantly called after the model is saved, it will search in the ",(0,s.jsx)(n.code,{children:"posts"})," collection for all posts that has the same category id, which internally searches in ",(0,s.jsx)(n.code,{children:"category.id"})," field, but we only pass the top field name which is ",(0,s.jsx)(n.code,{children:"category"})]}),"\n",(0,s.jsx)(n.h2,{id:"array-of-embedded-documents",children:"Array of Embedded Documents"}),"\n",(0,s.jsx)(n.p,{children:"The second scenario is when we have an array of embedded documents, let's say we have a post model that has an array of comments, we want to update the comments list inside the post when a comment is updated."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["This is just an example, it is ",(0,s.jsx)(n.strong,{children:"not recommended"})," to store comments inside each post document, it is better to store them in a separate collection."]})}),"\n",(0,s.jsx)(n.p,{children:"Let's take a look at the post model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/post.ts"',children:'import { Model, Casts, castModel } from "@warlock.js/cascade";\r\nimport { Comment } from "./comment";\r\n\r\nexport class Post extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "posts";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    title: "string",\r\n    content: "string",\r\n    comments: castModel(Comment),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's take a look at the comment model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/comment.ts"',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\nimport { Post } from "./post";\r\n\r\nexport class Comment extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "comments";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync comments inside post whenever a comment is updated\r\n    Post.syncMany("comments"),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    content: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"syncMany"})," method works exactly like ",(0,s.jsx)(n.code,{children:"sync"})," except that it will search inside an array of embedded documents."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The rest of the coming documentation works in both scenarios ",(0,s.jsx)(n.code,{children:"sync"})," and ",(0,s.jsx)(n.code,{children:"syncMany"})," but we will use ",(0,s.jsx)(n.code,{children:"sync"})," for simplicity"]})}),"\n",(0,s.jsx)(n.h2,{id:"embedded-custom-data",children:"Embedded custom data"}),"\n",(0,s.jsxs)(n.p,{children:["By default the ",(0,s.jsx)(n.code,{children:"ModelSync"})," will call the ",(0,s.jsx)(n.code,{children:"embeddedData"})," property to get the data from, but if we want to use another property we can pass it as a second argument to the ",(0,s.jsx)(n.code,{children:"sync"})," method."]}),"\n",(0,s.jsx)(n.p,{children:"Let's say we want to sync the category id and name only, we can do it like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category", "embedIdAndNameOnly"),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n\r\n  /**\r\n   * Embed id and name only\r\n   */\r\n  public get embedIdAndNameOnly() {\r\n    return this.only(["id", "name"]);\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"update-multiple-fields",children:"Update multiple fields"}),"\n",(0,s.jsxs)(n.p,{children:["Another scenario where we want to update multiple columns when the model is updated, let's say we want to update ",(0,s.jsx)(n.code,{children:"createdBy"})," and ",(0,s.jsx)(n.code,{children:"updatedBy"})," fields in the post when the user is updated, in that case, pass an array of fields to the ",(0,s.jsx)(n.code,{children:"sync"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync(["createdBy", "updatedBy"]),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["What happens here the ",(0,s.jsx)(n.code,{children:"ModelSync"})," will search in all columns that has the same value as the user id, which internally searches in ",(0,s.jsx)(n.code,{children:"createdBy.id"})," and ",(0,s.jsx)(n.code,{children:"updatedBy.id"})," fields, but we only pass the top field name which is ",(0,s.jsx)(n.code,{children:"createdBy"})," and ",(0,s.jsx)(n.code,{children:"updatedBy"})]}),"\n",(0,s.jsx)(n.h2,{id:"unset-on-delete",children:"Unset On Delete"}),"\n",(0,s.jsx)(n.p,{children:"Another scenario is being taking care of is when the actual document of the embedded document is deleted, in that case we can perform multiple actions based on our needs."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Unset the embedded document."}),"\n",(0,s.jsx)(n.li,{children:"Delete the document that has the embedded document."}),"\n",(0,s.jsx)(n.li,{children:"Do nothing."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's see each one of them:"}),"\n",(0,s.jsx)(n.h3,{id:"unset-the-embedded-document",children:"Unset the embedded document"}),"\n",(0,s.jsxs)(n.p,{children:["Call ",(0,s.jsx)(n.code,{children:"unsetOnDelete"})," method on the ",(0,s.jsx)(n.code,{children:"ModelSync"})," instance, this will unset the embedded document when the actual document is deleted."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\nimport { Post } from "./post";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category").unsetOnDelete(),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This is the default behavior, so you don't have to call ",(0,s.jsx)(n.code,{children:"unsetOnDelete"})," method."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"delete-the-document-that-has-the-embedded-document",children:"Delete the document that has the embedded document"}),"\n",(0,s.jsx)(n.p,{children:"The second scenario we can think of, when the original document is deleted, delete all related documents, for example we can delete all posts when their category is deleted."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\nimport { Post } from "./post";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category").removeOnDelete(),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["By calling ",(0,s.jsx)(n.code,{children:"removeOnDelete"}),", the ",(0,s.jsx)(n.code,{children:"ModelSync"})," will search for all posts that have the deleted category and remove them."]}),"\n",(0,s.jsx)(n.h3,{id:"ignoring-the-delete-action",children:"Ignoring the delete action"}),"\n",(0,s.jsxs)(n.p,{children:["The third scenario is when we want to ignore the delete action, in that case we can call ",(0,s.jsx)(n.code,{children:"ignoreOnDelete"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\nimport { Post } from "./post";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category").ignoreOnDelete(),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will keep the ",(0,s.jsx)(n.code,{children:"category"})," document inside the post when the category is deleted."]}),"\n",(0,s.jsx)(n.h2,{id:"sync-only-when-certain-fields-are-updated",children:"Sync only when certain fields are updated"}),"\n",(0,s.jsxs)(n.p,{children:["Because this is a costy operation, we can limit the sync to only when certain fields are updated, for example we can sync the category when the ",(0,s.jsx)(n.code,{children:"name"})," is updated, any other updated fields will not trigger the sync, in that case use ",(0,s.jsx)(n.code,{children:"updateWhenChange"})," by passing the fields that we want to sync when they are updated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\nimport { Post } from "./post";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category").updateWhenChange(["name"]),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"update-with-certain-criteria",children:"Update with certain criteria"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes it is not good to update all documents that has the same id, for example we can update the category in the post only when the post is active, in that case we can use the ",(0,s.jsx)(n.code,{children:"where"})," method that returns a query builder instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts" {1,14}',children:'import { Model, Casts, ModelSync } from "@warlock.js/cascade";\r\nimport { Post } from "./post";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * Sync with posts\r\n   */\r\n  public syncWith: ModelSync[] = [\r\n    // sync post\r\n    Post.sync("category").where(query => {\r\n      query.where("isActive", true);\r\n    }),\r\n    }),\r\n  ];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"query"})," here is an instance of the ",(0,s.jsx)(n.a,{href:"/docs/cascade/aggregate/model-aggregate",children:"Model Aggregate Query"})," so you can easily apply whatever filter you would like when fetching posts."]}),"\n",(0,s.jsx)(n.h2,{id:"a-final-note-about-sync",children:"A final Note about Sync"}),"\n",(0,s.jsxs)(n.p,{children:["All sync operations first fetch the documents then perform a ",(0,s.jsx)(n.code,{children:"save"})," or ",(0,s.jsx)(n.code,{children:"destroy"})," actions, this will allow multiple sync operations to be performed in one query."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if category is updated, find all posts for that category, and update each one of them, this will call all ",(0,s.jsx)(n.code,{children:"syncs"})," inside the post, in that sense, all comments will be updated as well if they are synced with the posts."]}),"\n",(0,s.jsxs)(n.p,{children:["Also, all related events like ",(0,s.jsx)(n.code,{children:"onSaving"}),", ",(0,s.jsx)(n.code,{children:"onSaved"}),", ",(0,s.jsx)(n.code,{children:"onDeleting"}),", ",(0,s.jsx)(n.code,{children:"onDeleted"}),"...etc will be triggered as well."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(6540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);