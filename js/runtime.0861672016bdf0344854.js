(()=>{"use strict";var e,r,t,o,n,a={},i={};function l(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,l),t.loaded=!0,t.exports}l.m=a,e=[],l.O=(r,t,o,n)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,o,n]=e[c],i=!0,u=0;u<t.length;u++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](t[u])))?t.splice(u--,1):(i=!1,n<a&&(a=n));if(i){e.splice(c--,1);var s=o();void 0!==s&&(r=s)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,o,n]},l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,l.d(n,a),n},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>"js/version.49ed3c1f197c0534f1c5.js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},n="spotify-api-usage-example:",l.l=(e,r,t,a)=>{if(o[e])o[e].push(r);else{var i,u;if(void 0!==t)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var p=s[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+t){i=p;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+t),i.src=e),o[e]=[r];var f=(r,t)=>{i.onerror=i.onload=null,clearTimeout(d);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../"})(),(()=>{var e={666:0,421:0};l.f.j=(r,t)=>{var o=l.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(421|666)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=l.p+l.u(r),i=new Error;l.l(a,(t=>{if(l.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}},l.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[a,i,u]=t,s=0;if(a.some((r=>0!==e[r]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(u)var c=u(l)}for(r&&r(t);s<a.length;s++)n=a[s],l.o(e,n)&&e[n]&&e[n][0](),e[a[s]]=0;return l.O(c)},t=self.webpackChunkspotify_api_usage_example=self.webpackChunkspotify_api_usage_example||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();