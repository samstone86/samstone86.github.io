(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["time-tracking"],{"408a":function(t,e,s){var n=s("e330");t.exports=n(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var n=s("e330"),i=s("1d80"),r=s("577e"),o=s("5899"),a=n("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),d=RegExp(u+u+"*$"),l=function(t){return function(e){var s=r(i(e));return 1&t&&(s=a(s,c,"")),2&t&&(s=a(s,d,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,s){var n=s("1626"),i=s("861d"),r=s("d2bb");t.exports=function(t,e,s){var o,a;return r&&n(o=e.constructor)&&o!==s&&i(a=o.prototype)&&a!==s.prototype&&r(t,a),t}},a0d0:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time-tracking"},[s("TimeButtons",{attrs:{"user-id":parseInt(t.loggedInUser)}})],1)},i=[],r=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row tracking"},[s("div",{staticClass:"col-12"},[1===t.timeState?s("button",{key:t.timeState,staticClass:"btn btn-lg btn-danger",attrs:{type:"button"},on:{click:t.timeTracking}},[s("i",{staticClass:"fas fa-stop"}),s("br"),t._v("Stop ")]):s("button",{key:t.timeState,staticClass:"btn btn-lg btn-warning",attrs:{type:"button"},on:{click:t.timeTracking}},[s("i",{staticClass:"fas fa-play"}),s("br"),t._v("Start ")])]),s("div",{staticClass:"col-12"},[t._v(" Arbeitszeit:"+t._s(t.duration)+" ")])])}),o=[],a=s("bc3a"),u=s.n(a),c=s("5a0c"),d=s.n(c),l=s("d772"),f=s.n(l);d.a.extend(f.a);var h={name:"TimeButtons",props:{userId:{type:Number,required:!0}},data:function(){return{workingTime:0,breakTime:0,timeState:0,loggedInUser:this.userId,duration:"00:00:00",timer:null}},watch:{userId:function(t){console.log("UserId updated"),this.$offlineStorage.set("loggedInUser",t)}},created:function(){},mounted:function(){localStorage.workingTime&&(console.log("Working-Time restored"),this.workingTime=this.$offlineStorage.get("workingTime"),this.duration=d.a.unix(this.workingTime).format("HH:mm:ss")),localStorage.breakTime&&(console.log("Break-Time restored"),this.breakTime=this.$offlineStorage.get("breakTime")),localStorage.timeState&&(console.log("Working-Time-State restored"),this.timeState=this.$offlineStorage.get("timeState")),localStorage.loggedInUser&&(console.log("UserId restored"),this.loggedInUser=this.$offlineStorage.get("loggedInUser"))},methods:{timeTracking:function(){var t=this;u.a.post("http://localhost/Galle/pwa/toggleTimeTrack",{userId:this.loggedInUser}).then((function(e){t.$offlineStorage.set("workingTime",e.data.workingTime),t.$offlineStorage.set("breakTime",e.data.breakTime),t.duration=d.a.unix(t.workingTime).format("HH:mm:ss"),0===t.timeState?(t.$offlineStorage.set("timeState",1),t.timeState=1,t.startTimer()):(t.$offlineStorage.set("timeState",0),t.timeState=0,t.stopTimer())})).catch((function(e){console.log("ERROR-TimeButton"),console.log(e),t.errLoginCheck=!0}))},startTimer:function(){var t=this;null===this.timer&&(this.timer=setInterval((function(){t.workingTime+=1,t.duration=d.a.unix(t.workingTime).format("HH:mm:ss")}),1e3))},stopTimer:function(){clearInterval(this.timer),this.timer=null}}},m=h,g=(s("d2e3"),s("2877")),$=Object(g["a"])(m,r,o,!1,null,"77c2d1d4",null),p=$.exports,b={name:"TimeTracking",components:{TimeButtons:p},props:{userId:{type:Number,required:!1}},data:function(){return{loggedInUser:this.userId}}},v=b,S=Object(g["a"])(v,n,i,!1,null,null,null);e["default"]=S.exports},a9e3:function(t,e,s){"use strict";var n=s("83ab"),i=s("da84"),r=s("e330"),o=s("94ca"),a=s("6eeb"),u=s("1a2d"),c=s("7156"),d=s("3a9b"),l=s("d9b5"),f=s("c04e"),h=s("d039"),m=s("241c").f,g=s("06cf").f,$=s("9bf2").f,p=s("408a"),b=s("58a8").trim,v="Number",S=i[v],k=S.prototype,y=i.TypeError,T=r("".slice),I=r("".charCodeAt),w=function(t){var e=f(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,s,n,i,r,o,a,u,c=f(t,"number");if(l(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=b(c),e=I(c,0),43===e||45===e){if(s=I(c,2),88===s||120===s)return NaN}else if(48===e){switch(I(c,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=T(c,2),o=r.length,a=0;a<o;a++)if(u=I(r,a),u<48||u>i)return NaN;return parseInt(r,n)}return+c};if(o(v,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,E=function(t){var e=arguments.length<1?0:S(w(t)),s=this;return d(k,s)&&h((function(){p(s)}))?c(Object(e),s,E):e},Y=n?m(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),_=0;Y.length>_;_++)u(S,N=Y[_])&&!u(E,N)&&$(E,N,g(S,N));E.prototype=k,k.constructor=E,a(i,v,E)}},ba53:function(t,e,s){},d2e3:function(t,e,s){"use strict";s("ba53")},d772:function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";var t,e,s=1e3,n=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,u=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:u,days:r,hours:i,minutes:n,seconds:s,milliseconds:1,weeks:6048e5},l=function(t){return t instanceof b},f=function(t,e,s){return new b(t,s,e.$l)},h=function(t){return e.p(t)+"s"},m=function(t){return t<0},g=function(t){return m(t)?Math.ceil(t):Math.floor(t)},$=function(t){return Math.abs(t)},p=function(t,e){return t?m(t)?{negative:!0,format:""+$(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},b=function(){function m(t,e,s){var n=this;if(this.$d={},this.$l=s,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*d[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){n.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(c);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var $=m.prototype;return $.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,s){return e+(t.$d[s]||0)*d[s]}),0)},$.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=g(t/a),t%=a,this.$d.months=g(t/u),t%=u,this.$d.days=g(t/r),t%=r,this.$d.hours=g(t/i),t%=i,this.$d.minutes=g(t/n),t%=n,this.$d.seconds=g(t/s),t%=s,this.$d.milliseconds=t},$.toISOString=function(){var t=p(this.$d.years,"Y"),e=p(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var n=p(s,"D"),i=p(this.$d.hours,"H"),r=p(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=p(o,"S"),u=t.negative||e.negative||n.negative||i.negative||r.negative||a.negative,c=i.format||r.format||a.format?"T":"",d=(u?"-":"")+"P"+t.format+e.format+n.format+c+i.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},$.toJSON=function(){return this.toISOString()},$.format=function(t){var s=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return s.replace(o,(function(t,e){return e||String(n[t])}))},$.as=function(t){return this.$ms/d[h(t)]},$.get=function(t){var e=this.$ms,s=h(t);return"milliseconds"===s?e%=1e3:e="weeks"===s?g(e/d[s]):this.$d[s],0===e?0:e},$.add=function(t,e,s){var n;return n=e?t*d[h(e)]:l(t)?t.$ms:f(t,this).$ms,f(this.$ms+n*(s?-1:1),this)},$.subtract=function(t,e){return this.add(t,e,!0)},$.locale=function(t){var e=this.clone();return e.$l=t,e},$.clone=function(){return f(this.$ms,this)},$.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},$.milliseconds=function(){return this.get("milliseconds")},$.asMilliseconds=function(){return this.as("milliseconds")},$.seconds=function(){return this.get("seconds")},$.asSeconds=function(){return this.as("seconds")},$.minutes=function(){return this.get("minutes")},$.asMinutes=function(){return this.as("minutes")},$.hours=function(){return this.get("hours")},$.asHours=function(){return this.as("hours")},$.days=function(){return this.get("days")},$.asDays=function(){return this.as("days")},$.weeks=function(){return this.get("weeks")},$.asWeeks=function(){return this.as("weeks")},$.months=function(){return this.get("months")},$.asMonths=function(){return this.as("months")},$.years=function(){return this.get("years")},$.asYears=function(){return this.as("years")},m}();return function(s,n,i){t=i,e=i().$utils(),i.duration=function(t,e){var s=i.locale();return f(t,{$l:s},e)},i.isDuration=l;var r=n.prototype.add,o=n.prototype.subtract;n.prototype.add=function(t,e){return l(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},n.prototype.subtract=function(t,e){return l(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}))}}]);
//# sourceMappingURL=time-tracking.171d2455.js.map