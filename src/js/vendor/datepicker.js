var Datepicker=function(){"use strict";function e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t(e){return e[e.length-1]}function i(e,...t){return t.forEach(t=>{e.includes(t)||e.push(t)}),e}function s(e,t){return e?e.split(t):[]}function a(e,t,i){return(void 0===t||e>=t)&&(void 0===i||e<=i)}function n(e,t,i){return e<t?t:e>i?i:e}function r(e,t,i={},s=0,a=""){a+=`<${Object.keys(i).reduce((e,t)=>{let a=i[t];return"function"==typeof a&&(a=a(s)),`${e} ${t}="${a}"`},e)}></${e}>`;const n=s+1;return n<t?r(e,t,i,n,a):a}function d(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}function o(e){return new Date(e).setHours(0,0,0,0)}function c(){return(new Date).setHours(0,0,0,0)}function l(...e){switch(e.length){case 0:return c();case 1:return o(e[0])}const t=new Date(0);return t.setFullYear(...e),t.setHours(0,0,0,0)}function h(e,t){const i=new Date(e);return i.setDate(i.getDate()+t)}function u(e,t){const i=new Date(e),s=i.getMonth()+t;let a=s%12;a<0&&(a+=12);const n=i.setMonth(s);return i.getMonth()!==a?i.setDate(0):n}function f(e,t){const i=new Date(e),s=i.getMonth(),a=i.setFullYear(i.getFullYear()+t);return 1===s&&2===i.getMonth()?i.setDate(0):a}function p(e,t){return(e-t+7)%7}function m(e,t,i=0){const s=new Date(e).getDay();return h(e,p(t,i)-p(s,i))}function g(e,t){const i=new Date(e).getFullYear();return Math.floor(i/t)*t}const w=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,y=/[\s!-\/:-@[-`{-~年月日]+/;let k={};const D={y:(e,t)=>new Date(e).setFullYear(parseInt(t,10)),m(e,t,i){const s=new Date(e);let a=parseInt(t,10)-1;if(isNaN(a)){if(!t)return NaN;const e=t.toLowerCase(),s=t=>t.toLowerCase().startsWith(e);if((a=i.monthsShort.findIndex(s))<0&&(a=i.months.findIndex(s)),a<0)return NaN}return s.setMonth(a),s.getMonth()!==function e(t){return t>-1?t%12:e(t+12)}(a)?s.setDate(0):s.getTime()},d:(e,t)=>new Date(e).setDate(parseInt(t,10))},v={d:e=>e.getDate(),dd:e=>b(e.getDate(),2),D:(e,t)=>t.daysShort[e.getDay()],DD:(e,t)=>t.days[e.getDay()],m:e=>e.getMonth()+1,mm:e=>b(e.getMonth()+1,2),M:(e,t)=>t.monthsShort[e.getMonth()],MM:(e,t)=>t.months[e.getMonth()],y:e=>e.getFullYear(),yy:e=>b(e.getFullYear(),2).slice(-2),yyyy:e=>b(e.getFullYear(),4)};function b(e,t){return e.toString().padStart(t,"0")}function x(e){if("string"!=typeof e)throw new Error("Invalid date format.");if(e in k)return k[e];const i=e.split(w),s=e.match(new RegExp(w,"g"));if(0===i.length||!s)throw new Error("Invalid date format.");const a=s.map(e=>v[e]),n=Object.keys(D).reduce((e,t)=>{return s.find(e=>"D"!==e[0]&&e[0].toLowerCase()===t)&&e.push(t),e},[]);return k[e]={parser(e,t){const i=e.split(y).reduce((e,t,i)=>{if(t.length>0&&s[i]){const a=s[i][0];"M"===a?e.m=t:"D"!==a&&(e[a]=t)}return e},{});return n.reduce((e,s)=>{const a=D[s](e,i[s],t);return isNaN(a)?e:a},c())},formatter:(e,s)=>a.reduce((t,a,n)=>t+`${i[n]}${a(e,s)}`,"")+t(i)}}function M(e,t,i){if(e instanceof Date||"number"==typeof e){const t=o(e);return isNaN(t)?void 0:t}if(e){if("today"===e)return c();if(t&&t.toValue){const s=t.toValue(e,t,i);return isNaN(s)?void 0:o(s)}return x(t).parser(e,i)}}function S(e,t,i){if(isNaN(e)||!e&&0!==e)return"";const s="number"==typeof e?new Date(e):e;return t.toDisplay?t.toDisplay(s,t,i):x(t).formatter(s,i)}const C=new WeakMap,{addEventListener:O,removeEventListener:E}=EventTarget.prototype;function F(e,t){let i=C.get(e);i||(i=[],C.set(e,i)),t.forEach(e=>{O.call(...e),i.push(e)})}if(!Event.prototype.composedPath){const e=(t,i=[])=>{let s;return i.push(t),t.parentNode?s=t.parentNode:t.host?s=t.host:t.defaultView&&(s=t.defaultView),s?e(s,i):i};Event.prototype.composedPath=function(){return e(this.target)}}function V(e,t){const i="function"==typeof t?t:e=>e.matches(t);return function e(t,i,s,a=0){const n=t[a];return i(n)?n:n!==s&&n.parentElement?e(t,i,s,a+1):void 0}(e.composedPath(),i,e.currentTarget)}const N={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Close",titleFormat:"MM y"}},L={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},B=document.createRange();function A(e){return B.createContextualFragment(e)}function Y(e){"none"!==e.style.display&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function W(e){"none"===e.style.display&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function K(e){e.firstChild&&(e.removeChild(e.firstChild),K(e))}const{language:T,format:H,weekStart:$}=L;function j(e,t){return e.length<6&&t>=0&&t<7?i(e,t):e}function _(e){return(e+6)%7}function I(e,t,i,s){const a=M(e,t,i);return void 0!==a?a:s}function P(e,t,i=3){const s=parseInt(e,10);return s>=0&&s<=i?s:t}function q(t,s){const a=Object.assign({},t),n={},r=s.constructor.locales;let{format:d,language:o,locale:c,maxDate:h,maxView:u,minDate:f,pickLevel:p,startView:m,weekStart:g}=s.config||{};if(a.language){let e;if(a.language!==o&&(r[a.language]?e=a.language:void 0===r[e=a.language.split("-")[0]]&&(e=!1)),delete a.language,e){o=n.language=e;const t=c||r[T];c=Object.assign({format:H,weekStart:$},r[T]),o!==T&&Object.assign(c,r[o]),n.locale=c,d===t.format&&(d=n.format=c.format),g===t.weekStart&&(g=n.weekStart=c.weekStart,n.weekEnd=_(c.weekStart))}}if(a.format){const e="function"==typeof a.format.toDisplay,t="function"==typeof a.format.toValue,i=w.test(a.format);(e&&t||i)&&(d=n.format=a.format),delete a.format}let y=f,k=h;if(void 0!==a.minDate&&(y=null===a.minDate?l(0,0,1):I(a.minDate,d,c,y),delete a.minDate),void 0!==a.maxDate&&(k=null===a.maxDate?void 0:I(a.maxDate,d,c,k),delete a.maxDate),k<y?(f=n.minDate=k,h=n.maxDate=y):(f!==y&&(f=n.minDate=y),h!==k&&(h=n.maxDate=k)),a.datesDisabled&&(n.datesDisabled=a.datesDisabled.reduce((e,t)=>{const s=M(t,d,c);return void 0!==s?i(e,s):e},[]),delete a.datesDisabled),void 0!==a.defaultViewDate){const e=M(a.defaultViewDate,d,c);void 0!==e&&(n.defaultViewDate=e),delete a.defaultViewDate}if(void 0!==a.weekStart){const e=Number(a.weekStart)%7;isNaN(e)||(g=n.weekStart=e,n.weekEnd=_(e)),delete a.weekStart}if(a.daysOfWeekDisabled&&(n.daysOfWeekDisabled=a.daysOfWeekDisabled.reduce(j,[]),delete a.daysOfWeekDisabled),a.daysOfWeekHighlighted&&(n.daysOfWeekHighlighted=a.daysOfWeekHighlighted.reduce(j,[]),delete a.daysOfWeekHighlighted),void 0!==a.maxNumberOfDates){const e=parseInt(a.maxNumberOfDates,10);e>=0&&(n.maxNumberOfDates=e,n.multidate=1!==e),delete a.maxNumberOfDates}a.dateDelimiter&&(n.dateDelimiter=String(a.dateDelimiter),delete a.dateDelimiter);let D=p;void 0!==a.pickLevel&&(D=P(a.pickLevel,2),delete a.pickLevel),D!==p&&(p=n.pickLevel=D);let v=u;void 0!==a.maxView&&(v=P(a.maxView,u),delete a.maxView),(v=p>v?p:v)!==u&&(u=n.maxView=v);let b=m;if(void 0!==a.startView&&(b=P(a.startView,b),delete a.startView),b<p?b=p:b>u&&(b=u),b!==m&&(n.startView=b),a.prevArrow){const e=A(a.prevArrow);e.childNodes.length>0&&(n.prevArrow=e.childNodes),delete a.prevArrow}if(a.nextArrow){const e=A(a.nextArrow);e.childNodes.length>0&&(n.nextArrow=e.childNodes),delete a.nextArrow}if(void 0!==a.disableTouchKeyboard&&(n.disableTouchKeyboard="ontouchstart"in document&&!!a.disableTouchKeyboard,delete a.disableTouchKeyboard),a.orientation){const e=a.orientation.toLowerCase().split(/\s+/g);n.orientation={x:e.find(e=>"left"===e||"right"===e)||"auto",y:e.find(e=>"top"===e||"bottom"===e)||"auto"},delete a.orientation}if(void 0!==a.todayBtnMode){switch(a.todayBtnMode){case 0:case 1:n.todayBtnMode=a.todayBtnMode}delete a.todayBtnMode}return Object.keys(a).forEach(t=>{void 0!==a[t]&&e(L,t)&&(n[t]=a[t])}),n}const J=d('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'),R=d(`<div class="days">\n  <div class="days-of-week">${r("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${r("span",42)}</div>\n</div>`),U=d(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${r("span",6,{class:"week"})}</div>\n</div>`);class z{constructor(e,t){Object.assign(this,t,{picker:e,element:A('<div class="datepicker-view"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}init(e){void 0!==e.pickLevel&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}performBeforeHook(e,t,s){let a=this.beforeShow(new Date(s));switch(typeof a){case"boolean":a={enabled:a};break;case"string":a={classes:a}}if(a){if(!1===a.enabled&&(e.classList.add("disabled"),i(this.disabled,t)),a.classes){const s=a.classes.split(/\s+/);e.classList.add(...s),s.includes("disabled")&&i(this.disabled,t)}a.content&&function(e,t){K(e),t instanceof DocumentFragment?e.appendChild(t):"string"==typeof t?e.appendChild(A(t)):"function"==typeof t.forEach&&t.forEach(t=>{e.appendChild(t)})}(e,a.content)}}}class X extends z{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const e=A(R).firstChild;this.dow=e.firstChild,this.grid=e.lastChild,this.element.appendChild(e)}super.init(e)}setOptions(t){let i;if(e(t,"minDate")&&(this.minDate=t.minDate),e(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,i=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,i=!0),t.locale){const e=this.locale=t.locale;this.dayNames=e.daysMin,this.switchLabelFormat=e.titleFormat,i=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const e=A(U).firstChild;this.calendarWeeks={element:e,dow:e.firstChild,weeks:e.lastChild},this.element.insertBefore(e,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(W(this.dow),this.calendarWeeks&&W(this.calendarWeeks.dow)):(Y(this.dow),this.calendarWeeks&&Y(this.calendarWeeks.dow))),i&&Array.from(this.dow.children).forEach((e,t)=>{const i=(this.weekStart+t)%7;e.textContent=this.dayNames[i],e.className=this.daysOfWeekDisabled.includes(i)?"dow disabled":"dow"})}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),s=l(t,i,1),a=m(s,this.weekStart,this.weekStart);this.first=s,this.last=l(t,i+1,0),this.start=a,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){this.today=this.todayHighlight?c():void 0,this.disabled=[...this.datesDisabled];const e=S(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(e),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const e=m(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach((t,i)=>{t.textContent=function(e){const t=m(e,4,1),i=m(new Date(t).setMonth(0,4),4,1);return Math.round((t-i)/6048e5)+1}(function(e,t){return h(e,7*t)}(e,i))})}Array.from(this.grid.children).forEach((e,t)=>{const s=e.classList,a=h(this.start,t),n=new Date(a),r=n.getDay();if(e.className=`datepicker-cell ${this.cellClass}`,e.dataset.date=a,e.textContent=n.getDate(),a<this.first?s.add("prev"):a>this.last&&s.add("next"),this.today===a&&s.add("today"),(a<this.minDate||a>this.maxDate||this.disabled.includes(a))&&s.add("disabled"),this.daysOfWeekDisabled.includes(r)&&(s.add("disabled"),i(this.disabled,a)),this.daysOfWeekHighlighted.includes(r)&&s.add("highlighted"),this.range){const[e,t]=this.range;a>e&&a<t&&s.add("range"),a===e&&s.add("range-start"),a===t&&s.add("range-end")}this.selected.includes(a)&&s.add("selected"),a===this.focused&&s.add("focused"),this.beforeShow&&this.performBeforeHook(e,a,a)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach(i=>{const s=Number(i.dataset.date),a=i.classList;s>e&&s<t&&a.add("range"),s===e&&a.add("range-start"),s===t&&a.add("range-end"),this.selected.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function G(e,t){if(!e||!e[0]||!e[1])return;const[[i,s],[a,n]]=e;return i>t||a<t?void 0:[i===t?s:-1,a===t?n:12]}class Q extends z{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(A(r("span",12,{"data-month":e=>e})))),super.init(e)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),e(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(e(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=l(this.maxYear,this.maxMonth+1,0)}void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((e,t)=>{const s=new Date(t),a=s.getFullYear(),n=s.getMonth();return void 0===e[a]?e[a]=[n]:i(e[a],n),e},{}),t&&t.dates&&(this.range=t.dates.map(e=>{const t=new Date(e);return isNaN(t)?void 0:[t.getFullYear(),t.getMonth()]}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,s=this.year===this.maxYear,a=G(this.range,this.year);Array.from(this.grid.children).forEach((n,r)=>{const d=n.classList,o=l(this.year,r,1);if(n.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(n.dataset.date=o),n.textContent=this.monthNames[r],(t||i&&r<this.minMonth||s&&r>this.maxMonth)&&d.add("disabled"),a){const[e,t]=a;r>e&&r<t&&d.add("range"),r===e&&d.add("range-start"),r===t&&d.add("range-end")}e.includes(r)&&d.add("selected"),r===this.focused&&d.add("focused"),this.beforeShow&&this.performBeforeHook(n,r,o)})}refresh(){const e=this.selected[this.year]||[],[t,i]=G(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach((s,a)=>{const n=s.classList;a>t&&a<i&&n.add("range"),a===t&&n.add("range-start"),a===i&&n.add("range-end"),e.includes(a)&&n.add("selected"),a===this.focused&&n.add("focused")})}refreshFocus(){this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[this.focused].classList.add("focused")}}class Z extends z{constructor(e,t){super(e,t)}init(e,t=!0){var i;t&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${i=this.cellClass,[...i].reduce((e,t,i)=>e+=i?t:t.toUpperCase(),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(A(r("span",12)))),super.init(e)}setOptions(t){if(e(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=g(t.minDate,this.step),this.minDate=l(this.minYear,0,1))),e(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=g(t.maxDate,this.step),this.maxDate=l(this.maxYear,11,31))),void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=g(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=g(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((e,t)=>i(e,g(t,this.step)),[]),t&&t.dates&&(this.range=t.dates.map(e=>{if(void 0!==e)return g(e,this.step)}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach((e,t)=>{const i=e.classList,s=this.start+t*this.step,a=l(s,0,1);if(e.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(e.dataset.date=a),e.textContent=e.dataset.year=s,0===t?i.add("prev"):11===t&&i.add("next"),(s<this.minYear||s>this.maxYear)&&i.add("disabled"),this.range){const[e,t]=this.range;s>e&&s<t&&i.add("range"),s===e&&i.add("range-start"),s===t&&i.add("range-end")}this.selected.includes(s)&&i.add("selected"),s===this.focused&&i.add("focused"),this.beforeShow&&this.performBeforeHook(e,s,a)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach(i=>{const s=Number(i.textContent),a=i.classList;s>e&&s<t&&a.add("range"),s===e&&a.add("range-start"),s===t&&a.add("range-end"),this.selected.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function ee(e,t){const i={date:e.getDate(),viewDate:new Date(e.picker.viewDate),viewId:e.picker.currentView.id,datepicker:e};e.element.dispatchEvent(new CustomEvent(t,{detail:i}))}function te(e,t){const{minDate:i,maxDate:s}=e.config,{currentView:a,viewDate:r}=e.picker;let d;switch(a.id){case 0:d=u(r,t);break;case 1:d=f(r,t);break;default:d=f(r,t*a.navStep)}d=n(d,i,s),e.picker.changeFocus(d).render()}function ie(e){const t=e.picker.currentView.id;t!==e.config.maxView&&e.picker.changeView(t+1).render()}function se(e){e.config.updateOnBlur?e.update({autohide:!0}):(e.refresh("input"),e.hide())}function ae(e,t){const i=e.picker,s=new Date(i.viewDate),a=i.currentView.id,n=1===a?u(s,t-s.getMonth()):f(s,t-s.getFullYear());i.changeFocus(n).changeView(a-1).render()}function ne(e){const t=e.picker,i=c();if(1===e.config.todayBtnMode){if(e.config.autohide)return void e.setDate(i);e.setDate(i,{render:!1}),t.update()}t.viewDate!==i&&t.changeFocus(i),t.changeView(0).render()}function re(e){e.hide()}function de(e){ie(e)}function oe(e){te(e,-1)}function ce(e){te(e,1)}function le(e,t){const i=V(t,".datepicker-cell");if(!i||i.classList.contains("disabled"))return;const{id:s,isMinView:a}=e.picker.currentView;a?e.setDate(Number(i.dataset.date)):ae(e,1===s?Number(i.dataset.month):Number(i.dataset.year))}function he(e){e.inline||e.config.disableTouchKeyboard||e.inputField.focus()}function ue(t,i){if(void 0!==i.title&&(i.title?(t.controls.title.textContent=i.title,W(t.controls.title)):(t.controls.title.textContent="",Y(t.controls.title))),i.prevArrow){const e=t.controls.prevBtn;K(e),i.prevArrow.forEach(t=>{e.appendChild(t.cloneNode(!0))})}if(i.nextArrow){const e=t.controls.nextBtn;K(e),i.nextArrow.forEach(t=>{e.appendChild(t.cloneNode(!0))})}if(i.locale&&(t.controls.todayBtn.textContent=i.locale.today,t.controls.clearBtn.textContent=i.locale.clear),void 0!==i.todayBtn&&(i.todayBtn?W(t.controls.todayBtn):Y(t.controls.todayBtn)),e(i,"minDate")||e(i,"maxDate")){const{minDate:e,maxDate:i}=t.datepicker.config;t.controls.todayBtn.disabled=!a(c(),e,i)}void 0!==i.clearBtn&&(i.clearBtn?W(t.controls.clearBtn):Y(t.controls.clearBtn))}function fe(e){const{dates:i,config:s}=e;return n(i.length>0?t(i):s.defaultViewDate,s.minDate,s.maxDate)}function pe(e,t){const i=new Date(e.viewDate),s=new Date(t),{id:a,year:n,first:r,last:d}=e.currentView,o=s.getFullYear();switch(e.viewDate=t,o!==i.getFullYear()&&ee(e.datepicker,"changeYear"),s.getMonth()!==i.getMonth()&&ee(e.datepicker,"changeMonth"),a){case 0:return t<r||t>d;case 1:return o!==n;default:return o<r||o>d}}function me(e){return window.getComputedStyle(e).direction}class ge{constructor(e){this.datepicker=e;const t=J.replace(/%buttonClass%/g,e.config.buttonClass),i=this.element=A(t).firstChild,[s,a,n]=i.firstChild.children,r=s.firstElementChild,[d,o,c]=s.lastElementChild.children,[l,h]=n.firstChild.children,u={title:r,prevBtn:d,viewSwitch:o,nextBtn:c,todayBtn:l,clearBtn:h};this.main=a,this.controls=u;const f=e.inline?"inline":"dropdown";i.classList.add(`datepicker-${f}`),ue(this,e.config),this.viewDate=fe(e),F(e,[[i,"click",he.bind(null,e),{capture:!0}],[a,"click",le.bind(null,e)],[u.viewSwitch,"click",de.bind(null,e)],[u.prevBtn,"click",oe.bind(null,e)],[u.nextBtn,"click",ce.bind(null,e)],[u.todayBtn,"click",ne.bind(null,e)],[u.clearBtn,"click",re.bind(null,e)]]),this.views=[new X(this),new Q(this),new Z(this,{id:2,name:"years",cellClass:"year",step:1}),new Z(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.config.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.config.container.appendChild(this.element)}setOptions(e){ue(this,e),this.views.forEach(t=>{t.init(e,!1)}),this.currentView.render()}detach(){this.datepicker.config.container.removeChild(this.element)}show(){if(this.active)return;this.element.classList.add("active"),this.active=!0;const e=this.datepicker;if(!e.inline){const t=me(e.inputField);t!==me(e.config.container)?this.element.dir=t:this.element.dir&&this.element.removeAttribute("dir"),this.place(),e.config.disableTouchKeyboard&&e.inputField.blur()}this.datepicker.element.classList.add("is-open"),ee(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,this.datepicker.element.classList.remove("is-open"),ee(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element,{config:i,inputField:s}=this.datepicker,a=i.container,{width:n,height:r}=this.element.getBoundingClientRect(),{left:d,top:o,width:c}=a.getBoundingClientRect(),{left:l,top:h,width:u,height:f}=s.getBoundingClientRect();let p,m,g,{x:w,y:y}=i.orientation;a===document.body?(p=window.scrollY,m=l+window.scrollX,g=h+p):(m=l-d,g=h-o+(p=a.scrollTop)),"auto"===w&&(m<0?(w="left",m=10):w=m+n>c?"right":"rtl"===me(s)?"right":"left"),"right"===w&&(m-=n-u),"auto"===y&&(y=g-r<p?"bottom":"top"),"top"===y?g-=r:g+=f,e.remove("datepicker-orient-top","datepicker-orient-bottom","datepicker-orient-right","datepicker-orient-left"),e.add(`datepicker-orient-${y}`,`datepicker-orient-${w}`),t.top=g?`${g}px`:g,t.left=m?`${m}px`:m}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevBtnDisabled(e){this.controls.prevBtn.disabled=e}setNextBtnDisabled(e){this.controls.nextBtn.disabled=e}changeView(e){const t=this.currentView,i=this.views[e];return i.id!==t.id&&(this.currentView=i,this._renderMethod="render",ee(this.datepicker,"changeView"),this.main.replaceChild(i.element,t.element)),this}changeFocus(e){return this._renderMethod=pe(this,e)?"render":"refreshFocus",this.views.forEach(e=>{e.updateFocus()}),this}update(){const e=fe(this.datepicker);return this._renderMethod=pe(this,e)?"render":"refresh",this.views.forEach(e=>{e.updateFocus(),e.updateSelection()}),this}render(e=!0){const t=e&&this._renderMethod||"render";delete this._renderMethod,this.currentView[t]()}}function we(e,t,i,s){const n=e.picker,r=n.currentView,d=r.step||1;let o,c,l=n.viewDate;switch(r.id){case 0:l=s?h(l,7*i):t.ctrlKey||t.metaKey?f(l,i):h(l,i),o=h,c=(e=>r.disabled.includes(e));break;case 1:l=u(l,s?4*i:i),o=u,c=(e=>{const t=new Date(e),{year:i,disabled:s}=r;return t.getFullYear()===i&&s.includes(t.getMonth())});break;default:l=f(l,i*(s?4:1)*d),o=f,c=(e=>r.disabled.includes(g(e,d)))}void 0!==(l=function e(t,i,s,n,r,d){if(a(t,r,d))return n(t)?e(i(t,s),i,s,n,r,d):t}(l,o,i<0?-d:d,c,r.minDate,r.maxDate))&&n.changeFocus(l).render()}function ye(e,t){if("Tab"===t.key)return void se(e);const i=e.picker,{id:s,isMinView:a}=i.currentView;if(i.active)if(e.editMode)switch(t.key){case"Escape":i.hide();break;case"Enter":e.exitEditMode({update:!0,autohide:e.config.autohide});break;default:return}else switch(t.key){case"Escape":i.hide();break;case"ArrowLeft":if(t.ctrlKey||t.metaKey)te(e,-1);else{if(t.shiftKey)return void e.enterEditMode();we(e,t,-1,!1)}break;case"ArrowRight":if(t.ctrlKey||t.metaKey)te(e,1);else{if(t.shiftKey)return void e.enterEditMode();we(e,t,1,!1)}break;case"ArrowUp":if(t.ctrlKey||t.metaKey)ie(e);else{if(t.shiftKey)return void e.enterEditMode();we(e,t,-1,!0)}break;case"ArrowDown":if(t.shiftKey&&!t.ctrlKey&&!t.metaKey)return void e.enterEditMode();we(e,t,1,!0);break;case"Enter":a?e.setDate(i.viewDate):i.changeView(s-1).render();break;case"Backspace":case"Delete":return void e.enterEditMode();default:return void(1!==t.key.length||t.ctrlKey||t.metaKey||e.enterEditMode())}else switch(t.key){case"ArrowDown":case"Escape":i.show();break;case"Enter":e.update();break;default:return}t.preventDefault(),t.stopPropagation()}function ke(e){e.config.showOnFocus&&e.show()}function De(e,t){const i=t.target;(e.picker.active||e.config.showOnClick)&&(i._active=i===document.activeElement,i._clicking=setTimeout(()=>{delete i._active,delete i._clicking},2e3))}function ve(e,t){const i=t.target;i._clicking&&(clearTimeout(i._clicking),delete i._clicking,i._active&&e.enterEditMode(),delete i._active,e.config.showOnClick&&e.show())}function be(e,t){t.clipboardData.types.includes("text/plain")&&e.enterEditMode()}function xe(e,t){return e.map(e=>S(e,t.format,t.locale)).join(t.dateDelimiter)}function Me(e,t,i=!1){const{config:s,dates:n,rangepicker:r}=e;if(0===t.length)return i?[]:void 0;const d=r&&e===r.datepickers[1];let o=t.reduce((e,t)=>{let i=M(t,s.format,s.locale);if(void 0===i)return e;if(s.pickLevel>0){const e=new Date(i);i=1===s.pickLevel?d?e.setMonth(e.getMonth()+1,0):e.setDate(1):d?e.setFullYear(e.getFullYear()+1,0,0):e.setMonth(0,1)}return!a(i,s.minDate,s.maxDate)||e.includes(i)||s.datesDisabled.includes(i)||s.daysOfWeekDisabled.includes(new Date(i).getDay())||e.push(i),e},[]);return 0!==o.length?(s.multidate&&!i&&(o=o.reduce((e,t)=>(n.includes(t)||e.push(t),e),n.filter(e=>!o.includes(e)))),s.maxNumberOfDates&&o.length>s.maxNumberOfDates?o.slice(-1*s.maxNumberOfDates):o):void 0}function Se(e,t=3,i=!0){const{config:s,picker:a,inputField:n}=e;if(2&t){const e=a.active?s.pickLevel:s.startView;a.update().changeView(e).render(i)}1&t&&n&&(n.value=xe(e.dates,s))}function Ce(e,t,i){let{clear:s,render:a,autohide:n}=i;void 0===a&&(a=!0),a?void 0===n&&(n=e.config.autohide):n=!1;const r=Me(e,t,s);r&&(r.toString()!==e.dates.toString()?(e.dates=r,Se(e,a?3:1),ee(e,"changeDate")):Se(e,1),n&&e.hide())}return class{constructor(e,t={},i){e.datepicker=this,this.element=e;const a=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:document.body,defaultViewDate:c(),maxDate:void 0,minDate:void 0},q(L,this));this._options=t,Object.assign(a,q(t,this));const n=this.inline="INPUT"!==e.tagName;let r,d;if(n)a.container=e,d=s(e.dataset.date,a.dateDelimiter),delete e.dataset.date;else{const i=t.container?document.querySelector(t.container):null;i&&(a.container=i),(r=this.inputField=e).classList.add("datepicker-input"),d=s(r.value,a.dateDelimiter)}if(i){const e=i.inputs.indexOf(r),t=i.datepickers;if(e<0||e>1||!Array.isArray(t))throw Error("Invalid rangepicker object.");t[e]=this,Object.defineProperty(this,"rangepicker",{get:()=>i})}this.dates=Me(this,d)||[],r&&(r.value=xe(this.dates,a));const o=this.picker=new ge(this);if(n)this.show();else{const e=function(e,t){const i=e.element;if(i!==document.activeElement)return;const s=e.picker.element;V(t,e=>e===i||e===s)||se(e)}.bind(null,this);F(this,[[r,"keydown",ye.bind(null,this)],[r,"focus",ke.bind(null,this)],[r,"mousedown",De.bind(null,this)],[r,"click",ve.bind(null,this)],[r,"paste",be.bind(null,this)],[document,"mousedown",e],[document,"touchstart",e],[window,"resize",o.place.bind(o)]])}}static formatDate(e,t,i){return S(e,t,i&&N[i]||N.en)}static parseDate(e,t,i){return M(e,t,i&&N[i]||N.en)}static get locales(){return N}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=this.picker,i=q(e,this);Object.assign(this._options,e),Object.assign(this.config,i),t.setOptions(i),Se(this,3)}show(){this.inputField&&this.inputField.disabled||this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),function(e){let t=C.get(e);t&&(t.forEach(e=>{E.call(...e)}),C.delete(e))}(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(e){const t=e?t=>S(t,e,this.config.locale):e=>new Date(e);return this.config.multidate?this.dates.map(t):this.dates.length>0?t(this.dates[0]):void 0}setDate(...e){const i=[...e],s={},a=t(e);"object"!=typeof a||Array.isArray(a)||a instanceof Date||!a||Object.assign(s,i.pop()),Ce(this,Array.isArray(i[0])?i[0]:i,s)}update(e){if(this.inline)return;const t={clear:!0,autohide:!(!e||!e.autohide)};Ce(this,s(this.inputField.value,this.config.dateDelimiter),t)}refresh(e,t=!1){let i;e&&"string"!=typeof e&&(t=e,e=void 0),Se(this,i="picker"===e?2:"input"===e?1:3,!t)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit"))}exitEditMode(e){if(this.inline||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),t.update&&this.update(t)}}}();