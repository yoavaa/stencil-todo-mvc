let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.CSS,o=l.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},i=(()=>(o.head.attachShadow+"").indexOf("[native")>-1)(),r=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),u=new WeakMap,f=e=>"sc-"+e,p={},m=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,s=null,o=!1,c=!1,i=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!m(l))&&(l+=""),o&&c?i[i.length-1].s+=l:i.push(o?$(null,l):l),c=o)};if(r(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=$(e,null);return a.o=t,i.length>0&&(a.u=i),a.p=s,a},$=(e,t)=>({t:0,$:e,s:t,h:null,u:null,o:null,p:null}),y={},h=(e,t,n,s,o,i)=>{if(n!==s){let a=V(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=b(n),o=b(s);t.remove(...l.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!l.includes(e)))}else if("key"===t);else if(a||"o"!==t[0]||"n"!==t[1]){const l=m(s);if((a||l&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?a=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(r){}null==s||!1===s?e.removeAttribute(t):(!a||4&i||o)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):V(l,u)?u.slice(2):u[2]+t.slice(3),n&&c.rel(e,t,n,!1),s&&c.ael(e,t,s,!1)}},w=/\s/,b=e=>e?e.split(w):[],_=(e,t,n,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.o||p,c=t.o||p;for(l in o)l in c||h(s,l,o[l],void 0,n,t.t);for(l in c)h(s,l,o[l],c[l],n,t.t)},j=(t,n,l)=>{let s,c,i=n.u[l],r=0;if(null!==i.s)s=i.h=o.createTextNode(i.s);else if(s=i.h=o.createElement(i.$),_(null,i,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),i.u)for(r=0;r<i.u.length;++r)c=j(t,i,r),c&&s.appendChild(c);return s},v=(e,n,l,s,o,c)=>{let i,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=c;++o)s[o]&&(i=j(null,l,o),i&&(s[o].h=i,r.insertBefore(i,n)))},g=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},M=(e,t)=>e.$===t.$&&e.p===t.p,k=(e,t)=>{const n=t.h=e.h,l=e.u,s=t.u,o=t.s;null===o?(_(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o,c=0,i=0,r=0,a=0,u=t.length-1,f=t[0],p=t[u],m=l.length-1,d=l[0],$=l[m];for(;c<=u&&i<=m;)if(null==f)f=t[++c];else if(null==p)p=t[--u];else if(null==d)d=l[++i];else if(null==$)$=l[--m];else if(M(f,d))k(f,d),f=t[++c],d=l[++i];else if(M(p,$))k(p,$),p=t[--u],$=l[--m];else if(M(f,$))k(f,$),e.insertBefore(f.h,p.h.nextSibling),f=t[++c],$=l[--m];else if(M(p,d))k(p,d),e.insertBefore(p.h,f.h),p=t[--u],d=l[++i];else{for(r=-1,a=c;a<=u;++a)if(t[a]&&null!==t[a].p&&t[a].p===d.p){r=a;break}r>=0?(o=t[r],o.$!==d.$?s=j(t&&t[i],n,r):(k(o,d),t[r]=void 0,s=o.h),d=l[++i]):(s=j(t&&t[i],n,i),d=l[++i]),s&&f.h.parentNode.insertBefore(s,f.h)}c>u?v(e,null==l[m+1]?null:l[m+1].h,n,l,i,m):i>m&&g(t,c,u)})(n,l,t,s):null!==s?(null!==e.s&&(n.textContent=""),v(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.s!==o&&(n.data=o)},S=(e,t,n)=>{const l=(e=>B(e)._)(e);return{emit:e=>L(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},L=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},R=(e,t)=>{t&&!e.j&&t["s-p"].push(new Promise(t=>e.j=t))},U=(e,t)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const n=e.v,l=()=>O(e,n,t);let s;return R(e,e.g),t&&(s=A(n,"componentWillLoad")),E(s,()=>ee(l))},O=(n,l,s)=>{const c=n._,r=c["s-rc"];s&&(e=>{const t=e.M,n=e._,l=t.t,s=((e,t)=>{let n=f(t.k),l=I.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=u.get(e=e.head||e);s||u.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(i&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n),((n,l)=>{const s=n._,o=n.S||$(null,null),c=(e=>e&&e.$===y)(l)?l:d(null,null,l);t=s.tagName,c.$=null,c.t|=4,n.S=c,c.h=o.h=s.shadowRoot||s,e=s["s-sc"],k(o,c)})(n,C(l)),n.t&=-17,n.t|=2,r&&(r.map(e=>e()),c["s-rc"]=void 0);{const e=c["s-p"],t=()=>P(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},C=e=>{try{e=e.render()}catch(t){z(t)}return e},P=e=>{const t=e._,n=e.g;64&e.t||(e.t|=64,F(t),e.L(t),n||x()),e.j&&(e.j(),e.j=void 0),512&e.t&&Z(()=>U(e,!1)),e.t&=-517},x=()=>{F(o.documentElement),Z(()=>L(l,"appload",{detail:{namespace:"stencil-comp"}}))},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){z(l)}},E=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),T=(e,t,n)=>{if(t.R){const l=Object.entries(t.R),s=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>B(this).U.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=B(this),o=s.U.get(t),c=s.t,i=s.v;n=((e,t)=>null==e||m(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.R[t][0]),8&c&&void 0!==o||n===o||(s.U.set(t,n),i&&2==(18&c)&&U(s,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){c.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},W=(e,t={})=>{const n=[],s=t.exclude||[],r=l.customElements,u=o.head,p=u.querySelector("meta[charset]"),m=o.createElement("style"),d=[];let $,y=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map(e=>e[1].map(t=>{const l={t:t[0],k:t[1],R:t[2],O:t[3]};l.R=t[2],!i&&1&l.t&&(l.t|=8);const o=l.k,u=class extends HTMLElement{constructor(e){super(e),N(e=this,l),1&l.t&&(i?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){$&&(clearTimeout($),$=null),y?d.push(this):c.jmp(()=>(e=>{if(0==(1&c.t)){const t=B(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){R(t,t.g=n);break}}n.R&&Object.entries(n.R).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,s)=>{if(0==(32&t.t)){t.t|=32;{if((s=G(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(T(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(i){z(i)}t.t&=-9,e()}const e=f(n.k);if(!I.has(e)&&s.style){const t=()=>{};let l=s.style;8&n.t&&(l=await __sc_import_stencil_comp("./p-f5bab17b.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=I.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,I.set(e,l)})(e,l,!!(1&n.t)),t()}}const o=t.g,c=()=>U(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this))}disconnectedCallback(){c.jmp(()=>{})}forceUpdate(){(()=>{{const e=B(this);e._.isConnected&&2==(18&e.t)&&U(e,!1)}})()}componentOnReady(){return B(this).C}};l.P=e[0],s.includes(o)||r.get(o)||(n.push(o),r.define(o,T(u,l,1)))})),m.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),u.insertBefore(m,p?p.nextSibling:u.firstChild),y=!1,d.length?d.map(e=>e.connectedCallback()):c.jmp(()=>$=setTimeout(x,30))},q=new WeakMap,B=e=>q.get(e),H=(e,t)=>q.set(t.v=e,t),N=(e,t)=>{const n={t:0,_:e,M:t,U:new Map};return n.C=new Promise(e=>n.L=e),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},V=(e,t)=>t in e,z=e=>console.error(e),D=new Map,G=e=>{const t=e.k.replace(/-/g,"_"),n=e.P,l=D.get(n);return l?l[t]:__sc_import_stencil_comp(`./${n}.entry.js`).then(e=>(D.set(n,e),e[t]),z)},I=new Map,J=[],K=[],Q=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&c.t?Z(Y):c.raf(Y))},X=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){z(t)}e.length=0},Y=()=>{X(J),X(K),(n=J.length>0)&&c.raf(Y)},Z=e=>r().then(e),ee=Q(K,!0),te=()=>s&&s.supports&&s.supports("color","var(--c)")?r():__sc_import_stencil_comp("./p-69b85284.js").then(()=>(c.A=l.__cssshim)?(!1).i():0),ne=()=>{c.A=l.__cssshim;const e=Array.from(o.querySelectorAll("script")).find(e=>/\/stencil-comp(\.esm)?\.js($|\?|#)/.test(e.src)||"stencil-comp"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,l.location.href)).href,le(t.resourcesUrl,e),l.customElements?r(t):__sc_import_stencil_comp("./p-2347dcb6.js").then(()=>t))},le=(e,t)=>{try{l.__sc_import_stencil_comp=Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;l.__sc_import_stencil_comp=n=>{const c=new URL(n,e).href;let i=s.get(c);if(!i){const e=o.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.__sc_import_stencil_comp.m = m;`],{type:"application/javascript"})),i=new Promise(t=>{e.onload=()=>{t(l.__sc_import_stencil_comp.m),e.remove()}}),s.set(c,i),o.head.appendChild(e)}return i}}};export{te as a,W as b,S as c,d as h,ne as p,H as r}