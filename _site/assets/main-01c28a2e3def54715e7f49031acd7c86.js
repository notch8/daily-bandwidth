/*
 XDate v0.8
 Docs & Licensing: http://arshaw.com/xdate/
*/

var XDate=function(g,n,A,p){function f(){var a=this instanceof f?this:new f,c=arguments,b=c.length,d;typeof c[b-1]=="boolean"&&(d=c[--b],c=q(c,0,b));if(b)if(b==1)if(b=c[0],b instanceof g||typeof b=="number")a[0]=new g(+b);else if(b instanceof f){var c=a,h=new g(+b[0]);if(l(b))h.toString=v;c[0]=h}else{if(typeof b=="string"){a[0]=new g(0);a:{for(var c=b,b=d||!1,h=f.parsers,w=0,e;w<h.length;w++)if(e=h[w](c,b,a)){a=e;break a}a[0]=new g(c)}}}else a[0]=new g(m.apply(g,c)),d||(a[0]=r(a[0]));else a[0]=new g;
typeof d=="boolean"&&B(a,d);return a}function l(a){return a[0].toString===v}function B(a,c,b){if(c){if(!l(a))b&&(a[0]=new g(m(a[0].getFullYear(),a[0].getMonth(),a[0].getDate(),a[0].getHours(),a[0].getMinutes(),a[0].getSeconds(),a[0].getMilliseconds()))),a[0].toString=v}else l(a)&&(a[0]=b?r(a[0]):new g(+a[0]));return a}function C(a,c,b,d,h){var e=k(j,a[0],h),a=k(D,a[0],h),h=!1;d.length==2&&typeof d[1]=="boolean"&&(h=d[1],d=[b]);b=c==1?(b%12+12)%12:e(1);a(c,d);h&&e(1)!=b&&(a(1,[e(1)-1]),a(2,[E(e(0),
e(1))]))}function F(a,c,b,d){var b=Number(b),h=n.floor(b);a["set"+o[c]](a["get"+o[c]]()+h,d||!1);h!=b&&c<6&&F(a,c+1,(b-h)*G[c],d)}function H(a,c,b){var a=a.clone().setUTCMode(!0,!0),c=f(c).setUTCMode(!0,!0),d=0;if(b==0||b==1){for(var h=6;h>=b;h--)d/=G[h],d+=j(c,!1,h)-j(a,!1,h);b==1&&(d+=(c.getFullYear()-a.getFullYear())*12)}else b==2?(b=a.toDate().setUTCHours(0,0,0,0),d=c.toDate().setUTCHours(0,0,0,0),d=n.round((d-b)/864E5)+(c-d-(a-b))/864E5):d=(c-a)/[36E5,6E4,1E3,1][b-3];return d}function s(a){var c=
a(0),b=a(1),d=a(2),a=new g(m(c,b,d)),c=t(I(c,b,d));return n.floor(n.round((a-c)/864E5)/7)+1}function I(a,c,b){c=new g(m(a,c,b));if(c<t(a))return a-1;else if(c>=t(a+1))return a+1;return a}function t(a){a=new g(m(a,0,4));a.setUTCDate(a.getUTCDate()-(a.getUTCDay()+6)%7);return a}function J(a,c,b,d){var h=k(j,a,d),e=k(D,a,d);b===p&&(b=I(h(0),h(1),h(2)));b=t(b);d||(b=r(b));a.setTime(+b);e(2,[h(2)+(c-1)*7])}function K(a,c,b,d,h){var e=f.locales,g=e[f.defaultLocale]||{},i=k(j,a,h),b=(typeof b=="string"?
e[b]:b)||{};return x(a,c,function(a){if(d)for(var b=(a==7?2:a)-1;b>=0;b--)d.push(i(b));return i(a)},function(a){return b[a]||g[a]},h)}function x(a,c,b,d,e){for(var f,g,i="";f=c.match(N);){i+=c.substr(0,f.index);if(f[1]){g=i;for(var i=a,j=f[1],l=b,m=d,n=e,k=j.length,o=void 0,q="";k>0;)o=O(i,j.substr(0,k),l,m,n),o!==p?(q+=o,j=j.substr(k),k=j.length):k--;i=g+(q+j)}else f[3]?(g=x(a,f[4],b,d,e),parseInt(g.replace(/\D/g,""),10)&&(i+=g)):i+=f[7]||"'";c=c.substr(f.index+f[0].length)}return i+c}function O(a,
c,b,d,e){var g=f.formatters[c];if(typeof g=="string")return x(a,g,b,d,e);else if(typeof g=="function")return g(a,e||!1,d);switch(c){case "fff":return i(b(6),3);case "s":return b(5);case "ss":return i(b(5));case "m":return b(4);case "mm":return i(b(4));case "h":return b(3)%12||12;case "hh":return i(b(3)%12||12);case "H":return b(3);case "HH":return i(b(3));case "d":return b(2);case "dd":return i(b(2));case "ddd":return d("dayNamesShort")[b(7)]||"";case "dddd":return d("dayNames")[b(7)]||"";case "M":return b(1)+
1;case "MM":return i(b(1)+1);case "MMM":return d("monthNamesShort")[b(1)]||"";case "MMMM":return d("monthNames")[b(1)]||"";case "yy":return(b(0)+"").substring(2);case "yyyy":return b(0);case "t":return u(b,d).substr(0,1).toLowerCase();case "tt":return u(b,d).toLowerCase();case "T":return u(b,d).substr(0,1);case "TT":return u(b,d);case "z":case "zz":case "zzz":return e?c="Z":(d=a.getTimezoneOffset(),a=d<0?"+":"-",b=n.floor(n.abs(d)/60),d=n.abs(d)%60,e=b,c=="zz"?e=i(b):c=="zzz"&&(e=i(b)+":"+i(d)),c=
a+e),c;case "w":return s(b);case "ww":return i(s(b));case "S":return c=b(2),c>10&&c<20?"th":["st","nd","rd"][c%10-1]||"th"}}function u(a,c){return a(3)<12?c("amDesignator"):c("pmDesignator")}function y(a){return!isNaN(+a[0])}function j(a,c,b){return a["get"+(c?"UTC":"")+o[b]]()}function D(a,c,b,d){a["set"+(c?"UTC":"")+o[b]].apply(a,d)}function r(a){return new g(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}function E(a,
c){return 32-(new g(m(a,c,32))).getUTCDate()}function z(a){return function(){return a.apply(p,[this].concat(q(arguments)))}}function k(a){var c=q(arguments,1);return function(){return a.apply(p,c.concat(q(arguments)))}}function q(a,c,b){return A.prototype.slice.call(a,c||0,b===p?a.length:b)}function L(a,c){for(var b=0;b<a.length;b++)c(a[b],b)}function i(a,c){c=c||2;for(a+="";a.length<c;)a="0"+a;return a}var o="FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds,Day,Year".split(","),M=["Years",
"Months","Days"],G=[12,31,24,60,60,1E3,1],N=/(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,m=g.UTC,v=g.prototype.toUTCString,e=f.prototype;e.length=1;e.splice=A.prototype.splice;e.getUTCMode=z(l);e.setUTCMode=z(B);e.getTimezoneOffset=function(){return l(this)?0:this[0].getTimezoneOffset()};L(o,function(a,c){e["get"+a]=function(){return j(this[0],l(this),c)};c!=8&&(e["getUTC"+a]=function(){return j(this[0],!0,c)});c!=7&&(e["set"+a]=function(a){C(this,c,a,arguments,l(this));return this},c!=
8&&(e["setUTC"+a]=function(a){C(this,c,a,arguments,!0);return this},e["add"+(M[c]||a)]=function(a,d){F(this,c,a,d);return this},e["diff"+(M[c]||a)]=function(a){return H(this,a,c)}))});e.getWeek=function(){return s(k(j,this,!1))};e.getUTCWeek=function(){return s(k(j,this,!0))};e.setWeek=function(a,c){J(this,a,c,!1);return this};e.setUTCWeek=function(a,c){J(this,a,c,!0);return this};e.addWeeks=function(a){return this.addDays(Number(a)*7)};e.diffWeeks=function(a){return H(this,a,2)/7};f.parsers=[function(a,
c,b){if(a=a.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)){var d=new g(m(a[1],a[3]?a[3]-1:0,a[5]||1,a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0));a[13]?a[14]&&d.setUTCMinutes(d.getUTCMinutes()+(a[15]=="-"?1:-1)*(Number(a[16])*60+(a[18]?Number(a[18]):0))):c||(d=r(d));return b.setTime(+d)}}];f.parse=function(a){return+f(""+a)};e.toString=function(a,c,b){return a===p||!y(this)?this[0].toString():K(this,a,c,b,l(this))};
e.toUTCString=e.toGMTString=function(a,c,b){return a===p||!y(this)?this[0].toUTCString():K(this,a,c,b,!0)};e.toISOString=function(){return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")};f.defaultLocale="";f.locales={"":{monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
amDesignator:"AM",pmDesignator:"PM"}};f.formatters={i:"yyyy-MM-dd'T'HH:mm:ss(.fff)",u:"yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"};L("getTime,valueOf,toDateString,toTimeString,toLocaleString,toLocaleDateString,toLocaleTimeString,toJSON".split(","),function(a){e[a]=function(){return this[0][a]()}});e.setTime=function(a){this[0].setTime(a);return this};e.valid=z(y);e.clone=function(){return new f(this)};e.clearTime=function(){return this.setHours(0,0,0,0)};e.toDate=function(){return new g(+this[0])};f.now=function(){return+new g};
f.today=function(){return(new f).clearTime()};f.UTC=m;f.getDaysInMonth=E;if(typeof module!=="undefined"&&module.exports)module.exports=f;typeof define==="function"&&define.amd&&define([],function(){return f});return f}(Date,Math,Array);
angular.module("ui.bootstrap",["ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dialog","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(e,t,n){function a(e){for(var t in e)if(void 0!==o.style[t])return e[t]}var i=function(a,o,r){r=r||{};var l=e.defer(),s=i[r.animation?"animationEndEventName":"transitionEndEventName"],c=function(){n.$apply(function(){a.unbind(s,c),l.resolve(a)})};return s&&a.bind(s,c),t(function(){angular.isString(o)?a.addClass(o):angular.isFunction(o)?o(a):angular.isObject(o)&&a.css(o),s||l.resolve(a)}),l.promise.cancel=function(){s&&a.unbind(s,c),l.reject("Transition cancelled")},l.promise},o=document.createElement("trans"),r={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},l={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return i.transitionEndEventName=a(r),i.animationEndEventName=a(l),i}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(e){var t=function(e,t,n){t.removeClass("collapse"),t.css({height:n}),t[0].offsetWidth,t.addClass("collapse")};return{link:function(n,a,i){var o,r=!0;n.$watch(function(){return a[0].scrollHeight},function(){0!==a[0].scrollHeight&&(o||(r?t(n,a,a[0].scrollHeight+"px"):t(n,a,"auto")))}),n.$watch(i.collapse,function(e){e?u():c()});var l,s=function(t){return l&&l.cancel(),l=e(a,t),l.then(function(){l=void 0},function(){l=void 0}),l},c=function(){r?(r=!1,o||t(n,a,"auto")):s({height:a[0].scrollHeight+"px"}).then(function(){o||t(n,a,"auto")}),o=!1},u=function(){o=!0,r?(r=!1,t(n,a,0)):(t(n,a,a[0].scrollHeight+"px"),s({height:"0"}))}}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(e,t,n){this.groups=[],this.closeOthers=function(a){var i=angular.isDefined(t.closeOthers)?e.$eval(t.closeOthers):n.closeOthers;i&&angular.forEach(this.groups,function(e){e!==a&&(e.isOpen=!1)})},this.addGroup=function(e){var t=this;this.groups.push(e),e.$on("$destroy",function(){t.removeGroup(e)})},this.removeGroup=function(e){var t=this.groups.indexOf(e);-1!==t&&this.groups.splice(this.groups.indexOf(e),1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse","$transition","$timeout",function(e){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:["$scope",function(){this.setHeading=function(e){this.heading=e}}],link:function(t,n,a,i){var o,r;i.addGroup(t),t.isOpen=!1,a.isOpen&&(o=e(a.isOpen),r=o.assign,t.$watch(function(){return o(t.$parent)},function(e){t.isOpen=e}),t.isOpen=o?o(t.$parent):!1),t.$watch("isOpen",function(e){e&&i.closeOthers(t),r&&r(t.$parent,e)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(e,t,n){return function(e,t,a,i){i.setHeading(n(e,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(e,t,n,a){e.$watch(function(){return a[n.accordionTransclude]},function(e){e&&(t.html(""),t.append(e))})}}}),angular.module("ui.bootstrap.alert",[]).directive("alert",function(){return{restrict:"EA",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"},link:function(e,t,n){e.closeable="close"in n}}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).directive("btnRadio",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,o){o.$render=function(){a.toggleClass(t,angular.equals(o.$modelValue,e.$eval(i.btnRadio)))},a.bind(n,function(){a.hasClass(t)||e.$apply(function(){o.$setViewValue(e.$eval(i.btnRadio)),o.$render()})})}}}]).directive("btnCheckbox",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,o){function r(){var t=e.$eval(i.btnCheckboxTrue);return angular.isDefined(t)?t:!0}function l(){var t=e.$eval(i.btnCheckboxFalse);return angular.isDefined(t)?t:!1}o.$render=function(){a.toggleClass(t,angular.equals(o.$modelValue,r()))},a.bind(n,function(){e.$apply(function(){o.$setViewValue(a.hasClass(t)?l():r()),o.$render()})})}}}]),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition","$q",function(e,t,n){function a(){function n(){o?(e.next(),a()):e.pause()}i&&t.cancel(i);var r=+e.interval;!isNaN(r)&&r>=0&&(i=t(n,r))}var i,o,r=this,l=r.slides=[],s=-1;r.currentSlide=null,r.select=function(i,o){function c(){r.currentSlide&&angular.isString(o)&&!e.noTransition&&i.$element?(i.$element.addClass(o),i.$element[0].offsetWidth=i.$element[0].offsetWidth,angular.forEach(l,function(e){angular.extend(e,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(i,{direction:o,active:!0,entering:!0}),angular.extend(r.currentSlide||{},{direction:o,leaving:!0}),e.$currentTransition=n(i.$element,{}),function(t,n){e.$currentTransition.then(function(){u(t,n)},function(){u(t,n)})}(i,r.currentSlide)):u(i,r.currentSlide),r.currentSlide=i,s=p,a()}function u(t,n){angular.extend(t,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(n||{},{direction:"",active:!1,leaving:!1,entering:!1}),e.$currentTransition=null}var p=l.indexOf(i);void 0===o&&(o=p>s?"next":"prev"),i&&i!==r.currentSlide&&(e.$currentTransition?(e.$currentTransition.cancel(),t(c)):c())},r.indexOfSlide=function(e){return l.indexOf(e)},e.next=function(){var t=(s+1)%l.length;return e.$currentTransition?void 0:r.select(l[t],"next")},e.prev=function(){var t=0>s-1?l.length-1:s-1;return e.$currentTransition?void 0:r.select(l[t],"prev")},e.select=function(e){r.select(e)},e.isActive=function(e){return r.currentSlide===e},e.slides=function(){return l},e.$watch("interval",a),e.play=function(){o||(o=!0,a())},e.pause=function(){e.noPause||(o=!1,i&&t.cancel(i))},r.addSlide=function(t,n){t.$element=n,l.push(t),1===l.length||t.active?(r.select(l[l.length-1]),1==l.length&&e.play()):t.active=!1},r.removeSlide=function(e){var t=l.indexOf(e);l.splice(t,1),l.length>0&&e.active?t>=l.length?r.select(l[t-1]):r.select(l[t]):s>t&&s--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",["$parse",function(e){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{},link:function(t,n,a,i){if(a.active){var o=e(a.active),r=o.assign,l=t.active=o(t.$parent);t.$watch(function(){var e=o(t.$parent);return e!==t.active&&(e!==l?l=t.active=e:r(t.$parent,e=l=t.active)),e})}i.addSlide(t,n),t.$on("$destroy",function(){i.removeSlide(t)}),t.$watch("active",function(e){e&&i.select(t)})}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function a(e){return"static"===(n(e,"position")||"static")}var i,o;e.bind("mousemove",function(e){i=e.pageX,o=e.pageY});var r=function(t){for(var n=e[0],i=t.offsetParent||n;i&&i!==n&&a(i);)i=i.offsetParent;return i||n};return{position:function(t){var n=this.offset(t),a={top:0,left:0},i=r(t[0]);return i!=e[0]&&(a=this.offset(angular.element(i)),a.top+=i.clientTop-i.scrollTop,a.left+=i.clientLeft-i.scrollLeft),{width:t.prop("offsetWidth"),height:t.prop("offsetHeight"),top:n.top-a.top,left:n.left-a.left}},offset:function(n){var a=n[0].getBoundingClientRect();return{width:n.prop("offsetWidth"),height:n.prop("offsetHeight"),top:a.top+(t.pageYOffset||e[0].body.scrollTop),left:a.left+(t.pageXOffset||e[0].body.scrollLeft)}},mouse:function(){return{x:i,y:o}}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.position"]).constant("datepickerConfig",{dayFormat:"dd",monthFormat:"MMMM",yearFormat:"yyyy",dayHeaderFormat:"EEE",dayTitleFormat:"MMMM yyyy",monthTitleFormat:"yyyy",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","dateFilter","datepickerConfig",function(e,t,n,a){function i(t,n){return angular.isDefined(t)?e.$parent.$eval(t):n}function o(e,t){return new Date(e,t,0).getDate()}function r(e,t){for(var n=Array(t),a=e,i=0;t>i;)n[i++]=new Date(a),a.setDate(a.getDate()+1);return n}function l(e,t,a,i){return{date:e,label:n(e,t),selected:!!a,secondary:!!i}}var s={day:i(t.dayFormat,a.dayFormat),month:i(t.monthFormat,a.monthFormat),year:i(t.yearFormat,a.yearFormat),dayHeader:i(t.dayHeaderFormat,a.dayHeaderFormat),dayTitle:i(t.dayTitleFormat,a.dayTitleFormat),monthTitle:i(t.monthTitleFormat,a.monthTitleFormat)},c=i(t.startingDay,a.startingDay),u=i(t.yearRange,a.yearRange);this.minDate=a.minDate?new Date(a.minDate):null,this.maxDate=a.maxDate?new Date(a.maxDate):null,this.modes=[{name:"day",getVisibleDates:function(e,t){var a=e.getFullYear(),i=e.getMonth(),u=new Date(a,i,1),p=c-u.getDay(),d=p>0?7-p:-p,f=new Date(u),m=0;d>0&&(f.setDate(-d+1),m+=d),m+=o(a,i+1),m+=(7-m%7)%7;for(var g=r(f,m),h=Array(7),v=0;m>v;v++){var b=new Date(g[v]);g[v]=l(b,s.day,t&&t.getDate()===b.getDate()&&t.getMonth()===b.getMonth()&&t.getFullYear()===b.getFullYear(),b.getMonth()!==i)}for(var $=0;7>$;$++)h[$]=n(g[$].date,s.dayHeader);return{objects:g,title:n(e,s.dayTitle),labels:h}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate())},split:7,step:{months:1}},{name:"month",getVisibleDates:function(e,t){for(var a=Array(12),i=e.getFullYear(),o=0;12>o;o++){var r=new Date(i,o,1);a[o]=l(r,s.month,t&&t.getMonth()===o&&t.getFullYear()===i)}return{objects:a,title:n(e,s.monthTitle)}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth())-new Date(t.getFullYear(),t.getMonth())},split:3,step:{years:1}},{name:"year",getVisibleDates:function(e,t){for(var n=Array(u),a=e.getFullYear(),i=parseInt((a-1)/u,10)*u+1,o=0;u>o;o++){var r=new Date(i+o,0,1);n[o]=l(r,s.year,t&&t.getFullYear()===r.getFullYear())}return{objects:n,title:[n[0].label,n[u-1].label].join(" - ")}},compare:function(e,t){return e.getFullYear()-t.getFullYear()},split:5,step:{years:u}}],this.isDisabled=function(t,n){var a=this.modes[n||0];return this.minDate&&0>a.compare(t,this.minDate)||this.maxDate&&a.compare(t,this.maxDate)>0||e.dateDisabled&&e.dateDisabled({date:t,mode:a.name})}}]).directive("datepicker",["dateFilter","$parse","datepickerConfig","$log",function(e,t,n,a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(e,i,o,r){function l(){e.showWeekNumbers=0===m&&h}function s(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function c(t){var n=null,i=!0;f.$modelValue&&(n=new Date(f.$modelValue),isNaN(n)?(i=!1,a.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):t&&(g=n)),f.$setValidity("date",i);var o=d.modes[m],r=o.getVisibleDates(g,n);angular.forEach(r.objects,function(e){e.disabled=d.isDisabled(e.date,m)}),f.$setValidity("date-disabled",!n||!d.isDisabled(n)),e.rows=s(r.objects,o.split),e.labels=r.labels||[],e.title=r.title}function u(e){m=e,l(),c()}function p(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1}var d=r[0],f=r[1];if(f){var m=0,g=new Date,h=n.showWeeks;o.showWeeks?e.$parent.$watch(t(o.showWeeks),function(e){h=!!e,l()}):l(),o.min&&e.$parent.$watch(t(o.min),function(e){d.minDate=e?new Date(e):null,c()}),o.max&&e.$parent.$watch(t(o.max),function(e){d.maxDate=e?new Date(e):null,c()}),f.$render=function(){c(!0)},e.select=function(e){if(0===m){var t=new Date(f.$modelValue);t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),f.$setViewValue(t),c(!0)}else g=e,u(m-1)},e.move=function(e){var t=d.modes[m].step;g.setMonth(g.getMonth()+e*(t.months||0)),g.setFullYear(g.getFullYear()+e*(t.years||0)),c()},e.toggleMode=function(){u((m+1)%d.modes.length)},e.getWeekNumber=function(t){return 0===m&&e.showWeekNumbers&&7===t.length?p(t[0].date):null}}}}}]).constant("datepickerPopupConfig",{dateFormat:"yyyy-MM-dd",closeOnDateSelection:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","datepickerPopupConfig",function(e,t,n,a,i,o){return{restrict:"EA",require:"ngModel",link:function(r,l,s,c){function u(e){return e?i(e,h):null}function p(e){if(e){var t=new Date(e);if(!isNaN(t))return t}return e}function d(e){$?$(r,!!e):v.isOpen=!!e}function f(e,n,a){e&&(r.$watch(t(e),function(e){v[n]=e}),D.attr(a||n,n))}function m(){v.position=a.position(l),v.position.top=v.position.top+l.prop("offsetHeight")}var g=angular.isDefined(s.closeOnDateSelection)?v.$eval(s.closeOnDateSelection):o.closeOnDateSelection,h=s.datepickerPopup||o.dateFormat,v=r.$new();r.$on("$destroy",function(){v.$destroy()}),c.$formatters.push(u),c.$parsers.push(p);var b,$;s.open&&(b=t(s.open),$=b.assign,r.$watch(b,function(e){v.isOpen=!!e})),v.isOpen=b?b(r):!1;var y=function(e){v.isOpen&&e.target!==l[0]&&v.$apply(function(){d(!1)})},w=function(){v.$apply(function(){d(!0)})},k=angular.element("<datepicker-popup-wrap><datepicker></datepicker></datepicker-popup-wrap>");k.attr({"ng-model":"date","ng-change":"dateSelection()"});var D=k.find("datepicker");s.datepickerOptions&&D.attr(angular.extend({},r.$eval(s.datepickerOptions)));var x=t(s.ngModel).assign;v.dateSelection=function(){x(r,v.date),g&&d(!1)},v.$watch(function(){return c.$modelValue},function(e){if(angular.isString(e)){var t=p(e);if(e&&!t)throw x(r,null),Error(e+" cannot be parsed to a date object.");e=t}v.date=e,m()}),f(s.min,"min"),f(s.max,"max"),s.showWeeks?f(s.showWeeks,"showWeeks","show-weeks"):(v.showWeeks=!0,D.attr("show-weeks","showWeeks")),s.dateDisabled&&D.attr("date-disabled",s.dateDisabled),v.$watch("isOpen",function(e){e?(m(),n.bind("click",y),l.unbind("focus",w),l.focus()):(n.unbind("click",y),l.bind("focus",w)),$&&$(r,e)}),v.today=function(){x(r,new Date)},v.clear=function(){x(r,null)},l.after(e(k)(v))}}}]).directive("datepickerPopupWrap",[function(){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(e,t){t.bind("click",function(e){e.preventDefault(),e.stopPropagation()})}}}]);var dialogModule=angular.module("ui.bootstrap.dialog",["ui.bootstrap.transition"]);dialogModule.controller("MessageBoxController",["$scope","dialog","model",function(e,t,n){e.title=n.title,e.message=n.message,e.buttons=n.buttons,e.close=function(e){t.close(e)}}]),dialogModule.provider("$dialog",function(){var e={backdrop:!0,dialogClass:"modal",backdropClass:"modal-backdrop",transitionClass:"fade",triggerClass:"in",resolve:{},backdropFade:!1,dialogFade:!1,keyboard:!0,backdropClick:!0},t={},n={value:0};this.options=function(e){t=e},this.$get=["$http","$document","$compile","$rootScope","$controller","$templateCache","$q","$transition","$injector",function(a,i,o,r,l,s,c,u,p){function d(e){var t=angular.element("<div>");return t.addClass(e),t}function f(n){var a=this,i=this.options=angular.extend({},e,t,n);this._open=!1,this.backdropEl=d(i.backdropClass),i.backdropFade&&(this.backdropEl.addClass(i.transitionClass),this.backdropEl.removeClass(i.triggerClass)),this.modalEl=d(i.dialogClass),i.dialogFade&&(this.modalEl.addClass(i.transitionClass),this.modalEl.removeClass(i.triggerClass)),this.handledEscapeKey=function(e){27===e.which&&(a.close(),e.preventDefault(),a.$scope.$apply())},this.handleBackDropClick=function(e){a.close(),e.preventDefault(),a.$scope.$apply()}}var m=i.find("body");return f.prototype.isOpen=function(){return this._open},f.prototype.open=function(e,t){var n=this,a=this.options;if(e&&(a.templateUrl=e),t&&(a.controller=t),!a.template&&!a.templateUrl)throw Error("Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.");return this._loadResolves().then(function(e){var t=e.$scope=n.$scope=e.$scope?e.$scope:r.$new();if(n.modalEl.html(e.$template),n.options.controller){var a=l(n.options.controller,e);n.modalEl.children().data("ngControllerController",a)}o(n.modalEl)(t),n._addElementsToDom(),setTimeout(function(){n.options.dialogFade&&n.modalEl.addClass(n.options.triggerClass),n.options.backdropFade&&n.backdropEl.addClass(n.options.triggerClass)}),n._bindEvents()}),this.deferred=c.defer(),this.deferred.promise},f.prototype.close=function(e){function t(e){e.removeClass(a.options.triggerClass)}function n(){a._open&&a._onCloseComplete(e)}var a=this,i=this._getFadingElements();if(i.length>0)for(var o=i.length-1;o>=0;o--)u(i[o],t).then(n);else this._onCloseComplete(e)},f.prototype._getFadingElements=function(){var e=[];return this.options.dialogFade&&e.push(this.modalEl),this.options.backdropFade&&e.push(this.backdropEl),e},f.prototype._bindEvents=function(){this.options.keyboard&&m.bind("keydown",this.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.backdropEl.bind("click",this.handleBackDropClick)},f.prototype._unbindEvents=function(){this.options.keyboard&&m.unbind("keydown",this.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.backdropEl.unbind("click",this.handleBackDropClick)},f.prototype._onCloseComplete=function(e){this._removeElementsFromDom(),this._unbindEvents(),this.deferred.resolve(e)},f.prototype._addElementsToDom=function(){m.append(this.modalEl),this.options.backdrop&&(0===n.value&&m.append(this.backdropEl),n.value++),this._open=!0},f.prototype._removeElementsFromDom=function(){this.modalEl.remove(),this.options.backdrop&&(n.value--,0===n.value&&this.backdropEl.remove()),this._open=!1},f.prototype._loadResolves=function(){var e,t=[],n=[],i=this;return this.options.template?e=c.when(this.options.template):this.options.templateUrl&&(e=a.get(this.options.templateUrl,{cache:s}).then(function(e){return e.data})),angular.forEach(this.options.resolve||[],function(e,a){n.push(a),t.push(angular.isString(e)?p.get(e):p.invoke(e))}),n.push("$template"),t.push(e),c.all(t).then(function(e){var t={};return angular.forEach(e,function(e,a){t[n[a]]=e}),t.dialog=i,t})},{dialog:function(e){return new f(e)},messageBox:function(e,t,n){return new f({templateUrl:"template/dialog/message.html",controller:"MessageBoxController",resolve:{model:function(){return{title:e,message:t,buttons:n}}}})}}}]}),angular.module("ui.bootstrap.dropdownToggle",[]).directive("dropdownToggle",["$document","$location",function(e){var t=null,n=angular.noop;return{restrict:"CA",link:function(a,i){a.$watch("$location.path",function(){n()}),i.parent().bind("click",function(){n()}),i.bind("click",function(a){var o=i===t;a.preventDefault(),a.stopPropagation(),t&&n(),o||(i.parent().addClass("open"),t=i,n=function(a){a&&(a.preventDefault(),a.stopPropagation()),e.unbind("click",n),i.parent().removeClass("open"),n=angular.noop,t=null},e.bind("click",n))})}}}]),angular.module("ui.bootstrap.modal",["ui.bootstrap.dialog"]).directive("modal",["$parse","$dialog",function(e,t){return{restrict:"EA",terminal:!0,link:function(n,a,i){var o,r=angular.extend({},n.$eval(i.uiOptions||i.bsOptions||i.options)),l=i.modal||i.show;r=angular.extend(r,{template:a.html(),resolve:{$scope:function(){return n}}});var s=t.dialog(r);a.remove(),o=i.close?function(){e(i.close)(n)}:function(){angular.isFunction(e(l).assign)&&e(l).assign(n,!1)},n.$watch(l,function(e){e?s.open().then(function(){o()}):s.isOpen()&&s.close()})}}}]),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$interpolate",function(e,t){this.currentPage=1,this.noPrevious=function(){return 1===this.currentPage},this.noNext=function(){return this.currentPage===e.numPages},this.isActive=function(e){return this.currentPage===e},this.reset=function(){e.pages=[],this.currentPage=parseInt(e.currentPage,10),this.currentPage>e.numPages&&e.selectPage(e.numPages)};var n=this;e.selectPage=function(t){!n.isActive(t)&&t>0&&e.numPages>=t&&(e.currentPage=t,e.onSelectPage({page:t}))},this.getAttributeValue=function(n,a,i){return angular.isDefined(n)?i?t(n)(e.$parent):e.$parent.$eval(n):a}}]).constant("paginationConfig",{boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["paginationConfig",function(e){return{restrict:"EA",scope:{numPages:"=",currentPage:"=",maxSize:"=",onSelectPage:"&"},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(t,n,a,i){function o(e,t,n,a){return{number:e,text:t,active:n,disabled:a}}var r=i.getAttributeValue(a.boundaryLinks,e.boundaryLinks),l=i.getAttributeValue(a.directionLinks,e.directionLinks),s=i.getAttributeValue(a.firstText,e.firstText,!0),c=i.getAttributeValue(a.previousText,e.previousText,!0),u=i.getAttributeValue(a.nextText,e.nextText,!0),p=i.getAttributeValue(a.lastText,e.lastText,!0),d=i.getAttributeValue(a.rotate,e.rotate);t.$watch("numPages + currentPage + maxSize",function(){i.reset();var e=1,n=t.numPages,a=angular.isDefined(t.maxSize)&&t.maxSize<t.numPages;a&&(d?(e=Math.max(i.currentPage-Math.floor(t.maxSize/2),1),n=e+t.maxSize-1,n>t.numPages&&(n=t.numPages,e=n-t.maxSize+1)):(e=(Math.ceil(i.currentPage/t.maxSize)-1)*t.maxSize+1,n=Math.min(e+t.maxSize-1,t.numPages)));for(var f=e;n>=f;f++){var m=o(f,f,i.isActive(f),!1);t.pages.push(m)}if(a&&!d){if(e>1){var g=o(e-1,"...",!1,!1);t.pages.unshift(g)}if(t.numPages>n){var h=o(n+1,"...",!1,!1);t.pages.push(h)}}if(l){var v=o(i.currentPage-1,c,!1,i.noPrevious());t.pages.unshift(v);var b=o(i.currentPage+1,u,!1,i.noNext());t.pages.push(b)}if(r){var $=o(1,s,!1,i.noPrevious());t.pages.unshift($);var y=o(t.numPages,p,!1,i.noNext());t.pages.push(y)}})}}}]).constant("pagerConfig",{previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(e){return{restrict:"EA",scope:{numPages:"=",currentPage:"=",onSelectPage:"&"},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(t,n,a,i){function o(e,t,n,a,i){return{number:e,text:t,disabled:n,previous:s&&a,next:s&&i}}var r=i.getAttributeValue(a.previousText,e.previousText,!0),l=i.getAttributeValue(a.nextText,e.nextText,!0),s=i.getAttributeValue(a.align,e.align);t.$watch("numPages + currentPage",function(){i.reset();var e=o(i.currentPage-1,r,i.noPrevious(),!0,!1);t.pages.unshift(e);var n=o(i.currentPage+1,l,i.noNext(),!1,!0);t.pages.push(n)})}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position"]).provider("$tooltip",function(){function e(e){var t=/[A-Z]/g,n="-";return e.replace(t,function(e,t){return(t?n:"")+e.toLowerCase()})}var t={placement:"top",animation:!0,popupDelay:0},n={mouseenter:"mouseleave",click:"click",focus:"blur"},a={};this.options=function(e){angular.extend(a,e)},this.setTriggers=function(e){angular.extend(n,e)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(i,o,r,l,s,c,u){return function(i,p,d){function f(e){var t=e||m.trigger||d,a=n[t]||t;return{show:t,hide:a}}var m=angular.extend({},t,a),g=e(i),h=u.startSymbol(),v=u.endSymbol(),b="<"+g+"-popup "+'title="'+h+"tt_title"+v+'" '+'content="'+h+"tt_content"+v+'" '+'placement="'+h+"tt_placement"+v+'" '+'animation="tt_animation()" '+'is-open="tt_isOpen"'+">"+"</"+g+"-popup>";return{restrict:"EA",scope:!0,link:function(e,t,n){function a(){e.tt_isOpen?d():u()}function u(){e.tt_popupDelay?$=r(g,e.tt_popupDelay):e.$apply(g)}function d(){e.$apply(function(){h()})}function g(){var n,a,i,o;if(e.tt_content){switch(v&&r.cancel(v),w.css({top:0,left:0,display:"block"}),k?(y=y||s.find("body"),y.append(w)):t.after(w),n=k?c.offset(t):c.position(t),a=w.prop("offsetWidth"),i=w.prop("offsetHeight"),e.tt_placement){case"mouse":var l=c.mouse();o={top:l.y,left:l.x};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width};break;case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-a/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-a};break;default:o={top:n.top-i,left:n.left+n.width/2-a/2}}o.top+="px",o.left+="px",w.css(o),e.tt_isOpen=!0}}function h(){e.tt_isOpen=!1,r.cancel($),angular.isDefined(e.tt_animation)&&e.tt_animation()?v=r(function(){w.remove()},500):w.remove()}var v,$,y,w=o(b)(e),k=angular.isDefined(m.appendToBody)?m.appendToBody:!1,D=f(void 0),x=!1;e.tt_isOpen=!1,n.$observe(i,function(t){e.tt_content=t}),n.$observe(p+"Title",function(t){e.tt_title=t}),n.$observe(p+"Placement",function(t){e.tt_placement=angular.isDefined(t)?t:m.placement}),n.$observe(p+"Animation",function(t){e.tt_animation=angular.isDefined(t)?l(t):function(){return m.animation}}),n.$observe(p+"PopupDelay",function(t){var n=parseInt(t,10);e.tt_popupDelay=isNaN(n)?m.popupDelay:n}),n.$observe(p+"Trigger",function(e){x&&(t.unbind(D.show,u),t.unbind(D.hide,d)),D=f(e),D.show===D.hide?t.bind(D.show,a):(t.bind(D.show,u),t.bind(D.hide,d)),x=!0}),n.$observe(p+"AppendToBody",function(t){k=angular.isDefined(t)?l(t)(e):k}),k&&e.$on("$locationChangeSuccess",function(){e.tt_isOpen&&h()}),e.$on("$destroy",function(){e.tt_isOpen?h():w.remove()})}}}}]}).directive("tooltipPopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(e){return e("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(e){return e("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$compile","$timeout","$parse","$window","$tooltip",function(e,t,n,a,i){return i("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,autoType:!1,stackedTypes:["success","info","warning","danger"]}).controller("ProgressBarController",["$scope","$attrs","progressConfig",function(e,t,n){function a(e){return r[e]}var i=angular.isDefined(t.animate)?e.$eval(t.animate):n.animate,o=angular.isDefined(t.autoType)?e.$eval(t.autoType):n.autoType,r=angular.isDefined(t.stackedTypes)?e.$eval("["+t.stackedTypes+"]"):n.stackedTypes;this.makeBar=function(e,t,n){var r=angular.isObject(e)?e.value:e||0,l=angular.isObject(t)?t.value:t||0,s=angular.isObject(e)&&angular.isDefined(e.type)?e.type:o?a(n||0):null;return{from:l,to:r,type:s,animate:i}},this.addBar=function(t){e.bars.push(t),e.totalPercent+=t.to},this.clearBars=function(){e.bars=[],e.totalPercent=0},this.clearBars()}]).directive("progress",function(){return{restrict:"EA",replace:!0,controller:"ProgressBarController",scope:{value:"=percent",onFull:"&",onEmpty:"&"},templateUrl:"template/progressbar/progress.html",link:function(e,t,n,a){e.$watch("value",function(e,t){if(a.clearBars(),angular.isArray(e))for(var n=0,i=e.length;i>n;n++)a.addBar(a.makeBar(e[n],t[n],n));else a.addBar(a.makeBar(e,t))},!0),e.$watch("totalPercent",function(t){t>=100?e.onFull():0>=t&&e.onEmpty()},!0)}}}).directive("progressbar",["$transition",function(e){return{restrict:"EA",replace:!0,scope:{width:"=",old:"=",type:"=",animate:"="},templateUrl:"template/progressbar/bar.html",link:function(t,n){t.$watch("width",function(a){t.animate?(n.css("width",t.old+"%"),e(n,{width:a+"%"})):n.css("width",a+"%")})}}}]),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5}).directive("rating",["ratingConfig","$parse",function(e,t){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},templateUrl:"template/rating/rating.html",replace:!0,link:function(n,a,i){var o=angular.isDefined(i.max)?n.$parent.$eval(i.max):e.max;n.range=[];for(var r=1;o>=r;r++)n.range.push(r);n.rate=function(e){n.readonly||(n.value=e)},n.enter=function(e){n.readonly||(n.val=e),n.onHover({value:e})},n.reset=function(){n.val=angular.copy(n.value),n.onLeave()},n.reset(),n.$watch("value",function(e){n.val=e}),n.readonly=!1,i.readonly&&n.$parent.$watch(t(i.readonly),function(e){n.readonly=!!e})}}}]),angular.module("ui.bootstrap.tabs",[]).directive("tabs",function(){return function(){throw Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")}}).controller("TabsetController",["$scope","$element",function(e){var t=this,n=t.tabs=e.tabs=[];t.select=function(e){angular.forEach(n,function(e){e.active=!1}),e.active=!0},t.addTab=function(e){n.push(e),(1===n.length||e.active)&&t.select(e)},t.removeTab=function(e){var a=n.indexOf(e);if(e.active&&n.length>1){var i=a==n.length-1?a-1:a+1;t.select(n[i])}n.splice(a,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,require:"^tabset",scope:{},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",compile:function(e,t,n){return function(e,t,a,i){e.vertical=angular.isDefined(a.vertical)?e.$eval(a.vertical):!1,e.type=angular.isDefined(a.type)?e.$parent.$eval(a.type):"tabs",e.direction=angular.isDefined(a.direction)?e.$parent.$eval(a.direction):"top",e.tabsAbove="below"!=e.direction,i.$scope=e,i.$transcludeFn=n}}}}).directive("tab",["$parse","$http","$templateCache","$compile",function(e){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(t,n,a){return function(t,n,i,o){var r,l;i.active?(r=e(i.active),l=r.assign,t.$parent.$watch(r,function(e){t.active=!!e}),t.active=r(t.$parent)):l=r=angular.noop,t.$watch("active",function(e){l(t.$parent,e),e?(o.select(t),t.onSelect()):t.onDeselect()}),t.disabled=!1,i.disabled&&t.$parent.$watch(e(i.disabled),function(e){t.disabled=!!e}),t.select=function(){t.disabled||(t.active=!0)},o.addTab(t),t.$on("$destroy",function(){o.removeTab(t)}),t.active&&l(t.$parent,!0),t.$transcludeFn=a}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(e,t){e.$watch("headingElement",function(e){e&&(t.html(""),t.append(e))})}}}]).directive("tabContentTransclude",["$compile","$parse",function(){function e(e){return e.tagName&&(e.hasAttribute("tab-heading")||e.hasAttribute("data-tab-heading")||"tab-heading"===e.tagName.toLowerCase()||"data-tab-heading"===e.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(t,n,a){var i=t.$eval(a.tabContentTransclude);i.$transcludeFn(i.$parent,function(t){angular.forEach(t,function(t){e(t)?i.headingElement=t:n.append(t)
})})}}}]).directive("tabsetTitles",function(){return{restrict:"A",require:"^tabset",templateUrl:"template/tabs/tabset-titles.html",replace:!0,link:function(e,t,n,a){e.$eval(n.tabsetTitles)?a.$transcludeFn(a.$scope.$parent,function(e){t.append(e)}):t.remove()}}}),angular.module("ui.bootstrap.timepicker",[]).filter("pad",function(){return function(e){return angular.isDefined(e)&&2>(""+e).length&&(e="0"+e),e}}).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:["AM","PM"],readonlyInput:!1,mousewheel:!0}).directive("timepicker",["padFilter","$parse","timepickerConfig",function(e,t,n){return{restrict:"EA",require:"ngModel",replace:!0,templateUrl:"template/timepicker/timepicker.html",scope:{model:"=ngModel"},link:function(a,i,o){function r(){var e=parseInt(a.hours,10),t=a.showMeridian?e>0&&13>e:e>=0&&24>e;return t?(a.showMeridian&&(12===e&&(e=0),a.meridian===u[1]&&(e+=12)),e):void 0}function l(){var t=c.getHours();a.showMeridian&&(t=0===t||12===t?12:t%12),a.hours="h"===b?t:e(t),a.validHours=!0;var n=c.getMinutes();a.minutes="m"===b?n:e(n),a.validMinutes=!0,a.meridian=a.showMeridian?12>c.getHours()?u[0]:u[1]:"",b=!1}function s(e){var t=new Date(c.getTime()+6e4*e);c.setHours(t.getHours()),c.setMinutes(t.getMinutes()),a.model=new Date(c)}var c=new Date,u=n.meridians,p=n.hourStep;o.hourStep&&a.$parent.$watch(t(o.hourStep),function(e){p=parseInt(e,10)});var d=n.minuteStep;o.minuteStep&&a.$parent.$watch(t(o.minuteStep),function(e){d=parseInt(e,10)}),a.showMeridian=n.showMeridian,o.showMeridian&&a.$parent.$watch(t(o.showMeridian),function(e){if(a.showMeridian=!!e,a.model)l();else{var t=new Date(c),n=r();angular.isDefined(n)&&t.setHours(n),a.model=new Date(t)}});var f=i.find("input"),m=f.eq(0),g=f.eq(1),h=angular.isDefined(o.mousewheel)?a.$eval(o.mousewheel):n.mousewheel;if(h){var v=function(e){e.originalEvent&&(e=e.originalEvent);var t=e.wheelDelta?e.wheelDelta:-e.deltaY;return e.detail||t>0};m.bind("mousewheel wheel",function(e){a.$apply(v(e)?a.incrementHours():a.decrementHours()),e.preventDefault()}),g.bind("mousewheel wheel",function(e){a.$apply(v(e)?a.incrementMinutes():a.decrementMinutes()),e.preventDefault()})}var b=!1;a.readonlyInput=angular.isDefined(o.readonlyInput)?a.$eval(o.readonlyInput):n.readonlyInput,a.readonlyInput?(a.updateHours=angular.noop,a.updateMinutes=angular.noop):(a.updateHours=function(){var e=r();angular.isDefined(e)?(b="h",null===a.model&&(a.model=new Date(c)),a.model.setHours(e)):(a.model=null,a.validHours=!1)},m.bind("blur",function(){a.validHours&&10>a.hours&&a.$apply(function(){a.hours=e(a.hours)})}),a.updateMinutes=function(){var e=parseInt(a.minutes,10);e>=0&&60>e?(b="m",null===a.model&&(a.model=new Date(c)),a.model.setMinutes(e)):(a.model=null,a.validMinutes=!1)},g.bind("blur",function(){a.validMinutes&&10>a.minutes&&a.$apply(function(){a.minutes=e(a.minutes)})})),a.$watch(function(){return+a.model},function(e){!isNaN(e)&&e>0&&(c=new Date(e),l())}),a.incrementHours=function(){s(60*p)},a.decrementHours=function(){s(60*-p)},a.incrementMinutes=function(){s(d)},a.decrementMinutes=function(){s(-d)},a.toggleMeridian=function(){s(720*(12>c.getHours()?1:-1))}}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("typeaheadParser",["$parse",function(e){var t=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(n){var a=n.match(t);if(!a)throw Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+n+"'.");return{itemName:a[3],source:e(a[4]),viewMapper:e(a[2]||a[1]),modelMapper:e(a[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(e,t,n,a,i,o,r){var l=[9,13,27,38,40];return{require:"ngModel",link:function(s,c,u,p){var d=s.$eval(u.typeaheadMinLength)||1,f=s.$eval(u.typeaheadWaitMs)||0,m=s.$eval(u.typeaheadEditable)!==!1,g=t(u.typeaheadLoading).assign||angular.noop,h=t(u.typeaheadOnSelect),v=u.typeaheadInputFormatter?t(u.typeaheadInputFormatter):void 0,b=t(u.ngModel).assign,$=r.parse(u.typeahead),y=angular.element("<typeahead-popup></typeahead-popup>");y.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(u.typeaheadTemplateUrl)&&y.attr("template-url",u.typeaheadTemplateUrl);var w=s.$new();s.$on("$destroy",function(){w.$destroy()});var k=function(){w.matches=[],w.activeIdx=-1},D=function(e){var t={$viewValue:e};g(s,!0),n.when($.source(w,t)).then(function(n){if(e===p.$viewValue){if(n.length>0){w.activeIdx=0,w.matches.length=0;for(var a=0;n.length>a;a++)t[$.itemName]=n[a],w.matches.push({label:$.viewMapper(w,t),model:n[a]});w.query=e,w.position=o.position(c),w.position.top=w.position.top+c.prop("offsetHeight")}else k();g(s,!1)}},function(){k(),g(s,!1)})};k(),w.query=void 0;var x;p.$parsers.push(function(e){return k(),e&&e.length>=d&&(f>0?(x&&a.cancel(x),x=a(function(){D(e)},f)):D(e)),m?e:void 0}),p.$formatters.push(function(e){var t,n,a={};return v?(a.$model=e,v(s,a)):(a[$.itemName]=e,t=$.viewMapper(s,a),n=$.viewMapper(s,{}),t!==n?t:e)}),w.select=function(e){var t,n,a={};a[$.itemName]=n=w.matches[e].model,t=$.modelMapper(s,a),b(s,t),h(s,{$item:n,$model:t,$label:$.viewMapper(s,a)}),k(),c[0].focus()},c.bind("keydown",function(e){0!==w.matches.length&&-1!==l.indexOf(e.which)&&(e.preventDefault(),40===e.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===e.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===e.which||9===e.which?w.$apply(function(){w.select(w.activeIdx)}):27===e.which&&(e.stopPropagation(),k(),w.$digest()))}),i.bind("click",function(){k(),w.$digest()}),c.after(e(y)(w))}}}]).directive("typeaheadPopup",function(){return{restrict:"E",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(e,t,n){e.templateUrl=n.templateUrl,e.isOpen=function(){return e.matches.length>0},e.isActive=function(t){return e.active==t},e.selectActive=function(t){e.active=t},e.selectMatch=function(t){e.select({activeIdx:t})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(e,t,n,a){return{restrict:"E",scope:{index:"=",match:"=",query:"="},link:function(i,o,r){var l=a(r.templateUrl)(i.$parent)||"template/typeahead/typeahead-match.html";e.get(l,{cache:t}).success(function(e){o.replaceWith(n(e.trim())(i))})}}}]).filter("typeaheadHighlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,n){return n?t.replace(RegExp(e(n),"gi"),"<strong>$&</strong>"):n}});
(function() {
  window.app = angular.module('dailybandwidth', ['ngRoute', 'firebase', 'ui.bootstrap']).value('firebaseURL', 'http://dailybandwidth.firebaseIO.com').service('weekService', function(firebaseURL) {
    return new app.WeekService(firebaseURL);
  }).service('alertService', function() {
    return new app.AlertService;
  }).config([
    '$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      return $interpolateProvider.endSymbol(']}');
    }
  ]).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/home.html',
      controller: 'app.HomeController',
      authRequired: true,
      pathTo: '/home'
    });
    $routeProvider.when('/login', {
      templateUrl: '/login.html',
      controller: 'app.LoginController',
      authRequired: false,
      pathTo: '/login'
    });
    return $routeProvider.when('/settings', {
      templateUrl: '/settings.html',
      controller: 'app.SettingsController',
      authRequired: true,
      pathTo: '/settings'
    });
  });

}).call(this);
(function() {
  app.AlertController = function($scope, alertService) {
    $scope.alerts = alertService.all;
    return $scope.closeAlert = function(index) {
      return $scope.alerts.splice(index, 1);
    };
  };

}).call(this);
(function() {
  app.BandwidthContainerController = function($scope) {
    $scope.$watch('day.hours', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        return $scope.saveBandwidths();
      }
    });
    return $scope.decrement = function() {
      if ($scope.day.hours >= 1) {
        return $scope.day.hours -= 1;
      }
    };
  };

}).call(this);
(function() {
  app.EditableBandwidthController = function($scope) {
    $scope.isEditEnabled = false;
    $scope.$watch('weekday.hours', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        return $scope.saveSettings();
      }
    });
    $scope.decrement = function() {
      if ($scope.weekday.hours >= 1) {
        return $scope.weekday.hours -= 1;
      }
    };
    return $scope.increment = function() {
      return $scope.weekday.hours += 1;
    };
  };

}).call(this);
(function() {
  app.EditableProjectController = function($scope) {
    if ($scope.project.newRecord) {
      $scope.inEditMode = true;
    } else {
      $scope.inEditMode = false;
    }
    $scope.commitmentScopes = ['week', 'month'];
    $scope.enableEdit = function() {
      return $scope.inEditMode = true;
    };
    $scope.save = function() {
      $scope.saveSettings();
      $scope.inEditMode = false;
      return $scope.project.newRecord = false;
    };
    $scope.cancel = function() {
      return $scope.inEditMode = false;
    };
    return $scope.remove = function() {
      $scope.settingsstore.projects.pop($scope.project);
      return $scope.saveSettings();
    };
  };

}).call(this);
(function() {
  app.EditableSharingController = function($scope) {
    return $scope.remove = function() {
      $scope.settings.sharesWith.pop($scope.share);
      return $scope.saveSettings();
    };
  };

}).call(this);
(function() {
  app.GithubLoginController = function($scope, angularFireAuth) {
    return $scope.initiateSignIn = function() {
      return angularFireAuth.login('github');
    };
  };

}).call(this);
(function() {
  app.HomeController = function($scope, weekService, alertService) {
    $scope.today = new XDate();
    $scope.nextSave = null;
    $scope.$watch('settings', function(settings) {
      if (settings) {
        weekService.setUser($scope.user);
        weekService.setSettings(settings);
        return $scope.week = weekService.thisWeek($scope);
      }
    });
    $scope.doneLoadingWeek = function() {
      return $scope.$apply();
    };
    $scope.loadPreviousWeek = function() {
      return $scope.week = weekService.getPrevious($scope.week, $scope);
    };
    $scope.loadThisWeek = function() {
      return $scope.week = weekService.thisWeek($scope);
    };
    $scope.loadNextWeek = function() {
      return $scope.week = weekService.getNext($scope.week, $scope);
    };
    $scope.saveBandwidths = function() {
      return $scope.week.save();
    };
    $scope.duplicatePreviousWeek = function() {
      var lastWeek, tempScope;
      tempScope = {
        doneLoadingWeek: function(week) {
          $scope.week.cloneProjects(week);
          return $scope.$apply();
        }
      };
      return lastWeek = weekService.getPrevious($scope.week, tempScope);
    };
    return $scope.clearWeek = function() {
      return $scope.week.reset($scope.settings.projects);
    };
  };

}).call(this);
(function() {
  app.LoginController = function($scope) {};

}).call(this);
(function() {
  app.LogoutController = function($scope, $route, $location, angularFireAuth, alertService) {
    return $scope.logout = function() {
      alertService.clear();
      return angularFireAuth.logout();
    };
  };

}).call(this);
(function() {
  app.MainController = function($scope, $route, angularFireAuth) {
    var url;
    url = 'https://dailybandwidth.firebaseIO.com';
    angularFireAuth.initialize(url, {
      scope: $scope,
      name: "user",
      path: "/login"
    });
    $scope.$on("angularFireAuth:login", function(evt, user) {
      return $scope.loadUserSettings();
    });
    $scope.loadUserSettings = function() {
      url = "https://dailybandwidth.firebaseIO.com/" + $scope.user.login + "/settings";
      $scope.settingsStore = new Firebase(url);
      return $scope.settingsStore.on('value', function(settings) {
        return setTimeout((function() {
          if (settings.val() === null) {
            $scope.settings = $scope.settingsDefaults;
          } else {
            $scope.settings = settings.val();
            $scope.$apply();
          }
          return $scope.settingsStore.off('value');
        }), 1);
      });
    };
    $scope.$on("angularFireAuth:logout", function(evt) {
      return window.location = '/project.html#/login';
    });
    $scope.$on("angularFireAuth:login", function(evt) {
      if (window.location.hash === '#/login') {
        return window.location = '/project.html#/home';
      }
    });
    return $scope.settingsDefaults = {
      defaultBandwidths: [
        {
          name: 'Monday',
          hours: 0
        }, {
          name: 'Tuesday',
          hours: 0
        }, {
          name: 'Wednesday',
          hours: 0
        }, {
          name: 'Thursday',
          hours: 0
        }, {
          name: 'Friday',
          hours: 0
        }, {
          name: 'Saturday',
          hours: 0
        }, {
          name: 'Sunday',
          hours: 0
        }
      ],
      projects: [],
      sharesWith: []
    };
  };

}).call(this);
(function() {
  app.SettingsController = function($scope, $timeout, alertService) {
    $scope.nextSave = null;
    $scope.saveSettings = function() {
      $scope.nextSave = new XDate();
      $scope.nextSave.addSeconds(1);
      return $scope.checkSave();
    };
    $scope.checkSave = function() {
      var now;
      if ($scope.nextSave) {
        now = new XDate();
        if (now > $scope.nextSave) {
          $scope.settingsStore.set(angular.fromJson(angular.toJson($scope.settings)), function(error) {
            if (error) {
              return alertService.addError('Error.  we could not make your change.  Please try again.');
            } else {
              return alertService.addSuccess('Success,  we updated your settings.');
            }
          });
          return $scope.nextSave = null;
        } else {
          return setTimeout((function() {
            return $scope.checkSave();
          }), 500);
        }
      }
    };
    $scope.resetDefaults = function() {
      $scope.settings = $scope.settingsDefaults;
      return $scope.saveSettings();
    };
    $scope.addNewProject = function() {
      if (!$scope.settings.projects) {
        $scope.settings.projects = [];
      }
      return $scope.settings.projects.push({
        name: null,
        commitment: null,
        commitment_scope: null,
        newRecord: true
      });
    };
    return $scope.addShare = function() {
      if (!$scope.settings.sharesWith) {
        $scope.settings.sharesWith = [];
      }
      $scope.settings.sharesWith.push({
        email: $scope.newEmail
      });
      return $scope.saveSettings();
    };
  };

}).call(this);
(function() {
  app.TopNavController = function($scope) {
    $scope.$on("angularFireAuth:login", function(evt, user) {
      $scope.shouldShowHome = true;
      $scope.shouldShowLogout = true;
      return $scope.shouldShowSettings = true;
    });
    return $scope.$on("angularFireAuth:logout", function(evt, user) {
      $scope.shouldShowHome = false;
      $scope.shouldShowLogout = false;
      return $scope.shouldShowSettings = false;
    });
  };

}).call(this);
(function() {
  app.AlertService = (function() {
    function AlertService() {
      this.all = [];
    }

    AlertService.prototype.addError = function(msg, expires) {
      if (expires == null) {
        expires = null;
      }
      this.all.splice(0, 1);
      return this.all.push({
        type: 'error',
        msg: msg
      });
    };

    AlertService.prototype.addSuccess = function(msg, expires) {
      var params;
      if (expires == null) {
        expires = 500;
      }
      params = {
        type: 'success',
        msg: msg
      };
      this.all.splice(0, 1);
      return this.all.push(params);
    };

    AlertService.prototype.addNotice = function(msg, expires) {
      if (expires == null) {
        expires = 500;
      }
      this.all.splice(0, 1);
      return this.all.push({
        msg: msg
      });
    };

    AlertService.prototype.clear = function() {
      return this.all = [];
    };

    return AlertService;

  })();

}).call(this);
(function() {
  var FirebaseUrl, Week, Year;

  app.WeekService = (function() {
    function WeekService(firebaseURL) {
      this.firebaseURL = new FirebaseUrl(firebaseURL);
      this.currentDate = new XDate();
      this.years = {};
      this.years[this.currentDate.getFullYear()] = new Year(this.currentDate.getFullYear(), this.firebaseURL);
    }

    WeekService.prototype.setUser = function(user) {
      return FirebaseUrl.user = user.username;
    };

    WeekService.prototype.setSettings = function(settings) {
      return this.settings = settings;
    };

    WeekService.prototype.thisWeek = function($scope) {
      var projects, week;
      week = this.years[this.currentDate.getFullYear()].weeks[this.currentDate.getWeek() - 1];
      projects = this.settings ? this.settings.projects : null;
      week.loadFromStore(projects, $scope);
      return week;
    };

    WeekService.prototype.getNext = function(week, $scope) {
      var currentWeek, projects, startDay, _base, _name;
      startDay = week.startDay.clone().addWeeks(1);
      (_base = this.years)[_name = startDay.getFullYear()] || (_base[_name] = new Year(startDay.getFullYear(), firebaseURL));
      currentWeek = startDay.getWeek();
      if (currentWeek === 52) {
        week = this.years[startDay.getFullYear()].weeks[0];
      } else {
        week = this.years[startDay.getFullYear()].weeks[currentWeek - 1];
      }
      projects = this.settings ? this.settings.projects : null;
      week.loadFromStore(projects, $scope);
      return week;
    };

    WeekService.prototype.getPrevious = function(week, $scope) {
      var currentWeek, projects, startDay, _base, _name;
      startDay = week.startDay.clone().addWeeks(-1);
      (_base = this.years)[_name = startDay.getFullYear()] || (_base[_name] = new Year(startDay.getFullYear(), firebaseURL));
      currentWeek = startDay.getWeek();
      if (currentWeek === 1) {
        week = this.years[startDay.getFullYear()].weeks[52];
      } else {
        week = this.years[startDay.getFullYear()].weeks[currentWeek - 1];
      }
      projects = this.settings ? this.settings.projects : null;
      week.loadFromStore(projects, $scope);
      return week;
    };

    return WeekService;

  })();

  FirebaseUrl = (function() {
    FirebaseUrl.user = null;

    function FirebaseUrl(baseUrlString) {
      this.baseUrlString = baseUrlString;
    }

    FirebaseUrl.prototype.setYear = function(year) {
      return this.year = year;
    };

    FirebaseUrl.prototype.setWeek = function(week) {
      return this.week = week;
    };

    FirebaseUrl.prototype.cloneForWeek = function(week) {
      var newUrl;
      newUrl = new FirebaseUrl(this.baseUrlString);
      newUrl.setYear(this.year);
      newUrl.setWeek(week);
      return newUrl;
    };

    FirebaseUrl.prototype.url = function() {
      return "" + this.baseUrlString + "/" + FirebaseUrl.user + "/weeks/" + this.year + "/" + this.week;
    };

    return FirebaseUrl;

  })();

  Year = (function() {
    function Year(year, firebaseURL) {
      var weekNumber, _i;
      this.firebaseURL = firebaseURL;
      this.firebaseURL.setYear(year);
      this.year = year;
      this.weeks = [];
      for (weekNumber = _i = 0; _i <= 51; weekNumber = ++_i) {
        this.weeks.push(new Week(firebaseURL.cloneForWeek(weekNumber)));
      }
    }

    Year.prototype.addWeekFor = function(weekNumber) {
      var url;
      url = new firebaseURL();
      return url.setYear;
    };

    return Year;

  })();

  Week = (function() {
    function Week(firebaseURL) {
      var self;
      self = this;
      this.firebaseURL = firebaseURL;
      this.startDay = new XDate();
      this.startDay.setWeek(this.firebaseURL.week + 1, this.firebaseURL.year);
      this.projects = [];
    }

    Week.prototype.loadFromStore = function(defaultProjects, $scope) {
      var self;
      self = this;
      this.store = new Firebase(this.firebaseURL.url());
      return this.store.on('value', function(dataset) {
        if (dataset.val()) {
          self.load(dataset);
        } else if (!this.projects) {
          self.loadDefaults(defaultProjects);
        }
        return setTimeout((function() {
          return $scope.doneLoadingWeek(self);
        }), 1);
      });
    };

    Week.prototype.addProject = function(project) {
      var bandwidths;
      if (project.days) {
        bandwidths = this.clone(project.days);
      } else {
        bandwidths = [
          {
            name: 'Monday',
            hours: 0
          }, {
            name: 'Tuesday',
            hours: 0
          }, {
            name: 'Wednesday',
            hours: 0
          }, {
            name: 'Thursday',
            hours: 0
          }, {
            name: 'Friday',
            hours: 0
          }, {
            name: 'Saturday',
            hours: 0
          }, {
            name: 'Sunday',
            hours: 0
          }
        ];
      }
      return this.projects.push({
        name: project.name,
        days: bandwidths
      });
    };

    Week.prototype.cloneProjects = function(week) {
      var project, _i, _len, _ref, _results;
      this.projects = [];
      _ref = week.projects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        project = _ref[_i];
        _results.push(this.addProject(project));
      }
      return _results;
    };

    Week.prototype.save = function() {
      return this.store.set(this.clone(this.projects));
    };

    Week.prototype.load = function(dataset) {
      return this.projects = this.clone(dataset.val());
    };

    Week.prototype.loadDefaults = function(defaultProjects) {
      var project, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = defaultProjects.length; _i < _len; _i++) {
        project = defaultProjects[_i];
        _results.push(this.addProject(this.clone(project)));
      }
      return _results;
    };

    Week.prototype.reset = function(defaultProjects) {
      this.projects = [];
      this.loadDefaults(defaultProjects);
      return this.save();
    };

    Week.prototype.clone = function(obj) {
      return angular.fromJson(angular.toJson(obj));
    };

    return Week;

  })();

}).call(this);






