"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6362],{3229:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=s(4848),d=s(8453);const o={sidebar_position:3,title:"Model Events"},l=void 0,i={id:"cascade/events/model-events",title:"Model Events",description:"Introduction",source:"@site/docs/cascade/events/model-events.mdx",sourceDirName:"cascade/events",slug:"/cascade/events/model-events",permalink:"/docs/cascade/events/model-events",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Model Events"},sidebar:"mongodb",previous:{title:"Query Events",permalink:"/docs/cascade/events/query-events"},next:{title:"Aggregate Events",permalink:"/docs/cascade/events/aggregate-events"}},r={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Accessing Model Events",id:"accessing-model-events",level:2},{value:"Types of Events",id:"types-of-events",level:2},{value:"Scopes of Events",id:"scopes-of-events",level:2},{value:"Self Events",id:"self-events",level:2},{value:"Model Events",id:"model-events",level:2},{value:"Global Events",id:"global-events",level:2},{value:"The Events Manager",id:"the-events-manager",level:2},{value:"Event Payload",id:"event-payload",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Model events are crucial in any application or complex package as they help manage the flow of your application and make your code more readable and maintainable."}),"\n",(0,t.jsx)(n.h2,{id:"accessing-model-events",children:"Accessing Model Events"}),"\n",(0,t.jsxs)(n.p,{children:["To access the Model events manager, call the ",(0,t.jsx)(n.code,{children:"events()"})," method on the Model class ",(0,t.jsx)(n.code,{children:"(not the instance)"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nUser.events().onSaving((user) => {\r\n  // do something\r\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"types-of-events",children:"Types of Events"}),"\n",(0,t.jsxs)(n.p,{children:["There are ",(0,t.jsx)(n.strong,{children:"8"})," types of events that could be triggered for a model:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCreating(model: Model)"}),": Called before creating a new document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCreated(model: Model)"}),": Called after creating a new document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onUpdating(model: Model, oldModel: Model)"}),": Called before updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onUpdated(model: Model, oldModel: Model)"}),": Called after updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSaving(model: Model, oldModel?: Model)"}),": Called before saving a document, this event is triggered before creating or updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSaved(model: Model, oldModel?: Model)"}),": Called after saving a document, this event is triggered after creating or updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDeleting(model: Model)"}),": Called before deleting a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDeleted(model: Model)"}),": Called after deleting a document."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These ",(0,t.jsx)(n.strong,{children:"8"})," events are triggered in three scopes."]}),"\n",(0,t.jsx)(n.p,{children:"All scopes has the same method name."}),"\n",(0,t.jsx)(n.h2,{id:"scopes-of-events",children:"Scopes of Events"}),"\n",(0,t.jsxs)(n.p,{children:["There are three scopes of events in Cascade ",(0,t.jsx)(n.strong,{children:"(Ordered by the order of triggering)"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Self Events"}),": These events are callbacks that being called inside the model itself."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Model Events"}),": These events are triggered for a specific model."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Global Events"}),": These events are triggered for all models."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"self-events",children:"Self Events"}),"\n",(0,t.jsxs)(n.p,{children:["The self events are ",(0,t.jsx)(n.code,{children:"methods"})," inside the model itself that can be called, in real world apps, they are not that much of usage, but they could be handy in some situations."]}),"\n",(0,t.jsx)(n.p,{children:"Here are the available self events:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCreating"}),": Called before creating a new document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCreated"}),": Called after creating a new document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onUpdating"}),": Called before updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onUpdated"}),": Called after updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSaving"}),": Called before saving a document, this event is triggered before creating or updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSaved"}),": Called after saving a document, this event is triggered after creating or updating a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDeleting"}),": Called before deleting a document."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDeleted"}),": Called after deleting a document."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These events are the first events triggered before the other scopes."}),"\n",(0,t.jsx)(n.p,{children:"An example of usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/models/user.ts"',children:'import { Model } from "@warlock.js/cascade";\r\n\r\nexport class User extends Model {\r\n  // ...\r\n\r\n  /**\r\n   * {@inheritdoc}\r\n   */\r\n  protected onCreating() {\r\n    // do something\r\n  }\r\n\r\n  /**\r\n   * {@inheritdoc}\r\n   */\r\n  protected onCreated() {\r\n    // do something\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please note that all of these methods should be ",(0,t.jsx)(n.code,{children:"protected"})," methods."]})}),"\n",(0,t.jsx)(n.h2,{id:"model-events",children:"Model Events"}),"\n",(0,t.jsx)(n.p,{children:"Model events are triggered whenever a model is triggering the event, their order of the trigger are the second ones to be triggered."}),"\n",(0,t.jsx)(n.p,{children:"This second type is mainly the most used one, as it is the most common one to be used in real world apps."}),"\n",(0,t.jsx)(n.p,{children:"An example of usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { User } from "./models/user";\r\n\r\nUser.events()\r\n  .onCreating((user) => {\r\n    // do something\r\n  })\r\n  .onCreated((user) => {\r\n    // do something\r\n  });\n'})}),"\n",(0,t.jsx)(n.p,{children:"All events methods are chainable, so you can chain as many events as you want."}),"\n",(0,t.jsx)(n.h2,{id:"global-events",children:"Global Events"}),"\n",(0,t.jsx)(n.p,{children:"Global events are triggered whenever a model is triggering the event, their order of the trigger are the last ones to be triggered."}),"\n",(0,t.jsx)(n.p,{children:"This also could be a good one as well for real world apps."}),"\n",(0,t.jsx)(n.p,{children:"An example of usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/app.ts"',children:'import { Model } from "@warlock.js/cascade";\r\n\r\nModel.events()\r\n  .onCreating((model) => {\r\n    // do something\r\n  })\r\n  .onCreated((model) => {\r\n    // do something\r\n  });\n'})}),"\n",(0,t.jsx)(n.p,{children:"All events methods are chainable, so you can chain as many events as you want."}),"\n",(0,t.jsx)(n.h2,{id:"the-events-manager",children:"The Events Manager"}),"\n",(0,t.jsxs)(n.p,{children:["The second and third scopes have a ",(0,t.jsx)(n.code,{children:"EventManager"}),", each ",(0,t.jsx)(n.code,{children:"Model"})," or even the ",(0,t.jsx)(n.code,{children:"Model"})," class itself has its own ",(0,t.jsx)(n.code,{children:"EventManager"})," and they are all singletons, so you can call them multiple times with no worries."]}),"\n",(0,t.jsx)(n.h2,{id:"event-payload",children:"Event Payload"}),"\n",(0,t.jsx)(n.p,{children:"Let's take a quick look about what data are passed into the event callback."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCreating"}),": this event receives the model instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCreated"}),": this event receives the model instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onUpdating"}),": this event receives the model instance and a clone of model instance with ",(0,t.jsx)(n.code,{children:"old data"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onUpdated"}),": this event receives the model instance and a clone of model instance with ",(0,t.jsx)(n.code,{children:"old data"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSaving"}),": this event receives the model instance and, optionally, a clone of model instance with ",(0,t.jsx)(n.code,{children:"old data"}),", if the second parameter is passed, it means that the model is being updated, otherwise it is being created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSaved"}),": this event receives the model instance and, optionally, a clone of model instance with ",(0,t.jsx)(n.code,{children:"old data"}),", if the second parameter is passed, it means that the model is being updated, otherwise it is being created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDeleting"}),": this event receives the model instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDeleted"}),": this event receives the model instance."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(6540);const d={},o=t.createContext(d);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);