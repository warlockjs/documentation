const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.DK-yw189.js","_astro/preload-helper.CVfkMyKi.js"])))=>i.map(i=>d[i]);
import{_ as A}from"./preload-helper.CVfkMyKi.js";const S={},k=new Set,l=new WeakSet;let g=!0,w,y=!1;function B(e){y||(y=!0,g??=!1,w??="hover",x(),M(),O(),I())}function x(){for(const e of["touchstart","mousedown"])document.addEventListener(e,r=>{const a=r.target.closest("a");m(a,"tap")&&u(a.href,{ignoreSlowConnection:!0})},{passive:!0})}function M(){let e;document.body.addEventListener("focusin",t=>{const o=t.target.closest("a");m(o,"hover")&&r(o.href)},{passive:!0}),document.body.addEventListener("focusout",a,{passive:!0}),h(()=>{for(const t of document.getElementsByTagName("a"))l.has(t)||m(t,"hover")&&(l.add(t),t.addEventListener("mouseenter",o=>r(o.currentTarget.href),{passive:!0}),t.addEventListener("mouseleave",a,{passive:!0}))});function r(t){e&&clearTimeout(e),e=setTimeout(()=>{u(t)},80)}function a(){e&&(clearTimeout(e),e=0)}}function O(){let e;h(()=>{for(const r of document.getElementsByTagName("a"))l.has(r)||m(r,"viewport")&&(l.add(r),e??=P(),e.observe(r))})}function P(){const e=new WeakMap;return new IntersectionObserver((r,a)=>{for(const t of r){const o=t.target,n=e.get(o);t.isIntersecting?(n&&clearTimeout(n),e.set(o,setTimeout(()=>{a.unobserve(o),e.delete(o),u(o.href)},300))):n&&(clearTimeout(n),e.delete(o))}})}function I(){h(()=>{for(const e of document.getElementsByTagName("a"))m(e,"load")&&u(e.href)})}function u(e,r){e=e.replace(/#.*/,"");const a=r?.ignoreSlowConnection??!1;if(_(e,a))if(k.add(e),document.createElement("link").relList?.supports?.("prefetch")){const t=document.createElement("link");t.rel="prefetch",t.setAttribute("href",e),document.head.append(t)}else{const t=new Headers;for(const[o,n]of Object.entries(S))t.set(o,n);fetch(e,{priority:"low",headers:t})}}function _(e,r){if(!navigator.onLine||!r&&C())return!1;try{const a=new URL(e,location.href);return location.origin===a.origin&&(location.pathname!==a.pathname||location.search!==a.search)&&!k.has(e)}catch{}return!1}function m(e,r){if(e?.tagName!=="A")return!1;const a=e.dataset.astroPrefetch;return a==="false"?!1:r==="tap"&&(a!=null||g)&&C()?!0:a==null&&g||a===""?r===w:a===r}function C(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function h(e){e();let r=!1;document.addEventListener("astro:page-load",()=>{if(!r){r=!0;return}e()})}const i=(...e)=>console.log("[astro-mermaid]",...e),T=(...e)=>console.error("[astro-mermaid]",...e),E=()=>document.querySelectorAll("pre.mermaid").length>0;let c=null;async function N(){return c||(i("Loading mermaid.js..."),c=A(()=>import("./mermaid.core.DK-yw189.js").then(e=>e.bn),__vite__mapDeps([0,1])).then(async({default:e})=>{const r=[];if(r&&r.length>0){i("Registering",r.length,"icon packs");const a=r.map(t=>({name:t.name,loader:()=>fetch(t.url).then(o=>o.json())}));await e.registerIconPacks(a)}return e}).catch(e=>{throw T("Failed to load mermaid:",e),c=null,e}),c)}const f={startOnLoad:!1,theme:"default",themeVariables:{primaryColor:"#161b29",primaryBorderColor:"#f5b800",primaryTextColor:"#e2e8f0",secondaryColor:"#1c2030",tertiaryColor:"#1c2030",lineColor:"#94a3b8",edgeLabelBackground:"#0f1422",labelBackground:"#0f1422",background:"transparent",mainBkg:"#161b29",clusterBkg:"rgba(245, 184, 0, 0.04)",clusterBorder:"#3a4256",noteBkgColor:"#1c2030",noteTextColor:"#e2e8f0",noteBorderColor:"#f5b800",activationBkgColor:"#f5b800",activationBorderColor:"#f5b800",actorBkg:"#161b29",actorBorder:"#f5b800",actorTextColor:"#e2e8f0",actorLineColor:"#3a4256",signalColor:"#e2e8f0",signalTextColor:"#e2e8f0",fillType0:"#161b29",fillType1:"#1c2030",fillType2:"#252b3d"},flowchart:{curve:"basis",padding:14,htmlLabels:!0},sequence:{actorMargin:50,messageMargin:40,mirrorActors:!1}},V={light:"default",dark:"dark"};async function p(){i("Initializing mermaid diagrams...");const e=document.querySelectorAll("pre.mermaid");if(i("Found",e.length,"mermaid diagrams"),e.length===0)return;const r=await N();let a=f.theme;{const t=document.documentElement.getAttribute("data-theme"),o=document.body.getAttribute("data-theme");a=V[t||o]||f.theme,i("Using theme:",a,"from",t?"html":"body")}r.initialize({...f,theme:a,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const t of e){if(t.hasAttribute("data-processed"))continue;t.hasAttribute("data-diagram")||t.setAttribute("data-diagram",t.textContent||"");const o=t.getAttribute("data-diagram")||"",n="mermaid-"+Math.random().toString(36).slice(2,11);i("Rendering diagram:",n);try{const d=document.getElementById(n);d&&d.remove();const{svg:s}=await r.render(n,o);t.innerHTML=s,t.setAttribute("data-processed","true"),i("Successfully rendered diagram:",n)}catch(d){T("Mermaid rendering error for diagram:",n,d);const s=document.createElement("div");s.style.cssText="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;";const b=document.createElement("strong");b.textContent="Error rendering diagram:";const v=document.createElement("span");v.textContent=" "+(d.message||"Unknown error"),s.appendChild(b),s.appendChild(v),t.textContent="",t.appendChild(s),t.setAttribute("data-processed","true")}}}E()?(i("Mermaid diagrams detected on initial load"),p()):i("No mermaid diagrams found on initial load");{const e=new MutationObserver(r=>{for(const a of r)a.type==="attributes"&&a.attributeName==="data-theme"&&(document.querySelectorAll("pre.mermaid[data-processed]").forEach(t=>{t.removeAttribute("data-processed")}),p())});e.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),e.observe(document.body,{attributes:!0,attributeFilter:["data-theme"]})}document.addEventListener("astro:after-swap",()=>{i("View transition detected"),E()&&p()});const L=document.createElement("style");L.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(L);B();
