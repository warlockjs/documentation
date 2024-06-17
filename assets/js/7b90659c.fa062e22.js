"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4540],{4775:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(4848),t=r(8453);const o={sidebar_position:5},a="Response",i={id:"warlock/http/response",title:"Response",description:"In Http Request Life Cycle, the last step is sending the response back to the client.",source:"@site/docs/warlock/http/response.mdx",sourceDirName:"warlock/http",slug:"/warlock/http/response",permalink:"/docs/warlock/http/response",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"warlock",previous:{title:"Middleware",permalink:"/docs/warlock/http/middleware"},next:{title:"Request Context",permalink:"/docs/warlock/http/request-context"}},d={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Sending response",id:"sending-response",level:2},{value:"Sending custom objects to response",id:"sending-custom-objects-to-response",level:2},{value:"Success Created",id:"success-created",level:2},{value:"Not found",id:"not-found",level:2},{value:"Unauthorized response",id:"unauthorized-response",level:2},{value:"Forbidden response",id:"forbidden-response",level:2},{value:"Bad request response",id:"bad-request-response",level:2},{value:"Server error response",id:"server-error-response",level:2},{value:"Send File",id:"send-file",level:2},{value:"Send xml response",id:"send-xml-response",level:2},{value:"Send text response",id:"send-text-response",level:2},{value:"Send html response",id:"send-html-response",level:2},{value:"Redirect",id:"redirect",level:2},{value:"Set Header",id:"set-header",level:2},{value:"Set multiple headers",id:"set-multiple-headers",level:2},{value:"Remove header",id:"remove-header",level:2},{value:"Get response headers",id:"get-response-headers",level:2},{value:"Get response header",id:"get-response-header",level:2},{value:"Set status code",id:"set-status-code",level:2},{value:"Set Content Type",id:"set-content-type",level:2},{value:"Stream file",id:"stream-file",level:2},{value:"Get response body",id:"get-response-body",level:2},{value:"Get response status code",id:"get-response-status-code",level:2},{value:"Response Events",id:"response-events",level:2},{value:"Listen to response events",id:"listen-to-response-events",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"response",children:"Response"}),"\n",(0,n.jsx)(s.p,{children:"In Http Request Life Cycle, the last step is sending the response back to the client."}),"\n",(0,n.jsx)(s.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsx)(s.p,{children:"There are multiple types of responses, but mainly the heavy type will be The JSON response."}),"\n",(0,n.jsx)(s.h1,{id:"response-is-json-by-default",children:"Response is json by default"}),"\n",(0,n.jsxs)(s.p,{children:["By default any of response object methods is used to handle the response body for json responses with different status code, for example ",(0,n.jsx)(s.code,{children:"response.success(object)"})," returns a success response with status code ",(0,n.jsx)(s.code,{children:"200"})," and the object as the response body."]}),"\n",(0,n.jsx)(s.h2,{id:"sending-response",children:"Sending response"}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.code,{children:"Warlock response"})," object is attached to every request handler/controller and middleware as well."]}),"\n",(0,n.jsxs)(s.p,{children:["To send a success json response, use ",(0,n.jsx)(s.code,{children:"response.success(data)"})," which will return a ",(0,n.jsx)(s.code,{children:"200"})," status code."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/get-users.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\nimport { User } from "./../models/user";\r\n\r\nexport default async function getUsers(request: Request, response: Response) {\r\n  const users = await User.list();\r\n\r\n  return response.success({\r\n    users,\r\n  });\r\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"This will return all users in the database."}),"\n",(0,n.jsx)(s.h2,{id:"sending-custom-objects-to-response",children:"Sending custom objects to response"}),"\n",(0,n.jsx)(s.p,{children:"A good example of this case when we send list of users models or even a single model."}),"\n",(0,n.jsx)(s.p,{children:"As a model is basically an open object, we can't send it directly to the response, we need to convert it to a plain object first."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Warlock response"})," will parse every data returned in the response, if the value is a plain then it will be sent as-is, if it is an array it will be looped and parsed each value."]}),"\n",(0,n.jsx)(s.p,{children:"Now what about models or any custom classes?"}),"\n",(0,n.jsx)(s.p,{children:"Let's make a custom class to see how this works"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/get-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nclass UserData {\r\n  public name: string;\r\n  public email: string;\r\n  public age: number;\r\n\r\n  public setAge(age: number) {\r\n    this.age = age;\r\n  }\r\n\r\n  public getAge() {\r\n    return this.age;\r\n  }\r\n\r\n  public setName(name: string) {\r\n    this.name = name;\r\n  }\r\n}\r\n\r\nexport default function getUser(request: Request, response: Response) {\r\n  const user = new UserData();\r\n\r\n  user.setName("John Doe");\r\n  user.setAge(30);\r\n\r\n  return response.success({\r\n    user,\r\n  });\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["In this scenario the ",(0,n.jsx)(s.code,{children:"UserData"})," class will not be parsed as the response parser does not know what will be sent to the final response body."]}),"\n",(0,n.jsxs)(s.p,{children:["To determine which data will be sent, add ",(0,n.jsx)(s.code,{children:"toJSON()"})," method to the class."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'{20} title="src/app/users/controllers/get-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nclass UserData {\r\n  public name: string;\r\n  public email: string;\r\n  public age: number;\r\n\r\n  public setAge(age: number) {\r\n    this.age = age;\r\n  }\r\n\r\n  public getAge() {\r\n    return this.age;\r\n  }\r\n\r\n  public setName(name: string) {\r\n    this.name = name;\r\n  }\r\n\r\n  public toJSON() {\r\n    return {\r\n      name: this.name,\r\n      age: this.age,\r\n    };\r\n  }\r\n}\r\n\r\nexport default function getUser(request: Request, response: Response) {\r\n  const user = new UserData();\r\n\r\n  user.setName("John Doe");\r\n  user.setAge(30);\r\n\r\n  return response.success({\r\n    user,\r\n  });\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"success-created",children:"Success Created"}),"\n",(0,n.jsxs)(s.p,{children:["To return a ",(0,n.jsx)(s.code,{children:"201"})," status code, use ",(0,n.jsx)(s.code,{children:"response.successCreate(data)"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/create-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\nimport { User } from "./../models/user";\r\n\r\nexport default async function createUser(request: Request, response: Response) {\r\n  const user = await User.create(request.all());\r\n\r\n  return response.successCreate({\r\n    user,\r\n  });\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["In terms of REST standards, its better to send a ",(0,n.jsx)(s.code,{children:"201"})," status code when creating a new resource."]}),"\n",(0,n.jsx)(s.h2,{id:"not-found",children:"Not found"}),"\n",(0,n.jsxs)(s.p,{children:["To return a ",(0,n.jsx)(s.code,{children:"404"})," status code, use ",(0,n.jsx)(s.code,{children:"response.notFound()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/get-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\nimport { User } from "./../models/user";\r\n\r\nexport default async function getUser(request: Request, response: Response) {\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.success({\r\n    user,\r\n  });\r\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"You can also send data with the response:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/get-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\nimport { User } from "./../models/user";\r\n\r\nexport default async function getUser(request: Request, response: Response) {\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.notFound({\r\n      message: "User not found",\r\n    });\r\n  }\r\n\r\n  return response.success({\r\n    user,\r\n  });\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"unauthorized-response",children:"Unauthorized response"}),"\n",(0,n.jsxs)(s.p,{children:["To return a ",(0,n.jsx)(s.code,{children:"401"})," status code, use ",(0,n.jsx)(s.code,{children:"response.unauthorized()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/middleware/auth.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport async function auth(request: Request, response: Response) {\r\n  const authorizationHeader = request.header("Authorization");\r\n\r\n  if (!authorizationHeader) {\r\n    return response.unauthorized();\r\n  }\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"forbidden-response",children:"Forbidden response"}),"\n",(0,n.jsx)(s.p,{children:"Forbidden response is used when the user is authenticated but not authorized to access the requested resource."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"response.forbidden()"})," method returns a ",(0,n.jsx)(s.code,{children:"403"})," status code."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/middleware/auth.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport async function auth(request: Request, response: Response) {\r\n  const authorizationHeader = request.header("Authorization");\r\n\r\n  if (!authorizationHeader) {\r\n    return response.unauthorized();\r\n  }\r\n\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.forbidden();\r\n  }\r\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"You may of course send data with the response:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/middleware/auth.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport async function auth(request: Request, response: Response) {\r\n  const authorizationHeader = request.header("Authorization");\r\n\r\n  if (!authorizationHeader) {\r\n    return response.unauthorized();\r\n  }\r\n\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.forbidden({\r\n      message: "You are not authorized to access this resource",\r\n    });\r\n  }\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"bad-request-response",children:"Bad request response"}),"\n",(0,n.jsxs)(s.p,{children:["To return a ",(0,n.jsx)(s.code,{children:"400"})," status code, use ",(0,n.jsx)(s.code,{children:"response.badRequest()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/create-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\nimport { User } from "./../models/user";\r\n\r\nexport default async function createUser(request: Request, response: Response) {\r\n  const name = request.input("name");\r\n\r\n  if (!name) {\r\n    return response.badRequest({\r\n      error: "Name is required",\r\n    });\r\n  }\r\n\r\n  const email = request.input("email");\r\n\r\n  if (!email) {\r\n    return response.badRequest({\r\n      error: "Email is required",\r\n    });\r\n  }\r\n\r\n  const user = await User.create(request.all());\r\n\r\n  return response.successCreate({\r\n    user,\r\n  });\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"server-error-response",children:"Server error response"}),"\n",(0,n.jsxs)(s.p,{children:["To return a ",(0,n.jsx)(s.code,{children:"500"})," status code, use ",(0,n.jsx)(s.code,{children:"response.serverError()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/create-user.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function createUser(request: Request, response: Response) {\r\n  try {\r\n    const database = await connectToDatabase();\r\n    //...\r\n  } catch (error) {\r\n    return response.serverError({\r\n      error: error.message,\r\n    });\r\n  }\r\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Usually you won't need this method, but it's good to know that it exists."}),"\n",(0,n.jsx)(s.h2,{id:"send-file",children:"Send File"}),"\n",(0,n.jsxs)(s.p,{children:["To send a file, use ",(0,n.jsx)(s.code,{children:"response.sendFile()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.sendFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"You may set a cache time in seconds as a second parameter:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.sendFile(avatar.path, 3600); // 1 hour\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["An alias method ",(0,n.jsx)(s.code,{children:"sendCachedFile"})," works exactly the same but sets the cache time to 1 year."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.sendCachedFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"send-xml-response",children:"Send xml response"}),"\n",(0,n.jsxs)(s.p,{children:["To send a xml response, use ",(0,n.jsx)(s.code,{children:"response.xml()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/general/controllers/sitemap.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\nimport sitemap from "./../sitemap";\r\n\r\nexport default async function sitemap(request: Request, response: Response) {\r\n  return response.xml(sitemap);\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["This will send a response with Content Type ",(0,n.jsx)(s.code,{children:"application/xml"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"send-text-response",children:"Send text response"}),"\n",(0,n.jsxs)(s.p,{children:["To send a text response, use ",(0,n.jsx)(s.code,{children:"response.text()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/general/controllers/robots.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function robots(request: Request, response: Response) {\r\n  return response.text("User-agent: *\\nDisallow: /");\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["This will send a response with Content Type ",(0,n.jsx)(s.code,{children:"text/plain"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"send-html-response",children:"Send html response"}),"\n",(0,n.jsxs)(s.p,{children:["To send a html response, use ",(0,n.jsx)(s.code,{children:"response.html()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/general/controllers/home.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function home(request: Request, response: Response) {\r\n  return response.html("<h1>Hello World</h1>");\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["This will send a response with Content Type ",(0,n.jsx)(s.code,{children:"text/html"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"redirect",children:"Redirect"}),"\n",(0,n.jsxs)(s.p,{children:["To redirect the user to another page, use ",(0,n.jsx)(s.code,{children:"response.redirect()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/login.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function login(request: Request, response: Response) {\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.redirect("/users");\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["By default this will make a ",(0,n.jsx)(s.code,{children:"temporary redirect"})," with ",(0,n.jsx)(s.code,{children:"302"})," status code, you can change this by passing the status code as the second parameter:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/login.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function login(request: Request, response: Response) {\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.redirect("/users", 301);\r\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["To send a ",(0,n.jsx)(s.code,{children:"permanent redirect"})," with ",(0,n.jsx)(s.code,{children:"301"})," status code, use ",(0,n.jsx)(s.code,{children:"response.permanentRedirect()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/login.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function login(request: Request, response: Response) {\r\n  const user = await User.find(request.input("id"));\r\n\r\n  if (!user) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.permanentRedirect("/users");\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"set-header",children:"Set Header"}),"\n",(0,n.jsxs)(s.p,{children:["To set a header, use ",(0,n.jsx)(s.code,{children:"response.header()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  response.header(\r\n    "Content-Disposition",\r\n    `attachment; filename="${avatar.name}"`\r\n  );\r\n\r\n  return response.sendFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"set-multiple-headers",children:"Set multiple headers"}),"\n",(0,n.jsxs)(s.p,{children:["To set multiple headers, use ",(0,n.jsx)(s.code,{children:"response.headers()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  response.headers({\r\n    "Content-Disposition": `attachment; filename="${avatar.name}"`,\r\n    "Content-Type": avatar.mimeType,\r\n  });\r\n\r\n  return response.sendFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,n.jsxs)(s.p,{children:["To remove a header, use ",(0,n.jsx)(s.code,{children:"response.removeHeader()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  response.removeHeader("Content-Type");\r\n\r\n  return response.sendFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"get-response-headers",children:"Get response headers"}),"\n",(0,n.jsxs)(s.p,{children:["To get all response headers, use ",(0,n.jsx)(s.code,{children:"response.getHeaders()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:"// ...\r\nconst headers = response.getHeaders();\n"})}),"\n",(0,n.jsx)(s.p,{children:"This will return an object with all headers."}),"\n",(0,n.jsx)(s.h2,{id:"get-response-header",children:"Get response header"}),"\n",(0,n.jsxs)(s.p,{children:["To get a specific response header, use ",(0,n.jsx)(s.code,{children:"response.header()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'// ...\r\nconst contentType = response.header("Content-Type");\n'})}),"\n",(0,n.jsx)(s.h2,{id:"set-status-code",children:"Set status code"}),"\n",(0,n.jsxs)(s.p,{children:["To set a status code, use ",(0,n.jsx)(s.code,{children:"response.setStatusCode()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  response.setStatusCode(200);\r\n\r\n  return response.sendFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"set-content-type",children:"Set Content Type"}),"\n",(0,n.jsx)(s.p,{children:"You don't really need to do it manually, but if you want to, you can."}),"\n",(0,n.jsxs)(s.p,{children:["To set a Content Type, use ",(0,n.jsx)(s.code,{children:"response.setContentType()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  response.setContentType(avatar.mimeType);\r\n\r\n  return response.sendFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"stream-file",children:"Stream file"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes we want to send large files, in that case we need to stream the file."}),"\n",(0,n.jsxs)(s.p,{children:["To stream a file, use ",(0,n.jsx)(s.code,{children:"response.streamFile()"})," method."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/download-avatar.ts"',children:'import { Request, Response } from "@warlock.js/core";\r\n\r\nexport default async function downloadAvatar(\r\n  request: Request,\r\n  response: Response\r\n) {\r\n  const avatar = await Avatar.find(request.input("id"));\r\n\r\n  if (!avatar) {\r\n    return response.notFound();\r\n  }\r\n\r\n  return response.streamFile(avatar.path);\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"get-response-body",children:"Get response body"}),"\n",(0,n.jsxs)(s.p,{children:["Getting response body, status code, headers and content type are likely will be needed when working with ",(0,n.jsx)(s.a,{href:"#response-events",children:"Response Events"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["To get the response body, use ",(0,n.jsx)(s.code,{children:"response.body"})," property."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/get-users.ts"',children:"// ...\r\nconst body = response.body;\n"})}),"\n",(0,n.jsx)(s.p,{children:"The response body will return the final output of the body."}),"\n",(0,n.jsx)(s.h2,{id:"get-response-status-code",children:"Get response status code"}),"\n",(0,n.jsxs)(s.p,{children:["To get the current status code, use ",(0,n.jsx)(s.code,{children:"response.statusCode"})," property."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/app/users/controllers/get-users.ts"',children:"// ...\r\nconst statusCode = response.statusCode;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"response-events",children:"Response Events"}),"\n",(0,n.jsx)(s.p,{children:"Now let's talk about response events, which is one of the most important features in Warlock."}),"\n",(0,n.jsx)(s.p,{children:"Why would i need to listen to response events?"}),"\n",(0,n.jsx)(s.p,{children:"Well, for many reasons, for example:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Modify the response before sending it."}),"\n",(0,n.jsx)(s.li,{children:"Add more data to each response dynamically, for example sending current user data in each response."}),"\n",(0,n.jsx)(s.li,{children:"After sending response, perform some logging or any other action."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"listen-to-response-events",children:"Listen to response events"}),"\n",(0,n.jsxs)(s.p,{children:["In any ",(0,n.jsx)(s.code,{children:"src/general/events"})," directory, create ",(0,n.jsx)(s.code,{children:"send-app-version-to-response.ts"})," file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/general/events/send-app-version-to-response.ts"',children:'import { Response } from "@warlock.js/core";\r\n\r\nResponse.on("sending", (response) => {\r\n  response.body.appVersion = "1.0.0";\r\n});\n'})}),"\n",(0,n.jsxs)(s.p,{children:["If we want to perform something after the response is sent, use ",(0,n.jsx)(s.code,{children:'on("sent")'})," event"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="src/general/events/log-request.ts"',children:'import { storagePath, Response } from "@warlock.js/core";\r\nimport { putJsonFileAsync } from "@mongez/fs";\r\n\r\nResponse.on("sent", (response) => {\r\n  const request = response.request;\r\n\r\n  putJsonFileAsync(storagePath(`logs/${Date.now()}.json`), request.all());\r\n});\n'})}),"\n",(0,n.jsx)(s.p,{children:"This will log the request body in a json file."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Using ",(0,n.jsx)(s.code,{children:"putJsonFileAsync"})," will not block io operations, so it's safe to use it in response events."]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>i});var n=r(6540);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);