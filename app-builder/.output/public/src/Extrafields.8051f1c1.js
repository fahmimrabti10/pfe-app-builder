import{d as T,r as _,j as x,N as u,o as h,c as A,y as f,f as N,A as g,D as z,E as D}from"./entry.37c85000.js";import{f as m}from"./formEvents.1ab2da43.js";const j={schema:{type:Array,required:!0},langs:{type:Array,default:()=>[]},data:{type:Array,default:()=>null},rules:{type:Object,default:()=>null}},q=z(()=>D(()=>import("./FormBuilder.e1ce4cde.js").then(o=>o.F),["./FormBuilder.e1ce4cde.js","./entry.37c85000.js","./entry.cd939c7a.css","./formEvents.1ab2da43.js","./listFilters.9b39895c.js","./useConfigInject.58732bf7.js","./index.54946f0a.js","./Search.887af709.js","./index.cb11142e.js","./RightOutlined.1465a480.js","./button.62af8ef2.js","./collapseMotion.d40d7f6b.js","./index.6a5f261a.js","./FormItem.dc592ecb.js","./Col.d66ce3c0.js","./responsiveObserve.d14d9088.js","./styleChecker.d57dbbf0.js","./debounce.ba6c6e44.js","./index.ff1f244c.js","./Form.55c6e749.js","./BackButton.006f1c40.js","./BackButton.6f1b2607.css","./Form.34cac6f5.css","./index.2c750beb.js","./index.2793a51d.js","./FormBuilder.521cf914.css"],import.meta.url).then(o=>o.default||o)),B={class:"extrafields-wrapper"},k=T({__name:"Extrafields",props:j,emits:m(null).events,setup(o,{emit:v}){const E=o,r=_([]),{useClearValidate:C,useFormDataChange:c}=m(v),i=_([]),n=[];x(()=>{c([],"extrafields"),V()});const V=()=>{E.schema.forEach((e,s)=>{let a={},l={},t=e.placeholder.find(d=>d.isoCode==u().$i18n.locale.value),p=e.label.find(d=>d.isoCode==u().$i18n.locale.value),y=e.isLocalized||e.fieldType=="MULTIPLESELECT"?[]:"";a.rule=e.isRequired?[{required:!0,message:u().$i18n.t("required")}]:[],e.fieldType=="CHECKBOX"&&e.isRequired&&!e.defaultValue&&(y=!1),a.placeholder=t?t.value:"",a.label=p?p.value:"",a.relatedKey="extrafields["+s+"].fieldValue",l.fieldName=e.fieldName,l.fieldType=e.fieldType,l.status=e.status,l.isLocalized=e.isLocalized,l.isFrontMob=e.isFrontMob,n.push({...e,...a}),i.value.push({...l,fieldValue:{[l.fieldName]:y}})}),r.value=n,c(i.value,"extrafields")},b=(e,s,a)=>{let l=i.value[a];s&&l&&l.fieldValue[s]!=null&&(l.fieldValue[s]=e)},L=e=>{let s={};if(e)return e.forEach(a=>{r.value.find(t=>t.fieldName==a.fieldName&&t.fieldType==a.fieldType&&t.isLocalized==a.isLocalized)&&(s[a.fieldName]=a.fieldValue[a.fieldName])}),s};return(e,s)=>{const a=q;return h(),A("div",B,[Object.entries(f(r)).length>0?(h(),N(a,{key:0,langs:e.langs,data:L(e.data),rules:e.rules,"form-model":f(r),onUpdateData:b,onClearValidate:f(C)},null,8,["langs","data","rules","form-model","onClearValidate"])):g("",!0)])}}});export{k as default};
