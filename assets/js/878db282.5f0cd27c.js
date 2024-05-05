"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[5775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),v=a,f=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:"Managing events in Cascade"},i="Introduction",c={unversionedId:"cascade/events/introduction",id:"cascade/events/introduction",title:"Introduction",description:"Managing events in Cascade",source:"@site/docs/cascade/events/introduction.mdx",sourceDirName:"cascade/events",slug:"/cascade/events/introduction",permalink:"/docs/cascade/events/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Managing events in Cascade"},sidebar:"mongodb",previous:{title:"Events",permalink:"/docs/category/events"},next:{title:"Query Events",permalink:"/docs/cascade/events/query-events"}},s={},l=[{value:"Cascade Events",id:"cascade-events",level:2},{value:"Important Note About Events",id:"important-note-about-events",level:2},{value:"Event Name Structure",id:"event-name-structure",level:2},{value:"Event Payload",id:"event-payload",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Events play a crucial role in any application or complex package as they help manage the flow of your application and make your code more readable and maintainable."),(0,a.kt)("h2",{id:"cascade-events"},"Cascade Events"),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"Cascade"),", there are various types of events triggered, including Model Events, Aggregate Events, and Query Events. Each event type has its own set of events associated with it."),(0,a.kt)("p",null,"In the following sections, we will explore each event type in detail."),(0,a.kt)("h2",{id:"important-note-about-events"},"Important Note About Events"),(0,a.kt)("p",null,"It is essential to note that in the Event Driven Architecture concept, you must define an event before triggering it. Therefore, you cannot trigger an event that has not been defined beforehand."),(0,a.kt)("h2",{id:"event-name-structure"},"Event Name Structure"),(0,a.kt)("p",null,"Events are two types: the first one is ",(0,a.kt)("strong",{parentName:"p"},"before")," the operation, the second one is ",(0,a.kt)("strong",{parentName:"p"},"after")," the operation."),(0,a.kt)("p",null,"All event methods start with the prefix on, followed by the event name, and then the action mode, which can be either before or after."),(0,a.kt)("p",null,"Any ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," event is written in ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ing"),", i.e ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreating"),"."),(0,a.kt)("p",null,"Any ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," event is written in ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ed"),", i.e ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreated"),"."),(0,a.kt)("h2",{id:"event-payload"},"Event Payload"),(0,a.kt)("p",null,"Each event receives an object that contains the entire payload. It's important to note that the payload may vary depending on the specific event being triggered."))}u.isMDXComponent=!0}}]);