"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9040],{7993:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(4848),t=r(8453);const a={sidebar_position:3},o="Casting Data",i={id:"cascade/models/casting-data",title:"Casting Data",description:"As Mongodb nature, any document can literally have any data type. However, when it comes to the data that is being sent to the client, it is important to cast the data to the correct type. This is because the client will be expecting a certain type of data, but making sure the data is inserted in a proper type is more important.",source:"@site/docs/cascade/models/casting-data.mdx",sourceDirName:"cascade/models",slug:"/cascade/models/casting-data",permalink:"/docs/cascade/models/casting-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mongodb",previous:{title:"Create New Document",permalink:"/docs/cascade/models/create-document"},next:{title:"Casting Custom Fields",permalink:"/docs/cascade/models/casting-custom-fields"}},l={},c=[{value:"How to cast data",id:"how-to-cast-data",level:2},{value:"Built-in casts",id:"built-in-casts",level:2},{value:"Storing geo locations",id:"storing-geo-locations",level:3},{value:"Localized Values",id:"localized-values",level:3},{value:"Built in Custom casts",id:"built-in-custom-casts",level:3},{value:"castModel",id:"castmodel",level:3},{value:"How castModel works?",id:"how-castmodel-works",level:4},{value:"castEmail",id:"castemail",level:4},{value:"oneOf",id:"oneof",level:4},{value:"arrayOf",id:"arrayof",level:3},{value:"shapedArray",id:"shapedarray",level:3},{value:"randomInteger",id:"randominteger",level:4},{value:"expiresAfter",id:"expiresafter",level:3},{value:"Create your own custom casts",id:"create-your-own-custom-casts",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"casting-data",children:"Casting Data"}),"\n",(0,s.jsx)(n.p,{children:"As Mongodb nature, any document can literally have any data type. However, when it comes to the data that is being sent to the client, it is important to cast the data to the correct type. This is because the client will be expecting a certain type of data, but making sure the data is inserted in a proper type is more important."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-cast-data",children:"How to cast data"}),"\n",(0,s.jsxs)(n.p,{children:["To make a map for fields that need to be casted, you can use the ",(0,s.jsx)(n.code,{children:"cast"})," property. This function takes in a map of fields and their types. The types can be any of the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    email: "string",\r\n    age: "number",\r\n    isActive: "boolean",\r\n    birthDate: "date",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will ensure that the data is casted to the correct type before being sent to the client."}),"\n",(0,s.jsx)(n.h2,{id:"built-in-casts",children:"Built-in casts"}),"\n",(0,s.jsx)(n.p,{children:"The major data types can be used strings to automatically cast field values."}),"\n",(0,s.jsx)(n.p,{children:"The following table illustrates the available cast types:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"string"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"number"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"int"})," ",(0,s.jsx)(n.code,{children:"integer"})]}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"integer"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"float"})}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"float"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"bool"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"boolean"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"date"})}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"date"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"array"})}),(0,s.jsxs)(n.td,{children:["Casts the value to an ",(0,s.jsx)(n.strong,{children:"array"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsxs)(n.td,{children:["Casts the value to an ",(0,s.jsx)(n.strong,{children:"object"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"any"})," ",(0,s.jsx)(n.code,{children:"mixed"})]}),(0,s.jsx)(n.td,{children:"Does not cast the value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"location"})}),(0,s.jsxs)(n.td,{children:["Casts the value to a ",(0,s.jsx)(n.strong,{children:"geo location"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"localized"})}),(0,s.jsxs)(n.td,{children:["Making sure the value is stored in array of objects, each object contains ",(0,s.jsx)(n.code,{children:"localeCode"})," and ",(0,s.jsx)(n.code,{children:"value"})," keys where ",(0,s.jsx)(n.code,{children:"value"})," represents the content of the corresponding locale code."]})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the field's value is missing, it will be stored as default value type as follows:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string"}),": will be stored as empty string ",(0,s.jsx)(n.code,{children:'""'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"number"}),": will be stored as ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"integer"}),": will be stored as ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"float"}),": will be stored as ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"boolean"}),": will be stored as ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"date"}),": will be stored as ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"array"}),": will be stored as empty array ",(0,s.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),": will be stored as empty object ",(0,s.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"any"})," or ",(0,s.jsx)(n.code,{children:"mixed"}),": will be stored as is."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"location"}),": will be stored as ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"localized"}),": will be stored as empty array ",(0,s.jsx)(n.code,{children:"[]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storing-geo-locations",children:"Storing geo locations"}),"\n",(0,s.jsxs)(n.p,{children:["To store geo locations, you can use the ",(0,s.jsx)(n.code,{children:"location"})," cast type. This will make sure the value is stored as a geo location object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    email: "string",\r\n    location: "location",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's create a new user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nasync function main() {\r\n  const user = await User.create({\r\n    name: "John Doe",\r\n    email: "hassanzohdy@gmail.com",\r\n    location: {\r\n      lat: 30.123,\r\n      lng: 31.123,\r\n    },\r\n  });\r\n\r\n  console.log(user.get("location")); // will be converted into: { type: "Point", coordinates: [ 30.123, 31.123 ]\r\n}\r\n\r\nmain();\n'})}),"\n",(0,s.jsx)(n.p,{children:"The value is going to be stored as a geo location object."}),"\n",(0,s.jsx)(n.h3,{id:"localized-values",children:"Localized Values"}),"\n",(0,s.jsx)(n.p,{children:"Localized values are essential if you're Building multilingual app, for example if the application has two languages Arabic and English, then localized fields should be stored in both languages."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    email: "string",\r\n    bio: "localized",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's create a new user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nasync function main() {\r\n  const user = await User.create({\r\n    name: "John Doe",\r\n    email: "hassanzohdy@gmail.com",\r\n    bio: [\r\n      {\r\n        localeCode: "en",\r\n        value: "English bio",\r\n      },\r\n      {\r\n        localeCode: "ar",\r\n        value: "Arabic bio",\r\n      },\r\n    ],\r\n  });\r\n}\r\n\r\nmain();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"localized"})," cast will make sure only ",(0,s.jsx)(n.code,{children:"localeCode"})," and ",(0,s.jsx)(n.code,{children:"value"})," keys are stored in the database."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If the array contains any ",(0,s.jsx)(n.code,{children:"non-object"})," values, it will be ignored."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"built-in-custom-casts",children:"Built in Custom casts"}),"\n",(0,s.jsx)(n.p,{children:"Here are some built in custom casts that you can use:"}),"\n",(0,s.jsx)(n.h3,{id:"castmodel",children:"castModel"}),"\n",(0,s.jsx)(n.p,{children:"Probably this is the most important cast, this cast function receives a model class, it then stores the model data as a sub document to the current model."}),"\n",(0,s.jsxs)(n.p,{children:["For example, a Post has a ",(0,s.jsx)(n.code,{children:"category"}),", all we need to do is to pass the ",(0,s.jsx)(n.code,{children:"category"})," id when we create the post, then category data will be injected into the post."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/post.ts"',children:'import { Model, Casts, castModel } from "@warlock.js/cascade";\r\nimport { Category } from "./category";\r\n\r\nexport class Post extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "posts";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    title: "string",\r\n    content: "string",\r\n    category: castModel(Category),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's create a new post:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { Post } from "./models/post";\r\n\r\nasync function main() {\r\n  const post = await Post.create({\r\n    title: "Hello world",\r\n    content: "This is the post content",\r\n    category: 41231,\r\n  });\r\n\r\n  console.log(post.get("category")); // will be converted into: {\r\n  //        id: 41231,\r\n  //        name: "Category name",\r\n  //     }\r\n}\r\n\r\nmain();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The data that are stored in the posts are collected from ",(0,s.jsx)(n.code,{children:"embeddedData"})," property, this is a builtin property in the model that contains the data that should be inserted when the model is going to be embedded in another model."]}),"\n",(0,s.jsxs)(n.p,{children:["However, you can define another property name by passing the property name as a second argument to the ",(0,s.jsx)(n.code,{children:"castModel"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/post.ts"',children:'import { Model, Casts, castModel } from "@warlock.js/cascade";\r\nimport { Category } from "./category";\r\n\r\nexport class Post extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "posts";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    title: "string",\r\n    content: "string",\r\n    category: castModel(Category, "embedToPost"),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/category.ts"',children:'import { Model, Casts } from "@warlock.js/cascade";\r\n\r\nexport class Category extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "categories";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    isActive: "boolean",\r\n  };\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  public embedded = ["id", "name", "isActive"];\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  public get embedToPost() {\r\n    return this.only(["id", "name"]);\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"success",children:(0,s.jsxs)(n.p,{children:["Don't worry if you're not aware yet of the ",(0,s.jsx)(n.code,{children:"embedded documents"}),", we will cover it in the next chapters."]})}),"\n",(0,s.jsxs)(n.p,{children:["We can also define list of columns that should embedded by passing it as second argument to the ",(0,s.jsx)(n.code,{children:"castModel"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/post.ts"',children:'import { Model, Casts, castModel } from "@warlock.js/cascade";\r\n\r\nexport class Post extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "posts";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    title: "string",\r\n    content: "string",\r\n    category: castModel(Category, ["id", "name"]),\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will only embed the ",(0,s.jsx)(n.code,{children:"id"})," and ",(0,s.jsx)(n.code,{children:"name"})," columns of the category model."]}),"\n",(0,s.jsx)(n.h4,{id:"how-castmodel-works",children:"How castModel works?"}),"\n",(0,s.jsxs)(n.p,{children:["Let's see basically how ",(0,s.jsx)(n.code,{children:"castModel"})," works in simple words:"]}),"\n",(0,s.jsxs)(n.p,{children:["the model that we're going to create should receive the id of the category, the ",(0,s.jsx)(n.code,{children:"castModel"})," already knows what model to look into as we already passed the ",(0,s.jsx)(n.code,{children:"Category"})," model to it."]}),"\n",(0,s.jsxs)(n.p,{children:["Now the function will try to find the model that matches the given ",(0,s.jsx)(n.code,{children:"id"}),", if it found it, it will return the embedded data, otherwise it will return ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This applies to both cases, if the given value is an array of ids, then it will return an array of embedded data, otherwise it will return only one embedded data."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the given value is an instance of model i.e a category model, then it will be used directly without making a new query and fetch the embedded data from it."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"castemail",children:"castEmail"}),"\n",(0,s.jsxs)(n.p,{children:["This utility ",(0,s.jsx)(n.code,{children:"castEmail"})," is going to make sure the email is a valid email address, and it will be lowercased."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, castEmail } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    email: castEmail,\r\n    name: "string",\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the value is not a valid email address, it will be stored as ",(0,s.jsx)(n.code,{children:"null"}),", otherwise all email characters will be lowercased."]}),"\n",(0,s.jsx)(n.h4,{id:"oneof",children:"oneOf"}),"\n",(0,s.jsx)(n.p,{children:"This is a cool utility that ensure the value that is going to be stored is one of the provided values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, oneOf } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    gender: oneOf(["male", "female"]),\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the value is not one of the provided values, it will be stored as ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"arrayof",children:"arrayOf"}),"\n",(0,s.jsxs)(n.p,{children:["Works the same as ",(0,s.jsx)(n.code,{children:"oneOf"})," but it will make sure the value is one of the provided values in the array."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, arrayOf } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    keywords: arrayOf([\r\n      "git",\r\n      "programming",\r\n      "javascript",\r\n      "typescript",\r\n      "nodejs",\r\n    ]),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"shapedarray",children:"shapedArray"}),"\n",(0,s.jsx)(n.p,{children:"This utility will make sure the value is an array of a type, either a scalar type or an object type."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, shapedArray, ShapedArrayType } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    keywords: shapedArray(ShapedArrayType.String),\r\n    prices: shapedArray(ShapedArrayType.Number),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"These are the available shaped array types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'export enum ShapedArrayType {\r\n  String = "string",\r\n  Number = "number",\r\n  Boolean = "boolean",\r\n  Date = "date",\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can also pass an object type:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, shapedArray, ShapedArrayType } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    keywords: shapedArray(ShapedArrayType.String),\r\n    prices: shapedArray(ShapedArrayType.Number),\r\n    addresses: shapedArray({\r\n      street: ShapedArrayType.String,\r\n      city: ShapedArrayType.String,\r\n      country: ShapedArrayType.String,\r\n      phoneNumber: ShapedArrayType.Number,\r\n      apartment: ShapedArrayType.Number,\r\n    }),\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Any other type will be ignored, if the value is not an array, it will be stored as ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"randominteger",children:"randomInteger"}),"\n",(0,s.jsx)(n.p,{children:"This utility will generate a random integer number between the provided range."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, randomInteger } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    verificationCode: randomInteger(1000, 9999),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will generate a random integer number between 1000 and 9999."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Kindly note that the ",(0,s.jsx)(n.code,{children:"randomInteger"})," utility will not generate a random number if the value is already provided, in the previous example, when verification code is done, you should unset it or set it to null if you want to generate an ew code in the next save."]})}),"\n",(0,s.jsx)(n.h3,{id:"expiresafter",children:"expiresAfter"}),"\n",(0,s.jsx)(n.p,{children:"This utility will make sure the field is expired after the provided number of unit type you provide:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts, expiresAfter } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    name: "string",\r\n    verificationCode: randomInteger(1000, 9999),\r\n    verificationCodeExpiration: expiresAfter(1, "hour"),\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"create-your-own-custom-casts",children:"Create your own custom casts"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes we need customize the value of the field that is going to be added to the collection's document, for example encrypting the password before storing it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/casts/cast-password.ts"',children:'import Password from "@mongez/password";\r\n\r\nexport default function castPassword(value: string) {\r\n  return Password.generate(String(value), 12); // 12 is the number of salt rounds\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model, Casts } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  /**\r\n   * Collection name\r\n   */\r\n  public static collection = "users";\r\n\r\n  /**\r\n   * {@inheritDoc}\r\n   */\r\n  protected casts: Casts = {\r\n    password: castPassword,\r\n    name: "string",\r\n    email: "string",\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's create a new user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nasync function main() {\r\n  const user = await User.create({\r\n    name: "John Doe",\r\n    email: "john@doe.com",\r\n    password: 123456,\r\n  });\r\n\r\n  console.log(user.get("password")); // will be something like: $2a$12$qwe322eqwdpfkowerpko\r\n}\r\n\r\nmain();\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In cast password example, we used the ",(0,s.jsx)(n.a,{href:"https://github.com/hassanzohdy/mongez-password",children:"@mongez/password"})," package to generate a hashed password, you can use any package you want."]})}),"\n",(0,s.jsx)(n.p,{children:"The cast callback will receive the value of the field and the model instance, you can use the model instance to access other fields."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/casts/cast-password.ts"',children:'import Password from "@mongez/password";\r\n\r\nexport default function castPassword(value: string, model: Model) {\r\n  let salt = model.get("salt");\r\n\r\n  if (!salt) {\r\n    salt = 12;\r\n    model.set("salt", salt);\r\n  }\r\n\r\n  return Password.generate(String(value), salt);\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here we inserted the salt value to the model instance, so we can use it in the next save, this will increase the security of the password."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);