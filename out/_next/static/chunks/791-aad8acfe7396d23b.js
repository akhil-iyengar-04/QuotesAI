(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{7685:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(6905),u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),l=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:a,...d},f)=>(0,r.createElement)("svg",{ref:f,...u,width:l,height:l,stroke:n,strokeWidth:s?24*Number(i)/Number(l):i,className:["lucide",`lucide-${o(e)}`,c].join(" "),...d},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n}},6245:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7685).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},968:function(e,t,n){e.exports=n(1337)},3127:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},1036:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},7905:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(6905),u=n(2989),o=n(543),l=n(7944);function i(e){let t=e+"CollectionProvider",[n,i]=(0,u.b)(t),[s,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:u}=e,i=c(a,n),s=(0,o.e)(t,i.collectionRef);return r.createElement(l.g7,{ref:s},u)}),f=e+"CollectionItemSlot",v="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,u=r.useRef(null),o=r.useRef(new Map).current;return r.createElement(s,{scope:t,itemMap:o,collectionRef:u},n)},Slot:d,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:u,...i}=e,s=r.useRef(null),a=(0,o.e)(t,s),d=c(f,n);return r.useEffect(()=>(d.itemMap.set(s,{ref:s,...i}),()=>void d.itemMap.delete(s))),r.createElement(l.g7,{[v]:"",ref:a},u)})},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},i]}},543:function(e,t,n){"use strict";n.d(t,{F:function(){return u},e:function(){return o}});var r=n(6905);function u(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,r.useCallback)(u(...e),e)}},2989:function(e,t,n){"use strict";n.d(t,{b:function(){return o},k:function(){return u}});var r=n(6905);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:o},t)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let o=(0,r.createContext)(u),l=n.length;function i(t){let{scope:n,children:u,...i}=t,s=(null==n?void 0:n[e][l])||o,c=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(s.Provider,{value:c},u)}return n=[...n,u],i.displayName=t+"Provider",[i,function(n,i){let s=(null==i?void 0:i[e][l])||o,c=(0,r.useContext)(s);if(c)return c;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},3174:function(e,t,n){"use strict";let r;n.d(t,{I0:function(){return E},XB:function(){return f},fC:function(){return h}});var u=n(3127),o=n(6905),l=n(1036),i=n(5849),s=n(543),c=n(9039);let a="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:v,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:y,onDismiss:b,...w}=e,g=(0,o.useContext)(d),[C,N]=(0,o.useState)(null),O=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,P]=(0,o.useState)({}),T=(0,s.e)(t,e=>N(e)),M=Array.from(g.layers),[R]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),k=M.indexOf(R),L=C?M.indexOf(C):-1,S=g.layersWithOutsidePointerEventsDisabled.size>0,A=L>=k,D=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",u.current),u.current=o,t.addEventListener("click",u.current,{once:!0})):o()}else t.removeEventListener("click",u.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",u.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!A||n||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==b||b())},O),W=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==E||E(e),null==y||y(e),e.defaultPrevented||null==b||b())},O);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{L!==g.layers.size-1||(null==v||v(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},O),(0,o.useEffect)(()=>{if(C)return f&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(C)),g.layers.add(C),m(),()=>{f&&1===g.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=r)}},[C,O,f,g]),(0,o.useEffect)(()=>()=>{C&&(g.layers.delete(C),g.layersWithOutsidePointerEventsDisabled.delete(C),m())},[C,g]),(0,o.useEffect)(()=>{let e=()=>P({});return document.addEventListener(a,e),()=>document.removeEventListener(a,e)},[]),(0,o.createElement)(i.WV.div,(0,u.Z)({},w,{ref:T,style:{pointerEvents:S?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,D.onPointerDownCapture)}))}),v=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d),r=(0,o.useRef)(null),l=(0,s.e)(t,r);return(0,o.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,o.createElement)(i.WV.div,(0,u.Z)({},e,{ref:l}))});function m(){let e=new CustomEvent(a);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let u=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),r?(0,i.jH)(u,o):u.dispatchEvent(o)}let h=f,E=v},7104:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(3127),u=n(6905),o=n(6714),l=n(5849);let i=(0,u.forwardRef)((e,t)=>{var n;let{container:i=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return i?o.createPortal((0,u.createElement)(l.WV.div,(0,r.Z)({},s,{ref:t})),i):null})},2110:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(6905),u=n(6714),o=n(543),l=n(2790);let i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=(0,r.useState)(),c=(0,r.useRef)({}),a=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,v]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=s(c.current);d.current="mounted"===f?e:"none"},[f]),(0,l.b)(()=>{let t=c.current,n=a.current;if(n!==e){let r=d.current,u=s(t);e?v("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==u?v("ANIMATION_OUT"):v("UNMOUNT"),a.current=e}},[e,v]),(0,l.b)(()=>{if(o){let e=e=>{let t=s(c.current).includes(e.animationName);e.target===o&&t&&(0,u.flushSync)(()=>v("ANIMATION_END"))},t=e=>{e.target===o&&(d.current=s(c.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}v("ANIMATION_END")},[o,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(t),c="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),a=(0,o.e)(i.ref,c.ref);return"function"==typeof n||i.isPresent?(0,r.cloneElement)(c,{ref:a}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},5849:function(e,t,n){"use strict";n.d(t,{WV:function(){return i},jH:function(){return s}});var r=n(3127),u=n(6905),o=n(6714),l=n(7944);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,u.forwardRef)((e,n)=>{let{asChild:o,...i}=e,s=o?l.g7:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(s,(0,r.Z)({},i,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function s(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},7944:function(e,t,n){"use strict";n.d(t,{g7:function(){return l}});var r=n(3127),u=n(6905),o=n(543);let l=(0,u.forwardRef)((e,t)=>{let{children:n,...o}=e,l=u.Children.toArray(n),s=l.find(c);if(s){let e=s.props.children,n=l.map(t=>t!==s?t:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(i,(0,r.Z)({},o,{ref:t}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,n):null)}return(0,u.createElement)(i,(0,r.Z)({},o,{ref:t}),n)});l.displayName="Slot";let i=(0,u.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,u.isValidElement)(n)?(0,u.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let u=e[r],o=t[r];/^on[A-Z]/.test(r)?u&&o?n[r]=(...e)=>{o(...e),u(...e)}:u&&(n[r]=u):"style"===r?n[r]={...u,...o}:"className"===r&&(n[r]=[u,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,o.F)(t,n.ref):n.ref}):u.Children.count(n)>1?u.Children.only(null):null});i.displayName="SlotClone";let s=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function c(e){return(0,u.isValidElement)(e)&&e.type===s}},9039:function(e,t,n){"use strict";n.d(t,{W:function(){return u}});var r=n(6905);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},9031:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var r=n(6905),u=n(9039);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[o]=n,l=(0,r.useRef)(o),i=(0,u.W)(t);return(0,r.useEffect)(()=>{l.current!==o&&(i(o),l.current=o)},[o,l,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,s=i?e:o,c=(0,u.W)(n);return[s,(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else l(t)},[i,e,l,c])]}},2790:function(e,t,n){"use strict";n.d(t,{b:function(){return u}});var r=n(6905);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},4757:function(e,t,n){"use strict";n.d(t,{T:function(){return l},f:function(){return i}});var r=n(3127),u=n(6905),o=n(5849);let l=(0,u.forwardRef)((e,t)=>(0,u.createElement)(o.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=l},3918:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,u=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,u="";if("string"==typeof t||"number"==typeof t)u+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(u&&(u+=" "),u+=r);else for(n in t)t[n]&&(u&&(u+=" "),u+=n)}return u}(e))&&(r&&(r+=" "),r+=t);return r},o=(e,t)=>n=>{var o;if((null==t?void 0:t.variants)==null)return u(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:i}=t,s=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],u=null==i?void 0:i[e];if(null===t)return null;let o=r(t)||r(u);return l[e][o]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return u(e,s,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:n,className:r,...u}=t;return Object.entries(u).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...c}[t]):({...i,...c})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);