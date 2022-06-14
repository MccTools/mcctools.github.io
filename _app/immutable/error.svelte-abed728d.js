import{S as A,i as F,d as B,V as G,s as I,e as w,t as E,c as k,f as b,m as y,g as p,k as P,l as d,O as R,p as S,q as N,r as V,u as O,n as z,v as J}from"./chunks/index-26eb6964.js";const{Error:v}=G,j=".svelte-kit/runtime/components/error.svelte";function g(o){let e,s=o[1].frame+"",a;const m={c:function(){e=w("pre"),a=E(s),this.h()},l:function(r){e=k(r,"PRE",{});var c=b(e);a=y(c,s),c.forEach(p),this.h()},h:function(){P(e,j,24,1,537)},m:function(r,c){d(r,e,c),R(e,a)},p:function(r,c){c&2&&s!==(s=r[1].frame+"")&&S(a,s)},d:function(r){r&&p(e)}};return B("SvelteRegisterBlock",{block:m,id:g.name,type:"if",source:"(24:0) {#if error.frame}",ctx:o}),m}function q(o){let e,s=o[1].stack+"",a;const m={c:function(){e=w("pre"),a=E(s),this.h()},l:function(r){e=k(r,"PRE",{});var c=b(e);a=y(c,s),c.forEach(p),this.h()},h:function(){P(e,j,27,1,587)},m:function(r,c){d(r,e,c),R(e,a)},p:function(r,c){c&2&&s!==(s=r[1].stack+"")&&S(a,s)},d:function(r){r&&p(e)}};return B("SvelteRegisterBlock",{block:m,id:q.name,type:"if",source:"(27:0) {#if error.stack}",ctx:o}),m}function C(o){let e,s,a,m,n=o[1].message+"",r,c,i,_,l=o[1].frame&&g(o),f=o[1].stack&&q(o);const D={c:function(){e=w("h1"),s=E(o[0]),a=N(),m=w("pre"),r=E(n),c=N(),l&&l.c(),i=N(),f&&f.c(),_=V(),this.h()},l:function(t){e=k(t,"H1",{});var u=b(e);s=y(u,o[0]),u.forEach(p),a=O(t),m=k(t,"PRE",{});var H=b(m);r=y(H,n),H.forEach(p),c=O(t),l&&l.l(t),i=O(t),f&&f.l(t),_=V(),this.h()},h:function(){P(e,j,17,0,313),P(m,j,19,0,332)},m:function(t,u){d(t,e,u),R(e,s),d(t,a,u),d(t,m,u),R(m,r),d(t,c,u),l&&l.m(t,u),d(t,i,u),f&&f.m(t,u),d(t,_,u)},p:function(t,[u]){u&1&&S(s,t[0]),u&2&&n!==(n=t[1].message+"")&&S(r,n),t[1].frame?l?l.p(t,u):(l=g(t),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),t[1].stack?f?f.p(t,u):(f=q(t),f.c(),f.m(_.parentNode,_)):f&&(f.d(1),f=null)},i:z,o:z,d:function(t){t&&p(e),t&&p(a),t&&p(m),t&&p(c),l&&l.d(t),t&&p(i),f&&f.d(t),t&&p(_)}};return B("SvelteRegisterBlock",{block:D,id:C.name,type:"component",source:"",ctx:o}),D}function K({error:o,status:e}){return{props:{error:o,status:e}}}function L(o,e,s){let{$$slots:a={},$$scope:m}=e;J("Error",a,[]);let{status:n}=e,{error:r}=e;const c=["status","error"];return Object.keys(e).forEach(i=>{!~c.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Error> was created with unknown prop '${i}'`)}),o.$$set=i=>{"status"in i&&s(0,n=i.status),"error"in i&&s(1,r=i.error)},o.$capture_state=()=>({load:K,status:n,error:r}),o.$inject_state=i=>{"status"in i&&s(0,n=i.status),"error"in i&&s(1,r=i.error)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[n,r]}class Q extends A{constructor(e){super(e),F(this,e,L,C,I,{status:0,error:1}),B("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:C.name});const{ctx:s}=this.$$,a=e.props||{};s[0]===void 0&&!("status"in a)&&console.warn("<Error> was created without expected prop 'status'"),s[1]===void 0&&!("error"in a)&&console.warn("<Error> was created without expected prop 'error'")}get status(){throw new v("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set status(e){throw new v("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get error(){throw new v("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set error(e){throw new v("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Q as default,K as load};