let t;var e,i,s,r,n,o=globalThis,l={},a={},h=o.parcelRequire3bab;null==h&&((h=function(t){if(t in l)return l[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return l[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},o.parcelRequire3bab=h),h.register;var d=h("hNeh9"),c=h("800sp");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=window,p=u.ShadowRoot&&(void 0===u.ShadyCSS||u.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol(),f=new WeakMap;class ${constructor(t,e,i){if(this._$cssResult$=!0,i!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(p&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=f.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&f.set(e,t))}return t}toString(){return this.cssText}}const g=t=>new $("string"==typeof t?t:t+"",void 0,v),_=(t,e)=>{p?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),s=u.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})},y=p?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return g(e)})(t):t,m=window,b=m.trustedTypes,A=b?b.emptyScript:"",E=m.reactiveElementPolyfillSupport,S={toAttribute(t,e){switch(e){case Boolean:t=t?A:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>e!==t&&(e==e||t==t),C={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:w},x="finalized";class k extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||C}static finalize(){if(this.hasOwnProperty(x))return!1;this[x]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(y(i));else void 0!==t&&e.push(y(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return _(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=C){var s;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:S).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:S;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||w)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}k[x]=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},null==E||E({ReactiveElement:k}),(null!==(e=m.reactiveElementVersions)&&void 0!==e?e:m.reactiveElementVersions=[]).push("1.6.3");const O=window,P=O.trustedTypes,N=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,R="?"+j,T=`<${R}>`,H=document,M=()=>H.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,D=t=>L(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),B="[ 	\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,q=/>/g,J=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,K=/"/g,F=/^(?:script|style|textarea|title)$/i,Z=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),G=Z(1),Q=(Z(2),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),Y=new WeakMap,tt=H.createTreeWalker(H,129,null,!1);function te(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(e):e}const ti=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=I;for(let e=0;e<i;e++){let i=t[e],l,a,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(a=o.exec(i)));)d=o.lastIndex,o===I?"!--"===a[1]?o=V:void 0!==a[1]?o=q:void 0!==a[2]?(F.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=J):void 0!==a[3]&&(o=J):o===J?">"===a[0]?(o=null!=r?r:I,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?J:'"'===a[3]?K:W):o===K||o===W?o=J:o===V||o===q?o=I:(o=J,r=void 0);let c=o===J&&t[e+1].startsWith("/>")?" ":"";n+=o===I?i+T:h>=0?(s.push(l),i.slice(0,h)+U+i.slice(h)+j+c):i+j+(-2===h?(s.push(void 0),e):c)}return[te(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class ts{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[a,h]=ti(t,e);if(this.el=ts.createElement(a,i),tt.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=tt.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(U)||e.startsWith(j)){let i=h[n++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+U).split(j),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?ta:"?"===e[1]?td:"@"===e[1]?tc:tl})}else l.push({type:6,index:r})}for(let e of t)s.removeAttribute(e)}if(F.test(s.tagName)){let t=s.textContent.split(j),e=t.length-1;if(e>0){s.textContent=P?P.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),tt.nextNode(),l.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType){if(s.data===R)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(j,t+1));)l.push({type:7,index:r}),t+=j.length-1}}r++}}static createElement(t,e){let i=H.createElement("template");return i.innerHTML=t,i}}function tr(t,e,i=t,s){var r,n,o;if(e===Q)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl,a=z(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t))._$AT(t,i,s),void 0!==s?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=tr(t,l._$AS(t,e.values),l,s)),e}class tn{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:H).importNode(i,!0);tt.currentNode=r;let n=tt.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new to(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new tu(n,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=tt.nextNode(),o++)}return tt.currentNode=H,r}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class to{constructor(t,e,i,s){var r;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){z(t=tr(this,t,e))?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):D(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==X&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(H.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=ts.createElement(te(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{let t=new tn(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new ts(t)),e}T(t){L(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new to(this.k(M()),this.k(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tl{constructor(t,e,i,s,r){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!z(t=tr(this,t,e,0))||t!==this._$AH&&t!==Q)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=tr(this,l[i+s],e,s))===Q&&(o=this._$AH[s]),n||(n=!z(o)||o!==this._$AH[s]),o===X?t=X:t!==X&&(t+=(null!=o?o:"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ta extends tl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}const th=P?P.emptyScript:"";class td extends tl{constructor(){super(...arguments),this.type=4}j(t){t&&t!==X?this.element.setAttribute(this.name,th):this.element.removeAttribute(this.name)}}class tc extends tl{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tr(this,t,e,0))&&void 0!==i?i:X)===Q)return;let s=this._$AH,r=t===X&&s!==X||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==X&&(s===X||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tu{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tr(this,t)}}const tp=O.litHtmlPolyfillSupport;null==tp||tp(ts,to),(null!==(i=O.litHtmlVersions)&&void 0!==i?i:O.litHtmlVersions=[]).push("2.8.0");const tv=(t,e,i)=>{var s,r;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=n._$litPart$;if(void 0===o){let t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new to(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o};class tf extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tv(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return Q}}tf.finalized=!0,tf._$litElement$=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:tf});const t$=globalThis.litElementPolyfillSupport;null==t$||t$({LitElement:tf}),(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tg=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},t_=(t,e,i)=>{e.constructor.createProperty(i,t)};function ty(t){return(e,i)=>void 0!==i?t_(t,e,i):tg(t,e)}null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE));class tm{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tb=(t=class extends tm{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.it){for(let s in this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)!e[s]||(null===(i=this.nt)||void 0===i?void 0:i.has(s))||this.it.add(s);return this.render(e)}let r=t.element.classList;for(let t in this.it.forEach(t=>{t in e||(r.remove(t),this.it.delete(t))}),e){let i=!!e[t];i===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return Q}},(...e)=>({_$litDirective$:t,values:e}));function tA(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}function tE(t){return null===t?"null":Array.isArray(t)?"array":t.constructor.name.toLowerCase()}function tS(t){return t!==Object(t)}function tw(t){return!!t&&!!t.nodeType}function tC(t){return tS(t)||tw(t)}function*tx(t){let e=[[t,"",[]]];for(;e.length;){let[t,i,s]=e.shift();if(i&&(yield[t,i,s]),!tS(t))for(let[r,n]of Object.entries(t))e.push([n,`${i}${i?".":""}${r}`,[...s,i]])}}const tk=t=>void 0!==t,tO=(t,e)=>e instanceof RegExp?!!t.match(e):function(t,e){let i=t.split("."),s=e.split("."),r=t=>"**"===t,n=0,o=0;for(;n<i.length;){let t=s[o];if(t===i[n]||"*"===t)o++,n++;else{if(!r(t))return!1;o++,n=i.length-(s.length-o)}}return o===s.length}(t,e),tP=(t,e)=>(i,s)=>{let r={};if(t)for(let[,i,n]of tx(s.data))tO(i,t)&&(r[i]=e,n.forEach(t=>r[t]=e));return{expanded:r}},tN=t=>()=>({highlight:t}),tU=((t,...e)=>new $(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,v))`:host{--background-color:#2a2f3a;--color:#f8f8f2;--string-color:#a3eea0;--number-color:#d19a66;--boolean-color:#4ba7ef;--null-color:#df9cf3;--property-color:#6fb3d2;--preview-color:rgba(222,175,143,0.9);--highlight-color:#7b0000;--font-family:monaco,Consolas,'Lucida Console',monospace;--font-size:1rem;--indent-size:1.5em;--indentguide-size:1px;--indentguide-style:solid;--indentguide-color:#333;--indentguide-color-active:#666;--indentguide:var(--indentguide-size) var(--indentguide-style) var(--indentguide-color);--indentguide-active:var(--indentguide-size) var(--indentguide-style) var(--indentguide-color-active);display:block;background-color:var(--background-color);color:var(--color);font-family:var(--font-family);font-size:var(--font-size)}.preview{color:var(--preview-color)}.null{color:var(--null-color)}.key{color:var(--property-color);display:inline-block}.collapsable:before{display:inline-block;color:var(--color);font-size:.8em;content:'▶';line-height:1em;width:1em;height:1em;text-align:center;transition:transform 195ms ease-out;transform:rotate(90deg);color:var(--property-color)}.collapsable.collapsableCollapsed:before{transform:rotate(0)}.collapsable{cursor:pointer;user-select:none}.string{color:var(--string-color)}.number{color:var(--number-color)}.boolean{color:var(--boolean-color)}ul{padding:0;clear:both}ul,li{list-style:none;position:relative}li ul>li{position:relative;margin-left:var(--indent-size);padding-left:0}ul ul:before{content:'';border-left:var(--indentguide);position:absolute;left:calc(0.5em - var(--indentguide-size));top:.3em;bottom:.3em}ul ul:hover:before{border-left:var(--indentguide-active)}mark{background-color:var(--highlight-color)}`;class tj extends tf{constructor(){super(...arguments),this.state={expanded:{},filtered:{},highlight:null},this.handlePropertyClick=t=>e=>{let i;e.preventDefault(),this.setState(e=>({expanded:Object.assign(Object.assign({},e.expanded),{[t]:tk(i)?!!i:!e.expanded[t]})}))}}setState(t){var e,i,s,r;return e=this,i=void 0,s=void 0,r=function*(){let e=this.state;this.state=Object.assign(Object.assign({},e),t(e,this))},new(s||(s=Promise))(function(t,n){function o(t){try{a(r.next(t))}catch(t){n(t)}}function l(t){try{a(r.throw(t))}catch(t){n(t)}}function a(e){var i;e.done?t(e.value):((i=e.value)instanceof s?i:new s(function(t){t(i)})).then(o,l)}a((r=r.apply(e,i||[])).next())})}connectedCallback(){this.hasAttribute("data")||tk(this.data)||this.setAttribute("data",this.innerText),super.connectedCallback()}expand(t){this.setState(tP(t,!0))}expandAll(){this.setState(tP("**",!0))}collapseAll(){this.setState(tP("**",!1))}collapse(t){this.setState(tP(t,!1))}*search(t){for(let[e,i]of tx(this.data))tC(e)&&String(e).includes(t)&&(this.expand(i),this.updateComplete.then(()=>{let t=this.shadowRoot.querySelector(`[data-path="${i}"]`);t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()}),this.setState(tN(i)),yield{value:e,path:i});this.setState(tN(null))}filter(t){this.setState((e,i)=>{let s={};if(t)for(let[,e,r]of tx(i.data))tO(e,t)?(s[e]=!1,r.forEach(t=>s[t]=!1)):s[e]=!0;return{filtered:s}})}resetFilter(){this.setState(()=>({filtered:{}}))}renderObject(t,e){return G`<ul part="object">${Object.keys(t).map(i=>{let s=t[i],r=e?`${e}.${i}`:i,n=tC(s);return G`<li part="property" data-path="${r}" .hidden="${this.state.filtered[r]}"><span part="key" class="${tb({key:i,collapsable:!n,collapsableCollapsed:!this.state.expanded[r]})}" @click="${n?null:this.handlePropertyClick(r)}">${i}: </span>${this.renderNode(s,r)}</li>`})}</ul>`}renderNode(t,e=""){let i=tC(t);return!e||this.state.expanded[e]||i?i?this.renderPrimitive(t,e):this.renderObject(t,e):this.renderNodePreview(t)}renderNodePreview(t){return G`<span part="preview" class="preview">${function(t,{nodeCount:e=3,maxLength:i=15}={}){let s=Array.isArray(t),r=Object.keys(t),n=r.slice(0,e),o=[],l=t=>{switch(tE(t)){case"object":return 0===Object.keys(t).length?"{ }":"{ ... }";case"array":return 0===t.length?"[ ]":"[ ... ]";case"string":return`"${t.substring(0,i)}${t.length>i?"...":""}"`;default:return String(t)}},a=[];for(let e of n){let i=[],r=t[e];s||i.push(`${e}: `),i.push(l(r)),a.push(i.join(""))}r.length>e&&a.push("..."),o.push(a.join(", "));let h=o.join("");return s?`[ ${h} ]`:`{ ${h} }`}(t)}</span>`}renderPrimitive(t,e){let i=this.state.highlight,s=tE(t),r=tw(t)?t:G`<span part="primitive primitive-${s}" tabindex="0" class="${tE(t)}">${JSON.stringify(t)}</span>`;return e===i?G`<mark part="highlight">${r}</mark>`:r}render(){let t=this.data;return tk(t)?this.renderNode(t):null}}tj.styles=[tU],tA([ty({converter:{fromAttribute:t=>t&&t.trim()?JSON.parse(t):void 0,toAttribute:t=>JSON.stringify(t)},type:Object})],tj.prototype,"data",void 0),tA([ty({state:!0})],tj.prototype,"state",void 0),customElements.define("json-viewer",tj);class tR extends c.LitElement{static styles=[d.default,(0,c.css)`
  json-viewer {
    --font-size: .8rem;
  }`];static properties={};constructor(){super(),this.results=[]}connectedCallback(){super.connectedCallback(),this.addEventListener("result",this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("result",this.#t)}#e(t,e){return(0,c.html)`
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="item-1" checked="checked" />
      <div class="collapse-title text-xl font-bold">${t.node}</div>
      <div class="collapse-content">
      ${Object.entries(t.state).map(([t,i])=>(0,c.html)`
          <div>
              <h4 class="italic">${t}</h4>
              <p class="my-3">
                <json-viewer id="json${e}">
                ${JSON.stringify(i)}
                </json-viewer>
              </p>
            </div>
        `)}
      </div>
    </div>
    `}#t=t=>{let{detail:e}=t;console.debug("onResult",t);let i=this.results.push(e);this.dispatchEvent(new CustomEvent("graph-active",{detail:e.node,bubbles:!0,composed:!0,cancelable:!0})),this.requestUpdate(),this.updateComplete.then(()=>{let t=`#json${i-1}`,e=this.shadowRoot.querySelectorAll(t);for(let i of(console.debug(t,e),e))i.expandAll()})};render(){return(0,c.html)`
      <div class="flex flex-col gap-y-1.5 mx-2 mt-2">
      ${this.results.map((t,e)=>this.#e(t,e))}
      </div>
    `}}window.customElements.define("lg4j-result",tR);
//# sourceMappingURL=index.c044929e.js.map
