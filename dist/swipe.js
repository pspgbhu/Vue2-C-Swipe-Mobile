!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swipe=e():t.swipe=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var i=n(60),o=r(i),u=n(59),a=r(u);e.Swipe=o.default,e.SwipeItem=a.default,e.default={Swipe:o.default,SwipeItem:a.default}},function(t,e,n){var r=n(22)("wks"),i=n(26),o=n(2).Symbol,u="function"==typeof o,a=t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))};a.store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(7),i=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3),i=n(38),o=n(54),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(22)("keys"),i=n(26);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(33);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),i=n(2).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2),i=n(8),o=n(16),u=n(6),a="prototype",s=function(t,e,n){var c,f,l,h=t&s.F,p=t&s.G,d=t&s.S,v=t&s.P,m=t&s.B,y=t&s.W,g=p?i:i[e]||(i[e]={}),w=g[a],x=p?r:d?r[e]:(r[e]||{})[a];p&&(n=e);for(c in n)f=!h&&x&&void 0!==x[c],f&&c in g||(l=f?x[c]:n[c],g[c]=p&&"function"!=typeof x[c]?n[c]:m&&f?o(l,r):y&&x[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&w&&!w[c]&&u(w,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7).f,i=n(5),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(2),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(39),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(14),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var s=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swipe-item",mounted:function(){this.$parent.init()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(31),o=r(i),u=!1;try{var a=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}catch(t){}var s=!!u&&{passive:!0};e.default={name:"swipe",data:function(){return{hasMounted:!1,insideValue:this.value,pages:[],width:0,length:0,inited:!1,startx:0,moveDistance:0,touchStartTime:0,copyNum:2,autoplayTimer:null}},props:{value:{type:Number,default:0},pagination:{type:Boolean,default:!0},autoplayTime:{type:Number,default:0},loop:{type:Boolean,default:!0},minMoveDistance:{type:String,default:"20%"},quickTouchTime:{type:Number,default:150},speed:{type:Number,default:300}},computed:{c_minMoveDistance:function(t){var e=t,n="";/px$/.test(t)?n="pixel":/%$/.test(t)?n="percent":(e="20%",n="percent");var r={pixel:function(){parseInt(e,10);return e+"px"},percent:function(){var t=parseInt(e,10)/100;return this.width*t}};return r[n].apply(this)},c_translatex:function(){return-this.width*this.insideValue},c_isEnd:function(){return this.insideValue===this.length-1},c_isBegin:function(){return 0===this.insideValue}},watch:{insideValue:function(t){t!==this.value&&this.$emit("input",t),this.valueChangeHandler(t)},value:function(t){this.insideValue=t},autoplayTime:function(){this.autoChange()}},mounted:function(){this.hasMounted=!0,this.init(),this.initOnce()},methods:{reset:function(){this.init()},init:function(){this.hasMounted&&(this.initDatas(),this.$refs.wrapper.style.width=this.width+"px",this.clearCopies(),this.addCopies(),this.autoplayTime>0&&this.autoChange())},initOnce:function(){this.setTranslate(this.c_translatex)},initDatas:function(){var t=getComputedStyle(this.$el,!1).width;this.width=parseInt(t,10),this.pages=this.$slots.default.filter(function(t){return t.elm.classList.contains("c-swipe-item")}).map(function(t){return t.elm}),this.length=this.pages.length},clearCopies:function(){var t=this,e=this.$refs.wrapper.querySelectorAll(".c-swipe-item-copy");[].concat((0,o.default)(e)).forEach(function(e){t.$refs.wrapper.removeChild(e)},this),this.$refs.wrapper.style.marginLeft="0"},addCopies:function(){var t=this,e=[],n=[];for(this.pages.forEach(function(r,i){if(i<2){var o=r.cloneNode(!0);o.classList.add("c-swipe-item-copy"),e.push(o)}if(i>t.pages.length-3){var u=r.cloneNode(!0);u.classList.add("c-swipe-item-copy"),n.push(u)}},this),this.copyNum=n.length;n.length;){var r=n.pop(),i=this.$refs.wrapper.querySelector(".c-swipe-item");this.$refs.wrapper.insertBefore(r,i)}for(;e.length;){var o=e.shift();this.$refs.wrapper.appendChild(o)}this.$refs.wrapper.style.marginLeft="-"+this.width*this.copyNum+"px"},handleTouchstart:function(t){this.startx=t.touches[0].pageX,this.touchStartTime=(new Date).getTime(),this.autoChange&&this.autoChange(),this.$el.addEventListener("touchmove",this.handleTouchmove,s)},handleTouchmove:function(t){this.moveDistance=t.touches[0].pageX-this.startx;var e=this.c_translatex+this.moveDistance,n=e;n=this.handleTouchmove_loop(e),this.setTranslate(n)},handleTouchend:function(t){var e=(new Date).getTime()-this.touchStartTime<this.quickTouchTime;this.$el.removeEventListener("touchmove",this.handleTouchmove,s),this.loop?this.handleTouchend_loop(this.cartChange(this.moveDistance,e)):this.updateInsideValue(this.cartChange(this.moveDistance,e)),this.moveDistance=0},handleTouchmove_loop:function(t){if(this.loop)return t;var e=0,n=-this.width*(this.length-1);return t>e?e:t<n?n:t},handleTouchend_loop:function(t){var e=this;if(this.loop){var n=this.insideValue+t;return 0===this.insideValue&&n<this.insideValue?(this.setTranslate(-this.width*this.length+this.moveDistance),void setTimeout(function(){e.updateInsideValue(t)},40)):this.insideValue===this.length-1&&n>this.insideValue?(this.setTranslate(this.width+this.moveDistance),void setTimeout(function(){e.updateInsideValue(t)},40)):void this.updateInsideValue(t)}},updateInsideValue:function(t){var e=this;if(0===t)return void this.valueChangeHandler(t);var n=this.insideValue+t,r=this.chain(this.updateInsideValue_loop,this.updateInsideValue_normal,function(t){e.insideValue=t});r(n)},updateInsideValue_loop:function(t){return!!this.loop&&(t<0?(this.insideValue=this.length-1,"done"):t>this.length-1&&(this.insideValue=0,"done"))},updateInsideValue_normal:function(t){return t<0?(this.insideValue=0,this.valueChangeHandler(0),"done"):t>this.length-1&&(this.insideValue=this.length-1,this.valueChangeHandler(this.length-1),"done")},cartChange:function(t,e){var n=Math.abs(t),r=Math.abs(this.c_minMoveDistance),i={normal:function(){return n<r?0:t>0?-1:t<0?1:0},quick:function(){return n<10?0:t>0?-1:t<0?1:0}},o="normal";switch(!0){case e===!0:o="quick";break;default:o="normal"}return i[o].apply(this)},valueChangeHandler:function(t){this.duration(),this.setTranslate(this.c_translatex)},autoChange:function(){var t=this;clearTimeout(this.autoplayTimer);var e=function e(){"number"!=typeof t.autoplayTime||t.autoplayTime<=0||(t.autoplayTimer=setTimeout(function(){t.autoChangeHandler(),e()},t.autoplayTime))};e()},autoChangeHandler:function(){var t=this;this.c_isEnd&&this.setTranslate(this.width),setTimeout(function(){t.insideValue=t.insideValue<t.length-1?t.insideValue+1:0},40)},setTranslate:function(t){function e(t){this.$refs.wrapper.style.transform="translate3d("+t+"px, 0, 0)",this.$refs.wrapper.style.transform="webkikTranslate3d("+t+"px, 0, 0)"}function n(t,e){this.$refs.wrapper.style.webkitTransform="translate3d("+e+"px, 0, 0)",this.$refs.wrapper.style.webkitTransform="webkitTranslate3d("+e+"px, 0, 0)"}"transform"in document.documentElement.style?(this.setTranslate=e,this.setTranslate(t)):(this.setTranslate=n,this.setTranslate(t))},duration:function(){var t=this.$refs.wrapper,e=this.speed;t.style.transitionDuration=e+"ms",t.style.webkitTransitionDuration=e+"ms",clearTimeout(this.durationTimer),this.durationTimer=setTimeout(function(){t.style.transitionDuration="",t.style.webkitTransitionDuration=""},e)},chain:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){for(var t=0;t<e.length;t+=1){var n=e[t].apply(e,arguments);if("done"===n)break}}}}}},function(t,e,n){t.exports={default:n(32),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(30),o=r(i);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},function(t,e,n){n(57),n(56),t.exports=n(8).Array.from},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(23),i=n(24),o=n(53);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=i(s.length),f=o(u,c);if(t&&n!=n){for(;c>f;)if(a=s[f++],a!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(15),i=n(1)("toStringTag"),o="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var r=n(7),i=n(12);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){t.exports=!n(4)&&!n(20)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(11),i=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){"use strict";var r=n(46),i=n(12),o=n(21),u={};n(6)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var r=n(45),i=n(19),o=n(51),u=n(6),a=n(5),s=n(11),c=n(42),f=n(21),l=n(48),h=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",m="values",y=function(){return this};t.exports=function(t,e,n,g,w,x,T){c(n,e,g);var _,b,O,j=function(t){if(!p&&t in M)return M[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",S=w==m,V=!1,M=t.prototype,E=M[h]||M[d]||w&&M[w],I=!p&&E||j(w),$=w?S?j("entries"):I:void 0,k="Array"==e?M.entries||E:E;if(k&&(O=l(k.call(new t)),O!==Object.prototype&&O.next&&(f(O,C,!0),r||a(O,h)||u(O,h,y))),S&&E&&E.name!==m&&(V=!0,I=function(){return E.call(this)}),r&&!T||!p&&!V&&M[h]||u(M,h,I),s[e]=I,s[C]=y,w)if(_={values:S?I:j(m),keys:x?I:j(v),entries:$},T)for(b in _)b in M||o(M,b,_[b]);else i(i.P+i.F*(p||V),e,_);return _}},function(t,e,n){var r=n(1)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:n=!0}},o[r]=function(){return u},t(o)}catch(t){}return n}},function(t,e){t.exports=!0},function(t,e,n){var r=n(3),i=n(47),o=n(18),u=n(13)("IE_PROTO"),a=function(){},s="prototype",c=function(){var t,e=n(17)("iframe"),r=o.length,i="<",u=">";for(e.style.display="none",n(37).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+u+"document.F=Object"+i+"/script"+u),t.close(),c=t.F;r--;)delete c[s][o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[s]=r(t),n=new a,a[s]=null,n[u]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(7),i=n(3),o=n(50);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),a=u.length,s=0;a>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(5),i=n(25),o=n(13)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(5),i=n(23),o=n(34)(!1),u=n(13)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(49),i=n(18);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(14),i=n(9);t.exports=function(t){return function(e,n){var o,u,a=String(i(e)),s=r(n),c=a.length;return s<0||s>=c?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):o:t?a.slice(s,s+2):(o-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(14),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(35),i=n(1)("iterator"),o=n(11);t.exports=n(8).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){"use strict";var r=n(16),i=n(19),o=n(25),u=n(41),a=n(40),s=n(24),c=n(36),f=n(55);i(i.S+i.F*!n(44)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,l,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,m=void 0!==v,y=0,g=f(h);if(m&&(v=r(v,d>2?arguments[2]:void 0,2)),void 0==g||p==Array&&a(g))for(e=s(h.length),n=new p(e);e>y;y++)c(n,y,m?v(h[y],y):h[y]);else for(l=g.call(h),n=new p;!(i=l.next()).done;y++)c(n,y,m?u(l,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){"use strict";var r=n(52)(!0);n(43)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){},function(t,e,n){var r=n(27)(n(28),n(62),null,null);t.exports=r.exports},function(t,e,n){n(58);var r=n(27)(n(29),n(61),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-swipe"},[n("div",{ref:"wrapper",staticClass:"c-swipe-wrapper",on:{touchstart:t.handleTouchstart,touchend:t.handleTouchend,touchcancel:t.handleTouchend}},[t._t("default")],2),t._v(" "),t.pagination?n("div",{staticClass:"c-swipe-pagination"},[n("div",{staticClass:"c-swipe-pagination-bar"},t._l(t.length,function(e){return n("i",{key:e,class:["c-swipe-pagination-item",e-1===t.insideValue?"active":""]})}))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-swipe-item"},[t._t("default")],2)},staticRenderFns:[]}}])});