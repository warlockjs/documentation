"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:30},l="Unique",u={unversionedId:"warlock/validation/rules/unique",id:"warlock/validation/rules/unique",title:"Unique",description:"Check if the input value is unique in the database.",source:"@site/docs/warlock/validation/rules/unique.mdx",sourceDirName:"warlock/validation/rules",slug:"/warlock/validation/rules/unique",permalink:"/mongez/docs/warlock/validation/rules/unique",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"warlock",previous:{title:"Stringify",permalink:"/mongez/docs/warlock/validation/rules/stringify"},next:{title:"Uploadable",permalink:"/mongez/docs/warlock/validation/rules/uploadable"}},o={},s=[{value:"Example",id:"example",level:2},{value:"Unique Rule with <code>except</code> Condition",id:"unique-rule-with-except-condition",level:2},{value:"Except current user",id:"except-current-user",level:2},{value:"Perform a custom query",id:"perform-a-custom-query",level:2},{value:"Array values",id:"array-values",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unique"},"Unique"),(0,a.kt)("p",null,"Check if the input value is unique in the database."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This rule is a database dependent rule. It requires a database connection to run against the input value.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The validation rule ",(0,a.kt)("strong",{parentName:"p"},"requires a value")," to run against the input value.")),(0,a.kt)("p",null,"For the time being, this rule does not support custom string rule, so the rule class must be called directly."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',title:'"src/app/users/controllers/create-account.ts"'},'// ...\nimport { UniqueRule } from "@mongez/warlock";\nimport { User } from "../models/user";\n\ncreateAccount.validation = {\n  rules: {\n    email: ["required", "email", new UniqueRule(User, "email").insensitive()],\n  },\n};\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"insensitive")," method is used to make the value case insensitive."),(0,a.kt)("p",null,"If the second argument is not passed, then it will be matched against the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,a.kt)("p",null,"You may also pass the collection name instead of the model class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',title:'"src/app/users/controllers/create-account.ts"'},'// ...\nimport { UniqueRule } from "@mongez/warlock";\n\ncreateAccount.validation = {\n  rules: {\n    email: [\n      "required",\n      "email",\n      new UniqueRule("users", "email").insensitive(),\n    ],\n  },\n};\n')),(0,a.kt)("h2",{id:"unique-rule-with-except-condition"},"Unique Rule with ",(0,a.kt)("inlineCode",{parentName:"h2"},"except")," Condition"),(0,a.kt)("p",null,"Ensure that a given value unique in a collection, while also allowing the exclusion of documents where a specific field does not match a specified value. This is achieved using the ",(0,a.kt)("inlineCode",{parentName:"p"},"except")," method, which skips documents where the specified field equals the provided value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',title:'"src/app/users/controllers/create-account.ts"'},'// ...\nimport { UniqueRule } from "@mongez/warlock";\n\ncreateAccount.validation = {\n  rules: {\n    email: [\n      "required",\n      "email",\n      new UniqueRule("users", "email").insensitive().except("isActive", false),\n    ],\n  },\n};\n')),(0,a.kt)("h2",{id:"except-current-user"},"Except current user"),(0,a.kt)("p",null,"You may also validate the input to match a unique value, except the current user's value, in this case use ",(0,a.kt)("inlineCode",{parentName:"p"},"exceptCurrentUser")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/update-profile.ts"',title:'"src/app/users/controllers/update-profile.ts"'},'// ...\nimport { UniqueRule } from "@mongez/warlock";\n\nupdateProfile.validation = {\n  rules: {\n    email: [\n      "required",\n      "email",\n      new UniqueRule("users", "email").insensitive().exceptCurrentUser(),\n    ],\n  },\n};\n')),(0,a.kt)("p",null,"This one is useful when you want to update the user's email, and you want to make sure that the email is unique, except the current user's email."),(0,a.kt)("h2",{id:"perform-a-custom-query"},"Perform a custom query"),(0,a.kt)("p",null,"You may also perform a custom query to validate the input value using ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/create-account.ts"',title:'"src/app/users/controllers/create-account.ts"'},'// ...\nimport { UniqueRule } from "@mongez/warlock";\n\ncreateAccount.validation = {\n  rules: {\n    email: [\n      "required",\n      "email",\n      new UniqueRule("users", "email")\n        .insensitive()\n        .query((query) => query.where("isActive", true)),\n    ],\n  },\n};\n')),(0,a.kt)("h2",{id:"array-values"},"Array values"),(0,a.kt)("p",null,"If the input's value is an array, it will be checked against the database using the ",(0,a.kt)("inlineCode",{parentName:"p"},"whereIn")," method:"))}m.isMDXComponent=!0}}]);