"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[6145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:5},a="Sluggable",s={unversionedId:"warlock/utils/sluggable",id:"warlock/utils/sluggable",title:"Sluggable",description:"sluggable is a custom-cast function that generates a slug from model's value i.e name field.",source:"@site/docs/warlock/utils/sluggable.mdx",sourceDirName:"warlock/utils",slug:"/warlock/utils/sluggable",permalink:"/documentation/docs/warlock/utils/sluggable",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"warlock",previous:{title:"Promise All Object",permalink:"/documentation/docs/warlock/utils/promise-all-object"},next:{title:"To Json",permalink:"/documentation/docs/warlock/utils/to-json"}},i={},c=[{value:"Usage",id:"usage",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sluggable"},"Sluggable"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sluggable")," is a custom-cast function that generates a slug from model's value i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field."),(0,o.kt)("p",null,"It works with strings and localized values as well."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In your post model, add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/posts/models/post.ts"',title:'"src/app/posts/models/post.ts"'},'import { Model, Casts } from "@mongez/monpulse";\nimport { sluggable } from "@mongez/warlock";\n\nexport class Post extends Model {\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "localized",\n    description: "localized",\n    shortDescription: "localized",\n    isActive: "boolean",\n  };\n\n  /**\n   * {@inheritdoc}\n   */\n  protected customCasts = {\n    slug: sluggable("title"),\n  };\n}\n')),(0,o.kt)("p",null,"This will generate ",(0,o.kt)("inlineCode",{parentName:"p"},"slug")," value every time the post is saved."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," field is localized, the slug will be generated from the english locale code (",(0,o.kt)("inlineCode",{parentName:"p"},"en"),")."))}d.isMDXComponent=!0}}]);