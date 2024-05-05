"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[2699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:2},r="Road Map",l={unversionedId:"cascade/getting-started/roadmap",id:"cascade/getting-started/roadmap",title:"Road Map",description:"This document will guide you where to start and what to do next.",source:"@site/docs/cascade/getting-started/roadmap.mdx",sourceDirName:"cascade/getting-started",slug:"/cascade/getting-started/roadmap",permalink:"/docs/cascade/getting-started/roadmap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mongodb",previous:{title:"Introduction",permalink:"/docs/cascade/getting-started/introduction"},next:{title:"Installation",permalink:"/docs/cascade/getting-started/installation"}},s={},d=[{value:"Terminology",id:"terminology",level:2},{value:"1. Installation",id:"1-installation",level:2},{value:"2. Connecting To Database &amp; Configuration",id:"2-connecting-to-database--configuration",level:2},{value:"3. Basic CRUD Operations",id:"3-basic-crud-operations",level:2},{value:"4. Understanding Models",id:"4-understanding-models",level:2},{value:"5. Aggregate Framework",id:"5-aggregate-framework",level:2},{value:"7. Advanced Concepts",id:"7-advanced-concepts",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"road-map"},"Road Map"),(0,i.kt)("p",null,"This document will guide you where to start and what to do next."),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"Before we get started with our Road Map, let's talk about some terminology that we will be using throughout the documentation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"),": A collection is set of documents in database, in SQL databases it is called ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document"),": A document a set of data that combined in one object, you may visualize it like a json object, a document is a single record in the collection, in SQL databases it is called ",(0,i.kt)("inlineCode",{parentName:"li"},"row"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"field"),": A field is a single property of a document, in SQL databases it is called ",(0,i.kt)("inlineCode",{parentName:"li"},"column"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": A query is a request to the database to perform an action, in SQL databases it is called ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," as well."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"model"),": A model is a class that manages a collection's document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema"),": A schema is the blueprint of a collection in the database, it defines the fields and their types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aggregate"),": An aggregate is a pipeline of stages that perform a set of operations on the documents in the collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CRUD"),": CRUD is an acronym for ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Read"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Update"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete"),", it is a set of operations that can be performed on a document in a collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pagination"),": Pagination is a technique to split the results of a query into multiple pages, it is used to reduce the amount of data that is returned from the database, this is useful when you have a large amount of data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"explain"),": Explain is a method that returns information about the query execution, it is useful for debugging and optimizing queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upsert"),": Upsert is a method that updates a document if it exists, otherwise it creates a new document.")),(0,i.kt)("p",null,"Now let's get started."),(0,i.kt)("h2",{id:"1-installation"},"1. Installation"),(0,i.kt)("p",null,"Of course you would need to install the package first. You can do that by following the ",(0,i.kt)("a",{parentName:"p",href:"./installation"},"installation guide"),"."),(0,i.kt)("h2",{id:"2-connecting-to-database--configuration"},"2. Connecting To Database & Configuration"),(0,i.kt)("p",null,"Next, we need to establish our database connection and set the package configurations, you can do that by following the ",(0,i.kt)("a",{parentName:"p",href:"./connecting-to-database"},"connecting to database guide"),"."),(0,i.kt)("h2",{id:"3-basic-crud-operations"},"3. Basic CRUD Operations"),(0,i.kt)("p",null,"Now that we have our database connection established, we can start doing some basic CRUD operations. Let's start with the most basic one, ",(0,i.kt)("a",{parentName:"p",href:"./../queries/introduction"},"creating a record"),"."),(0,i.kt)("h2",{id:"4-understanding-models"},"4. Understanding Models"),(0,i.kt)("p",null,"Let's start with the most important part ",(0,i.kt)("a",{parentName:"p",href:"./../models/introduction"},"models"),"."),(0,i.kt)("h2",{id:"5-aggregate-framework"},"5. Aggregate Framework"),(0,i.kt)("p",null,"Now that we have a basic understanding of models, let's move on to the ",(0,i.kt)("a",{parentName:"p",href:"./../aggregate/introduction"},"aggregate framework"),"."),(0,i.kt)("h2",{id:"7-advanced-concepts"},"7. Advanced Concepts"),(0,i.kt)("p",null,"Dive deeply into the ",(0,i.kt)("a",{parentName:"p",href:"./../advanced/introduction"},"advanced concepts")," of the package."))}u.isMDXComponent=!0}}]);