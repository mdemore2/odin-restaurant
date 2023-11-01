(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"* {\n    margin: 0;\n    padding: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 32px;\n    text-align: center;\n    box-sizing: border-box;\n\n    --primary-bg-color: #222222;\n    --primary-color:#dee2e6;\n    --secondary-bg-color: #375a7f;\n    --secondary-color: #ffffff;\n    --tertiary-bg-color: #adb5bd;\n    --tertiary-color: #222227;\n\n    background-color: var(--primary-bg-color);\n    color: var(--primary-color);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n\n}\n\ndiv:not(#content) {\n    padding: 16px;\n}\n\n.main {\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-color);\n}\n\nh1 {\n    font-size: 64px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    color: inherit;\n    background-color: inherit;\n}\n\nnav {\n    display: flex;\n    gap: 16px;\n    justify-content: center;\n}\n\ndiv {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    padding: 16px;\n    background-color: inherit;\n    color: inherit;\n\n}\n\nbutton {\n    padding: 8px;\n    border-radius: 8px;\n    border: none;\n    background-color: var(--tertiary-bg-color);\n    color: var(--tertiary-color);\n}\n\ninput {\n    border-radius: 12px;\n    padding: 8px;\n    margin: 8px;\n}\n\n.emphasis {\n    background-color: var(--tertiary-bg-color);\n    color: var(--tertiary-color);\n\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),d=t.n(i),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const n=document.createElement("h3");n.textContent="About Us",e.appendChild(n);const t=document.createElement("h6");return t.textContent="A family owned Italian eatery proudly serving the greater Kansas City metropolitan area since 1937!",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("emphasis");const n=document.createElement("h3");n.textContent="Reservations",e.appendChild(n);const t=document.createElement("form");var r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","Name"),r.setAttribute("placeholder","Name");var o=document.createElement("input");o.setAttribute("type","email"),o.setAttribute("name","email"),o.setAttribute("placeholder","E-Mail");var a=document.createElement("input");a.setAttribute("type","datetime-local");var c=document.createElement("input");return c.setAttribute("type","number"),c.setAttribute("placeholder","Party Size"),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(c),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const n=document.createElement("h3");n.textContent="Reviews",e.appendChild(n);const t=document.createElement("blockquote");return t.innerHTML="<p>Great food, killer vibes, and incredible gabagool!</p><footer>-Tony Soprano</footer>",e.appendChild(t),e}())},v=function(){document.getElementById("content").appendChild(function(){const e=document.createElement("div"),n=document.createElement("ul");e.appendChild(n);const t=[["Pizza Margherita",12.99],["Spaghetti Carbonara",14.99],["Lasagna",16.99],["Chicken Parmesan",17.99],["Tilapia Piccata",18.99]];for(const e of t){const t=document.createElement("li");t.textContent=e[0];const r=document.createElement("span");r.textContent=`$${e[1]}`,t.appendChild(r),n.appendChild(t)}return e}())},y=function(){document.getElementById("content").appendChild(function(){const e=document.createElement("div"),n=document.createElement("h2");n.textContent="Contact Us",e.appendChild(n);const t=document.createElement("h3");t.textContent="Address",e.appendChild(t);const r=document.createElement("p");r.textContent="\n      Gabagool Galleria\n      123 Main Street\n      Kansas City, Arkansas 12345\n    ",e.appendChild(r);const o=document.createElement("h3");o.textContent="Hours of Operation",e.appendChild(o);const a=document.createElement("p");return a.textContent="\n      Sunday - Thursday: 11am - 9pm\n      Friday - Saturday: 11am - 10pm\n    ",e.appendChild(a),e}())};function b(){document.getElementById("content").replaceChildren(),content.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h1");n.textContent="Gabagool Galleria",e.appendChild(n);const t=document.createElement("nav"),r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("button");return r.textContent="Home",o.textContent="Menu",a.textContent="Contact",t.appendChild(r),t.appendChild(o),t.appendChild(a),e.appendChild(t),e}());var e=document.querySelector("nav");Array.prototype.slice.call(e.children).forEach((e=>{e.addEventListener("click",C)}))}function C(e){switch(e.currentTarget.innerHTML){case"Home":b(),h();break;case"Menu":b(),v();break;case"Contact":b(),y()}}b(),h(),console.log("JS Loaded")})()})();