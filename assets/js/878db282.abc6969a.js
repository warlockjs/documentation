"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9530],{3890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),i=t(8453);const s={sidebar_position:1,description:"Managing events in Cascade"},r="Introduction",a={id:"cascade/events/introduction",title:"Introduction",description:"Managing events in Cascade",source:"@site/docs/cascade/events/introduction.mdx",sourceDirName:"cascade/events",slug:"/cascade/events/introduction",permalink:"/docs/cascade/events/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Managing events in Cascade"},sidebar:"mongodb",previous:{title:"Events",permalink:"/docs/category/events"},next:{title:"Query Events",permalink:"/docs/cascade/events/query-events"}},c={},d=[{value:"Cascade Events",id:"cascade-events",level:2},{value:"Important Note About Events",id:"important-note-about-events",level:2},{value:"Event Name Structure",id:"event-name-structure",level:2},{value:"Event Payload",id:"event-payload",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Events play a crucial role in any application or complex package as they help manage the flow of your application and make your code more readable and maintainable."}),"\n",(0,o.jsx)(n.h2,{id:"cascade-events",children:"Cascade Events"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.strong,{children:"Cascade"}),", there are various types of events triggered, including Model Events, Aggregate Events, and Query Events. Each event type has its own set of events associated with it."]}),"\n",(0,o.jsx)(n.p,{children:"In the following sections, we will explore each event type in detail."}),"\n",(0,o.jsx)(n.h2,{id:"important-note-about-events",children:"Important Note About Events"}),"\n",(0,o.jsx)(n.p,{children:"It is essential to note that in the Event Driven Architecture concept, you must define an event before triggering it. Therefore, you cannot trigger an event that has not been defined beforehand."}),"\n",(0,o.jsx)(n.h2,{id:"event-name-structure",children:"Event Name Structure"}),"\n",(0,o.jsxs)(n.p,{children:["Events are two types: the first one is ",(0,o.jsx)(n.strong,{children:"before"})," the operation, the second one is ",(0,o.jsx)(n.strong,{children:"after"})," the operation."]}),"\n",(0,o.jsx)(n.p,{children:"All event methods start with the prefix on, followed by the event name, and then the action mode, which can be either before or after."}),"\n",(0,o.jsxs)(n.p,{children:["Any ",(0,o.jsx)(n.code,{children:"before"})," event is written in ",(0,o.jsx)(n.code,{children:"type"})," followed by the ",(0,o.jsx)(n.code,{children:"ing"}),", i.e ",(0,o.jsx)(n.code,{children:"onCreating"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Any ",(0,o.jsx)(n.code,{children:"after"})," event is written in ",(0,o.jsx)(n.code,{children:"type"})," followed by the ",(0,o.jsx)(n.code,{children:"ed"}),", i.e ",(0,o.jsx)(n.code,{children:"onCreated"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"event-payload",children:"Event Payload"}),"\n",(0,o.jsx)(n.p,{children:"Each event receives an object that contains the entire payload. It's important to note that the payload may vary depending on the specific event being triggered."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);