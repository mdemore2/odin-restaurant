(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 32px;\n    text-align: center;\n    box-sizing: border-box;\n\n    --primary-bg-color: #222222;\n    --primary-color:#dee2e6;\n    --secondary-bg-color: #375a7f;\n    --secondary-color: #ffffff;\n    --tertiary-bg-color: #adb5bd;\n    --tertiary-color: #222227;\n\n    background-color: var(--primary-bg-color);\n    color: var(--primary-color);\n}\n\n#content {\n    display: flex;\n    gap: 16px;\n    flex-direction: column;\n}\n\nh1 {\n    font-size: 64px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    color: inherit;\n    background-color: inherit;\n}\n\nnav {\n    display: flex;\n    gap: 16px;\n    justify-content: center;\n}\n\ndiv {\n    flex: 1;\n    gap: 16px;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n}\n\nform {\n    padding: 16px;\n    background-color: inherit;\n    color: inherit;\n\n}\n\nbutton {\n    padding: 8px;\n    border-radius: 8px;\n    border: none;\n    background-color: var(--tertiary-bg-color);\n    color: var(--tertiary-color);\n}\n\ninput {\n    border-radius: 12px;\n    padding: 8px;\n    margin: 8px;\n}\n\n.emphasis {\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-color);\n\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],p=a[l]||0,s="".concat(l," ").concat(p);a[l]=p+1;var u=t(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),l=0;l<a.length;l++){var p=t(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),l=t(216),p=t.n(l),s=t(589),u=t.n(s),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;console.log("JS Loaded"),document.getElementById("content").replaceChildren(),content.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h1");n.textContent="Gabagool Galleria",e.appendChild(n);const t=document.createElement("nav"),r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("button");return r.textContent="Home",o.textContent="Menu",a.textContent="Contact",t.appendChild(r),t.appendChild(o),t.appendChild(a),e.appendChild(t),e}()),function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h3");n.textContent="About Us",e.appendChild(n);const t=document.createElement("h6");return t.textContent="A family owned Italian eatery proudly serving the greater Kansas City metropolitan area since 1937!",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("emphasis");const n=document.createElement("h3");n.textContent="Reservations",e.appendChild(n);const t=document.createElement("form");var r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","Name"),r.setAttribute("placeholder","Name");var o=document.createElement("input");o.setAttribute("type","email"),o.setAttribute("name","email"),o.setAttribute("placeholder","E-Mail");var a=document.createElement("input");a.setAttribute("type","datetime-local");var i=document.createElement("input");return i.setAttribute("type","number"),i.setAttribute("placeholder","Party Size"),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(i),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h3");n.textContent="Reviews",e.appendChild(n);const t=document.createElement("blockquote");return t.innerHTML="<p>Great food, killer vibes, and incredible gabagool!</p><footer>-Tony Soprano</footer>",e.appendChild(t),e}())}()})()})();