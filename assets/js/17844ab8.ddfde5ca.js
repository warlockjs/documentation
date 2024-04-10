"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},r="Road Map",l={unversionedId:"monpulse/getting-started/roadmap",id:"monpulse/getting-started/roadmap",title:"Road Map",description:"This document will guide you where to start and what to do next.",source:"@site/docs/monpulse/getting-started/roadmap.mdx",sourceDirName:"monpulse/getting-started",slug:"/monpulse/getting-started/roadmap",permalink:"/docs/monpulse/getting-started/roadmap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mongodb",previous:{title:"Introduction",permalink:"/docs/monpulse/getting-started/introduction"},next:{title:"Installation",permalink:"/docs/monpulse/getting-started/installation"}},s={},d=[{value:"Terminology",id:"terminology",level:2},{value:"1. Installation",id:"1-installation",level:2},{value:"2. Connecting To Database &amp; Configuration",id:"2-connecting-to-database--configuration",level:2},{value:"3. Basic CRUD Operations",id:"3-basic-crud-operations",level:2},{value:"4. Understanding Models",id:"4-understanding-models",level:2},{value:"5. Aggregate Framework",id:"5-aggregate-framework",level:2},{value:"7. Advanced Concepts",id:"7-advanced-concepts",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"road-map"},"Road Map"),(0,o.kt)("p",null,"This document will guide you where to start and what to do next."),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"Before we get started with our Road Map, let's talk about some terminology that we will be using throughout the documentation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collection"),": A collection is set of documents in database, in SQL databases it is called ",(0,o.kt)("inlineCode",{parentName:"li"},"table"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"document"),": A document a set of data that combined in one object, you may visualize it like a json object, a document is a single record in the collection, in SQL databases it is called ",(0,o.kt)("inlineCode",{parentName:"li"},"row"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"field"),": A field is a single property of a document, in SQL databases it is called ",(0,o.kt)("inlineCode",{parentName:"li"},"column"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query"),": A query is a request to the database to perform an action, in SQL databases it is called ",(0,o.kt)("inlineCode",{parentName:"li"},"query")," as well."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"model"),": A model is a class that manages a collection's document."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schema"),": A schema is the blueprint of a collection in the database, it defines the fields and their types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aggregate"),": An aggregate is a pipeline of stages that perform a set of operations on the documents in the collection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CRUD"),": CRUD is an acronym for ",(0,o.kt)("inlineCode",{parentName:"li"},"Create"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Read"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Update"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Delete"),", it is a set of operations that can be performed on a document in a collection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pagination"),": Pagination is a technique to split the results of a query into multiple pages, it is used to reduce the amount of data that is returned from the database, this is useful when you have a large amount of data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"explain"),": Explain is a method that returns information about the query execution, it is useful for debugging and optimizing queries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upsert"),": Upsert is a method that updates a document if it exists, otherwise it creates a new document.")),(0,o.kt)("p",null,"Now let's get started."),(0,o.kt)("h2",{id:"1-installation"},"1. Installation"),(0,o.kt)("p",null,"Of course you would need to install the package first. You can do that by following the ",(0,o.kt)("a",{parentName:"p",href:"./installation"},"installation guide"),"."),(0,o.kt)("h2",{id:"2-connecting-to-database--configuration"},"2. Connecting To Database & Configuration"),(0,o.kt)("p",null,"Next, we need to establish our database connection and set the package configurations, you can do that by following the ",(0,o.kt)("a",{parentName:"p",href:"./connecting-to-database"},"connecting to database guide"),"."),(0,o.kt)("h2",{id:"3-basic-crud-operations"},"3. Basic CRUD Operations"),(0,o.kt)("p",null,"Now that we have our database connection established, we can start doing some basic CRUD operations. Let's start with the most basic one, ",(0,o.kt)("a",{parentName:"p",href:"./../queries/introduction"},"creating a record"),"."),(0,o.kt)("h2",{id:"4-understanding-models"},"4. Understanding Models"),(0,o.kt)("p",null,"Let's start with the most important part ",(0,o.kt)("a",{parentName:"p",href:"./../models/introduction"},"models"),"."),(0,o.kt)("h2",{id:"5-aggregate-framework"},"5. Aggregate Framework"),(0,o.kt)("p",null,"Now that we have a basic understanding of models, let's move on to the ",(0,o.kt)("a",{parentName:"p",href:"./../aggregate/introduction"},"aggregate framework"),"."),(0,o.kt)("h2",{id:"7-advanced-concepts"},"7. Advanced Concepts"),(0,o.kt)("p",null,"Dive deeply into the ",(0,o.kt)("a",{parentName:"p",href:"./../advanced/introduction"},"advanced concepts")," of the package."))}u.isMDXComponent=!0}}]);