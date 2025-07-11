(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ff={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function qx(){if(t_)return xo;t_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xo.Fragment=t,xo.jsx=i,xo.jsxs=i,xo}var e_;function Yx(){return e_||(e_=1,Ff.exports=qx()),Ff.exports}var lt=Yx(),Hf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function jx(){if(n_)return re;n_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,D={};function y(L,tt,xt){this.props=L,this.context=tt,this.refs=D,this.updater=xt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(L,tt,xt){this.props=L,this.context=tt,this.refs=D,this.updater=xt||M}var U=N.prototype=new _;U.constructor=N,b(U,y.prototype),U.isPureReactComponent=!0;var R=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function P(L,tt,xt,Mt,Q,gt){return xt=gt.ref,{$$typeof:o,type:L,key:tt,ref:xt!==void 0?xt:null,props:gt}}function H(L,tt){return P(L.type,tt,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function A(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return tt[xt]})}var G=/\/+/g;function st(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):tt.toString(36)}function ot(){}function dt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ot,ot):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ft(L,tt,xt,Mt,Q){var gt=typeof L;(gt==="undefined"||gt==="boolean")&&(L=null);var Et=!1;if(L===null)Et=!0;else switch(gt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(L.$$typeof){case o:case t:Et=!0;break;case g:return Et=L._init,ft(Et(L._payload),tt,xt,Mt,Q)}}if(Et)return Q=Q(L),Et=Mt===""?"."+st(L,0):Mt,R(Q)?(xt="",Et!=null&&(xt=Et.replace(G,"$&/")+"/"),ft(Q,tt,xt,"",function(oe){return oe})):Q!=null&&(C(Q)&&(Q=H(Q,xt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+Et)),tt.push(Q)),1;Et=0;var Rt=Mt===""?".":Mt+":";if(R(L))for(var Ct=0;Ct<L.length;Ct++)Mt=L[Ct],gt=Rt+st(Mt,Ct),Et+=ft(Mt,tt,xt,gt,Q);else if(Ct=x(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(Mt=L.next()).done;)Mt=Mt.value,gt=Rt+st(Mt,Ct++),Et+=ft(Mt,tt,xt,gt,Q);else if(gt==="object"){if(typeof L.then=="function")return ft(dt(L),tt,xt,Mt,Q);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Et}function F(L,tt,xt){if(L==null)return L;var Mt=[],Q=0;return ft(L,Mt,"","",function(gt){return tt.call(xt,gt,Q++)}),Mt}function j(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function St(){}return re.Children={map:F,forEach:function(L,tt,xt){F(L,function(){tt.apply(this,arguments)},xt)},count:function(L){var tt=0;return F(L,function(){tt++}),tt},toArray:function(L){return F(L,function(tt){return tt})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=N,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,tt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Mt=b({},L.props),Q=L.key,gt=void 0;if(tt!=null)for(Et in tt.ref!==void 0&&(gt=void 0),tt.key!==void 0&&(Q=""+tt.key),tt)!O.call(tt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&tt.ref===void 0||(Mt[Et]=tt[Et]);var Et=arguments.length-2;if(Et===1)Mt.children=xt;else if(1<Et){for(var Rt=Array(Et),Ct=0;Ct<Et;Ct++)Rt[Ct]=arguments[Ct+2];Mt.children=Rt}return P(L.type,Q,void 0,void 0,gt,Mt)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,tt,xt){var Mt,Q={},gt=null;if(tt!=null)for(Mt in tt.key!==void 0&&(gt=""+tt.key),tt)O.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Q[Mt]=tt[Mt]);var Et=arguments.length-2;if(Et===1)Q.children=xt;else if(1<Et){for(var Rt=Array(Et),Ct=0;Ct<Et;Ct++)Rt[Ct]=arguments[Ct+2];Q.children=Rt}if(L&&L.defaultProps)for(Mt in Et=L.defaultProps,Et)Q[Mt]===void 0&&(Q[Mt]=Et[Mt]);return P(L,gt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=C,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:j}},re.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},re.startTransition=function(L){var tt=B.T,xt={};B.T=xt;try{var Mt=L(),Q=B.S;Q!==null&&Q(xt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(St,q)}catch(gt){q(gt)}finally{B.T=tt}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(L){return B.H.use(L)},re.useActionState=function(L,tt,xt){return B.H.useActionState(L,tt,xt)},re.useCallback=function(L,tt){return B.H.useCallback(L,tt)},re.useContext=function(L){return B.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,tt){return B.H.useDeferredValue(L,tt)},re.useEffect=function(L,tt,xt){var Mt=B.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(L,tt)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(L,tt,xt){return B.H.useImperativeHandle(L,tt,xt)},re.useInsertionEffect=function(L,tt){return B.H.useInsertionEffect(L,tt)},re.useLayoutEffect=function(L,tt){return B.H.useLayoutEffect(L,tt)},re.useMemo=function(L,tt){return B.H.useMemo(L,tt)},re.useOptimistic=function(L,tt){return B.H.useOptimistic(L,tt)},re.useReducer=function(L,tt,xt){return B.H.useReducer(L,tt,xt)},re.useRef=function(L){return B.H.useRef(L)},re.useState=function(L){return B.H.useState(L)},re.useSyncExternalStore=function(L,tt,xt){return B.H.useSyncExternalStore(L,tt,xt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.1.0",re}var i_;function dd(){return i_||(i_=1,Hf.exports=jx()),Hf.exports}var vn=dd(),Gf={exports:{}},So={},Vf={exports:{}},kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function Zx(){return a_||(a_=1,function(o){function t(F,j){var q=F.length;F.push(j);t:for(;0<q;){var St=q-1>>>1,L=F[St];if(0<l(L,j))F[St]=j,F[q]=L,q=St;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var j=F[0],q=F.pop();if(q!==j){F[0]=q;t:for(var St=0,L=F.length,tt=L>>>1;St<tt;){var xt=2*(St+1)-1,Mt=F[xt],Q=xt+1,gt=F[Q];if(0>l(Mt,q))Q<L&&0>l(gt,Mt)?(F[St]=gt,F[Q]=q,St=Q):(F[St]=Mt,F[xt]=q,St=xt);else if(Q<L&&0>l(gt,q))F[St]=gt,F[Q]=q,St=Q;else break t}}return j}function l(F,j){var q=F.sortIndex-j.sortIndex;return q!==0?q:F.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,b=!1,D=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=F)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function B(F){if(D=!1,R(F),!b)if(i(m)!==null)b=!0,O||(O=!0,st());else{var j=i(p);j!==null&&ft(B,j.startTime-F)}}var O=!1,P=-1,H=5,C=-1;function A(){return y?!0:!(o.unstable_now()-C<H)}function G(){if(y=!1,O){var F=o.unstable_now();C=F;var j=!0;try{t:{b=!1,D&&(D=!1,N(P),P=-1),M=!0;var q=x;try{e:{for(R(F),v=i(m);v!==null&&!(v.expirationTime>F&&A());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var L=St(v.expirationTime<=F);if(F=o.unstable_now(),typeof L=="function"){v.callback=L,R(F),j=!0;break e}v===i(m)&&r(m),R(F)}else r(m);v=i(m)}if(v!==null)j=!0;else{var tt=i(p);tt!==null&&ft(B,tt.startTime-F),j=!1}}break t}finally{v=null,x=q,M=!1}j=void 0}}finally{j?st():O=!1}}}var st;if(typeof U=="function")st=function(){U(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=G,st=function(){dt.postMessage(null)}}else st=function(){_(G,0)};function ft(F,j){P=_(function(){F(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return F()}finally{x=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=x;x=F;try{return j()}finally{x=q}},o.unstable_scheduleCallback=function(F,j,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,F={id:g++,callback:j,priorityLevel:F,startTime:q,expirationTime:L,sortIndex:-1},q>St?(F.sortIndex=q,t(p,F),i(m)===null&&F===i(p)&&(D?(N(P),P=-1):D=!0,ft(B,q-St))):(F.sortIndex=L,t(m,F),b||M||(b=!0,O||(O=!0,st()))),F},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(F){var j=x;return function(){var q=x;x=j;try{return F.apply(this,arguments)}finally{x=q}}}}(kf)),kf}var r_;function Kx(){return r_||(r_=1,Vf.exports=Zx()),Vf.exports}var Xf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function Qx(){if(s_)return Rn;s_=1;var o=dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var o_;function Jx(){if(o_)return Xf.exports;o_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xf.exports=Qx(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function $x(){if(l_)return So;l_=1;var o=Kx(),t=dd(),i=Jx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case D:return"StrictMode";case B:return"Suspense";case O:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ft=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],L=-1;function tt(e){return{current:e}}function xt(e){0>L||(e.current=St[L],St[L]=null,L--)}function Mt(e,n){L++,St[L]=e.current,e.current=n}var Q=tt(null),gt=tt(null),Et=tt(null),Rt=tt(null);function Ct(e,n){switch(Mt(Et,n),Mt(gt,e),Mt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wg(n),e=Cg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),Mt(Q,e)}function oe(){xt(Q),xt(gt),xt(Et)}function Qt(e){e.memoizedState!==null&&Mt(Rt,e);var n=Q.current,a=Cg(n,e.type);n!==a&&(Mt(gt,e),Mt(Q,a))}function Le(e){gt.current===e&&(xt(Q),xt(gt)),Rt.current===e&&(xt(Rt),po._currentValue=q)}var Fe=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,V=o.unstable_cancelCallback,xn=o.unstable_shouldYield,ye=o.unstable_requestPaint,de=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,z=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof E=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var yt=256,zt=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=qt(s):(S&=T,S!==0?c=qt(S):a||(a=T&~e,a!==0&&(c=qt(a))))):(T=s&~f,T!==0?c=qt(T):S!==0?c=qt(S):a||(a=s&~e,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),e}function Nt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Pt(a),_t=1<<ut;T[ut]=0,I[ut]=-1;var nt=J[ut];if(nt!==null)for(J[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~_t}s!==0&&vt(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function Xn(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,Sn="__reactProps$"+fn,Pn="__reactContainer$"+fn,ka="__reactEvents$"+fn,Ho="__reactListeners$"+fn,Go="__reactHandles$"+fn,Xa="__reactResources$"+fn,sa="__reactMarker$"+fn;function oa(e){delete e[rn],delete e[Sn],delete e[ka],delete e[Ho],delete e[Go]}function Ci(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[rn])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[rn]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Wa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function la(e){var n=e[Xa];return n||(n=e[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[sa]=!0}var Vo=new Set,ko={};function Ui(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(ko[e]=n,e=0;e<n.length;e++)Vo.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Z(e){return Fe.call(rt,e)?!0:Fe.call(at,e)?!1:Y.test(e)?rt[e]=!0:(at[e]=!0,!1)}function bt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var It,te;function Kt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+te}var Xt=!1;function le(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var I=S.split(`
`),J=T.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===J.length)for(s=I.length-1,c=J.length-1;1<=s&&0<=c&&I[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==J[c]){var ut=`
`+I[s].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=s&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Kt("Activity");default:return""}}function Xe(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=we(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){e._valueTracker||(e._valueTracker=Zt(e))}function ve(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=we(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function hn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ca=/[\n"\\]/g;function Ve(e){return e.replace(ca,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(e,n,a,s,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,fe(n)):a!=null?bn(e,S,fe(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function He(e,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function bn(e,n,a){n==="number"&&hn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function dn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function yn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function yi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Li.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Cd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&wd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&wd(e,f,n[f])}function Bc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return W0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ic=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,Er=null;function Dd(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ni(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Sn]||null;if(!c)throw Error(r(90));Ni(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&ve(s)}break t;case"textarea":dn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var Hc=!1;function Ud(e,n,a){if(Hc)return e(n,a);Hc=!0;try{var s=e(n);return s}finally{if(Hc=!1,(Mr!==null||Er!==null)&&(Cl(),Mr&&(n=Mr,e=Er,Er=Mr=null,Dd(n),e)))for(n=0;n<e.length;n++)Dd(e[n])}}function As(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Sn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Oi)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Gc=!1}var ua=null,Vc=null,Wo=null;function Nd(){if(Wo)return Wo;var e,n=Vc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Wo=c.slice(e,1<s?1-s:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Ld(){return!1}function zn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Ld,this.isPropagationStopped=Ld,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=zn(qa),ws=g({},qa,{view:0,detail:0}),q0=zn(ws),kc,Xc,Cs,Zo=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cs&&(Cs&&e.type==="mousemove"?(kc=e.screenX-Cs.screenX,Xc=e.screenY-Cs.screenY):Xc=kc=0,Cs=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:Xc}}),Od=zn(Zo),Y0=g({},Zo,{dataTransfer:0}),j0=zn(Y0),Z0=g({},ws,{relatedTarget:0}),Wc=zn(Z0),K0=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=zn(K0),J0=g({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=zn(J0),tv=g({},qa,{data:0}),Pd=zn(tv),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iv[e])?!!n[e]:!1}function qc(){return av}var rv=g({},ws,{key:function(e){if(e.key){var n=ev[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=zn(rv),ov=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=zn(ov),lv=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),cv=zn(lv),uv=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=zn(uv),hv=g({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dv=zn(hv),pv=g({},qa,{newState:0,oldState:0}),mv=zn(pv),gv=[9,13,27,32],Yc=Oi&&"CompositionEvent"in window,Ds=null;Oi&&"documentMode"in document&&(Ds=document.documentMode);var _v=Oi&&"TextEvent"in window&&!Ds,Bd=Oi&&(!Yc||Ds&&8<Ds&&11>=Ds),Id=" ",Fd=!1;function Hd(e,n){switch(e){case"keyup":return gv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function vv(e,n){switch(e){case"compositionend":return Gd(n);case"keypress":return n.which!==32?null:(Fd=!0,Id);case"textInput":return e=n.data,e===Id&&Fd?null:e;default:return null}}function xv(e,n){if(Tr)return e==="compositionend"||!Yc&&Hd(e,n)?(e=Nd(),Wo=Vc=ua=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bd&&n.locale!=="ko"?null:n.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sv[e.type]:n==="textarea"}function kd(e,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=Pl(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Us=null,Ns=null;function yv(e){Eg(e,0)}function Ko(e){var n=Wa(e);if(ve(n))return e}function Xd(e,n){if(e==="change")return n}var Wd=!1;if(Oi){var jc;if(Oi){var Zc="oninput"in document;if(!Zc){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),Zc=typeof qd.oninput=="function"}jc=Zc}else jc=!1;Wd=jc&&(!document.documentMode||9<document.documentMode)}function Yd(){Us&&(Us.detachEvent("onpropertychange",jd),Ns=Us=null)}function jd(e){if(e.propertyName==="value"&&Ko(Ns)){var n=[];kd(n,Ns,e,Fc(e)),Ud(yv,n)}}function Mv(e,n,a){e==="focusin"?(Yd(),Us=n,Ns=a,Us.attachEvent("onpropertychange",jd)):e==="focusout"&&Yd()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Ns)}function Tv(e,n){if(e==="click")return Ko(n)}function bv(e,n){if(e==="input"||e==="change")return Ko(n)}function Av(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Av;function Ls(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Fe.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,n){var a=Zd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zd(a)}}function Qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=hn(e.document)}return n}function Kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Rv=Oi&&"documentMode"in document&&11>=document.documentMode,br=null,Qc=null,Os=null,Jc=!1;function $d(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||br==null||br!==hn(s)||(s=br,"selectionStart"in s&&Kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Os&&Ls(Os,s)||(Os=s,s=Pl(Qc,"onSelect"),0<s.length&&(n=new jo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=br)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},$c={},tp={};Oi&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function ja(e){if($c[e])return $c[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in tp)return $c[e]=n[a];return e}var ep=ja("animationend"),np=ja("animationiteration"),ip=ja("animationstart"),wv=ja("transitionrun"),Cv=ja("transitionstart"),Dv=ja("transitioncancel"),ap=ja("transitionend"),rp=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function ui(e,n){rp.set(e,n),Ui(n,[e])}var sp=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=sp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},sp.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var ni=[],Rr=0,eu=0;function Qo(){for(var e=Rr,n=eu=Rr=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&op(a,c,f)}}function Jo(e,n,a,s){ni[Rr++]=e,ni[Rr++]=n,ni[Rr++]=a,ni[Rr++]=s,eu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function nu(e,n,a,s){return Jo(e,n,a,s),$o(e)}function wr(e,n){return Jo(e,null,null,n),$o(e)}function op(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(e){if(50<ro)throw ro=0,cf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={};function Uv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new Uv(e,n,a,s)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")iu(e)&&(S=1);else if(typeof e=="string")S=Lx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=qn(31,a,n,c),e.elementType=C,e.lanes=f,e;case b:return Za(a.children,c,f,n);case D:S=8,c|=24;break;case y:return e=qn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case B:return e=qn(13,a,n,c),e.elementType=B,e.lanes=f,e;case O:return e=qn(19,a,n,c),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:S=10;break t;case N:S=9;break t;case R:S=11;break t;case P:S=14;break t;case H:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Za(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function au(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function ru(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dr=[],Ur=0,el=null,nl=0,ii=[],ai=0,Ka=null,zi=1,Bi="";function Qa(e,n){Dr[Ur++]=nl,Dr[Ur++]=el,el=e,nl=n}function cp(e,n,a){ii[ai++]=zi,ii[ai++]=Bi,ii[ai++]=Ka,Ka=e;var s=zi;e=Bi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,zi=1<<32-Pt(n)+c|a<<c|s,Bi=f+e}else zi=1<<f|a<<c|s,Bi=e}function su(e){e.return!==null&&(Qa(e,1),cp(e,1,0))}function ou(e){for(;e===el;)el=Dr[--Ur],Dr[Ur]=null,nl=Dr[--Ur],Dr[Ur]=null;for(;e===Ka;)Ka=ii[--ai],ii[ai]=null,Bi=ii[--ai],ii[ai]=null,zi=ii[--ai],ii[ai]=null}var Dn=null,Ye=null,Ae=!1,Ja=null,Mi=!1,lu=Error(r(519));function $a(e){var n=Error(r(418,""));throw Bs(ei(n,e)),lu}function up(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[Sn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)me(oo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Oe(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yn(n,s.value,s.defaultValue,s.children),Oe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rg(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=zl),n=!0):n=!1,n||$a(e)}function fp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function Ps(e){if(e!==Dn)return!1;if(!Ae)return fp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bf(e.type,e.memoizedProps)),a=!a),a&&Ye&&$a(e),fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ye=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ye=null}}else n===27?(n=Ye,Aa(e.type)?(e=Cf,Cf=null,Ye=e):Ye=n):Ye=Dn?hi(e.stateNode.nextSibling):null;return!0}function zs(){Ye=Dn=null,Ae=!1}function hp(){var e=Ja;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),Ja=null),e}function Bs(e){Ja===null?Ja=[e]:Ja.push(e)}var cu=tt(null),tr=null,Ii=null;function fa(e,n,a){Mt(cu,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=cu.current,xt(cu)}function uu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function fu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),uu(f.return,a,e),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),uu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Is(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Wn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===Rt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(po):e=[po])}c=c.return}e!==null&&fu(n,e,a,s),n.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){tr=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return dp(tr,e)}function al(e,n){return tr===null&&er(e),dp(e,n)}function dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var Nv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Lv=o.unstable_scheduleCallback,Ov=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new Nv,data:new Map,refCount:0}}function Fs(e){e.refCount--,e.refCount===0&&Lv(Ov,function(){e.controller.abort()})}var Hs=null,du=0,Nr=0,Lr=null;function Pv(e,n){if(Hs===null){var a=Hs=[];du=0,Nr=gf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(pp,pp),n}function pp(){if(--du===0&&Hs!==null){Lr!==null&&(Lr.status="fulfilled");var e=Hs;Hs=null,Nr=0,Lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var mp=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pv(e,n),mp!==null&&mp(e,n)};var nr=tt(null);function pu(){var e=nr.current;return e!==null?e:ke.pooledCache}function rl(e,n){n===null?Mt(nr,nr.current):Mt(nr,n.pool)}function gp(){var e=pu();return e===null?null:{parent:on._currentValue,pool:e}}var Gs=Error(r(460)),_p=Error(r(474)),sl=Error(r(542)),mu={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ol(){}function xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ol,ol),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yp(e),e;default:if(typeof n.status=="string")n.then(ol,ol);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yp(e),e}throw Vs=n,Gs}}var Vs=null;function Sp(){if(Vs===null)throw Error(r(459));var e=Vs;return Vs=null,e}function yp(e){if(e===Gs||e===sl)throw Error(r(483))}var ha=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(e),op(e,null,a),n}return Jo(e,s,n,a),$o(e)}function ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ft(e,a)}}function vu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xu=!1;function Xs(){if(xu){var e=Lr;if(e!==null)throw e}}function Ws(e,n,a,s){xu=!1;var c=e.updateQueue;ha=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,J=I.next;I.next=null,S===null?f=J:S.next=J,S=I;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==S&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=I))}if(f!==null){var _t=c.baseState;S=0,ut=J=I=null,T=f;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(Se&nt)===nt:(s&nt)===nt){nt!==0&&nt===Nr&&(xu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=e,Jt=T;nt=n;var Be=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){_t=ee.call(Be,_t,nt);break t}_t=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(Be,_t,nt):ee,nt==null)break t;_t=g({},_t,nt);break t;case 2:ha=!0}}nt=T.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=it,I=_t):ut=ut.next=it,S|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(I=_t),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=_t}}function Mp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ep(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mp(a[e],n)}var Or=tt(null),ll=tt(0);function Tp(e,n){e=qi,Mt(ll,e),Mt(Or,n),qi=e|n.baseLanes}function Su(){Mt(ll,qi),Mt(Or,Or.current)}function yu(){qi=ll.current,xt(Or),xt(ll)}var ma=0,ue=null,Pe=null,en=null,cl=!1,Pr=!1,ir=!1,ul=0,qs=0,zr=null,Bv=0;function Qe(){throw Error(r(321))}function Mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Eu(e,n,a,s,c,f){return ma=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?om:lm,ir=!1,f=a(s,c),ir=!1,Pr&&(f=Ap(n,a,s,c)),bp(e),f}function bp(e){F.H=gl;var n=Pe!==null&&Pe.next!==null;if(ma=0,en=Pe=ue=null,cl=!1,qs=0,zr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&il(e)&&(pn=!0))}function Ap(e,n,a,s){ue=e;var c=0;do{if(Pr&&(zr=null),qs=0,Pr=!1,25<=c)throw Error(r(301));if(c+=1,en=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Xv,f=n(a,s)}while(Pr);return f}function Iv(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Ys(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Tu(){var e=ul!==0;return ul=0,e}function bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Au(e){if(cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cl=!1}ma=0,en=Pe=ue=null,Pr=!1,qs=ul=0,zr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(Pe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Pe=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(e){var n=qs;return qs+=1,zr===null&&(zr=[]),e=xp(zr,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?om:lm),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ys(e);if(e.$$typeof===U)return An(e)}throw Error(r(438,String(e)))}function wu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ru(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=A;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function hl(e){var n=nn();return Cu(n,Pe,e)}function Cu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,I=null,J=n,ut=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(Se&_t)===_t:(ma&_t)===_t){var nt=J.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Nr&&(ut=!0);else if((ma&nt)===nt){J=J.next,nt===Nr&&(ut=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(T=I=_t,S=f):I=I.next=_t,ue.lanes|=nt,Ma|=nt;_t=J.action,ir&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else nt={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(T=I=nt,S=f):I=I.next=nt,ue.lanes|=_t,Ma|=_t;J=J.next}while(J!==null&&J!==n);if(I===null?S=f:I.next=T,!Wn(f,e.memoizedState)&&(pn=!0,ut&&(a=Lr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Du(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Wn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Rp(e,n,a){var s=ue,c=nn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((Pe||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var T=Dp.bind(null,s,c,e);if(js(2048,8,T,[e]),c.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Br(9,dl(),Cp.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(ma&124)!==0||wp(s,n,a)}return a}function wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Ru(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Cp(e,n,a,s){n.value=a,n.getSnapshot=s,Up(n)&&Np(e)}function Dp(e,n,a){return a(function(){Up(n)&&Np(e)})}function Up(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Np(e){var n=wr(e,2);n!==null&&Qn(n,e,2)}function Uu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),ir){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Lp(e,n,a,s){return e.baseState=a,Cu(e,Pe,typeof s=="function"?s:Hi)}function Fv(e,n,a,s,c){if(ml(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var T=a(c,s),I=F.S;I!==null&&I(S,T),Pp(e,n,T)}catch(J){Nu(e,n,J)}finally{F.T=f}}else try{f=a(c,s),Pp(e,n,f)}catch(J){Nu(e,n,J)}}function Pp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zp(e,n,s)},function(s){return Nu(e,n,s)}):zp(e,n,a)}function zp(e,n,a){n.status="fulfilled",n.value=a,Bp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Op(e,a)))}function Nu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Bp(n),n=n.next;while(n!==s)}e.action=null}function Bp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ip(e,n){return n}function Fp(e,n){if(Ae){var a=ke.formState;if(a!==null){t:{var s=ue;if(Ae){if(Ye){e:{for(var c=Ye,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=hi(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=s,a=am.bind(null,ue,s),s.dispatch=a,s=Uu(!1),f=Bu.bind(null,ue,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Fv.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Hp(e){var n=nn();return Gp(n,Pe,e)}function Gp(e,n,a){if(n=Cu(e,n,Ip)[0],e=hl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ys(n)}catch(S){throw S===Gs?sl:S}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Br(9,dl(),Hv.bind(null,c,a),null)),[s,f,e]}function Hv(e,n){e.action=n}function Vp(e){var n=nn(),a=Pe;if(a!==null)return Gp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Br(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Ru(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function dl(){return{destroy:void 0,resource:void 0}}function kp(){return nn().memoizedState}function pl(e,n,a,s){var c=Bn();s=s===void 0?null:s,ue.flags|=e,c.memoizedState=Br(1|n,dl(),a,s)}function js(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Pe!==null&&s!==null&&Mu(s,Pe.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(ue.flags|=e,c.memoizedState=Br(1|n,f,a,s))}function Xp(e,n){pl(8390656,8,e,n)}function Wp(e,n){js(2048,8,e,n)}function qp(e,n){return js(4,2,e,n)}function Yp(e,n){return js(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zp(e,n,a){a=a!=null?a.concat([e]):null,js(4,4,jp.bind(null,n,e),a)}function Lu(){}function Kp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=e(),ir){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[s,n],s}function Ou(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=tg(),ue.lanes|=e,Ma|=e,a)}function Jp(e,n,a,s){return Wn(a,n)?a:Or.current!==null?(e=Ou(e,a,s),Wn(e,n)||(pn=!0),e):(ma&42)===0?(pn=!0,e.memoizedState=a):(e=tg(),ue.lanes|=e,Ma|=e,n)}function $p(e,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var S=F.T,T={};F.T=T,Bu(e,!1,n,a);try{var I=c(),J=F.S;if(J!==null&&J(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=zv(I,s);Zs(e,n,ut,Kn(e))}else Zs(e,n,s,Kn(e))}catch(_t){Zs(e,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{j.p=f,F.T=S}}function Gv(){}function Pu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=tm(e).queue;$p(e,c,n,q,a===null?Gv:function(){return em(e),a(s)})}function tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=tm(e).next.queue;Zs(e,n,{},Kn())}function zu(){return An(po)}function nm(){return nn().memoizedState}function im(){return nn().memoizedState}function Vv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=da(a);var s=pa(n,e,a);s!==null&&(Qn(s,n,a),ks(s,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function kv(e,n,a){var s=Kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ml(e)?rm(n,a):(a=nu(e,n,a,s),a!==null&&(Qn(a,e,s),sm(a,n,s)))}function am(e,n,a){var s=Kn();Zs(e,n,a,s)}function Zs(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(e))rm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,S))return Jo(e,n,c,0),ke===null&&Qo(),!1}catch{}finally{}if(a=nu(e,n,c,s),a!==null)return Qn(a,e,s),sm(a,n,s),!0}return!1}function Bu(e,n,a,s){if(s={lane:2,revertLane:gf(),action:s,hasEagerState:!1,eagerState:null,next:null},ml(e)){if(n)throw Error(r(479))}else n=nu(e,a,s,2),n!==null&&Qn(n,e,2)}function ml(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function rm(e,n){Pr=cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function sm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ft(e,a)}}var gl={readContext:An,use:fl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},om={readContext:An,use:fl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Xp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,pl(4194308,4,jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return pl(4194308,4,e,n)},useInsertionEffect:function(e,n){pl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var s=e();if(ir){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(ir){ct(!0);try{a(n)}finally{ct(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=kv.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uu(e);var n=e.queue,a=am.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(e,n){var a=Bn();return Ou(a,e,n)},useTransition:function(){var e=Uu(!1);return e=$p.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ue,c=Bn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||wp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Xp(Dp.bind(null,s,f,e),[e]),s.flags|=2048,Br(9,dl(),Cp.bind(null,s,f,a,n),null),a},useId:function(){var e=Bn(),n=ke.identifierPrefix;if(Ae){var a=Bi,s=zi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Bv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:zu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:wu,useCacheRefresh:function(){return Bn().memoizedState=Vv.bind(null,ue)}},lm={readContext:An,use:fl,useCallback:Kp,useContext:An,useEffect:Wp,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:hl,useRef:kp,useState:function(){return hl(Hi)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=nn();return Jp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=hl(Hi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:zu,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var a=nn();return Lp(a,Pe,e,n)},useMemoCache:wu,useCacheRefresh:im},Xv={readContext:An,use:fl,useCallback:Kp,useContext:An,useEffect:Wp,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Du,useRef:kp,useState:function(){return Du(Hi)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=nn();return Pe===null?Ou(a,e,n):Jp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Du(Hi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:zu,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,n){var a=nn();return Pe!==null?Lp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:im},Ir=null,Ks=0;function _l(e){var n=Ks;return Ks+=1,Ir===null&&(Ir=[]),xp(Ir,e,n)}function Qs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cm(e){var n=e._init;return n(e._payload)}function um(e){function n(W,k){if(e){var K=W.deletions;K===null?(W.deletions=[k],W.flags|=16):K.push(k)}}function a(W,k){if(!e)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function s(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function c(W,k){return W=Pi(W,k),W.index=0,W.sibling=null,W}function f(W,k,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<k?(W.flags|=67108866,k):K):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function S(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,k,K,pt){return k===null||k.tag!==6?(k=au(K,W.mode,pt),k.return=W,k):(k=c(k,K),k.return=W,k)}function I(W,k,K,pt){var Ht=K.type;return Ht===b?ut(W,k,K.props.children,pt,K.key):k!==null&&(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&cm(Ht)===k.type)?(k=c(k,K.props),Qs(k,K),k.return=W,k):(k=tl(K.type,K.key,K.props,null,W.mode,pt),Qs(k,K),k.return=W,k)}function J(W,k,K,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==K.containerInfo||k.stateNode.implementation!==K.implementation?(k=ru(K,W.mode,pt),k.return=W,k):(k=c(k,K.children||[]),k.return=W,k)}function ut(W,k,K,pt,Ht){return k===null||k.tag!==7?(k=Za(K,W.mode,pt,Ht),k.return=W,k):(k=c(k,K),k.return=W,k)}function _t(W,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=au(""+k,W.mode,K),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return K=tl(k.type,k.key,k.props,null,W.mode,K),Qs(K,k),K.return=W,K;case M:return k=ru(k,W.mode,K),k.return=W,k;case H:var pt=k._init;return k=pt(k._payload),_t(W,k,K)}if(ft(k)||st(k))return k=Za(k,W.mode,K,null),k.return=W,k;if(typeof k.then=="function")return _t(W,_l(k),K);if(k.$$typeof===U)return _t(W,al(W,k),K);vl(W,k)}return null}function nt(W,k,K,pt){var Ht=k!==null?k.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:T(W,k,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ht?I(W,k,K,pt):null;case M:return K.key===Ht?J(W,k,K,pt):null;case H:return Ht=K._init,K=Ht(K._payload),nt(W,k,K,pt)}if(ft(K)||st(K))return Ht!==null?null:ut(W,k,K,pt,null);if(typeof K.then=="function")return nt(W,k,_l(K),pt);if(K.$$typeof===U)return nt(W,k,al(W,K),pt);vl(W,K)}return null}function it(W,k,K,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get(K)||null,T(k,W,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return W=W.get(pt.key===null?K:pt.key)||null,I(k,W,pt,Ht);case M:return W=W.get(pt.key===null?K:pt.key)||null,J(k,W,pt,Ht);case H:var he=pt._init;return pt=he(pt._payload),it(W,k,K,pt,Ht)}if(ft(pt)||st(pt))return W=W.get(K)||null,ut(k,W,pt,Ht,null);if(typeof pt.then=="function")return it(W,k,K,_l(pt),Ht);if(pt.$$typeof===U)return it(W,k,K,al(k,pt),Ht);vl(k,pt)}return null}function ee(W,k,K,pt){for(var Ht=null,he=null,Wt=k,$t=k=0,gn=null;Wt!==null&&$t<K.length;$t++){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ee=nt(W,Wt,K[$t],pt);if(Ee===null){Wt===null&&(Wt=gn);break}e&&Wt&&Ee.alternate===null&&n(W,Wt),k=f(Ee,k,$t),he===null?Ht=Ee:he.sibling=Ee,he=Ee,Wt=gn}if($t===K.length)return a(W,Wt),Ae&&Qa(W,$t),Ht;if(Wt===null){for(;$t<K.length;$t++)Wt=_t(W,K[$t],pt),Wt!==null&&(k=f(Wt,k,$t),he===null?Ht=Wt:he.sibling=Wt,he=Wt);return Ae&&Qa(W,$t),Ht}for(Wt=s(Wt);$t<K.length;$t++)gn=it(Wt,W,$t,K[$t],pt),gn!==null&&(e&&gn.alternate!==null&&Wt.delete(gn.key===null?$t:gn.key),k=f(gn,k,$t),he===null?Ht=gn:he.sibling=gn,he=gn);return e&&Wt.forEach(function(Ua){return n(W,Ua)}),Ae&&Qa(W,$t),Ht}function Jt(W,k,K,pt){if(K==null)throw Error(r(151));for(var Ht=null,he=null,Wt=k,$t=k=0,gn=null,Ee=K.next();Wt!==null&&!Ee.done;$t++,Ee=K.next()){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ua=nt(W,Wt,Ee.value,pt);if(Ua===null){Wt===null&&(Wt=gn);break}e&&Wt&&Ua.alternate===null&&n(W,Wt),k=f(Ua,k,$t),he===null?Ht=Ua:he.sibling=Ua,he=Ua,Wt=gn}if(Ee.done)return a(W,Wt),Ae&&Qa(W,$t),Ht;if(Wt===null){for(;!Ee.done;$t++,Ee=K.next())Ee=_t(W,Ee.value,pt),Ee!==null&&(k=f(Ee,k,$t),he===null?Ht=Ee:he.sibling=Ee,he=Ee);return Ae&&Qa(W,$t),Ht}for(Wt=s(Wt);!Ee.done;$t++,Ee=K.next())Ee=it(Wt,W,$t,Ee.value,pt),Ee!==null&&(e&&Ee.alternate!==null&&Wt.delete(Ee.key===null?$t:Ee.key),k=f(Ee,k,$t),he===null?Ht=Ee:he.sibling=Ee,he=Ee);return e&&Wt.forEach(function(Wx){return n(W,Wx)}),Ae&&Qa(W,$t),Ht}function Be(W,k,K,pt){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ht=K.key;k!==null;){if(k.key===Ht){if(Ht=K.type,Ht===b){if(k.tag===7){a(W,k.sibling),pt=c(k,K.props.children),pt.return=W,W=pt;break t}}else if(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&cm(Ht)===k.type){a(W,k.sibling),pt=c(k,K.props),Qs(pt,K),pt.return=W,W=pt;break t}a(W,k);break}else n(W,k);k=k.sibling}K.type===b?(pt=Za(K.props.children,W.mode,pt,K.key),pt.return=W,W=pt):(pt=tl(K.type,K.key,K.props,null,W.mode,pt),Qs(pt,K),pt.return=W,W=pt)}return S(W);case M:t:{for(Ht=K.key;k!==null;){if(k.key===Ht)if(k.tag===4&&k.stateNode.containerInfo===K.containerInfo&&k.stateNode.implementation===K.implementation){a(W,k.sibling),pt=c(k,K.children||[]),pt.return=W,W=pt;break t}else{a(W,k);break}else n(W,k);k=k.sibling}pt=ru(K,W.mode,pt),pt.return=W,W=pt}return S(W);case H:return Ht=K._init,K=Ht(K._payload),Be(W,k,K,pt)}if(ft(K))return ee(W,k,K,pt);if(st(K)){if(Ht=st(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Jt(W,k,K,pt)}if(typeof K.then=="function")return Be(W,k,_l(K),pt);if(K.$$typeof===U)return Be(W,k,al(W,K),pt);vl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,k!==null&&k.tag===6?(a(W,k.sibling),pt=c(k,K),pt.return=W,W=pt):(a(W,k),pt=au(K,W.mode,pt),pt.return=W,W=pt),S(W)):a(W,k)}return function(W,k,K,pt){try{Ks=0;var Ht=Be(W,k,K,pt);return Ir=null,Ht}catch(Wt){if(Wt===Gs||Wt===sl)throw Wt;var he=qn(29,Wt,null,W.mode);return he.lanes=pt,he.return=W,he}finally{}}}var Fr=um(!0),fm=um(!1),ri=tt(null),Ei=null;function ga(e){var n=e.alternate;Mt(ln,ln.current&1),Mt(ri,e),Ei===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(Ei=e)}function hm(e){if(e.tag===22){if(Mt(ln,ln.current),Mt(ri,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else _a()}function _a(){Mt(ln,ln.current),Mt(ri,ri.current)}function Gi(e){xt(ri),Ei===e&&(Ei=null),xt(ln)}var ln=tt(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Kn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&(Qn(n,e,s),ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Kn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&(Qn(n,e,s),ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&(Qn(n,e,a),ks(n,e,a))}};function dm(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(c,f):!0}function pm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Fu.enqueueReplaceState(n,n.state,null)}function ar(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mm(e){Sl(e)}function gm(e){console.error(e)}function _m(e){Sl(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function vm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(e,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function xm(e){return e=da(e),e.tag=3,e}function Sm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){vm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){vm(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Wv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ei===null?ff():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===mu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),df(e,s,c)),!1;case 22:return a.flags|=65536,s===mu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),df(e,s,c)),!1}throw Error(r(435,a.tag))}return df(e,s,c),ff(),!1}if(Ae)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==lu&&(e=Error(r(422),{cause:s}),Bs(ei(e,a)))):(s!==lu&&(n=Error(r(423),{cause:s}),Bs(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ei(s,a),c=Hu(e.stateNode,s,c),vu(e,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),ao===null?ao=[f]:ao.push(f),je!==4&&(je=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Hu(a.stateNode,s,e),vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xm(c),Sm(c,e,a,s),vu(a,c),!1}a=a.return}while(a!==null);return!1}var ym=Error(r(461)),pn=!1;function Mn(e,n,a,s){n.child=e===null?fm(n,null,a,s):Fr(n,e.child,a,s)}function Mm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return er(n),s=Eu(e,n,a,S,f,c),T=Tu(),e!==null&&!pn?(bu(e,n,c),Vi(e,n,c)):(Ae&&T&&su(n),n.flags|=1,Mn(e,n,s,c),n.child)}function Em(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tm(e,n,f,s,c)):(e=tl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ju(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(S,s)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Pi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Tm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ls(f,s)&&e.ref===n.ref)if(pn=!1,n.pendingProps=s=f,ju(e,c))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return Gu(e,n,a,s,c)}function bm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Am(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,f!==null?f.cachePool:null),f!==null?Tp(n,f):Su(),hm(n);else return n.lanes=n.childLanes=536870912,Am(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(rl(n,f.cachePool),Tp(n,f),_a(),n.memoizedState=null):(e!==null&&rl(n,null),Su(),_a());return Mn(e,n,c,a),n.child}function Am(e,n,a,s){var c=pu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&rl(n,null),Su(),hm(n),e!==null&&Is(e,n,s,!0),null}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Gu(e,n,a,s,c){return er(n),a=Eu(e,n,a,s,void 0,c),s=Tu(),e!==null&&!pn?(bu(e,n,c),Vi(e,n,c)):(Ae&&s&&su(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Rm(e,n,a,s,c,f){return er(n),n.updateQueue=null,a=Ap(n,s,a,c),bp(e),s=Tu(),e!==null&&!pn?(bu(e,n,f),Vi(e,n,f)):(Ae&&s&&su(n),n.flags|=1,Mn(e,n,a,f),n.child)}function wm(e,n,a,s,c){if(er(n),n.stateNode===null){var f=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Cr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Iu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Ws(n,s,f,c),Xs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=ar(a,T);f.props=I;var J=f.context,ut=a.contextType;S=Cr,typeof ut=="object"&&ut!==null&&(S=An(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&pm(n,f,s,S),ha=!1;var nt=n.memoizedState;f.state=nt,Ws(n,s,f,c),Xs(),J=n.memoizedState,T||nt!==J||ha?(typeof _t=="function"&&(Iu(n,a,_t,s),J=n.memoizedState),(I=ha||dm(n,a,I,s,nt,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(e,n),S=n.memoizedProps,ut=ar(a,S),f.props=ut,_t=n.pendingProps,nt=f.context,J=a.contextType,I=Cr,typeof J=="object"&&J!==null&&(I=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||nt!==I)&&pm(n,f,s,I),ha=!1,nt=n.memoizedState,f.state=nt,Ws(n,s,f,c),Xs();var it=n.memoizedState;S!==_t||nt!==it||ha||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof T=="function"&&(Iu(n,a,T,s),it=n.memoizedState),(ut=ha||dm(n,a,ut,s,nt,it,I)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=I,s=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Fr(n,e.child,null,c),n.child=Fr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Vi(e,n,c),e}function Cm(e,n,a,s){return zs(),n.flags|=256,Mn(e,n,a,s),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:gp()}}function Xu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Dm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?ga(n):_a(),Ae){var T=Ye,I;if(I=T){t:{for(I=T,T=Mi;I.nodeType!==8;){if(!T){T=null;break t}if(I=hi(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ka!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},I=qn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Dn=n,Ye=null,I=!0):I=!1}I||$a(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return wf(T)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return T=s.children,s=s.fallback,c?(_a(),c=n.mode,T=El({mode:"hidden",children:T},c),s=Za(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=ku(a),c.childLanes=Xu(e,S,a),n.memoizedState=Vu,s):(ga(n),Wu(n,T))}if(I=e.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=qu(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),c=s.fallback,T=n.mode,s=El({mode:"visible",children:s.children},T),c=Za(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Fr(n,e.child,null,a),s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(e,S,a),n.memoizedState=Vu,n=c);else if(ga(n),wf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Bs({value:s,source:null,stack:null}),n=qu(e,n,a)}else if(pn||Is(e,n,a,!1),S=(a&e.childLanes)!==0,pn||S){if(S=ke,S!==null&&(s=a&-a,s=(s&42)!==0?1:ne(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==I.retryLane))throw I.retryLane=s,wr(e,s),Qn(S,e,s),ym;T.data==="$?"||ff(),n=qu(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ye=hi(T.nextSibling),Dn=n,Ae=!0,Ja=null,Mi=!1,e!==null&&(ii[ai++]=zi,ii[ai++]=Bi,ii[ai++]=Ka,zi=e.id,Bi=e.overflow,Ka=n),n=Wu(n,s.children),n.flags|=4096);return n}return c?(_a(),c=s.fallback,T=n.mode,I=e.child,J=I.sibling,s=Pi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,J!==null?c=Pi(J,c):(c=Za(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=ku(a):(I=T.cachePool,I!==null?(J=on._currentValue,I=I.parent!==J?{parent:J,pool:J}:I):I=gp(),T={baseLanes:T.baseLanes|a,cachePool:I}),c.memoizedState=T,c.childLanes=Xu(e,S,a),n.memoizedState=Vu,s):(ga(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Wu(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function qu(e,n,a){return Fr(n,e.child,null,a),e=Wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Um(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),uu(e.return,n,a)}function Yu(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Nm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Mn(e,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,a,n);else if(e.tag===19)Um(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Mt(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&xl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Yu(n,!0,a,null,f);break;case"together":Yu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function qv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),fa(n,on,e.memoizedState.cache),zs();break;case 27:case 5:Qt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dm(e,n,a):(ga(n),e=Vi(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Is(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Nm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,bm(e,n,a);case 24:fa(n,on,e.memoizedState.cache)}return Vi(e,n,a)}function Lm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!ju(e,a)&&(n.flags&128)===0)return pn=!1,qv(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&cp(n,nl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")iu(s)?(e=ar(s,e),n.tag=1,n=wm(null,n,s,e,a)):(n.tag=0,n=Gu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===R){n.tag=11,n=Mm(null,n,s,e,a);break t}else if(c===P){n.tag=14,n=Em(null,n,s,e,a);break t}}throw n=dt(s)||s,Error(r(306,n,""))}}return n;case 0:return Gu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),wm(e,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(e,n),Ws(n,s,null,a);var S=n.memoizedState;if(s=S.cache,fa(n,on,s),s!==f.cache&&fu(n,[on],a,!0),Xs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Cm(e,n,s,a);break t}else if(s!==c){c=ei(Error(r(424)),n),Bs(c),n=Cm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=hi(e.firstChild),Dn=n,Ae=!0,Ja=null,Mi=!0,a=fm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),s===c){n=Vi(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,s=Bl(Et.current).createElement(a),s[rn]=n,s[Sn]=e,Tn(s,a,e),tn(s),n.stateNode=s):n.memoizedState=Bg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Ae&&(s=n.stateNode=Og(n.type,n.pendingProps,Et.current),Dn=n,Mi=!0,c=Ye,Aa(n.type)?(Cf=c,Ye=hi(s.firstChild)):Ye=c),Mn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((c=s=Ye)&&(s=Sx(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Dn=n,Ye=hi(s.firstChild),Mi=!1,c=!0):c=!1),c||$a(n)),Qt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,bf(c,f)?s=null:S!==null&&bf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(e,n,Iv,null,null,a),po._currentValue=c),Ml(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Ae&&((e=a=Ye)&&(a=yx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,Ye=null,e=!0):e=!1),e||$a(n)),null;case 13:return Dm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Fr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return Mm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),Mn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=An(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Em(e,n,n.type,n.pendingProps,a);case 15:return Tm(e,n,n.type,n.pendingProps,a);case 19:return Nm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=El(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return bm(e,n,a);case 24:return er(n),s=An(on),e===null?(c=pu(),c===null&&(c=ke,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},gu(n),fa(n,on,c)):((e.lanes&a)!==0&&(_u(e,n),Ws(n,null,null,a),Xs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,on,s)):(s=f.cache,fa(n,on,s),s!==c.cache&&fu(n,[on],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(e){e.flags|=4}function Om(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vg(n)){if(n=ri.current,n!==null&&((Se&4194048)===Se?Ei!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Ei))throw Vs=mu,_p;e.flags|=8192}}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,kr|=n)}function Js(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Yv(e,n,a){var s=n.pendingProps;switch(ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ps(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(qe(n),Om(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),qe(n),Om(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&ki(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=Et.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Q.current,Ps(n)?up(n):(e=Og(c,s,a),n.stateNode=e,ki(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Q.current,Ps(n))up(n);else{switch(c=Bl(Et.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[rn]=n,e[Sn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Et.current,Ps(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rg(e.nodeValue,a)),e||$a(n)}else e=Bl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ps(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=hp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&Sf(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(xt(ln),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Js(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,Js(c,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lp(a,e),a=a.sibling;return Mt(ln,ln.current&1|2),n.child}e=e.sibling}c.tail!==null&&de()>Rl&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304)}else{if(!s)if(e=xl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),Js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return qe(n),null}else 2*de()-c.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,e=ln.current,Mt(ln,s?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Gi(n),yu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&xt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(on),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jv(e,n){switch(ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(on),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(ln),null;case 4:return oe(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),yu(),e!==null&&xt(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(on),null;case 25:return null;default:return null}}function Pm(e,n){switch(ou(n),n.tag){case 3:Fi(on),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:Gi(n);break;case 19:xt(ln);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),yu(),e!==null&&xt(nr);break;case 24:Fi(on)}}function $s(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Ge(n,n.return,T)}}function va(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var I=a,J=T;try{J()}catch(ut){Ge(c,I,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ge(n,n.return,ut)}}function zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ep(n,a)}catch(s){Ge(e,e.return,s)}}}function Bm(e,n,a){a.props=ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(e,n,s)}}function to(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ge(e,n,c)}}function Ti(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function Im(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function Zu(e,n,a){try{var s=e.stateNode;mx(s,e.type,a,n),s[Sn]=n}catch(c){Ge(e,e.return,c)}}function Fm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Ku(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zl));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Qu(e,n,a),e=e.sibling;e!==null;)Qu(e,n,a),e=e.sibling}function bl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}function Hm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[rn]=e,n[Sn]=a}catch(f){Ge(e,e.return,f)}}var Xi=!1,Je=!1,Ju=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Zv(e,n){if(e=e.containerInfo,Ef=kl,e=Jd(e),Kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,I=-1,J=0,ut=0,_t=e,nt=null;e:for(;;){for(var it;_t!==a||c!==0&&_t.nodeType!==3||(T=S+c),_t!==f||s!==0&&_t.nodeType!==3||(I=S+s),_t.nodeType===3&&(S+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===a&&++J===c&&(T=S),nt===f&&++ut===s&&(I=S),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:e,selectionRange:a},kl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=ar(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Vm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),s&4&&$s(5,a);break;case 1:if(xa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&zm(a),s&512&&to(a,a.return);break;case 3:if(xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&Hm(a);case 26:case 5:xa(e,a),n===null&&s&4&&Im(a),s&512&&to(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),s&4&&Wm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ax.bind(null,a),Mx(e,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||Je,c=Xi;var f=Je;Xi=s,(Je=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Xi=c,Je=f}break;case 30:break;default:xa(e,a)}}function km(e){var n=e.alternate;n!==null&&(e.alternate=null,km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&oa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,In=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Xm(e,n,a),a=a.sibling}function Xm(e,n,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Je||Ti(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ti(a,n);var s=We,c=In;Aa(a.type)&&(We=a.stateNode,In=!1),Wi(e,n,a),co(a.stateNode),We=s,In=c;break;case 5:Je||Ti(a,n);case 6:if(s=We,c=In,We=null,Wi(e,n,a),We=s,In=c,We!==null)if(In)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(In?(e=We,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vo(e)):Ng(We,a.stateNode));break;case 4:s=We,c=In,We=a.stateNode.containerInfo,In=!0,Wi(e,n,a),We=s,In=c;break;case 0:case 11:case 14:case 15:Je||va(2,a,n),Je||va(4,a,n),Wi(e,n,a);break;case 1:Je||(Ti(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bm(a,n,s)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Wi(e,n,a),Je=s;break;default:Wi(e,n,a)}}function Wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(a){Ge(n,n.return,a)}}function Kv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gm),n;default:throw Error(r(435,e.tag))}}function $u(e,n){var a=Kv(e);n.forEach(function(s){var c=rx.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){We=T.stateNode,In=!1;break t}break;case 5:We=T.stateNode,In=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(We===null)throw Error(r(160));Xm(f,S,c),We=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)qm(n,e),n=n.sibling}var fi=null;function qm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),s&4&&(va(3,e,e.return),$s(3,e),va(5,e,e.return));break;case 1:Yn(n,e),jn(e),s&512&&(Je||a===null||Ti(a,a.return)),s&64&&Xi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(Yn(n,e),jn(e),s&512&&(Je||a===null||Ti(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[sa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[rn]=e,tn(f),s=f;break t;case"link":var S=Hg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Hg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,tn(f),s=f}e.stateNode=s}else Gg(c,e.type,e.stateNode);else e.stateNode=Fg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gg(c,e.type,e.stateNode):Fg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Zu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),s&512&&(Je||a===null||Ti(a,a.return)),a!==null&&s&4&&Zu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),s&512&&(Je||a===null||Ti(a,a.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(it){Ge(e,e.return,it)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Zu(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Ju=!0);break;case 6:if(Yn(n,e),jn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(it){Ge(e,e.return,it)}}break;case 3:if(Hl=null,c=fi,fi=Il(n.containerInfo),Yn(n,e),fi=c,jn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(it){Ge(e,e.return,it)}Ju&&(Ju=!1,Ym(e));break;case 4:s=fi,fi=Il(e.stateNode.containerInfo),Yn(n,e),jn(e),fi=s;break;case 12:Yn(n,e),jn(e);break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sf=de()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,$u(e,s)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=Xi,ut=Je;if(Xi=J||c,Je=ut||I,Yn(n,e),Je=ut,Xi=J,jn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Xi||Je||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var _t=I.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(I,I.return,it)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(it){Ge(I,I.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,$u(e,a))));break;case 19:Yn(n,e),jn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,$u(e,s)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Fm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ku(e);bl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(yi(S,""),a.flags&=-33);var T=Ku(e);bl(e,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,J=Ku(e);Qu(e,J,I);break;default:throw Error(r(161))}}catch(ut){Ge(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),rr(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),rr(n);break;case 27:co(n.stateNode);case 26:case 5:Ti(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),$s(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ge(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Mp(I[c],T)}catch(J){Ge(s,s.return,J)}}a&&S&64&&zm(f),to(f,f.return);break;case 27:Hm(f);case 26:case 5:Sa(c,f,a),a&&s===null&&S&4&&Im(f),to(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&Wm(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),to(f,f.return);break;case 30:break;default:Sa(c,f,a)}n=n.sibling}}function tf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fs(a))}function ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fs(e))}function bi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jm(e,n,a,s),n=n.sibling}function jm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,s),c&2048&&$s(9,n);break;case 1:bi(e,n,a,s);break;case 3:bi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fs(e)));break;case 12:if(c&2048){bi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else bi(e,n,a,s);break;case 13:bi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,s):eo(e,n):f._visibility&2?bi(e,n,a,s):(f._visibility|=2,Hr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&tf(S,n);break;case 24:bi(e,n,a,s),c&2048&&ef(n.alternate,n);break;default:bi(e,n,a,s)}}function Hr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,I=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Hr(f,S,T,I,c),$s(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Hr(f,S,T,I,c):eo(f,S):(ut._visibility|=2,Hr(f,S,T,I,c)),c&&J&2048&&tf(S.alternate,S);break;case 24:Hr(f,S,T,I,c),c&&J&2048&&ef(S.alternate,S);break;default:Hr(f,S,T,I,c)}n=n.sibling}}function eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:eo(a,s),c&2048&&tf(s.alternate,s);break;case 24:eo(a,s),c&2048&&ef(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function Gr(e){if(e.subtreeFlags&no)for(e=e.child;e!==null;)Zm(e),e=e.sibling}function Zm(e){switch(e.tag){case 26:Gr(e),e.flags&no&&e.memoizedState!==null&&Px(fi,e.memoizedState,e.memoizedProps);break;case 5:Gr(e);break;case 3:case 4:var n=fi;fi=Il(e.stateNode.containerInfo),Gr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,Gr(e),no=n):Gr(e));break;default:Gr(e)}}function Km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function io(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Jm(s,e)}Km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:io(e),e.flags&2048&&va(9,e,e.return);break;case 3:io(e);break;case 12:io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):io(e);break;default:io(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Jm(s,e)}Km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function Jm(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=e;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(km(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Qv={getCacheForType:function(e){var n=An(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Jv=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,pe=null,Se=0,Ne=0,Zn=null,ya=!1,Vr=!1,nf=!1,qi=0,je=0,Ma=0,sr=0,af=0,si=0,kr=0,ao=null,Fn=null,rf=!1,sf=0,Rl=1/0,wl=null,Ea=null,En=0,Ta=null,Xr=null,Wr=0,of=0,lf=null,$m=null,ro=0,cf=null;function Kn(){if((Ue&2)!==0&&Se!==0)return Se&-Se;if(F.T!==null){var e=Nr;return e!==0?e:gf()}return Me()}function tg(){si===0&&(si=(Se&536870912)===0||Ae?X():536870912);var e=ri.current;return e!==null&&(e.flags|=32),si}function Qn(e,n,a){(e===ke&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(qr(e,0),ba(e,Se,si,!1)),Bt(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(sr|=a),je===4&&ba(e,Se,si,!1)),Ai(e))}function eg(e,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||wt(e,n),c=s?ex(e,n):hf(e,n,!0),f=s;do{if(c===0){Vr&&!s&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$v(a)){c=hf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=ao;var I=T.current.memoizedState.isDehydrated;if(I&&(qr(T,S).flags|=256),S=hf(T,S,!1),S!==2){if(nf&&!I){T.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){qr(e,0),ba(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(s,n,si,!ya);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=sf+300-de(),10<c)){if(ba(s,n,si,!ya),Yt(s,0,!0)!==0)break t;s.timeoutHandle=Dg(ng.bind(null,s,a,Fn,wl,rf,n,si,sr,kr,ya,f,2,-0,0),c);break t}ng(s,a,Fn,wl,rf,n,si,sr,kr,ya,f,0,-0,0)}}break}while(!0);Ai(e)}function ng(e,n,a,s,c,f,S,T,I,J,ut,_t,nt,it){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:Ox},Zm(n),_t=zx(),_t!==null)){e.cancelPendingCommit=_t(cg.bind(null,e,n,f,a,s,c,S,T,I,ut,1,nt,it)),ba(e,f,S,!J);return}cg(e,n,f,a,s,c,S,T,I)}function $v(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,s){n&=~af,n&=~sr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&vt(e,a,n)}function Cl(){return(Ue&6)===0?(so(0),!1):!0}function uf(){if(pe!==null){if(Ne===0)var e=pe.return;else e=pe,Ii=tr=null,Au(e),Ir=null,Ks=0,e=pe;for(;e!==null;)Pm(e.alternate,e),e=e.return;pe=null}}function qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_x(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),uf(),ke=e,pe=a=Pi(e.current,null),Se=n,Ne=0,Zn=null,ya=!1,Vr=wt(e,n),nf=!1,kr=si=af=sr=Ma=je=0,Fn=ao=null,rf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=e[c],s&=~f}return qi=n,Qo(),a}function ig(e,n){ue=null,F.H=gl,n===Gs||n===sl?(n=Sp(),Ne=3):n===_p?(n=Sp(),Ne=4):Ne=n===ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(je=1,yl(e,ei(n,e.current)))}function ag(){var e=F.H;return F.H=gl,e===null?gl:e}function rg(){var e=F.A;return F.A=Qv,e}function ff(){je=4,ya||(Se&4194048)!==Se&&ri.current!==null||(Vr=!0),(Ma&134217727)===0&&(sr&134217727)===0||ke===null||ba(ke,Se,si,!1)}function hf(e,n,a){var s=Ue;Ue|=2;var c=ag(),f=rg();(ke!==e||Se!==n)&&(wl=null,qr(e,n)),n=!1;var S=je;t:do try{if(Ne!==0&&pe!==null){var T=pe,I=Zn;switch(Ne){case 8:uf(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var J=Ne;if(Ne=0,Zn=null,Yr(e,T,I,J),a&&Vr){S=0;break t}break;default:J=Ne,Ne=0,Zn=null,Yr(e,T,I,J)}}tx(),S=je;break}catch(ut){ig(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Ii=tr=null,Ue=s,F.H=c,F.A=f,pe===null&&(ke=null,Se=0,Qo()),S}function tx(){for(;pe!==null;)sg(pe)}function ex(e,n){var a=Ue;Ue|=2;var s=ag(),c=rg();ke!==e||Se!==n?(wl=null,Rl=de()+500,qr(e,n)):Vr=wt(e,n);t:do try{if(Ne!==0&&pe!==null){n=pe;var f=Zn;e:switch(Ne){case 1:Ne=0,Zn=null,Yr(e,n,f,1);break;case 2:case 9:if(vp(f)){Ne=0,Zn=null,og(n);break}n=function(){Ne!==2&&Ne!==9||ke!==e||(Ne=7),Ai(e)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:vp(f)?(Ne=0,Zn=null,og(n)):(Ne=0,Zn=null,Yr(e,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var T=pe;if(!S||Vg(S)){Ne=0,Zn=null;var I=T.sibling;if(I!==null)pe=I;else{var J=T.return;J!==null?(pe=J,Dl(J)):pe=null}break e}}Ne=0,Zn=null,Yr(e,n,f,5);break;case 6:Ne=0,Zn=null,Yr(e,n,f,6);break;case 8:uf(),je=6;break t;default:throw Error(r(462))}}nx();break}catch(ut){ig(e,ut)}while(!0);return Ii=tr=null,F.H=s,F.A=c,Ue=a,pe!==null?0:(ke=null,Se=0,Qo(),je)}function nx(){for(;pe!==null&&!xn();)sg(pe)}function sg(e){var n=Lm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Dl(e):pe=n}function og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Rm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Rm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Au(n);default:Pm(a,n),n=pe=lp(n,qi),n=Lm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Dl(e):pe=n}function Yr(e,n,a,s){Ii=tr=null,Au(n),Ir=null,Ks=0;var c=n.return;try{if(Wv(e,c,n,a,Se)){je=1,yl(e,ei(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;je=1,yl(e,ei(a,e.current)),pe=null;return}n.flags&32768?(Ae||s===1?e=!0:Vr||(Se&536870912)!==0?e=!1:(ya=e=!0,(s===2||s===9||s===3||s===6)&&(s=ri.current,s!==null&&s.tag===13&&(s.flags|=16384))),lg(n,e)):Dl(n)}function Dl(e){var n=e;do{if((n.flags&32768)!==0){lg(n,ya);return}e=n.return;var a=Yv(n.alternate,n,qi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);je===0&&(je=5)}function lg(e,n){do{var a=jv(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);je=6,pe=null}function cg(e,n,a,s,c,f,S,T,I){e.cancelPendingCommit=null;do Ul();while(En!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=eu,At(e,a,f,S,T,I),e===ke&&(pe=ke=null,Se=0),Xr=n,Ta=e,Wr=a,of=f,lf=c,$m=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sx(ae,function(){return pg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,c=j.p,j.p=2,S=Ue,Ue|=4;try{Zv(e,n,a)}finally{Ue=S,j.p=c,F.T=s}}En=1,ug(),fg(),hg()}}function ug(){if(En===1){En=0;var e=Ta,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=j.p;j.p=2;var c=Ue;Ue|=4;try{qm(n,e);var f=Tf,S=Jd(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Qd(T.ownerDocument.documentElement,T)){if(I!==null&&Kc(T)){var J=I.start,ut=I.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var _t=T.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=T.textContent.length,Jt=Math.min(I.start,ee),Be=I.end===void 0?Jt:Math.min(I.end,ee);!it.extend&&Jt>Be&&(S=Be,Be=Jt,Jt=S);var W=Kd(T,Jt),k=Kd(T,Be);if(W&&k&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==k.node||it.focusOffset!==k.offset)){var K=_t.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),Jt>Be?(it.addRange(K),it.extend(k.node,k.offset)):(K.setEnd(k.node,k.offset),it.addRange(K))}}}}for(_t=[],it=T;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var pt=_t[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}kl=!!Ef,Tf=Ef=null}finally{Ue=c,j.p=s,F.T=a}}e.current=n,En=2}}function fg(){if(En===2){En=0;var e=Ta,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=j.p;j.p=2;var c=Ue;Ue|=4;try{Vm(e,n.alternate,n)}finally{Ue=c,j.p=s,F.T=a}}En=3}}function hg(){if(En===4||En===3){En=0,ye();var e=Ta,n=Xr,a=Wr,s=$m;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Xr=Ta=null,dg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ea=null),De(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,c=j.p,j.p=2,F.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{F.T=n,j.p=c}}(Wr&3)!==0&&Ul(),Ai(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===cf?ro++:(ro=0,cf=e):ro=0,so(0)}}function dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fs(n)))}function Ul(e){return ug(),fg(),hg(),pg()}function pg(){if(En!==5)return!1;var e=Ta,n=of;of=0;var a=De(Wr),s=F.T,c=j.p;try{j.p=32>a?32:a,F.T=null,a=lf,lf=null;var f=Ta,S=Wr;if(En=0,Xr=Ta=null,Wr=0,(Ue&6)!==0)throw Error(r(331));var T=Ue;if(Ue|=4,Qm(f.current),jm(f,f.current,S,a),Ue=T,so(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{j.p=c,F.T=s,dg(e,n)}}function mg(e,n,a){n=ei(a,n),n=Hu(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Bt(e,2),Ai(e))}function Ge(e,n,a){if(e.tag===3)mg(e,e,a);else for(;n!==null;){if(n.tag===3){mg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=ei(a,e),a=xm(2),s=pa(n,a,2),s!==null&&(Sm(a,s,n,e),Bt(s,2),Ai(s));break}}n=n.return}}function df(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Jv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(nf=!0,c.add(a),e=ix.bind(null,e,n,a),n.then(e,e))}function ix(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(je===4||je===3&&(Se&62914560)===Se&&300>de()-sf?(Ue&2)===0&&qr(e,0):af|=a,kr===Se&&(kr=0)),Ai(e)}function gg(e,n){n===0&&(n=Nt()),e=wr(e,n),e!==null&&(Bt(e,n),Ai(e))}function ax(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(e,a)}function rx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),gg(e,a)}function sx(e,n){return ge(e,n)}var Nl=null,jr=null,pf=!1,Ll=!1,mf=!1,or=0;function Ai(e){e!==jr&&e.next===null&&(jr===null?Nl=jr=e:jr=jr.next=e),Ll=!0,pf||(pf=!0,lx())}function so(e,n){if(!mf&&Ll){mf=!0;do for(var a=!1,s=Nl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sg(s,f))}else f=Se,f=Yt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||wt(s,f)||(a=!0,Sg(s,f));s=s.next}while(a);mf=!1}}function ox(){_g()}function _g(){Ll=pf=!1;var e=0;or!==0&&(gx()&&(e=or),or=0);for(var n=de(),a=null,s=Nl;s!==null;){var c=s.next,f=vg(s,n);f===0?(s.next=null,a===null?Nl=c:a.next=c,c===null&&(jr=a)):(a=s,(e!==0||(f&3)!==0)&&(Ll=!0)),s=c}so(e)}function vg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,I=c[S];I===-1?((T&a)===0||(T&s)!==0)&&(c[S]=ie(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=ke,a=Se,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&V(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&V(s),De(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=z;break;default:a=ae}return s=xg.bind(null,e),a=ge(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&V(s),e.callbackPriority=2,e.callbackNode=null,2}function xg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ul()&&e.callbackNode!==a)return null;var s=Se;return s=Yt(e,e===ke?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(eg(e,s,n),vg(e,de()),e.callbackNode!=null&&e.callbackNode===a?xg.bind(null,e):null)}function Sg(e,n){if(Ul())return null;eg(e,n,!0)}function lx(){vx(function(){(Ue&6)!==0?ge(_e,ox):_g()})}function gf(){return or===0&&(or=X()),or}function yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function Mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=yg((c[Sn]||null).action),S=s.submitter;S&&(n=(n=S[Sn]||null)?yg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new jo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var I=S?Mg(c,S):new FormData(c);Pu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=S?Mg(c,S):new FormData(c),Pu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var _f=0;_f<tu.length;_f++){var vf=tu[_f],ux=vf.toLowerCase(),fx=vf[0].toUpperCase()+vf.slice(1);ui(ux,"on"+fx)}ui(ep,"onAnimationEnd"),ui(np,"onAnimationIteration"),ui(ip,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(wv,"onTransitionRun"),ui(Cv,"onTransitionStart"),ui(Dv,"onTransitionCancel"),ui(ap,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function Eg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],I=T.instance,J=T.currentTarget;if(T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Sl(ut)}c.currentTarget=null,f=I}else for(S=0;S<s.length;S++){if(T=s[S],I=T.instance,J=T.currentTarget,T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Sl(ut)}c.currentTarget=null,f=I}}}}function me(e,n){var a=n[ka];a===void 0&&(a=n[ka]=new Set);var s=e+"__bubble";a.has(s)||(Tg(n,e,2,!1),a.add(s))}function xf(e,n,a){var s=0;n&&(s|=4),Tg(a,e,s,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Ol]){e[Ol]=!0,Vo.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||xf(a,!1,e),xf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,xf("selectionchange",!1,n))}}function Tg(e,n,a,s){switch(jg(n)){case 2:var c=Fx;break;case 8:c=Hx;break;default:c=Of}a=c.bind(null,n,a,e),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function yf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Ci(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Ud(function(){var J=f,ut=Fc(a),_t=[];t:{var nt=rp.get(e);if(nt!==void 0){var it=jo,ee=e;switch(e){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":it=sv;break;case"focusin":ee="focus",it=Wc;break;case"focusout":ee="blur",it=Wc;break;case"beforeblur":case"afterblur":it=Wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=cv;break;case ep:case np:case ip:it=Q0;break;case ap:it=fv;break;case"scroll":case"scrollend":it=q0;break;case"wheel":it=dv;break;case"copy":case"cut":case"paste":it=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=zd;break;case"toggle":case"beforetoggle":it=mv}var Jt=(n&4)!==0,Be=!Jt&&(e==="scroll"||e==="scrollend"),W=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var k=J,K;k!==null;){var pt=k;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||W===null||(pt=As(k,W),pt!=null&&Jt.push(lo(k,pt,K))),Be)break;k=k.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ut),_t.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Ic&&(ee=a.relatedTarget||a.fromElement)&&(Ci(ee)||ee[Pn]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=J,ee=ee?Ci(ee):null,ee!==null&&(Be=u(ee),Jt=ee.tag,ee!==Be||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=J),it!==ee)){if(Jt=Od,pt="onMouseLeave",W="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=zd,pt="onPointerLeave",W="onPointerEnter",k="pointer"),Be=it==null?nt:Wa(it),K=ee==null?nt:Wa(ee),nt=new Jt(pt,k+"leave",it,a,ut),nt.target=Be,nt.relatedTarget=K,pt=null,Ci(ut)===J&&(Jt=new Jt(W,k+"enter",ee,a,ut),Jt.target=K,Jt.relatedTarget=Be,pt=Jt),Be=pt,it&&ee)e:{for(Jt=it,W=ee,k=0,K=Jt;K;K=Zr(K))k++;for(K=0,pt=W;pt;pt=Zr(pt))K++;for(;0<k-K;)Jt=Zr(Jt),k--;for(;0<K-k;)W=Zr(W),K--;for(;k--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Zr(Jt),W=Zr(W)}Jt=null}else Jt=null;it!==null&&bg(_t,nt,it,Jt,!1),ee!==null&&Be!==null&&bg(_t,Be,ee,Jt,!0)}}t:{if(nt=J?Wa(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=Xd;else if(Vd(nt))if(Wd)Ht=bv;else{Ht=Ev;var he=Mv}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Bc(J.elementType)&&(Ht=Xd):Ht=Tv;if(Ht&&(Ht=Ht(e,J))){kd(_t,Ht,a,ut);break t}he&&he(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&bn(nt,"number",nt.value)}switch(he=J?Wa(J):window,e){case"focusin":(Vd(he)||he.contentEditable==="true")&&(br=he,Qc=J,Os=null);break;case"focusout":Os=Qc=br=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,$d(_t,a,ut);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":$d(_t,a,ut)}var Wt;if(Yc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Tr?Hd(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Bd&&a.locale!=="ko"&&(Tr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Tr&&(Wt=Nd()):(ua=ut,Vc="value"in ua?ua.value:ua.textContent,Tr=!0)),he=Pl(J,$t),0<he.length&&($t=new Pd($t,e,null,a,ut),_t.push({event:$t,listeners:he}),Wt?$t.data=Wt:(Wt=Gd(a),Wt!==null&&($t.data=Wt)))),(Wt=_v?vv(e,a):xv(e,a))&&($t=Pl(J,"onBeforeInput"),0<$t.length&&(he=new Pd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:he,listeners:$t}),he.data=Wt)),cx(_t,e,J,a,ut)}Eg(_t,n)})}function lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=As(e,a),c!=null&&s.unshift(lo(e,c,f)),c=As(e,n),c!=null&&s.push(lo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,I=T.alternate,J=T.stateNode;if(T=T.tag,I!==null&&I===s)break;T!==5&&T!==26&&T!==27||J===null||(I=J,c?(J=As(a,f),J!=null&&S.unshift(lo(a,J,I))):c||(J=As(a,f),J!=null&&S.push(lo(a,J,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var dx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Ag(e){return(typeof e=="string"?e:""+e).replace(dx,`
`).replace(px,"")}function Rg(e,n){return n=Ag(n),Ag(e)===n}function zl(){}function ze(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||yi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&yi(e,""+s);break;case"className":Dt(e,"class",s);break;case"tabIndex":Dt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,s);break;case"style":Cd(e,s,f);break;case"data":if(n!=="object"){Dt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",c.name,c,null),ze(e,n,"formEncType",c.formEncType,c,null),ze(e,n,"formMethod",c.formMethod,c,null),ze(e,n,"formTarget",c.formTarget,c,null)):(ze(e,n,"encType",c.encType,c,null),ze(e,n,"method",c.method,c,null),ze(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=zl);break;case"onScroll":s!=null&&me("scroll",e);break;case"onScrollEnd":s!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":me("beforetoggle",e),me("toggle",e),bt(e,"popover",s);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":bt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,bt(e,a,s))}}function Mf(e,n,a,s,c,f){switch(a){case"style":Cd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?yi(e,s):(typeof s=="number"||typeof s=="bigint")&&yi(e,""+s);break;case"onScroll":s!=null&&me("scroll",e);break;case"onScrollEnd":s!=null&&me("scrollend",e);break;case"onClick":s!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):bt(e,a,s)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,f,S,a,null)}}c&&ze(e,n,"srcSet",a.srcSet,a,null),s&&ze(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var T=f=S=c=null,I=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":S=ut;break;case"checked":I=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ze(e,n,s,ut,a,null)}}He(e,f,T,I,J,S,c,!1),Oe(e);return;case"select":me("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:ze(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?sn(e,!!s,n,!1):a!=null&&sn(e,!!s,a,!0);return;case"textarea":me("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ze(e,n,S,T,a,null)}yn(e,s,c,f),Oe(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(e,n,I,s,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(s=0;s<oo.length;s++)me(oo[s],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,J,s,a,null)}return;default:if(Bc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Mf(e,n,ut,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&ze(e,n,T,s,a,null))}function mx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,I=null,J=null,ut=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":I=_t;default:s.hasOwnProperty(it)||ze(e,n,it,null,s,_t)}}for(var nt in s){var it=s[nt];if(_t=a[nt],s.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==_t&&ze(e,n,nt,it,s,_t)}}Ni(e,S,T,I,J,ut,f,c);return;case"select":it=S=T=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":it=I;default:s.hasOwnProperty(f)||ze(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==I&&ze(e,n,c,f,s,I)}n=T,a=S,s=it,nt!=null?sn(e,!!a,nt,!1):!!s!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(e,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ze(e,n,S,c,s,f)}dn(e,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:ze(e,n,ee,null,s,nt)}for(I in s)if(nt=s[I],it=a[I],s.hasOwnProperty(I)&&nt!==it&&(nt!=null||it!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:ze(e,n,I,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&ze(e,n,Jt,null,s,nt);for(J in s)if(nt=s[J],it=a[J],s.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:ze(e,n,J,nt,s,it)}return;default:if(Bc(n)){for(var Be in a)nt=a[Be],a.hasOwnProperty(Be)&&nt!==void 0&&!s.hasOwnProperty(Be)&&Mf(e,n,Be,void 0,s,nt);for(ut in s)nt=s[ut],it=a[ut],!s.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||Mf(e,n,ut,nt,s,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!s.hasOwnProperty(W)&&ze(e,n,W,null,s,nt);for(_t in s)nt=s[_t],it=a[_t],!s.hasOwnProperty(_t)||nt===it||nt==null&&it==null||ze(e,n,_t,nt,s,it)}var Ef=null,Tf=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function gx(){var e=window.event;return e&&e.type==="popstate"?e===Af?!1:(Af=e,!0):(Af=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(xx)}:Dg;function xx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Ng(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&co(S.documentElement),a&2&&co(S.body),a&4)for(a=S.head,co(a),S=a.firstChild;S;){var T=S.nextSibling,I=S.nodeName;S[sa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(f),vo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);vo(n)}function Rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[sa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function yx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Mx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Cf=null;function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Og(e,n,a){switch(n=Bl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);oa(e)}var oi=new Map,Pg=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=j.d;j.d={f:Ex,r:Tx,D:bx,C:Ax,L:Rx,m:wx,X:Dx,S:Cx,M:Ux};function Ex(){var e=Yi.f(),n=Cl();return e||n}function Tx(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?em(n):Yi.r(e)}var Kr=typeof document>"u"?null:document;function zg(e,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pg.has(c)||(Pg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",e),tn(n),s.head.appendChild(n)))}}function bx(e){Yi.D(e),zg("dns-prefetch",e,null)}function Ax(e,n){Yi.C(e,n),zg("preconnect",e,n)}function Rx(e,n,a){Yi.L(e,n,a);var s=Kr;if(s&&e&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(e)+'"]';var f=c;switch(n){case"style":f=Qr(e);break;case"script":f=Jr(e)}oi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(fo(f))||(n=s.createElement("link"),Tn(n,"link",e),tn(n),s.head.appendChild(n)))}}function wx(e,n){Yi.m(e,n);var a=Kr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(s)+'"][href="'+Ve(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(e)}if(!oi.has(f)&&(e=g({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}s=a.createElement("link"),Tn(s,"link",e),tn(s),a.head.appendChild(s)}}}function Cx(e,n,a){Yi.S(e,n,a);var s=Kr;if(s&&e){var c=la(s).hoistableStyles,f=Qr(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(uo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Df(e,a);var I=S=s.createElement("link");tn(I),Tn(I,"link",e),I._p=new Promise(function(J,ut){I.onload=J,I.onerror=ut}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Fl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function Dx(e,n){Yi.X(e,n);var a=Kr;if(a&&e){var s=la(a).hoistableScripts,c=Jr(e),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(e=g({src:e,async:!0},n),(n=oi.get(c))&&Uf(e,n),f=a.createElement("script"),tn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ux(e,n){Yi.M(e,n);var a=Kr;if(a&&e){var s=la(a).hoistableScripts,c=Jr(e),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Uf(e,n),f=a.createElement("script"),tn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bg(e,n,a,s){var c=(c=Et.current)?Il(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=la(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qr(a.href);var f=la(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(uo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||Nx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=la(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Qr(e){return'href="'+Ve(e)+'"'}function uo(e){return'link[rel="stylesheet"]['+e+"]"}function Ig(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Nx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),tn(n),e.head.appendChild(n))}function Jr(e){return'[src="'+Ve(e)+'"]'}function fo(e){return"script[async]"+e}function Fg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),tn(s),Tn(s,"style",c),Fl(s,a.precedence,e),n.instance=s;case"stylesheet":c=Qr(a.href);var f=e.querySelector(uo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=Ig(a),(c=oi.get(c))&&Df(s,c),f=(e.ownerDocument||e).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Tn(f,"link",s),n.state.loading|=4,Fl(f,a.precedence,e),n.instance=f;case"script":return f=Jr(a.src),(c=e.querySelector(fo(f)))?(n.instance=c,tn(c),c):(s=a,(c=oi.get(f))&&(s=g({},a),Uf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),tn(c),Tn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fl(s,a.precedence,e));return n.instance}function Fl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function Hg(e,n,a){if(Hl===null){var s=new Map,c=Hl=new Map;c.set(a,s)}else c=Hl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[sa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Gg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Lx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ho=null;function Ox(){}function Px(e,n,a){if(ho===null)throw Error(r(475));var s=ho;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Qr(a.href),f=e.querySelector(uo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Gl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=Ig(a),(c=oi.get(c))&&Df(a,c),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Gl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function zx(){if(ho===null)throw Error(r(475));var e=ho;return e.stylesheets&&e.count===0&&Nf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Nf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gl(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vl=null;function Nf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,n.forEach(Bx,e),Vl=null,Gl.call(e))}function Bx(e,n){if(!(n.state.loading&4)){var a=Vl.get(e);if(a)var s=a.get(null);else{a=new Map,Vl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var po={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Ix(e,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function kg(e,n,a,s,c,f,S,T,I,J,ut,_t){return e=new Ix(e,n,a,S,T,I,J,_t),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},gu(f),e}function Xg(e){return e?(e=Cr,e):Cr}function Wg(e,n,a,s,c,f){c=Xg(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&(Qn(a,e,n),ks(a,e,n))}function qg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Lf(e,n){qg(e,n),(e=e.alternate)&&qg(e,n)}function Yg(e){if(e.tag===13){var n=wr(e,67108864);n!==null&&Qn(n,e,67108864),Lf(e,67108864)}}var kl=!0;function Fx(e,n,a,s){var c=F.T;F.T=null;var f=j.p;try{j.p=2,Of(e,n,a,s)}finally{j.p=f,F.T=c}}function Hx(e,n,a,s){var c=F.T;F.T=null;var f=j.p;try{j.p=8,Of(e,n,a,s)}finally{j.p=f,F.T=c}}function Of(e,n,a,s){if(kl){var c=Pf(s);if(c===null)yf(e,n,s,Xl,a),Zg(e,s);else if(Vx(c,e,n,a,s))s.stopPropagation();else if(Zg(e,s),n&4&&-1<Gx.indexOf(e)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Pt(S);T.entanglements[1]|=I,S&=~I}Ai(f),(Ue&6)===0&&(Rl=de()+500,so(0))}}break;case 13:T=wr(f,2),T!==null&&Qn(T,f,2),Cl(),Lf(f,2)}if(f=Pf(s),f===null&&yf(e,n,s,Xl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else yf(e,n,s,null,a)}}function Pf(e){return e=Fc(e),zf(e)}var Xl=null;function zf(e){if(Xl=null,e=Ci(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xl=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case _e:return 2;case jt:return 8;case ae:case Ke:return 32;case z:return 268435456;default:return 32}default:return 32}}var Bf=!1,Ra=null,wa=null,Ca=null,mo=new Map,go=new Map,Da=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&Yg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Vx(e,n,a,s,c){switch(n){case"focusin":return Ra=_o(Ra,e,n,a,s,c),!0;case"dragenter":return wa=_o(wa,e,n,a,s,c),!0;case"mouseover":return Ca=_o(Ca,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return mo.set(f,_o(mo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,_o(go.get(f)||null,e,n,a,s,c)),!0}return!1}function Kg(e){var n=Ci(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Xn(e.priority,function(){if(a.tag===13){var s=Kn();s=ne(s);var c=wr(a,s);c!==null&&Qn(c,a,s),Lf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Pf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Ic=s,a.target.dispatchEvent(s),Ic=null}else return n=Di(a),n!==null&&Yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Qg(e,n,a){Wl(e)&&a.delete(n)}function kx(){Bf=!1,Ra!==null&&Wl(Ra)&&(Ra=null),wa!==null&&Wl(wa)&&(wa=null),Ca!==null&&Wl(Ca)&&(Ca=null),mo.forEach(Qg),go.forEach(Qg)}function ql(e,n){e.blockedOn===n&&(e.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kx)))}var Yl=null;function Jg(e){Yl!==e&&(Yl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(zf(s||a)===null)continue;break}var f=Di(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function vo(e){function n(I){return ql(I,e)}Ra!==null&&ql(Ra,e),wa!==null&&ql(wa,e),Ca!==null&&ql(Ca,e),mo.forEach(n),go.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Kg(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Sn]||null;if(typeof f=="function")S||Jg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)T=S.formAction;else if(zf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Jg(a)}}}function If(e){this._internalRoot=e}jl.prototype.render=If.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();Wg(a,s,e,n,null,null)},jl.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wg(e.current,2,null,e,null,null),Cl(),n[Pn]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&Kg(e)}};var $g=t.version;if($g!=="19.1.0")throw Error(r(527,$g,"19.1.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Xx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{ht=Zl.inject(Xx),mt=Zl}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=mm,f=gm,S=_m,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=kg(e,1,!1,null,null,a,s,c,f,S,T,null),e[Pn]=n.current,Sf(e),new If(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=mm,S=gm,T=_m,I=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=kg(e,1,!0,n,a??null,s,c,f,S,T,I,J),n.context=Xg(null),a=n.current,s=Kn(),s=ne(s),c=da(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ai(n),e[Pn]=n.current,Sf(e),new jl(n)},So.version="19.1.0",So}var c_;function tS(){if(c_)return Gf.exports;c_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Gf.exports=$x(),Gf.exports}var eS=tS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="178",nS=0,u_=1,iS=2,u0=1,aS=2,$i=3,Ga=0,Gn=1,ta=2,Fa=0,ps=1,f_=2,h_=3,d_=4,rS=5,gr=100,sS=101,oS=102,lS=103,cS=104,uS=200,fS=201,hS=202,dS=203,Eh=204,Th=205,pS=206,mS=207,gS=208,_S=209,vS=210,xS=211,SS=212,yS=213,MS=214,bh=0,Ah=1,Rh=2,_s=3,wh=4,Ch=5,Dh=6,Uh=7,f0=0,ES=1,TS=2,Ha=0,bS=1,AS=2,RS=3,wS=4,CS=5,DS=6,US=7,h0=300,vs=301,xs=302,Nh=303,Lh=304,Nc=306,Oh=1e3,vr=1001,Ph=1002,xi=1003,NS=1004,Kl=1005,wi=1006,Wf=1007,xr=1008,aa=1009,d0=1010,p0=1011,Co=1012,md=1013,Sr=1014,ea=1015,Po=1016,gd=1017,_d=1018,Do=1020,m0=35902,g0=1021,_0=1022,_i=1023,Uo=1026,No=1027,v0=1028,vd=1029,x0=1030,xd=1031,Sd=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,zh=35840,Bh=35841,Ih=35842,Fh=35843,Hh=36196,Gh=37492,Vh=37496,kh=37808,Xh=37809,Wh=37810,qh=37811,Yh=37812,jh=37813,Zh=37814,Kh=37815,Qh=37816,Jh=37817,$h=37818,td=37819,ed=37820,nd=37821,bc=36492,id=36494,ad=36495,S0=36283,rd=36284,sd=36285,od=36286,LS=3200,OS=3201,PS=0,zS=1,Ia="",ci="srgb",Ss="srgb-linear",Rc="linear",Ie="srgb",$r=7680,p_=519,BS=512,IS=513,FS=514,y0=515,HS=516,GS=517,VS=518,kS=519,m_=35044,g_="300 es",na=2e3,wc=2001;class Ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,ld=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function xe(o,t,i){return Math.max(t,Math.min(i,o))}function XS(o,t){return(o%t+t)%t}function Yf(o,t,i){return(1-i)*o+i*t}function yo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],b=u[h+2],D=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=D;return}if(v!==D||m!==x||p!==M||g!==b){let y=1-d;const _=m*x+p*M+g*b+v*D,N=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const B=Math.sqrt(U),O=Math.atan2(B,_*N);y=Math.sin(y*O)/B,d=Math.sin(d*O)/B}const R=d*N;if(m=m*y+x*R,p=p*y+M*R,g=g*y+b*R,v=v*y+D*R,y===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*v+m*M-p*x,t[i+1]=m*b+g*x+p*v-d*M,t[i+2]=p*b+g*M+d*x-m*v,t[i+3]=g*b-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"YZX":this._x=x*g*v+p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v-x*M*b;break;case"XZY":this._x=x*g*v-p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(__.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(__.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return jf.copy(this).projectOnVector(t),this.sub(jf)}reflect(t){return this.sub(jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new $,__=new Bo;class se{constructor(t,i,r,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],b=r[8],D=l[0],y=l[3],_=l[6],N=l[1],U=l[4],R=l[7],B=l[2],O=l[5],P=l[8];return u[0]=h*D+d*N+m*B,u[3]=h*y+d*U+m*O,u[6]=h*_+d*R+m*P,u[1]=p*D+g*N+v*B,u[4]=p*y+g*U+v*O,u[7]=p*_+g*R+v*P,u[2]=x*D+M*N+b*B,u[5]=x*y+M*U+b*O,u[8]=x*_+M*R+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=v*D,t[1]=(l*p-g*r)*D,t[2]=(d*r-l*h)*D,t[3]=x*D,t[4]=(g*i-l*m)*D,t[5]=(l*u-d*i)*D,t[6]=M*D,t[7]=(r*m-p*i)*D,t[8]=(h*i-r*u)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Zf.makeScale(t,i)),this}rotate(t){return this.premultiply(Zf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new se;function M0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WS(){const o=Cc("canvas");return o.style.display="block",o}const v_={};function ms(o){o in v_||(v_[o]=!0,console.warn(o))}function qS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function YS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const x_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const o={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ss]:{primaries:t,whitePoint:r,transfer:Rc,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Te=ZS();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class KS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ts===void 0&&(ts=Cc("canvas")),ts.width=t.width,ts.height=t.height;const l=ts.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ts}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QS=0;class yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?KS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JS=0;const Qf=new $;class Vn extends Ms{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=vr,l=vr,u=wi,h=xr,d=_i,m=aa,p=Vn.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=zo(),this.name="",this.source=new yd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qf).x}get height(){return this.source.getSize(Qf).y}get depth(){return this.source.getSize(Qf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oh:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case Ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oh:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case Ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=h0;Vn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],b=m[9],D=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-D)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+D)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,R=(M+1)/2,B=(_+1)/2,O=(g+x)/4,P=(v+D)/4,H=(b+y)/4;return U>R&&U>B?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=O/r,u=P/r):R>B?R<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),r=O/l,u=H/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=P/u,l=H/u),this.set(r,l,u,i),this}let N=Math.sqrt((y-b)*(y-b)+(v-D)*(v-D)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(v-D)/N,this.z=(x-g)/N,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $S extends Ms{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends $S{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class E0 extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),Jl.subVectors(this.max,Mo),es.subVectors(t.a,Mo),ns.subVectors(t.b,Mo),is.subVectors(t.c,Mo),Na.subVectors(ns,es),La.subVectors(is,ns),lr.subVectors(es,is);let i=[0,-Na.z,Na.y,0,-La.z,La.y,0,-lr.z,lr.y,Na.z,0,-Na.x,La.z,0,-La.x,lr.z,0,-lr.x,-Na.y,Na.x,0,-La.y,La.x,0,-lr.y,lr.x,0];return!Jf(i,es,ns,is,Jl)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,es,ns,is,Jl))?!1:($l.crossVectors(Na,La),i=[$l.x,$l.y,$l.z],Jf(i,es,ns,is,Jl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new $,new $,new $,new $,new $,new $,new $,new $],di=new $,Ql=new Io,es=new $,ns=new $,is=new $,Na=new $,La=new $,lr=new $,Mo=new $,Jl=new $,$l=new $,cr=new $;function Jf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const ey=new Io,Eo=new $,$f=new $;class Fo{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ey.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($f.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add($f)),this.expandByPoint(Eo.copy(t.center).sub($f))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new $,th=new $,tc=new $,Oa=new $,eh=new $,ec=new $,nh=new $;class Md{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){th.copy(t).add(i).multiplyScalar(.5),tc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(th);const u=t.distanceTo(i)*.5,h=-this.direction.dot(tc),d=Oa.dot(this.direction),m=-Oa.dot(tc),p=Oa.lengthSq(),g=Math.abs(1-h*h);let v,x,M,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const D=1/g;v*=D,x*=D,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(tc,x),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){eh.subVectors(i,t),ec.subVectors(r,t),nh.crossVectors(eh,ec);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,t);const m=d*this.direction.dot(ec.crossVectors(Oa,ec));if(m<0)return null;const p=d*this.direction.dot(eh.cross(Oa));if(p<0||m+p>h)return null;const g=-d*Oa.dot(nh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,u,h,d,m,p,g,v,x,M,b,D,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,v,x,M,b,D,y)}set(t,i,r,l,u,h,d,m,p,g,v,x,M,b,D,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/as.setFromMatrixColumn(t,0).length(),u=1/as.setFromMatrixColumn(t,1).length(),h=1/as.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,b=d*g,D=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-D*p,i[9]=-d*m,i[2]=D-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,b=p*g,D=p*v;i[0]=x+D*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=D+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,b=p*g,D=p*v;i[0]=x-D*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=D-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,b=d*g,D=d*v;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+D,i[1]=m*v,i[5]=D*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,D=d*p;i[0]=m*g,i[4]=D-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+b,i[10]=x-D*v}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,D=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+D,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=D*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ny,t,iy)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Pa.crossVectors(r,Jn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Pa.crossVectors(r,Jn)),Pa.normalize(),nc.crossVectors(Jn,Pa),l[0]=Pa.x,l[4]=nc.x,l[8]=Jn.x,l[1]=Pa.y,l[5]=nc.y,l[9]=Jn.y,l[2]=Pa.z,l[6]=nc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],b=r[2],D=r[6],y=r[10],_=r[14],N=r[3],U=r[7],R=r[11],B=r[15],O=l[0],P=l[4],H=l[8],C=l[12],A=l[1],G=l[5],st=l[9],ot=l[13],dt=l[2],ft=l[6],F=l[10],j=l[14],q=l[3],St=l[7],L=l[11],tt=l[15];return u[0]=h*O+d*A+m*dt+p*q,u[4]=h*P+d*G+m*ft+p*St,u[8]=h*H+d*st+m*F+p*L,u[12]=h*C+d*ot+m*j+p*tt,u[1]=g*O+v*A+x*dt+M*q,u[5]=g*P+v*G+x*ft+M*St,u[9]=g*H+v*st+x*F+M*L,u[13]=g*C+v*ot+x*j+M*tt,u[2]=b*O+D*A+y*dt+_*q,u[6]=b*P+D*G+y*ft+_*St,u[10]=b*H+D*st+y*F+_*L,u[14]=b*C+D*ot+y*j+_*tt,u[3]=N*O+U*A+R*dt+B*q,u[7]=N*P+U*G+R*ft+B*St,u[11]=N*H+U*st+R*F+B*L,u[15]=N*C+U*ot+R*j+B*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],b=t[3],D=t[7],y=t[11],_=t[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+D*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],b=t[12],D=t[13],y=t[14],_=t[15],N=v*y*p-D*x*p+D*m*M-d*y*M-v*m*_+d*x*_,U=b*x*p-g*y*p-b*m*M+h*y*M+g*m*_-h*x*_,R=g*D*p-b*v*p+b*d*M-h*D*M-g*d*_+h*v*_,B=b*v*m-g*D*m-b*d*x+h*D*x+g*d*y-h*v*y,O=i*N+r*U+l*R+u*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return t[0]=N*P,t[1]=(D*x*u-v*y*u-D*l*M+r*y*M+v*l*_-r*x*_)*P,t[2]=(d*y*u-D*m*u+D*l*p-r*y*p-d*l*_+r*m*_)*P,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*P,t[4]=U*P,t[5]=(g*y*u-b*x*u+b*l*M-i*y*M-g*l*_+i*x*_)*P,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*P,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*P,t[8]=R*P,t[9]=(b*v*u-g*D*u-b*r*M+i*D*M+g*r*_-i*v*_)*P,t[10]=(h*D*u-b*d*u+b*r*p-i*D*p-h*r*_+i*d*_)*P,t[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*P,t[12]=B*P,t[13]=(g*D*l-b*v*l+b*r*x-i*D*x-g*r*y+i*v*y)*P,t[14]=(b*d*l-h*D*l-b*r*m+i*D*m+h*r*y-i*d*y)*P,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,b=u*v,D=h*g,y=h*v,_=d*v,N=m*p,U=m*g,R=m*v,B=r.x,O=r.y,P=r.z;return l[0]=(1-(D+_))*B,l[1]=(M+R)*B,l[2]=(b-U)*B,l[3]=0,l[4]=(M-R)*O,l[5]=(1-(x+_))*O,l[6]=(y+N)*O,l[7]=0,l[8]=(b+U)*P,l[9]=(y-N)*P,l[10]=(1-(x+D))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=as.set(l[0],l[1],l[2]).length();const h=as.set(l[4],l[5],l[6]).length(),d=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,g=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=na){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let M,b;if(d===na)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===wc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=na){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(h-u),x=(i+t)*p,M=(r+l)*g;let b,D;if(d===na)b=(h+u)*v,D=-2*v;else if(d===wc)b=u*v,D=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=D,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const as=new $,pi=new Ze,ny=new $(0,0,0),iy=new $(1,1,1),Pa=new $,nc=new $,Jn=new $,y_=new Ze,M_=new Bo;class ra{constructor(t=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return y_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(y_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return M_.setFromEuler(this),this.setFromQuaternion(M_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class T0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ay=0;const E_=new $,rs=new Bo,Ki=new Ze,ic=new $,To=new $,ry=new $,sy=new Bo,T_=new $(1,0,0),b_=new $(0,1,0),A_=new $(0,0,1),R_={type:"added"},oy={type:"removed"},ss={type:"childadded",child:null},ih={type:"childremoved",child:null};class Nn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new $,i=new ra,r=new Bo,l=new $(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new se}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return rs.setFromAxisAngle(t,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,i){return rs.setFromAxisAngle(t,i),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(b_,t)}rotateZ(t){return this.rotateOnAxis(A_,t)}translateOnAxis(t,i){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(b_,t)}translateZ(t){return this.translateOnAxis(A_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ic.copy(t):ic.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(To,ic,this.up):Ki.lookAt(ic,To,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(Ki),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R_),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oy),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R_),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,ry),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new $(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new $,Qi=new $,ah=new $,Ji=new $,os=new $,ls=new $,w_=new $,rh=new $,sh=new $,oh=new $,lh=new $e,ch=new $e,uh=new $e;class gi{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Qi.subVectors(r,i),ah.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Qi),m=mi.dot(ah),p=Qi.dot(Qi),g=Qi.dot(ah),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,r),uh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(lh,u.x),h.addScaledVector(ch,u.y),h.addScaledVector(uh,u.z),h}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Qi.subVectors(t,i),mi.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;os.subVectors(l,r),ls.subVectors(u,r),rh.subVectors(t,r);const m=os.dot(rh),p=ls.dot(rh);if(m<=0&&p<=0)return i.copy(r);sh.subVectors(t,l);const g=os.dot(sh),v=ls.dot(sh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(os,h);oh.subVectors(t,u);const M=os.dot(oh),b=ls.dot(oh);if(b>=0&&M<=b)return i.copy(u);const D=M*p-m*b;if(D<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ls,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return w_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(w_,d);const _=1/(y+D+x);return h=D*_,d=x*_,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},ac={h:0,s:0,l:0};function fh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ce{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=XS(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=fh(h,u,t+1/3),this.g=fh(h,u,t),this.b=fh(h,u,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=b0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Te.workingToColorSpace(Cn.copy(this),t),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=ci){Te.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(ac);const r=Yf(za.h,ac.h,i),l=Yf(za.s,ac.s,i),u=Yf(za.l,ac.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ce;Ce.NAMES=b0;let ly=0;class Es extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ps,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Eh&&(r.blendSrc=this.blendSrc),this.blendDst!==Th&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Lo extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new $,rc=new be;let cy=0;class Si{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=m_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(t),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m_&&(t.usage=this.usage),t}}class A0 extends Si{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class R0 extends Si{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class kn extends Si{constructor(t,i,r){super(new Float32Array(t),i,r)}}let uy=0;const li=new Ze,hh=new Nn,cs=new $,$n=new Io,bo=new Io,_n=new $;class Ln extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?R0:A0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new kn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,bo.min),$n.expandByPoint(_n),_n.addVectors($n.max,bo.max),$n.expandByPoint(_n)):($n.expandByPoint(bo.min),$n.expandByPoint(bo.max))}$n.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(t,p),_n.add(cs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let H=0;H<r.count;H++)d[H]=new $,m[H]=new $;const p=new $,g=new $,v=new $,x=new be,M=new be,b=new be,D=new $,y=new $;function _(H,C,A){p.fromBufferAttribute(r,H),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,H),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,A),g.sub(p),v.sub(p),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(D.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),d[H].add(D),d[C].add(D),d[A].add(D),m[H].add(y),m[C].add(y),m[A].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let H=0,C=N.length;H<C;++H){const A=N[H],G=A.start,st=A.count;for(let ot=G,dt=G+st;ot<dt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new $,R=new $,B=new $,O=new $;function P(H){B.fromBufferAttribute(l,H),O.copy(B);const C=d[H];U.copy(C),U.sub(B.multiplyScalar(B.dot(C))).normalize(),R.crossVectors(O,C);const G=R.dot(m[H])<0?-1:1;h.setXYZW(H,U.x,U.y,U.z,G)}for(let H=0,C=N.length;H<C;++H){const A=N[H],G=A.start,st=A.count;for(let ot=G,dt=G+st;ot<dt;ot+=3)P(t.getX(ot+0)),P(t.getX(ot+1)),P(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new $,u=new $,h=new $,d=new $,m=new $,p=new $,g=new $,v=new $;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),D=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let D=0,y=m.length;D<y;D++){d.isInterleavedBufferAttribute?M=m[D]*d.data.stride+d.offset:M=m[D]*g;for(let _=0;_<g;_++)x[b++]=p[M++]}return new Si(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ln,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new Ze,ur=new Md,sc=new Fo,D_=new $,oc=new $,lc=new $,cc=new $,dh=new $,uc=new $,U_=new $,fc=new $;class vi extends Nn{constructor(t=new Ln,i=new Lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(dh.fromBufferAttribute(v,t),h?uc.addScaledVector(dh,g):uc.addScaledVector(dh.sub(i),g))}i.add(uc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sc.copy(r.boundingSphere),sc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(sc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(sc,D_)===null||ur.origin.distanceToSquared(D_)>(t.far-t.near)**2))&&(C_.copy(u).invert(),ur.copy(t.ray).applyMatrix4(C_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,D=x.length;b<D;b++){const y=x[b],_=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=N,B=U;R<B;R+=3){const O=d.getX(R),P=d.getX(R+1),H=d.getX(R+2);l=hc(this,_,t,r,p,g,v,O,P,H),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),D=Math.min(d.count,M.start+M.count);for(let y=b,_=D;y<_;y+=3){const N=d.getX(y),U=d.getX(y+1),R=d.getX(y+2);l=hc(this,h,t,r,p,g,v,N,U,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,D=x.length;b<D;b++){const y=x[b],_=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=N,B=U;R<B;R+=3){const O=R,P=R+1,H=R+2;l=hc(this,_,t,r,p,g,v,O,P,H),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let y=b,_=D;y<_;y+=3){const N=y,U=y+1,R=y+2;l=hc(this,h,t,r,p,g,v,N,U,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function fy(o,t,i,r,l,u,h,d){let m;if(t.side===Gn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Ga,d),m===null)return null;fc.copy(d),fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:o}}function hc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,oc),o.getVertexPosition(m,lc),o.getVertexPosition(p,cc);const g=fy(o,t,i,r,oc,lc,cc,U_);if(g){const v=new $;gi.getBarycoord(U_,oc,lc,cc,v),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new be)),u&&(g.uv1=gi.getInterpolatedAttribute(u,d,m,p,v,new be)),h&&(g.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};gi.getNormal(oc,lc,cc,x.normal),g.face=x,g.barycoord=v}return g}class Ts extends Ln{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(v,2));function b(D,y,_,N,U,R,B,O,P,H,C){const A=R/P,G=B/H,st=R/2,ot=B/2,dt=O/2,ft=P+1,F=H+1;let j=0,q=0;const St=new $;for(let L=0;L<F;L++){const tt=L*G-ot;for(let xt=0;xt<ft;xt++){const Mt=xt*A-st;St[D]=Mt*N,St[y]=tt*U,St[_]=dt,p.push(St.x,St.y,St.z),St[D]=0,St[y]=0,St[_]=O>0?1:-1,g.push(St.x,St.y,St.z),v.push(xt/P),v.push(1-L/H),j+=1}}for(let L=0;L<H;L++)for(let tt=0;tt<P;tt++){const xt=x+tt+ft*L,Mt=x+tt+ft*(L+1),Q=x+(tt+1)+ft*(L+1),gt=x+(tt+1)+ft*L;m.push(xt,Mt,gt),m.push(Mt,Q,gt),q+=6}d.addGroup(M,q,C),M+=q,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=ys(o[i]);for(const l in r)t[l]=r[l]}return t}function hy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function w0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const dy={clone:ys,merge:Un};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=hy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class C0 extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new $,N_=new be,L_=new be;class ti extends C0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ld*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ld*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,N_,L_),i.subVectors(L_,N_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const us=-90,fs=1;class gy extends Nn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(us,fs,t,i);l.layers=this.layers,this.add(l);const u=new ti(us,fs,t,i);u.layers=this.layers,this.add(u);const h=new ti(us,fs,t,i);h.layers=this.layers,this.add(h);const d=new ti(us,fs,t,i);d.layers=this.layers,this.add(d);const m=new ti(us,fs,t,i);m.layers=this.layers,this.add(m);const p=new ti(us,fs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class D0 extends Vn{constructor(t=[],i=vs,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _y extends yr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new D0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ts(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new vi(l,u),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=wi),new gy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Ro extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const D of t.hand.values()){const y=i.getJointPose(D,r),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ro;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class U0 extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const mh=new $,xy=new $,Sy=new se;class pr{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=mh.subVectors(r,i).cross(xy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Sy.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Fo,yy=new be(.5,.5),dc=new $;class N0{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,h=new pr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],b=l[9],D=l[10],y=l[11],_=l[12],N=l[13],U=l[14],R=l[15];if(r[0].setComponents(m-u,x-p,y-M,R-_).normalize(),r[1].setComponents(m+u,x+p,y+M,R+_).normalize(),r[2].setComponents(m+h,x+g,y+b,R+N).normalize(),r[3].setComponents(m-h,x-g,y-b,R-N).normalize(),r[4].setComponents(m-d,x-v,y-D,R-U).normalize(),i===na)r[5].setComponents(m+d,x+v,y+D,R+U).normalize();else if(i===wc)r[5].setComponents(d,v,D,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const i=yy.distanceTo(t.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(dc.x=l.normal.x>0?t.max.x:t.min.x,dc.y=l.normal.y>0?t.max.y:t.min.y,dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ed extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dc=new $,Uc=new $,O_=new Ze,Ao=new Md,pc=new Fo,gh=new $,P_=new $;class cd extends Nn{constructor(t=new Ln,i=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Dc.fromBufferAttribute(i,l-1),Uc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Dc.distanceTo(Uc);t.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(l),pc.radius+=u,t.ray.intersectsSphere(pc)===!1)return;O_.copy(l).invert(),Ao.copy(t.ray).applyMatrix4(O_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let D=M,y=b-1;D<y;D+=p){const _=g.getX(D),N=g.getX(D+1),U=mc(this,t,Ao,m,_,N,D);U&&i.push(U)}if(this.isLineLoop){const D=g.getX(b-1),y=g.getX(M),_=mc(this,t,Ao,m,D,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let D=M,y=b-1;D<y;D+=p){const _=mc(this,t,Ao,m,D,D+1,D);_&&i.push(_)}if(this.isLineLoop){const D=mc(this,t,Ao,m,b-1,M,b-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function mc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(Dc.fromBufferAttribute(d,l),Uc.fromBufferAttribute(d,u),i.distanceSqToSegment(Dc,Uc,gh,P_)>r)return;gh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(gh);if(!(p<t.near||p>t.far))return{distance:p,point:P_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class L0 extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const z_=new Ze,ud=new Md,gc=new Fo,_c=new $;class My extends Nn{constructor(t=new Ln,i=new L0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,t.ray.intersectsSphere(gc)===!1)return;z_.copy(l).invert(),ud.copy(t.ray).applyMatrix4(z_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,D=M;b<D;b++){const y=p.getX(b);_c.fromBufferAttribute(v,y),B_(_c,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=x,D=M;b<D;b++)_c.fromBufferAttribute(v,b),B_(_c,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function B_(o,t,i,r,l,u,h){const d=ud.distanceSqToPoint(o);if(d<i){const m=new $;ud.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class O0 extends Vn{constructor(t,i,r=Sr,l,u,h,d=xi,m=xi,p,g=Uo,v=1){if(g!==Uo&&g!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends Ln{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const u=[],h=[];d(l),p(r),g(),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(u.slice(),3)),this.setAttribute("uv",new kn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new $,R=new $,B=new $;for(let O=0;O<i.length;O+=3)M(i[O+0],U),M(i[O+1],R),M(i[O+2],B),m(U,R,B,N)}function m(N,U,R,B){const O=B+1,P=[];for(let H=0;H<=O;H++){P[H]=[];const C=N.clone().lerp(R,H/O),A=U.clone().lerp(R,H/O),G=O-H;for(let st=0;st<=G;st++)st===0&&H===O?P[H][st]=C:P[H][st]=C.clone().lerp(A,st/G)}for(let H=0;H<O;H++)for(let C=0;C<2*(O-H)-1;C++){const A=Math.floor(C/2);C%2===0?(x(P[H][A+1]),x(P[H+1][A]),x(P[H][A])):(x(P[H][A+1]),x(P[H+1][A+1]),x(P[H+1][A]))}}function p(N){const U=new $;for(let R=0;R<u.length;R+=3)U.x=u[R+0],U.y=u[R+1],U.z=u[R+2],U.normalize().multiplyScalar(N),u[R+0]=U.x,u[R+1]=U.y,u[R+2]=U.z}function g(){const N=new $;for(let U=0;U<u.length;U+=3){N.x=u[U+0],N.y=u[U+1],N.z=u[U+2];const R=y(N)/2/Math.PI+.5,B=_(N)/Math.PI+.5;h.push(R,1-B)}b(),v()}function v(){for(let N=0;N<h.length;N+=6){const U=h[N+0],R=h[N+2],B=h[N+4],O=Math.max(U,R,B),P=Math.min(U,R,B);O>.9&&P<.1&&(U<.2&&(h[N+0]+=1),R<.2&&(h[N+2]+=1),B<.2&&(h[N+4]+=1))}}function x(N){u.push(N.x,N.y,N.z)}function M(N,U){const R=N*3;U.x=t[R+0],U.y=t[R+1],U.z=t[R+2]}function b(){const N=new $,U=new $,R=new $,B=new $,O=new be,P=new be,H=new be;for(let C=0,A=0;C<u.length;C+=9,A+=6){N.set(u[C+0],u[C+1],u[C+2]),U.set(u[C+3],u[C+4],u[C+5]),R.set(u[C+6],u[C+7],u[C+8]),O.set(h[A+0],h[A+1]),P.set(h[A+2],h[A+3]),H.set(h[A+4],h[A+5]),B.copy(N).add(U).add(R).divideScalar(3);const G=y(B);D(O,A+0,N,G),D(P,A+2,U,G),D(H,A+4,R,G)}}function D(N,U,R,B){B<0&&N.x===1&&(h[U]=N.x-1),R.x===0&&R.z===0&&(h[U]=B/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.vertices,t.indices,t.radius,t.details)}}class Td extends Lc{constructor(t=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Td(t.radius,t.detail)}}class Oc extends Ln{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],b=[],D=[],y=[];for(let _=0;_<g;_++){const N=_*x-h;for(let U=0;U<p;U++){const R=U*v-u;b.push(R,-N,0),D.push(0,0,1),y.push(U/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<d;N++){const U=N+p*_,R=N+p*(_+1),B=N+1+p*(_+1),O=N+1+p*_;M.push(U,R,O),M.push(R,B,O)}this.setIndex(M),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(D,3)),this.setAttribute("uv",new kn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.width,t.height,t.widthSegments,t.heightSegments)}}class bd extends Ln{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new $,x=new $,M=[],b=[],D=[],y=[];for(let _=0;_<=r;_++){const N=[],U=_/r;let R=0;_===0&&h===0?R=.5/i:_===r&&m===Math.PI&&(R=-.5/i);for(let B=0;B<=i;B++){const O=B/i;v.x=-t*Math.cos(l+O*u)*Math.sin(h+U*d),v.y=t*Math.cos(h+U*d),v.z=t*Math.sin(l+O*u)*Math.sin(h+U*d),b.push(v.x,v.y,v.z),x.copy(v).normalize(),D.push(x.x,x.y,x.z),y.push(O+R,1-U),N.push(p++)}g.push(N)}for(let _=0;_<r;_++)for(let N=0;N<i;N++){const U=g[_][N+1],R=g[_][N],B=g[_+1][N],O=g[_+1][N+1];(_!==0||h>0)&&M.push(U,R,O),(_!==r-1||m<Math.PI)&&M.push(R,B,O)}this.setIndex(M),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(D,3)),this.setAttribute("uv",new kn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ad extends Lc{constructor(t=1,i=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ad(t.radius,t.detail)}}class Ey extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ty extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class by extends C0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ay extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function I_(o,t,i,r){const l=Ry(r);switch(i){case g0:return o*t;case v0:return o*t/l.components*l.byteLength;case vd:return o*t/l.components*l.byteLength;case x0:return o*t*2/l.components*l.byteLength;case xd:return o*t*2/l.components*l.byteLength;case _0:return o*t*3/l.components*l.byteLength;case _i:return o*t*4/l.components*l.byteLength;case Sd:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bh:case Fh:return Math.max(o,16)*Math.max(t,8)/4;case zh:case Ih:return Math.max(o,8)*Math.max(t,8)/2;case Hh:case Gh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case qh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case jh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case $h:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case td:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ed:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case nd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bc:case id:case ad:return Math.ceil(o/4)*Math.ceil(t/4)*16;case S0:case rd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sd:case od:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ry(o){switch(o){case aa:case d0:return{byteLength:1,components:1};case Co:case p0:case Po:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case Sr:case md:case ea:return{byteLength:4,components:1};case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P0(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function wy(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],D=v[M];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++x,v[x]=D)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const D=v[M];o.bufferSubData(p,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_E=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Cy,alphahash_pars_fragment:Dy,alphamap_fragment:Uy,alphamap_pars_fragment:Ny,alphatest_fragment:Ly,alphatest_pars_fragment:Oy,aomap_fragment:Py,aomap_pars_fragment:zy,batching_pars_vertex:By,batching_vertex:Iy,begin_vertex:Fy,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Vy,bumpmap_pars_fragment:ky,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:jy,color_pars_fragment:Zy,color_pars_vertex:Ky,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:tM,displacementmap_pars_vertex:eM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:aM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:oM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:yM,envmap_vertex:fM,fog_vertex:hM,fog_pars_vertex:dM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:_M,lights_lambert_fragment:vM,lights_lambert_pars_fragment:xM,lights_pars_begin:SM,lights_toon_fragment:MM,lights_toon_pars_fragment:EM,lights_phong_fragment:TM,lights_phong_pars_fragment:bM,lights_physical_fragment:AM,lights_physical_pars_fragment:RM,lights_fragment_begin:wM,lights_fragment_maps:CM,lights_fragment_end:DM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:OM,map_fragment:PM,map_pars_fragment:zM,map_particle_fragment:BM,map_particle_pars_fragment:IM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:HM,morphinstance_vertex:GM,morphcolor_vertex:VM,morphnormal_vertex:kM,morphtarget_pars_vertex:XM,morphtarget_vertex:WM,normal_fragment_begin:qM,normal_fragment_maps:YM,normal_pars_fragment:jM,normal_pars_vertex:ZM,normal_vertex:KM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:tE,iridescence_pars_fragment:eE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:aE,project_vertex:rE,dithering_fragment:sE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:dE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:_E,specularmap_fragment:vE,specularmap_pars_fragment:xE,tonemapping_fragment:SE,tonemapping_pars_fragment:yE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:bE,uv_vertex:AE,worldpos_vertex:RE,background_vert:wE,background_frag:CE,backgroundCube_vert:DE,backgroundCube_frag:UE,cube_vert:NE,cube_frag:LE,depth_vert:OE,depth_frag:PE,distanceRGBA_vert:zE,distanceRGBA_frag:BE,equirect_vert:IE,equirect_frag:FE,linedashed_vert:HE,linedashed_frag:GE,meshbasic_vert:VE,meshbasic_frag:kE,meshlambert_vert:XE,meshlambert_frag:WE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:jE,meshnormal_frag:ZE,meshphong_vert:KE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:$E,meshtoon_vert:tT,meshtoon_frag:eT,points_vert:nT,points_frag:iT,shadow_vert:aT,shadow_frag:rT,sprite_vert:sT,sprite_frag:oT},Lt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ri={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ri.physical={uniforms:Un([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const vc={r:0,b:0,g:0},hr=new ra,lT=new Ze;function cT(o,t,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function b(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?i:t).get(R)),R}function D(U){let R=!1;const B=b(U);B===null?_(d,m):B&&B.isColor&&(_(B,1),R=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,R){const B=b(R);B&&(B.isCubeTexture||B.mapping===Nc)?(g===void 0&&(g=new vi(new Ts(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:ys(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,P,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(R.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(hr)),g.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,(v!==B||x!==B.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,M=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new vi(new Oc(2,2),new Va({name:"BackgroundMaterial",uniforms:ys(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,R){U.getRGB(vc,w0(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,R,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,R=1){d.set(U),m=R,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:D,addToRenderList:y,dispose:N}}function uT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(A,G,st,ot,dt){let ft=!1;const F=v(ot,st,G);u!==F&&(u=F,p(u.object)),ft=M(A,ot,st,dt),ft&&b(A,ot,st,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,R(A,G,st,ot),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function v(A,G,st){const ot=st.wireframe===!0;let dt=r[A.id];dt===void 0&&(dt={},r[A.id]=dt);let ft=dt[G.id];ft===void 0&&(ft={},dt[G.id]=ft);let F=ft[ot];return F===void 0&&(F=x(m()),ft[ot]=F),F}function x(A){const G=[],st=[],ot=[];for(let dt=0;dt<i;dt++)G[dt]=0,st[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:st,attributeDivisors:ot,object:A,attributes:{},index:null}}function M(A,G,st,ot){const dt=u.attributes,ft=G.attributes;let F=0;const j=st.getAttributes();for(const q in j)if(j[q].location>=0){const L=dt[q];let tt=ft[q];if(tt===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(tt=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(tt=A.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;F++}return u.attributesNum!==F||u.index!==ot}function b(A,G,st,ot){const dt={},ft=G.attributes;let F=0;const j=st.getAttributes();for(const q in j)if(j[q].location>=0){let L=ft[q];L===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),dt[q]=tt,F++}u.attributes=dt,u.attributesNum=F,u.index=ot}function D(){const A=u.newAttributes;for(let G=0,st=A.length;G<st;G++)A[G]=0}function y(A){_(A,0)}function _(A,G){const st=u.newAttributes,ot=u.enabledAttributes,dt=u.attributeDivisors;st[A]=1,ot[A]===0&&(o.enableVertexAttribArray(A),ot[A]=1),dt[A]!==G&&(o.vertexAttribDivisor(A,G),dt[A]=G)}function N(){const A=u.newAttributes,G=u.enabledAttributes;for(let st=0,ot=G.length;st<ot;st++)G[st]!==A[st]&&(o.disableVertexAttribArray(st),G[st]=0)}function U(A,G,st,ot,dt,ft,F){F===!0?o.vertexAttribIPointer(A,G,st,dt,ft):o.vertexAttribPointer(A,G,st,ot,dt,ft)}function R(A,G,st,ot){D();const dt=ot.attributes,ft=st.getAttributes(),F=G.defaultAttributeValues;for(const j in ft){const q=ft[j];if(q.location>=0){let St=dt[j];if(St===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const L=St.normalized,tt=St.itemSize,xt=t.get(St);if(xt===void 0)continue;const Mt=xt.buffer,Q=xt.type,gt=xt.bytesPerElement,Et=Q===o.INT||Q===o.UNSIGNED_INT||St.gpuType===md;if(St.isInterleavedBufferAttribute){const Rt=St.data,Ct=Rt.stride,oe=St.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<q.locationSize;Qt++)_(q.location+Qt,Rt.meshPerAttribute);A.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<q.locationSize;Qt++)y(q.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Qt=0;Qt<q.locationSize;Qt++)U(q.location+Qt,tt/q.locationSize,Q,L,Ct*gt,(oe+tt/q.locationSize*Qt)*gt,Et)}else{if(St.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)_(q.location+Rt,St.meshPerAttribute);A.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)y(q.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Rt=0;Rt<q.locationSize;Rt++)U(q.location+Rt,tt/q.locationSize,Q,L,tt*gt,tt/q.locationSize*Rt*gt,Et)}}else if(F!==void 0){const L=F[j];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(q.location,L);break;case 3:o.vertexAttrib3fv(q.location,L);break;case 4:o.vertexAttrib4fv(q.location,L);break;default:o.vertexAttrib1fv(q.location,L)}}}}N()}function B(){H();for(const A in r){const G=r[A];for(const st in G){const ot=G[st];for(const dt in ot)g(ot[dt].object),delete ot[dt];delete G[st]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const G=r[A.id];for(const st in G){const ot=G[st];for(const dt in ot)g(ot[dt].object),delete ot[dt];delete G[st]}delete r[A.id]}function P(A){for(const G in r){const st=r[G];if(st[A.id]===void 0)continue;const ot=st[A.id];for(const dt in ot)g(ot[dt].object),delete ot[dt];delete st[A.id]}}function H(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:y,disableUnusedAttributes:N}}function fT(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let D=0;D<v;D++)b+=g[D]*x[D];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function hT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==_i&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const H=P===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==aa&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ea&&!H)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:B,maxSamples:O}}function dT(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new pr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,D=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const N=u?0:r,U=N*4;let R=_.clippingState||null;m.value=R,R=g(b,x,U,M);for(let B=0;B!==U;++B)R[B]=i[B];_.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,M,b){const D=v!==null?v.length:0;let y=null;if(D!==0){if(y=m.value,b!==!0||y===null){const _=M+D*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,R=M;U!==D;++U,R+=4)h.copy(v[U]).applyMatrix4(N,d),h.normal.toArray(y,R),y[R+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,y}}function pT(o){let t=new WeakMap;function i(h,d){return d===Nh?h.mapping=vs:d===Lh&&(h.mapping=xs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nh||d===Lh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new _y(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ds=4,F_=[.125,.215,.35,.446,.526,.582],_r=20,_h=new by,H_=new Ce;let vh=null,xh=0,Sh=0,yh=!1;const mr=(1+Math.sqrt(5))/2,hs=1/mr,G_=[new $(-mr,hs,0),new $(mr,hs,0),new $(-hs,0,mr),new $(hs,0,mr),new $(0,mr,-hs),new $(0,mr,hs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],mT=new $;class V_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=mT}=u;vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,Sh),this._renderer.xr.enabled=yh,t.scissorTest=!1,xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===vs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Po,format:_i,colorSpace:Ss,depthBuffer:!1},l=k_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gT(u)),this._blurMaterial=_T(u,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,_h)}_sceneToCubeUV(t,i,r,l,u){const m=new ti(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(H_),v.toneMapping=Ha,v.autoClear=!1;const b=new Lo({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),D=new vi(new Ts,b);let y=!1;const _=t.background;_?_.isColor&&(b.color.copy(_),t.background=null,y=!0):(b.color.copy(H_),y=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const R=this._cubeSize;xc(l,U*R,N>2?R:0,R,R),v.setRenderTarget(l),y&&v.render(D,m),v.render(t,m)}D.geometry.dispose(),D.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===vs||t.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new vi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;xc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,_h)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=G_[(l-u-1)%G_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new vi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),D=u/b,y=isFinite(u)?1+Math.floor(g*D):_r;y>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const _=[];let N=0;for(let P=0;P<_r;++P){const H=P/D,C=Math.exp(-H*H/2);_.push(C),P===0?N+=C:P<y&&(N+=2*C)}for(let P=0;P<_.length;P++)_[P]=_[P]/N;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const R=this._sizeLods[l],B=3*R*(l>U-ds?l-U+ds:0),O=4*(this._cubeSize-R);xc(i,B,O,3*R,2*R),m.setRenderTarget(i),m.render(v,_h)}}function gT(o){const t=[],i=[],r=[];let l=o;const u=o-ds+1+F_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ds?m=F_[h-o+ds-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,D=3,y=2,_=1,N=new Float32Array(D*b*M),U=new Float32Array(y*b*M),R=new Float32Array(_*b*M);for(let O=0;O<M;O++){const P=O%3*2/3-1,H=O>2?0:-1,C=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];N.set(C,D*b*O),U.set(x,y*b*O);const A=[O,O,O,O,O,O];R.set(A,_*b*O)}const B=new Ln;B.setAttribute("position",new Si(N,D)),B.setAttribute("uv",new Si(U,y)),B.setAttribute("faceIndex",new Si(R,_)),t.push(B),l>ds&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function k_(o,t,i){const r=new yr(o,t,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function _T(o,t,i){const r=new Float32Array(_r),l=new $(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function X_(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function W_(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Nh||m===Lh,g=m===vs||m===xs;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function xT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ms("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ST(o,t,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let D=0;if(M!==null){const N=M.array;D=M.version;for(let U=0,R=N.length;U<R;U+=3){const B=N[U+0],O=N[U+1],P=N[U+2];x.push(B,O,O,P,P,B)}}else if(b!==void 0){const N=b.array;D=b.version;for(let U=0,R=N.length/3-1;U<R;U+=3){const B=U+0,O=U+1,P=U+2;x.push(B,O,O,P,P,B)}}else return;const y=new(M0(x)?R0:A0)(x,1);y.version=D;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function yT(o,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,x*h,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(x,M,b,D){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],D[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,D,0,b);let _=0;for(let N=0;N<b;N++)_+=M[N]*D[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function MT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ET(o,t,i){const r=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let R=0;b===!0&&(R=1),D===!0&&(R=2),y===!0&&(R=3);let B=d.attributes.position.count*R,O=1;B>t.maxTextureSize&&(O=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*O*4*v),H=new E0(P,B,O,v);H.type=ea,H.needsUpdate=!0;const C=R*4;for(let G=0;G<v;G++){const st=_[G],ot=N[G],dt=U[G],ft=B*O*4*G;for(let F=0;F<st.count;F++){const j=F*C;b===!0&&(l.fromBufferAttribute(st,F),P[ft+j+0]=l.x,P[ft+j+1]=l.y,P[ft+j+2]=l.z,P[ft+j+3]=0),D===!0&&(l.fromBufferAttribute(ot,F),P[ft+j+4]=l.x,P[ft+j+5]=l.y,P[ft+j+6]=l.z,P[ft+j+7]=0),y===!0&&(l.fromBufferAttribute(dt,F),P[ft+j+8]=l.x,P[ft+j+9]=l.y,P[ft+j+10]=l.z,P[ft+j+11]=dt.itemSize===4?l.w:1)}}x={count:v,texture:H,size:new be(B,O)},r.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const D=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function TT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const z0=new Vn,q_=new O0(1,1),B0=new E0,I0=new ty,F0=new D0,Y_=[],j_=[],Z_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function bs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Y_[l];if(u===void 0&&(u=new Float32Array(l),Y_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function un(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Pc(o,t){let i=j_[t];i===void 0&&(i=new Int32Array(t),j_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function bT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),un(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),un(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),un(i,t)}}function CT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;Q_.set(r),o.uniformMatrix2fv(this.addr,!1,Q_),un(i,r)}}function DT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;K_.set(r),o.uniformMatrix3fv(this.addr,!1,K_),un(i,r)}}function UT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;Z_.set(r),o.uniformMatrix4fv(this.addr,!1,Z_),un(i,r)}}function NT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),un(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),un(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),un(i,t)}}function zT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),un(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),un(i,t)}}function FT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),un(i,t)}}function HT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(q_.compareFunction=y0,u=q_):u=z0,i.setTexture2D(t||u,l)}function GT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||I0,l)}function VT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||F0,l)}function kT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||B0,l)}function XT(o){switch(o){case 5126:return bT;case 35664:return AT;case 35665:return RT;case 35666:return wT;case 35674:return CT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return LT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return zT;case 36294:return BT;case 36295:return IT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}function WT(o,t){o.uniform1fv(this.addr,t)}function qT(o,t){const i=bs(t,this.size,2);o.uniform2fv(this.addr,i)}function YT(o,t){const i=bs(t,this.size,3);o.uniform3fv(this.addr,i)}function jT(o,t){const i=bs(t,this.size,4);o.uniform4fv(this.addr,i)}function ZT(o,t){const i=bs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function KT(o,t){const i=bs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function QT(o,t){const i=bs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function JT(o,t){o.uniform1iv(this.addr,t)}function $T(o,t){o.uniform2iv(this.addr,t)}function tb(o,t){o.uniform3iv(this.addr,t)}function eb(o,t){o.uniform4iv(this.addr,t)}function nb(o,t){o.uniform1uiv(this.addr,t)}function ib(o,t){o.uniform2uiv(this.addr,t)}function ab(o,t){o.uniform3uiv(this.addr,t)}function rb(o,t){o.uniform4uiv(this.addr,t)}function sb(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||z0,u[h])}function ob(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||I0,u[h])}function lb(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||F0,u[h])}function cb(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||B0,u[h])}function ub(o){switch(o){case 5126:return WT;case 35664:return qT;case 35665:return YT;case 35666:return jT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return tb;case 35669:case 35673:return eb;case 5125:return nb;case 36294:return ib;case 36295:return ab;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}class fb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XT(i.type)}}class hb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ub(i.type)}}class db{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function J_(o,t){o.seq.push(t),o.map[t.id]=t}function pb(o,t,i){const r=o.name,l=r.length;for(Mh.lastIndex=0;;){const u=Mh.exec(r),h=Mh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J_(i,p===void 0?new fb(d,o,t):new hb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new db(d),J_(i,v)),i=v}}}class Ac{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);pb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function $_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const mb=37297;let gb=0;function _b(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const t0=new se;function vb(o){Te._getMatrix(t0,Te.workingColorSpace,o);const t=`mat3( ${t0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Rc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function e0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+_b(o.getShaderSource(t),h)}else return l}function xb(o,t){const i=vb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Sb(o,t){let i;switch(t){case bS:i="Linear";break;case AS:i="Reinhard";break;case RS:i="Cineon";break;case wS:i="ACESFilmic";break;case DS:i="AgX";break;case US:i="Neutral";break;case CS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new $;function yb(){Te.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Eb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Tb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function wo(o){return o!==""}function n0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function i0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(o){return o.replace(bb,Rb)}const Ab=new Map;function Rb(o,t){let i=ce[t];if(i===void 0){const r=Ab.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return fd(i)}const wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(o){return o.replace(wb,Cb)}function Cb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function r0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Db(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===u0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===aS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function Ub(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vs:case xs:t="ENVMAP_TYPE_CUBE";break;case Nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Lb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case f0:t="ENVMAP_BLENDING_MULTIPLY";break;case ES:t="ENVMAP_BLENDING_MIX";break;case TS:t="ENVMAP_BLENDING_ADD";break}return t}function Ob(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Pb(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Db(i),p=Ub(i),g=Nb(i),v=Lb(i),x=Ob(i),M=Mb(i),b=Eb(u),D=l.createProgram();let y,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(y=[r0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[r0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Sb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,xb("linearToOutputTexel",i.outputColorSpace),yb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),h=fd(h),h=n0(h,i),h=i0(h,i),d=fd(d),d=n0(d,i),d=i0(d,i),h=a0(h),d=a0(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=N+y+h,R=N+_+d,B=$_(l,l.VERTEX_SHADER,U),O=$_(l,l.FRAGMENT_SHADER,R);l.attachShader(D,B),l.attachShader(D,O),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function P(G){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(D).trim(),ot=l.getShaderInfoLog(B).trim(),dt=l.getShaderInfoLog(O).trim();let ft=!0,F=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,B,O);else{const j=e0(l,B,"vertex"),q=e0(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+st+`
`+j+`
`+q)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(ot===""||dt==="")&&(F=!1);F&&(G.diagnostics={runnable:ft,programLog:st,vertexShader:{log:ot,prefix:y},fragmentShader:{log:dt,prefix:_}})}l.deleteShader(B),l.deleteShader(O),H=new Ac(l,D),C=Tb(l,D)}let H;this.getUniforms=function(){return H===void 0&&P(this),H};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(D,mb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gb++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=O,this}let zb=0;class Bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Ib(t),i.set(t,r)),r}}class Ib{constructor(t){this.id=zb++,this.code=t,this.usedTimes=0}}function Fb(o,t,i,r,l,u,h){const d=new T0,m=new Bb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,A,G,st,ot){const dt=st.fog,ft=ot.geometry,F=C.isMeshStandardMaterial?st.environment:null,j=(C.isMeshStandardMaterial?i:t).get(C.envMap||F),q=j&&j.mapping===Nc?j.image.height:null,St=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=L!==void 0?L.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let Mt,Q,gt,Et;if(St){const Me=Ri[St];Mt=Me.vertexShader,Q=Me.fragmentShader}else Mt=C.vertexShader,Q=C.fragmentShader,m.update(C),gt=m.getVertexShaderID(C),Et=m.getFragmentShaderID(C);const Rt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,Le=!!C.map,Fe=!!C.matcap,ge=!!j,V=!!C.aoMap,xn=!!C.lightMap,ye=!!C.bumpMap,de=!!C.normalMap,Vt=!!C.displacementMap,_e=!!C.emissiveMap,jt=!!C.metalnessMap,ae=!!C.roughnessMap,Ke=C.anisotropy>0,z=C.clearcoat>0,E=C.dispersion>0,et=C.iridescence>0,ht=C.sheen>0,mt=C.transmission>0,ct=Ke&&!!C.anisotropyMap,Pt=z&&!!C.clearcoatMap,Ut=z&&!!C.clearcoatNormalMap,Gt=z&&!!C.clearcoatRoughnessMap,kt=et&&!!C.iridescenceMap,yt=et&&!!C.iridescenceThicknessMap,zt=ht&&!!C.sheenColorMap,qt=ht&&!!C.sheenRoughnessMap,Yt=!!C.specularMap,wt=!!C.specularColorMap,ie=!!C.specularIntensityMap,X=mt&&!!C.transmissionMap,Nt=mt&&!!C.thicknessMap,Tt=!!C.gradientMap,Bt=!!C.alphaMap,At=C.alphaTest>0,vt=!!C.alphaHash,Ft=!!C.extensions;let ne=Ha;C.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const De={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:Mt,fragmentShader:Q,defines:C.defines,customVertexShaderID:gt,customFragmentShaderID:Et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:oe,instancingColor:oe&&ot.instanceColor!==null,instancingMorph:oe&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ss,alphaToCoverage:!!C.alphaToCoverage,map:Le,matcap:Fe,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:q,aoMap:V,lightMap:xn,bumpMap:ye,normalMap:de,displacementMap:x&&Vt,emissiveMap:_e,normalMapObjectSpace:de&&C.normalMapType===zS,normalMapTangentSpace:de&&C.normalMapType===PS,metalnessMap:jt,roughnessMap:ae,anisotropy:Ke,anisotropyMap:ct,clearcoat:z,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:zt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:wt,specularIntensityMap:ie,transmission:mt,transmissionMap:X,thicknessMap:Nt,gradientMap:Tt,opaque:C.transparent===!1&&C.blending===ps&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:vt,combine:C.combine,mapUv:Le&&D(C.map.channel),aoMapUv:V&&D(C.aoMap.channel),lightMapUv:xn&&D(C.lightMap.channel),bumpMapUv:ye&&D(C.bumpMap.channel),normalMapUv:de&&D(C.normalMap.channel),displacementMapUv:Vt&&D(C.displacementMap.channel),emissiveMapUv:_e&&D(C.emissiveMap.channel),metalnessMapUv:jt&&D(C.metalnessMap.channel),roughnessMapUv:ae&&D(C.roughnessMap.channel),anisotropyMapUv:ct&&D(C.anisotropyMap.channel),clearcoatMapUv:Pt&&D(C.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&D(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&D(C.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&D(C.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&D(C.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&D(C.sheenColorMap.channel),sheenRoughnessMapUv:qt&&D(C.sheenRoughnessMap.channel),specularMapUv:Yt&&D(C.specularMap.channel),specularColorMapUv:wt&&D(C.specularColorMap.channel),specularIntensityMapUv:ie&&D(C.specularIntensityMap.channel),transmissionMapUv:X&&D(C.transmissionMap.channel),thicknessMapUv:Nt&&D(C.thicknessMap.channel),alphaMapUv:Bt&&D(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(de||Ke),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ft.attributes.uv&&(Le||Bt),fog:!!dt,useFog:C.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:ot.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Le&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Ie,decodeVideoTextureEmissive:_e&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Ie,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ta,flipSided:C.side===Gn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function _(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)A.push(G),A.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(N(A,C),U(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function N(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function U(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function R(C){const A=b[C.type];let G;if(A){const st=Ri[A];G=dy.clone(st.uniforms)}else G=C.uniforms;return G}function B(C,A){let G;for(let st=0,ot=g.length;st<ot;st++){const dt=g[st];if(dt.cacheKey===A){G=dt,++G.usedTimes;break}}return G===void 0&&(G=new Pb(o,A,C,u),g.push(G)),G}function O(C){if(--C.usedTimes===0){const A=g.indexOf(C);g[A]=g[g.length-1],g.pop(),C.destroy()}}function P(C){m.remove(C)}function H(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:B,releaseProgram:O,releaseShaderCache:P,programs:g,dispose:H}}function Hb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Gb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function s0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function o0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,b,D,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:D,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=D,_.group=y),t++,_}function d(v,x,M,b,D,y){const _=h(v,x,M,b,D,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,b,D,y){const _=h(v,x,M,b,D,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Gb),r.length>1&&r.sort(x||s0),l.length>1&&l.sort(x||s0)}function g(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Vb(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new o0,o.set(r,[h])):l>=u.length?(h=new o0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function kb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ce};break;case"SpotLight":i={position:new $,direction:new $,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function Xb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Wb=0;function qb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Yb(o){const t=new kb,i=Xb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,u=new Ze,h=new Ze;function d(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,D=0,y=0,_=0,N=0,U=0,R=0,B=0,O=0,P=0;p.sort(qb);for(let C=0,A=p.length;C<A;C++){const G=p[C],st=G.color,ot=G.intensity,dt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=st.r*ot,v+=st.g*ot,x+=st.b*ot;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],ot);P++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,q=i.get(G);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ft,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=F,M++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(st).multiplyScalar(ot),F.distance=dt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[D]=F;const j=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,j.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[D]=j.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[D]=q,r.spotShadowMap[D]=ft,R++}D++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(st).multiplyScalar(ot),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=F,y++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const j=G.shadow,q=i.get(G);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=ft,r.pointShadowMatrix[b]=G.shadow.matrix,U++}r.point[b]=F,b++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(ot),F.groundColor.copy(G.groundColor).multiplyScalar(ot),r.hemi[_]=F,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==M||H.pointLength!==b||H.spotLength!==D||H.rectAreaLength!==y||H.hemiLength!==_||H.numDirectionalShadows!==N||H.numPointShadows!==U||H.numSpotShadows!==R||H.numSpotMaps!==B||H.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=R+B-O,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=P,H.directionalLength=M,H.pointLength=b,H.spotLength=D,H.rectAreaLength=y,H.hemiLength=_,H.numDirectionalShadows=N,H.numPointShadows=U,H.numSpotShadows=R,H.numSpotMaps=B,H.numLightProbes=P,r.version=Wb++)}function m(p,g){let v=0,x=0,M=0,b=0,D=0;const y=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const U=p[_];if(U.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),v++}else if(U.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),h.identity(),u.copy(U.matrixWorld),u.premultiply(y),h.extractRotation(u),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const R=r.hemi[D];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),D++}}}return{setup:d,setupView:m,state:r}}function l0(o){const t=new Yb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function jb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new l0(o),t.set(l,[d])):u>=h.length?(d=new l0(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qb(o,t,i){let r=new N0;const l=new be,u=new be,h=new $e,d=new Ey({depthPacking:OS}),m=new Ty,p={},g=i.maxTextureSize,v={[Ga]:Gn,[Gn]:Ga,[ta]:ta},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Zb,fragmentShader:Kb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ln;b.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new vi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let _=this.type;this.render=function(O,P,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Fa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const ot=_!==$i&&this.type===$i,dt=_===$i&&this.type!==$i;for(let ft=0,F=O.length;ft<F;ft++){const j=O[ft],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,q.mapSize.y=u.y)),q.map===null||ot===!0||dt===!0){const tt=this.type!==$i?{minFilter:xi,magFilter:xi}:{};q.map!==null&&q.map.dispose(),q.map=new yr(l.x,l.y,tt),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const L=q.getViewportCount();for(let tt=0;tt<L;tt++){const xt=q.getViewport(tt);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),st.viewport(h),q.updateMatrices(j,tt),r=q.getFrustum(),R(P,H,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===$i&&N(q,H),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(C,A,G)};function N(O,P){const H=t.update(D);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new yr(l.x,l.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(P,null,H,x,D,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(P,null,H,M,D,null)}function U(O,P,H,C){let A=null;const G=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)A=G;else if(A=H.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const st=A.uuid,ot=P.uuid;let dt=p[st];dt===void 0&&(dt={},p[st]=dt);let ft=dt[ot];ft===void 0&&(ft=A.clone(),dt[ot]=ft,P.addEventListener("dispose",B)),A=ft}if(A.visible=P.visible,A.wireframe=P.wireframe,C===$i?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:v[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=o.properties.get(A);st.light=H}return A}function R(O,P,H,C,A){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===$i)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const ot=t.update(O),dt=O.material;if(Array.isArray(dt)){const ft=ot.groups;for(let F=0,j=ft.length;F<j;F++){const q=ft[F],St=dt[q.materialIndex];if(St&&St.visible){const L=U(O,St,C,A);O.onBeforeShadow(o,O,P,H,ot,L,q),o.renderBufferDirect(H,null,ot,L,O,q),O.onAfterShadow(o,O,P,H,ot,L,q)}}}else if(dt.visible){const ft=U(O,dt,C,A);O.onBeforeShadow(o,O,P,H,ot,ft,null),o.renderBufferDirect(H,null,ot,ft,O,null),O.onAfterShadow(o,O,P,H,ot,ft,null)}}const st=O.children;for(let ot=0,dt=st.length;ot<dt;ot++)R(st[ot],P,H,C,A)}function B(O){O.target.removeEventListener("dispose",B);for(const H in p){const C=p[H],A=O.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const Jb={[bh]:Ah,[Rh]:Dh,[wh]:Uh,[_s]:Ch,[Ah]:bh,[Dh]:Rh,[Uh]:wh,[Ch]:_s};function $b(o,t){function i(){let X=!1;const Nt=new $e;let Tt=null;const Bt=new $e(0,0,0,0);return{setMask:function(At){Tt!==At&&!X&&(o.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){X=At},setClear:function(At,vt,Ft,ne,De){De===!0&&(At*=ne,vt*=ne,Ft*=ne),Nt.set(At,vt,Ft,ne),Bt.equals(Nt)===!1&&(o.clearColor(At,vt,Ft,ne),Bt.copy(Nt))},reset:function(){X=!1,Tt=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,Tt=null,Bt=null,At=null;return{setReversed:function(vt){if(Nt!==vt){const Ft=t.get("EXT_clip_control");vt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(vt){vt?Rt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!X&&(o.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Nt&&(vt=Jb[vt]),Bt!==vt){switch(vt){case bh:o.depthFunc(o.NEVER);break;case Ah:o.depthFunc(o.ALWAYS);break;case Rh:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case wh:o.depthFunc(o.EQUAL);break;case Ch:o.depthFunc(o.GEQUAL);break;case Dh:o.depthFunc(o.GREATER);break;case Uh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){At!==vt&&(Nt&&(vt=1-vt),o.clearDepth(vt),At=vt)},reset:function(){X=!1,Tt=null,Bt=null,At=null,Nt=!1}}}function l(){let X=!1,Nt=null,Tt=null,Bt=null,At=null,vt=null,Ft=null,ne=null,De=null;return{setTest:function(Me){X||(Me?Rt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Me){Nt!==Me&&!X&&(o.stencilMask(Me),Nt=Me)},setFunc:function(Me,Xn,fn){(Tt!==Me||Bt!==Xn||At!==fn)&&(o.stencilFunc(Me,Xn,fn),Tt=Me,Bt=Xn,At=fn)},setOp:function(Me,Xn,fn){(vt!==Me||Ft!==Xn||ne!==fn)&&(o.stencilOp(Me,Xn,fn),vt=Me,Ft=Xn,ne=fn)},setLocked:function(Me){X=Me},setClear:function(Me){De!==Me&&(o.clearStencil(Me),De=Me)},reset:function(){X=!1,Nt=null,Tt=null,Bt=null,At=null,vt=null,Ft=null,ne=null,De=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,D=!1,y=null,_=null,N=null,U=null,R=null,B=null,O=null,P=new Ce(0,0,0),H=0,C=!1,A=null,G=null,st=null,ot=null,dt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=j>=2);let St=null,L={};const tt=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),Mt=new $e().fromArray(tt),Q=new $e().fromArray(xt);function gt(X,Nt,Tt,Bt){const At=new Uint8Array(4),vt=o.createTexture();o.bindTexture(X,vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Tt;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Nt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return vt}const Et={};Et[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(o.DEPTH_TEST),h.setFunc(_s),ye(!1),de(u_),Rt(o.CULL_FACE),V(Fa);function Rt(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function Ct(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function oe(X,Nt){return v[X]!==Nt?(o.bindFramebuffer(X,Nt),v[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(X,Nt){let Tt=M,Bt=!1;if(X){Tt=x.get(Nt),Tt===void 0&&(Tt=[],x.set(Nt,Tt));const At=X.textures;if(Tt.length!==At.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ft=At.length;vt<Ft;vt++)Tt[vt]=o.COLOR_ATTACHMENT0+vt;Tt.length=At.length,Bt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Tt)}function Le(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Fe={[gr]:o.FUNC_ADD,[sS]:o.FUNC_SUBTRACT,[oS]:o.FUNC_REVERSE_SUBTRACT};Fe[lS]=o.MIN,Fe[cS]=o.MAX;const ge={[uS]:o.ZERO,[fS]:o.ONE,[hS]:o.SRC_COLOR,[Eh]:o.SRC_ALPHA,[vS]:o.SRC_ALPHA_SATURATE,[gS]:o.DST_COLOR,[pS]:o.DST_ALPHA,[dS]:o.ONE_MINUS_SRC_COLOR,[Th]:o.ONE_MINUS_SRC_ALPHA,[_S]:o.ONE_MINUS_DST_COLOR,[mS]:o.ONE_MINUS_DST_ALPHA,[xS]:o.CONSTANT_COLOR,[SS]:o.ONE_MINUS_CONSTANT_COLOR,[yS]:o.CONSTANT_ALPHA,[MS]:o.ONE_MINUS_CONSTANT_ALPHA};function V(X,Nt,Tt,Bt,At,vt,Ft,ne,De,Me){if(X===Fa){D===!0&&(Ct(o.BLEND),D=!1);return}if(D===!1&&(Rt(o.BLEND),D=!0),X!==rS){if(X!==y||Me!==C){if((_!==gr||R!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,R=gr),Me)switch(X){case ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case f_:o.blendFunc(o.ONE,o.ONE);break;case h_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case d_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case f_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case h_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,U=null,B=null,O=null,P.set(0,0,0),H=0,y=X,C=Me}return}At=At||Nt,vt=vt||Tt,Ft=Ft||Bt,(Nt!==_||At!==R)&&(o.blendEquationSeparate(Fe[Nt],Fe[At]),_=Nt,R=At),(Tt!==N||Bt!==U||vt!==B||Ft!==O)&&(o.blendFuncSeparate(ge[Tt],ge[Bt],ge[vt],ge[Ft]),N=Tt,U=Bt,B=vt,O=Ft),(ne.equals(P)===!1||De!==H)&&(o.blendColor(ne.r,ne.g,ne.b,De),P.copy(ne),H=De),y=X,C=!1}function xn(X,Nt){X.side===ta?Ct(o.CULL_FACE):Rt(o.CULL_FACE);let Tt=X.side===Gn;Nt&&(Tt=!Tt),ye(Tt),X.blending===ps&&X.transparent===!1?V(Fa):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),_e(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){A!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),A=X)}function de(X){X!==nS?(Rt(o.CULL_FACE),X!==G&&(X===u_?o.cullFace(o.BACK):X===iS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=X}function Vt(X){X!==st&&(F&&o.lineWidth(X),st=X)}function _e(X,Nt,Tt){X?(Rt(o.POLYGON_OFFSET_FILL),(ot!==Nt||dt!==Tt)&&(o.polygonOffset(Nt,Tt),ot=Nt,dt=Tt)):Ct(o.POLYGON_OFFSET_FILL)}function jt(X){X?Rt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ae(X){X===void 0&&(X=o.TEXTURE0+ft-1),St!==X&&(o.activeTexture(X),St=X)}function Ke(X,Nt,Tt){Tt===void 0&&(St===null?Tt=o.TEXTURE0+ft-1:Tt=St);let Bt=L[Tt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[Tt]=Bt),(Bt.type!==X||Bt.texture!==Nt)&&(St!==Tt&&(o.activeTexture(Tt),St=Tt),o.bindTexture(X,Nt||Et[X]),Bt.type=X,Bt.texture=Nt)}function z(){const X=L[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(X){Mt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function qt(X){Q.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function Yt(X,Nt){let Tt=p.get(Nt);Tt===void 0&&(Tt=new WeakMap,p.set(Nt,Tt));let Bt=Tt.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(Nt,X.name),Tt.set(X,Bt))}function wt(X,Nt){const Bt=p.get(Nt).get(X);m.get(Nt)!==Bt&&(o.uniformBlockBinding(Nt,Bt,X.__bindingPointIndex),m.set(Nt,Bt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,L={},v={},x=new WeakMap,M=[],b=null,D=!1,y=null,_=null,N=null,U=null,R=null,B=null,O=null,P=new Ce(0,0,0),H=0,C=!1,A=null,G=null,st=null,ot=null,dt=null,Mt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Rt,disable:Ct,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Le,setBlending:V,setMaterial:xn,setFlipSided:ye,setCullFace:de,setLineWidth:Vt,setPolygonOffset:_e,setScissorTest:jt,activeTexture:ae,bindTexture:Ke,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:kt,texImage3D:yt,updateUBOMapping:Yt,uniformBlockBinding:wt,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:zt,viewport:qt,reset:ie}}function t1(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return M?new OffscreenCanvas(z,E):Cc("canvas")}function D(z,E,et){let ht=1;const mt=Ke(z);if((mt.width>et||mt.height>et)&&(ht=et/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ct=Math.floor(ht*mt.width),Pt=Math.floor(ht*mt.height);v===void 0&&(v=b(ct,Pt));const Ut=E?b(ct,Pt):v;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(z,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),z;return z}function y(z){return z.generateMipmaps}function _(z){o.generateMipmap(z)}function N(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(z,E,et,ht,mt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ct=E;if(E===o.RED&&(et===o.FLOAT&&(ct=o.R32F),et===o.HALF_FLOAT&&(ct=o.R16F),et===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.R8UI),et===o.UNSIGNED_SHORT&&(ct=o.R16UI),et===o.UNSIGNED_INT&&(ct=o.R32UI),et===o.BYTE&&(ct=o.R8I),et===o.SHORT&&(ct=o.R16I),et===o.INT&&(ct=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ct=o.RG32F),et===o.HALF_FLOAT&&(ct=o.RG16F),et===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RG8UI),et===o.UNSIGNED_SHORT&&(ct=o.RG16UI),et===o.UNSIGNED_INT&&(ct=o.RG32UI),et===o.BYTE&&(ct=o.RG8I),et===o.SHORT&&(ct=o.RG16I),et===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),et===o.UNSIGNED_INT&&(ct=o.RGB32UI),et===o.BYTE&&(ct=o.RGB8I),et===o.SHORT&&(ct=o.RGB16I),et===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),et===o.UNSIGNED_INT&&(ct=o.RGBA32UI),et===o.BYTE&&(ct=o.RGBA8I),et===o.SHORT&&(ct=o.RGBA16I),et===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),E===o.RGBA){const Pt=mt?Rc:Te.getTransfer(ht);et===o.FLOAT&&(ct=o.RGBA32F),et===o.HALF_FLOAT&&(ct=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ct=Pt===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function R(z,E){let et;return z?E===null||E===Sr||E===Do?et=o.DEPTH24_STENCIL8:E===ea?et=o.DEPTH32F_STENCIL8:E===Co&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===Do?et=o.DEPTH_COMPONENT24:E===ea?et=o.DEPTH_COMPONENT32F:E===Co&&(et=o.DEPTH_COMPONENT16),et}function B(z,E){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==xi&&z.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function O(z){const E=z.target;E.removeEventListener("dispose",O),H(E),E.isVideoTexture&&g.delete(E)}function P(z){const E=z.target;E.removeEventListener("dispose",P),A(E)}function H(z){const E=r.get(z);if(E.__webglInit===void 0)return;const et=z.source,ht=x.get(et);if(ht){const mt=ht[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&C(z),Object.keys(ht).length===0&&x.delete(et)}r.remove(z)}function C(z){const E=r.get(z);o.deleteTexture(E.__webglTexture);const et=z.source,ht=x.get(et);delete ht[E.__cacheKey],h.memory.textures--}function A(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let mt=0;mt<E.__webglFramebuffer[ht].length;mt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][mt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=z.textures;for(let ht=0,mt=et.length;ht<mt;ht++){const ct=r.get(et[ht]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(et[ht])}r.remove(z)}let G=0;function st(){G=0}function ot(){const z=G;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),G+=1,z}function dt(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ft(z,E){const et=r.get(z);if(z.isVideoTexture&&jt(z),z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){const ht=z.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(et,z,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function F(z,E){const et=r.get(z);if(z.version>0&&et.__version!==z.version){Et(et,z,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function j(z,E){const et=r.get(z);if(z.version>0&&et.__version!==z.version){Et(et,z,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function q(z,E){const et=r.get(z);if(z.version>0&&et.__version!==z.version){Rt(et,z,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const St={[Oh]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Ph]:o.MIRRORED_REPEAT},L={[xi]:o.NEAREST,[NS]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},tt={[BS]:o.NEVER,[kS]:o.ALWAYS,[IS]:o.LESS,[y0]:o.LEQUAL,[FS]:o.EQUAL,[VS]:o.GEQUAL,[HS]:o.GREATER,[GS]:o.NOTEQUAL};function xt(z,E){if(E.type===ea&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Wf||E.magFilter===Kl||E.magFilter===xr||E.minFilter===wi||E.minFilter===Wf||E.minFilter===Kl||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,St[E.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xi||E.minFilter!==Kl&&E.minFilter!==xr||E.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Mt(z,E){let et=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",O));const ht=E.source;let mt=x.get(ht);mt===void 0&&(mt={},x.set(ht,mt));const ct=dt(E);if(ct!==z.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),mt[ct].usedTimes++;const Pt=mt[z.__cacheKey];Pt!==void 0&&(mt[z.__cacheKey].usedTimes--,Pt.usedTimes===0&&C(E)),z.__cacheKey=ct,z.__webglTexture=mt[ct].texture}return et}function Q(z,E,et){return Math.floor(Math.floor(z/et)/E)}function gt(z,E,et,ht){const ct=z.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ht,E.data);else{ct.sort((yt,zt)=>yt.start-zt.start);let Pt=0;for(let yt=1;yt<ct.length;yt++){const zt=ct[Pt],qt=ct[yt],Yt=zt.start+zt.count,wt=Q(qt.start,E.width,4),ie=Q(zt.start,E.width,4);qt.start<=Yt+1&&wt===ie&&Q(qt.start+qt.count-1,E.width,4)===wt?zt.count=Math.max(zt.count,qt.start+qt.count-zt.start):(++Pt,ct[Pt]=qt)}ct.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,zt=ct.length;yt<zt;yt++){const qt=ct[yt],Yt=Math.floor(qt.start/4),wt=Math.ceil(qt.count/4),ie=Yt%E.width,X=Math.floor(Yt/E.width),Nt=wt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ie,X,Nt,Tt,et,ht,E.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function Et(z,E,et){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const mt=Mt(z,E),ct=E.source;i.bindTexture(ht,z.__webglTexture,o.TEXTURE0+et);const Pt=r.get(ct);if(ct.version!==Pt.__version||mt===!0){i.activeTexture(o.TEXTURE0+et);const Ut=Te.getPrimaries(Te.workingColorSpace),Gt=E.colorSpace===Ia?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===Ia||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let yt=D(E.image,!1,l.maxTextureSize);yt=ae(E,yt);const zt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Yt=U(E.internalFormat,zt,qt,E.colorSpace,E.isVideoTexture);xt(ht,E);let wt;const ie=E.mipmaps,X=E.isVideoTexture!==!0,Nt=Pt.__version===void 0||mt===!0,Tt=ct.dataReady,Bt=B(E,yt);if(E.isDepthTexture)Yt=R(E.format===No,E.type),Nt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Yt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Yt,yt.width,yt.height,0,zt,qt,null));else if(E.isDataTexture)if(ie.length>0){X&&Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,Yt,ie[0].width,ie[0].height);for(let At=0,vt=ie.length;At<vt;At++)wt=ie[At],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,wt.width,wt.height,zt,qt,wt.data):i.texImage2D(o.TEXTURE_2D,At,Yt,wt.width,wt.height,0,zt,qt,wt.data);E.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,Yt,yt.width,yt.height),Tt&&gt(E,yt,zt,qt)):i.texImage2D(o.TEXTURE_2D,0,Yt,yt.width,yt.height,0,zt,qt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Yt,ie[0].width,ie[0].height,yt.depth);for(let At=0,vt=ie.length;At<vt;At++)if(wt=ie[At],E.format!==_i)if(zt!==null)if(X){if(Tt)if(E.layerUpdates.size>0){const Ft=I_(wt.width,wt.height,E.format,E.type);for(const ne of E.layerUpdates){const De=wt.data.subarray(ne*Ft/wt.data.BYTES_PER_ELEMENT,(ne+1)*Ft/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ne,wt.width,wt.height,1,zt,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,yt.depth,zt,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,Yt,wt.width,wt.height,yt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,yt.depth,zt,qt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,Yt,wt.width,wt.height,yt.depth,0,zt,qt,wt.data)}else{X&&Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,Yt,ie[0].width,ie[0].height);for(let At=0,vt=ie.length;At<vt;At++)wt=ie[At],E.format!==_i?zt!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,wt.width,wt.height,zt,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,At,Yt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,wt.width,wt.height,zt,qt,wt.data):i.texImage2D(o.TEXTURE_2D,At,Yt,wt.width,wt.height,0,zt,qt,wt.data)}else if(E.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Yt,yt.width,yt.height,yt.depth),Tt)if(E.layerUpdates.size>0){const At=I_(yt.width,yt.height,E.format,E.type);for(const vt of E.layerUpdates){const Ft=yt.data.subarray(vt*At/yt.data.BYTES_PER_ELEMENT,(vt+1)*At/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,zt,qt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,zt,qt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,yt.width,yt.height,yt.depth,0,zt,qt,yt.data);else if(E.isData3DTexture)X?(Nt&&i.texStorage3D(o.TEXTURE_3D,Bt,Yt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,zt,qt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,yt.width,yt.height,yt.depth,0,zt,qt,yt.data);else if(E.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,Yt,yt.width,yt.height);else{let At=yt.width,vt=yt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Yt,At,vt,0,zt,qt,null),At>>=1,vt>>=1}}else if(ie.length>0){if(X&&Nt){const At=Ke(ie[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Yt,At.width,At.height)}for(let At=0,vt=ie.length;At<vt;At++)wt=ie[At],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,zt,qt,wt):i.texImage2D(o.TEXTURE_2D,At,Yt,zt,qt,wt);E.generateMipmaps=!1}else if(X){if(Nt){const At=Ke(yt);i.texStorage2D(o.TEXTURE_2D,Bt,Yt,At.width,At.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,qt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Yt,zt,qt,yt);y(E)&&_(ht),Pt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Rt(z,E,et){if(E.image.length!==6)return;const ht=Mt(z,E),mt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+et);const ct=r.get(mt);if(mt.version!==ct.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Pt=Te.getPrimaries(Te.workingColorSpace),Ut=E.colorSpace===Ia?null:Te.getPrimaries(E.colorSpace),Gt=E.colorSpace===Ia||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let vt=0;vt<6;vt++)!kt&&!yt?zt[vt]=D(E.image[vt],!0,l.maxCubemapSize):zt[vt]=yt?E.image[vt].image:E.image[vt],zt[vt]=ae(E,zt[vt]);const qt=zt[0],Yt=u.convert(E.format,E.colorSpace),wt=u.convert(E.type),ie=U(E.internalFormat,Yt,wt,E.colorSpace),X=E.isVideoTexture!==!0,Nt=ct.__version===void 0||ht===!0,Tt=mt.dataReady;let Bt=B(E,qt);xt(o.TEXTURE_CUBE_MAP,E);let At;if(kt){X&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,qt.width,qt.height);for(let vt=0;vt<6;vt++){At=zt[vt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==_i?Yt!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ne.width,ne.height,Yt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ie,ne.width,ne.height,0,Yt,wt,ne.data)}}}else{if(At=E.mipmaps,X&&Nt){At.length>0&&Bt++;const vt=Ke(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt[vt].width,zt[vt].height,Yt,wt,zt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,zt[vt].width,zt[vt].height,0,Yt,wt,zt[vt].data);for(let Ft=0;Ft<At.length;Ft++){const De=At[Ft].image[vt].image;X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,De.width,De.height,Yt,wt,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ie,De.width,De.height,0,Yt,wt,De.data)}}else{X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt,wt,zt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Yt,wt,zt[vt]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,Yt,wt,ne.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ie,Yt,wt,ne.image[vt])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ct.__version=mt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Ct(z,E,et,ht,mt,ct){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Gt=U(et.internalFormat,Pt,Ut,et.colorSpace),kt=r.get(E),yt=r.get(et);if(yt.__renderTarget=E,!kt.__hasExternalTextures){const zt=Math.max(1,E.width>>ct),qt=Math.max(1,E.height>>ct);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,ct,Gt,zt,qt,E.depth,0,Pt,Ut,null):i.texImage2D(mt,ct,Gt,zt,qt,0,Pt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,mt,yt.__webglTexture,0,Vt(E)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,mt,yt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(z,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,z),E.depthBuffer){const ht=E.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=R(E.stencilBuffer,mt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Vt(E);_e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,z)}else{const ht=E.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],Pt=u.convert(ct.format,ct.colorSpace),Ut=u.convert(ct.type),Gt=U(ct.internalFormat,Pt,Ut,ct.colorSpace),kt=Vt(E);et&&_e(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Gt,E.width,E.height):_e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const mt=ht.__webglTexture,ct=Vt(E);if(E.depthTexture.format===Uo)_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0);else if(E.depthTexture.format===No)_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Le(z){const E=r.get(z),et=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const ht=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=ht}if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=z.texture.mipmaps;ht&&ht.length>0?Qt(E.__webglFramebuffer[0],z):Qt(E.__webglFramebuffer,z)}else if(et){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ht],z,!1);else{const mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,ct)}}else{const ht=z.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,z,!1);else{const mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(z,E,et){const ht=r.get(z);E!==void 0&&Ct(ht.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(z)}function ge(z){const E=z.texture,et=r.get(z),ht=r.get(E);z.addEventListener("dispose",P);const mt=z.textures,ct=z.isWebGLCubeRenderTarget===!0,Pt=mt.length>1;if(Pt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ct){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)et.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=mt.length;Ut<Gt;Ut++){const kt=r.get(mt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(z.samples>0&&_e(z)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<mt.length;Ut++){const Gt=mt[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),yt=u.convert(Gt.type),zt=U(Gt.internalFormat,kt,yt,Gt.colorSpace,z.isXRRenderTarget===!0),qt=Vt(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,zt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Ct(et.__webglFramebuffer[Ut][Gt],z,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else Ct(et.__webglFramebuffer[Ut],z,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=mt.length;Ut<Gt;Ut++){const kt=mt[Ut],yt=r.get(kt);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),xt(o.TEXTURE_2D,kt),Ct(et.__webglFramebuffer,z,kt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),y(kt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ut=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ht.__webglTexture),xt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Ct(et.__webglFramebuffer[Gt],z,E,o.COLOR_ATTACHMENT0,Ut,Gt);else Ct(et.__webglFramebuffer,z,E,o.COLOR_ATTACHMENT0,Ut,0);y(E)&&_(Ut),i.unbindTexture()}z.depthBuffer&&Le(z)}function V(z){const E=z.textures;for(let et=0,ht=E.length;et<ht;et++){const mt=E[et];if(y(mt)){const ct=N(z),Pt=r.get(mt).__webglTexture;i.bindTexture(ct,Pt),_(ct),i.unbindTexture()}}}const xn=[],ye=[];function de(z){if(z.samples>0){if(_e(z)===!1){const E=z.textures,et=z.width,ht=z.height;let mt=o.COLOR_BUFFER_BIT;const ct=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(z),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=z.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=r.get(E[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,mt,o.NEAREST),m===!0&&(xn.length=0,ye.length=0,xn.push(o.COLOR_ATTACHMENT0+kt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(xn.push(ct),ye.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=r.get(E[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Vt(z){return Math.min(l.maxSamples,z.samples)}function _e(z){const E=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(z){const E=h.render.frame;g.get(z)!==E&&(g.set(z,E),z.update())}function ae(z,E){const et=z.colorSpace,ht=z.format,mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||et!==Ss&&et!==Ia&&(Te.getTransfer(et)===Ie?(ht!==_i||mt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ke(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=st,this.setTexture2D=ft,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=_e}function e1(o,t){function i(r,l=Ia){let u;const h=Te.getTransfer(l);if(r===aa)return o.UNSIGNED_BYTE;if(r===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_d)return o.UNSIGNED_SHORT_5_5_5_1;if(r===m0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===d0)return o.BYTE;if(r===p0)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===md)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===Po)return o.HALF_FLOAT;if(r===g0)return o.ALPHA;if(r===_0)return o.RGB;if(r===_i)return o.RGBA;if(r===Uo)return o.DEPTH_COMPONENT;if(r===No)return o.DEPTH_STENCIL;if(r===v0)return o.RED;if(r===vd)return o.RED_INTEGER;if(r===x0)return o.RG;if(r===xd)return o.RG_INTEGER;if(r===Sd)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===Ec||r===Tc)if(h===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zh||r===Bh||r===Ih||r===Fh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ih)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hh||r===Gh||r===Vh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Hh||r===Gh)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Vh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===td)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ed)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc||r===id||r===ad)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===bc)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===id)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ad)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===S0||r===rd||r===sd||r===od)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===rd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===od)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Do?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Vn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Va({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends Ms{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,b=null;const D=new a1,y=i.getContextAttributes();let _=null,N=null;const U=[],R=[],B=new be;let O=null;const P=new ti;P.viewport=new $e;const H=new ti;H.viewport=new $e;const C=[P,H],A=new Ay;let G=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let gt=U[Q];return gt===void 0&&(gt=new ph,U[Q]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Q){let gt=U[Q];return gt===void 0&&(gt=new ph,U[Q]=gt),gt.getGripSpace()},this.getHand=function(Q){let gt=U[Q];return gt===void 0&&(gt=new ph,U[Q]=gt),gt.getHandSpace()};function ot(Q){const gt=R.indexOf(Q.inputSource);if(gt===-1)return;const Et=U[gt];Et!==void 0&&(Et.update(Q.inputSource,Q.frame,p||h),Et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function dt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",ft);for(let Q=0;Q<U.length;Q++){const gt=R[Q];gt!==null&&(R[Q]=null,U[Q].disconnect(gt))}G=null,st=null,D.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,N=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Rt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=y.stencil?No:Uo,Rt=y.stencil?Do:Sr);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new yr(x.textureWidth,x.textureHeight,{format:_i,type:aa,depthTexture:new O0(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new yr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function ft(Q){for(let gt=0;gt<Q.removed.length;gt++){const Et=Q.removed[gt],Rt=R.indexOf(Et);Rt>=0&&(R[Rt]=null,U[Rt].disconnect(Et))}for(let gt=0;gt<Q.added.length;gt++){const Et=Q.added[gt];let Rt=R.indexOf(Et);if(Rt===-1){for(let oe=0;oe<U.length;oe++)if(oe>=R.length){R.push(Et),Rt=oe;break}else if(R[oe]===null){R[oe]=Et,Rt=oe;break}if(Rt===-1)break}const Ct=U[Rt];Ct&&Ct.connect(Et)}}const F=new $,j=new $;function q(Q,gt,Et){F.setFromMatrixPosition(gt.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const Rt=F.distanceTo(j),Ct=gt.projectionMatrix.elements,oe=Et.projectionMatrix.elements,Qt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],ge=(Ct[9]-1)/Ct[5],V=(Ct[8]-1)/Ct[0],xn=(oe[8]+1)/oe[0],ye=Qt*V,de=Qt*xn,Vt=Rt/(-V+xn),_e=Vt*-V;if(gt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Le+Vt,Ke=ye-_e,z=de+(Rt-_e),E=Fe*Le/ae*jt,et=ge*Le/ae*jt;Q.projectionMatrix.makePerspective(Ke,z,E,et,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,gt){gt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(gt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let gt=Q.near,Et=Q.far;D.texture!==null&&(D.depthNear>0&&(gt=D.depthNear),D.depthFar>0&&(Et=D.depthFar)),A.near=H.near=P.near=gt,A.far=H.far=P.far=Et,(G!==A.near||st!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),G=A.near,st=A.far),P.layers.mask=Q.layers.mask|2,H.layers.mask=Q.layers.mask|4,A.layers.mask=P.layers.mask|H.layers.mask;const Rt=Q.parent,Ct=A.cameras;St(A,Rt);for(let oe=0;oe<Ct.length;oe++)St(Ct[oe],Rt);Ct.length===2?q(A,P,H):A.projectionMatrix.copy(P.projectionMatrix),L(Q,A,Rt)};function L(Q,gt,Et){Et===null?Q.matrix.copy(gt.matrixWorld):(Q.matrix.copy(Et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(gt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ld*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(A)};let tt=null;function xt(Q,gt){if(g=gt.getViewerPose(p||h),b=gt,g!==null){const Et=g.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Rt=!1;Et.length!==A.cameras.length&&(A.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Et.length;Qt++){const Le=Et[Qt];let Fe=null;if(M!==null)Fe=M.getViewport(Le);else{const V=v.getViewSubImage(x,Le);Fe=V.viewport,Qt===0&&(t.setRenderTargetTextures(N,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(N))}let ge=C[Qt];ge===void 0&&(ge=new ti,ge.layers.enable(Qt),ge.viewport=new $e,C[Qt]=ge),ge.matrix.fromArray(Le.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Le.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(A.matrix.copy(ge.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Rt===!0&&A.cameras.push(ge)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Et[0]);Qt&&Qt.isValid&&Qt.texture&&D.init(t,Qt,l.renderState)}}for(let Et=0;Et<U.length;Et++){const Rt=R[Et],Ct=U[Et];Rt!==null&&Ct!==void 0&&Ct.update(Rt,gt,p||h)}tt&&tt(Q,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),b=null}const Mt=new P0;Mt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const dr=new ra,s1=new Ze;function o1(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,w0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,N,U,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,R)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),D(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,N,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=t.get(_),U=N.envMap,R=N.envMapRotation;U&&(y.envMap.value=U,dr.copy(R),dr.x*=-1,dr.y*=-1,dr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),y.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(dr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,N,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const N=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function l1(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const R=U.program;r.uniformBlockBinding(N,R)}function p(N,U){let R=l[N.id];R===void 0&&(b(N),R=g(N),l[N.id]=R,N.addEventListener("dispose",y));const B=U.program;r.updateUBOMapping(N,B);const O=t.render.frame;u[N.id]!==O&&(x(N),u[N.id]=O)}function g(N){const U=v();N.__bindingPointIndex=U;const R=o.createBuffer(),B=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,B,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=l[N.id],R=N.uniforms,B=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let O=0,P=R.length;O<P;O++){const H=Array.isArray(R[O])?R[O]:[R[O]];for(let C=0,A=H.length;C<A;C++){const G=H[C];if(M(G,O,C,B)===!0){const st=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let ft=0;ft<ot.length;ft++){const F=ot[ft],j=D(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,st+dt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,dt),dt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,U,R,B){const O=N.value,P=U+"_"+R;if(B[P]===void 0)return typeof O=="number"||typeof O=="boolean"?B[P]=O:B[P]=O.clone(),!0;{const H=B[P];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return B[P]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function b(N){const U=N.uniforms;let R=0;const B=16;for(let P=0,H=U.length;P<H;P++){const C=Array.isArray(U[P])?U[P]:[U[P]];for(let A=0,G=C.length;A<G;A++){const st=C[A],ot=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ft=ot.length;dt<ft;dt++){const F=ot[dt],j=D(F),q=R%B,St=q%j.boundary,L=q+St;R+=St,L!==0&&B-L<j.storage&&(R+=B-L),st.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=j.storage}}}const O=R%B;return O>0&&(R+=B-O),N.__size=R,N.__cache={},this}function D(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const R=h.indexOf(U.__bindingPointIndex);h.splice(R,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class H0{constructor(t={}){const{canvas:i=WS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),D=new Int32Array(4);let y=null,_=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let B=!1;this._outputColorSpace=ci;let O=0,P=0,H=null,C=-1,A=null;const G=new $e,st=new $e;let ot=null;const dt=new Ce(0);let ft=0,F=i.width,j=i.height,q=1,St=null,L=null;const tt=new $e(0,0,F,j),xt=new $e(0,0,F,j);let Mt=!1;const Q=new N0;let gt=!1,Et=!1;const Rt=new Ze,Ct=new Ze,oe=new $,Qt=new $e,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return H===null?q:1}let V=r;function xn(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",vt,!1),V===null){const Y="webgl2";if(V=xn(Y,w),V===null)throw xn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,de,Vt,_e,jt,ae,Ke,z,E,et,ht,mt,ct,Pt,Ut,Gt,kt,yt,zt,qt,Yt,wt,ie,X;function Nt(){ye=new xT(V),ye.init(),wt=new e1(V,ye),de=new hT(V,ye,t,wt),Vt=new $b(V,ye),de.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),_e=new MT(V),jt=new Hb,ae=new t1(V,ye,Vt,jt,de,wt,_e),Ke=new pT(R),z=new vT(R),E=new wy(V),ie=new uT(V,E),et=new ST(V,E,_e,ie),ht=new TT(V,et,E,_e),zt=new ET(V,de,ae),Gt=new dT(jt),mt=new Fb(R,Ke,z,ye,de,ie,Gt),ct=new o1(R,jt),Pt=new Vb,Ut=new jb(ye),yt=new cT(R,Ke,z,Vt,ht,M,m),kt=new Qb(R,ht,de),X=new l1(V,_e,de,Vt),qt=new fT(V,ye,_e),Yt=new yT(V,ye,_e),_e.programs=mt.programs,R.capabilities=de,R.extensions=ye,R.properties=jt,R.renderLists=Pt,R.shadowMap=kt,R.state=Vt,R.info=_e}Nt();const Tt=new r1(R,V);this.xr=Tt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(F,j,!1))},this.getSize=function(w){return w.set(F,j)},this.setSize=function(w,Y,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,j=Y,i.width=Math.floor(w*q),i.height=Math.floor(Y*q),at===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(F*q,j*q).floor()},this.setDrawingBufferSize=function(w,Y,at){F=w,j=Y,q=at,i.width=Math.floor(w*at),i.height=Math.floor(Y*at),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,Y,at,rt){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,Y,at,rt),Vt.viewport(G.copy(tt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,Y,at,rt){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,Y,at,rt),Vt.scissor(st.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){Vt.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,at=!0){let rt=0;if(w){let Z=!1;if(H!==null){const bt=H.texture.format;Z=bt===Sd||bt===xd||bt===vd}if(Z){const bt=H.texture.type,Dt=bt===aa||bt===Sr||bt===Co||bt===Do||bt===gd||bt===_d,Ot=yt.getClearColor(),It=yt.getClearAlpha(),te=Ot.r,Kt=Ot.g,Xt=Ot.b;Dt?(b[0]=te,b[1]=Kt,b[2]=Xt,b[3]=It,V.clearBufferuiv(V.COLOR,0,b)):(D[0]=te,D[1]=Kt,D[2]=Xt,D[3]=It,V.clearBufferiv(V.COLOR,0,D))}else rt|=V.COLOR_BUFFER_BIT}Y&&(rt|=V.DEPTH_BUFFER_BIT),at&&(rt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),Pt.dispose(),Ut.dispose(),jt.dispose(),Ke.dispose(),z.dispose(),ht.dispose(),ie.dispose(),X.dispose(),mt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",rn),Tt.removeEventListener("sessionend",Sn),Pn.stop()};function Bt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=_e.autoReset,Y=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,Z=kt.type;Nt(),_e.autoReset=w,kt.enabled=Y,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=Z}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){const Y=w.target;Y.removeEventListener("dispose",Ft),ne(Y)}function ne(w){De(w),jt.remove(w)}function De(w){const Y=jt.get(w).programs;Y!==void 0&&(Y.forEach(function(at){mt.releaseProgram(at)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,at,rt,Z,bt){Y===null&&(Y=Le);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Wa(w,Y,at,rt,Z);Vt.setMaterial(rt,Dt);let It=at.index,te=1;if(rt.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;te=2}const Kt=at.drawRange,Xt=at.attributes.position;let le=Kt.start*te,Re=(Kt.start+Kt.count)*te;bt!==null&&(le=Math.max(le,bt.start*te),Re=Math.min(Re,(bt.start+bt.count)*te)),It!==null?(le=Math.max(le,0),Re=Math.min(Re,It.count)):Xt!=null&&(le=Math.max(le,0),Re=Math.min(Re,Xt.count));const Xe=Re-le;if(Xe<0||Xe===1/0)return;ie.setup(Z,rt,Ot,at,It);let fe,we=qt;if(It!==null&&(fe=E.get(It),we=Yt,we.setIndex(fe)),Z.isMesh)rt.wireframe===!0?(Vt.setLineWidth(rt.wireframeLinewidth*ge()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(Z.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),Vt.setLineWidth(Zt*ge()),Z.isLineSegments?we.setMode(V.LINES):Z.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else Z.isPoints?we.setMode(V.POINTS):Z.isSprite&&we.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))we.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,Oe=Z._multiDrawCounts,ve=Z._multiDrawCount,hn=It?E.get(It).bytesPerElement:1,ca=jt.get(rt).currentProgram.getUniforms();for(let Ve=0;Ve<ve;Ve++)ca.setValue(V,"_gl_DrawID",Ve),we.render(Zt[Ve]/hn,Oe[Ve])}else if(Z.isInstancedMesh)we.renderInstances(le,Xe,Z.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Oe=Math.min(at.instanceCount,Zt);we.renderInstances(le,Xe,Oe)}else we.render(le,Xe)};function Me(w,Y,at){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,oa(w,Y,at),w.side=Ga,w.needsUpdate=!0,oa(w,Y,at),w.side=ta):oa(w,Y,at)}this.compile=function(w,Y,at=null){at===null&&(at=w),_=Ut.get(at),_.init(Y),U.push(_),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),w!==at&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const rt=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Ot=bt[Dt];Me(Ot,at,Z),rt.add(Ot)}else Me(bt,at,Z),rt.add(bt)}),_=U.pop(),rt},this.compileAsync=function(w,Y,at=null){const rt=this.compile(w,Y,at);return new Promise(Z=>{function bt(){if(rt.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&rt.delete(Dt)}),rt.size===0){Z(w);return}setTimeout(bt,10)}ye.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Xn=null;function fn(w){Xn&&Xn(w)}function rn(){Pn.stop()}function Sn(){Pn.start()}const Pn=new P0;Pn.setAnimationLoop(fn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(w){Xn=w,Tt.setAnimationLoop(w),w===null?Pn.stop():Pn.start()},Tt.addEventListener("sessionstart",rn),Tt.addEventListener("sessionend",Sn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,Y,H),_=Ut.get(w,U.length),_.init(Y),U.push(_),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),Et=this.localClippingEnabled,gt=Gt.init(this.clippingPlanes,Et),y=Pt.get(w,N.length),y.init(),N.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&ka(bt,Y,-1/0,R.sortObjects)}ka(w,Y,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(St,L),Fe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Fe&&yt.addToRenderList(y,w),this.info.render.frame++,gt===!0&&Gt.beginShadows();const at=_.state.shadowsArray;kt.render(at,w,Y),gt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,Z=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(Z.length>0)for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const It=bt[Dt];Go(rt,Z,w,It)}Fe&&yt.render(w);for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const It=bt[Dt];Ho(y,w,It,It.viewport)}}else Z.length>0&&Go(rt,Z,w,Y),Fe&&yt.render(w),Ho(y,w,Y);H!==null&&P===0&&(ae.updateMultisampleRenderTarget(H),ae.updateRenderTargetMipmap(H)),w.isScene===!0&&w.onAfterRender(R,w,Y),ie.resetDefaultState(),C=-1,A=null,U.pop(),U.length>0?(_=U[U.length-1],gt===!0&&Gt.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function ka(w,Y,at,rt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)at=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){rt&&Qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const Dt=ht.update(w),Ot=w.material;Ot.visible&&y.push(w,Dt,Ot,at,Qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Dt=ht.update(w),Ot=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qt.copy(w.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ot)){const It=Dt.groups;for(let te=0,Kt=It.length;te<Kt;te++){const Xt=It[te],le=Ot[Xt.materialIndex];le&&le.visible&&y.push(w,Dt,le,at,Qt.z,Xt)}}else Ot.visible&&y.push(w,Dt,Ot,at,Qt.z,null)}}const bt=w.children;for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++)ka(bt[Dt],Y,at,rt)}function Ho(w,Y,at,rt){const Z=w.opaque,bt=w.transmissive,Dt=w.transparent;_.setupLightsView(at),gt===!0&&Gt.setGlobalState(R.clippingPlanes,at),rt&&Vt.viewport(G.copy(rt)),Z.length>0&&Xa(Z,Y,at),bt.length>0&&Xa(bt,Y,at),Dt.length>0&&Xa(Dt,Y,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Go(w,Y,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new yr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Po:aa,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const bt=_.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||G;bt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);const Ot=R.getRenderTarget(),It=R.getActiveCubeFace(),te=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(dt),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),Fe&&yt.render(at);const Kt=R.toneMapping;R.toneMapping=Ha;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),gt===!0&&Gt.setGlobalState(R.clippingPlanes,rt),Xa(w,at,rt),ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Re=0,Xe=Y.length;Re<Xe;Re++){const fe=Y[Re],we=fe.object,Zt=fe.geometry,Oe=fe.material,ve=fe.group;if(Oe.side===ta&&we.layers.test(rt.layers)){const hn=Oe.side;Oe.side=Gn,Oe.needsUpdate=!0,sa(we,at,rt,Zt,Oe,ve),Oe.side=hn,Oe.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt))}R.setRenderTarget(Ot,It,te),R.setClearColor(dt,ft),Xt!==void 0&&(rt.viewport=Xt),R.toneMapping=Kt}function Xa(w,Y,at){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,bt=w.length;Z<bt;Z++){const Dt=w[Z],Ot=Dt.object,It=Dt.geometry,te=Dt.group;let Kt=Dt.material;Kt.allowOverride===!0&&rt!==null&&(Kt=rt),Ot.layers.test(at.layers)&&sa(Ot,Y,at,It,Kt,te)}}function sa(w,Y,at,rt,Z,bt){w.onBeforeRender(R,Y,at,rt,Z,bt),w.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(R,Y,at,rt,w,bt),Z.transparent===!0&&Z.side===ta&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,R.renderBufferDirect(at,Y,rt,Z,w,bt),Z.side=Ga,Z.needsUpdate=!0,R.renderBufferDirect(at,Y,rt,Z,w,bt),Z.side=ta):R.renderBufferDirect(at,Y,rt,Z,w,bt),w.onAfterRender(R,Y,at,rt,Z,bt)}function oa(w,Y,at){Y.isScene!==!0&&(Y=Le);const rt=jt.get(w),Z=_.state.lights,bt=_.state.shadowsArray,Dt=Z.state.version,Ot=mt.getParameters(w,Z.state,bt,Y,at),It=mt.getProgramCacheKey(Ot);let te=rt.programs;rt.environment=w.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(w.isMeshStandardMaterial?z:Ke).get(w.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",Ft),te=new Map,rt.programs=te);let Kt=te.get(It);if(Kt!==void 0){if(rt.currentProgram===Kt&&rt.lightsStateVersion===Dt)return Di(w,Ot),Kt}else Ot.uniforms=mt.getUniforms(w),w.onBeforeCompile(Ot,R),Kt=mt.acquireProgram(Ot,It),te.set(It,Kt),rt.uniforms=Ot.uniforms;const Xt=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Di(w,Ot),rt.needsLights=tn(w),rt.lightsStateVersion=Dt,rt.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=Kt,rt.uniformsList=null,Kt}function Ci(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Ac.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Di(w,Y){const at=jt.get(w);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Wa(w,Y,at,rt,Z){Y.isScene!==!0&&(Y=Le),ae.resetTextureUnits();const bt=Y.fog,Dt=rt.isMeshStandardMaterial?Y.environment:null,Ot=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ss,It=(rt.isMeshStandardMaterial?z:Ke).get(rt.envMap||Dt),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Xe=Ha;rt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xe=R.toneMapping);const fe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,we=fe!==void 0?fe.length:0,Zt=jt.get(rt),Oe=_.state.lights;if(gt===!0&&(Et===!0||w!==A)){const dn=w===A&&rt.id===C;Gt.setState(rt,w,dn)}let ve=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Oe.state.version||Zt.outputColorSpace!==Ot||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==It||rt.fog===!0&&Zt.fog!==bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Gt.numPlanes||Zt.numIntersection!==Gt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Kt||Zt.morphTargets!==Xt||Zt.morphNormals!==le||Zt.morphColors!==Re||Zt.toneMapping!==Xe||Zt.morphTargetsCount!==we)&&(ve=!0):(ve=!0,Zt.__version=rt.version);let hn=Zt.currentProgram;ve===!0&&(hn=oa(rt,Y,Z));let ca=!1,Ve=!1,Ni=!1;const He=hn.getUniforms(),bn=Zt.uniforms;if(Vt.useProgram(hn.program)&&(ca=!0,Ve=!0,Ni=!0),rt.id!==C&&(C=rt.id,Ve=!0),ca||A!==w){Vt.buffers.depth.getReversed()?(Rt.copy(w.projectionMatrix),YS(Rt),jS(Rt),He.setValue(V,"projectionMatrix",Rt)):He.setValue(V,"projectionMatrix",w.projectionMatrix),He.setValue(V,"viewMatrix",w.matrixWorldInverse);const yn=He.map.cameraPosition;yn!==void 0&&yn.setValue(V,oe.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&He.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Ve=!0,Ni=!0)}if(Z.isSkinnedMesh){He.setOptional(V,Z,"bindMatrix"),He.setOptional(V,Z,"bindMatrixInverse");const dn=Z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),He.setValue(V,"boneTexture",dn.boneTexture,ae))}Z.isBatchedMesh&&(He.setOptional(V,Z,"batchingTexture"),He.setValue(V,"batchingTexture",Z._matricesTexture,ae),He.setOptional(V,Z,"batchingIdTexture"),He.setValue(V,"batchingIdTexture",Z._indirectTexture,ae),He.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(V,"batchingColorTexture",Z._colorsTexture,ae));const sn=at.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&zt.update(Z,at,hn),(Ve||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,He.setValue(V,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(bn.envMap.value=It,bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),Ve&&(He.setValue(V,"toneMappingExposure",R.toneMappingExposure),Zt.needsLights&&la(bn,Ni),bt&&rt.fog===!0&&ct.refreshFogUniforms(bn,bt),ct.refreshMaterialUniforms(bn,rt,q,j,_.state.transmissionRenderTarget[w.id]),Ac.upload(V,Ci(Zt),bn,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ac.upload(V,Ci(Zt),bn,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&He.setValue(V,"center",Z.center),He.setValue(V,"modelViewMatrix",Z.modelViewMatrix),He.setValue(V,"normalMatrix",Z.normalMatrix),He.setValue(V,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const dn=rt.uniformsGroups;for(let yn=0,yi=dn.length;yn<yi;yn++){const Li=dn[yn];X.update(Li,hn),X.bind(Li,hn)}}return hn}function la(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function tn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,Y,at){const rt=jt.get(w);rt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),jt.get(w.texture).__webglTexture=Y,jt.get(w.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const at=jt.get(w);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const Vo=V.createFramebuffer();this.setRenderTarget=function(w,Y=0,at=0){H=w,O=Y,P=at;let rt=!0,Z=null,bt=!1,Dt=!1;if(w){const It=jt.get(w);if(It.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(V.FRAMEBUFFER,null),rt=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(w);else if(It.__hasExternalTextures)ae.rebindTextures(w,jt.get(w.texture).__webglTexture,jt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xt=w.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Kt=jt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?Z=Kt[Y][at]:Z=Kt[Y],bt=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?Z=jt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?Z=Kt[at]:Z=Kt,G.copy(w.viewport),st.copy(w.scissor),ot=w.scissorTest}else G.copy(tt).multiplyScalar(q).floor(),st.copy(xt).multiplyScalar(q).floor(),ot=Mt;if(at!==0&&(Z=Vo),Vt.bindFramebuffer(V.FRAMEBUFFER,Z)&&rt&&Vt.drawBuffers(w,Z),Vt.viewport(G),Vt.scissor(st),Vt.setScissorTest(ot),bt){const It=jt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,at)}else if(Dt){const It=jt.get(w.texture),te=Y;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.__webglTexture,at,te)}else if(w!==null&&at!==0){const It=jt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(w,Y,at,rt,Z,bt,Dt,Ot=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){Vt.bindFramebuffer(V.FRAMEBUFFER,It);try{const te=w.textures[Ot],Kt=te.format,Xt=te.type;if(!de.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-rt&&at>=0&&at<=w.height-Z&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),V.readPixels(Y,at,rt,Z,wt.convert(Kt),wt.convert(Xt),bt))}finally{const te=H!==null?jt.get(H).__webglFramebuffer:null;Vt.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,Y,at,rt,Z,bt,Dt,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(Y>=0&&Y<=w.width-rt&&at>=0&&at<=w.height-Z){Vt.bindFramebuffer(V.FRAMEBUFFER,It);const te=w.textures[Ot],Kt=te.format,Xt=te.type;if(!de.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,le),V.bufferData(V.PIXEL_PACK_BUFFER,bt.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),V.readPixels(Y,at,rt,Z,wt.convert(Kt),wt.convert(Xt),0);const Re=H!==null?jt.get(H).__webglFramebuffer:null;Vt.bindFramebuffer(V.FRAMEBUFFER,Re);const Xe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await qS(V,Xe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,le),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,bt),V.deleteBuffer(le),V.deleteSync(Xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(w.image.width*rt),bt=Math.floor(w.image.height*rt),Dt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;ae.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,at,0,0,Dt,Ot,Z,bt),Vt.unbindTexture()};const ko=V.createFramebuffer(),Ui=V.createFramebuffer();this.copyTextureToTexture=function(w,Y,at=null,rt=null,Z=0,bt=null){bt===null&&(Z!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Dt,Ot,It,te,Kt,Xt,le,Re,Xe;const fe=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(at!==null)Dt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,Kt=at.min.y,Xt=at.isBox3?at.min.z:0;else{const sn=Math.pow(2,-Z);Dt=Math.floor(fe.width*sn),Ot=Math.floor(fe.height*sn),w.isDataArrayTexture?It=fe.depth:w.isData3DTexture?It=Math.floor(fe.depth*sn):It=1,te=0,Kt=0,Xt=0}rt!==null?(le=rt.x,Re=rt.y,Xe=rt.z):(le=0,Re=0,Xe=0);const we=wt.convert(Y.format),Zt=wt.convert(Y.type);let Oe;Y.isData3DTexture?(ae.setTexture3D(Y,0),Oe=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),Oe=V.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),Oe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ve=V.getParameter(V.UNPACK_ROW_LENGTH),hn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ca=V.getParameter(V.UNPACK_SKIP_PIXELS),Ve=V.getParameter(V.UNPACK_SKIP_ROWS),Ni=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,fe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xt);const He=w.isDataArrayTexture||w.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const sn=jt.get(w),dn=jt.get(Y),yn=jt.get(sn.__renderTarget),yi=jt.get(dn.__renderTarget);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Li=0;Li<It;Li++)He&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.get(w).__webglTexture,Z,Xt+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.get(Y).__webglTexture,bt,Xe+Li)),V.blitFramebuffer(te,Kt,Dt,Ot,le,Re,Dt,Ot,V.DEPTH_BUFFER_BIT,V.NEAREST);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||jt.has(w)){const sn=jt.get(w),dn=jt.get(Y);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,ko),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ui);for(let yn=0;yn<It;yn++)He?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Z,Xt+yn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Z),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,bt,Xe+yn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,bt),Z!==0?V.blitFramebuffer(te,Kt,Dt,Ot,le,Re,Dt,Ot,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Oe,bt,le,Re,Xe+yn,te,Kt,Dt,Ot):V.copyTexSubImage2D(Oe,bt,le,Re,te,Kt,Dt,Ot);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Oe,bt,le,Re,Xe,Dt,Ot,It,we,Zt,fe.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Oe,bt,le,Re,Xe,Dt,Ot,It,we,fe.data):V.texSubImage3D(Oe,bt,le,Re,Xe,Dt,Ot,It,we,Zt,fe):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,bt,le,Re,Dt,Ot,we,Zt,fe.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,bt,le,Re,fe.width,fe.height,we,fe.data):V.texSubImage2D(V.TEXTURE_2D,bt,le,Re,Dt,Ot,we,Zt,fe);V.pixelStorei(V.UNPACK_ROW_LENGTH,ve),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,hn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ca),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ve),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ni),bt===0&&Y.generateMipmaps&&V.generateMipmap(Oe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,at=null,rt=null,Z=0){return ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Y,at,rt,Z)},this.initRenderTarget=function(w){jt.get(w).__webglFramebuffer===void 0&&ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),Vt.unbindTexture()},this.resetState=function(){O=0,P=0,H=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u1=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),c0=o=>{const t=u1(o);return t.charAt(0).toUpperCase()+t.slice(1)},G0=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),f1=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=vn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>vn.createElement("svg",{ref:m,...h1,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:G0("lucide",l),...!u&&!f1(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>vn.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=(o,t)=>{const i=vn.forwardRef(({className:r,...l},u)=>vn.createElement(d1,{ref:u,iconNode:t,className:G0(`lucide-${c1(c0(o))}`,`lucide-${o}`,r),...l}));return i.displayName=c0(o),i};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],m1=On("arrow-right",p1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],_1=On("brain",g1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],V0=On("circle-check-big",v1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],k0=On("clock",x1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],y1=On("dollar-sign",S1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],hd=On("mail",M1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],T1=On("menu",E1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Oo=On("message-circle",b1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],zc=On("sparkles",A1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],w1=On("star",R1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],D1=On("target",C1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],N1=On("trending-up",U1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],O1=On("users",L1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],z1=On("wrench",P1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],I1=On("x",B1),F1=()=>{const o=document.createElement("script");o.async=!0,o.src="https://www.googletagmanager.com/gtag/js?id=AW-1029418216",document.head.appendChild(o);const t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Contrail+One&display=swap",t.rel="stylesheet",document.head.appendChild(t),window.dataLayer=window.dataLayer||[];function i(){window.dataLayer.push(arguments)}i("js",new Date),i("config","AW-1029418216"),window.gtag=i},H1=()=>{const o=vn.useRef(null),t=vn.useRef(null),i=vn.useRef(null),r=vn.useRef(null);return vn.useEffect(()=>{if(console.log("TechLandscape mounting...",o.current),!o.current)return;const l=new U0,u=new ti(75,window.innerWidth/window.innerHeight,.1,1e3),h=new H0({alpha:!0,antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setClearColor(0,0),o.current.appendChild(h.domElement),t.current=l,i.current=h;const d=new Ro,m=new Ed({color:6717162,transparent:!0,opacity:.1});for(let R=-10;R<=10;R+=2){const B=new Ln().setFromPoints([new $(-10,-2,R),new $(10,-2,R)]),O=new cd(B,m);d.add(O)}for(let R=-10;R<=10;R+=2){const B=new Ln().setFromPoints([new $(R,-2,-10),new $(R,-2,10)]),O=new cd(B,m);d.add(O)}l.add(d);const p=[],g=[new Ts(.2,.2,.2),new Td(.15),new Ad(.18)],v=new Lo({color:7752610,transparent:!0,opacity:.15,wireframe:!0});for(let R=0;R<15;R++){const B=g[Math.floor(Math.random()*g.length)],O=new vi(B,v);O.position.x=(Math.random()-.5)*20,O.position.y=Math.random()*5-1,O.position.z=(Math.random()-.5)*20,O.userData={originalPosition:O.position.clone(),rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.02},floatPhase:Math.random()*Math.PI*2},l.add(O),p.push(O)}const x=new Ln,M=50,b=new Float32Array(M*3),D=[];for(let R=0;R<M;R++)b[R*3]=(Math.random()-.5)*20,b[R*3+1]=Math.random()*3,b[R*3+2]=(Math.random()-.5)*20,D.push({x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.02});x.setAttribute("position",new Si(b,3));const y=new L0({color:6717162,size:.05,transparent:!0,opacity:.6}),_=new My(x,y);l.add(_),u.position.set(0,3,8),u.lookAt(0,0,0);const N=()=>{const R=Date.now()*.001;d.rotation.y=R*.05,d.position.y=Math.sin(R*.5)*.1-2,p.forEach(O=>{O.rotation.x+=O.userData.rotationSpeed.x,O.rotation.y+=O.userData.rotationSpeed.y,O.rotation.z+=O.userData.rotationSpeed.z,O.position.y=O.userData.originalPosition.y+Math.sin(R+O.userData.floatPhase)*.3});const B=_.geometry.attributes.position.array;for(let O=0;O<M;O++)B[O*3]+=D[O].x,B[O*3+1]+=D[O].y,B[O*3+2]+=D[O].z,Math.abs(B[O*3])>10&&(B[O*3]*=-1),Math.abs(B[O*3+2])>10&&(B[O*3+2]*=-1),B[O*3+1]>5&&(B[O*3+1]=-2),B[O*3+1]<-3&&(B[O*3+1]=5);_.geometry.attributes.position.needsUpdate=!0,u.position.y=3+Math.sin(R*.3)*.2,u.lookAt(0,Math.sin(R*.2)*.1,0),h.render(l,u),r.current=requestAnimationFrame(N)};N();const U=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),r.current&&cancelAnimationFrame(r.current),o.current&&h.domElement&&o.current.removeChild(h.domElement),h.dispose()}},[]),lt.jsx("div",{ref:o,className:"fixed inset-0 z-0",style:{pointerEvents:"none",opacity:.3}})},G1=()=>{const o=vn.useRef(null),t=vn.useRef(null),i=vn.useRef(null),r=vn.useRef(null);return vn.useEffect(()=>{if(!o.current)return;const l=new U0,u=new ti(75,window.innerWidth/window.innerHeight,.1,1e3),h=new H0({alpha:!0,antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setClearColor(0,0),o.current.appendChild(h.domElement),t.current=l,i.current=h;const d=[],m=[],p=25,g=4,v=1e3,x=new bd(.03,16,16),M=new Lo({color:6717162,transparent:!0,opacity:.8}),b=new Lo({color:7752610,transparent:!0,opacity:1});for(let P=0;P<p;P++){const H=new vi(x,Math.random()>.8?b:M),C=3+Math.random()*4,A=P/p*Math.PI*2+Math.random()*.5,G=Math.random()*Math.PI;H.position.x=C*Math.sin(G)*Math.cos(A),H.position.y=C*Math.sin(G)*Math.sin(A),H.position.z=C*Math.cos(G),H.userData={originalPosition:H.position.clone(),pulsePhase:Math.random()*Math.PI*2,isPulse:H.material===b,index:P},l.add(H),d.push(H)}const D=()=>{if(m.length>=g)return;const P=d[Math.floor(Math.random()*d.length)],H=d[Math.floor(Math.random()*d.length)];if(P===H||m.some(dt=>dt.nodeA===P&&dt.nodeB===H||dt.nodeA===H&&dt.nodeB===P))return;const A=new Ln().setFromPoints([P.position,H.position]),G=new Ed({color:6717162,transparent:!0,opacity:0}),st=new cd(A,G);l.add(st);const ot={line:st,nodeA:P,nodeB:H,createdAt:Date.now(),opacity:0,maxOpacity:.6+Math.random()*.4,pulsePhase:Math.random()*Math.PI*2,fadeDirection:1};m.push(ot)},y=()=>{const P=Date.now();for(let H=m.length-1;H>=0;H--){const C=m[H],A=P-C.createdAt;A>800&&(C.fadeDirection=-1),A>v&&(l.remove(C.line),C.line.geometry.dispose(),C.line.material.dispose(),m.splice(H,1))}};let _=0;const N=200;u.position.z=8,u.position.y=1;const U=new be,R=P=>{U.x=P.clientX/window.innerWidth*2-1,U.y=-(P.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",R);const B=()=>{const P=Date.now()*.001,H=Date.now();H-_>N&&(D(),_=H),y(),l.rotation.y=P*.1,l.rotation.x=Math.sin(P*.05)*.1,d.forEach((C,A)=>{if(C.position.y=C.userData.originalPosition.y+Math.sin(P+A)*.1,C.position.x=C.userData.originalPosition.x+Math.cos(P+A*.5)*.05,C.userData.isPulse){const G=1+Math.sin(P*3+C.userData.pulsePhase)*.3;C.scale.setScalar(G),C.material.opacity=.7+Math.sin(P*2+C.userData.pulsePhase)*.3}}),m.forEach(C=>{const{line:A,nodeA:G,nodeB:st,createdAt:ot,maxOpacity:dt,pulsePhase:ft,fadeDirection:F}=C,j=A.geometry.attributes.position.array;j[0]=G.position.x,j[1]=G.position.y,j[2]=G.position.z,j[3]=st.position.x,j[4]=st.position.y,j[5]=st.position.z,A.geometry.attributes.position.needsUpdate=!0;const q=H-ot;let St;F===1?St=Math.min(q/200,1)*dt:St=Math.max(0,(v-q)/200)*dt;const L=.8+Math.sin(P*4+ft)*.2;C.opacity=St*L,A.material.opacity=C.opacity;const tt=Math.sin(P*2+ft)*.1;A.material.color.setHSL(.6+tt,.8,.6)}),u.position.x+=(U.x*.5-u.position.x)*.05,u.position.y+=(U.y*.5-u.position.y)*.05,u.lookAt(l.position),h.render(l,u),r.current=requestAnimationFrame(B)};B();const O=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",O),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("resize",O),r.current&&cancelAnimationFrame(r.current),o.current&&h.domElement&&o.current.removeChild(h.domElement),m.forEach(P=>{l.remove(P.line),P.line.geometry.dispose(),P.line.material.dispose()}),h.dispose()}},[]),lt.jsx("div",{ref:o,className:"absolute inset-0 z-0",style:{pointerEvents:"none",opacity:.6}})},V1=()=>{const[o,t]=vn.useState(!1),i=()=>{window.gtag&&window.gtag("event","conversion",{send_to:"AW-1029418216/rcu4CPmQ2O0aEOjZ7uoD"})};return lt.jsx("header",{className:"fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20",children:lt.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[lt.jsxs("div",{className:"flex justify-between items-center h-16",children:[lt.jsx("div",{className:"flex items-center",children:lt.jsxs("div",{className:"flex items-center space-x-2",children:[lt.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:lt.jsx(zc,{className:"w-5 h-5 text-white"})}),lt.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",style:{fontFamily:"Contrail One, cursive"},children:"TecnoSoluciones"})]})}),lt.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[lt.jsxs("div",{className:"flex items-center space-x-2 text-gray-700",children:[lt.jsx(hd,{className:"w-4 h-4"}),lt.jsx("span",{className:"text-sm",children:"tecnosolucionesuno@gmail.com"})]}),lt.jsxs("a",{href:"https://wa.me/5491134227461",onClick:i,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",children:[lt.jsx(Oo,{className:"w-4 h-4"}),lt.jsx("span",{children:"WhatsApp"})]})]}),lt.jsx("div",{className:"md:hidden",children:lt.jsx("button",{onClick:()=>t(!o),className:"text-gray-700 hover:text-gray-900",children:o?lt.jsx(I1,{className:"w-6 h-6"}):lt.jsx(T1,{className:"w-6 h-6"})})})]}),o&&lt.jsx("div",{className:"md:hidden py-4 border-t border-white/20",children:lt.jsxs("div",{className:"flex flex-col space-y-4",children:[lt.jsxs("div",{className:"flex items-center space-x-2 text-gray-700",children:[lt.jsx(hd,{className:"w-4 h-4"}),lt.jsx("span",{className:"text-sm",children:"tecnosolucionesuno@gmail.com"})]}),lt.jsxs("a",{href:"https://wa.me/5491134227461",onClick:i,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 w-fit",children:[lt.jsx(Oo,{className:"w-4 h-4"}),lt.jsx("span",{children:"WhatsApp"})]})]})})]})})},k1=()=>{const o=()=>{window.gtag&&window.gtag("event","conversion",{send_to:"AW-1029418216/GU-ICPaQ2O0aEOjZ7uoD"}),document.getElementById("servicios")?.scrollIntoView({behavior:"smooth"})};return lt.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",children:[lt.jsx(H1,{}),lt.jsx(G1,{}),lt.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[lt.jsx("div",{className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"}),lt.jsx("div",{className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"}),lt.jsx("div",{className:"absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"})]}),lt.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:lt.jsxs("div",{className:"space-y-8",children:[lt.jsxs("div",{className:"inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm text-gray-700",children:[lt.jsx(zc,{className:"w-4 h-4 text-purple-600"}),lt.jsx("span",{children:"+20 años de experiencia comprobada"})]}),lt.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight",children:["Potenciá tu negocio con"," ",lt.jsx("span",{className:"bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",children:"Marketing Digital"})]}),lt.jsx("p",{className:"text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Soluciones tecnológicas integrales que transforman empresas y maximizan resultados."}),lt.jsx("div",{className:"text-lg text-gray-500 max-w-2xl mx-auto",children:"Especialistas en publicidad digital, con más de 20 años de experiencia comprobada."}),lt.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[lt.jsxs("button",{onClick:o,className:"group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl",children:[lt.jsx("span",{className:"font-semibold",children:"Descubre nuestros servicios"}),lt.jsx(m1,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),lt.jsxs("a",{href:"https://wa.me/5491134227461",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-700 px-8 py-4 rounded-full transition-all duration-300",children:[lt.jsx(Oo,{className:"w-5 h-5"}),lt.jsx("span",{className:"font-semibold",children:"Consulta gratuita"})]})]})]})})]})},X1=({icon:o,title:t,description:i,features:r,gradient:l,delay:u})=>{const h=o;return lt.jsxs("div",{className:"group relative bg-white/60 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl",style:{animationDelay:`${u}ms`},children:[lt.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 ${l} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`,children:lt.jsx(h,{className:"w-8 h-8 text-white"})}),lt.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:t}),lt.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:i}),lt.jsx("ul",{className:"space-y-3",children:r.map((d,m)=>lt.jsxs("li",{className:"flex items-start space-x-3",children:[lt.jsx(V0,{className:"w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"}),lt.jsx("span",{className:"text-gray-700",children:d})]},m))})]})},W1=()=>{const o=[{icon:N1,title:"Marketing Digital",description:"Hacé crecer tu negocio con campañas publicitarias que realmente funcionan y generan resultados medibles.",gradient:"bg-gradient-to-br from-blue-500 to-purple-600",features:["Estrategias personalizadas para tu sector","Gestión completa de redes sociales","Publicidad en Google y Facebook Ads","Análisis de resultados y optimización continua","Aumento comprobado en ventas","ROI garantizado"]},{icon:z1,title:"Soporte Técnico",description:"Reparación, actualización e instalación profesional para tu PC o Notebook con garantía total.",gradient:"bg-gradient-to-br from-green-500 to-teal-600",features:["Diagnóstico gratuito y detallado","Soluciones rápidas y efectivas","Reparación de hardware y software","Actualizaciones de sistemas","Instalación de programas especializados","Soporte remoto 24/7"]},{icon:_1,title:"Inteligencia Artificial",description:"Tutorías personalizadas para implementar IA en tu negocio y automatizar procesos clave.",gradient:"bg-gradient-to-br from-purple-500 to-pink-600",features:["Automatización de procesos empresariales","Implementación de chatbots inteligentes","Análisis predictivo con IA","Capacitación personalizada","Consultoría especializada","Integración con sistemas existentes"]}];return lt.jsx("section",{id:"servicios",className:"py-24 bg-gradient-to-b from-gray-50 to-white",children:lt.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[lt.jsxs("div",{className:"text-center mb-16",children:[lt.jsxs("div",{className:"inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4",children:[lt.jsx(zc,{className:"w-4 h-4"}),lt.jsx("span",{children:"Nuestros Servicios"})]}),lt.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:["Soluciones que"," ",lt.jsx("span",{className:"bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"transforman"})]}),lt.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Ofrecemos servicios especializados diseñados para impulsar tu negocio hacia el éxito digital"})]}),lt.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map((t,i)=>lt.jsx(X1,{icon:t.icon,title:t.title,description:t.description,features:t.features,gradient:t.gradient,delay:i*100},i))})]})})},q1=({icon:o,title:t,description:i,gradient:r})=>{const l=o;return lt.jsxs("div",{className:"group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100",children:[lt.jsx("div",{className:`inline-flex items-center justify-center w-14 h-14 ${r} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`,children:lt.jsx(l,{className:"w-7 h-7 text-white"})}),lt.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:t}),lt.jsx("p",{className:"text-gray-600 leading-relaxed",children:i})]})},Y1=()=>{const o=[{icon:w1,title:"+20 años de experiencia",description:"Más de dos décadas brindando soluciones tecnológicas exitosas y transformando negocios.",gradient:"bg-gradient-to-br from-yellow-500 to-orange-600"},{icon:D1,title:"Soluciones personalizadas",description:"Cada cliente es único. Desarrollamos estrategias específicas adaptadas a tu industria y objetivos.",gradient:"bg-gradient-to-br from-blue-500 to-purple-600"},{icon:y1,title:"Consulta gratuita",description:"Presupuestos sin costo y asesoramiento inicial completamente gratuito para evaluar tu proyecto.",gradient:"bg-gradient-to-br from-green-500 to-teal-600"}];return lt.jsx("section",{className:"py-24 bg-white",children:lt.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:lt.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[lt.jsxs("div",{children:[lt.jsxs("div",{className:"inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[lt.jsx(O1,{className:"w-4 h-4"}),lt.jsx("span",{children:"¿Por qué elegirnos?"})]}),lt.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight",children:["Experiencia que"," ",lt.jsx("span",{className:"bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",children:"transforma"})]}),lt.jsxs("div",{className:"space-y-6 text-lg text-gray-600 leading-relaxed",children:[lt.jsx("p",{children:"Somos una empresa familiar con más de 20 años de trayectoria exitosa, especializada en soluciones tecnológicas innovadoras para particulares, profesionales y pequeñas empresas."}),lt.jsx("p",{children:"Nuestro enfoque principal es el marketing digital, ayudando a cientos de negocios a crecer exponencialmente y aumentar sus ventas a través de campañas publicitarias altamente efectivas y estrategias personalizadas."}),lt.jsx("p",{children:"Combinamos experiencia, innovación y resultados garantizados para transformar tu presencia digital."})]}),lt.jsxs("div",{className:"mt-8 flex items-center space-x-4",children:[lt.jsxs("div",{className:"flex items-center space-x-2",children:[lt.jsx(k0,{className:"w-5 h-5 text-blue-600"}),lt.jsx("span",{className:"text-gray-700 font-medium",children:"Respuesta en 24hs"})]}),lt.jsxs("div",{className:"flex items-center space-x-2",children:[lt.jsx(V0,{className:"w-5 h-5 text-green-600"}),lt.jsx("span",{className:"text-gray-700 font-medium",children:"Garantía total"})]})]})]}),lt.jsx("div",{className:"grid gap-6",children:o.map((t,i)=>lt.jsx(q1,{icon:t.icon,title:t.title,description:t.description,gradient:t.gradient},i))})]})})})},j1=()=>{const o=()=>{window.gtag&&window.gtag("event","conversion",{send_to:"AW-1029418216/rcu4CPmQ2O0aEOjZ7uoD"})};return lt.jsx("footer",{className:"bg-gray-900 text-white",children:lt.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[lt.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:[lt.jsxs("div",{className:"lg:col-span-2",children:[lt.jsxs("div",{className:"flex items-center space-x-2 mb-6",children:[lt.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:lt.jsx(zc,{className:"w-5 h-5 text-white"})}),lt.jsx("span",{className:"text-xl font-bold",style:{fontFamily:"Contrail One, cursive"},children:"TecnoSoluciones"})]}),lt.jsx("p",{className:"text-gray-300 mb-6 max-w-md",children:"Transformando negocios desde 2004 con soluciones tecnológicas innovadoras y marketing digital efectivo."}),lt.jsx("div",{className:"flex space-x-4",children:lt.jsxs("a",{href:"https://wa.me/5491134227461",onClick:o,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors",children:[lt.jsx(Oo,{className:"w-4 h-4"}),lt.jsx("span",{children:"WhatsApp"})]})})]}),lt.jsxs("div",{children:[lt.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contacto"}),lt.jsxs("div",{className:"space-y-3 text-gray-300",children:[lt.jsxs("div",{className:"flex items-center space-x-2",children:[lt.jsx(Oo,{className:"w-4 h-4"}),lt.jsx("a",{href:"https://wa.me/5491134227461",onClick:o,target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-400 transition-colors",children:"+54 11 3422 7461"})]}),lt.jsxs("div",{className:"flex items-center space-x-2",children:[lt.jsx(hd,{className:"w-4 h-4"}),lt.jsx("span",{children:"tecnosolucionesuno@gmail.com"})]}),lt.jsxs("div",{className:"flex items-center space-x-2",children:[lt.jsx(k0,{className:"w-4 h-4"}),lt.jsx("span",{children:"Lunes a Viernes 9-18hs"})]})]})]}),lt.jsxs("div",{children:[lt.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Servicios"}),lt.jsxs("div",{className:"space-y-2 text-gray-300",children:[lt.jsx("p",{children:"Marketing Digital Avanzado"}),lt.jsx("p",{children:"Soporte Técnico Especializado"}),lt.jsx("p",{children:"Inteligencia Artificial"}),lt.jsx("p",{children:"Consultoría Tecnológica"})]})]})]}),lt.jsx("div",{className:"border-t border-gray-800 mt-12 pt-8 text-center text-gray-400",children:lt.jsx("p",{children:"© 2024 TecnoSoluciones. Todos los derechos reservados. | Transformando negocios desde 2004"})})]})})},Z1=()=>(vn.useEffect(()=>{F1(),window.gtag&&window.gtag("event","conversion",{send_to:"AW-1029418216/1AT6CPOQ2O0aEOjZ7uoD"})},[]),lt.jsxs("div",{className:"min-h-screen",children:[lt.jsx(V1,{}),lt.jsx(k1,{}),lt.jsx(W1,{}),lt.jsx(Y1,{}),lt.jsx(j1,{})]}));eS.createRoot(document.getElementById("root")).render(lt.jsx(vn.StrictMode,{children:lt.jsx(Z1,{})}));
