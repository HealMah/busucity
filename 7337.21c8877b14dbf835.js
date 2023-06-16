"use strict";(self.webpackChunkbusu_city_ui=self.webpackChunkbusu_city_ui||[]).push([[7337],{7337:(q,N,d)=>{d.r(N),d.d(N,{WeatherPageModule:()=>fe});var O=d(1524),v=d(7506),w=d(3354),b=d(529);const L=[{path:"",component:(()=>{class h{constructor(P){this.router=P,window.innerWidth<=v.breakpoints.sm?this.router.navigate(["weather/v1"]):this.router.navigate(["weather/v2"])}ngOnInit(){window.onresize=()=>{screen.orientation.type.startsWith("portrait")&&window.innerWidth<=v.breakpoints.sm||screen.orientation.type.startsWith("landscape")&&window.innerWidth<=v.breakpoints["3xs"]?this.router.url.includes("v1")||this.router.navigate(["weather/v1"]):this.router.url.includes("v2")||this.router.navigate(["weather/v2"])}}}return h.\u0275fac=function(P){return new(P||h)(w.Y36(O.F0))},h.\u0275cmp=w.Xpm({type:h,selectors:[["healmah-weather"]],decls:1,vars:0,template:function(P,pe){1&P&&w._UZ(0,"ion-router-outlet")},dependencies:[b.jP]}),h})(),children:[{path:"v1",loadChildren:()=>d.e(4933).then(d.bind(d,4933)).then(h=>h.PortraitModule)},{path:"v2",loadChildren:()=>d.e(5870).then(d.bind(d,5870)).then(h=>h.LandscapeModule)},{path:"",redirectTo:"v1",pathMatch:"full"}]}];let de=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275mod=w.oAB({type:h}),h.\u0275inj=w.cJS({imports:[O.Bz.forChild(L),O.Bz]}),h})();var le=d(8148),ce=d(3360);let fe=(()=>{class h{constructor(P){this.router=P,localStorage.getItem("welcome")||this.router.navigate(["welcome"])}}return h.\u0275fac=function(P){return new(P||h)(w.LFG(O.F0))},h.\u0275mod=w.oAB({type:h}),h.\u0275inj=w.cJS({providers:[le.F],imports:[ce._,de]}),h})()},8148:(q,N,d)=>{d.d(N,{F:()=>We});var O=d(3241),Q=(Math.pow(10,8),6e4),z=d(8752),me=d(9250),ve={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(Z){return Z<0?Math.ceil(Z):Math.floor(Z)}},c="trunc";var M=d(5295),Me=d(7186),V=d(3354),ge=d(3054),A=d(529);let We=(()=>{class W{constructor(u,s){this.httpClient=u,this.toastController=s,this.newWeatherData=new Me.x,this.getWeatherData()}getWeatherData(u){this.useOldWeatherData?u&&u?.target?.complete():this.httpClient.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/8.914136,6.052511/?key=J367LH5RVGVJZW2LHF644SUAT").subscribe(m=>{m.time=new Date,u&&u?.target?.complete(),localStorage.setItem("weather-data",JSON.stringify(m)),this.presentToast("Weather data successfully refreshed!","top"),this.weatherData=m,this.newWeatherData.next(this.weatherData)},m=>{u&&u?.target?.complete(),this.presentToast("Error, Check your network to load fresh data!","top")})}get useOldWeatherData(){const u=JSON.parse(localStorage.getItem("weather-data")||"{}");if(!u?.time)return!1;const s=function $(W,Z,u){(0,me.Z)(2,arguments);var s=function Te(W,Z){return(0,me.Z)(2,arguments),(0,z.Z)(W).getTime()-(0,z.Z)(Z).getTime()}(W,Z)/Q;return function Ce(W){return W?ve[W]:ve[c]}(u?.roundingMethod)(s)}(new Date,new Date(u.time));return s<=30?(console.log("Use Old Data: ",s),this.weatherData=u,this.newWeatherData.next(this.weatherData),!0):(console.log("Get New Data: ",s),this.weatherData=u,this.newWeatherData.next(this.weatherData),!1)}get todayWeatherData(){if(!this.weatherData)return;const u=(0,M.Z)(new Date,"yyyy-MM-dd"),s=this.weatherData.days.find(m=>m.datetime==u);return s.sunrise=(0,M.Z)(new Date(1e3*s?.sunriseEpoch),"hh:mm a"),s.sunset=(0,M.Z)(new Date(1e3*s?.sunsetEpoch),"hh:mm a"),s}get currentHourData(){if(!this.todayWeatherData)return;const u=(0,M.Z)(new Date,"HH");return this.todayWeatherData.hours.find(m=>m.datetime.split(":")[0]==u)||void 0}get todayHours(){const u=(0,M.Z)(new Date,"yyyy-MM-dd"),s=this.weatherData.days.find(m=>m.datetime==u);return s.hours=s?.hours.filter(m=>this.formatEpochTime(m.datetimeEpoch,"HH")>=(0,M.Z)(new Date,"HH")),s.hours}presentToast(u,s){var m=this;return(0,O.Z)(function*(){yield(yield m.toastController.create({message:u,duration:1500,position:s})).present()})()}formatEpochTime(u,s="hh:mm a"){return(0,M.Z)(new Date(1e3*u),s)}fahrenheitToCelcius(u){return u?(5*(u-32)/9).toFixed(2):0}checkHourIsNow(u){return(0,M.Z)(new Date,"h a")==this.formatEpochTime(u,"h a")?"Now":this.formatEpochTime(u,"h a")}drawPlanetPhase(u,s,m,x){if(u){var we={shadowColour:"black",lightColour:"white",diameter:100,earthshine:.1,blur:3};!function Pe(f,l,C,p){p=function Oe(f){var l;for(l in we)f[l]=void 0===f[l]?we[l]:f[l];return f}(Object.create(p||{})),function G(f,l,C,p){var ee,te,ae,I=X(f);l<.5?(ee=p.lightColour,te=p.shadowColour,C&&(l*=-1)):(ee=p.shadowColour,te=p.lightColour,l=1-l,C||(l*=-1)),ae=function U(f,l){var C,I=(1-Math.abs(l))*f/2||.01;return{d:2*(C=I/2+f*f/(8*I)),o:l>0?f/2-I:-2*C+f/2+I}}(p.diameter,2*l),function _(f,l,C){var p;Y(f.box,{position:"absolute",height:f.diameter+"px",width:f.diameter+"px",border:"1px solid #151320",backgroundColor:f.colour,borderRadius:f.diameter/2+"px",overflow:"hidden"}),Y(l.box,{position:"absolute",backgroundColor:l.colour,borderRadius:(p=l.diameter-C)/2+"px",height:p+"px",width:p+"px",left:l.offset+C/2+"px",top:(f.diameter-p)/2+"px",boxShadow:"0px 0px "+C+"px "+C+"px "+l.colour,opacity:l.opacity})}({box:f,diameter:p.diameter,colour:ee},{box:I,diameter:ae.d,colour:te,offset:ae.o,opacity:1-p.earthshine},p.blur)}(X(f),l,C,p)}(u,s,m,x)}function Y(f,l){var C;for(C in l)f.style[C]=l[C]}function X(f){var l=document.createElement("div");return f.appendChild(l),l}}drawMoonPhase(u,s,m){let x=u<=.5;u=x?2*u:2*u-1,!x&&u<=1&&(u=1-u),this.drawPlanetPhase(document.getElementById(s),u,x,{diameter:m||50,lightColour:"#66C6E7",shadowColour:"#151320"})}calcJulianDate(u,s,m){let x,U,Y,_,X,G;return U=m-parseInt((12-s)/10),x=s+9,x>=12&&(x-=12),Y=parseInt(365.25*(U+4712)),_=parseInt(30.6001*x+.5),X=parseInt(.75*(U/100+49))-38,G=Y+_+u+59,G>2299160&&(G-=X),G}moonAge(u,s,m){u||(u=parseInt((0,M.Z)(new Date(this.todayWeatherData?.datetime||new Date),"d"))),s||(s=parseInt((0,M.Z)(new Date(this.todayWeatherData?.datetime||new Date),"M"))),m||(m=parseInt((0,M.Z)(new Date(this.todayWeatherData?.datetime||new Date),"yyyy")));let Y,U=(this.calcJulianDate(u,s,m)+4.867)/29.53059;return U-=Math.floor(U),Y=U<.5?29.53059*U+14.765295:29.53059*U-14.765295,Y=Math.floor(Y)+1,Y}}return W.\u0275fac=function(u){return new(u||W)(V.LFG(ge.eN),V.LFG(A.yF))},W.\u0275prov=V.Yz7({token:W,factory:W.\u0275fac,providedIn:"root"}),W})()},9250:(q,N,d)=>{function O(v,w){if(w.length<v)throw new TypeError(v+" argument"+(v>1?"s":"")+" required, but only "+w.length+" present")}d.d(N,{Z:()=>O})},5295:(q,N,d)=>{d.d(N,{Z:()=>ht});var O=d(8790),v=d(9250),b=d(8752);function L(r){if(null===r||!0===r||!1===r)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var ce=864e5;function h(r){(0,v.Z)(1,arguments);var e=(0,b.Z)(r),a=e.getUTCDay(),n=(a<1?7:0)+a-1;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function R(r){(0,v.Z)(1,arguments);var t=(0,b.Z)(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=h(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=h(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}var pe=6048e5;var De={};function J(){return De}function K(r,t){var e,a,n,i,o,g,D,y;(0,v.Z)(1,arguments);var S=J(),T=L(null!==(e=null!==(a=null!==(n=null!==(i=t?.weekStartsOn)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(g=o.options)||void 0===g?void 0:g.weekStartsOn)&&void 0!==n?n:S.weekStartsOn)&&void 0!==a?a:null===(D=S.locale)||void 0===D||null===(y=D.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==e?e:0);if(!(T>=0&&T<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=(0,b.Z)(r),k=E.getUTCDay(),H=(k<T?7:0)+k-T;return E.setUTCDate(E.getUTCDate()-H),E.setUTCHours(0,0,0,0),E}function z(r,t){var e,a,n,i,o,g,D,y;(0,v.Z)(1,arguments);var S=(0,b.Z)(r),T=S.getUTCFullYear(),E=J(),k=L(null!==(e=null!==(a=null!==(n=null!==(i=t?.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(g=o.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==n?n:E.firstWeekContainsDate)&&void 0!==a?a:null===(D=E.locale)||void 0===D||null===(y=D.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==e?e:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var H=new Date(0);H.setUTCFullYear(T+1,0,k),H.setUTCHours(0,0,0,0);var ie=K(H,t),j=new Date(0);j.setUTCFullYear(T,0,k),j.setUTCHours(0,0,0,0);var oe=K(j,t);return S.getTime()>=ie.getTime()?T+1:S.getTime()>=oe.getTime()?T:T-1}var Te=6048e5;function c(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}const $_y=function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return c("yy"===e?n%100:n,e.length)},$_M=function(t,e){var a=t.getUTCMonth();return"M"===e?String(a+1):c(a+1,2)},$_d=function(t,e){return c(t.getUTCDate(),e.length)},$_h=function(t,e){return c(t.getUTCHours()%12||12,e.length)},$_H=function(t,e){return c(t.getUTCHours(),e.length)},$_m=function(t,e){return c(t.getUTCMinutes(),e.length)},$_s=function(t,e){return c(t.getUTCSeconds(),e.length)},$_S=function(t,e){var a=e.length,n=t.getUTCMilliseconds();return c(Math.floor(n*Math.pow(10,a-3)),e.length)};function V(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(0===i)return e+String(n);var o=t||"";return e+String(n)+o+c(i,2)}function ge(r,t){return r%60==0?(r>0?"-":"+")+c(Math.abs(r)/60,2):A(r,t)}function A(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r);return a+c(Math.floor(n/60),2)+e+c(n%60,2)}const We={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if("yo"===e){var n=t.getUTCFullYear();return a.ordinalNumber(n>0?n:1-n,{unit:"year"})}return $_y(t,e)},Y:function(t,e,a,n){var i=z(t,n),o=i>0?i:1-i;return"YY"===e?c(o%100,2):"Yo"===e?a.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){return c(R(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return c(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return $_M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=function ve(r,t){(0,v.Z)(1,arguments);var e=(0,b.Z)(r),a=K(e,t).getTime()-function me(r,t){var e,a,n,i,o,g,D,y;(0,v.Z)(1,arguments);var S=J(),T=L(null!==(e=null!==(a=null!==(n=null!==(i=t?.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(g=o.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==n?n:S.firstWeekContainsDate)&&void 0!==a?a:null===(D=S.locale)||void 0===D||null===(y=D.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==e?e:1),E=z(r,t),k=new Date(0);return k.setUTCFullYear(E,0,T),k.setUTCHours(0,0,0,0),K(k,t)}(e,t).getTime();return Math.round(a/Te)+1}(t,n);return"wo"===e?a.ordinalNumber(i,{unit:"week"}):c(i,e.length)},I:function(t,e,a){var n=function he(r){(0,v.Z)(1,arguments);var t=(0,b.Z)(r),e=h(t).getTime()-function P(r){(0,v.Z)(1,arguments);var t=R(r),e=new Date(0);return e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0),h(e)}(t).getTime();return Math.round(e/pe)+1}(t);return"Io"===e?a.ordinalNumber(n,{unit:"week"}):c(n,e.length)},d:function(t,e,a){return"do"===e?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):$_d(t,e)},D:function(t,e,a){var n=function fe(r){(0,v.Z)(1,arguments);var t=(0,b.Z)(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime();return Math.floor((e-a)/ce)+1}(t);return"Do"===e?a.ordinalNumber(n,{unit:"dayOfYear"}):c(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=0===n?7:n;switch(e){case"i":return String(i);case"ii":return c(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var i=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var i,n=t.getUTCHours();switch(i=12===n?"noon":0===n?"midnight":n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var i,n=t.getUTCHours();switch(i=n>=17?"evening":n>=12?"afternoon":n>=4?"morning":"night",e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return $_h(t,e)},H:function(t,e,a){return"Ho"===e?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):$_H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return"Ko"===e?a.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?a.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},m:function(t,e,a){return"mo"===e?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):$_m(t,e)},s:function(t,e,a){return"so"===e?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):$_s(t,e)},S:function(t,e){return $_S(t,e)},X:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return ge(o);case"XXXX":case"XX":return A(o);default:return A(o,":")}},x:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return ge(o);case"xxxx":case"xx":return A(o);default:return A(o,":")}},O:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+V(o,":");default:return"GMT"+A(o,":")}},z:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+V(o,":");default:return"GMT"+A(o,":")}},t:function(t,e,a,n){return c(Math.floor((n._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,a,n){return c((n._originalDate||t).getTime(),e.length)}};var W=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Z=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const m={p:Z,P:function(t,e){var o,a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return W(t,e);switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",W(n,e)).replace("{{time}}",Z(i,e))}};var U=["D","DD"],Y=["YY","YYYY"];function G(r,t,e){if("YYYY"===r)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===r)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===r)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===r)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var we={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth;return r.formats[e]||r.formats[r.defaultWidth]}}var I={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},te={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function re(r){return function(t,e){var n;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=null!=e&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var g=r.defaultWidth,D=null!=e&&e.width?String(e.width):r.defaultWidth;n=r.values[D]||r.values[g]}return n[r.argumentCallback?r.argumentCallback(t):t]}}function ne(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.width,i=t.match(a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth]);if(!i)return null;var y,o=i[0],g=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],D=Array.isArray(g)?function Be(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}(g,function(T){return T.test(o)}):function Qe(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}(g,function(T){return T.test(o)});return y=r.valueCallback?r.valueCallback(D):D,{value:y=e.valueCallback?e.valueCallback(y):y,rest:t.slice(o.length)}}}const ut={code:"en-US",formatDistance:function(t,e,a){var n,i=we[t];return n="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n},formatLong:I,formatRelative:function(t,e,a,n){return te[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:re({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:re({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:re({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:re({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:re({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function Xe(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(n.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:ne({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ne({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ne({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ne({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ne({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var st=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,dt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lt=/^'([^]*?)'?$/,ct=/''/g,ft=/[a-zA-Z]/;function ht(r,t,e){var a,n,i,o,g,D,y,S,T,E,k,H,ie,j,oe,xe,Se,ke;(0,v.Z)(2,arguments);var vt=String(t),ue=J(),se=null!==(a=null!==(n=e?.locale)&&void 0!==n?n:ue.locale)&&void 0!==a?a:ut,Ue=L(null!==(i=null!==(o=null!==(g=null!==(D=e?.firstWeekContainsDate)&&void 0!==D?D:null==e||null===(y=e.locale)||void 0===y||null===(S=y.options)||void 0===S?void 0:S.firstWeekContainsDate)&&void 0!==g?g:ue.firstWeekContainsDate)&&void 0!==o?o:null===(T=ue.locale)||void 0===T||null===(E=T.options)||void 0===E?void 0:E.firstWeekContainsDate)&&void 0!==i?i:1);if(!(Ue>=1&&Ue<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Ee=L(null!==(k=null!==(H=null!==(ie=null!==(j=e?.weekStartsOn)&&void 0!==j?j:null==e||null===(oe=e.locale)||void 0===oe||null===(xe=oe.options)||void 0===xe?void 0:xe.weekStartsOn)&&void 0!==ie?ie:ue.weekStartsOn)&&void 0!==H?H:null===(Se=ue.locale)||void 0===Se||null===(ke=Se.options)||void 0===ke?void 0:ke.weekStartsOn)&&void 0!==k?k:0);if(!(Ee>=0&&Ee<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!se.localize)throw new RangeError("locale must contain localize property");if(!se.formatLong)throw new RangeError("locale must contain formatLong property");var ye=(0,b.Z)(r);if(!function Q(r){if((0,v.Z)(1,arguments),!function w(r){return(0,v.Z)(1,arguments),r instanceof Date||"object"===(0,O.Z)(r)&&"[object Date]"===Object.prototype.toString.call(r)}(r)&&"number"!=typeof r)return!1;var t=(0,b.Z)(r);return!isNaN(Number(t))}(ye))throw new RangeError("Invalid time value");var gt=function x(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}(ye),wt=function le(r,t){return(0,v.Z)(2,arguments),function de(r,t){(0,v.Z)(2,arguments);var e=(0,b.Z)(r).getTime(),a=L(t);return new Date(e+a)}(r,-L(t))}(ye,gt),yt={firstWeekContainsDate:Ue,weekStartsOn:Ee,locale:se,_originalDate:ye},bt=vt.match(dt).map(function(F){var B=F[0];return"p"===B||"P"===B?(0,m[B])(F,se.formatLong):F}).join("").match(st).map(function(F){if("''"===F)return"'";var B=F[0];if("'"===B)return function mt(r){var t=r.match(lt);return t?t[1].replace(ct,"'"):r}(F);var be=We[B];if(be)return!(null!=e&&e.useAdditionalWeekYearTokens)&&function X(r){return-1!==Y.indexOf(r)}(F)&&G(F,t,String(r)),!(null!=e&&e.useAdditionalDayOfYearTokens)&&function _(r){return-1!==U.indexOf(r)}(F)&&G(F,t,String(r)),be(wt,F,se.localize,yt);if(B.match(ft))throw new RangeError("Format string contains an unescaped latin alphabet character `"+B+"`");return F}).join("");return bt}},8752:(q,N,d)=>{d.d(N,{Z:()=>w});var O=d(8790),v=d(9250);function w(b){(0,v.Z)(1,arguments);var Q=Object.prototype.toString.call(b);return b instanceof Date||"object"===(0,O.Z)(b)&&"[object Date]"===Q?new Date(b.getTime()):"number"==typeof b||"[object Number]"===Q?new Date(b):(("string"==typeof b||"[object String]"===Q)&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},8790:(q,N,d)=>{function O(v){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(w){return typeof w}:function(w){return w&&"function"==typeof Symbol&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w})(v)}d.d(N,{Z:()=>O})}}]);