(function(e){function n(n){for(var a,r,o=n[0],i=n[1],d=n[2],s=0,h=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&h.push(u[r][0]),u[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(n);while(h.length)h.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b4240fe":"33068a89","chunk-ad022414":"48c1550c","chunk-2d0aaeea":"42a1b60a","chunk-2d0ba529":"967f2242","chunk-2d0bd588":"0431049f","chunk-2d0c55e7":"3321dba3","chunk-2d0dd10e":"5960ac2b","chunk-2d0dda0f":"204f5dfc","chunk-2d0e5060":"6589558e","chunk-2d0e5983":"65c5394f","chunk-2d20f91a":"54d10ce4","chunk-2d216dc5":"934f5bb8","chunk-2d216fb5":"0d5e2225","chunk-2d21a418":"f0b134ba","chunk-2d222359":"8a80ebf0","chunk-2d22ce6f":"86029364","chunk-ee88a364":"6a5b1543","chunk-041f0d10":"9bd74623","chunk-1ac97ac2":"63a625bb","chunk-53b25073":"0ea769c0","chunk-20d1c1c6":"cd8ce7fb","chunk-2d22c4f0":"ea2fc653","chunk-e1b134e0":"f0ddf2a6"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-ad022414":1,"chunk-ee88a364":1,"chunk-041f0d10":1,"chunk-1ac97ac2":1,"chunk-53b25073":1,"chunk-20d1c1c6":1,"chunk-e1b134e0":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-1b4240fe":"31d6cfe0","chunk-ad022414":"fba64e4b","chunk-2d0aaeea":"31d6cfe0","chunk-2d0ba529":"31d6cfe0","chunk-2d0bd588":"31d6cfe0","chunk-2d0c55e7":"31d6cfe0","chunk-2d0dd10e":"31d6cfe0","chunk-2d0dda0f":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-2d0e5983":"31d6cfe0","chunk-2d20f91a":"31d6cfe0","chunk-2d216dc5":"31d6cfe0","chunk-2d216fb5":"31d6cfe0","chunk-2d21a418":"31d6cfe0","chunk-2d222359":"31d6cfe0","chunk-2d22ce6f":"31d6cfe0","chunk-ee88a364":"19d5b8cd","chunk-041f0d10":"f4828bd8","chunk-1ac97ac2":"aef87063","chunk-53b25073":"3312c8ef","chunk-20d1c1c6":"d0896bca","chunk-2d22c4f0":"31d6cfe0","chunk-e1b134e0":"601e32be"}[e]+".css",u=i.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var d=c[o],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===u))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){d=h[o],s=d.getAttribute("data-href");if(s===a||s===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],l.parentNode.removeChild(l),t(c)},l.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){r[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var h=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,t[1](h)}u[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("85ec"),r=t.n(a);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],c=(t("034f"),t("2877")),o={},i=Object(c["a"])(o,r,u,!1,null,null,null),d=i.exports,s=(t("7db0"),t("b0c0"),t("8c4f")),h=(t("d3b7"),{path:"/auth",name:"Auth",redirect:"/auth/login",component:function(){return t.e("chunk-2d0dda0f").then(t.bind(null,"81cc"))},children:[{path:"login",name:"Login",component:function(){return Promise.all([t.e("chunk-ee88a364"),t.e("chunk-041f0d10"),t.e("chunk-1b4240fe"),t.e("chunk-20d1c1c6")]).then(t.bind(null,"5326"))}},{path:"register",name:"Register",component:function(){return t.e("chunk-2d0e5060").then(t.bind(null,"935e"))}}]}),l=t("b1cb"),f={path:"/",component:function(){return Promise.all([t.e("chunk-ee88a364"),t.e("chunk-1ac97ac2"),t.e("chunk-e1b134e0")]).then(t.bind(null,"eaf6"))},children:[{path:"user",name:"user",component:function(){return t.e("chunk-2d222359").then(t.bind(null,"ce45"))}},{path:"403",name:"403",component:function(){return t.e("chunk-2d0e5983").then(t.bind(null,"94c5"))}}]};a["a"].use(s["a"]);var m=[h,l["a"],f],g=new s["a"]({mode:"history",routes:m});g.beforeEach((function(e,n,t){if("Login"!==e.name&&"Register"!==e.name){var a=localStorage.getItem("token");a?t():t({name:"Auth"})}else t()})),g.beforeEach((function(e,n,t){if(e.meta.isAuth){var a=e.meta.auth,r=localStorage.getItem("userType"),u=a.find((function(e){return e===r}));u?t():t("/403")}else t()}));var p=g,k=t("2f62"),b=(t("96cf"),t("1da1")),v=t("8daa"),y={namespaced:!0,state:{userInfo:{}},mutations:{setUserInfo:function(e,n){e.userInfo=n}},actions:{requestUserInfo:function(e){return Object(b["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,v["b"].get(v["a"].USER_INFO_API);case 2:t=n.sent,localStorage.setItem("userType",t.type),e.commit("setUserInfo",t);case 5:case"end":return n.stop()}}),n)})))()}}};a["a"].use(k["a"]);var A=new k["a"].Store({strict:!0,state:{},modules:{user:y}}),P=A,w=t("a925"),I={title:"你好",home:"系统首页","goods-manage":"商品管理","goods-list":"商品列表","goods-add":"新增商品","order-manage":"订单管理","goods-order":"商品订单","after-sale":"售后管理","comment-manage":"评价管理","activity-manage":"活动管理","platform-manage":"平台管理","category-setting":"分类设置","focus-map":"焦点图","freight-template":"运费模版","vip-manage":"会员管理","data-statistics":"数据统计","rights-manage":"权限管理",homePage:{message:"欢迎光临～"}},E={title:"hello",home:"home","goods-manage":"Goods manage","goods-list":"Goods list","goods-add":"Add goods","order-manage":"Order manage","goods-order":"Goods order","after-sale":"After sale","comment-manage":"Comment manage","activity-manage":"Activity manage","platform-manage":"Platform manage","category-setting":"Category setting","focus-map":"Focus map","freight-template":"Freight template","vip-manage":"Vip manage","data-statistics":"Data statistics","rights-manage":"Rights manage",homePage:{message:"Welcome～"}};a["a"].use(w["a"]);var O=new w["a"]({locale:localStorage.getItem("language")||"zh-CN",messages:{"zh-CN":I,"en-US":E}});a["a"].config.productionTip=!1,new a["a"]({router:p,store:P,i18n:O,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){},"8daa":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return g}));var a={};t.r(a),t.d(a,"HOST",(function(){return r})),t.d(a,"REGISTER_API",(function(){return u})),t.d(a,"LOGIN_API",(function(){return c})),t.d(a,"CHECK_LOGIN_API",(function(){return o})),t.d(a,"USER_INFO_API",(function(){return i})),t.d(a,"GOODS_LIST_EDIT_API",(function(){return d}));var r="http://localhost:80",u="/api/user/register",c="/api/user/login",o="/api/user/check_login",i="/api/user/info",d="/api/product/edit",s=(t("d3b7"),t("d4ec")),h=t("bee2"),l=t("bc3a"),f=t.n(l),m=function(){function e(){Object(s["a"])(this,e)}return Object(h["a"])(e,[{key:"request",value:function(e,n,t){var a=null,r=null;"GET"===n?a=t:r=t;var u=f.a.create();return this.addInterceptors(u),u.request({url:e,method:n,data:r,params:a})}},{key:"get",value:function(e,n){return this.request(e,"GET",n)}},{key:"post",value:function(e,n){return this.request(e,"POST",n)}},{key:"addInterceptors",value:function(e){e.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.Authorization="Bearer "+localStorage.getItem("token")),e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return 0===e.data.code?e.data.data:Promise.reject(new Error(e.data.message))}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return alert(e.message),Promise.reject(e)}))}}]),e}(),g=new m},b1cb:function(e,n,t){"use strict";t("d3b7");n["a"]={path:"/",component:function(){return Promise.all([t.e("chunk-ee88a364"),t.e("chunk-1ac97ac2"),t.e("chunk-e1b134e0")]).then(t.bind(null,"eaf6"))},children:[{path:"",name:"home",component:function(){return t.e("chunk-2d20f91a").then(t.bind(null,"b3d7"))},meta:{icon:"home",title:"系统首页",languagekey:"home",isAuth:!1}},{path:"goods-manage",name:"goods-manage",component:{render:function(e){return e("router-view")}},meta:{icon:"shopping",title:"商品管理",languagekey:"goods-manage",isAuth:!0,auth:["A","B","C"]},children:[{path:"goods-list",name:"goods-list",component:function(){return Promise.all([t.e("chunk-ee88a364"),t.e("chunk-041f0d10"),t.e("chunk-1b4240fe"),t.e("chunk-1ac97ac2"),t.e("chunk-53b25073")]).then(t.bind(null,"384b"))},meta:{title:"商品列表",languagekey:"goods-list",isAuth:!0,auth:["A","C","E"]}},{path:"goods-add",name:"goods-add",component:function(){return Promise.all([t.e("chunk-ee88a364"),t.e("chunk-041f0d10"),t.e("chunk-2d22c4f0")]).then(t.bind(null,"f34a"))},meta:{title:"售后管理",languagekey:"goods-add",isAuth:!0,auth:["A","C"]}}]},{path:"order-manage",name:"order-manage",component:{render:function(e){return e("router-view")}},redirect:"/order-manage/goods-order",meta:{title:"订单管理",languagekey:"order-manage",isAuth:!0,auth:["A","C","E"]},children:[{path:"goods-order",name:"goods-order",component:function(){return t.e("chunk-2d0bd588").then(t.bind(null,"2c34"))},meta:{title:"商品订单",languagekey:"goods-order",isAuth:!0,auth:["A","C","E"]}},{path:"after-sale",name:"after-sale",component:function(){return t.e("chunk-2d216dc5").then(t.bind(null,"c3ed"))},meta:{title:"售后管理",languagekey:"after-sale",isAuth:!0,auth:["A","C"]}}]},{path:"comment-manage",name:"comment-manage",component:function(){return t.e("chunk-2d21a418").then(t.bind(null,"bb79"))},meta:{title:"评价管理",languagekey:"comment-manage",isAuth:!0,auth:["A","C","D"]}},{path:"activity-manage",name:"activity-manage",component:function(){return t.e("chunk-2d0ba529").then(t.bind(null,"375d"))},meta:{title:"活动管理",languagekey:"activity-manage",isAuth:!1}},{path:"platform-manage",name:"platform-manage",component:{render:function(e){return e("router-view")}},redirect:"/platform-manage/category-setting",meta:{title:"平台管理",languagekey:"platform-manage",isAuth:!0,auth:["A","D"]},children:[{path:"category-setting",name:"category-setting",component:function(){return t.e("chunk-2d216fb5").then(t.bind(null,"c57d"))},meta:{title:"分类设置",languagekey:"category-setting",isAuth:!0,auth:["A","D"]}},{path:"focus-map",name:"focus-map",component:function(){return t.e("chunk-2d0dd10e").then(t.bind(null,"8099"))},meta:{title:"焦点图",languagekey:"focus-map",isAuth:!0,auth:["A","D"]}},{path:"freight-template",name:"freight-template",component:function(){return t.e("chunk-2d22ce6f").then(t.bind(null,"f4e0"))},meta:{title:"运费模版",languagekey:"freight-template",isAuth:!0,auth:["A","D"]}}]},{path:"vip-manage",name:"vip-manage",component:function(){return t.e("chunk-2d0aaeea").then(t.bind(null,"12b5"))},meta:{title:"会员管理",languagekey:"vip-manage",isAuth:!0,auth:["A","B","C"]}},{path:"data-statistics",name:"data-statistics",component:function(){return Promise.all([t.e("chunk-1b4240fe"),t.e("chunk-ad022414")]).then(t.bind(null,"517a"))},meta:{title:"数据统计",languagekey:"data-statistics",isAuth:!0,auth:["A","C","D","E"]}},{path:"rights-manage",name:"rights-manage",component:function(){return t.e("chunk-2d0c55e7").then(t.bind(null,"3f97"))},meta:{title:"权限管理",languagekey:"rights-manage",isAuth:!0,auth:["A"]}}]}}});
//# sourceMappingURL=app.6330c020.js.map