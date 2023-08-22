import{u as G,_ as A,a as k,d as me,A as he,c as Z,P as b,v as q,p as Se}from"./useConfigInject.58732bf7.js";import{d as D,b as v,r as c,p as se,h as le,l as ye,k as ee,j as Ce,g as xe,U as be,N as O,W as M,u as Oe}from"./entry.37c85000.js";import{S as ie,c as Ae}from"./objectDestructuringEmpty.300d5746.js";import{i as Ne}from"./button.62af8ef2.js";import{R as te}from"./RightOutlined.1465a480.js";import{L as ae}from"./LeftOutlined.a2f2a30c.js";import{e as ne,h as Pe,l as we,b as E,c as I}from"./listFilters.9b39895c.js";var Ue=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};const Le=Ue;var J=function(){return{prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String}};function W(a){var e=a.suffixCls,n=a.tagName,t=a.name;return function(r){var h=D({compatConfig:{MODE:3},name:t,props:J(),setup:function(S,f){var s=f.slots,u=G(e,S),m=u.prefixCls;return function(){var U=k(k({},S),{},{prefixCls:m.value,tagName:n});return v(r,U,s)}}});return h}}var V=D({compatConfig:{MODE:3},props:J(),setup:function(e,n){var t=n.slots;return function(){return v(e.tagName,{class:e.prefixCls},t)}}}),$e=D({compatConfig:{MODE:3},props:J(),setup:function(e,n){var t=n.slots,r=G("",e),h=r.direction,g=c([]),S={addSider:function(u){g.value=[].concat(me(g.value),[u])},removeSider:function(u){g.value=g.value.filter(function(m){return m!==u})}};se(ie,S);var f=le(function(){var s,u=e.prefixCls,m=e.hasSider;return s={},A(s,"".concat(u),!0),A(s,"".concat(u,"-has-sider"),typeof m=="boolean"?m:g.value.length>0),A(s,"".concat(u,"-rtl"),h.value==="rtl"),s});return function(){var s=e.tagName;return v(s,{class:f.value},t)}}}),Te=W({suffixCls:"layout",tagName:"section",name:"ALayout"})($e),j=W({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(V),R=W({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(V),B=W({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(V);const _=Te;var Ee={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const Ie=Ee;function re(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.forEach(function(r){je(a,r,n[r])})}return a}function je(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var X=function(e,n){var t=re({},e,n.attrs);return v(he,re({},t,{icon:Ie}),null)};X.displayName="BarsOutlined";X.inheritAttrs=!1;const Be=X;var oe={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},Fe=function(){return{prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:b.any,width:b.oneOfType([b.number,b.string]),collapsedWidth:b.oneOfType([b.number,b.string]),breakpoint:b.oneOf(q("xs","sm","md","lg","xl","xxl","xxxl")),theme:b.oneOf(q("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}},ke=function(){var a=0;return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return a+=1,"".concat(e).concat(a)}}();const F=D({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:Ne(Fe(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup:function(e,n){var t=n.emit,r=n.attrs,h=n.slots,g=G("layout-sider",e),S=g.prefixCls,f=ye(ie,void 0),s=c(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),u=c(!1);ee(function(){return e.collapsed},function(){s.value=!!e.collapsed}),se(Ae,s);var m=function(i,x){e.collapsed===void 0&&(s.value=i),t("update:collapsed",i),t("collapse",i,x)},U=c(function(l){u.value=l.matches,t("breakpoint",l.matches),s.value!==l.matches&&m(l.matches,"responsive")}),y;function C(l){return U.value(l)}var N=ke("ant-sider-");f&&f.addSider(N),Ce(function(){ee(function(){return e.breakpoint},function(){try{var l;(l=y)===null||l===void 0||l.removeEventListener("change",C)}catch{var i;(i=y)===null||i===void 0||i.removeListener(C)}if(typeof window<"u"){var x=window,d=x.matchMedia;if(d&&e.breakpoint&&e.breakpoint in oe){y=d("(max-width: ".concat(oe[e.breakpoint],")"));try{y.addEventListener("change",C)}catch{y.addListener(C)}C(y)}}},{immediate:!0})}),xe(function(){try{var l;(l=y)===null||l===void 0||l.removeEventListener("change",C)}catch{var i;(i=y)===null||i===void 0||i.removeListener(C)}f&&f.removeSider(N)});var $=function(){m(!s.value,"clickTrigger")};return function(){var l,i,x,d=S.value,L=e.collapsedWidth,K=e.width,T=e.reverseArrow,Q=e.zeroWidthTriggerStyle,o=e.trigger,p=o===void 0?(l=h.trigger)===null||l===void 0?void 0:l.call(h):o,Y=e.collapsible,ce=e.theme,z=s.value?L:K,P=Le(z)?"".concat(z,"px"):String(z),H=parseFloat(String(L||0))===0?v("span",{onClick:$,class:Z("".concat(d,"-zero-width-trigger"),"".concat(d,"-zero-width-trigger-").concat(T?"right":"left")),style:Q},[p||v(Be,null,null)]):null,ue={expanded:T?v(te,null,null):v(ae,null,null),collapsed:T?v(ae,null,null):v(te,null,null)},de=s.value?"collapsed":"expanded",pe=ue[de],fe=p!==null?H||v("div",{class:"".concat(d,"-trigger"),onClick:$,style:{width:P}},[p||pe]):null,ve=[r.style,{flex:"0 0 ".concat(P),maxWidth:P,minWidth:P,width:P}],ge=Z(d,"".concat(d,"-").concat(ce),(i={},A(i,"".concat(d,"-collapsed"),!!s.value),A(i,"".concat(d,"-has-trigger"),Y&&p!==null&&!H),A(i,"".concat(d,"-below"),!!u.value),A(i,"".concat(d,"-zero-width"),parseFloat(P)===0),i),r.class);return v("aside",k(k({},r),{},{class:ge,style:ve}),[v("div",{class:"".concat(d,"-children")},[(x=h.default)===null||x===void 0?void 0:x.call(h)]),Y||u.value&&H?fe:null])}}});var Je=j,Ve=F,Xe=B;const Ke=Se(_,{Header:j,Footer:R,Content:B,Sider:F,install:function(e){return e.component(_.name,_),e.component(j.name,j),e.component(R.name,R),e.component(F.name,F),e.component(B.name,B),e}}),w=()=>Pe,De=be("useScreenStore",{state:()=>({allUserScreen:"",allUserApplication:"",nbElements:0,extraFields:[],loading:!1,apps:[],app:{}}),actions:{async createOrUpdateScreen({$data:a,onError:e,onSuccess:n}){this.loading=!0;try{const t=await fetch(O().$config.API+O().$config.WS_APPS_ADD,{method:"POST",headers:w(),body:JSON.stringify(a)}),r=await t.json();return this.loading=!1,t.status===201||t.status===200?n(r):e(r)}catch(t){return this.loading=!1,e(t)}},async getAllUserScreen({$data:a,onError:e,onSuccess:n}){this.loading=!0;try{console.log("ooooo",a);const t=await fetch(" http://localhost:9880/screens/all",{method:"POST",headers:w(),body:JSON.stringify(a)});if(this.loading=!1,t.status==200){const r=await t.json();return n(r)}else return e(ne)}catch(t){return this.loading=!1,e(t)}},async useUpdateScreen({$data:a,$id:e,onError:n,onSuccess:t}){this.loading=!0;try{console.log("br",w());const r=await fetch("http://localhost:9880/screens/PUT/"+e,{method:"PUT",headers:w(),body:JSON.stringify(a)});console.log("dataaaaaa",r.status),this.loading=!1}catch(r){return this.loading=!1,n(r)}},async getAllUserApplication({$data:a,onError:e,onSuccess:n}){this.loading=!0;try{const t=await fetch(" http://localhost:9882/application/all",{method:"POST",headers:w(),body:JSON.stringify(a)});if(this.loading=!1,t.status==200){const r=await t.json();return n(r)}else return e(ne)}catch(t){return this.loading=!1,e(t)}},async createApplication({$data:a,onError:e,onSuccess:n}){this.loading=!0;try{const t=await fetch(" http://localhost:9882/application",{method:"POST",headers:w(),body:JSON.stringify(a)}),r=await t.json();return this.loading=!1,t.status===201||t.status===200?n(r):e(r)}catch(t){return this.loading=!1,e(t)}}}}),Qe=()=>{const a=c(""),e=De(),n=c({addedComponents:[],screenName:"",appId:a.value,userName:M().user.data.email});c("");const t=c({appName:"",userId:M().user.data.email}),r=c({}),h=c([]),g=c(""),S=c({userName:M().user.data.email,appId:""}),f=c({id:"",appId:a.value,addedComponents:[],screenName:"",userName:""});O().$i18n.locale.value;const s=c(!1),{bodyFilter:u}=we(),m=c(null),U=Oe({}),y=c(null),C=c(null),N=c(null),$=(o,p)=>{console.log(p,o,"FROM COMPOSABLE"),p?n.value[p]=o:n.value={...n.value,...o}},l=le(()=>e.loading);return{appsForm:m,bodyFilter:u,applicationPayload:r,allApplication:h,application:t,appsPayload:n,loadingProducts:l,appsPayloadScreen:f,rules:U,appId:a,screenId:g,screenNameForm:y,apNameForm:C,isModalVisible:s,useGetAllApplications:()=>{e.getAllUserApplication({$data:S.value,onError:()=>{},onSuccess:o=>{h.value=o}})},useRemoveProducts:o=>{e.useDeleteProducts({$id:o.id,onError:E,onSuccess:()=>{I(O().$i18n.t("SUCCESS"))}})},useAddScreen:o=>{y.value.validate().then(()=>{s.value=!1,e.createOrUpdateScreen({$data:n.value,onError:p=>E(p.code=="5003"?O().$i18n.t("PRODUCTS.EXIST"):""),onSuccess:p=>{f.value=p,N.value.push(p),g.value=p.id,I(O().$i18n.t("SUCCESS"))}})}).catch(()=>{})},useGetAllScreens:()=>{console.log("pppppppppppp33",S.value),e.getAllUserScreen({$data:S.value,onError:()=>{},onSuccess:o=>{N.value=o}})},allUserScreen:N,Getpayload:S,useUpdateScreen:()=>{console.log("screen",n.value),console.log("you",f.value),e.useUpdateScreen({$data:f.value,$id:g.value,onError:o=>E(console.log("eroooooorrrr",o),o.code=="5003"?O().$i18n.t("PRODUCTS.EXIST"):""),onSuccess:()=>I()})},useFormDataChange:$,useClearValidate:o=>{console.log(o,"CLEARRR"),m.value.clearValidate(o)},useAddApplication:()=>{e.createApplication({$data:t.value,onError:o=>E(o.code=="5003"?O().$i18n.t("PRODUCTS.EXIST"):""),onSuccess:async o=>{r.value=o,a.value=o.id,I(O().$i18n.t("SUCCESS"))}})}}};export{Xe as L,Ke as _,Ve as a,Je as b,Qe as u};