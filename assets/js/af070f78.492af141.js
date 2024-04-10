"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[4883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:5},l="Default values",a={unversionedId:"monpulse/models/default-values",id:"monpulse/models/default-values",title:"Default values",description:"When creating new model, you can specify default values for fields. These values will be used when creating new records if the field is not specified.",source:"@site/docs/monpulse/models/default-values.mdx",sourceDirName:"monpulse/models",slug:"/monpulse/models/default-values",permalink:"/docs/monpulse/models/default-values",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mongodb",previous:{title:"Casting Custom Fields",permalink:"/docs/monpulse/models/casting-custom-fields"},next:{title:"Model Data",permalink:"/docs/monpulse/models/model-data"}},i={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"default-values"},"Default values"),(0,o.kt)("p",null,"When creating new model, you can specify default values for fields. These values will be used when creating new records if the field is not specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model } from \'@mongez/monpulse\'\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  public defaultValue: Document = {\n    isActive: false,\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    isActive: "boolean",\n  };\n}\n')),(0,o.kt)("p",null,"We can also use callbacks to set default values for each field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/post.ts"',title:'"src/models/post.ts"'},'import { Model } from \'@mongez/monpulse\'\n\nexport class Post extends Model {\n  /**\n   * Collection name\n   */\n  public static collection = "posts";\n\n  /**\n   * {@inheritDoc}\n   */\n  public defaultValue: Document = {\n    isActive: false,\n    views: () => {\n      return Math.floor(Math.random() * 1000); // random number between 0 and 1000\n    },\n  };\n\n  /**\n   * {@inheritDoc}\n   */\n  protected casts: Casts = {\n    title: "string",\n    content: "string",\n    isActive: "boolean",\n  };\n}\n')))}d.isMDXComponent=!0}}]);