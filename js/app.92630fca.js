(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);g&&g(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({"time-tracking":"time-tracking"}[e]||e)+"."+{"time-tracking":"171d2455"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"time-tracking":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({"time-tracking":"time-tracking"}[e]||e)+"."+{"time-tracking":"275b5826"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],g.parentNode.removeChild(g),r(i)},g.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(g);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var g=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var g=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[[r("router-link",{attrs:{to:"/"}},[e._v("Login")]),e._v(" | "),r("router-link",{attrs:{to:"/time-tracking"}},[e._v("Zeiterfassung")])]],2),r("router-view")],1)])},a=[],i=r("1da1"),s=(r("96cf"),r("5a0c")),c=r.n(s),l=(r("ab8b"),{name:"App",props:{},computed:{},mounted:function(){},created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.showUpdateUI=!0})),this.$offlineStorage.get("userid")>0&&""!==this.$offlineStorage.get("uid")&&c()(this.$offlineStorage.get("date")).format("YYYY-MM-DD")===c()().format("YYYY-MM-DD")&&(console.log("has date"),this.$router.push({name:"TimeTracking",params:{userId:this.$offlineStorage.get("userid")}}))},accept:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showUpdateUI=!1,t.next=3,e.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return t.stop()}}),t)})))()}}),u=l,d=(r("034f"),r("2877")),g=Object(d["a"])(u,o,a,!1,null,null,null),p=g.exports,f=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("LoginView")],1)},h=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vue-loading",{attrs:{active:this.isLoading,loader:"bars","is-full-page":!0,color:"#e3000b"},on:{"update:active":function(t){return e.$set(this,"isLoading",t)}}}),r("svg",{staticStyle:{display:"none"},attrs:{xmlns:"http://www.w3.org/2000/svg"}},[r("symbol",{attrs:{id:"exclamation-triangle-fill",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})])]),e.error?r("div",{staticClass:"alert alert-danger alert-dismissible d-flex align-items-center",attrs:{role:"alert"}},[r("svg",{staticClass:"bi flex-shrink-0 me-2",attrs:{width:"24",height:"24",role:"img","aria-label":"Danger:"}},[r("use",{attrs:{"xlink:href":"#exclamation-triangle-fill"}})]),r("div",[e.errLogin?[e._v("Der Login-Name kann nicht leer sein!")]:e._e(),!0===e.errLogin&&!0===e.errPassword?r("br"):e._e(),e.errPassword?[e._v("Das Passwort kann nicht leer sein!")]:e._e(),!0!==e.errLogin&&!0!==e.errPassword||!0!==e.errLoginCheck?e._e():r("br"),e.errLoginCheck?[e._v("Falsches Passwort oder Benutzername!")]:e._e(),!0!==e.errLogin&&!0!==e.errPassword&&!0!==e.errLoginCheck||!0!==e.errConnection?e._e():r("br"),e.errConnection?[e._v("Keine Verbindung zum Anmeldeserver!")]:e._e()],2),r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}})]):e._e(),r("div",[r("h3",[e._v("Anmelden")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mt-1"},[r("label",[e._v("Login-Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"form-control form-control-lg",attrs:{type:"text"},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mt-1"},[r("label",[e._v("Passwort")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mt-3"},[r("div",{staticClass:"d-grid gap-2"},[r("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:e.checkLogin}},[e._v("Anmelden")])])])])])],1)},w=[],b=r("bc3a"),k=r.n(b),L=r("9062"),y=r.n(L),C=(r("e40d"),{name:"LoginView",components:{VueLoading:y.a},props:{},data:function(){return{login:"",password:"",error:!1,errLogin:!1,errPassword:!1,errLoginCheck:!1,errConnection:!1,isLoading:!1}},methods:{checkLogin:function(){var e=this;this.isLoading=!0,this.error=!1,this.errLogin=!1,this.errPassword=!1,this.errLoginCheck=!1,this.errConnection=!1,""===this.login&&(this.error=!0,this.errLogin=!0),""===this.password&&(this.error=!0,this.errPassword=!0),!1===this.error&&k.a.post("http://localhost/Galle/pwa/checkLogin",{"login-name":this.login,password:this.password}).then((function(t){console.log(t.data),t.data.userid>0?(e.isLoading=!1,e.$offlineStorage.set("uid",t.data.uid),e.$offlineStorage.set("userid",t.data.userid),e.$offlineStorage.set("date",t.data.date),e.$router.push({name:"TimeTracking",params:{userId:parseInt(t.data.userId)}})):(e.error=!0,e.errLoginCheck=!0,e.isLoading=!1)})).catch((function(t){console.log(t),e.error=!0,e.errConnection=!0,e.isLoading=!1}))}}}),_=C,x=Object(d["a"])(_,v,w,!1,null,"4650d93e",null),P=x.exports,S={name:"Login",components:{LoginView:P},props:{}},$=S,j=Object(d["a"])($,m,h,!1,null,null,null),O=j.exports;n["a"].use(f["a"]);var T,E=[{path:"/",name:"Login",component:O},{path:"/time-tracking",name:"TimeTracking",component:function(){return r.e("time-tracking").then(r.bind(null,"a0d0"))},props:!0}],A=new f["a"]({routes:E}),I=A,M=r("acfa");"serviceWorker"in navigator?(T=new M["a"]("".concat("/","service-worker.js"),{scope:"/"}),T.addEventListener("controlling",(function(){window.location.reload()})),T.register()):T=null;var N=T,D=(r("7b17"),r("15f5"),r("7051"),r("bf4e")),Y=r.n(D);n["a"].use(Y.a),n["a"].prototype.$workbox=N,n["a"].config.productionTip=!1,new n["a"]({router:I,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.92630fca.js.map