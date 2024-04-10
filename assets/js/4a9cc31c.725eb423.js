"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[9343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,g=c["".concat(i,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var d=2;d<l;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:3},s="Casting Data",r={unversionedId:"monpulse/models/casting-data",id:"monpulse/models/casting-data",title:"Casting Data",description:"As Mongodb nature, any document can literally have any data type. However, when it comes to the data that is being sent to the client, it is important to cast the data to the correct type. This is because the client will be expecting a certain type of data, but making sure the data is inserted in a proper type is more important.",source:"@site/docs/monpulse/models/casting-data.mdx",sourceDirName:"monpulse/models",slug:"/monpulse/models/casting-data",permalink:"/documentation/docs/monpulse/models/casting-data",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mongodb",previous:{title:"Create New Document",permalink:"/documentation/docs/monpulse/models/create-document"},next:{title:"Casting Custom Fields",permalink:"/documentation/docs/monpulse/models/casting-custom-fields"}},i={},d=[{value:"How to cast data",id:"how-to-cast-data",level:2},{value:"Built-in casts",id:"built-in-casts",level:2},{value:"Storing geo locations",id:"storing-geo-locations",level:3},{value:"Localized Values",id:"localized-values",level:3},{value:"Built in Custom casts",id:"built-in-custom-casts",level:3},{value:"castModel",id:"castmodel",level:3},{value:"How castModel works?",id:"how-castmodel-works",level:4},{value:"castEmail",id:"castemail",level:4},{value:"oneOf",id:"oneof",level:4},{value:"arrayOf",id:"arrayof",level:3},{value:"shapedArray",id:"shapedarray",level:3},{value:"randomInteger",id:"randominteger",level:4},{value:"expiresAfter",id:"expiresafter",level:3},{value:"Create your own custom casts",id:"create-your-own-custom-casts",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"casting-data"},"Casting Data"),(0,o.kt)("p",null,"As Mongodb nature, any document can literally have any data type. However, when it comes to the data that is being sent to the client, it is important to cast the data to the correct type. This is because the client will be expecting a certain type of data, but making sure the data is inserted in a proper type is more important."),(0,o.kt)("h2",{id:"how-to-cast-data"},"How to cast data"),(0,o.kt)("p",null,"To make a map for fields that need to be casted, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cast")," property. This function takes in a map of fields and their types. The types can be any of the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    email: "string",\n    age: "number",\n    isActive: "boolean",\n    birthDate: "date",\n  };\n}\n')),(0,o.kt)("p",null,"This will ensure that the data is casted to the correct type before being sent to the client."),(0,o.kt)("h2",{id:"built-in-casts"},"Built-in casts"),(0,o.kt)("p",null,"The major data types can be used strings to automatically cast field values."),(0,o.kt)("p",null,"The following table illustrates the available cast types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"string"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"number"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"int")," ",(0,o.kt)("inlineCode",{parentName:"td"},"integer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"integer"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"float")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"float"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bool")," ",(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"boolean"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"date")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"date"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to an ",(0,o.kt)("strong",{parentName:"td"},"array"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to an ",(0,o.kt)("strong",{parentName:"td"},"object"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any")," ",(0,o.kt)("inlineCode",{parentName:"td"},"mixed")),(0,o.kt)("td",{parentName:"tr",align:null},"Does not cast the value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"location")),(0,o.kt)("td",{parentName:"tr",align:null},"Casts the value to a ",(0,o.kt)("strong",{parentName:"td"},"geo location"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"localized")),(0,o.kt)("td",{parentName:"tr",align:null},"Making sure the value is stored in array of objects, each object contains ",(0,o.kt)("inlineCode",{parentName:"td"},"localeCode")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"value")," keys where ",(0,o.kt)("inlineCode",{parentName:"td"},"value")," represents the content of the corresponding locale code.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the field's value is missing, it will be stored as default value type as follows:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"string"),": will be stored as empty string ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number"),": will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"integer"),": will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"float"),": will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"date"),": will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"array"),": will be stored as empty array ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"object"),": will be stored as empty object ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"any")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"mixed"),": will be stored as is."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"location"),": will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localized"),": will be stored as empty array ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),".")),(0,o.kt)("h3",{id:"storing-geo-locations"},"Storing geo locations"),(0,o.kt)("p",null,"To store geo locations, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," cast type. This will make sure the value is stored as a geo location object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    email: "string",\n    location: "location",\n  };\n}\n')),(0,o.kt)("p",null,"Now let's create a new user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { User } from "./models/user";\n\nasync function main() {\n  const user = await User.create({\n    name: "John Doe",\n    email: "hassanzohdy@gmail.com",\n    location: {\n      lat: 30.123,\n      lng: 31.123,\n    },\n  });\n\n  console.log(user.get("location")); // will be converted into: { type: "Point", coordinates: [ 30.123, 31.123 ]\n}\n\nmain();\n')),(0,o.kt)("p",null,"The value is going to be stored as a geo location object."),(0,o.kt)("h3",{id:"localized-values"},"Localized Values"),(0,o.kt)("p",null,"Localized values are essential if you're Building multilingual app, for example if the application has two languages Arabic and English, then localized fields should be stored in both languages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    email: "string",\n    bio: "localized",\n  };\n}\n')),(0,o.kt)("p",null,"Now let's create a new user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { User } from "./models/user";\n\nasync function main() {\n  const user = await User.create({\n    name: "John Doe",\n    email: "hassanzohdy@gmail.com",\n    bio: [\n      {\n        localeCode: "en",\n        value: "English bio",\n      },\n      {\n        localeCode: "ar",\n        value: "Arabic bio",\n      },\n    ],\n  });\n}\n\nmain();\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"localized")," cast will make sure only ",(0,o.kt)("inlineCode",{parentName:"p"},"localeCode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," keys are stored in the database."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the array contains any ",(0,o.kt)("inlineCode",{parentName:"p"},"non-object")," values, it will be ignored.")),(0,o.kt)("h3",{id:"built-in-custom-casts"},"Built in Custom casts"),(0,o.kt)("p",null,"Here are some built in custom casts that you can use:"),(0,o.kt)("h3",{id:"castmodel"},"castModel"),(0,o.kt)("p",null,"Probably this is the most important cast, this cast function receives a model class, it then stores the model data as a sub document to the current model."),(0,o.kt)("p",null,"For example, a Post has a ",(0,o.kt)("inlineCode",{parentName:"p"},"category"),", all we need to do is to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," id when we create the post, then category data will be injected into the post."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model, Casts, castModel } from "@mongez/monpulse";\nimport { Category } from "./category";\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    category: castModel(Category),\n  };\n}\n')),(0,o.kt)("p",null,"Now let's create a new post:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { Post } from "./models/post";\n\nasync function main() {\n  const post = await Post.create({\n    title: "Hello world",\n    content: "This is the post content",\n    category: 41231,\n  });\n\n  console.log(post.get("category")); // will be converted into: {\n  //        id: 41231,\n  //        name: "Category name",\n  //     }\n}\n\nmain();\n')),(0,o.kt)("p",null,"The data that are stored in the posts are collected from ",(0,o.kt)("inlineCode",{parentName:"p"},"embeddedData")," property, this is a builtin property in the model that contains the data that should be inserted when the model is going to be embedded in another model."),(0,o.kt)("p",null,"However, you can define another property name by passing the property name as a second argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"castModel")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model, Casts, castModel } from "@mongez/monpulse";\nimport { Category } from "./category";\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    category: castModel(Category, "embedToPost"),\n  };\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/category.ts"',title:'"src/models/category.ts"'},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class Category extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "categories";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    isActive: "boolean",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public embedded = ["id", "name", "isActive"];\n\n  /**\n   * {@inheritDoc}\n   */\n  public get embedToPost() {\n    return this.only(["id", "name"]);\n  }\n}\n')),(0,o.kt)("admonition",{title:"Note",type:"success"},(0,o.kt)("p",{parentName:"admonition"},"Don't worry if you're not aware yet of the ",(0,o.kt)("inlineCode",{parentName:"p"},"embedded documents"),", we will cover it in the next chapters.")),(0,o.kt)("p",null,"We can also define list of columns that should embedded by passing it as second argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"castModel")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model, Casts, castModel } from "@mongez/monpulse";\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    category: castModel(Category, ["id", "name"]),\n  };\n}\n')),(0,o.kt)("p",null,"This will only embed the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," columns of the category model."),(0,o.kt)("h4",{id:"how-castmodel-works"},"How castModel works?"),(0,o.kt)("p",null,"Let's see basically how ",(0,o.kt)("inlineCode",{parentName:"p"},"castModel")," works in simple words:"),(0,o.kt)("p",null,"the model that we're going to create should receive the id of the category, the ",(0,o.kt)("inlineCode",{parentName:"p"},"castModel")," already knows what model to look into as we already passed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," model to it."),(0,o.kt)("p",null,"Now the function will try to find the model that matches the given ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", if it found it, it will return the embedded data, otherwise it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"This applies to both cases, if the given value is an array of ids, then it will return an array of embedded data, otherwise it will return only one embedded data."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the given value is an instance of model i.e a category model, then it will be used directly without making a new query and fetch the embedded data from it.")),(0,o.kt)("h4",{id:"castemail"},"castEmail"),(0,o.kt)("p",null,"This utility ",(0,o.kt)("inlineCode",{parentName:"p"},"castEmail")," is going to make sure the email is a valid email address, and it will be lowercased."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, castEmail } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    email: castEmail,\n    name: "string",\n  };\n}\n')),(0,o.kt)("p",null,"If the value is not a valid email address, it will be stored as ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", otherwise all email characters will be lowercased."),(0,o.kt)("h4",{id:"oneof"},"oneOf"),(0,o.kt)("p",null,"This is a cool utility that ensure the value that is going to be stored is one of the provided values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, oneOf } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    gender: oneOf(["male", "female"]),\n  };\n}\n')),(0,o.kt)("p",null,"If the value is not one of the provided values, it will be stored as ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h3",{id:"arrayof"},"arrayOf"),(0,o.kt)("p",null,"Works the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"oneOf")," but it will make sure the value is one of the provided values in the array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, arrayOf } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    keywords: arrayOf([\n      "git",\n      "programming",\n      "javascript",\n      "typescript",\n      "nodejs",\n    ]),\n  };\n}\n')),(0,o.kt)("h3",{id:"shapedarray"},"shapedArray"),(0,o.kt)("p",null,"This utility will make sure the value is an array of a type, either a scalar type or an object type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, shapedArray, ShapedArrayType } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    keywords: shapedArray(ShapedArrayType.String),\n    prices: shapedArray(ShapedArrayType.Number),\n  };\n}\n')),(0,o.kt)("p",null,"These are the available shaped array types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export enum ShapedArrayType {\n  String = "string",\n  Number = "number",\n  Boolean = "boolean",\n  Date = "date",\n}\n')),(0,o.kt)("p",null,"You can also pass an object type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, shapedArray, ShapedArrayType } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    keywords: shapedArray(ShapedArrayType.String),\n    prices: shapedArray(ShapedArrayType.Number),\n    addresses: shapedArray({\n      street: ShapedArrayType.String,\n      city: ShapedArrayType.String,\n      country: ShapedArrayType.String,\n      phoneNumber: ShapedArrayType.Number,\n      apartment: ShapedArrayType.Number,\n    }),\n  };\n}\n')),(0,o.kt)("p",null,"Any other type will be ignored, if the value is not an array, it will be stored as ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h4",{id:"randominteger"},"randomInteger"),(0,o.kt)("p",null,"This utility will generate a random integer number between the provided range."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, randomInteger } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    verificationCode: randomInteger(1000, 9999),\n  };\n}\n')),(0,o.kt)("p",null,"This will generate a random integer number between 1000 and 9999."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Kindly note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"randomInteger")," utility will not generate a random number if the value is already provided, in the previous example, when verification code is done, you should unset it or set it to null if you want to generate an ew code in the next save.")),(0,o.kt)("h3",{id:"expiresafter"},"expiresAfter"),(0,o.kt)("p",null,"This utility will make sure the field is expired after the provided number of unit type you provide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts, expiresAfter } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    verificationCode: randomInteger(1000, 9999),\n    verificationCodeExpiration: expiresAfter(1, "hour"),\n  };\n}\n')),(0,o.kt)("h2",{id:"create-your-own-custom-casts"},"Create your own custom casts"),(0,o.kt)("p",null,"Sometimes we need customize the value of the field that is going to be added to the collection's document, for example encrypting the password before storing it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/casts/cast-password.ts"',title:'"src/models/casts/cast-password.ts"'},'import Password from "@mongez/password";\n\nexport default function castPassword(value: string) {\n  return Password.generate(String(value), 12); // 12 is the number of salt rounds\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    password: castPassword,\n    name: "string",\n    email: "string",\n  };\n}\n')),(0,o.kt)("p",null,"Now let's create a new user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { User } from "./models/user";\n\nasync function main() {\n  const user = await User.create({\n    name: "John Doe",\n    email: "john@doe.com",\n    password: 123456,\n  });\n\n  console.log(user.get("password")); // will be something like: $2a$12$qwe322eqwdpfkowerpko\n}\n\nmain();\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In cast password example, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hassanzohdy/mongez-password"},"@mongez/password")," package to generate a hashed password, you can use any package you want.")),(0,o.kt)("p",null,"The cast callback will receive the value of the field and the model instance, you can use the model instance to access other fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/casts/cast-password.ts"',title:'"src/models/casts/cast-password.ts"'},'import Password from "@mongez/password";\n\nexport default function castPassword(value: string, model: Model) {\n  let salt = model.get("salt");\n\n  if (!salt) {\n    salt = 12;\n    model.set("salt", salt);\n  }\n\n  return Password.generate(String(value), salt);\n}\n')),(0,o.kt)("p",null,"Here we inserted the salt value to the model instance, so we can use it in the next save, this will increase the security of the password."))}m.isMDXComponent=!0}}]);