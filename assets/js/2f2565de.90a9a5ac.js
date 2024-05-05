"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[2802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,g=c["".concat(r,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:6},s="Model Data",o={unversionedId:"monpulse/models/model-data",id:"monpulse/models/model-data",title:"Model Data",description:"Introduction",source:"@site/docs/monpulse/models/model-data.mdx",sourceDirName:"monpulse/models",slug:"/monpulse/models/model-data",permalink:"/docs/monpulse/models/model-data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mongodb",previous:{title:"Default values",permalink:"/docs/monpulse/models/default-values"},next:{title:"Embedded documents",permalink:"/docs/monpulse/models/embedded-documents"}},r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Getting all data",id:"getting-all-data",level:2},{value:"Getting model id",id:"getting-model-id",level:2},{value:"Getting model _id",id:"getting-model-_id",level:2},{value:"Getting a specified field",id:"getting-a-specified-field",level:2},{value:"Check if field exists",id:"check-if-field-exists",level:2},{value:"Get all data except specific fields",id:"get-all-data-except-specific-fields",level:2},{value:"Get only specific fields",id:"get-only-specific-fields",level:2},{value:"Set a specified field",id:"set-a-specified-field",level:2},{value:"Adding multiple fields",id:"adding-multiple-fields",level:2},{value:"Unset fields",id:"unset-fields",level:2},{value:"Increment a field",id:"increment-a-field",level:2},{value:"Decrement a field",id:"decrement-a-field",level:2},{value:"Original Data",id:"original-data",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"model-data"},"Model Data"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"As mentioned earlier, each model instance represents a document in the database, in this section we'll see how to manage and access the data of the model."),(0,l.kt)("h2",{id:"getting-all-data"},"Getting all data"),(0,l.kt)("p",null,"Let's take a simple example of a user model:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},'import { Model, Casts } from "@warlock.js/cascade";\n\nexport class User extends Model {\n\n  /**\n   * Collection name\n   */\n  public static collection = "users";\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    name: "string",\n    email: "string",\n    password: "string",\n    age: "number",\n    isActive: "boolean",\n  };\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},'import { User } from "./models/user";\n\nasync function main() {\n    const user = await User.create({\n        name: "Hasan Zohdy",\n        email: "hassanzohdy@gmail.com",\n        age: 25,\n        isActive: true,\n        birthDate: new Date("1995-01-01"),\n    });\n\n    console.log(user.data);\n}\n\nmain();\n')),(0,l.kt)("p",null,"This will create a new user, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"user.data")," will be something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 512312,\n    "_id": "5f9b1b3c1b9c4e0b4c7b23a1",\n    "name": "Hasan Zohdy",\n    "email": "hassanzohdy@gmail.com",\n    "age": 25,\n    "isActive": true,\n    "birthDate": "1995-01-01T00:00:00.000Z",\n    "createdAt": "2020-10-30T12:00:00.000Z",\n    "updatedAt": "2020-10-30T12:00:00.000Z"\n}\n')),(0,l.kt)("h2",{id:"getting-model-id"},"Getting model id"),(0,l.kt)("p",null,"To get model id, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," property:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(user.id); // 512312\n")),(0,l.kt)("admonition",{title:"Be aware",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"If you're creating a new user using the new operator, the ",(0,l.kt)("strong",{parentName:"p"},"id")," will be ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," until you save the model.")),(0,l.kt)("p",null,"This id is auto generated when the model is saved for the first time, and it's a unique number for each document in the database."),(0,l.kt)("h2",{id:"getting-model-_id"},"Getting model _id"),(0,l.kt)("p",null,"This is the builtin MongoDB id, it's a unique string for each document in the database."),(0,l.kt)("p",null,"To get model _id, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," property:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user._id); // ObjectId("5f9b1b3c1b9c4e0b4c7b23a1")\n')),(0,l.kt)("admonition",{title:"Be aware",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"If you're creating a new user using the new operator, the ",(0,l.kt)("strong",{parentName:"p"},"_id")," will be ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," until you save the model.")),(0,l.kt)("h2",{id:"getting-a-specified-field"},"Getting a specified field"),(0,l.kt)("p",null,"To get a specified field, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user.get("name")); // Hasan Zohdy\n')),(0,l.kt)("p",null,"If the field doesn't exist, it will return ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),", you can then pass a default value as a second argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user.get("name", "John Doe")); // Hasan Zohdy\nconsole.log(user.get("address", "John Doe")); // John Doe\n')),(0,l.kt)("p",null,"You can also get the field using the dot notation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user.get("address.city")); // Cairo\n')),(0,l.kt)("h2",{id:"check-if-field-exists"},"Check if field exists"),(0,l.kt)("p",null,"To check if a field exists, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"has")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user.has("name")); // true\nconsole.log(user.has("address.city")); // false\n')),(0,l.kt)("h2",{id:"get-all-data-except-specific-fields"},"Get all data except specific fields"),(0,l.kt)("p",null,"To get all data except specific fields, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"except")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user.except(["name", "age"]));\n')),(0,l.kt)("p",null,"This will return all data except the name and age fields."),(0,l.kt)("h2",{id:"get-only-specific-fields"},"Get only specific fields"),(0,l.kt)("p",null,"To get only specific fields, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"only")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(user.only(["name", "age"]));\n')),(0,l.kt)("h2",{id:"set-a-specified-field"},"Set a specified field"),(0,l.kt)("p",null,"To set a specified field, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.set("name", "John Doe");\n')),(0,l.kt)("p",null,"You can also set a field using the dot notation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.set("address.city", "Cairo");\n')),(0,l.kt)("h2",{id:"adding-multiple-fields"},"Adding multiple fields"),(0,l.kt)("p",null,"If you want to set multiple fields at once use ",(0,l.kt)("inlineCode",{parentName:"p"},"merge")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.merge({\n    name: "John Doe",\n    age: 25,\n});\n')),(0,l.kt)("p",null,"This will set or update the name and age fields."),(0,l.kt)("h2",{id:"unset-fields"},"Unset fields"),(0,l.kt)("p",null,"To unset a field, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"unset")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.unset("name");\n')),(0,l.kt)("p",null,"You can also unset a field using the dot notation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.unset("address.city");\n')),(0,l.kt)("p",null,"You can pass as many fields as you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.unset("name", "age", "address.city");\n')),(0,l.kt)("h2",{id:"increment-a-field"},"Increment a field"),(0,l.kt)("p",null,"To increment a field, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"increment")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.increment("age");\n')),(0,l.kt)("p",null,"You can also increment a field using the dot notation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.increment("address.apartment.number");\n')),(0,l.kt)("p",null,"You may also set the amount of increment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.increment("age", 5);\n')),(0,l.kt)("h2",{id:"decrement-a-field"},"Decrement a field"),(0,l.kt)("p",null,"To decrement a field, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"decrement")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.decrement("age");\n')),(0,l.kt)("p",null,"You can also decrement a field using the dot notation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.decrement("address.apartment.number");\n')),(0,l.kt)("p",null,"You may also set the amount of decrement:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'user.decrement("age", 5);\n')),(0,l.kt)("h2",{id:"original-data"},"Original Data"),(0,l.kt)("p",null,"As data is mutated during the usage of the model, the updated data are accessible via the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," property."),(0,l.kt)("p",null,"Original data are the data that were fetched from the database or the onces that was passed to the model constructor, these data are kept untouched, and you can access them using the ",(0,l.kt)("inlineCode",{parentName:"p"},"original")," property:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(user.original);\n")))}p.isMDXComponent=!0}}]);