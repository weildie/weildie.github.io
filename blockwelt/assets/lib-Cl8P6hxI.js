var xw=Object.defineProperty;var yw=(t,e,n)=>e in t?xw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>yw(t,typeof e!="symbol"?e+"":e,n);import{g as Sw}from"./_commonjsHelpers-Cpj98o6Y.js";import{s as Mw}from"./XRGazeInput-BpGvMqFT.js";import{V as ie,M as Mi,Q as Dt,E as nn,P as to,O as xu,C as bw,L as L1,B as P1,a as O1,F as z1,G as Aa,b as Ew,c as ai,d as Zt,e as $c,f as Qc,g as vd,T as Kg,S as I1,h as Yn,R as zm,i as Tw,j as F1,k as Aw,l as ww,m as Cw}from"./index-B8TXnyPa.js";import"./private-C8f-lHJF.js";var B1={exports:{}},ah={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rw=Symbol.for("react.transitional.element"),Dw=Symbol.for("react.fragment");function H1(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:Rw,type:t,key:i,ref:e!==void 0?e:null,props:n}}ah.Fragment=Dw;ah.jsx=H1;ah.jsxs=H1;B1.exports=ah;var C=B1.exports,G1={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg=Symbol.for("react.transitional.element"),Nw=Symbol.for("react.portal"),Uw=Symbol.for("react.fragment"),Lw=Symbol.for("react.strict_mode"),Pw=Symbol.for("react.profiler"),Ow=Symbol.for("react.consumer"),zw=Symbol.for("react.context"),Iw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),Bw=Symbol.for("react.memo"),V1=Symbol.for("react.lazy"),Hw=Symbol.for("react.activity"),Gw=Symbol.for("react.view_transition"),G_=Symbol.iterator;function Vw(t){return t===null||typeof t!="object"?null:(t=G_&&t[G_]||t["@@iterator"],typeof t=="function"?t:null)}var k1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X1=Object.assign,j1={};function Hl(t,e,n){this.props=t,this.context=e,this.refs=j1,this.updater=n||k1}Hl.prototype.isReactComponent={};Hl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q1(){}q1.prototype=Hl.prototype;function ev(t,e,n){this.props=t,this.context=e,this.refs=j1,this.updater=n||k1}var tv=ev.prototype=new q1;tv.constructor=ev;X1(tv,Hl.prototype);tv.isPureReactComponent=!0;var V_=Array.isArray;function Im(){}var Bt={H:null,A:null,T:null,S:null},W1=Object.prototype.hasOwnProperty;function nv(t,e,n){var i=n.ref;return{$$typeof:Jg,type:t,key:e,ref:i!==void 0?i:null,props:n}}function kw(t,e){return nv(t.type,e,t.props)}function iv(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jg}function Xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var k_=/\/+/g;function kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xw(""+t.key):e.toString(36)}function jw(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Im,Im):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Vo(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Jg:case Nw:s=!0;break;case V1:return s=t._init,Vo(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+kh(t,0):i,V_(a)?(n="",s!=null&&(n=s.replace(k_,"$&/")+"/"),Vo(a,e,n,"",function(c){return c})):a!=null&&(iv(a)&&(a=kw(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(k_,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(V_(t))for(var l=0;l<t.length;l++)i=t[l],r=o+kh(i,l),s+=Vo(i,e,n,r,a);else if(l=Vw(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+kh(i,l++),s+=Vo(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return Vo(jw(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Iu(t,e,n){if(t==null)return t;var i=[],a=0;return Vo(t,i,"","",function(r){return e.call(n,r,a++)}),i}function qw(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var X_=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Y1(t){var e=Bt.T,n={};n.types=e!==null?e.types:null,Bt.T=n;try{var i=t(),a=Bt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Im,X_)}catch(r){X_(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),Bt.T=e}}function Z1(t){var e=Bt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else Y1(Z1.bind(null,t))}var Ww={map:Iu,forEach:function(t,e,n){Iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Iu(t,function(){e++}),e},toArray:function(t){return Iu(t,function(e){return e})||[]},only:function(t){if(!iv(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Activity=Hw;ke.Children=Ww;ke.Component=Hl;ke.Fragment=Uw;ke.Profiler=Pw;ke.PureComponent=ev;ke.StrictMode=Lw;ke.Suspense=Fw;ke.ViewTransition=Gw;ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Bt;ke.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Bt.H.useMemoCache(t)}};ke.addTransitionType=Z1;ke.cache=function(t){return function(){return t.apply(null,arguments)}};ke.cacheSignal=function(){return null};ke.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=X1({},t.props),a=t.key;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)!W1.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return nv(t.type,a,i)};ke.createContext=function(t){return t={$$typeof:zw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Ow,_context:t},t};ke.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)W1.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return nv(t,r,a)};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Iw,render:t}};ke.isValidElement=iv;ke.lazy=function(t){return{$$typeof:V1,_payload:{_status:-1,_result:t},_init:qw}};ke.memo=function(t,e){return{$$typeof:Bw,type:t,compare:e===void 0?null:e}};ke.startTransition=Y1;ke.unstable_useCacheRefresh=function(){return Bt.H.useCacheRefresh()};ke.use=function(t){return Bt.H.use(t)};ke.useActionState=function(t,e,n){return Bt.H.useActionState(t,e,n)};ke.useCallback=function(t,e){return Bt.H.useCallback(t,e)};ke.useContext=function(t){return Bt.H.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t,e){return Bt.H.useDeferredValue(t,e)};ke.useEffect=function(t,e){return Bt.H.useEffect(t,e)};ke.useEffectEvent=function(t){return Bt.H.useEffectEvent(t)};ke.useId=function(){return Bt.H.useId()};ke.useImperativeHandle=function(t,e,n){return Bt.H.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Bt.H.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Bt.H.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Bt.H.useMemo(t,e)};ke.useOptimistic=function(t,e){return Bt.H.useOptimistic(t,e)};ke.useReducer=function(t,e,n){return Bt.H.useReducer(t,e,n)};ke.useRef=function(t){return Bt.H.useRef(t)};ke.useState=function(t){return Bt.H.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Bt.H.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Bt.H.useTransition()};ke.version="19.3.1";G1.exports=ke;var He=G1.exports;const $e=Sw(He);var Vt="-ms-",Lc="-moz-",gt="-webkit-",$1="comm",rh="rule",av="decl",Yw="@import",Zw="@namespace",Q1="@keyframes",$w="@layer",K1=Math.abs,rv=String.fromCharCode,Fm=Object.assign;function Qw(t,e){return fn(t,0)^45?(((e<<2^fn(t,0))<<2^fn(t,1))<<2^fn(t,2))<<2^fn(t,3):0}function J1(t){return t.trim()}function Ya(t,e){return(t=e.exec(t))?t[0]:t}function Je(t,e,n){return t.replace(e,n)}function Bf(t,e,n){return t.indexOf(e,n)}function fn(t,e){return t.charCodeAt(e)|0}function Xs(t,e,n){return t.slice(e,n)}function Zi(t){return t.length}function eM(t){return t.length}function bc(t,e){return e.push(t),t}function Kw(t,e){return t.map(e).join("")}function j_(t,e){return t.filter(function(n){return!Ya(n,e)})}var sh=1,yl=1,tM=0,Hi=0,on=0,Gl="";function oh(t,e,n,i,a,r,s,o){return{value:t,root:e,parent:n,type:i,props:a,children:r,line:sh,column:yl,length:s,return:"",siblings:o}}function Nr(t,e){return Fm(oh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function uo(t){for(;t.root;)t=Nr(t.root,{children:[t]});bc(t,t.siblings)}function Jw(){return on}function e2(){return on=Hi>0?fn(Gl,--Hi):0,yl--,on===10&&(yl=1,sh--),on}function na(){return on=Hi<tM?fn(Gl,Hi++):0,yl++,on===10&&(yl=1,sh++),on}function Fr(){return fn(Gl,Hi)}function Hf(){return Hi}function lh(t,e){return Xs(Gl,t,e)}function Kc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t2(t){return sh=yl=1,tM=Zi(Gl=t),Hi=0,[]}function n2(t){return Gl="",t}function Xh(t){return J1(lh(Hi-1,Bm(t===91?t+2:t===40?t+1:t)))}function i2(t){for(;(on=Fr())&&on<33;)na();return Kc(t)>2||Kc(on)>3?"":" "}function a2(t,e){for(;--e&&na()&&!(on<48||on>102||on>57&&on<65||on>70&&on<97););return lh(t,Hf()+(e<6&&Fr()==32&&na()==32))}function Bm(t){for(;na();)switch(on){case t:return Hi;case 34:case 39:t!==34&&t!==39&&Bm(on);break;case 40:t===41&&Bm(t);break;case 92:na();break}return Hi}function r2(t,e){for(;na()&&t+on!==57;)if(t+on===84&&Fr()===47)break;return"/*"+lh(e,Hi-1)+"*"+rv(t===47?t:na())}function s2(t){for(;!Kc(Fr());)na();return lh(t,Hi)}function o2(t){return n2(Gf("",null,null,null,[""],t=t2(t),0,[0],t))}function Gf(t,e,n,i,a,r,s,o,l){for(var c=0,f=0,p=s,u=0,d=0,v=0,S=1,m=1,h=1,g=0,x="",y=a,R=r,E=i,T=x;m;)switch(v=g,g=na()){case 40:if(v!=108&&fn(T,p-1)==58){Bf(T+=Je(Xh(g),"&","&\f"),"&\f",K1(c?o[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:T+=Xh(g);break;case 9:case 10:case 13:case 32:T+=i2(v);break;case 92:T+=a2(Hf()-1,7);continue;case 47:switch(Fr()){case 42:case 47:bc(l2(r2(na(),Hf()),e,n,l),l),(Kc(v||1)==5||Kc(Fr()||1)==5)&&Zi(T)&&Xs(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*S:o[c++]=Zi(T)*h;case 125*S:case 59:case 0:switch(g){case 0:case 125:m=0;case 59+f:h==-1&&(T=Je(T,/\f/g,"")),d>0&&(Zi(T)-p||S===0&&v===47)&&bc(d>32?W_(T+";",i,n,p-1,l):W_(Je(T," ","")+";",i,n,p-2,l),l);break;case 59:T+=";";default:if(bc(E=q_(T,e,n,c,f,a,o,x,y=[],R=[],p,r),r),g===123)if(f===0)Gf(T,e,E,E,y,r,p,o,R);else{switch(u){case 99:if(fn(T,3)===110)break;case 108:if(fn(T,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Gf(t,E,E,i&&bc(q_(t,E,E,0,0,a,o,x,a,y=[],p,R),R),a,R,p,o,i?y:R):Gf(T,E,E,E,[""],R,0,o,R)}}c=f=d=0,S=h=1,x=T="",p=s;break;case 58:p=1+Zi(T),d=v;default:if(S<1){if(g==123)--S;else if(g==125&&S++==0&&e2()==125)continue}switch(T+=rv(g),g*S){case 38:h=f>0?1:(T+="\f",-1);break;case 44:o[c++]=(Zi(T)-1)*h,h=1;break;case 64:Fr()===45&&(T+=Xh(na())),u=Fr(),f=p=Zi(x=T+=s2(Hf())),g++;break;case 45:v===45&&Zi(T)==2&&(S=0)}}return r}function q_(t,e,n,i,a,r,s,o,l,c,f,p){for(var u=a-1,d=a===0?r:[""],v=eM(d),S=0,m=0,h=0;S<i;++S)for(var g=0,x=Xs(t,u+1,u=K1(m=s[S])),y=t;g<v;++g)(y=J1(m>0?d[g]+" "+x:Je(x,/&\f/g,d[g])))&&(l[h++]=y);return oh(t,e,n,a===0?rh:o,l,c,f,p)}function l2(t,e,n,i){return oh(t,e,n,$1,rv(Jw()),Xs(t,2,-2),0,i)}function W_(t,e,n,i,a){return oh(t,e,n,av,Xs(t,0,i),Xs(t,i+1,-1),i,a)}function nM(t,e,n){switch(Qw(t,e)){case 5103:return gt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return gt+t+t;case 4855:return gt+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Lc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+t+Lc+t+Vt+t+t;case 5936:switch(fn(t,e+11)){case 114:return gt+t+Vt+Je(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return gt+t+Vt+Je(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return gt+t+Vt+Je(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return gt+t+Vt+t+t;case 6165:return gt+t+Vt+"flex-"+t+t;case 5187:return gt+t+Je(t,/(\w+).+(:[^]+)/,gt+"box-$1$2"+Vt+"flex-$1$2")+t;case 5443:return gt+t+Vt+"flex-item-"+Je(t,/flex-|-self/g,"")+(Ya(t,/flex-|baseline/)?"":Vt+"grid-row-"+Je(t,/flex-|-self/g,""))+t;case 4675:return gt+t+Vt+"flex-line-pack"+Je(t,/align-content|flex-|-self/g,"")+t;case 5548:return gt+t+Vt+Je(t,"shrink","negative")+t;case 5292:return gt+t+Vt+Je(t,"basis","preferred-size")+t;case 6060:return gt+"box-"+Je(t,"-grow","")+gt+t+Vt+Je(t,"grow","positive")+t;case 4554:return gt+Je(t,/([^-])(transform)/g,"$1"+gt+"$2")+t;case 6187:return Je(Je(Je(t,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),t,"")+t;case 5495:case 3959:return Je(t,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return Je(Je(t,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+Vt+"flex-pack:$3"),/space-between/,"justify")+gt+t+t;case 4200:if(!Ya(t,/flex-|baseline/))return Vt+"grid-column-align"+Xs(t,e)+t;break;case 2592:case 3360:return Vt+Je(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,Ya(i.props,/grid-\w+-end/)})?~Bf(t+(n=n[e].value),"span",0)?t:Vt+Je(t,"-start","")+t+Vt+"grid-row-span:"+(~Bf(n,"span",0)?Ya(n,/\d+/):+Ya(n,/\d+/)-+Ya(t,/\d+/))+";":Vt+Je(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Ya(i.props,/grid-\w+-start/)})?t:Vt+Je(Je(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Je(t,/(.+)-inline(.+)/,gt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zi(t)-1-e>6)switch(fn(t,e+1)){case 109:if(fn(t,e+4)!==45)break;case 102:return Je(t,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+Lc+(fn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Bf(t,"stretch",0)?nM(Je(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Je(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,r,s,o,l,c){return Vt+a+":"+r+c+(s?Vt+a+"-span:"+(o?l:+l-+r)+c:"")+t});case 4949:if(fn(t,e+6)===121)return Je(t,":",":"+gt)+t;break;case 6444:switch(fn(t,fn(t,14)===45?18:11)){case 120:return Je(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(fn(t,14)===45?"inline-":"")+"box$3$1"+gt+"$2$3$1"+Vt+"$2box$3")+t;case 100:return Je(t,":",":"+Vt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Je(t,"scroll-","scroll-snap-")+t}return t}function _d(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function c2(t,e,n,i){switch(t.type){case $w:if(t.children.length)break;case Yw:case Zw:case av:return t.return=t.return||t.value;case $1:return"";case Q1:return t.return=t.value+"{"+_d(t.children,i)+"}";case rh:if(!Zi(t.value=t.props.join(",")))return""}return Zi(n=_d(t.children,i))?t.return=t.value+"{"+n+"}":""}function u2(t){var e=eM(t);return function(n,i,a,r){for(var s="",o=0;o<e;o++)s+=t[o](n,i,a,r)||"";return s}}function f2(t){return function(e){e.root||(e=e.return)&&t(e)}}function d2(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case av:t.return=nM(t.value,t.length,n);return;case Q1:return _d([Nr(t,{value:Je(t.value,"@","@"+gt)})],i);case rh:if(t.length)return Kw(n=t.props,function(a){switch(Ya(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":uo(Nr(t,{props:[Je(a,/:(read-\w+)/,":"+Lc+"$1")]})),uo(Nr(t,{props:[a]})),Fm(t,{props:j_(n,i)});break;case"::placeholder":uo(Nr(t,{props:[Je(a,/:(plac\w+)/,":"+gt+"input-$1")]})),uo(Nr(t,{props:[Je(a,/:(plac\w+)/,":"+Lc+"$1")]})),uo(Nr(t,{props:[Je(a,/:(plac\w+)/,Vt+"input-$1")]})),uo(Nr(t,{props:[a]})),Fm(t,{props:j_(n,i)});break}return""})}}var rl={};function Vl(t,...e){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length>0?` Args: ${e.join(", ")}`:""}`)}var jh,qh;const Sl=typeof process<"u"&&rl!==void 0&&(rl.REACT_APP_SC_ATTR||rl.SC_ATTR)||"data-styled",iM="active",aM="data-styled-version",ch="6.6.0",sv=`/*!sc*/
`,Pc=typeof window<"u"&&typeof document<"u";if(!$e.createContext)throw Vl(19);function Y_(t){if(typeof process<"u"&&rl!==void 0){const e=rl[t];if(e!==void 0&&e!=="")return e!=="false"}}const h2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(qh=(jh=Y_("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&jh!==void 0?jh:Y_("SC_DISABLE_SPEEDY"))!==null&&qh!==void 0?qh:typeof process<"u"&&rl!==void 0&&!1),p2="sc-keyframes-";let Vf=new Map,xd=new Map,kf=1;const Fu=t=>{if(Vf.has(t))return Vf.get(t);for(;xd.has(kf);)kf++;const e=kf++;return Vf.set(t,e),xd.set(e,t),e},m2=t=>xd.get(t),g2=(t,e)=>{kf=e+1,Vf.set(t,e),xd.set(e,t)},ov=Object.freeze([]),Ml=Object.freeze({});function v2(t,e,n=Ml){return t.theme!==n.theme&&t.theme||e||n.theme}const _2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,x2=/(^-|-$)/g;function rM(t){return t.replace(_2,"-").replace(x2,"")}const y2=/(a)(d)/gi,Z_=t=>String.fromCharCode(t+(t>25?39:97));function sM(t){let e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Z_(e%52)+n;return(Z_(e%52)+n).replace(y2,"$1-$2")}const Hm=5381,Is=(t,e)=>{let n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t},oM=t=>Is(Hm,t);function S2(t){return sM(oM(t)>>>0)}function M2(t){return t.displayName||t.name||"Component"}function Gm(t){return typeof t=="string"&&!0}function b2(t){return Gm(t)?`styled.${t}`:`Styled(${M2(t)})`}const lM=Symbol.for("react.memo"),E2=Symbol.for("react.forward_ref"),T2={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},A2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w2={[E2]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[lM]:cM};function $_(t){return("type"in(e=t)&&e.type.$$typeof)===lM?cM:"$$typeof"in t?w2[t.$$typeof]:T2;var e}const C2=Object.defineProperty,R2=Object.getOwnPropertyNames,D2=Object.getOwnPropertySymbols,N2=Object.getOwnPropertyDescriptor,U2=Object.getPrototypeOf,L2=Object.prototype;function uM(t,e,n){if(typeof e!="string"){const i=U2(e);i&&i!==L2&&uM(t,i,n);const a=R2(e).concat(D2(e)),r=$_(t),s=$_(e);for(let o=0;o<a.length;++o){const l=a[o];if(!(l in A2||n&&n[l]||s&&l in s||r&&l in r)){const c=N2(e,l);try{C2(t,l,c)}catch{}}}}return t}function uh(t){return typeof t=="function"}const P2=Symbol.for("react.forward_ref");function fM(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===P2&&"styledComponentId"in t}function Ec(t,e){return t&&e?t+" "+e:t||e||""}function Q_(t,e){return t.join("")}function Jc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Vm(t,e,n=!1){if(!n&&!Jc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(let i=0;i<e.length;i++)t[i]=Vm(t[i],e[i]);else if(Jc(e))for(const i in e)t[i]=Vm(t[i],e[i]);return t}function dM(t,e){Object.defineProperty(t,"toString",{value:e})}const O2=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let e=this._cIndex;if(t>this._cGroup)for(let n=this._cGroup;n<t;n++)e+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=t;n--)e-=this.groupSizes[n];return this._cGroup=t,this._cIndex=e,e}insertRules(t,e){if(t>=this.groupSizes.length){const a=this.groupSizes,r=a.length;let s=r;for(;t>=s;)if(s<<=1,s<0)throw Vl(16,`${t}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(a),this.length=s;for(let o=r;o<s;o++)this.groupSizes[o]=0}let n=this.indexOfGroup(t+1),i=0;for(let a=0,r=e.length;a<r;a++)this.tag.insertRule(n,e[a])&&(this.groupSizes[t]++,n++,i++);i>0&&this._cGroup>t&&(this._cIndex+=i)}clearGroup(t){if(t<this.length){const e=this.groupSizes[t],n=this.indexOfGroup(t),i=n+e;this.groupSizes[t]=0;for(let a=n;a<i;a++)this.tag.deleteRule(n);e>0&&this._cGroup>t&&(this._cIndex-=e)}}getGroup(t){let e="";if(t>=this.length||this.groupSizes[t]===0)return e;const n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n;for(let r=i;r<a;r++)e+=this.tag.getRule(r)+sv;return e}},z2=`style[${Sl}][${aM}="${ch}"]`,I2=new RegExp(`^${Sl}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),K_=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,km=t=>{if(!t)return document;if(K_(t))return t;if("getRootNode"in t){const e=t.getRootNode();if(K_(e))return e}return document},F2=(t,e,n)=>{const i=n.split(",");let a;for(let r=0,s=i.length;r<s;r++)(a=i[r])&&t.registerName(e,a)},B2=(t,e)=>{var n;const i=((n=e.textContent)!==null&&n!==void 0?n:"").split(sv),a=[];for(let r=0,s=i.length;r<s;r++){const o=i[r].trim();if(!o)continue;const l=o.match(I2);if(l){const c=0|parseInt(l[1],10),f=l[2];c!==0&&(g2(f,c),F2(t,f,l[3]),t.getTag().insertRules(c,a)),a.length=0}else a.push(o)}},Wh=t=>{const n=km(t.options.target).querySelectorAll(z2);for(let i=0,a=n.length;i<a;i++){const r=n[i];r&&r.getAttribute(Sl)!==iM&&(B2(t,r),r.parentNode&&r.parentNode.removeChild(r))}};let Ql=!1;function H2(){if(Ql!==!1)return Ql;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Ql=t.nonce||t.getAttribute("content")||void 0;const e=document.head.querySelector('meta[name="sc-nonce"]');if(e)return Ql=e.getAttribute("content")||void 0}return Ql=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const hM=(t,e)=>{if(typeof document>"u")throw Vl(20);const n=document.head,i=t||n,a=document.createElement("style"),r=(l=>{const c=Array.from(l.querySelectorAll(`style[${Sl}]`));return c[c.length-1]})(i),s=r!==void 0?r.nextSibling:null;a.setAttribute(Sl,iM),a.setAttribute(aM,ch);const o=e||H2();return o&&a.setAttribute("nonce",o),i.insertBefore(a,s),a},G2=class{constructor(t,e){this.element=hM(t,e),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var i;if(n.sheet)return n.sheet;const a=(i=n.getRootNode().styleSheets)!==null&&i!==void 0?i:document.styleSheets;for(let r=0,s=a.length;r<s;r++){const o=a[r];if(o.ownerNode===n)return o}throw Vl(17)})(this.element),this.length=0}insertRule(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""}},V2=class{constructor(t,e){this.element=hM(t,e),this.nodes=this.element.childNodes,this.length=0}insertRule(t,e){if(t<=this.length&&t>=0){const n=document.createTextNode(e);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let J_=Pc;const k2={isServer:!Pc,useCSSOMInjection:!h2};class fh{static registerId(e){return Fu(e)}constructor(e=Ml,n={},i){this.options=Object.assign(Object.assign({},k2),e),this.gs=n,this.keyframeIds=new Set,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Pc&&J_&&(J_=!1,Wh(this)),dM(this,()=>(a=>{const r=a.getTag(),{length:s}=r;let o="";for(let l=0;l<s;l++){const c=m2(l);if(c===void 0)continue;const f=a.names.get(c);if(f===void 0||!f.size)continue;const p=r.getGroup(l);if(p.length===0)continue;const u=Sl+".g"+l+'[id="'+c+'"]';let d="";for(const v of f)v.length>0&&(d+=v+",");o+=p+u+'{content:"'+d+'"}'+sv}return o})(this))}rehydrate(){!this.server&&Pc&&Wh(this)}reconstructWithOptions(e,n=!0){const i=new fh(Object.assign(Object.assign({},this.options),e),this.gs,n&&this.names||void 0);return i.keyframeIds=new Set(this.keyframeIds),!this.server&&Pc&&e.target!==this.options.target&&km(this.options.target)!==km(e.target)&&Wh(i),i}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:n,target:i,nonce:a})=>n?new G2(i,a):new V2(i,a))(this.options),new O2(e)));var e}hasNameForId(e,n){var i,a;return(a=(i=this.names.get(e))===null||i===void 0?void 0:i.has(n))!==null&&a!==void 0&&a}registerName(e,n){Fu(e),e.startsWith(p2)&&this.keyframeIds.add(e);const i=this.names.get(e);i?i.add(n):this.names.set(e,new Set([n]))}insertRules(e,n,i){this.registerName(e,n),this.getTag().insertRules(Fu(e),i)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Fu(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const pM=new WeakSet,X2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function j2(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||t in X2||t.startsWith("--")?String(e).trim():e+"px"}const Rs=47;function ex(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let e="";for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);e+=i>=65&&i<=90?"-"+String.fromCharCode(i+32):t[n]}return e.startsWith("ms-")?"-"+e:e}const q2=Symbol.for("sc-keyframes");function W2(t){return typeof t=="object"&&t!==null&&q2 in t}function mM(t){return uh(t)&&!(t.prototype&&t.prototype.isReactComponent)}const gM=t=>t==null||t===!1||t==="",Y2=Symbol.for("react.client.reference");function tx(t){return t.$$typeof===Y2}function vM(t,e){for(const n in t){const i=t[n];t.hasOwnProperty(n)&&!gM(i)&&(Array.isArray(i)&&pM.has(i)||uh(i)?e.push(ex(n)+":",i,";"):Jc(i)?(e.push(n+" {"),vM(i,e),e.push("}")):e.push(ex(n)+": "+j2(n,i)+";"))}}function Fs(t,e,n,i,a=[]){if(gM(t))return a;const r=typeof t;if(r==="string")return a.push(t),a;if(r==="function"){if(tx(t))return a;if(mM(t)&&e){const s=t(e);return Fs(s,e,n,i,a)}return a.push(t),a}if(Array.isArray(t)){for(let s=0;s<t.length;s++)Fs(t[s],e,n,i,a);return a}return fM(t)?(a.push(`.${t.styledComponentId}`),a):W2(t)?(n?(t.inject(n,i),a.push(t.getName(i))):a.push(t),a):tx(t)?a:Jc(t)?t.toString!==Object.prototype.toString?(a.push(t.toString()),a):(vM(t,a),a):(a.push(t.toString()),a)}const Z2=oM(ch);class $2{constructor(e,n,i){this.rules=e,this.componentId=n,this.baseHash=Is(Z2,n),this.baseStyle=i,fh.registerId(n)}generateAndInjectStyles(e,n,i){let a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";{let r="";for(let s=0;s<this.rules.length;s++){const o=this.rules[s];if(typeof o=="string")r+=o;else if(o)if(mM(o)){const l=o(e);typeof l=="string"?r+=l:l!=null&&l!==!1&&(r+=Q_(Fs(l,e,n,i)))}else r+=Q_(Fs(o,e,n,i))}if(r){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=i.hash?i.hash+r:r;let o=this.dynamicNameCache.get(s);if(!o){if(o=sM(Is(Is(this.baseHash,i.hash),r)>>>0),this.dynamicNameCache.size>=200){const l=this.dynamicNameCache.keys().next().value;l!==void 0&&this.dynamicNameCache.delete(l)}this.dynamicNameCache.set(s,o)}if(!n.hasNameForId(this.componentId,o)){const l=i(r,"."+o,void 0,this.componentId);n.insertRules(this.componentId,o,l)}a=Ec(a,o)}}return a}}const Q2=/&/g;function _M(t,e){let n=0;for(;--e>=0&&t.charCodeAt(e)===92;)n++;return!(1&~n)}function Yh(t){const e=t.length;let n="",i=0,a=0,r=0,s=!1,o=!1;for(let l=0;l<e;l++){const c=t.charCodeAt(l);if(r!==0||s||c!==Rs||t.charCodeAt(l+1)!==42)if(s)c===42&&t.charCodeAt(l+1)===Rs&&(s=!1,l++);else if(c!==34&&c!==39||_M(t,l)){if(r===0)if(c===123)a++;else if(c===125){if(a--,a<0){o=!0;let f=l+1;for(;f<e;){const p=t.charCodeAt(f);if(p===59||p===10)break;f++}f<e&&t.charCodeAt(f)===59&&f++,a=0,l=f-1,i=f;continue}a===0&&(n+=t.substring(i,l+1),i=l+1)}else c===59&&a===0&&(n+=t.substring(i,l+1),i=l+1)}else r===0?r=c:r===c&&(r=0);else s=!0,l++}return o||a!==0||r!==0?(i<e&&a===0&&r===0&&(n+=t.substring(i)),n):t}function xM(t,e){const n=e+" ",i=","+n;for(let a=0;a<t.length;a++){const r=t[a];if(r.type==="rule"){r.value=(n+r.value).replaceAll(",",i);const s=r.props,o=[];for(let l=0;l<s.length;l++)o[l]=n+s[l];r.props=o}Array.isArray(r.children)&&r.type!=="@keyframes"&&xM(r.children,e)}return t}function yM({options:t=Ml,plugins:e=ov}=Ml){let n,i,a;const r=(u,d,v)=>v.startsWith(i)&&v.endsWith(i)&&v.replaceAll(i,"").length>0?`.${n}`:u,s=e.slice();s.push(u=>{u.type===rh&&u.value.includes("&")&&(a||(a=new RegExp(`\\${i}\\b`,"g")),u.props[0]=u.props[0].replace(Q2,i).replace(a,r))}),t.prefix&&s.push(d2),s.push(c2);let o=[];const l=u2(s.concat(f2(u=>o.push(u)))),c=(u,d="",v="",S="&")=>{n=S,i=d,a=void 0;const m=function(g){const x=g.indexOf("//")!==-1,y=g.indexOf("}")!==-1;if(!x&&!y)return g;if(!x)return Yh(g);const R=g.length;let E="",T=0,_=0,w=0,U=0,N=0,I=!1;for(;_<R;){const G=g.charCodeAt(_);if(G!==34&&G!==39||_M(g,_))if(w===0)if(G===Rs&&_+1<R&&g.charCodeAt(_+1)===42){for(_+=2;_+1<R&&(g.charCodeAt(_)!==42||g.charCodeAt(_+1)!==Rs);)_++;_+=2}else if(G!==40)if(G!==41)if(U>0)_++;else if(G===42&&_+1<R&&g.charCodeAt(_+1)===Rs)E+=g.substring(T,_),_+=2,T=_,I=!0;else if(G===Rs&&_+1<R&&g.charCodeAt(_+1)===Rs){for(E+=g.substring(T,_);_<R&&g.charCodeAt(_)!==10;)_++;T=_,I=!0}else G===123?N++:G===125&&N--,_++;else U>0&&U--,_++;else U++,_++;else _++;else w===0?w=G:w===G&&(w=0),_++}return I?(T<R&&(E+=g.substring(T)),N===0?E:Yh(E)):N===0?g:Yh(g)}(u);let h=o2(v||d?v+" "+d+" { "+m+" }":m);return t.namespace&&(h=xM(h,t.namespace)),o=[],_d(h,l),o},f=t;let p=Hm;for(let u=0;u<e.length;u++)e[u].name||Vl(15),p=Is(p,e[u].name);return f!=null&&f.namespace&&(p=Is(p,f.namespace)),f!=null&&f.prefix&&(p=Is(p,"p")),c.hash=p!==Hm?p.toString():"",c}const K2=new fh,J2=yM(),lv=$e.createContext({shouldForwardProp:void 0,styleSheet:K2,stylis:J2,stylisPlugins:void 0});lv.Consumer;function SM(){return $e.useContext(lv)}function MM(t){var e;const n=SM(),{styleSheet:i}=n,a=$e.useMemo(()=>{let c=i;return t.sheet?c=t.sheet:t.target?c=c.reconstructWithOptions(t.nonce!==void 0?{target:t.target,nonce:t.nonce}:{target:t.target},!1):t.nonce!==void 0&&(c=c.reconstructWithOptions({nonce:t.nonce})),t.disableCSSOMInjection&&(c=c.reconstructWithOptions({useCSSOMInjection:!1})),c},[t.disableCSSOMInjection,t.nonce,t.sheet,t.target,i]),r=$e.useMemo(()=>{var c;return t.stylisPlugins===void 0&&t.namespace===void 0&&t.enableVendorPrefixes===void 0?n.stylis:yM({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:(c=t.stylisPlugins)!==null&&c!==void 0?c:n.stylisPlugins})},[t.enableVendorPrefixes,t.namespace,t.stylisPlugins,n.stylis,n.stylisPlugins]),s="shouldForwardProp"in t?t.shouldForwardProp:n.shouldForwardProp,o=(e=t.stylisPlugins)!==null&&e!==void 0?e:n.stylisPlugins,l=$e.useMemo(()=>({shouldForwardProp:s,styleSheet:a,stylis:r,stylisPlugins:o}),[s,a,r,o]);return $e.createElement(lv.Provider,{value:l},t.children)}const bM=$e.createContext(void 0);bM.Consumer;const Zh={};function e3(t,e){const n=typeof t!="string"?"sc":rM(t);Zh[n]=(Zh[n]||0)+1;const i=n+"-"+S2(ch+n+Zh[n]);return e?e+"-"+i:i}function t3(t,e,n){const i=fM(t),a=t,r=!Gm(t),{attrs:s=ov,componentId:o=e3(e.displayName,e.parentComponentId),displayName:l=b2(t)}=e,c=e.displayName&&e.componentId?rM(e.displayName)+"-"+e.componentId:e.componentId||o,f=i&&a.attrs?a.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:p}=e;if(i&&a.shouldForwardProp){const S=a.shouldForwardProp;if(e.shouldForwardProp){const m=e.shouldForwardProp;p=(h,g)=>S(h,g)&&m(h,g)}else p=S}const u=new $2(n,c,i?a.componentStyle:void 0);function d(S,m){return function(h,g,x){const{attrs:y,componentStyle:R,defaultProps:E,foldedComponentIds:T,styledComponentId:_,target:w}=h,U=$e.useContext(bM),N=SM(),I=h.shouldForwardProp||N.shouldForwardProp,G=v2(g,U,E)||Ml,[W,z]=function(ae,ge,Ie){const De=Object.assign(Object.assign({},ge),{className:void 0,theme:Ie});let ze=null;const J=ae.length>1;for(let de=0;de<ae.length;de++){const ne=ae[de],Pe=uh(ne)?ne(J?Object.assign({},De):De):ne;for(const Ne in Pe)Ne==="className"?De.className=Ec(De.className,Pe[Ne]):Ne==="style"?De.style=Object.assign(Object.assign({},De.style),Pe[Ne]):Pe[Ne]===void 0?Ne in De&&(De[Ne]!==void 0&&(ze||(ze=[])).push(Ne),De[Ne]=void 0):De[Ne]=Pe[Ne]}return"className"in ge&&typeof ge.className=="string"&&(De.className=Ec(De.className,ge.className)),[De,ze]}(y,g,G),L=R.generateAndInjectStyles(W,N.styleSheet,N.stylis),P=W.as||w,B=Gm(P),Y=function(ae,ge,Ie,De,ze,J){const de={};for(const ne in ae)ne[0]==="$"||ne==="as"||ne==="theme"&&ae.theme===Ie||(ne==="forwardedAs"?ae.forwardedAs!==void 0&&(de.as=ae.forwardedAs):ae[ne]===void 0?ne==="className"||ze||J!==null&&J.indexOf(ne)!==-1||De&&!De(ne,ge)||(de[ne]=void 0):De&&!De(ne,ge)||(de[ne]=ae[ne]));return de}(W,P,G,I,B,z);let $=Ec(T,_);return L&&($+=" "+L),W.className&&($+=" "+W.className),Y[B&&P.includes("-")?"class":"className"]=$,x&&(Y.ref=x),He.createElement(P,Y)}(v,S,m)}d.displayName=l;let v=$e.forwardRef(d);return v.attrs=f,v.componentStyle=u,v.displayName=l,v.shouldForwardProp=p,v.foldedComponentIds=i?Ec(a.foldedComponentIds,a.styledComponentId):"",v.styledComponentId=c,v.target=i?a.target:t,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(S){this._foldedDefaultProps=i?function(m,...h){for(const g of h)Vm(m,g,!0);return m}({},a.defaultProps,S):S}}),dM(v,()=>`.${v.styledComponentId}`),r&&uM(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var n3=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function nx(t,e){const n=[t[0]];for(let i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}const ix=t=>(pM.add(t),t);function i3(t,...e){if(uh(t)||Jc(t))return ix(Fs(nx(ov,[t,...e])));const n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Fs(n):ix(Fs(nx(n,e)))}function Xm(t,e,n=Ml){if(!e)throw Vl(1,e);const i=(a,...r)=>t(e,n,i3(a,...r));return i.attrs=a=>Xm(t,e,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)})),i.withConfig=a=>Xm(t,e,Object.assign(Object.assign({},n),a)),i}const EM=t=>Xm(t3,t),Ee=EM;n3.forEach(t=>{Ee[t]=EM(t)});const le={textWhite:"#EDEDED",textGrey:"#9C9C9C",textTertiary:"#6B6B6E",dangerRed:"rgba(243, 151, 143, 1)",dangerRedPressed:"rgba(240, 97, 84,1)",accent:"#2D7FF9",accentGlow:"rgba(45, 127, 249, 0.35)",panelBackground:"rgba(38, 38, 38, 0.72)",panelBorder:"rgba(61, 61, 63, 0.7)",buttonBackground:"rgba(61, 61, 63, 0.6)",buttonPressed:"rgba(61, 61, 63, 1)",gradientGreyTranslucent:"linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))"},xn={height:"30px",minWidth:"30px",fontSize:"14px",radiusMiddle:"3px",radiusSolo:"10px",radiusFirst:"10px 3px 3px 10px",radiusLast:"3px 10px 10px 3px",widthLong:"70px",gap:"3px"},ax=Ee.button`
  background: ${le.gradientGreyTranslucent};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${le.textWhite};
  border: 1px solid transparent;
  border-radius: ${xn.radiusMiddle};
  font-size: ${xn.fontSize};
  height: ${xn.height};
  min-width: ${xn.minWidth};
  transition: all 0.2s ease-in-out;
  text-transform: none;
  box-shadow: none;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:first-child {
    border-radius: ${({$reverse:t})=>t?xn.radiusLast:xn.radiusFirst};
  }

  &:last-child {
    border-radius: ${({$reverse:t})=>t?xn.radiusFirst:xn.radiusLast};
  }

  &:first-child:last-child {
    border-radius: ${xn.radiusSolo};
  }
`,jm=Ee.div`
  padding: 4px;
  display: flex;
  gap: 2px;
  background-color: ${le.panelBackground};
  border: 1px solid ${le.panelBorder};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  justify-content: center;
  pointer-events: all;
  border-radius: 14px;
  align-items: center;
`,On=Ee.button`
  background-color: ${({$active:t,$open:e})=>t?"rgba(45, 127, 249, 0.18)":e?"rgba(255, 255, 255, 0.1)":"transparent"};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({$active:t})=>t?le.accent:le.textWhite};
  border-radius: 8px;
  height: 28px;
  min-width: 28px;
  padding: 0 6px;
  transition: all 0.15s ease-in-out;
  text-transform: none;
  box-shadow: none;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:hover:not(:disabled) {
    background-color: ${({$active:t,$open:e})=>t?"rgba(45, 127, 249, 0.24)":e?"rgba(255, 255, 255, 0.14)":"rgba(255, 255, 255, 0.06)"};
  }

  &:active:not(:disabled) {
    background-color: ${({$active:t,$open:e})=>t?"rgba(45, 127, 249, 0.32)":e?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.1)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${le.accent};
    outline-offset: 1px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  &:disabled:hover,
  &:disabled:active {
    background-color: transparent;
  }
`,Ds=Ee.div`
  background-color: ${({$pressed:t})=>t?le.buttonPressed:le.buttonBackground};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${le.textWhite};
  border-radius: 8px;
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  height: 30px;
  width: 30px;
  transition: all 0.2s ease-in-out;
`,yd=Ee.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`,cv=Ee.div`
  flex: none;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${le.panelBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 9px;
  font-weight: 600;
  color: ${le.textGrey};
`;Ee.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 3px;
  justify-content: flex-start;
  flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};

  &:last-child {
    margin-bottom: 0;
  }
`;Ee.div`
  display: flex;
  flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: ${({$reverse:t})=>t?"0 5px 0 0":"0 0 0 5px"};
  gap: 3px;
`;Ee.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  pointer-events: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin: 0 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;Ee.div`
  position: absolute;
  background-color: ${le.accent};
  box-shadow: 0 0 8px ${le.accentGlow};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  pointer-events: auto;
`;Ee.input.attrs({type:"range"})`
  -webkit-appearance: none;
  appearance: none;
  background: ${le.gradientGreyTranslucent};
  border: none;
  height: 100%;
  width: ${xn.widthLong};
  cursor: pointer;
  margin: 0;
  transition: all 0.2s ease-in-out;
  border-radius: ${({$reverse:t})=>t?xn.radiusFirst:xn.radiusLast};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 30px;
    background-color: ${le.accent};
    border-radius: ${xn.radiusMiddle};
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 30px;
    background-color: ${le.accent};
    border-radius: ${xn.radiusMiddle};
  }

  &::-ms-thumb {
    width: 8px;
    height: 24px;
    background-color: ${le.accent};
    border-radius: ${xn.radiusMiddle};
  }
`;Ee.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$reverse:t})=>t?"flex-start":"flex-end"};
  justify-content: center;
  margin: ${({$reverse:t})=>t?"2px -26px 0 0":"2px 0 0 -26px"};
`;Ee.div`
  display: flex;
  flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
  align-items: center;
  justify-content: center;
`;const Se={labelW:"40px",fieldW:"52px",gap:"4px",rowH:"26px",cellRadius:"8px",inset:"rgba(0, 0, 0, 0.25)",accentSoft:"rgba(45, 127, 249, 0.45)",accentTint:"rgba(45, 127, 249, 0.18)"},dh=Ee.span`
  flex: none;
  width: ${Se.labelW};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  color: ${le.textGrey};
`,hh=Ee.div`
  position: fixed;
  padding: 5px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: ${le.textWhite};
  pointer-events: all;
  background-color: ${le.panelBackground};
  border: 1px solid ${le.panelBorder};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Qi=Ee.hr`
  width: ${({$horizontal:t=!0})=>t?"unset":"1px"};
  height: ${({$horizontal:t=!0})=>t?"1px":"unset"};
  background-color: ${le.panelBorder};
  margin: 5px 3px;
  border: none;
`,qr=Ee.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({$isRed:t})=>t?le.dangerRed:le.textWhite};
  font-size: 12px;
  padding: 3px;
  text-transform: none;
  box-shadow: none;

  &:hover {
    color: ${({$isRed:t})=>t?le.dangerRedPressed:"#ffffff"};
  }

  &:active {
    color: ${({$isRed:t})=>t?le.dangerRedPressed:"#ffffff"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${le.accent};
    outline-offset: 1px;
  }
`,a3=Ee.div`
  display: flex;
  flex-direction: row;
  gap: ${Se.gap};
  height: ${Se.rowH};
`,qm=Ee.input.attrs({type:"text"})`
  width: ${Se.fieldW};
  outline: none;
  background: ${Se.inset};
  border: 1px solid ${le.panelBorder};
  border-radius: ${Se.cellRadius};
  height: ${Se.rowH};
  color: ${le.textWhite};
  padding: 0 10px 0 5px;
  box-sizing: border-box;
  font-size: 10px;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

  &:focus-visible {
    outline: 2px solid ${le.accent};
    outline-offset: 1px;
  }

  &:read-only {
    background: ${Se.inset};
    cursor: default;
  }

  &:invalid {
    background-color: ${le.dangerRed};
  }
`,Wm=Ee.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${le.textGrey};
  font-size: 10px;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
`;/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function s3(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:r3(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=t=>{const e=o3(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $h(t){return t!=null}function c3(t,e={}){var u,d;const n=e.attributeNames??{},i=v=>n[v]??v,a=t.size??t.width??ds.width,r=t.size??t.height??ds.height,s=((u=t.aliases)==null?void 0:u.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...s],l=((d=e.className)==null?void 0:d.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?Ym(...l):Ym("lucide",...o,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??ds["stroke-width"])*Number(t.size??t.width??ds.width)/Number(e.size??e.width??ds.width):e.strokeWidth??ds["stroke-width"];return["svg",{...Object.entries(ds).reduce((v,[S,m])=>(v[i(S)]=m,v),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&$h(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&$h(e.width)&&{[i("width")]:e.width},..."height"in e&&$h(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${a} ${r}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[S,m,h]=v,g=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return h?[S,g,h]:[S,g]})]}/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function u3(t,e={}){return c3(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},d3=He.createContext({}),h3=()=>He.useContext(d3),p3=He.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:a,absoluteStrokeWidth:r,nonScalingStroke:s,className:o="",children:l,iconNode:c=[],icon:f={node:c,aliases:[],size:24},...p},u)=>{const{size:d=24,strokeWidth:v=2,absoluteStrokeWidth:S=!1,nonScalingStroke:m=!1,color:h="currentColor",className:g=""}=h3()??{},x=!!l||f3(p),[y,R,E=[]]=u3(f,{color:t??h,width:n??e??d,height:i??e??d,strokeWidth:a??v,absoluteStrokeWidth:r??S,nonScalingStroke:s??m,className:Ym(g,o),hasA11yProp:x,attributes:p});return He.createElement(y,{ref:u,...R},[...E.map(([T,_])=>He.createElement(T,_)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function at(t,e=[],n=[]){const i=typeof t=="string"?s3(t,e,n):t,a=He.forwardRef(({className:r,...s},o)=>He.createElement(p3,{ref:o,icon:i,className:r,...s}));return i.name&&(a.displayName=l3(i.name)),a}/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM={name:"armchair",size:24,node:[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]};TM.node;const m3=at(TM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM={name:"arrow-big-up",size:24,node:[["path",{d:"M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z",key:"106j91"}]]};AM.node;const g3=at(AM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};wM.node;const v3=at(wM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};CM.node;const _3=at(CM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM={name:"arrow-right-to-line",size:24,node:[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]};RM.node;const x3=at(RM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};DM.node;const y3=at(DM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};NM.node;const S3=at(NM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM={name:"atom",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]};UM.node;const M3=at(UM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM={name:"ban",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]]};LM.node;const b3=at(LM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};PM.node;const E3=at(PM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};OM.node;const T3=at(OM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};zM.node;const A3=at(zM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};IM.node;const w3=at(IM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM={name:"circle-dot",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};FM.node;const C3=at(FM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM={name:"circle-play",size:24,node:[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["play-circle"]};BM.node;const R3=at(BM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};HM.node;const D3=at(HM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM={name:"corner-down-left",size:24,node:[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]};GM.node;const N3=at(GM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM={name:"delete",size:24,node:[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]};VM.node;const U3=at(VM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};kM.node;const L3=at(kM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};XM.node;const P3=at(XM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM={name:"glasses",size:24,node:[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]};jM.node;const O3=at(jM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM={name:"hand",size:24,node:[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]};qM.node;const z3=at(qM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};WM.node;const I3=at(WM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};YM.node;const F3=at(YM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};ZM.node;const B3=at(ZM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M={name:"mouse-left",size:24,node:[["path",{d:"M12 7.318V10",key:"17s7lh"}],["path",{d:"M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7",key:"imk5ea"}],["circle",{cx:"7",cy:"4",r:"2",key:"ra7k3"}]]};$M.node;const H3=at($M);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM={name:"mouse-right",size:24,node:[["path",{d:"M12 7.318V10",key:"17s7lh"}],["path",{d:"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7",key:"2es5nn"}],["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}]]};QM.node;const G3=at(QM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM={name:"mouse",size:24,node:[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]};KM.node;const V3=at(KM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM={name:"pin",size:24,node:[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]};JM.node;const k3=at(JM);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb={name:"plug",size:24,node:[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",key:"1xoxul"}],["path",{d:"M9 8V2",key:"14iosj"}]]};eb.node;const X3=at(eb);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};tb.node;const j3=at(tb);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};nb.node;const q3=at(nb);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib={name:"scan-eye",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]};ib.node;const W3=at(ib);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab={name:"scan",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]};ab.node;const Y3=at(ab);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};rb.node;const Z3=at(rb);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb={name:"shapes",size:24,node:[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]};sb.node;const $3=at(sb);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};ob.node;const Q3=at(ob);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};lb.node;const K3=at(lb),J3={"rotate-ccw":j3,"circle-play":R3,"gamepad-2":P3,hand:z3,eye:L3,keyboard:I3,armchair:m3,layers:F3,box:E3,shapes:$3,save:q3,scan:Y3,"scan-eye":W3,"log-out":B3,atom:M3,bug:T3,x:K3,settings:Z3,"circle-x":D3,plug:X3,glasses:O3,video:Q3,pin:k3,"circle-dot":C3,"chevron-left":A3,"chevron-right":w3,ban:b3,mouse:V3,"mouse-left":H3,"mouse-right":G3,"corner-down-left":N3,"arrow-big-up":g3,"arrow-up":S3,"arrow-down":v3,"arrow-left":_3,"arrow-right":y3,"arrow-right-to-line":x3,delete:U3},eC=({size:t,color:e,style:n})=>C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 14 14",fill:"none",style:n,children:[C.jsx("path",{fill:e,d:"M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"}),C.jsx("path",{fill:e,fillRule:"evenodd",d:"M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z"})]}),Re=({name:t,size:e=16,color:n="currentColor",strokeWidth:i=2,style:a})=>{if(t==="iwer")return C.jsx(eC,{size:e,color:n,style:a});const r=J3[t];return r?C.jsx(r,{size:e,color:n,strokeWidth:i,style:a}):null},_a={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:C.jsx(Re,{name:"arrow-right-to-line",size:15}),Backspace:C.jsx(Re,{name:"delete",size:15}),Enter:C.jsx(Re,{name:"corner-down-left",size:15}),ShiftLeft:C.jsx(Re,{name:"arrow-big-up",size:15}),ShiftRight:C.jsx(Re,{name:"arrow-big-up",size:15}),Space:" ",ArrowUp:C.jsx(Re,{name:"arrow-up",size:15}),ArrowDown:C.jsx(Re,{name:"arrow-down",size:15}),ArrowLeft:C.jsx(Re,{name:"arrow-left",size:15}),ArrowRight:C.jsx(Re,{name:"arrow-right",size:15}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:C.jsx(Re,{name:"mouse-left",size:15}),MouseRight:C.jsx(Re,{name:"mouse-right",size:15})},rx=t=>{let e;const n=new Set,i=(c,f)=>{const p=typeof c=="function"?c(e):c;if(!Object.is(p,e)){const u=e;e=f??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(d=>d(e,u))}},a=()=>e,o={setState:i,getState:a,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,a,o);return o},tC=t=>t?rx(t):rx,nC=t=>t;function iC(t,e=nC){const n=$e.useSyncExternalStore(t.subscribe,$e.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return $e.useDebugValue(n),n}const sx=t=>{const e=tC(t),n=i=>iC(e,i);return Object.assign(n,e),n},ph=t=>t?sx(t):sx,aC="iwer-prefs";function pa(t){if(typeof window>"u"||!t)return;const e=window.location.origin==="null"?"*":window.location.origin;window.postMessage({channel:aC,scope:"origin",patch:t},e)}let Bu=null,fo=null;function Z5(t,e=200){typeof window>"u"||!t||(fo={...fo??{},...t},Bu!=null&&clearTimeout(Bu),Bu=setTimeout(()=>{const n=fo;fo=null,Bu=null,n&&pa(n)},e))}let cb=null;function $5(t){cb=t}function rC(){return cb}const sC={thumbstick:"Press",trigger:"Trig",squeeze:"Grip","x-button":"X","y-button":"Y","a-button":"A","b-button":"B",thumbrest:"Rest",pose:"Pose",pinch:"Pinch"},oC=t=>{var e;return(e=sC[t])!==null&&e!==void 0?e:t},ox={"thumbstick-up":"arrow-up","thumbstick-down":"arrow-down","thumbstick-left":"arrow-left","thumbstick-right":"arrow-right"},lC=["thumbstick-up","thumbstick-down","thumbstick-left","thumbstick-right","thumbstick"],lx=["trigger","squeeze","a-button","b-button","x-button","y-button","thumbrest","pose","pinch"],cx={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE",pinch:"MouseLeft",pose:"KeyF"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight",pinch:"MouseRight",pose:"Backslash"}},uv=ph(t=>({keyMap:cx,bindKey:(e,n,i="Unmapped")=>{pa({keymap:{[e]:{[n]:i}}}),t(a=>({keyMap:{...a.keyMap,[e]:{...a.keyMap[e],[n]:i}}}))},resetKeyMap:e=>{const n={...cx[e]};pa({keymap:{[e]:n}}),t(i=>({keyMap:{...i.keyMap,[e]:n}}))}})),cC=Ee.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background-color: ${Se.inset};
  border-radius: ${Se.cellRadius};
  margin-bottom: ${Se.gap};
  color: ${le.textTertiary};
  font-size: 10px;
  line-height: 1.3;
`,ux=Ee.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${le.textTertiary};
  margin: 4px 0 1px;
`,uC=Ee.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Se.gap};
  height: ${Se.rowH};
  margin-bottom: ${Se.gap};
`,fC=Ee.div`
  flex: none;
  width: ${Se.labelW};
  height: ${Se.rowH};
  display: flex;
  align-items: center;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  color: ${le.textGrey};
`,dC=Ee.button`
  flex: 1 1 auto;
  height: ${Se.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${Se.cellRadius};
  border: 1px solid
    ${({$listening:t})=>t?le.accent:le.panelBorder};
  background-color: ${({$listening:t})=>t?Se.accentTint:le.buttonBackground};
  color: ${({$listening:t})=>t?le.accent:le.textWhite};
  cursor: pointer;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12px;
  transition: all 0.12s ease;

  &:hover {
    background-color: ${({$listening:t})=>t?Se.accentTint:le.buttonPressed};
  }
  &:focus {
    outline: none;
  }
`,hC=Ee.button`
  flex: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: ${le.textGrey};
  cursor: pointer;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: ${le.textWhite};
  }
  &:focus {
    outline: none;
  }
`,pC=Ee.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: ${Se.rowH};
  border: none;
  border-radius: ${Se.cellRadius};
  background-color: transparent;
  color: ${le.textGrey};
  cursor: pointer;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  font-size: 12px;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: ${le.textWhite};
  }
  &:focus {
    outline: none;
  }
`,ub=({handedness:t,actions:e})=>{var n;const{keyMap:i,bindKey:a,resetKeyMap:r}=uv(),[s,o]=He.useState(null);He.useEffect(()=>{if(!s)return;const d=m=>{_a[m.code]&&(a(t,s,m.code),o(null))},v=m=>{const h=m.button===0?"MouseLeft":m.button===2?"MouseRight":null;h&&_a[h]&&(a(t,s,h),o(null))},S=m=>m.preventDefault();return window.addEventListener("keydown",d),window.addEventListener("mousedown",v),window.addEventListener("contextmenu",S),()=>{window.removeEventListener("keydown",d),window.removeEventListener("mousedown",v),window.removeEventListener("contextmenu",S)}},[s,t,a]);const l=(n=i[t])!==null&&n!==void 0?n:{},c=Object.keys(l).filter(d=>e.includes(d)),f=lC.filter(d=>c.includes(d)),p=c.filter(d=>!d.startsWith("thumbstick")).sort((d,v)=>lx.indexOf(d)-lx.indexOf(v)),u=d=>{const v=_a[l[d]];return C.jsxs(uC,{children:[C.jsx(fC,{children:ox[d]?C.jsx(Re,{name:ox[d],size:14}):oC(d)}),C.jsx(dC,{type:"button",$listening:s===d,onClick:()=>o(s===d?null:d),onContextMenu:S=>S.preventDefault(),title:"Click, then press a key or mouse button",children:s===d?"press a key…":v??"—"}),C.jsx(hC,{type:"button",onClick:()=>a(t,d),onContextMenu:S=>S.preventDefault(),title:"Clear binding",children:C.jsx(Re,{name:"ban",size:12})})]},d)};return C.jsxs(C.Fragment,{children:[C.jsx(Qi,{}),C.jsxs(cC,{children:[C.jsx(Re,{name:"keyboard",size:12}),"Click a binding, then press a key or mouse button"]}),f.length>0&&C.jsx(ux,{children:"Thumbstick"}),f.map(u),p.length>0&&f.length>0&&C.jsx(ux,{children:"Buttons"}),p.map(u),C.jsx(Qi,{}),C.jsxs(pC,{type:"button",onClick:()=>r(t),children:[C.jsx(Re,{name:"rotate-ccw",size:12}),"Reset to defaults"]})]})},Kl=16,mC=Ee.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0;
  margin-bottom: ${Se.gap};
`,gC=Ee.div`
  position: relative;
  flex: none;
  width: ${Se.fieldW};
  height: ${Se.fieldW};
  border-radius: 50%;
  background-color: ${Se.inset};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`,vC=Ee.div`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${le.accent};
  box-shadow: 0 0 8px ${le.accentGlow};
  cursor: grab;
  pointer-events: auto;
`,_C=Ee.div`
  display: flex;
  flex-direction: column;
  gap: ${Se.gap};
  flex: 1 1 auto;
  /* Joystick occupies column 1 (= label-width's first field). Offset the X/Y
     stack by one grid gap so the fields land exactly in columns 2 and 3,
     lining up with the Position/Rotation fields above. */
  margin-left: ${Se.gap};
`,fx=Ee.div`
  display: flex;
  gap: ${Se.gap};
  align-items: center;
`,dx=Ee.div`
  position: relative;
  display: inline-block;
  height: ${Se.rowH};
`,xC=Ee.div`
  flex: 1 1 auto;
  height: ${Se.rowH};
  border-radius: ${Se.cellRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-size: 11px;
  color: ${le.textWhite};
  background-color: ${({$active:t})=>t?Se.accentTint:Se.inset};
  transition: background-color 0.12s ease;
`,hx=Ee.button`
  flex: none;
  width: 22px;
  height: ${Se.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({$active:t})=>t?Se.accentTint:"transparent"};
  color: ${({$active:t})=>t?le.accent:le.textGrey};

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:focus {
    outline: none;
  }
`,yC=Ee.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: ${Se.gap};
  margin-left: ${Se.gap};
`,SC=({xrController:t,pointerLocked:e,buttonId:n,mappedKeyUp:i,mappedKeyDown:a,mappedKeyLeft:r,mappedKeyRight:s,mappedKeyPressed:o})=>{const l=He.useRef(null),c=He.useRef({x:0,y:0}),f=He.useRef(!1),[p,u]=He.useState({x:0,y:0}),[d,v]=He.useState(!1),[S,m]=He.useState(!1),h=He.useRef(!1);h.current=S;const[g,x]=He.useState(!1),[y,R]=He.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),E=He.useRef(y);E.current=y;const T=N=>{const I=l.current;if(!I)return;const G=I.getBoundingClientRect();c.current={x:G.left+G.width/2,y:G.top+G.height/2},f.current=!0,N.preventDefault()};He.useEffect(()=>{const N=G=>{if(!f.current||!l.current)return;const W=G.clientX-c.current.x,z=G.clientY-c.current.y,L=Math.sqrt(W*W+z*z);let P=W,B=z;if(L>Kl){const ae=Math.atan2(z,W);P=Math.cos(ae)*Kl,B=Math.sin(ae)*Kl}l.current.style.transform=`translate(${P}px, ${B}px)`;const Y=P/Kl,$=B/Kl;t.updateAxes(n,Y,$),u({x:Y,y:$})},I=()=>{f.current&&(f.current=!1,l.current&&(l.current.style.transform="translate(0, 0)"),t.updateAxes(n,0,0),u({x:0,y:0}))};return document.addEventListener("mousemove",N),document.addEventListener("mouseup",I),()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",I)}},[n,t]),He.useEffect(()=>{const N=()=>{d&&!h.current&&(v(!1),t.updateButtonValue(n,0))};return window.addEventListener("mouseup",N),()=>window.removeEventListener("mouseup",N)},[d,n,t]),He.useEffect(()=>{if(!e)return;const N=B=>{const Y=(B.right?1:0)-(B.left?1:0),$=(B.down?1:0)-(B.up?1:0),ae=Math.sqrt(Y*Y+$*$);ae===0?t.updateAxes(n,0,0):t.updateAxes(n,Y/ae,$/ae)},I=(B,Y)=>{if(!B)return;const $={...E.current};let ae=!1;B===i&&($.up=Y,ae=!0),B===a&&($.down=Y,ae=!0),B===r&&($.left=Y,ae=!0),B===s&&($.right=Y,ae=!0),B===o&&($.pressed=Y,ae=!0,t.updateButtonValue(n,Y?1:0)),ae&&(R($),N($))},G=B=>B.button===0?"MouseLeft":B.button===2?"MouseRight":null,W=B=>I(B.code,!0),z=B=>I(B.code,!1),L=B=>I(G(B),!0),P=B=>I(G(B),!1);return window.addEventListener("keydown",W),window.addEventListener("keyup",z),window.addEventListener("mousedown",L),window.addEventListener("mouseup",P),()=>{window.removeEventListener("keydown",W),window.removeEventListener("keyup",z),window.removeEventListener("mousedown",L),window.removeEventListener("mouseup",P)}},[e,i,a,r,s,o,n,t]);const _=()=>{S||(v(!0),t.updateButtonValue(n,1))},w=()=>{const N=!S;m(N),v(N),t.updateButtonValue(n,N?1:0)},U=()=>{const N=!g;x(N),t.updateButtonTouch(n,N)};return e?C.jsxs(C.Fragment,{children:[C.jsxs(yd,{children:[C.jsx(cv,{children:"Stick"}),C.jsx(Ds,{$pressed:y.up,children:_a[i]}),C.jsx(Ds,{$pressed:y.pressed,children:_a[o]})]}),C.jsxs(yd,{children:[C.jsx(Ds,{$pressed:y.left,children:_a[r]}),C.jsx(Ds,{$pressed:y.down,children:_a[a]}),C.jsx(Ds,{$pressed:y.right,children:_a[s]})]})]}):C.jsxs(mC,{children:[C.jsx(dh,{children:"Stick"}),C.jsx(gC,{children:C.jsx(vC,{ref:l,onMouseDown:T})}),C.jsxs(_C,{children:[C.jsxs(fx,{children:[C.jsxs(dx,{children:[C.jsx(qm,{readOnly:!0,value:p.x.toFixed(2)}),C.jsx(Wm,{children:"X"})]}),C.jsxs(dx,{children:[C.jsx(qm,{readOnly:!0,value:p.y.toFixed(2)}),C.jsx(Wm,{children:"Y"})]})]}),C.jsxs(fx,{style:{gap:0},children:[C.jsx(xC,{$active:d||S,onMouseDown:_,children:"click"}),C.jsxs(yC,{children:[C.jsx(hx,{$active:S,onClick:w,type:"button",title:"Hold (latch)",children:C.jsx(Re,{name:"pin",size:12})}),C.jsx(hx,{$active:g,onClick:U,type:"button",title:"Toggle touch state",children:C.jsx(Re,{name:"circle-dot",size:12})})]})]})]})]})},MC=Ee.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  height: ${Se.rowH};
  margin-bottom: ${Se.gap};

  &:last-child {
    margin-bottom: 0;
  }
`,bC=Ee.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: ${Se.gap};
  margin-left: ${Se.gap};
`,EC=Ee.div`
  position: relative;
  flex: 1 1 auto;
  height: ${Se.rowH};
  border-radius: ${Se.cellRadius};
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  user-select: none;
  background-color: ${({$active:t})=>t?Se.accentTint:Se.inset};
  transition: background-color 0.12s ease;
`,TC=Ee.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${Se.accentSoft};
  pointer-events: none;
`,AC=Ee.span`
  position: relative;
  z-index: 1;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 11px;
  color: ${le.textWhite};
  pointer-events: none;
`,px=Ee.button`
  flex: none;
  width: 22px;
  height: ${Se.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({$active:t})=>t?Se.accentTint:"transparent"};
  color: ${({$active:t})=>t?le.accent:le.textGrey};
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:focus {
    outline: none;
  }
`,fb=({label:t,analog:e,supportsTouch:n,mappedKey:i,pointerLocked:a,onValue:r,onTouch:s})=>{const[o,l]=He.useState(0),[c,f]=He.useState(!1),[p,u]=He.useState(!1),[d,v]=He.useState(!1),S=He.useRef(null),m=He.useRef(!1),h=He.useRef(!1);h.current=c;const g=T=>{const _=Math.min(1,Math.max(0,T));l(_),r(_)};He.useEffect(()=>{if(!a)return;const T=G=>{r(G?1:0),v(G)},_=G=>i==="MouseLeft"&&G.button===0||i==="MouseRight"&&G.button===2,w=G=>{G.code===i&&T(!0)},U=G=>{G.code===i&&T(!1)},N=G=>{_(G)&&T(!0)},I=G=>{_(G)&&T(!1)};return window.addEventListener("keydown",w),window.addEventListener("keyup",U),window.addEventListener("mousedown",N),window.addEventListener("mouseup",I),()=>{window.removeEventListener("keydown",w),window.removeEventListener("keyup",U),window.removeEventListener("mousedown",N),window.removeEventListener("mouseup",I)}},[i,a,r]),He.useEffect(()=>{const T=w=>{if(!m.current||!e||!S.current)return;const U=S.current.getBoundingClientRect();g((w.clientX-U.left)/U.width)},_=()=>{m.current&&(m.current=!1,h.current||g(0))};return window.addEventListener("mousemove",T),window.addEventListener("mouseup",_),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",_)}},[e]);const x=()=>{c||(m.current=!0,g(1))},y=()=>{const T=!c;f(T),g(T?o>0?o:1:0)},R=()=>{const T=!p;u(T),s==null||s(T)};if(a)return C.jsxs(yd,{children:[C.jsx(cv,{children:t}),C.jsx(Ds,{$pressed:d,children:_a[i]})]});const E=e?o.toFixed(2):c?"hold":"press";return C.jsxs(MC,{children:[C.jsx(dh,{children:t}),C.jsxs(EC,{ref:S,$active:!e&&o>0,onMouseDown:x,title:"Click to press; drag to set value",children:[e&&C.jsx(TC,{style:{width:`${o*100}%`}}),C.jsx(AC,{children:E})]}),C.jsxs(bC,{children:[C.jsx(px,{$active:c,onClick:y,title:"Hold (latch)",type:"button",children:C.jsx(Re,{name:"pin",size:12})}),n&&C.jsx(px,{$active:p,onClick:R,title:"Toggle touch state",type:"button",children:C.jsx(Re,{name:"circle-dot",size:12})})]})]})};function ho(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}const wC=Ee.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({$mb:t})=>t??"0"};
`,CC=Ee.div`
  position: relative;
  display: inline-block;
  height: 26px;
`,eu=({vector:t,label:e="",multiplier:n=1,precision:i=2,onValidInput:a=()=>{},marginBottom:r="0"})=>{const[s,o]=He.useState({x:(t.x/n).toFixed(i),y:(t.y/n).toFixed(i),z:(t.z/n).toFixed(i)}),l=He.useRef({x:ho(t.x/n,i),y:ho(t.y/n,i),z:ho(t.z/n,i)}),c=He.useRef(null),f=He.useRef({x:0,y:0,z:0}),p=()=>{const d=f.current;d.x=ho(t.x/n,i),d.y=ho(t.y/n,i),d.z=ho(t.z/n,i);const{x:v,y:S,z:m}=l.current;(d.x!==v||d.y!==S||d.z!==m)&&(l.current={x:d.x,y:d.y,z:d.z},o({x:d.x.toFixed(i),y:d.y.toFixed(i),z:d.z.toFixed(i)})),c.current=requestAnimationFrame(p)};He.useEffect(()=>(c.current=requestAnimationFrame(p),()=>{c.current&&cancelAnimationFrame(c.current)}),[t,n,i]);const u=d=>v=>{const S=v.target.value,m=parseFloat(S);o(h=>({...h,[d]:S})),isNaN(m)||(l.current[d]=m,t[d]=m*n,a())};return C.jsxs(wC,{$mb:r,children:[C.jsx(dh,{children:e}),C.jsx(a3,{children:["x","y","z"].map(d=>C.jsxs(CC,{children:[C.jsx(qm,{value:s[d],onChange:u(d),className:parseFloat(s[d])!==l.current[d]?"invalid":void 0}),C.jsx(Wm,{children:d.toUpperCase()})]},`${e}-${d}`))})]})},mx={thumbstick:"Stick",trigger:"Trig",squeeze:"Grip","a-button":"A","b-button":"B","x-button":"X","y-button":"Y",thumbrest:"Rest",menu:"Menu"};function RC(t){return mx[t]?mx[t]:t.charAt(0).toUpperCase()+t.slice(1).replace(/-button$/,"")}function DC(t){const e=new Set;for(const i of t.axes)i&&i.id&&e.add(i.id);const n=t.buttons.filter(i=>i!==null).map(i=>({id:i.id,type:i.type,hasAxes:e.has(i.id)}));return n.sort((i,a)=>i.hasAxes&&!a.hasAxes?-1:!i.hasAxes&&a.hasAxes?1:0),n}const NC=({controller:t,handle:e,handedness:n,pointerLocked:i})=>{const{keyMap:a}=uv(),[r,s]=$e.useState(t.connected),[o,l]=$e.useState(!1),c=DC(t.gamepadConfig),f=c.flatMap(p=>p.hasAxes?[`${p.id}-left`,`${p.id}-right`,`${p.id}-up`,`${p.id}-down`,p.id]:p.id);return $e.useEffect(()=>{i&&l(!1)},[i]),C.jsxs(hh,{style:n==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!i&&C.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[C.jsxs("div",{style:{fontSize:"14px",fontWeight:600,display:"flex",flexDirection:"row",alignItems:"center",gap:"6px"},children:[C.jsx(Re,{name:"gamepad-2",size:15}),"Controller [",n==="left"?"L":"R","]"]}),C.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:r?C.jsxs(C.Fragment,{children:[C.jsx(qr,{title:`Click to ${o?"close":"change"} key bindings`,onClick:()=>l(!o),children:C.jsx(Re,{name:"settings",size:14})}),C.jsx(qr,{title:`Click to disconnect ${n} controller`,$isRed:!0,onClick:()=>{t.connected=!1,s(!1)},children:C.jsx(Re,{name:"circle-x",size:14})})]}):C.jsx(qr,{title:`Click to reconnect ${n} controller`,onClick:()=>{t.connected=!0,s(!0)},style:{marginLeft:"5px"},children:C.jsx(Re,{name:"plug",size:14})})})]}),r&&!i&&C.jsxs(C.Fragment,{children:[!o&&C.jsxs(C.Fragment,{children:[C.jsx(Qi,{}),C.jsx(eu,{vector:e.position,label:"Pos",marginBottom:Se.gap}),C.jsx(eu,{vector:e.rotation,label:"Rot"})]}),C.jsx(Qi,{})]}),r&&(o?C.jsx(ub,{handedness:n,actions:f}):c.map(p=>{const u=a[n];return p.hasAxes?C.jsx(SC,{xrController:t,pointerLocked:i,buttonId:p.id,mappedKeyUp:u[`${p.id}-up`],mappedKeyDown:u[`${p.id}-down`],mappedKeyLeft:u[`${p.id}-left`],mappedKeyRight:u[`${p.id}-right`],mappedKeyPressed:u[p.id]},p.id):C.jsx(fb,{label:RC(p.id),analog:p.type==="analog",supportsTouch:!0,mappedKey:u[p.id],pointerLocked:i,onValue:d=>t.updateButtonValue(p.id,d),onTouch:d=>t.updateButtonTouch(p.id,d)},p.id)}))]},n)},UC=["default","point","fist","open","thumbs-up"];function LC(t){const e=UC.filter(n=>t.includes(n));return e.length>0?e:[...t]}function PC(t,e,n){const i=LC(e),a=i.indexOf(t);return a===-1?n>0?i[0]:i[i.length-1]:i[(a+i.length+n)%i.length]}function OC(t,e){return Object.keys(e).length>0?`${t}*`:t}const zC=Ee.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  height: ${Se.rowH};
  margin-bottom: ${Se.gap};
`,IC=Ee.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Se.gap};
  height: ${Se.rowH};
`,gx=Ee.button`
  flex: none;
  width: 22px;
  height: ${Se.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${Se.inset};
  color: ${le.textGrey};

  &:hover {
    color: ${le.textWhite};
  }
  &:focus {
    outline: none;
  }
`,FC=Ee.div`
  flex: 1 1 auto;
  height: ${Se.rowH};
  border-radius: ${Se.cellRadius};
  background-color: ${Se.inset};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${le.textWhite};
`,BC=({xrDevice:t,hand:e,pointerLocked:n,mappedKey:i})=>{const a=()=>OC(e.poseId,e.fingerPoses),[r,s]=He.useState(a),[o,l]=He.useState(!1);He.useEffect(()=>{const p=()=>s(a());return p(),t.onStateChange(p)},[t,e]);const c=e.inputSource.handedness,f=p=>{const u=PC(e.poseId,e.poseIds,p);e.poseId=u,s(a()),pa({handPoses:{[c]:u}})};return He.useEffect(()=>{const p=m=>i==="MouseLeft"&&m.button===0||i==="MouseRight"&&m.button===2,u=m=>{m.repeat||m.code===i&&(f(1),l(!0))},d=m=>{m.code===i&&l(!1)},v=m=>{p(m)&&(f(1),l(!0))},S=m=>{p(m)&&l(!1)};return n&&(window.addEventListener("keydown",u),window.addEventListener("keyup",d),window.addEventListener("mousedown",v),window.addEventListener("mouseup",S)),()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",d),window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",S)}},[i,n,e]),n?C.jsxs(yd,{children:[C.jsx(cv,{children:"Pose"}),C.jsx(Ds,{$pressed:o,children:_a[i]})]}):C.jsxs(zC,{children:[C.jsx(dh,{children:"Pose"}),C.jsxs(IC,{children:[C.jsx(gx,{type:"button",onClick:()=>f(-1),title:"Previous pose",children:C.jsx(Re,{name:"chevron-left",size:14})}),C.jsx(FC,{children:r}),C.jsx(gx,{type:"button",onClick:()=>f(1),title:"Next pose",children:C.jsx(Re,{name:"chevron-right",size:14})})]})]})},HC=({xrDevice:t,hand:e,handle:n,handedness:i,pointerLocked:a})=>{const{keyMap:r}=uv(),[s,o]=$e.useState(e.connected),[l,c]=$e.useState(!1);return $e.useEffect(()=>{a&&c(!1)},[a]),C.jsxs(hh,{style:i==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!a&&C.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[C.jsxs("div",{style:{fontSize:"14px",fontWeight:600,display:"flex",flexDirection:"row",alignItems:"center",gap:"6px"},children:[C.jsx(Re,{name:"hand",size:15}),"Hand [",i==="left"?"L":"R","]"]}),C.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:s?C.jsxs(C.Fragment,{children:[C.jsx(qr,{title:`Click to ${l?"close":"change"} key bindings`,onClick:()=>c(!l),children:C.jsx(Re,{name:"settings",size:14})}),C.jsx(qr,{title:`Click to disconnect ${i} hand`,$isRed:!0,onClick:()=>{e.connected=!1,o(!1)},children:C.jsx(Re,{name:"circle-x",size:14})})]}):C.jsx(qr,{title:`Click to reconnect ${i} hand`,onClick:()=>{e.connected=!0,o(!0)},style:{marginLeft:"5px"},children:C.jsx(Re,{name:"plug",size:14})})})]}),s&&!a&&C.jsxs(C.Fragment,{children:[!l&&C.jsxs(C.Fragment,{children:[C.jsx(Qi,{}),C.jsx(eu,{vector:n.position,label:"Pos",marginBottom:Se.gap}),C.jsx(eu,{vector:n.rotation,label:"Rot"})]}),C.jsx(Qi,{})]}),s&&(l?C.jsx(ub,{handedness:i,actions:["pose","pinch"]}):C.jsxs(C.Fragment,{children:[C.jsx(BC,{xrDevice:t,hand:e,pointerLocked:a,mappedKey:r[i].pose}),C.jsx(fb,{label:"Pinch",analog:!0,supportsTouch:!1,mappedKey:r[i].pinch,pointerLocked:a,onValue:f=>e.updatePinchValue(f)})]}))]},i)},Oc=ph(t=>({inputMode:"controller",setInputMode:e=>t(()=>({inputMode:e}))})),GC=({xrDevice:t,inputLayer:e,pointerLocked:n})=>{const i=Oc(a=>a.inputMode);return C.jsx(C.Fragment,{children:i==="controller"?Object.entries(t.controllers).map(([a,r])=>C.jsx(NC,{controller:r,handle:e.transformHandles.get(a),handedness:a,pointerLocked:n},`controller-${a}`)):Object.entries(t.hands).map(([a,r])=>C.jsx(HC,{xrDevice:t,hand:r,handle:e.transformHandles.get(a),handedness:a,pointerLocked:n},`hand-${a}`))})},ma=ph(t=>({mode:"off",commitHand:"right",setMode:e=>t({mode:e}),setCommitHand:e=>t({commitHand:e})}));function VC(t,e,n,i,a){if(n.width<=0||n.height<=0)return[0,0,-1];const r=i?n.width/2:n.width,s=t-n.left,l=(i&&s>=r?s-r:s)/r*2-1,c=1-(e-n.top)/n.height*2,f=Math.tan(a/2),p=r/n.height,u=l*p*f,d=c*f,v=-1,S=Math.hypot(u,d,v);return[u/S,d/S,v/S]}const Qh=Ee.td`
  text-align: right;
  color: ${le.textWhite};
  padding: 0 8px 0 0;
  font-weight: bold;
`,Kh=Ee.td`
  text-align: left;
  color: ${le.textGrey};
  padding: 0;
`,Zm=248,Hu=Ee(hh)`
  position: absolute;
  top: calc(100% + 8px);
  left: ${({$left:t})=>`${t}px`};
  width: ${Zm}px;
  box-sizing: border-box;
  gap: ${xn.gap};
  padding: 8px;
  overflow: visible;
  z-index: 10;
`,Jh=Ee.div`
  min-height: 26px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 2px 4px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${le.accent};
    outline-offset: 1px;
    border-radius: ${Se.cellRadius};
  }
`,vx=Ee.strong`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
`,ep=Ee.button`
  width: 100%;
  min-height: 42px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid
    ${({$selected:t})=>t?Se.accentSoft:"rgba(255, 255, 255, 0.04)"};
  border-radius: ${Se.cellRadius};
  background: ${({$selected:t})=>t?Se.accentTint:"transparent"};
  color: ${({$selected:t,$unavailable:e})=>e?le.textGrey:t?le.accent:le.textWhite};
  cursor: ${({$unavailable:t})=>t?"default":"pointer"};
  text-align: left;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  &:hover {
    background: ${({$selected:t,$unavailable:e})=>e?t?Se.accentTint:"transparent":t?"rgba(45, 127, 249, 0.24)":"rgba(255, 255, 255, 0.07)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${le.accent};
    outline-offset: 1px;
  }
`,tp=Ee.span`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,np=Ee.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
`,hs=Ee.span`
  color: ${le.textGrey};
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
`,ip=Ee.div`
  padding: 5px 2px 3px;
  color: ${le.textGrey};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,_x=Ee.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 2px;
  padding: 2px;
  border-radius: ${Se.cellRadius};
  background: ${({$unavailable:t})=>t?"rgba(20, 20, 22, 0.42)":Se.inset};
`,xx=Ee.button`
  height: ${Se.rowH};
  min-width: 0;
  padding: 0 6px;
  overflow: hidden;
  border: 1px solid
    ${({$selected:t,$unavailable:e})=>t?e?"rgba(255, 255, 255, 0.08)":Se.accentSoft:"transparent"};
  border-radius: 6px;
  background: ${({$selected:t,$unavailable:e})=>t?e?"rgba(255, 255, 255, 0.04)":Se.accentTint:"transparent"};
  color: ${({$selected:t,$unavailable:e})=>e?le.textGrey:t?le.accent:le.textGrey};
  cursor: ${({$unavailable:t})=>t?"not-allowed":"pointer"};
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    color: ${({$unavailable:t})=>t?le.textGrey:le.textWhite};
    background: ${({$selected:t,$unavailable:e})=>e?t?"rgba(255, 255, 255, 0.04)":"transparent":t?"rgba(45, 127, 249, 0.24)":"rgba(255, 255, 255, 0.06)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${le.accent};
    outline-offset: 1px;
  }
`,kC=Ee.div`
  display: grid;
  grid-template-columns: 8px minmax(0, 1fr);
  align-items: start;
  gap: 7px;
  padding: 7px 8px;
  border-radius: ${Se.cellRadius};
  background: ${Se.inset};
  color: ${le.textGrey};
  font-size: 10px;
  line-height: 14px;
`,XC=Ee.span`
  width: 6px;
  height: 6px;
  margin-top: 4px;
  border-radius: 50%;
  background: ${({$tone:t})=>t==="active"?le.accent:t==="error"?le.dangerRed:le.textGrey};
  box-shadow: ${({$tone:t})=>t==="active"?`0 0 6px ${le.accentGlow}`:"none"};
`,jC=Ee.div`
  display: grid;
  gap: 4px;
  padding: 2px;
`,Gu=Ee.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 7px;
  color: ${le.textGrey};
  font-size: 10px;
  line-height: 13px;

  > :first-child {
    justify-self: center;
  }
`,qC=Ee.span`
  min-width: 20px;
  box-sizing: border-box;
  padding: 2px 4px;
  border: 1px solid ${le.panelBorder};
  border-radius: 5px;
  color: ${le.textWhite};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  text-align: center;
`;function yx(t){var e;const n=t.activeSession;return{supported:Mw(t.supportedFeatures),sessionActive:n!=null,negotiated:!!(n!=null&&n.enabledFeatures.some(i=>i==="gaze-tracking"||i==="eye-tracking")),connected:!!(!((e=t.gaze)===null||e===void 0)&&e.connected)}}function WC(t){const[e,n]=$e.useState(()=>yx(t));return $e.useEffect(()=>{const i=()=>{const r=yx(t);n(s=>s.supported===r.supported&&s.sessionActive===r.sessionActive&&s.negotiated===r.negotiated&&s.connected===r.connected?s:r)};i();const a=window.setInterval(i,500);return()=>window.clearInterval(a)},[t]),e}function Vu(t,e){const[n,i]=$e.useState(0);return $e.useLayoutEffect(()=>{if(!t)return;const a=()=>{const r=e.current,s=r==null?void 0:r.offsetParent;if(!r||!s)return;const o=r.getBoundingClientRect(),l=s.getBoundingClientRect(),c=Math.max(8,Math.min(o.left+o.width/2-Zm/2,window.innerWidth-Zm-8));i(c-l.left)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[t,e]),n}function ku(t,e){$e.useEffect(()=>{if(!t)return;const n=window.requestAnimationFrame(()=>{var i;const a=e.current,r=a==null?void 0:a.querySelector('[data-autofocus="true"]'),s=a==null?void 0:a.querySelector("button:not([disabled]), input:not([disabled])");(i=r??s)===null||i===void 0||i.focus()});return()=>window.cancelAnimationFrame(n)},[t,e])}const YC=["meeting_room","living_room","music_room","office_large","office_small"];function ZC(t){var e;const n=t.sem,i=(e=n==null?void 0:n.environments)!==null&&e!==void 0?e:YC,a=i.filter(s=>{var o,l;return((l=(o=n==null?void 0:n.environmentInfo)===null||o===void 0?void 0:o.call(n,s))===null||l===void 0?void 0:l.kind)==="legacy-scan"}),r=i.filter(s=>!a.includes(s));return!r.length||!a.length?[{label:void 0,ids:i}]:[{label:void 0,ids:r},{label:"Legacy scans",ids:a}]}const $C=Ee.div`
  color: ${le.textGrey};
  font-size: 10px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 8px 10px 2px;
`,QC=ph(t=>({infoPanelOpen:!1,envDropDownOpen:!1,headsetOpen:!1,inputMenuOpen:!1,gazePanelOpen:!1,setInfoPanelOpen:e=>t(()=>({infoPanelOpen:e})),setEnvDropDownOpen:e=>t(()=>({envDropDownOpen:e})),setHeadsetOpen:e=>t(()=>({headsetOpen:e})),setInputMenuOpen:e=>t(()=>({inputMenuOpen:e})),setGazePanelOpen:e=>t(()=>({gazePanelOpen:e}))}));function KC(t){return t.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}const Jl=[{value:"off",label:"Off"},{value:"cursor",label:"Cursor"},{value:"head-locked",label:"Head"}],ec=[{value:"left",label:"Left"},{value:"right",label:"Right"}],JC=({xrDevice:t,inputLayer:e})=>{var n,i,a;const[r,s]=$e.useState(!!(!((n=t.sem)===null||n===void 0)&&n.planesVisible)),[o,l]=$e.useState(!!(!((i=t.sem)===null||i===void 0)&&i.boundingBoxesVisible)),[c,f]=$e.useState(!!(!((a=t.sem)===null||a===void 0)&&a.meshesVisible)),p=t.visibilityMask!==void 0,[u,d]=$e.useState(t.visibilityMaskEnabled),{inputMode:v,setInputMode:S}=Oc(),m=ma(D=>D.mode),h=ma(D=>D.setMode),g=ma(D=>D.commitHand),x=ma(D=>D.setCommitHand),y=WC(t),R=$e.useRef(null),E=$e.useRef(null),T=$e.useRef(null),_=$e.useRef(null),w=$e.useRef(null),U=$e.useRef(null),N=$e.useRef(null),I=$e.useRef(null),G=$e.useRef(null),{infoPanelOpen:W,setInfoPanelOpen:z,envDropDownOpen:L,setEnvDropDownOpen:P,headsetOpen:B,setHeadsetOpen:Y,inputMenuOpen:$,setInputMenuOpen:ae,gazePanelOpen:ge,setGazePanelOpen:Ie}=QC(),De=Vu($,E),ze=Vu(ge,T),J=Vu(B,_),de=Vu(L,w);ku($,U),ku(ge,N),ku(B,I),ku(L,G),$e.useEffect(()=>{if(!($||ge||B||L))return;const Qe=()=>{ae(!1),Ie(!1),Y(!1),P(!1)},we=oe=>{const mt=R.current;mt&&oe.composedPath().includes(mt)||Qe()},Ve=oe=>{if(oe.key!=="Escape")return;const mt=!!(R.current&&oe.composedPath().includes(R.current)),A=$?E.current:ge?T.current:B?_.current:w.current;Qe(),mt&&(A==null||A.focus())};return document.addEventListener("pointerdown",we,!0),document.addEventListener("keydown",Ve),()=>{document.removeEventListener("pointerdown",we,!0),document.removeEventListener("keydown",Ve)}},[L,ge,B,$,P,Ie,Y,ae]);const ne=m==="off"?v:v==="hand"&&m==="cursor"?"gaze-hands":null,Ne=m!=="off"&&y.sessionActive&&y.negotiated&&y.connected?"active":m!=="off"&&y.sessionActive&&y.negotiated&&!y.connected?"error":"idle",Fe=y.supported?m==="off"?"Off · the app receives no gaze input":y.sessionActive?y.negotiated?y.connected?"Streaming to the XR session":"Source disconnected · far rays are active":"Session didn't request gaze-tracking":"Ready · enter XR to publish gaze":"No eye tracking on this profile · choose a gaze-capable device",Gt=D=>{e.setGazeMode(D),h(e.currentGazeMode),pa({gazeMode:D})},et=D=>{e.setGazeCommitHand(D),x(D),pa({gazeCommitHand:D})},dt=(D,Qe)=>{const we=D==="controller"?"controller":"hand",Ve=D==="gaze-hands"?"cursor":"off";S(we),t.primaryInputMode=we,e.setGazeMode(Ve),h(e.currentGazeMode),pa({inputMode:we,gazeMode:Ve}),ae(!1),Qe&&window.requestAnimationFrame(()=>{var oe;return(oe=E.current)===null||oe===void 0?void 0:oe.focus()})},Tt=D=>{y.supported&&Gt(D)},tt=(D,Qe)=>{var we,Ve;if(!y.supported)return;const oe=D.key==="ArrowRight"?1:D.key==="ArrowLeft"?-1:0;if(oe===0)return;D.preventDefault();const mt=Jl.findIndex(H=>H.value===Qe),A=Jl[(mt+oe+Jl.length)%Jl.length];Tt(A.value);const M=(we=D.currentTarget.parentElement)===null||we===void 0?void 0:we.querySelectorAll('[role="radio"]');(Ve=M==null?void 0:M[A.value==="off"?0:A.value==="cursor"?1:2])===null||Ve===void 0||Ve.focus()},$t=(D,Qe)=>{var we,Ve;if(m==="off"||!y.supported)return;const oe=D.key==="ArrowRight"?1:D.key==="ArrowLeft"?-1:0;if(oe===0)return;D.preventDefault();const mt=ec.findIndex(H=>H.value===Qe),A=ec[(mt+oe+ec.length)%ec.length];et(A.value);const M=(we=D.currentTarget.parentElement)===null||we===void 0?void 0:we.querySelectorAll('[role="radio"]');(Ve=M==null?void 0:M[A.value==="left"?0:1])===null||Ve===void 0||Ve.focus()},Nt=D=>D?le.accent:le.textGrey,Nn=D=>C.jsx(On,{style:{fontSize:"12px",width:"100%",justifyContent:"start",borderRadius:"8px",padding:"6px 10px"},onClick:Qe=>{var we;const Ve=rC();Ve?Ve(D):D==="none"?t.sem.deleteAll():(we=t.sem.loadDefaultEnvironment(D))===null||we===void 0||we.catch(oe=>console.error(`Could not load environment ${D}`,oe)),pa({environment:D}),P(!1),Qe.detail===0&&window.requestAnimationFrame(()=>{var oe;return(oe=w.current)===null||oe===void 0?void 0:oe.focus()})},children:KC(D)},D);return C.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",gap:"6px",padding:"8px"},children:[C.jsxs("div",{ref:R,style:{position:"relative"},children:[C.jsxs(jm,{children:[C.jsx(On,{title:"Reset device transforms",onClick:()=>e.resetDeviceTransforms(),children:C.jsx(Re,{name:"rotate-ccw",size:16})}),C.jsx(On,{title:m==="cursor"?"Pointer lock is unavailable while cursor gaze is active":"Play mode (lock pointer)",disabled:m==="cursor",onClick:()=>{e.lockPointer(),P(!1),z(!1)},children:C.jsx(Re,{name:"circle-play",size:16})}),C.jsx(On,{ref:E,title:"Select input mode","aria-expanded":$,"aria-controls":$?"iwer-input-mode-menu":void 0,$open:$,onClick:()=>{ae(!$),Y(!1),Ie(!1),P(!1),z(!1)},children:C.jsx(Re,{name:v==="hand"&&m==="cursor"?"eye":v==="controller"?"gamepad-2":"hand",size:16})}),C.jsx(On,{ref:T,title:"Configure gaze emulation","aria-expanded":ge,"aria-controls":ge?"iwer-gaze-settings":void 0,$active:m!=="off",$open:ge,onClick:()=>{Ie(!ge),Y(!1),ae(!1),P(!1),z(!1)},children:C.jsx(Re,{name:"scan-eye",size:16,color:Ne==="error"?le.dangerRed:void 0})}),C.jsx(On,{ref:_,title:"Headset position","aria-expanded":B,"aria-controls":B?"iwer-headset-settings":void 0,$open:B,onClick:()=>{Y(!B),ae(!1),Ie(!1),P(!1),z(!1)},children:C.jsx(Re,{name:"glasses",size:16})}),C.jsx(On,{"aria-label":"Field-of-view mask","aria-pressed":u,disabled:!p,title:p?(u?"Disable":"Enable")+" field-of-view mask":"Field-of-view mask unavailable for this device profile",onClick:()=>{t.visibilityMaskEnabled=!t.visibilityMaskEnabled,d(t.visibilityMaskEnabled),pa({visibilityMaskEnabled:t.visibilityMaskEnabled})},children:C.jsx(Re,{name:"scan",size:16,color:p?u?le.accent:le.textGrey:le.textTertiary})}),t.sem&&C.jsxs(C.Fragment,{children:[C.jsx(Qi,{$horizontal:!1}),C.jsx(On,{ref:w,title:"Select emulated environment","aria-expanded":L,"aria-controls":L?"iwer-environment-menu":void 0,$open:L,onClick:()=>{P(!L),ae(!1),Ie(!1),Y(!1),z(!1)},children:C.jsx(Re,{name:"armchair",size:16})}),C.jsx(On,{title:"Toggle plane visibility",onClick:()=>{t.sem.planesVisible=!r,s(!r)},children:C.jsx(Re,{name:"layers",size:16,color:Nt(r)})}),C.jsx(On,{title:"Toggle bounding-box visibility",onClick:()=>{t.sem.boundingBoxesVisible=!o,l(!o)},children:C.jsx(Re,{name:"box",size:16,color:Nt(o)})}),C.jsx(On,{title:"Toggle mesh visibility",onClick:()=>{t.sem.meshesVisible=!c,f(!c)},children:C.jsx(Re,{name:"shapes",size:16,color:Nt(c)})})]}),C.jsx(Qi,{$horizontal:!1}),C.jsx(On,{title:"Save current device pose as the default for this site",onClick:()=>{const D=e.captureDefaultPose();e.applyDefaultPose(D),pa({defaultPose:D})},children:C.jsx(Re,{name:"save",size:16})}),C.jsx(Qi,{$horizontal:!1}),C.jsx(On,{title:"Exit XR session",onClick:()=>{var D;return(D=t.activeSession)===null||D===void 0?void 0:D.end()},children:C.jsx(Re,{name:"log-out",size:16})})]}),$&&C.jsxs(Hu,{ref:U,id:"iwer-input-mode-menu",role:"group","aria-label":"Input mode",$left:De,children:[C.jsxs(Jh,{children:[C.jsx(Re,{name:"gamepad-2",size:15}),C.jsx(vx,{children:"Input setup"})]}),C.jsxs(ep,{type:"button","aria-pressed":ne==="controller","data-autofocus":ne==="controller",$selected:ne==="controller",onClick:D=>dt("controller",D.detail===0),children:[C.jsx(Re,{name:"gamepad-2",size:15}),C.jsxs(tp,{children:[C.jsx(np,{children:"Controllers"}),C.jsx(hs,{children:"Ray + trigger"})]}),ne==="controller"?C.jsx(Re,{name:"circle-dot",size:14,color:le.accent}):C.jsx("span",{"aria-hidden":"true"})]}),C.jsxs(ep,{type:"button","aria-pressed":ne==="hand","data-autofocus":ne==="hand",$selected:ne==="hand",onClick:D=>dt("hand",D.detail===0),children:[C.jsx(Re,{name:"hand",size:15}),C.jsxs(tp,{children:[C.jsx(np,{children:"Hands"}),C.jsx(hs,{children:"Ray, poke + grab"})]}),ne==="hand"?C.jsx(Re,{name:"circle-dot",size:14,color:le.accent}):C.jsx("span",{"aria-hidden":"true"})]}),C.jsxs(ep,{type:"button","aria-pressed":ne==="gaze-hands","data-autofocus":ne==="gaze-hands","aria-disabled":!y.supported,"aria-describedby":y.supported?void 0:"iwer-gaze-preset-hint",$selected:ne==="gaze-hands",$unavailable:!y.supported,title:y.supported?"Use cursor gaze with hand pinch":"Select a gaze-capable device profile first",onClick:D=>{y.supported&&dt("gaze-hands",D.detail===0)},children:[C.jsx(Re,{name:"eye",size:15}),C.jsxs(tp,{children:[C.jsx(np,{children:"Gaze + Hands"}),C.jsx(hs,{children:"Look, then pinch"})]}),ne==="gaze-hands"?C.jsx(Re,{name:"circle-dot",size:14,color:le.accent}):C.jsx("span",{"aria-hidden":"true"})]}),!y.supported&&C.jsx(hs,{id:"iwer-gaze-preset-hint",style:{padding:"4px"},children:"Needs an eye-tracking profile, such as Meta Quest Pro."}),ne==null&&C.jsxs(hs,{style:{padding:"5px 4px 2px"},children:["Custom · ",v==="controller"?"Controllers":"Hands"," + ",m==="head-locked"?"head gaze":"cursor gaze"]})]}),ge&&C.jsxs(Hu,{ref:N,id:"iwer-gaze-settings",role:"group","aria-label":"Gaze emulation settings",$left:ze,children:[C.jsxs(Jh,{children:[C.jsx(Re,{name:"eye",size:15}),C.jsx(vx,{children:"Gaze emulation"}),C.jsx(qr,{title:"Close gaze settings",onClick:D=>{var Qe;Ie(!1),D.detail===0&&((Qe=T.current)===null||Qe===void 0||Qe.focus())},children:C.jsx(Re,{name:"circle-x",size:14})})]}),C.jsxs(kC,{"aria-live":"polite",children:[C.jsx(XC,{$tone:Ne}),C.jsx("span",{children:Fe})]}),C.jsx(ip,{id:"iwer-gaze-mode-label",children:"Gaze mode"}),C.jsx(_x,{role:"radiogroup","aria-label":"Gaze mode","aria-labelledby":"iwer-gaze-mode-label","aria-disabled":!y.supported,$unavailable:!y.supported,children:Jl.map(({value:D,label:Qe})=>C.jsx(xx,{type:"button",role:"radio","aria-checked":m===D,"aria-disabled":!y.supported,tabIndex:m===D?0:-1,"data-autofocus":m===D,$selected:m===D,$unavailable:!y.supported,onClick:()=>Tt(D),onKeyDown:we=>tt(we,D),children:Qe},D))}),C.jsx(ip,{id:"iwer-gaze-hand-label",children:"Commit hand"}),C.jsx(_x,{role:"radiogroup","aria-label":"Gaze commit hand","aria-labelledby":"iwer-gaze-hand-label","aria-disabled":m==="off"||!y.supported,$unavailable:m==="off"||!y.supported,children:ec.map(({value:D,label:Qe})=>C.jsx(xx,{type:"button",role:"radio","aria-checked":g===D,"aria-disabled":m==="off"||!y.supported,tabIndex:g===D?0:-1,$selected:g===D,$unavailable:m==="off"||!y.supported,onClick:()=>{m!=="off"&&y.supported&&et(D)},onKeyDown:we=>$t(we,D),children:Qe},D))}),C.jsxs(hs,{style:{padding:"3px 2px 1px"},children:[v==="hand"?"Pinch":"Trigger"," confirms the gaze target."]}),m==="cursor"&&y.sessionActive&&y.connected&&C.jsxs(C.Fragment,{children:[C.jsx(Qi,{}),C.jsx(ip,{children:"Cursor controls"}),C.jsxs(jC,{children:[C.jsxs(Gu,{children:[C.jsx(Re,{name:"mouse-left",size:14}),C.jsxs("span",{children:["Aim + commit · drag to move"," ",v==="hand"?"hand":"controller"]})]}),C.jsxs(Gu,{children:[C.jsx(Re,{name:"mouse-right",size:14}),C.jsx("span",{children:"Drag to look around"})]}),C.jsxs(Gu,{children:[C.jsx(Re,{name:"mouse",size:14}),C.jsx("span",{children:"While held, wheel to adjust depth"})]}),C.jsxs(Gu,{children:[C.jsx(qC,{children:"Space"}),C.jsx("span",{children:"Reset commit-hand pose"})]})]}),C.jsx(hs,{style:{padding:"3px 2px 1px"},children:"Play mode is unavailable while cursor gaze is on."})]})]}),B&&C.jsxs(Hu,{ref:I,id:"iwer-headset-settings",role:"group","aria-label":"Headset position",$left:J,children:[C.jsxs(Jh,{tabIndex:-1,"data-autofocus":"true",style:{fontSize:"13px",fontWeight:600},children:[C.jsx(Re,{name:"glasses",size:15}),t.name]}),C.jsx(Qi,{}),C.jsx(eu,{vector:e.combinedCameraPosition,label:"Pos"})]}),L&&C.jsxs(Hu,{ref:G,id:"iwer-environment-menu",role:"group","aria-label":"Emulated environment",$left:de,children:[ZC(t).map(({label:D,ids:Qe})=>{const we=Qe.map(Nn);if(!D)return C.jsx($e.Fragment,{children:we},"current");const Ve="iwer-environment-group-"+D.replace(/\W+/g,"-");return C.jsxs("div",{role:"group","aria-labelledby":Ve,children:[C.jsx($C,{id:Ve,children:D}),we]},D)}),Nn("none")]})]}),C.jsxs(jm,{children:[C.jsx(On,{title:"About IWER",onClick:()=>{z(!W),ae(!1),Ie(!1),Y(!1),P(!1)},children:C.jsx(Re,{name:"iwer",size:16})}),C.jsx(On,{title:"Report issues",onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/issues","_blank"),children:C.jsx(Re,{name:"bug",size:16})})]}),W&&C.jsxs(hh,{style:{top:"50vh",left:"50vw",transform:"translate(-50%, -50%)",maxWidth:"240px",gap:"4px",padding:"16px"},children:[C.jsx("div",{style:{display:"flex",justifyContent:"end"},children:C.jsx(qr,{$isRed:!0,onClick:()=>z(!1),children:C.jsx(Re,{name:"circle-x",size:14})})}),C.jsx("div",{style:{display:"flex",justifyContent:"center"},children:C.jsx(Re,{name:"iwer",size:72})}),C.jsxs("p",{style:{textAlign:"center",padding:"0 5px",margin:"0"},children:[C.jsx("b",{children:"Immersive Web Emulation Runtime"})," (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc."]}),C.jsx("table",{style:{width:"100%",borderCollapse:"collapse",display:"flex",justifyContent:"center",fontSize:"12px",padding:"8px"},children:C.jsxs("tbody",{children:[C.jsxs("tr",{children:[C.jsx(Qh,{children:"IWER"}),C.jsxs(Kh,{children:["v",t.version]})]}),C.jsxs("tr",{children:[C.jsx(Qh,{children:"DevUI"}),C.jsxs(Kh,{children:["v",t.devui.version]})]}),t.sem&&C.jsxs("tr",{children:[C.jsx(Qh,{children:"SEM"}),C.jsxs(Kh,{children:["v",t.sem.version]})]})]})}),C.jsx(ax,{style:{borderRadius:xn.radiusSolo},onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE","_blank"),children:"MIT License"}),C.jsx(ax,{style:{borderRadius:xn.radiusSolo},onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime","_blank"),children:"View Source on GitHub"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fv="184",eR=0,Sx=1,tR=2,Xf=1,nR=2,Tc=3,ir=0,ni=1,$a=2,Ja=0,sl=1,Mx=2,bx=3,Ex=4,iR=5,Ns=100,aR=101,rR=102,sR=103,oR=104,lR=200,cR=201,uR=202,fR=203,$m=204,Qm=205,dR=206,hR=207,pR=208,mR=209,gR=210,vR=211,_R=212,xR=213,yR=214,Km=0,Jm=1,e0=2,bl=3,t0=4,n0=5,i0=6,a0=7,db=0,SR=1,MR=2,wa=0,hb=1,pb=2,mb=3,gb=4,vb=5,_b=6,xb=7,yb=300,js=301,El=302,ap=303,rp=304,mh=306,r0=1e3,Qa=1001,s0=1002,Tn=1003,bR=1004,Xu=1005,zn=1006,sp=1007,Ls=1008,Pi=1009,Sb=1010,Mb=1011,tu=1012,dv=1013,Ua=1014,ya=1015,ar=1016,hv=1017,pv=1018,nu=1020,bb=35902,Eb=35899,Tb=1021,Ab=1022,ea=1023,rr=1026,Ps=1027,wb=1028,mv=1029,qs=1030,gv=1031,vv=1033,jf=33776,qf=33777,Wf=33778,Yf=33779,o0=35840,l0=35841,c0=35842,u0=35843,f0=36196,d0=37492,h0=37496,p0=37488,m0=37489,Sd=37490,g0=37491,v0=37808,_0=37809,x0=37810,y0=37811,S0=37812,M0=37813,b0=37814,E0=37815,T0=37816,A0=37817,w0=37818,C0=37819,R0=37820,D0=37821,N0=36492,U0=36494,L0=36495,P0=36283,O0=36284,Md=36285,z0=36286,ER=3200,Tx=0,TR=1,zr="",Di="srgb",bd="srgb-linear",Ed="linear",yt="srgb",po=7680,Ax=519,AR=512,wR=513,CR=514,_v=515,RR=516,DR=517,xv=518,NR=519,wx=35044,Cx="300 es",Sa=2e3,Td=2001;function UR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ad(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LR(){const t=Ad("canvas");return t.style.display="block",t}const Rx={};function Dx(...t){const e="THREE."+t.shift();console.log(e,...t)}function Cb(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=Cb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=Cb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function I0(...t){const e=t.join(" ");e in Rx||(Rx[e]=!0,Ge(...t))}function PR(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const OR={[Km]:Jm,[e0]:i0,[t0]:a0,[bl]:n0,[Jm]:Km,[i0]:e0,[a0]:t0,[n0]:bl};class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],op=Math.PI/180,F0=180/Math.PI;function yu(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[t&255]+Ln[t>>8&255]+Ln[t>>16&255]+Ln[t>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function ct(t,e,n){return Math.max(e,Math.min(n,t))}function zR(t,e){return(t%e+e)%e}function lp(t,e,n){return(1-n)*t+n*e}function tc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const C_=class C_{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};C_.prototype.isVector2=!0;let bt=C_;class Ki{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],f=i[a+2],p=i[a+3],u=r[s+0],d=r[s+1],v=r[s+2],S=r[s+3];if(p!==S||l!==u||c!==d||f!==v){let m=l*u+c*d+f*v+p*S;m<0&&(u=-u,d=-d,v=-v,S=-S,m=-m);let h=1-o;if(m<.9995){const g=Math.acos(m),x=Math.sin(g);h=Math.sin(h*g)/x,o=Math.sin(o*g)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+S*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+S*o;const g=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=g,c*=g,f*=g,p*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],p=r[s],u=r[s+1],d=r[s+2],v=r[s+3];return e[n]=o*v+f*p+l*d-c*u,e[n+1]=l*v+f*u+c*p-o*d,e[n+2]=c*v+f*d+o*u-l*p,e[n+3]=f*v-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),p=o(r/2),u=l(i/2),d=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(s-a)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(a+s)/d,this._z=(r+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(r-c)/d,this._x=(a+s)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(s-a)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+s*o+a*c-r*l,this._y=a*f+s*l+r*o-i*c,this._z=r*f+s*c+i*l-a*o,this._w=s*f-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const R_=class R_{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),f=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*c+s*p-o*f,this.y=i+l*f+o*c-r*p,this.z=a+l*p+r*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cp.copy(this).projectOnVector(e),this.sub(cp)}reflect(e){return this.sub(cp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};R_.prototype.isVector3=!0;let j=R_;const cp=new j,Nx=new Ki,D_=class D_{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const f=this.elements;return f[0]=e,f[1]=a,f[2]=o,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],S=a[0],m=a[3],h=a[6],g=a[1],x=a[4],y=a[7],R=a[2],E=a[5],T=a[8];return r[0]=s*S+o*g+l*R,r[3]=s*m+o*x+l*E,r[6]=s*h+o*y+l*T,r[1]=c*S+f*g+p*R,r[4]=c*m+f*x+p*E,r[7]=c*h+f*y+p*T,r[2]=u*S+d*g+v*R,r[5]=u*m+d*x+v*E,r[8]=u*h+d*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*s*f-n*o*c-i*r*f+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*s-o*c,u=o*l-f*r,d=c*r-s*l,v=n*p+i*u+a*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=p*S,e[1]=(a*c-f*i)*S,e[2]=(o*i-a*s)*S,e[3]=u*S,e[4]=(f*n-a*l)*S,e[5]=(a*r-o*n)*S,e[6]=d*S,e[7]=(i*l-c*n)*S,e[8]=(s*n-i*r)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(up.makeScale(e,n)),this}rotate(e){return this.premultiply(up.makeRotation(-e)),this}translate(e,n){return this.premultiply(up.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};D_.prototype.isMatrix3=!0;let je=D_;const up=new je,Ux=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lx=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IR(){const t={enabled:!0,workingColorSpace:bd,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===yt&&(a.r=er(a.r),a.g=er(a.g),a.b=er(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===yt&&(a.r=ol(a.r),a.g=ol(a.g),a.b=ol(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===zr?Ed:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return I0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return I0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bd]:{primaries:e,whitePoint:i,transfer:Ed,toXYZ:Ux,fromXYZ:Lx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Ux,fromXYZ:Lx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),t}const lt=IR();function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ol(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let mo;class FR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mo===void 0&&(mo=Ad("canvas")),mo.width=e.width,mo.height=e.height;const a=mo.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=mo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ad("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=er(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BR=0;class yv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=yu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(fp(a[s].image)):r.push(fp(a[s]))}else r=fp(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function fp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let HR=0;const dp=new j;class qn extends no{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,i=Qa,a=Qa,r=zn,s=Ls,o=ea,l=Pi,c=qn.DEFAULT_ANISOTROPY,f=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=yu(),this.name="",this.source=new yv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dp).x}get height(){return this.source.getSize(dp).y}get depth(){return this.source.getSize(dp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r0:e.x=e.x-Math.floor(e.x);break;case Qa:e.x=e.x<0?0:1;break;case s0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case r0:e.y=e.y-Math.floor(e.y);break;case Qa:e.y=e.y<0?0:1;break;case s0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=yb;qn.DEFAULT_ANISOTROPY=1;const N_=class N_{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(d+1)/2,R=(h+1)/2,E=(f+u)/4,T=(p+S)/4,_=(v+m)/4;return x>y&&x>R?x<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(x),a=E/i,r=T/i):y>R?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=E/a,r=_/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=T/r,a=_/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-v)*(m-v)+(p-S)*(p-S)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(p-S)/g,this.z=(u-f)/g,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this.w=ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this.w=ct(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};N_.prototype.isVector4=!0;let en=N_;class GR extends no{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new en(0,0,e,n),this.scissorTest=!1,this.viewport=new en(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},r=new qn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new yv(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ca extends GR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rb extends qn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Qa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VR extends qn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Qa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=class ih{constructor(e,n,i,a,r,s,o,l,c,f,p,u,d,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,f,p,u,d,v,S,m)}set(e,n,i,a,r,s,o,l,c,f,p,u,d,v,S,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ih().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,a=1/go.setFromMatrixColumn(e,0).length(),r=1/go.setFromMatrixColumn(e,1).length(),s=1/go.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=s*f,d=s*p,v=o*f,S=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=v+d*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*f,d=l*p,v=c*f,S=c*p;n[0]=u+S*o,n[4]=v*o-d,n[8]=s*c,n[1]=s*p,n[5]=s*f,n[9]=-o,n[2]=d*o-v,n[6]=S+u*o,n[10]=s*l}else if(e.order==="ZXY"){const u=l*f,d=l*p,v=c*f,S=c*p;n[0]=u-S*o,n[4]=-s*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=s*f,n[9]=S-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const u=s*f,d=s*p,v=o*f,S=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+S,n[1]=l*p,n[5]=S*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,d=s*c,v=o*l,S=o*c;n[0]=l*f,n[4]=S-u*p,n[8]=v*p+d,n[1]=p,n[5]=s*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-S*p}else if(e.order==="XZY"){const u=s*l,d=s*c,v=o*l,S=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+S,n[5]=s*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=S*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kR,e,XR)}lookAt(e,n,i){const a=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),yr.crossVectors(i,li),yr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),yr.crossVectors(i,li)),yr.normalize(),ju.crossVectors(li,yr),a[0]=yr.x,a[4]=ju.x,a[8]=li.x,a[1]=yr.y,a[5]=ju.y,a[9]=li.y,a[2]=yr.z,a[6]=ju.z,a[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],S=i[6],m=i[10],h=i[14],g=i[3],x=i[7],y=i[11],R=i[15],E=a[0],T=a[4],_=a[8],w=a[12],U=a[1],N=a[5],I=a[9],G=a[13],W=a[2],z=a[6],L=a[10],P=a[14],B=a[3],Y=a[7],$=a[11],ae=a[15];return r[0]=s*E+o*U+l*W+c*B,r[4]=s*T+o*N+l*z+c*Y,r[8]=s*_+o*I+l*L+c*$,r[12]=s*w+o*G+l*P+c*ae,r[1]=f*E+p*U+u*W+d*B,r[5]=f*T+p*N+u*z+d*Y,r[9]=f*_+p*I+u*L+d*$,r[13]=f*w+p*G+u*P+d*ae,r[2]=v*E+S*U+m*W+h*B,r[6]=v*T+S*N+m*z+h*Y,r[10]=v*_+S*I+m*L+h*$,r[14]=v*w+S*G+m*P+h*ae,r[3]=g*E+x*U+y*W+R*B,r[7]=g*T+x*N+y*z+R*Y,r[11]=g*_+x*I+y*L+R*$,r[15]=g*w+x*G+y*P+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],u=e[10],d=e[14],v=e[3],S=e[7],m=e[11],h=e[15],g=l*d-c*u,x=o*d-c*p,y=o*u-l*p,R=s*d-c*f,E=s*u-l*f,T=s*p-o*f;return n*(S*g-m*x+h*y)-i*(v*g-m*R+h*E)+a*(v*x-S*R+h*T)-r*(v*y-S*E+m*T)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],u=e[10],d=e[11],v=e[12],S=e[13],m=e[14],h=e[15],g=n*o-i*s,x=n*l-a*s,y=n*c-r*s,R=i*l-a*o,E=i*c-r*o,T=a*c-r*l,_=f*S-p*v,w=f*m-u*v,U=f*h-d*v,N=p*m-u*S,I=p*h-d*S,G=u*h-d*m,W=g*G-x*I+y*N+R*U-E*w+T*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/W;return e[0]=(o*G-l*I+c*N)*z,e[1]=(a*I-i*G-r*N)*z,e[2]=(S*T-m*E+h*R)*z,e[3]=(u*E-p*T-d*R)*z,e[4]=(l*U-s*G-c*w)*z,e[5]=(n*G-a*U+r*w)*z,e[6]=(m*y-v*T-h*x)*z,e[7]=(f*T-u*y+d*x)*z,e[8]=(s*I-o*U+c*_)*z,e[9]=(i*U-n*I-r*_)*z,e[10]=(v*E-S*y+h*g)*z,e[11]=(p*y-f*E-d*g)*z,e[12]=(o*w-s*N-l*_)*z,e[13]=(n*N-i*w+a*_)*z,e[14]=(S*x-v*R-m*g)*z,e[15]=(f*R-p*x+u*g)*z,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,f=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*s,0,c*l-a*o,f*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,f=s+s,p=o+o,u=r*c,d=r*f,v=r*p,S=s*f,m=s*p,h=o*p,g=l*c,x=l*f,y=l*p,R=i.x,E=i.y,T=i.z;return a[0]=(1-(S+h))*R,a[1]=(d+y)*R,a[2]=(v-x)*R,a[3]=0,a[4]=(d-y)*E,a[5]=(1-(u+h))*E,a[6]=(m+g)*E,a[7]=0,a[8]=(v+x)*T,a[9]=(m-g)*T,a[10]=(1-(u+S))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let s=go.set(a[0],a[1],a[2]).length();const o=go.set(a[4],a[5],a[6]).length(),l=go.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Vi.copy(this);const c=1/s,f=1/o,p=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=f,Vi.elements[5]*=f,Vi.elements[6]*=f,Vi.elements[8]*=p,Vi.elements[9]*=p,Vi.elements[10]*=p,n.setFromRotationMatrix(Vi),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Sa,l=!1){const c=this.elements,f=2*r/(n-e),p=2*r/(i-a),u=(n+e)/(n-e),d=(i+a)/(i-a);let v,S;if(l)v=r/(s-r),S=s*r/(s-r);else if(o===Sa)v=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===Td)v=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Sa,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),d=-(i+a)/(i-a);let v,S;if(l)v=1/(s-r),S=s/(s-r);else if(o===Sa)v=-2/(s-r),S=-(s+r)/(s-r);else if(o===Td)v=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ih.prototype.isMatrix4=!0;let hn=ih;const go=new j,Vi=new hn,kR=new j(0,0,0),XR=new j(1,1,1),yr=new j,ju=new j,li=new j,Px=new hn,Ox=new Ki;class is{constructor(e=0,n=0,i=0,a=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],f=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Px,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ox.setFromEuler(this),this.setFromQuaternion(Ox,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class Db{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jR=0;const zx=new j,vo=new Ki,Ha=new hn,qu=new j,nc=new j,qR=new j,WR=new Ki,Ix=new j(1,0,0),Fx=new j(0,1,0),Bx=new j(0,0,1),Hx={type:"added"},YR={type:"removed"},_o={type:"childadded",child:null},hp={type:"childremoved",child:null};class gi extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=yu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new j,n=new is,i=new Ki,a=new j(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new hn},normalMatrix:{value:new je}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Db,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(Ix,e)}rotateY(e){return this.rotateOnAxis(Fx,e)}rotateZ(e){return this.rotateOnAxis(Bx,e)}translateOnAxis(e,n){return zx.copy(e).applyQuaternion(this.quaternion),this.position.add(zx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ix,e)}translateY(e){return this.translateOnAxis(Fx,e)}translateZ(e){return this.translateOnAxis(Bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ha.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qu.copy(e):qu.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),nc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ha.lookAt(nc,qu,this.up):Ha.lookAt(qu,nc,this.up),this.quaternion.setFromRotationMatrix(Ha),a&&(Ha.extractRotation(a.matrixWorld),vo.setFromRotationMatrix(Ha),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hx),_o.child=e,this.dispatchEvent(_o),_o.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YR),hp.child=e,this.dispatchEvent(hp),hp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hx),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,e,qR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,WR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),p=s(e.shapes),u=s(e.skeletons),d=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}gi.DEFAULT_UP=new j(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qo extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZR={type:"move"};class pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZR)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Nb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Wu={h:0,s:0,l:0};function mp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=lt.workingColorSpace){if(e=zR(e,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=mp(s,r,e+1/3),this.g=mp(s,r,e),this.b=mp(s,r,e-1/3)}return lt.colorSpaceToWorking(this,a),this}setStyle(e,n=Di){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Di){const i=Nb[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ol(e.r),this.g=ol(e.g),this.b=ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return lt.workingToColorSpace(Pn.copy(this),e),Math.round(ct(Pn.r*255,0,255))*65536+Math.round(ct(Pn.g*255,0,255))*256+Math.round(ct(Pn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(Pn.copy(this),n);const i=Pn.r,a=Pn.g,r=Pn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const f=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=f<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Di){lt.workingToColorSpace(Pn.copy(this),e);const n=Pn.r,i=Pn.g,a=Pn.b;return e!==Di?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(Wu);const i=lp(Sr.h,Wu.h,n),a=lp(Sr.s,Wu.s,n),r=lp(Sr.l,Wu.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Rt;Rt.NAMES=Nb;class $R extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ki=new j,Ga=new j,gp=new j,Va=new j,xo=new j,yo=new j,Gx=new j,vp=new j,_p=new j,xp=new j,yp=new en,Sp=new en,Mp=new en;class Ji{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ki.subVectors(e,n),a.cross(ki);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){ki.subVectors(a,n),Ga.subVectors(i,n),gp.subVectors(e,n);const s=ki.dot(ki),o=ki.dot(Ga),l=ki.dot(gp),c=Ga.dot(Ga),f=Ga.dot(gp),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,d=(c*l-o*f)*u,v=(s*f-o*l)*u;return r.set(1-d-v,v,d)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Va)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Va.x),l.addScaledVector(s,Va.y),l.addScaledVector(o,Va.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return yp.setScalar(0),Sp.setScalar(0),Mp.setScalar(0),yp.fromBufferAttribute(e,n),Sp.fromBufferAttribute(e,i),Mp.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(yp,r.x),s.addScaledVector(Sp,r.y),s.addScaledVector(Mp,r.z),s}static isFrontFacing(e,n,i,a){return ki.subVectors(i,n),Ga.subVectors(e,n),ki.cross(Ga).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Ga.subVectors(this.a,this.b),ki.cross(Ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ji.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return Ji.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;xo.subVectors(a,i),yo.subVectors(r,i),vp.subVectors(e,i);const l=xo.dot(vp),c=yo.dot(vp);if(l<=0&&c<=0)return n.copy(i);_p.subVectors(e,a);const f=xo.dot(_p),p=yo.dot(_p);if(f>=0&&p<=f)return n.copy(a);const u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(xo,s);xp.subVectors(e,r);const d=xo.dot(xp),v=yo.dot(xp);if(v>=0&&d<=v)return n.copy(r);const S=d*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(yo,o);const m=f*v-d*p;if(m<=0&&p-f>=0&&d-v>=0)return Gx.subVectors(r,a),o=(p-f)/(p-f+(d-v)),n.copy(a).addScaledVector(Gx,o);const h=1/(m+S+u);return s=S*h,o=u*h,n.copy(i).addScaledVector(xo,s).addScaledVector(yo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Su{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Xi):Xi.fromBufferAttribute(r,s),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yu.copy(i.boundingBox)),Yu.applyMatrix4(e.matrixWorld),this.union(Yu)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ic),Zu.subVectors(this.max,ic),So.subVectors(e.a,ic),Mo.subVectors(e.b,ic),bo.subVectors(e.c,ic),Mr.subVectors(Mo,So),br.subVectors(bo,Mo),ps.subVectors(So,bo);let n=[0,-Mr.z,Mr.y,0,-br.z,br.y,0,-ps.z,ps.y,Mr.z,0,-Mr.x,br.z,0,-br.x,ps.z,0,-ps.x,-Mr.y,Mr.x,0,-br.y,br.x,0,-ps.y,ps.x,0];return!bp(n,So,Mo,bo,Zu)||(n=[1,0,0,0,1,0,0,0,1],!bp(n,So,Mo,bo,Zu))?!1:($u.crossVectors(Mr,br),n=[$u.x,$u.y,$u.z],bp(n,So,Mo,bo,Zu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ka=[new j,new j,new j,new j,new j,new j,new j,new j],Xi=new j,Yu=new Su,So=new j,Mo=new j,bo=new j,Mr=new j,br=new j,ps=new j,ic=new j,Zu=new j,$u=new j,ms=new j;function bp(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){ms.fromArray(t,r);const o=a.x*Math.abs(ms.x)+a.y*Math.abs(ms.y)+a.z*Math.abs(ms.z),l=e.dot(ms),c=n.dot(ms),f=i.dot(ms);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const an=new j,Qu=new bt;let QR=0;class Ra extends no{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wx,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qu.fromBufferAttribute(this,n),Qu.applyMatrix3(e),this.setXY(n,Qu.x,Qu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=tc(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=tc(n,this.array)),n}setX(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=tc(n,this.array)),n}setY(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=tc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=tc(n,this.array)),n}setW(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),i=$n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),i=$n(i,this.array),a=$n(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),i=$n(i,this.array),a=$n(a,this.array),r=$n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ub extends Ra{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lb extends Ra{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fi extends Ra{constructor(e,n,i){super(new Float32Array(e),n,i)}}const KR=new Su,ac=new j,Ep=new j;class Sv{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KR.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ac.subVectors(e,this.center);const n=ac.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(ac,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ep.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ac.copy(e.center).add(Ep)),this.expandByPoint(ac.copy(e.center).sub(Ep))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JR=0;const Ti=new hn,Tp=new gi,Eo=new j,ci=new Su,rc=new Su,vn=new j;class za extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=yu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UR(e)?Lb:Ub)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,i){return Ti.makeTranslation(e,n,i),this.applyMatrix4(Ti),this}scale(e,n,i){return Ti.makeScale(e,n,i),this.applyMatrix4(Ti),this}lookAt(e){return Tp.lookAt(e),Tp.updateMatrix(),this.applyMatrix4(Tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fi(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sv);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];rc.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(ci.min,rc.min),ci.expandByPoint(vn),vn.addVectors(ci.max,rc.max),ci.expandByPoint(vn)):(ci.expandByPoint(rc.min),ci.expandByPoint(rc.max))}ci.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)vn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(vn));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)vn.fromBufferAttribute(o,c),l&&(Eo.fromBufferAttribute(e,c),vn.add(Eo)),a=Math.max(a,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ra(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new j,l[_]=new j;const c=new j,f=new j,p=new j,u=new bt,d=new bt,v=new bt,S=new j,m=new j;function h(_,w,U){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,U),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,w),v.fromBufferAttribute(r,U),f.sub(c),p.sub(c),d.sub(u),v.sub(u);const N=1/(d.x*v.y-v.x*d.y);isFinite(N)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(N),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(N),o[_].add(S),o[w].add(S),o[U].add(S),l[_].add(m),l[w].add(m),l[U].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,w=g.length;_<w;++_){const U=g[_],N=U.start,I=U.count;for(let G=N,W=N+I;G<W;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new j,y=new j,R=new j,E=new j;function T(_){R.fromBufferAttribute(a,_),E.copy(R);const w=o[_];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(E,w);const N=y.dot(l[_])<0?-1:1;s.setXYZW(_,x.x,x.y,x.z,N)}for(let _=0,w=g.length;_<w;++_){const U=g[_],N=U.start,I=U.count;for(let G=N,W=N+I;G<W;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ra(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const a=new j,r=new j,s=new j,o=new j,l=new j,c=new j,f=new j,p=new j;if(e)for(let u=0,d=e.count;u<d;u+=3){const v=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,m),f.subVectors(s,r),p.subVectors(a,r),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),f.subVectors(s,r),p.subVectors(a,r),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)vn.fromBufferAttribute(e,n),vn.normalize(),e.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f);let d=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new Ra(u,f,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new za,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,p=c.length;f<p;f++){const u=c[f],d=e(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];f.push(d.toJSON(e.data))}f.length>0&&(a[l]=f,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(n))}const r=e.morphAttributes;for(const c in r){const f=[],p=r[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eD=0;class gh extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eD++}),this.uuid=yu(),this.name="",this.type="Material",this.blending=sl,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$m,this.blendDst=Qm,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sl&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$m&&(i.blendSrc=this.blendSrc),this.blendDst!==Qm&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xa=new j,Ap=new j,Ku=new j,Er=new j,wp=new j,Ju=new j,Cp=new j;class tD{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xa.copy(this.origin).addScaledVector(this.direction,n),Xa.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Ap.copy(e).add(n).multiplyScalar(.5),Ku.copy(n).sub(e).normalize(),Er.copy(this.origin).sub(Ap);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Ku),o=Er.dot(this.direction),l=-Er.dot(Ku),c=Er.lengthSq(),f=Math.abs(1-s*s);let p,u,d,v;if(f>0)if(p=s*l-o,u=s*o-l,v=r*f,p>=0)if(u>=-v)if(u<=v){const S=1/f;p*=S,u*=S,d=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Ap).addScaledVector(Ku,u),d}intersectSphere(e,n){Xa.subVectors(e.center,this.origin);const i=Xa.dot(this.direction),a=Xa.dot(Xa)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,s=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,s=(e.min.y-u.y)*f),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Xa)!==null}intersectTriangle(e,n,i,a,r){wp.subVectors(n,e),Ju.subVectors(i,e),Cp.crossVectors(wp,Ju);let s=this.direction.dot(Cp),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Er.subVectors(this.origin,e);const l=o*this.direction.dot(Ju.crossVectors(Er,Ju));if(l<0)return null;const c=o*this.direction.dot(wp.cross(Er));if(c<0||l+c>s)return null;const f=-o*Er.dot(Cp);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mv extends gh{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=db,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vx=new hn,gs=new tD,ef=new Sv,kx=new j,tf=new j,nf=new j,af=new j,Rp=new j,rf=new j,Xx=new j,sf=new j;class La extends gi{constructor(e=new za,n=new Mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){rf.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],p=r[l];f!==0&&(Rp.fromBufferAttribute(p,e),s?rf.addScaledVector(Rp,f):rf.addScaledVector(Rp.sub(n),f))}n.add(rf)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(ef.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ef,kx)===null||gs.origin.distanceToSquared(kx)>(e.far-e.near)**2))&&(Vx.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Vx),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gs)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,S=u.length;v<S;v++){const m=u[v],h=s[m.materialIndex],g=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,R=x;y<R;y+=3){const E=o.getX(y),T=o.getX(y+1),_=o.getX(y+2);a=of(this,h,e,i,c,f,p,E,T,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=v,h=S;m<h;m+=3){const g=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);a=of(this,s,e,i,c,f,p,g,x,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,S=u.length;v<S;v++){const m=u[v],h=s[m.materialIndex],g=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,R=x;y<R;y+=3){const E=y,T=y+1,_=y+2;a=of(this,h,e,i,c,f,p,E,T,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=v,h=S;m<h;m+=3){const g=m,x=m+1,y=m+2;a=of(this,s,e,i,c,f,p,g,x,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function nD(t,e,n,i,a,r,s,o){let l;if(e.side===ni?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===ir,o),l===null)return null;sf.copy(o),sf.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sf);return c<n.near||c>n.far?null:{distance:c,point:sf.clone(),object:t}}function of(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,tf),t.getVertexPosition(l,nf),t.getVertexPosition(c,af);const f=nD(t,e,n,i,tf,nf,af,Xx);if(f){const p=new j;Ji.getBarycoord(Xx,tf,nf,af,p),a&&(f.uv=Ji.getInterpolatedAttribute(a,o,l,c,p,new bt)),r&&(f.uv1=Ji.getInterpolatedAttribute(r,o,l,c,p,new bt)),s&&(f.normal=Ji.getInterpolatedAttribute(s,o,l,c,p,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};Ji.getNormal(tf,nf,af,u.normal),f.face=u,f.barycoord=p}return f}class iD extends qn{constructor(e=null,n=1,i=1,a,r,s,o,l,c=Tn,f=Tn,p,u){super(null,s,o,l,c,f,a,r,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dp=new j,aD=new j,rD=new je;class Ts{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Dp.subVectors(i,n).cross(aD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Dp),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rD.getNormalMatrix(e),a=this.coplanarPoint(Dp).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Sv,sD=new bt(.5,.5),lf=new j;class Pb{constructor(e=new Ts,n=new Ts,i=new Ts,a=new Ts,r=new Ts,s=new Ts){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Sa,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],f=r[4],p=r[5],u=r[6],d=r[7],v=r[8],S=r[9],m=r[10],h=r[11],g=r[12],x=r[13],y=r[14],R=r[15];if(a[0].setComponents(c-s,d-f,h-v,R-g).normalize(),a[1].setComponents(c+s,d+f,h+v,R+g).normalize(),a[2].setComponents(c+o,d+p,h+S,R+x).normalize(),a[3].setComponents(c-o,d-p,h-S,R-x).normalize(),i)a[4].setComponents(l,u,m,y).normalize(),a[5].setComponents(c-l,d-u,h-m,R-y).normalize();else if(a[4].setComponents(c-l,d-u,h-m,R-y).normalize(),n===Sa)a[5].setComponents(c+l,d+u,h+m,R+y).normalize();else if(n===Td)a[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const n=sD.distanceTo(e.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(lf.x=a.normal.x>0?e.max.x:e.min.x,lf.y=a.normal.y>0?e.max.y:e.min.y,lf.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(lf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ob extends qn{constructor(e=[],n=js,i,a,r,s,o,l,c,f){super(e,n,i,a,r,s,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tl extends qn{constructor(e,n,i=Ua,a,r,s,o=Tn,l=Tn,c,f=rr,p=1){if(f!==rr&&f!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,r,s,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oD extends Tl{constructor(e,n=Ua,i=js,a,r,s=Tn,o=Tn,l,c=rr){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zb extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mu extends za{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],f=[],p=[];let u=0,d=0;v("z","y","x",-1,-1,i,n,e,s,r,0),v("z","y","x",1,-1,i,n,-e,s,r,1),v("x","z","y",1,1,e,i,n,a,s,2),v("x","z","y",1,-1,e,i,-n,a,s,3),v("x","y","z",1,-1,e,n,i,a,r,4),v("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(f,3)),this.setAttribute("uv",new Fi(p,2));function v(S,m,h,g,x,y,R,E,T,_,w){const U=y/T,N=R/_,I=y/2,G=R/2,W=E/2,z=T+1,L=_+1;let P=0,B=0;const Y=new j;for(let $=0;$<L;$++){const ae=$*N-G;for(let ge=0;ge<z;ge++){const Ie=ge*U-I;Y[S]=Ie*g,Y[m]=ae*x,Y[h]=W,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[h]=E>0?1:-1,f.push(Y.x,Y.y,Y.z),p.push(ge/T),p.push(1-$/_),P+=1}}for(let $=0;$<_;$++)for(let ae=0;ae<T;ae++){const ge=u+ae+z*$,Ie=u+ae+z*($+1),De=u+(ae+1)+z*($+1),ze=u+(ae+1)+z*$;l.push(ge,Ie,ze),l.push(Ie,De,ze),B+=6}o.addGroup(d,B,w),d+=B,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vh extends za{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,p=e/o,u=n/l,d=[],v=[],S=[],m=[];for(let h=0;h<f;h++){const g=h*u-s;for(let x=0;x<c;x++){const y=x*p-r;v.push(y,-g,0),S.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const x=g+c*h,y=g+c*(h+1),R=g+1+c*(h+1),E=g+1+c*h;d.push(x,y,E),d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new Fi(v,3)),this.setAttribute("normal",new Fi(S,3)),this.setAttribute("uv",new Fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.width,e.height,e.widthSegments,e.heightSegments)}}class bv extends za{constructor(e=.5,n=1,i=32,a=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:a,thetaStart:r,thetaLength:s},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],f=[];let p=e;const u=(n-e)/a,d=new j,v=new bt;for(let S=0;S<=a;S++){for(let m=0;m<=i;m++){const h=r+m/i*s;d.x=p*Math.cos(h),d.y=p*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/n+1)/2,v.y=(d.y/n+1)/2,f.push(v.x,v.y)}p+=u}for(let S=0;S<a;S++){const m=S*(i+1);for(let h=0;h<i;h++){const g=h+m,x=g,y=g+i+1,R=g+i+2,E=g+1;o.push(x,y,E),o.push(y,R,E)}}this.setIndex(o),this.setAttribute("position",new Fi(l,3)),this.setAttribute("normal",new Fi(c,3)),this.setAttribute("uv",new Fi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bv(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Al(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(jx(a))a.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(jx(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Vn(t){const e={};for(let n=0;n<t.length;n++){const i=Al(t[n]);for(const a in i)e[a]=i[a]}return e}function jx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function lD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ib(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const cD={clone:Al,merge:Vn};var uD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends gh{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uD,this.fragmentShader=fD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Al(e.uniforms),this.uniformsGroups=lD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dD extends Pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hD extends gh{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ER,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pD extends gh{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cf=new j,uf=new Ki,la=new j;class Fb extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cf,uf,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cf,uf,la.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(cf,uf,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cf,uf,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new j,qx=new bt,Wx=new bt;class Ni extends Fb{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=F0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(op*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return F0*2*Math.atan(Math.tan(op*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,qx,Wx),n.subVectors(Wx,qx)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(op*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Bb extends Fb{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const To=-90,Ao=1;class mD extends gi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ni(To,Ao,e,n);a.layers=this.layers,this.add(a);const r=new Ni(To,Ao,e,n);r.layers=this.layers,this.add(r);const s=new Ni(To,Ao,e,n);s.layers=this.layers,this.add(s);const o=new Ni(To,Ao,e,n);o.layers=this.layers,this.add(o);const l=new Ni(To,Ao,e,n);l.layers=this.layers,this.add(l);const c=new Ni(To,Ao,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Sa)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Td)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,u,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class gD extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const U_=class U_{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};U_.prototype.isMatrix2=!0;let Yx=U_;function Zx(t,e,n,i){const a=vD(i);switch(n){case Tb:return t*e;case wb:return t*e/a.components*a.byteLength;case mv:return t*e/a.components*a.byteLength;case qs:return t*e*2/a.components*a.byteLength;case gv:return t*e*2/a.components*a.byteLength;case Ab:return t*e*3/a.components*a.byteLength;case ea:return t*e*4/a.components*a.byteLength;case vv:return t*e*4/a.components*a.byteLength;case jf:case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wf:case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case l0:case u0:return Math.max(t,16)*Math.max(e,8)/4;case o0:case c0:return Math.max(t,8)*Math.max(e,8)/2;case f0:case d0:case p0:case m0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case h0:case Sd:case g0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case v0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _0:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case x0:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case y0:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case S0:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case M0:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case b0:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case E0:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case T0:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case A0:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case w0:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case C0:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case R0:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case D0:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case N0:case U0:case L0:return Math.ceil(t/4)*Math.ceil(e/4)*16;case P0:case O0:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Md:case z0:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vD(t){switch(t){case Pi:case Sb:return{byteLength:1,components:1};case tu:case Mb:case ar:return{byteLength:2,components:1};case hv:case pv:return{byteLength:2,components:4};case Ua:case dv:case ya:return{byteLength:4,components:1};case bb:case Eb:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fv}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hb(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function _D(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){const v=p[u],S=p[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,p[u]=S)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){const S=p[d];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var xD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yD=`#ifdef USE_ALPHAHASH
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
#endif`,SD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ED=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TD=`#ifdef USE_AOMAP
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
#endif`,AD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wD=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,CD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ND=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UD=`#ifdef USE_IRIDESCENCE
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
#endif`,LD=`#ifdef USE_BUMPMAP
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
#endif`,PD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ID=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,VD=`#define PI 3.141592653589793
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
} // validated`,kD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XD=`vec3 transformedNormal = objectNormal;
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
#endif`,jD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZD="gl_FragColor = linearToOutputTexel( gl_FragColor );",$D=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QD=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,KD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JD=`#ifdef USE_ENVMAP
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
#endif`,eN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tN=`#ifdef USE_ENVMAP
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
#endif`,nN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sN=`#ifdef USE_GRADIENTMAP
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
}`,oN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uN=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,fN=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,dN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,vN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_N=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,yN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SN=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RN=`#if defined( USE_POINTS_UV )
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
#endif`,DN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ON=`#ifdef USE_MORPHTARGETS
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
#endif`,zN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VN=`#ifdef USE_NORMALMAP
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
#endif`,kN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$N=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,aU=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,rU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sU=`#ifdef USE_SKINNING
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
#endif`,oU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lU=`#ifdef USE_SKINNING
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
#endif`,cU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hU=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pU=`#ifdef USE_TRANSMISSION
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
#endif`,mU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_U=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yU=`uniform sampler2D t2D;
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
}`,SU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TU=`#include <common>
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
}`,AU=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wU=`#define DISTANCE
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
}`,CU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NU=`uniform float scale;
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
}`,UU=`uniform vec3 diffuse;
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
}`,LU=`#include <common>
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
}`,PU=`uniform vec3 diffuse;
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
}`,OU=`#define LAMBERT
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
}`,zU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,IU=`#define MATCAP
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
}`,FU=`#define MATCAP
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
}`,BU=`#define NORMAL
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
}`,HU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GU=`#define PHONG
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
}`,VU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kU=`#define STANDARD
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
}`,XU=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jU=`#define TOON
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
}`,qU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,WU=`uniform float size;
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
}`,YU=`uniform vec3 diffuse;
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
}`,ZU=`#include <common>
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
}`,$U=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,QU=`uniform float rotation;
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
}`,KU=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:xD,alphahash_pars_fragment:yD,alphamap_fragment:SD,alphamap_pars_fragment:MD,alphatest_fragment:bD,alphatest_pars_fragment:ED,aomap_fragment:TD,aomap_pars_fragment:AD,batching_pars_vertex:wD,batching_vertex:CD,begin_vertex:RD,beginnormal_vertex:DD,bsdfs:ND,iridescence_fragment:UD,bumpmap_pars_fragment:LD,clipping_planes_fragment:PD,clipping_planes_pars_fragment:OD,clipping_planes_pars_vertex:zD,clipping_planes_vertex:ID,color_fragment:FD,color_pars_fragment:BD,color_pars_vertex:HD,color_vertex:GD,common:VD,cube_uv_reflection_fragment:kD,defaultnormal_vertex:XD,displacementmap_pars_vertex:jD,displacementmap_vertex:qD,emissivemap_fragment:WD,emissivemap_pars_fragment:YD,colorspace_fragment:ZD,colorspace_pars_fragment:$D,envmap_fragment:QD,envmap_common_pars_fragment:KD,envmap_pars_fragment:JD,envmap_pars_vertex:eN,envmap_physical_pars_fragment:fN,envmap_vertex:tN,fog_vertex:nN,fog_pars_vertex:iN,fog_fragment:aN,fog_pars_fragment:rN,gradientmap_pars_fragment:sN,lightmap_pars_fragment:oN,lights_lambert_fragment:lN,lights_lambert_pars_fragment:cN,lights_pars_begin:uN,lights_toon_fragment:dN,lights_toon_pars_fragment:hN,lights_phong_fragment:pN,lights_phong_pars_fragment:mN,lights_physical_fragment:gN,lights_physical_pars_fragment:vN,lights_fragment_begin:_N,lights_fragment_maps:xN,lights_fragment_end:yN,lightprobes_pars_fragment:SN,logdepthbuf_fragment:MN,logdepthbuf_pars_fragment:bN,logdepthbuf_pars_vertex:EN,logdepthbuf_vertex:TN,map_fragment:AN,map_pars_fragment:wN,map_particle_fragment:CN,map_particle_pars_fragment:RN,metalnessmap_fragment:DN,metalnessmap_pars_fragment:NN,morphinstance_vertex:UN,morphcolor_vertex:LN,morphnormal_vertex:PN,morphtarget_pars_vertex:ON,morphtarget_vertex:zN,normal_fragment_begin:IN,normal_fragment_maps:FN,normal_pars_fragment:BN,normal_pars_vertex:HN,normal_vertex:GN,normalmap_pars_fragment:VN,clearcoat_normal_fragment_begin:kN,clearcoat_normal_fragment_maps:XN,clearcoat_pars_fragment:jN,iridescence_pars_fragment:qN,opaque_fragment:WN,packing:YN,premultiplied_alpha_fragment:ZN,project_vertex:$N,dithering_fragment:QN,dithering_pars_fragment:KN,roughnessmap_fragment:JN,roughnessmap_pars_fragment:eU,shadowmap_pars_fragment:tU,shadowmap_pars_vertex:nU,shadowmap_vertex:iU,shadowmask_pars_fragment:aU,skinbase_vertex:rU,skinning_pars_vertex:sU,skinning_vertex:oU,skinnormal_vertex:lU,specularmap_fragment:cU,specularmap_pars_fragment:uU,tonemapping_fragment:fU,tonemapping_pars_fragment:dU,transmission_fragment:hU,transmission_pars_fragment:pU,uv_pars_fragment:mU,uv_pars_vertex:gU,uv_vertex:vU,worldpos_vertex:_U,background_vert:xU,background_frag:yU,backgroundCube_vert:SU,backgroundCube_frag:MU,cube_vert:bU,cube_frag:EU,depth_vert:TU,depth_frag:AU,distance_vert:wU,distance_frag:CU,equirect_vert:RU,equirect_frag:DU,linedashed_vert:NU,linedashed_frag:UU,meshbasic_vert:LU,meshbasic_frag:PU,meshlambert_vert:OU,meshlambert_frag:zU,meshmatcap_vert:IU,meshmatcap_frag:FU,meshnormal_vert:BU,meshnormal_frag:HU,meshphong_vert:GU,meshphong_frag:VU,meshphysical_vert:kU,meshphysical_frag:XU,meshtoon_vert:jU,meshtoon_frag:qU,points_vert:WU,points_frag:YU,shadow_vert:ZU,shadow_frag:$U,sprite_vert:QU,sprite_frag:KU},ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ga={basic:{uniforms:Vn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vn([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vn([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vn([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Vn([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Vn([ve.lights,ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ga.physical={uniforms:Vn([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ff={r:0,b:0,g:0},JU=new hn,Gb=new je;Gb.set(-1,0,0,0,1,0,0,0,1);function eL(t,e,n,i,a,r){const s=new Rt(0);let o=a===!0?0:1,l,c,f=null,p=0,u=null;function d(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const y=g.backgroundBlurriness>0;x=e.get(x,y)}return x}function v(g){let x=!1;const y=d(g);y===null?m(s,o):y&&y.isColor&&(m(y,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,x){const y=d(x);y&&(y.isCubeTexture||y.mapping===mh)?(c===void 0&&(c=new La(new Mu(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:Al(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JU.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gb),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==yt,(f!==y||p!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new La(new vh(2,2),new Pa({name:"BackgroundMaterial",uniforms:Al(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,x){g.getRGB(ff,Ib(t)),n.buffers.color.setClear(ff.r,ff.g,ff.b,x,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,x=1){s.set(g),o=x,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(s,o)},render:v,addToRenderList:S,dispose:h}}function tL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(N,I,G,W,z){let L=!1;const P=p(N,W,G,I);r!==P&&(r=P,c(r.object)),L=d(N,W,G,z),L&&v(N,W,G,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(L||s)&&(s=!1,y(N,I,G,W),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function p(N,I,G,W){const z=W.wireframe===!0;let L=i[I.id];L===void 0&&(L={},i[I.id]=L);const P=N.isInstancedMesh===!0?N.id:0;let B=L[P];B===void 0&&(B={},L[P]=B);let Y=B[G.id];Y===void 0&&(Y={},B[G.id]=Y);let $=Y[z];return $===void 0&&($=u(l()),Y[z]=$),$}function u(N){const I=[],G=[],W=[];for(let z=0;z<n;z++)I[z]=0,G[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:W,object:N,attributes:{},index:null}}function d(N,I,G,W){const z=r.attributes,L=I.attributes;let P=0;const B=G.getAttributes();for(const Y in B)if(B[Y].location>=0){const ae=z[Y];let ge=L[Y];if(ge===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;P++}return r.attributesNum!==P||r.index!==W}function v(N,I,G,W){const z={},L=I.attributes;let P=0;const B=G.getAttributes();for(const Y in B)if(B[Y].location>=0){let ae=L[Y];ae===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),z[Y]=ge,P++}r.attributes=z,r.attributesNum=P,r.index=W}function S(){const N=r.newAttributes;for(let I=0,G=N.length;I<G;I++)N[I]=0}function m(N){h(N,0)}function h(N,I){const G=r.newAttributes,W=r.enabledAttributes,z=r.attributeDivisors;G[N]=1,W[N]===0&&(t.enableVertexAttribArray(N),W[N]=1),z[N]!==I&&(t.vertexAttribDivisor(N,I),z[N]=I)}function g(){const N=r.newAttributes,I=r.enabledAttributes;for(let G=0,W=I.length;G<W;G++)I[G]!==N[G]&&(t.disableVertexAttribArray(G),I[G]=0)}function x(N,I,G,W,z,L,P){P===!0?t.vertexAttribIPointer(N,I,G,z,L):t.vertexAttribPointer(N,I,G,W,z,L)}function y(N,I,G,W){S();const z=W.attributes,L=G.getAttributes(),P=I.defaultAttributeValues;for(const B in L){const Y=L[B];if(Y.location>=0){let $=z[B];if($===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){const ae=$.normalized,ge=$.itemSize,Ie=e.get($);if(Ie===void 0)continue;const De=Ie.buffer,ze=Ie.type,J=Ie.bytesPerElement,de=ze===t.INT||ze===t.UNSIGNED_INT||$.gpuType===dv;if($.isInterleavedBufferAttribute){const ne=$.data,Pe=ne.stride,Ne=$.offset;if(ne.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Y.locationSize;Fe++)h(Y.location+Fe,ne.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Fe=0;Fe<Y.locationSize;Fe++)m(Y.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,De);for(let Fe=0;Fe<Y.locationSize;Fe++)x(Y.location+Fe,ge/Y.locationSize,ze,ae,Pe*J,(Ne+ge/Y.locationSize*Fe)*J,de)}else{if($.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)h(Y.location+ne,$.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ne=0;ne<Y.locationSize;ne++)x(Y.location+ne,ge/Y.locationSize,ze,ae,ge*J,ge/Y.locationSize*ne*J,de)}}else if(P!==void 0){const ae=P[B];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(Y.location,ae);break;case 3:t.vertexAttrib3fv(Y.location,ae);break;case 4:t.vertexAttrib4fv(Y.location,ae);break;default:t.vertexAttrib1fv(Y.location,ae)}}}}g()}function R(){w();for(const N in i){const I=i[N];for(const G in I){const W=I[G];for(const z in W){const L=W[z];for(const P in L)f(L[P].object),delete L[P];delete W[z]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const I=i[N.id];for(const G in I){const W=I[G];for(const z in W){const L=W[z];for(const P in L)f(L[P].object),delete L[P];delete W[z]}}delete i[N.id]}function T(N){for(const I in i){const G=i[I];for(const W in G){const z=G[W];if(z[N.id]===void 0)continue;const L=z[N.id];for(const P in L)f(L[P].object),delete L[P];delete z[N.id]}}}function _(N){for(const I in i){const G=i[I],W=N.isInstancedMesh===!0?N.id:0,z=G[W];if(z!==void 0){for(const L in z){const P=z[L];for(const B in P)f(P[B].object),delete P[B];delete z[L]}delete G[W],Object.keys(G).length===0&&delete i[I]}}}function w(){U(),s=!0,r!==a&&(r=a,c(r.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function nL(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function iL(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(T){return!(T!==ea&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const _=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Pi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ya&&!_)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ge("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,maxSamples:R,samples:E}}function aL(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new Ts,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){const v=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,h=t.get(p);if(!a||v===null||v.length===0||r&&!m)r?f(null):c();else{const g=r?0:i,x=g*4;let y=h.clippingState||null;l.value=y,y=f(v,u,x,d);for(let R=0;R!==x;++R)y[R]=n[R];h.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,u,d,v){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const h=d+S*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=d;x!==S;++x,y+=4)s.copy(p[x]).applyMatrix4(g,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Br=4,$x=[.125,.215,.35,.446,.526,.582],Us=20,rL=256,sc=new Bb,Qx=new Rt;let Np=null,Up=0,Lp=0,Pp=!1;const sL=new j;class Kx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=sL}=r;Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ey(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Np,Up,Lp),this._renderer.xr.enabled=Pp,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===El?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ar,format:ea,colorSpace:bd,depthBuffer:!1},a=Jx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oL(r)),this._blurMaterial=cL(r,e,n),this._ggxMaterial=lL(r,e,n)}return a}_compileMaterial(e){const n=new La(new za,e);this._renderer.compile(n,sc)}_sceneToCubeUV(e,n,i,a,r){const l=new Ni(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Qx),p.toneMapping=wa,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new La(new Mu,new Mv({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(Qx),h=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[x]));const R=this._cubeSize;wo(a,y*R,x>2?R:0,R,R),p.setRenderTarget(a),h&&p.render(S,l),p.render(e,l)}p.toneMapping=d,p.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===js||e.mapping===El;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ty()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ey());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,sc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-Br?i-v+Br:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=v-n,wo(r,m,h,3*S,2*S),a.setRenderTarget(r),a.render(o,sc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,wo(e,m,h,3*S,2*S),a.setRenderTarget(e),a.render(o,sc)}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Us-1),S=r/v,m=isFinite(r)?1+Math.floor(f*S):Us;m>Us&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const h=[];let g=0;for(let T=0;T<Us;++T){const _=T/S,w=Math.exp(-_*_/2);h.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<h.length;T++)h[T]=h[T]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-i;const y=this._sizeLods[a],R=3*y*(a>x-Br?a-x+Br:0),E=4*(this._cubeSize-y);wo(n,R,E,3*y,2*y),l.setRenderTarget(n),l.render(p,sc)}}function oL(t){const e=[],n=[],i=[];let a=t;const r=t-Br+1+$x.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>t-Br?l=$x[s-t+Br-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,v=6,S=3,m=2,h=1,g=new Float32Array(S*v*d),x=new Float32Array(m*v*d),y=new Float32Array(h*v*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,_=E>2?0:-1,w=[T,_,0,T+2/3,_,0,T+2/3,_+1,0,T,_,0,T+2/3,_+1,0,T,_+1,0];g.set(w,S*v*E),x.set(u,m*v*E);const U=[E,E,E,E,E,E];y.set(U,h*v*E)}const R=new za;R.setAttribute("position",new Ra(g,S)),R.setAttribute("uv",new Ra(x,m)),R.setAttribute("faceIndex",new Ra(y,h)),i.push(new La(R,null)),a>Br&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Jx(t,e,n){const i=new Ca(t,e,n);return i.texture.mapping=mh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function lL(t,e,n){return new Pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_h(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function cL(t,e,n){const i=new Float32Array(Us),a=new j(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function ey(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function ty(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}class Vb extends Ca{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Ob(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Mu(5,5,5),r=new Pa({name:"CubemapFromEquirect",uniforms:Al(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Ja});r.uniforms.tEquirect.value=n;const s=new La(a,r),o=n.minFilter;return n.minFilter===Ls&&(n.minFilter=zn),new mD(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}function uL(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===ap||d===rp)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const S=new Vb(v.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const d=u.mapping,v=d===ap||d===rp,S=d===js||d===El;if(v||S){let m=n.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Kx(t)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const g=u.image;return v&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new Kx(t)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===ap?u.mapping=js:d===rp&&(u.mapping=El),u}function l(u){let d=0;const v=6;for(let S=0;S<v;S++)u[S]!==void 0&&d++;return d===v}function c(u){const d=u.target;d.removeEventListener("dispose",c);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function f(u){const d=u.target;d.removeEventListener("dispose",f);const v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function fL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&I0("WebGLRenderer: "+i+" extension not supported."),a}}}function dL(t,e,n,i){const a={},r=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,v=p.attributes.position;let S=0;if(v===void 0)return;if(d!==null){const g=d.array;S=d.version;for(let x=0,y=g.length;x<y;x+=3){const R=g[x+0],E=g[x+1],T=g[x+2];u.push(R,E,E,T,T,R)}}else{const g=v.array;S=v.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const R=x+0,E=x+1,T=x+2;u.push(R,E,E,T,T,R)}}const m=new(v.count>=65535?Lb:Ub)(u,1);m.version=S;const h=r.get(p);h&&e.remove(h),r.set(p,m)}function f(p){const u=r.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function hL(t,e,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){t.drawElements(i,u,r,p*s),n.update(u,i,1)}function c(p,u,d){d!==0&&(t.drawElementsInstanced(i,u,r,p*s,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,d);let S=0;for(let m=0;m<d;m++)S+=u[m];n.update(S,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function pL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:ft("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function mL(t,e,n){const i=new WeakMap,a=new en;function r(s,o,l){const c=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let w=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),v===!0&&(x=2),S===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*R*4*p),T=new Rb(E,y,R,p);T.type=ya,T.needsUpdate=!0;const _=x*4;for(let U=0;U<p;U++){const N=m[U],I=h[U],G=g[U],W=y*R*4*U;for(let z=0;z<N.count;z++){const L=z*_;d===!0&&(a.fromBufferAttribute(N,z),E[W+L+0]=a.x,E[W+L+1]=a.y,E[W+L+2]=a.z,E[W+L+3]=0),v===!0&&(a.fromBufferAttribute(I,z),E[W+L+4]=a.x,E[W+L+5]=a.y,E[W+L+6]=a.z,E[W+L+7]=0),S===!0&&(a.fromBufferAttribute(G,z),E[W+L+8]=a.x,E[W+L+9]=a.y,E[W+L+10]=a.z,E[W+L+11]=G.itemSize===4?a.w:1)}}u={count:p,texture:T,size:new bt(y,R)},i.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function gL(t,e,n,i,a){let r=new WeakMap;function s(c){const f=a.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:o}}const vL={[hb]:"LINEAR_TONE_MAPPING",[pb]:"REINHARD_TONE_MAPPING",[mb]:"CINEON_TONE_MAPPING",[gb]:"ACES_FILMIC_TONE_MAPPING",[_b]:"AGX_TONE_MAPPING",[xb]:"NEUTRAL_TONE_MAPPING",[vb]:"CUSTOM_TONE_MAPPING"};function _L(t,e,n,i,a){const r=new Ca(e,n,{type:t,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Tl(e,n):void 0}),s=new Ca(e,n,{type:ar,depthBuffer:!1,stencilBuffer:!1}),o=new za;o.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Fi([0,2,0,0,2,0],2));const l=new dD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new La(o,l),f=new Bb(-1,1,1,-1,0,1);let p=null,u=null,d=!1,v,S=null,m=[],h=!1;this.setSize=function(g,x){r.setSize(g,x),s.setSize(g,x);for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(g,x)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const x=r.width,y=r.height;for(let R=0;R<m.length;R++){const E=m[R];E.setSize&&E.setSize(x,y)}},this.begin=function(g,x){if(d||g.toneMapping===wa&&m.length===0)return!1;if(S=x,x!==null){const y=x.width,R=x.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return h===!1&&g.setRenderTarget(r),v=g.toneMapping,g.toneMapping=wa,!0},this.hasRenderPass=function(){return h},this.end=function(g,x){g.toneMapping=v,d=!0;let y=r,R=s;for(let E=0;E<m.length;E++){const T=m[E];if(T.enabled!==!1&&(T.render(g,R,y,x),T.needsSwap!==!1)){const _=y;y=R,R=_}}if(p!==g.outputColorSpace||u!==g.toneMapping){p=g.outputColorSpace,u=g.toneMapping,l.defines={},lt.getTransfer(p)===yt&&(l.defines.SRGB_TRANSFER="");const E=vL[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,g.setRenderTarget(S),g.render(c,f),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),s.dispose(),o.dispose(),l.dispose()}}const kb=new qn,B0=new Tl(1,1),Xb=new Rb,jb=new VR,qb=new Ob,ny=[],iy=[],ay=new Float32Array(16),ry=new Float32Array(9),sy=new Float32Array(4);function kl(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=ny[a];if(r===void 0&&(r=new Float32Array(a),ny[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function pn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function mn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xh(t,e){let n=iy[e];n===void 0&&(n=new Int32Array(e),iy[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;t.uniform2fv(this.addr,e),mn(n,e)}}function SL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pn(n,e))return;t.uniform3fv(this.addr,e),mn(n,e)}}function ML(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;t.uniform4fv(this.addr,e),mn(n,e)}}function bL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,i))return;sy.set(i),t.uniformMatrix2fv(this.addr,!1,sy),mn(n,i)}}function EL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,i))return;ry.set(i),t.uniformMatrix3fv(this.addr,!1,ry),mn(n,i)}}function TL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,i))return;ay.set(i),t.uniformMatrix4fv(this.addr,!1,ay),mn(n,i)}}function AL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;t.uniform2iv(this.addr,e),mn(n,e)}}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;t.uniform3iv(this.addr,e),mn(n,e)}}function RL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;t.uniform4iv(this.addr,e),mn(n,e)}}function DL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;t.uniform2uiv(this.addr,e),mn(n,e)}}function UL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;t.uniform3uiv(this.addr,e),mn(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;t.uniform4uiv(this.addr,e),mn(n,e)}}function PL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(B0.compareFunction=n.isReversedDepthBuffer()?xv:_v,r=B0):r=kb,n.setTexture2D(e||r,a)}function OL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||jb,a)}function zL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||qb,a)}function IL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Xb,a)}function FL(t){switch(t){case 5126:return xL;case 35664:return yL;case 35665:return SL;case 35666:return ML;case 35674:return bL;case 35675:return EL;case 35676:return TL;case 5124:case 35670:return AL;case 35667:case 35671:return wL;case 35668:case 35672:return CL;case 35669:case 35673:return RL;case 5125:return DL;case 36294:return NL;case 36295:return UL;case 36296:return LL;case 35678:case 36198:case 36298:case 36306:case 35682:return PL;case 35679:case 36299:case 36307:return OL;case 35680:case 36300:case 36308:case 36293:return zL;case 36289:case 36303:case 36311:case 36292:return IL}}function BL(t,e){t.uniform1fv(this.addr,e)}function HL(t,e){const n=kl(e,this.size,2);t.uniform2fv(this.addr,n)}function GL(t,e){const n=kl(e,this.size,3);t.uniform3fv(this.addr,n)}function VL(t,e){const n=kl(e,this.size,4);t.uniform4fv(this.addr,n)}function kL(t,e){const n=kl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XL(t,e){const n=kl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jL(t,e){const n=kl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qL(t,e){t.uniform1iv(this.addr,e)}function WL(t,e){t.uniform2iv(this.addr,e)}function YL(t,e){t.uniform3iv(this.addr,e)}function ZL(t,e){t.uniform4iv(this.addr,e)}function $L(t,e){t.uniform1uiv(this.addr,e)}function QL(t,e){t.uniform2uiv(this.addr,e)}function KL(t,e){t.uniform3uiv(this.addr,e)}function JL(t,e){t.uniform4uiv(this.addr,e)}function eP(t,e,n){const i=this.cache,a=e.length,r=xh(n,a);pn(i,r)||(t.uniform1iv(this.addr,r),mn(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=B0:s=kb;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function tP(t,e,n){const i=this.cache,a=e.length,r=xh(n,a);pn(i,r)||(t.uniform1iv(this.addr,r),mn(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||jb,r[s])}function nP(t,e,n){const i=this.cache,a=e.length,r=xh(n,a);pn(i,r)||(t.uniform1iv(this.addr,r),mn(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||qb,r[s])}function iP(t,e,n){const i=this.cache,a=e.length,r=xh(n,a);pn(i,r)||(t.uniform1iv(this.addr,r),mn(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||Xb,r[s])}function aP(t){switch(t){case 5126:return BL;case 35664:return HL;case 35665:return GL;case 35666:return VL;case 35674:return kL;case 35675:return XL;case 35676:return jL;case 5124:case 35670:return qL;case 35667:case 35671:return WL;case 35668:case 35672:return YL;case 35669:case 35673:return ZL;case 5125:return $L;case 36294:return QL;case 36295:return KL;case 36296:return JL;case 35678:case 36198:case 36298:case 36306:case 35682:return eP;case 35679:case 36299:case 36307:return tP;case 35680:case 36300:case 36308:case 36293:return nP;case 36289:case 36303:case 36311:case 36292:return iP}}class rP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FL(n.type)}}class sP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aP(n.type)}}class oP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Op=/(\w+)(\])?(\[|\.)?/g;function oy(t,e){t.seq.push(e),t.map[e.id]=e}function lP(t,e,n){const i=t.name,a=i.length;for(Op.lastIndex=0;;){const r=Op.exec(i),s=Op.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){oy(n,c===void 0?new rP(o,t,e):new sP(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new oP(o),oy(n,p)),n=p}}}class Zf{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);lP(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function ly(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cP=37297;let uP=0;function fP(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const cy=new je;function dP(t){lt._getMatrix(cy,lt.workingColorSpace,t);const e=`mat3( ${cy.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Ed:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function uy(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fP(t.getShaderSource(e),o)}else return r}function hP(t,e){const n=dP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pP={[hb]:"Linear",[pb]:"Reinhard",[mb]:"Cineon",[gb]:"ACESFilmic",[_b]:"AgX",[xb]:"Neutral",[vb]:"Custom"};function mP(t,e){const n=pP[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const df=new j;function gP(){lt.getLuminanceCoefficients(df);const t=df.x.toFixed(4),e=df.y.toFixed(4),n=df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ac).join(`
`)}function _P(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Ac(t){return t!==""}function fy(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yP=/^[ \t]*#include +<([\w\d./]+)>/gm;function H0(t){return t.replace(yP,MP)}const SP=new Map;function MP(t,e){let n=Ke[e];if(n===void 0){const i=SP.get(e);if(i!==void 0)n=Ke[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return H0(n)}const bP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hy(t){return t.replace(bP,EP)}function EP(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function py(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TP={[Xf]:"SHADOWMAP_TYPE_PCF",[Tc]:"SHADOWMAP_TYPE_VSM"};function AP(t){return TP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wP={[js]:"ENVMAP_TYPE_CUBE",[El]:"ENVMAP_TYPE_CUBE",[mh]:"ENVMAP_TYPE_CUBE_UV"};function CP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":wP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const RP={[El]:"ENVMAP_MODE_REFRACTION"};function DP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NP={[db]:"ENVMAP_BLENDING_MULTIPLY",[SR]:"ENVMAP_BLENDING_MIX",[MR]:"ENVMAP_BLENDING_ADD"};function UP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":NP[t.combine]||"ENVMAP_BLENDING_NONE"}function LP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PP(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=AP(n),c=CP(n),f=DP(n),p=UP(n),u=LP(n),d=vP(n),v=_P(r),S=a.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ac).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ac).join(`
`),h.length>0&&(h+=`
`)):(m=[py(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ac).join(`
`),h=[py(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wa?"#define TONE_MAPPING":"",n.toneMapping!==wa?Ke.tonemapping_pars_fragment:"",n.toneMapping!==wa?mP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,hP("linearToOutputTexel",n.outputColorSpace),gP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ac).join(`
`)),s=H0(s),s=fy(s,n),s=dy(s,n),o=H0(o),o=fy(o,n),o=dy(o,n),s=hy(s),o=hy(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+s,y=g+h+o,R=ly(a,a.VERTEX_SHADER,x),E=ly(a,a.FRAGMENT_SHADER,y);a.attachShader(S,R),a.attachShader(S,E),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function T(N){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(S)||"",G=a.getShaderInfoLog(R)||"",W=a.getShaderInfoLog(E)||"",z=I.trim(),L=G.trim(),P=W.trim();let B=!0,Y=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,S,R,E);else{const $=uy(a,R,"vertex"),ae=uy(a,E,"fragment");ft("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+$+`
`+ae)}else z!==""?Ge("WebGLProgram: Program Info Log:",z):(L===""||P==="")&&(Y=!1);Y&&(N.diagnostics={runnable:B,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:P,prefix:h}})}a.deleteShader(R),a.deleteShader(E),_=new Zf(a,S),w=xP(a,S)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(S,cP)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uP++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=E,this}let OP=0;class zP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IP(e),n.set(e,i)),i}}class IP{constructor(e){this.id=OP++,this.code=e,this.usedTimes=0}}function FP(t){return t===qs||t===Sd||t===Md}function BP(t,e,n,i,a,r){const s=new Db,o=new zP,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,w,U,N,I,G){const W=N.fog,z=I.geometry,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||L,P),Y=B&&B.mapping===mh?B.image.height:null,$=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Ie=0;z.morphAttributes.position!==void 0&&(Ie=1),z.morphAttributes.normal!==void 0&&(Ie=2),z.morphAttributes.color!==void 0&&(Ie=3);let De,ze,J,de;if($){const qe=ga[$];De=qe.vertexShader,ze=qe.fragmentShader}else De=_.vertexShader,ze=_.fragmentShader,o.update(_),J=o.getVertexShaderID(_),de=o.getFragmentShaderID(_);const ne=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,Fe=I.isBatchedMesh===!0,Gt=!!_.map,et=!!_.matcap,dt=!!B,Tt=!!_.aoMap,tt=!!_.lightMap,$t=!!_.bumpMap,Nt=!!_.normalMap,Nn=!!_.displacementMap,D=!!_.emissiveMap,Qe=!!_.metalnessMap,we=!!_.roughnessMap,Ve=_.anisotropy>0,oe=_.clearcoat>0,mt=_.dispersion>0,A=_.iridescence>0,M=_.sheen>0,H=_.transmission>0,ee=Ve&&!!_.anisotropyMap,se=oe&&!!_.clearcoatMap,ce=oe&&!!_.clearcoatNormalMap,me=oe&&!!_.clearcoatRoughnessMap,Z=A&&!!_.iridescenceMap,te=A&&!!_.iridescenceThicknessMap,ye=M&&!!_.sheenColorMap,Te=M&&!!_.sheenRoughnessMap,he=!!_.specularMap,ue=!!_.specularColorMap,Xe=!!_.specularIntensityMap,Ze=H&&!!_.transmissionMap,ht=H&&!!_.thicknessMap,O=!!_.gradientMap,fe=!!_.alphaMap,Q=_.alphaTest>0,Me=!!_.alphaHash,pe=!!_.extensions;let re=wa;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(re=t.toneMapping);const Ue={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:ze,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Fe,batchingColor:Fe&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:et,envMap:dt,envMapMode:dt&&B.mapping,envMapCubeUVHeight:Y,aoMap:Tt,lightMap:tt,bumpMap:$t,normalMap:Nt,displacementMap:Nn,emissiveMap:D,normalMapObjectSpace:Nt&&_.normalMapType===TR,normalMapTangentSpace:Nt&&_.normalMapType===Tx,packedNormalMap:Nt&&_.normalMapType===Tx&&FP(_.normalMap.format),metalnessMap:Qe,roughnessMap:we,anisotropy:Ve,anisotropyMap:ee,clearcoat:oe,clearcoatMap:se,clearcoatNormalMap:ce,clearcoatRoughnessMap:me,dispersion:mt,iridescence:A,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:M,sheenColorMap:ye,sheenRoughnessMap:Te,specularMap:he,specularColorMap:ue,specularIntensityMap:Xe,transmission:H,transmissionMap:Ze,thicknessMap:ht,gradientMap:O,opaque:_.transparent===!1&&_.blending===sl&&_.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:Me,combine:_.combine,mapUv:Gt&&v(_.map.channel),aoMapUv:Tt&&v(_.aoMap.channel),lightMapUv:tt&&v(_.lightMap.channel),bumpMapUv:$t&&v(_.bumpMap.channel),normalMapUv:Nt&&v(_.normalMap.channel),displacementMapUv:Nn&&v(_.displacementMap.channel),emissiveMapUv:D&&v(_.emissiveMap.channel),metalnessMapUv:Qe&&v(_.metalnessMap.channel),roughnessMapUv:we&&v(_.roughnessMap.channel),anisotropyMapUv:ee&&v(_.anisotropyMap.channel),clearcoatMapUv:se&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(_.sheenRoughnessMap.channel),specularMapUv:he&&v(_.specularMap.channel),specularColorMapUv:ue&&v(_.specularColorMap.channel),specularIntensityMapUv:Xe&&v(_.specularIntensityMap.channel),transmissionMapUv:Ze&&v(_.transmissionMap.channel),thicknessMapUv:ht&&v(_.thicknessMap.channel),alphaMapUv:fe&&v(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Nt||Ve),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Gt||fe),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:D&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$a,flipSided:_.side===ni,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)w.push(U),w.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(h(w,_),g(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function h(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),_.push(s.mask)}function x(_){const w=d[_.type];let U;if(w){const N=ga[w];U=cD.clone(N.uniforms)}else U=_.uniforms;return U}function y(_,w){let U=f.get(w);return U!==void 0?++U.usedTimes:(U=new PP(t,w,_,a),c.push(U),f.set(w,U)),U}function R(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:T}}function HP(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function GP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function my(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gy(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,S,m,h){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:v,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:h},t[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=v,g.materialVariant=s(u),g.groupOrder=S,g.renderOrder=u.renderOrder,g.z=m,g.group=h),e++,g}function l(u,d,v,S,m,h){const g=o(u,d,v,S,m,h);v.transmission>0?i.push(g):v.transparent===!0?a.push(g):n.push(g)}function c(u,d,v,S,m,h){const g=o(u,d,v,S,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?a.unshift(g):n.unshift(g)}function f(u,d){n.length>1&&n.sort(u||GP),i.length>1&&i.sort(d||my),a.length>1&&a.sort(d||my)}function p(){for(let u=e,d=t.length;u<d;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:f}}function VP(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new gy,t.set(i,[s])):a>=r.length?(s=new gy,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function kP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Rt};break;case"SpotLight":n={position:new j,direction:new j,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function XP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jP=0;function qP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WP(t){const e=new kP,n=XP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const a=new j,r=new hn,s=new hn;function o(c){let f=0,p=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,v=0,S=0,m=0,h=0,g=0,x=0,y=0,R=0,E=0,T=0;c.sort(qP);for(let w=0,U=c.length;w<U;w++){const N=c[w],I=N.color,G=N.intensity,W=N.distance;let z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qs?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=I.r*G,p+=I.g*G,u+=I.b*G;else if(N.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(N.sh.coefficients[L],G);T++}else if(N.isDirectionalLight){const L=e.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const P=N.shadow,B=n.get(N);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=N.shadow.matrix,g++}i.directional[d]=L,d++}else if(N.isSpotLight){const L=e.get(N);L.position.setFromMatrixPosition(N.matrixWorld),L.color.copy(I).multiplyScalar(G),L.distance=W,L.coneCos=Math.cos(N.angle),L.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),L.decay=N.decay,i.spot[S]=L;const P=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,P.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[S]=P.matrix,N.castShadow){const B=n.get(N);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,i.spotShadow[S]=B,i.spotShadowMap[S]=z,y++}S++}else if(N.isRectAreaLight){const L=e.get(N);L.color.copy(I).multiplyScalar(G),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=L,m++}else if(N.isPointLight){const L=e.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity),L.distance=N.distance,L.decay=N.decay,N.castShadow){const P=N.shadow,B=n.get(N);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,B.shadowCameraNear=P.camera.near,B.shadowCameraFar=P.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=N.shadow.matrix,x++}i.point[v]=L,v++}else if(N.isHemisphereLight){const L=e.get(N);L.skyColor.copy(N.color).multiplyScalar(G),L.groundColor.copy(N.groundColor).multiplyScalar(G),i.hemi[h]=L,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==d||_.pointLength!==v||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==h||_.numDirectionalShadows!==g||_.numPointShadows!==x||_.numSpotShadows!==y||_.numSpotMaps!==R||_.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,_.directionalLength=d,_.pointLength=v,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=h,_.numDirectionalShadows=g,_.numPointShadows=x,_.numSpotShadows=y,_.numSpotMaps=R,_.numLightProbes=T,i.version=jP++)}function l(c,f){let p=0,u=0,d=0,v=0,S=0;const m=f.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),r.copy(x.matrixWorld),r.premultiply(m),s.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function vy(t){const e=new WP(t),n=[],i=[],a=[];function r(u){p.camera=u,n.length=0,i.length=0,a.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function YP(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new vy(t),e.set(a,[o])):r>=s.length?(o=new vy(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const ZP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$P=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QP=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],KP=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],_y=new hn,oc=new j,zp=new j;function JP(t,e,n){let i=new Pb;const a=new bt,r=new bt,s=new en,o=new hD,l=new pD,c={},f=n.maxTextureSize,p={[ir]:ni,[ni]:ir,[$a]:$a},u=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:ZP,fragmentShader:$P}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const v=new za;v.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new La(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let h=this.type;this.render=function(E,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nR&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xf);const w=t.getRenderTarget(),U=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ja),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=h!==this.type;G&&T.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=E.length;W<z;W++){const L=E[W],P=L.shadow;if(P===void 0){Ge("WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const B=P.getFrameExtents();a.multiply(B),r.copy(P.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/B.x),a.x=r.x*B.x,P.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/B.y),a.y=r.y*B.y,P.mapSize.y=r.y));const Y=t.state.buffers.depth.getReversed();if(P.camera._reversedDepth=Y,P.map===null||G===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Tc){if(L.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ca(a.x,a.y,{format:qs,type:ar,minFilter:zn,magFilter:zn,generateMipmaps:!1}),P.map.texture.name=L.name+".shadowMap",P.map.depthTexture=new Tl(a.x,a.y,ya),P.map.depthTexture.name=L.name+".shadowMapDepth",P.map.depthTexture.format=rr,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Tn,P.map.depthTexture.magFilter=Tn}else L.isPointLight?(P.map=new Vb(a.x),P.map.depthTexture=new oD(a.x,Ua)):(P.map=new Ca(a.x,a.y),P.map.depthTexture=new Tl(a.x,a.y,Ua)),P.map.depthTexture.name=L.name+".shadowMap",P.map.depthTexture.format=rr,this.type===Xf?(P.map.depthTexture.compareFunction=Y?xv:_v,P.map.depthTexture.minFilter=zn,P.map.depthTexture.magFilter=zn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Tn,P.map.depthTexture.magFilter=Tn);P.camera.updateProjectionMatrix()}const $=P.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<$;ae++){if(P.map.isWebGLCubeRenderTarget)t.setRenderTarget(P.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(P.map),t.clear());const ge=P.getViewport(ae);s.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),I.viewport(s)}if(L.isPointLight){const ge=P.camera,Ie=P.matrix,De=L.distance||ge.far;De!==ge.far&&(ge.far=De,ge.updateProjectionMatrix()),oc.setFromMatrixPosition(L.matrixWorld),ge.position.copy(oc),zp.copy(ge.position),zp.add(QP[ae]),ge.up.copy(KP[ae]),ge.lookAt(zp),ge.updateMatrixWorld(),Ie.makeTranslation(-oc.x,-oc.y,-oc.z),_y.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),P._frustum.setFromProjectionMatrix(_y,ge.coordinateSystem,ge.reversedDepth)}else P.updateMatrices(L);i=P.getFrustum(),y(T,_,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===Tc&&g(P,_),P.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,U,N)};function g(E,T){const _=e.update(S);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ca(a.x,a.y,{format:qs,type:ar})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,_,u,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,_,d,S,null)}function x(E,T,_,w){let U=null;const N=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)U=N;else if(U=_.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=U.uuid,G=T.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let z=W[G];z===void 0&&(z=U.clone(),W[G]=z,T.addEventListener("dispose",R)),U=z}if(U.visible=T.visible,U.wireframe=T.wireframe,w===Tc?U.side=T.shadowSide!==null?T.shadowSide:T.side:U.side=T.shadowSide!==null?T.shadowSide:p[T.side],U.alphaMap=T.alphaMap,U.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,U.map=T.map,U.clipShadows=T.clipShadows,U.clippingPlanes=T.clippingPlanes,U.clipIntersection=T.clipIntersection,U.displacementMap=T.displacementMap,U.displacementScale=T.displacementScale,U.displacementBias=T.displacementBias,U.wireframeLinewidth=T.wireframeLinewidth,U.linewidth=T.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=t.properties.get(U);I.light=_}return U}function y(E,T,_,w,U){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===Tc)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const G=e.update(E),W=E.material;if(Array.isArray(W)){const z=G.groups;for(let L=0,P=z.length;L<P;L++){const B=z[L],Y=W[B.materialIndex];if(Y&&Y.visible){const $=x(E,Y,w,U);E.onBeforeShadow(t,E,T,_,G,$,B),t.renderBufferDirect(_,null,G,$,E,B),E.onAfterShadow(t,E,T,_,G,$,B)}}}else if(W.visible){const z=x(E,W,w,U);E.onBeforeShadow(t,E,T,_,G,z,null),t.renderBufferDirect(_,null,G,z,E,null),E.onAfterShadow(t,E,T,_,G,z,null)}}const I=E.children;for(let G=0,W=I.length;G<W;G++)y(I[G],T,_,w,U)}function R(E){E.target.removeEventListener("dispose",R);for(const _ in c){const w=c[_],U=E.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}function eO(t,e){function n(){let O=!1;const fe=new en;let Q=null;const Me=new en(0,0,0,0);return{setMask:function(pe){Q!==pe&&!O&&(t.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){O=pe},setClear:function(pe,re,Ue,qe,Qt){Qt===!0&&(pe*=qe,re*=qe,Ue*=qe),fe.set(pe,re,Ue,qe),Me.equals(fe)===!1&&(t.clearColor(pe,re,Ue,qe),Me.copy(fe))},reset:function(){O=!1,Q=null,Me.set(-1,0,0,0)}}}function i(){let O=!1,fe=!1,Q=null,Me=null,pe=null;return{setReversed:function(re){if(fe!==re){const Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const qe=pe;pe=null,this.setClear(qe)}},getReversed:function(){return fe},setTest:function(re){re?ne(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(re){Q!==re&&!O&&(t.depthMask(re),Q=re)},setFunc:function(re){if(fe&&(re=OR[re]),Me!==re){switch(re){case Km:t.depthFunc(t.NEVER);break;case Jm:t.depthFunc(t.ALWAYS);break;case e0:t.depthFunc(t.LESS);break;case bl:t.depthFunc(t.LEQUAL);break;case t0:t.depthFunc(t.EQUAL);break;case n0:t.depthFunc(t.GEQUAL);break;case i0:t.depthFunc(t.GREATER);break;case a0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=re}},setLocked:function(re){O=re},setClear:function(re){pe!==re&&(pe=re,fe&&(re=1-re),t.clearDepth(re))},reset:function(){O=!1,Q=null,Me=null,pe=null,fe=!1}}}function a(){let O=!1,fe=null,Q=null,Me=null,pe=null,re=null,Ue=null,qe=null,Qt=null;return{setTest:function(At){O||(At?ne(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(At){fe!==At&&!O&&(t.stencilMask(At),fe=At)},setFunc:function(At,Ba,sa){(Q!==At||Me!==Ba||pe!==sa)&&(t.stencilFunc(At,Ba,sa),Q=At,Me=Ba,pe=sa)},setOp:function(At,Ba,sa){(re!==At||Ue!==Ba||qe!==sa)&&(t.stencilOp(At,Ba,sa),re=At,Ue=Ba,qe=sa)},setLocked:function(At){O=At},setClear:function(At){Qt!==At&&(t.clearStencil(At),Qt=At)},reset:function(){O=!1,fe=null,Q=null,Me=null,pe=null,re=null,Ue=null,qe=null,Qt=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let f={},p={},u={},d=new WeakMap,v=[],S=null,m=!1,h=null,g=null,x=null,y=null,R=null,E=null,T=null,_=new Rt(0,0,0),w=0,U=!1,N=null,I=null,G=null,W=null,z=null;const L=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,B=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=B>=2);let $=null,ae={};const ge=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),De=new en().fromArray(ge),ze=new en().fromArray(Ie);function J(O,fe,Q,Me){const pe=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<Q;Ue++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return re}const de={};de[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),s.setFunc(bl),$t(!1),Nt(Sx),ne(t.CULL_FACE),Tt(Ja);function ne(O){f[O]!==!0&&(t.enable(O),f[O]=!0)}function Pe(O){f[O]!==!1&&(t.disable(O),f[O]=!1)}function Ne(O,fe){return u[O]!==fe?(t.bindFramebuffer(O,fe),u[O]=fe,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Fe(O,fe){let Q=v,Me=!1;if(O){Q=d.get(fe),Q===void 0&&(Q=[],d.set(fe,Q));const pe=O.textures;if(Q.length!==pe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Ue=pe.length;re<Ue;re++)Q[re]=t.COLOR_ATTACHMENT0+re;Q.length=pe.length,Me=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,Me=!0);Me&&t.drawBuffers(Q)}function Gt(O){return S!==O?(t.useProgram(O),S=O,!0):!1}const et={[Ns]:t.FUNC_ADD,[aR]:t.FUNC_SUBTRACT,[rR]:t.FUNC_REVERSE_SUBTRACT};et[sR]=t.MIN,et[oR]=t.MAX;const dt={[lR]:t.ZERO,[cR]:t.ONE,[uR]:t.SRC_COLOR,[$m]:t.SRC_ALPHA,[gR]:t.SRC_ALPHA_SATURATE,[pR]:t.DST_COLOR,[dR]:t.DST_ALPHA,[fR]:t.ONE_MINUS_SRC_COLOR,[Qm]:t.ONE_MINUS_SRC_ALPHA,[mR]:t.ONE_MINUS_DST_COLOR,[hR]:t.ONE_MINUS_DST_ALPHA,[vR]:t.CONSTANT_COLOR,[_R]:t.ONE_MINUS_CONSTANT_COLOR,[xR]:t.CONSTANT_ALPHA,[yR]:t.ONE_MINUS_CONSTANT_ALPHA};function Tt(O,fe,Q,Me,pe,re,Ue,qe,Qt,At){if(O===Ja){m===!0&&(Pe(t.BLEND),m=!1);return}if(m===!1&&(ne(t.BLEND),m=!0),O!==iR){if(O!==h||At!==U){if((g!==Ns||R!==Ns)&&(t.blendEquation(t.FUNC_ADD),g=Ns,R=Ns),At)switch(O){case sl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mx:t.blendFunc(t.ONE,t.ONE);break;case bx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ex:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",O);break}else switch(O){case sl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case bx:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ex:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",O);break}x=null,y=null,E=null,T=null,_.set(0,0,0),w=0,h=O,U=At}return}pe=pe||fe,re=re||Q,Ue=Ue||Me,(fe!==g||pe!==R)&&(t.blendEquationSeparate(et[fe],et[pe]),g=fe,R=pe),(Q!==x||Me!==y||re!==E||Ue!==T)&&(t.blendFuncSeparate(dt[Q],dt[Me],dt[re],dt[Ue]),x=Q,y=Me,E=re,T=Ue),(qe.equals(_)===!1||Qt!==w)&&(t.blendColor(qe.r,qe.g,qe.b,Qt),_.copy(qe),w=Qt),h=O,U=!1}function tt(O,fe){O.side===$a?Pe(t.CULL_FACE):ne(t.CULL_FACE);let Q=O.side===ni;fe&&(Q=!Q),$t(Q),O.blending===sl&&O.transparent===!1?Tt(Ja):Tt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const Me=O.stencilWrite;o.setTest(Me),Me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),D(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function $t(O){N!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),N=O)}function Nt(O){O!==eR?(ne(t.CULL_FACE),O!==I&&(O===Sx?t.cullFace(t.BACK):O===tR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),I=O}function Nn(O){O!==G&&(P&&t.lineWidth(O),G=O)}function D(O,fe,Q){O?(ne(t.POLYGON_OFFSET_FILL),(W!==fe||z!==Q)&&(W=fe,z=Q,s.getReversed()&&(fe=-fe),t.polygonOffset(fe,Q))):Pe(t.POLYGON_OFFSET_FILL)}function Qe(O){O?ne(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function we(O){O===void 0&&(O=t.TEXTURE0+L-1),$!==O&&(t.activeTexture(O),$=O)}function Ve(O,fe,Q){Q===void 0&&($===null?Q=t.TEXTURE0+L-1:Q=$);let Me=ae[Q];Me===void 0&&(Me={type:void 0,texture:void 0},ae[Q]=Me),(Me.type!==O||Me.texture!==fe)&&($!==Q&&(t.activeTexture(Q),$=Q),t.bindTexture(O,fe||de[O]),Me.type=O,Me.texture=fe)}function oe(){const O=ae[$];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function mt(){try{t.compressedTexImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function M(){try{t.texSubImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function H(){try{t.texSubImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function ce(){try{t.texStorage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function me(){try{t.texStorage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function Z(){try{t.texImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function te(){try{t.texImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function ye(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function Te(O,fe){p[O]!==fe&&(t.pixelStorei(O,fe),p[O]=fe)}function he(O){De.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),De.copy(O))}function ue(O){ze.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function Xe(O,fe){let Q=c.get(fe);Q===void 0&&(Q=new WeakMap,c.set(fe,Q));let Me=Q.get(O);Me===void 0&&(Me=t.getUniformBlockIndex(fe,O.name),Q.set(O,Me))}function Ze(O,fe){const Me=c.get(fe).get(O);l.get(fe)!==Me&&(t.uniformBlockBinding(fe,Me,O.__bindingPointIndex),l.set(fe,Me))}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},$=null,ae={},u={},d=new WeakMap,v=[],S=null,m=!1,h=null,g=null,x=null,y=null,R=null,E=null,T=null,_=new Rt(0,0,0),w=0,U=!1,N=null,I=null,G=null,W=null,z=null,De.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:Pe,bindFramebuffer:Ne,drawBuffers:Fe,useProgram:Gt,setBlending:Tt,setMaterial:tt,setFlipSided:$t,setCullFace:Nt,setLineWidth:Nn,setPolygonOffset:D,setScissorTest:Qe,activeTexture:we,bindTexture:Ve,unbindTexture:oe,compressedTexImage2D:mt,compressedTexImage3D:A,texImage2D:Z,texImage3D:te,pixelStorei:Te,getParameter:ye,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:ce,texStorage3D:me,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:ee,compressedTexSubImage3D:se,scissor:he,viewport:ue,reset:ht}}function tO(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,f=new WeakMap,p=new Set;let u;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,M){return v?new OffscreenCanvas(A,M):Ad("canvas")}function m(A,M,H){let ee=1;const se=mt(A);if((se.width>H||se.height>H)&&(ee=H/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ce=Math.floor(ee*se.width),me=Math.floor(ee*se.height);u===void 0&&(u=S(ce,me));const Z=M?S(ce,me):u;return Z.width=ce,Z.height=me,Z.getContext("2d").drawImage(A,0,0,ce,me),Ge("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ce+"x"+me+")."),Z}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function h(A){return A.generateMipmaps}function g(A){t.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,M,H,ee,se,ce=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;ee&&(me=e.get("EXT_texture_norm16"),me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8),H===t.UNSIGNED_SHORT&&me&&(Z=me.R16_EXT),H===t.SHORT&&me&&(Z=me.R16_SNORM_EXT)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),M===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8),H===t.UNSIGNED_SHORT&&me&&(Z=me.RG16_EXT),H===t.SHORT&&me&&(Z=me.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_SHORT&&me&&(Z=me.RGB16_EXT),H===t.SHORT&&me&&(Z=me.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),M===t.RGBA){const te=ce?Ed:lt.getTransfer(se);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=te===yt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&me&&(Z=me.RGBA16_EXT),H===t.SHORT&&me&&(Z=me.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function R(A,M){let H;return A?M===null||M===Ua||M===nu?H=t.DEPTH24_STENCIL8:M===ya?H=t.DEPTH32F_STENCIL8:M===tu&&(H=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ua||M===nu?H=t.DEPTH_COMPONENT24:M===ya?H=t.DEPTH_COMPONENT32F:M===tu&&(H=t.DEPTH_COMPONENT16),H}function E(A,M){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Tn&&A.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),w(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&p.delete(M)}function _(A){const M=A.target;M.removeEventListener("dispose",_),N(M)}function w(A){const M=i.get(A);if(M.__webglInit===void 0)return;const H=A.source,ee=d.get(H);if(ee){const se=ee[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(A),Object.keys(ee).length===0&&d.delete(H)}i.remove(A)}function U(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const H=A.source,ee=d.get(H);delete ee[M.__cacheKey],s.memory.textures--}function N(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let se=0;se<M.__webglFramebuffer[ee].length;se++)t.deleteFramebuffer(M.__webglFramebuffer[ee][se]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=A.textures;for(let ee=0,se=H.length;ee<se;ee++){const ce=i.get(H[ee]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),s.memory.textures--),i.remove(H[ee])}i.remove(A)}let I=0;function G(){I=0}function W(){return I}function z(A){I=A}function L(){const A=I;return A>=a.maxTextures&&Ge("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),I+=1,A}function P(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function B(A,M){const H=i.get(A);if(A.isVideoTexture&&Ve(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const ee=A.image;if(ee===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(H,A,M);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function Y(A,M){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Pe(H,A,M);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function $(A,M){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Pe(H,A,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function ae(A,M){const H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Ne(H,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const ge={[r0]:t.REPEAT,[Qa]:t.CLAMP_TO_EDGE,[s0]:t.MIRRORED_REPEAT},Ie={[Tn]:t.NEAREST,[bR]:t.NEAREST_MIPMAP_NEAREST,[Xu]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[sp]:t.LINEAR_MIPMAP_NEAREST,[Ls]:t.LINEAR_MIPMAP_LINEAR},De={[AR]:t.NEVER,[NR]:t.ALWAYS,[wR]:t.LESS,[_v]:t.LEQUAL,[CR]:t.EQUAL,[xv]:t.GEQUAL,[RR]:t.GREATER,[DR]:t.NOTEQUAL};function ze(A,M){if(M.type===ya&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===sp||M.magFilter===Xu||M.magFilter===Ls||M.minFilter===zn||M.minFilter===sp||M.minFilter===Xu||M.minFilter===Ls)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ge[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ge[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ge[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ie[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ie[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,De[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Xu&&M.minFilter!==Ls||M.type===ya&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const ee=M.source;let se=d.get(ee);se===void 0&&(se={},d.set(ee,se));const ce=P(M);if(ce!==A.__cacheKey){se[ce]===void 0&&(se[ce]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),se[ce].usedTimes++;const me=se[A.__cacheKey];me!==void 0&&(se[A.__cacheKey].usedTimes--,me.usedTimes===0&&U(M)),A.__cacheKey=ce,A.__webglTexture=se[ce].texture}return H}function de(A,M,H){return Math.floor(Math.floor(A/H)/M)}function ne(A,M,H,ee){const ce=A.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,ee,M.data);else{ce.sort((Te,he)=>Te.start-he.start);let me=0;for(let Te=1;Te<ce.length;Te++){const he=ce[me],ue=ce[Te],Xe=he.start+he.count,Ze=de(ue.start,M.width,4),ht=de(he.start,M.width,4);ue.start<=Xe+1&&Ze===ht&&de(ue.start+ue.count-1,M.width,4)===Ze?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++me,ce[me]=ue)}ce.length=me+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ye=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Te=0,he=ce.length;Te<he;Te++){const ue=ce[Te],Xe=Math.floor(ue.start/4),Ze=Math.ceil(ue.count/4),ht=Xe%M.width,O=Math.floor(Xe/M.width),fe=Ze,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,ht,O,fe,Q,H,ee,M.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function Pe(A,M,H){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const se=J(A,M),ce=M.source;n.bindTexture(ee,A.__webglTexture,t.TEXTURE0+H);const me=i.get(ce);if(ce.version!==me.__version||se===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=lt.getPrimaries(lt.workingColorSpace),Me=M.colorSpace===zr?null:lt.getPrimaries(M.colorSpace),pe=M.colorSpace===zr||Q===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let te=m(M.image,!1,a.maxTextureSize);te=oe(M,te);const ye=r.convert(M.format,M.colorSpace),Te=r.convert(M.type);let he=y(M.internalFormat,ye,Te,M.normalized,M.colorSpace,M.isVideoTexture);ze(ee,M);let ue;const Xe=M.mipmaps,Ze=M.isVideoTexture!==!0,ht=me.__version===void 0||se===!0,O=ce.dataReady,fe=E(M,te);if(M.isDepthTexture)he=R(M.format===Ps,M.type),ht&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,he,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,he,te.width,te.height,0,ye,Te,null));else if(M.isDataTexture)if(Xe.length>0){Ze&&ht&&n.texStorage2D(t.TEXTURE_2D,fe,he,Xe[0].width,Xe[0].height);for(let Q=0,Me=Xe.length;Q<Me;Q++)ue=Xe[Q],Ze?O&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ue.width,ue.height,ye,Te,ue.data):n.texImage2D(t.TEXTURE_2D,Q,he,ue.width,ue.height,0,ye,Te,ue.data);M.generateMipmaps=!1}else Ze?(ht&&n.texStorage2D(t.TEXTURE_2D,fe,he,te.width,te.height),O&&ne(M,te,ye,Te)):n.texImage2D(t.TEXTURE_2D,0,he,te.width,te.height,0,ye,Te,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,Xe[0].width,Xe[0].height,te.depth);for(let Q=0,Me=Xe.length;Q<Me;Q++)if(ue=Xe[Q],M.format!==ea)if(ye!==null)if(Ze){if(O)if(M.layerUpdates.size>0){const pe=Zx(ue.width,ue.height,M.format,M.type);for(const re of M.layerUpdates){const Ue=ue.data.subarray(re*pe/ue.data.BYTES_PER_ELEMENT,(re+1)*pe/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,re,ue.width,ue.height,1,ye,Ue)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,te.depth,ye,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,he,ue.width,ue.height,te.depth,0,ue.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,te.depth,ye,Te,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,he,ue.width,ue.height,te.depth,0,ye,Te,ue.data)}else{Ze&&ht&&n.texStorage2D(t.TEXTURE_2D,fe,he,Xe[0].width,Xe[0].height);for(let Q=0,Me=Xe.length;Q<Me;Q++)ue=Xe[Q],M.format!==ea?ye!==null?Ze?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ue.width,ue.height,ye,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,he,ue.width,ue.height,0,ue.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?O&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ue.width,ue.height,ye,Te,ue.data):n.texImage2D(t.TEXTURE_2D,Q,he,ue.width,ue.height,0,ye,Te,ue.data)}else if(M.isDataArrayTexture)if(Ze){if(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,te.width,te.height,te.depth),O)if(M.layerUpdates.size>0){const Q=Zx(te.width,te.height,M.format,M.type);for(const Me of M.layerUpdates){const pe=te.data.subarray(Me*Q/te.data.BYTES_PER_ELEMENT,(Me+1)*Q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,te.width,te.height,1,ye,Te,pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,Te,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,te.width,te.height,te.depth,0,ye,Te,te.data);else if(M.isData3DTexture)Ze?(ht&&n.texStorage3D(t.TEXTURE_3D,fe,he,te.width,te.height,te.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,Te,te.data)):n.texImage3D(t.TEXTURE_3D,0,he,te.width,te.height,te.depth,0,ye,Te,te.data);else if(M.isFramebufferTexture){if(ht)if(Ze)n.texStorage2D(t.TEXTURE_2D,fe,he,te.width,te.height);else{let Q=te.width,Me=te.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,he,Q,Me,0,ye,Te,null),Q>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),p.add(M),Q.onpaint=qe=>{const Qt=qe.changedElements;for(const At of p)Qt.includes(At.image)&&(At.needsUpdate=!0)},Q.requestPaint();return}const Me=0,pe=t.RGBA,re=t.RGBA,Ue=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Me,pe,re,Ue,te),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&ht){const Q=mt(Xe[0]);n.texStorage2D(t.TEXTURE_2D,fe,he,Q.width,Q.height)}for(let Q=0,Me=Xe.length;Q<Me;Q++)ue=Xe[Q],Ze?O&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ye,Te,ue):n.texImage2D(t.TEXTURE_2D,Q,he,ye,Te,ue);M.generateMipmaps=!1}else if(Ze){if(ht){const Q=mt(te);n.texStorage2D(t.TEXTURE_2D,fe,he,Q.width,Q.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Te,te)}else n.texImage2D(t.TEXTURE_2D,0,he,ye,Te,te);h(M)&&g(ee),me.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ne(A,M,H){if(M.image.length!==6)return;const ee=J(A,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const ce=i.get(se);if(se.version!==ce.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const me=lt.getPrimaries(lt.workingColorSpace),Z=M.colorSpace===zr?null:lt.getPrimaries(M.colorSpace),te=M.colorSpace===zr||me===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!ye&&!Te?he[re]=m(M.image[re],!0,a.maxCubemapSize):he[re]=Te?M.image[re].image:M.image[re],he[re]=oe(M,he[re]);const ue=he[0],Xe=r.convert(M.format,M.colorSpace),Ze=r.convert(M.type),ht=y(M.internalFormat,Xe,Ze,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,fe=ce.__version===void 0||ee===!0,Q=se.dataReady;let Me=E(M,ue);ze(t.TEXTURE_CUBE_MAP,M);let pe;if(ye){O&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ht,ue.width,ue.height);for(let re=0;re<6;re++){pe=he[re].mipmaps;for(let Ue=0;Ue<pe.length;Ue++){const qe=pe[Ue];M.format!==ea?Xe!==null?O?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,qe.width,qe.height,Xe,qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,ht,qe.width,qe.height,0,qe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,qe.width,qe.height,Xe,Ze,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,ht,qe.width,qe.height,0,Xe,Ze,qe.data)}}}else{if(pe=M.mipmaps,O&&fe){pe.length>0&&Me++;const re=mt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ht,re.width,re.height)}for(let re=0;re<6;re++)if(Te){O?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Xe,Ze,he[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ht,he[re].width,he[re].height,0,Xe,Ze,he[re].data);for(let Ue=0;Ue<pe.length;Ue++){const Qt=pe[Ue].image[re].image;O?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Qt.width,Qt.height,Xe,Ze,Qt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,ht,Qt.width,Qt.height,0,Xe,Ze,Qt.data)}}else{O?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Xe,Ze,he[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ht,Xe,Ze,he[re]);for(let Ue=0;Ue<pe.length;Ue++){const qe=pe[Ue];O?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Xe,Ze,qe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,ht,Xe,Ze,qe.image[re])}}}h(M)&&g(t.TEXTURE_CUBE_MAP),ce.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Fe(A,M,H,ee,se,ce){const me=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),te=y(H.internalFormat,me,Z,H.normalized,H.colorSpace),ye=i.get(M),Te=i.get(H);if(Te.__renderTarget=M,!ye.__hasExternalTextures){const he=Math.max(1,M.width>>ce),ue=Math.max(1,M.height>>ce);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ce,te,he,ue,M.depth,0,me,Z,null):n.texImage2D(se,ce,te,he,ue,0,me,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),we(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,se,Te.__webglTexture,0,Qe(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,se,Te.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Gt(A,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const ee=M.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,ce=R(M.stencilBuffer,se),me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;we(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe(M),ce,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe(M),ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,A)}else{const ee=M.textures;for(let se=0;se<ee.length;se++){const ce=ee[se],me=r.convert(ce.format,ce.colorSpace),Z=r.convert(ce.type),te=y(ce.internalFormat,me,Z,ce.normalized,ce.colorSpace);we(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe(M),te,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe(M),te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function et(A,M,H){const ee=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(M.depthTexture);if(se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(se.__webglInit===void 0&&(se.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ze(t.TEXTURE_CUBE_MAP,M.depthTexture);const ye=r.convert(M.depthTexture.format),Te=r.convert(M.depthTexture.type);let he;M.depthTexture.format===rr?he=t.DEPTH_COMPONENT24:M.depthTexture.format===Ps&&(he=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,M.width,M.height,0,ye,Te,null)}}else B(M.depthTexture,0);const ce=se.__webglTexture,me=Qe(M),Z=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,te=M.depthTexture.format===Ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===rr)we(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,ce,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,ce,0);else if(M.depthTexture.format===Ps)we(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,ce,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,ce,0);else throw new Error("Unknown depthTexture format")}function dt(A){const M=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=ee}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let ee=0;ee<6;ee++)et(M.__webglFramebuffer[ee],A,ee);else{const ee=A.texture.mipmaps;ee&&ee.length>0?et(M.__webglFramebuffer[0],A,0):et(M.__webglFramebuffer,A,0)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),Gt(M.__webglDepthbuffer[ee],A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ce)}}else{const ee=A.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Gt(M.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Tt(A,M,H){const ee=i.get(A);M!==void 0&&Fe(ee.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&dt(A)}function tt(A){const M=A.texture,H=i.get(A),ee=i.get(M);A.addEventListener("dispose",_);const se=A.textures,ce=A.isWebGLCubeRenderTarget===!0,me=se.length>1;if(me||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,s.memory.textures++),ce){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let te=0;te<M.mipmaps.length;te++)H.__webglFramebuffer[Z][te]=t.createFramebuffer()}else H.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)H.__webglFramebuffer[Z]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(me)for(let Z=0,te=se.length;Z<te;Z++){const ye=i.get(se[Z]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&we(A)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<se.length;Z++){const te=se[Z];H.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const ye=r.convert(te.format,te.colorSpace),Te=r.convert(te.type),he=y(te.internalFormat,ye,Te,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),ue=Qe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ze(t.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Fe(H.__webglFramebuffer[Z][te],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Fe(H.__webglFramebuffer[Z],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let Z=0,te=se.length;Z<te;Z++){const ye=se[Z],Te=i.get(ye);let he=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Te.__webglTexture),ze(he,ye),Fe(H.__webglFramebuffer,A,ye,t.COLOR_ATTACHMENT0+Z,he,0),h(ye)&&g(he)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,ee.__webglTexture),ze(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Fe(H.__webglFramebuffer[te],A,M,t.COLOR_ATTACHMENT0,Z,te);else Fe(H.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,Z,0);h(M)&&g(Z),n.unbindTexture()}A.depthBuffer&&dt(A)}function $t(A){const M=A.textures;for(let H=0,ee=M.length;H<ee;H++){const se=M[H];if(h(se)){const ce=x(A),me=i.get(se).__webglTexture;n.bindTexture(ce,me),g(ce),n.unbindTexture()}}}const Nt=[],Nn=[];function D(A){if(A.samples>0){if(we(A)===!1){const M=A.textures,H=A.width,ee=A.height;let se=t.COLOR_BUFFER_BIT;const ce=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(A),Z=M.length>1;if(Z)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const te=A.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);const Te=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,H,ee,0,0,H,ee,se,t.NEAREST),l===!0&&(Nt.length=0,Nn.length=0,Nt.push(t.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Nt.push(ce),Nn.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Nn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);const Te=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Qe(A){return Math.min(a.maxSamples,A.samples)}function we(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ve(A){const M=s.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function oe(A,M){const H=A.colorSpace,ee=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==bd&&H!==zr&&(lt.getTransfer(H)===yt?(ee!==ea||se!==Pi)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",H)),M}function mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.getTextureUnits=W,this.setTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=ae,this.rebindTextures=Tt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nO(t,e){function n(i,a=zr){let r;const s=lt.getTransfer(a);if(i===Pi)return t.UNSIGNED_BYTE;if(i===hv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Eb)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sb)return t.BYTE;if(i===Mb)return t.SHORT;if(i===tu)return t.UNSIGNED_SHORT;if(i===dv)return t.INT;if(i===Ua)return t.UNSIGNED_INT;if(i===ya)return t.FLOAT;if(i===ar)return t.HALF_FLOAT;if(i===Tb)return t.ALPHA;if(i===Ab)return t.RGB;if(i===ea)return t.RGBA;if(i===rr)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===wb)return t.RED;if(i===mv)return t.RED_INTEGER;if(i===qs)return t.RG;if(i===gv)return t.RG_INTEGER;if(i===vv)return t.RGBA_INTEGER;if(i===jf||i===qf||i===Wf||i===Yf)if(s===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jf)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jf)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===o0||i===l0||i===c0||i===u0)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===o0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===l0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===c0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===u0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===f0||i===d0||i===h0||i===p0||i===m0||i===Sd||i===g0)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===f0||i===d0)return s===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===h0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===p0)return r.COMPRESSED_R11_EAC;if(i===m0)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sd)return r.COMPRESSED_RG11_EAC;if(i===g0)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===v0||i===_0||i===x0||i===y0||i===S0||i===M0||i===b0||i===E0||i===T0||i===A0||i===w0||i===C0||i===R0||i===D0)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===v0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===x0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===y0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===S0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===M0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===b0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===E0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===T0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===A0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===w0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===C0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===R0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===D0)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===N0||i===U0||i===L0)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===N0)return s===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===U0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===L0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P0||i===O0||i===Md||i===z0)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===P0)return r.COMPRESSED_RED_RGTC1_EXT;if(i===O0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Md)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===z0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nu?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aO=`
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

}`;class rO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new zb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pa({vertexShader:iO,fragmentShader:aO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new La(new vh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sO extends no{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null;const S=typeof XRWebGLBinding<"u",m=new rO,h={},g=n.getContextAttributes();let x=null,y=null;const R=[],E=[],T=new bt;let _=null;const w=new Ni;w.viewport=new en;const U=new Ni;U.viewport=new en;const N=[w,U],I=new gD;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=R[J];return de===void 0&&(de=new pp,R[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=R[J];return de===void 0&&(de=new pp,R[J]=de),de.getGripSpace()},this.getHand=function(J){let de=R[J];return de===void 0&&(de=new pp,R[J]=de),de.getHandSpace()};function z(J){const de=E.indexOf(J.inputSource);if(de===-1)return;const ne=R[de];ne!==void 0&&(ne.update(J.inputSource,J.frame,c||s),ne.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",P);for(let J=0;J<R.length;J++){const de=E[J];de!==null&&(E[J]=null,R[J].disconnect(de))}G=null,W=null,m.reset();for(const J in h)delete h[J];e.setRenderTarget(x),d=null,u=null,p=null,a=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",L),a.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Pe=null,Ne=null;g.depth&&(Ne=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?Ps:rr,Pe=g.stencil?nu:Ua);const Fe={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Fe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ca(u.textureWidth,u.textureHeight,{format:ea,type:Pi,depthTexture:new Tl(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(a,n,ne),a.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ca(d.framebufferWidth,d.framebufferHeight,{format:ea,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),ze.setContext(a),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function P(J){for(let de=0;de<J.removed.length;de++){const ne=J.removed[de],Pe=E.indexOf(ne);Pe>=0&&(E[Pe]=null,R[Pe].disconnect(ne))}for(let de=0;de<J.added.length;de++){const ne=J.added[de];let Pe=E.indexOf(ne);if(Pe===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=E.length){E.push(ne),Pe=Fe;break}else if(E[Fe]===null){E[Fe]=ne,Pe=Fe;break}if(Pe===-1)break}const Ne=R[Pe];Ne&&Ne.connect(ne)}}const B=new j,Y=new j;function $(J,de,ne){B.setFromMatrixPosition(de.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);const Pe=B.distanceTo(Y),Ne=de.projectionMatrix.elements,Fe=ne.projectionMatrix.elements,Gt=Ne[14]/(Ne[10]-1),et=Ne[14]/(Ne[10]+1),dt=(Ne[9]+1)/Ne[5],Tt=(Ne[9]-1)/Ne[5],tt=(Ne[8]-1)/Ne[0],$t=(Fe[8]+1)/Fe[0],Nt=Gt*tt,Nn=Gt*$t,D=Pe/(-tt+$t),Qe=D*-tt;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(D),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const we=Gt+D,Ve=et+D,oe=Nt-Qe,mt=Nn+(Pe-Qe),A=dt*et/Ve*we,M=Tt*et/Ve*we;J.projectionMatrix.makePerspective(oe,mt,A,M,we,Ve),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let de=J.near,ne=J.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),I.near=U.near=w.near=de,I.far=U.far=w.far=ne,(G!==I.near||W!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,W=I.far),I.layers.mask=J.layers.mask|6,w.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Pe=J.parent,Ne=I.cameras;ae(I,Pe);for(let Fe=0;Fe<Ne.length;Fe++)ae(Ne[Fe],Pe);Ne.length===2?$(I,w,U):I.projectionMatrix.copy(w.projectionMatrix),ge(J,I,Pe)};function ge(J,de,ne){ne===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(ne.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=F0*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return h[J]};let Ie=null;function De(J,de){if(f=de.getViewerPose(c||s),v=de,f!==null){const ne=f.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Pe=!1;ne.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let et=0;et<ne.length;et++){const dt=ne[et];let Tt=null;if(d!==null)Tt=d.getViewport(dt);else{const $t=p.getViewSubImage(u,dt);Tt=$t.viewport,et===0&&(e.setRenderTargetTextures(y,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(y))}let tt=N[et];tt===void 0&&(tt=new Ni,tt.layers.enable(et),tt.viewport=new en,N[et]=tt),tt.matrix.fromArray(dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),et===0&&(I.matrix.copy(tt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(tt)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const et=p.getDepthInformation(ne[0]);et&&et.isValid&&et.texture&&m.init(et,a.renderState)}if(Ne&&Ne.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let et=0;et<ne.length;et++){const dt=ne[et].camera;if(dt){let Tt=h[dt];Tt||(Tt=new zb,h[dt]=Tt);const tt=p.getCameraImage(dt);Tt.sourceTexture=tt}}}}for(let ne=0;ne<R.length;ne++){const Pe=E[ne],Ne=R[ne];Pe!==null&&Ne!==void 0&&Ne.update(Pe,de,c||s)}Ie&&Ie(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const ze=new Hb;ze.setAnimationLoop(De),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}}const oO=new hn,Wb=new je;Wb.set(-1,0,0,0,1,0,0,0,1);function lO(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ib(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,g,x,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),p(m,h)):h.isMeshPhongMaterial?(r(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),S(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ni&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ni&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,y=g.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(oO.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wb),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ni&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function cO(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=a[g.id];y===void 0&&(v(g),y=f(g),a[g.id]=y,g.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(g,R);const E=e.render.frame;r[g.id]!==E&&(u(g),r[g.id]=E)}function f(g){const x=p();g.__bindingPointIndex=x;const y=t.createBuffer(),R=g.__size,E=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function p(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const x=a[g.id],y=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let E=0,T=y.length;E<T;E++){const _=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,U=_.length;w<U;w++){const N=_[w];if(d(N,E,w,R)===!0){const I=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let z=0;z<G.length;z++){const L=G[z],P=S(L);typeof L=="number"||typeof L=="boolean"?(N.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,I+W,N.__data)):L.isMatrix3?(N.__data[0]=L.elements[0],N.__data[1]=L.elements[1],N.__data[2]=L.elements[2],N.__data[3]=0,N.__data[4]=L.elements[3],N.__data[5]=L.elements[4],N.__data[6]=L.elements[5],N.__data[7]=0,N.__data[8]=L.elements[6],N.__data[9]=L.elements[7],N.__data[10]=L.elements[8],N.__data[11]=0):ArrayBuffer.isView(L)?N.__data.set(new L.constructor(L.buffer,L.byteOffset,N.__data.length)):(L.toArray(N.__data,W),W+=P.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(g,x,y,R){const E=g.value,T=x+"_"+y;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:ArrayBuffer.isView(E)?R[T]=E.slice():R[T]=E.clone(),!0;{const _=R[T];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return R[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(_.equals(E)===!1)return _.copy(E),!0}}return!1}function v(g){const x=g.uniforms;let y=0;const R=16;for(let T=0,_=x.length;T<_;T++){const w=Array.isArray(x[T])?x[T]:[x[T]];for(let U=0,N=w.length;U<N;U++){const I=w[U],G=Array.isArray(I.value)?I.value:[I.value];for(let W=0,z=G.length;W<z;W++){const L=G[W],P=S(L),B=y%R,Y=B%P.boundary,$=B+Y;y+=Y,$!==0&&R-$<P.storage&&(y+=R-$),I.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=P.storage}}}const E=y%R;return E>0&&(y+=R-E),g.__size=y,g.__cache={},this}function S(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(x.boundary=16,x.storage=g.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function h(){for(const g in a)t.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:h}}const uO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function fO(){return ca===null&&(ca=new iD(uO,16,16,qs,ar),ca.name="DFG_LUT",ca.minFilter=zn,ca.magFilter=zn,ca.wrapS=Qa,ca.wrapT=Qa,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class dO{constructor(e={}){const{canvas:n=LR(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Pi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const S=d,m=new Set([vv,gv,mv]),h=new Set([Pi,Ua,tu,nu,hv,pv]),g=new Uint32Array(4),x=new Int32Array(4),y=new j;let R=null,E=null;const T=[],_=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let N=!1,I=null;this._outputColorSpace=Di;let G=0,W=0,z=null,L=-1,P=null;const B=new en,Y=new en;let $=null;const ae=new Rt(0);let ge=0,Ie=n.width,De=n.height,ze=1,J=null,de=null;const ne=new en(0,0,Ie,De),Pe=new en(0,0,Ie,De);let Ne=!1;const Fe=new Pb;let Gt=!1,et=!1;const dt=new hn,Tt=new j,tt=new en,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Nn(){return z===null?ze:1}let D=i;function Qe(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fv}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",qe,!1),D===null){const F="webgl2";if(D=Qe(F,b),D===null)throw Qe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ft("WebGLRenderer: "+b.message),b}let we,Ve,oe,mt,A,M,H,ee,se,ce,me,Z,te,ye,Te,he,ue,Xe,Ze,ht,O,fe,Q;function Me(){we=new fL(D),we.init(),O=new nO(D,we),Ve=new iL(D,we,e,O),oe=new eO(D,we),Ve.reversedDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),mt=new pL(D),A=new HP,M=new tO(D,we,oe,A,Ve,O,mt),H=new uL(U),ee=new _D(D),fe=new tL(D,ee),se=new dL(D,ee,mt,fe),ce=new gL(D,se,ee,fe,mt),Xe=new mL(D,Ve,M),Te=new aL(A),me=new BP(U,H,we,Ve,fe,Te),Z=new lO(U,A),te=new VP,ye=new YP(we),ue=new eL(U,H,oe,ce,v,l),he=new JP(U,ce,Ve),Q=new cO(D,mt,Ve,oe),Ze=new nL(D,we,mt),ht=new hL(D,we,mt),mt.programs=me.programs,U.capabilities=Ve,U.extensions=we,U.properties=A,U.renderLists=te,U.shadowMap=he,U.state=oe,U.info=mt}Me(),S!==Pi&&(w=new _L(S,n.width,n.height,a,r));const pe=new sO(U,D);this.xr=pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(b){b!==void 0&&(ze=b,this.setSize(Ie,De,!1))},this.getSize=function(b){return b.set(Ie,De)},this.setSize=function(b,F,q=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=b,De=F,n.width=Math.floor(b*ze),n.height=Math.floor(F*ze),q===!0&&(n.style.width=b+"px",n.style.height=F+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Ie*ze,De*ze).floor()},this.setDrawingBufferSize=function(b,F,q){Ie=b,De=F,ze=q,n.width=Math.floor(b*q),n.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(S===Pi){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Ge("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(ne)},this.setViewport=function(b,F,q,V){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,F,q,V),oe.viewport(B.copy(ne).multiplyScalar(ze).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,F,q,V){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,F,q,V),oe.scissor(Y.copy(Pe).multiplyScalar(ze).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){oe.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,q=!0){let V=0;if(b){let k=!1;if(z!==null){const xe=z.texture.format;k=m.has(xe)}if(k){const xe=z.texture.type,Ae=h.has(xe),_e=ue.getClearColor(),Ce=ue.getClearAlpha(),Le=_e.r,We=_e.g,nt=_e.b;Ae?(g[0]=Le,g[1]=We,g[2]=nt,g[3]=Ce,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Le,x[1]=We,x[2]=nt,x[3]=Ce,D.clearBufferiv(D.COLOR,0,x))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",qe,!1),ue.dispose(),te.dispose(),ye.dispose(),A.dispose(),H.dispose(),ce.dispose(),fe.dispose(),Q.dispose(),me.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",L_),pe.removeEventListener("sessionend",P_),fs.stop()};function re(b){b.preventDefault(),Dx("WebGLRenderer: Context Lost."),N=!0}function Ue(){Dx("WebGLRenderer: Context Restored."),N=!1;const b=mt.autoReset,F=he.enabled,q=he.autoUpdate,V=he.needsUpdate,k=he.type;Me(),mt.autoReset=b,he.enabled=F,he.autoUpdate=q,he.needsUpdate=V,he.type=k}function qe(b){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qt(b){const F=b.target;F.removeEventListener("dispose",Qt),At(F)}function At(b){Ba(b),A.remove(b)}function Ba(b){const F=A.get(b).programs;F!==void 0&&(F.forEach(function(q){me.releaseProgram(q)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,V,k,xe){F===null&&(F=$t);const Ae=k.isMesh&&k.matrixWorld.determinant()<0,_e=hw(b,F,q,V,k);oe.setMaterial(V,Ae);let Ce=q.index,Le=1;if(V.wireframe===!0){if(Ce=se.getWireframeAttribute(q),Ce===void 0)return;Le=2}const We=q.drawRange,nt=q.attributes.position;let Oe=We.start*Le,wt=(We.start+We.count)*Le;xe!==null&&(Oe=Math.max(Oe,xe.start*Le),wt=Math.min(wt,(xe.start+xe.count)*Le)),Ce!==null?(Oe=Math.max(Oe,0),wt=Math.min(wt,Ce.count)):nt!=null&&(Oe=Math.max(Oe,0),wt=Math.min(wt,nt.count));const Kt=wt-Oe;if(Kt<0||Kt===1/0)return;fe.setup(k,V,_e,q,Ce);let qt,Ut=Ze;if(Ce!==null&&(qt=ee.get(Ce),Ut=ht,Ut.setIndex(qt)),k.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*Nn()),Ut.setMode(D.LINES)):Ut.setMode(D.TRIANGLES);else if(k.isLine){let Un=V.linewidth;Un===void 0&&(Un=1),oe.setLineWidth(Un*Nn()),k.isLineSegments?Ut.setMode(D.LINES):k.isLineLoop?Ut.setMode(D.LINE_LOOP):Ut.setMode(D.LINE_STRIP)}else k.isPoints?Ut.setMode(D.POINTS):k.isSprite&&Ut.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Un=k._multiDrawStarts,be=k._multiDrawCounts,oi=k._multiDrawCount,ut=Ce?ee.get(Ce).bytesPerElement:1,Ei=A.get(V).currentProgram.getUniforms();for(let oa=0;oa<oi;oa++)Ei.setValue(D,"_gl_DrawID",oa),Ut.render(Un[oa]/ut,be[oa])}else if(k.isInstancedMesh)Ut.renderInstances(Oe,Kt,k.count);else if(q.isInstancedBufferGeometry){const Un=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,Un);Ut.renderInstances(Oe,Kt,be)}else Ut.render(Oe,Kt)};function sa(b,F,q){b.transparent===!0&&b.side===$a&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,zu(b,F,q),b.side=ir,b.needsUpdate=!0,zu(b,F,q),b.side=$a):zu(b,F,q)}this.compile=function(b,F,q=null){q===null&&(q=b),E=ye.get(q),E.init(F),_.push(E),q.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),b!==q&&b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const V=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const xe=k.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const _e=xe[Ae];sa(_e,q,k),V.add(_e)}else sa(xe,q,k),V.add(xe)}),E=_.pop(),V},this.compileAsync=function(b,F,q=null){const V=this.compile(b,F,q);return new Promise(k=>{function xe(){if(V.forEach(function(Ae){A.get(Ae).currentProgram.isReady()&&V.delete(Ae)}),V.size===0){k(b);return}setTimeout(xe,10)}we.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Gh=null;function fw(b){Gh&&Gh(b)}function L_(){fs.stop()}function P_(){fs.start()}const fs=new Hb;fs.setAnimationLoop(fw),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(b){Gh=b,pe.setAnimationLoop(b),b===null?fs.stop():fs.start()},pe.addEventListener("sessionstart",L_),pe.addEventListener("sessionend",P_),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(b,F);const q=pe.enabled===!0&&pe.isPresenting===!0,V=w!==null&&(z===null||q)&&w.begin(U,z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,F,z),E=ye.get(b,_.length),E.init(F),E.state.textureUnits=M.getTextureUnits(),_.push(E),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(dt,Sa,F.reversedDepth),et=this.localClippingEnabled,Gt=Te.init(this.clippingPlanes,et),R=te.get(b,T.length),R.init(),T.push(R),pe.enabled===!0&&pe.isPresenting===!0){const Ae=U.xr.getDepthSensingMesh();Ae!==null&&Vh(Ae,F,-1/0,U.sortObjects)}Vh(b,F,0,U.sortObjects),R.finish(),U.sortObjects===!0&&R.sort(J,de),Nt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Nt&&ue.addToRenderList(R,b),this.info.render.frame++,Gt===!0&&Te.beginShadows();const k=E.state.shadowsArray;if(he.render(k,b,F),Gt===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&w.hasRenderPass())===!1){const Ae=R.opaque,_e=R.transmissive;if(E.setupLights(),F.isArrayCamera){const Ce=F.cameras;if(_e.length>0)for(let Le=0,We=Ce.length;Le<We;Le++){const nt=Ce[Le];z_(Ae,_e,b,nt)}Nt&&ue.render(b);for(let Le=0,We=Ce.length;Le<We;Le++){const nt=Ce[Le];O_(R,b,nt,nt.viewport)}}else _e.length>0&&z_(Ae,_e,b,F),Nt&&ue.render(b),O_(R,b,F)}z!==null&&W===0&&(M.updateMultisampleRenderTarget(z),M.updateRenderTargetMipmap(z)),V&&w.end(U),b.isScene===!0&&b.onAfterRender(U,b,F),fe.resetDefaultState(),L=-1,P=null,_.pop(),_.length>0?(E=_[_.length-1],M.setTextureUnits(E.state.textureUnits),Gt===!0&&Te.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?R=T[T.length-1]:R=null,I!==null&&I.renderEnd()};function Vh(b,F,q,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Fe.intersectsSprite(b)){V&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const Ae=ce.update(b),_e=b.material;_e.visible&&R.push(b,Ae,_e,q,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Fe.intersectsObject(b))){const Ae=ce.update(b),_e=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),tt.copy(Ae.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(_e)){const Ce=Ae.groups;for(let Le=0,We=Ce.length;Le<We;Le++){const nt=Ce[Le],Oe=_e[nt.materialIndex];Oe&&Oe.visible&&R.push(b,Ae,Oe,q,tt.z,nt)}}else _e.visible&&R.push(b,Ae,_e,q,tt.z,null)}}const xe=b.children;for(let Ae=0,_e=xe.length;Ae<_e;Ae++)Vh(xe[Ae],F,q,V)}function O_(b,F,q,V){const{opaque:k,transmissive:xe,transparent:Ae}=b;E.setupLightsView(q),Gt===!0&&Te.setGlobalState(U.clippingPlanes,q),V&&oe.viewport(B.copy(V)),k.length>0&&Ou(k,F,q),xe.length>0&&Ou(xe,F,q),Ae.length>0&&Ou(Ae,F,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function z_(b,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Oe=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Ca(1,1,{generateMipmaps:!0,type:Oe?ar:Pi,minFilter:Ls,samples:Math.max(4,Ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const xe=E.state.transmissionRenderTarget[V.id],Ae=V.viewport||B;xe.setSize(Ae.z*U.transmissionResolutionScale,Ae.w*U.transmissionResolutionScale);const _e=U.getRenderTarget(),Ce=U.getActiveCubeFace(),Le=U.getActiveMipmapLevel();U.setRenderTarget(xe),U.getClearColor(ae),ge=U.getClearAlpha(),ge<1&&U.setClearColor(16777215,.5),U.clear(),Nt&&ue.render(q);const We=U.toneMapping;U.toneMapping=wa;const nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Gt===!0&&Te.setGlobalState(U.clippingPlanes,V),Ou(b,q,V),M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe),we.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let wt=0,Kt=F.length;wt<Kt;wt++){const qt=F[wt],{object:Ut,geometry:Un,material:be,group:oi}=qt;if(be.side===$a&&Ut.layers.test(V.layers)){const ut=be.side;be.side=ni,be.needsUpdate=!0,I_(Ut,q,V,Un,be,oi),be.side=ut,be.needsUpdate=!0,Oe=!0}}Oe===!0&&(M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe))}U.setRenderTarget(_e,Ce,Le),U.setClearColor(ae,ge),nt!==void 0&&(V.viewport=nt),U.toneMapping=We}function Ou(b,F,q){const V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,xe=b.length;k<xe;k++){const Ae=b[k],{object:_e,geometry:Ce,group:Le}=Ae;let We=Ae.material;We.allowOverride===!0&&V!==null&&(We=V),_e.layers.test(q.layers)&&I_(_e,F,q,Ce,We,Le)}}function I_(b,F,q,V,k,xe){b.onBeforeRender(U,F,q,V,k,xe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(U,F,q,V,b,xe),k.transparent===!0&&k.side===$a&&k.forceSinglePass===!1?(k.side=ni,k.needsUpdate=!0,U.renderBufferDirect(q,F,V,k,b,xe),k.side=ir,k.needsUpdate=!0,U.renderBufferDirect(q,F,V,k,b,xe),k.side=$a):U.renderBufferDirect(q,F,V,k,b,xe),b.onAfterRender(U,F,q,V,k,xe)}function zu(b,F,q){F.isScene!==!0&&(F=$t);const V=A.get(b),k=E.state.lights,xe=E.state.shadowsArray,Ae=k.state.version,_e=me.getParameters(b,k.state,xe,F,q,E.state.lightProbeGridArray),Ce=me.getProgramCacheKey(_e);let Le=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=H.get(b.envMap||V.environment,We),V.envMapRotation=V.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Qt),Le=new Map,V.programs=Le);let nt=Le.get(Ce);if(nt!==void 0){if(V.currentProgram===nt&&V.lightsStateVersion===Ae)return B_(b,_e),nt}else _e.uniforms=me.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,q,_e),b.onBeforeCompile(_e,U),nt=me.acquireProgram(_e,Ce),Le.set(Ce,nt),V.uniforms=_e.uniforms;const Oe=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=Te.uniform),B_(b,_e),V.needsLights=mw(b),V.lightsStateVersion=Ae,V.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=nt,V.uniformsList=null,nt}function F_(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Zf.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function B_(b,F){const q=A.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function dw(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let q=0,V=b.length;q<V;q++){const k=b[q];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function hw(b,F,q,V,k){F.isScene!==!0&&(F=$t),M.resetTextureUnits();const xe=F.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,_e=z===null?U.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:lt.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Le=H.get(V.envMap||Ae,Ce),We=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,nt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,Kt=!!q.morphAttributes.color;let qt=wa;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Un=Ut!==void 0?Ut.length:0,be=A.get(V),oi=E.state.lights;if(Gt===!0&&(et===!0||b!==P)){const zt=b===P&&V.id===L;Te.setState(V,b,zt)}let ut=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==oi.state.version||be.outputColorSpace!==_e||k.isBatchedMesh&&be.batching===!1||!k.isBatchedMesh&&be.batching===!0||k.isBatchedMesh&&be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&be.instancing===!1||!k.isInstancedMesh&&be.instancing===!0||k.isSkinnedMesh&&be.skinning===!1||!k.isSkinnedMesh&&be.skinning===!0||k.isInstancedMesh&&be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&be.instancingMorph===!1&&k.morphTexture!==null||be.envMap!==Le||V.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Te.numPlanes||be.numIntersection!==Te.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==nt||be.morphTargets!==Oe||be.morphNormals!==wt||be.morphColors!==Kt||be.toneMapping!==qt||be.morphTargetsCount!==Un||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,be.__version=V.version);let Ei=be.currentProgram;ut===!0&&(Ei=zu(V,F,k),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Ei,be));let oa=!1,vr=!1,lo=!1;const Lt=Ei.getUniforms(),Jt=be.uniforms;if(oe.useProgram(Ei.program)&&(oa=!0,vr=!0,lo=!0),V.id!==L&&(L=V.id,vr=!0),be.needsLights){const zt=dw(E.state.lightProbeGridArray,k);be.lightProbeGrid!==zt&&(be.lightProbeGrid=zt,vr=!0)}if(oa||P!==b){oe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Lt.setValue(D,"projectionMatrix",b.projectionMatrix),Lt.setValue(D,"viewMatrix",b.matrixWorldInverse);const xr=Lt.map.cameraPosition;xr!==void 0&&xr.setValue(D,Tt.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,vr=!0,lo=!0)}if(be.needsLights&&(oi.state.directionalShadowMap.length>0&&Lt.setValue(D,"directionalShadowMap",oi.state.directionalShadowMap,M),oi.state.spotShadowMap.length>0&&Lt.setValue(D,"spotShadowMap",oi.state.spotShadowMap,M),oi.state.pointShadowMap.length>0&&Lt.setValue(D,"pointShadowMap",oi.state.pointShadowMap,M)),k.isSkinnedMesh){Lt.setOptional(D,k,"bindMatrix"),Lt.setOptional(D,k,"bindMatrixInverse");const zt=k.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Lt.setValue(D,"boneTexture",zt.boneTexture,M))}k.isBatchedMesh&&(Lt.setOptional(D,k,"batchingTexture"),Lt.setValue(D,"batchingTexture",k._matricesTexture,M),Lt.setOptional(D,k,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",k._indirectTexture,M),Lt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",k._colorsTexture,M));const _r=q.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Xe.update(k,q,Ei),(vr||be.receiveShadow!==k.receiveShadow)&&(be.receiveShadow=k.receiveShadow,Lt.setValue(D,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Jt.envMapIntensity.value=F.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fO()),vr){if(Lt.setValue(D,"toneMappingExposure",U.toneMappingExposure),be.needsLights&&pw(Jt,lo),xe&&V.fog===!0&&Z.refreshFogUniforms(Jt,xe),Z.refreshMaterialUniforms(Jt,V,ze,De,E.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){const zt=be.lightProbeGrid;Jt.probesSH.value=zt.texture,Jt.probesMin.value.copy(zt.boundingBox.min),Jt.probesMax.value.copy(zt.boundingBox.max),Jt.probesResolution.value.copy(zt.resolution)}Zf.upload(D,F_(be),Jt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zf.upload(D,F_(be),Jt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Lt.setValue(D,"center",k.center),Lt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Lt.setValue(D,"normalMatrix",k.normalMatrix),Lt.setValue(D,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){const zt=V.uniformsGroups;for(let xr=0,co=zt.length;xr<co;xr++){const H_=zt[xr];Q.update(H_,Ei),Q.bind(H_,Ei)}}return Ei}function pw(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function mw(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,F,q){const V=A.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(b.texture).__webglTexture=F,A.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const q=A.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const gw=D.createFramebuffer();this.setRenderTarget=function(b,F=0,q=0){z=b,G=F,W=q;let V=null,k=!1,xe=!1;if(b){const _e=A.get(b);if(_e.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),B.copy(b.viewport),Y.copy(b.scissor),$=b.scissorTest,oe.viewport(B),oe.scissor(Y),oe.setScissorTest($),L=-1;return}else if(_e.__webglFramebuffer===void 0)M.setupRenderTarget(b);else if(_e.__hasExternalTextures)M.rebindTextures(b,A.get(b.texture).__webglTexture,A.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(_e.__boundDepthTexture!==We){if(We!==null&&A.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(b)}}const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Le=A.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?V=Le[F][q]:V=Le[F],k=!0):b.samples>0&&M.useMultisampledRTT(b)===!1?V=A.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[q]:V=Le,B.copy(b.viewport),Y.copy(b.scissor),$=b.scissorTest}else B.copy(ne).multiplyScalar(ze).floor(),Y.copy(Pe).multiplyScalar(ze).floor(),$=Ne;if(q!==0&&(V=gw),oe.bindFramebuffer(D.FRAMEBUFFER,V)&&oe.drawBuffers(b,V),oe.viewport(B),oe.scissor(Y),oe.setScissorTest($),k){const _e=A.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,q)}else if(xe){const _e=F;for(let Ce=0;Ce<b.textures.length;Ce++){const Le=A.get(b.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,q,_e)}}else if(b!==null&&q!==0){const _e=A.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,q)}L=-1},this.readRenderTargetPixels=function(b,F,q,V,k,xe,Ae,_e=0){if(!(b&&b.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){oe.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Le=b.textures[_e],We=Le.format,nt=Le.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),!Ve.textureFormatReadable(We)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(nt)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&q>=0&&q<=b.height-k&&D.readPixels(F,q,V,k,O.convert(We),O.convert(nt),xe)}finally{const Le=z!==null?A.get(z).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,V,k,xe,Ae,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(F>=0&&F<=b.width-V&&q>=0&&q<=b.height-k){oe.bindFramebuffer(D.FRAMEBUFFER,Ce);const Le=b.textures[_e],We=Le.format,nt=Le.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),!Ve.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(F,q,V,k,O.convert(We),O.convert(nt),0);const wt=z!==null?A.get(z).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,wt);const Kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await PR(D,Kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Oe),D.deleteSync(Kt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,q=0){const V=Math.pow(2,-q),k=Math.floor(b.image.width*V),xe=Math.floor(b.image.height*V),Ae=F!==null?F.x:0,_e=F!==null?F.y:0;M.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Ae,_e,k,xe),oe.unbindTexture()};const vw=D.createFramebuffer(),_w=D.createFramebuffer();this.copyTextureToTexture=function(b,F,q=null,V=null,k=0,xe=0){let Ae,_e,Ce,Le,We,nt,Oe,wt,Kt;const qt=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(q!==null)Ae=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,We=q.min.y,nt=q.isBox3?q.min.z:0;else{const Jt=Math.pow(2,-k);Ae=Math.floor(qt.width*Jt),_e=Math.floor(qt.height*Jt),b.isDataArrayTexture?Ce=qt.depth:b.isData3DTexture?Ce=Math.floor(qt.depth*Jt):Ce=1,Le=0,We=0,nt=0}V!==null?(Oe=V.x,wt=V.y,Kt=V.z):(Oe=0,wt=0,Kt=0);const Ut=O.convert(F.format),Un=O.convert(F.type);let be;F.isData3DTexture?(M.setTexture3D(F,0),be=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(M.setTexture2DArray(F,0),be=D.TEXTURE_2D_ARRAY):(M.setTexture2D(F,0),be=D.TEXTURE_2D),oe.activeTexture(D.TEXTURE0),oe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),oe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),oe.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const oi=oe.getParameter(D.UNPACK_ROW_LENGTH),ut=oe.getParameter(D.UNPACK_IMAGE_HEIGHT),Ei=oe.getParameter(D.UNPACK_SKIP_PIXELS),oa=oe.getParameter(D.UNPACK_SKIP_ROWS),vr=oe.getParameter(D.UNPACK_SKIP_IMAGES);oe.pixelStorei(D.UNPACK_ROW_LENGTH,qt.width),oe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt.height),oe.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),oe.pixelStorei(D.UNPACK_SKIP_ROWS,We),oe.pixelStorei(D.UNPACK_SKIP_IMAGES,nt);const lo=b.isDataArrayTexture||b.isData3DTexture,Lt=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Jt=A.get(b),_r=A.get(F),zt=A.get(Jt.__renderTarget),xr=A.get(_r.__renderTarget);oe.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let co=0;co<Ce;co++)lo&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(b).__webglTexture,k,nt+co),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(F).__webglTexture,xe,Kt+co)),D.blitFramebuffer(Le,We,Ae,_e,Oe,wt,Ae,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);oe.bindFramebuffer(D.READ_FRAMEBUFFER,null),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||A.has(b)){const Jt=A.get(b),_r=A.get(F);oe.bindFramebuffer(D.READ_FRAMEBUFFER,vw),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,_w);for(let zt=0;zt<Ce;zt++)lo?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,k,nt+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,k),Lt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_r.__webglTexture,xe,Kt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_r.__webglTexture,xe),k!==0?D.blitFramebuffer(Le,We,Ae,_e,Oe,wt,Ae,_e,D.COLOR_BUFFER_BIT,D.NEAREST):Lt?D.copyTexSubImage3D(be,xe,Oe,wt,Kt+zt,Le,We,Ae,_e):D.copyTexSubImage2D(be,xe,Oe,wt,Le,We,Ae,_e);oe.bindFramebuffer(D.READ_FRAMEBUFFER,null),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(be,xe,Oe,wt,Kt,Ae,_e,Ce,Ut,Un,qt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(be,xe,Oe,wt,Kt,Ae,_e,Ce,Ut,qt.data):D.texSubImage3D(be,xe,Oe,wt,Kt,Ae,_e,Ce,Ut,Un,qt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,Oe,wt,Ae,_e,Ut,Un,qt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,Oe,wt,qt.width,qt.height,Ut,qt.data):D.texSubImage2D(D.TEXTURE_2D,xe,Oe,wt,Ae,_e,Ut,Un,qt);oe.pixelStorei(D.UNPACK_ROW_LENGTH,oi),oe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),oe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ei),oe.pixelStorei(D.UNPACK_SKIP_ROWS,oa),oe.pixelStorei(D.UNPACK_SKIP_IMAGES,vr),xe===0&&F.generateMipmaps&&D.generateMipmap(be),oe.unbindTexture()},this.initRenderTarget=function(b){A.get(b).__webglFramebuffer===void 0&&M.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){G=0,W=0,z=null,oe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}function Yb(t,e,n){return Math.max(e,Math.min(n,t))}const Ip=new Mi,hO=new Mi,pO={x:"XYZ",y:"YXZ",z:"ZXY"};function Ev(t,e,n,i,a,r){Ip.copy(n),a!=null&&Ip.premultiply(hO.copy(a).invert());const s=new ie,o=new Dt,l=new ie;Ip.decompose(s,o,l),Sy(s,i.initialTargetPosition,r.translate??!0);let c;const f=r.rotate??!0;if(f===!1)o.copy(i.initialTargetQuaternion),c=i.initialTargetRotation.clone();else if(Array.isArray(f)||f===!0||typeof f!="string"&&!Array.isArray(f)&&f.x===!0&&f.y===!0&&f.z===!0)c=new nn().setFromQuaternion(o,i.initialTargetRotation.order);else if(typeof f=="string"){const p=pO[f];c=new nn().setFromQuaternion(o,p);for(const u of p){const d=u.toLowerCase();d!==f&&(c[d]=0)}c.order=i.initialTargetRotation.order,o.setFromEuler(c)}else c=_O(o,i.initialTargetRotation,f);return typeof r.scale!="object"||!r.scale.uniform?Sy(l,i.initialTargetScale,r.scale??!0):SO(l,i.initialTargetScale,r.scale),{pointerAmount:e,position:s,quaternion:o,rotation:c,scale:l,time:t}}const Co=new to,Ro=new ie,Do=new ie,mO=new ie,gO=new Dt;function xy(t,e,n){return Co.normal.copy(t),Co.constant=0,vO(Ro,Co.normal),Do.copy(Ro),Do.applyQuaternion(gO.copy(e).invert().premultiply(n)),Co.projectPoint(Ro,Ro).normalize(),Co.projectPoint(Do,Do).normalize(),(mO.crossVectors(Ro,Co.normal).dot(Do)<0?1:-1)*Ro.angleTo(Do)}function vO(t,e){if(e.x===0){t.set(1,0,0);return}if(e.y===0){t.set(0,1,0);return}if(e.z===0){t.set(0,0,1);return}t.set(-e.y,e.x,0)}function _O(t,e,n){let i="",a="";for(const o of e.order)n[o.toLowerCase()]===!1?a+=o:i+=o;const r=i+a,s=new nn().setFromQuaternion(t,r);for(const o of r){const l=o.toLowerCase();s[l]=$f(l,s[l],e[l],n)}return t.setFromEuler(s),s}const Fp=new ie,yy=new to,xO=new ie,yO=new ie;function Sy(t,e,n){if(Array.isArray(n)){switch(n.length){case 0:t.copy(e);return;case 1:t.sub(e),Zb(t,n[0]instanceof ie?n[0]:Fp.fromArray(n[0])),t.add(e);return;case 2:Fp.crossVectors(n[0]instanceof ie?n[0]:xO.fromArray(n[0]),n[1]instanceof ie?n[1]:yO.fromArray(n[1])),yy.setFromNormalAndCoplanarPoint(Fp,e),yy.projectPoint(t,t);return}return}t.x=$f("x",t.x,e.x,n),t.y=$f("y",t.y,e.y,n),t.z=$f("z",t.z,e.z,n)}function SO(t,e,n){if(Array.isArray(n))return;let i=-1/0,a=1/0;for(const s of["x","y","z"]){const o=n[s],l=e[s];if(!Array.isArray(o)||l===0)continue;const c=o[0]/l,f=o[1]/l;i=Math.max(i,Math.min(c,f)),a=Math.min(a,Math.max(c,f))}if(i===-1/0&&a===1/0)return;const r=t.length()/e.length();t.copy(e).multiplyScalar(Yb(r,i,a))}function $f(t,e,n,i){if(typeof i=="boolean")return i?e:n;if(typeof i=="string")return i===t?e:n;const a=i[t];return a===!1?n:Array.isArray(a)?Yb(e,...a):e}function ll(t=!0,e,n,i,a,r){if(t){switch(e.length){case 0:case 3:return;case 1:bO(n,...e,i,a,r);return;case 2:MO(...e,n,i,a,r);return}throw new Error(`space cannot be ${e.length}D but received (${e.map(s=>s.toArray().join("/")).join("; ")})`)}}const Qf={x:new ie(1,0,0),y:new ie(0,1,0),z:new ie(0,0,1)};function cl(t,e,n,i,a){if(i!==!1){if(i===!0){t[0]=Qf.x,t[1]=Qf.y,t[2]=Qf.z;return}if(typeof i=="string"){lc(t,e,n,i,a);return}if(Array.isArray(i)){for(const r of i)lc(t,e,n,r,a);return}i.x!==!1&&lc(t,e,n,"x",a),i.y!==!1&&lc(t,e,n,"y",a),i.z!==!1&&lc(t,e,n,"z",a)}}const _s=new Dt,hf=new nn,ji=new ie,No=new ie,xs=new ie;function lc(t,e,n,i,a){if(Array.isArray(i)?ji.set(...i):i instanceof ie?ji.copy(i):ji.copy(Qf[i]),a==="translate"){ji.applyQuaternion(e),pf(t,ji);return}if(a==="scale"){Array.isArray(i)?_s.identity():_s.setFromEuler(n),_s.premultiply(e),ji.applyQuaternion(_s),pf(t,ji);return}if(Array.isArray(i))hf.set(0,0,0);else{hf.copy(n);for(let r=2;r>=0;r--){const s=n.order[r].toLowerCase();if(hf[s]=0,s===i)break}}_s.setFromEuler(hf).premultiply(e),ji.normalize(),No.set(0,1,0),ji.dot(No)>.99&&No.set(0,0,1),xs.crossVectors(ji,No).normalize(),No.copy(xs),xs.applyQuaternion(_s),pf(t,xs),xs.crossVectors(ji,No).normalize(),xs.applyQuaternion(_s),pf(t,xs)}const My=new ie;function pf(t,e){if(t.length!==3){if(t.length===0){t.push(e.clone());return}if(t.length===1){Math.abs(t[0].dot(e))<.999&&t.push(e.clone());return}My.crossVectors(t[0],t[1]),!(Math.abs(My.dot(e))<.001)&&t.push(e.clone())}}const cc=new to,Bp=new ie,wc=new ie;function MO(t,e,n,i,a,r){Bp.crossVectors(t,e).normalize(),cc.setFromNormalAndCoplanarPoint(Bp,n);const s=r==null?0:Math.abs(Bp.dot(r));if(r==null||s<.01){cc.projectPoint(a,a);return}const l=-cc.distanceToPoint(i)/r.dot(cc.normal);if(l<0){cc.projectPoint(a,a);return}wc.copy(a),a.copy(i).addScaledVector(r,l)}function bO(t,e,n,i,a){const r=a==null?0:1-Math.abs(e.dot(a));if(a==null||r<.001){by(i,t,e);return}wc.subVectors(n,t);const s=e.dot(a),o=e.dot(wc),l=a.dot(wc),c=1-s*s,f=(o-s*l)/c;if((s*o-l)/c<0){by(i,t,e);return}wc.copy(i),i.copy(t).addScaledVector(e,f)}function by(t,e,n){t.sub(e),Zb(t,n),t.add(e)}function Zb(t,e){const n=t.dot(e);t.copy(e).multiplyScalar(n)}const Hp=new Mi,mf=new Mi,gf=new ie,EO=new ie,ys=new Dt,TO=new ie(1,1,1),Gp=[];function AO(t,e,n,i,a){return i==null?ys.identity():i.decompose(gf,ys,EO),Gp.length=0,cl(Gp,ys,n.initialTargetRotation,a.translate??!0,"translate"),mf.makeRotationFromQuaternion(ys.copy(e.initialPointerWorldQuaternion).invert()).multiply(Hp.makeTranslation(gf.copy(e.initialPointerWorldPoint).negate())),n.initialTargetParentWorldMatrix!=null&&mf.multiply(n.initialTargetParentWorldMatrix),ll(a.projectRays,Gp,e.initialPointerWorldPoint,e.pointerWorldOrigin,gf.copy(e.pointerWorldPoint),e.pointerWorldDirection),ys.copy(e.pointerWorldQuaternion),(a.rotate??!0)===!1&&ys.copy(e.initialPointerWorldQuaternion),Hp.compose(gf,ys,TO).multiply(mf).multiply(mf.compose(n.initialTargetPosition,n.initialTargetQuaternion,n.initialTargetScale)),Ev(t,1,Hp,n,i,a)}const Uo=new ie,uc=new ie,cn=new ie,Ar=new ie,wO=new ie,Ey=new ie,Lo=new ie,Ty=new Mi,fc=new Mi,vf=new Mi,ua=new Dt,dc=new Dt,Po=[];function CO(t,e,n,i,a,r){a==null?ua.identity():a.decompose(cn,ua,Ar),Po.length=0,cl(Po,ua,i.initialTargetRotation,r.translate??!0,"translate"),cl(Po,ua,i.initialTargetRotation,r.rotate??!0,"rotate"),cl(Po,ua,i.initialTargetRotation,r.scale??!0,"scale"),ll(r.projectRays,Po,e.initialPointerWorldPoint,e.pointerWorldOrigin,cn.copy(e.pointerWorldPoint),e.pointerWorldDirection),ll(r.projectRays,Po,n.initialPointerWorldPoint,n.pointerWorldOrigin,Ar.copy(n.pointerWorldPoint),n.pointerWorldDirection),Uo.copy(n.initialPointerWorldPoint).sub(e.initialPointerWorldPoint),uc.copy(Ar).sub(cn),cn.copy(Uo),i.prevTwoPointerDeltaRotation!=null&&cn.applyQuaternion(i.prevTwoPointerDeltaRotation),cn.normalize(),Ar.copy(uc).normalize(),ua.setFromUnitVectors(cn,Ar),i.prevTwoPointerDeltaRotation==null?i.prevTwoPointerDeltaRotation=new Dt:ua.multiply(i.prevTwoPointerDeltaRotation),i.prevTwoPointerDeltaRotation.copy(ua);const s=(xy(Ar,e.prevPointerWorldQuaternion,e.pointerWorldQuaternion)+xy(Ar,n.prevPointerWorldQuaternion,n.pointerWorldQuaternion))*.5+(i.prevAngle??0);if(i.prevAngle=s,ua.premultiply(dc.setFromAxisAngle(Ar,s)),vf.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale),i.initialTargetParentWorldMatrix!=null&&vf.premultiply(i.initialTargetParentWorldMatrix),typeof r.scale=="object"&&(r.scale.uniform??!1))Lo.setScalar(uc.length()/Uo.length());else{vf.decompose(wO,dc,Ey),cn.copy(Uo).applyQuaternion(dc.invert()).divide(Ey),cn.x=Math.abs(cn.x),cn.y=Math.abs(cn.y),cn.z=Math.abs(cn.z);const o=Math.max(...cn.toArray());cn.divideScalar(o),Lo.set(1,1,1),Lo.addScaledVector(cn,uc.length()/Uo.length()-1)}return Ty.makeTranslation(cn.copy(uc).multiplyScalar(.5).add(e.pointerWorldPoint)).multiply(fc.makeRotationFromQuaternion(ua)).multiply(fc.makeRotationFromQuaternion(dc.invert())).multiply(fc.makeScale(Lo.x,Lo.y,Lo.z)).multiply(fc.makeRotationFromQuaternion(dc.invert())).multiply(fc.makeTranslation(cn.copy(Uo).multiplyScalar(.5).add(e.initialPointerWorldPoint).negate())).multiply(vf),Ev(t,2,Ty,i,a,r)}const Xt=new ie,Ai=new ie,Vp=new ie,wr=new ie,Ss=new ie,wi=new Dt,ui=new Dt,Cr=new Mi,ja=new ie,Oo=[];function RO(t,e,n,i,a,r){if(a==null?wi.identity():a.decompose(Xt,wi,Ai),Oo.length=0,r.translate==="as-scale"&&cl(Oo,wi,n.initialTargetRotation,r.scale??!0,"scale"),r.translate!="as-scale"&&cl(Oo,wi,n.initialTargetRotation,r.rotate??!0,"rotate"),Cr.makeTranslation(n.initialTargetPosition),n.initialTargetParentWorldMatrix!=null&&Cr.premultiply(n.initialTargetParentWorldMatrix),wr.setFromMatrixPosition(Cr),ll(r.projectRays,Oo,e.initialPointerWorldPoint,e.pointerWorldOrigin,wr,void 0),wr.negate().add(e.initialPointerWorldPoint),Ss.setFromMatrixPosition(i),ll(r.projectRays,Oo,e.initialPointerWorldPoint,e.pointerWorldOrigin,Ss,void 0),ll(r.projectRays,Oo,e.initialPointerWorldPoint,e.pointerWorldOrigin,Ai.copy(e.pointerWorldPoint),e.pointerWorldDirection),Ss.negate().add(Ai),r.translate==="as-scale"?wi.copy(n.initialTargetQuaternion):(Xt.copy(wr),n.prevTranslateAsDeltaRotation!=null&&Xt.applyQuaternion(n.prevTranslateAsDeltaRotation),Xt.normalize(),Ai.copy(Ss).normalize(),wi.setFromUnitVectors(Xt,Ai),n.prevTranslateAsDeltaRotation==null?n.prevTranslateAsDeltaRotation=new Dt:wi.multiply(n.prevTranslateAsDeltaRotation),n.prevTranslateAsDeltaRotation.copy(wi),n.initialTargetParentWorldMatrix!=null&&(ui.setFromRotationMatrix(n.initialTargetParentWorldMatrix),wi.multiply(ui.normalize()),wi.premultiply(ui.invert())),wi.multiply(n.initialTargetQuaternion)),r.translate==="as-rotate")ja.set(1,1,1);else if(typeof r.scale=="object"&&(r.scale.uniform??!1))ja.setScalar(Ss.length()/wr.length());else if(r.translate==="as-rotate-and-scale"){Cr.compose(n.initialTargetPosition,n.initialTargetQuaternion,n.initialTargetScale),n.initialTargetParentWorldMatrix!=null&&Cr.premultiply(n.initialTargetParentWorldMatrix),Cr.decompose(Ai,ui,Vp),Xt.copy(wr).applyQuaternion(ui.invert()).divide(Vp),Xt.x=Math.abs(Xt.x),Xt.y=Math.abs(Xt.y),Xt.z=Math.abs(Xt.z);const s=Math.max(...Xt.toArray());Xt.divideScalar(s),ja.set(1,1,1),ja.addScaledVector(Xt,Ss.length()/wr.length()-1)}else n.initialTargetParentWorldMatrix!=null?(n.initialTargetParentWorldMatrix.decompose(Xt,ui,Ai),ui.multiply(n.initialTargetQuaternion)):ui.copy(n.initialTargetQuaternion),Xt.copy(wr).applyQuaternion(ui.invert()),a!=null?(a.decompose(Ai,ui,Vp),ui.multiply(n.initialTargetQuaternion)):ui.copy(n.initialTargetQuaternion),Ai.copy(Ss).applyQuaternion(ui.invert()),ja.x=Math.abs(Xt.x)<.001?1:Math.abs(Ai.x/Xt.x),ja.y=Math.abs(Xt.y)<.001?1:Math.abs(Ai.y/Xt.y),ja.z=Math.abs(Xt.z)<.001?1:Math.abs(Ai.z/Xt.z);return ja.multiply(n.initialTargetScale),Cr.compose(n.initialTargetPosition,wi,ja),Ev(t,1,Cr,n,void 0,r)}class Ay{constructor(e,n){X(this,"t1");X(this,"t2");X(this,"_position");X(this,"_quaternion");X(this,"_rotation");X(this,"_scale");this.t1=e,this.t2=n}get time(){return this.t1.time-this.t2.time}get position(){return this._position??(this._position=this.t1.position.clone().sub(this.t2.position))}get quaternion(){return this._quaternion??(this._quaternion=this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion))}get rotation(){return this._rotation??(this._rotation=new nn().setFromQuaternion(this.quaternion))}get scale(){return this._scale??(this._scale=this.t1.scale.clone().sub(this.t2.scale))}}class DO{constructor(e){X(this,"cancel");X(this,"previous");X(this,"memo");X(this,"event");X(this,"initial");X(this,"current");X(this,"first");X(this,"last");X(this,"_delta");X(this,"_offset");this.cancel=e}start(e,n){this.event=e,this.previous=void 0,this.current=n,this.initial=n,this.first=!0,this.last=!1,this.memo=void 0,this._delta=void 0,this._offset=void 0}update(e,n){this.event=e,this.previous=this.current,this.current=n,this.first=!1,this.last=!1,this._delta=void 0,this._offset=void 0}end(e){this.event=e,this.first=!1,this.last=!0,this._delta=void 0,this._offset=void 0}get delta(){if(this.previous!=null)return this._delta??(this._delta=new Ay(this.current,this.previous))}get offset(){return this._offset??(this._offset=new Ay(this.current,this.initial))}}function wy(t,e){if(t.details.type==="sphere")return!1;if(t.details.type==="lines"){const{line:n}=t.details;return e.copy(n.end).sub(n.start).normalize(),!0}return t.details.type==="screen-ray"?(e.copy(t.details.direction),!0):(e.set(0,0,-1).applyQuaternion(t.pointerQuaternion),!0)}const Cy=new ie;class NO{constructor(e,n=()=>({})){X(this,"target");X(this,"getOptions");X(this,"outputState");X(this,"latestMoveEvent");X(this,"inputState",new Map);X(this,"capturedObjects",new Map);X(this,"initialTargetPosition",new ie);X(this,"initialTargetQuaternion",new Dt);X(this,"initialTargetRotation",new nn);X(this,"initialTargetScale",new ie);X(this,"initialTargetParentWorldMatrix");X(this,"prevTwoPointerDeltaRotation");X(this,"prevTranslateAsDeltaRotation");X(this,"prevAngle");X(this,"handlers",{onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerEnd:this.onPointerEnd.bind(this)});this.target=e,this.getOptions=n,this.outputState=new DO(this.cancel.bind(this))}firstOnPointer(e){const n=this.getTarget();if(n==null)return;const i=wy(e,Cy)?Cy.clone():void 0;e.intersection.details.type,this.inputState.set(e.pointerId,{pointerWorldDirection:i,pointerWorldPoint:e.point,pointerWorldOrigin:e.pointerPosition,pointerWorldQuaternion:e.pointerQuaternion,initialPointerWorldPoint:e.point.clone(),initialPointerWorldDirection:i==null?void 0:i.clone(),initialPointerWorldQuaternion:e.pointerQuaternion.clone(),prevPointerWorldQuaternion:e.pointerQuaternion}),this.save(),this.inputState.size===1&&this.outputState.start(e,{pointerAmount:1,time:e.timeStamp,position:this.initialTargetPosition.clone(),quaternion:this.initialTargetQuaternion.clone(),rotation:this.initialTargetRotation.clone(),scale:this.initialTargetScale.clone()}),this.outputState.memo=this.apply(n)}onPointerDown(e){var n,i;((i=(n=this.getOptions()).filter)==null?void 0:i.call(n,e))!==!1&&(this.stopPropagation(e),this.capturePointer(e.pointerId,e.object)&&this.firstOnPointer(e))}onPointerMove(e){if(!this.capturedObjects.has(e.pointerId))return;this.stopPropagation(e);const n=this.inputState.get(e.pointerId);if(n==null){this.firstOnPointer(e);return}this.latestMoveEvent=e,n.pointerWorldPoint=e.point,n.prevPointerWorldQuaternion=n.pointerWorldQuaternion,n.pointerWorldQuaternion=e.pointerQuaternion,n.pointerWorldOrigin=e.pointerPosition,n.pointerWorldDirection!=null&&wy(e,n.pointerWorldDirection)}cancel(){if(this.capturedObjects.size===0)return;for(const[n,i]of this.capturedObjects)i.releasePointerCapture(n);this.capturedObjects.clear(),this.inputState.clear(),this.outputState.end(void 0);const e=this.getTarget();e!=null&&this.apply(e)}onPointerEnd(e){const n=this.capturedObjects.get(e.pointerId);n!=null&&(this.stopPropagation(e),this.releasePointer(e.pointerId,n,e))}update(e){var r,s,o;const n=this.getTarget();if(n==null||this.inputState.size===0||this.latestMoveEvent==null&&(this.getOptions().alwaysUpdate??!1)===!1)return;const i=this.getOptions();let a;if(i.translate==="as-rotate"||i.translate==="as-rotate-and-scale"||i.translate==="as-scale"){i.translate,this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0;const[l]=this.inputState.values(),c=n.matrixWorld,f=(r=n.parent)==null?void 0:r.matrixWorld;a=RO(e,l,this,c,f,i)}else if(this.inputState.size===1){this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0,this.prevTranslateAsDeltaRotation=void 0;const[l]=this.inputState.values();a=AO(e,l,this,(s=n.parent)==null?void 0:s.matrixWorld,i)}else{this.prevTranslateAsDeltaRotation=void 0;const[l,c]=this.inputState.values();a=CO(e,l,c,this,(o=n.parent)==null?void 0:o.matrixWorld,i)}this.outputState.update(this.latestMoveEvent,a),this.outputState.memo=this.apply(n),this.latestMoveEvent=void 0}getTarget(){var e;return this.target instanceof xu?this.target:(e=this.target)==null?void 0:e.current}capturePointer(e,n){if(this.capturedObjects.has(e))return!1;const{multitouch:i,translate:a}=this.getOptions();return((i??!0)===!1||typeof a=="string")&&this.capturedObjects.size===1?!1:(this.capturedObjects.set(e,n),n.setPointerCapture(e),!0)}releasePointer(e,n,i){const a=this.getTarget();if(!(a==null||!this.capturedObjects.delete(e))){if(this.inputState.delete(e),n.releasePointerCapture(e),this.inputState.size>0){this.save();return}this.outputState.end(i),this.apply(a)}}stopPropagation(e){var n;e==null||!(((n=this.getOptions())==null?void 0:n.stopPropagation)??!0)||e.stopPropagation()}apply(e){return(this.getOptions().apply??$b)(this.outputState,e)}getState(){return this.inputState.size===0?void 0:this.outputState}save(){var n,i;const e=this.getTarget();if(e!=null){e.updateWorldMatrix(!0,!1),this.prevAngle=void 0,this.prevTwoPointerDeltaRotation=void 0,this.prevTranslateAsDeltaRotation=void 0,this.initialTargetParentWorldMatrix=(n=e.parent)==null?void 0:n.matrixWorld.clone(),e.matrixAutoUpdate?(this.initialTargetPosition.copy(e.position),this.initialTargetQuaternion.copy(e.quaternion),this.initialTargetRotation.copy(e.rotation),this.initialTargetScale.copy(e.scale)):(e.matrix.decompose(this.initialTargetPosition,this.initialTargetQuaternion,this.initialTargetScale),this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion,e.rotation.order));for(const a of this.inputState.values())a.pointerWorldDirection!=null&&((i=a.initialPointerWorldDirection)==null||i.copy(a.pointerWorldDirection)),a.initialPointerWorldPoint.copy(a.pointerWorldPoint),a.initialPointerWorldQuaternion.copy(a.pointerWorldQuaternion)}}bind(e){const{onPointerDown:n,onPointerMove:i,onPointerEnd:a}=this.handlers;return e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),e.addEventListener("pointercancel",a),e.addEventListener("pointerup",a),()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),e.removeEventListener("pointercancel",a),e.removeEventListener("pointerup",a),this.cancel()}}capture(e,n){return this.capturePointer(e,n)?()=>this.releasePointer(e,n,void 0):UO}}function UO(){}function $b(t,e){e.position.copy(t.current.position),e.rotation.order=t.current.rotation.order,e.quaternion.copy(t.current.quaternion),e.scale.copy(t.current.scale)}class LO{constructor(e,n){X(this,"target");X(this,"getOptions");X(this,"handles",[]);X(this,"hoveredTagMap",new Map);X(this,"hoverSubscriptions",[]);X(this,"applySubscriptions",[]);X(this,"space");this.target=e,this.getOptions=n}getSpace(){return this.space??"world"}getTarget(){return this.target instanceof xu?this.target:this.target.current}getHandleOptions(e,n){var r;const i=(r=this.getOptions)==null?void 0:r.call(this),a=n==null?void 0:n();return{...i,...a,apply:(s,o)=>{var l;return this.onApply(e,s,o),(l=(a==null?void 0:a.apply)??(i==null?void 0:i.apply)??$b)==null?void 0:l(s,o)}}}registerHandle(e,n,i){const a={object:n,store:e,tag:i};this.handles.push(a);const r=e.bind(n),s=this.onPointerEnter.bind(this,i),o=this.onPointerLeave.bind(this);return n.addEventListener("pointerenter",s),n.addEventListener("pointerleave",o),()=>{const l=this.handles.indexOf(a);l!=-1&&this.handles.splice(l,1),r(),e.cancel()}}subscribeHover(e){return this.hoverSubscriptions.push(e),e(Array.from(this.hoveredTagMap.values())),()=>{const n=this.hoverSubscriptions.indexOf(e);n!==-1&&this.hoverSubscriptions.splice(n,1)}}subscribeApply(e){return this.applySubscriptions.push(e),()=>{const n=this.applySubscriptions.indexOf(e);n!==-1&&this.applySubscriptions.splice(n,1)}}update(e){for(const{store:n}of this.handles)n.update(e)}onPointerEnter(e,n){this.hoveredTagMap.set(n.pointerId,e),this.updateHover()}onPointerLeave(e){this.hoveredTagMap.delete(e.pointerId),this.updateHover()}updateHover(){const e=Array.from(this.hoveredTagMap.values());for(const n of this.hoverSubscriptions)n(e)}onApply(e,n,i){for(const a of this.applySubscriptions)a(e,n,i)}}const Wn={depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0};function aa(t,e,n,{color:i,hoverColor:a,hoverOpacity:r,opacity:s,disabled:o=!1}){if(a==null&&r==null||o){e.color.set(i),e.opacity=s??1,o&&(e.opacity*=.5,e.color.lerp(new bw(1,1,1),.5));return}return a??(a=i),t.subscribeHover(l=>{const c=l.some(f=>f.includes(n));e.color.set(c?a:i),e.opacity=(c?r:s)??1})}const _f=new Dt,Qb=new P1;Qb.setAttribute("position",new z1([-1e3,0,0,1e3,0,0],3));class kp extends L1{constructor(n,i){super(Qb);X(this,"context");X(this,"rotationOffset");this.context=n,this.rotationOffset=i,this.renderOrder=1/0}update(){this.quaternion.setFromEuler(this.rotationOffset);const n=this.context.getTarget();this.context.getSpace()==="world"&&n!=null&&(n.getWorldQuaternion(_f).invert(),this.quaternion.premultiply(_f))}bind(n){this.material=new O1({...Wn,color:this.material.color??"white",opacity:this.material.opacity??1});const i=this.context.subscribeHover(r=>{const s=r.some(o=>o.includes(n));this.visible=s}),a=this.context.subscribeApply((r,s)=>{if(s.last){this.position.set(0,0,0);return}this.position.copy(s.initial.position).sub(s.current.position);const o=this.context.getTarget();o!=null&&(_f.copy(o.quaternion).invert(),this.position.applyQuaternion(_f))});return()=>{this.material.dispose(),i(),a()}}}class dr extends Aa{constructor(n,i,a,r){super();X(this,"context");X(this,"axis");X(this,"store");X(this,"options");X(this,"tag");this.context=n,this.axis=i,this.tag=(a??"")+i,this.store=new NO(n.target,()=>n.getHandleOptions(this.tag,r))}}function hr(t,e=!0){if(e===!1)return{options:!1,disabled:!0};if(e===!0){const a={x:!1,y:!1,z:!1,e:!1};for(const r of t)a[r]=!0;return{options:a,disabled:!1}}if(e==="disabled")return{options:{x:!0,y:!0,z:!0,e:!0},disabled:!0};if(typeof e=="string")return{options:e===t?{x:!1,y:!1,z:!1,e:!1,[t]:!0}:!1,disabled:!1};const n={x:!1,y:!1,z:!1,e:!1};let i=!1;for(const a of t){let r=e[a]??!0;if(r===!1)return{options:!1,disabled:!0};r==="disabled"&&(i=!0,r=!0),n[a]=r}return{options:n,disabled:i}}const Ry=new ie,Dy=new ie;function Tv(t,e,n,i){if(!n)return i;let a;return e instanceof Ew?a=(e.top-e.bottom)/e.zoom:(e.getWorldPosition(Ry),t.getWorldPosition(Dy),a=Ry.distanceTo(Dy)*Math.min(1.9*Math.tan(Math.PI*e.fov/360)/e.zoom,7)),a*i/4}const Kb=new $c(0,.04,.1,12);Kb.translate(0,.05,0);const Jb=new $c(.0075,.0075,.5,3);Jb.translate(0,.25,0);const PO=new nn(0,0,-Math.PI/2),OO=new nn(0,0,Math.PI/2);class zo extends dr{constructor(n,i,a="",r,s=!1,o=!0){super(n,i,a,()=>({scale:!1,rotate:!1,translate:r!=null?[r]:this.options,multitouch:!1}));X(this,"invert");X(this,"showArrowBody");this.invert=s,this.showArrowBody=o}bind(n,i,a){const{options:r,disabled:s}=hr(this.axis,a);if(r===!1)return;this.options=r;const o=this.invert?OO:PO,l=new ai(Wn),c=aa(this.context,l,this.tag,{color:n,hoverColor:i,disabled:s}),f=new Zt(Kb,l);f.renderOrder=1/0,f.position.x=this.invert?-.5:.5,f.rotation.copy(o),this.add(f);let p,u;if(this.showArrowBody){const S=new ai(Wn);p=aa(this.context,S,this.tag,{color:n,hoverColor:16777024,disabled:s}),u=new Zt(Jb,S),u.renderOrder=1/0,u.rotation.copy(o),this.add(u)}const d=new Zt(new $c(.13,0,.6,4));d.pointerEventsOrder=1/0,d.position.x=this.invert?-.3:.3,d.rotation.copy(o),d.visible=!1,this.add(d);const v=s?void 0:this.context.registerHandle(this.store,d,this.tag);return()=>{l.dispose(),v==null||v(),c==null||c(),p==null||p(),this.remove(f),u!=null&&this.remove(u),this.remove(d)}}}class Xp extends dr{constructor(e,n,i="",a){super(e,n,i,()=>({translate:a??this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e,n,i){const{options:a,disabled:r}=hr(this.axis,i);if(a===!1)return;this.options=a;const s=new ai(Wn),o=aa(this.context,s,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:n,disabled:r}),l=new Zt(new Qc(.2,.2,.01),s);l.renderOrder=1/0,l.pointerEventsOrder=1/0,l.position.set(.15,.15,0);const c=r?void 0:this.context.registerHandle(this.store,l,this.tag);return this.add(l),()=>{s.dispose(),l.geometry.dispose(),c==null||c(),o==null||o(),this.remove(l)}}}new ie;const Ny=new Dt;function zO(t,e){const n=new Zt(new vd(.01,2),new ai(Wn));n.renderOrder=1/0,n.visible=!1,t.add(n);const i=new Zt(new vd(.01,2),new ai(Wn));i.renderOrder=1/0,i.visible=!1,t.add(i);const a=new P1;a.setAttribute("position",new z1([0,0,0,1,1,1],3));const r=new L1(a,new O1(Wn));r.renderOrder=1/0,r.visible=!1,t.add(r);const s=e.subscribeApply((o,l)=>{i.position.set(0,0,0),n.position.copy(l.initial.position).sub(l.current.position);const c=e.getTarget();c!=null&&(Ny.copy(c.quaternion).invert(),n.position.applyQuaternion(Ny)),r.position.set(0,0,0),r.scale.copy(n.position),n.visible=!l.last,r.visible=!l.last,i.visible=!l.last});return()=>{n.geometry.dispose(),n.material.dispose(),i.geometry.dispose(),i.material.dispose(),r.geometry.dispose(),r.material.dispose(),t.remove(n),t.remove(i),t.remove(r),s()}}class IO extends dr{constructor(e){super(e,"xyz","",()=>({translate:this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e){const{options:n,disabled:i}=hr(this.axis,e);if(n===!1)return;this.options=n;const a=new ai(Wn),r=aa(this.context,a,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,hoverOpacity:1,disabled:i}),s=new Zt(new vd(.1,0),a);s.renderOrder=1/0,this.add(s);const o=new Zt(new vd(.2,0));o.pointerEventsOrder=1/0,o.visible=!1,this.add(o);const l=i?void 0:this.context.registerHandle(this.store,o,this.tag);return()=>{a.dispose(),s.geometry.dispose(),o.geometry.dispose(),l==null||l(),r==null||r(),this.remove(s),this.remove(o)}}}const Uy=new ie,Bn=new Dt,Ly=new Dt,Py=new Dt().setFromEuler(new nn(0,0,Math.PI/2)),Oy=new Dt().setFromEuler(new nn(0,-Math.PI/2,0)),FO=new Dt,BO=new Dt().setFromEuler(new nn(0,-Math.PI/2,0)),HO=new Dt().setFromEuler(new nn(Math.PI/2,0,0));class GO extends Aa{constructor(n,i,a){super();X(this,"context");X(this,"size");X(this,"fixed");X(this,"free");X(this,"translationX");X(this,"translationY");X(this,"translationZ");X(this,"translationNegX");X(this,"translationNegY");X(this,"translationNegZ");X(this,"translationXY");X(this,"translationYZ");X(this,"translationXZ");X(this,"scaleGroup",new Aa);X(this,"xAxis",new ie);X(this,"yAxis",new ie);X(this,"zAxis",new ie);X(this,"negXAxis",new ie);X(this,"negYAxis",new ie);X(this,"negZAxis",new ie);this.context=n,this.size=i,this.fixed=a,this.add(this.scaleGroup),this.free=new IO(this.context),this.scaleGroup.add(this.free),this.translationX=new zo(this.context,"x",void 0,this.xAxis),this.scaleGroup.add(this.translationX),this.translationY=new zo(this.context,"y",void 0,this.yAxis),this.scaleGroup.add(this.translationY),this.translationZ=new zo(this.context,"z",void 0,this.zAxis),this.scaleGroup.add(this.translationZ),this.translationNegX=new zo(this.context,"x",void 0,this.negXAxis,!0,!1),this.scaleGroup.add(this.translationNegX),this.translationNegY=new zo(this.context,"y",void 0,this.negYAxis,!0,!1),this.scaleGroup.add(this.translationNegY),this.translationNegZ=new zo(this.context,"z",void 0,this.negZAxis,!0,!1),this.scaleGroup.add(this.translationNegZ),this.translationXY=new Xp(this.context,"xy",void 0,[this.xAxis,this.yAxis]),this.scaleGroup.add(this.translationXY),this.translationXZ=new Xp(this.context,"xz",void 0,[this.xAxis,this.zAxis]),this.scaleGroup.add(this.translationXZ),this.translationYZ=new Xp(this.context,"yz",void 0,[this.yAxis,this.zAxis]),this.scaleGroup.add(this.translationYZ)}update(n){this.updateWorldMatrix(!0,!1),this.xAxis.set(1,0,0),this.yAxis.set(0,1,0),this.zAxis.set(0,0,1),this.free.quaternion.identity(),this.translationX.quaternion.copy(Ly),this.translationY.quaternion.copy(Py),this.translationZ.quaternion.copy(Oy),this.translationNegX.quaternion.copy(Ly),this.translationNegY.quaternion.copy(Py),this.translationNegZ.quaternion.copy(Oy),this.translationXY.quaternion.copy(FO),this.translationYZ.quaternion.copy(BO),this.translationXZ.quaternion.copy(HO);const i=this.context.getSpace(),a=this.context.getTarget();i=="world"&&a!=null?(a.getWorldQuaternion(Bn).invert(),this.free.quaternion.premultiply(Bn),this.translationX.quaternion.premultiply(Bn),this.translationY.quaternion.premultiply(Bn),this.translationZ.quaternion.premultiply(Bn),this.translationNegX.quaternion.premultiply(Bn),this.translationNegY.quaternion.premultiply(Bn),this.translationNegZ.quaternion.premultiply(Bn),this.translationXY.quaternion.premultiply(Bn),this.translationYZ.quaternion.premultiply(Bn),this.translationXZ.quaternion.premultiply(Bn),a.parent!=null&&(a.parent.getWorldQuaternion(Bn).invert(),this.xAxis.applyQuaternion(Bn),this.yAxis.applyQuaternion(Bn),this.zAxis.applyQuaternion(Bn))):a!=null&&(this.xAxis.applyQuaternion(a.quaternion),this.yAxis.applyQuaternion(a.quaternion),this.zAxis.applyQuaternion(a.quaternion)),this.negXAxis.copy(this.xAxis).negate(),this.negYAxis.copy(this.yAxis).negate(),this.negZAxis.copy(this.zAxis).negate(),this.scaleGroup.scale.setScalar(1),a!=null&&(a.getWorldScale(Uy),this.scaleGroup.scale.divide(Uy)),this.scaleGroup.scale.multiplyScalar(Tv(this,n,this.fixed??!0,this.size??1))}bind(n){const i=zO(this,this.context),a=this.translationX.bind(16711680,16776960,n),r=this.translationY.bind(65280,16776960,n),s=this.translationZ.bind(255,16776960,n),o=this.translationNegX.bind(16711680,16776960,n),l=this.translationNegY.bind(65280,16776960,n),c=this.translationNegZ.bind(255,16776960,n),f=this.translationXY.bind(255,16776960,n),p=this.translationYZ.bind(16711680,16776960,n),u=this.translationXZ.bind(65280,16776960,n),d=this.free.bind(n);return()=>{i(),a==null||a(),r==null||r(),s==null||s(),o==null||o(),l==null||l(),c==null||c(),f==null||f(),p==null||p(),u==null||u(),d==null||d()}}}const VO=new nn(0,0,-Math.PI/2),kO=new nn(0,0,Math.PI/2);class Io extends dr{constructor(n,i,a="",r=!1,s=!0){super(n,i,a,()=>({scale:this.options,rotate:!1,translate:"as-scale",multitouch:!1}));X(this,"invert");X(this,"showHandleLine");this.invert=r,this.showHandleLine=s}bind(n,i,a){const{options:r,disabled:s}=hr(this.axis,a);if(r===!1)return;this.options=r;const o=this.invert?kO:VO,l=new Aa;l.position.x=this.invert?-.5:.5,l.rotation.copy(o),this.add(l);const c=new ai(Wn),f=aa(this.context,c,this.tag,{color:n,hoverColor:i,disabled:s}),p=new Zt(new Qc(.08,.08,.08),c);p.renderOrder=1/0,p.rotation.copy(o),l.add(p);let u,d,v;if(this.showHandleLine){v=new Aa,v.rotation.copy(o),this.add(v);const g=new ai(Wn);u=aa(this.context,g,this.tag,{color:n,hoverColor:i,disabled:s}),d=new Zt(new $c(.0075,.0075,.5,3),g),d.renderOrder=1/0,d.position.y=.25,v.add(d)}const S=new Aa;S.visible=!1,S.rotation.copy(o),S.position.x=this.invert?-.3:.3,this.add(S);const m=new Zt(new $c(.2,0,.5,4));m.pointerEventsOrder=1/0,m.position.y=.04,S.add(m);const h=s?void 0:this.context.registerHandle(this.store,m,this.tag);return()=>{c.dispose(),m.geometry.dispose(),p.geometry.dispose(),d==null||d.geometry.dispose(),h==null||h(),f==null||f(),u==null||u(),v!=null&&this.remove(v),this.remove(S),this.remove(l)}}}class jp extends dr{constructor(e,n,i=""){super(e,n,i,()=>({translate:"as-scale",scale:this.options,rotate:!1,multitouch:!1}))}bind(e,n,i){const{options:a,disabled:r}=hr(this.axis,i);if(a===!1)return;this.options=a;const s=new ai(Wn),o=aa(this.context,s,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:n,disabled:r}),l=new Zt(new Qc(.2,.2,.01),s);l.renderOrder=1/0,l.pointerEventsOrder=1/0,l.position.set(.15,.15,0);const c=r?void 0:this.context.registerHandle(this.store,l,this.tag);return this.add(l),()=>{s.dispose(),l.geometry.dispose(),c==null||c(),o==null||o(),this.remove(l)}}}const XO=new nn(0,0,-Math.PI/2),jO=new nn(0,0,Math.PI/2);class Fo extends dr{constructor(n,i="",a,r=!1){super(n,"xyz",i,()=>({scale:{uniform:!0,...this.options},rotate:!1,translate:"as-scale",multitouch:!1}));X(this,"actualAxis");X(this,"invert");this.actualAxis=a,this.invert=r}bind(n,i,a){const{options:r,disabled:s}=hr(this.actualAxis,a);if(r===!1)return;this.options=r;const o=this.invert?jO:XO,l=new Aa;l.position.x=this.invert?-.7:.7,l.rotation.copy(o),this.add(l);const c=new ai(Wn),f=aa(this.context,c,this.tag,{color:n,hoverColor:i,opacity:.5,hoverOpacity:1,disabled:s}),p=new Zt(new Qc(.08,.08,.08),c);p.renderOrder=1/0,p.rotation.copy(o),l.add(p);const u=new Zt(new Qc(.15,.15,.15),c);u.visible=!1,u.pointerEventsOrder=1/0,u.rotation.copy(o),l.add(u);const d=s?void 0:this.context.registerHandle(this.store,u,this.tag);return()=>{c.dispose(),p.geometry.dispose(),d==null||d(),f==null||f(),this.remove(l)}}}const zy=new ie;class qO extends Aa{constructor(n,i,a){super();X(this,"context");X(this,"size");X(this,"fixed");X(this,"scaleX");X(this,"scaleY");X(this,"scaleZ");X(this,"scaleNegX");X(this,"scaleNegY");X(this,"scaleNegZ");X(this,"translationX");X(this,"translationY");X(this,"translationZ");X(this,"translationNegX");X(this,"translationNegY");X(this,"translationNegZ");X(this,"translationXY");X(this,"translationYZ");X(this,"translationXZ");this.context=n,this.size=i,this.fixed=a,this.scaleX=new Fo(this.context,void 0,"x"),this.add(this.scaleX),this.scaleY=new Fo(this.context,void 0,"y"),this.scaleY.rotation.z=Math.PI/2,this.add(this.scaleY),this.scaleZ=new Fo(this.context,void 0,"z"),this.scaleZ.rotation.y=-Math.PI/2,this.add(this.scaleZ),this.scaleNegX=new Fo(this.context,void 0,"x",!0),this.add(this.scaleNegX),this.scaleNegY=new Fo(this.context,void 0,"y",!0),this.scaleNegY.rotation.z=Math.PI/2,this.add(this.scaleNegY),this.scaleNegZ=new Fo(this.context,void 0,"z",!0),this.scaleNegZ.rotation.y=-Math.PI/2,this.add(this.scaleNegZ),this.translationX=new Io(this.context,"x"),this.add(this.translationX),this.translationY=new Io(this.context,"y"),this.translationY.rotation.z=Math.PI/2,this.add(this.translationY),this.translationZ=new Io(this.context,"z"),this.translationZ.rotation.y=-Math.PI/2,this.add(this.translationZ),this.translationNegX=new Io(this.context,"x",void 0,!0,!1),this.add(this.translationNegX),this.translationNegY=new Io(this.context,"y",void 0,!0,!1),this.translationNegY.rotation.z=Math.PI/2,this.add(this.translationNegY),this.translationNegZ=new Io(this.context,"z",void 0,!0,!1),this.translationNegZ.rotation.y=-Math.PI/2,this.add(this.translationNegZ),this.translationXY=new jp(this.context,"xy"),this.add(this.translationXY),this.translationXZ=new jp(this.context,"xz"),this.translationXZ.rotation.x=Math.PI/2,this.add(this.translationXZ),this.translationYZ=new jp(this.context,"yz"),this.translationYZ.rotation.y=-Math.PI/2,this.add(this.translationYZ)}update(n){this.updateWorldMatrix(!0,!1),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(zy),this.scale.divide(zy)),this.scale.multiplyScalar(Tv(this,n,this.fixed??!0,this.size??1))}bind(n){const i=this.scaleX.bind(16777215,16776960,n),a=this.scaleY.bind(16777215,16776960,n),r=this.scaleZ.bind(16777215,16776960,n),s=this.scaleNegX.bind(16777215,16776960,n),o=this.scaleNegY.bind(16777215,16776960,n),l=this.scaleNegZ.bind(16777215,16776960,n),c=this.translationX.bind(16711680,16776960,n),f=this.translationY.bind(65280,16776960,n),p=this.translationZ.bind(255,16776960,n),u=this.translationNegX.bind(16711680,16776960,n),d=this.translationNegY.bind(65280,16776960,n),v=this.translationNegZ.bind(255,16776960,n),S=this.translationXY.bind(255,16776960,n),m=this.translationYZ.bind(16711680,16776960,n),h=this.translationXZ.bind(65280,16776960,n);return()=>{c==null||c(),f==null||f(),p==null||p(),u==null||u(),d==null||d(),v==null||v(),S==null||S(),m==null||m(),h==null||h(),i==null||i(),a==null||a(),r==null||r(),s==null||s(),o==null||o(),l==null||l()}}}const Iy={x:{vector1:new ie(0,0,-1),vector2:new ie(0,-1,0),rotationOffset:new Dt,axis:[1,0,0]},y:{vector1:new ie(0,0,-1),vector2:new ie(-1,0,-1),rotationOffset:new Dt().setFromEuler(new nn(0,0,Math.PI/2)),axis:[0,1,0]},z:{vector1:new ie(-1,0,0),vector2:new ie(0,-1,0),rotationOffset:new Dt().setFromEuler(new nn(0,Math.PI/2,0)),axis:[0,0,1]}},qp=new ie,hc=new ie,xf=new ie,Ms=new ie,qi=new Dt;class Wp extends dr{constructor(n,i,a=""){super(n,i,a,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}));X(this,"direction",new ie(1,0,0))}update(n){const{rotationOffset:i,vector1:a,vector2:r}=Iy[this.axis];n.getWorldPosition(qp),this.getWorldPosition(hc).sub(qp),xf.copy(a),Ms.copy(r);const s=this.context.getTarget(),o=this.context.getSpace();o==="local"&&s!=null&&(s.getWorldQuaternion(qi),xf.applyQuaternion(qi),Ms.applyQuaternion(qi)),Ms.crossVectors(xf,Ms);const l=hc.dot(Ms);Ms.multiplyScalar(l),hc.sub(Ms),this.quaternion.setFromUnitVectors(xf,hc.normalize()),o==="local"&&s!=null&&(s.getWorldQuaternion(qi),this.quaternion.multiply(qi)),this.quaternion.multiply(i),(s==null?void 0:s.parent)!=null?(s.parent.matrixWorld.decompose(qp,qi,hc),qi.invert(),this.quaternion.premultiply(qi)):qi.identity(),this.store.getState()==null&&(this.direction.fromArray(Iy[this.axis].axis),this.direction.applyQuaternion(o==="local"&&s!=null?s==null?void 0:s.quaternion:qi)),s!=null&&this.quaternion.premultiply(qi.copy(s.quaternion).invert())}bind(n,i){const{options:a,disabled:r}=hr(this.axis,i);if(a===!1)return;this.options=a;const s=new ai(Wn),o=aa(this.context,s,this.tag,{color:n,hoverColor:16776960,disabled:r}),l=new Zt(Av(.5,.5),s);l.renderOrder=1/0,this.add(l);const c=new Zt(new Kg(.5,.1,4,24));c.visible=!1,c.pointerEventsOrder=1/0,c.rotation.set(0,-Math.PI/2,-Math.PI/2),this.add(c);const f=r?void 0:this.context.registerHandle(this.store,c,this.tag);return()=>{s.dispose(),c.geometry.dispose(),l.geometry.dispose(),f==null||f(),o==null||o(),this.remove(c),this.remove(l)}}}const Yp=new ie,Zp=new ie,WO=new ie(1,0,0),pc=new Dt;class YO extends dr{constructor(e,n=""){super(e,"xyz",n,()=>({scale:!1,translate:"as-rotate",rotate:this.options,multitouch:!1}))}update(e){e.getWorldPosition(Yp),this.getWorldPosition(Zp).sub(Yp),this.quaternion.setFromUnitVectors(WO,Zp.normalize());const n=this.context.getTarget();(n==null?void 0:n.parent)!=null&&(n.parent.matrixWorld.decompose(Yp,pc,Zp),pc.invert(),this.quaternion.premultiply(pc)),n!=null&&(pc.copy(n.quaternion).invert(),this.quaternion.premultiply(pc))}bind(e){const{options:n,disabled:i}=hr(this.axis,e);if(n===!1)return;this.options=n;const a=new ai(Wn),r=aa(this.context,a,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,disabled:i}),s=new Zt(Av(.5,1),a);s.renderOrder=1/0,this.add(s);const o=new Zt(new I1(.25,10,8));o.visible=!1,o.pointerEventsOrder=1/0,this.add(o);const l=i?void 0:this.context.registerHandle(this.store,o,this.tag);return()=>{this.pointerEvents="none",a.dispose(),o.geometry.dispose(),s.geometry.dispose(),l==null||l(),r==null||r(),this.remove(o),this.remove(s)}}}const $p=new ie,ZO=new ie,$O=new ie(1,0,0),Bo=new Dt;class QO extends dr{constructor(n,i=""){super(n,"e",i,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}));X(this,"direction",new ie(1,0,0))}update(n){n.getWorldPosition($p),this.getWorldPosition(this.direction).sub($p).normalize(),this.quaternion.setFromUnitVectors($O,this.direction);const i=this.context.getTarget();(i==null?void 0:i.parent)!=null&&(i.parent.matrixWorld.decompose($p,Bo,ZO),Bo.invert(),this.quaternion.premultiply(Bo),this.direction.applyQuaternion(Bo)),i!=null&&(Bo.copy(i.quaternion).invert(),this.quaternion.premultiply(Bo)),this.direction.negate()}bind(n){const{options:i,disabled:a}=hr(this.axis,n);if(i===!1)return;this.options=i;const r=new ai(Wn),s=aa(this.context,r,this.tag,{color:16776960,hoverColor:16776960,opacity:.5,disabled:a}),o=new Zt(Av(.75,1),r);o.renderOrder=1/0,this.add(o);const l=new Zt(new Kg(.75,.1,2,24),new ai({color:"white"}));l.visible=!1,l.rotation.y=Math.PI/2,l.pointerEventsOrder=1/0,this.add(l);const c=a?void 0:this.context.registerHandle(this.store,l,this.tag);return()=>{r.dispose(),l.geometry.dispose(),o.geometry.dispose(),c==null||c(),s==null||s(),this.remove(l),this.remove(o)}}}function Av(t,e){const n=new Kg(t,.0075,3,64,e*Math.PI*2);return n.rotateY(Math.PI/2),n.rotateX(Math.PI/2),n}const Fy=new ie;class KO extends Aa{constructor(n,i,a){super();X(this,"context");X(this,"fixed");X(this,"size");X(this,"rotationX");X(this,"rotationY");X(this,"rotationZ");X(this,"free");X(this,"screen");this.context=n,this.fixed=i,this.size=a,this.rotationX=new Wp(this.context,"x"),this.add(this.rotationX),this.rotationY=new Wp(this.context,"y"),this.add(this.rotationY),this.rotationZ=new Wp(this.context,"z"),this.add(this.rotationZ),this.free=new YO(this.context),this.add(this.free),this.screen=new QO(this.context),this.add(this.screen)}update(n){this.updateWorldMatrix(!0,!1),this.rotationX.update(n),this.rotationY.update(n),this.rotationZ.update(n),this.free.update(n),this.screen.update(n),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(Fy),this.scale.divide(Fy)),this.scale.multiplyScalar(Tv(this,n,this.fixed??!0,this.size??1))}bind(n){const i=this.rotationX.bind(16711680,n),a=this.rotationY.bind(65280,n),r=this.rotationZ.bind(255,n),s=this.screen.bind(n),o=this.free.bind(n);return()=>{i==null||i(),a==null||a(),r==null||r(),s==null||s(),o==null||o()}}}const JO=new nn,ez=new nn(0,0,Math.PI/2),tz=new nn(0,-Math.PI/2,0);class nz extends Aa{constructor(n){super();X(this,"xAxisHighlight");X(this,"yAxisHighlight");X(this,"zAxisHighlight");X(this,"handles");X(this,"context");this.context=new LO(this,n),this.xAxisHighlight=new kp(this.context,JO),this.add(this.xAxisHighlight),this.yAxisHighlight=new kp(this.context,ez),this.add(this.yAxisHighlight),this.zAxisHighlight=new kp(this.context,tz),this.add(this.zAxisHighlight)}set space(n){this.context.space=n}get space(){return this.context.space}update(n,i){var a;this.context.update(n),this.xAxisHighlight.update(),this.yAxisHighlight.update(),this.zAxisHighlight.update(),(a=this.handles)==null||a.update(i)}bind(n,i){const a=this.xAxisHighlight.bind("x"),r=this.yAxisHighlight.bind("y"),s=this.zAxisHighlight.bind("z");switch(n){case"rotate":this.handles=new KO(this.context);break;case"scale":this.handles=new qO(this.context);break;case"translate":this.handles=new GO(this.context);break}this.add(this.handles);const o=this.handles.bind(i);return()=>{this.handles!=null&&this.remove(this.handles),this.handles=void 0,o(),a(),r(),s()}}}new ie(0,0,1);new ie(0,1,0);new ie;new ie;new ie;class iz{constructor(e){X(this,"nativeEvent");X(this,"NONE",0);X(this,"CAPTURING_PHASE",1);X(this,"AT_TARGET",2);X(this,"BUBBLING_PHASE",3);X(this,"relatedTarget",null);this.nativeEvent=e}get altKey(){return this.getFromNative("altKey",!1)}get button(){return this.getFromNative("button",0)}get buttons(){return this.getFromNative("buttons",0)}get clientX(){return this.getFromNative("clientX",0)}get clientY(){return this.getFromNative("clientY",0)}get ctrlKey(){return this.getFromNative("ctrlKey",!1)}get layerX(){return this.getFromNative("layerX",0)}get layerY(){return this.getFromNative("layerY",0)}get metaKey(){return this.getFromNative("metaKey",!1)}get movementX(){return this.getFromNative("movementX",0)}get movementY(){return this.getFromNative("movementY",0)}get offsetX(){return this.getFromNative("offsetX",0)}get offsetY(){return this.getFromNative("offsetY",0)}get pageX(){return this.getFromNative("pageX",0)}get pageY(){return this.getFromNative("pageY",0)}get screenX(){return this.getFromNative("screenX",0)}get screenY(){return this.getFromNative("screenY",0)}get shiftKey(){return this.getFromNative("shiftKey",!1)}get x(){return this.getFromNative("x",0)}get y(){return this.getFromNative("y",0)}get detail(){return this.getFromNative("detail",0)}get view(){return this.getFromNative("view",null)}get which(){return this.getFromNative("which",0)}get cancelBubble(){return this.getFromNative("cancelBubble",!1)}get composed(){return this.getFromNative("composed",!1)}get eventPhase(){return this.getFromNative("eventPhase",0)}get isTrusted(){return this.getFromNative("isTrusted",!1)}get returnValue(){return this.getFromNative("returnValue",!1)}get timeStamp(){return this.getFromNative("timeStamp",0)}get cancelable(){return this.getFromNative("cancelable",!1)}get defaultPrevented(){return this.getFromNative("defaultPrevented",!1)}getFromNative(e,n){return e in this.nativeEvent?this.nativeEvent[e]:n}}const Qp=new ie;class kn extends iz{constructor(n,i,a,r,s,o,l=s.object,c=l,f={stopped:!i,stoppedImmediate:!1}){super(a);X(this,"type");X(this,"bubbles");X(this,"internalPointer");X(this,"intersection");X(this,"camera");X(this,"currentObject");X(this,"object");X(this,"propagationState");X(this,"_pointer");X(this,"_ray");X(this,"_intersections",[]);X(this,"_unprojectedPoint");this.type=n,this.bubbles=i,this.internalPointer=r,this.intersection=s,this.camera=o,this.currentObject=l,this.object=c,this.propagationState=f}get pointerId(){return this.internalPointer.id}get pointerType(){return this.internalPointer.type}get pointerState(){return this.internalPointer.state}get distance(){return this.intersection.distance}get distanceToRay(){return this.intersection.distanceToRay}get point(){return this.intersection.point}get index(){return this.intersection.index}get face(){return this.intersection.face}get faceIndex(){return this.intersection.faceIndex}get uv(){return this.intersection.uv}get uv1(){return this.intersection.uv1}get normal(){return this.intersection.normal}get instanceId(){return this.intersection.instanceId}get pointOnLine(){return this.intersection.pointOnLine}get batchId(){return this.intersection.batchId}get pointerPosition(){return this.intersection.pointerPosition}get pointerQuaternion(){return this.intersection.pointerQuaternion}get pointOnFace(){return this.intersection.pointOnFace}get localPoint(){return this.intersection.localPoint}get details(){return this.intersection.details}get target(){return this.object}get currentTarget(){return this.currentObject}get eventObject(){return this.currentObject}get srcElement(){return this.currentObject}get pointer(){return this._pointer==null&&(Qp.copy(this.intersection.point).project(this.camera),this._pointer=new Yn(Qp.x,Qp.y)),this._pointer}get ray(){if(this._ray!=null)return this._ray;switch(this.intersection.details.type){case"screen-ray":case"ray":case"sphere":return this._ray=new zm(this.intersection.pointerPosition,new ie(0,0,-1).applyQuaternion(this.intersection.pointerQuaternion));case"lines":return this._ray=new zm(this.intersection.details.line.start,this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize())}}get intersections(){return this._intersections==null&&(this._intersections=[{...this.intersection,eventObject:this.currentObject}]),this._intersections}get unprojectedPoint(){if(this._unprojectedPoint==null){const n=this.pointer;this._unprojectedPoint=new ie(n.x,n.y,0).unproject(this.camera)}return this._unprojectedPoint}get stopped(){return this.propagationState.stoppedImmediate||this.propagationState.stopped}get stoppedImmediate(){return this.propagationState.stoppedImmediate}get delta(){throw new Error("not supported")}stopPropagation(){this.propagationState.stopped=!0}stopImmediatePropagation(){this.propagationState.stoppedImmediate=!0}retarget(n){return new kn(this.type,this.bubbles,this.nativeEvent,this.internalPointer,this.intersection,this.camera,n,this.target,this.propagationState)}}class wd extends kn{get deltaX(){return this.nativeEvent.deltaX}get deltaY(){return this.nativeEvent.deltaY}get deltaZ(){return this.nativeEvent.deltaZ}constructor(e,n,i,a,r,s){super("wheel",!0,e,n,i,a,r,s)}retarget(e){return new wd(this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target)}}function Qn(t){eE(t,t.currentObject)}function eE(t,e){if(e==null)return;const n=rz(e,t.type);if(n!=null&&n.length>0){const i=t.retarget(e),a=n.length;for(let r=0;r<a&&!i.stoppedImmediate;r++)n[r](i)}t.stopped||eE(t,e.parent)}const tE={click:"onClick",contextmenu:"onContextMenu",dblclick:"onDoubleClick",pointercancel:"onPointerCancel",pointerdown:"onPointerDown",pointerenter:"onPointerEnter",pointerleave:"onPointerLeave",pointermove:"onPointerMove",pointerout:"onPointerOut",pointerover:"onPointerOver",pointerup:"onPointerUp",wheel:"onWheel"},az=Object.keys(tE);function rz(t,e){var i;if(t._listeners!=null&&e in t._listeners)return t._listeners[e];let n;if(t.isVoidObject&&e==="click"&&((i=t.parent)==null?void 0:i.__r3f)!=null&&(n=t.parent.__r3f.root.getState().onPointerMissed),t.__r3f!=null&&(n=t.__r3f.handlers[tE[e]]),n!=null)return[n]}const sz=1e10,oz=new I1(sz),By=new Map;function lz(t){let e=By.get(t);return e==null&&(e=new Zt(oz),e.isVoidObject=!0,e.parent=t,e.pointerEventsOrder=-1/0,By.set(t,e)),e}function cz(t,e,n){var a;const i=e.normal??((a=e.face)==null?void 0:a.normal);return i==null?!1:(t.setFromNormalAndCoplanarPoint(i,e.localPoint),t.applyMatrix4(n),!0)}function uz(t,e,n){if(e==="none"||e==="listener"&&!t)return!1;if(n==="all")return!0;if(typeof n=="function")return({id:r,type:s,state:o})=>n(r,s,o);let i,a;return"deny"in n?(a=!0,i=n.deny):(a=!1,i=n.allow),Array.isArray(i)?r=>Hy(i.includes(r.type),a):r=>Hy(i===r.type,a)}function Hy(t,e){return e?!t:t}function nE(t,e,n,i=!1,a,r,s){const o=i||fz(t,e),l=e.pointerEvents??a,c=l??e.defaultPointerEvents??"listener",f=e.pointerEventsType??r??"all",p=e.pointerEventsOrder??s??0,u=uz(o,c,f),d=n.length;if(d===1)(u===!0||typeof u=="function"&&u(n[0]))&&Kp(n[0],e,c,f,p);else if(u===!0)for(let m=0;m<d;m++)Kp(n[m],e,c,f,p);else if(typeof u=="function")for(let m=0;m<d;m++){const h=n[m];u(h)&&Kp(h,e,c,f,p)}if(e.children.length===0||e.intersectChildren===!1)return;const v=e.interactableDescendants??e.children,S=v.length;for(let m=0;m<S;m++)nE(t,v[m],n,o,l,f,p)}function fz(t,e){var a;if(e.ancestorsHaveListeners||t==="pointer"&&e.ancestorsHavePointerListeners||t==="wheel"&&e.ancestorsHaveWheelListeners||e.__r3f!=null&&((a=e.__r3f)==null?void 0:a.eventCount)>0&&(t==="wheel"&&e.__r3f.handlers.onWheel!=null||t==="pointer"&&Object.keys(e.__r3f.handlers).some(r=>r!="onWheel")))return!0;if(e._listeners==null)return!1;if(t==="wheel"){const r=e._listeners.wheel;return r!=null&&r.length>0}const n=Object.entries(e._listeners),i=n.length;for(let r=0;r<i;r++){const s=n[r];if(s[0]!=="wheel"&&az.includes(s[0])&&s[1]!=null&&s[1].length>0)return!0}return!1}function Kp({intersector:t,options:e},n,i,a,r){var s;((s=e.filter)==null?void 0:s.call(e,n,i,a,r))!==!1&&t.executeIntersection(n,r)}function dz(t,e,{customSort:n=hz}={},i){let a,r,s;const o=t.length;for(let l=0;l<o;l++){const c=t[l],f=e==null?void 0:e[l];(a==null||n(c,f,a,r)<0)&&(s=l,a=c,r=f)}return s}function hz(t,e=0,n,i=0){return e!=i?i-e:t.distance-n.distance}const Gy=1e7;function pz(t,e,n,i,a,r=0){const s=e.direction.clone().multiplyScalar(Gy),o=Gy;return{distance:o+r,object:lz(t),point:s,normal:e.origin.clone().sub(s).normalize(),details:n(s,o),pointerPosition:i,pointerQuaternion:a,pointOnFace:s,localPoint:s}}function mz(t,e,n){for(;n>0;)t.push(e),--n}const mc=Symbol("buttonsDownTime"),Jp=Symbol("buttonsClickTime");globalThis.pointerEventspointerMap??(globalThis.pointerEventspointerMap=new Map);xu.prototype.setPointerCapture=function(t){var e;(e=wv(t))==null||e.setCapture(this)};xu.prototype.releasePointerCapture=function(t){const e=wv(t);e==null||!e.hasCaptured(this)||e.setCapture(void 0)};xu.prototype.hasPointerCapture=function(t){var e;return((e=wv(t))==null?void 0:e.hasCaptured(this))??!1};function wv(t){var e;return(e=globalThis.pointerEventspointerMap)==null?void 0:e.get(t)}class gz{constructor(e,n,i,a,r,s,o,l,c={}){X(this,"id");X(this,"type");X(this,"state");X(this,"intersector");X(this,"getCamera");X(this,"onMoveCommited");X(this,"parentSetPointerCapture");X(this,"parentReleasePointerCapture");X(this,"options");X(this,"prevIntersection");X(this,"intersection");X(this,"prevEnabled",!0);X(this,"enabled",!0);X(this,"wheelIntersection");X(this,"pointerEntered",[]);X(this,"pointerEnteredHelper",[]);X(this,"pointerCapture");X(this,"buttonsDownTime",new Map);X(this,"buttonsDown",new Set);X(this,"wasMoved",!1);X(this,"onFirstMove",[]);var f;this.id=e,this.type=n,this.state=i,this.intersector=a,this.getCamera=r,this.onMoveCommited=s,this.parentSetPointerCapture=o,this.parentReleasePointerCapture=l,this.options=c,(f=globalThis.pointerEventspointerMap)==null||f.set(e,this)}getPointerCapture(){return this.pointerCapture}hasCaptured(e){var n;return((n=this.pointerCapture)==null?void 0:n.object)===e}setCapture(e){var n,i;((n=this.pointerCapture)==null?void 0:n.object)!==e&&(this.clearPointerCapture(),e!=null&&this.intersection!=null&&(this.pointerCapture={object:e,intersection:this.intersection},(i=this.parentSetPointerCapture)==null||i.call(this)))}getButtonsDown(){return this.buttonsDown}getIntersection(){return this.intersection}getEnabled(){return this.enabled}setEnabled(e,n,i=!0){this.enabled!==e&&(!e&&this.pointerCapture!=null&&this.clearPointerCapture(),this.enabled=e,i&&this.commit(n,!1))}computeIntersection(e,n,i){return this.pointerCapture!=null?this.intersector.intersectPointerCapture(this.pointerCapture,i):(this.intersector.startIntersection(i),nE(e,n,[this]),this.intersector.finalizeIntersection(n))}setIntersection(e){this.intersection=e}commit(e,n){var l;const i=this.getCamera(),a=this.prevEnabled?this.prevIntersection:void 0,r=this.enabled?this.intersection:void 0;a!=null&&a.object!=(r==null?void 0:r.object)&&Qn(new kn("pointerout",!0,e,this,a,i));const s=this.pointerEntered;this.pointerEntered=[],this.pointerEnteredHelper.length=0,iE(r==null?void 0:r.object,this.pointerEntered,s,this.pointerEnteredHelper);const o=s.length;for(let c=0;c<o;c++){const f=s[c];Qn(new kn("pointerleave",!1,e,this,a,i,f))}r!=null&&(a==null?void 0:a.object)!=r.object&&Qn(new kn("pointerover",!0,e,this,r,i));for(let c=this.pointerEnteredHelper.length-1;c>=0;c--){const f=this.pointerEnteredHelper[c];Qn(new kn("pointerenter",!1,e,this,r,i,f))}if(n&&r!=null&&Qn(new kn("pointermove",!0,e,this,r,i)),this.prevIntersection=this.intersection,this.prevEnabled=this.enabled,!this.wasMoved&&this.intersector.isReady()){this.wasMoved=!0;const c=this.onFirstMove.length;for(let f=0;f<c;f++)this.onFirstMove[f](i);this.onFirstMove.length=0}(l=this.onMoveCommited)==null||l.call(this,this)}move(e,n){this.intersection=this.computeIntersection("pointer",e,n),this.commit(n,!0)}over(e,n){this.wasMoved||(this.intersection=this.computeIntersection("pointer",e,n),this.commit(n,!1))}emitMove(e){this.intersection!=null&&Qn(new kn("pointermove",!0,e,this,this.intersection,this.getCamera()))}down(e){if(this.buttonsDown.add(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.down.bind(this,e));return}if(this.intersection==null)return;Qn(new kn("pointerdown",!0,e,this,this.intersection,this.getCamera()));const{object:n}=this.intersection;n[mc]??(n[mc]=new Map),n[mc].set(e.button,e.timeStamp),this.buttonsDownTime.set(e.button,e.timeStamp)}up(e){if(this.buttonsDown.delete(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.up.bind(this,e));return}if(this.intersection==null)return;const{clickThesholdMs:n,contextMenuButton:i=2,dblClickThresholdMs:a=500,clickThresholdMs:r=n??300}=this.options;this.clearPointerCapture();const s=vz(this.buttonsDownTime,this.intersection.object[mc],e.button,e.timeStamp,r),o=this.getCamera();if(s&&e.button===i&&Qn(new kn("contextmenu",!0,e,this,this.intersection,o)),Qn(new kn("pointerup",!0,e,this,this.intersection,o)),!s||e.button===i)return;Qn(new kn("click",!0,e,this,this.intersection,o));const{object:l}=this.intersection,c=l[Jp]??(l[Jp]=new Map),f=c.get(e.button);if(f==null||e.timeStamp-f>a){c.set(e.button,e.timeStamp);return}Qn(new kn("dblclick",!0,e,this,this.intersection,o)),c.delete(e.button)}cancel(e){this.buttonsDown.clear(),this.buttonsDownTime.clear(),this.clearPointerCapture(),this.onFirstMove.length=0,!(!this.enabled||!this.wasMoved||this.intersection==null)&&Qn(new kn("pointercancel",!0,e,this,this.intersection,this.getCamera()))}wheel(e,n,i=!1){if(!this.enabled)return;if(!this.wasMoved&&i){this.onFirstMove.push(this.wheel.bind(this,e,n,i));return}i||(this.wheelIntersection=this.computeIntersection("wheel",e,n));const a=i?this.intersection:this.wheelIntersection;a!=null&&Qn(new wd(n,this,a,this.getCamera()))}emitWheel(e,n=!1){if(!this.enabled)return;if(!this.wasMoved&&n){this.onFirstMove.push(this.emitWheel.bind(this,e,n));return}const i=n?this.intersection:this.wheelIntersection;i!=null&&Qn(new wd(e,this,i,this.getCamera()))}exit(e){(this.buttonsDown.size>0||this.pointerCapture!=null)&&this.cancel(e),this.wasMoved&&(this.intersection=void 0,this.commit(e,!1)),this.onFirstMove.length=0,this.wasMoved=!1}clearPointerCapture(){var e;this.pointerCapture!=null&&((e=this.parentReleasePointerCapture)==null||e.call(this),this.pointerCapture=void 0)}}function iE(t,e,n,i){if(t==null)return;const a=n.indexOf(t);a!=-1?n.splice(a,1):i.push(t),e.push(t),iE(t.parent,e,n,i)}function vz(t,e,n,i,a){if(e==null)return!1;const r=e.get(n);return!(r==null||i-r>a||r!=t.get(n))}const gc=new F1,em=new F1,Vy=new Yn,ky=new Yn,Xy=new Yn,tm=new ie,_z=new Mi,yf=new ie;function xz(t,e,n){yf.copy(e).applyMatrix4(_z.copy(n.matrixWorld).invert());const i=n.geometry.attributes.uv;if(i==null||!(i instanceof Tw))return!1;let a;return yz(n,(r,s,o)=>{n.getVertexPosition(r,gc.a),n.getVertexPosition(s,gc.b),n.getVertexPosition(o,gc.c);const l=gc.closestPointToPoint(yf,tm).distanceTo(yf);a!=null&&l>=a||(a=l,em.copy(gc),Vy.fromBufferAttribute(i,r),ky.fromBufferAttribute(i,s),Xy.fromBufferAttribute(i,o))}),a==null?!1:(em.closestPointToPoint(yf,tm),em.getInterpolation(tm,Vy,ky,Xy,t),!0)}function yz(t,e){const n=t.geometry.drawRange;if(t.geometry.index!=null){const s=t.geometry.index,o=Math.max(0,n.start),l=Math.min(s.count,n.start+n.count);for(let c=o;c<l;c+=3)e(s.getX(c),s.getX(c+1),s.getX(c+2));return}const i=t.geometry.attributes.position;if(i==null)return;const a=Math.max(0,n.start),r=Math.min(i.count,n.start+n.count);for(let s=a;s<r;s+=3)e(s,s+1,s+2)}new Mi;new Aw;new ie;new to;new zm;new Yn;new ie(0,0,0),new ie(0,0,1);const jy=new Mi,Sz=new ie;new ie(0,0,-1);new to;const qy=new Yn,Mz=new ie;class bz{constructor(e,n){X(this,"prepareTransformation");X(this,"options");X(this,"raycaster",new ww);X(this,"cameraQuaternion",new Dt);X(this,"fromPosition",new ie);X(this,"fromQuaternion",new Dt);X(this,"coords",new Yn);X(this,"viewPlane",new to);X(this,"intersects",[]);X(this,"pointerEventsOrders",[]);this.prepareTransformation=e,this.options=n}isReady(){return!0}intersectPointerCapture({intersection:e,object:n},i){const a=e.details;if(a.type!="screen-ray")throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a camera ray intersector`);if(!this.startIntersection(i))return e;this.viewPlane.constant-=a.distanceViewPlane;const r=this.raycaster.ray.intersectPlane(this.viewPlane,new ie);if(r==null)return e;e.object.updateWorldMatrix(!0,!1),cz(this.viewPlane,e,e.object.matrixWorld);let s=e.uv;return e.object instanceof Zt&&xz(qy,r,e.object)&&(s=qy.clone()),{...e,details:{...a,direction:this.raycaster.ray.direction.clone(),screenPoint:this.coords.clone()},uv:s,object:n,point:r,pointOnFace:r,pointerPosition:this.raycaster.ray.origin.clone(),pointerQuaternion:this.cameraQuaternion.clone()}}startIntersection(e){const n=this.prepareTransformation(e,this.coords);return n==null?!1:(n.updateWorldMatrix(!0,!1),n.matrixWorld.decompose(this.fromPosition,this.fromQuaternion,Sz),this.raycaster.setFromCamera(this.coords,n),this.viewPlane.setFromNormalAndCoplanarPoint(n.getWorldDirection(Mz),this.raycaster.ray.origin),!0)}executeIntersection(e,n){const i=this.intersects.length;e.raycast(this.raycaster,this.intersects),mz(this.pointerEventsOrders,n,this.intersects.length-i)}finalizeIntersection(e){const n=this.fromPosition.clone(),i=this.cameraQuaternion.clone(),a=this.raycaster.ray.direction.clone(),r=dz(this.intersects,this.pointerEventsOrders,this.options),s=r==null?void 0:this.intersects[r];return this.intersects.length=0,this.pointerEventsOrders.length=0,s==null?pz(e,this.raycaster.ray,(o,l)=>({type:"screen-ray",distanceViewPlane:l,screenPoint:this.coords.clone(),direction:a}),n,i):(s.object.updateWorldMatrix(!0,!1),jy.copy(s.object.matrixWorld).invert(),Object.assign(s,{details:{type:"screen-ray",distanceViewPlane:this.viewPlane.distanceToPoint(s.point),screenPoint:this.coords.clone(),direction:a},pointOnFace:s.point,pointerPosition:n,pointerQuaternion:i,localPoint:s.point.clone().applyMatrix4(jy)}))}}new ie;new Yn;new Mi;new ie;new to;new Cw;new ie;new ie;new ie;new ie(1e-4,1e-4,1e-4);new Mi;let Ez=23412;function Tz(){return Ez++}function Az(t,e,n){if(!(e instanceof globalThis.MouseEvent))return n.set(0,0);const{width:i,height:a,top:r,left:s}=t.getBoundingClientRect(),o=e.clientX-s,l=e.clientY-r;return n.set(o/i*2-1,-(l/a)*2+1)}function wz(t,e,n,i){return Cz(t,typeof e=="function"?e:()=>e,n,Az.bind(null,t),a=>{try{t.setPointerCapture(a)}catch(r){if(!(r instanceof DOMException&&r.name==="NotFoundError"))throw r}},a=>{t.hasPointerCapture(a)&&t.releasePointerCapture(a)},{pointerTypePrefix:"screen-",...i})}function Cz(t,e,n,i,a,r,s={}){const o=(s==null?void 0:s.forwardPointerCapture)??!0,l=new Map,c=s.pointerTypePrefix??"forward-",f=(_,w)=>{let U=l.get(_.pointerId);return U!=null||(U=new gz(Tz(),`${c}${_.pointerType}`,_.pointerState,new bz((N,I)=>(i(N,I),e()),s),e,void 0,o?a.bind(null,_.pointerId):void 0,o?r.bind(null,_.pointerId):void 0,s),w!="move"&&w!="wheel"&&(U.setIntersection(U.computeIntersection("pointer",n,_)),U.commit(_,!1)),l.set(_.pointerId,U)),U},p=new Map,u=new Map,d=[],v=[],S=(_,w,U)=>{switch(_){case"move":U.move(n,w);return;case"over":U.move(n,w);return;case"wheel":U.wheel(n,w);return;case"cancel":U.cancel(w);return;case"down":if(!Wy(w))return;U.down(w);return;case"up":if(!Wy(w))return;U.up(w);return;case"exit":u.delete(U),p.delete(U),U.exit(w);return}},m=(_,w)=>{const U=f(w,_);_==="move"&&u.set(U,w),_==="wheel"&&p.set(U,w),s.batchEvents??!0?v.push({type:_,event:w}):S(_,w,U)},h=m.bind(null,"move"),g=m.bind(null,"over"),x=m.bind(null,"cancel"),y=m.bind(null,"down"),R=m.bind(null,"up"),E=m.bind(null,"wheel"),T=m.bind(null,"exit");return t.addEventListener("pointermove",h),t.addEventListener("pointerover",g),t.addEventListener("pointercancel",x),t.addEventListener("pointerdown",y),t.addEventListener("pointerup",R),t.addEventListener("wheel",E),t.addEventListener("pointerleave",T),{destroy(){t.removeEventListener("pointermove",h),t.removeEventListener("pointerover",g),t.removeEventListener("pointercancel",x),t.removeEventListener("pointerdown",y),t.removeEventListener("pointerup",R),t.removeEventListener("wheel",E),t.removeEventListener("pointerleave",T),u.clear(),p.clear()},update(){const _=v.length;for(let w=0;w<_;w++){const{type:U,event:N}=v[w],I=f(N,U);if(U==="move"&&(d.push(I),u.get(I)!=N)){I.emitMove(N);continue}if(U==="wheel"&&p.get(I)!=N){I.emitWheel(N);continue}S(U,N,I)}if(v.length=0,s.intersectEveryFrame??!1)for(const[w,U]of u.entries())d.includes(w)||w.move(n,U);d.length=0}}}function Wy(t){return t.button!=null}new Yn;new ie;new ie;new ie;new Yn;new Yn;new ie;new ie;new Yn;new Yn;new Yn;new Yn;new ie;new ie;const Rz=2;class Dz{constructor(e){var n;this.xrDevice=e,this.combinedCameraPosition=new j,this.isPointerLocked=!1,this.vec3=new j,this.quat=new Ki,this.quatB=new Ki,this.quatInv=new Ki,this.quatMouse=new Ki,this.euler=new is,this.keyState={ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},this.lastTime=0,this.preferredConnectedGazeMode="head-locked",this.gazeCommitHand="right",this.gazePointerId=null,this.gazeHeadsetDragActive=!1,this.gazeLastPointer={x:0,y:0},this.gazeForward=new j(0,0,-1),this.gazeDirection=new j,this.gazeQuaternion=new Ki,this.isInProgrammaticMode=!1,this.interactionsEnabled=!0,this.scene=new $R,this.gazeMode=!((n=e.gaze)===null||n===void 0)&&n.connected?"head-locked":"off",this.camera=new Ni(50,window.innerWidth/window.innerHeight,.1,40),this.playerRig=new qo,this.cameraRig=new qo,this.scene.add(this.playerRig),this.playerRig.add(this.cameraRig),this.cameraRig.position.fromArray(e.position.vec3),this.cameraRig.quaternion.fromArray(e.quaternion.quat),this.cameraRig.add(this.camera),this.camera.position.x-=e.ipd/2;const i=new La(new bv(.25,.27,32),new Mv({color:16777215,side:ir}));i.rotateX(-Math.PI/2),this.scene.add(i),this.renderer=new dO({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.transformHandles=new Map,["left","right"].forEach(a=>{const r=new nz;r.scale.setScalar(.1),r.position.fromArray(e.controllers[a].position.vec3),r.quaternion.fromArray(e.controllers[a].quaternion.quat),this.cameraRig.attach(r),r.userData={defaultPosition:r.position.toArray(),defaultQuaternion:r.quaternion.toArray()},r.userData.setMode=s=>{var o,l;(l=(o=r.userData).modeCleanup)===null||l===void 0||l.call(o),r.userData.modeCleanup=r.bind(s),r.userData.mode=s},r.userData.setMode("translate"),r.space="local",this.transformHandles.set(a,r),r.addEventListener("click",()=>{r.userData.mode==="translate"?r.userData.setMode("rotate"):r.userData.setMode("translate")})}),window.transformHandles=this.transformHandles,this.mouseMoveHandler=a=>{if(!this.isPointerLocked||this.isInProgrammaticMode)return;const r=a.movementX||a.mozMovementX||a.webkitMovementX||0,s=a.movementY||a.mozMovementY||a.webkitMovementY||0;this.playerRig.rotation.y-=r*.002,this.cameraRig.rotation.x-=s*.002,e.quaternion.copy(this.cameraRig.getWorldQuaternion(this.quatMouse))},this.cameraRig.getWorldPosition(this.combinedCameraPosition),this.headsetDefaultPosition=this.cameraRig.position.clone(),this.headsetDefaultQuaternion=this.cameraRig.quaternion.clone(),this.forwardHtmlEvents=wz(this.renderer.domElement,()=>this.camera,this.scene).update,this.pointerLockChangeHandlerBound=this.pointerLockChangeHandler.bind(this),this.gazePointerDownHandlerBound=this.gazePointerDownHandler.bind(this),this.gazePointerMoveHandlerBound=this.gazePointerMoveHandler.bind(this),this.gazePointerUpHandlerBound=this.gazePointerUpHandler.bind(this),this.gazeWheelHandlerBound=this.gazeWheelHandler.bind(this),this.gazeContextMenuHandlerBound=this.gazeContextMenuHandler.bind(this),this.windowBlurHandlerBound=()=>{this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1},this.documentVisibilityHandlerBound=()=>{document.visibilityState!=="visible"&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1)},this.keyDownHandlerBound=this.keyDownHandler.bind(this),this.keyUpHandlerBound=this.keyUpHandler.bind(this),document.addEventListener("pointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("keydown",this.keyDownHandlerBound,!1),document.addEventListener("keyup",this.keyUpHandlerBound,!1),this.renderer.domElement.addEventListener("pointerdown",this.gazePointerDownHandlerBound),this.renderer.domElement.addEventListener("pointermove",this.gazePointerMoveHandlerBound),this.renderer.domElement.addEventListener("pointerup",this.gazePointerUpHandlerBound),this.renderer.domElement.addEventListener("pointercancel",this.gazePointerUpHandlerBound),this.renderer.domElement.addEventListener("wheel",this.gazeWheelHandlerBound,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",this.gazeContextMenuHandlerBound),window.addEventListener("blur",this.windowBlurHandlerBound),document.addEventListener("visibilitychange",this.documentVisibilityHandlerBound)}lockPointer(){this.isInProgrammaticMode||!this.interactionsEnabled||this.gazeMode==="cursor"||(this.renderer.domElement.requestPointerLock=this.renderer.domElement.requestPointerLock||this.renderer.domElement.mozRequestPointerLock||this.renderer.domElement.webkitRequestPointerLock,this.renderer.domElement.requestPointerLock())}pointerLockChangeHandler(){this.isPointerLocked=document.pointerLockElement===this.renderer.domElement||document.mozPointerLockElement===this.renderer.domElement||document.webkitPointerLockElement===this.renderer.domElement,this.isPointerLocked?document.addEventListener("mousemove",this.mouseMoveHandler,!1):document.removeEventListener("mousemove",this.mouseMoveHandler,!1)}get currentGazeMode(){return this.gazeMode}get currentGazeCommitHand(){return this.gazeCommitHand}applyGazeModePresentation(e){var n;this.gazeMode=e,e==="cursor"&&this.isPointerLocked&&((n=document.exitPointerLock)===null||n===void 0||n.call(document));const i=e==="cursor";this.renderer.domElement.style.cursor=i?"crosshair":"",this.renderer.domElement.style.touchAction=i?"none":"",this.setTransformHandleRoutingSuppressed(i)}setGazeMode(e){this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1;const n=this.xrDevice.gaze;if(!n){this.applyGazeModePresentation("off");return}e!=="off"&&(this.preferredConnectedGazeMode=e),n.connected=e!=="off",e==="head-locked"&&n.quaternion.set(0,0,0,1),this.applyGazeModePresentation(e)}setProgrammaticMode(e){const n=this.isInProgrammaticMode;if(this.isInProgrammaticMode=e,!n||e)return;this.syncFromDevice();const i=this.xrDevice.gaze,a=i!=null&&i.connected?this.preferredConnectedGazeMode:"off";a!==this.gazeMode&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1,this.applyGazeModePresentation(a))}setGazeCommitHand(e){e!==this.gazeCommitHand&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1,this.gazeCommitHand=e)}onSessionEnd(){this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1}setTransformHandleRoutingSuppressed(e){this.transformHandles.forEach(n=>{var i,a;e&&!n.userData.gazeSuppressed?((a=(i=n.userData).modeCleanup)===null||a===void 0||a.call(i),n.userData.modeCleanup=void 0,n.userData.gazeSuppressed=!0):!e&&n.userData.gazeSuppressed&&(n.userData.gazeSuppressed=!1,n.userData.setMode(n.userData.mode))})}gazeInteractionEnabled(){var e;return this.gazeMode==="cursor"&&!!(!((e=this.xrDevice.gaze)===null||e===void 0)&&e.connected)&&this.xrDevice.visibilityState==="visible"&&this.interactionsEnabled&&!this.isInProgrammaticMode&&!!this.xrDevice.activeSession}updateGazeFromPointer(e,n){if(!this.gazeInteractionEnabled()||this.gazeCommitActive)return;const i=this.renderer.domElement.getBoundingClientRect(),a=VC(e,n,i,this.xrDevice.stereoEnabled,this.xrDevice.fovy);this.gazeDirection.fromArray(a),this.gazeQuaternion.setFromUnitVectors(this.gazeForward,this.gazeDirection),this.xrDevice.gaze.quaternion.copy(this.gazeQuaternion)}beginGazeCommit(){if(this.gazeCommitActive||this.gazeCommitPendingRelease)return;const e=this.xrDevice.primaryInputMode,n=this.gazeCommitHand,i=e==="hand"?this.xrDevice.hands[n]:this.xrDevice.controllers[n];i!=null&&i.connected&&(this.writeGazeCommitValue({mode:e,handedness:n},1,!1),this.gazeCommitActive={mode:e,handedness:n})}writeGazeCommitValue(e,n,i){if(e.mode==="hand"){const a=this.xrDevice.hands[e.handedness];i?a==null||a.setPinchValueImmediate(n):a==null||a.updatePinchValue(n)}else{const a=this.xrDevice.controllers[e.handedness];i?a==null||a.setButtonValueImmediate("trigger",n):a==null||a.updateButtonValue("trigger",n)}}releaseGazeCommit(e){var n,i,a,r,s,o;const l=this.gazeCommitActive,c=(n=this.gazeCommitPendingRelease)===null||n===void 0?void 0:n.source,f=this.gazePointerId;if(this.gazePointerId=null,f!==null&&(!((a=(i=this.renderer.domElement).hasPointerCapture)===null||a===void 0)&&a.call(i,f))&&((s=(r=this.renderer.domElement).releasePointerCapture)===null||s===void 0||s.call(r,f)),e){const p=(o=this.gazeCommitPendingRelease)===null||o===void 0?void 0:o.queuedForFrame;this.gazeCommitPendingRelease=void 0,c&&!p&&this.writeGazeCommitValue(c,0,!1),l&&l!==c&&this.writeGazeCommitValue(l,0,!0),this.gazeCommitActive=void 0;return}l&&(this.gazeCommitPendingRelease={source:l,queuedForFrame:!1},this.gazeCommitActive=void 0)}schedulePendingGazeRelease(){const e=this.gazeCommitPendingRelease;e&&queueMicrotask(()=>{this.gazeCommitPendingRelease===e&&(e.queuedForFrame?this.gazeCommitPendingRelease=void 0:(this.writeGazeCommitValue(e.source,0,!1),e.queuedForFrame=!0))})}gazeCommitSourceIsActive(){const e=this.gazeCommitActive;if(!e||this.xrDevice.primaryInputMode!==e.mode)return!1;const n=e.mode==="hand"?this.xrDevice.hands[e.handedness]:this.xrDevice.controllers[e.handedness];return!!(n!=null&&n.connected)}moveCommitInput(e,n){const i=this.gazeCommitActive;if(!i)return;const a=this.transformHandles.get(i.handedness);if(!a)return;const r=this.renderer.domElement.getBoundingClientRect(),s=Math.max(.25,Math.abs(a.position.z)),o=2*Math.tan(this.xrDevice.fovy/2)*s/Math.max(r.height,1);a.position.x+=e*o,a.position.y-=n*o,this.syncDeviceTransforms()}moveCommitInputDepth(e){const n=this.gazeCommitActive;if(!n)return;const i=this.transformHandles.get(n.handedness);if(!i)return;const a=this.renderer.domElement.getBoundingClientRect(),r=Math.max(.25,Math.abs(i.position.z)),s=2*Math.tan(this.xrDevice.fovy/2)*r/Math.max(a.height,1);i.position.z-=e*s*.5,this.syncDeviceTransforms()}gazePointerDownHandler(e){var n,i;this.gazePointerId===null&&this.gazeInteractionEnabled()&&(e.button!==0&&e.button!==2||(e.preventDefault(),e.stopPropagation(),this.gazePointerId=e.pointerId,this.gazeLastPointer={x:e.clientX,y:e.clientY},(i=(n=this.renderer.domElement).setPointerCapture)===null||i===void 0||i.call(n,e.pointerId),e.button===0?(this.updateGazeFromPointer(e.clientX,e.clientY),this.beginGazeCommit()):this.gazeHeadsetDragActive=!0))}gazePointerMoveHandler(e){if(this.gazePointerId!==null&&this.gazePointerId!==e.pointerId)return;const n=e.clientX-this.gazeLastPointer.x,i=e.clientY-this.gazeLastPointer.y;if(this.gazeLastPointer={x:e.clientX,y:e.clientY},!!this.gazeInteractionEnabled()){if(this.gazeCommitActive){e.preventDefault(),this.moveCommitInput(n,i);return}if(this.gazeHeadsetDragActive){e.preventDefault(),this.playerRig.rotation.y-=n*.002,this.cameraRig.rotation.x-=i*.002,this.xrDevice.quaternion.copy(this.cameraRig.getWorldQuaternion(this.quatMouse));return}this.updateGazeFromPointer(e.clientX,e.clientY)}}gazePointerUpHandler(e){var n,i,a,r;this.gazePointerId===e.pointerId&&(this.gazeCommitActive&&this.releaseGazeCommit(!1),this.gazeHeadsetDragActive=!1,this.gazePointerId=null,!((i=(n=this.renderer.domElement).hasPointerCapture)===null||i===void 0)&&i.call(n,e.pointerId)&&((r=(a=this.renderer.domElement).releasePointerCapture)===null||r===void 0||r.call(a,e.pointerId)))}gazeWheelHandler(e){!this.gazeInteractionEnabled()||!this.gazeCommitActive||(e.preventDefault(),e.stopPropagation(),this.moveCommitInputDepth(e.deltaY))}gazeContextMenuHandler(e){this.gazeMode==="cursor"&&e.preventDefault()}resetInputTransform(e){const n=this.transformHandles.get(e);n&&(n.position.fromArray(n.userData.defaultPosition),n.quaternion.fromArray(n.userData.defaultQuaternion),this.syncDeviceTransforms())}keyDownHandler(e){const{keyState:n}=this;if(e.code in n&&(n[e.code]=!0),!this.isInProgrammaticMode){if(this.gazeMode==="cursor"&&e.code==="Space"){if(e.composedPath().some(a=>{if(typeof a!="object"||a===null)return!1;const r=a;return r.isContentEditable===!0||typeof r.tagName=="string"&&["A","BUTTON","INPUT","SELECT","TEXTAREA"].includes(r.tagName)}))return;e.preventDefault(),this.resetInputTransform(this.gazeCommitHand);return}n.ShiftLeft&&n.ArrowUp&&(this.cameraRig.position.y+=.05),n.ShiftLeft&&n.ArrowDown&&(this.cameraRig.position.y-=.05)}}keyUpHandler(e){const{keyState:n}=this;e.code in n&&(n[e.code]=!1)}movePlayerRig(e){const{playerRig:n,keyState:i,vec3:a}=this;a.set((i.KeyD?1:0)-(i.KeyA?1:0),0,(i.KeyS?1:0)-(i.KeyW?1:0)),a.lengthSq()>0&&i.ShiftLeft&&(a.normalize().multiplyScalar(Rz*e).applyQuaternion(n.quaternion),n.position.add(a))}resetDeviceTransforms(){const{playerRig:e,cameraRig:n,transformHandles:i}=this;n.position.copy(this.headsetDefaultPosition),n.quaternion.copy(this.headsetDefaultQuaternion),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),i.forEach(a=>{a.position.fromArray(a.userData.defaultPosition),a.quaternion.fromArray(a.userData.defaultQuaternion)})}captureDefaultPose(){const e=this.cameraRig.getWorldPosition(this.vec3).toArray(),n=this.cameraRig.getWorldQuaternion(this.quat).toArray(),i={},a={};return this.transformHandles.forEach((r,s)=>{const o=r.getWorldPosition(this.vec3).toArray(),l=r.getWorldQuaternion(this.quat).toArray(),c={position:o,quaternion:l};i[s]=c,a[s]={position:[...o],quaternion:[...l]}}),{headset:{position:e,quaternion:n},controllers:i,hands:a}}applyDefaultPose(e){const{headset:n,controllers:i,hands:a}=e;this.headsetDefaultPosition.fromArray(n.position),this.headsetDefaultQuaternion.fromArray(n.quaternion),this.quatInv.copy(this.headsetDefaultQuaternion).invert(),this.transformHandles.forEach((r,s)=>{var o;const l=(o=i==null?void 0:i[s])!==null&&o!==void 0?o:a==null?void 0:a[s];l&&(this.vec3.fromArray(l.position).sub(this.headsetDefaultPosition).applyQuaternion(this.quatInv),this.quat.fromArray(l.quaternion).premultiply(this.quatInv),r.userData.defaultPosition=this.vec3.toArray(),r.userData.defaultQuaternion=this.quat.toArray())}),this.resetDeviceTransforms(),this.combinedCameraPosition.copy(this.headsetDefaultPosition)}syncDeviceTransforms(){const{xrDevice:e,cameraRig:n,transformHandles:i}=this;e.position.copy(n.getWorldPosition(this.vec3)),e.quaternion.copy(n.getWorldQuaternion(this.quat)),i.forEach((a,r)=>{const s=e.primaryInputMode==="controller"?e.controllers[r]:e.hands[r];s.position.copy(a.getWorldPosition(this.vec3)),s.quaternion.copy(a.getWorldQuaternion(this.quat))})}syncFromDevice(){const{xrDevice:e,playerRig:n,cameraRig:i,transformHandles:a}=this;this.syncGazeModeFromDevice();const r=e.position,s=e.quaternion;this.combinedCameraPosition.set(r.x,r.y,r.z),this.quatB.set(s.x,s.y,s.z,s.w),this.euler.setFromQuaternion(this.quatB,"YXZ"),n.position.set(r.x,0,r.z),n.rotation.set(0,this.euler.y,0),i.position.set(0,r.y,0),this.quat.setFromEuler(this.euler.set(0,this.euler.y,0,"YXZ")),i.quaternion.multiplyQuaternions(this.quat.invert(),this.quatB),n.updateMatrixWorld(!0),i.getWorldQuaternion(this.quatInv).invert(),a.forEach((o,l)=>{const c=e.primaryInputMode==="controller"?e.controllers[l]:e.hands[l],f=this.vec3.set(c.position.x,c.position.y,c.position.z);i.worldToLocal(f),o.position.copy(f),this.quatB.set(c.quaternion.x,c.quaternion.y,c.quaternion.z,c.quaternion.w),this.quatB.premultiply(this.quatInv),o.quaternion.copy(this.quatB)})}syncGazeModeFromDevice(){var e;const n=!((e=this.xrDevice.gaze)===null||e===void 0)&&e.connected?"head-locked":"off";n!==this.gazeMode&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1,this.applyGazeModePresentation(n))}setInteractionsEnabled(e){this.interactionsEnabled=e,e||(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1),!e&&this.isPointerLocked&&document.exitPointerLock()}renderScene(e){this.gazeCommitActive&&(!this.gazeInteractionEnabled()||!this.gazeCommitSourceIsActive())&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1),this.schedulePendingGazeRelease();const n=this.xrDevice.fovy/Math.PI*180;let i=!1;this.camera.fov!==n&&(this.camera.fov=n,i=!0);const a=this.xrDevice.canvasDimensions;if(a){const s=this.renderer.domElement;(s.width!==a.width||s.height!==a.height)&&(this.camera.aspect=a.width/a.height,this.renderer.setSize(a.width,a.height),i=!0)}i&&this.camera.updateProjectionMatrix(),this.isInProgrammaticMode||(this.isPointerLocked?this.cameraRig.getWorldPosition(this.combinedCameraPosition):(this.cameraRig.position.y=this.combinedCameraPosition.y,this.playerRig.position.x=this.combinedCameraPosition.x,this.playerRig.position.z=this.combinedCameraPosition.z)),this.gazeMode!=="cursor"&&this.forwardHtmlEvents(),this.transformHandles.forEach((s,o)=>{const l=this.xrDevice.primaryInputMode==="controller"?this.xrDevice.controllers[o]:this.xrDevice.hands[o],c=!!(l!=null&&l.connected);s.visible=c&&!this.isPointerLocked&&!this.isInProgrammaticMode&&this.gazeMode!=="cursor",c&&s.update(e,this.camera)});const r=Math.min((e-this.lastTime)/1e3,.1);this.isInProgrammaticMode||(this.movePlayerRig(r),this.syncDeviceTransforms()),this.renderer.render(this.scene,this.camera),this.lastTime=e}get domElement(){return this.renderer.domElement}dispose(){this.releaseGazeCommit(!0),this.setTransformHandleRoutingSuppressed(!1),this.renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("mousemove",this.mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandlerBound,!1),document.removeEventListener("keyup",this.keyUpHandlerBound,!1),this.renderer.domElement.removeEventListener("pointerdown",this.gazePointerDownHandlerBound),this.renderer.domElement.removeEventListener("pointermove",this.gazePointerMoveHandlerBound),this.renderer.domElement.removeEventListener("pointerup",this.gazePointerUpHandlerBound),this.renderer.domElement.removeEventListener("pointercancel",this.gazePointerUpHandlerBound),this.renderer.domElement.removeEventListener("wheel",this.gazeWheelHandlerBound),this.renderer.domElement.removeEventListener("contextmenu",this.gazeContextMenuHandlerBound),window.removeEventListener("blur",this.windowBlurHandlerBound),document.removeEventListener("visibilitychange",this.documentVisibilityHandlerBound)}}const Nz="2.7.0";var aE={exports:{}},yh={},rE={exports:{}},sE={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,P){var B=L.length;L.push(P);e:for(;0<B;){var Y=B-1>>>1,$=L[Y];if(0<a($,P))L[Y]=P,L[B]=$,B=Y;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var P=L[0],B=L.pop();if(B!==P){L[0]=B;e:for(var Y=0,$=L.length,ae=$>>>1;Y<ae;){var ge=2*(Y+1)-1,Ie=L[ge],De=ge+1,ze=L[De];if(0>a(Ie,B))De<$&&0>a(ze,Ie)?(L[Y]=ze,L[De]=B,Y=De):(L[Y]=Ie,L[ge]=B,Y=ge);else if(De<$&&0>a(ze,B))L[Y]=ze,L[De]=B,Y=De;else break e}}return P}function a(L,P){var B=L.sortIndex-P.sortIndex;return B!==0?B:L.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],f=1,p=null,u=3,d=!1,v=!1,S=!1,m=!1,h=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function y(L){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=L)i(c),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(c)}}function R(L){if(S=!1,y(L),!v)if(n(l)!==null)v=!0,E||(E=!0,I());else{var P=n(c);P!==null&&z(R,P.startTime-L)}}var E=!1,T=-1,_=5,w=-1;function U(){return m?!0:!(t.unstable_now()-w<_)}function N(){if(m=!1,E){var L=t.unstable_now();w=L;var P=!0;try{e:{v=!1,S&&(S=!1,g(T),T=-1),d=!0;var B=u;try{t:{for(y(L),p=n(l);p!==null&&!(p.expirationTime>L&&U());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,u=p.priorityLevel;var $=Y(p.expirationTime<=L);if(L=t.unstable_now(),typeof $=="function"){p.callback=$,y(L),P=!0;break t}p===n(l)&&i(l),y(L)}else i(l);p=n(l)}if(p!==null)P=!0;else{var ae=n(c);ae!==null&&z(R,ae.startTime-L),P=!1}}break e}finally{p=null,u=B,d=!1}P=void 0}}finally{P?I():E=!1}}}var I;if(typeof x=="function")I=function(){x(N)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,W=G.port2;G.port1.onmessage=N,I=function(){W.postMessage(null)}}else I=function(){h(N,0)};function z(L,P){T=h(function(){L(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(L){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var B=u;u=P;try{return L()}finally{u=B}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=u;u=L;try{return P()}finally{u=B}},t.unstable_scheduleCallback=function(L,P,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=B+$,L={id:f++,callback:P,priorityLevel:L,startTime:B,expirationTime:$,sortIndex:-1},B>Y?(L.sortIndex=B,e(c,L),n(l)===null&&L===n(c)&&(S?(g(T),T=-1):S=!0,z(R,B-Y))):(L.sortIndex=$,e(l,L),v||d||(v=!0,E||(E=!0,I()))),L},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(L){var P=u;return function(){var B=u;u=P;try{return L.apply(this,arguments)}finally{u=B}}}})(sE);rE.exports=sE;var Uz=rE.exports,oE={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lz=He;function lE(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Rr(){}var jn={d:{f:Rr,r:function(){throw Error(lE(522))},D:Rr,C:Rr,L:Rr,m:Rr,X:Rr,S:Rr,M:Rr},p:0,findDOMNode:null},Pz=Symbol.for("react.portal"),Oz=Symbol.for("react.recoverable"),Yy=Symbol.for("react.optimistic_key");function zz(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pz,key:i==null?null:i===Yy?Yy:""+i,children:t,containerInfo:e,implementation:n}}var zc=Lz.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Sh(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=jn;Fn.browser=function(t){return{$$typeof:Oz,_reason:t}};Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(lE(299));return zz(t,e,null,n)};Fn.flushSync=function(t){var e=zc.T,n=jn.p;try{if(zc.T=null,jn.p=2,t)return t()}finally{zc.T=e,jn.p=n,jn.d.f()}};Fn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,jn.d.C(t,e))};Fn.prefetchDNS=function(t){typeof t=="string"&&jn.d.D(t)};Fn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Sh(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?jn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&jn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Fn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Sh(e.as,e.crossOrigin);jn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&jn.d.M(t)};Fn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Sh(n,e.crossOrigin);jn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Fn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Sh(e.as,e.crossOrigin);jn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else jn.d.m(t)};Fn.requestFormReset=function(t){jn.d.r(t)};Fn.unstable_batchedUpdates=function(t,e){return t(e)};Fn.useFormState=function(t,e,n){return zc.H.useFormState(t,e,n)};Fn.useFormStatus=function(){return zc.H.useHostTransitionStatus()};Fn.version="19.3.1";function cE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cE)}catch(t){console.error(t)}}cE(),oE.exports=Fn;var Iz=oE.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn=Uz,uE=He,Fz=Iz;function K(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fE(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){for(var e=t,n=e;n&&!n.alternate;)e=n,e.flags&4098&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function dE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hE(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zy(t){if(bu(t)!==t)throw Error(K(188))}function Bz(t){var e=t.alternate;if(!e){if(e=bu(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Zy(a),t;if(r===i)return Zy(a),e;r=r.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function pE(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=pE(t),e!==null)return e;t=t.sibling}return null}function ri(t,e,n,i,a,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,a,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&ri(t.child,e,n,i,a,r))return!0;t=t.sibling}return!1}function io(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function $y(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function mE(t){var e=[null,null],n=io(t);return n===null||gE(e,t,n.child,{foundSelf:!1}),e}function gE(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&gE(t,e,n.child,i))return!0;n=n.sibling}return!1}function dn(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(K(559))}}var Wo=null,G0=null;function Hz(t,e,n){return t===n?!0:t===e?(Wo=t,!0):!1}function Gz(t,e,n){return t===n?(G0=t,!1):t===e?(G0!==null&&(Wo=t),!0):!1}function Qy(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function V0(t,e,n){for(var i=0,a=t;a;a=n(a))i++;a=0;for(var r=e;r;r=n(r))a++;for(;0<i-a;)t=n(t),i--;for(;0<a-i;)e=n(e),a--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var Ot=Object.assign,Vz=Symbol.for("react.element"),Sf=Symbol.for("react.transitional.element"),Cc=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),vE=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),_E=Symbol.for("react.consumer"),Ma=Symbol.for("react.context"),Cv=Symbol.for("react.forward_ref"),X0=Symbol.for("react.suspense"),j0=Symbol.for("react.suspense_list"),Rv=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),q0=Symbol.for("react.activity"),kz=Symbol.for("react.legacy_hidden"),Xz=Symbol.for("react.memo_cache_sentinel"),W0=Symbol.for("react.view_transition"),jz=Symbol.for("react.recoverable"),Ky=Symbol.iterator;function vc(t){return t===null||typeof t!="object"?null:(t=Ky&&t[Ky]||t["@@iterator"],typeof t=="function"?t:null)}var qz=Symbol.for("react.client.reference");function Y0(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===qz?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yo:return"Fragment";case k0:return"Profiler";case vE:return"StrictMode";case X0:return"Suspense";case j0:return"SuspenseList";case q0:return"Activity";case W0:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Cc:return"Portal";case Ma:return t.displayName||"Context";case _E:return(t._context.displayName||"Context")+".Consumer";case Cv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rv:return e=t.displayName||null,e!==null?e:Y0(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Y0(t(e))}catch{}}return null}var Rc=Array.isArray,Be=uE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t=Fz.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bs={pending:!1,data:null,method:null,action:null},Z0=[],Zo=-1;function Ia(t){return{current:t}}function wn(t){0>Zo||(t.current=Z0[Zo],Z0[Zo]=null,Zo--)}function Ht(t,e){Zo++,Z0[Zo]=t.current,t.current=e}var Da=Ia(null),iu=Ia(null),Wr=Ia(null),Cd=Ia(null);function Rd(t,e){switch(Ht(Wr,e),Ht(iu,t),Ht(Da,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?f1(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=f1(e),t=HA(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}wn(Da),Ht(Da,t)}function wl(){wn(Da),wn(iu),wn(Wr)}function $0(t){var e=t.memoizedState;e!==null&&(Il._currentValue=e.memoizedState,Ht(Cd,t)),e=Da.current;var n=HA(e,t.type);e!==n&&(Ht(iu,t),Ht(Da,n))}function Dd(t){iu.current===t&&(wn(Da),wn(iu)),Cd.current===t&&(wn(Cd),Il._currentValue=Bs)}var nm,Jy;function Ur(t){if(nm===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nm=e&&e[1]||"",Jy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nm+t+Jy}var im=!1;function am(t,e){if(!t||im)return"";im=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(t,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new t}finally{p&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=i&&0<=a);break}}}finally{im=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ur(n):""}function Wz(t,e){switch(t.tag){case 26:case 27:case 5:return Ur(t.type);case 16:return Ur("Lazy");case 13:return t.child!==e&&e!==null?Ur("Suspense Fallback"):Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 15:return am(t.type,!1);case 11:return am(t.type.render,!1);case 1:return am(t.type,!0);case 31:return Ur("Activity");case 30:return Ur("ViewTransition");default:return""}}function eS(t){try{var e="",n=null;do e+=Wz(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Q0=Object.prototype.hasOwnProperty,Dv=gn.unstable_scheduleCallback,rm=gn.unstable_cancelCallback,Yz=gn.unstable_shouldYield,Zz=gn.unstable_requestPaint,vi=gn.unstable_now,$z=gn.unstable_getCurrentPriorityLevel,xE=gn.unstable_ImmediatePriority,yE=gn.unstable_UserBlockingPriority,Nd=gn.unstable_NormalPriority,Qz=gn.unstable_LowPriority,SE=gn.unstable_IdlePriority,Kz=gn.log,Jz=gn.unstable_setDisableYieldValue,Eu=null,_i=null;function Hr(t){if(typeof Kz=="function"&&Jz(t),_i&&typeof _i.setStrictMode=="function")try{_i.setStrictMode(Eu,t)}catch{}}var xi=Math.clz32?Math.clz32:n4,e4=Math.log,t4=Math.LN2;function n4(t){return t>>>=0,t===0?32:31-(e4(t)/t4|0)|0}var Mf=256,bf=262144,Ef=4194304;function As(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mh(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=As(i):(s&=o,s!==0?a=As(s):n||(n=o&~t,n!==0&&(a=As(n))))):(o=i&~r,o!==0?a=As(o):s!==0?a=As(s):n||(n=i&~t,n!==0&&(a=As(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function Tu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ME(t,e){e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-xi(n),a=1<<i;e|=t[i],n&=~a}return e}function i4(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bE(){var t=Ef;return Ef<<=1,!(Ef&62914560)&&(Ef=4194304),t}function sm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Au(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function a4(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var f=31-xi(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&EE(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function EE(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-xi(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function TE(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-xi(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function AE(t,e){var n=e&-e;return n=n&42?1:Nv(n),n&(t.suspendedLanes|e)?0:n}function Nv(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Uv(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function wE(){var t=_t.p;return t!==0?t:(t=window.event,t===void 0?32:ow(t.type))}function tS(t,e){var n=_t.p;try{return _t.p=t,e()}finally{_t.p=n}}var pr=Math.random().toString(36).slice(2),En="__reactFiber$"+pr,si="__reactProps$"+pr,Xl="__reactContainer$"+pr,nS="__reactEvents$"+pr,r4="__reactListeners$"+pr,s4="__reactHandles$"+pr,iS="__reactResources$"+pr,wu="__reactMarker$"+pr,Ud="__reactLoad$"+pr;function bh(t){delete t[En],delete t[si],delete t[r4],delete t[s4]}function Os(t){var e;if(e=t[En])return e;for(var n=t.parentNode;n;){if(e=n[Xl]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=x1(t);t!==null;){if(n=t[En])return n;t=x1(t)}return e}t=n,n=t.parentNode}return null}function jl(t){if(t=t[En]||t[Xl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Dc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(K(33))}function ul(t){var e=t[iS];return e||(e=t[iS]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Sn(t){t[wu]=!0}function CE(t){t[Ud]=void 0}var RE=new Set,DE={};function ao(t,e){Cl(t,e),Cl(t+"Capture",e)}function Cl(t,e){for(DE[t]=e,t=0;t<e.length;t++)RE.add(e[t])}var o4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),aS={},rS={};function l4(t){return Q0.call(rS,t)?!0:Q0.call(aS,t)?!1:o4.test(t)?rS[t]=!0:(aS[t]=!0,!1)}var pt=!1;function sS(){var t=pt;return pt=!1,t}function Kf(t,e,n){if(l4(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Tf(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function qa(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function di(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function NE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c4(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function K0(t){if(!t._valueTracker){var e=NE(t)?"checked":"value";t._valueTracker=c4(t,e,""+t[e])}}function UE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=NE(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var u4=/[\n"\\]/g;function Oi(t){return t.replace(u4,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function J0(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+di(e)):t.value!==""+di(e)&&(t.value=""+di(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?om(t,di(t.value)):om(t,di(e)):n!=null?om(t,di(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+di(o):t.removeAttribute("name")}function LE(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){K0(t);return}n=n!=null?""+di(n):"",e=e!=null?""+di(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),K0(t)}function om(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function fl(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function PE(t,e,n){if(e!=null&&(e=""+di(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+di(n):""}function OE(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(K(92));if(Rc(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=di(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),K0(t)}function Rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var f4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oS(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||f4.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function zE(t,e,n){if(e!=null&&typeof e!="object")throw Error(K(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",pt=!0);for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&(oS(t,a,i),pt=!0)}else for(var r in e)e.hasOwnProperty(r)&&oS(t,r,e[r])}function Lv(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jf(t){return h4.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ba(){}var eg=null;function Pv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $o=null,dl=null;function lS(t){var e=jl(t);if(e&&(t=e.stateNode)){var n=t[si]||null;e:switch(t=e.stateNode,e.type){case"input":if(J0(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Oi(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[si]||null;if(!a)throw Error(K(90));J0(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&UE(i)}break e;case"textarea":PE(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&fl(t,!!n.multiple,e,!1)}}}var lm=!1;function IE(t,e,n){if(lm)return t(e,n);lm=!0;try{var i=t(e);return i}finally{if(lm=!1,($o!==null||dl!==null)&&(Ih(),$o&&(e=$o,t=dl,dl=$o=null,lS(e),t)))for(e=0;e<t.length;e++)lS(t[e])}}function au(t,e){var n=t.stateNode;if(n===null)return null;var i=n[si]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tg=!1;if(sr)try{var _c={};Object.defineProperty(_c,"passive",{get:function(){tg=!0}}),window.addEventListener("test",_c,_c),window.removeEventListener("test",_c,_c)}catch{tg=!1}var Gr=null,Ov=null,ed=null;function FE(){if(ed)return ed;var t,e=Ov,n=e.length,i,a="value"in Gr?Gr.value:Gr.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return ed=a.slice(t,1<i?1-i:void 0)}function td(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Af(){return!0}function cS(){return!1}function Zn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Af:cS,this.isPropagationStopped=cS,this}return Ot(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Af)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Af)},persist:function(){},isPersistent:Af}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=Zn(cs),Cu=Ot({},cs,{view:0,detail:0}),p4=Zn(Cu),cm,um,xc,Th=Ot({},Cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xc&&(xc&&t.type==="mousemove"?(cm=t.screenX-xc.screenX,um=t.screenY-xc.screenY):um=cm=0,xc=t),cm)},movementY:function(t){return"movementY"in t?t.movementY:um}}),uS=Zn(Th),m4=Ot({},Th,{dataTransfer:0}),g4=Zn(m4),v4=Ot({},Cu,{relatedTarget:0}),fm=Zn(v4),_4=Ot({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),x4=Zn(_4),y4=Ot({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S4=Zn(y4),M4=Ot({},cs,{data:0}),fS=Zn(M4),b4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T4[t])?!!e[t]:!1}function zv(){return A4}var w4=Ot({},Cu,{key:function(t){if(t.key){var e=b4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=td(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zv,charCode:function(t){return t.type==="keypress"?td(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?td(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C4=Zn(w4),R4=Ot({},Th,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dS=Zn(R4),D4=Ot({},cs,{submitter:0}),N4=Zn(D4),U4=Ot({},Cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zv}),L4=Zn(U4),P4=Ot({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),O4=Zn(P4),z4=Ot({},Th,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I4=Zn(z4),F4=Ot({},cs,{newState:0,oldState:0,source:0}),B4=Zn(F4),H4=[9,13,27,32],Iv=sr&&"CompositionEvent"in window,Ic=null;sr&&"documentMode"in document&&(Ic=document.documentMode);var G4=sr&&"TextEvent"in window&&!Ic,BE=sr&&(!Iv||Ic&&8<Ic&&11>=Ic),hS=" ",pS=!1;function HE(t,e){switch(t){case"keyup":return H4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function GE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qo=!1;function V4(t,e){switch(t){case"compositionend":return GE(e);case"keypress":return e.which!==32?null:(pS=!0,hS);case"textInput":return t=e.data,t===hS&&pS?null:t;default:return null}}function k4(t,e){if(Qo)return t==="compositionend"||!Iv&&HE(t,e)?(t=FE(),ed=Ov=Gr=null,Qo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return BE&&e.locale!=="ko"?null:e.data;default:return null}}var X4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mS(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X4[t.type]:e==="textarea"}function VE(t,e,n,i){$o?dl?dl.push(i):dl=[i]:$o=i,e=eh(e,"onChange"),0<e.length&&(n=new Eh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fc=null,ru=null;function j4(t){IA(t,0)}function Ah(t){var e=Dc(t);if(UE(e))return t}function gS(t,e){if(t==="change")return e}var kE=!1;if(sr){var dm;if(sr){var hm="oninput"in document;if(!hm){var vS=document.createElement("div");vS.setAttribute("oninput","return;"),hm=typeof vS.oninput=="function"}dm=hm}else dm=!1;kE=dm&&(!document.documentMode||9<document.documentMode)}function _S(){Fc&&(Fc.detachEvent("onpropertychange",XE),ru=Fc=null)}function XE(t){if(t.propertyName==="value"&&Ah(ru)){var e=[];VE(e,ru,t,Pv(t)),IE(j4,e)}}function q4(t,e,n){t==="focusin"?(_S(),Fc=e,ru=n,Fc.attachEvent("onpropertychange",XE)):t==="focusout"&&_S()}function W4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ah(ru)}function Y4(t,e){if(t==="click")return Ah(e)}function Z4(t,e){if(t==="input"||t==="change")return Ah(e)}function $4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Si=typeof Object.is=="function"?Object.is:$4;function su(t,e){if(Si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Q0.call(e,a)||!Si(t[a],e[a]))return!1}return!0}function ng(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xS(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yS(t,e){var n=xS(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xS(n)}}function jE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qE(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ng(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ng(t.document)}return e}function Fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Q4=sr&&"documentMode"in document&&11>=document.documentMode,Ko=null,ig=null,Bc=null,ag=!1;function SS(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ag||Ko==null||Ko!==ng(i)||(i=Ko,"selectionStart"in i&&Fv(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bc&&su(Bc,i)||(Bc=i,i=eh(ig,"onSelect"),0<i.length&&(e=new Eh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ko)))}function bs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jo={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},pm={},WE={};sr&&(WE=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function ro(t){if(pm[t])return pm[t];if(!Jo[t])return t;var e=Jo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in WE)return pm[t]=e[n];return t}var YE=ro("animationend"),ZE=ro("animationiteration"),$E=ro("animationstart"),K4=ro("transitionrun"),J4=ro("transitionstart"),eI=ro("transitioncancel"),QE=ro("transitionend"),KE=new Map,rg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rg.push("scrollEnd");function ra(t,e){KE.set(t,e),ao(e,[t])}var tI=0;function or(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=ia.identifierPrefix;var n=tI++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function MS(t){if(t==null||typeof t=="string")return t;var e=null,n=xl;if(n!==null)for(var i=0;i<n.length;i++){var a=t[n[i]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function mr(t,e){return t=MS(t),e=MS(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ld=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ri=[],el=0,Bv=0;function wh(){for(var t=el,e=Bv=el=0;e<t;){var n=Ri[e];Ri[e++]=null;var i=Ri[e];Ri[e++]=null;var a=Ri[e];Ri[e++]=null;var r=Ri[e];if(Ri[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&JE(n,a,r)}}function Ch(t,e,n,i){Ri[el++]=t,Ri[el++]=e,Ri[el++]=n,Ri[el++]=i,Bv|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Hv(t,e,n,i){return Ch(t,e,n,i),Pd(t)}function so(t,e){return Ch(t,null,null,e),Pd(t)}function JE(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-xi(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function Pd(t){if(50<Zc)throw Zc=0,fd=null,Error(K(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var tl={};function nI(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,e,n,i){return new nI(t,e,n,i)}function Gv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tr(t,e){var n=t.alternate;return n===null?(n=ti(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function eT(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function nd(t,e,n,i,a,r){var s=0;if(i=t,typeof i=="function")Gv(i)&&(s=1);else if(typeof i=="string")s=D5(t,n,Da.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case q0:return t=ti(31,n,e,a),t.elementType=q0,t.lanes=r,t;case Yo:return Hs(n.children,a,r,e);case vE:s=8,a|=24;break;case k0:return t=ti(12,n,e,a|2),t.elementType=k0,t.lanes=r,t;case X0:return t=ti(13,n,e,a),t.elementType=X0,t.lanes=r,t;case j0:return t=ti(19,n,e,a),t.elementType=j0,t.lanes=r,t;case kz:case W0:return t=a|32,t=ti(30,n,e,t),t.elementType=W0,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ma:s=10;break e;case _E:s=9;break e;case Cv:s=11;break e;case Rv:s=14;break e;case Pr:s=16,i=null;break e}s=29,n=Error(K(130,t===null?"null":typeof t,"")),i=null}return e=ti(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Hs(t,e,n,i){return t=ti(7,t,i,e),t.lanes=n,t}function mm(t,e,n){return t=ti(6,t,null,e),t.lanes=n,t}function tT(t){var e=ti(18,null,null,0);return e.stateNode=t,e}function gm(t,e,n){return e=ti(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var bS=new WeakMap;function zi(t,e){if(typeof t=="object"&&t!==null){var n=bS.get(t);return n!==void 0?n:(e={value:t,source:e,stack:eS(e)},bS.set(t,e),e)}return{value:t,source:e,stack:eS(e)}}var nl=[],il=0,Od=null,ou=0,Ui=[],Li=0,as=null,Ea=1,Ta="";function Za(t,e){nl[il++]=ou,nl[il++]=Od,Od=t,ou=e}function nT(t,e,n){Ui[Li++]=Ea,Ui[Li++]=Ta,Ui[Li++]=as,as=t;var i=Ea;t=Ta;var a=32-xi(i)-1;i&=~(1<<a),n+=1;var r=32-xi(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ea=1<<32-xi(e)+a|n<<a|i,Ta=r+t}else Ea=1<<r|n<<a|i,Ta=t}function Rh(t){t.return!==null&&(Za(t,1),nT(t,1,0))}function Vv(t){for(;t===Od;)Od=nl[--il],nl[il]=null,ou=nl[--il],nl[il]=null;for(;t===as;)as=Ui[--Li],Ui[Li]=null,Ta=Ui[--Li],Ui[Li]=null,Ea=Ui[--Li],Ui[Li]=null}function iT(t,e){Ui[Li++]=Ea,Ui[Li++]=Ta,Ui[Li++]=as,Ea=e.id,Ta=e.overflow,as=t}var Mn=null,Ft=null,it=!1,Yr=null,Ii=!1,sg=Error(K(519));function rs(t){var e=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lu(zi(e,t)),sg}function ES(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[En]=t,e[si]=i,n){case"dialog":rt("cancel",e),rt("close",e);break;case"iframe":case"object":case"embed":rt("load",e);break;case"video":case"audio":for(n=0;n<du.length;n++)rt(du[n],e);break;case"source":rt("error",e);break;case"img":case"image":case"link":rt("error",e),rt("load",e);break;case"details":rt("toggle",e);break;case"input":rt("invalid",e),LE(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":rt("invalid",e);break;case"textarea":rt("invalid",e),OE(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||BA(e.textContent,n)?(i.popover!=null&&(rt("beforetoggle",e),rt("toggle",e)),i.onScroll!=null&&rt("scroll",e),i.onScrollEnd!=null&&rt("scrollend",e),i.onClick!=null&&(e.onclick=ba),e=!0):e=!1,e||rs(t,!0)}function zd(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Mn=Mn.return}}function Ho(t){if(t!==Mn)return!1;if(!it)return zd(t),it=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Xg(t.type,t.memoizedProps)),n=!n),n&&Ft&&rs(t),zd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));Ft=_1(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));Ft=_1(t)}else e===27?(e=Ft,us(t.type)?(t=Yg,Yg=null,Ft=t):Ft=e):Ft=Mn?Bi(t.stateNode.nextSibling):null;return!0}function Ws(){Ft=Mn=null,it=!1}function vm(){var t=Yr;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Yr=null),t}function lu(t){Yr===null?Yr=[t]:Yr.push(t)}var og=Ia(null),oo=null,Ka=null;function Vr(t,e,n){Ht(og,e._currentValue),e._currentValue=n}function nr(t){t._currentValue=og.current,wn(og)}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function lg(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),id(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(K(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),id(s,n,t),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),id(a.return,n,t),s=a.child,s=s!==null?s.sibling:null):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ys(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(K(387));if(s=s.memoizedProps,s!==null){var o=a.type;Si(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Cd.current){if(s=a.alternate,s===null)throw Error(K(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}a=a.return}return t!==null&&lg(e,t,n,i),e.flags|=262144,t!==null}function Id(t){for(t=t.firstContext;t!==null;){if(!Si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){oo=t,Ka=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return aT(oo,t)}function wf(t,e){return oo===null&&Zs(t),aT(t,e)}function aT(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ka===null){if(t===null)throw Error(K(308));Ka=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ka=Ka.next=e;return n}var iI=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},aI=gn.unstable_scheduleCallback,rI=gn.unstable_NormalPriority,sn={$$typeof:Ma,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kv(){return{controller:new iI,data:new Map,refCount:0}}function Ru(t){t.refCount--,t.refCount===0&&aI(rI,function(){t.controller.abort()})}function TS(t,e){if(t.pendingLanes&4194048){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var Nc=null;function sI(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Hc=null,cg=0,$s=0,hl=null;function oI(t,e){if(Hc===null){var n=Hc=[];cg=0,$s=v_(),hl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return cg++,e.then(AS,AS),e}function AS(){if(--cg===0&&(Nc=null,Hc!==null)){hl!==null&&(hl.status="fulfilled");var t=Hc;Hc=null,$s=0,hl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function lI(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var wS=Be.S;Be.S=function(t,e){if(MA=vi(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&oI(t,e),Nc!==null)for(var n=Pl;n!==null;)TS(n,Nc),n=n.next;if(n=t.types,n!==null){for(var i=Pl;i!==null;)TS(i,n),i=i.next;if($s!==0){i=Nc,i===null&&(i=Nc=[]);for(var a=0;a<n.length;a++){var r=n[a];i.indexOf(r)===-1&&i.push(r)}}}wS!==null&&wS(t,e)};var Gs=Ia(null);function Xv(){var t=Gs.current;return t!==null?t:Pt.pooledCache}function ad(t,e){e===null?Ht(Gs,Gs.current):Ht(Gs,e.pool)}function rT(){var t=Xv();return t===null?null:{parent:sn._currentValue,pool:t}}var ql=Error(K(460)),jv=Error(K(474)),Dh=Error(K(542)),Fd={then:function(){}};function CS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sT(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ba,ba),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,DS(t),t===void 0&&!("reason"in e)?Error(K(600)):t;default:if(typeof e.status=="string")e.then(ba,ba);else{if(t=Pt,t!==null&&100<t.shellSuspendCounter)throw Error(K(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,DS(t),t}throw Vs=e,ql}}function ws(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Vs=n,ql):n}}var Vs=null;function RS(){if(Vs===null)throw Error(K(459));var t=Vs;return Vs=null,t}function DS(t){if(t===ql||t===Dh)throw Error(K(483))}var pl=null,cu=0;function Cf(t){var e=cu;return cu+=1,pl===null&&(pl=[]),sT(pl,t,e)}function Dr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Rf(t,e){throw e.$$typeof===Vz?Error(K(525)):(t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function oT(t){function e(h,g){if(t){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key===null?g.set(h.index,h):g.set(h.key,h),h=h.sibling;return g}function a(h,g){return h=tr(h,g),h.index=0,h.sibling=null,h}function r(h,g,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=134217730,g)):(h.flags|=1048576,g)}function s(h){return t&&h.alternate===null&&(h.flags|=134217730),h}function o(h,g,x,y){return g===null||g.tag!==6?(g=mm(x,h.mode,y),g.return=h,g):(g=a(g,x),g.return=h,g)}function l(h,g,x,y){var R=x.type;return R===Yo?(h=f(h,g,x.props.children,y,x.key),Dr(h,x),h):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pr&&ws(R)===g.type)?(g=a(g,x.props),Dr(g,x),g.return=h,g):(g=nd(x.type,x.key,x.props,null,h.mode,y),Dr(g,x),g.return=h,g)}function c(h,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=gm(x,h.mode,y),g.return=h,g):(g=a(g,x.children||[]),g.return=h,g)}function f(h,g,x,y,R){return g===null||g.tag!==7?(g=Hs(x,h.mode,y,R),g.return=h,g):(g=a(g,x),g.return=h,g)}function p(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=mm(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sf:return x=nd(g.type,g.key,g.props,null,h.mode,x),Dr(x,g),x.return=h,x;case Cc:return g=gm(g,h.mode,x),g.return=h,g;case Pr:return g=ws(g),p(h,g,x)}if(Rc(g)||vc(g))return g=Hs(g,h.mode,x,null),g.return=h,g;if(typeof g.then=="function")return p(h,Cf(g),x);if(g.$$typeof===Ma)return p(h,wf(h,g),x);Rf(h,g)}return null}function u(h,g,x,y){var R=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return R!==null?null:o(h,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sf:return x.key===R?l(h,g,x,y):null;case Cc:return x.key===R?c(h,g,x,y):null;case Pr:return x=ws(x),u(h,g,x,y)}if(Rc(x)||vc(x))return R!==null?null:f(h,g,x,y,null);if(typeof x.then=="function")return u(h,g,Cf(x),y);if(x.$$typeof===Ma)return u(h,g,wf(h,x),y);Rf(h,x)}return null}function d(h,g,x,y,R){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(x)||null,o(g,h,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sf:return h=h.get(y.key===null?x:y.key)||null,l(g,h,y,R);case Cc:return h=h.get(y.key===null?x:y.key)||null,c(g,h,y,R);case Pr:return y=ws(y),d(h,g,x,y,R)}if(Rc(y)||vc(y))return h=h.get(x)||null,f(g,h,y,R,null);if(typeof y.then=="function")return d(h,g,x,Cf(y),R);if(y.$$typeof===Ma)return d(h,g,x,wf(g,y),R);Rf(g,y)}return null}function v(h,g,x,y){for(var R=null,E=null,T=g,_=g=0,w=null;T!==null&&_<x.length;_++){T.index>_?(w=T,T=null):w=T.sibling;var U=u(h,T,x[_],y);if(U===null){T===null&&(T=w);break}t&&T&&U.alternate===null&&e(h,T),g=r(U,g,_),E===null?R=U:E.sibling=U,E=U,T=w}if(_===x.length)return n(h,T),it&&Za(h,_),R;if(T===null){for(;_<x.length;_++)T=p(h,x[_],y),T!==null&&(g=r(T,g,_),E===null?R=T:E.sibling=T,E=T);return it&&Za(h,_),R}for(T=i(T);_<x.length;_++)w=d(T,h,_,x[_],y),w!==null&&(t&&(U=w.alternate,U!==null&&T.delete(U.key===null?_:U.key)),g=r(w,g,_),E===null?R=w:E.sibling=w,E=w);return t&&T.forEach(function(N){return e(h,N)}),it&&Za(h,_),R}function S(h,g,x,y){if(x==null)throw Error(K(151));for(var R=null,E=null,T=g,_=g=0,w=null,U=x.next();T!==null&&!U.done;_++,U=x.next()){T.index>_?(w=T,T=null):w=T.sibling;var N=u(h,T,U.value,y);if(N===null){T===null&&(T=w);break}t&&T&&N.alternate===null&&e(h,T),g=r(N,g,_),E===null?R=N:E.sibling=N,E=N,T=w}if(U.done)return n(h,T),it&&Za(h,_),R;if(T===null){for(;!U.done;_++,U=x.next())U=p(h,U.value,y),U!==null&&(g=r(U,g,_),E===null?R=U:E.sibling=U,E=U);return it&&Za(h,_),R}for(T=i(T);!U.done;_++,U=x.next())U=d(T,h,_,U.value,y),U!==null&&(t&&(w=U.alternate,w!==null&&T.delete(w.key===null?_:w.key)),g=r(U,g,_),E===null?R=U:E.sibling=U,E=U);return t&&T.forEach(function(I){return e(h,I)}),it&&Za(h,_),R}function m(h,g,x,y){if(typeof x=="object"&&x!==null&&x.type===Yo&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Sf:e:{for(var R=x.key;g!==null;){if(g.key===R){if(R=x.type,R===Yo){if(g.tag===7){n(h,g.sibling),y=a(g,x.props.children),Dr(y,x),y.return=h,h=y;break e}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pr&&ws(R)===g.type){n(h,g.sibling),y=a(g,x.props),Dr(y,x),y.return=h,h=y;break e}n(h,g);break}else e(h,g);g=g.sibling}x.type===Yo?(y=Hs(x.props.children,h.mode,y,x.key),Dr(y,x),y.return=h,h=y):(y=nd(x.type,x.key,x.props,null,h.mode,y),Dr(y,x),y.return=h,h=y)}return s(h);case Cc:e:{for(R=x.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),y=a(g,x.children||[]),y.return=h,h=y;break e}else{n(h,g);break}else e(h,g);g=g.sibling}y=gm(x,h.mode,y),y.return=h,h=y}return s(h);case Pr:return x=ws(x),m(h,g,x,y)}if(Rc(x))return v(h,g,x,y);if(vc(x)){if(R=vc(x),typeof R!="function")throw Error(K(150));return x=R.call(x),S(h,g,x,y)}if(typeof x.then=="function")return m(h,g,Cf(x),y);if(x.$$typeof===Ma)return m(h,g,wf(h,x),y);Rf(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),y=a(g,x),y.return=h,h=y):(n(h,g),y=mm(x,h.mode,y),y.return=h,h=y),s(h)):n(h,g)}return function(h,g,x,y){try{cu=0;var R=m(h,g,x,y);return pl=null,R}catch(T){if(T===ql||T===Dh)throw T;var E=ti(29,T,null,h.mode);return E.lanes=y,E.return=h,E}finally{}}}var Qs=oT(!0),lT=oT(!1),Or=!1;function qv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Zr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Pd(t),JE(t,null,n),e}return Ch(t,i,e,n),Pd(t)}function Gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,TE(t,n)}}function _m(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var fg=!1;function Vc(){if(fg){var t=hl;if(t!==null)throw t}}function kc(t,e,n,i){fg=!1;var a=t.updateQueue;Or=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,f=c=l=null,o=r;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ot&u)===u:(i&u)===u){u!==0&&u===$s&&(fg=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var v=t,S=o;u=e;var m=n;switch(S.tag){case 1:if(v=S.payload,typeof v=="function"){p=v.call(m,p,u);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,u=typeof v=="function"?v.call(m,p,u):v,u==null)break e;p=Ot({},p,u);break e;case 2:Or=!0}}u=o.callback,u!==null&&(t.flags|=64,d&&(t.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);f===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,r===null&&(a.shared.lanes=0),ls|=s,t.lanes=s,t.memoizedState=p}}function cT(t,e){if(typeof t!="function")throw Error(K(191,t));t.call(e)}function uT(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)cT(n[t],e)}var ss=Ia(null),Bd=Ia(0);function NS(t,e){t=fr,Ht(Bd,t),Ht(ss,e),fr=t|e.baseLanes}function dg(){Ht(Bd,fr),Ht(ss,ss.current)}function Wv(){fr=Bd.current,wn(ss),wn(Bd)}var Dn=Ia(null),In=null;function Qr(t){var e=t.alternate;Ht(Cn,Cn.current&1),Ht(Dn,t),In===null&&(e===null||ss.current!==null||e.memoizedState!==null)&&(In=t)}function hg(t){Ht(Cn,Cn.current),Ht(Dn,t),In===null&&(In=t)}function fT(t){t.tag===22?(Ht(Cn,Cn.current),Ht(Dn,t),In===null&&(In=t)):Kr()}function Kr(){Ht(Cn,Cn.current),Ht(Dn,Dn.current)}function hi(t){wn(Dn),In===t&&(In=null),wn(Cn)}var Cn=Ia(0);function uu(t,e){Ht(Dn,Dn.current),Ht(Cn,e)}function Yv(t){wn(Cn),wn(Dn),In===t&&(In=null)}function Hd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wg(n)||S_(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lr=0,Ye=null,Ct=null,rn=null,Gd=!1,ml=!1,Ks=!1,Vd=0,fu=0,gl=null,cI=0;function Wt(){throw Error(K(321))}function Zv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Si(t[n],e[n]))return!1;return!0}function $v(t,e,n,i,a,r){return lr=r,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Be.H=t===null||t.memoizedState===null?VT:kT,Ks=!1,r=n(i,a),Ks=!1,ml&&(r=hT(e,n,i,a)),dT(t),r}function dT(t){Be.H=kd;var e=Ct!==null&&Ct.next!==null;if(lr=0,rn=Ct=Ye=null,Gd=!1,fu=0,gl=null,e)throw Error(K(300));t===null||ln||(t=t.dependencies,t!==null&&Id(t)&&(ln=!0))}function hT(t,e,n,i){Ye=t;var a=0;do{if(ml&&(gl=null),fu=0,ml=!1,25<=a)throw Error(K(301));if(a+=1,rn=Ct=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Be.H=vI,r=e(n,i)}while(ml);return r}function uI(){var t=Be.H,e=t.useState()[0];return e=typeof e.then=="function"?Du(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(Ye.flags|=1024),e}function Qv(){var t=Vd!==0;return Vd=0,t}function Kv(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Jv(t){if(Gd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Gd=!1}lr=0,rn=Ct=Ye=null,ml=!1,fu=Vd=0,gl=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ye.memoizedState=rn=t:rn=rn.next=t,rn}function tn(){if(Ct===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=rn===null?Ye.memoizedState:rn.next;if(e!==null)rn=e,Ct=t;else{if(t===null)throw Ye.alternate===null?Error(K(467)):Error(K(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},rn===null?Ye.memoizedState=rn=t:rn=rn.next=t}return rn}function Nh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Du(t){var e=fu;return fu+=1,gl===null&&(gl=[]),t=sT(gl,t,e),e=Ye,(rn===null?e.memoizedState:rn.next)===null&&(e=e.alternate,Be.H=e===null||e.memoizedState===null?VT:kT),t}function Uh(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Du(t);if(t.$$typeof===jz)return;if(t.$$typeof===Ma)return An(t)}throw Error(K(438,String(t)))}function e_(t){var e=null,n=Ye.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Nh(),Ye.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=Xz;return e.index++,n}function cr(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=tn();return t_(e,Ct,t)}function t_(t,e,n){var i=t.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ot&p)===p:(lr&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===$s&&(f=!0);else if((lr&u)===u){c=c.next,u===$s&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,s=r):l=l.next=p,Ye.lanes|=u,ls|=u;p=c.action,Ks&&n(r,p),r=c.hasEagerState?c.eagerState:n(r,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,Ye.lanes|=p,ls|=p;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!Si(r,t.memoizedState)&&(ln=!0,f&&(n=hl,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function xm(t){var e=tn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Si(r,e.memoizedState)||(ln=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function pT(t,e,n){var i=Ye,a=tn(),r=it;if(r){if(n===void 0)throw Error(K(407));n=n()}else n=e();var s=!Si((Ct||a).memoizedState,n);if(s&&(a.memoizedState=n,ln=!0),a=a.queue,n_(vT.bind(null,i,a,t),[t]),t=a.getSnapshot!==e||s||rn!==null&&(rn.memoizedState.tag&1)!==0,Dl(t?9:8,{destroy:void 0},gT.bind(null,i,a,n,e),null),t){if(i.flags|=2048,Pt===null)throw Error(K(349));r||lr&127||mT(i,e,n)}return n}function mT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e=Nh(),Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gT(t,e,n,i){e.value=n,e.getSnapshot=i,_T(e)&&xT(t)}function vT(t,e,n){return n(function(){_T(e)&&xT(t)})}function _T(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Si(t,n)}catch{return!0}}function xT(t){var e=so(t,2);e!==null&&ii(e,t,2)}function pg(t){var e=Xn();if(typeof t=="function"){var n=t;if(t=n(),Ks){Hr(!0);try{n()}finally{Hr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:t},e}function yT(t,e,n,i){return t.baseState=n,t_(t,Ct,typeof i=="function"?i:cr)}function fI(t,e,n,i,a){if(Ph(t))throw Error(K(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Be.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,ST(e,r)):(r.next=n.next,e.pending=n.next=r)}}function ST(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=Be.T,s={};s.types=r!==null?r.types:null,Be.T=s;try{var o=n(a,i),l=Be.S;l!==null&&l(s,o),US(t,e,o)}catch(c){mg(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),Be.T=r}}else try{r=n(a,i),US(t,e,r)}catch(c){mg(t,e,c)}}function US(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){LS(t,e,i)},function(i){return mg(t,e,i)}):LS(t,e,n)}function LS(t,e,n){e.status="fulfilled",e.value=n,MT(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,ST(t,n)))}function mg(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,MT(e),e=e.next;while(e!==i)}t.action=null}function MT(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function bT(t,e){return e}function PS(t,e){if(it){var n=Pt.formState;if(n!==null){e:{var i=Ye;if(it){if(Ft){t:{for(var a=Ft,r=Ii;a.nodeType!==8;){if(!r){a=null;break t}if(a=Bi(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ft=Bi(a.nextSibling),i=a.data==="F!";break e}}rs(i)}i=!1}i&&(e=n[0])}}return n=Xn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bT,lastRenderedState:e},n.queue=i,n=BT.bind(null,Ye,i),i.dispatch=n,i=pg(!1),r=s_.bind(null,Ye,!1,i.queue),i=Xn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=fI.bind(null,Ye,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function OS(t){var e=tn();return ET(e,Ct,t)}function ET(t,e,n){if(e=t_(t,e,bT)[0],t=rd(cr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Du(e)}catch(s){throw s===ql?Dh:s}else i=e;e=tn();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(Ye.flags|=2048,Dl(9,{destroy:void 0},dI.bind(null,a,n),null)),[i,r,t]}function dI(t,e){t.action=e}function zS(t){var e=tn(),n=Ct;if(n!==null)return ET(e,n,t);tn(),e=e.memoizedState,n=tn();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Dl(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ye.updateQueue,e===null&&(e=Nh(),Ye.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function TT(){return tn().memoizedState}function sd(t,e,n,i){var a=Xn();Ye.flags|=t,a.memoizedState=Dl(1|e,{destroy:void 0},n,i===void 0?null:i)}function Lh(t,e,n,i){var a=tn();i=i===void 0?null:i;var r=a.memoizedState.inst;Ct!==null&&i!==null&&Zv(i,Ct.memoizedState.deps)?a.memoizedState=Dl(e,r,n,i):(Ye.flags|=t,a.memoizedState=Dl(1|e,r,n,i))}function IS(t,e){sd(8390656,8,t,e)}function n_(t,e){Lh(2048,8,t,e)}function hI(t){Ye.flags|=4;var e=Ye.updateQueue;if(e===null)e=Nh(),Ye.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function AT(t){var e=tn().memoizedState;return hI({ref:e,nextImpl:t}),function(){if(vt&2)throw Error(K(440));return e.impl.apply(void 0,arguments)}}function wT(t,e){return Lh(4,2,t,e)}function CT(t,e){return Lh(4,4,t,e)}function RT(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function DT(t,e,n){n=n!=null?n.concat([t]):null,Lh(4,4,RT.bind(null,e,t),n)}function i_(){}function NT(t,e){var n=tn();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Zv(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function UT(t,e){var n=tn();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Zv(e,i[1]))return i[0];if(i=t(),Ks){Hr(!0);try{t()}finally{Hr(!1)}}return n.memoizedState=[i,e],i}function a_(t,e,n){return n===void 0||lr&1073741824&&!(ot&261930)?t.memoizedState=e:(t.memoizedState=n,t=EA(),Ye.lanes|=t,ls|=t,n)}function LT(t,e,n,i){return Si(n,e)?n:ss.current!==null?(t=a_(t,n,i),Si(t,e)||(ln=!0),t):!(lr&106)||lr&1073741824&&!(ot&261930)?(ln=!0,t.memoizedState=n):(t=EA(),Ye.lanes|=t,ls|=t,e)}function PT(t,e,n,i,a){var r=_t.p;_t.p=r!==0&&8>r?r:8;var s=Be.T,o={};o.types=s!==null?s.types:null,Be.T=o,s_(t,!1,e,n);try{var l=a(),c=Be.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=lI(l,i);Xc(t,e,f,yi(t))}else Xc(t,e,i,yi(t))}catch(p){Xc(t,e,{then:function(){},status:"rejected",reason:p},yi())}finally{_t.p=r,s!==null&&o.types!==null&&(s.types=o.types),Be.T=s}}function pI(){}function gg(t,e,n,i){if(t.tag!==5)throw Error(K(476));var a=OT(t).queue;PT(t,a,e,Bs,n===null?pI:function(){return zT(t),n(i)})}function OT(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Bs,baseState:Bs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:Bs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function zT(t){var e=OT(t);e.next===null&&(e=t.alternate.memoizedState),Xc(t,e.next.queue,{},yi())}function r_(){return An(Il)}function IT(){return tn().memoizedState}function FT(){return tn().memoizedState}function mI(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=yi();t=Zr(n);var i=$r(e,t,n);i!==null&&(ii(i,e,n),Gc(i,e,n)),e={cache:kv()},t.payload=e;return}e=e.return}}function gI(t,e,n){var i=yi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ph(t)?HT(e,n):(n=Hv(t,e,n,i),n!==null&&(ii(n,t,i),GT(n,e,i)))}function BT(t,e,n){var i=yi();Xc(t,e,n,i)}function Xc(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))HT(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Si(o,s))return Ch(t,e,a,0),Pt===null&&wh(),!1}catch{}finally{}if(n=Hv(t,e,a,i),n!==null)return ii(n,t,i),GT(n,e,i),!0}return!1}function s_(t,e,n,i){if(i={lane:2,revertLane:v_(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ph(t)){if(e)throw Error(K(479))}else e=Hv(t,n,i,2),e!==null&&ii(e,t,2)}function Ph(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function HT(t,e){ml=Gd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function GT(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,TE(t,n)}}var kd={readContext:An,use:Uh,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt,useEffectEvent:Wt},VT={readContext:An,use:Uh,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:IS,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,sd(4194308,4,RT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sd(4194308,4,t,e)},useInsertionEffect:function(t,e){sd(4,2,t,e)},useMemo:function(t,e){var n=Xn();e=e===void 0?null:e;var i=t();if(Ks){Hr(!0);try{t()}finally{Hr(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Xn();if(n!==void 0){var a=n(e);if(Ks){Hr(!0);try{n(e)}finally{Hr(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=gI.bind(null,Ye,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:function(t){t=pg(t);var e=t.queue,n=BT.bind(null,Ye,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:i_,useDeferredValue:function(t,e){var n=Xn();return a_(n,t,e)},useTransition:function(){var t=pg(!1);return t=PT.bind(null,Ye,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ye,a=Xn();if(it){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),Pt===null)throw Error(K(349));ot&127||mT(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,IS(vT.bind(null,i,r,t),[t]),i.flags|=2048,Dl(9,{destroy:void 0},gT.bind(null,i,r,n,e),null),n},useId:function(){var t=Xn(),e=Pt.identifierPrefix;if(it){var n=Ta,i=Ea;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Vd++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=cI++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:r_,useFormState:PS,useActionState:PS,useOptimistic:function(t){var e=Xn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=s_.bind(null,Ye,!0,n),n.dispatch=e,[t,e]},useMemoCache:e_,useCacheRefresh:function(){return Xn().memoizedState=mI.bind(null,Ye)},useEffectEvent:function(t){var e=Xn(),n={impl:t};return e.memoizedState=n,function(){if(vt&2)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},kT={readContext:An,use:Uh,useCallback:NT,useContext:An,useEffect:n_,useImperativeHandle:DT,useInsertionEffect:wT,useLayoutEffect:CT,useMemo:UT,useReducer:rd,useRef:TT,useState:function(){return rd(cr)},useDebugValue:i_,useDeferredValue:function(t,e){var n=tn();return LT(n,Ct.memoizedState,t,e)},useTransition:function(){var t=rd(cr)[0],e=tn().memoizedState;return[typeof t=="boolean"?t:Du(t),e]},useSyncExternalStore:pT,useId:IT,useHostTransitionStatus:r_,useFormState:OS,useActionState:OS,useOptimistic:function(t,e){var n=tn();return yT(n,Ct,t,e)},useMemoCache:e_,useCacheRefresh:FT,useEffectEvent:AT},vI={readContext:An,use:Uh,useCallback:NT,useContext:An,useEffect:n_,useImperativeHandle:DT,useInsertionEffect:wT,useLayoutEffect:CT,useMemo:UT,useReducer:xm,useRef:TT,useState:function(){return xm(cr)},useDebugValue:i_,useDeferredValue:function(t,e){var n=tn();return Ct===null?a_(n,t,e):LT(n,Ct.memoizedState,t,e)},useTransition:function(){var t=xm(cr)[0],e=tn().memoizedState;return[typeof t=="boolean"?t:Du(t),e]},useSyncExternalStore:pT,useId:IT,useHostTransitionStatus:r_,useFormState:zS,useActionState:zS,useOptimistic:function(t,e){var n=tn();return Ct!==null?yT(n,Ct,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:e_,useCacheRefresh:FT,useEffectEvent:AT};function ym(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ot({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vg={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yi(),a=Zr(i);a.payload=e,n!=null&&(a.callback=n),e=$r(t,a,i),e!==null&&(ii(e,t,i),Gc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yi(),a=Zr(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=$r(t,a,i),e!==null&&(ii(e,t,i),Gc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yi(),i=Zr(n);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,n),e!==null&&(ii(e,t,n),Gc(e,t,n))}};function FS(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!su(n,i)||!su(a,r):!0}function BS(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vg.enqueueReplaceState(e,e.state,null)}function Js(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Ot({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function XT(t){Ld(t)}function jT(t){console.error(t)}function qT(t){Ld(t)}function Xd(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function HS(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function _g(t,e,n){return n=Zr(n),n.tag=3,n.payload={element:null},n.callback=function(){Xd(t,e)},n}function WT(t){return t=Zr(t),t.tag=3,t}function YT(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){HS(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){HS(e,n,i),typeof a!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function _I(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Ys(e,n,a,!0),n=Dn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return In===null?Kd():n.alternate===null&&Yt===0&&(Yt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Fd?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),wm(t,i,a)),!1;case 22:return n.flags|=65536,i===Fd?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),wm(t,i,a)),!1}throw Error(K(435,n.tag))}return wm(t,i,a),Kd(),!1}if(it)return e=Dn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==sg&&(t=Error(K(422),{cause:i}),lu(zi(t,n)))):(i!==sg&&(e=Error(K(423),{cause:i}),lu(zi(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=zi(i,n),a=_g(t.stateNode,i,a),_m(t,a),Yt!==4&&(Yt=2)),!1;var r=Error(K(520),{cause:i});if(r=zi(r,n),Yc===null?Yc=[r]:Yc.push(r),Yt!==4&&(Yt=2),e===null)return!0;i=zi(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=_g(n.stateNode,i,t),_m(n,t),!1;case 1:if(e=n.type,r=n.stateNode,!(n.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=WT(a),YT(a,t,n,i),_m(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var o_=Error(K(461)),ln=!1;function un(t,e,n,i){e.child=t===null?lT(e,null,n,i):Qs(e,t.child,n,i)}function GS(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Zs(e),i=$v(t,e,n,s,r,a),o=Qv(),t!==null&&!ln?(Kv(t,e,a),ur(t,e,a)):(it&&o&&Rh(e),e.flags|=1,un(t,e,i,a),e.child)}function VS(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Gv(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,ZT(t,e,r,i,a)):(t=nd(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!c_(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:su,n(s,i)&&t.ref===e.ref)return ur(t,e,a)}return e.flags|=1,t=tr(r,i),t.ref=e.ref,t.return=e,e.child=t}function ZT(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(su(r,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=r,c_(t,a))t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,ur(t,e,a)}return xg(t,e,n,i,a)}function $T(t,e,n,i){var a=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,e.child=null;return kS(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ad(e,r!==null?r.cachePool:null),r!==null?NS(e,r):dg(),fT(e);else return i=e.lanes=536870912,kS(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(ad(e,r.cachePool),NS(e,r),Kr(),e.memoizedState=null):(t!==null&&ad(e,null),dg(),Kr());return un(t,e,a,n),e.child}function jc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function kS(t,e,n,i,a){var r=Xv();return r=r===null?null:{parent:sn._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&ad(e,null),dg(),fT(e),t!==null&&Ys(t,e,i,!0),e.childLanes=a,null}function od(t,e){return e=Oh({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function XS(t,e,n){return Qs(e,t.child,null,n),t=od(e,e.pendingProps),t.flags|=2,hi(e),e.memoizedState=null,t}function xI(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(it){if(i.mode==="hidden")return t=od(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},jc(null,t);if(hg(e),(t=Ft)?(t=ZA(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:as!==null?{id:Ea,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},n=tT(t),n.return=e,e.child=n,Mn=e,Ft=null)):t=null,t===null)throw rs(e);return e.lanes=536870912,null}return od(e,i)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(hg(e),a)if(e.flags&256)e.flags&=-257,e=XS(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(K(558));else if(ln||Ys(t,e,n,!1),a=(n&t.childLanes)!==0,ln||a){if(ss.current===null){if(i=Pt,i!==null&&(s=AE(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,so(t,s),ii(i,t,s),o_;Kd()}e=XS(t,e,n)}else t=r.treeContext,Ft=Bi(s.nextSibling),Mn=e,it=!0,Yr=null,Ii=!1,t!==null&&iT(e,t),e=od(e,i),e.flags|=134221824;return e}return t=tr(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ko(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function xg(t,e,n,i,a){return Zs(e),n=$v(t,e,n,i,void 0,a),i=Qv(),t!==null&&!ln?(Kv(t,e,a),ur(t,e,a)):(it&&i&&Rh(e),e.flags|=1,un(t,e,n,a),e.child)}function jS(t,e,n,i,a,r){return Zs(e),e.updateQueue=null,n=hT(e,i,n,a),dT(t),i=Qv(),t!==null&&!ln?(Kv(t,e,r),ur(t,e,r)):(it&&i&&Rh(e),e.flags|=1,un(t,e,n,r),e.child)}function qS(t,e,n,i,a){if(Zs(e),e.stateNode===null){var r=tl,s=n.contextType;typeof s=="object"&&s!==null&&(r=An(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=vg,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},qv(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?An(s):tl,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ym(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&vg.enqueueReplaceState(r,r.state,null),kc(e,i,r,a),Vc(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=Js(n,o);r.props=l;var c=r.context,f=n.contextType;s=tl,typeof f=="object"&&f!==null&&(s=An(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&BS(e,r,i,s),Or=!1;var u=e.memoizedState;r.state=u,kc(e,i,r,a),Vc(),c=e.memoizedState,o||u!==c||Or?(typeof p=="function"&&(ym(e,n,p,i),c=e.memoizedState),(l=Or||FS(e,n,l,i,u,c,s))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,ug(t,e),s=e.memoizedProps,f=Js(n,s),r.props=f,p=e.pendingProps,u=r.context,c=n.contextType,l=tl,typeof c=="object"&&c!==null&&(l=An(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||u!==l)&&BS(e,r,i,l),Or=!1,u=e.memoizedState,r.state=u,kc(e,i,r,a),Vc();var d=e.memoizedState;s!==p||u!==d||Or||t!==null&&t.dependencies!==null&&Id(t.dependencies)?(typeof o=="function"&&(ym(e,n,o,i),d=e.memoizedState),(f=Or||FS(e,n,f,i,u,d,l)||t!==null&&t.dependencies!==null&&Id(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=d),r.props=i,r.state=d,r.context=l,i=f):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,ko(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Qs(e,t.child,null,a),e.child=Qs(e,null,n,a)):un(t,e,n,a),e.memoizedState=r.state,t=e.child):t=ur(t,e,a),t}function WS(t,e,n,i){return Ws(),e.flags|=256,un(t,e,n,i),e.child}var yg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sg(t){return{baseLanes:t,cachePool:rT()}}function Mg(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=mi),t}function QT(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(it){if(a?Qr(e):Kr(),(t=Ft)?(t=ZA(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:as!==null?{id:Ea,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},n=tT(t),n.return=e,e.child=n,Mn=e,Ft=null)):t=null,t===null)throw rs(e);return S_(t)?e.lanes=32:e.lanes=536870912,null}return r=i.children,i=i.fallback,a?(Kr(),a=e.mode,r=Oh({mode:"hidden",children:r},a),i=Hs(i,a,n,null),r.return=e,i.return=e,r.sibling=i,e.child=r,i=e.child,i.memoizedState=Sg(n),i.childLanes=Mg(t,s,n),e.memoizedState=yg,jc(null,i)):(Qr(e),l_(e,r))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return yI(t,e,r,s,i,l,o,n)}return a?(Kr(),a=i.fallback,r=e.mode,o=t.child,l=o.sibling,i=tr(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=tr(l,a):(a=Hs(a,r,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,jc(null,i),i=e.child,a=t.child.memoizedState,a===null?a=Sg(n):(r=a.cachePool,r!==null?(o=sn._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=rT(),a={baseLanes:a.baseLanes|n,cachePool:r}),i.memoizedState=a,i.childLanes=Mg(t,s,n),e.memoizedState=yg,jc(t.child,i)):(Qr(e),n=t.child,t=n.sibling,n=tr(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function l_(t,e){return e=Oh({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Oh(t,e){return t=ti(22,t,null,e),t.lanes=0,t}function Df(t,e,n){return Qs(e,t.child,null,n),t=l_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yI(t,e,n,i,a,r,s,o){if(n)return e.flags&256?(Qr(e),e.flags&=-257,Df(t,e,o)):e.memoizedState!==null?(Kr(),e.child=t.child,e.flags|=128,null):(Kr(),r=a.fallback,s=e.mode,a=Oh({mode:"visible",children:a.children},s),r=Hs(r,s,o,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,Qs(e,t.child,null,o),a=e.child,a.memoizedState=Sg(o),a.childLanes=Mg(t,i,o),e.memoizedState=yg,jc(null,a));if(Qr(e),S_(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(K(419)),a.stack="",a.digest=i,lu({value:a,source:null,stack:null})),Df(t,e,o)}if(ln||Ys(t,e,o,!1),i=(o&t.childLanes)!==0,ln||i){if(ss.current!==null)return Df(t,e,o);if(i=Pt,i!==null&&(a=AE(i,o),a!==0&&a!==s.retryLane))throw s.retryLane=a,so(t,a),ii(i,t,a),o_;return Wg(r)||Kd(),Df(t,e,o)}return Wg(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,Ft=Bi(r.nextSibling),Mn=e,it=!0,Yr=null,Ii=!1,t!==null&&iT(e,t),e=l_(e,a.children),e.flags|=134221824,e)}function YS(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function ZS(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&Hd(n)===null&&(e=t),t=t.sibling}return e}function Nf(t,e,n,i,a,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function Sm(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function bg(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=Cn.current;if(e.flags&128)return uu(e,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,uu(e,s),a==="backwards"&&t!==null?(Sm(t),un(t,e,i,n),Sm(t)):un(t,e,i,n),i=it?ou:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&YS(t,n,e);else if(t.tag===19)YS(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":n=ZS(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null,Sm(e)),Nf(e,!0,a,null,r,i);break;case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Hd(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Nf(e,!0,n,null,r,i);break;case"together":Nf(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=ZS(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Nf(e,!1,a,n,r,i)}return e.child}function $S(t,e,n){var i=e.pendingProps;return Vr(e,e.type,i.value),un(t,e,i.children,n),e.child}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))if(t!==null){if(Ys(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c_(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Id(t)))}function SI(t,e,n){switch(e.tag){case 3:Rd(e,e.stateNode.containerInfo),Vr(e,sn,t.memoizedState.cache),Ws();break;case 27:case 5:$0(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:Vr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hg(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return Qr(e),e.flags|=128,null;i=Ys(t,e,n,!1);var a=e.child.childLanes;return i||n&a?QT(t,e,n):(Qr(e),t=ur(t,e,n),t!==null?t.sibling:null)}Qr(e);break;case 19:if(e.flags&128)return bg(t,e,n);if(a=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(Ys(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return bg(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),uu(e,Cn.current),i)break;return null;case 22:return e.lanes=0,$T(t,e,n,e.pendingProps);case 24:Vr(e,sn,t.memoizedState.cache)}return ur(t,e,n)}function KT(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ln=!0;else{if(!c_(t,n)&&!(e.flags&128))return ln=!1,SI(t,e,n);ln=!!(t.flags&131072)}else ln=!1,it&&e.flags&1048576&&nT(e,ou,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=ws(e.elementType),e.type=t,typeof t=="function")Gv(t)?(i=Js(t,i),e.tag=1,e=qS(null,e,t,i,n)):(e.tag=0,e=xg(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Cv){e.tag=11,e=GS(null,e,t,i,n);break e}else if(a===Rv){e.tag=14,e=VS(null,e,t,i,n);break e}else if(a===Ma){e.tag=10,e.type=t,e=$S(null,e,n);break e}}throw e=Y0(t)||t,Error(K(306,e,""))}}return e;case 0:return xg(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Js(i,e.pendingProps),qS(t,e,i,a,n);case 3:e:{if(Rd(e,e.stateNode.containerInfo),t===null)throw Error(K(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,ug(t,e),kc(e,i,null,n);var s=e.memoizedState;if(i=s.cache,Vr(e,sn,i),i!==r.cache&&lg(e,[sn],n,!0),Vc(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=WS(t,e,i,n);break e}else if(i!==a){a=zi(Error(K(424)),e),lu(a),e=WS(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ft=Bi(t.firstChild),Mn=e,it=!0,Yr=null,Ii=!0,n=lT(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ws(),i===a){e=ur(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 26:return ko(t,e),t===null?(n=S1(e.type,null,e.pendingProps,null))?e.memoizedState=n:it||(e.stateNode=GA(e.type,e.pendingProps,Wr.current,e)):e.memoizedState=S1(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $0(e),t===null&&it&&(i=e.stateNode=$A(e.type,e.pendingProps,Wr.current),Mn=e,Ii=!0,a=Ft,us(e.type)?(Yg=a,Ft=Bi(i.firstChild)):Ft=a),un(t,e,e.pendingProps.children,n),ko(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&it&&((a=i=Ft)&&(i=m5(i,e.type,e.pendingProps,Ii),i!==null?(e.stateNode=i,Mn=e,Ft=Bi(i.firstChild),Ii=!1,a=!0):a=!1),a||rs(e)),$0(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,Xg(a,r)?i=null:s!==null&&Xg(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=$v(t,e,uI,null,null,n),Il._currentValue=a),ko(t,e),un(t,e,i,n),e.child;case 6:return t===null&&it&&((t=n=Ft)&&(n=g5(n,e.pendingProps,Ii),n!==null?(e.stateNode=n,Mn=e,Ft=null,t=!0):t=!1),t||rs(e)),null;case 13:return QT(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):un(t,e,i,n),e.child;case 11:return GS(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,ko(t,e),un(t,e,i,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:return $S(t,e,n);case 9:return a=e.type._context,i=e.pendingProps.children,Zs(e),a=An(a),i=i(a),e.flags|=1,un(t,e,i,n),e.child;case 14:return VS(t,e,e.type,e.pendingProps,n);case 15:return ZT(t,e,e.type,e.pendingProps,n);case 19:return bg(t,e,n);case 31:return xI(t,e,n);case 22:return $T(t,e,n,e.pendingProps);case 24:return Zs(e),i=An(sn),t===null?(a=Xv(),a===null&&(a=Pt,r=kv(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},qv(e),Vr(e,sn,a)):(t.lanes&n&&(ug(t,e),kc(e,null,null,n),Vc()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Vr(e,sn,i)):(i=r.cache,Vr(e,sn,i),i!==a.cache&&lg(e,[sn],n,!0))),un(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:it&&Rh(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:ko(t,e),un(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(K(156,e.tag))}function Wa(t){t.flags|=4}function Mm(t,e,n,i,a){var r;if((r=(t.mode&32)!==0)&&(r=n===null?E1(e,i):E1(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(wA())t.flags|=8192;else throw Vs=Fd,jv}else t.flags&=-16777217}function QS(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ew(e))if(wA())t.flags|=8192;else throw Vs=Fd,jv}function Uf(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?bE():536870912,t.lanes|=e,Nl|=e)}function yc(t,e){if(!it)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function MI(t,e,n){var i=e.pendingProps;switch(Vv(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return It(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),nr(sn),wl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?Wa(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vm())),It(e),null;case 26:var a=e.type,r=e.memoizedState;return t===null?(Wa(e),r!==null?(It(e),QS(e,r)):(It(e),Mm(e,a,null,i,n))):r?r!==t.memoizedState?(Wa(e),It(e),QS(e,r)):(It(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Wa(e),It(e),Mm(e,a,t,i,n)),null;case 27:if(Dd(e),n=Wr.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Wa(e);else{if(!i){if(e.stateNode===null)throw Error(K(166));return It(e),e.subtreeFlags&=-33554433,null}t=Da.current,Ho(e)?ES(e):(t=$A(a,i,n),e.stateNode=t,Wa(e))}return It(e),e.subtreeFlags&=-33554433,null;case 5:if(Dd(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Wa(e);else{if(!i){if(e.stateNode===null)throw Error(K(166));return It(e),e.subtreeFlags&=-33554433,null}if(r=Da.current,Ho(e))ES(e);else{var s=pu(Wr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[En]=e,r[si]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(Rn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Wa(e)}}return It(e),e.subtreeFlags&=-33554433,Mm(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Wa(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(K(166));if(t=Wr.current,Ho(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=Mn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[En]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||BA(t.nodeValue,n)),t||rs(e,!0)}else t=pu(t).createTextNode(i),t[En]=e,e.stateNode=t}return It(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ho(e),n!==null){if(t===null){if(!i)throw Error(K(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(557));t[En]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),t=!1}else n=vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(hi(e),e):(hi(e),null);if(e.flags&128)throw Error(K(558))}return It(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(K(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[En]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),a=!1}else a=vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(hi(e),e):(hi(e),null)}return hi(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Uf(e,e.updateQueue),It(e),null);case 4:return wl(),t===null&&__(e.stateNode.containerInfo),e.flags|=67108864,It(e),null;case 10:return nr(e.type),It(e),null;case 19:if(Yv(e),i=e.memoizedState,i===null)return It(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)yc(i,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=Hd(t),r!==null){for(e.flags|=128,yc(i,!1),t=r.updateQueue,e.updateQueue=t,Uf(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)eT(n,t),n=n.sibling;return uu(e,Cn.current&1|2),it&&Za(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&vi()>$d&&(e.flags|=128,a=!0,yc(i,!1),e.lanes=4194304)}else{if(!a)if(t=Hd(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Uf(e,t),yc(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!it)return It(e),null}else 2*vi()-i.renderingStartTime>$d&&n!==536870912&&(e.flags|=128,a=!0,yc(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=vi(),t.sibling=null,r=Cn.current,r=a?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||it?uu(e,r):(n=r,Ht(Dn,e),Ht(Cn,n),In===null&&(In=e)),it&&Za(e,i.treeForkCount),t}return It(e),null;case 22:case 23:return hi(e),Wv(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),n=e.updateQueue,n!==null&&Uf(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&wn(Gs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),nr(sn),It(e),null;case 25:return null;case 30:return e.flags|=33554432,It(e),null}throw Error(K(156,e.tag))}function bI(t,e){switch(Vv(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return nr(sn),wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Dd(e),null;case 31:if(e.memoizedState!==null){if(hi(e),e.alternate===null)throw Error(K(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(hi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Yv(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return wl(),null;case 10:return nr(e.type),null;case 22:case 23:return hi(e),Wv(),t!==null&&wn(Gs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return nr(sn),null;case 25:return null;default:return null}}function JT(t,e){switch(Vv(e),e.tag){case 3:nr(sn),wl();break;case 26:case 27:case 5:Dd(e);break;case 4:wl();break;case 31:e.memoizedState!==null&&hi(e);break;case 13:hi(e);break;case 19:Yv(e);break;case 10:nr(e.type);break;case 22:case 23:hi(e),Wv(),t!==null&&wn(Gs);break;case 24:nr(sn)}}function Nu(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Et(e,e.return,o)}}function os(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(f){Et(a,l,f)}}}i=i.next}while(i!==r)}}catch(f){Et(e,e.return,f)}}function eA(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{uT(e,n)}catch(i){Et(t,t.return,i)}}}function tA(t,e,n){n.props=Js(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Et(t,e,i)}}function va(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var a=t.stateNode,r=or(t.memoizedProps,a);(a.ref===null||a.ref.name!==r)&&(a.ref=XA(r)),i=a.ref;break;case 7:if(t.stateNode===null){var s=new bi(t);ri(t.child,!1,h5,s,void 0,void 0),t.stateNode=s}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){Et(t,e,o)}}function bn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Et(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Et(t,e,a)}else n.current=null}function jd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)YA(t.stateNode,e[n])}function KS(t){for(var e=t.return;e!==null&&(f_(e)&&YA(t.stateNode,e.stateNode),!u_(e));)e=e.return}function qc(t){for(var e=t.return;e!==null&&(f_(e)&&p5(t.stateNode,e.stateNode),!u_(e));)e=e.return}function u_(t){return t.tag===5||t.tag===3||t.tag===27}function f_(t){return t&&t.tag===7&&t.stateNode!==null}function Eg(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Et(t,t.return,a)}}function bm(t,e,n){try{var i=t.stateNode;ZI(i,t.type,n,e),i[si]=e}catch(a){Et(t,t.return,a)}}function nA(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&us(t.type)||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nA(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tg(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ba)),jd(t,i),pt=!0;else if(a!==4&&(a===27&&(jd(t,i),i=null,us(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Tg(t,e,n,i),t=t.sibling;t!==null;)Tg(t,e,n,i),t=t.sibling}function qd(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?n.insertBefore(a,e):n.appendChild(a),jd(t,i),pt=!0;else if(a!==4&&(a===27&&(jd(t,i),i=null,us(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(qd(t,e,n,i),t=t.sibling;t!==null;)qd(t,e,n,i),t=t.sibling}function iA(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Rn(e,i,n),e[En]=t,e[si]=n}catch(r){Et(t,t.return,r)}}var Wd=!1,pi=null;function JS(t){(t.tag===30||t.subtreeFlags&33554432)&&(Wd=!0)}var xa=null;function e1(){var t=xa;return xa=null,t}var ei=0;function Wl(t,e,n,i,a){return ei=0,aA(t.child,e,n,i,a)}function aA(t,e,n,i,a){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(i!==null){var o=jg(s);i.push(o),o.view&&(r=!0)}else r||jg(s).view&&(r=!0);Wd=!0,VA(s,ei===0?e:e+"_"+ei,n),ei++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||aA(t.child,e,n,i,a)&&(r=!0));t=t.sibling}return r}function Oa(t,e){for(;t!==null;)t.tag===5?kA(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Oa(t.child,e)),t=t.sibling}function ld(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(ld(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(K(544));var n=e.name;e=mr(e.default,e.share),e!=="none"&&(Wl(t,n,e,null,!1)||Oa(t.child,!1))}t=t.sibling}}function Ag(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,a=or(i,n),r=mr(i.default,n.paired?i.share:i.enter);r!=="none"?Wl(t,a,r,null,!1)?(ld(t),n.paired||e||Ul(t,i.onEnter)):Oa(t.child,!1):ld(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Ag(t,e),t=t.sibling;else ld(t)}function wg(t){if(pi!==null&&pi.size!==0){var e=pi;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=e.get(i);if(a!==void 0){var r=mr(n.default,n.share);if(r!=="none"&&(Wl(t,i,r,null,!1)?(r=t.stateNode,a.paired=r,r.paired=a,Ul(t,n.onShare)):Oa(t.child,!1)),e.delete(i),e.size===0)break}}}wg(t)}t=t.sibling}}}function Cg(t){if(t.tag===30){var e=t.memoizedProps,n=or(e,t.stateNode),i=pi!==null?pi.get(n):void 0,a=mr(e.default,i!==void 0?e.share:e.exit);a!=="none"&&(Wl(t,n,a,null,!1)?i!==void 0?(a=t.stateNode,i.paired=a,a.paired=i,pi.delete(n),Ul(t,e.onShare)):Ul(t,e.onExit):Oa(t.child,!1)),pi!==null&&wg(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Cg(t),t=t.sibling;else pi!==null&&wg(t)}function rA(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=or(e,t.stateNode);e=mr(e.default,e.update),t.flags&=-5,e!=="none"&&Wl(t,n,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&rA(t);t=t.sibling}}function Rg(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Oa(t.child,!1))}Rg(t)}t=t.sibling}}function cd(t){if(t.tag===30)t.stateNode.paired=null,Oa(t.child,!1),Rg(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)cd(t),t=t.sibling;else Rg(t)}function sA(t){for(t=t.child;t!==null;)t.tag===30?Oa(t.child,!1):t.subtreeFlags&33554432&&sA(t),t=t.sibling}function d_(t,e,n,i,a,r,s){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&ei<r.length){var c=r[ei],f=jg(l);(c.view||f.view)&&(o=!0);var p;if(p=(t.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(t.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(t.flags|=32)}else t.flags|=32;t.flags&4&&VA(l,ei===0?n:n+"_"+ei,a),o&&t.flags&4||(xa===null&&(xa=[]),xa.push(l,ei===0?i:i+"_"+ei,e.memoizedProps)),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:d_(t,e.child,n,i,a,r,s)&&(o=!0));e=e.sibling}return o}function oA(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,a=or(n,i),r=mr(n.default,n.update),s;s=t.memoizedState,t.memoizedState=null,i=t;var o=t.child;ei=0,a=d_(i,o,a,a,r,s,!1),t.flags&4&&a&&Ul(t,n.onUpdate)}else t.subtreeFlags&33554432&&oA(t);t=t.sibling}}var _n=!1,xt=!1,fa=!1,Tm=!1,t1=typeof WeakSet=="function"?WeakSet:Set,yn=null,da=!1,Uc=!1,Yd=!1,Dg=!1;function EI(t,e,n){if(t=t.containerInfo,Vg=Fl,t=qE(t),Fv(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var o=0,l=-1,c=-1,f=0,p=0,u=t,d=null;t:for(;;){for(var v;u!==i||r!==0&&u.nodeType!==3||(l=o+r),u!==s||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===t)break t;if(d===i&&++f===r&&(l=o),d===s&&++p===a&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(kg={focusedElem:t,selectionRange:i},Fl=!1,n=(n&335544064)===n,yn=e,e=n?9270:1024;yn!==null;){if(t=yn,n&&(i=t.deletions,i!==null))for(r=0;r<i.length;r++)n&&Cg(i[r]);if(t.alternate===null&&t.flags&2)n&&JS(t),Lf(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Cg(i),Lf(n);continue}else if(i!==null&&i.memoizedState!==null){n&&JS(t),Lf(n);continue}}i=t.child,t.subtreeFlags&e&&i!==null?(i.return=t,yn=i):(n&&rA(t),Lf(n))}}pi=null}function Lf(t){for(;yn!==null;){var e=yn,n=t,i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var r=e.stateNode;try{var s=Js(e.type,a);n=r.getSnapshotBeforeUpdate(s,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(o){Et(e,e.return,o)}}break;case 3:if(a&1024){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)qg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":qg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=or(i.memoizedProps,i.stateNode),a=e.memoizedProps,a=mr(a.default,a.update),a!=="none"&&Wl(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(K(163))}if(i=e.sibling,i!==null){i.return=e.return,yn=i;break}yn=e.return}}function lA(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ha(t,n),i&4&&Nu(5,n);break;case 1:if(ha(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Et(n,n.return,s)}else{var a=Js(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Et(n,n.return,s)}}i&64&&eA(n),i&512&&va(n,n.return);break;case 3:if(ha(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{uT(t,e)}catch(s){Et(n,n.return,s)}}break;case 27:e===null&&i&4&&iA(n);case 26:case 5:ha(t,n),e===null&&i&4&&Eg(n),i&512&&va(n,n.return);break;case 12:ha(t,n);break;case 31:ha(t,n),i&4&&dA(t,n);break;case 13:ha(t,n),i&4&&hA(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=zI.bind(null,n),v5(t,n))));break;case 22:if(i=n.memoizedState!==null||_n,!i){var r=e!==null&&e.memoizedState!==null||xt;e=_n,a=xt,_n=i,(xt=r)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),Yi(t,n,i)):ha(t,n),_n=e,xt=a}break;case 30:ha(t,n),i&512&&va(n,n.return);break;case 7:i&512&&va(n,n.return);default:ha(t,n)}}function Ng(t,e){for(t=t.child;t!==null;)cA(t,e),t=t.sibling}function cA(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;a.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Et(t,t.return,l)}Ug(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,pt=!0}catch(l){Et(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?m1(o,!0):m1(t.stateNode,!1)}catch(l){Et(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&Ng(t,e);break;default:Ng(t,e)}}function Ug(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:cA(n,i);break e;case 22:n.memoizedState===null&&Ug(n,i);break e;default:Ug(n,i)}}t=t.sibling}}function uA(t){var e=t.alternate;e!==null&&(t.alternate=null,uA(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&bh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,Kn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)fA(t,e,n),n=n.sibling}function fA(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 26:xt||bn(n,e),Wi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!xt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||bn(n,e),qc(n);var i=kt,a=Kn;us(n.type)&&(kt=n.stateNode,Kn=!1),Wi(t,e,n),QA(n.stateNode,n.type,n.memoizedProps),kt=i,Kn=a;break;case 5:xt||bn(n,e),qc(n);case 6:if(n.tag===6&&qc(n),i=kt,a=Kn,kt=null,Wi(t,e,n),kt=i,Kn=a,kt!==null)if(Kn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(n.stateNode),pt=!0}catch(r){Et(n,e,r)}else try{kt.removeChild(n.stateNode),pt=!0}catch(r){Et(n,e,r)}break;case 18:kt!==null&&(Kn?(t=kt,p1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Bl(t)):p1(kt,n.stateNode));break;case 4:i=kt,a=Kn,kt=n.stateNode.containerInfo,Kn=!0,Wi(t,e,n),kt=i,Kn=a;break;case 0:case 11:case 14:case 15:os(2,n,e),xt||os(4,n,e),Wi(t,e,n);break;case 1:xt||(bn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&tA(n,e,i)),Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:xt=(i=xt)||n.memoizedState!==null,Wi(t,e,n),xt=i;break;case 30:bn(n,e),Wi(t,e,n);break;case 7:xt||bn(n,e),Wi(t,e,n);break;default:Wi(t,e,n)}}function dA(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bl(t)}catch(n){Et(e,e.return,n)}}}function hA(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bl(t)}catch(n){Et(e,e.return,n)}}function TI(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new t1),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new t1),e;default:throw Error(K(435,t.tag))}}function Pf(t,e){var n=TI(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=II.bind(null,t,i);i.then(a,a)}})}function Hn(t,e,n){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var r=i[a],s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(us(l.type)){kt=l.stateNode,Kn=!1;break e}break;case 5:kt=l.stateNode,Kn=!1;break e;case 3:case 4:kt=l.stateNode.containerInfo,Kn=!0;break e}l=l.return}if(kt===null)throw Error(K(160));fA(s,o,r),kt=null,Kn=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)pA(e,t,n),e=e.sibling}var $i=null;function pA(t,e,n){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var s=i[r];s.ref.impl=s.nextImpl}Hn(e,t,n),Gn(t),a&4&&(os(3,t,t.return),Nu(3,t),os(5,t,t.return));break;case 1:Hn(e,t,n),Gn(t),a&512&&(xt||i===null||bn(i,i.return)),a&64&&_n&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(r=$i,Hn(e,t,n),Gn(t),a&512&&(xt||i===null||bn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(_n)t.stateNode=GA(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,a=r.ownerDocument||r;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[wu]||i[En]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),Rn(i,e,n),i[En]=t,Sn(i),e=i;break e;case"link":if(r=b1("link","href",a).get(e+(n.href||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break t}}i=a.createElement(e),Rn(i,e,n),a.head.appendChild(i);break;case"meta":if(r=b1("meta","content",a).get(e+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break t}}i=a.createElement(e),Rn(i,e,n),a.head.appendChild(i);break;default:throw Error(K(468,e))}i[En]=t,Sn(i),e=i}t.stateNode=e}else _n||Zg(r,t.type,t.stateNode);else t.stateNode=M1(r,n,t.memoizedProps);else a!==n?(a===null?(e=i.stateNode,e===null||xt||e.parentNode.removeChild(e)):a.count--,n===null?_n||Zg(r,t.type,t.stateNode):M1(r,n,t.memoizedProps)):n===null&&t.stateNode!==null&&bm(t,t.memoizedProps,i.memoizedProps);break;case 27:Hn(e,t,n),Gn(t),a&512&&(xt||i===null||bn(i,i.return)),i!==null&&a&4&&bm(t,t.memoizedProps,i.memoizedProps);break;case 5:if(r=fa,fa=!1,Hn(e,t,n),fa=r,Gn(t),a&512&&(xt||i===null||bn(i,i.return)),t.flags&32){e=t.stateNode;try{Rl(e,""),pt=!0}catch(f){Et(t,t.return,f)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,bm(t,e,i!==null?i.memoizedProps:e)),a&1024&&(Tm=!0);break;case 6:if(Hn(e,t,n),Gn(t),a&4){if(t.stateNode===null)throw Error(K(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,pt=!0}catch(f){Et(t,t.return,f)}}break;case 3:if(pt=!1,hd=null,r=$i,$i=mu(e.containerInfo),Hn(e,t,n),$i=r,Gn(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Bl(e.containerInfo)}catch(f){Et(t,t.return,f)}Tm&&(Tm=!1,mA(t)),pt=!1;break;case 4:a=fa,fa=_n,i=sS(),r=$i,$i=mu(t.stateNode.containerInfo),Hn(e,t,n),Gn(t),$i=r,pt&&Uc&&(Yd=!0),pt=i,fa=a;break;case 12:Hn(e,t,n),Gn(t);break;case 31:Hn(e,t,n),Gn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 13:Hn(e,t,n),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(zh=vi()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 22:r=t.memoizedState!==null,s=i!==null&&i.memoizedState!==null;var o=_n,l=xt,c=fa;_n=o||r,fa=c||r,xt=l||s,Hn(e,t,n),xt=l,fa=c,_n=o,Gn(t),a&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||i===null||s||_n||xt||(e=s||xt,n=_n,i=xt,_n=r||_n,xt=e,Lr(t,2),_n=n,xt=i),!r&&fa||Ng(t,r)),a&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,Pf(t,n))));break;case 19:Hn(e,t,n),Gn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 30:a&512&&(xt||i===null||bn(i,i.return)),a=sS(),r=Uc,s=(n&335544064)===n,o=t.memoizedProps,Uc=s&&mr(o.default,o.update)!=="none",Hn(e,t,n),Gn(t),s&&i!==null&&pt&&(t.flags|=4),Uc=r,pt=a;break;case 21:break;case 7:a&512&&(xt||i===null||bn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:Hn(e,t,n),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(nA(i)){n=i;break}i=i.return}i=null;for(var a=t.return;a!==null;){if(f_(a)){var r=a.stateNode;i===null?i=[r]:i.push(r)}if(u_(a))break;a=a.return}var s=i;if(n==null)throw Error(K(160));switch(n.tag){case 27:var o=n.stateNode,l=Em(t);qd(t,l,o,s);break;case 5:var c=n.stateNode;n.flags&32&&(Rl(c,""),n.flags&=-33);var f=Em(t);qd(t,f,c,s);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Em(t);Tg(t,u,p,s);break;default:throw Error(K(161))}}catch(d){Et(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mA(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;mA(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Fl=!0,e.reset(),Fl=!1),t=t.sibling}}function Go(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)gA(e,t),e=e.sibling;else oA(e)}function gA(t,e){var n=t.alternate;if(n===null)Ag(t,!1);else switch(t.tag){case 3:if(Dg=da=!1,e1(),Go(e,t),!da&&!Yd){if(t=xa,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var a=t[i+1];kA(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dg=!0}xa=null;break;case 5:Go(e,t);break;case 4:i=da,da=!1,Go(e,t),da&&(Yd=!0),da=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?Ag(t,!1):Go(e,t));break;case 30:i=da,a=e1(),da=!1,Go(e,t),da&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=or(r,s),s=or(n.memoizedProps,s);var o=mr(r.default,r.update);o==="none"?e=!1:(r=n.memoizedState,n.memoizedState=null,n=t.child,ei=0,e=d_(t,n,e,s,o,r,!0),ei!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(Ul(t,t.memoizedProps.onUpdate),xa=a):a!==null&&(a.push.apply(a,xa),xa=a),da=t.flags&32?!0:i;break;default:Go(e,t)}}function ha(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)lA(t,e.alternate,e),e=e.sibling}function Lr(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:os(4,n,n.return),Lr(n,i);break;case 1:bn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tA(n,n.return,a),Lr(n,i);break;case 27:i&2&&QA(n.stateNode,n.type,n.memoizedProps);case 5:bn(n,n.return),n.tag!==5&&n.tag!==27||qc(n),Lr(n,i);break;case 6:qc(n);break;case 26:bn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||xt||a.parentNode.removeChild(a),Lr(n,i);break;case 22:n.memoizedState===null&&Lr(n,i);break;case 30:bn(n,n.return),Lr(n,i);break;case 7:bn(n,n.return);default:Lr(n,i)}t=t.sibling}}function Yi(t,e,n){for(n=e.subtreeFlags&8772?n:n&-2,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags,o=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:Yi(a,r,n),Nu(4,r);break;case 1:if(Yi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(f){Et(i,i.return,f)}if(i=r,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)cT(c[a],l)}catch(f){Et(i,i.return,f)}}o&&s&64&&eA(r),va(r,r.return);break;case 27:n&2&&iA(r);case 5:r.tag!==5&&r.tag!==27||KS(r),Yi(a,r,n),o&&i===null&&s&4&&Eg(r),va(r,r.return);break;case 6:KS(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||_n||Zg(mu(l.ownerDocument),r.type,l),Yi(a,r,n),o&&i===null&&s&4&&Eg(r),va(r,r.return);break;case 12:Yi(a,r,n);break;case 31:Yi(a,r,n),o&&s&4&&dA(a,r);break;case 13:Yi(a,r,n),o&&s&4&&hA(a,r);break;case 22:r.memoizedState===null&&Yi(a,r,n),va(r,r.return);break;case 30:Yi(a,r,n),va(r,r.return);break;case 7:va(r,r.return);default:Yi(a,r,n)}e=e.sibling}}function h_(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ru(n))}function p_(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ru(t))}function Ci(t,e,n,i){var a=(n&335544064)===n;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)vA(t,e,n,i),e=e.sibling;else a&&sA(e)}function vA(t,e,n,i){var a=(n&335544064)===n;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&cd(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:Ci(t,e,n,i),r&2048&&Nu(9,e);break;case 1:Ci(t,e,n,i);break;case 3:Ci(t,e,n,i),a&&Dg&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&Ru(r)));break;case 12:if(r&2048){Ci(t,e,n,i),r=e.stateNode;try{var s=e.memoizedProps,o=s.id,l=s.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Et(e,e.return,c)}}else Ci(t,e,n,i);break;case 31:Ci(t,e,n,i);break;case 13:Ci(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,o=e.alternate,e.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&cd(o),s._visibility&2?Ci(t,e,n,i):Wc(t,e)):(a&&o!==null&&o.memoizedState!==null&&cd(e),s._visibility&2?Ci(t,e,n,i):(s._visibility|=2,Xo(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),r&2048&&h_(o,e);break;case 24:Ci(t,e,n,i),r&2048&&p_(e.alternate,e);break;case 30:a&&(r=e.alternate,r!==null&&(Oa(r.child,!0),Oa(e.child,!0))),Ci(t,e,n,i);break;default:Ci(t,e,n,i)}}function Xo(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Xo(r,s,o,l,a),Nu(8,s);break;case 23:break;case 22:var f=s.stateNode;s.memoizedState!==null?f._visibility&2?Xo(r,s,o,l,a):Wc(r,s):(f._visibility|=2,Xo(r,s,o,l,a)),a&&c&2048&&h_(s.alternate,s);break;case 24:Xo(r,s,o,l,a),a&&c&2048&&p_(s.alternate,s);break;default:Xo(r,s,o,l,a)}e=e.sibling}}function Wc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Wc(n,i),a&2048&&h_(i.alternate,i);break;case 24:Wc(n,i),a&2048&&p_(i.alternate,i);break;default:Wc(n,i)}e=e.sibling}}var Cs=8192;function Es(t,e,n){if(t.subtreeFlags&Cs)for(t=t.child;t!==null;)_A(t,e,n),t=t.sibling}function _A(t,e,n){switch(t.tag){case 26:Es(t,e,n),t.flags&Cs&&(t.memoizedState!==null?N5(n,$i,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&T1(n,t)));break;case 5:Es(t,e,n),t.flags&Cs&&(t=t.stateNode,(e&335544128)===e&&T1(n,t));break;case 3:case 4:var i=$i;$i=mu(t.stateNode.containerInfo),Es(t,e,n),$i=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Cs,Cs=16777216,Es(t,e,n),Cs=i):Es(t,e,n));break;case 30:if(t.flags&Cs&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var a=t.stateNode;a.paired=null,pi===null&&(pi=new Map),pi.set(i,a)}Es(t,e,n);break;default:Es(t,e,n)}}function xA(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Sc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];yn=i,SA(i,t)}xA(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yA(t),t=t.sibling}function yA(t){switch(t.tag){case 0:case 11:case 15:Sc(t),t.flags&2048&&os(9,t,t.return);break;case 3:Sc(t);break;case 12:Sc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ud(t)):Sc(t);break;default:Sc(t)}}function ud(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];yn=i,SA(i,t)}xA(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:os(8,e,e.return),ud(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ud(e));break;default:ud(e)}t=t.sibling}}function SA(t,e){for(;yn!==null;){var n=yn;switch(n.tag){case 0:case 11:case 15:os(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ru(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,yn=i;else e:for(n=t;yn!==null;){i=yn;var a=i.sibling,r=i.return;if(uA(i),i===n){yn=null;break e}if(a!==null){a.return=r,yn=a;break e}yn=r}}}var AI={getCacheForType:function(t){var e=An(sn),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return An(sn).controller.signal}},wI=typeof WeakMap=="function"?WeakMap:Map,vt=0,Pt=null,st=null,ot=0,St=0,fi=null,kr=!1,Yl=!1,m_=!1,fr=0,Yt=0,ls=0,ks=0,Zd=0,mi=0,Nl=0,Yc=null,Jn=null,Lg=!1,zh=0,MA=0,$d=1/0,Qd=null,Jr=null,jt=0,ia=null,eo=null,Na=0,Pg=0,Og=null,bA=null,vl=null,_l=null,xl=null,Zc=0,fd=null;function yi(){return vt&2&&ot!==0?ot&-ot:Be.T!==null?v_():wE()}function EA(){if(mi===0)if(!(ot&536870912)||it){var t=bf;bf<<=1,!(bf&3932160)&&(bf=262144),mi=t}else mi=536870912;return t=Dn.current,t!==null&&(t.flags|=32),mi}function Ul(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=XA(or(t.memoizedProps,n))),_l===null&&(_l=[]),_l.push(e.bind(null,i))}}function ii(t,e,n){(t===Pt&&(St===2||St===9)||t.cancelPendingCommit!==null)&&(Ll(t,0),Xr(t,ot,mi,!1)),Au(t,n),(!(vt&2)||t!==Pt)&&(t===Pt&&(!(vt&2)&&(ks|=n),Yt===4&&Xr(t,ot,mi,!1)),Fa(t))}function TA(t,e,n){if(vt&6)throw Error(K(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Tu(t,e),a=i?DI(t,e):Am(t,e,!0),r=i;do{if(a===0){Yl&&!i&&Xr(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!CI(n)){a=Am(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=Yc;var l=o.current.memoizedState.isDehydrated;if(l&&(Ll(o,s).flags|=256),s=Am(o,s,!1),s!==2&&s!==6){if(m_&&!l){o.errorRecoveryDisabledLanes|=r,ks|=r,a=4;break e}r=Jn,Jn=a,r!==null&&(Jn===null?Jn=r:Jn.push.apply(Jn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Ll(t,0),Xr(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(K(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xr(i,e,mi,!kr);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((e&62914560)===e&&(a=zh+300-vi(),10<a)){if(Xr(i,e,mi,!kr),Mh(i,0,!0)!==0)break e;Na=e,i.timeoutHandle=x_(n1.bind(null,i,n,Jn,Qd,Lg,e,mi,ks,Nl,kr,r,"Throttled",-0,0),a);break e}n1(i,n,Jn,Qd,Lg,e,mi,ks,Nl,kr,r,null,-0,0)}}break}while(!0);Fa(t)}function n1(t,e,n,i,a,r,s,o,l,c,f,p,u,d){t.timeoutHandle=-1;var v=e.subtreeFlags,S=(r&335544064)===r;if(p=null,(S||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ba},pi=null,_A(e,r,p),S&&(v=p,S=t.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(v.count++,v.waitingForViewTransition=!0,v=gu.bind(v),S.finished.then(v,v))),v=(r&62914560)===r?zh-vi():(r&4194048)===r?MA-vi():0,v=U5(p,v),v!==null)){Na=r,t.cancelPendingCommit=v(a1.bind(null,t,e,r,n,i,a,s,o,l,c,f,p,null,u,d)),Xr(t,r,s,!c);return}a1(t,e,r,n,i,a,s,o,l,c,f,p)}function CI(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Si(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e,n,i){e=ME(t,e),e&=~Zd,e&=~ks,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-xi(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&EE(t,n,e)}function Ih(){return vt&6?!0:(Uu(0),!1)}function g_(){if(st!==null){if(St===0)var t=st.return;else t=st,Ka=oo=null,Jv(t),pl=null,cu=0,t=st;for(;t!==null;)JT(t.alternate,t),t=t.return;st=null}}function Ll(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,KI(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Na=0,g_(),Pt=t,st=n=tr(t.current,null),ot=e,St=0,fi=null,kr=!1,Yl=Tu(t,e),m_=!1,Nl=mi=Zd=ks=ls=Yt=0,Jn=Yc=null,Lg=!1,fr=ME(t,e),wh(),n}function AA(t,e){Ye=null,Be.H=kd,e===ql||e===Dh?(e=RS(),St=3):e===jv?(e=RS(),St=4):St=e===o_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,fi=e,st===null&&(Yt=1,Xd(t,zi(e,t.current)))}function wA(){var t=Dn.current;return t===null?!0:(ot&4194048)===ot?In===null:(ot&62914560)===ot||ot&536870912?t===In:!1}function CA(){var t=Be.H;return Be.H=kd,t===null?kd:t}function RA(){var t=Be.A;return Be.A=AI,t}function Kd(){Yt=4,kr||(ot&4194048)!==ot&&Dn.current!==null||(Yl=!0),!(ls&134217727)&&!(ks&134217727)||Pt===null||Xr(Pt,ot,mi,!1)}function Am(t,e,n){var i=vt;vt|=2;var a=CA(),r=RA();(Pt!==t||ot!==e)&&(Qd=null,Ll(t,e)),e=!1;var s=Yt;e:do try{if(St!==0&&st!==null){var o=st,l=fi;switch(St){case 8:g_(),s=6;break e;case 3:case 2:case 9:case 6:Dn.current===null&&(e=!0);var c=St;if(St=0,fi=null,al(t,o,l,c),n&&Yl){s=0;break e}break;default:c=St,St=0,fi=null,al(t,o,l,c)}}RI(),s=Yt;break}catch(f){AA(t,f)}while(!0);return e&&t.shellSuspendCounter++,Ka=oo=null,vt=i,Be.H=a,Be.A=r,st===null&&(Pt=null,ot=0,wh()),s}function RI(){for(;st!==null;)DA(st)}function DI(t,e){var n=vt;vt|=2;var i=CA(),a=RA();Pt!==t||ot!==e?(Qd=null,$d=vi()+500,Ll(t,e)):Yl=Tu(t,e);e:do try{if(St!==0&&st!==null){e=st;var r=fi;t:switch(St){case 1:St=0,fi=null,al(t,e,r,1);break;case 2:case 9:if(CS(r)){St=0,fi=null,i1(e);break}e=function(){St!==2&&St!==9||Pt!==t||(St=7),Fa(t)},r.then(e,e);break e;case 3:St=7;break e;case 4:St=5;break e;case 7:CS(r)?(St=0,fi=null,i1(e)):(St=0,fi=null,al(t,e,r,7));break;case 5:var s=null;switch(st.tag){case 26:s=st.memoizedState;case 5:case 27:var o=st;if(s?ew(s):o.stateNode.complete){St=0,fi=null;var l=o.sibling;if(l!==null)st=l;else{var c=o.return;c!==null?(st=c,Fh(c)):st=null}break t}}St=0,fi=null,al(t,e,r,5);break;case 6:St=0,fi=null,al(t,e,r,6);break;case 8:g_(),Yt=6;break e;default:throw Error(K(462))}}NI();break}catch(f){AA(t,f)}while(!0);return Ka=oo=null,Be.H=i,Be.A=a,vt=n,st!==null?0:(Pt=null,ot=0,wh(),Yt)}function NI(){for(;st!==null&&!Yz();)DA(st)}function DA(t){var e=KT(t.alternate,t,fr);t.memoizedProps=t.pendingProps,e===null?Fh(t):st=e}function i1(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=jS(n,e,e.pendingProps,e.type,void 0,ot);break;case 11:e=jS(n,e,e.pendingProps,e.type.render,e.ref,ot);break;case 5:Jv(e);var i=e;i===Mn&&(it?(zd(i),i.tag===5&&i.stateNode!=null&&(Ft=i.stateNode)):(zd(i),it=!0));default:JT(n,e),e=st=eT(e,fr),e=KT(n,e,fr)}t.memoizedProps=t.pendingProps,e===null?Fh(t):st=e}function al(t,e,n,i){Ka=oo=null,Jv(e),pl=null,cu=0;var a=e.return;try{if(_I(t,a,e,n,ot)){Yt=1,Xd(t,zi(n,t.current)),st=null;return}}catch(r){if(a!==null)throw st=a,r;Yt=1,Xd(t,zi(n,t.current)),st=null;return}e.flags&32768?(it||i===1?t=!0:Yl||ot&536870912?t=!1:(kr=t=!0,(i===2||i===9||i===3||i===6)&&(i=Dn.current,i!==null&&i.tag===13&&(i.flags|=16384))),NA(e,t)):Fh(e)}function Fh(t){var e=t;do{if(e.flags&32768){NA(e,kr);return}t=e.return;var n=MI(e.alternate,e,fr);if(n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Yt===0&&(Yt=5)}function NA(t,e){do{var n=bI(t.alternate,t);if(n!==null){n.flags&=32767,st=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=n}while(t!==null);Yt=6,st=null}function a1(t,e,n,i,a,r,s,o,l,c,f,p){t.cancelPendingCommit=null;do Bh();while(jt!==0);if(vt&6)throw Error(K(327));if(e!==null){if(e===t.current)throw Error(K(177));t===Pt&&(st=Pt=null,ot=0),eo=e,ia=t,Na=n,Og=a,bA=i,UI(t,e,n,s,o,l,p)}}function UI(t,e,n,i,a,r,s){var o=e.lanes|e.childLanes;if(Pg=o,o|=Bv,a4(t,n,o,i,a,r),_l=null,(n&335544064)===n?(xl=sI(t),i=10262):(xl=null,i=10256),e.subtreeFlags&i||e.flags&i?(t.callbackNode=null,t.callbackPriority=0,FI(Nd,function(){return Bg(),null})):(t.callbackNode=null,t.callbackPriority=0),Wd=!1,i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Be.T,Be.T=null,a=_t.p,_t.p=2,r=vt,vt|=4;try{EI(t,e,n)}finally{vt=r,_t.p=a,Be.T=i}}jt=1,Wd?vl=a5(s,t.containerInfo,xl,zg,Ig,PI,Fg,Bg,LI):(zg(),Ig(),Fg())}function LI(t){if(jt!==0){var e=ia.onRecoverableError;e(t,{componentStack:null})}}function PI(){jt===3&&(jt=0,gA(eo,ia),jt=4)}function zg(){if(jt===1){jt=0;var t=ia,e=eo,n=Na,i=(e.flags&13878)!==0;if(e.subtreeFlags&13878||i){i=Be.T,Be.T=null;var a=_t.p;_t.p=2;var r=vt;vt|=4;try{Uc=Yd=!1,pA(e,t,n),n=kg;var s=qE(t.containerInfo),o=n.focusedElem,l=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&jE(o.ownerDocument.documentElement,o)){if(l!==null&&Fv(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,S=Math.min(l.start,v),m=l.end===void 0?S:Math.min(l.end,v);!d.extend&&S>m&&(s=m,m=S,S=s);var h=yS(o,S),g=yS(o,m);if(h&&g&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),S>m?(d.addRange(x),d.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Fl=!!Vg,kg=Vg=null}finally{vt=r,_t.p=a,Be.T=i}}t.current=e,jt=2}}function Ig(){if(jt===2){jt=0;var t=ia,e=eo,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Be.T,Be.T=null;var i=_t.p;_t.p=2;var a=vt;vt|=4;try{lA(t,e.alternate,e)}finally{vt=a,_t.p=i,Be.T=n}}jt=3}}function Fg(){if(jt===4||jt===3){jt=0;var t=vl;vl=null,Zz();var e=ia,n=eo,i=Na,a=bA,r=(i&335544064)===i?10262:10256;if(n.subtreeFlags&r||n.flags&r?jt=5:(jt=0,eo=ia=null,UA(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(Jr=null),Uv(i),n=n.stateNode,_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Eu,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Be.T,r=_t.p,_t.p=2,Be.T=null;try{for(var s=e.onRecoverableError,o=0;o<a.length;o++){var l=a[o];s(l.value,{componentStack:l.stack})}}finally{Be.T=n,_t.p=r}}if(a=_l,s=xl,xl=null,a!==null&&(_l=null,s===null&&(s=[]),t!==null))for(l=0;l<a.length;l++)n=(0,a[l])(s),n!==void 0&&t.finished.finally(n);Na&3&&Bh(),Fa(e),r=e.pendingLanes,i&261930&&r&42?e===fd?Zc++:(Zc=0,fd=e):(Zc=0,fd=null),Uu(0)}}function UA(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ru(e)))}function Bh(){return vl!==null&&(vl.skipTransition(),vl=null),zg(),Ig(),Fg(),Bg()}function Bg(){if(jt!==5)return!1;var t=ia,e=Pg;Pg=0;var n=Uv(Na),i=Be.T,a=_t.p;try{_t.p=32>n?32:n,Be.T=null,n=Og,Og=null;var r=ia,s=Na;if(jt=0,eo=ia=null,Na=0,vt&6)throw Error(K(331));var o=vt;if(vt|=4,yA(r.current),vA(r,r.current,s,n),vt=o,Uu(0,!1),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Eu,r)}catch{}return!0}finally{_t.p=a,Be.T=i,UA(t,e)}}function r1(t,e,n){e=zi(n,e),e=_g(t.stateNode,e,2),t=$r(t,e,2),t!==null&&(Au(t,2),Fa(t))}function Et(t,e,n){if(t.tag===3)r1(t,t,n);else for(;e!==null;){if(e.tag===3){r1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Jr===null||!Jr.has(i))){t=zi(n,t),n=WT(2),i=$r(e,n,2),i!==null&&(YT(n,i,e,t),Au(i,2),Fa(i));break}}e=e.return}}function wm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wI;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(m_=!0,a.add(n),t=OI.bind(null,t,e,n),e.then(t,t))}function OI(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Pt===t&&(ot&n)===n&&(Yt===4||Yt===3&&(ot&62914560)===ot&&300>vi()-zh?vt&2?Zd|=n:Ll(t,0):Zd|=n,Nl===ot&&(Nl=0)),Fa(t)}function LA(t,e){e===0&&(e=bE()),t=so(t,e),t!==null&&(Au(t,e),Fa(t))}function zI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LA(t,n)}function II(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(e),LA(t,n)}function FI(t,e){return Dv(t,e)}var Pl=null,jo=null,Hg=!1,Jd=!1,Cm=!1,jr=0;function Fa(t){t!==jo&&t.next===null&&(jo===null?Pl=jo=t:jo=jo.next=t),Jd=!0,Hg||(Hg=!0,HI())}function Uu(t,e){if(!Cm&&Jd){Cm=!0;do for(var n=!1,i=Pl;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-xi(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,s1(i,r))}else r=ot,r=Mh(i,i===Pt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Tu(i,r)||(n=!0,s1(i,r));i=i.next}while(n);Cm=!1}}function BI(){PA()}function PA(){Jd=Hg=!1;var t=0;jr!==0&&QI()&&(t=jr);for(var e=vi(),n=null,i=Pl;i!==null;){var a=i.next,r=OA(i,e);r===0?(i.next=null,n===null?Pl=a:n.next=a,a===null&&(jo=n)):(n=i,(t!==0||r&3)&&(Jd=!0)),i=a}jt!==0&&jt!==5||Uu(t),jr!==0&&(jr=0)}function OA(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-xi(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=i4(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=Pt,n=ot,n=Mh(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(St===2||St===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&rm(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Tu(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&rm(i),Uv(n)){case 2:case 8:n=yE;break;case 32:n=Nd;break;case 268435456:n=SE;break;default:n=Nd}return i=zA.bind(null,t),n=Dv(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&rm(i),t.callbackPriority=2,t.callbackNode=null,2}function zA(t,e){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Bh()&&t.callbackNode!==n)return null;var i=ot;return i=Mh(t,t===Pt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(TA(t,i,e),OA(t,vi()),t.callbackNode!=null&&t.callbackNode===n?zA.bind(null,t):null)}function s1(t,e){if(Bh())return null;TA(t,e,!0)}function HI(){JI(function(){vt&6?Dv(xE,BI):PA()})}function v_(){if(jr===0){var t=$s;t===0&&(t=Mf,Mf<<=1,!(Mf&261888)&&(Mf=256)),jr=t}return jr}function o1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jf(t)}function GI(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=o1((a[si]||null).action),s=i.submitter;s&&(e=(e=s[si]||null)?o1(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Eh("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(jr!==0){var l=new FormData(a,s);gg(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=new FormData(a,s),gg(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Rm=0;Rm<rg.length;Rm++){var Dm=rg[Rm],VI=Dm.toLowerCase(),kI=Dm[0].toUpperCase()+Dm.slice(1);ra(VI,"on"+kI)}ra(YE,"onAnimationEnd");ra(ZE,"onAnimationIteration");ra($E,"onAnimationStart");ra("dblclick","onDoubleClick");ra("focusin","onFocus");ra("focusout","onBlur");ra(K4,"onTransitionRun");ra(J4,"onTransitionStart");ra(eI,"onTransitionCancel");ra(QE,"onTransitionEnd");Cl("onMouseEnter",["mouseout","mouseover"]);Cl("onMouseLeave",["mouseout","mouseover"]);Cl("onPointerEnter",["pointerout","pointerover"]);Cl("onPointerLeave",["pointerout","pointerover"]);ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function IA(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(f){Ld(f)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(f){Ld(f)}a.currentTarget=null,r=l}}}}function rt(t,e){var n=e[nS];n===void 0&&(n=e[nS]=new Set);var i=t+"__bubble";n.has(i)||(FA(e,t,2,!1),n.add(i))}function Nm(t,e,n){var i=0;e&&(i|=4),FA(n,t,i,e)}var Of="_reactListening"+Math.random().toString(36).slice(2);function __(t){if(!t[Of]){t[Of]=!0,RE.forEach(function(n){n!=="selectionchange"&&(XI.has(n)||Nm(n,!1,t),Nm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Of]||(e[Of]=!0,Nm("selectionchange",!1,e))}}function FA(t,e,n,i){switch(ow(e)){case 2:var a=z5;break;case 8:a=I5;break;default:a=T_}n=a.bind(null,e,n,t),a=void 0,!tg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Um(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Os(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}IE(function(){var c=r,f=Pv(n),p=[];e:{var u=KE.get(t);if(u!==void 0){var d=Eh,v=t;switch(t){case"keypress":if(td(n)===0)break e;case"keydown":case"keyup":d=C4;break;case"focusin":v="focus",d=fm;break;case"focusout":v="blur",d=fm;break;case"beforeblur":case"afterblur":d=fm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=uS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=g4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=L4;break;case YE:case ZE:case $E:d=x4;break;case QE:d=O4;break;case"scroll":case"scrollend":d=p4;break;case"wheel":d=I4;break;case"copy":case"cut":case"paste":d=S4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=dS;break;case"submit":d=N4;break;case"toggle":case"beforetoggle":d=B4}var S=(e&4)!==0,m=!S&&(t==="scroll"||t==="scrollend"),h=S?u!==null?u+"Capture":null:u;S=[];for(var g=c,x;g!==null;){var y=g;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||h===null||(y=au(g,h),y!=null&&S.push(hu(g,y,x))),m)break;g=g.return}0<S.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",d&&n!==eg&&(v=n.relatedTarget||n.fromElement)&&(Os(v)||v[Xl]))break e;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Os(d):null,d!==null&&(m=bu(d),S=d.tag,d!==m||S!==5&&S!==27&&S!==6)&&(d=null)):(u=null,d=c),u!==d&&(S=uS,y="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=dS,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=u==null?v:Dc(u),x=d==null?v:Dc(d),v=new S(y,g+"leave",u,n,f),v.target=m,v.relatedTarget=x,y=null,Os(f)===c&&(S=new S(h,g+"enter",d,n,f),S.target=x,S.relatedTarget=m,y=S),m=y,S=u&&d?V0(u,d,jI):null,u!==null&&l1(p,v,u,S,!1),d!==null&&m!==null&&l1(p,m,d,S,!0)))}e:{if(u=c?Dc(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var R=gS;else if(mS(u))if(kE)R=Z4;else{R=W4;var E=q4}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Lv(c.elementType)&&(R=gS):R=Y4;if(R&&(R=R(t,c))){VE(p,R,n,f);break e}E&&E(t,u,c)}switch(E=c?Dc(c):window,t){case"focusin":(mS(E)||E.contentEditable==="true")&&(Ko=E,ig=c,Bc=null);break;case"focusout":Bc=ig=Ko=null;break;case"mousedown":ag=!0;break;case"contextmenu":case"mouseup":case"dragend":ag=!1,SS(p,n,f);break;case"selectionchange":if(Q4)break;case"keydown":case"keyup":SS(p,n,f)}var T;if(Iv)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Qo?HE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(BE&&n.locale!=="ko"&&(Qo||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qo&&(T=FE()):(Gr=f,Ov="value"in Gr?Gr.value:Gr.textContent,Qo=!0)),E=eh(c,_),0<E.length&&(_=new fS(_,t,null,n,f),p.push({event:_,listeners:E}),T?_.data=T:(T=GE(n),T!==null&&(_.data=T)))),(T=G4?V4(t,n):k4(t,n))&&(_=eh(c,"onBeforeInput"),0<_.length&&(E=new fS("onBeforeInput","beforeinput",null,n,f),p.push({event:E,listeners:_}),E.data=T)),GI(p,t,c,n,f)}IA(p,e)})}function hu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eh(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=au(t,n),a!=null&&i.unshift(hu(t,a,r)),a=au(t,e),a!=null&&i.push(hu(t,a,r))),t.tag===3)return i;t=t.return}return[]}function jI(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function l1(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=au(n,r),c!=null&&s.unshift(hu(n,c,l))):a||(c=au(n,r),c!=null&&s.push(hu(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var qI=/\r\n?/g,WI=/\u0000|\uFFFD/g;function c1(t){return(typeof t=="string"?t:""+t).replace(qI,`
`).replace(WI,"")}function BA(t,e){return e=c1(e),c1(t)===e}function Mt(t,e,n,i,a,r){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||Rl(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&Rl(t,""+i);else return;break;case"className":Tf(t,"class",i);break;case"tabIndex":Tf(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tf(t,n,i);break;case"style":zE(t,i,r);return;case"data":if(e!=="object"){Tf(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Jf(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&Mt(t,e,"name",a.name,a,null),Mt(t,e,"formEncType",a.formEncType,a,null),Mt(t,e,"formMethod",a.formMethod,a,null),Mt(t,e,"formTarget",a.formTarget,a,null)):(Mt(t,e,"encType",a.encType,a,null),Mt(t,e,"method",a.method,a,null),Mt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Jf(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ba);return;case"onScroll":i!=null&&rt("scroll",t);return;case"onScrollEnd":i!=null&&rt("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));(r!=null?r.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Jf(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":rt("beforetoggle",t),rt("toggle",t),Kf(t,"popover",i);break;case"xlinkActuate":qa(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":qa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":qa(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":qa(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":qa(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":qa(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":qa(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":qa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":qa(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Kf(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=d4.get(n)||n,Kf(t,n,i);else return}pt=!0}function Gg(t,e,n,i,a,r){switch(n){case"style":zE(t,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));(r!=null?r.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")Rl(t,i);else if(typeof i=="number"||typeof i=="bigint")Rl(t,""+i);else return;break;case"onScroll":i!=null&&rt("scroll",t);return;case"onScrollEnd":i!=null&&rt("scrollend",t);return;case"onClick":i!=null&&(t.onclick=ba);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!DE.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),e=t[si]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(r,e,a),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,i,a);break e}pt=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Kf(t,n,i)}return}pt=!0}function Rn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rt("error",t),rt("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,e));default:Mt(t,e,r,s,n,null)}}a&&Mt(t,e,"srcSet",n.srcSet,n,null),i&&Mt(t,e,"src",n.src,n,null);return;case"input":rt("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":s=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(K(137,e));break;default:Mt(t,e,i,f,n,null)}}LE(t,r,o,l,c,s,a,!1);return;case"select":rt("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:Mt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?fl(t,!!i,e,!1):n!=null&&fl(t,!!i,n,!0);return;case"textarea":rt("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:Mt(t,e,s,o,n,null)}OE(t,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Mt(t,e,l,i,n,null)}return;case"dialog":rt("beforetoggle",t),rt("toggle",t),rt("cancel",t),rt("close",t);break;case"iframe":case"object":rt("load",t);break;case"video":case"audio":for(i=0;i<du.length;i++)rt(du[i],t);break;case"image":rt("error",t),rt("load",t);break;case"details":rt("toggle",t);break;case"embed":case"source":case"link":rt("error",t),rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,e));default:Mt(t,e,c,i,n,null)}return;default:if(Lv(e)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Gg(t,e,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Mt(t,e,o,i,n,null))}var YI={};function ZI(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Mt(t,e,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(pt=!0),r=d;break;case"name":d!==p&&(pt=!0),a=d;break;case"checked":d!==p&&(pt=!0),c=d;break;case"defaultChecked":d!==p&&(pt=!0),f=d;break;case"value":d!==p&&(pt=!0),s=d;break;case"defaultValue":d!==p&&(pt=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(K(137,e));break;default:d!==p&&Mt(t,e,u,d,i,p)}}J0(t,s,o,l,c,f,r,a);return;case"select":d=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(r)||Mt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":r!==l&&(pt=!0),u=r;break;case"defaultValue":r!==l&&(pt=!0),o=r;break;case"multiple":r!==l&&(pt=!0),s=r;default:r!==l&&Mt(t,e,a,r,i,l)}e=o,n=s,i=d,u!=null?fl(t,!!n,u,!1):!!i!=!!n&&(e!=null?fl(t,!!n,e,!0):fl(t,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Mt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":a!==r&&(pt=!0),u=a;break;case"defaultValue":a!==r&&(pt=!0),d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==r&&Mt(t,e,s,a,i,r)}PE(t,u,d);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":t.selected=!1;break;default:Mt(t,e,v,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":u!==d&&(pt=!0),t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Mt(t,e,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S)&&Mt(t,e,S,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(K(137,e));break;default:Mt(t,e,c,u,i,d)}return;default:if(Lv(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Gg(t,e,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Gg(t,e,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&Mt(t,e,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Mt(t,e,p,u,i,d)}function u1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $I(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&u1(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&u1(p)&&(l=l.responseEnd,s+=f*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vg=null,kg=null;function pu(t){return t.nodeType===9?t:t.ownerDocument}function f1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function HA(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function GA(t,e,n,i){return n=pu(n).createElement(t),n[En]=i,n[si]=e,Rn(n,t,e),Sn(n),n}function Xg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lm=null;function QI(){var t=window.event;return t&&t.type==="popstate"?t===Lm?!1:(Lm=t,!0):(Lm=null,!1)}var x_=typeof setTimeout=="function"?setTimeout:void 0,KI=typeof clearTimeout=="function"?clearTimeout:void 0,d1=typeof Promise=="function"?Promise:void 0,h1=typeof requestAnimationFrame=="function"?requestAnimationFrame:x_,JI=typeof queueMicrotask=="function"?queueMicrotask:typeof d1<"u"?function(t){return d1.resolve(null).then(t).catch(e5)}:x_;function e5(t){setTimeout(function(){throw t})}function us(t){return t==="head"}function p1(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Bl(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Om(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Om(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[wu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Om(t.ownerDocument.body);n=a}while(n);Bl(e)}function m1(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function VA(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var a=i=0;a<e.length;a++){var r=e[a];0<r.width&&0<r.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function kA(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function t5(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function jg(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return t5(e,n,t)}function n5(t){return t.documentElement.clientHeight}function i5(t){this.addEventListener("load",t),this.addEventListener("error",t)}function a5(t,e,n,i,a,r,s,o,l){var c=e.nodeType===9?e:e.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var S=[];if(v==="loaded"&&(n5(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),v=S.length,t!==null)for(var m=t.suspenseyImages,h=0,g=0;g<m.length;g++){var x=m[g];if(!x.complete){var y=x.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=tw(x),h>pd){S.length=v;break}x=new Promise(i5.bind(x)),S.push(x)}}}if(0<S.length)return u=Promise.race([Promise.all(S),new Promise(function(R){return setTimeout(R,500)})]).then(a,a),(d?Promise.allSettled([d.finished,u]):u).then(r,r);if(a(),d)return d.finished.then(r,r);r()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],S=v.effect,m=S.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(v),v=S.getKeyframes();for(var h=m=void 0,g=!0,x=0;x<v.length;x++){var y=v[x],R=y.width;if(m===void 0)m=R;else if(m!==R){g=!1;break}if(R=y.height,h===void 0)h=R;else if(h!==R){g=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}g&&m!==void 0&&h!==void 0&&(S.setKeyframes(v),g=getComputedStyle(S.target,S.pseudoElement),g.width!==m||g.height!==h)&&(g=v[0],g.width=m,g.height=h,g=v[v.length-1],g.width=m,g.height=h,S.setKeyframes(v))}}s()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),a(),s()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),a(),s(),null}}function zs(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}zs.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Ot({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};zs.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var r=n[a].effect;r!==null&&r.target===t&&r.pseudoElement===e&&i.push(n[a])}return i};zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function XA(t){return{name:t,group:new zs("group",t),imagePair:new zs("image-pair",t),old:new zs("old",t),new:new zs("new",t)}}function bi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}bi.prototype.addEventListener=function(t,e,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(jA(r,t,e,n)===-1){var s=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){s.removeEventListener(t,e,n),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),i!==null&&(a=s.removeEventListener.bind(s,t,e,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Ol(n),r.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),ri(this._fragmentFiber.child,!1,r5,t,o,i)}this._eventListeners=r}};function r5(t,e,n,i){return dn(t).addEventListener(e,n,i),!1}bi.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=jA(i,t,e,n),e!==-1)){var a=i[e];n=a.attachedListener;var r=a.cleanup;a=Ol(a.optionsOrUseCapture),ri(this._fragmentFiber.child,!1,s5,t,n,a),i.splice(e,1),r!==null&&r()}};function s5(t,e,n,i){return dn(t).removeEventListener(e,n,i),!1}function Ol(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function g1(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function jA(t,e,n,i){if(t.length===0)return-1;i=g1(i);for(var a=0;a<t.length;a++){var r=t[a];if(r.type===e&&r.listener===n&&g1(r.optionsOrUseCapture)===i)return a}return-1}bi.prototype.dispatchEvent=function(t){var e=io(this._fragmentFiber);if(e===null)return!0;e=dn(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var r=n[a];i.addEventListener(r.type,r.attachedListener,Ol(r.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(a=0;a<n.length;a++)r=n[a],i.removeEventListener(r.type,r.attachedListener,Ol(r.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};bi.prototype.focus=function(t){ri(this._fragmentFiber.child,!0,qA,t,void 0,void 0)};function qA(t,e){return t.tag===6?!1:(t=dn(t),_5(t,e))}bi.prototype.focusLast=function(t){var e=[];ri(this._fragmentFiber.child,!0,y_,e,void 0,void 0);for(var n=e.length-1;0<=n&&!qA(e[n],t);n--);};function y_(t,e){return e.push(t),!1}bi.prototype.blur=function(){var t=io(this._fragmentFiber);t!==null&&(t=dn(t),t=pu(t).activeElement,t!==null&&ri(this._fragmentFiber.child,!1,o5,t,void 0,void 0))};function o5(t,e){return t.tag===6?!1:(t=dn(t),t===e||t.contains(e)?(e.blur(),!0):!1)}bi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),ri(this._fragmentFiber.child,!1,l5,t,void 0,void 0)};function l5(t,e){return t.tag===6||(t=dn(t),e.observe(t)),!1}bi.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),ri(this._fragmentFiber.child,!1,c5,t,void 0,void 0);for(var n=e=0;n<ta.length;n++){var i=ta[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):ta[e++]=i}ta.length=e}};function c5(t,e){return t.tag===6||(t=dn(t),e.unobserve(t)),!1}var ta=[],Pm=!1;function u5(t,e,n){ta.push({fragmentInstance:t,observer:e,instance:n}),Pm||(Pm=!0,x5(function(){Pm=!1;var i=ta;ta=[];for(var a=0;a<i.length;a++){var r=i[a];r.observer.unobserve(r.instance)}}))}bi.prototype.getClientRects=function(){var t=[];return ri(this._fragmentFiber.child,!1,f5,t,void 0,void 0),t};function f5(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=dn(t),e.push.apply(e,t.getClientRects());return!1}bi.prototype.getRootNode=function(t){var e=io(this._fragmentFiber);return e===null?this:dn(e).getRootNode(t)};bi.prototype.compareDocumentPosition=function(t){var e=io(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ri(this._fragmentFiber.child,!1,y_,n,void 0,void 0);var i=dn(e);if(n.length===0){if(n=i,$y(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var a=i=n.compareDocumentPosition(t);return n===t?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=mE(e)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=dn(n).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=dn(n[0]),a=dn(n[n.length-1]);var r=$y(this._fragmentFiber)?e.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),o=a.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||r&&a===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!r&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||d5(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function d5(t,e,n,i,a){var r=Os(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){n=!0;break e}r=r.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=a.ownerDocument,a===r||a===r.documentElement||a===r.body;e:{for(r=e,e=io(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===n)&&(e=V0(n,r,Qy),e===null?e=!1:(ri(e,!0,Hz,r,n),r=Wo,Wo=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===i)&&(e=V0(i,r,Qy),e===null?e=!1:(ri(e,!0,Gz,r,i),r=Wo,G0=Wo=null,e=r!==null)),e):!1}function v1(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}bi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(K(566));var e=[];ri(this._fragmentFiber.child,!1,y_,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=mE(this._fragmentFiber);if(i=n?i[1]||i[0]||io(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=dn(i),v1(t,n);return}if(i=dn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var a=e[i];a.tag===6?(a=dn(a),v1(a,n)):dn(a).scrollIntoView(t),i+=n?-1:1}};function h5(t,e){return t=dn(t),WA(t,e),!1}function WA(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function YA(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.addEventListener(a.type,a.attachedListener,Ol(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(r){for(var s=0,o=0;o<ta.length;o++){var l=ta[o];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(ta[s++]=l)}ta.length=s,r.observe(t)}),WA(t,e))}function p5(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.removeEventListener(a.type,a.attachedListener,Ol(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?u5(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function qg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qg(n),bh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function m5(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[wu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Bi(t.nextSibling),t===null)break}return null}function g5(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Bi(t.nextSibling),t===null))return null;return t}function ZA(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Bi(t.nextSibling),t===null))return null;return t}function Wg(t){return t.data==="$?"||t.data==="$~"}function S_(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function v5(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Yg=null;function _1(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Bi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function x1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function _5(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function x5(t){h1(function(){h1(function(e){return t(e)})})}function $A(t,e,n){switch(e=pu(n),t){case"html":if(t=e.documentElement,!t)throw Error(K(452));return t;case"head":if(t=e.head,!t)throw Error(K(453));return t;case"body":if(t=e.body,!t)throw Error(K(454));return t;default:throw Error(K(451))}}function QA(t,e,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Mt(t,e,i,null,YI,a)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ba&&(t.onclick=null),bh(t)}function Om(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);bh(t)}var Gi=new Map,y1=new Set;function mu(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var gr=_t.d;_t.d={f:y5,r:S5,D:M5,C:b5,L:E5,m:T5,X:w5,S:A5,M:C5};function y5(){var t=gr.f(),e=Ih();return t||e}function S5(t){var e=jl(t);e!==null&&e.tag===5&&e.type==="form"?zT(e):gr.r(t)}var Zl=typeof document>"u"?null:document;function KA(t,e,n){var i=Zl;if(i&&typeof e=="string"&&e){var a=Oi(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),y1.has(a)||(y1.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Rn(e,"link",t),Sn(e),i.head.appendChild(e)))}}function M5(t){gr.D(t),KA("dns-prefetch",t,null)}function b5(t,e){gr.C(t,e),KA("preconnect",t,e)}function E5(t,e,n){gr.L(t,e,n);var i=Zl;if(i&&t&&e){var a='link[rel="preload"][as="'+Oi(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Oi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Oi(n.imageSizes)+'"]')):a+='[href="'+Oi(t)+'"]';var r=a;switch(e){case"style":r=zl(t);break;case"script":r=$l(t)}if(!(Gi.has(r)||(t=Ot({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Gi.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Lu(r))||e==="script"&&i.querySelector(Pu(r))))){var s=i.createElement("link");Rn(s,"link",t),e==="style"&&(s[Ud]=!0,s.onload=s.onerror=function(){CE(s)}),Sn(s),i.head.appendChild(s)}}}function T5(t,e){gr.m(t,e);var n=Zl;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Oi(i)+'"][href="'+Oi(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=$l(t)}if(!Gi.has(r)&&(t=Ot({rel:"modulepreload",href:t},e),Gi.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pu(r)))return}i=n.createElement("link"),Rn(i,"link",t),Sn(i),n.head.appendChild(i)}}}function A5(t,e,n){gr.S(t,e,n);var i=Zl;if(i&&t){var a=ul(i).hoistableStyles,r=zl(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Lu(r)))o.loading=5;else{t=Ot({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Gi.get(r))&&M_(t,n);var l=s=i.createElement("link");Sn(l),Rn(l,"link",t),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,dd(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function w5(t,e){gr.X(t,e);var n=Zl;if(n&&t){var i=ul(n).hoistableScripts,a=$l(t),r=i.get(a);r||(r=n.querySelector(Pu(a)),r||(t=Ot({src:t,async:!0},e),(e=Gi.get(a))&&b_(t,e),r=n.createElement("script"),Sn(r),Rn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function C5(t,e){gr.M(t,e);var n=Zl;if(n&&t){var i=ul(n).hoistableScripts,a=$l(t),r=i.get(a);r||(r=n.querySelector(Pu(a)),r||(t=Ot({src:t,async:!0,type:"module"},e),(e=Gi.get(a))&&b_(t,e),r=n.createElement("script"),Sn(r),Rn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function S1(t,e,n,i){var a=(a=Wr.current)?mu(a):null;if(!a)throw Error(K(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=zl(n.href),e=ul(a).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=zl(n.href);var r=ul(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(Lu(t)))?r._p||(s.instance=r,s.state.loading=5):(r=Gi.get(t),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Gi.set(t,r)),R5(a,t,r,s.state))),e&&i===null)throw Error(K(528,""));return s}if(e&&i!==null)throw Error(K(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=$l(n),e=ul(a).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,t))}}function zl(t){return'href="'+Oi(t)+'"'}function Lu(t){return'link[rel="stylesheet"]['+t+"]"}function JA(t){return Ot({},t,{"data-precedence":t.precedence,precedence:null})}function R5(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ud]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[Ud]=!0,e.onload=e.onerror=CE.bind(null,e),Rn(e,"link",n),Sn(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function $l(t){return'[src="'+Oi(t)+'"]'}function Pu(t){return"script[async]"+t}function M1(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Oi(n.href)+'"]');if(i)return e.instance=i,Sn(i),i;var a=Ot({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Sn(i),Rn(i,"style",a),dd(i,n.precedence,t),e.instance=i;case"stylesheet":a=zl(n.href);var r=t.querySelector(Lu(a));if(r)return e.state.loading|=4,e.instance=r,Sn(r),r;i=JA(n),(a=Gi.get(a))&&M_(i,a),r=(t.ownerDocument||t).createElement("link"),Sn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Rn(r,"link",i),e.state.loading|=4,dd(r,n.precedence,t),e.instance=r;case"script":return r=$l(n.src),(a=t.querySelector(Pu(r)))?(e.instance=a,Sn(a),a):(i=n,(a=Gi.get(r))&&(i=Ot({},n),b_(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Sn(a),Rn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(K(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,dd(i,n.precedence,t));return e.instance}function dd(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function M_(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function b_(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var hd=null;function b1(t,e,n){if(hd===null){var i=new Map,a=hd=new Map;a.set(n,i)}else a=hd,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[wu]||r[En]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Zg(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function D5(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function E1(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function ew(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function tw(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function T1(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=tw(e),t.suspenseyImages.push(e)),t=L5.bind(t),e.decode().then(t,t))}function N5(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=zl(i.href),r=e.querySelector(Lu(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=gu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,Sn(r);return}r=e.ownerDocument||e,i=JA(i),(a=Gi.get(a))&&M_(i,a),r=r.createElement("link"),Sn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Rn(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=gu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var pd=0;function U5(t,e){return t.stylesheets&&t.count===0&&md(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&md(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&pd===0&&(pd=62500*$I());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&md(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>pd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function nw(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)md(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function gu(){this.count--,nw(this)}function L5(){this.imgCount--,nw(this)}var th=null;function md(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,th=new Map,e.forEach(P5,t),th=null,gu.call(t))}function P5(t,e){if(!(e.state.loading&4)){var n=th.get(t);if(n)var i=n.get(null);else{n=new Map,th.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=gu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Il={$$typeof:Ma,Provider:null,Consumer:null,_currentValue:Bs,_currentValue2:Bs,_threadCount:0};function O5(t,e,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sm(0),this.hiddenUpdates=sm(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function iw(t,e,n,i,a,r,s,o,l,c,f,p){return t=new O5(t,e,n,s,l,c,f,p,o),e=1,r===!0&&(e|=24),r=ti(3,null,null,e),t.current=r,r.stateNode=t,e=kv(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},qv(r),t}function aw(t){return t?(t=tl,t):tl}function rw(t,e,n,i,a,r){a=aw(a),i.context===null?i.context=a:i.pendingContext=a,i=Zr(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=$r(t,i,e),n!==null&&(ii(n,t,e),Gc(n,t,e))}function A1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function E_(t,e){A1(t,e),(t=t.alternate)&&A1(t,e)}function sw(t){if(t.tag===13||t.tag===31){var e=so(t,67108864);e!==null&&ii(e,t,67108864),E_(t,67108864)}}function w1(t){if(t.tag===13||t.tag===31){var e=yi();e=Nv(e);var n=so(t,e);n!==null&&ii(n,t,e),E_(t,e)}}var Fl=!0;function z5(t,e,n,i){var a=Be.T;Be.T=null;var r=_t.p;try{_t.p=2,T_(t,e,n,i)}finally{_t.p=r,Be.T=a}}function I5(t,e,n,i){var a=Be.T;Be.T=null;var r=_t.p;try{_t.p=8,T_(t,e,n,i)}finally{_t.p=r,Be.T=a}}function T_(t,e,n,i){if(Fl){var a=$g(i);if(a===null)Um(t,e,i,nh,n),C1(t,i);else if(B5(a,t,e,n,i))i.stopPropagation();else if(C1(t,i),e&4&&-1<F5.indexOf(t)){for(;a!==null;){var r=jl(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=As(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-xi(s);o.entanglements[1]|=l,s&=~l}Fa(r),!(vt&6)&&($d=vi()+500,Uu(0))}}break;case 31:case 13:o=so(r,2),o!==null&&ii(o,r,2),Ih(),E_(r,2)}if(r=$g(i),r===null&&Um(t,e,i,nh,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Um(t,e,i,null,n)}}function $g(t){return t=Pv(t),A_(t)}var nh=null;function A_(t){if(nh=null,t=Os(t),t!==null){var e=bu(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=dE(e),t!==null)return t;t=null}else if(n===31){if(t=hE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return nh=t,null}function ow(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($z()){case xE:return 2;case yE:return 8;case Nd:case Qz:return 32;case SE:return 268435456;default:return 32}default:return 32}}var Qg=!1,es=null,ts=null,ns=null,vu=new Map,_u=new Map,Ir=[],F5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C1(t,e){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":vu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_u.delete(e.pointerId)}}function Mc(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=jl(e),e!==null&&sw(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function B5(t,e,n,i,a){switch(e){case"focusin":return es=Mc(es,t,e,n,i,a),!0;case"dragenter":return ts=Mc(ts,t,e,n,i,a),!0;case"mouseover":return ns=Mc(ns,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return vu.set(r,Mc(vu.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,_u.set(r,Mc(_u.get(r)||null,t,e,n,i,a)),!0}return!1}function lw(t){var e=Os(t.target);if(e!==null){var n=bu(e);if(n!==null){if(e=n.tag,e===13){if(e=dE(n),e!==null){t.blockedOn=e,tS(t.priority,function(){w1(n)});return}}else if(e===31){if(e=hE(n),e!==null){t.blockedOn=e,tS(t.priority,function(){w1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$g(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);eg=i,n.target.dispatchEvent(i),eg=null}else return e=jl(n),e!==null&&sw(e),t.blockedOn=n,!1;e.shift()}return!0}function R1(t,e,n){gd(t)&&n.delete(e)}function H5(){Qg=!1,es!==null&&gd(es)&&(es=null),ts!==null&&gd(ts)&&(ts=null),ns!==null&&gd(ns)&&(ns=null),vu.forEach(R1),_u.forEach(R1)}function zf(t,e){t.blockedOn===e&&(t.blockedOn=null,Qg||(Qg=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,H5)))}var If=null;function D1(t){If!==t&&(If=t,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,function(){If===t&&(If=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(A_(i||n)===null)continue;break}var r=jl(n);r!==null&&(t.splice(e,3),e-=3,gg(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Bl(t){function e(l){return zf(l,t)}es!==null&&zf(es,t),ts!==null&&zf(ts,t),ns!==null&&zf(ns,t),vu.forEach(e),_u.forEach(e);for(var n=0;n<Ir.length;n++){var i=Ir[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)lw(n),n.blockedOn===null&&Ir.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[si]||null;if(typeof r=="function")s||D1(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[si]||null)o=s.formAction;else if(A_(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),D1(n)}}}function cw(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function w_(t){this._internalRoot=t}Hh.prototype.render=w_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));var n=e.current,i=yi();rw(n,i,t,e,null,null)};Hh.prototype.unmount=w_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rw(t.current,2,null,t,null,null),Ih(),e[Xl]=null}};function Hh(t){this._internalRoot=t}Hh.prototype.unstable_scheduleHydration=function(t){if(t){var e=wE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&lw(t)}};var N1=uE.version;if(N1!=="19.3.1")throw Error(K(527,N1,"19.3.1"));_t.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=Bz(e),t=t!==null?pE(t):null,t=t===null?null:t.stateNode,t};var G5={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Be,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ff.isDisabled&&Ff.supportsFiber)try{Eu=Ff.inject(G5),_i=Ff}catch{}}yh.createRoot=function(t,e){if(!fE(t))throw Error(K(299));var n=!1,i="",a=XT,r=jT,s=qT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=iw(t,1,!1,null,null,n,i,null,a,r,s,cw),t[Xl]=e.current,__(t),new w_(e)};yh.hydrateRoot=function(t,e,n){if(!fE(t))throw Error(K(299));var i=!1,a="",r=XT,s=jT,o=qT,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=iw(t,1,!0,e,n??null,i,a,l,r,s,o,cw),e.context=aw(null),n=e.current,i=yi(),i=Nv(i),a=Zr(i),a.callback=null,$r(n,a,i),n=i,e.current.lanes=n,Au(e,n),Fa(e),t[Xl]=e.current,__(t),new Hh(e)};yh.version="19.3.1";function uw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uw)}catch(t){console.error(t)}}uw(),aE.exports=yh;var U1=aE.exports;class Q5{constructor(e){this.version=Nz,e.ipd=0,Oc.getState().setInputMode(e.primaryInputMode),this.devUIContainer=document.createElement("div"),this.devUIContainer.style.position="fixed",this.devUIContainer.style.width="100vw",this.devUIContainer.style.height="100vh",this.devUIContainer.style.top="50vh",this.devUIContainer.style.left="50vw",this.devUIContainer.style.transform="translate(-50%, -50%)",this.devUIContainer.style.pointerEvents="none";const n=this.devUIContainer.attachShadow({mode:"open"});this.inputLayer=new Dz(e),ma.setState({mode:this.inputLayer.currentGazeMode,commitHand:this.inputLayer.currentGazeCommitHand}),this.unsubscribeControlMode=e.onControlModeChange(r=>{r==="programmatic"?(this.inputLayer.setProgrammaticMode(!0),this.inputLayer.syncFromDevice(),Oc.getState().setInputMode(e.primaryInputMode),ma.getState().setMode(this.inputLayer.currentGazeMode),this.inputLayer.setInteractionsEnabled(!1)):(this.inputLayer.setProgrammaticMode(!1),this.inputLayer.setInteractionsEnabled(!0),ma.getState().setMode(this.inputLayer.currentGazeMode))}),this.unsubscribeStateChange=e.onStateChange(()=>{this.inputLayer.isInProgrammaticMode&&(this.inputLayer.syncFromDevice(),Oc.getState().setInputMode(e.primaryInputMode),ma.getState().setMode(this.inputLayer.currentGazeMode))}),U1.createRoot(n).render(C.jsx(V5,{xrDevice:e,inputLayer:this.inputLayer,shadowRoot:n}));const a=()=>{const r=document.createElement("div");document.body.appendChild(r);const s=r.attachShadow({mode:"open"});U1.createRoot(s).render(C.jsx(k5,{xrDevice:e,shadowRoot:s}))};document.body?a():window.onload=a}render(e){this.inputLayer.renderScene(e)}applyDefaultPose(e){this.inputLayer.applyDefaultPose(e)}setGazeMode(e){this.inputLayer.setGazeMode(e),ma.getState().setMode(this.inputLayer.currentGazeMode)}setGazeCommitHand(e){this.inputLayer.setGazeCommitHand(e),ma.getState().setCommitHand(e)}onSessionEnd(){this.inputLayer.onSessionEnd()}dispose(){this.unsubscribeControlMode(),this.unsubscribeStateChange(),this.inputLayer.dispose()}get devUICanvas(){return this.inputLayer.domElement}}const V5=({xrDevice:t,inputLayer:e,shadowRoot:n})=>{const[i,a]=He.useState(!1),[r,s]=He.useState(t.controlMode);return He.useEffect(()=>{const o=()=>{const c=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;a(!!c)};document.addEventListener("pointerlockchange",o,!1),document.addEventListener("mozpointerlockchange",o,!1),document.addEventListener("webkitpointerlockchange",o,!1);const l=t.onControlModeChange(c=>{s(c)});return()=>{document.removeEventListener("pointerlockchange",o,!1),document.removeEventListener("mozpointerlockchange",o,!1),document.removeEventListener("webkitpointerlockchange",o,!1),l()}},[t]),C.jsx(MM,{target:n,disableCSSOMInjection:!0,children:C.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"},children:[r==="programmatic"&&C.jsxs(C.Fragment,{children:[C.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:999,boxShadow:"inset 0 0 20px 5px rgba(59, 130, 246, 0.5)"}}),C.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",backgroundColor:"rgba(59, 130, 246, 0.9)",color:"white",padding:"6px 16px",borderRadius:"16px",fontSize:"12px",fontFamily:"system-ui, sans-serif",fontWeight:500,zIndex:1e3,display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"},children:[C.jsx("span",{style:{fontSize:"14px"},children:"●"}),"Remote Control Active"]})]}),r!=="programmatic"&&C.jsxs(C.Fragment,{children:[C.jsx(JC,{xrDevice:t,inputLayer:e}),C.jsx(GC,{xrDevice:t,inputLayer:e,pointerLocked:i})]})]})})},k5=({xrDevice:t,shadowRoot:e})=>{const[n,i]=$e.useState(t.sessionOffered&&!t.activeSession);return $e.useEffect(()=>{const a=setInterval(()=>{i(t.sessionOffered&&!t.activeSession)},1e3);return()=>{clearInterval(a)}},[]),C.jsx(MM,{target:e,disableCSSOMInjection:!0,children:C.jsxs(jm,{style:{zIndex:899,position:"fixed",top:"8px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"space-between",left:"50vw",transform:n?"translateX(-50%)":"translateX(-50%) translateY(calc(-100% - 12px))",transition:"transform 0.2s ease-in-out",paddingLeft:"5px",gap:"3px"},children:[C.jsx(Re,{name:"iwer",size:24}),C.jsx(On,{onClick:()=>{t.grantOfferedSession()},style:{fontSize:"16px"},children:"Enter XR"})]})})};export{cx as DEFAULT_KEYMAP,Q5 as DevUI,aC as IWE_PREFS_CHANNEL,Nz as VERSION,VC as cursorToViewerDirection,pa as emitPrefsPatch,Z5 as emitPrefsPatchDebounced,rC as getEnvironmentLoader,$5 as setEnvironmentLoader,uv as useKeyMapStore};
