"use strict";(self.webpackChunkmongez_docs=self.webpackChunkmongez_docs||[]).push([[8062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),u=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return r?s.createElement(h,a(a({ref:t},p),{},{components:r})):s.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},a="Routes",i={unversionedId:"warlock/http/routes",id:"warlock/http/routes",title:"Routes",description:"Routes are the way to map which request is going to be handled with which handler (controller).",source:"@site/docs/warlock/http/routes.mdx",sourceDirName:"warlock/http",slug:"/warlock/http/routes",permalink:"/docs/warlock/http/routes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"warlock",previous:{title:"Introduction",permalink:"/docs/warlock/http/introduction"},next:{title:"Http configurations",permalink:"/docs/warlock/http/configurations"}},l={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Defining a route",id:"defining-a-route",level:2},{value:"Route parameters",id:"route-parameters",level:2},{value:"Adding middleware",id:"adding-middleware",level:2},{value:"Request Methods",id:"request-methods",level:2},{value:"Multiple routes with same handler",id:"multiple-routes-with-same-handler",level:2},{value:"Named Routes",id:"named-routes",level:2},{value:"Grouped Route",id:"grouped-route",level:2},{value:"Prefix routes",id:"prefix-routes",level:2},{value:"List of routes",id:"list-of-routes",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"routes"},"Routes"),(0,n.kt)("p",null,"Routes are the way to map which request is going to be handled with which handler (controller)."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Each module inside ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app")," is a module, for this module to have routes, create a ",(0,n.kt)("inlineCode",{parentName:"p"},"routes.ts")," file inside it and it will be automatically loaded."),(0,n.kt)("h2",{id:"defining-a-route"},"Defining a route"),(0,n.kt)("p",null,"Creating routes is super easy, it has mostly the same signature as the ",(0,n.kt)("inlineCode",{parentName:"p"},"express")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"fastify")," router, but with some extra features."),(0,n.kt)("p",null,"Let's create a simple route file and see how it works."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/routes.ts"',title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\n\nrouter.get("/users", getUsers);\n')),(0,n.kt)("p",null,"We defined a route that will handle ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," requests to ",(0,n.kt)("inlineCode",{parentName:"p"},"/users")," path, and will be handled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"getUsers")," controller."),(0,n.kt)("p",null,"Now let's create the controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/get-users.ts"',title:'"src/app/users/controllers/get-users.ts"'},'import { Request, Response } from "@warlock.js/core";\nimport { User } from "./../models/user";\n\nexport async function getUsers(request: Request, response: Response) {\n  const usersList = await User.list();\n  response.success({\n    users: usersList,\n  });\n}\n')),(0,n.kt)("p",null,"The controller is a simple function that accepts the request and response objects, and returns a response."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"User.list()")," method returns a list of users, and we return it as a response body."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To get better understanding of database models, please check ",(0,n.kt)("a",{parentName:"p",href:"/docs/cascade/models/introduction"},"Cascade Documentation"))),(0,n.kt)("h2",{id:"route-parameters"},"Route parameters"),(0,n.kt)("p",null,"In the previous example we saw how to return list of users, but what if we want to return a specific user?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3,6} title="src/app/users/routes.ts"',"{3,6}":!0,title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\nimport { getUser } from "./controllers/get-user";\n\nrouter.get("/users", getUsers);\nrouter.get("/users/:id", getUser);\n')),(0,n.kt)("p",null,"We added a new route to fetch a single user, let's create the controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/get-user.ts"',title:'"src/app/users/controllers/get-user.ts"'},'import { Request, Response } from "@warlock.js/core";\nimport { User } from "./../models/user";\n\nexport async function getUser(request: Request, response: Response) {\n  const user = await User.find(request.input("id"));\n  response.success({\n    user,\n  });\n}\n')),(0,n.kt)("p",null,"In this example we used the ",(0,n.kt)("inlineCode",{parentName:"p"},"request.input()")," method to get the route parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", and we used it to fetch the user."),(0,n.kt)("h2",{id:"adding-middleware"},"Adding middleware"),(0,n.kt)("p",null,"Sometimes we need to add a middleware to a specific route, for example to check if the user is authenticated or not."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3,6} title="src/app/users/routes.ts"',"{3,6}":!0,title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\nimport { getUser } from "./controllers/get-user";\nimport { auth } from "./../middleware/auth";\n\nrouter.get("/users", getUsers, {\n  middleware: [auth],\n});\nrouter.get("/users/:id", getUser, {\n  middleware: [auth],\n});\n')),(0,n.kt)("p",null,"We added the ",(0,n.kt)("inlineCode",{parentName:"p"},"auth")," middleware to both routes, now let's create the middleware:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/middleware/auth.ts"',title:'"src/app/users/middleware/auth.ts"'},'import { Request, Response } from "@warlock.js/core";\n\nexport async function auth(request: Request, response: Response) {\n  const authorizationHeader = request.header("Authorization");\n\n  if (!authorizationHeader) {\n    return response.unauthorized();\n  }\n}\n')),(0,n.kt)("p",null,"The middleware is a simple function that accepts the request and response objects, and returns a response."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When a middleware returns a response, the route handler will not be executed, and the response will be returned directly.")),(0,n.kt)("h2",{id:"request-methods"},"Request Methods"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"router")," object has the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.get(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"GET")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.post(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"POST")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.put(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"PUT")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.patch(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"PATCH")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.delete(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"DELETE")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.options(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"OPTIONS")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.head(path, handler, options?)"),": Registers a route that handles ",(0,n.kt)("inlineCode",{parentName:"li"},"HEAD")," requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"router.all(path, handler, options?)"),": Registers a route that supports all request methods.")),(0,n.kt)("h2",{id:"multiple-routes-with-same-handler"},"Multiple routes with same handler"),(0,n.kt)("p",null,"Sometimes we need to register multiple routes with the same handler, a good example for this use case is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"uploads")," module where we need to upload files from the website and admin panel and they both have different routes but the same handler."),(0,n.kt)("p",null,"To do this, we can pass an array of paths to the ",(0,n.kt)("inlineCode",{parentName:"p"},"router")," methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3,6} title="src/app/uploads/routes.ts"',"{3,6}":!0,title:'"src/app/uploads/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { upload } from "./controllers/upload";\n\nrouter.post(["/uploads", "/admin/uploads"], upload);\n')),(0,n.kt)("h2",{id:"named-routes"},"Named Routes"),(0,n.kt)("p",null,"Sometimes we need to generate a URL for a specific route, for example to redirect the user to a specific page after login."),(0,n.kt)("p",null,"To do this, we can pass a name to the route options:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3,6} title="src/app/users/routes.ts"',"{3,6}":!0,title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\n\nrouter.get("/users", getUsers, {\n  name: "users.list",\n});\n')),(0,n.kt)("p",null,"By default if the route ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property is not defined, it will be the route path without the leading slash and each slash will be replaced with a dot, for example the route ",(0,n.kt)("inlineCode",{parentName:"p"},"/users/:id")," will have the name ",(0,n.kt)("inlineCode",{parentName:"p"},"users.id"),"."),(0,n.kt)("p",null,"Now we can generate the URL for this route using the ",(0,n.kt)("inlineCode",{parentName:"p"},"route()")," helper function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/get-users.ts"',title:'"src/app/users/controllers/get-users.ts"'},'import { Request, Response, route } from "@warlock.js/core";\n\nexport async function getUsers(request: Request, response: Response) {\n  const usersList = await User.list();\n  response.success({\n    users: usersList,\n    nextPage: route("users.list"),\n  });\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"route()")," function accepts the route name as the first argument, and the route parameters as the second argument."),(0,n.kt)("p",null,"An example for the second parameter is used with a single user route:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/routes.ts"',title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUser } from "./controllers/get-user";\n\nrouter.get("/users/:id", getUser, {\n  name: "users.single",\n});\n')),(0,n.kt)("p",null,"Now we can generate the URL for this route using the ",(0,n.kt)("inlineCode",{parentName:"p"},"route()")," helper function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/controllers/get-user.ts"',title:'"src/app/users/controllers/get-user.ts"'},'import { Request, Response, route } from "@warlock.js/core";\n\nexport async function getUser(request: Request, response: Response) {\n  const user = await User.find(request.input("id"));\n  response.success({\n    user,\n    editPage: route("users.single", { id: user.id }),\n  });\n}\n')),(0,n.kt)("h2",{id:"grouped-route"},"Grouped Route"),(0,n.kt)("p",null,"As our applications grow, we need to make a more control over it, and one of the ways to do this is to group routes."),(0,n.kt)("p",null,"For example, we can group all the routes that needs to be authorized before accessing them:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/routes.ts"',title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\nimport { getUser } from "./controllers/get-user";\nimport { auth } from "./../middleware/auth";\n\nrouter.group(\n  {\n    middleware: [auth],\n  },\n  () => {\n    router.get("/users", getUsers);\n    router.get("/users/:id", getUser);\n  }\n);\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"router.group()")," method accepts the following arguments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),": The options object that will be passed to all routes inside the group."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"callback"),": The callback function that will be executed to register the routes.")),(0,n.kt)("admonition",{title:"Merged Middleware",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please note that if the routes registered inside the group have a middleware, it will be merged with the group middleware, the group middleware will have precedence over the route middleware.")),(0,n.kt)("p",null,"We can also add same prefix for list of groups, i.e we can add ",(0,n.kt)("inlineCode",{parentName:"p"},"/admin")," prefix for all admin routes, we can make it more professional by creating a function called ",(0,n.kt)("inlineCode",{parentName:"p"},"adminRoutes")," that takes the callback function as an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/admin/routes.ts"',title:'"src/app/admin/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { auth } from "./../middleware/auth";\n\nexport function adminRoutes(callback) {\n  router.group(\n    {\n      prefix: "/admin",\n      middleware: [auth],\n    },\n    callback\n  );\n}\n')),(0,n.kt)("p",null,"Now we can use it in our routes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/routes.ts"',title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\nimport { getUser } from "./controllers/get-user";\nimport { adminRoutes } from "./../admin/routes";\n\nadminRoutes(() => {\n  router.get("/users", getUsers);\n  router.get("/users/:id", getUser);\n});\n')),(0,n.kt)("h2",{id:"prefix-routes"},"Prefix routes"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"router.prefix")," method is a syntactic sugar for ",(0,n.kt)("inlineCode",{parentName:"p"},"router.group")," method, it accepts the prefix as the first argument, and the callback function as the second argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/routes.ts"',title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\nimport { getUsers } from "./controllers/get-users";\n\nrouter.prefix("/admin", () => {\n  router.get("/users", getUsers);\n}); // route is: /admin/users\n')),(0,n.kt)("h2",{id:"list-of-routes"},"List of routes"),(0,n.kt)("p",null,"To list all registered routes, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"router.list()")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/users/routes.ts"',title:'"src/app/users/routes.ts"'},'import { router } from "@warlock.js/core";\n\nrouter.list();\n')))}m.isMDXComponent=!0}}]);