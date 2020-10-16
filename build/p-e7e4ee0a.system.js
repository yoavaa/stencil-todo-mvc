var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="stencil-comp";var a;var i;var s=false;var o=false;var l=typeof window!=="undefined"?window:{};var f=l.CSS;var u=l.document||{head:{}};var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var $=function(){return(u.head.attachShadow+"").indexOf("[native")>-1}();var v=function(e){return Promise.resolve(e)};var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var d="{visibility:hidden}.hydrated{visibility:inherit}";var h=function(e,r){if(r===void 0){r=""}{return function(){return}}};var p=function(e,r){{return function(){return}}};var g=new WeakMap;var y=function(e,r,t){var n=pe.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}pe.set(e,n)};var b=function(e,r,t,n){var a=_(r.$tagName$);var i=pe.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var s=g.get(e);var o=void 0;if(!s){g.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){o=c.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=u.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var w=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=h("attachStyles",r.$tagName$);var i=b($&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var _=function(e,r){return"sc-"+e};var S={};var R=function(e){return e!=null};var k=function(e){e=typeof e;return e==="object"||e==="function"};var x=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var j=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!k(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?N(null,a):a)}o=s}}};f(t);if(r){if(r.key){i=r.key}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=N(e,null);c.$attrs$=r;if(l.length>0){c.$children$=l}{c.$key$=i}return c}));var N=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}return t};var C={};var E=function(e){return e&&e.$tag$===C};var M=function(e,r,t,n,a,i){if(t!==n){var s=ve(e,r);var o=r.toLowerCase();if(r==="class"){var f=e.classList;var u=A(t);var $=A(n);f.remove.apply(f,u.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!u.includes(e)})))}else if(r==="key");else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(ve(l,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){c.rel(e,r,t,false)}if(n){c.ael(e,r,n,false)}}else{var v=k(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var m=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=m){e[r]=m}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!v){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var L=/\s/;var A=function(e){return!e?[]:e.split(L)};var O=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||S;var s=r.$attrs$||S;{for(n in i){if(!(n in s)){M(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){M(a,n,i[n],s[n],t,r.$flags$)}};var U=function(e,r,t,n){var i=r.$children$[t];var o=0;var l;var f;if(i.$text$!==null){l=i.$elm$=u.createTextNode(i.$text$)}else{l=i.$elm$=u.createElement(i.$tag$);{O(null,i,s)}if(R(a)&&l["s-si"]!==a){l.classList.add(l["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){f=U(e,i,o);if(f){l.appendChild(f)}}}}return l};var P=function(e,r,t,n,a,s){var o=e;var l;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=s;++a){if(n[a]){l=U(null,t,a);if(l){n[a].$elm$=l;o.insertBefore(l,r)}}}};var B=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;a.remove()}}};var T=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var u=r[l];var c=n.length-1;var $=n[0];var v=n[c];var m;var d;while(a<=l&&i<=c){if(f==null){f=r[++a]}else if(u==null){u=r[--l]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(I(f,$)){H(f,$);f=r[++a];$=n[++i]}else if(I(u,v)){H(u,v);u=r[--l];v=n[--c]}else if(I(f,v)){H(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=r[++a];v=n[--c]}else if(I(u,$)){H(u,$);e.insertBefore(u.$elm$,f.$elm$);u=r[--l];$=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===$.$key$){s=o;break}}}if(s>=0){d=r[s];if(d.$tag$!==$.$tag$){m=U(r&&r[i],t,s)}else{H(d,$);r[s]=undefined;m=d.$elm$}$=n[++i]}else{m=U(r&&r[i],t,i);$=n[++i]}if(m){{f.$elm$.parentNode.insertBefore(m,f.$elm$)}}}}if(a>l){P(e,n[c+1]==null?null:n[c+1].$elm$,t,n,i,c)}else if(i>c){B(r,a,l)}};var I=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}}return false};var H=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$text$;if(i===null){{{O(e,r,s)}}if(n!==null&&a!==null){T(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}P(t,null,r,a,0,a.length-1)}else if(n!==null){B(n,0,n.length-1)}}else if(e.$text$!==i){t.data=i}};var z=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||N(null,null);var s=E(r)?r:j(null,null,r);i=t.tagName;s.$tag$=null;s.$flags$|=4;e.$vnode$=s;s.$elm$=n.$elm$=t.shadowRoot||t;{a=t["s-sc"]}H(n,s)};var q=function(e){return ue(e).$hostElement$};var V=e("c",(function(e,r,t){var n=q(e);return{emit:function(e){return F(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var F=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var W=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var G=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=h("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return D(e,a,r)};W(e,n);var s;if(r){{s=Y(a,"componentWillLoad")}}t();return Z(s,(function(){return Re(i)}))};var D=function(e,r,t){var n=e.$hostElement$;var a=h("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){w(e)}var s=h("render",e.$cmpMeta$.$tagName$);{{z(e,J(r))}}if(c.$cssShim$){c.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return K(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var J=function(e){try{e=e.render()}catch(r){me(r)}return e};var K=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=h("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ee(t)}n();{e.$onReadyResolve$(t);if(!a){X()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Se((function(){return G(e,false)}))}e.$flags$&=~(4|512)}};var Q=function(e){{var r=ue(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){G(r,false)}return t}};var X=function(e){{ee(u.documentElement)}Se((function(){return F(l,"appload",{detail:{namespace:n}})}))};var Y=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){me(n)}}return undefined};var Z=function(e,r){return e&&e.then?e.then(r):r()};var ee=function(e){return e.classList.add("hydrated")};var re=function(e,r){if(e!=null&&!k(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var te=function(e,r){return ue(e).$instanceValues$.get(r)};var ne=function(e,r,t,n){var a=ue(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=re(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if((s&(2|16))===2){G(a,false)}}}};var ae=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return te(this,n)},set:function(e){ne(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;c.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ie=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=he(a);if(!s.then)return[3,2];e=p();return[4,s];case 1:s=c.sent();e();c.label=2;case 2:if(!s.isProxied){ae(s,a,2);s.isProxied=true}t=h("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch($){me($)}{n.$flags$&=~8}t();i=_(a.$tagName$);if(!(!pe.has(i)&&s.style))return[3,5];o=h("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ac6f021f.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=c.sent();c.label=4;case 4:y(i,l,!!(a.$flags$&1));o();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return G(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var se=function(e){if((c.$flags$&1)===0){var r=ue(e);var t=r.$cmpMeta$;var n=h("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){W(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{ie(e,r,t)}}n()}};var oe=function(e){if((c.$flags$&1)===0){var r=ue(e);if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var le=e("b",(function(e,r){if(r===void 0){r={}}var t=h();var n=[];var a=r.exclude||[];var i=l.customElements;var s=u.head;var o=s.querySelector("meta[charset]");var f=u.createElement("style");var v=[];var m;var p=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",u.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}if(!$&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;$e(r,t);if(t.$flags$&1){if($){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(p){v.push(this)}else{c.jmp((function(){return se(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return oe(e)}))};r.prototype.forceUpdate=function(){Q(this)};r.prototype.componentOnReady=function(){return ue(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,ae(o,t,1))}}))}));{f.innerHTML=n+d;f.setAttribute("data-styles","");s.insertBefore(f,o?o.nextSibling:s.firstChild)}p=false;if(v.length){v.map((function(e){return e.connectedCallback()}))}else{{c.jmp((function(){return m=setTimeout(X,30)}))}}t()}));var fe=new WeakMap;var ue=function(e){return fe.get(e)};var ce=e("r",(function(e,r){return fe.set(r.$lazyInstance$=e,r)}));var $e=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return fe.set(e,t)};var ve=function(e,r){return r in e};var me=function(e){return console.error(e)};var de=new Map;var he=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=de.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{de.set(i,e)}return e[a]}),me)};var pe=new Map;var ge=[];var ye=[];var be=function(e,r){return function(t){e.push(t);if(!o){o=true;if(r&&c.$flags$&4){Se(_e)}else{c.raf(_e)}}}};var we=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){me(t)}}e.length=0};var _e=function(){we(ge);{we(ye);if(o=ge.length>0){c.raf(_e)}}};var Se=function(e){return v().then(e)};var Re=be(ye,true);var ke=e("a",(function(){if(!(f&&f.supports&&f.supports("color","var(--c)"))){return r.import("./p-2f8c282d.system.js").then((function(){if(c.$cssShim$=l.__cssshim){return c.$cssShim$.i()}else{return 0}}))}return v()}));var xe=e("p",(function(){{c.$cssShim$=l.__cssshim}var e=Array.from(u.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,l.location.href)).href;{je(t.resourcesUrl,e)}if(!l.customElements){return r.import("./p-c6833af0.system.js").then((function(){return t}))}}return v(t)}));var je=function(e,r){var t=x(n);try{l[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;l[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=u.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(l[t].m);o.remove()}}));a.set(i,s);u.head.appendChild(o)}return s}}}}}}));