(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["time-tracking~31ecd969"],{"3d79":function(t,e,n){},"408a":function(t,e,n){var s=n("e330");t.exports=s(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var s=n("e330"),i=n("1d80"),r=n("577e"),o=n("5899"),a=s("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),d=RegExp(u+u+"*$"),f=function(t){return function(e){var n=r(i(e));return 1&t&&(n=a(n,c,"")),2&t&&(n=a(n,d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},6141:function(t,e,n){"use strict";n("3d79")},7156:function(t,e,n){var s=n("1626"),i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var o,a;return r&&s(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&r(t,a),t}},a0d0:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time-tracking"},[n("TimeButtons",{attrs:{"user-id":parseInt(t.loggedInUser)}})],1)},i=[],r=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row tracking"},[n("div",{staticClass:"col-12"},[1===t.timeState?n("button",{key:t.timeState,staticClass:"btn btn-lg btn-danger",attrs:{type:"button"},on:{click:t.timeTracking}},[n("fa-icon",{attrs:{icon:["fas","stop"]}}),n("br"),t._v("Stop ")],1):n("button",{key:t.timeState,staticClass:"btn btn-lg btn-warning",attrs:{type:"button"},on:{click:t.timeTracking}},[n("fa-icon",{attrs:{icon:["fas","play"]}}),n("br"),t._v("Start ")],1)]),n("div",{staticClass:"col-12"},[t._v(" Arbeitszeit:"+t._s(t.duration)+" ")])])}),o=[],a=n("bc3a"),u=n.n(a),c=n("5a0c"),d=n.n(c),f=n("d772"),h=n.n(f);d.a.extend(h.a);var l={name:"TimeButtons",props:{userId:{type:Number,required:!0}},data:function(){return{workingTime:0,breakTime:0,timeState:0,loggedInUser:this.userId,duration:"00:00:00",timer:null}},watch:{userId:function(t){console.log("UserId updated"),this.$offlineStorage.set("loggedInUser",t)}},created:function(){},mounted:function(){localStorage.workingTime&&(console.log("Working-Time restored"),this.workingTime=this.$offlineStorage.get("workingTime"),this.duration=d.a.unix(this.workingTime).format("HH:mm:ss")),localStorage.breakTime&&(console.log("Break-Time restored"),this.breakTime=this.$offlineStorage.get("breakTime")),localStorage.timeState&&(console.log("Working-Time-State restored"),this.timeState=this.$offlineStorage.get("timeState")),localStorage.loggedInUser&&(console.log("UserId restored"),this.loggedInUser=this.$offlineStorage.get("loggedInUser"))},methods:{timeTracking:function(){var t=this;u.a.post("https://testerp.galle-gmbh.de/pwa/toggleTimeTrack",{userId:this.loggedInUser}).then((function(e){t.$offlineStorage.set("workingTime",e.data.workingTime),t.$offlineStorage.set("breakTime",e.data.breakTime),t.duration=d.a.unix(t.workingTime).format("HH:mm:ss"),0===t.timeState?(t.$offlineStorage.set("timeState",1),t.timeState=1,t.startTimer()):(t.$offlineStorage.set("timeState",0),t.timeState=0,t.stopTimer())})).catch((function(e){console.log("ERROR-TimeButton"),console.log(e),t.errLoginCheck=!0}))},startTimer:function(){var t=this;null===this.timer&&(this.timer=setInterval((function(){t.workingTime+=1,t.duration=d.a.unix(t.workingTime).format("HH:mm:ss")}),1e3))},stopTimer:function(){clearInterval(this.timer),this.timer=null}}},m=l,g=(n("6141"),n("2877")),$=Object(g["a"])(m,r,o,!1,null,"0a615ab8",null),p=$.exports,b={name:"TimeTracking",components:{TimeButtons:p},props:{userId:{type:Number,required:!1}},data:function(){return{loggedInUser:this.userId}}},v=b,S=Object(g["a"])(v,s,i,!1,null,null,null);e["default"]=S.exports},a9e3:function(t,e,n){"use strict";var s=n("83ab"),i=n("da84"),r=n("e330"),o=n("94ca"),a=n("6eeb"),u=n("1a2d"),c=n("7156"),d=n("3a9b"),f=n("d9b5"),h=n("c04e"),l=n("d039"),m=n("241c").f,g=n("06cf").f,$=n("9bf2").f,p=n("408a"),b=n("58a8").trim,v="Number",S=i[v],k=S.prototype,y=i.TypeError,T=r("".slice),I=r("".charCodeAt),w=function(t){var e=h(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,n,s,i,r,o,a,u,c=h(t,"number");if(f(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=b(c),e=I(c,0),43===e||45===e){if(n=I(c,2),88===n||120===n)return NaN}else if(48===e){switch(I(c,1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+c}for(r=T(c,2),o=r.length,a=0;a<o;a++)if(u=I(r,a),u<48||u>i)return NaN;return parseInt(r,s)}return+c};if(o(v,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,E=function(t){var e=arguments.length<1?0:S(w(t)),n=this;return d(k,n)&&l((function(){p(n)}))?c(Object(e),n,E):e},Y=s?m(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),_=0;Y.length>_;_++)u(S,N=Y[_])&&!u(E,N)&&$(E,N,g(S,N));E.prototype=k,k.constructor=E,a(i,v,E)}},d772:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,u=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:u,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},f=function(t){return t instanceof b},h=function(t,e,n){return new b(t,n,e.$l)},l=function(t){return e.p(t)+"s"},m=function(t){return t<0},g=function(t){return m(t)?Math.ceil(t):Math.floor(t)},$=function(t){return Math.abs(t)},p=function(t,e){return t?m(t)?{negative:!0,format:""+$(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},b=function(){function m(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*d[l(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[l(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(c);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var $=m.prototype;return $.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},$.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=g(t/a),t%=a,this.$d.months=g(t/u),t%=u,this.$d.days=g(t/r),t%=r,this.$d.hours=g(t/i),t%=i,this.$d.minutes=g(t/s),t%=s,this.$d.seconds=g(t/n),t%=n,this.$d.milliseconds=t},$.toISOString=function(){var t=p(this.$d.years,"Y"),e=p(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=p(n,"D"),i=p(this.$d.hours,"H"),r=p(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=p(o,"S"),u=t.negative||e.negative||s.negative||i.negative||r.negative||a.negative,c=i.format||r.format||a.format?"T":"",d=(u?"-":"")+"P"+t.format+e.format+s.format+c+i.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},$.toJSON=function(){return this.toISOString()},$.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},$.as=function(t){return this.$ms/d[l(t)]},$.get=function(t){var e=this.$ms,n=l(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?g(e/d[n]):this.$d[n],0===e?0:e},$.add=function(t,e,n){var s;return s=e?t*d[l(e)]:f(t)?t.$ms:h(t,this).$ms,h(this.$ms+s*(n?-1:1),this)},$.subtract=function(t,e){return this.add(t,e,!0)},$.locale=function(t){var e=this.clone();return e.$l=t,e},$.clone=function(){return h(this.$ms,this)},$.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},$.milliseconds=function(){return this.get("milliseconds")},$.asMilliseconds=function(){return this.as("milliseconds")},$.seconds=function(){return this.get("seconds")},$.asSeconds=function(){return this.as("seconds")},$.minutes=function(){return this.get("minutes")},$.asMinutes=function(){return this.as("minutes")},$.hours=function(){return this.get("hours")},$.asHours=function(){return this.as("hours")},$.days=function(){return this.get("days")},$.asDays=function(){return this.as("days")},$.weeks=function(){return this.get("weeks")},$.asWeeks=function(){return this.as("weeks")},$.months=function(){return this.get("months")},$.asMonths=function(){return this.as("months")},$.years=function(){return this.get("years")},$.asYears=function(){return this.as("years")},m}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return h(t,{$l:n},e)},i.isDuration=f;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return f(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return f(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}))}}]);
//# sourceMappingURL=time-tracking~31ecd969.067d5428.js.map