!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/sass/main.scss\n// module id = 0\n// module chunks = 0 1 2 3\n\n//# sourceURL=webpack:///./src/sass/main.scss?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(0);\n\nvar auth = document.querySelector('#auth');\nvar toMain = document.querySelector('#toMain');\nvar flip = document.querySelector('#flip');\n\nauth.addEventListener('click', function (e) {\n    e.preventDefault();\n    flip.classList.toggle('flip');\n    auth.style.display = 'none';\n});\n\ntoMain.addEventListener('click', function (e) {\n    e.preventDefault();\n    flip.classList.toggle('flip');\n    auth.style.display = 'block';\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/template/pages/welcome/welcome.js\n// module id = 1\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/template/pages/welcome/welcome.js?")}]);