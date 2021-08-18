!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Choices=t():e.Choices=t()}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/assets/scripts/",i(i.s=4)}([function(e,t,i){"use strict";var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===s}(e)}(e)},s="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function o(e,t,i){return e.concat(t).map(function(e){return r(e,i)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function c(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||n,i.cloneUnlessOtherwiseSpecified=r;var s=Array.isArray(t);return s===Array.isArray(e)?s?i.arrayMerge(e,t,i):function(e,t,i){var n={};return i.isMergeableObject(e)&&a(e).forEach(function(t){n[t]=r(e[t],i)}),a(t).forEach(function(s){(function(e,t){try{return t in e&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}catch(e){return!1}})(e,s)||(i.isMergeableObject(t[s])&&e[s]?n[s]=function(e,t){if(!t.customMerge)return c;var i=t.customMerge(e);return"function"==typeof i?i:c}(s,i)(e[s],t[s],i):n[s]=r(t[s],i))}),n}(e,t,i):r(t,i)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,i){return c(e,i,t)},{})};var l=c;e.exports=l},function(e,t,i){"use strict";(function(e,n){var s,r=i(3);s="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var o=Object(r.a)(s);t.a=o}).call(this,i(5),i(6)(e))},function(e,t,i){e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=i(2),r=i(8),o=i(0),a=function(){function e(t,i){var n=i.location,s=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,h=i.maxPatternLength,u=void 0===h?32:h,d=i.caseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,g=void 0!==v&&v,_=i.minMatchCharLength,b=void 0===_?1:_,y=i.id,E=void 0===y?null:y,I=i.keys,S=void 0===I?[]:I,w=i.shouldSort,O=void 0===w||w,C=i.getFn,A=void 0===C?r:C,L=i.sortFn,T=void 0===L?function(e,t){return e.score-t.score}:L,x=i.tokenize,k=void 0!==x&&x,P=i.matchAllTokens,D=void 0!==P&&P,M=i.includeMatches,N=void 0!==M&&M,F=i.includeScore,j=void 0!==F&&F,K=i.verbose,R=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:s,distance:a,threshold:l,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:m,findAllMatches:g,minMatchCharLength:b,id:E,keys:S,includeMatches:N,includeScore:j,shouldSort:O,getFn:A,sortFn:T,verbose:R,tokenize:k,matchAllTokens:D},this.setCollection(t)}var t;return(t=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,s=i.fullSearcher,r=this._search(n,s),o=r.weights,a=r.results;return this._computeScore(o,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,r=i.length;n<r;n+=1)t.push(new s(i[n],this.options));return{tokenSearchers:t,fullSearcher:new s(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},s=[];if("string"==typeof i[0]){for(var r=0,o=i.length;r<o;r+=1)this._analyze({key:"",value:i[r],record:r,index:r},{resultMap:n,results:s,tokenSearchers:e,fullSearcher:t});return{weights:null,results:s}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var h=i[c],u=0,d=this.options.keys.length;u<d;u+=1){var p=this.options.keys[u];if("string"!=typeof p){if(a[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else a[p]={weight:1};this._analyze({key:p,value:this.options.getFn(h,p),record:h,index:c},{resultMap:n,results:s,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:s}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,s=void 0===n?-1:n,r=e.value,a=e.record,c=e.index,l=t.tokenSearchers,h=void 0===l?[]:l,u=t.fullSearcher,d=void 0===u?[]:u,p=t.resultMap,f=void 0===p?{}:p,m=t.results,v=void 0===m?[]:m;if(null!=r){var g=!1,_=-1,b=0;if("string"==typeof r){this._log("\nKey: ".concat(""===i?"-":i));var y=d.search(r);if(this._log('Full text: "'.concat(r,'", score: ').concat(y.score)),this.options.tokenize){for(var E=r.split(this.options.tokenSeparator),I=[],S=0;S<h.length;S+=1){var w=h[S];this._log('\nPattern: "'.concat(w.pattern,'"'));for(var O=!1,C=0;C<E.length;C+=1){var A=E[C],L=w.search(A),T={};L.isMatch?(T[A]=L.score,g=!0,O=!0,I.push(L.score)):(T[A]=1,this.options.matchAllTokens||I.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(T[A]))}O&&(b+=1)}_=I[0];for(var x=I.length,k=1;k<x;k+=1)_+=I[k];_/=x,this._log("Token score average:",_)}var P=y.score;_>-1&&(P=(P+_)/2),this._log("Score average:",P);var D=!this.options.tokenize||!this.options.matchAllTokens||b>=h.length;if(this._log("\nCheck Matches: ".concat(D)),(g||y.isMatch)&&D){var M=f[c];M?M.output.push({key:i,arrayIndex:s,value:r,score:P,matchedIndices:y.matchedIndices}):(f[c]={item:a,output:[{key:i,arrayIndex:s,value:r,score:P,matchedIndices:y.matchedIndices}]},v.push(f[c]))}}else if(o(r))for(var N=0,F=r.length;N<F;N+=1)this._analyze({key:i,arrayIndex:N,value:r[N],record:a,index:c},{resultMap:f,results:v,tokenSearchers:h,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var s=t[i].output,r=s.length,o=1,a=1,c=0;c<r;c+=1){var l=e?e[s[c].key].weight:1,h=(1===l?s[c].score:s[c].score||.001)*l;1!==l?a=Math.min(a,h):(s[c].nScore=h,o*=h)}t[i].score=1===a?o:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t})),i=null}var s=[];this.options.includeMatches&&s.push(function(e,t){var i=e.output;t.matches=[];for(var n=0,s=i.length;n<s;n+=1){var r=i[n];if(0!==r.matchedIndices.length){var o={indices:r.matchedIndices,value:r.value};r.key&&(o.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(o.arrayIndex=r.arrayIndex),t.matches.push(o)}}}),this.options.includeScore&&s.push(function(e,t){t.score=e.score});for(var r=0,o=e.length;r<o;r+=1){var a=e[r];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),s.length){for(var c={item:a.item},l=0,h=s.length;l<h;l+=1)s[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=a},function(e,t,i){var n=i(3),s=i(4),r=i(7),o=function(){function e(t,i){var n=i.location,s=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,h=i.maxPatternLength,u=void 0===h?32:h,d=i.isCaseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,g=void 0!==v&&v,_=i.minMatchCharLength,b=void 0===_?1:_;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:s,distance:a,threshold:l,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:m,findAllMatches:g,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=r(this.pattern))}var t;return(t=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>i)return n(e,this.pattern,r);var o=this.options,a=o.location,c=o.distance,l=o.threshold,h=o.findAllMatches,u=o.minMatchCharLength;return s(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:h,minMatchCharLength:u})}}])&&function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=o},function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,s=new RegExp(t.replace(i,"\\$&").replace(n,"|")),r=e.match(s),o=!!r,a=[];if(o)for(var c=0,l=r.length;c<l;c+=1){var h=r[c];a.push([e.indexOf(h),h.length-1])}return{score:o?.5:1,isMatch:o,matchedIndices:a}}},function(e,t,i){var n=i(5),s=i(6);e.exports=function(e,t,i,r){for(var o=r.location,a=void 0===o?0:o,c=r.distance,l=void 0===c?100:c,h=r.threshold,u=void 0===h?.6:h,d=r.findAllMatches,p=void 0!==d&&d,f=r.minMatchCharLength,m=void 0===f?1:f,v=a,g=e.length,_=u,b=e.indexOf(t,v),y=t.length,E=[],I=0;I<g;I+=1)E[I]=0;if(-1!==b){var S=n(t,{errors:0,currentLocation:b,expectedLocation:v,distance:l});if(_=Math.min(S,_),-1!==(b=e.lastIndexOf(t,v+y))){var w=n(t,{errors:0,currentLocation:b,expectedLocation:v,distance:l});_=Math.min(w,_)}}b=-1;for(var O=[],C=1,A=y+g,L=1<<y-1,T=0;T<y;T+=1){for(var x=0,k=A;x<k;)n(t,{errors:T,currentLocation:v+k,expectedLocation:v,distance:l})<=_?x=k:A=k,k=Math.floor((A-x)/2+x);A=k;var P=Math.max(1,v-k+1),D=p?g:Math.min(v+k,g)+y,M=Array(D+2);M[D+1]=(1<<T)-1;for(var N=D;N>=P;N-=1){var F=N-1,j=i[e.charAt(F)];if(j&&(E[F]=1),M[N]=(M[N+1]<<1|1)&j,0!==T&&(M[N]|=(O[N+1]|O[N])<<1|1|O[N+1]),M[N]&L&&(C=n(t,{errors:T,currentLocation:F,expectedLocation:v,distance:l}))<=_){if(_=C,(b=F)<=v)break;P=Math.max(1,2*v-b)}}if(n(t,{errors:T+1,currentLocation:v,expectedLocation:v,distance:l})>_)break;O=M}return{isMatch:b>=0,score:0===C?.001:C,matchedIndices:s(E,m)}}},function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,s=t.currentLocation,r=void 0===s?0:s,o=t.expectedLocation,a=void 0===o?0:o,c=t.distance,l=void 0===c?100:c,h=n/e.length,u=Math.abs(a-r);return l?h+u/l:u?1:h}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,s=-1,r=0,o=e.length;r<o;r+=1){var a=e[r];a&&-1===n?n=r:a||-1===n||((s=r-1)-n+1>=t&&i.push([n,s]),n=-1)}return e[r-1]&&r-n>=t&&i.push([n,r-1]),i}},function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var s=0;s<i;s+=1)t[e.charAt(s)]|=1<<i-s-1;return t}},function(e,t,i){var n=i(0);e.exports=function(e,t){return function e(t,i,s){if(i){var r=i.indexOf("."),o=i,a=null;-1!==r&&(o=i.slice(0,r),a=i.slice(r+1));var c=t[o];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,h=c.length;l<h;l+=1)e(c[l],a,s);else a&&e(c,a,s);else s.push(c.toString())}else s.push(t);return s}(e,t,[])}}])},function(e,t,i){"use strict";function n(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",function(){return n})},function(e,t,i){e.exports=i(7)},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),r=i(0),o=i.n(r),a=i(1),c=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function h(e,t,i){var n;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(h)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,r=t,o=[],c=o,u=!1;function d(){c===o&&(c=o.slice())}function p(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return r}function f(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),c.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var i=c.indexOf(e);c.splice(i,1)}}}function m(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,r=s(r,e)}finally{u=!1}for(var t=o=c,i=0;i<t.length;i++)(0,t[i])();return e}return m({type:l.INIT}),(n={dispatch:m,subscribe:f,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,m({type:l.REPLACE})}})[a.a]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(p())}return i(),{unsubscribe:t(i)}}})[a.a]=function(){return this},e},n}function u(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}var d,p=[],f=[],m=[],v={loading:!1},g=function(e){return Array.from({length:e},function(){return(0,36,Math.floor(36*Math.random()+0)).toString(36)}).join("")},_=function(e,t){var i=e.id||e.name&&e.name+"-"+g(2)||g(4);return t+"-"+i.replace(/(:|\.|\[|\]|,)/g,"")},b=function(e){return Object.prototype.toString.call(e).slice(8,-1)},y=function(e,t){return null!=t&&b(t)===e},E=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},I=(d=document.createElement("div"),function(e){var t=e.trim();d.innerHTML=t;for(var i=d.children[0];d.firstChild;)d.removeChild(d.firstChild);return i}),S=function(e,t){return e.score-t.score},w=function(e){return JSON.parse(JSON.stringify(e))},O=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter(function(e){return n.indexOf(e)<0})},C=function(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var s=t[n];"function"==typeof e[s]&&(i[s]=e[s])}var r,o=Object.keys(i);try{!function(e){Object.keys(e).forEach(function(t){var i=e[t];if(void 0===i(void 0,{type:l.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+l.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(i)}catch(e){r=e}return function(e,t){if(void 0===e&&(e={}),r)throw r;for(var n=!1,s={},a=0;a<o.length;a++){var c=o[a],l=i[c],h=e[c],d=l(h,t);if(void 0===d){var p=u(c,t);throw new Error(p)}s[c]=d,n=n||d!==h}return n?s:e}}({items:function(e,t){switch(void 0===e&&(e=p),t.type){case"ADD_ITEM":return[].concat(e,[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]).map(function(e){var t=e;return t.highlighted=!1,t});case"REMOVE_ITEM":return e.map(function(e){var i=e;return i.id===t.id&&(i.active=!1),i});case"HIGHLIGHT_ITEM":return e.map(function(e){var i=e;return i.id===t.id&&(i.highlighted=t.highlighted),i});default:return e}},groups:function(e,t){switch(void 0===e&&(e=f),t.type){case"ADD_GROUP":return[].concat(e,[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return[];default:return e}},choices:function(e,t){switch(void 0===e&&(e=m),t.type){case"ADD_CHOICE":return[].concat(e,[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);case"ADD_ITEM":return t.activateOptions?e.map(function(e){var i=e;return i.active=t.active,i}):t.choiceId>-1?e.map(function(e){var i=e;return i.id===parseInt(t.choiceId,10)&&(i.selected=!0),i}):e;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){var i=e;return i.id===parseInt(t.choiceId,10)&&(i.selected=!1),i}):e;case"FILTER_CHOICES":return e.map(function(e){var i=e;return i.active=t.results.some(function(e){var t=e.item,n=e.score;return t.id===i.id&&(i.score=n,!0)}),i});case"ACTIVATE_CHOICES":return e.map(function(e){var i=e;return i.active=t.active,i});case"CLEAR_CHOICES":return m;default:return e}},general:function(e,t){switch(void 0===e&&(e=v),t.type){case"SET_IS_LOADING":return{loading:t.isLoading};default:return e}}}),A=function(e,t){var i=e;if("CLEAR_ALL"===t.type)i=void 0;else if("RESET_TO"===t.type)return w(t.state);return C(i,t)};function L(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(){this._store=h(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}var t,i,n=e.prototype;return n.subscribe=function(e){this._store.subscribe(e)},n.dispatch=function(e){this._store.dispatch(e)},n.isLoading=function(){return this.state.general.loading},n.getChoiceById=function(e){return this.activeChoices.find(function(t){return t.id===parseInt(e,10)})},n.getGroupById=function(e){return this.groups.find(function(t){return t.id===e})},t=e,(i=[{key:"state",get:function(){return this._store.getState()}},{key:"items",get:function(){return this.state.items}},{key:"activeItems",get:function(){return this.items.filter(function(e){return!0===e.active})}},{key:"highlightedActiveItems",get:function(){return this.items.filter(function(e){return e.active&&e.highlighted})}},{key:"choices",get:function(){return this.state.choices}},{key:"activeChoices",get:function(){return this.choices.filter(function(e){return!0===e.active})}},{key:"selectableChoices",get:function(){return this.choices.filter(function(e){return!0})}},{key:"searchableChoices",get:function(){return this.selectableChoices.filter(function(e){return!0!==e.placeholder})}},{key:"placeholderChoice",get:function(){return[].concat(this.choices).reverse().find(function(e){return!0===e.placeholder})}},{key:"groups",get:function(){return this.state.groups}},{key:"activeGroups",get:function(){var e=this.groups,t=this.choices;return e.filter(function(e){var i=!0===e.active&&!1===e.disabled,n=t.some(function(e){return!0===e.active&&!1===e.disabled});return i&&n},[])}}])&&L(t.prototype,i),e}();function x(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var k=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}var t,i,n=e.prototype;return n.getChild=function(e){return this.element.querySelector(e)},n.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},n.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},t=e,(i=[{key:"distanceFromTopWindow",get:function(){return this.element.getBoundingClientRect().bottom}}])&&x(t.prototype,i),e}(),P={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:function(e,t){var i=e.value,n=e.label,s=void 0===n?i:n,r=t.value,o=t.label,a=void 0===o?r:o;return s.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'+E(e)+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added"},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:{containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"}},D="removeItem",M="highlightItem",N="text",F="select-one",j="select-multiple",K=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,s=e.position;this.element=t,this.classNames=n,this.type=i,this.position=s,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}var t=e.prototype;return t.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},t.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},t.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: "+(e+1)+"px)").matches:"top"===this.position&&(t=!0),t},t.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},t.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},t.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},t.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},t.focus=function(){this.isFocussed||this.element.focus()},t.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},t.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},t.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===F&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},t.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===F&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},t.wrap=function(e){!function(e,t){void 0===t&&(t=document.createElement("div")),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)}(e,this.element)},t.unwrap=function(e){this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element)},t.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},t.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},t._onFocus=function(){this.isFocussed=!0},t._onBlur=function(){this.isFocussed=!1},e}();function R(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var H=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,s=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=s,this.isFocussed=this.element===document.activeElement,this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}var t,i,n=e.prototype;return n.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},n.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput,{passive:!0}),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus,{passive:!0}),this.element.removeEventListener("blur",this._onBlur,{passive:!0})},n.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},n.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},n.focus=function(){this.isFocussed||this.element.focus()},n.blur=function(){this.isFocussed&&this.element.blur()},n.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},n.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth=n.length+1+"ch",t.width=i.length+1+"ch"},n.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},n.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},n._onInput=function(){this.type!==F&&this.setWidth()},n._onPaste=function(e){this.preventPaste&&e.preventDefault()},n._onFocus=function(){this.isFocussed=!0},n._onBlur=function(){this.isFocussed=!1},t=e,(i=[{key:"placeholder",set:function(e){this.element.placeholder=e}},{key:"value",get:function(){return E(this.element.value)},set:function(e){this.element.value=e}}])&&R(t.prototype,i),e}(),B=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}var t=e.prototype;return t.clear=function(){this.element.innerHTML=""},t.append=function(e){this.element.appendChild(e)},t.getChild=function(e){return this.element.querySelector(e)},t.hasChildren=function(){return this.element.hasChildNodes()},t.scrollToTop=function(){this.element.scrollTop=0},t.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,s=this.element.scrollTop+n,r=e.offsetHeight,o=e.offsetTop+r,a=t>0?this.element.scrollTop+o-s:e.offsetTop;requestAnimationFrame(function(){i._animateScroll(a,t)})}},t._scrollDown=function(e,t,i){var n=(i-e)/t,s=n>1?n:1;this.element.scrollTop=e+s},t._scrollUp=function(e,t,i){var n=(e-i)/t,s=n>1?n:1;this.element.scrollTop=e-s},t._animateScroll=function(e,t){var i=this,n=this.element.scrollTop,s=!1;t>0?(this._scrollDown(n,4,e),n<e&&(s=!0)):(this._scrollUp(n,4,e),n>e&&(s=!0)),s&&requestAnimationFrame(function(){i._animateScroll(e,t)})},e}();function V(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var G=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}var t,i,n=e.prototype;return n.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},n.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},n.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},n.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},n.triggerEvent=function(e,t){!function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});e.dispatchEvent(n)}(this.element,e,t)},t=e,(i=[{key:"isActive",get:function(){return"active"===this.element.dataset.choice}},{key:"dir",get:function(){return this.element.dir}},{key:"value",get:function(){return this.element.value},set:function(e){this.element.value=e}}])&&V(t.prototype,i),e}();function q(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var U=function(e){var t,i,n,s;function r(t){var i,n=t.element,s=t.classNames,r=t.delimiter;return(i=e.call(this,{element:n,classNames:s})||this).delimiter=r,i}return i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n=r,(s=[{key:"value",get:function(){return this.element.value},set:function(e){var t=e.map(function(e){return e.value}).join(this.delimiter);this.element.setAttribute("value",t),this.element.value=t}}])&&q(n.prototype,s),r}(G);function z(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var W=function(e){var t,i,n,s;function r(t){var i,n=t.element,s=t.classNames,r=t.template;return(i=e.call(this,{element:n,classNames:s})||this).template=r,i}return i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,r.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},n=r,(s=[{key:"placeholderOption",get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")}},{key:"optionGroups",get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))}},{key:"options",get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach(function(e){return n=e,s=t.template(n),void i.appendChild(s);var n,s}),this.appendDocFragment(i)}}])&&z(n.prototype,s),r}(G),X={containerOuter:function(e,t,i,n,s,r){var o=e.containerOuter,a=Object.assign(document.createElement("div"),{className:o});return a.dataset.type=r,t&&(a.dir=t),n&&(a.tabIndex=0),i&&(a.setAttribute("role",s?"combobox":"listbox"),s&&a.setAttribute("aria-autocomplete","list")),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false"),a},containerInner:function(e){var t=e.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.list,n=e.listSingle,s=e.listItems;return Object.assign(document.createElement("div"),{className:i+" "+(t?n:s)})},placeholder:function(e,t){var i=e.placeholder;return Object.assign(document.createElement("div"),{className:i,innerHTML:t})},item:function(e,t,i){var n=e.item,s=e.button,r=e.highlightedState,o=e.itemSelectable,a=e.placeholder,c=t.id,l=t.value,h=t.label,u=t.customProperties,d=t.active,p=t.disabled,f=t.highlighted,m=t.placeholder,v=Object.assign(document.createElement("div"),{className:n,innerHTML:h});if(Object.assign(v.dataset,{item:"",id:c,value:l,customProperties:u}),d?v.setAttribute("aria-selected","true"):v.setAttribute("aria-selected","false"),p&&v.setAttribute("aria-disabled","true"),m&&v.classList.add(a),v.classList.add(f?r:o),i){p&&v.classList.remove(o),v.dataset.deletable="";var g=Object.assign(document.createElement("button"),{type:"button",className:s,innerHTML:"Remove item"});g.setAttribute("aria-label","Remove item: '"+l+"'"),g.dataset.button="",v.appendChild(g)}return v},choiceList:function(e,t){var i=e.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i=e.group,n=e.groupHeading,s=e.itemDisabled,r=t.id,o=t.value,a=t.disabled,c=Object.assign(document.createElement("div"),{className:i+" "+(a?s:"")});return c.setAttribute("role","group"),Object.assign(c.dataset,{group:"",id:r,value:o}),a&&c.setAttribute("aria-disabled","true"),c.appendChild(Object.assign(document.createElement("div"),{className:n,innerHTML:o})),c},choice:function(e,t,i){var n=e.item,s=e.itemChoice,r=e.itemSelectable,o=e.selectedState,a=e.itemDisabled,c=e.placeholder,l=t.id,h=t.value,u=t.label,d=t.groupId,p=t.elementId,f=t.disabled,m=t.selected,v=t.placeholder,g=Object.assign(document.createElement("div"),{id:p,innerHTML:u,className:n+" "+s});return m&&g.classList.add(o),v&&g.classList.add(c),g.setAttribute("role",d>0?"treeitem":"option"),Object.assign(g.dataset,{choice:"",id:l,value:h,selectText:i}),f?(g.classList.add(a),g.dataset.choiceDisabled="",g.setAttribute("aria-disabled","true")):(g.classList.add(r),g.dataset.choiceSelectable=""),g},input:function(e,t){var i=e.input,n=e.inputCloned,s=Object.assign(document.createElement("input"),{type:"text",className:i+" "+n,autocomplete:"off",autocapitalize:"off",spellcheck:!1});return s.setAttribute("role","textbox"),s.setAttribute("aria-autocomplete","list"),s.setAttribute("aria-label",t),s},dropdown:function(e){var t=e.list,i=e.listDropdown,n=document.createElement("div");return n.classList.add(t,i),n.setAttribute("aria-expanded","false"),n},notice:function(e,t,i){var n=e.item,s=e.itemChoice,r=e.noResults,o=e.noChoices;void 0===i&&(i="");var a=[n,s];return"no-choices"===i?a.push(o):"no-results"===i&&a.push(r),Object.assign(document.createElement("div"),{innerHTML:t,className:a.join(" ")})},option:function(e){var t=e.label,i=e.value,n=e.customProperties,s=e.active,r=new Option(t,i,!1,s);return n&&(r.dataset.customProperties=n),r.disabled=!1,r}},$=function(e){return void 0===e&&(e=!0),{type:"ACTIVATE_CHOICES",active:e}},J=function(e,t){return{type:"HIGHLIGHT_ITEM",id:e,highlighted:t}},Y=function(e){return{type:"ADD_GROUP",value:e.value,id:e.id,active:e.active,disabled:!1}},Z=function(e){return{type:"SET_IS_LOADING",isLoading:e}};function Q(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ee="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,te={},ie=function(){var e,t;function i(e,t){var n=this;void 0===e&&(e="[data-choice]"),void 0===t&&(t={}),this.config=o.a.all([P,i.defaults.options,t],{arrayMerge:function(e,t){return[].concat(t)}});var s=O(this.config,P);s.length&&console.warn("Unknown config option(s) passed",s.join(", "));var r="string"==typeof e?document.querySelector(e):e;if(!(r instanceof HTMLInputElement||r instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=r.type===N,this._isSelectOneElement=r.type===F,this._isSelectMultipleElement=r.type===j,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes(this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto"),t.addItemFilter&&"function"!=typeof t.addItemFilter){var a=t.addItemFilter instanceof RegExp?t.addItemFilter:new RegExp(t.addItemFilter);this.config.addItemFilter=a.test.bind(a)}if(this._isTextElement?this.passedElement=new U({element:r,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new W({element:r,classNames:this.config.classNames,template:function(e){return n._templates.option(e)}}),this.initialised=!1,this._store=new T,this._initialState={},this._currentState={},this._prevState={},this._currentValue="",this._canSearch=this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=_(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var c=window.getComputedStyle(this.passedElement.element).direction;c!==window.getComputedStyle(document.documentElement).direction&&(this._direction=c)}if(this._idNames={itemChoice:"item-choice"},this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options,this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&(this._presetItems=this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this.passedElement.options&&this.passedElement.options.forEach(function(e){n._presetChoices.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:!1,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:e.getAttribute("data-custom-properties")})}),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onAKey=this._onAKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised"),void(this.initialised=!0);this.init()}e=i,t=[{key:"defaults",get:function(){return Object.preventExtensions({get options(){return te},get templates(){return X}})}}],null&&Q(e.prototype,null),t&&Q(e,t);var n=i.prototype;return n.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._initialState=w(this._store.state),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},n.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=null,this.initialised=!1)},n.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},n.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},n.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e)return this;var i=e.id,n=e.groupId,s=void 0===n?-1:n,r=e.value,o=void 0===r?"":r,a=e.label,c=void 0===a?"":a,l=s>=0?this._store.getGroupById(s):null;return this._store.dispatch(J(i,!0)),t&&this.passedElement.triggerEvent(M,{id:i,value:o,label:c,groupValue:l&&l.value?l.value:null}),this},n.unhighlightItem=function(e){if(!e)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,s=e.value,r=void 0===s?"":s,o=e.label,a=void 0===o?"":o,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch(J(t,!1)),this.passedElement.triggerEvent(M,{id:t,value:r,label:a,groupValue:c&&c.value?c.value:null}),this},n.highlightAll=function(){var e=this;return this._store.items.forEach(function(t){return e.highlightItem(t)}),this},n.unhighlightAll=function(){var e=this;return this._store.items.forEach(function(t){return e.unhighlightItem(t)}),this},n.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter(function(t){return t.value===e}).forEach(function(e){return t._removeItem(e)}),this},n.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter(function(t){return t.id!==e}).forEach(function(e){return t._removeItem(e)}),this},n.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach(function(i){t._removeItem(i),e&&t._triggerChange(i.value)}),this},n.showDropdown=function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame(function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent("showDropdown",{})}),this)},n.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame(function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent("hideDropdown",{})}),this):this},n.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce(function(t,i){var n=e?i.value:i;return t.push(n),t},[]);return this._isSelectOneElement?t[0]:t},n.setValue=function(e){var t=this;return this.initialised?(e.forEach(function(e){return t._setChoiceOrItem(e)}),this):this},n.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement?this:((Array.isArray(e)?e:[e]).forEach(function(e){return t._findAndSelectChoiceByValue(e)}),this)},n.setChoices=function(e,t,i,n){var s=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var r=e(this);if("function"==typeof Promise&&r instanceof Promise)return new Promise(function(e){return requestAnimationFrame(e)}).then(function(){return s._handleLoadingState(!0)}).then(function(){return r}).then(function(e){return s.setChoices(e,t,i,n)}).catch(function(e){s.config.silent||console.error(e)}).then(function(){return s._handleLoadingState(!1)}).then(function(){return s});if(!Array.isArray(r))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: "+typeof r);return this.setChoices(r,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach(function(e){e.choices?s._addGroup({id:parseInt(e.id,10)||null,group:e,valueKey:t,labelKey:i}):s._addChoice({value:e[t],label:e[i],isSelected:e.selected,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder})}),this._stopLoading(),this},n.clearChoices=function(){return this._store.dispatch({type:"CLEAR_CHOICES"}),this},n.clearStore=function(){return this._store.dispatch({type:"CLEAR_ALL"}),this},n.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch($(!0))),this},n._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},n._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,s=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame(function(){return e.choiceList.scrollToTop()}),i.length>=1&&!this._isSearching){var r=n.filter(function(e){return!0===e.placeholder&&-1===e.groupId});r.length>=1&&(s=this._createChoicesFragment(r,s)),s=this._createGroupsFragment(i,n,s)}else n.length>=1&&(s=this._createChoicesFragment(n,s));if(s.childNodes&&s.childNodes.length>0){var o=this._store.activeItems,a=this._canAddItem(o,this.input.value);a.response?(this.choiceList.append(s),this._highlightChoice()):this.choiceList.append(this._getTemplate("notice",a.notice))}else{var c,l;this._isSearching?(l="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,c=this._getTemplate("notice",l,"no-results")):(l="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,c=this._getTemplate("notice",l,"no-choices")),this.choiceList.append(c)}},n._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},n._createGroupsFragment=function(e,t,i){var n=this;return void 0===i&&(i=document.createDocumentFragment()),this.config.shouldSort&&e.sort(this.config.sorter),e.forEach(function(e){var s=function(e){return t.filter(function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)})}(e);if(s.length>=1){var r=n._getTemplate("choiceGroup",e);i.appendChild(r),n._createChoicesFragment(s,i,!0)}}),i},n._createChoicesFragment=function(e,t,i){var n=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var s=this.config,r=s.renderSelectedChoices,o=s.searchResultLimit,a=s.renderChoiceLimit,c=this._isSearching?S:this.config.sorter,l=function(e){if("auto"!==r||n._isSelectOneElement||!e.selected){var i=n._getTemplate("choice",e,n.config.itemSelectText);t.appendChild(i)}},h=e;"auto"!==r||this._isSelectOneElement||(h=e.filter(function(e){return!e.selected}));var u=h.reduce(function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e},{placeholderChoices:[],normalChoices:[]}),d=u.placeholderChoices,p=u.normalChoices;(this.config.shouldSort||this._isSearching)&&p.sort(c);var f=h.length,m=this._isSelectOneElement?[].concat(d,p):p;this._isSearching?f=o:a&&a>0&&!i&&(f=a);for(var v=0;v<f;v+=1)m[v]&&l(m[v]);return t},n._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,s=n.shouldSortItems,r=n.sorter,o=n.removeItemButton;return s&&!this._isSelectOneElement&&e.sort(r),this._isTextElement?this.passedElement.value=e:this.passedElement.options=e,e.forEach(function(e){var n=i._getTemplate("item",e,o);t.appendChild(n)}),t},n._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent("change",{value:e})},n._selectPlaceholderChoice=function(){var e=this._store.placeholderChoice;e&&(this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value))},n._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._selectPlaceholderChoice()}},n._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var s=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(s,10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)}),this.input.focus()}},n._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=this._store.getChoiceById(i);if(n){var s=e[0]&&e[0].keyCode?e[0].keyCode:null,r=this.dropdown.isActive;n.keyCode=s,this.passedElement.triggerEvent("choice",{choice:n}),n.selected||n.disabled||this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value)),this.clearInput(),r&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},n._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted});this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},n._startLoading=function(){this._store.dispatch(Z(!0))},n._stopLoading=function(){this._store.dispatch(Z(!1))},n._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild("."+this.config.classNames.placeholder);e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.append(t)):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t.innerHTML=this._placeholderValue||"":this.input.placeholder=this._placeholderValue||"")},n._handleSearch=function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,s=i.searchChoices,r=t.some(function(e){return!e.active});if(e&&e.length>=n){var o=s?this._searchChoices(e):0;this.passedElement.triggerEvent("search",{value:e,resultCount:o})}else r&&(this._isSearching=!1,this._store.dispatch($(!0)))}},n._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var s=function(e,t,i){return void 0===i&&(i="value"),e.some(function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t})}(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&s&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},n._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t===i+" ")return 0;var n=this._store.searchableChoices,r=t,o=[].concat(this.config.searchFields),a=Object.assign(this.config.fuseOptions,{keys:o}),c=new s.a(n,a).search(r);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch({type:"FILTER_CHOICES",results:c}),c.length},n._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},n._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},n._onKeyDown=function(e){var t,i=e.target,n=e.keyCode,s=e.ctrlKey,r=e.metaKey,o=this._store.activeItems,a=this.input.isFocussed,c=this.dropdown.isActive,l=this.itemList.hasChildren(),h=String.fromCharCode(n),u=s||r;!this._isTextElement&&/[a-zA-Z0-9-_ ]/.test(h)&&this.showDropdown();var d=((t={})[65]=this._onAKey,t[13]=this._onEnterKey,t[27]=this._onEscapeKey,t[38]=this._onDirectionKey,t[33]=this._onDirectionKey,t[40]=this._onDirectionKey,t[34]=this._onDirectionKey,t[8]=this._onDeleteKey,t[46]=this._onDeleteKey,t);d[n]&&d[n]({event:e,target:i,keyCode:n,metaKey:r,activeItems:o,hasFocusedInput:a,hasActiveDropdown:c,hasItems:l,hasCtrlDownKeyPressed:u})},n._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,s=this._store.activeItems,r=this._canAddItem(s,n);if(this._isTextElement)if(r.notice&&n){var o=this._getTemplate("notice",r.notice);this.dropdown.element.innerHTML=o.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0);else{var a=(46===i||8===i)&&!t.value,c=!this._isTextElement&&this._isSearching,l=this._canSearch&&r.response;a&&c?(this._isSearching=!1,this._store.dispatch($(!0))):l&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled},n._onAKey=function(e){var t=e.hasItems;e.hasCtrlDownKeyPressed&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},n._onEnterKey=function(e){var t=e.event,i=e.target,n=e.activeItems,s=e.hasActiveDropdown,r=i.hasAttribute("data-button");if(this._isTextElement&&i.value){var o=this.input.value;this._canAddItem(n,o).response&&(this.hideDropdown(!0),this._addItem({value:o}),this._triggerChange(o),this.clearInput())}if(r&&(this._handleButtonAction(n,i),t.preventDefault()),s){var a=this.dropdown.getChild("."+this.config.classNames.highlightedState);a&&(n[0]&&(n[0].keyCode=13),this._handleChoiceAction(n,a)),t.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),t.preventDefault())},n._onEscapeKey=function(e){e.hasActiveDropdown&&(this.hideDropdown(!0),this.containerOuter.focus())},n._onDirectionKey=function(e){var t,i,n,s=e.event,r=e.hasActiveDropdown,o=e.keyCode,a=e.metaKey;if(r||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var c,l=40===o||34===o?1:-1;if(a||34===o||33===o)c=l>0?this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type"):this.dropdown.element.querySelector("[data-choice-selectable]");else{var h=this.dropdown.element.querySelector("."+this.config.classNames.highlightedState);c=h?function(e,t,i){if(void 0===i&&(i=1),h instanceof Element){for(var n=(i>0?"next":"previous")+"ElementSibling",s=h[n];s;){if(s.matches(t))return s;s=s[n]}return s}}(0,"[data-choice-selectable]",l):this.dropdown.element.querySelector("[data-choice-selectable]")}c&&(t=c,i=this.choiceList.element,void 0===(n=l)&&(n=1),t&&(n>0?i.scrollTop+i.offsetHeight>=t.offsetTop+t.offsetHeight:t.offsetTop>=i.scrollTop)||this.choiceList.scrollToChildElement(c,l),this._highlightChoice(c)),s.preventDefault()}},n._onDeleteKey=function(e){var t=e.event,i=e.target,n=e.hasFocusedInput,s=e.activeItems;!n||i.value||this._isSelectOneElement||(this._handleBackspace(s),t.preventDefault())},n._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},n._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation()),this._wasTap=!0},n._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(ee&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var s=t.closest("[data-button],[data-item],[data-choice]");if(s instanceof HTMLElement){var r=e.shiftKey,o=this._store.activeItems,a=s.dataset;"button"in a?this._handleButtonAction(o,s):"item"in a?this._handleItemAction(o,s,r):"choice"in a&&this._handleChoiceAction(o,s)}e.preventDefault()}}},n._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},n._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},n._onFocus=function(e){var t,i=this,n=e.target;this.containerOuter.element.contains(n)&&((t={})[N]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[F]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[j]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},n._onBlur=function(e){var t=this,i=e.target;if(this.containerOuter.element.contains(i)&&!this._isScrollingOnIe){var n,s=this._store.activeItems.some(function(e){return e.highlighted});((n={})[N]=function(){i===t.input.element&&(t.containerOuter.removeFocusState(),s&&t.unhighlightAll(),t.hideDropdown(!0))},n[F]=function(){t.containerOuter.removeFocusState(),(i===t.input.element||i===t.containerOuter.element&&!t._canSearch)&&t.hideDropdown(!0)},n[j]=function(){i===t.input.element&&(t.containerOuter.removeFocusState(),t.hideDropdown(!0),s&&t.unhighlightAll())},n)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},n._onFormReset=function(){this._store.dispatch({type:"RESET_TO",state:this._initialState})},n._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){i.forEach(function(e){e.setAttribute("aria-selected","false")});var n=e;Array.from(this.dropdown.element.querySelectorAll("."+this.config.classNames.highlightedState)).forEach(function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")}),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent("highlightChoice",{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},n._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,s=e.choiceId,r=void 0===s?-1:s,o=e.groupId,a=void 0===o?-1:o,c=e.customProperties,l=void 0===c?null:c,h=e.placeholder,u=void 0!==h&&h,d=e.keyCode,p=void 0===d?null:d,f="string"==typeof t?t.trim():t,m=p,v=l,g=this._store.items,_=n||f,b=r||-1,y=a>=0?this._store.getGroupById(a):null,E=g?g.length+1:1;return this.config.prependValue&&(f=this.config.prependValue+f.toString()),this.config.appendValue&&(f+=this.config.appendValue.toString()),this._store.dispatch(function(e){return{type:"ADD_ITEM",value:e.value,label:e.label,id:e.id,choiceId:e.choiceId,groupId:e.groupId,customProperties:e.customProperties,placeholder:e.placeholder,keyCode:e.keyCode}}({value:f,label:_,id:E,choiceId:b,groupId:a,customProperties:l,placeholder:u,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(E),this.passedElement.triggerEvent("addItem",{id:E,value:f,label:_,customProperties:v,groupValue:y&&y.value?y.value:void 0,keyCode:m}),this},n._removeItem=function(e){if(!e||!y("Object",e))return this;var t=e.id,i=e.value,n=e.label,s=e.choiceId,r=e.groupId,o=r>=0?this._store.getGroupById(r):null;return this._store.dispatch(function(e,t){return{type:"REMOVE_ITEM",id:e,choiceId:s}}(t)),o&&o.value?this.passedElement.triggerEvent(D,{id:t,value:i,label:n,groupValue:o.value}):this.passedElement.triggerEvent(D,{id:t,value:i,label:n}),this},n._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,s=e.isSelected,r=void 0!==s&&s,o=e.isDisabled,a=void 0!==o&&o,c=e.groupId,l=void 0===c?-1:c,h=e.customProperties,u=void 0===h?null:h,d=e.placeholder,p=void 0!==d&&d,f=e.keyCode,m=void 0===f?null:f;if(null!=t){var v=this._store.choices,g=n||t,_=v?v.length+1:1,b=this._baseId+"-"+this._idNames.itemChoice+"-"+_;this._store.dispatch(function(e){return{type:"ADD_CHOICE",value:e.value,label:e.label,id:e.id,groupId:e.groupId,disabled:!1,elementId:e.elementId,customProperties:e.customProperties,placeholder:e.placeholder,keyCode:e.keyCode}}({id:_,groupId:l,elementId:b,value:t,label:g,disabled:a,customProperties:u,placeholder:p,keyCode:m})),r&&this._addItem({value:t,label:g,choiceId:_,customProperties:u,placeholder:p,keyCode:m})}},n._addGroup=function(e){var t=this,i=e.group,n=e.id,s=e.valueKey,r=void 0===s?"value":s,o=e.labelKey,a=void 0===o?"label":o,c=y("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),l=n||Math.floor((new Date).valueOf()*Math.random()),h=!!i.disabled&&i.disabled;c?(this._store.dispatch(Y({value:i.label,id:l,active:!0,disabled:h})),c.forEach(function(e){var i=e.parentNode&&!1;t._addChoice({value:e[r],label:y("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})})):this._store.dispatch(Y({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},n._getTemplate=function(e){var t;if(!e)return null;for(var i=this.config.classNames,n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return(t=this._templates[e]).call.apply(t,[this,i].concat(s))},n._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,I)),this._templates=o()(X,t)},n._createElements=function(){this.containerOuter=new K({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new K({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new H({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new B({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new B({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new k({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},n._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},n._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach(function(e){return t._addGroup({group:e,id:e.id||null})})},n._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some(function(e){return e.selected}),n=e.findIndex(function(e){return void 0===e.disabled||!e.disabled});e.forEach(function(e,s){var r=e.value,o=e.label,a=e.customProperties,c=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var l=!(!t._isSelectOneElement||i||s!==n)||e.selected;t._addChoice({value:r,label:o,isSelected:l,isDisabled:!1,customProperties:a,placeholder:c})}else t._addChoice({value:r,label:o,isSelected:e.selected,isDisabled:!1,customProperties:a,placeholder:c})})},n._addPredefinedItems=function(e){var t=this;e.forEach(function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})})},n._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[b(e).toLowerCase()]()},n._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find(function(i){return t.config.valueComparer(i.value,e)});i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},n._generatePlaceholderValue=function(){if(this._isSelectElement){var e=this.passedElement.placeholderOption;return!!e&&e.text}var t=this.config,i=t.placeholder,n=t.placeholderValue,s=this.passedElement.element.dataset;if(i){if(n)return n;if(s.placeholder)return s.placeholder}return!1},i}();t.default=ie}]).default});;(function webpackUniversalModuleDefinition(a,b){if(typeof exports==="object"&&typeof module==="object"){module.exports=b()}else{if(typeof define==="function"&&define.amd){define([],b)}else{if(typeof exports==="object"){exports.Cleave=b()}else{a.Cleave=b()}}}})(this,function(){return(function(a){var b={};function c(e){if(b[e]){return b[e].exports}var d=b[e]={exports:{},id:e,loaded:false};a[e].call(d.exports,d,d.exports,c);d.loaded=true;return d.exports}c.m=a;c.c=b;c.p="";return c(0)})([(function(b,a,c){(function(e){var d=function(g,h){var f=this;var j=false;if(typeof g==="string"){f.element=document.querySelector(g);j=document.querySelectorAll(g).length>1}else{if(typeof g.length!=="undefined"&&g.length>0){f.element=g[0];j=g.length>1}else{f.element=g}}if(!f.element){throw new Error("[cleave.js] Please check the element")}if(j){try{console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.")}catch(i){}}h.initValue=f.element.value;f.properties=d.DefaultProperties.assign({},h);f.init()};d.prototype={init:function(){var f=this,g=f.properties;if(!g.numeral&&!g.phone&&!g.creditCard&&!g.time&&!g.date&&(g.blocksLength===0&&!g.prefix)){f.onInput(g.initValue);return}g.maxLength=d.Util.getMaxLength(g.blocks);f.isAndroid=d.Util.isAndroid();f.lastInputValue="";f.isBackward="";f.onChangeListener=f.onChange.bind(f);f.onKeyDownListener=f.onKeyDown.bind(f);f.onFocusListener=f.onFocus.bind(f);f.onCutListener=f.onCut.bind(f);f.onCopyListener=f.onCopy.bind(f);f.initSwapHiddenInput();f.element.addEventListener("input",f.onChangeListener);f.element.addEventListener("keydown",f.onKeyDownListener);f.element.addEventListener("focus",f.onFocusListener);f.element.addEventListener("cut",f.onCutListener);f.element.addEventListener("copy",f.onCopyListener);f.initPhoneFormatter();f.initDateFormatter();f.initTimeFormatter();f.initNumeralFormatter();if(g.initValue||(g.prefix&&!g.noImmediatePrefix)){f.onInput(g.initValue)}},initSwapHiddenInput:function(){var f=this,g=f.properties;if(!g.swapHiddenInput){return}var h=f.element.cloneNode(true);f.element.parentNode.insertBefore(h,f.element);f.elementSwapHidden=f.element;f.elementSwapHidden.type="hidden";f.element=h;f.element.id=""},initNumeralFormatter:function(){var f=this,g=f.properties;if(!g.numeral){return}g.numeralFormatter=new d.NumeralFormatter(g.numeralDecimalMark,g.numeralIntegerScale,g.numeralDecimalScale,g.numeralThousandsGroupStyle,g.numeralPositiveOnly,g.stripLeadingZeroes,g.prefix,g.signBeforePrefix,g.tailPrefix,g.delimiter)},initTimeFormatter:function(){var f=this,g=f.properties;if(!g.time){return}g.timeFormatter=new d.TimeFormatter(g.timePattern,g.timeFormat);g.blocks=g.timeFormatter.getBlocks();g.blocksLength=g.blocks.length;g.maxLength=d.Util.getMaxLength(g.blocks)},initDateFormatter:function(){var f=this,g=f.properties;if(!g.date){return}g.dateFormatter=new d.DateFormatter(g.datePattern,g.dateMin,g.dateMax);g.blocks=g.dateFormatter.getBlocks();g.blocksLength=g.blocks.length;g.maxLength=d.Util.getMaxLength(g.blocks)},initPhoneFormatter:function(){var f=this,g=f.properties;if(!g.phone){return}try{g.phoneFormatter=new d.PhoneFormatter(new g.root.Cleave.AsYouTypeFormatter(g.phoneRegionCode),g.delimiter)}catch(h){throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")}},onKeyDown:function(h){var f=this,g=h.which||h.keyCode;f.lastInputValue=f.element.value;f.isBackward=g===8},onChange:function(h){var f=this,g=f.properties,j=d.Util;f.isBackward=f.isBackward||h.inputType==="deleteContentBackward";var i=j.getPostDelimiter(f.lastInputValue,g.delimiter,g.delimiters);if(f.isBackward&&i){g.postDelimiterBackspace=i}else{g.postDelimiterBackspace=false}this.onInput(this.element.value)},onFocus:function(){var f=this,g=f.properties;f.lastInputValue=f.element.value;if(g.prefix&&g.noImmediatePrefix&&!f.element.value){this.onInput(g.prefix)}d.Util.fixPrefixCursor(f.element,g.prefix,g.delimiter,g.delimiters)},onCut:function(f){if(!d.Util.checkFullSelection(this.element.value)){return}this.copyClipboardData(f);this.onInput("")},onCopy:function(f){if(!d.Util.checkFullSelection(this.element.value)){return}this.copyClipboardData(f)},copyClipboardData:function(k){var g=this,h=g.properties,l=d.Util,f=g.element.value,j="";if(!h.copyDelimiter){j=l.stripDelimiters(f,h.delimiter,h.delimiters)}else{j=f}try{if(k.clipboardData){k.clipboardData.setData("Text",j)}else{window.clipboardData.setData("Text",j)}k.preventDefault()}catch(i){}},onInput:function(h){var f=this,g=f.properties,j=d.Util;var i=j.getPostDelimiter(h,g.delimiter,g.delimiters);if(!g.numeral&&g.postDelimiterBackspace&&!i){h=j.headStr(h,h.length-g.postDelimiterBackspace.length)}if(g.phone){if(g.prefix&&(!g.noImmediatePrefix||h.length)){g.result=g.prefix+g.phoneFormatter.format(h).slice(g.prefix.length)}else{g.result=g.phoneFormatter.format(h)}f.updateValueState();return}if(g.numeral){if(g.prefix&&g.noImmediatePrefix&&h.length===0){g.result=""}else{g.result=g.numeralFormatter.format(h)}f.updateValueState();return}if(g.date){h=g.dateFormatter.getValidatedDate(h)}if(g.time){h=g.timeFormatter.getValidatedTime(h)}h=j.stripDelimiters(h,g.delimiter,g.delimiters);h=j.getPrefixStrippedValue(h,g.prefix,g.prefixLength,g.result,g.delimiter,g.delimiters,g.noImmediatePrefix,g.tailPrefix,g.signBeforePrefix);h=g.numericOnly?j.strip(h,/[^\d]/g):h;h=g.uppercase?h.toUpperCase():h;h=g.lowercase?h.toLowerCase():h;if(g.prefix){if(g.tailPrefix){h=h+g.prefix}else{h=g.prefix+h}if(g.blocksLength===0){g.result=h;f.updateValueState();return}}if(g.creditCard){f.updateCreditCardPropsByValue(h)}h=j.headStr(h,g.maxLength);g.result=j.getFormattedValue(h,g.blocks,g.blocksLength,g.delimiter,g.delimiters,g.delimiterLazyShow);f.updateValueState()},updateCreditCardPropsByValue:function(i){var f=this,g=f.properties,j=d.Util,h;if(j.headStr(g.result,4)===j.headStr(i,4)){return}h=d.CreditCardDetector.getInfo(i,g.creditCardStrictMode);g.blocks=h.blocks;g.blocksLength=g.blocks.length;g.maxLength=j.getMaxLength(g.blocks);if(g.creditCardType!==h.type){g.creditCardType=h.type;g.onCreditCardTypeChanged.call(f,g.creditCardType)}},updateValueState:function(){var f=this,k=d.Util,g=f.properties;if(!f.element){return}var i=f.element.selectionEnd;var h=f.element.value;var j=g.result;i=k.getNextCursorPosition(i,h,j,g.delimiter,g.delimiters);if(f.isAndroid){window.setTimeout(function(){f.element.value=j;k.setSelection(f.element,i,g.document,false);f.callOnValueChanged()},1);return}f.element.value=j;if(g.swapHiddenInput){f.elementSwapHidden.value=f.getRawValue()}k.setSelection(f.element,i,g.document,false);f.callOnValueChanged()},callOnValueChanged:function(){var f=this,g=f.properties;g.onValueChanged.call(f,{target:{name:f.element.name,value:g.result,rawValue:f.getRawValue()}})},setPhoneRegionCode:function(h){var f=this,g=f.properties;g.phoneRegionCode=h;f.initPhoneFormatter();f.onChange()},setRawValue:function(h){var f=this,g=f.properties;h=h!==undefined&&h!==null?h.toString():"";if(g.numeral){h=h.replace(".",g.numeralDecimalMark)}g.postDelimiterBackspace=false;f.element.value=h;f.onInput(h)},getRawValue:function(){var f=this,g=f.properties,i=d.Util,h=f.element.value;if(g.rawValueTrimPrefix){h=i.getPrefixStrippedValue(h,g.prefix,g.prefixLength,g.result,g.delimiter,g.delimiters,g.noImmediatePrefix,g.tailPrefix,g.signBeforePrefix)}if(g.numeral){h=g.numeralFormatter.getRawValue(h)}else{h=i.stripDelimiters(h,g.delimiter,g.delimiters)}return h},getISOFormatDate:function(){var f=this,g=f.properties;return g.date?g.dateFormatter.getISOFormatDate():""},getISOFormatTime:function(){var f=this,g=f.properties;return g.time?g.timeFormatter.getISOFormatTime():""},getFormattedValue:function(){return this.element.value},destroy:function(){var f=this;f.element.removeEventListener("input",f.onChangeListener);f.element.removeEventListener("keydown",f.onKeyDownListener);f.element.removeEventListener("focus",f.onFocusListener);f.element.removeEventListener("cut",f.onCutListener);f.element.removeEventListener("copy",f.onCopyListener)},toString:function(){return"[Cleave Object]"}};d.NumeralFormatter=c(1);d.DateFormatter=c(2);d.TimeFormatter=c(3);d.PhoneFormatter=c(4);d.CreditCardDetector=c(5);d.Util=c(6);d.DefaultProperties=c(7);((typeof e==="object"&&e)?e:window)["Cleave"]=d;b.exports=d}.call(a,(function(){return this}())))}),(function(b,a){var c=function(j,m,g,l,k,i,h,f,n,d){var e=this;e.numeralDecimalMark=j||".";e.numeralIntegerScale=m>0?m:0;e.numeralDecimalScale=g>=0?g:2;e.numeralThousandsGroupStyle=l||c.groupStyle.thousand;e.numeralPositiveOnly=!!k;e.stripLeadingZeroes=i!==false;e.prefix=(h||h==="")?h:"";e.signBeforePrefix=!!f;e.tailPrefix=!!n;e.delimiter=(d||d==="")?d:",";e.delimiterRE=d?new RegExp("\\"+d,"g"):""};c.groupStyle={thousand:"thousand",lakh:"lakh",wan:"wan",none:"none"};c.prototype={getRawValue:function(d){return d.replace(this.delimiterRE,"").replace(this.numeralDecimalMark,".")},format:function(h){var f=this,j,e,i,g,d="";h=h.replace(/[A-Za-z]/g,"").replace(f.numeralDecimalMark,"M").replace(/[^\dM-]/g,"").replace(/^\-/,"N").replace(/\-/g,"").replace("N",f.numeralPositiveOnly?"":"-").replace("M",f.numeralDecimalMark);if(f.stripLeadingZeroes){h=h.replace(/^(-)?0+(?=\d)/,"$1")}e=h.slice(0,1)==="-"?"-":"";if(typeof f.prefix!="undefined"){if(f.signBeforePrefix){i=e+f.prefix}else{i=f.prefix+e}}else{i=e}g=h;if(h.indexOf(f.numeralDecimalMark)>=0){j=h.split(f.numeralDecimalMark);g=j[0];d=f.numeralDecimalMark+j[1].slice(0,f.numeralDecimalScale)}if(e==="-"){g=g.slice(1)}if(f.numeralIntegerScale>0){g=g.slice(0,f.numeralIntegerScale)}switch(f.numeralThousandsGroupStyle){case c.groupStyle.lakh:g=g.replace(/(\d)(?=(\d\d)+\d$)/g,"$1"+f.delimiter);break;case c.groupStyle.wan:g=g.replace(/(\d)(?=(\d{4})+$)/g,"$1"+f.delimiter);break;case c.groupStyle.thousand:g=g.replace(/(\d)(?=(\d{3})+$)/g,"$1"+f.delimiter);break}if(f.tailPrefix){return e+g.toString()+(f.numeralDecimalScale>0?d.toString():"")+f.prefix}return i+g.toString()+(f.numeralDecimalScale>0?d.toString():"")}};b.exports=c}),(function(c,b){var a=function(e,g,f){var d=this;d.date=[];d.blocks=[];d.datePattern=e;d.dateMin=g.split("-").reverse().map(function(h){return parseInt(h,10)});if(d.dateMin.length===2){d.dateMin.unshift(0)}d.dateMax=f.split("-").reverse().map(function(h){return parseInt(h,10)});if(d.dateMax.length===2){d.dateMax.unshift(0)}d.initBlocks()};a.prototype={initBlocks:function(){var d=this;d.datePattern.forEach(function(e){if(e==="Y"){d.blocks.push(4)}else{d.blocks.push(2)}})},getISOFormatDate:function(){var d=this,e=d.date;return e[2]?(e[2]+"-"+d.addLeadingZero(e[1])+"-"+d.addLeadingZero(e[0])):""},getBlocks:function(){return this.blocks},getValidatedDate:function(f){var e=this,d="";f=f.replace(/[^\d]/g,"");e.blocks.forEach(function(k,g){if(f.length>0){var j=f.slice(0,k),i=j.slice(0,1),h=f.slice(k);switch(e.datePattern[g]){case"d":if(j==="00"){j="01"}else{if(parseInt(i,10)>3){j="0"+i}else{if(parseInt(j,10)>31){j="31"}}}break;case"m":if(j==="00"){j="01"}else{if(parseInt(i,10)>1){j="0"+i}else{if(parseInt(j,10)>12){j="12"}}}break}d+=j;f=h}});return this.getFixedDateString(d)},getFixedDateString:function(q){var h=this,g=h.datePattern,j=[],d=0,k=0,f=0,i=0,p=0,n=0,o,l,m,e=false;if(q.length===4&&g[0].toLowerCase()!=="y"&&g[1].toLowerCase()!=="y"){i=g[0]==="d"?0:2;p=2-i;o=parseInt(q.slice(i,i+2),10);l=parseInt(q.slice(p,p+2),10);j=this.getFixedDate(o,l,0)}if(q.length===8){g.forEach(function(t,s){switch(t){case"d":d=s;break;case"m":k=s;break;default:f=s;break}});n=f*2;i=(d<=f)?d*2:(d*2+2);p=(k<=f)?k*2:(k*2+2);o=parseInt(q.slice(i,i+2),10);l=parseInt(q.slice(p,p+2),10);m=parseInt(q.slice(n,n+4),10);e=q.slice(n,n+4).length===4;j=this.getFixedDate(o,l,m)}if(q.length===4&&(g[0]==="y"||g[1]==="y")){p=g[0]==="m"?0:2;n=2-p;l=parseInt(q.slice(p,p+2),10);m=parseInt(q.slice(n,n+2),10);e=q.slice(n,n+2).length===2;j=[0,l,m]}if(q.length===6&&(g[0]==="Y"||g[1]==="Y")){p=g[0]==="m"?0:4;n=2-0.5*p;l=parseInt(q.slice(p,p+2),10);m=parseInt(q.slice(n,n+4),10);e=q.slice(n,n+4).length===4;j=[0,l,m]}j=h.getRangeFixedDate(j);h.date=j;var r=j.length===0?q:g.reduce(function(s,t){switch(t){case"d":return s+(j[0]===0?"":h.addLeadingZero(j[0]));case"m":return s+(j[1]===0?"":h.addLeadingZero(j[1]));case"y":return s+(e?h.addLeadingZeroForYear(j[2],false):"");case"Y":return s+(e?h.addLeadingZeroForYear(j[2],true):"")}},"");return r},getRangeFixedDate:function(f){var d=this,e=d.datePattern,h=d.dateMin||[],g=d.dateMax||[];if(!f.length||(h.length<3&&g.length<3)){return f}if(e.find(function(i){return i.toLowerCase()==="y"})&&f[2]===0){return f}if(g.length&&(g[2]<f[2]||(g[2]===f[2]&&(g[1]<f[1]||(g[1]===f[1]&&g[0]<f[0]))))){return g}if(h.length&&(h[2]>f[2]||(h[2]===f[2]&&(h[1]>f[1]||(h[1]===f[1]&&h[0]>f[0]))))){return h}return f},getFixedDate:function(d,f,e){d=Math.min(d,31);f=Math.min(f,12);e=parseInt((e||0),10);if((f<7&&f%2===0)||(f>8&&f%2===1)){d=Math.min(d,f===2?(this.isLeapYear(e)?29:28):30)}return[d,f,e]},isLeapYear:function(d){return((d%4===0)&&(d%100!==0))||(d%400===0)},addLeadingZero:function(d){return(d<10?"0":"")+d},addLeadingZeroForYear:function(d,e){if(e){return(d<10?"000":(d<100?"00":(d<1000?"0":"")))+d}return(d<10?"0":"")+d}};c.exports=a}),(function(b,a){var c=function(e,f){var d=this;d.time=[];d.blocks=[];d.timePattern=e;d.timeFormat=f;d.initBlocks()};c.prototype={initBlocks:function(){var d=this;d.timePattern.forEach(function(){d.blocks.push(2)})},getISOFormatTime:function(){var d=this,e=d.time;return e[2]?(d.addLeadingZero(e[0])+":"+d.addLeadingZero(e[1])+":"+d.addLeadingZero(e[2])):""},getBlocks:function(){return this.blocks},getTimeFormatOptions:function(){var d=this;if(String(d.timeFormat)==="12"){return{maxHourFirstDigit:1,maxHours:12,maxMinutesFirstDigit:5,maxMinutes:60}}return{maxHourFirstDigit:2,maxHours:23,maxMinutesFirstDigit:5,maxMinutes:60}},getValidatedTime:function(g){var e=this,d="";g=g.replace(/[^\d]/g,"");var f=e.getTimeFormatOptions();e.blocks.forEach(function(l,h){if(g.length>0){var k=g.slice(0,l),j=k.slice(0,1),i=g.slice(l);switch(e.timePattern[h]){case"h":if(parseInt(j,10)>f.maxHourFirstDigit){k="0"+j}else{if(parseInt(k,10)>f.maxHours){k=f.maxHours+""}}break;case"m":case"s":if(parseInt(j,10)>f.maxMinutesFirstDigit){k="0"+j}else{if(parseInt(k,10)>f.maxMinutes){k=f.maxMinutes+""}}break}d+=k;g=i}});return this.getFixedTimeString(d)},getFixedTimeString:function(m){var e=this,p=e.timePattern,g=[],d=0,j=0,n=0,k=0,o=0,l=0,f,h,i;if(m.length===6){p.forEach(function(r,q){switch(r){case"s":d=q*2;break;case"m":j=q*2;break;case"h":n=q*2;break}});l=n;o=j;k=d;f=parseInt(m.slice(k,k+2),10);h=parseInt(m.slice(o,o+2),10);i=parseInt(m.slice(l,l+2),10);g=this.getFixedTime(i,h,f)}if(m.length===4&&e.timePattern.indexOf("s")<0){p.forEach(function(r,q){switch(r){case"m":j=q*2;break;case"h":n=q*2;break}});l=n;o=j;f=0;h=parseInt(m.slice(o,o+2),10);i=parseInt(m.slice(l,l+2),10);g=this.getFixedTime(i,h,f)}e.time=g;return g.length===0?m:p.reduce(function(q,r){switch(r){case"s":return q+e.addLeadingZero(g[2]);case"m":return q+e.addLeadingZero(g[1]);case"h":return q+e.addLeadingZero(g[0])}},"")},getFixedTime:function(d,f,e){e=Math.min(parseInt(e||0,10),60);f=Math.min(f,60);d=Math.min(d,60);return[d,f,e]},addLeadingZero:function(d){return(d<10?"0":"")+d}};b.exports=c}),(function(c,b){var a=function(f,e){var d=this;d.delimiter=(e||e==="")?e:" ";d.delimiterRE=e?new RegExp("\\"+e,"g"):"";d.formatter=f};a.prototype={setFormatter:function(d){this.formatter=d},format:function(g){var f=this;f.formatter.clear();g=g.replace(/[^\d+]/g,"");g=g.replace(/^\+/,"B").replace(/\+/g,"").replace("B","+");g=g.replace(f.delimiterRE,"");var e="",j,k=false;for(var h=0,d=g.length;h<d;h++){j=f.formatter.inputDigit(g.charAt(h));if(/[\s()-]/g.test(j)){e=j;k=true}else{if(!k){e=j}}}e=e.replace(/[()]/g,"");e=e.replace(/[\s-]/g,f.delimiter);return e}};c.exports=a}),(function(c,a){var b={blocks:{uatp:[15],amex:[15],diners:[14],discover:[16],mastercard:[16],dankort:[16],instapayment:[16],jcb15:[15],jcb:[16],maestro:[16],visa:[16],mir:[16],unionPay:[16],general:[16]},re:{uatp:/^(?!1800)1\d{0,14}/,amex:/^3[47]\d{0,13}/,discover:/^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,diners:/^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,mastercard:/^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,dankort:/^(5019|4175|4571)\d{0,12}/,instapayment:/^63[7-9]\d{0,13}/,jcb15:/^(?:2131|1800)\d{0,11}/,jcb:/^(?:35\d{0,2})\d{0,12}/,maestro:/^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,mir:/^220[0-4]\d{0,12}/,visa:/^4\d{0,15}/,unionPay:/^(62|81)\d{0,14}/},getStrictBlocks:function(e){var d=e.reduce(function(f,g){return f+g},0);return e.concat(19-d)},getInfo:function(g,f){var i=b.blocks,e=b.re;f=!!f;for(var d in e){if(e[d].test(g)){var h=i[d];return{type:d,blocks:f?this.getStrictBlocks(h):h}}}return{type:"unknown",blocks:f?this.getStrictBlocks(i.general):i.general}}};c.exports=b}),(function(b,a){var c={noop:function(){},strip:function(e,d){return e.replace(d,"")},getPostDelimiter:function(f,d,g){if(g.length===0){return f.slice(-d.length)===d?d:""}var e="";g.forEach(function(h){if(f.slice(-h.length)===h){e=h}});return e},getDelimiterREByDelimiter:function(d){return new RegExp(d.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),"g")},getNextCursorPosition:function(d,f,g,e,h){if(f.length===d){return g.length}return d+this.getPositionOffset(d,f,g,e,h)},getPositionOffset:function(e,i,j,h,k){var f,d,g;f=this.stripDelimiters(i.slice(0,e),h,k);d=this.stripDelimiters(j.slice(0,e),h,k);g=f.length-d.length;return(g!==0)?(g/Math.abs(g)):0},stripDelimiters:function(f,e,h){var d=this;if(h.length===0){var g=e?d.getDelimiterREByDelimiter(e):"";return f.replace(g,"")}h.forEach(function(i){i.split("").forEach(function(j){f=f.replace(d.getDelimiterREByDelimiter(j),"")})});return f},headStr:function(e,d){return e.slice(0,d)},getMaxLength:function(d){return d.reduce(function(e,f){return e+f},0)},getPrefixStrippedValue:function(m,h,j,g,d,k,l,n,f){if(j===0){return m}if(m===h&&m!==""){return""}if(f&&(m.slice(0,1)=="-")){var e=(g.slice(0,1)=="-")?g.slice(1):g;return"-"+this.getPrefixStrippedValue(m.slice(1),h,j,e,d,k,l,n,f)}if(g.slice(0,j)!==h&&!n){if(l&&!g&&m){return m}return""}else{if(g.slice(-j)!==h&&n){if(l&&!g&&m){return m}return""}}var i=this.stripDelimiters(g,d,k);if(m.slice(0,j)!==h&&!n){return i.slice(j)}else{if(m.slice(-j)!==h&&n){return i.slice(0,-j-1)}}return n?m.slice(0,-j):m.slice(j)},getFirstDiffIndex:function(e,f){var d=0;while(e.charAt(d)===f.charAt(d)){if(e.charAt(d++)===""){return -1}}return d},getFormattedValue:function(i,d,f,e,h,k){var l="",g=h.length>0,j="";if(f===0){return i}d.forEach(function(p,m){if(i.length>0){var o=i.slice(0,p),n=i.slice(p);if(g){j=h[k?(m-1):m]||j}else{j=e}if(k){if(m>0){l+=j}l+=o}else{l+=o;if(o.length===p&&m<f-1){l+=j}}i=n}});return l},fixPrefixCursor:function(g,h,e,j){if(!g){return}var i=g.value,f=e||(j[0]||" ");if(!g.setSelectionRange||!h||(h.length+f.length)<=i.length){return}var d=i.length*2;setTimeout(function(){g.setSelectionRange(d,d)},1)},checkFullSelection:function(f){try{var e=window.getSelection()||document.getSelection()||{};return e.toString().length===f.length}catch(d){}return false},setSelection:function(g,d,i){if(g!==this.getActiveElement(i)){return}if(g&&g.value.length<=d){return}if(g.createTextRange){var f=g.createTextRange();f.move("character",d);f.select()}else{try{g.setSelectionRange(d,d)}catch(h){console.warn("The input element type does not support selection")}}},getActiveElement:function(d){var e=d.activeElement;if(e&&e.shadowRoot){return this.getActiveElement(e.shadowRoot)}return e},isAndroid:function(){return navigator&&/android/i.test(navigator.userAgent)},isAndroidBackspaceKeydown:function(e,d){if(!this.isAndroid()||!e||!d){return false}return d===e.slice(0,-1)}};b.exports=c}),(function(b,a){(function(d){var c={assign:function(f,e){f=f||{};e=e||{};f.creditCard=!!e.creditCard;f.creditCardStrictMode=!!e.creditCardStrictMode;f.creditCardType="";f.onCreditCardTypeChanged=e.onCreditCardTypeChanged||(function(){});f.phone=!!e.phone;f.phoneRegionCode=e.phoneRegionCode||"AU";f.phoneFormatter={};f.time=!!e.time;f.timePattern=e.timePattern||["h","m","s"];f.timeFormat=e.timeFormat||"24";f.timeFormatter={};f.date=!!e.date;f.datePattern=e.datePattern||["d","m","Y"];f.dateMin=e.dateMin||"";f.dateMax=e.dateMax||"";f.dateFormatter={};f.numeral=!!e.numeral;f.numeralIntegerScale=e.numeralIntegerScale>0?e.numeralIntegerScale:0;f.numeralDecimalScale=e.numeralDecimalScale>=0?e.numeralDecimalScale:2;f.numeralDecimalMark=e.numeralDecimalMark||".";f.numeralThousandsGroupStyle=e.numeralThousandsGroupStyle||"thousand";f.numeralPositiveOnly=!!e.numeralPositiveOnly;f.stripLeadingZeroes=e.stripLeadingZeroes!==false;f.signBeforePrefix=!!e.signBeforePrefix;f.tailPrefix=!!e.tailPrefix;f.swapHiddenInput=!!e.swapHiddenInput;f.numericOnly=f.creditCard||f.date||!!e.numericOnly;f.uppercase=!!e.uppercase;f.lowercase=!!e.lowercase;f.prefix=(f.creditCard||f.date)?"":(e.prefix||"");f.noImmediatePrefix=!!e.noImmediatePrefix;f.prefixLength=f.prefix.length;f.rawValueTrimPrefix=!!e.rawValueTrimPrefix;f.copyDelimiter=!!e.copyDelimiter;f.initValue=(e.initValue!==undefined&&e.initValue!==null)?e.initValue.toString():"";f.delimiter=(e.delimiter||e.delimiter==="")?e.delimiter:(e.date?"/":(e.time?":":(e.numeral?",":(e.phone?" ":" "))));f.delimiterLength=f.delimiter.length;f.delimiterLazyShow=!!e.delimiterLazyShow;f.delimiters=e.delimiters||[];f.blocks=e.blocks||[];f.blocksLength=f.blocks.length;f.root=(typeof d==="object"&&d)?d:window;f.document=e.document||f.root.document;f.maxLength=0;f.backspace=false;f.result="";f.onValueChanged=e.onValueChanged||(function(){});return f}};b.exports=c}.call(a,(function(){return this}())))})])});;var Datepicker=function(){"use strict";function e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t(e){return e[e.length-1]}function i(e,...t){return t.forEach(t=>{e.includes(t)||e.push(t)}),e}function s(e,t){return e?e.split(t):[]}function a(e,t,i){return(void 0===t||e>=t)&&(void 0===i||e<=i)}function n(e,t,i){return e<t?t:e>i?i:e}function r(e,t,i={},s=0,a=""){a+=`<${Object.keys(i).reduce((e,t)=>{let a=i[t];return"function"==typeof a&&(a=a(s)),`${e} ${t}="${a}"`},e)}></${e}>`;const n=s+1;return n<t?r(e,t,i,n,a):a}function d(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}function o(e){return new Date(e).setHours(0,0,0,0)}function c(){return(new Date).setHours(0,0,0,0)}function l(...e){switch(e.length){case 0:return c();case 1:return o(e[0])}const t=new Date(0);return t.setFullYear(...e),t.setHours(0,0,0,0)}function h(e,t){const i=new Date(e);return i.setDate(i.getDate()+t)}function u(e,t){const i=new Date(e),s=i.getMonth()+t;let a=s%12;a<0&&(a+=12);const n=i.setMonth(s);return i.getMonth()!==a?i.setDate(0):n}function f(e,t){const i=new Date(e),s=i.getMonth(),a=i.setFullYear(i.getFullYear()+t);return 1===s&&2===i.getMonth()?i.setDate(0):a}function p(e,t){return(e-t+7)%7}function m(e,t,i=0){const s=new Date(e).getDay();return h(e,p(t,i)-p(s,i))}function g(e,t){const i=new Date(e).getFullYear();return Math.floor(i/t)*t}const w=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,y=/[\s!-\/:-@[-`{-~年月日]+/;let k={};const D={y:(e,t)=>new Date(e).setFullYear(parseInt(t,10)),m(e,t,i){const s=new Date(e);let a=parseInt(t,10)-1;if(isNaN(a)){if(!t)return NaN;const e=t.toLowerCase(),s=t=>t.toLowerCase().startsWith(e);if((a=i.monthsShort.findIndex(s))<0&&(a=i.months.findIndex(s)),a<0)return NaN}return s.setMonth(a),s.getMonth()!==function e(t){return t>-1?t%12:e(t+12)}(a)?s.setDate(0):s.getTime()},d:(e,t)=>new Date(e).setDate(parseInt(t,10))},v={d:e=>e.getDate(),dd:e=>b(e.getDate(),2),D:(e,t)=>t.daysShort[e.getDay()],DD:(e,t)=>t.days[e.getDay()],m:e=>e.getMonth()+1,mm:e=>b(e.getMonth()+1,2),M:(e,t)=>t.monthsShort[e.getMonth()],MM:(e,t)=>t.months[e.getMonth()],y:e=>e.getFullYear(),yy:e=>b(e.getFullYear(),2).slice(-2),yyyy:e=>b(e.getFullYear(),4)};function b(e,t){return e.toString().padStart(t,"0")}function x(e){if("string"!=typeof e)throw new Error("Invalid date format.");if(e in k)return k[e];const i=e.split(w),s=e.match(new RegExp(w,"g"));if(0===i.length||!s)throw new Error("Invalid date format.");const a=s.map(e=>v[e]),n=Object.keys(D).reduce((e,t)=>{return s.find(e=>"D"!==e[0]&&e[0].toLowerCase()===t)&&e.push(t),e},[]);return k[e]={parser(e,t){const i=e.split(y).reduce((e,t,i)=>{if(t.length>0&&s[i]){const a=s[i][0];"M"===a?e.m=t:"D"!==a&&(e[a]=t)}return e},{});return n.reduce((e,s)=>{const a=D[s](e,i[s],t);return isNaN(a)?e:a},c())},formatter:(e,s)=>a.reduce((t,a,n)=>t+`${i[n]}${a(e,s)}`,"")+t(i)}}function M(e,t,i){if(e instanceof Date||"number"==typeof e){const t=o(e);return isNaN(t)?void 0:t}if(e){if("today"===e)return c();if(t&&t.toValue){const s=t.toValue(e,t,i);return isNaN(s)?void 0:o(s)}return x(t).parser(e,i)}}function S(e,t,i){if(isNaN(e)||!e&&0!==e)return"";const s="number"==typeof e?new Date(e):e;return t.toDisplay?t.toDisplay(s,t,i):x(t).formatter(s,i)}const C=new WeakMap,{addEventListener:O,removeEventListener:E}=EventTarget.prototype;function F(e,t){let i=C.get(e);i||(i=[],C.set(e,i)),t.forEach(e=>{O.call(...e),i.push(e)})}if(!Event.prototype.composedPath){const e=(t,i=[])=>{let s;return i.push(t),t.parentNode?s=t.parentNode:t.host?s=t.host:t.defaultView&&(s=t.defaultView),s?e(s,i):i};Event.prototype.composedPath=function(){return e(this.target)}}function V(e,t){const i="function"==typeof t?t:e=>e.matches(t);return function e(t,i,s,a=0){const n=t[a];return i(n)?n:n!==s&&n.parentElement?e(t,i,s,a+1):void 0}(e.composedPath(),i,e.currentTarget)}const N={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Close",titleFormat:"MM y"}},L={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},B=document.createRange();function A(e){return B.createContextualFragment(e)}function Y(e){"none"!==e.style.display&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function W(e){"none"===e.style.display&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function K(e){e.firstChild&&(e.removeChild(e.firstChild),K(e))}const{language:T,format:H,weekStart:$}=L;function j(e,t){return e.length<6&&t>=0&&t<7?i(e,t):e}function _(e){return(e+6)%7}function I(e,t,i,s){const a=M(e,t,i);return void 0!==a?a:s}function P(e,t,i=3){const s=parseInt(e,10);return s>=0&&s<=i?s:t}function q(t,s){const a=Object.assign({},t),n={},r=s.constructor.locales;let{format:d,language:o,locale:c,maxDate:h,maxView:u,minDate:f,pickLevel:p,startView:m,weekStart:g}=s.config||{};if(a.language){let e;if(a.language!==o&&(r[a.language]?e=a.language:void 0===r[e=a.language.split("-")[0]]&&(e=!1)),delete a.language,e){o=n.language=e;const t=c||r[T];c=Object.assign({format:H,weekStart:$},r[T]),o!==T&&Object.assign(c,r[o]),n.locale=c,d===t.format&&(d=n.format=c.format),g===t.weekStart&&(g=n.weekStart=c.weekStart,n.weekEnd=_(c.weekStart))}}if(a.format){const e="function"==typeof a.format.toDisplay,t="function"==typeof a.format.toValue,i=w.test(a.format);(e&&t||i)&&(d=n.format=a.format),delete a.format}let y=f,k=h;if(void 0!==a.minDate&&(y=null===a.minDate?l(0,0,1):I(a.minDate,d,c,y),delete a.minDate),void 0!==a.maxDate&&(k=null===a.maxDate?void 0:I(a.maxDate,d,c,k),delete a.maxDate),k<y?(f=n.minDate=k,h=n.maxDate=y):(f!==y&&(f=n.minDate=y),h!==k&&(h=n.maxDate=k)),a.datesDisabled&&(n.datesDisabled=a.datesDisabled.reduce((e,t)=>{const s=M(t,d,c);return void 0!==s?i(e,s):e},[]),delete a.datesDisabled),void 0!==a.defaultViewDate){const e=M(a.defaultViewDate,d,c);void 0!==e&&(n.defaultViewDate=e),delete a.defaultViewDate}if(void 0!==a.weekStart){const e=Number(a.weekStart)%7;isNaN(e)||(g=n.weekStart=e,n.weekEnd=_(e)),delete a.weekStart}if(a.daysOfWeekDisabled&&(n.daysOfWeekDisabled=a.daysOfWeekDisabled.reduce(j,[]),delete a.daysOfWeekDisabled),a.daysOfWeekHighlighted&&(n.daysOfWeekHighlighted=a.daysOfWeekHighlighted.reduce(j,[]),delete a.daysOfWeekHighlighted),void 0!==a.maxNumberOfDates){const e=parseInt(a.maxNumberOfDates,10);e>=0&&(n.maxNumberOfDates=e,n.multidate=1!==e),delete a.maxNumberOfDates}a.dateDelimiter&&(n.dateDelimiter=String(a.dateDelimiter),delete a.dateDelimiter);let D=p;void 0!==a.pickLevel&&(D=P(a.pickLevel,2),delete a.pickLevel),D!==p&&(p=n.pickLevel=D);let v=u;void 0!==a.maxView&&(v=P(a.maxView,u),delete a.maxView),(v=p>v?p:v)!==u&&(u=n.maxView=v);let b=m;if(void 0!==a.startView&&(b=P(a.startView,b),delete a.startView),b<p?b=p:b>u&&(b=u),b!==m&&(n.startView=b),a.prevArrow){const e=A(a.prevArrow);e.childNodes.length>0&&(n.prevArrow=e.childNodes),delete a.prevArrow}if(a.nextArrow){const e=A(a.nextArrow);e.childNodes.length>0&&(n.nextArrow=e.childNodes),delete a.nextArrow}if(void 0!==a.disableTouchKeyboard&&(n.disableTouchKeyboard="ontouchstart"in document&&!!a.disableTouchKeyboard,delete a.disableTouchKeyboard),a.orientation){const e=a.orientation.toLowerCase().split(/\s+/g);n.orientation={x:e.find(e=>"left"===e||"right"===e)||"auto",y:e.find(e=>"top"===e||"bottom"===e)||"auto"},delete a.orientation}if(void 0!==a.todayBtnMode){switch(a.todayBtnMode){case 0:case 1:n.todayBtnMode=a.todayBtnMode}delete a.todayBtnMode}return Object.keys(a).forEach(t=>{void 0!==a[t]&&e(L,t)&&(n[t]=a[t])}),n}const J=d('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'),R=d(`<div class="days">\n  <div class="days-of-week">${r("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${r("span",42)}</div>\n</div>`),U=d(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${r("span",6,{class:"week"})}</div>\n</div>`);class z{constructor(e,t){Object.assign(this,t,{picker:e,element:A('<div class="datepicker-view"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}init(e){void 0!==e.pickLevel&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}performBeforeHook(e,t,s){let a=this.beforeShow(new Date(s));switch(typeof a){case"boolean":a={enabled:a};break;case"string":a={classes:a}}if(a){if(!1===a.enabled&&(e.classList.add("disabled"),i(this.disabled,t)),a.classes){const s=a.classes.split(/\s+/);e.classList.add(...s),s.includes("disabled")&&i(this.disabled,t)}a.content&&function(e,t){K(e),t instanceof DocumentFragment?e.appendChild(t):"string"==typeof t?e.appendChild(A(t)):"function"==typeof t.forEach&&t.forEach(t=>{e.appendChild(t)})}(e,a.content)}}}class X extends z{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const e=A(R).firstChild;this.dow=e.firstChild,this.grid=e.lastChild,this.element.appendChild(e)}super.init(e)}setOptions(t){let i;if(e(t,"minDate")&&(this.minDate=t.minDate),e(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,i=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,i=!0),t.locale){const e=this.locale=t.locale;this.dayNames=e.daysMin,this.switchLabelFormat=e.titleFormat,i=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const e=A(U).firstChild;this.calendarWeeks={element:e,dow:e.firstChild,weeks:e.lastChild},this.element.insertBefore(e,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(W(this.dow),this.calendarWeeks&&W(this.calendarWeeks.dow)):(Y(this.dow),this.calendarWeeks&&Y(this.calendarWeeks.dow))),i&&Array.from(this.dow.children).forEach((e,t)=>{const i=(this.weekStart+t)%7;e.textContent=this.dayNames[i],e.className=this.daysOfWeekDisabled.includes(i)?"dow disabled":"dow"})}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),s=l(t,i,1),a=m(s,this.weekStart,this.weekStart);this.first=s,this.last=l(t,i+1,0),this.start=a,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){this.today=this.todayHighlight?c():void 0,this.disabled=[...this.datesDisabled];const e=S(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(e),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const e=m(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach((t,i)=>{t.textContent=function(e){const t=m(e,4,1),i=m(new Date(t).setMonth(0,4),4,1);return Math.round((t-i)/6048e5)+1}(function(e,t){return h(e,7*t)}(e,i))})}Array.from(this.grid.children).forEach((e,t)=>{const s=e.classList,a=h(this.start,t),n=new Date(a),r=n.getDay();if(e.className=`datepicker-cell ${this.cellClass}`,e.dataset.date=a,e.textContent=n.getDate(),a<this.first?s.add("prev"):a>this.last&&s.add("next"),this.today===a&&s.add("today"),(a<this.minDate||a>this.maxDate||this.disabled.includes(a))&&s.add("disabled"),this.daysOfWeekDisabled.includes(r)&&(s.add("disabled"),i(this.disabled,a)),this.daysOfWeekHighlighted.includes(r)&&s.add("highlighted"),this.range){const[e,t]=this.range;a>e&&a<t&&s.add("range"),a===e&&s.add("range-start"),a===t&&s.add("range-end")}this.selected.includes(a)&&s.add("selected"),a===this.focused&&s.add("focused"),this.beforeShow&&this.performBeforeHook(e,a,a)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach(i=>{const s=Number(i.dataset.date),a=i.classList;s>e&&s<t&&a.add("range"),s===e&&a.add("range-start"),s===t&&a.add("range-end"),this.selected.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function G(e,t){if(!e||!e[0]||!e[1])return;const[[i,s],[a,n]]=e;return i>t||a<t?void 0:[i===t?s:-1,a===t?n:12]}class Q extends z{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(A(r("span",12,{"data-month":e=>e})))),super.init(e)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),e(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(e(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=l(this.maxYear,this.maxMonth+1,0)}void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((e,t)=>{const s=new Date(t),a=s.getFullYear(),n=s.getMonth();return void 0===e[a]?e[a]=[n]:i(e[a],n),e},{}),t&&t.dates&&(this.range=t.dates.map(e=>{const t=new Date(e);return isNaN(t)?void 0:[t.getFullYear(),t.getMonth()]}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,s=this.year===this.maxYear,a=G(this.range,this.year);Array.from(this.grid.children).forEach((n,r)=>{const d=n.classList,o=l(this.year,r,1);if(n.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(n.dataset.date=o),n.textContent=this.monthNames[r],(t||i&&r<this.minMonth||s&&r>this.maxMonth)&&d.add("disabled"),a){const[e,t]=a;r>e&&r<t&&d.add("range"),r===e&&d.add("range-start"),r===t&&d.add("range-end")}e.includes(r)&&d.add("selected"),r===this.focused&&d.add("focused"),this.beforeShow&&this.performBeforeHook(n,r,o)})}refresh(){const e=this.selected[this.year]||[],[t,i]=G(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach((s,a)=>{const n=s.classList;a>t&&a<i&&n.add("range"),a===t&&n.add("range-start"),a===i&&n.add("range-end"),e.includes(a)&&n.add("selected"),a===this.focused&&n.add("focused")})}refreshFocus(){this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[this.focused].classList.add("focused")}}class Z extends z{constructor(e,t){super(e,t)}init(e,t=!0){var i;t&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${i=this.cellClass,[...i].reduce((e,t,i)=>e+=i?t:t.toUpperCase(),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(A(r("span",12)))),super.init(e)}setOptions(t){if(e(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=g(t.minDate,this.step),this.minDate=l(this.minYear,0,1))),e(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=g(t.maxDate,this.step),this.maxDate=l(this.maxYear,11,31))),void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=g(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=g(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((e,t)=>i(e,g(t,this.step)),[]),t&&t.dates&&(this.range=t.dates.map(e=>{if(void 0!==e)return g(e,this.step)}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach((e,t)=>{const i=e.classList,s=this.start+t*this.step,a=l(s,0,1);if(e.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(e.dataset.date=a),e.textContent=e.dataset.year=s,0===t?i.add("prev"):11===t&&i.add("next"),(s<this.minYear||s>this.maxYear)&&i.add("disabled"),this.range){const[e,t]=this.range;s>e&&s<t&&i.add("range"),s===e&&i.add("range-start"),s===t&&i.add("range-end")}this.selected.includes(s)&&i.add("selected"),s===this.focused&&i.add("focused"),this.beforeShow&&this.performBeforeHook(e,s,a)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach(i=>{const s=Number(i.textContent),a=i.classList;s>e&&s<t&&a.add("range"),s===e&&a.add("range-start"),s===t&&a.add("range-end"),this.selected.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function ee(e,t){const i={date:e.getDate(),viewDate:new Date(e.picker.viewDate),viewId:e.picker.currentView.id,datepicker:e};e.element.dispatchEvent(new CustomEvent(t,{detail:i}))}function te(e,t){const{minDate:i,maxDate:s}=e.config,{currentView:a,viewDate:r}=e.picker;let d;switch(a.id){case 0:d=u(r,t);break;case 1:d=f(r,t);break;default:d=f(r,t*a.navStep)}d=n(d,i,s),e.picker.changeFocus(d).render()}function ie(e){const t=e.picker.currentView.id;t!==e.config.maxView&&e.picker.changeView(t+1).render()}function se(e){e.config.updateOnBlur?e.update({autohide:!0}):(e.refresh("input"),e.hide())}function ae(e,t){const i=e.picker,s=new Date(i.viewDate),a=i.currentView.id,n=1===a?u(s,t-s.getMonth()):f(s,t-s.getFullYear());i.changeFocus(n).changeView(a-1).render()}function ne(e){const t=e.picker,i=c();if(1===e.config.todayBtnMode){if(e.config.autohide)return void e.setDate(i);e.setDate(i,{render:!1}),t.update()}t.viewDate!==i&&t.changeFocus(i),t.changeView(0).render()}function re(e){e.hide()}function de(e){ie(e)}function oe(e){te(e,-1)}function ce(e){te(e,1)}function le(e,t){const i=V(t,".datepicker-cell");if(!i||i.classList.contains("disabled"))return;const{id:s,isMinView:a}=e.picker.currentView;a?e.setDate(Number(i.dataset.date)):ae(e,1===s?Number(i.dataset.month):Number(i.dataset.year))}function he(e){e.inline||e.config.disableTouchKeyboard||e.inputField.focus()}function ue(t,i){if(void 0!==i.title&&(i.title?(t.controls.title.textContent=i.title,W(t.controls.title)):(t.controls.title.textContent="",Y(t.controls.title))),i.prevArrow){const e=t.controls.prevBtn;K(e),i.prevArrow.forEach(t=>{e.appendChild(t.cloneNode(!0))})}if(i.nextArrow){const e=t.controls.nextBtn;K(e),i.nextArrow.forEach(t=>{e.appendChild(t.cloneNode(!0))})}if(i.locale&&(t.controls.todayBtn.textContent=i.locale.today,t.controls.clearBtn.textContent=i.locale.clear),void 0!==i.todayBtn&&(i.todayBtn?W(t.controls.todayBtn):Y(t.controls.todayBtn)),e(i,"minDate")||e(i,"maxDate")){const{minDate:e,maxDate:i}=t.datepicker.config;t.controls.todayBtn.disabled=!a(c(),e,i)}void 0!==i.clearBtn&&(i.clearBtn?W(t.controls.clearBtn):Y(t.controls.clearBtn))}function fe(e){const{dates:i,config:s}=e;return n(i.length>0?t(i):s.defaultViewDate,s.minDate,s.maxDate)}function pe(e,t){const i=new Date(e.viewDate),s=new Date(t),{id:a,year:n,first:r,last:d}=e.currentView,o=s.getFullYear();switch(e.viewDate=t,o!==i.getFullYear()&&ee(e.datepicker,"changeYear"),s.getMonth()!==i.getMonth()&&ee(e.datepicker,"changeMonth"),a){case 0:return t<r||t>d;case 1:return o!==n;default:return o<r||o>d}}function me(e){return window.getComputedStyle(e).direction}class ge{constructor(e){this.datepicker=e;const t=J.replace(/%buttonClass%/g,e.config.buttonClass),i=this.element=A(t).firstChild,[s,a,n]=i.firstChild.children,r=s.firstElementChild,[d,o,c]=s.lastElementChild.children,[l,h]=n.firstChild.children,u={title:r,prevBtn:d,viewSwitch:o,nextBtn:c,todayBtn:l,clearBtn:h};this.main=a,this.controls=u;const f=e.inline?"inline":"dropdown";i.classList.add(`datepicker-${f}`),ue(this,e.config),this.viewDate=fe(e),F(e,[[i,"click",he.bind(null,e),{capture:!0}],[a,"click",le.bind(null,e)],[u.viewSwitch,"click",de.bind(null,e)],[u.prevBtn,"click",oe.bind(null,e)],[u.nextBtn,"click",ce.bind(null,e)],[u.todayBtn,"click",ne.bind(null,e)],[u.clearBtn,"click",re.bind(null,e)]]),this.views=[new X(this),new Q(this),new Z(this,{id:2,name:"years",cellClass:"year",step:1}),new Z(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.config.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.config.container.appendChild(this.element)}setOptions(e){ue(this,e),this.views.forEach(t=>{t.init(e,!1)}),this.currentView.render()}detach(){this.datepicker.config.container.removeChild(this.element)}show(){if(this.active)return;this.element.classList.add("active"),this.active=!0;const e=this.datepicker;if(!e.inline){const t=me(e.inputField);t!==me(e.config.container)?this.element.dir=t:this.element.dir&&this.element.removeAttribute("dir"),this.place(),e.config.disableTouchKeyboard&&e.inputField.blur()}this.datepicker.element.classList.add("is-open"),ee(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,this.datepicker.element.classList.remove("is-open"),ee(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element,{config:i,inputField:s}=this.datepicker,a=i.container,{width:n,height:r}=this.element.getBoundingClientRect(),{left:d,top:o,width:c}=a.getBoundingClientRect(),{left:l,top:h,width:u,height:f}=s.getBoundingClientRect();let p,m,g,{x:w,y:y}=i.orientation;a===document.body?(p=window.scrollY,m=l+window.scrollX,g=h+p):(m=l-d,g=h-o+(p=a.scrollTop)),"auto"===w&&(m<0?(w="left",m=10):w=m+n>c?"right":"rtl"===me(s)?"right":"left"),"right"===w&&(m-=n-u),"auto"===y&&(y=g-r<p?"bottom":"top"),"top"===y?g-=r:g+=f,e.remove("datepicker-orient-top","datepicker-orient-bottom","datepicker-orient-right","datepicker-orient-left"),e.add(`datepicker-orient-${y}`,`datepicker-orient-${w}`),t.top=g?`${g}px`:g,t.left=m?`${m}px`:m}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevBtnDisabled(e){this.controls.prevBtn.disabled=e}setNextBtnDisabled(e){this.controls.nextBtn.disabled=e}changeView(e){const t=this.currentView,i=this.views[e];return i.id!==t.id&&(this.currentView=i,this._renderMethod="render",ee(this.datepicker,"changeView"),this.main.replaceChild(i.element,t.element)),this}changeFocus(e){return this._renderMethod=pe(this,e)?"render":"refreshFocus",this.views.forEach(e=>{e.updateFocus()}),this}update(){const e=fe(this.datepicker);return this._renderMethod=pe(this,e)?"render":"refresh",this.views.forEach(e=>{e.updateFocus(),e.updateSelection()}),this}render(e=!0){const t=e&&this._renderMethod||"render";delete this._renderMethod,this.currentView[t]()}}function we(e,t,i,s){const n=e.picker,r=n.currentView,d=r.step||1;let o,c,l=n.viewDate;switch(r.id){case 0:l=s?h(l,7*i):t.ctrlKey||t.metaKey?f(l,i):h(l,i),o=h,c=(e=>r.disabled.includes(e));break;case 1:l=u(l,s?4*i:i),o=u,c=(e=>{const t=new Date(e),{year:i,disabled:s}=r;return t.getFullYear()===i&&s.includes(t.getMonth())});break;default:l=f(l,i*(s?4:1)*d),o=f,c=(e=>r.disabled.includes(g(e,d)))}void 0!==(l=function e(t,i,s,n,r,d){if(a(t,r,d))return n(t)?e(i(t,s),i,s,n,r,d):t}(l,o,i<0?-d:d,c,r.minDate,r.maxDate))&&n.changeFocus(l).render()}function ye(e,t){if("Tab"===t.key)return void se(e);const i=e.picker,{id:s,isMinView:a}=i.currentView;if(i.active)if(e.editMode)switch(t.key){case"Escape":i.hide();break;case"Enter":e.exitEditMode({update:!0,autohide:e.config.autohide});break;default:return}else switch(t.key){case"Escape":i.hide();break;case"ArrowLeft":if(t.ctrlKey||t.metaKey)te(e,-1);else{if(t.shiftKey)return void e.enterEditMode();we(e,t,-1,!1)}break;case"ArrowRight":if(t.ctrlKey||t.metaKey)te(e,1);else{if(t.shiftKey)return void e.enterEditMode();we(e,t,1,!1)}break;case"ArrowUp":if(t.ctrlKey||t.metaKey)ie(e);else{if(t.shiftKey)return void e.enterEditMode();we(e,t,-1,!0)}break;case"ArrowDown":if(t.shiftKey&&!t.ctrlKey&&!t.metaKey)return void e.enterEditMode();we(e,t,1,!0);break;case"Enter":a?e.setDate(i.viewDate):i.changeView(s-1).render();break;case"Backspace":case"Delete":return void e.enterEditMode();default:return void(1!==t.key.length||t.ctrlKey||t.metaKey||e.enterEditMode())}else switch(t.key){case"ArrowDown":case"Escape":i.show();break;case"Enter":e.update();break;default:return}t.preventDefault(),t.stopPropagation()}function ke(e){e.config.showOnFocus&&e.show()}function De(e,t){const i=t.target;(e.picker.active||e.config.showOnClick)&&(i._active=i===document.activeElement,i._clicking=setTimeout(()=>{delete i._active,delete i._clicking},2e3))}function ve(e,t){const i=t.target;i._clicking&&(clearTimeout(i._clicking),delete i._clicking,i._active&&e.enterEditMode(),delete i._active,e.config.showOnClick&&e.show())}function be(e,t){t.clipboardData.types.includes("text/plain")&&e.enterEditMode()}function xe(e,t){return e.map(e=>S(e,t.format,t.locale)).join(t.dateDelimiter)}function Me(e,t,i=!1){const{config:s,dates:n,rangepicker:r}=e;if(0===t.length)return i?[]:void 0;const d=r&&e===r.datepickers[1];let o=t.reduce((e,t)=>{let i=M(t,s.format,s.locale);if(void 0===i)return e;if(s.pickLevel>0){const e=new Date(i);i=1===s.pickLevel?d?e.setMonth(e.getMonth()+1,0):e.setDate(1):d?e.setFullYear(e.getFullYear()+1,0,0):e.setMonth(0,1)}return!a(i,s.minDate,s.maxDate)||e.includes(i)||s.datesDisabled.includes(i)||s.daysOfWeekDisabled.includes(new Date(i).getDay())||e.push(i),e},[]);return 0!==o.length?(s.multidate&&!i&&(o=o.reduce((e,t)=>(n.includes(t)||e.push(t),e),n.filter(e=>!o.includes(e)))),s.maxNumberOfDates&&o.length>s.maxNumberOfDates?o.slice(-1*s.maxNumberOfDates):o):void 0}function Se(e,t=3,i=!0){const{config:s,picker:a,inputField:n}=e;if(2&t){const e=a.active?s.pickLevel:s.startView;a.update().changeView(e).render(i)}1&t&&n&&(n.value=xe(e.dates,s))}function Ce(e,t,i){let{clear:s,render:a,autohide:n}=i;void 0===a&&(a=!0),a?void 0===n&&(n=e.config.autohide):n=!1;const r=Me(e,t,s);r&&(r.toString()!==e.dates.toString()?(e.dates=r,Se(e,a?3:1),ee(e,"changeDate")):Se(e,1),n&&e.hide())}return class{constructor(e,t={},i){e.datepicker=this,this.element=e;const a=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:document.body,defaultViewDate:c(),maxDate:void 0,minDate:void 0},q(L,this));this._options=t,Object.assign(a,q(t,this));const n=this.inline="INPUT"!==e.tagName;let r,d;if(n)a.container=e,d=s(e.dataset.date,a.dateDelimiter),delete e.dataset.date;else{const i=t.container?document.querySelector(t.container):null;i&&(a.container=i),(r=this.inputField=e).classList.add("datepicker-input"),d=s(r.value,a.dateDelimiter)}if(i){const e=i.inputs.indexOf(r),t=i.datepickers;if(e<0||e>1||!Array.isArray(t))throw Error("Invalid rangepicker object.");t[e]=this,Object.defineProperty(this,"rangepicker",{get:()=>i})}this.dates=Me(this,d)||[],r&&(r.value=xe(this.dates,a));const o=this.picker=new ge(this);if(n)this.show();else{const e=function(e,t){const i=e.element;if(i!==document.activeElement)return;const s=e.picker.element;V(t,e=>e===i||e===s)||se(e)}.bind(null,this);F(this,[[r,"keydown",ye.bind(null,this)],[r,"focus",ke.bind(null,this)],[r,"mousedown",De.bind(null,this)],[r,"click",ve.bind(null,this)],[r,"paste",be.bind(null,this)],[document,"mousedown",e],[document,"touchstart",e],[window,"resize",o.place.bind(o)]])}}static formatDate(e,t,i){return S(e,t,i&&N[i]||N.en)}static parseDate(e,t,i){return M(e,t,i&&N[i]||N.en)}static get locales(){return N}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=this.picker,i=q(e,this);Object.assign(this._options,e),Object.assign(this.config,i),t.setOptions(i),Se(this,3)}show(){this.inputField&&this.inputField.disabled||this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),function(e){let t=C.get(e);t&&(t.forEach(e=>{E.call(...e)}),C.delete(e))}(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(e){const t=e?t=>S(t,e,this.config.locale):e=>new Date(e);return this.config.multidate?this.dates.map(t):this.dates.length>0?t(this.dates[0]):void 0}setDate(...e){const i=[...e],s={},a=t(e);"object"!=typeof a||Array.isArray(a)||a instanceof Date||!a||Object.assign(s,i.pop()),Ce(this,Array.isArray(i[0])?i[0]:i,s)}update(e){if(this.inline)return;const t={clear:!0,autohide:!(!e||!e.autohide)};Ce(this,s(this.inputField.value,this.config.dateDelimiter),t)}refresh(e,t=!1){let i;e&&"string"!=typeof e&&(t=e,e=void 0),Se(this,i="picker"===e?2:"input"===e?1:3,!t)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit"))}exitEditMode(e){if(this.inline||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),t.update&&this.update(t)}}}();;!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).IMask={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){var e={exports:{}};return t(e,e.exports),e.exports}var u=function(t){return t&&t.Math==Math&&t},r=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof e&&e)||function(){return this}()||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,l={f:o&&!s.call({1:2},1)?function(t){var e=o(this,t);return!!e&&e.enumerable}:s},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},c={}.toString,f="".split,p=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==function(t){return c.call(t).slice(8,-1)}(t)?f.call(t,""):Object(t)}:Object,d=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return p(d(t))},k=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,e){if(!k(t))return t;var n,u;if(e&&"function"==typeof(n=t.toString)&&!k(u=n.call(t)))return u;if("function"==typeof(n=t.valueOf)&&!k(u=n.call(t)))return u;if(!e&&"function"==typeof(n=t.toString)&&!k(u=n.call(t)))return u;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,m=function(t,e){return y.call(t,e)},_=r.document,A=k(_)&&k(_.createElement),b=!a&&!i((function(){return 7!=Object.defineProperty((t="div",A?_.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),C=Object.getOwnPropertyDescriptor,E={f:a?C:function(t,e){if(t=v(t),e=g(e,!0),b)try{return C(t,e)}catch(t){}if(m(t,e))return h(!l.f.call(t,e),t[e])}},F=function(t){if(!k(t))throw TypeError(String(t)+" is not an object");return t},S=Object.defineProperty,D={f:a?S:function(t,e,n){if(F(t),e=g(e,!0),F(n),b)try{return S(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},B=a?function(t,e,n){return D.f(t,e,h(1,n))}:function(t,e,n){return t[e]=n,t},w=function(t,e){try{B(r,t,e)}catch(n){r[t]=e}return e},M="__core-js_shared__",x=r[M]||w(M,{}),P=Function.toString;"function"!=typeof x.inspectSource&&(x.inspectSource=function(t){return P.call(t)});var O,T,I,j,V=x.inspectSource,R=r.WeakMap,L="function"==typeof R&&/native code/.test(V(R)),N=n((function(t){(t.exports=function(t,e){return x[t]||(x[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,z=Math.random(),H=N("keys"),Y={},Z=r.WeakMap;if(L){var K=x.state||(x.state=new Z),G=K.get,W=K.has,$=K.set;O=function(t,e){return e.facade=t,$.call(K,t,e),e},T=function(t){return G.call(K,t)||{}},I=function(t){return W.call(K,t)}}else{var q=H[j="state"]||(H[j]=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++U+z).toString(36)}(j));Y[q]=!0,O=function(t,e){return e.facade=t,B(t,q,e),e},T=function(t){return m(t,q)?t[q]:{}},I=function(t){return m(t,q)}}var X={set:O,get:T,has:I,enforce:function(t){return I(t)?T(t):O(t,{})},getterFor:function(t){return function(e){var n;if(!k(e)||(n=T(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},J=n((function(t){var e=X.get,n=X.enforce,u=String(String).split("String");(t.exports=function(t,e,i,a){var s,o=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||m(i,"name")||B(i,"name",e),(s=n(i)).source||(s.source=u.join("string"==typeof e?e:""))),t!==r?(o?!h&&t[e]&&(l=!0):delete t[e],l?t[e]=i:B(t,e,i)):l?t[e]=i:w(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||V(this)}))})),Q=r,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt(Q[t])||tt(r[t]):Q[t]&&Q[t][e]||r[t]&&r[t][e]},nt=Math.ceil,ut=Math.floor,rt=function(t){return isNaN(t=+t)?0:(t>0?ut:nt)(t)},it=Math.min,at=function(t){return t>0?it(rt(t),9007199254740991):0},st=Math.max,ot=Math.min,lt=function(t){return function(e,n,u){var r,i=v(e),a=at(i.length),s=function(t,e){var n=rt(t);return n<0?st(n+e,0):ot(n,e)}(u,a);if(t&&n!=n){for(;a>s;)if((r=i[s++])!=r)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},ht={includes:lt(!0),indexOf:lt(!1)}.indexOf,ct=function(t,e){var n,u=v(t),r=0,i=[];for(n in u)!m(Y,n)&&m(u,n)&&i.push(n);for(;e.length>r;)m(u,n=e[r++])&&(~ht(i,n)||i.push(n));return i},ft=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pt=ft.concat("length","prototype"),dt={f:Object.getOwnPropertyNames||function(t){return ct(t,pt)}},vt={f:Object.getOwnPropertySymbols},kt=et("Reflect","ownKeys")||function(t){var e=dt.f(F(t)),n=vt.f;return n?e.concat(n(t)):e},gt=function(t,e){for(var n=kt(e),u=D.f,r=E.f,i=0;i<n.length;i++){var a=n[i];m(t,a)||u(t,a,r(e,a))}},yt=/#|\.prototype\./,mt=function(t,e){var n=At[_t(t)];return n==Ct||n!=bt&&("function"==typeof e?i(e):!!e)},_t=mt.normalize=function(t){return String(t).replace(yt,".").toLowerCase()},At=mt.data={},bt=mt.NATIVE="N",Ct=mt.POLYFILL="P",Et=mt,Ft=E.f,St=function(t,e){var n,u,i,a,s,o=t.target,l=t.global,h=t.stat;if(n=l?r:h?r[o]||w(o,{}):(r[o]||{}).prototype)for(u in e){if(a=e[u],i=t.noTargetGet?(s=Ft(n,u))&&s.value:n[u],!Et(l?u:o+(h?".":"#")+u,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;gt(a,i)}(t.sham||i&&i.sham)&&B(a,"sham",!0),J(n,u,a,t)}},Dt=Object.keys||function(t){return ct(t,ft)},Bt=function(t){return Object(d(t))},wt=Object.assign,Mt=Object.defineProperty,xt=!wt||i((function(){if(a&&1!==wt({b:1},wt(Mt({},"a",{enumerable:!0,get:function(){Mt(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),u="abcdefghijklmnopqrst";return t[n]=7,u.split("").forEach((function(t){e[t]=t})),7!=wt({},t)[n]||Dt(wt({},e)).join("")!=u}))?function(t,e){for(var n=Bt(t),u=arguments.length,r=1,i=vt.f,s=l.f;u>r;)for(var o,h=p(arguments[r++]),c=i?Dt(h).concat(i(h)):Dt(h),f=c.length,d=0;f>d;)o=c[d++],a&&!s.call(h,o)||(n[o]=h[o]);return n}:wt;St({target:"Object",stat:!0,forced:Object.assign!==xt},{assign:xt});var Pt="".repeat||function(t){var e=String(d(this)),n="",u=rt(t);if(u<0||u==1/0)throw RangeError("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(e+=e))1&u&&(n+=e);return n},Ot=Math.ceil,Tt=function(t){return function(e,n,u){var r,i,a=String(d(e)),s=a.length,o=void 0===u?" ":String(u),l=at(n);return l<=s||""==o?a:(r=l-s,(i=Pt.call(o,Ot(r/o.length))).length>r&&(i=i.slice(0,r)),t?a+i:i+a)}},It={start:Tt(!1),end:Tt(!0)},jt=et("navigator","userAgent")||"",Vt=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(jt),Rt=It.end;St({target:"String",proto:!0,forced:Vt},{padEnd:function(t){return Rt(this,t,arguments.length>1?arguments[1]:void 0)}});var Lt=It.start;function Nt(t){return(Nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zt(t,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function Ht(t,e,n){return e&&zt(t.prototype,e),n&&zt(t,n),t}function Yt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Kt(t,e)}function Zt(t){return(Zt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Kt(t,e){return(Kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Gt(t,e){if(null==t)return{};var n,u,r=function(t,e){if(null==t)return{};var n,u,r={},i=Object.keys(t);for(u=0;u<i.length;u++)n=i[u],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(u=0;u<i.length;u++)n=i[u],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Wt(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,u=Zt(t);if(e){var r=Zt(this).constructor;n=Reflect.construct(u,arguments,r)}else n=u.apply(this,arguments);return Wt(this,n)}}function qt(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Zt(t)););return t}function Xt(t,e,n){return(Xt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var u=qt(t,e);if(u){var r=Object.getOwnPropertyDescriptor(u,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function Jt(t,e,n,u){return(Jt="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,u){var r,i=qt(t,e);if(i){if((r=Object.getOwnPropertyDescriptor(i,e)).set)return r.set.call(u,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(u,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(u,e,r)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(u,e,n);return!0})(t,e,n,u)}function Qt(t,e,n,u,r){if(!Jt(t,e,n,u||t)&&r)throw new Error("failed to set property");return n}function te(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],u=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(u=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);u=!0);}catch(t){r=!0,i=t}finally{try{u||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,u=new Array(e);n<e;n++)u[n]=t[n];return u}function ne(t){return"string"==typeof t||t instanceof String}St({target:"String",proto:!0,forced:Vt},{padStart:function(t){return Lt(this,t,arguments.length>1?arguments[1]:void 0)}}),St({target:"String",proto:!0},{repeat:Pt}),St({global:!0},{globalThis:r});var ue="NONE",re="LEFT",ie="FORCE_LEFT",ae="RIGHT",se="FORCE_RIGHT";function oe(t){switch(t){case re:return ie;case ae:return se;default:return t}}function le(t){return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function he(t,e){if(e===t)return!0;var n,u=Array.isArray(e),r=Array.isArray(t);if(u&&r){if(e.length!=t.length)return!1;for(n=0;n<e.length;n++)if(!he(e[n],t[n]))return!1;return!0}if(u!=r)return!1;if(e&&t&&"object"===Nt(e)&&"object"===Nt(t)){var i=e instanceof Date,a=t instanceof Date;if(i&&a)return e.getTime()==t.getTime();if(i!=a)return!1;var s=e instanceof RegExp,o=t instanceof RegExp;if(s&&o)return e.toString()==t.toString();if(s!=o)return!1;var l=Object.keys(e);for(n=0;n<l.length;n++)if(!Object.prototype.hasOwnProperty.call(t,l[n]))return!1;for(n=0;n<l.length;n++)if(!he(t[l[n]],e[l[n]]))return!1;return!0}return!(!e||!t||"function"!=typeof e||"function"!=typeof t)&&e.toString()===t.toString()}var ce=function(){function t(e,n,u,r){for(Ut(this,t),this.value=e,this.cursorPos=n,this.oldValue=u,this.oldSelection=r;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return Ht(t,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?ue:this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos?ae:re}}]),t}(),fe=function(){function t(e){Ut(this,t),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}return Ht(t,[{key:"aggregate",value:function(t){return this.rawInserted+=t.rawInserted,this.skip=this.skip||t.skip,this.inserted+=t.inserted,this.tailShift+=t.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),t}(),pe=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2?arguments[2]:void 0;Ut(this,t),this.value=e,this.from=n,this.stop=u}return Ht(t,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(t){this.value+=String(t)}},{key:"appendTo",value:function(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(t){Object.assign(this,t)}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.value.length)return"";var e=this.value[0];return this.value=this.value.slice(1),e}}]),t}();function de(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new de.InputMask(t,e)}var ve=function(){function t(e){Ut(this,t),this._value="",this._update(Object.assign({},t.DEFAULTS,e)),this.isInitialized=!0}return Ht(t,[{key:"updateOptions",value:function(t){Object.keys(t).length&&this.withValueRefresh(this._update.bind(this,t))}},{key:"_update",value:function(t){Object.assign(this,t)}},{key:"state",get:function(){return{_value:this.value}},set:function(t){this._value=t._value}},{key:"reset",value:function(){this._value=""}},{key:"value",get:function(){return this._value},set:function(t){this.resolve(t)}},{key:"resolve",value:function(t){return this.reset(),this.append(t,{input:!0},""),this.doCommit(),this.value}},{key:"unmaskedValue",get:function(){return this.value},set:function(t){this.reset(),this.append(t,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.doParse(this.value)},set:function(t){this.value=this.doFormat(t)}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(t){this.reset(),this.append(t,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}},{key:"nearestInputPos",value:function(t,e){return t}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(t,e)}},{key:"extractTail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new pe(this.extractInput(t,e),t)}},{key:"appendTail",value:function(t){return ne(t)&&(t=new pe(String(t))),t.appendTo(this)}},{key:"_appendCharRaw",value:function(t){return t?(this._value+=t,new fe({inserted:t,rawInserted:t})):new fe}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,u=this.state,r=this._appendCharRaw(this.doPrepare(t,e),e);if(r.inserted){var i,a=!1!==this.doValidate(e);if(a&&null!=n){var s=this.state;this.overwrite&&(i=n.state,n.shiftBefore(this.value.length));var o=this.appendTail(n);(a=o.rawInserted===n.toString())&&o.inserted&&(this.state=s)}a||(r=new fe,this.state=u,n&&i&&(n.state=i))}return r}},{key:"_appendPlaceholder",value:function(){return new fe}},{key:"append",value:function(t,e,n){if(!ne(t))throw new Error("value should be string");var u=new fe,r=ne(n)?new pe(String(n)):n;e&&e.tail&&(e._beforeTailState=this.state);for(var i=0;i<t.length;++i)u.aggregate(this._appendChar(t[i],e,r));return null!=r&&(u.tailShift+=this.appendTail(r).tailShift),u}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,t)+this.value.slice(e),new fe}},{key:"withValueRefresh",value:function(t){if(this._refreshing||!this.isInitialized)return t();this._refreshing=!0;var e=this.rawInputValue,n=this.value,u=t();return this.rawInputValue=e,this.value&&this.value!==n&&0===n.indexOf(this.value)&&this.append(n.slice(this.value.length),{},""),delete this._refreshing,u}},{key:"runIsolated",value:function(t){if(this._isolated||!this.isInitialized)return t(this);this._isolated=!0;var e=this.state,n=t(this);return this.state=e,delete this._isolated,n}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(t,this,e):t}},{key:"doValidate",value:function(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"doFormat",value:function(t){return this.format?this.format(t,this):t}},{key:"doParse",value:function(t){return this.parse?this.parse(t,this):t}},{key:"splice",value:function(t,e,n,u){var r=t+e,i=this.extractTail(r),a=this.nearestInputPos(t,u);return new fe({tailShift:a-t}).aggregate(this.remove(a)).aggregate(this.append(n,{input:!0},i))}}]),t}();function ke(t){if(null==t)throw new Error("mask property should be defined");return t instanceof RegExp?de.MaskedRegExp:ne(t)?de.MaskedPattern:t instanceof Date||t===Date?de.MaskedDate:t instanceof Number||"number"==typeof t||t===Number?de.MaskedNumber:Array.isArray(t)||t===Array?de.MaskedDynamic:de.Masked&&t.prototype instanceof de.Masked?t:t instanceof Function?de.MaskedFunction:t instanceof de.Masked?t.constructor:(console.warn("Mask not found for mask",t),de.Masked)}function ge(t){if(de.Masked&&t instanceof de.Masked)return t;var e=(t=Object.assign({},t)).mask;if(de.Masked&&e instanceof de.Masked)return e;var n=ke(e);if(!n)throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new n(t)}ve.DEFAULTS={format:function(t){return t},parse:function(t){return t}},de.Masked=ve,de.createMask=ge;var ye={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},me=function(){function t(e){Ut(this,t);var n=e.mask,u=Gt(e,["mask"]);this.masked=ge({mask:n}),Object.assign(this,u)}return Ht(t,[{key:"reset",value:function(){this._isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===t&&e>=1?(this._isFilled=!1,this.masked.remove(t,e)):new fe}},{key:"value",get:function(){return this.masked.value||(this._isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return Boolean(this.masked.value)||this.isOptional}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._isFilled)return new fe;var n=this.masked.state,u=this.masked._appendChar(t,e);return u.inserted&&!1===this.doValidate(e)&&(u.inserted=u.rawInserted="",this.masked.state=n),u.inserted||this.isOptional||this.lazy||e.input||(u.inserted=this.placeholderChar),u.skip=!u.inserted&&!this.isOptional,this._isFilled=Boolean(u.inserted),u}},{key:"append",value:function(){var t;return(t=this.masked).append.apply(t,arguments)}},{key:"_appendPlaceholder",value:function(){var t=new fe;return this._isFilled||this.isOptional||(this._isFilled=!0,t.inserted=this.placeholderChar),t}},{key:"extractTail",value:function(){var t;return(t=this.masked).extractTail.apply(t,arguments)}},{key:"appendTail",value:function(){var t;return(t=this.masked).appendTail.apply(t,arguments)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(t,e,n)}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ue,n=0,u=this.value.length,r=Math.min(Math.max(t,n),u);switch(e){case re:case ie:return this.isComplete?r:n;case ae:case se:return this.isComplete?r:u;case ue:default:return r}}},{key:"doValidate",value:function(){var t,e;return(t=this.masked).doValidate.apply(t,arguments)&&(!this.parent||(e=this.parent).doValidate.apply(e,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"state",get:function(){return{masked:this.masked.state,_isFilled:this._isFilled}},set:function(t){this.masked.state=t.masked,this._isFilled=t._isFilled}}]),t}(),_e=function(){function t(e){Ut(this,t),Object.assign(this,e),this._value=""}return Ht(t,[{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new fe}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ue,n=0,u=this._value.length;switch(e){case re:case ie:return n;case ue:case ae:case se:default:return u}}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.raw&&this._isRawInput&&this._value.slice(t,e)||""}},{key:"isComplete",get:function(){return!0}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new fe;if(this._value)return n;var u=this.char===t[0],r=u&&(this.isUnmasking||e.input||e.raw)&&!e.tail;return r&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=r&&(e.raw||e.input),n}},{key:"_appendPlaceholder",value:function(){var t=new fe;return this._value||(this._value=t.inserted=this.char),t}},{key:"extractTail",value:function(){return arguments.length>1&&void 0!==arguments[1]||this.value.length,new pe("")}},{key:"appendTail",value:function(t){return ne(t)&&(t=new pe(String(t))),t.appendTo(this)}},{key:"append",value:function(t,e,n){var u=this._appendChar(t,e);return null!=n&&(u.tailShift+=this.appendTail(n).tailShift),u}},{key:"doCommit",value:function(){}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(t){Object.assign(this,t)}}]),t}(),Ae=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Ut(this,t),this.chunks=e,this.from=n}return Ht(t,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(e){if(String(e)){ne(e)&&(e=new pe(String(e)));var n=this.chunks[this.chunks.length-1],u=n&&(n.stop===e.stop||null==e.stop)&&e.from===n.from+n.toString().length;if(e instanceof pe)u?n.extend(e.toString()):this.chunks.push(e);else if(e instanceof t){if(null==e.stop)for(var r;e.chunks.length&&null==e.chunks[0].stop;)(r=e.chunks.shift()).from+=e.from,this.extend(r);e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}}},{key:"appendTo",value:function(e){if(!(e instanceof de.MaskedPattern))return new pe(this.toString()).appendTo(e);for(var n=new fe,u=0;u<this.chunks.length&&!n.skip;++u){var r=this.chunks[u],i=e._mapPosToBlock(e.value.length),a=r.stop,s=void 0;if(null!=a&&(!i||i.index<=a)&&((r instanceof t||e._stops.indexOf(a)>=0)&&n.aggregate(e._appendPlaceholder(a)),s=r instanceof t&&e._blocks[a]),s){var o=s.appendTail(r);o.skip=!1,n.aggregate(o),e._value+=o.inserted;var l=r.toString().slice(o.rawInserted.length);l&&n.aggregate(e.append(l,{tail:!0}))}else n.aggregate(e.append(r.toString(),{tail:!0}))}return n}},{key:"state",get:function(){return{chunks:this.chunks.map((function(t){return t.state})),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(e){var n=e.chunks,u=Gt(e,["chunks"]);Object.assign(this,u),this.chunks=n.map((function(e){var n="chunks"in e?new t:new pe;return n.state=e,n}))}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.chunks.length)return"";for(var e=t-this.from,n=0;n<this.chunks.length;){var u=this.chunks[n],r=u.shiftBefore(e);if(u.toString()){if(!r)break;++n}else this.chunks.splice(n,1);if(r)return r}return""}}]),t}(),be=function(t){Yt(n,t);var e=$t(n);function n(){return Ut(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_update",value:function(t){t.mask&&(t.validate=function(e){return e.search(t.mask)>=0}),Xt(Zt(n.prototype),"_update",this).call(this,t)}}]),n}(ve);de.MaskedRegExp=be;var Ce=function(t){Yt(n,t);var e=$t(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ut(this,n),t.definitions=Object.assign({},ye,t.definitions),e.call(this,Object.assign({},n.DEFAULTS,t))}return Ht(n,[{key:"_update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.definitions=Object.assign({},this.definitions,t.definitions),Xt(Zt(n.prototype),"_update",this).call(this,t),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var t=this,e=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var u=this.mask;if(u&&e)for(var r=!1,i=!1,a=0;a<u.length;++a){if(this.blocks)if("continue"===function(){var e=u.slice(a),n=Object.keys(t.blocks).filter((function(t){return 0===e.indexOf(t)}));n.sort((function(t,e){return e.length-t.length}));var r=n[0];if(r){var i=ge(Object.assign({parent:t,lazy:t.lazy,placeholderChar:t.placeholderChar,overwrite:t.overwrite},t.blocks[r]));return i&&(t._blocks.push(i),t._maskedBlocks[r]||(t._maskedBlocks[r]=[]),t._maskedBlocks[r].push(t._blocks.length-1)),a+=r.length-1,"continue"}}())continue;var s=u[a],o=s in e;if(s!==n.STOP_CHAR)if("{"!==s&&"}"!==s)if("["!==s&&"]"!==s){if(s===n.ESCAPE_CHAR){if(++a,!(s=u[a]))break;o=!1}var l=o?new me({parent:this,lazy:this.lazy,placeholderChar:this.placeholderChar,mask:e[s],isOptional:i}):new _e({char:s,isUnmasking:r});this._blocks.push(l)}else i=!i;else r=!r;else this._stops.push(this._blocks.length)}}},{key:"state",get:function(){return Object.assign({},Xt(Zt(n.prototype),"state",this),{_blocks:this._blocks.map((function(t){return t.state}))})},set:function(t){var e=t._blocks,u=Gt(t,["_blocks"]);this._blocks.forEach((function(t,n){return t.state=e[n]})),Qt(Zt(n.prototype),"state",u,this,!0)}},{key:"reset",value:function(){Xt(Zt(n.prototype),"reset",this).call(this),this._blocks.forEach((function(t){return t.reset()}))}},{key:"isComplete",get:function(){return this._blocks.every((function(t){return t.isComplete}))}},{key:"doCommit",value:function(){this._blocks.forEach((function(t){return t.doCommit()})),Xt(Zt(n.prototype),"doCommit",this).call(this)}},{key:"unmaskedValue",get:function(){return this._blocks.reduce((function(t,e){return t+e.unmaskedValue}),"")},set:function(t){Qt(Zt(n.prototype),"unmaskedValue",t,this,!0)}},{key:"value",get:function(){return this._blocks.reduce((function(t,e){return t+e.value}),"")},set:function(t){Qt(Zt(n.prototype),"value",t,this,!0)}},{key:"appendTail",value:function(t){return Xt(Zt(n.prototype),"appendTail",this).call(this,t).aggregate(this._appendPlaceholder())}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._mapPosToBlock(this.value.length),u=new fe;if(!n)return u;for(var r=n.index;;++r){var i=this._blocks[r];if(!i)break;var a=i._appendChar(t,e),s=a.skip;if(u.aggregate(a),s||a.rawInserted)break}return u}},{key:"extractTail",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=new Ae;return e===n||this._forEachBlocksInRange(e,n,(function(e,n,r,i){var a=e.extractTail(r,i);a.stop=t._findStopBefore(n),a.from=t._blockStartPos(n),a instanceof Ae&&(a.blockIndex=n),u.extend(a)})),u}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t===e)return"";var u="";return this._forEachBlocksInRange(t,e,(function(t,e,r,i){u+=t.extractInput(r,i,n)})),u}},{key:"_findStopBefore",value:function(t){for(var e,n=0;n<this._stops.length;++n){var u=this._stops[n];if(!(u<=t))break;e=u}return e}},{key:"_appendPlaceholder",value:function(t){var e=this,n=new fe;if(this.lazy&&null==t)return n;var u=this._mapPosToBlock(this.value.length);if(!u)return n;var r=u.index,i=null!=t?t:this._blocks.length;return this._blocks.slice(r,i).forEach((function(u){if(!u.lazy||null!=t){var r=null!=u._blocks?[u._blocks.length]:[],i=u._appendPlaceholder.apply(u,r);e._value+=i.inserted,n.aggregate(i)}})),n}},{key:"_mapPosToBlock",value:function(t){for(var e="",n=0;n<this._blocks.length;++n){var u=this._blocks[n],r=e.length;if(t<=(e+=u.value).length)return{index:n,offset:t-r}}}},{key:"_blockStartPos",value:function(t){return this._blocks.slice(0,t).reduce((function(t,e){return t+e.value.length}),0)}},{key:"_forEachBlocksInRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,u=this._mapPosToBlock(t);if(u){var r=this._mapPosToBlock(e),i=r&&u.index===r.index,a=u.offset,s=r&&i?r.offset:this._blocks[u.index].value.length;if(n(this._blocks[u.index],u.index,a,s),r&&!i){for(var o=u.index+1;o<r.index;++o)n(this._blocks[o],o,0,this._blocks[o].value.length);n(this._blocks[r.index],r.index,0,r.offset)}}}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=Xt(Zt(n.prototype),"remove",this).call(this,t,e);return this._forEachBlocksInRange(t,e,(function(t,e,n,r){u.aggregate(t.remove(n,r))})),u}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ue,n=this._mapPosToBlock(t)||{index:0,offset:0},u=n.offset,r=n.index,i=this._blocks[r];if(!i)return t;var a=u;0!==a&&a<i.value.length&&(a=i.nearestInputPos(u,oe(e)));var s=a===i.value.length,o=0===a;if(!o&&!s)return this._blockStartPos(r)+a;var l=s?r+1:r;if(e===ue){if(l>0){var h=l-1,c=this._blocks[h],f=c.nearestInputPos(0,ue);if(!c.value.length||f!==c.value.length)return this._blockStartPos(l)}for(var p=l,d=p;d<this._blocks.length;++d){var v=this._blocks[d],k=v.nearestInputPos(0,ue);if(!v.value.length||k!==v.value.length)return this._blockStartPos(d)+k}for(var g=l-1;g>=0;--g){var y=this._blocks[g],m=y.nearestInputPos(0,ue);if(!y.value.length||m!==y.value.length)return this._blockStartPos(g)+y.value.length}return t}if(e===re||e===ie){for(var _,A=l;A<this._blocks.length;++A)if(this._blocks[A].value){_=A;break}if(null!=_){var b=this._blocks[_],C=b.nearestInputPos(0,ae);if(0===C&&b.unmaskedValue.length)return this._blockStartPos(_)+C}for(var E,F=-1,S=l-1;S>=0;--S){var D=this._blocks[S],B=D.nearestInputPos(D.value.length,ie);if(D.value&&0===B||(E=S),0!==B){if(B!==D.value.length)return this._blockStartPos(S)+B;F=S;break}}if(e===re)for(var w=F+1;w<=Math.min(l,this._blocks.length-1);++w){var M=this._blocks[w],x=M.nearestInputPos(0,ue),P=this._blockStartPos(w)+x;if(P>t)break;if(x!==M.value.length)return P}if(F>=0)return this._blockStartPos(F)+this._blocks[F].value.length;if(e===ie||this.lazy&&!this.extractInput()&&!Ee(this._blocks[l]))return 0;if(null!=E)return this._blockStartPos(E);for(var O=l;O<this._blocks.length;++O){var T=this._blocks[O],I=T.nearestInputPos(0,ue);if(!T.value.length||I!==T.value.length)return this._blockStartPos(O)+I}return 0}if(e===ae||e===se){for(var j,V,R=l;R<this._blocks.length;++R){var L=this._blocks[R],N=L.nearestInputPos(0,ue);if(N!==L.value.length){V=this._blockStartPos(R)+N,j=R;break}}if(null!=j&&null!=V){for(var U=j;U<this._blocks.length;++U){var z=this._blocks[U],H=z.nearestInputPos(0,se);if(H!==z.value.length)return this._blockStartPos(U)+H}return e===se?this.value.length:V}for(var Y=Math.min(l,this._blocks.length-1);Y>=0;--Y){var Z=this._blocks[Y],K=Z.nearestInputPos(Z.value.length,re);if(0!==K){var G=this._blockStartPos(Y)+K;if(G>=t)return G;break}}}return t}},{key:"maskedBlock",value:function(t){return this.maskedBlocks(t)[0]}},{key:"maskedBlocks",value:function(t){var e=this,n=this._maskedBlocks[t];return n?n.map((function(t){return e._blocks[t]})):[]}}]),n}(ve);function Ee(t){if(!t)return!1;var e=t.value;return!e||t.nearestInputPos(0,ue)!==e.length}Ce.DEFAULTS={lazy:!0,placeholderChar:"_"},Ce.STOP_CHAR="`",Ce.ESCAPE_CHAR="\\",Ce.InputDefinition=me,Ce.FixedDefinition=_e,de.MaskedPattern=Ce;var Fe=function(t){Yt(n,t);var e=$t(n);function n(){return Ut(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"_update",value:function(t){t=Object.assign({to:this.to||0,from:this.from||0},t);var e=String(t.to).length;null!=t.maxLength&&(e=Math.max(e,t.maxLength)),t.maxLength=e;for(var u=String(t.from).padStart(e,"0"),r=String(t.to).padStart(e,"0"),i=0;i<r.length&&r[i]===u[i];)++i;t.mask=r.slice(0,i).replace(/0/g,"\\0")+"0".repeat(e-i),Xt(Zt(n.prototype),"_update",this).call(this,t)}},{key:"isComplete",get:function(){return Xt(Zt(n.prototype),"isComplete",this)&&Boolean(this.value)}},{key:"boundaries",value:function(t){var e="",n="",u=te(t.match(/^(\D*)(\d*)(\D*)/)||[],3),r=u[1],i=u[2];return i&&(e="0".repeat(r.length)+i,n="9".repeat(r.length)+i),[e=e.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=Xt(Zt(n.prototype),"doPrepare",this).call(this,t,e).replace(/\D/g,""),!this.autofix)return t;for(var u=String(this.from).padStart(this.maxLength,"0"),r=String(this.to).padStart(this.maxLength,"0"),i=this.value,a="",s=0;s<t.length;++s){var o=i+a+t[s],l=this.boundaries(o),h=te(l,2),c=h[0],f=h[1];Number(f)<this.from?a+=u[o.length-1]:Number(c)>this.to?a+=r[o.length-1]:a+=t[s]}return a}},{key:"doValidate",value:function(){var t,e=this.value,u=e.search(/[^0]/);if(-1===u&&e.length<=this._matchFrom)return!0;for(var r=this.boundaries(e),i=te(r,2),a=i[0],s=i[1],o=arguments.length,l=new Array(o),h=0;h<o;h++)l[h]=arguments[h];return this.from<=Number(s)&&Number(a)<=this.to&&(t=Xt(Zt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(l))}}]),n}(Ce);de.MaskedRange=Fe;var Se=function(t){Yt(n,t);var e=$t(n);function n(t){return Ut(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Ht(n,[{key:"_update",value:function(t){t.mask===Date&&delete t.mask,t.pattern&&(t.mask=t.pattern);var e=t.blocks;t.blocks=Object.assign({},n.GET_DEFAULT_BLOCKS()),t.min&&(t.blocks.Y.from=t.min.getFullYear()),t.max&&(t.blocks.Y.to=t.max.getFullYear()),t.min&&t.max&&t.blocks.Y.from===t.blocks.Y.to&&(t.blocks.m.from=t.min.getMonth()+1,t.blocks.m.to=t.max.getMonth()+1,t.blocks.m.from===t.blocks.m.to&&(t.blocks.d.from=t.min.getDate(),t.blocks.d.to=t.max.getDate())),Object.assign(t.blocks,e),Object.keys(t.blocks).forEach((function(e){var n=t.blocks[e];"autofix"in n||(n.autofix=t.autofix)})),Xt(Zt(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this.date,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return(t=Xt(Zt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))&&(!this.isComplete||this.isDateExist(this.value)&&null!=e&&(null==this.min||this.min<=e)&&(null==this.max||e<=this.max))}},{key:"isDateExist",value:function(t){return this.format(this.parse(t,this),this).indexOf(t)>=0}},{key:"date",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"typedValue",get:function(){return this.isComplete?Xt(Zt(n.prototype),"typedValue",this):null},set:function(t){Qt(Zt(n.prototype),"typedValue",t,this,!0)}}]),n}(Ce);Se.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(t){return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join(".")},parse:function(t){var e=te(t.split("."),3),n=e[0],u=e[1],r=e[2];return new Date(r,u-1,n)}},Se.GET_DEFAULT_BLOCKS=function(){return{d:{mask:Fe,from:1,to:31,maxLength:2},m:{mask:Fe,from:1,to:12,maxLength:2},Y:{mask:Fe,from:1900,to:9999}}},de.MaskedDate=Se;var De=function(){function t(){Ut(this,t)}return Ht(t,[{key:"selectionStart",get:function(){var t;try{t=this._unsafeSelectionStart}catch(t){}return null!=t?t:this.value.length}},{key:"selectionEnd",get:function(){var t;try{t=this._unsafeSelectionEnd}catch(t){}return null!=t?t:this.value.length}},{key:"select",value:function(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch(t){}}},{key:"_unsafeSelect",value:function(t,e){}},{key:"isActive",get:function(){return!1}},{key:"bindEvents",value:function(t){}},{key:"unbindEvents",value:function(){}}]),t}();de.MaskElement=De;var Be=function(t){Yt(n,t);var e=$t(n);function n(t){var u;return Ut(this,n),(u=e.call(this)).input=t,u._handlers={},u}return Ht(n,[{key:"rootElement",get:function(){return this.input.getRootNode?this.input.getRootNode():document}},{key:"isActive",get:function(){return this.input===this.rootElement.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"_unsafeSelect",value:function(t,e){this.input.setSelectionRange(t,e)}},{key:"value",get:function(){return this.input.value},set:function(t){this.input.value=t}},{key:"bindEvents",value:function(t){var e=this;Object.keys(t).forEach((function(u){return e._toggleEventHandler(n.EVENTS_MAP[u],t[u])}))}},{key:"unbindEvents",value:function(){var t=this;Object.keys(this._handlers).forEach((function(e){return t._toggleEventHandler(e)}))}},{key:"_toggleEventHandler",value:function(t,e){this._handlers[t]&&(this.input.removeEventListener(t,this._handlers[t]),delete this._handlers[t]),e&&(this.input.addEventListener(t,e),this._handlers[t]=e)}}]),n}(De);Be.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"},de.HTMLMaskElement=Be;var we=function(t){Yt(n,t);var e=$t(n);function n(){return Ut(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_unsafeSelectionStart",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection();return e&&e.anchorOffset}},{key:"_unsafeSelectionEnd",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection();return e&&this._unsafeSelectionStart+String(e).length}},{key:"_unsafeSelect",value:function(t,e){if(this.rootElement.createRange){var n=this.rootElement.createRange();n.setStart(this.input.firstChild||this.input,t),n.setEnd(this.input.lastChild||this.input,e);var u=this.rootElement,r=u.getSelection&&u.getSelection();r&&(r.removeAllRanges(),r.addRange(n))}}},{key:"value",get:function(){return this.input.textContent},set:function(t){this.input.textContent=t}}]),n}(Be);de.HTMLContenteditableMaskElement=we;var Me=function(){function t(e,n){Ut(this,t),this.el=e instanceof De?e:e.isContentEditable&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName?new we(e):new Be(e),this.masked=ge(n),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return Ht(t,[{key:"mask",get:function(){return this.masked.mask},set:function(t){if(!this.maskEquals(t))if(t instanceof de.Masked||this.masked.constructor!==ke(t)){var e=ge({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}else this.masked.updateOptions({mask:t})}},{key:"maskEquals",value:function(t){return null==t||t===this.masked.mask||t===Date&&this.masked instanceof Se}},{key:"value",get:function(){return this._value},set:function(t){this.masked.value=t,this.updateControl(),this.alignCursor()}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(t){this.masked.unmaskedValue=t,this.updateControl(),this.alignCursor()}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(t){this.masked.typedValue=t,this.updateControl(),this.alignCursor()}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el&&this.el.unbindEvents()}},{key:"_fireEvent",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),u=1;u<e;u++)n[u-1]=arguments[u];var r=this._listeners[t];r&&r.forEach((function(t){return t.apply(void 0,n)}))}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(t){this.el&&this.el.isActive&&(this.el.select(t,t),this._saveSelection())}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var t=this.masked.unmaskedValue,e=this.masked.value,n=this.unmaskedValue!==t||this.value!==e;this._unmaskedValue=t,this._value=e,this.el.value!==e&&(this.el.value=e),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(t){var e=t.mask,n=Gt(t,["mask"]),u=!this.maskEquals(e),r=!he(this.masked,n);u&&(this.mask=e),r&&this.masked.updateOptions(n),(u||r)&&this.updateControl()}},{key:"updateCursor",value:function(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}},{key:"_delayUpdateCursor",value:function(t){var e=this;this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout((function(){e.el&&(e.cursorPos=e._changingCursorPos,e._abortUpdateCursor())}),10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.cursorPos,re)}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}},{key:"off",value:function(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;var n=this._listeners[t].indexOf(e);return n>=0&&this._listeners[t].splice(n,1),this}},{key:"_onInput",value:function(t){if(this._inputEvent=t,this._abortUpdateCursor(),!this._selection)return this.updateValue();var e=new ce(this.el.value,this.cursorPos,this.value,this._selection),n=this.masked.rawInputValue,u=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection).offset,r=n===this.masked.rawInputValue?e.removeDirection:ue,i=this.masked.nearestInputPos(e.startChangePos+u,r);this.updateControl(),this.updateCursor(i),delete this._inputEvent}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"_onFocus",value:function(t){this.alignCursorFriendly()}},{key:"_onClick",value:function(t){this.alignCursorFriendly()}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}}]),t}();de.InputMask=Me;var xe=function(t){Yt(n,t);var e=$t(n);function n(){return Ut(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_update",value:function(t){t.enum&&(t.mask="*".repeat(t.enum[0].length)),Xt(Zt(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return this.enum.some((function(t){return t.indexOf(e.unmaskedValue)>=0}))&&(t=Xt(Zt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))}}]),n}(Ce);de.MaskedEnum=xe;var Pe=function(t){Yt(n,t);var e=$t(n);function n(t){return Ut(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Ht(n,[{key:"_update",value:function(t){Xt(Zt(n.prototype),"_update",this).call(this,t),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+le(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(t+"(0|([1-9]+\\d*))?"+e),this._numberRegExp=new RegExp(t+"\\d*"+e),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(le).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(le(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(t){return t.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(t){var e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}},{key:"doPrepare",value:function(t){for(var e,u=arguments.length,r=new Array(u>1?u-1:0),i=1;i<u;i++)r[i-1]=arguments[i];return(e=Xt(Zt(n.prototype),"doPrepare",this)).call.apply(e,[this,this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp,this.radix))].concat(r))}},{key:"_separatorsCount",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,u=0;u<t;++u)this._value.indexOf(this.thousandsSeparator,u)===u&&(++n,e&&(t+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=arguments.length>2?arguments[2]:void 0,r=this._adjustRangeWithSeparators(t,e),i=te(r,2);return t=i[0],e=i[1],this._removeThousandsSeparators(Xt(Zt(n.prototype),"extractInput",this).call(this,t,e,u))}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return Xt(Zt(n.prototype),"_appendCharRaw",this).call(this,t,e);var u=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,r=this._separatorsCountFromSlice(u);this._value=this._removeThousandsSeparators(this.value);var i=Xt(Zt(n.prototype),"_appendCharRaw",this).call(this,t,e);this._value=this._insertThousandsSeparators(this._value);var a=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,s=this._separatorsCountFromSlice(a);return i.tailShift+=(s-r)*this.thousandsSeparator.length,i.skip=!i.rawInserted&&t===this.thousandsSeparator,i}},{key:"_findSeparatorAround",value:function(t){if(this.thousandsSeparator){var e=t-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,e);if(n<=t)return n}return-1}},{key:"_adjustRangeWithSeparators",value:function(t,e){var n=this._findSeparatorAround(t);n>=0&&(t=n);var u=this._findSeparatorAround(e);return u>=0&&(e=u+this.thousandsSeparator.length),[t,e]}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=this._adjustRangeWithSeparators(t,e),u=te(n,2);t=u[0],e=u[1];var r=this.value.slice(0,t),i=this.value.slice(e),a=this._separatorsCount(r.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(r+i));var s=this._separatorsCountFromSlice(r);return new fe({tailShift:(s-a)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(t,e){if(!this.thousandsSeparator)return t;switch(e){case ue:case re:case ie:var n=this._findSeparatorAround(t-1);if(n>=0){var u=n+this.thousandsSeparator.length;if(t<u||this.value.length<=u||e===ie)return n}break;case ae:case se:var r=this._findSeparatorAround(t);if(r>=0)return r+this.thousandsSeparator.length}return t}},{key:"doValidate",value:function(t){var e=(t.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(e){var u=this.number;e=e&&!isNaN(u)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return e&&Xt(Zt(n.prototype),"doValidate",this).call(this,t)}},{key:"doCommit",value:function(){if(this.value){var t=this.number,e=t;null!=this.min&&(e=Math.max(e,this.min)),null!=this.max&&(e=Math.min(e,this.max)),e!==t&&(this.unmaskedValue=String(e));var u=this.value;this.normalizeZeros&&(u=this._normalizeZeros(u)),this.padFractionalZeros&&(u=this._padFractionalZeros(u)),this._value=u}Xt(Zt(n.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(t){var e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,(function(t,e,n,u){return e+u})),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}},{key:"_padFractionalZeros",value:function(t){if(!t)return t;var e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(t){Qt(Zt(n.prototype),"unmaskedValue",t.replace(".",this.radix),this,!0)}},{key:"typedValue",get:function(){return Number(this.unmaskedValue)},set:function(t){Qt(Zt(n.prototype),"unmaskedValue",String(t),this,!0)}},{key:"number",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}}]),n}(ve);Pe.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1},de.MaskedNumber=Pe;var Oe=function(t){Yt(n,t);var e=$t(n);function n(){return Ut(this,n),e.apply(this,arguments)}return Ht(n,[{key:"_update",value:function(t){t.mask&&(t.validate=t.mask),Xt(Zt(n.prototype),"_update",this).call(this,t)}}]),n}(ve);de.MaskedFunction=Oe;var Te=function(t){Yt(n,t);var e=$t(n);function n(t){var u;return Ut(this,n),(u=e.call(this,Object.assign({},n.DEFAULTS,t))).currentMask=null,u}return Ht(n,[{key:"_update",value:function(t){Xt(Zt(n.prototype),"_update",this).call(this,t),"mask"in t&&(this.compiledMasks=Array.isArray(t.mask)?t.mask.map((function(t){return ge(t)})):[])}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._applyDispatch(t,e);return this.currentMask&&n.aggregate(this.currentMask._appendChar(t,e)),n}},{key:"_applyDispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,u=this.rawInputValue,r=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:u,i=u.slice(r.length),a=this.currentMask,s=new fe,o=a&&a.state;if(this.currentMask=this.doDispatch(t,Object.assign({},e)),this.currentMask)if(this.currentMask!==a){if(this.currentMask.reset(),r){var l=this.currentMask.append(r,{raw:!0});s.tailShift=l.inserted.length-n.length}i&&(s.tailShift+=this.currentMask.append(i,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=o;return s}},{key:"_appendPlaceholder",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}},{key:"doDispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(t,this,e)}},{key:"doValidate",value:function(){for(var t,e,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return(t=Xt(Zt(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))&&(!this.currentMask||(e=this.currentMask).doValidate.apply(e,r))}},{key:"reset",value:function(){this.currentMask&&this.currentMask.reset(),this.compiledMasks.forEach((function(t){return t.reset()}))}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(t){Qt(Zt(n.prototype),"value",t,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(t){Qt(Zt(n.prototype),"unmaskedValue",t,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(t){var e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}},{key:"isComplete",get:function(){return!!this.currentMask&&this.currentMask.isComplete}},{key:"remove",value:function(){var t,e=new fe;this.currentMask&&e.aggregate((t=this.currentMask).remove.apply(t,arguments)).aggregate(this._applyDispatch());return e}},{key:"state",get:function(){return Object.assign({},Xt(Zt(n.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map((function(t){return t.state})),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state})},set:function(t){var e=t.compiledMasks,u=t.currentMaskRef,r=t.currentMask,i=Gt(t,["compiledMasks","currentMaskRef","currentMask"]);this.compiledMasks.forEach((function(t,n){return t.state=e[n]})),null!=u&&(this.currentMask=u,this.currentMask.state=r),Qt(Zt(n.prototype),"state",i,this,!0)}},{key:"extractInput",value:function(){var t;return this.currentMask?(t=this.currentMask).extractInput.apply(t,arguments):""}},{key:"extractTail",value:function(){for(var t,e,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return this.currentMask?(t=this.currentMask).extractTail.apply(t,r):(e=Xt(Zt(n.prototype),"extractTail",this)).call.apply(e,[this].concat(r))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),Xt(Zt(n.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var t,e,u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return this.currentMask?(t=this.currentMask).nearestInputPos.apply(t,r):(e=Xt(Zt(n.prototype),"nearestInputPos",this)).call.apply(e,[this].concat(r))}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:Xt(Zt(n.prototype),"overwrite",this)},set:function(t){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}}]),n}(ve);Te.DEFAULTS={dispatch:function(t,e,n){if(e.compiledMasks.length){var u=e.rawInputValue,r=e.compiledMasks.map((function(e,r){return e.reset(),e.append(u,{raw:!0}),e.append(t,n),{weight:e.rawInputValue.length,index:r}}));return r.sort((function(t,e){return e.weight-t.weight})),e.compiledMasks[r[0].index]}}},de.MaskedDynamic=Te;var Ie={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function je(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ie.MASKED,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ie.MASKED,u=ge(t);return function(t){return u.runIsolated((function(u){return u[e]=t,u[n]}))}}function Ve(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),u=1;u<e;u++)n[u-1]=arguments[u];return je.apply(void 0,n)(t)}de.PIPE_TYPE=Ie,de.createPipe=je,de.pipe=Ve;try{globalThis.IMask=de}catch(t){}t.HTMLContenteditableMaskElement=we,t.HTMLMaskElement=Be,t.InputMask=Me,t.MaskElement=De,t.Masked=ve,t.MaskedDate=Se,t.MaskedDynamic=Te,t.MaskedEnum=xe,t.MaskedFunction=Oe,t.MaskedNumber=Pe,t.MaskedPattern=Ce,t.MaskedRange=Fe,t.MaskedRegExp=be,t.PIPE_TYPE=Ie,t.createMask=ge,t.createPipe=je,t.default=de,t.pipe=Ve,Object.defineProperty(t,"__esModule",{value:!0})}));

;"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var root = document.documentElement;
  var body = document.body;
  var appealCodeRedirect = document.querySelector('a[data-campaign-id][href*="appealCode"]');
  var ecardRedirect = document.querySelector('a[data-campaign-id][href*="action"]');
  var seamlessEcardBlock = document.querySelector('.seamless-ecard'); // Classes

  var activeClass = 'is-active';
  var advocacyShareClass = 'advocacy-share-bar-block';
  var collapseShowClass = 'show';
  var disabledClass = 'disabled';
  var displayClass = 'd-block';
  var errorBoxClass = 'error-box';
  var hiddenClass = 'd-none';
  var hiddenWebOnlyClass = 'd-none--web';
  var paypalSelectedClass = 'paypal-selected';
  var photoInfoClass = 'photo-info';
  var popoverClass = 'popover';
  var popoverContainerClass = 'popover-container';
  var validClass = 'is-active';
  var validationFailedClass = 'en__field--validationFailed';
  var visuallyHiddenClass = 'visually-hidden'; // Selectors

  var ccExpMonthSelect = '#en__field_transaction_ccexpire';
  var ccExpYearSelect = '.en__field--ccexpire .en__field__item:last-child select';
  var ccNumberFieldSelector = '.en__field--ccnumber';
  var ccNumberInputSelector = '#en__field_transaction_ccnumber';
  var countrySelect = '#en__field_supporter_country';
  var dateInputSelector = '.en__field[class*="date"] .en__field__input--text, .en__field--888858 .en__field__input--text';
  var donationAmountSelector = '.en__field--donationAmt .en__field__element--text';
  var ecardFieldsSelector = '.ecard-fields';
  var ecardSelectSelector = '.ecard-select';
  var errorSelector = '.en__field__error';
  var enFieldSelector = '.en__field';
  var enFieldItemSelector = '.en__field__item';
  var giftDesignationSelect = '#en__field_transaction_dirgift';
  var homePhoneInputSelector = '#en__field_supporter_phoneNumber';
  var honoreeCountrySelect = '#en__field_supporter_NOT_TAGGED_38';
  var honoreeStateProvinceSelect = '#en__field_supporter_NOT_TAGGED_35';
  var informCountrySelect = '#en__field_transaction_infcountry';
  var informStateProvinceSelect = '#en__field_transaction_infreg';
  var mobilePhoneSameAsHomeCheckboxSelector = '#en__field_supporter_questions_891102, .en__field--my-mobile-phone-is-the-same-as-my-primary-phone .en__field__input--checkbox';
  var mobilePhoneInputSelector = '#en__field_supporter_phoneNumber2';
  var otherAmountSelector = '.en__field--donationAmt .en__field__item--other';
  var otherAmountInputSelector = '.en__field--donationAmt .en__field__input--other, .en__field--donationAmt .en__field__input--text';
  var paymentMethodSelector = '[class*="en__field--payment-method"]';
  var paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio';
  var paymentTypeSelector = '[name="transaction.paymenttype"]';
  var paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox';
  var stateProvinceSelect = '#en__field_supporter_region';
  var supporterEmailAddressSelector = '#en__field_supporter_emailAddress';
  var supporterStateSelector = '#en__field_supporter_region';
  var supporterZipCodeSelector = '#en__field_supporter_postcode';
  var tipJarSelector = '.en__field--tip-jar';
  var tipJarAmountSelector = '.js-total-gift--tipjar';
  var tipJarToggle = '.tip-jar-toggle';
  var totalAmountSelector = '.js-total-gift';
  var tributeOptionsSelector = 'select#en__field_transaction_trbopts'; // Custom events

  var iframeSubmitted = new CustomEvent('iframeSubmitted'); // Elements

  var theForm = document.querySelector('.en__component--page') || document.querySelector('.main'); // Masks

  var numberPipe = IMask.createPipe({
    mask: 'num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: ',',
        padFractionalZeros: true,
        radix: '.'
      }
    }
  });
  var masks = []; // Widgets

  var cleave = null; // Constants

  var thermThresholdPct = 80;
  var thermIncrease = 1.25;
  var tipJarPct = 0.03;
  /**
   * Form interface enhancements
   */

  var ui = function ui() {
    var el = null;
    var els = null;
    var _parent = null;
    var wrap = null;
    var stateProvinceChoices = null;
    var honoreeStateProvinceChoices = null;
    var informStateProvinceChoices = null;
    var currentChoices = null;
    /**
     * Set the value of choices when autofill is detected
     *
     * @param {choices} choices choices.js instance to set value for
     * @param {event} e
     */

    var handleChoicesChange = function handleChoicesChange(e) {
      var _target = e.target;

      _target.choices.setValue([{
        value: _target.value,
        label: _target.querySelector("option[value=\"" + _target.value + "\"]").textContent
      }]);

      resetSelect(_target.choices, e);
    };
    /**
     * choices.js removes <options> form the native select
     * Restoring the <options> allows choices.js to work with browser autofill
     *
     * @param {choices} choices choices.js instance to restore options to
     */


    var resetSelect = function resetSelect(_choices, e) {
      var selectOne = _choices.passedElement.element;
      var selectValue = selectOne.value;
      var html = '';
      var index = 1; // Only do this for state selects
      //if (_choices._baseId.indexOf('region') > -1) {
      // Clear the native select

      selectOne.innerHTML = ''; //Remove the duplicate that this method generates at bottom of list

      if (e) {
        _choices.choiceList.element.removeChild(_choices.choiceList.element.lastChild);
      } // Re-add all <options> to native select


      getAll('.choices__item', _choices.choiceList.element).forEach(function (el) {
        var choiceSelected = el.dataset.value === selectValue ? true : false;
        var opt = document.createElement('option');
        opt.value = el.dataset.value;
        opt.text = el.textContent;
        opt.selected = choiceSelected;
        selectOne.add(opt, null);
      });
      currentChoices = _choices;
      selectOne.choices = _choices; // Listen for an autofill (change event)

      selectOne.removeEventListener('change', handleChoicesChange);
      selectOne.addEventListener('change', handleChoicesChange); //}
    };
    /**
     * Creates choices.js instance
     *
     * @param {node} el Target to apply choices to
     */


    var createChoices = function createChoices(el) {
      return new Choices(el, {
        silent: true,
        duplicateItemsAllowed: false,
        itemSelectText: '',
        searchResultLimit: 100,
        shouldSort: false,
        fuseOptions: {
          distance: 0
        },
        callbackOnInit: function callbackOnInit() {
          var _choices = this;

          var label = theForm.querySelector("label[for=\"" + _choices.passedElement.element.id + "\"]");
          var choicesId = "choices" + generateId();

          _choices.enable();

          if (label) {
            // Add aria attributes to combobox
            _choices.containerOuter.element.setAttribute('aria-label', label.textContent);

            setAttributes(_choices.containerOuter.element, {
              'aria-label': label.textContent,
              'aria-owns': choicesId
            }); // Add aria attributes to listbox

            _choices.choiceList.element.setAttribute('aria-label', "Select " + label.textContent.replace(/Select/, ''));

            _choices.choiceList.element.id = choicesId;
          } // restrict the search field to one character to avoid false results
          //_choices.input.element.setAttribute('maxlength', '1');
          // role=textbox is unneccesary in our setup


          getAll('[role="textbox"]', _choices.containerOuter.element).forEach(function (el) {
            el.removeAttribute('role');
          });
          resetSelect(_choices, null);
        }
      });
    };
    /**
     * Destroys a choices.js instance
     *
     * @param {choices} choices choices.js instance to destroy
     */


    var destroyChoices = function destroyChoices(_choices, selector) {
      _choices.clearInput();

      _choices.destroy();

      _choices = null;
    }; // Add body classes


    if (typeof pageJson !== 'undefined') {
      addClass(body, "page--" + pageJson.pageNumber);
    }

    if (document.querySelector('.quiz')) {
      addClass(body, 'page--quiz');
    } else if (document.querySelector('.hub')) {
      addClass(body, 'page--hub');
    } else if (document.querySelector('.related-actions.card')) {
      addClass(body, 'has-related-actions');
    } else if (document.querySelector('.action-center')) {
      addClass(body, 'page--action-center');
    } else if (typeof pageJson !== 'undefined') {
      if (pageJson.pageCount === pageJson.pageNumber) {
        addClass(body, 'page--confirmation');
      }
    } // Set width of full bleed elements


    var scrollbarWidth = window.innerWidth - document.body.clientWidth;
    getAll('.page--quiz .en__component--advrow, .page--hub.page--1 .en__component--advrow, .hero-full-bleed').forEach(function (el) {
      el.style.width = "calc(100vw - " + scrollbarWidth + "px)";
      el.style.marginLeft = "calc(-50vw + " + scrollbarWidth / 2 + "px)";
    }); // Don't forget pseudo elements

    root.style.setProperty('--scrollbarWidth', scrollbarWidth + "px"); // Initiate choices.js

    getAll("select:not(" + stateProvinceSelect + "):not(" + informStateProvinceSelect + "):not(" + giftDesignationSelect + ")").forEach(function (el) {
      createChoices(el);
    }); // Structure modals

    els = getAll('.modal-header, .modal-body, .modal-footer');

    if (els.length > 0) {
      wrapAll(els, 'div', 'modal-content');
    }

    getAll('.modal-content').forEach(function (el) {
      wrapEl(el, 'div', ['modal-dialog', 'modal-lg']);
    });
    getAll('.modal').forEach(function (el) {
      // Add attributes
      setAttributes(el, {
        'data-bs-backdrop': 'static',
        'data-bs-keyboard': 'false',
        'data-bs-dismiss': 'false',
        'tabindex': '-1',
        'aria-labelledby': 'modalTitle',
        'aria-hidden': 'true'
      }); // Move modals to end of main form
      //theForm.append(el);
    }); // Allow EN swap lists for billing state/province field

    el = theForm.querySelector(stateProvinceSelect);

    if (el) {
      stateProvinceChoices = createChoices(el);
    } // Allow EN swap lists on country field change


    el = theForm.querySelector(countrySelect);

    if (el) {
      if (stateProvinceChoices) {
        el.addEventListener('change', function (e) {
          // Rebuild state/province choices
          destroyChoices(stateProvinceChoices);
          setTimeout(function () {
            stateProvinceChoices = createChoices(theForm.querySelector(stateProvinceSelect));
          }, 100);
        });
      }
    } // Allow EN swap lists for honoree state/province field


    el = theForm.querySelector(honoreeStateProvinceSelect);

    if (el) {
      honoreeStateProvinceChoices = createChoices(el);
    } // Allow EN swap lists on country field change


    el = theForm.querySelector(honoreeCountrySelect);

    if (el) {
      if (honoreeStateProvinceChoices) {
        el.addEventListener('change', function (e) {
          // Rebuild state/province choices
          destroyChoices(honoreeStateProvinceChoices);
          setTimeout(function () {
            honoreeStateProvinceChoices = createChoices(theForm.querySelector(honoreeStateProvinceSelect));
          }, 100);
        });
      }
    } // Allow EN swap lists for person to be notified state/province field


    el = theForm.querySelector(informStateProvinceSelect);

    if (el) {
      informStateProvinceChoices = createChoices(el);
    } // Allow EN swap lists on person to be notified country field change


    el = theForm.querySelector(informCountrySelect);

    if (el) {
      if (informStateProvinceChoices) {
        el.addEventListener('change', function (e) {
          // Rebuild state/province choices
          destroyChoices(informStateProvinceChoices);
          setTimeout(function () {
            informStateProvinceChoices = createChoices(theForm.querySelector(informStateProvinceSelect));
          }, 100);
        });
      }
    } // Allow EN swap value for gift designation field


    el = theForm.querySelector(giftDesignationSelect);

    if (el) {
      giftDesignationChoices = createChoices(el);
      getAll('.en__field--gift-designation-managed-donors-yn .en__field__input--radio').forEach(function (el) {
        if (giftDesignationChoices) {
          el.addEventListener('click', function (e) {
            // Rebuild gift designation choices
            destroyChoices(giftDesignationChoices);
            setTimeout(function () {
              giftDesignationChoices = createChoices(theForm.querySelector(giftDesignationSelect));
            }, 100);
          });
        }
      });
    }
    /**
     * Shows tribute headings that match headingClass
     *
     * @param {string} headingClass Class of headings to show
     */


    var showTributeHeadings = function showTributeHeadings(headingClass) {
      // Hide everything
      getAll('.heading-honor, .heading-memory, .heading-gift').forEach(function (el) {
        addClass(el, hiddenWebOnlyClass);
      }); // Show the right heading

      getAll(headingClass).forEach(function (el) {
        removeClass(el, hiddenWebOnlyClass);
      });
    }; // Selecting a tribute option might change headings on the form


    el = theForm.querySelector(tributeOptionsSelector);

    if (el) {
      el.addEventListener('change', function (e) {
        switch (e.target.value) {
          case 'In Honor':
            showTributeHeadings('.heading-honor');
            break;

          case 'In Memory':
            showTributeHeadings('.heading-memory');
            break;

          case 'Gift':
            showTributeHeadings('.heading-gift');
            break;
        }
      });
    } // Is there a full bleed hero?


    addClass(document.body, maybeHasHero()); // Is there a solid color hero?

    addClass(document.body, maybeHasHeroSolid()); // Is there a processing error?

    els = getAll('.en__errorHeader, .en__errorList');

    if (els.length > 0 && !isEmpty(theForm.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', errorBoxClass);
    } // Advocacy share text and share buttons blocks need to be wrapped for layout


    els = getAll('.advocacy-share-bar, .advocacy-share-bar + .en__component--socialshareblock');

    if (els.length > 0) {
      wrapAll(els, 'div', advocacyShareClass);
    } // Placeholders for some inputs


    getAll(otherAmountInputSelector).forEach(function (el) {
      var fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        addPlaceholder(el, fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    }); // Placeholders for address 2 fields

    getAll('[name*="address2"], [name*="add2"]').forEach(function (el) {
      el.setAttribute('placeholder', 'Apt, ste, bldg.');
    }); // Hardcode placeholder for date fields

    getAll(dateInputSelector).forEach(function (el) {
      addPlaceholder(el, 'Select Date');
    }); // Maybe convert event address to Google maps link

    getAll('.link-to-map address').forEach(function (el) {
      var wrap = wrapEl(el, 'a');

      if (wrap) {
        setAttributes(wrap, {
          'href': "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(el.textContent),
          'target': '_blank'
        });
      }
    }); // Wrap event ticket selector

    getAll('.en__ticket__selector').forEach(function (el) {
      els = getAll('.en__ticket__minus, .en__ticket__quantity, .en__ticket__plus', el);

      if (els.length > 0) {
        wrapAll(els, 'div', 'input-group');
      }
    }); // Missing event ticket quantity labels

    getAll('.en__ticket__quantity').forEach(function (el) {
      addLabel(el, el.parentElement, 'Quantity');
    }); // Missing additional donation label

    getAll('.en__additional__input').forEach(function (el) {
      addLabel(el, el.parentElement, 'Additional donation (optional)');
    }); // Missing promo code label

    getAll('.en__additional__code').forEach(function (el) {
      addLabel(el, el.parentElement, 'Promo code');
    }); // Move additional donation fields

    el = theForm.querySelector('.en__additional__amount');
    _parent = theForm.querySelector('.form-heading--additional');

    if (el && _parent) {
      _parent.append(el);
    } // Move promo code field


    el = theForm.querySelector('.en__additional__promo');
    _parent = theForm.querySelector('.form-heading--promo');

    if (el && _parent) {
      _parent.append(el);
    } // Wrap additional donation and promo code fields


    els = getAll('.form-heading--additional, .form-heading--promo');

    if (els.length > 0) {
      wrapAll(els, 'div', ['row', 'justify-content-between', 'additional-promo']);
    } // Missing split select labels


    el = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child .en__field__input--splitselect');
    _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

    if (el && _parent) {
      addLabel(el, el.parentElement, 'Credit card expiration year').then(function (labelId) {
        var _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

        getAll('[role="combobox"], [role="listbox"]', _parent).forEach(function (el) {
          el.setAttribute('aria-labelledby', labelId);
        });
      });
    } // Missing triple select labels


    getAll('.en__field--tripleselect').forEach(function (el) {
      var label = el.querySelector('.en__field__label');

      if (label) {
        labelId = label.id ? label.id : "label" + generateId();
        label.id = labelId;
        getAll('[role="combobox"], [role="listbox"]', el).forEach(function (el) {
          el.setAttribute('aria-labelledby', labelId);
        });
      }
    }); // Radio element accessibility

    getAll('.en__field--radio').forEach(function (el) {
      // Some radio elements have loose labels
      var looseLabel = el.querySelector('label:first-child');
      var replaceLabel = null;

      if (looseLabel) {
        replaceLabel = document.createElement('p');
        replaceLabel.textContent = looseLabel.textContent;
        replaceLabel.id = looseLabel.id;
        replaceLabel.classList = looseLabel.classList;
        looseLabel.parentNode.replaceChild(replaceLabel, looseLabel);
      } // Add aria role


      el.setAttribute('role', 'radiogroup');

      if (hasClass(el, 'en__field--donationAmt')) {
        el.setAttribute('aria-labelledby', 'giftAmountLabel');
      } else {
        addAriaLabelledBy(el);
      }
    }); // Checkbox element accessibility

    getAll('.en__field--checkbox.en__field--survey').forEach(function (el) {
      // Some checkbox elements have loose labels
      var looseLabel = el.querySelector('label:first-child');
      var replaceLabel = null;

      if (looseLabel) {
        replaceLabel = document.createElement('p');
        replaceLabel.textContent = looseLabel.textContent;
        replaceLabel.id = looseLabel.id;
        replaceLabel.classList = looseLabel.classList;
        looseLabel.parentNode.replaceChild(replaceLabel, looseLabel);
      } // Add aria role


      el.setAttribute('role', 'group');
      addAriaLabelledBy(el);
    }); // Missing Other Amount label

    el = theForm.querySelector(otherAmountInputSelector);
    _parent = theForm.querySelector(otherAmountSelector);

    if (el && _parent) {
      placeholderToLabel(el, _parent);
    } // Aria role for split selects


    getAll('.en__field--splitselect').forEach(function (el) {
      el.setAttribute('role', 'group');
      addAriaLabelledBy(el);
    }); // Labels are sometimes blank

    getAll('.en__field__label').forEach(function (el) {
      if (isEmpty(el)) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    }); // Convert URL strings to images for dummy select ecard radios

    el = theForm.querySelector('[class*="select-an-ecard"]');

    if (el) {
      getAll('.en__field__label--item', el).forEach(function (el) {
        createImgFromUrl(el.textContent, el);
      });
    } // Prevent autofill on mem/trib fields


    getAll('.en__field--ecard-recipient-email-addresses .en__field__input, .en__field--honname .en__field__input, .en__field--honname ~ .en__field .en__field__input, .en__field--infname .en__field__input, .en__field--infname ~ .en__field .en__field__input').forEach(function (el) {
      el.setAttribute('autocomplete', 'photo');
    }); // Autocomplete attributes for CC expiration fields

    el = theForm.querySelector(ccExpMonthSelect);

    if (el) {
      el.setAttribute('autocomplete', 'cc-exp-month');
    }

    el = theForm.querySelector(ccExpYearSelect);

    if (el) {
      el.setAttribute('autocomplete', 'cc-exp-year');
    } // Add inputmode attribute for credit card fields


    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(function (el) {
      el.setAttribute('inputmode', 'numeric');
    }); // Display minimum donation amount

    el = theForm.querySelector(donationAmountSelector) || theForm.querySelector(otherAmountSelector);

    if (el) {
      // Getting the minimum amount from the EN validator
      var minAmountValidator = EngagingNetworks.validators.filter(function (obj) {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }

        return false;
      });

      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
        addEl(el, 'p', "$" + minAmountValidator[0].format.split('~')[0] + " minimum", 'fw-medium');
      }
    } // Other amount field is always visible, so the corresponding radio need to be button clicked here even though hidden


    el = theForm.querySelector('.en__field__input--other');

    if (el) {
      el.addEventListener('focus', function (e) {
        var otherRadio = e.target.closest('.en__field__item').previousElementSibling.querySelector('.en__field__input--radio');

        if (otherRadio) {
          otherRadio.click();
        }
      });
    } // Reposition help text found in labels


    getAll('.field__help').forEach(function (el) {
      getClosestEl(el, enFieldSelector).append(el);
    }); // Provide credit card type feedback

    el = theForm.querySelector(ccNumberInputSelector);

    if (el) {
      cleave = new Cleave(ccNumberInputSelector, {
        creditCard: true,
        onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {
          var ccField = theForm.querySelector(ccNumberFieldSelector);
          updatePaymentType(type);

          if (ccField) {
            removeClass(ccField, ['amex', 'mastercard', 'visa', 'diners', 'discover', 'jcb', 'dankort', 'instapayment', 'uatp', 'mir', 'unionPay', 'unknown']);
            addClass(ccField, type);
          }
        }
      });
    } // Handle switching between Check and CC payment methods


    el = theForm.querySelector(paymentMethodRadioSelector);

    if (el && cleave) {
      getAll('.en__field__input--radio', el).forEach(function (el) {
        el.addEventListener('click', function (e) {
          var paymentMethod = e.target.value;

          if (paymentMethod === 'CC') {
            updatePaymentType(cleave.properties.creditCardType);
          } else if (paymentMethod === 'Check') {
            var paymentType = theForm.querySelector(paymentTypeSelector);

            if (paymentType) {
              paymentType.value = 'ACH';
            }
          }
        });
      });
    }

    var setPaymentType = function setPaymentType(paymentType) {
      var hasPaymentMethod = theForm.querySelector(paymentMethodRadioSelector);
      var selectedPaymentMethod = null;

      if (hasPaymentMethod) {
        selectedPaymentMethod = hasPaymentMethod.querySelector('.en__field__input--radio:checked').value;

        if (selectedPaymentMethod === 'CC') {
          updatePaymentType(cleave.properties.creditCardType);
        } else if (selectedPaymentMethod === 'Check') {
          paymentType.value = 'ACH';
        }
      } else {
        updatePaymentType(cleave.properties.creditCardType);
      }
    }; // Paypal checkbox needs to hide credit card blocks and set payment type


    el = theForm.querySelector(paypalInputSelector);
    _parent = theForm.querySelector(paymentMethodSelector);

    if (el && _parent) {
      el.addEventListener('click', function (e) {
        var paymentType = theForm.querySelector(paymentTypeSelector);
        _parent = getClosestEl(_parent, '.en__component--formblock');

        if (_parent && paymentType) {
          if (e.target.checked) {
            addClass(_parent, paypalSelectedClass);
            paymentType.value = 'Paypal';
          } else {
            removeClass(_parent, paypalSelectedClass);
            setPaymentType(paymentType);
          }
        }
      });
    } // Set sharing URLs for action center items


    getAll('.advocacy-related-actions:not(:only-of-type)').forEach(function (el) {
      var facebookShareLink = el.querySelector('.en__socialShare--facebook');
      var twitterShareLink = el.querySelector('.en__socialShare--twitter');
      var shareLink = el.querySelector('a[data-campaign-id]');
      var shareUrl = null;

      if (facebookShareLink && twitterShareLink && shareLink) {
        shareUrl = shareLink.getAttribute('href');
        facebookShareLink.setAttribute('href', makeFacebookUrl(facebookShareLink.getAttribute('href'), shareUrl));
        twitterShareLink.setAttribute('href', makeTwitterUrl(shareLink.textContent, twitterShareLink.getAttribute('href'), shareUrl));
      }
    }); // Active state for field containers

    getAll('.en__field__input').forEach(function (el) {
      el.addEventListener('focus', activateField);
      el.addEventListener('blur', deactivateField);
    }); // Init datepickers

    var datepickers = [].slice.call(document.querySelectorAll(dateInputSelector));
    var datepickersList = datepickers.map(function (el) {
      var today = new Date();
      var maxDate = new Date(today); // Restrict date selection to one year out

      maxDate.setDate(maxDate.getDate() + 90);
      return new Datepicker(el, {
        autohide: true,
        buttonClass: 'btn btn-link',
        clearBtn: true,
        maxDate: maxDate,
        minDate: new Date(),
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="7.121" height="11.414" viewBox="0 0 7.121 11.414"><path id="Stroke_1_Copy_2" data-name="Stroke 1 Copy 2" d="M10,0,5,5,0,0" transform="translate(0.707 10.707) rotate(-90)" fill="none" stroke-miterlimit="10" stroke-width="2"/></svg>',
        orientation: 'bottom top auto',
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="7.121" height="11.414" viewBox="0 0 7.121 11.414"><path id="Stroke_1_Copy_2" data-name="Stroke 1 Copy 2" d="M10,0,5,5,0,0" transform="translate(6.414 0.707) rotate(90)" fill="none" stroke-miterlimit="10" stroke-width="2"/></svg>',
        showOnClick: true,
        todayHighlight: false
      });
    }); // Add inputmode attribute for date fields to prevent mobile keyboard

    getAll('.datepicker-input').forEach(function (el) {
      el.setAttribute('inputmode', 'none');
      el.readOnly = true;
    }); // Each photo in hero and sidebar elements needs description and meta info popover

    getAll('.en__component--imageblock, .en__component--copyblock .card').forEach(function (el) {
      createImgTooltip(el);
    }); // Create popovers elements

    if (typeof popoverTranslations !== 'undefined' && typeof pageJson !== 'undefined') {
      popoverTranslations.forEach(function (translation) {
        var locale = translation[pageJson.locale] ? pageJson.locale : 'en-US';
        createPopover(translation.field, translation.placement, translation[locale].label, translation[locale].text);
      });
    } // Init accordions


    getAll('.accordion').forEach(function (accordion) {
      getAll('.accordion-button').forEach(function (el) {
        el.addEventListener('click', function (e) {
          setTimeout(function () {
            addAriaCollapsedAttr(document.getElementById(e.target.dataset.bsTarget.replace(/#/, '')), getAll('.accordion-collapse', accordion));
          }, 500);
        });
      });
    }); // Init collapsibles

    getAll('.btn-collapse').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var _target = e.target;

        if (hasClass(_target, 'expanded')) {
          removeClass(_target, 'expanded');
          _target.textContent = 'See more';
        } else {
          addClass(_target, 'expanded');
          _target.textContent = 'See less';
        }
      });
    }); //Init popovers

    var popoverTriggerList = [].slice.call(theForm.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        boundry: theForm,
        container: getClosestEl(popoverTriggerEl, '.popover-container') ? getClosestEl(popoverTriggerEl, '.popover-container') : getClosestEl(popoverTriggerEl, enFieldSelector),
        html: true,
        placement: 'bottom',
        fallbackPlacements: ['bottom', 'top'],
        template: '<div class="popover" role="tooltip"><div class="popover-control"><a class="popover-close" role="button" aria-label="close popover" onclick="closePopover(); return false;"></a></div><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: 'click focus',
        sanitize: false
      });
    }); // Workaround for not being able to set popover position explicity

    var _loop = function _loop(i) {
      var _index = i;
      var _root = root;
      popoverTriggerList[i].addEventListener('shown.bs.popover', function (e) {
        _root.style.setProperty('--popperTranslateX', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[0]);

        _root.style.setProperty('--popperTranslateY', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[1]);
      });
    };

    for (var i = 0; i < popoverTriggerList.length; i++) {
      _loop(i);
    } // Close popovers with button


    var closePopover = function closePopover() {
      for (var i = 0; i < popoverList.length; i++) {
        popoverList[i].hide();
      }
    }; // Globalize for inline onclick


    window.closePopover = closePopover; // Init other amount input mask

    var initMasks = function initMasks() {
      // Clear any existing masks
      masks.forEach(function (mask) {
        mask.destroy();
      }); // Add mask and inputmode attribute for currency fields. Also prevent autofill

      getAll('[name*="Amt"]:not([name*="Amt1"]):not([name*="Amt2"]):not([name*="Amt3"]):not([name*="Amt4"]), [name*="amt"]:not([name*="amt1"]):not([name*="amt2"]):not([name*="amt3"]):not([name*="amt4"]), input[type="text"].en__additional__input').forEach(function (el, index) {
        setAttributes(el, {
          'autocomplete': 'photo',
          'inputmode': 'decimal'
        });
        masks[index] = IMask(el, {
          mask: 'num',
          blocks: {
            num: {
              mask: Number,
              thousandsSeparator: '',
              padFractionalZeros: true,
              radix: '.'
            }
          }
        }); // Update existing value

        masks[index].updateValue();
      });
    };

    initMasks(); // Globalize

    window.initMasks = initMasks;
  };
  /**
   * Donation form enhancements
   */


  var donationForm = function donationForm() {
    var appealCode = theForm.querySelector('.en__field--appealCode');
    var bequestIframe = theForm.querySelector('.iframe--bequest iframe');
    var bequestModal = theForm.querySelector('.modal--bequest');
    var donationAmt = theForm.querySelector('.en__field--donationAmt');
    var giftDesignationYN = theForm.querySelector('.en__field--gift-designation-yn');
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var recurrenceFrequency = theForm.querySelector('.en__field--recurrfreq');
    var tipJar = theForm.querySelector('.en__field--tip-jar');
    var donationAmtRadios = null;
    var modal = null;
    var selectedAmount = getSelectedAmount();
    var tipJarCheckbox = null;
    var tipJarUserChecked = false;

    var disableTipJar = function disableTipJar() {
      restoreDonationAmounts();
      updateTotalGift(getOriginalDonationAmount());
      addClass(tipJar, disabledClass);
    };

    var enableTipJar = function enableTipJar() {
      removeClass(tipJar, disabledClass);
    };

    var increaseDonationAmounts = function increaseDonationAmounts() {
      if (otherAmountInput) {
        if (otherAmountInput.value !== '') {
          otherAmountInput.dataset.tipjar = getTipJar(otherAmountInput.value);
          return;
        }
      }

      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(function (el) {
        if (!el.dataset.original) {
          el.dataset.original = el.value.replace(/\,/g, '');
        }

        el.value = getTipJar(el.dataset.original).replace(/\,/g, '');
      });
    };

    var restoreDonationAmounts = function restoreDonationAmounts() {
      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(function (el) {
        el.value = el.dataset.original ? el.dataset.original : el.value.replace(/\,/g, '');
      });
    };

    var updateDonationAmounts = function updateDonationAmounts(el, fieldType) {
      if (el.checked) {
        increaseDonationAmounts();
      } else {
        restoreDonationAmounts();
      }
    };

    var maybeUncheckTipJar = function maybeUncheckTipJar(amt) {
      if (tipJarCheckbox.checked && !tipJarUserChecked && !isNaN(amt)) {
        if (Number(amt) >= 1000) {
          tipJarCheckbox.checked = false;
        }
      }
    };

    var handleDonationAmountChange = function handleDonationAmountChange(e) {
      if (tipJarCheckbox) {
        maybeUncheckTipJar(getOriginalDonationAmount());
        updateDonationAmounts(tipJarCheckbox);
        updateTipJar(getTipJar(getOriginalDonationAmount()));
        updateTotalGift(tipJarCheckbox.checked ? getTipJar(getOriginalDonationAmount()) : e.target.value);
      } else {
        updateTotalGift(e.target.value);
      } // Work around for mobile pay not getting latest amount


      if (e.type === 'click') {
        doubleClickAmount(e.target);
      }
    };

    var doubleClickAmount = function doubleClickAmount(el) {
      // Don't want to get stuck in an endless loop
      donationAmtRadios.forEach(function (el) {
        el.removeEventListener('click', handleDonationAmountChange, {
          once: true
        });
      });
      setTimeout(function () {
        // Re-clicking the button makes mobile pay get the correct amount
        el.checked = false;
        el.click(); // Re add the click handler

        donationAmtRadios.forEach(function (el) {
          el.addEventListener('click', handleDonationAmountChange, {
            once: true
          });
        });
      }, 100);
    };

    var initDonationAmount = function initDonationAmount() {
      donationAmtRadios = getAll('.en__field__input--radio:not([value=""])', donationAmt);
      selectedAmount = getSelectedAmount(); // Display tip jar amount

      el = theForm.querySelector(tipJarSelector);

      if (el) {
        updateTipJar(getTipJar(getOriginalDonationAmount()));
        updateTotalGift(getTipJar(getOriginalDonationAmount()));
      } else {
        updateTotalGift(getOriginalDonationAmount());
      } // Maybe a tip jar?


      if (tipJar && tipJarPct) {
        tipJarCheckbox = tipJar.querySelector('.en__field__input--checkbox'); // Handle tip jar click

        tipJarCheckbox.addEventListener('click', function (e) {
          tipJarUserChecked = true;
          updateDonationAmounts(e.target);
          updateTotalGift(tipJarCheckbox.checked ? getTipJar(getOriginalDonationAmount()) : getOriginalDonationAmount()); // Work around for mobile pay not getting latest amount

          if (selectedAmount) {
            doubleClickAmount(selectedAmount);
          }
        }); // Initialize tip jar

        maybeUncheckTipJar(getOriginalDonationAmount());

        if (tipJarCheckbox.checked) {
          updateDonationAmounts(tipJarCheckbox);
        }
      } // Work around for mobile pay not getting latest amount


      if (selectedAmount) {
        doubleClickAmount(selectedAmount);
      } // Listen for other amount change


      if (otherAmountInput) {
        otherAmountInput.addEventListener('input', handleDonationAmountChange);
        otherAmountInput.addEventListener('focus', function (e) {
          console.log(e);
        });
      }
    };

    if (theForm.action.indexOf('donate') > -1 && pageJson.pageNumber === 1) {
      if (donationAmt) {
        initDonationAmount(); // Listen for recurrence change

        if (recurrenceFrequency) {
          getAll('.en__field__input--radio', recurrenceFrequency).forEach(function (el) {
            el.addEventListener('click', function (e) {
              setTimeout(function () {
                initDonationAmount();
                window.initMasks();
              }, 500);
            });
          });
        }
      } // Gift designation Y/N 


      if (giftDesignationYN && appealCode) {
        giftDesignationYN.querySelector('.en__field__input--radio[value="N"]').addEventListener('click', function (e) {
          disableEl(appealCode);
        });
        giftDesignationYN.querySelector('.en__field__input--radio[value="Y"]').addEventListener('click', function (e) {
          enableEl(appealCode);
        });

        if (giftDesignationYN.querySelector('.en__field__input--radio[value="N"]').checked) {
          disableEl(appealCode);
        }
      }
    }

    if (bequestIframe) {
      bequestIframe.addEventListener('load', function (e) {
        bequestIframe.contentWindow.enOnError = function () {
          // Fit iframe to parent
          resizeIframe(bequestIframe);
        }; // Fit iframe to parent


        resizeIframe(bequestIframe);
      }); // Listen for submitted message from iframe
      // window.addEventListener('message', e => {

      window.addEventListener('iframeSubmitted', function (e) {
        // Fire tracking
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_click',
            'lightbox_name': 'bequest'
          });
        } // Close modal


        modal.hide();
        focusFirst();
      }); // Fit iframe to parent

      window.addEventListener('resize', function (e) {
        resizeIframe(bequestIframe);
      });
    }

    if (bequestModal) {
      modal = new bootstrap.Modal(bequestModal, {
        backdrop: 'static',
        keyboard: false
      }); // Open modal

      modal.show(); // Fire tracking

      setTimeout(function () {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_impression',
            'lightbox_name': 'bequest'
          });
        }
      }, 1000);
    }
  };
  /**
   * Event form enhancements
   */


  var eventForm = function eventForm() {
    var pageNumber = pageJson.pageNumber;
    var savedTotalAmount = sessionStorage.getItem('savedTotalAmount');
    var waitListLink = theForm.querySelector('.waitlist-link a');
    var el = null;
    var _parent = null;
    var hasPromo = false;
    var totalAmount = 0;
    var totalDiscount = 0;
    /**
     * Updates total amount
     */

    var updateTotalAmount = function updateTotalAmount() {
      var additionalInput = theForm.querySelector('.en__additional__input');
      var totalAmount = 0; // Sum all tickets

      getAll('.en__ticket__quantity').forEach(function (el) {
        var row = getClosestEl(el, '.en__ticket');
        var price = Number(row.querySelector('.en__ticket__price').textContent);

        if (price !== '0') {
          totalAmount += el.value === '0' ? 0 : Number(Number(el.value) * price);
        }
      }); // Include additional donation

      if (additionalInput) {
        totalAmount += !isNaN(Number(additionalInput.value)) ? Number(additionalInput.value) : 0;
      } // Display total amount


      getAll(totalAmountSelector).forEach(function (el) {
        el.textContent = numberPipe(String(totalAmount));
      }); // Save total for use on billing page

      sessionStorage.setItem('savedTotalAmount', totalAmount);
    };

    var getPromo = function getPromo(el) {
      return el.querySelector('.en__orderSummary__data--promo').textContent !== '';
    }; // Make ticket quantity field readonly to avoid invalid ticket numbers


    getAll('.en__ticket__quantity').forEach(function (el) {
      el.readOnly = true;
      el.setAttribute('tabindex', '-1');
    }); // Add ticket quantity plus/minus to tab order

    getAll('.en__ticket__minus, .en__ticket__plus').forEach(function (el) {
      el.setAttribute('tabindex', '0');
    }); // Strip currency indicators and $ signs

    getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(function (el) {
      el.textContent = el.textContent.replace(/USD/, '');
    }); // Strip label colons

    getAll('.en__orderSummary__header').forEach(function (el) {
      el.textContent = el.textContent.replace(/\:/, '');
    }); // Maybe on page 1

    if (pageNumber === 1) {
      // Display waitlist confirmation if coming from a chained redirect
      el = theForm.querySelector('.waitlist-confirmation');

      if (el && location.href.indexOf('chain') > -1) {
        removeClass(el, hiddenWebOnlyClass);
      } // Maybe add waitlist links


      if (waitListLink) {
        getAll('.en__ticket__soldout').forEach(function (el) {
          var clone = waitListLink.cloneNode(true);
          el.parentElement.append(clone);
        });
      } // Listen for additional donation


      el = theForm.querySelector('.en__additional__input');

      if (el) {
        el.addEventListener('change', function (e) {
          updateTotalAmount();
        });
      } // Listen for ticket selection


      getAll('.en__ticket__quantity').forEach(function (el) {
        el.addEventListener('change', function (e) {
          setTimeout(function () {
            updateTotalAmount();
          }, 100);
        });
      }); // Listen for reset

      el = theForm.querySelector('button[type="reset"]');

      if (el) {
        el.addEventListener('click', function (e) {
          setTimeout(function () {
            updateTotalAmount();
          }, 100);
        });
      } // Init total amount


      updateTotalAmount(); // Force ticket total cost update

      getAll('.en__ticket__minus, .en__ticket__plus').forEach(function (el) {
        var row = getClosestEl(el, '.en__ticket');
        var ticketQuantity = row.querySelector('.en__ticket__quantity');
        el.addEventListener('click', function (e) {
          triggerEvent(ticketQuantity, 'change');
        }); // Add keyboard nav to plus/minus buttons

        el.addEventListener('keyup', function (e) {
          if (e.key === 'Enter' || e.keyCode === 13) {
            e.target.click();
          }
        });
      }); // Maybe on page 2
    } else if (pageNumber === 2) {
      // Customize order summary table
      getAll('.en__orderSummary__item').forEach(function (el) {
        var itemType = el.querySelector('.en__orderSummary__data--type');
        var itemQuantity = el.querySelector('.en__orderSummary__data--quantity').textContent;
        itemType.textContent = itemQuantity + "x  " + itemType.textContent;
        hasPromo = hasPromo || getPromo(el);
      }); // Maybe add promo discount line

      el = theForm.querySelector('.en__orderSummary__data--totalAmount');
      _parent = theForm.querySelector('.en__orderSummary');

      if (savedTotalAmount && hasPromo && el && _parent) {
        totalAmount = Number(el.textContent.replace(/\$/, ''));
        el = document.getElementById('orderSummaryPromo');

        if (el) {
          totalDiscount = Number(savedTotalAmount) - totalAmount;
          el.querySelector('.js-applied-promo').textContent = totalDiscount.toFixed(2);

          _parent.insertBefore(el, theForm.querySelector('.en__orderSummary__total'));

          removeClass(el, hiddenWebOnlyClass);
        } // Cleanup


        theForm.querySelector('.en__submit button').addEventListener('click', function (e) {
          sessionStorage.removeItem('savedTotalAmount');
        });
      } // Remove ticket index number


      getAll('.en__registrants__ticketHead').forEach(function (el) {
        el.textContent = el.textContent.replace(/\d/g, '');
      }); // Remove attendee index number

      getAll('.en__registrants__registrantHead').forEach(function (el) {
        el.textContent = el.textContent.replace(/\d/g, '');
      }); // Re-number attendees

      getAll('.en__registrants__ticket').forEach(function (el) {
        var attendees = getAll('.en__registrants__registrantHead', el);

        if (attendees.length > 1) {
          attendees.forEach(function (el, index) {
            el.textContent = el.textContent + " " + (index + 1);
          });
        }
      }); // Labels for Attendee custom checkbox questions do not have for attributes

      getAll('.en__field--checkbox.en__field--registrant .en__field__item').forEach(function (el) {
        var checkboxId = "checkbox" + generateId();
        el.querySelector('.en__field__input--checkbox').id = checkboxId;
        el.querySelector('.en__field__label--item').setAttribute('for', checkboxId);
      }); // Adding commas to totals

      getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(function (el) {
        el.textContent = numberPipe(el.textContent);
      }); // Adjust the page if zero amount due

      el = theForm.querySelector('.en__orderSummary__data--totalAmount');

      if (el) {
        if (parseInt(el.textContent) === 0) {
          // Some of the form headings have 'Billing' in them
          getAll('.form-heading h3').forEach(function (el) {
            el.textContent = el.textContent.replace(/Billing\s/i, '');
          }); // Find the form block with address info

          el = document.getElementById('en__field_supporter_address1');

          if (el) {
            // CSS will hide eveything below .last-visible except the submit block
            addClass(getClosestEl(el, '.en__component--formblock'), 'last-visible');
          }
        }
      } // Display total amount


      el = theForm.querySelector('.en__orderSummary__data--totalAmount');

      if (el) {
        // Prevent double $ symbols
        setTimeout(function () {
          el.textContent = el.textContent.indexOf('$') > -1 ? el.textContent.replace(/\$/g, '') : el.textContent;
          addClass(el, activeClass);
          getAll(totalAmountSelector).forEach(function (el) {
            el.textContent = "$" + theForm.querySelector('.en__orderSummary__data--totalAmount').textContent.replace(/\$/, '');
          });
        }, 500);
      }
    }
  };
  /**
   * Email to target enhancements
   */


  var emailToTarget = function emailToTarget() {
    var contactBlock = theForm.querySelector('.en__component--contactblock');

    if (contactBlock) {
      // Already visually hidden, but hide from screen readers too without using display: none
      contactBlock.setAttribute('aria-hidden', 'true');
    }
  };
  /**
   * Hub enhancements
   */


  var hub = function hub() {
    var hubImage = theForm.querySelector('.hub-image .en__component--imageblock:last-child img');
    var emailAddress = theForm.querySelector('.en__supporterHubLogin__emailAddress .en__field__input'); // Convert large image to a background to better styling

    if (hubImage) {
      hubImage.parentElement.style.backgroundImage = "url(" + hubImage.getAttribute('src') + ")";
    } // Enable autocomplete on email address field


    if (emailAddress) {
      emailAddress.id = emailAddress;
      emailAddress.setAttribute('autocomplete', 'email');
    }
  };
  /**
   * Quiz form enhancements
   */


  var quiz = function quiz() {
    var leadGenModal = theForm.querySelector('.modal--lead-gen');
    var isInvalid = false;
    var formType = null;
    var el = null;
    var score = 0;

    var getFormType = function getFormType(form) {
      var emailUnsubscribeChecked = form.querySelector('.en__field--unsubscribe-from-emails:not(.en__hidden) .en__field__input--checkbox') ? form.querySelector('.en__field--unsubscribe-from-emails:not(.en__hidden) .en__field__input--checkbox').checked : false;
      var mobilePhoneField = form.querySelector('#en__field_supporter_phoneNumber2:not(:placeholder-shown)');
      var textOptInChecked = form.querySelector('.en__field--home-phone-opt-in .en__field__input--checkbox') ? form.querySelector('.en__field--home-phone-opt-in .en__field__input--checkbox').checked : false;
      var formType = {};
      formType.lightbox_name = "lightbox-" + utag_data.page_name;
      formType.form_name = "lightbox-" + utag_data.page_name;
      formType.email_signup_location = "lightbox-" + utag_data.page_name; //These conditions assume that if the field exists, it is required, e.g. mobilePhoneField
      //Unsubscribe not checked, mobile phone field exists and optin checked

      if (!emailUnsubscribeChecked && mobilePhoneField && textOptInChecked) {
        formType.event_name = 'frm_ltbx_emt_emo_txt_txto_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe not checked, mobile phone field exists (and optin not checked)
      } else if (!emailUnsubscribeChecked && mobilePhoneField) {
        formType.event_name = 'frm_ltbx_emt_emo_txt_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe not checked, no mobile phone field	
      } else if (!emailUnsubscribeChecked) {
        formType.event_name = 'frm_ltbx_emt_emo_submit';
        formType.form_type = 'email_signup'; //Unsubscribe checked, mobile phone field exists and optin checked
      } else if (mobilePhoneField && textOptInChecked) {
        formType.event_name = 'rm_ltbx_emt_txt_txto_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe checked, mobile phone field exists and optin not checked
      } else if (mobilePhoneField) {
        formType.event_name = 'frm_ltbx_emt_txt_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe checked, mobile phone field doesn't exist	
      } else {
        formType.event_name = 'frm_ltbx_emt_submit';
        formType.form_type = 'email_signup';
      }

      return formType;
    }; // Maybe display lead gen modal


    if (leadGenModal) {
      // Set placholder on mobile phone field so it can be slected with :placeholder-shown
      el = leadGenModal.querySelector('#en__field_supporter_phoneNumber2');

      if (el) {
        el.setAttribute('placeholder', ' ');
      }

      formType = getFormType(leadGenModal);
      var modal = new bootstrap.Modal(leadGenModal, {
        backdrop: 'static',
        keyboard: false
      });
      modal.show(); // Fire tracking

      setTimeout(function () {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_form_impression',
            'lightbox_name': formType.lightbox_name,
            'form_type': formType.form_type,
            'form_name': formType.form_name
          });
        }
      }, 100);

      var validateModal = function validateModal() {
        if (formIsValid(leadGenModal)) {
          formType = getFormType(leadGenModal);
          modal.hide();
          focusFirst(leadGenModal); // Fire tracking

          if (typeof utag !== 'undefined') {
            utag.link(formType);
          } // Submit buttons are disabled after clicking


          enableSubmitButtons();
        } else {
          // Submit buttons are disabled after clicking
          isInvalid = true;
          enableSubmitButtons();
        }

        return false;
      };

      var enableSubmitButtons = function enableSubmitButtons() {
        setTimeout(function () {
          getAll('.en__submit button').forEach(function (el) {
            el.disabled = false;
          });
        }, 100);
      }; // Handle modal submit button click


      leadGenModal.querySelector('.btn').addEventListener('click', function (e) {
        if (isInvalid) {
          validateModal();
          e.preventDefault();
          return false;
        } else {
          setTimeout(function () {
            validateModal();
            e.preventDefault();
            return false;
          }, 100);
        }
      });
    } // Listen for validation error


    el = theForm.querySelector('.en__field--survey');

    if (el) {
      var mutationCallback = function mutationCallback(mutationsList, observer) {
        for (var i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            // Move error message to end of form
            var _el = theForm.querySelector(errorSelector);

            if (_el) {
              theForm.querySelector('.en__component--formblock').append(_el);
            }
          }
        }
      };

      var errorObserver = new MutationObserver(mutationCallback);
      errorObserver.observe(el, {
        attributes: false,
        childList: true,
        subtree: false
      });
    }

    getAll('.en__field__input--radio').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var el = void 0; // Clicking any answer removes error message

        el = theForm.querySelector(errorSelector);

        if (el) {
          el.remove();
        }
      });
    });

    var checkAnswer = function checkAnswer() {
      var correctAnswer = theForm.querySelector('.correct');
      var incorrectAnswer = theForm.querySelector('.incorrect');
      var selectedAnswerRadio = theForm.querySelector('.en__field__input--radio:checked');
      var correctAnswerRadio = theForm.querySelector('.en__field__input--radio[value="1"]');
      var questionCount = sessionStorage.getItem('questionCount') ? sessionStorage.getItem('questionCount') : 0;
      var quizScore = sessionStorage.getItem('quizScore') ? sessionStorage.getItem('quizScore') : 0;
      var alreadyAnswered = sessionStorage.getItem('alreadyAnswered') ? sessionStorage.getItem('alreadyAnswered') : 'false'; // Prevent more answer clicks

      disableFields(getAll('.en__field__input--radio'));

      if (correctAnswer && incorrectAnswer && correctAnswerRadio) {
        // Check for correct answer
        if (selectedAnswerRadio === correctAnswerRadio) {
          correctAnswer.style.display = 'inline'; // Update running score

          if (alreadyAnswered === 'false') {
            quizScore++;
          }
        } else {
          addClass(selectedAnswerRadio.nextElementSibling, 'is-incorrect');
          incorrectAnswer.style.display = 'inline';
        }

        addClass(correctAnswerRadio.nextElementSibling, 'is-correct'); // Show answer

        theForm.querySelector('.quiz-answer p').style.display = 'block'; // Show next question button

        theForm.querySelector('.en__component--formblock:last-child').style.display = 'block';

        if (alreadyAnswered === 'false') {
          // Update running count of quiz questions
          questionCount++;
          sessionStorage.setItem('questionCount', questionCount); // Save running score

          sessionStorage.setItem('quizScore', quizScore);
          sessionStorage.setItem('alreadyAnswered', 'true');
        }
      }
    }; // Handle check answer button click


    el = theForm.querySelector('.en__submit button[type="button"]');

    if (el) {
      el.addEventListener('click', function (e) {
        var fieldError = theForm.querySelector('.en__field__error');

        if (theForm.querySelector('.en__field__input--radio:checked')) {
          addClass(getClosestEl(e.target, '.en__submit'), hiddenClass);

          if (fieldError) {
            removeClass(fieldError, displayClass);
            addClass(fieldError, hiddenClass);
          }

          checkAnswer();
        } else {
          if (fieldError) {
            removeClass(fieldError, hiddenClass);
            addClass(fieldError, displayClass);
          }
        }
      });
    } // Handle submit button click


    el = theForm.querySelector('.en__submit button:not([type="button"])');

    if (el) {
      el.addEventListener('click', function (e) {
        sessionStorage.setItem('alreadyAnswered', 'false');
      });
    } // Display quiz results if on the last page


    if (pageJson.pageNumber === pageJson.pageCount) {
      // Display quiz score
      if (theForm.querySelector('.js-quiz-score') && sessionStorage.getItem('quizScore')) {
        theForm.querySelector('.js-quiz-score').textContent = sessionStorage.getItem('quizScore');
      } // Display number of questions


      if (theForm.querySelector('.js-question-count') && sessionStorage.getItem('questionCount')) {
        theForm.querySelector('.js-question-count').textContent = sessionStorage.getItem('questionCount');
      } // Clean up


      sessionStorage.removeItem('quizScore');
      sessionStorage.removeItem('questionCount');
      sessionStorage.removeItem('alreadyAnswered');
    }
  };
  /**
   * Action center form enhancements
   */


  var actionCenter = function actionCenter() {
    // Make image blocks clickable    
    getAll('.card').forEach(function (el) {
      var link = el.querySelector('a[data-type="campaignpage_url_pb"]');
      var img = el.querySelector('.en__component--imageblock img');
      var clone = null;

      if (link && img) {
        clone = link.cloneNode();
        img.parentNode.insertBefore(clone, img);
        clone.appendChild(img);
      }
    });
  };
  /**
   * Track form errors
   */


  var trackFormErrors = function trackFormErrors() {
    var invalidFields = '';
    var errors = '';

    if (typeof utag !== 'undefined') {
      // Gather invalid fields and error messages
      getAll('.en__field--validationFailed').forEach(function (el) {
        if (el.querySelector('.en__field__error')) {
          invalidFields += el.querySelector('.en__field__input').getAttribute('name') + "|";
          errors += el.querySelector('.en__field__error').textContent + "|";
        }
      }); // Fire tracking if errors were found

      if (invalidFields !== '') {
        utag.link({
          'event_name': 'form_error',
          'form_field_error_field': invalidFields.slice(0, -1),
          'form_field_error_value': errors.slice(0, -1),
          'form_name': utag_data.page_name.slice(0, -2),
          'form_type': pageJson.pageType
        });
      }
    }
  };

  var trackFormSubmit = function trackFormSubmit() {
    if (typeof utag !== 'undefined') {
      utag.link({
        'event_name': 'form_submit',
        'form_type': pageJson.pageType,
        'form_name': utag_data.page_name
      });
    }
  };

  var mobilePhone = function mobilePhone() {
    var initPhoneFields = function initPhoneFields() {
      var mobilePhoneInput = theForm.querySelector(mobilePhoneInputSelector);
      var homePhoneInput = theForm.querySelector(homePhoneInputSelector);
      var mobileSameAsHomeCheckbox = theForm.querySelector(mobilePhoneSameAsHomeCheckboxSelector);
      var submitButton = theForm.querySelector('.en__submit button');

      if (mobilePhoneInput.value.length && homePhoneInput.value.length && homePhoneInput.value !== mobilePhoneInput.value && mobileSameAsHomeCheckbox.checked) {
        mobileSameAsHomeCheckbox.click();
      } else if (mobilePhoneInput.value.length === 0 && homePhoneInput.value.length && mobileSameAsHomeCheckbox.checked) {
        mobilePhoneInput.disabled = false;
        mobilePhoneInput.value = homePhoneInput.value;
      }

      var setMobilePhoneField = function setMobilePhoneField(e) {
        if (e.target.checked) {
          //override EN's disabling of the field
          setTimeout(syncMobilePhoneField, 500);
        } else {
          mobilePhoneInput.value = '';
        }
      };

      var syncMobilePhoneField = function syncMobilePhoneField(e) {
        if (mobileSameAsHomeCheckbox.checked) {
          mobilePhoneInput.disabled = false;
          mobilePhoneInput.value = homePhoneInput.value;
        }
      }; //attach event handler to the checkbox


      mobileSameAsHomeCheckbox.addEventListener('change', setMobilePhoneField); //attach event handler to the home input

      homePhoneInput.addEventListener('input', syncMobilePhoneField);
    }; //if all three fields are present


    if (theForm.querySelectorAll(mobilePhoneInputSelector).length && theForm.querySelectorAll(homePhoneInputSelector).length && theForm.querySelectorAll(mobilePhoneSameAsHomeCheckboxSelector).length) {
      //initialize phone field features
      initPhoneFields();
    }
  };
  /**
   * Form validation enhancements
   */


  var validation = function validation() {
    var setValidation = function setValidation(el) {
      var field = el.closest(enFieldSelector); // Hide/display error formatting

      if (el.validity.valid) {
        addClass(el, validClass);
        removeClass(field, validationFailedClass);
      } else {
        removeClass(el, validClass);
        addClass(field, validationFailedClass);
      }
    };

    var handleInput = function handleInput(e) {
      e.preventDefault();
      setValidation(e.target);
    };

    var handleChange = function handleChange(e) {
      e.preventDefault();
      setValidation(e.target);
    }; // Set validation patterns


    getAll('.en__mandatory .en__field__input').forEach(function (el) {
      el.required = true;

      switch (el.type) {
        case 'email':
          // Check for valid email
          el.setAttribute('pattern', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-z]{2,}$');
          el.addEventListener('input', handleInput);
          break;

        case 'number':
          break;

        case 'select-one':
          el.addEventListener('change', handleChange);
          break;

        default:
          if (el.getAttribute('inputmode') === 'decimal') {
            // Check for US currency
            el.setAttribute('pattern', '^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{1,2})?$');
          } else if (el.name.indexOf('ccnumber') > -1) {
            // Check for valid credit card (https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php)
            el.setAttribute('pattern', '^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$');
          } else if (el.name.indexOf('ccvv') > -1) {
            // Check for 3 or 4 digits
            el.setAttribute('pattern', '^([0-9]{3,4})$');
          } else if (hasClass(el, 'datepicker-input')) {
            // Check for date as mm/dd/yyyy
            el.setAttribute('pattern', '(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d');
            el.addEventListener('changeDate', handleChange);
          } else {
            // Check empty pattern
            el.setAttribute('pattern', '.*\\S.*');
          }

          el.addEventListener('input', handleInput);
      } // Don't display browser error messages


      el.addEventListener('oninvalid', function (e) {
        e.preventDefault();
      }); // No browser form validation

      theForm.setAttribute('novalidate', true); // Allow form submit with invalid fields
      //theForm.addEventListener('submit', e => {
      //  e.preventDefault();
      //});
    }); // Processing error don't always trigger a reload

    var errorList = theForm.querySelector('.en__errorList');

    if (errorList) {
      var mutationCallback = function mutationCallback(mutationsList, observer) {
        for (var i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            formatError(mutationsList[i].addedNodes[0]);
            addClass(errorList, errorBoxClass);
            scrollToEl(errorList);
          } else {
            removeClass(errorList, errorBoxClass);
          }
        }
      };

      var errorObserver = new MutationObserver(mutationCallback);
      errorObserver.observe(errorList, {
        attributes: false,
        childList: true,
        subtree: false
      });
    }
  };
  /**
   * Form submit enhancements
   */


  var formSubmit = function formSubmit() {
    var monthlyCheckbox = document.getElementById('en__field_transaction_recurrpay');
    var continueButton = theForm.querySelector('.btn-continue');
    var upsellButton = theForm.querySelector('.btn-upsell');
    var upsellModal = theForm.querySelector('.modal--upsell');
    var hasUpsell = monthlyCheckbox && upsellModal && upsellButton && continueButton;
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var otherAmountOriginal = null;
    var isInvalid = false; // Don't submit form on ENTER if focused on an input

    window.addEventListener('keydown', function (e) {
      if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT') {
          e.preventDefault();
          return false;
        }
      }
    }, true);

    window.enOnError = function () {
      trackFormErrors();
    };

    window.enOnValidate = function () {
      var address2 = document.getElementById('en__field_supporter_address2');
      var donationAmount = parseFloat(getTotalDonationAmount());
      var ecardFields = theForm.querySelector(ecardFieldsSelector);
      var ecardSelect = theForm.querySelector(ecardSelectSelector);
      var mobilePhoneNumber = theForm.querySelector('.en__field--phoneNumber2:not(:placeholder-shown) .en__field__input');
      var mobilePhoneOptIn = theForm.querySelector('.en__field--mobile-text-opt-in .en__field__input--checkbox:checked');
      var tipJar = theForm.querySelector('.en__field--tip-jar');
      var trackSubmit = theForm.querySelector('.track-submit');
      var donationData = {};
      var ecardData = sessionStorage.getItem('ecardData');
      var extraAmount = 0;
      var mobilePhoneData = {};
      var upsellDone = false;

      var tipJarSelected = function tipJarSelected() {
        if (!tipJar) {
          return false;
        }

        return tipJar.querySelector('.en__field__input--checkbox').checked;
      };

      var doUpsell = function doUpsell() {
        if (!upsellDone) {
          // Display monthly amount
          getAll('.js-monthly-gift').forEach(function (el) {
            el.textContent = "$" + numberPipe(String(setMonthlyAmount(donationAmount)));
          });
          setMonthlyAmount(donationAmount); // Open modal

          var modal = new bootstrap.Modal(upsellModal, {
            backdrop: 'static',
            keyboard: false
          });
          modal.show(); // Fire tracking

          if (typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'lightbox_impression',
              'lightbox_name': 'sustainer upsell'
            });
          } // Handle modal clicks


          upsellButton.addEventListener('click', function (e) {
            // Fire tracking
            if (typeof utag !== 'undefined') {
              utag.link({
                'event_name': 'lightbox_click',
                'lightbox_name': 'sustainer upsell'
              });
            } // Select monthly option and proceed to confirmation


            monthlyCheckbox.click();
            otherAmountInput.value = setMonthlyAmount(donationAmount);
            theForm.submit();
          });
          getAll('.btn-close, .btn-continue').forEach(function (el) {
            el.addEventListener('click', function (e) {
              theForm.submit();
            });
          });
          upsellDone = true;
        }
      }; // Set Address 2 value to '-' if left blank by user


      if (address2) {
        address2.value = address2.value === '' ? '-' : address2.value;
      } // Set other amount field to tip jar amount if needed


      if (otherAmountInput && !getSelectedAmount()) {
        if (otherAmountInput.value !== '') {
          otherAmountOriginal = otherAmountInput.value;
          otherAmountInput.value = tipJarSelected() && otherAmountInput.dataset.tipjar ? otherAmountInput.dataset.tipjar : otherAmountInput.value;
        }
      }

      if (tipJar) {
        // Calculate extra tip jar amount for data layer
        if (tipJarSelected()) {
          var totalDonationAmount = getTotalDonationAmount();
          var originalDonationAmount = otherAmountOriginal || getOriginalDonationAmount();
          extraAmount = (totalDonationAmount - originalDonationAmount).toFixed(2);
          donationData.originalDonationAmount = originalDonationAmount;
        }
      }

      if (pageJson.pageType === 'donation' && pageJson.pageNumber === 1) {
        // Maybe save ecard fields for use on seamless ecard page
        if (ecardSelect && ecardFields) {
          if (ecardSelect.querySelector('.en__field__input--checkbox').checked) {
            // Set ecardSelected before saving donationData
            donationData.ecardSelected = 'true';
            ecardData = {};
            ecardData.selectEcard = ecardSelect.querySelector('.en__field__input--radio:checked').value;
            ecardData.recipients = ecardFields.querySelector('.en__field__input--email').value;
            ecardData.message = ecardFields.querySelector('.en__field--ecard-message .en__field__input--textarea').value;
            ecardData.sendDate = ecardFields.querySelector('.datepicker-input').value;
            sessionStorage.setItem('ecardData', JSON.stringify(ecardData));
          } else {
            delete donationData.ecardSelected;
            sessionStorage.removeItem('ecardData');
          }
        } // Save donation data for data layer on confirmation page


        donationData.productId = utag_data.page_name.slice(0, -2);
        donationData.campaignId = typeof pageJson !== 'undefined' ? pageJson.campaignId : '';
        donationData.campaignPageId = typeof pageJson !== 'undefined' ? pageJson.campaignPageId : '';
        donationData.extraAmount = extraAmount;
        donationData.state = theForm.querySelector(supporterStateSelector) ? theForm.querySelector(supporterStateSelector).value : '';
        donationData.zipCode = theForm.querySelector(supporterZipCodeSelector) ? theForm.querySelector(supporterZipCodeSelector).value : '';
        donationData.emailAddress = theForm.querySelector(supporterEmailAddressSelector) ? theForm.querySelector(supporterEmailAddressSelector).value : '';
        sessionStorage.setItem('donationData', JSON.stringify(donationData));
      } // Looking for non-hidden, non-blank mobile phone field and mobile text opt-in to save and pass to SMS platform


      if (mobilePhoneNumber) {
        mobilePhoneData.phoneNumber = mobilePhoneNumber.value;

        if (mobilePhoneOptIn) {
          mobilePhoneData.optIn = 'Y';
        } else {
          mobilePhoneData.optIn = null;
        }

        sessionStorage.setItem('mobilePhoneData', JSON.stringify(mobilePhoneData));
      } // Maybe track form submit


      if (trackSubmit) {
        trackFormSubmit();
      } // Maybe display upsell modal


      if (hasUpsell && donationAmount >= 5 && donationAmount <= 100 && !monthlyCheckbox.checked) {
        if (isInvalid) {
          if (formIsValid()) {
            doUpsell();
          }
        } else {
          setTimeout(function () {
            if (formIsValid()) {
              doUpsell();
            } else {
              isInvalid = true;
            }
          }, 100);
        }

        return false;
      } else {
        return true;
      }
    };

    window.enOnSubmit = function () {
      // handle async code with promises
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(); // will allow submit when timeout runs in 1000ms
        }, 1000);
      });
    };
  };
  /**
   * Member care form
   */


  var memberCare = function memberCare() {
    var emailAddress = document.getElementById('en__field_supporter_emailAddress');
    var generateEmailButton = document.getElementById('generateEmail');
    var optIns = getAll('.hide-opt-ins .en__field--question .en__field__input--checkbox');

    var unCheckOptIns = function unCheckOptIns() {
      optIns.forEach(function (el) {
        el.checked = false;
      });
    };

    var checkOptIns = function checkOptIns() {
      optIns.forEach(function (el) {
        el.checked = true;
      });
    }; // Auto check/uncheck opt in checkboxes


    if (emailAddress && generateEmailButton) {
      emailAddress.addEventListener('change', function (e) {
        if (e.target.value.indexOf('fakeemail') > -1) {
          unCheckOptIns();
        } else {
          checkOptIns();
        }
      }); // For anonymous actions, or actions that don't require an email address, 
      // the database still needs an email address to be able to store the data.

      generateEmailButton.addEventListener('click', function (e) {
        var theDate = new Date();
        var milliseconds = theDate.getTime();
        var anonAddress = milliseconds + ".first.last@fakeemail.com";
        emailAddress.value = anonAddress;
        triggerEvent(emailAddress, 'change');
      });
    }
  };
  /**
   * Track social share clicks
   */


  var socialShareTracking = function socialShareTracking() {
    getAll('.en__socialShare__image').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'social_share',
            'social_share_id': "preserve.nature.org.share." + e.target.parentElement.dataset.enshare,
            'social_share_platform': e.target.parentElement.dataset.enshare
          });
        }
      });
    });
  };
  /**
   * Track ETT and petition submits
   */


  var advocacyTracking = function advocacyTracking() {
    if (pageJson.pageType === 'advocacypetition' || pageJson.pageType === 'emailtotarget') {
      theForm.addEventListener('submit', function (e) {
        setTimeout(function () {
          if (formIsValid() && typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'form_submit',
              'form_type': 'advocacy',
              'form_name': utag_data.page_name.slice(0, -2),
              'action_id': utag_data.form_name,
              'action_type': pageJson.pageType,
              'zip_code': document.getElementById('en__field_supporter_postcode') ? document.getElementById('en__field_supporter_postcode').value : ''
            });
          }
        }, 100);
      });
    }
  };
  /**
   * Track footer clicks
   */


  var footerTracking = function footerTracking() {
    var footer = document.querySelector('.footer');

    if (footer) {
      getAll('a', footer).forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'footer_nav_click',
              'nav_click_location': "preserve.nature.org.fnav." + e.target.textContent.toLowerCase()
            });
          }
        });
      });
    }
  };
  /**
   * Track url parameters
   */


  var URLTracking = function URLTracking() {
    var params = new URLSearchParams(location.search);
    var trackers = ['src', 'vid', 'vid2', 'en_txn1', 'en_txn2', 'en_txn3', 'en_txn4', 'en_txn5', 'en_txn7', 'en_txn8', 'en_txn9', 'en_txn10'];
    var visitData = sessionStorage.getItem('visitData') ? JSON.parse(sessionStorage.getItem('visitData')) : {}; // Add tracking params as found

    trackers.forEach(function (tracker) {
      if (params.has(tracker)) {
        visitData[tracker] = params.get(tracker);
      }
    });
    sessionStorage.setItem('visitData', JSON.stringify(visitData));
  };
  /**
   * Redirect enhancements
   */


  var redirects = function redirects() {
    // Need to carry appealCode URL param to redirected campaign
    if (typeof pageJson !== 'undefined') {
      if (pageJson.pageNumber === 1 && pageJson.appealCode) {
        // Save appeal code for use on redirect page
        sessionStorage.setItem('appealCode', pageJson.appealCode);
      }
    } // Redirect with appeal code


    if (appealCodeRedirect && sessionStorage.getItem('appealCode')) {
      // The appeal code URL param has already been added to the redirect link with a default value of 'xxx'
      // Replace 'xxx' with saved appeal code
      appealCodeRedirect.setAttribute('href', appealCodeRedirect.getAttribute('href').replace(/xxx/, sessionStorage.getItem('appealCode')));
      sessionStorage.removeItem('appealCode');
      appealCodeRedirect.click();
    }
  };
  /**
   * Confirmation page enhancements
   */


  var confirmation = function confirmation() {
    var donationData = sessionStorage.getItem('donationData');
    var recurringStatus = theForm.querySelector('.js-recurring-status');

    if (window.self !== window.top) {
      // window.parent.postMessage('submitted', '*');
      window.parent.dispatchEvent(iframeSubmitted);
    }

    if (donationData) {
      donationData = JSON.parse(donationData);
    }

    if (recurringStatus) {
      recurringStatus.textContent = recurringStatus.textContent === 'ACTIVE' ? 'Monthly' : 'One-time';
    }
  };
  /**
   * Seamless ecard enhancements
   */


  var seamlessEcard = function seamlessEcard() {
    var ecardData = sessionStorage.getItem('ecardData');
    /**
     * Adds an email address to list of ecard recipients
     *
     * @param {string} recipient The email address to add
     */

    var addEcardRecipient = function addEcardRecipient(recipient) {
      document.querySelector('.en__ecardrecipients__name input').value = 'My Recipient';
      document.querySelector('.en__ecardrecipients__email input').value = recipient;
      document.querySelector('.en__ecarditems__addrecipient').click();
    };

    if (ecardData) {
      setTimeout(function () {
        // Populate fields
        ecardData = JSON.parse(ecardData);
        document.querySelector(".en__ecarditems__thumb:nth-child(" + ecardData.selectEcard + ")").click();
        document.querySelector('.en__ecardmessage__default').value = ecardData.message;
        document.querySelector('.en__ecardrecipients__futureDelivery input').value = ecardData.sendDate.replace(/(..).(..).(....)/, '$3-$1-$2');
        addEcardRecipient(ecardData.recipients); // Cleanup

        sessionStorage.removeItem('ecardData'); // Submit

        document.querySelector('.en__submit button').click();
      }, 1000);
    }
  };
  /**
   * Thermometer enhancements
   */


  var thermometers = function thermometers() {
    // Thermometer goals need to dynaically increase once a certain "raised" is reached
    getAll('.enWidget--progressBar').forEach(function (el) {
      var fill = el.querySelector('.enWidget__fill');
      var raisedPct = parseInt(fill.style.width);
      var raisedNumber = parseInt(el.querySelector('.raised > div').textContent.replace(/\,/g, ''));
      var newGoal = null; // Calculate and display updated therm numbers

      if (raisedPct >= thermThresholdPct) {
        // Reset fill width so that animation runs once new width is set
        fill.style.width = '0';
        newGoal = Math.ceil(raisedNumber * thermIncrease / 1000) * 1000;
        el.querySelector('.remaining > div').textContent = numberPipe(String(newGoal - raisedNumber)).replace(/\.00/, '');
        fill.style.width = raisedNumber / newGoal * 100 + "%";
      } // Therms are hidden with CSS


      setTimeout(function () {
        addClass(el, activeClass);
      }, 100);
    });
  };
  /**
   * Adds active class to element
   *
   * @param {node} el The element to add class to
   */


  var activateField = function activateField(el) {
    addClass((el.target || el).parentElement, activeClass);
  };
  /**
   * Adds aria-expanded attribute to collapsible elements
   *
   * @param {node} el Target element
   * @param {nodeList} collapsibles List of collapsibles in same comnponent as target
   */


  var addAriaCollapsedAttr = function addAriaCollapsedAttr(el, collapsibles) {
    if (el) {
      var isOpen = hasClass(el, collapseShowClass) ? 'true' : 'false';

      if (collapsibles.length) {
        collapsibles.forEach(function (collapsible) {
          collapsible.setAttribute('aria-expanded', 'false');
        });
      }

      el.setAttribute('aria-expanded', isOpen);
    }
  };
  /**
   * Adds aria-labelledby attribute to an untitled element
   *
   * @param {node} el Target element to add attribute to
   */


  var addAriaLabelledBy = function addAriaLabelledBy(el) {
    var maybeLabel = el.firstElementChild; //if (maybeLabel.nodeName.toLowerCase() === 'label') {

    if (hasClass(maybeLabel, 'en__field__label')) {
      setTimeout(function () {
        labelId = "label" + generateId();
        maybeLabel.id = labelId;
        el.setAttribute('aria-labelledby', labelId);
      }, 100);
    }
  };
  /**
   * Adds a specified class
   *
   * @param {node} el Node to add class to
   * @param {Array || string} cls Classes to add
   */


  var addClass = function addClass(el, _classes) {
    if (Array.isArray(_classes)) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(_classes));
    } else {
      el.classList.add(_classes);
    }
  };
  /**
   * Return an element that has been added to the DOM
   *
   * @param {node} parentEl The node to add element to
   * @param {string} elType The type of element to add
   * @param {string} textContent Text to add to new element
   * @param {string} cls Class to add to new element
   */


  var addEl = function addEl(parentEl, elType, textContent, cls) {
    var el = document.createElement(elType);

    if (cls) {
      addClass(el, cls);
    }

    el.textContent = textContent;
    parentEl.append(el);
    return el;
  };
  /**
   * Adds label with for attribute
   *
   * @param {node} el The field to associate the label with
   * @param {node} _parent Element to append label to
   * @param {string} txt Text content for label
   */


  var addLabel = function addLabel(el, _parent, txt) {
    return new Promise(function (resolve, reject) {
      el.id = el.id ? el.id : el.name.replace(/\./g, '');
      label = document.createElement('label');
      label.setAttribute('for', el.id);
      label.textContent = txt;
      addClass(label, visuallyHiddenClass);
      label.id = "label" + generateId();

      _parent.insertBefore(label, el);

      resolve(label.id);
    });
  };
  /**
   * Adds placeholder attribute
   *
   * @param {node} el The field to add placeholder to
   * @param {string} textContent Placeholder value
   */


  var addPlaceholder = function addPlaceholder(el, textContent) {
    el.setAttribute('placeholder', textContent);
  };
  /**
   * Clears all classes
   *
   * @param {node} el Node to clear classes from
   */


  var clearClass = function clearClass(el) {
    return el.className = '';
  };
  /**
   * Creates image element from a url string
   *
   * @param {string} url The URL to the image
   * @param {node} el Node to append image to
   */


  var createImgFromUrl = function createImgFromUrl(textContent, el) {
    var newImg = new Image();
    var altText = textContent.split('~')[0];
    var url = textContent.split('~')[1];

    if (altText && url) {
      el.textContent = '';
      newImg.src = url;
      newImg.setAttribute('alt', altText);
      el.appendChild(newImg);
    }
  };
  /**
   * Creates tooltip element for images
   *
   * @param {node} el The image block to create the tooltip for
   */


  var createImgTooltip = function createImgTooltip(el) {
    var img = el.querySelector('img');

    if (img) {
      var tooltipContent = img.getAttribute('alt');

      if (tooltipContent !== '' && tooltipContent !== 'null') {
        var tooltip = document.createElement('a');
        addClass(tooltip, photoInfoClass);
        setAttributes(tooltip, {
          'title': tooltipContent,
          'data-bs-toggle': 'tooltip',
          'tabindex': '0',
          'aria-hidden': 'true'
        });
        el.appendChild(tooltip);
        var imageTooltip = new bootstrap.Tooltip(tooltip, {
          container: el,
          html: true,
          placement: 'top',
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
          trigger: 'click'
        });
      }
    }
  };
  /**
   * Creates popover element
   *
   * @param {string} fieldSelector The field to attach popover to
   * @param {string} label Text for popover trigger
   * @param {string} txt Popover content
   */


  var createPopover = function createPopover(fieldSelector, placement, label, txt) {
    var field = theForm.querySelector("." + fieldSelector);

    if (field) {
      var popoverContainer = document.createElement('p');
      addClass(popoverContainer, popoverContainerClass);
      var popover = document.createElement('a');
      setAttributes(popover, {
        'data-bs-content': txt,
        'data-bs-toggle': 'popover',
        'data-bs-trigger': 'click focus',
        'role': 'button',
        'tabindex': '0'
      });
      popover.textContent = label;

      switch (placement) {
        case 'before':
          field.insertBefore(popover, field.querySelector('.en__field__element'));
          break;

        case 'after':
          popoverContainer.appendChild(popover);
          getClosestEl(field, enFieldSelector).appendChild(popoverContainer);
          break;

        default:
          field.insertBefore(popover, fiel.querySelector('.en__field__element'));
      }
    }
  };
  /**
   * Removes active class from element
   *
   * @param {node} el The element to remove class from
   */


  var deactivateField = function deactivateField(el) {
    removeClass((el.target || el).parentElement, activeClass);
  };
  /**
   * Disables input elements
   *
   * @param {nodeList} fields The elements to disable
   */


  var disableFields = function disableFields(fields) {
    fields.forEach(function (el) {
      addClass(el, disabledClass);
    });
  };
  /**
   * Adds disabled class to element
   *
   * @param {node} el The element to remove class from
   */


  var disableEl = function disableEl(el) {
    addClass(el, disabledClass);
  };
  /**
   * Removed disabled class from element
   *
   * @param {node} el The element to remove class from
   */


  var enableEl = function enableEl(el) {
    removeClass(el, disabledClass);
  };
  /**
   * Splits error text blob into sentences.
   *
   * @param {node} el Element containing the error content
   */


  var formatError = function formatError(el) {
    var sentences = el.textContent.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
    el.textContent = '';
    sentences.forEach(function (sentence) {
      addEl(el, 'p', sentence);
    });
  };
  /**
   * Returns does form pass EN validation
   *
   * @param {node} _parent The node to check for validation errors
   */


  var formIsValid = function formIsValid() {
    var _parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : theForm;

    var errorList = _parent.querySelector('.en__errorList');

    var invalidFields = getAll('.en__field--validationFailed', _parent);
    var valid = true; // Looking for form errors

    if (errorList) {
      if (errorList.textContent.trim() !== '') {
        valid = false;
      }
    }

    if (invalidFields.length > 0) {
      valid = false;
    }

    return valid;
  };
  /**
   * Places focus on first focusable element
   */


  var focusFirst = function focusFirst() {
    var focusables = getAll('button, a:not(.skip), input, select, textarea, [tabindex]:not([tabindex="-1"])');

    if (focusables.length > 0) {
      setTimeout(function () {
        focusables[0].focus();
      }, 500);
    }
  };
  /**
   * Returns a unique ID
   */


  var generateId = function generateId() {
    return Math.round(new Date().getTime() + Math.random() * 100);
  };
  /**
   * Returns NodeList.
   *
   * @param {string} selectors One or more selectors to match against.
   * @param {node} root The node to select over
   */


  var getAll = function getAll(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return Array.prototype.slice.call(root.querySelectorAll(selector), 0);
  };
  /**
   * Returns Closest element up tree that matches selector
   *
   * @param {node} el Child node.
   * @param {string} selector Selector for parent
   */


  var getClosestEl = function getClosestEl(el, selector) {
    if (el) {
      var closestNode = el.closest(selector);
      return closestNode ? closestNode : null;
    }
  };
  /**
   * Returns locale of page
   */


  var getLocale = function getLocale() {
    return typeof pageJson !== 'undefined' ? pageJson.locale : 'en-US';
  };
  /**
   * Returns Donation amount without upsell fee or null
   */


  var getOriginalDonationAmount = function getOriginalDonationAmount() {
    var selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    return selectedAmount ? selectedAmount.dataset.original ? selectedAmount.dataset.original : selectedAmount.value.replace(/\,/g, '') : null;
  };
  /**
   * Returns selected amount radio button or null
   */


  var getSelectedAmount = function getSelectedAmount() {
    return theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked');
  };
  /**
   * Returns Donation amount with tip jar added
   *
   * @param {string} amt Daontion amount to add tip to
   */


  var getTipJar = function getTipJar(amt) {
    if (typeof amt === 'string') {
      amt = amt.replace(/\,/g, '');
      return !isNaN(amt) ? (parseFloat(amt) + parseFloat(amt) * tipJarPct).toFixed(2) : '';
    }
  };
  /**
   * Returns Donation amount with or without upsell fee or null
   */


  var getTotalDonationAmount = function getTotalDonationAmount() {
    var selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    return selectedAmount ? selectedAmount.value : null;
  };
  /**
   * Returns Element has specified class
   *
   * @param {node} el Node to check
   * @param {string} cls Class to check for
   */


  var hasClass = function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };
  /**
   * Returns True if element is empty or has only whitespace.
   *
   * @param {node} el Element to check if empty.
   * @returns {boolean} If element is empty or has only whitespace
   */


  var isEmpty = function isEmpty(el) {
    return el.innerHTML.replace(/^\s*/, '').replace(/\s*$/, '') === '';
  };
  /**
   * Returns a Facebook sharer URL
   *
   * @param {string} sharerUrl Base Facebook sharer URL
   * @param {string} url The URL to share
   * @returns {string} Share URL
   */


  var makeFacebookUrl = function makeFacebookUrl(sharerUrl, url) {
    url = encodeURIComponent(url.replace(/\?chain/, '') + "?locale=" + getLocale() + "&en_chan=fb");
    return sharerUrl + "?u=" + url;
  };
  /*
   * Returns a Twitter tweet URL
   *
   * @param {string} sharerUrl Base Twitter tweet URL
   * @param {string} text The text to tweet
   * @param {string} url The URL to tweet
   * @returns {string} Tweet URL
   */


  var makeTwitterUrl = function makeTwitterUrl(text, sharerUrl, url) {
    text = encodeURIComponent(text);
    url = encodeURIComponent(url.replace(/\?chain/, '') + "?locale=" + getLocale() + "&en_chan=tw");
    return sharerUrl + "?text=" + text + "&url=" + url;
  };
  /**
   * Returns Class for form element.
   *
   * @returns {string} Class for form element
   */


  var maybeHasHero = function maybeHasHero() {
    return theForm.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero';
  };
  /**
   * Returns Class for form element.
   *
   * @returns {string} Class for form element
   */


  var maybeHasHeroSolid = function maybeHasHeroSolid() {
    return theForm.querySelector('.hero-solid') ? 'has-hero-solid' : 'not-has-hero-solid';
  };
  /**
   * Creates a label from placeholder value and associates it with an input
   *
   * @param {node} el The input element before which the new label is inserted.
   * @param {node} _parent The parent of the newly inserted label.
   */


  var placeholderToLabel = function placeholderToLabel(el, _parent) {
    var label = void 0;

    if (el && _parent) {
      el.id = el.id ? el.id : el.name.replace(/\./g, '');
      label = document.createElement('label');
      label.setAttribute('for', el.id);
      label.textContent = el.getAttribute('placeholder');
      addClass(label, visuallyHiddenClass);

      _parent.insertBefore(label, el);
    }
  };
  /**
   * Removes multiple attributes
   *
   * @param {node} el The field to remove attributes from
   * @param {object} attrs Attributes to remove
   */


  var removeAttributes = function removeAttributes(el) {
    for (var _len = arguments.length, attrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      attrs[_key - 1] = arguments[_key];
    }

    attrs.forEach(function (attr) {
      return el.removeAttribute(attr);
    });
  };
  /**
   * Remove a specified class
   *
   * @param {node} el Node to clear class from
   * @param {Array || string} cls Class to remove
   */


  var removeClass = function removeClass(el, _classes) {
    if (Array.isArray(_classes)) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(_classes));
    } else {
      el.classList.remove(_classes);
    }
  };
  /**
   * Dynamiccaly resizes iframe to fit content
   *
   * @param {node} el The iframe to resize
   */


  var resizeIframe = function resizeIframe(el) {
    setTimeout(function () {
      el.style.height = el.contentWindow.document.body.scrollHeight + "px";
    }, 100);
  };
  /**
   * Scrolls to element on page
   *
   * @param {node} el Element to scroll to
   */


  var scrollToEl = function scrollToEl(el) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  /**
   * Adds multiple attributes
   *
   * @param {Node} el The field to add attributes to
   * @param {object} attrs Attributes to add
   */


  var setAttributes = function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(function (attr) {
      el.setAttribute(attr, attrs[attr]);
    });
  };
  /**
   * Returns monthly upsell amount
   *
   * @param {number} amt Original donation amount
   */


  var setMonthlyAmount = function setMonthlyAmount(amt) {
    if (amt >= 5 && amt <= 24) {
      return 5;
    } else if (amt >= 25 && amt <= 50) {
      return 10;
    } else if (amt > 50 && amt <= 100) {
      return 15;
    }
  };
  /**
   * Returns str with no spaces
   *
   * @param {sting} str String to strip spaces from
   */


  var stripSpaces = function stripSpaces(str) {
    return str.replace(/\s/g, '');
  };
  /**
   * Triggers an event
   *
   * @param {node} el Target element
   * @param {string} evt Type of event
   */


  var triggerEvent = function triggerEvent(el, evt) {
    el.dispatchEvent(new Event(evt));
  };
  /**
   * Updates payment method hidden field
   *
   * @param {string} ccType CC type returned from cleave
   */


  var updatePaymentType = function updatePaymentType(ccType) {
    var paymentType = theForm.querySelector(paymentTypeSelector);
    var paymentTypeCode = '';

    if (paymentType) {
      switch (ccType) {
        case 'amex':
          paymentTypeCode = 'AX';
          break;

        case 'discover':
          paymentTypeCode = 'DI';
          break;

        case 'mastercard':
          paymentTypeCode = 'MC';
          break;

        case 'visa':
          paymentTypeCode = 'VI';
          break;
      }

      paymentType.value = paymentTypeCode;
    }
  };
  /**
   * Updates everywhere tip jar amount is displayed.
   *
   * @param {string} amt Total donation amount
   */


  var updateTipJar = function updateTipJar(amt) {
    getAll(tipJarAmountSelector).forEach(function (el) {
      el.textContent = !isNaN(amt) ? "$" + numberPipe(amt) : '';
    });
  };
  /**
   * Updates everywhere donation amount is displayed.
   *
   * @param {string} amt Total donation amount
   */


  var updateTotalGift = function updateTotalGift(amt) {
    getAll(totalAmountSelector).forEach(function (el) {
      el.textContent = !isNaN(amt) ? "$" + numberPipe(amt) : '';
    });
  };
  /**
   * Returns wrapped nodes.
   *
   * @param {NodeList} nodes The nodes to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped elements
   */


  var wrapAll = function wrapAll(nodes, wrapperType, wrapperClass) {
    var parent = nodes[0].parentNode;
    var previousSibling = nodes[0].previousSibling;
    var wrapper = document.createElement(wrapperType);

    if (wrapperClass) {
      addClass(wrapper, wrapperClass);
    }

    for (var i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && i++) {
      wrapper.appendChild(nodes[i]);
    }

    var nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild;
    parent.insertBefore(wrapper, nextSibling);
    return wrapper;
  };
  /**
   * Returns wrapped node.
   *
   * @param {node} nodes The node to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped element
   */


  var wrapEl = function wrapEl(node, wrapperType, wrapperClass) {
    var wrapper = document.createElement(wrapperType);

    if (wrapperClass) {
      addClass(wrapper, wrapperClass);
    }

    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);
    return wrapper;
  }; // Before load


  if (ecardRedirect && sessionStorage.getItem('ecardData')) {
    ecardRedirect.click();
  } // On load


  document.addEventListener('DOMContentLoaded', function (e) {
    if (seamlessEcardBlock) {
      seamlessEcard();
    }

    ui();

    if (typeof pageJson !== 'undefined') {
      if (pageJson.pageType === 'donation') {
        donationForm();
      } else if (pageJson.pageType === 'event') {
        eventForm();
      } else if (pageJson.pageType === 'emailtotarget' && pageJson.pageNumber === 1) {
        emailToTarget();
      }

      if (hasClass(body, 'page--hub')) {
        hub();
      }

      if (hasClass(body, 'page--quiz')) {
        quiz();
      }

      if (hasClass(body, 'page--action-center')) {
        actionCenter();
      }

      if (hasClass(body, 'page--confirmation')) {
        confirmation();
      }

      mobilePhone();
      validation();
      formSubmit();
      socialShareTracking();
      advocacyTracking();
      footerTracking();
      URLTracking();
      redirects();
    }

    memberCare();
  });
  window.addEventListener('load', function (e) {
    var checkThermometer = setInterval(function () {
      if (theForm.querySelector('.enWidget--progressBar')) {
        clearInterval(checkThermometer);
        thermometers();
      }
    }, 100);
  });
})();

//# sourceMappingURL=scripts.min.dev.js.map