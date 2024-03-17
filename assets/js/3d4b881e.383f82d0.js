"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[9264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},a="Selecting Columns / Projecting",c={unversionedId:"monpulse/aggregate/selecting-columns",id:"monpulse/aggregate/selecting-columns",title:"Selecting Columns / Projecting",description:"To select/deselect fields, you can use one of three methods: select, deselect and project.",source:"@site/docs/monpulse/aggregate/selecting-columns.mdx",sourceDirName:"monpulse/aggregate",slug:"/monpulse/aggregate/selecting-columns",permalink:"/mongez/docs/monpulse/aggregate/selecting-columns",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mongodb",previous:{title:"Aggregate Class",permalink:"/mongez/docs/monpulse/aggregate/aggregate-manager"},next:{title:"Filtering",permalink:"/mongez/docs/monpulse/aggregate/filtering"}},s={},i=[{value:"select method",id:"select-method",level:2},{value:"deselect method",id:"deselect-method",level:2},{value:"project method",id:"project-method",level:2}],u={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selecting-columns--projecting"},"Selecting Columns / Projecting"),(0,r.kt)("p",null,"To select/deselect fields, you can use one of three methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"select"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deselect")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Any column in MongoDB accepts dot notation selection by default, so feel free to use it.")),(0,r.kt)("h2",{id:"select-method"},"select method"),(0,r.kt)("p",null,"Let's start with ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," method, this method is the most comprehensive and easiest one to use to select or unselect columns."),(0,r.kt)("p",null,"Method signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Select the given columns\n   */\n  public select(columns: string[] | Record<string, 0 | 1 | boolean>): Aggregate;\n")),(0,r.kt)("p",null,"The method accepts one of two types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"array"),": an array of strings, each string is a column name that you want to select."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),": If you want more control to what to select and what not to select use the object instead, this object should have the column name as a key, and the value should be one of the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),": to exclude the column from the result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),": to include the column in the result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true"),": to include the column in the result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false"),": to exclude the column from the result.")))),(0,r.kt)("h2",{id:"deselect-method"},"deselect method"),(0,r.kt)("p",null,"Deselect method accepts an array of columns ",(0,r.kt)("inlineCode",{parentName:"p"},"strings")," that you want to exclude from the result."),(0,r.kt)("p",null,"Method signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Deselect the given columns\n   */\n  public deselect(columns: string[]): Aggregate;\n")),(0,r.kt)("h2",{id:"project-method"},"project method"),(0,r.kt)("p",null,"This is the native MongoDB method, it accepts an object that has the column name as a key, and the value could be any acceptable value in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/project/"},"MongoDB Project Stage"),"."),(0,r.kt)("p",null,"Method signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Project the given columns\n   */\n  public project(columns: Record<string, any>): Aggregate;\n")))}m.isMDXComponent=!0}}]);