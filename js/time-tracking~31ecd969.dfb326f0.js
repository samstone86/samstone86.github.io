(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["time-tracking~31ecd969"],{"05a0":function(t,e,i){},"3d8c":function(t,e,i){"use strict";i("05a0")},"408a":function(t,e,i){var s=i("e330");t.exports=s(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("e330"),n=i("1d80"),r=i("577e"),o=i("5899"),a=s("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),m=RegExp(u+u+"*$"),f=function(t){return function(e){var i=r(n(e));return 1&t&&(i=a(i,c,"")),2&t&&(i=a(i,m,"")),i}};t.exports={start:f(1),end:f(2),trim:f(3)}},7156:function(t,e,i){var s=i("1626"),n=i("861d"),r=i("d2bb");t.exports=function(t,e,i){var o,a;return r&&s(o=e.constructor)&&o!==i&&n(a=o.prototype)&&a!==i.prototype&&r(t,a),t}},a0d0:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"time-tracking"},[i("TimeButtons",{attrs:{"user-id":parseInt(t.loggedInUser)}})],1)},n=[],r=(i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row tracking"},[i("div",{staticClass:"col-12"},[1===t.timeState?i("button",{key:t.timeState,staticClass:"btn btn-lg btn-danger",attrs:{type:"button"},on:{click:t.timeTracking}},[i("fa-icon",{attrs:{icon:["fas","stop"]}}),i("br"),t._v("Stop ")],1):i("button",{key:t.timeState,staticClass:"btn btn-lg btn-warning",attrs:{type:"button"},on:{click:t.timeTracking}},[i("fa-icon",{attrs:{icon:["fas","play"]}}),i("br"),t._v("Start ")],1)]),i("div",{staticClass:"col-12"},[t._v(" Arbeitszeit: "+t._s(t.duration)+" ")])])}),o=[],a=i("bc3a"),u=i.n(a),c=i("5a0c"),m=i.n(c),f=i("d772"),l=i.n(f);m.a.extend(l.a);var d={name:"TimeButtons",props:{userId:{type:Number,required:!0}},data:function(){return{workingTime:0,breakTime:0,timeState:0,loggedInUser:this.userId,duration:"00:00:00",timer:null}},watch:{userId:function(t){console.log("UserId updated"),this.$offlineStorage.set("loggedInUser",t)}},created:function(){},mounted:function(){localStorage.workingTime&&(console.log("Working-Time restored"),this.workingTime=this.$offlineStorage.get("workingTime"),this.duration=m.a.unix(this.workingTime).format("HH:mm:ss")),localStorage.breakTime&&(console.log("Break-Time restored"),this.breakTime=this.$offlineStorage.get("breakTime")),localStorage.timeState&&(console.log("Working-Time-State restored"),this.timeState=this.$offlineStorage.get("timeState")),localStorage.loggedInUser&&(console.log("UserId restored"),this.loggedInUser=this.$offlineStorage.get("loggedInUser")),this.$offlineStorage.get("timer")&&1===this.$offlineStorage.get("timeState")&&this.startTimer()},methods:{timeTracking:function(){var t=this;u.a.post("https://testerp.galle-gmbh.de/pwa/toggleTimeTrack",{userId:this.loggedInUser,date:m()().format("YYYY-MM-DD HH:mm:ss")}).then((function(e){t.$offlineStorage.set("workingTime",e.data.workingTime),t.$offlineStorage.set("breakTime",e.data.breakTime),t.duration=m.a.duration(t.workingTime,"s").format("HH:mm:ss"),0===t.timeState?(t.$offlineStorage.set("timeState",1),t.timeState=1,t.startTimer()):(t.$offlineStorage.set("timeState",0),t.timeState=0,t.stopTimer())})).catch((function(e){console.log("ERROR-TimeButton: ",e.message),console.log(t.isOnline),console.log(t.isOffline),!0===t.isOnline?console.log("ERROR-TimeButton: ",e.message):(console.log("in"),t.duration=m.a.duration(t.workingTime,"s").format("HH:mm:ss"),0===t.timeState?(t.$offlineStorage.set("timeState",1),t.timeState=1,t.startTimer()):(t.$offlineStorage.set("timeState",0),t.timeState=0,t.stopTimer()))}))},startTimer:function(){var t=this;null===this.timer&&(this.timer=this.$workerTimers.setInterval((function(){t.workingTime+=1,t.duration=m.a.duration(t.workingTime,"s").format("HH:mm:ss")}),1e3),this.$offlineStorage.set("timer",this.timer)),console.log(this.timer)},stopTimer:function(){this.$offlineStorage.get("timer")===this.timer&&this.$workerTimers.clearInterval(this.timer),this.timer=null}}},h=d,g=(i("3d8c"),i("2877")),$=Object(g["a"])(h,r,o,!1,null,"0ea1c36f",null),p=$.exports,S={name:"TimeTracking",components:{TimeButtons:p},props:{userId:{type:Number,required:!1}},data:function(){return{loggedInUser:this.userId}}},b=S,v=Object(g["a"])(b,s,n,!1,null,null,null);e["default"]=v.exports},a9e3:function(t,e,i){"use strict";var s=i("83ab"),n=i("da84"),r=i("e330"),o=i("94ca"),a=i("6eeb"),u=i("1a2d"),c=i("7156"),m=i("3a9b"),f=i("d9b5"),l=i("c04e"),d=i("d039"),h=i("241c").f,g=i("06cf").f,$=i("9bf2").f,p=i("408a"),S=i("58a8").trim,b="Number",v=n[b],T=v.prototype,k=n.TypeError,y=r("".slice),I=r("".charCodeAt),w=function(t){var e=l(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,i,s,n,r,o,a,u,c=l(t,"number");if(f(c))throw k("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=S(c),e=I(c,0),43===e||45===e){if(i=I(c,2),88===i||120===i)return NaN}else if(48===e){switch(I(c,1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+c}for(r=y(c,2),o=r.length,a=0;a<o;a++)if(u=I(r,a),u<48||u>n)return NaN;return parseInt(r,s)}return+c};if(o(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var N,Y=function(t){var e=arguments.length<1?0:v(w(t)),i=this;return m(T,i)&&d((function(){p(i)}))?c(Object(e),i,Y):e},E=s?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;E.length>H;H++)u(v,N=E[H])&&!u(Y,N)&&$(Y,N,g(v,N));Y.prototype=T,T.constructor=Y,a(n,b,Y)}},d772:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t,e,i=1e3,s=6e4,n=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,u=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:a,months:u,days:r,hours:n,minutes:s,seconds:i,milliseconds:1,weeks:6048e5},f=function(t){return t instanceof S},l=function(t,e,i){return new S(t,i,e.$l)},d=function(t){return e.p(t)+"s"},h=function(t){return t<0},g=function(t){return h(t)?Math.ceil(t):Math.floor(t)},$=function(t){return Math.abs(t)},p=function(t,e){return t?h(t)?{negative:!0,format:""+$(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},S=function(){function h(t,e,i){var s=this;if(this.$d={},this.$l=i,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return l(t*m[d(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[d(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var n=t.match(c);if(n){var r=n.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var $=h.prototype;return $.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,i){return e+(t.$d[i]||0)*m[i]}),0)},$.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=g(t/a),t%=a,this.$d.months=g(t/u),t%=u,this.$d.days=g(t/r),t%=r,this.$d.hours=g(t/n),t%=n,this.$d.minutes=g(t/s),t%=s,this.$d.seconds=g(t/i),t%=i,this.$d.milliseconds=t},$.toISOString=function(){var t=p(this.$d.years,"Y"),e=p(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var s=p(i,"D"),n=p(this.$d.hours,"H"),r=p(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=p(o,"S"),u=t.negative||e.negative||s.negative||n.negative||r.negative||a.negative,c=n.format||r.format||a.format?"T":"",m=(u?"-":"")+"P"+t.format+e.format+s.format+c+n.format+r.format+a.format;return"P"===m||"-P"===m?"P0D":m},$.toJSON=function(){return this.toISOString()},$.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(o,(function(t,e){return e||String(s[t])}))},$.as=function(t){return this.$ms/m[d(t)]},$.get=function(t){var e=this.$ms,i=d(t);return"milliseconds"===i?e%=1e3:e="weeks"===i?g(e/m[i]):this.$d[i],0===e?0:e},$.add=function(t,e,i){var s;return s=e?t*m[d(e)]:f(t)?t.$ms:l(t,this).$ms,l(this.$ms+s*(i?-1:1),this)},$.subtract=function(t,e){return this.add(t,e,!0)},$.locale=function(t){var e=this.clone();return e.$l=t,e},$.clone=function(){return l(this.$ms,this)},$.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},$.milliseconds=function(){return this.get("milliseconds")},$.asMilliseconds=function(){return this.as("milliseconds")},$.seconds=function(){return this.get("seconds")},$.asSeconds=function(){return this.as("seconds")},$.minutes=function(){return this.get("minutes")},$.asMinutes=function(){return this.as("minutes")},$.hours=function(){return this.get("hours")},$.asHours=function(){return this.as("hours")},$.days=function(){return this.get("days")},$.asDays=function(){return this.as("days")},$.weeks=function(){return this.get("weeks")},$.asWeeks=function(){return this.as("weeks")},$.months=function(){return this.get("months")},$.asMonths=function(){return this.as("months")},$.years=function(){return this.get("years")},$.asYears=function(){return this.as("years")},h}();return function(i,s,n){t=n,e=n().$utils(),n.duration=function(t,e){var i=n.locale();return l(t,{$l:i},e)},n.isDuration=f;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return f(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return f(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}))}}]);
//# sourceMappingURL=time-tracking~31ecd969.dfb326f0.js.map