'use strict';

/*
Mithril v0.2.4
http://mithril.js.org
(c) 2014-2016 Leo Horie
License: MIT
*/
!function(a,b){"use strict";var c=b(a);"object"==typeof module&&null!=module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):a.m=c}("undefined"!=typeof window?window:{},function(a,b){"use strict";function c(a){return"function"==typeof a}function d(a){return"[object Object]"===Aa.call(a)}function e(a){return"[object String]"===Aa.call(a)}function f(){}function g(a){va=a.document,wa=a.location,ya=a.cancelAnimationFrame||a.clearTimeout,xa=a.requestAnimationFrame||a.setTimeout}function h(a,b){for(var c,d=[],e=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;c=e.exec(b);)if(""===c[1]&&c[2])a.tag=c[2];else if("#"===c[1])a.attrs.id=c[2];else if("."===c[1])d.push(c[2]);else if("["===c[3][0]){var f=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(c[3]);a.attrs[f[1]]=f[3]||(f[2]?"":!0)}return d}function i(a,b){var c=b?a.slice(1):a;return 1===c.length&&Ba(c[0])?c[0]:c}function j(a,b,c){var d="class"in b?"class":"className";for(var e in b)za.call(b,e)&&(e===d&&null!=b[e]&&""!==b[e]?(c.push(b[e]),a[e]=""):a[e]=b[e]);c.length&&(a[d]=c.join(" "))}function k(a,b){var c=[].slice.call(arguments,1);if(d(a))return ba(a,c);if(!e(a))throw new Error("selector in m(selector, attrs, children) should be a string");var f=null!=b&&d(b)&&!("tag"in b||"view"in b||"subtree"in b),g=f?b:{},k={tag:"div",attrs:{},children:i(c,f)};return j(k.attrs,g,h(k,a)),k}function l(a,b){for(var c=0;c<a.length&&!b(a[c],c++););}function m(a,b){l(a,function(a,c){return(a=a&&a.attrs)&&null!=a.key&&b(a,c)})}function n(a){try{if(null!=a&&null!=a.toString())return a}catch(b){}return""}function o(a,b,c,d){try{q(a,b,c),b.nodeValue=d}catch(e){}}function p(a){for(var b=0;b<a.length;b++)Ba(a[b])&&(a=a.concat.apply([],a),b--);return a}function q(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}function r(a,b,c,d){m(a,function(a,d){b[a=a.key]=b[a]?{action:Fa,index:d,from:b[a].index,element:c.nodes[b[a].index]||va.createElement("div")}:{action:Ea,index:d}});var e=[];for(var f in b)za.call(b,f)&&e.push(b[f]);var g=e.sort(R),h=new Array(c.length);return h.nodes=c.nodes.slice(),l(g,function(b){var e=b.index;if(b.action===Da&&(W(c[e].nodes,c[e]),h.splice(e,1)),b.action===Ea){var f=va.createElement("div");f.key=a[e].attrs.key,q(d,f,e),h.splice(e,0,{attrs:{key:a[e].attrs.key},nodes:[f]}),h.nodes[e]=f}if(b.action===Fa){var g=b.element,i=d.childNodes[e];i!==g&&null!==g&&d.insertBefore(g,i||null),h[e]=c[b.from],h.nodes[e]=g}}),h}function s(a,b,c,d){var e=a.length!==b.length;return e||m(a,function(a,c){var d=b[c];return e=d&&d.attrs&&d.attrs.key!==a.key}),e?r(a,c,b,d):b}function t(a,b,c){l(a,function(a,d){null!=b[d]&&c.push.apply(c,b[d].nodes)}),l(b.nodes,function(a,d){null!=a.parentNode&&c.indexOf(a)<0&&W([a],[b[d]])}),a.length<b.length&&(b.length=a.length),b.nodes=c}function u(a){var b=0;m(a,function(){return l(a,function(a){(a=a&&a.attrs)&&null==a.key&&(a.key="__mithril__"+b++)}),1})}function v(a,b,c){return a.tag!==b.tag?!0:c.sort().join()!==Object.keys(b.attrs).sort().join()?!0:a.attrs.id!==b.attrs.id?!0:a.attrs.key!==b.attrs.key?!0:"all"===k.redraw.strategy()?!b.configContext||b.configContext.retain!==!0:"diff"===k.redraw.strategy()?b.configContext&&b.configContext.retain===!1:!1}function w(a,b,d){v(a,b,d)&&(b.nodes.length&&W(b.nodes),b.configContext&&c(b.configContext.onunload)&&b.configContext.onunload(),b.controllers&&l(b.controllers,function(a){a.onunload&&a.onunload({preventDefault:f})}))}function x(a,b){return a.attrs.xmlns?a.attrs.xmlns:"svg"===a.tag?"http://www.w3.org/2000/svg":"math"===a.tag?"http://www.w3.org/1998/Math/MathML":b}function y(a,b,c){c.length&&(a.views=b,a.controllers=c,l(c,function(a){if(a.onunload&&a.onunload.$old&&(a.onunload=a.onunload.$old),Ga&&a.onunload){var b=a.onunload;a.onunload=f,a.onunload.$old=b}}))}function z(a,b,d,e,f){if(c(b.attrs.config)){var g=f.configContext=f.configContext||{};a.push(function(){return b.attrs.config.call(b,d,!e,g,f)})}}function A(a,c,d,e,f,g,h,i){var j=a.nodes[0];return e&&V(j,c.tag,c.attrs,a.attrs,f),a.children=Q(j,c.tag,b,b,c.children,a.children,!1,0,c.attrs.contenteditable?j:d,f,h),a.nodes.intact=!0,i.length&&(a.views=g,a.controllers=i),j}function B(a,b,c){var d;a.$trusted?d=Z(b,c,a):(d=[va.createTextNode(a)],b.nodeName in Ca||q(b,d[0],c));var e;return e="string"==typeof a||"number"==typeof a||"boolean"==typeof a?new a.constructor(a):a,e.nodes=d,e}function C(a,b,c,d,e,f){var g=b.nodes;return d&&d===va.activeElement||(a.$trusted?(W(g,b),g=Z(c,e,a)):"textarea"===f?c.value=a:d?d.innerHTML=a:((1===g[0].nodeType||g.length>1||g[0].nodeValue.trim&&!g[0].nodeValue.trim())&&(W(b.nodes,b),g=[va.createTextNode(a)]),o(c,g[0],e,a))),b=new a.constructor(a),b.nodes=g,b}function D(a,b,c,d,e,f,g){return a.nodes.length?a.valueOf()!==b.valueOf()||e?C(b,a,d,f,c,g):(a.nodes.intact=!0,a):B(b,d,c)}function E(a){if(a.$trusted){var b=a.match(/<[^\/]|\>\s*[^<]/g);if(null!=b)return b.length}else if(Ba(a))return a.length;return 1}function F(a,c,d,e,f,g,h,i,j){a=p(a);var k=[],l=c.length===a.length,n=0,o={},q=!1;m(c,function(a,b){q=!0,o[c[b].attrs.key]={action:Da,index:b}}),u(a),q&&(c=s(a,c,o,d));for(var r=0,v=0,w=a.length;w>v;v++){var x=Q(d,f,c,e,a[v],c[r],g,e+n||n,h,i,j);x!==b&&(l=l&&x.nodes.intact,n+=E(x),c[r++]=x)}return l||t(a,c,k),c}function G(a,b,c,d,e){if(null!=b){if(Aa.call(b)===Aa.call(a))return b;if(e&&e.nodes){var f=c-d,g=f+(Ba(a)?a:b.nodes).length;W(e.nodes.slice(f,g),e.slice(f,g))}else b.nodes&&W(b.nodes,b)}return b=new a.constructor,b.tag&&(b={}),b.nodes=[],b}function H(a,b){return a.attrs.is?null==b?va.createElement(a.tag,a.attrs.is):va.createElementNS(b,a.tag,a.attrs.is):null==b?va.createElement(a.tag):va.createElementNS(b,a.tag)}function I(a,b,c,d){return d?V(b,a.tag,a.attrs,{},c):a.attrs}function J(a,c,d,e,f,g){return null!=a.children&&a.children.length>0?Q(c,a.tag,b,b,a.children,d.children,!0,0,a.attrs.contenteditable?c:e,f,g):a.children}function K(a,b,c,d,e,f,g){var h={tag:a.tag,attrs:b,children:c,nodes:[d]};return y(h,f,g),h.children&&!h.children.nodes&&(h.children.nodes=[]),"select"===a.tag&&"value"in a.attrs&&V(d,a.tag,{value:a.attrs.value},{},e),h}function L(a,b,d,e){var f;return f="diff"===k.redraw.strategy()&&a?a.indexOf(b):-1,f>-1?d[f]:c(e)?new e:{}}function M(a,b,c,d){null!=d.onunload&&Ia.map(function(a){return a.handler}).indexOf(d.onunload)<0&&Ia.push({controller:d,handler:d.onunload}),a.push(c),b.push(d)}function N(a,b,c,d,e,f){var g=L(c.views,b,d,a.controller),h=a&&a.attrs&&a.attrs.key;return a=0===Ga||Ja||d&&d.indexOf(g)>-1?a.view(g):{tag:"placeholder"},"retain"===a.subtree?a:(a.attrs=a.attrs||{},a.attrs.key=h,M(f,e,b,g),a)}function O(a,b,c,d){for(var e=b&&b.controllers;null!=a.view;)a=N(a,a.view.$original||a.view,b,e,d,c);return a}function P(a,b,c,d,f,g,h,i){var j=[],k=[];if(a=O(a,b,j,k),"retain"===a.subtree)return b;if(!a.tag&&k.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");a.attrs=a.attrs||{},b.attrs=b.attrs||{};var l=Object.keys(a.attrs),m=l.length>("key"in a.attrs?1:0);if(w(a,b,l),e(a.tag)){var n=0===b.nodes.length;h=x(a,h);var o;if(n){o=H(a,h);var p=I(a,o,h,m),r=J(a,o,b,c,h,i);b=K(a,p,r,o,h,j,k)}else o=A(b,a,c,m,h,j,i,k);return(n||g===!0&&null!=o)&&q(d,o,f),z(i,a,o,n,b),b}}function Q(a,b,e,f,g,h,i,j,k,l,m){return g=n(g),"retain"===g.subtree?h:(h=G(g,h,j,f,e),Ba(g)?F(g,h,a,j,b,i,k,l,m):null!=g&&d(g)?P(g,h,k,a,j,i,l,m):c(g)?h:D(h,g,j,a,i,k,b))}function R(a,b){return a.action-b.action||a.index-b.index}function S(a,b,c){for(var d in b)za.call(b,d)&&(null==c||c[d]!==b[d])&&(a.style[d]=b[d]);for(d in c)za.call(c,d)&&(za.call(b,d)||(a.style[d]=""))}function T(a,b,e,f,g,h){if("config"===b||"key"===b)return!0;if(c(e)&&"on"===b.slice(0,2))a[b]=$(e,a);else if("style"===b&&null!=e&&d(e))S(a,e,f);else if(null!=h)"href"===b?a.setAttributeNS("http://www.w3.org/1999/xlink","href",e):a.setAttribute("className"===b?"class":b,e);else if(b in a&&!Ka[b])try{("input"!==g||a[b]!==e)&&(a[b]=e)}catch(i){a.setAttribute(b,e)}else a.setAttribute(b,e)}function U(a,b,c,d,e,f,g){if(b in e&&d===c)"value"===b&&"input"===f&&a.value!==c&&(a.value=c);else{e[b]=c;try{return T(a,b,c,d,f,g)}catch(h){if(h.message.indexOf("Invalid argument")<0)throw h}}}function V(a,b,c,d,e){for(var f in c)if(za.call(c,f)&&U(a,f,c[f],d[f],d,b,e))continue;return d}function W(a,b){for(var c=a.length-1;c>-1;c--)if(a[c]&&a[c].parentNode){try{a[c].parentNode.removeChild(a[c])}catch(d){}b=[].concat(b),b[c]&&X(b[c])}a.length&&(a.length=0)}function X(a){a.configContext&&c(a.configContext.onunload)&&(a.configContext.onunload(),a.configContext.onunload=null),a.controllers&&l(a.controllers,function(a){c(a.onunload)&&a.onunload({preventDefault:f})}),a.children&&(Ba(a.children)?l(a.children,X):a.children.tag&&X(a.children))}function Y(a,b){try{a.appendChild(va.createRange().createContextualFragment(b))}catch(c){a.insertAdjacentHTML("beforeend",b)}}function Z(a,b,c){var d=a.childNodes[b];if(d){var e=1!==d.nodeType,f=va.createElement("span");e?(a.insertBefore(f,d||null),f.insertAdjacentHTML("beforebegin",c),a.removeChild(f)):d.insertAdjacentHTML("beforebegin",c)}else Y(a,c);for(var g=[];a.childNodes[b]!==d;)g.push(a.childNodes[b]),b++;return g}function $(a,b){return function(c){c=c||event,k.redraw.strategy("diff"),k.startComputation();try{return a.call(b,c)}finally{fa()}}}function _(a){var b=Ma.indexOf(a);return 0>b?Ma.push(a)-1:b}function aa(a){function b(){return arguments.length&&(a=arguments[0]),a}return b.toJSON=function(){return a},b}function ba(a,b){function c(){return(a.controller||f).apply(this,b)||this}function d(c){for(var d=[c].concat(b),e=1;e<arguments.length;e++)d.push(arguments[e]);return a.view.apply(a,d)}a.controller&&(c.prototype=a.controller.prototype),d.$original=a.view;var e={controller:c,view:d};return b[0]&&null!=b[0].key&&(e.attrs={key:b[0].key}),e}function ca(a,b,c,d){if(!d){k.redraw.strategy("all"),k.startComputation(),Pa[c]=b;var e;e=Oa=a?a:a={controller:f};var g=new(a.controller||f);return e===Oa&&(Ra[c]=g,Qa[c]=a),fa(),null===a&&da(b,c),Ra[c]}null==a&&da(b,c)}function da(a,b){Pa.splice(b,1),Ra.splice(b,1),Qa.splice(b,1),ma(a),Ma.splice(_(a),1)}function ea(){Ua&&(Ua(),Ua=null),l(Pa,function(a,b){var c=Qa[b];if(Ra[b]){var d=[Ra[b]];k.render(a,c.view?c.view(Ra[b],d):"")}}),Va&&(Va(),Va=null),Sa=null,Ta=new Date,k.redraw.strategy("diff")}function fa(){"none"===k.redraw.strategy()?(Ga--,k.redraw.strategy("diff")):k.endComputation()}function ga(a){return a.slice($a[k.route.mode].length)}function ha(a,b,c){Ya={};var d=c.indexOf("?");-1!==d&&(Ya=la(c.substr(d+1,c.length)),c=c.substr(0,d));var e=Object.keys(b),f=e.indexOf(c);if(-1!==f)return k.mount(a,b[e[f]]),!0;for(var g in b)if(za.call(b,g)){if(g===c)return k.mount(a,b[g]),!0;var h=new RegExp("^"+g.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(h.test(c))return c.replace(h,function(){var c=g.match(/:[^\/]+/g)||[],d=[].slice.call(arguments,1,-2);l(c,function(a,b){Ya[a.replace(/:|\./g,"")]=decodeURIComponent(d[b])}),k.mount(a,b[g])}),!0}}function ia(a){if(a=a||event,!(a.ctrlKey||a.metaKey||a.shiftKey||2===a.which)){a.preventDefault?a.preventDefault():a.returnValue=!1;var b,c=a.currentTarget||a.srcElement;for(b="pathname"===k.route.mode&&c.search?la(c.search.slice(1)):{};c&&!/a/i.test(c.nodeName);)c=c.parentNode;Ga=0,k.route(c[k.route.mode].slice($a[k.route.mode].length),b)}}function ja(){"hash"!==k.route.mode&&wa.hash?wa.hash=wa.hash:a.scrollTo(0,0)}function ka(a,c){var e={},f=[];for(var g in a)if(za.call(a,g)){var h=c?c+"["+g+"]":g,i=a[g];if(null===i)f.push(encodeURIComponent(h));else if(d(i))f.push(ka(i,h));else if(Ba(i)){var j=[];e[h]=e[h]||{},l(i,function(a){e[h][a]||(e[h][a]=!0,j.push(encodeURIComponent(h)+"="+encodeURIComponent(a)))}),f.push(j.join("&"))}else i!==b&&f.push(encodeURIComponent(h)+"="+encodeURIComponent(i))}return f.join("&")}function la(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));var b=a.split("&"),c={};return l(b,function(a){var b=a.split("="),d=decodeURIComponent(b[0]),e=2===b.length?decodeURIComponent(b[1]):null;null!=c[d]?(Ba(c[d])||(c[d]=[c[d]]),c[d].push(e)):c[d]=e}),c}function ma(a){var c=_(a);W(a.childNodes,Na[c]),Na[c]=b}function na(a,b){var c=k.prop(b);return a.then(c),c.then=function(c,d){return na(a.then(c,d),b)},c["catch"]=c.then.bind(null,null),c}function oa(a,b){function e(a){i=a||eb,l.map(function(a){i===db?a.resolve(j):a.reject(j)})}function f(a,b,e,f){if((null!=j&&d(j)||c(j))&&c(a))try{var g=0;a.call(j,function(a){g++||(j=a,b())},function(a){g++||(j=a,e())})}catch(h){k.deferred.onerror(h),j=h,e()}else f()}function g(){var d;try{d=j&&j.then}catch(l){return k.deferred.onerror(l),j=l,i=cb,g()}i===cb&&k.deferred.onerror(j),f(d,function(){i=bb,g()},function(){i=cb,g()},function(){try{i===bb&&c(a)?j=a(j):i===cb&&c(b)&&(j=b(j),i=bb)}catch(g){return k.deferred.onerror(g),j=g,e()}j===h?(j=TypeError(),e()):f(d,function(){e(db)},e,function(){e(i===bb&&db)})})}var h=this,i=0,j=0,l=[];h.promise={},h.resolve=function(a){return i||(j=a,i=bb,g()),h},h.reject=function(a){return i||(j=a,i=cb,g()),h},h.promise.then=function(a,b){var c=new oa(a,b);return i===db?c.resolve(j):i===eb?c.reject(j):l.push(c),c.promise}}function pa(a){return a}function qa(c){var d="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),e=va.createElement("script");a[d]=function(f){e.parentNode.removeChild(e),c.onload({type:"load",target:{responseText:f}}),a[d]=b},e.onerror=function(){return e.parentNode.removeChild(e),c.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),a[d]=b,!1},e.onload=function(){return!1},e.src=c.url+(c.url.indexOf("?")>0?"&":"?")+(c.callbackKey?c.callbackKey:"callback")+"="+d+"&"+ka(c.data||{}),va.body.appendChild(e)}function ra(b){var d=new a.XMLHttpRequest;if(d.open(b.method,b.url,!0,b.user,b.password),d.onreadystatechange=function(){4===d.readyState&&(d.status>=200&&d.status<300?b.onload({type:"load",target:d}):b.onerror({type:"error",target:d}))},b.serialize===JSON.stringify&&b.data&&"GET"!==b.method&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),b.deserialize===JSON.parse&&d.setRequestHeader("Accept","application/json, text/*"),c(b.config)){var f=b.config(d,b);null!=f&&(d=f)}var g="GET"!==b.method&&b.data?b.data:"";if(g&&!e(g)&&g.constructor!==a.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return d.send(g),d}function sa(a){return a.dataType&&"jsonp"===a.dataType.toLowerCase()?qa(a):ra(a)}function ta(a,b,c){if("GET"===a.method&&"jsonp"!==a.dataType){var d=a.url.indexOf("?")<0?"?":"&",e=ka(b);a.url+=e?d+e:""}else a.data=c(b)}function ua(a,b){return b&&(a=a.replace(/:[a-z]\w+/gi,function(a){var c=a.slice(1),d=b[c];return delete b[c],d})),a}k.version=function(){return"v0.2.3"};var va,wa,xa,ya,za={}.hasOwnProperty,Aa={}.toString,Ba=Array.isArray||function(a){return"[object Array]"===Aa.call(a)},Ca={AREA:1,BASE:1,BR:1,COL:1,COMMAND:1,EMBED:1,HR:1,IMG:1,INPUT:1,KEYGEN:1,LINK:1,META:1,PARAM:1,SOURCE:1,TRACK:1,WBR:1};k.deps=function(b){return g(a=b||window),a},k.deps(a);var Da=1,Ea=2,Fa=3,Ga=0;k.startComputation=function(){Ga++},k.endComputation=function(){Ga>1?Ga--:(Ga=0,k.redraw())};var Ha,Ia=[],Ja=!1,Ka={list:1,style:1,form:1,type:1,width:1,height:1},La={appendChild:function(a){Ha===b&&(Ha=va.createElement("html")),va.documentElement&&va.documentElement!==a?va.replaceChild(a,va.documentElement):va.appendChild(a),this.childNodes=va.childNodes},insertBefore:function(a){this.appendChild(a)},childNodes:[]},Ma=[],Na={};k.render=function(a,c,d){if(!a)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var e,f=[],g=_(a),h=a===va;e=h||a===va.documentElement?La:a,h&&"html"!==c.tag&&(c={tag:"html",attrs:{},children:c}),Na[g]===b&&W(e.childNodes),d===!0&&ma(a),Na[g]=Q(e,null,b,b,c,Na[g],!1,0,null,b,f),l(f,function(a){a()})},k.trust=function(a){return a=new String(a),a.$trusted=!0,a},k.prop=function(a){return(null!=a&&d(a)||c(a))&&c(a.then)?na(a):aa(a)};var Oa,Pa=[],Qa=[],Ra=[],Sa=null,Ta=0,Ua=null,Va=null,Wa=16;k.component=function(a){var b=[].slice.call(arguments,1);return ba(a,b)},k.mount=k.module=function(a,b){if(!a)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var d=Pa.indexOf(a);0>d&&(d=Pa.length);var e=!1,f={preventDefault:function(){e=!0,Ua=Va=null}};return l(Ia,function(a){a.handler.call(a.controller,f),a.controller.onunload=null}),e?l(Ia,function(a){a.controller.onunload=a.handler}):Ia=[],Ra[d]&&c(Ra[d].onunload)&&Ra[d].onunload(f),ca(b,a,d,e)};var Xa=!1;k.redraw=function(b){if(!Xa){Xa=!0,b&&(Ja=!0);try{Sa&&!b?(xa===a.requestAnimationFrame||new Date-Ta>Wa)&&(Sa>0&&ya(Sa),Sa=xa(ea,Wa)):(ea(),Sa=xa(function(){Sa=null},Wa))}finally{Xa=Ja=!1}}},k.redraw.strategy=k.prop(),k.withAttr=function(a,b,c){return function(d){d=d||event;var e=d.currentTarget||this,f=c||this,g=a in e?e[a]:e.getAttribute(a);b.call(f,g)}};var Ya,Za,$a={pathname:"",hash:"#",search:"?"},_a=f,ab=!1;k.route=function(b,c,d,f){if(0===arguments.length)return Za;if(3===arguments.length&&e(c)){_a=function(a){var e=Za=ga(a);if(!ha(b,d,e)){if(ab)throw new Error("Ensure the default route matches one of the routes defined in m.route");ab=!0,k.route(c,!0),ab=!1}};var g="hash"===k.route.mode?"onhashchange":"onpopstate";return a[g]=function(){var a=wa[k.route.mode];"pathname"===k.route.mode&&(a+=wa.search),Za!==ga(a)&&_a(a)},Ua=ja,void a[g]()}if(b.addEventListener||b.attachEvent){var h="pathname"!==k.route.mode?wa.pathname:"";return b.href=h+$a[k.route.mode]+f.attrs.href,void(b.addEventListener?(b.removeEventListener("click",ia),b.addEventListener("click",ia)):(b.detachEvent("onclick",ia),b.attachEvent("onclick",ia)))}if(e(b)){var i=Za;Za=b;var j,l=c||{},m=Za.indexOf("?");j=m>-1?la(Za.slice(m+1)):{};for(var n in l)za.call(l,n)&&(j[n]=l[n]);var o,p=ka(j);o=m>-1?Za.slice(0,m):Za,p&&(Za=o+(-1===o.indexOf("?")?"?":"&")+p);var q=(3===arguments.length?d:c)===!0||i===b;if(a.history.pushState){var r=q?"replaceState":"pushState";Ua=ja,Va=function(){a.history[r](null,va.title,$a[k.route.mode]+Za)},_a($a[k.route.mode]+Za)}else wa[k.route.mode]=Za,_a($a[k.route.mode]+Za)}},k.route.param=function(a){if(!Ya)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return a?Ya[a]:Ya},k.route.mode="search",k.route.buildQueryString=ka,k.route.parseQueryString=la,k.deferred=function(){var a=new oa;return a.promise=na(a.promise),a};var bb=1,cb=2,db=3,eb=4;return k.deferred.onerror=function(a){if("[object Error]"===Aa.call(a)&&!/ Error/.test(a.constructor.toString()))throw Ga=0,a},k.sync=function(a){function b(a,b){return function(g){return e[a]=g,b||(f="reject"),0===--d&&(c.promise(e),c[f](e)),g}}var c=k.deferred(),d=a.length,e=new Array(d),f="resolve";return a.length>0?l(a,function(a,c){a.then(b(c,!0),b(c,!1))}):c.resolve([]),c.promise},k.request=function(a){a.background!==!0&&k.startComputation();var b,c,d,e=new oa,f=a.dataType&&"jsonp"===a.dataType.toLowerCase();return f?(b=a.serialize=c=a.deserialize=pa,d=function(a){return a.responseText}):(b=a.serialize=a.serialize||JSON.stringify,c=a.deserialize=a.deserialize||JSON.parse,d=a.extract||function(a){return a.responseText.length||c!==JSON.parse?a.responseText:null}),a.method=(a.method||"GET").toUpperCase(),a.url=ua(a.url,a.data),ta(a,a.data,b),a.onload=a.onerror=function(b){try{b=b||event;var f=c(d(b.target,a));"load"===b.type?(a.unwrapSuccess&&(f=a.unwrapSuccess(f,b.target)),Ba(f)&&a.type?l(f,function(b,c){f[c]=new a.type(b)}):a.type&&(f=new a.type(f)),e.resolve(f)):(a.unwrapError&&(f=a.unwrapError(f,b.target)),e.reject(f))}catch(g){e.reject(g)}finally{a.background!==!0&&k.endComputation()}},sa(a),e.promise=na(e.promise,a.initialValue),e.promise},k});

var app = 'com.dannyvankooten.gopass';
var activeTab;
var searching = true;
var logins;
var domain;

chrome.browserAction.setIcon({ path: 'icon-lock.svg' });
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  init(tabs[0]);
});

function view() {
  var results;

  if( searching ) {
    results = m('div.loader');
  } else if( typeof(logins) === "undefined" ) {
    results = m('div.status-text', "Error talking to Pass");
  } else if( logins.length === 0 ) {
    results = m('div.status-text',  m.trust(`No passwords found for <strong>${domain}</strong>.`));
  } else {
      results = logins.map(function(l) {
        return m('button.username', {
          "onclick": fillLoginForm.bind(l)
        }, [
          m('img', {
            "class": "favicon",
            "src": getFaviconUrl(domain)
          }),
          m('span', l.u)
        ])
      });
  }

  return [
    // search form
    m('div.search', [
      m('form', {
        "onsubmit": submitSearchForm
      }, [
        m('input', {
          "type": "text",
          "name": "s",
          "placeholder": "Search password..",
          "autocomplete": "off",
          "autofocus": "on"
        }),
        m('input', {
          "type": "submit",
          "value": "Search",
          "style": "display: none;"
        })
      ])
    ]),

    // results
    m('div', results)
  ];
}

m.mount(document.getElementById('mount'), { "view": view });

function submitSearchForm(e) {
  e.preventDefault();

  // don't search without input.
  if( ! this.s.value.length ) {
      return;
  }

  searchPassword(this.s.value);
}

function init(tab) {
  // do nothing if called from a non-tab context
  if( tab == undefined ) {
    return;
  }

  activeTab = tab;
  var domain = parseDomainFromUrl(tab.url);
  searchPassword(domain);
}

function searchPassword(_domain) {
  searching = true;
  logins = null;
  domain = _domain;
  m.redraw();

  chrome.runtime.sendNativeMessage(app, { "domain": _domain }, function(response) {
    searching = false;
    logins = response;
    m.redraw();
  });
}

function getFaviconUrl(domain){

  // use current favicon when searching for current tab
  if(activeTab && activeTab.favIconUrl.indexOf(domain) > -1) {
    return activeTab.favIconUrl;
  }

  // make a smart guess if search looks like a real domain
  var dot = domain.indexOf('.');
  if( dot > 1 && domain.substring(dot).length > 2) {
    return 'http://' + domain + '/favicon.ico';
  }

  return 'icon-key.png';
}

// fill login form & submit
function fillLoginForm() {
  var code = `
  (function(d) {
    function form() {
      return d.querySelector('input[type=password]').form || document.createElement('form');
    }

    function field(selector) {
      return form().querySelector(selector) || document.createElement('input');
    }

    function update(el, value) {
      el.setAttribute('value', value);
      el.value = value;

      var eventNames = [ 'click', 'focus', 'keyup', 'keydown', 'change', 'blur' ];
      eventNames.forEach(function(eventName) {
        el.dispatchEvent(new Event(eventName, {"bubbles":true}));
      });
    }

    update(field('input[type=password]'), ${JSON.stringify(this.p)});
    update(field('input[type=email], input[type=text]'), ${JSON.stringify(this.u)});
    field('[type=submit]').click();
  })(document);
  `;
  chrome.tabs.executeScript({ code: code });
  window.close();
}

// parse domain from a URL & strip WWW
function parseDomainFromUrl(url) {
  var a = document.createElement('a');
  a.href = url;
  return a.hostname.replace('www.', '');
}
