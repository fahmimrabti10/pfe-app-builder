import{d as C,o as i,c as r,f as s,A as c,a as p,t as d,b as _,w as m,G as g,K as N,D as P,E as h,N as e,h as S,y}from"./entry.37c85000.js";import{_ as O}from"./BackButton.006f1c40.js";import{a as T,_ as k}from"./index.2793a51d.js";import"./Col.d66ce3c0.js";import"./useConfigInject.58732bf7.js";import"./responsiveObserve.d14d9088.js";import"./styleChecker.d57dbbf0.js";const $=P(()=>h(()=>import("./CardLink.8a015b44.js"),["./CardLink.8a015b44.js","./nuxt-link.a8ee76c1.js","./entry.37c85000.js","./entry.cd939c7a.css","./CardLink.6d7cc51b.css"],import.meta.url).then(n=>n.default||n)),F={class:"page-title title-module"},R={class:"description-page"},b=C({__name:"NavigationPage",props:{dataCards:{type:Array,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},backUrl:{type:String,required:!0}},setup(n){return(l,o)=>{const u=O,a=$,E=T,f=k;return i(),r("div",null,[n.backUrl!=""?(i(),s(u,{key:0,url:n.backUrl},null,8,["url"])):c("",!0),p("div",F,d(n.title),1),p("div",R,d(n.description),1),_(f,{type:"flex",gutter:[30,{xs:15,sm:15,md:30,lg:30}]},{default:m(()=>[(i(!0),r(g,null,N(n.dataCards,(t,I)=>(i(),r(g,null,[t.show!=!1||t.show?(i(),s(E,{key:I,disabled:t.disabled?t.disabled:!1,span:24,md:12,lg:8},{default:m(()=>[_(a,{id:t.id?t.id:"",url:t.url?t.url:"",title:t.title?t.title:"",description:t.description?t.description:"",tag:t.tag?t.tag:!1},null,8,["id","url","title","description","tag"])]),_:2},1032,["disabled"])):c("",!0)],64))),256))]),_:1})])}}}),U=C({__name:"index",setup(n){console.log(e());const l=S(()=>[{title:e().$i18n.t("CONFIG.PREFERENCES.TITLE"),description:e().$i18n.t("CONFIG.PREFERENCES.DESCRIPTION"),url:e().$localePath("/config/preferences"),show:!0},{title:e().$i18n.t("CONFIG.APPS.TITLE"),description:e().$i18n.t("CONFIG.APPS.DESCRIPTION"),url:e().$localePath("/config/apps"),show:!0},{title:e().$i18n.t("CONFIG.USERS.TITLE"),description:e().$i18n.t("CONFIG.USERS.DESCRIPTION"),url:e().$localePath("/config/users"),show:!0}]);return(o,u)=>{const a=b;return i(),s(a,{"data-cards":y(l),title:o.$t("CONFIG.TITLE"),description:o.$t("CONFIG.DESCRIPTION"),"back-url":o.localePath("/")},null,8,["data-cards","title","description","back-url"])}}});export{U as default};