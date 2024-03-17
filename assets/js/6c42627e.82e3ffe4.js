"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),l=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,h=c["".concat(m,".").concat(u)]||c[u]||p[u]||s;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(6010);const s={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7462),a=n(7294),s=n(6010),r=n(2466),i=n(6550),m=n(1980),l=n(7392),d=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,m._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=p(e),[r,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[m,l]=h({queryString:n,groupId:o}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,d.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=m??c;return u({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),g(e)}),[l,g,s]),tabValues:s}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:m,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),o=l[n].value;o!==i&&(c(t),m(o))},u=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:p},r,{className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},a.createElement(k,(0,o.Z)({},e,t)),a.createElement(y,(0,o.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return a.createElement(w,(0,o.Z)({key:String(t)},e))}},7142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),s=n(4866),r=n(5162);const i={sidebar_position:2},m="Embedded Documents",l={unversionedId:"monpulse/relationships/embedded-documents",id:"monpulse/relationships/embedded-documents",title:"Embedded Documents",description:"Embedded documents concept is a core feature of MongoDB, and it is very useful when you want to store related data in the same document. This is a very common practice in MongoDB, and it is called Embedded Relationships.",source:"@site/docs/monpulse/relationships/embedded-documents.mdx",sourceDirName:"monpulse/relationships",slug:"/monpulse/relationships/embedded-documents",permalink:"/mongez/docs/monpulse/relationships/embedded-documents",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mongodb",previous:{title:"Introduction",permalink:"/mongez/docs/monpulse/relationships/introduction"},next:{title:"Syncing Models",permalink:"/mongez/docs/monpulse/relationships/syncing-models"}},d={},c=[{value:"Embedding Documents",id:"embedding-documents",level:2},{value:"Embedding Single Document",id:"embedding-single-document",level:3},{value:"Specifying the Embedded Data",id:"specifying-the-embedded-data",level:3},{value:"Embedding Multiple Documents",id:"embedding-multiple-documents",level:3},{value:"Associating Documents",id:"associating-documents",level:3},{value:"Re-Associating Documents",id:"re-associating-documents",level:3},{value:"Disassociating Documents",id:"disassociating-documents",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"embedded-documents"},"Embedded Documents"),(0,a.kt)("p",null,"Embedded documents concept is a core feature of MongoDB, and it is very useful when you want to store related data in the same document. This is a very common practice in MongoDB, and it is called ",(0,a.kt)("strong",{parentName:"p"},"Embedded Relationships"),"."),(0,a.kt)("p",null,"It makes the query faster because when we fetch the post we don't have to lookup the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," collection to get the author's data, it is already there."),(0,a.kt)("p",null,"Before we continue, Let's create three models that we'll use in all of our examples"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"user",label:"User Model",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app/models/user.ts","src/app/models/user.ts":!0},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    image: "string",\n    email: "string",\n    password: "string",\n  };\n}\n'))),(0,a.kt)(r.Z,{value:"comment",label:"Comment Model",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app/models/comment.ts","src/app/models/comment.ts":!0},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class Comment extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "comments";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    comment: "string",\n    createdBy: "object",\n  };\n}\n'))),(0,a.kt)(r.Z,{value:"post",label:"Post Model",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app/models/post.ts{15,16}","src/app/models/post.ts{15,16}":!0},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    author: "object", // user object\n    comments: "array", // array of comments\n  };\n}\n')))),(0,a.kt)("h2",{id:"embedding-documents"},"Embedding Documents"),(0,a.kt)("p",null,"There are two types of embedded documents:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Embedding Single document"),(0,a.kt)("li",{parentName:"ol"},"Embedding Multiple documents")),(0,a.kt)("h3",{id:"embedding-single-document"},"Embedding Single Document"),(0,a.kt)("p",null,"Consider embedding single document as a ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOne")," relationship in SQL databases, where the document contains only one embedded document."),(0,a.kt)("p",null,"For example, the post has an ",(0,a.kt)("inlineCode",{parentName:"p"},"author")," so the author will be embedded inside the post document as a single document, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "title": "Hello World",\n  "content": "This is the post body",\n  "author": {\n    "id": 5122,\n    "name": "John Doe",\n    "image": "https://example.com/image.jpg"\n  }\n}\n')),(0,a.kt)("p",null,"Let's see how we can achieve this using models"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app.ts {13}","src/app.ts":!0,"{13}":!0},'import { Post } from "./models/post";\nimport { User } from "./models/user";\n\nasync function main() {\n  const author = await User.create({\n    name: "John Doe",\n    image: "https://example.com/image.jpg",\n  });\n\n  const post = await Post.create({\n    title: "Hello World",\n    content: "This is the post body",\n    author: author.embeddedData, // embed the author data\n  });\n}\n\nmain();\n')),(0,a.kt)("p",null,"What we've done here is we created a new user, which is basically a very simple operation, then we created a new post and we embedded the author's data inside the post document using the ",(0,a.kt)("inlineCode",{parentName:"p"},"embeddedData")," property."),(0,a.kt)("p",null,"The data of the author that will be stored will be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5122,\n  "name": "John Doe",\n  "image": "https://example.com/image.jpg",\n  "createdAt": "2023-01-01T00:00:00.000Z",\n  "updatedAt": "2023-01-01T00:00:00.000Z"\n}\n')),(0,a.kt)("admonition",{title:"Did you know?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"embeddedData")," property is a getter that returns the embedded data of the model, it is used internally by the model to embed the data, if you do not override it, it will return the whole model data. Thus, you ",(0,a.kt)("strong",{parentName:"p"},"should override")," it to return only the data you want to embed.")),(0,a.kt)("h3",{id:"specifying-the-embedded-data"},"Specifying the Embedded Data"),(0,a.kt)("p",null,"As mentioned earlier, using ",(0,a.kt)("inlineCode",{parentName:"p"},"embeddedData")," property will embed the whole model data, but what if you want to embed only the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," of the author?"),(0,a.kt)("p",null,"Well, let's then update our ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," model to return only the data we want to embed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app/models/user.ts{22,23,24}","src/app/models/user.ts{22,23,24}":!0},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    image: "string",\n    email: "string",\n    password: "string",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public get embeddedData() {\n    return this.only(["id", "name", "image"]);\n  }\n}\n')),(0,a.kt)("p",null,"This will reduce the embedded documents when we embed the user data inside the post document to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5122,\n  "name": "John Doe",\n  "image": "https://example.com/image.jpg"\n}\n')),(0,a.kt)("p",null,"Another way to define the embedded columns is by defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"embedded")," property, it is an array of columns that will be embedded, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app/models/user.ts{22}","src/app/models/user.ts{22}":!0},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class User extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    image: "string",\n    email: "string",\n    password: "string",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public embedded = ["id", "name", "image"];\n}\n')),(0,a.kt)("p",null,"That's how we can embed single documents, let's now see how we can embed multiple documents."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When using ",(0,a.kt)("a",{parentName:"p",href:"./../models/casting-data#castmodel"},"castModel"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"embeddedData")," property will be used to embed the data, so you don't have to worry about it.")),(0,a.kt)("h3",{id:"embedding-multiple-documents"},"Embedding Multiple Documents"),(0,a.kt)("p",null,"Embedding multiple documents is basically adding list of documents inside one column of a parent document, for example we can insert list of comments inside a single post"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"It's not ",(0,a.kt)("strong",{parentName:"p"},"recommended")," to store large documents like comments inside a single post, if the post has a lot of comments, it will be very slow to retrieve the post data, instead you should use ",(0,a.kt)("strong",{parentName:"p"},"referencing documents")," to store the comments in a separate collection.")),(0,a.kt)("h3",{id:"associating-documents"},"Associating Documents"),(0,a.kt)("p",null,"To associate documents, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"associate")," method, it takes three arguments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The column name"),(0,a.kt)("li",{parentName:"ol"},"The model class"),(0,a.kt)("li",{parentName:"ol"},"the embedded property name, default to ",(0,a.kt)("inlineCode",{parentName:"li"},"embeddedData"))),(0,a.kt)("p",null,"Let's see an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app.ts {25}","src/app.ts":!0,"{25}":!0},'import { Post } from "./models/post";\nimport { User } from "./models/user";\nimport { Comment } from "./models/comment";\n\nasync function main() {\n  const author = await User.create({\n    name: "John Doe",\n    image: "https://example.com/image.jpg",\n  });\n\n  // now let\'s create a new post model\n  const post = new Post({\n    title: "Hello World",\n    content: "This is the post body",\n    author: author.embeddedData,\n  });\n\n  // create new comment\n  const comment = await Comment.create({\n    content: "This is a comment",\n    createdBy: author.embeddedData,\n  });\n\n  // let\'s add that comment to the post\n  post.associate("comments", comment);\n\n  post.save();\n}\n\nmain();\n')),(0,a.kt)("p",null,"This will inject the comment into our post in ",(0,a.kt)("inlineCode",{parentName:"p"},"comments")," column, we can specify the embedded property name by passing the third argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"associate")," method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app.ts {25}","src/app.ts":!0,"{25}":!0},'import { Post } from "./models/post";\nimport { User } from "./models/user";\nimport { Comment } from "./models/comment";\n\nasync function main() {\n  const author = await User.create({\n    name: "John Doe",\n    image: "https://example.com/image.jpg",\n  });\n\n  // now let\'s create a new post model\n  const post = new Post({\n    title: "Hello World",\n    content: "This is the post body",\n    author: author.embeddedData,\n  });\n\n  // create new comment\n  const comment = await Comment.create({\n    content: "This is a comment",\n    createdBy: author.embeddedData,\n  });\n\n  // let\'s add that comment to the post\n  post.associate("comments", comment, "embedToPost");\n\n  post.save();\n}\n\nmain();\n')),(0,a.kt)("p",null,"Let's define that ",(0,a.kt)("inlineCode",{parentName:"p"},"embedToPost")," property in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Comment")," model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app/models/comment.ts {28}","src/app/models/comment.ts":!0,"{28}":!0},'import { Model, Casts } from "@mongez/monpulse";\n\nexport class Comment extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "comments";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    content: "string",\n    createdBy: "object",\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  public get embeddedData() {\n    return this.only(["id", "content", "createdBy"]);\n  }\n\n  /**\n   * {@inheritDoc}\n   */\n  public get embedToPost() {\n    return this.only(["id", "content", "createdBy", "createdAt"]);\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"comments")," field does not exist, it will be created automatically")),(0,a.kt)("h3",{id:"re-associating-documents"},"Re-Associating Documents"),(0,a.kt)("p",null,"Consider the ",(0,a.kt)("inlineCode",{parentName:"p"},"reassociate")," method as an update for the document inside the parent document, for example, if the comment's data is updated, we can re-associate it to the post to update the comment data inside the post"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app.ts {14}","src/app.ts":!0,"{14}":!0},'import { Post } from "./models/post";\nimport { User } from "./models/user";\nimport { Comment } from "./models/comment";\n\nasync function main() {\n  const comment = await Comment.find(1);\n\n  comment.set("comment", "a new comment");\n\n  comment.save();\n\n  const post = await Post.find(1);\n\n  post.reassociate("comments", comment);\n\n  post.save();\n}\n\nmain();\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reassociate")," method does multiple things, first off, it checks is the ",(0,a.kt)("inlineCode",{parentName:"p"},"comments")," field exists, if not then it creates a new one, then it checks if the comment exists inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"comments")," field, if not then it pushes it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"comments")," field, if it exists then it updates the comment data inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"comments")," field in the same index."),(0,a.kt)("p",null,"You may also pass the third argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reassociate")," method to specify the embedded property name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app.ts {14}","src/app.ts":!0,"{14}":!0},'import { Post } from "./models/post";\nimport { User } from "./models/user";\nimport { Comment } from "./models/comment";\n\nasync function main() {\n  const comment = await Comment.find(1);\n\n  comment.set("comment", "a new comment");\n\n  comment.save();\n\n  const post = await Post.find(1);\n\n  post.reassociate("comments", comment, "embedToPost");\n\n  post.save();\n}\n\nmain();\n')),(0,a.kt)("admonition",{title:"Did you know?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reassociate")," method can work exactly like the ",(0,a.kt)("inlineCode",{parentName:"p"},"associate")," method, so you can use it to associate new documents to the parent document, but its always ",(0,a.kt)("strong",{parentName:"p"},"recommended")," to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"associate")," method to associate new documents.")),(0,a.kt)("h3",{id:"disassociating-documents"},"Disassociating Documents"),(0,a.kt)("p",null,"I guess you already know what the ",(0,a.kt)("inlineCode",{parentName:"p"},"disassociate")," method does, it removes the document from the parent document, let's see an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"src/app.ts {13}","src/app.ts":!0,"{13}":!0},'import { Post } from "./models/post";\nimport { User } from "./models/user";\nimport { Comment } from "./models/comment";\n\nasync function main() {\n  const comment = await Comment.find(1);\n\n  const post = await Post.find(1);\n\n  post.reassociate("comments", comment);\n\n  // now let\'s disassociate (remove) the comment from the post\n  post.disassociate("comments", comment);\n\n  post.save();\n}\n\nmain();\n')),(0,a.kt)("admonition",{title:"Embedded Objects",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Any one of the three methods, should receive the embedded model as second argument, but you may also pass any type of data, for example the field could be an array of strings, or an array of numbers, if the second argument is an object, the methods will look for ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," inside it as a unique identifier, if it's not found, then it will search by the entire value regardless of the type, if not found in ",(0,a.kt)("inlineCode",{parentName:"p"},"reassociate")," method, then it will push it to the array, if not found in ",(0,a.kt)("inlineCode",{parentName:"p"},"disassociate")," method, then it will do nothing.")))}h.isMDXComponent=!0}}]);