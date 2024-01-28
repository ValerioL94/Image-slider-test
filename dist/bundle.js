(()=>{var n={28:(n,r,e)=>{"use strict";e.d(r,{Z:()=>a});var t=e(537),o=e.n(t),i=e(645),A=e.n(i)()(o());A.push([n.id,"html,\nbody {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n#content {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n}\nheader {\n  text-align: center;\n  background-color: #25b7d3;\n  border-bottom: 2px solid;\n}\n\nmain {\n  background-color: lightgrey;\n  display: flex;\n  justify-content: center;\n}\n.container {\n  height: 100%;\n  width: 500px;\n  position: relative;\n  background-color: white;\n  display: grid;\n  justify-content: center;\n  grid-template-rows: 640px auto;\n}\n\n.imageWrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n}\n\n.slide {\n  display: none;\n}\n\n.text {\n  display: none;\n}\n\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.photo {\n  height: 600px;\n  width: 400px;\n  border: 2px solid;\n  border-radius: 10px;\n}\n.arrowBtn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.arrowBtn:hover {\n  transform: scale(1.2);\n}\n#leftArrow {\n  position: absolute;\n  left: 0;\n  top: 40%;\n}\n#rightArrow {\n  position: absolute;\n  right: 0;\n  top: 40%;\n}\n.arrow {\n  width: 30px;\n}\n\n.dotsWrapper {\n  cursor: pointer;\n  display: flex;\n  gap: 10px;\n  width: fit-content;\n  margin: auto;\n}\n.dotsWrapper > button {\n  cursor: pointer;\n  height: 15px;\n  border-radius: 100%;\n  transition: 0.5s;\n}\n.dotsWrapper > button:hover {\n  background-color: grey;\n}\n.selected {\n  background-color: grey;\n}\n\n#imageTitle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: 100px;\n  transition: 1s;\n  font-size: 1rem;\n}\n\n.text {\n  font-size: 3rem;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background-color: #25b7d3;\n  border-top: 2px solid;\n}\n.github {\n  height: 20px;\n  transition: 0.5s;\n}\n.github:hover {\n  transform: scale(1.2);\n}\n\n@media screen and (max-width: 600px) {\n  .container {\n    grid-template-rows: 540px auto;\n    width: 400px;\n  }\n\n  .photo {\n    height: 500px;\n    width: 300px;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,SAAS;EACT,UAAU;EACV,YAAY;EACZ,4DAA4D;AAC9D;AACA;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;AAC1B;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;AACV;AACA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE;IACE,8BAA8B;IAC9B,YAAY;EACd;;EAEA;IACE,aAAa;IACb,YAAY;EACd;AACF",sourcesContent:["html,\r\nbody {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n#content {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-rows: 80px 1fr 50px;\r\n}\r\nheader {\r\n  text-align: center;\r\n  background-color: #25b7d3;\r\n  border-bottom: 2px solid;\r\n}\r\n\r\nmain {\r\n  background-color: lightgrey;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.container {\r\n  height: 100%;\r\n  width: 500px;\r\n  position: relative;\r\n  background-color: white;\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-rows: 640px auto;\r\n}\r\n\r\n.imageWrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.slide {\r\n  display: none;\r\n}\r\n\r\n.text {\r\n  display: none;\r\n}\r\n\r\n.fade {\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n@keyframes fade {\r\n  from {\r\n    opacity: 0.4;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n.photo {\r\n  height: 600px;\r\n  width: 400px;\r\n  border: 2px solid;\r\n  border-radius: 10px;\r\n}\r\n.arrowBtn {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: transform 0.5s;\r\n}\r\n.arrowBtn:hover {\r\n  transform: scale(1.2);\r\n}\r\n#leftArrow {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 40%;\r\n}\r\n#rightArrow {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 40%;\r\n}\r\n.arrow {\r\n  width: 30px;\r\n}\r\n\r\n.dotsWrapper {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  width: fit-content;\r\n  margin: auto;\r\n}\r\n.dotsWrapper > button {\r\n  cursor: pointer;\r\n  height: 15px;\r\n  border-radius: 100%;\r\n  transition: 0.5s;\r\n}\r\n.dotsWrapper > button:hover {\r\n  background-color: grey;\r\n}\r\n.selected {\r\n  background-color: grey;\r\n}\r\n\r\n#imageTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-height: 100px;\r\n  transition: 1s;\r\n  font-size: 1rem;\r\n}\r\n\r\n.text {\r\n  font-size: 3rem;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  background-color: #25b7d3;\r\n  border-top: 2px solid;\r\n}\r\n.github {\r\n  height: 20px;\r\n  transition: 0.5s;\r\n}\r\n.github:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .container {\r\n    grid-template-rows: 540px auto;\r\n    width: 400px;\r\n  }\r\n\r\n  .photo {\r\n    height: 500px;\r\n    width: 300px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=A},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(t)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(A[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);t&&A[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},537:n=>{"use strict";n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:n=>{"use strict";var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},A=[],a=0;a<n.length;a++){var s=n[a],c=t.base?s[0]+t.base:s[0],p=i[c]||0,l="".concat(c," ").concat(p);i[c]=p+1;var d=e(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(u);else{var f=o(u,t);t.byIndex=a,r.splice(a,0,{identifier:l,updater:f,references:1})}A.push(l)}return A}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=e(i[A]);r[a].references--}for(var s=t(n,o),c=0;c<i.length;c++){var p=e(i[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=s}}},569:n=>{"use strict";var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{"use strict";n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},112:(n,r,e)=>{var t={"./arrow-left.png":563,"./arrow-right.png":960,"./deer.jpg":459,"./giraffe.jpg":78,"./github.svg":926,"./lion.jpg":219,"./tiger.jpg":927,"./toucan.jpg":438};function o(n){var r=i(n);return e(r)}function i(n){if(!e.o(t,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return t[n]}o.keys=function(){return Object.keys(t)},o.resolve=i,n.exports=o,o.id=112},563:(n,r,e)=>{"use strict";n.exports=e.p+"images/arrow-left.png"},960:(n,r,e)=>{"use strict";n.exports=e.p+"images/arrow-right.png"},459:(n,r,e)=>{"use strict";n.exports=e.p+"images/deer.jpg"},78:(n,r,e)=>{"use strict";n.exports=e.p+"images/giraffe.jpg"},926:(n,r,e)=>{"use strict";n.exports=e.p+"images/github.svg"},219:(n,r,e)=>{"use strict";n.exports=e.p+"images/lion.jpg"},927:(n,r,e)=>{"use strict";n.exports=e.p+"images/tiger.jpg"},438:(n,r,e)=>{"use strict";n.exports=e.p+"images/toucan.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{"use strict";var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),A=e.n(i),a=e(565),s=e.n(a),c=e(216),p=e.n(c),l=e(589),d=e.n(l),u=e(28),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=A().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const g=(()=>{const n=document.querySelectorAll(".slide"),r=document.querySelectorAll(".slideBtn"),e=document.querySelectorAll(".text"),t=document.getElementById("leftArrow"),o=document.getElementById("rightArrow");let i=1;function A(n){a(i+=n)}t.addEventListener("click",(()=>{A(-1)})),o.addEventListener("click",(()=>{A(1)}));for(let n=0;n<r.length;n++)r[n].addEventListener("click",(()=>{a(i=n+1)}));function a(t){let o;for(t>n.length&&(i=1),t<1&&(i=n.length),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<r.length;o++)r[o].classList.remove("selected");for(o=0;o<e.length;o++)e[o].style.display="none";n[i-1].style.display="block",r[i-1].classList.add("selected"),e[i-1].style.display="block"}return{displaySlides:a,autoDisplay:function(){A(1)}}})();var C;(C=e(112)).keys().forEach(C),g.displaySlides(),setInterval(g.autoDisplay,5e3)})()})();
//# sourceMappingURL=bundle.js.map