"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[7335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function b(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(b,(0,r.Z)({key:String(t)},e))}},8315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={sidebar_position:3},i="Project Structure",u={unversionedId:"warlock/getting-started/project-structure",id:"warlock/getting-started/project-structure",title:"Project Structure",description:"Once the project is done, you'll find two main directories src and storage with some files, let's see the project tree and go through each file and directory.",source:"@site/docs/warlock/getting-started/project-structure.mdx",sourceDirName:"warlock/getting-started",slug:"/warlock/getting-started/project-structure",permalink:"/docs/warlock/getting-started/project-structure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"warlock",previous:{title:"Installation",permalink:"/docs/warlock/getting-started/installation"},next:{title:"Autoloading",permalink:"/docs/warlock/getting-started/autoloading"}},c={},d=[{value:"App Directory",id:"app-directory",level:2},{value:"App Modules",id:"app-modules",level:3},{value:"Configuration Directory",id:"configuration-directory",level:2},{value:"Main File",id:"main-file",level:2},{value:"App main file",id:"app-main-file",level:2},{value:"Module main file",id:"module-main-file",level:2},{value:"Module localization file",id:"module-localization-file",level:2},{value:"Module routes file",id:"module-routes-file",level:2},{value:"Module Events",id:"module-events",level:2},{value:"Module Controllers",id:"module-controllers",level:2},{value:"Module Models",id:"module-models",level:2},{value:"Module Output",id:"module-output",level:2},{value:"Module Repositories",id:"module-repositories",level:2},{value:"Module Utils",id:"module-utils",level:2},{value:"Module flags",id:"module-flags",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"Once the project is done, you'll find two main directories ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"storage")," with some files, let's see the project tree and go through each file and directory."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Yarn",label:"Simple Structure",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 uploads\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 users\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 auth\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 social\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 profile\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 restful-users.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 events\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 mail\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 models\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 user\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 output\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 repositories\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 validation\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 users-groups\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 models\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 users-group\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 output\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 repositories\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u251c\u2500\u2500 main.ts\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u251c\u2500\u2500 app.ts\n\u2502   \u2502   \u251c\u2500\u2500 auth.ts\n\u2502   \u2502   \u251c\u2500\u2500 cache.ts\n\u2502   \u2502   \u251c\u2500\u2500 cors.ts\n\u2502   \u2502   \u251c\u2500\u2500 database.ts\n\u2502   \u2502   \u251c\u2500\u2500 http.ts\n\u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u251c\u2500\u2500 mail.ts\n\u2502   \u2502   \u251c\u2500\u2500 upload.ts\n\u2502   \u2502   \u251c\u2500\u2500 validation.ts\n\u2502   \u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 storage\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 warlock.config.ts\n"))),(0,a.kt)(l.Z,{value:"NPM",label:"Full Structure",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 admin-home.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 user-home.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 uploads\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 users\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 VerificationMail.tsx\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 auth\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 social\n\u2502   \u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 facebook-login.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 google-login.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 activate-account.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 admin-login.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 create-account.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 forget-password.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 login.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 logout.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 resend-activation-code.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 reset-password.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 verify-forget-password-code.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 profile\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 change-password.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 my-profile.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 update-profile.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 restful-users.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 events\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 attach-user-to-response.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 register-current-user-to-model-authors.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 update-authors.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 update-user-last-activity.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 mail\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 confirmRegistrationMail.tsx\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 sendForgetPasswordEmail.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 models\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 user\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 user.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 setup.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 login\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 login.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 setup.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 output\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 user-output.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 repositories\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 users-repository.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 cast-password.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 locales.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 validation\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 profile-data-rules.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 validate-user-forget-password-code.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 users-groups\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 restful-users-groups.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 models\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 users-group\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 users-group.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 setup.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 output\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 users-group-output.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 repositories\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 users-groups-repository.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 routes.ts\n\u2502   \u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 output.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 router.ts\n\u2502   \u2502   \u251c\u2500\u2500 main.ts\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u251c\u2500\u2500 app.ts\n\u2502   \u2502   \u251c\u2500\u2500 auth.ts\n\u2502   \u2502   \u251c\u2500\u2500 cache.ts\n\u2502   \u2502   \u251c\u2500\u2500 cors.ts\n\u2502   \u2502   \u251c\u2500\u2500 database.ts\n\u2502   \u2502   \u251c\u2500\u2500 http.ts\n\u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u251c\u2500\u2500 mail.ts\n\u2502   \u2502   \u251c\u2500\u2500 upload.ts\n\u2502   \u2502   \u251c\u2500\u2500 validation.ts\n\u2502   \u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 storage\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 warlock.config.ts\n")))),(0,a.kt)("p",null,"Let's highlight the structure of the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src")," directory contains all the source code of the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/app")," directory contains all the application code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/config")," directory contains all the configuration files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/main.ts")," the entry file that runs at the very beginning of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," directory contains all the files, media that needs to be kept secret, including the uploaded files, log files so on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".env")," the environment file that contains all the environment variables."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"warlock.config.ts")," the configuration file for the warlock.")),(0,a.kt)("p",null,"So this is the basic structure for the project."),(0,a.kt)("h2",{id:"app-directory"},"App Directory"),(0,a.kt)("p",null,"The app directory's concept is simple, it contains list of ",(0,a.kt)("strong",{parentName:"p"},"modules"),". Each module has certain structure, let's see the structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," module:"),(0,a.kt)("h3",{id:"app-modules"},"App Modules"),(0,a.kt)("p",null,"A module is a ",(0,a.kt)("inlineCode",{parentName:"p"},"contained")," directory that contains all the code related to a certain feature, for example the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," module contains all the code related to the users, including the controllers, models, routes, events, mail, and so on."),(0,a.kt)("p",null,"Each module should have similar file/folder structure to make the application's code consistent and easy to understand."),(0,a.kt)("p",null,"Any directory inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app")," directory is considered a module, so you can create as many modules as you want."),(0,a.kt)("p",null,"Let's see the very basic structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 users\n\u2502   \u251c\u2500\u2500 controllers\n\u2502   \u251c\u2500\u2500 events\n\u2502   \u251c\u2500\u2500 models\n\u2502   \u251c\u2500\u2500 output\n\u2502   \u251c\u2500\u2500 repositories\n\u2502   \u251c\u2500\u2500 utils\n\u2502   \u251c\u2500\u2500 routes.ts\n")),(0,a.kt)("p",null,"This should be the minimum structure for each module, let's see what each directory contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"controllers")," directory contains all the request controllers/handlers for the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"events")," directory contains all the events that will be triggered by the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"models")," directory contains all the models for the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"output")," directory contains all the output classes for the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repositories")," directory contains all the repositories for the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"utils")," directory contains all the utilities for the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"routes.ts")," the routes file for the module.")),(0,a.kt)("h2",{id:"configuration-directory"},"Configuration Directory"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/index.ts")," file is the very first file that is being imported from the application code, it should contain only all necessary code for configurations."),(0,a.kt)("h2",{id:"main-file"},"Main File"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.ts")," is called after bootstraping the application, you can use it to run any code that you want to use before running the application."),(0,a.kt)("h2",{id:"app-main-file"},"App main file"),(0,a.kt)("p",null,"When the http server and database connection is warming up (But not yet connected) the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/main.ts")," file is called."),(0,a.kt)("h2",{id:"module-main-file"},"Module main file"),(0,a.kt)("p",null,"This is the main file that will be called in each module, if the file exists, it will be called after calling ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/main.ts")," file."),(0,a.kt)("h2",{id:"module-localization-file"},"Module localization file"),(0,a.kt)("p",null,"If the application is an international application, then each module should have a localization file, the file should be located inside ",(0,a.kt)("inlineCode",{parentName:"p"},"module/utils/locales.ts")),(0,a.kt)("h2",{id:"module-routes-file"},"Module routes file"),(0,a.kt)("p",null,"The file is responsible for defining the module routes either grouped by middleware, or using restful resources or just basic routes."),(0,a.kt)("h2",{id:"module-events"},"Module Events"),(0,a.kt)("p",null,"The events directory mainly handles all events that needed to be called when certain events are triggered, it's very essential concept you should use in any successful and scalable application."),(0,a.kt)("h2",{id:"module-controllers"},"Module Controllers"),(0,a.kt)("p",null,"The controllers directory contains all the controllers for the module, it's very important to keep the controllers as simple as possible, and to keep the business logic away from the controllers, using functions as request handlers/controllers is a good practice most of the time, however, mixing it with classes is also a good practice depending on the use case."),(0,a.kt)("h2",{id:"module-models"},"Module Models"),(0,a.kt)("p",null,"Here we keep our models for the module, each model should be in a separate directory, and each model should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.ts")," file that contains the model migrations, and ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file that exports the model."),(0,a.kt)("h2",{id:"module-output"},"Module Output"),(0,a.kt)("p",null,"Outputs are classes that are mainly linked with ",(0,a.kt)("inlineCode",{parentName:"p"},"Models")," to decide which data should be return in the response when the model is returned."),(0,a.kt)("h2",{id:"module-repositories"},"Module Repositories"),(0,a.kt)("p",null,"A repository is an additional layer over the model to perform certain database operations and other stuff, also it can perform some good data caching as well and filtering."),(0,a.kt)("h2",{id:"module-utils"},"Module Utils"),(0,a.kt)("p",null,"Any helper functions, classes should be listed here, for example, if you have a function that is used to generate a random string, you can put it here."),(0,a.kt)("h2",{id:"module-flags"},"Module flags"),(0,a.kt)("p",null,"Another good practice is to have the static data in a ",(0,a.kt)("inlineCode",{parentName:"p"},"utils/flags.ts")," file, this file should contain all the static data that is used in the module, for example, if you're in the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," module, you can have a ",(0,a.kt)("inlineCode",{parentName:"p"},"utils/flags.ts")," file that contains all the user roles, and other static data such as ",(0,a.kt)("inlineCode",{parentName:"p"},"user, admin, moderator")," and so on."))}h.isMDXComponent=!0}}]);