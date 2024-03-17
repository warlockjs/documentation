"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[2586],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:4},o="Validation errors",l={unversionedId:"warlock/validation/validation-errors",id:"warlock/validation/validation-errors",title:"Validation errors",description:"All validation rules are stored under validation group name, by default it supports English and Arabic languages, you can however add your own language.",source:"@site/docs/warlock/validation/validation-errors.mdx",sourceDirName:"warlock/validation",slug:"/warlock/validation/validation-errors",permalink:"/mongez/docs/warlock/validation/validation-errors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"warlock",previous:{title:"Create Your Own Rule",permalink:"/mongez/docs/warlock/validation/rules/create-your-own-rule"},next:{title:"Auth",permalink:"/mongez/docs/category/auth"}},s={},u=[{value:"Default error messages",id:"default-error-messages",level:2},{value:"Overriding error messages",id:"overriding-error-messages",level:2},{value:"Add new language support",id:"add-new-language-support",level:2},{value:"Translated input names",id:"translated-input-names",level:2}],p={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation-errors"},"Validation errors"),(0,r.kt)("p",null,"All validation rules are stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"validation")," group name, by default it supports ",(0,r.kt)("inlineCode",{parentName:"p"},"English")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Arabic")," languages, you can however add your own language."),(0,r.kt)("h2",{id:"default-error-messages"},"Default error messages"),(0,r.kt)("p",null,"The following code is the default validation messages for all builtin validation rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { groupedTranslations } from "@mongez/localization";\n\ngroupedTranslations("validation", {\n  required: {\n    en: "The :input field is required.",\n    ar: ":input \u0645\u0637\u0644\u0648\u0628.",\n  },\n  unique: {\n    en: "The :input has already been taken.",\n    ar: ":input \u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646 \u0642\u0628\u0644.",\n  },\n  object: {\n    en: ":input must be an object.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0643\u0627\u0626\u0646.",\n  },\n  exists: {\n    en: "The selected :input does not exist in our database records.",\n    ar: ":input \u0627\u0644\u0645\u062d\u062f\u062f \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f \u0641\u064a \u0633\u062c\u0644\u0627\u062a \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627.",\n  },\n  confirmed: {\n    en: ":input must match :confirmationInput.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u062a\u0637\u0627\u0628\u0642 \u0645\u0639 :confirmationInput.",\n  },\n  min: {\n    en: ":input must be at least :min.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 :min.",\n  },\n  file: {\n    en: ":input must be a file.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0644\u0641.",\n  },\n  files: {\n    en: ":input must be an array of files.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062a.",\n  },\n  max: {\n    en: ":input must be at most :max.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0643\u062b\u0631 :max.",\n  },\n  minLength: {\n    en: ":input must be at least :min characters.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 :min \u062d\u0631\u0641.",\n  },\n  maxLength: {\n    en: ":input must be at most :max characters.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0643\u062b\u0631 :max \u062d\u0631\u0641.",\n  },\n  email: {\n    en: "The :input must be a valid email address.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u0627\u0644\u062d.",\n  },\n  localized: {\n    en: ":input must be a an array of objects, each object has localeCode and text properties.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0635\u0641\u0648\u0641\u0629 \u0645\u0646 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a\u060c \u0643\u0644 \u0643\u0627\u0626\u0646 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062e\u0635\u0627\u0626\u0635 localeCode \u0648 text.",\n  },\n  in: {\n    en: ":input accepts only the following values: :values.",\n    ar: ":input \u064a\u0642\u0628\u0644 \u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0641\u0642\u0637: :values.",\n  },\n  string: {\n    en: ":input must be a string.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0633\u0644\u0633\u0644\u0629.",\n  },\n  number: {\n    en: ":input must be a number.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0631\u0642\u0645.",\n  },\n  integer: {\n    en: ":input must be an integer.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u062f\u062f \u0635\u062d\u064a\u062d.",\n  },\n  float: {\n    en: ":input must be a float.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u062f\u062f \u0639\u0627\u0626\u0645.",\n  },\n  boolean: {\n    en: ":input must be a boolean.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0646\u0637\u0642\u064a.",\n  },\n  pattern: {\n    en: ":input must match the following pattern: :pattern.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u062a\u0637\u0627\u0628\u0642 \u0645\u0639 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u062a\u0627\u0644\u064a: :pattern.",\n  },\n  array: {\n    en: ":input must be an array.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0635\u0641\u0648\u0641\u0629.",\n  },\n  arrayOf: {\n    en: ":input must be an array of :type.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0635\u0641\u0648\u0641\u0629 \u0645\u0646 :type.",\n  },\n  url: {\n    en: ":input must be a valid URL.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0631\u0627\u0628\u0637 \u0635\u0627\u0644\u062d.",\n  },\n  length: {\n    en: ":input must be :length characters.",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 :length \u062d\u0631\u0641.",\n  },\n  scalar: {\n    en: ":input must be a string, number or boolean",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0631\u0642\u0645 \u0623\u0648 \u0646\u0635 \u0623\u0648 \u0642\u064a\u0645\u0629 \u0645\u0646\u0637\u0642\u064a\u0629",\n  },\n  stringify: {\n    en: ":input must be number, string",\n    ar: ":input \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0631\u0642\u0645 \u0623\u0648 \u0646\u0635 ",\n  },\n});\n')),(0,r.kt)("h2",{id:"overriding-error-messages"},"Overriding error messages"),(0,r.kt)("p",null,"To override an error message from the default messages, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"groupedTranslations")," function in your own code base."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/general/utils/locales.ts"',title:'"src/app/general/utils/locales.ts"'},'import { groupedTranslation } from "@mongez/localization";\n\ngroupedTranslation("validation", {\n  required: {\n    en: ":input is mandatory",\n    ar: "\u064a\u062c\u0628 \u0627\u0646 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0642\u064a\u0645\u0629 :input",\n  },\n});\n')),(0,r.kt)("h2",{id:"add-new-language-support"},"Add new language support"),(0,r.kt)("p",null,"To add a new language validation message, use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hassanzohdy/mongez-localization#extending-translations"},"extend")," function."),(0,r.kt)("p",null,"For example, let's add the French language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/general/utils/locales.ts"',title:'"src/app/general/utils/locales.ts"'},'import { extend } from "@mongez/localization";\n\nextend("fr", {\n  validation: {\n    required: ":input est obligatoire",\n    email: ":input doit \xeatre une adresse email valide",\n    // rest of messages\n  },\n});\n')),(0,r.kt)("h2",{id:"translated-input-names"},"Translated input names"),(0,r.kt)("p",null,"Let's say our current app locale code is ",(0,r.kt)("inlineCode",{parentName:"p"},"ar")," which is Arabic, now we want to return an error for ",(0,r.kt)("inlineCode",{parentName:"p"},"firstName")," that indicates it is required which is defined in the validation as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'groupedTranslation("validation", {\n  required: {\n    en: ":input is required",\n    ar: "\u0645\u0637\u0644\u0648\u0628 :input",\n  },\n});\n')),(0,r.kt)("p",null,"This will result to the following error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\u0645\u0637\u0644\u0648\u0628 firstName\n")),(0,r.kt)("p",null,"To translate input names, use ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," key in the validation group:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/general/utils/locales.ts"',title:'"src/app/general/utils/locales.ts"'},'groupedTranslation("inputs", {\n  firstName: {\n    en: "First name",\n    ar: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644",\n  },\n  lastName: {\n    en: "Last name",\n    ar: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062e\u064a\u0631",\n  },\n});\n')),(0,r.kt)("p",null,"Now when the validation error is returned, it will be translated to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can add in each module its own inputs, but be aware to not override the same input name in another module.")))}m.isMDXComponent=!0}}]);