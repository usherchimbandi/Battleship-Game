/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Almarai', sans-serif;\r\n    /* border: 1px solid lime; */\r\n}\r\n/* body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\nheader {\r\n    height: 12vh;\r\n    background-color: #F5F5F7;\r\n    box-shadow: 0px 1px 2px rgb(190 190 190);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 2% 0 2%\r\n}\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr .5fr 1fr;\r\n    padding: 2% 4% 4% 4%;\r\n} \r\n\r\n\r\n.table {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.table-indicator {\r\n    height: 9vh;\r\n    border-radius: 10px;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 1.4em;\r\n}\r\n\r\n\r\n.myFleet {\r\n    color: white;\r\n    background-color: #E2134D;\r\n}\r\n\r\n.opponent {\r\n    color: white;\r\n    background-color: #686E8A;\r\n}\r\n\r\n\r\ntable {\r\n    /* margin-top: 100px; */\r\n    /* border-collapse: collapse; */\r\n    cursor: default;\r\n}\r\n\r\n.ships {\r\n    padding: 0 0 5% 9%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    row-gap: 10%;\r\n    column-gap: 20%;\r\n    width: 80%;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.ships p{\r\n    font-weight: 600;\r\n}\r\nth {\r\n    font-weight: 600;\r\n    color: #3F4454;\r\n}\r\ntd {\r\n    height: 2.3em;\r\n    width: 2.3em;\r\n    /* border: 1px solid black; */\r\n    background-color: #B1DEF6;\r\n    border-radius: 2px;\r\n}\r\n\r\n.attacked {\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.div {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ship { \r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 2px solid #E2134D;\r\n    background-color: rgba(231, 9, 30, 0.3);\r\n    z-index: 1;\r\n    /* border-radius: 20px; */\r\n}\r\n\r\n\r\n.first {\r\n    color: #3F4454;\r\n    text-align: end;\r\n    padding-right: 2.5%;\r\n\r\n}\r\n\r\n\r\nfooter {\r\n    height: 15vh;\r\n    /* outline: 1px solid black; */\r\n    background-color: #333;\r\n}\r\n\r\n.t {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.y::after {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(45deg);\r\n    /* display: none; */\r\n}\r\n\r\n.y::before {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(-45deg);\r\n    /* display: none;s */\r\n}\r\n\r\n.controls {\r\n    padding: 3%;\r\n    height: 4em;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.random {\r\n    text-decoration: underline dotted #E2134D;\r\n    cursor: pointer;\r\n    transition: all .3s;\r\n}\r\n\r\n.random:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.j {\r\n    height: 70%;\r\n    /* width: 100%; */\r\n    /* border: 1px solid red; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 10%;\r\n}\r\n\r\n.message {\r\n    height: 10%;\r\n    width: 100%;\r\n    /* border: 1px solid lime; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.3em;\r\n    background-color: #3F4454;\r\n    font-weight: 600;\r\n    color: white;\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n.play, .reset {\r\n    font-weight: 900;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n    transition: all .4s;\r\n    text-decoration: underline;\r\n}\r\n\r\n.play:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.reset:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.winner {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 2em;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    z-index: 2;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 4em;\r\n}\r\n\r\n.win {\r\n    padding: .4em .8em;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.destroyed {\r\n    text-decoration: line-through #E2134D;\r\n    color: #E2134D;\r\n}\r\n\r\n.miss {\r\n    color: #E2134D;\r\n    font-weight: 900;\r\n    font-size: .9em;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Almarai', sans-serif;\r\n    /* border: 1px solid lime; */\r\n}\r\n/* body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\nheader {\r\n    height: 12vh;\r\n    background-color: #F5F5F7;\r\n    box-shadow: 0px 1px 2px rgb(190 190 190);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 2% 0 2%\r\n}\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr .5fr 1fr;\r\n    padding: 2% 4% 4% 4%;\r\n} \r\n\r\n\r\n.table {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.table-indicator {\r\n    height: 9vh;\r\n    border-radius: 10px;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 1.4em;\r\n}\r\n\r\n\r\n.myFleet {\r\n    color: white;\r\n    background-color: #E2134D;\r\n}\r\n\r\n.opponent {\r\n    color: white;\r\n    background-color: #686E8A;\r\n}\r\n\r\n\r\ntable {\r\n    /* margin-top: 100px; */\r\n    /* border-collapse: collapse; */\r\n    cursor: default;\r\n}\r\n\r\n.ships {\r\n    padding: 0 0 5% 9%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    row-gap: 10%;\r\n    column-gap: 20%;\r\n    width: 80%;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.ships p{\r\n    font-weight: 600;\r\n}\r\nth {\r\n    font-weight: 600;\r\n    color: #3F4454;\r\n}\r\ntd {\r\n    height: 2.3em;\r\n    width: 2.3em;\r\n    /* border: 1px solid black; */\r\n    background-color: #B1DEF6;\r\n    border-radius: 2px;\r\n}\r\n\r\n.attacked {\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.div {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ship { \r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 2px solid #E2134D;\r\n    background-color: rgba(231, 9, 30, 0.3);\r\n    z-index: 1;\r\n    /* border-radius: 20px; */\r\n}\r\n\r\n\r\n.first {\r\n    color: #3F4454;\r\n    text-align: end;\r\n    padding-right: 2.5%;\r\n\r\n}\r\n\r\n\r\nfooter {\r\n    height: 15vh;\r\n    /* outline: 1px solid black; */\r\n    background-color: #333;\r\n}\r\n\r\n.t {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.y::after {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(45deg);\r\n    /* display: none; */\r\n}\r\n\r\n.y::before {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(-45deg);\r\n    /* display: none;s */\r\n}\r\n\r\n.controls {\r\n    padding: 3%;\r\n    height: 4em;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.random {\r\n    text-decoration: underline dotted #E2134D;\r\n    cursor: pointer;\r\n    transition: all .3s;\r\n}\r\n\r\n.random:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.j {\r\n    height: 70%;\r\n    /* width: 100%; */\r\n    /* border: 1px solid red; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 10%;\r\n}\r\n\r\n.message {\r\n    height: 10%;\r\n    width: 100%;\r\n    /* border: 1px solid lime; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.3em;\r\n    background-color: #3F4454;\r\n    font-weight: 600;\r\n    color: white;\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n.play, .reset {\r\n    font-weight: 900;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n    transition: all .4s;\r\n    text-decoration: underline;\r\n}\r\n\r\n.play:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.reset:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.winner {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 2em;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    z-index: 2;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 4em;\r\n}\r\n\r\n.win {\r\n    padding: .4em .8em;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.destroyed {\r\n    text-decoration: line-through #E2134D;\r\n    color: #E2134D;\r\n}\r\n\r\n.miss {\r\n    color: #E2134D;\r\n    font-weight: 900;\r\n    font-size: .9em;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/com.js":
/*!********************!*\
  !*** ./src/com.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ f),
/* harmony export */   "l": () => (/* binding */ l),
/* harmony export */   "q": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ "./src/play.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// This function takes care of choosing a coordinate, then the node at that coordinate to attack and then returns both the coordinate and node.
function f(player2) {
    let com = (0,_play__WEBPACK_IMPORTED_MODULE_1__.computerPlay)(player2.nodesAttacked); // returns coordinate to attack 
    let node = [...(0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1].find(i => Number(i.dataset.x) == com[0] && Number(i.dataset.y) == com[1]);// finds the node matching the attacked coordinate
    while(node.getAttribute('data-clicked') == 'true') {// if the coordinate the com came up with has already been destroyed, it'll find another one
        com = (0,_play__WEBPACK_IMPORTED_MODULE_1__.computerPlay)(player2.nodesAttacked);
        node = [...(0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1].find(i => Number(i.dataset.x) == com[0] && Number(i.dataset.y) == com[1]);
    }
    return {com, node}
}


// This function takes care of all moves made by the com and plays adjacent moves after each hit
function l(player2, player1, node, direction, comPlayed, hit, arr = []) {
	// if(!node || node.getAttribute('data-clicked') == 'true') return
	// else {
        // The next 4 conditions check if the chosen node is touching any one of the walls and that the direction chosen doesn't move out the grid
        // If true, a new direction will be chosen. The new direction cannot be the same as the old one.
        if(Number(node.dataset.y) == 1 && direction == 'bottom') {
            const direction = ['top', 'left', 'right'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        } else if(Number(node.dataset.x) == 1 && direction == 'left') {
            const direction = ['top', 'bottom', 'right'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        } else if(Number(node.dataset.y) == 10 && direction == 'top') {
            const direction = ['bottom', 'left', 'right'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        } else if(Number(node.dataset.x) == 10 && direction == 'right') {
            const direction = ['top', 'left', 'bottom'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        }
        // The following conditions specificallt take care of the moves of the com. Making adjacent moves after each hit where possible
        else {
            if(direction == 'right') {
                const right = [...(0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1].find(t => Number(t.dataset.x) > Number(node.dataset.x) && Number(node.dataset.y) == Number(t.dataset.y));
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {

                    } else arr.unshift(node)
                }
                if(right.textContent == 'Miss') {
                    const direction = ['top', 'left', 'bottom'][Math.floor(Math.random() * 3)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(right.getAttribute('data-clicked') == 'true') {
                    const direction = ['top', 'left', 'bottom'][Math.floor(Math.random() * 3)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit, arr);
                }
                return l(player2, player1, right, direction, comPlayed, hit, arr)
            } 
            else if(direction == 'left') {
                const left = [...(0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1].find(t => Number(node.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(node.dataset.y));
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                if(left.textContent == 'Miss') {
                    const direction = ['top', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(left.getAttribute('data-clicked') == 'true') {
                    const direction = ['top', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit,  arr);
                }
                return l(player2, player1, left, direction, comPlayed, hit,  arr)
            }
            else if(direction == 'top') {
                const top = [...(0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(t.dataset.y) > Number(node.dataset.y));
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                if(top.textContent == 'Miss') {
                    const direction = ['left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(top.getAttribute('data-clicked') == 'true') {
                    const direction = ['left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit, arr);
                }
                return l(player2, player1, top, direction, comPlayed, hit, arr)
            }
            else if(direction == 'bottom') {
                const bottom = [...(0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(node.dataset.y) - Number(t.dataset.y) == 1);
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                if(bottom.textContent == 'Miss') {
                    const direction = ['top', 'left', 'right'][Math.floor(Math.random() * 4)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(bottom.getAttribute('data-clicked') == 'true') {
                    const direction = ['top', 'left', 'right'][Math.floor(Math.random() * 4)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit, arr);
                }
                return l(player2, player1, bottom, direction, comPlayed, hit, arr)
            }
            else {
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                return l(player2, player1, node, direction, comPlayed, hit, arr)
            }
        }
    // } 
}


// This function is for when the com attacks a node 
function q(player1, node, comPlayed, hit, com) {
    if(node.getAttribute('data-clicked') == 'false') {
        const p = player1.gameboard.receiveAttack(com); // our gameboard receives an attack from the com
        if(p == 'missed') { // if the com missed
            node.setAttribute('data-clicked', 'true'); // the status of the node clicked by the com should be true now
            setTimeout(() => { // this setTimeout is used to slow down the moves of the computer
                if(comPlayed) comPlayed.status = true;
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().message.textContent = "Your turn";
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.miss)(node);
            }, 1000);
            if(hit) hit.s = false;
            return 'miss'
        } else { // if the com hits a ship
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hitt)(player1, (0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().player1ShipNames, (0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().shipNamesP1);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.diagonals)((0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1, node, true);
            for(let i = 0; i < player1.gameboard.shipsSunk.length; i++) { // this loop only fires when a ship has been sunk
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.a)((0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().nodesPlayer1, player1.gameboard.shipsSunk[i].coord, player1.gameboard.shipsSunk[i].direction, true);
            }
            node.setAttribute('data-clicked', 'true'); // the status of the node clicked by the com should be true now
            setTimeout(() => {
                if(comPlayed) comPlayed.status = true;
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.elems)().message.textContent = "Your turn";
                node.style.position = 'relative';
                node.classList.add('y');    
            }, 500);
            
        }
    }
}



/*
if(!attacked) {
    const player2ChosenNode = f(player2);
    const direction = ['top', 'left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
    const p = q(player1, player2ChosenNode.node, comPlayed, hit, player2ChosenNode.com)
}
if(p == 'miss') {
    // next time it'll run the above steps until it hits a node
} else {
    attacked = the node it hit
    // array of all available surrounding nodes
    let nodeDirections = [g(attacked).top, g(attacked).left, g(attacked).right, g(attacked).bottom].filter(i => i); 
    console.log(nodeDirections);
    let arr = [];
    nodeDirections.forEach(i => {
        if(Number(i.dataset.y) > Number(attacked.dataset.y)) arr.push('top')
        if(Number(i.dataset.y) < Number(attacked.dataset.y)) arr.push('bottom')
        if(Number(i.dataset.x) > Number(attacked.dataset.x)) arr.push('right')
        if(Number(i.dataset.x) < Number(attacked.dataset.x)) arr.push('top')
    });
    console.log(arr);
    const chosenNode = nodeDirections[Math.floor(Math.random() * nodeDirections.length)]
    const directio;
    if(Number(attacked.dataset.y) < Number(chosenNode.dataset.y)) directio = 'top'
    else if(Number(attacked.dataset.y) > Number(chosenNode.dataset.y)) directio = 'bottom'
    else if(Number(attacked.dataset.x) < Number(chosenNode.dataset.x)) directio = 'right'
    else if(Number(attacked.dataset.x) > Number(chosenNode.dataset.x)) directio = 'left'
    const p = q(player1, chosenNode, comPlayed, hit, [Number(chosenNode.dataset.x), Number(chosenNode.dataset.y)])



}
*/




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "createShip": () => (/* binding */ createShip),
/* harmony export */   "diagonals": () => (/* binding */ diagonals),
/* harmony export */   "elems": () => (/* binding */ elems),
/* harmony export */   "g": () => (/* binding */ g),
/* harmony export */   "hitt": () => (/* binding */ hitt),
/* harmony export */   "miss": () => (/* binding */ miss),
/* harmony export */   "o": () => (/* binding */ o),
/* harmony export */   "place": () => (/* binding */ place)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// All existing elements on our document
function elems() {
    const overlay = document.querySelector('.overlay');
    const gameboard1 = document.querySelector('#player1');
    const gameboard2 = document.querySelector('#player2');
    const nodesPlayer1 = document.querySelectorAll(`#player1 td[data-x]`);
    const nodesPlayer2 = document.querySelectorAll(`#player2 td[data-x]`);
    const allNodes = document.querySelectorAll(`td[data-x]`);
    const player1ShipNames = document.querySelectorAll('.player1-ship');
    const player2ShipNames = document.querySelectorAll('.player2-ship');
    const shipNamesP1 = document.querySelector('.table1 .ships');
    const shipNamesP2 = document.querySelector('.table2 .ships');
    const randomizePlayer1 = document.querySelector('.randomize-player1');
    const ships = document.querySelectorAll('.div');
    const message = document.querySelector('.message');
    const play = document.querySelector('.play');
    const reset = document.querySelector('.reset');
    const win = document.querySelector('.win');
    const text = document.querySelector('.text');

    return {
        gameboard1, gameboard2, nodesPlayer1, nodesPlayer2, player1ShipNames, player2ShipNames, randomizePlayer1, ships,
        message, play, allNodes, overlay, shipNamesP1, shipNamesP2, reset, win, text
    }
}




// This function is used only when a ship has been sunk. It changes the status of the last blocks that haven't been changes yet,
// that we obviously should not click on. It finishes the diagonals() function's job
function a(b, arr, direction, forCom = false) {
    const top = [...b].find(t => Number(t.dataset.x) === Number(arr[arr.length - 1].pos[0]) && Number(t.dataset.y) > Number(arr[arr.length - 1].pos[1]));
    const bottom = [...b].find(t => Number(t.dataset.x) === Number(arr[0].pos[0]) && Number(arr[0].pos[1]) - Number(t.dataset.y) == 1);
    const right = [...b].find(t => Number(t.dataset.x) > Number(arr[arr.length - 1].pos[0]) && Number(arr[arr.length - 1].pos[1]) == Number(t.dataset.y));
    const left = [...b].find(t => Number(arr[0].pos[0]) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(arr[0].pos[1]));
    if(direction == 'vertical') {
        if(top) {
            top.setAttribute('data-clicked', 'true')
            if(!forCom) {
                top.style.backgroundColor = '#686E8A';
                top.textContent = '';
            }
        }
        if(bottom) {
            bottom.setAttribute('data-clicked', 'true')
            if(!forCom) {
                bottom.style.backgroundColor = '#686E8A';
                bottom.textContent = '';
            }
        }
        
    }
    else if(direction == 'horizontal') {
        if(right) {
            right.setAttribute('data-clicked', 'true')
            if(!forCom) {
                right.style.backgroundColor = '#686E8A';
                right.textContent = '';
            }
        }
        if(left) {
            left.setAttribute('data-clicked', 'true')
            if(!forCom) {
                left.style.backgroundColor = '#686E8A';
                left.textContent = '';
            }
        }
    } else if(!direction) { // if the direction of the ship is null, meaning that the length of the ship is 1
        if(top) {
            top.setAttribute('data-clicked', 'true')
            if(!forCom) {
                top.style.backgroundColor = '#686E8A';
                top.textContent = '';
            }
        }
        if(bottom) {
            bottom.setAttribute('data-clicked', 'true')
            if(!forCom) {
                bottom.style.backgroundColor = '#686E8A';
                bottom.textContent = '';
            }
        }
        if(right) {
            right.setAttribute('data-clicked', 'true')
            if(!forCom) {
                right.style.backgroundColor = '#686E8A';
                right.textContent = '';
            }
        }
        if(left) {
            left.setAttribute('data-clicked', 'true')
            if(!forCom) {
                left.style.backgroundColor = '#686E8A';
                left.textContent = '';
            }
        }
    }

}



// This function fires after every click and changes the status
// of the blocks(that we obviously should not click on) that are diagonal(there's 4 of them) to the clicked node 
function diagonals(b, n, forCom = false) {
    const top = [...b].find(t => Number(t.dataset.x) === Number(n.dataset.x) && Number(t.dataset.y) > Number(n.dataset.y));
    if(top) {
        const topLeft = [...b].find(t => Number(top.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(top.dataset.y));
        if(topLeft) {
            topLeft.setAttribute('data-clicked', 'true')
            if(!forCom) {
                topLeft.style.backgroundColor = '#686E8A';
                topLeft.textContent = '';
            }
        }
        const topRight = [...b].find(t => Number(t.dataset.x) > Number(top.dataset.x) && Number(t.dataset.y) === Number(top.dataset.y));
        if(topRight) {
            topRight.setAttribute('data-clicked', 'true')
            if(!forCom) {
                topRight.style.backgroundColor = '#686E8A';
                topRight.textContent = '';
            }
        }
    }
    const bottom = [...b].find(t => Number(t.dataset.x) === Number(n.dataset.x) && Number(n.dataset.y) - Number(t.dataset.y) == 1);
    if(bottom) {
        const bottomLeft = [...b].find(t => Number(bottom.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(bottom.dataset.y));
        if(bottomLeft) {
            bottomLeft.setAttribute('data-clicked', 'true');
            if(!forCom) {
                bottomLeft.style.backgroundColor = '#686E8A';
                bottomLeft.textContent = '';
            }
        }
        const bottomRight = [...b].find(t => Number(t.dataset.x) > Number(bottom.dataset.x) && Number(t.dataset.y) === Number(bottom.dataset.y));
        if(bottomRight) {
            bottomRight.setAttribute('data-clicked', 'true')
            if(!forCom) {
                bottomRight.style.backgroundColor = '#686E8A';
                bottomRight.textContent = '';
            }
        }
        
    }
}


// Everytime we or the computer misses a ship, the following css changes will be made to the spot/node that's been hit
function miss(node) {
    node.textContent = 'Miss';
    node.classList.add('miss');
}



// this function will place the ships on the webpage
function createShip(node, direction, length) {
    const div = document.createElement('div');
    div.classList.add('div');
    const div2 = document.createElement('div');
    div2.classList.add('ship');
    
    if(direction == 'vertical') { // if vertical
        div2.style.position = 'absolute';
        if(length == 4) div2.style.height = 'calc(400% + 6px)';
        else if(length == 3) div2.style.height = 'calc(300% + 4px)';
        else if(length == 2) div2.style.height = 'calc(200% + 2px)';
        else if(length == 1) div2.style.height = '100%';
    } 
    else if(direction == 'horizontal') { // if horizontal
        div2.style.position = 'absolute';
        if(length == 4) div2.style.width = 'calc(400% + 6px)';
        else if(length == 3) div2.style.width = 'calc(300% + 4px)';
        else if(length == 2) div2.style.width = 'calc(200% + 2px)';
        else if(length == 1) div2.style.width = '100%';
    }
    else if(!direction) div2.style.width = '100%';

    div.append(div2);
    node.append(div)
}



function g(node) {
    const right = [...elems().nodesPlayer1].find(t => Number(t.dataset.x) > Number(node.dataset.x) && Number(node.dataset.y) == Number(t.dataset.y));
    const left = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(node.dataset.y));
    const top = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(t.dataset.y) > Number(node.dataset.y));
    const bottom = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(node.dataset.y) - Number(t.dataset.y) == 1);

    return {right, left, top, bottom}
}


// This function messesaround with the ship names below the boards
function hitt(player, individualShipNames, shipNamesContainer,) {
    [...individualShipNames].forEach(w => w.remove());
    for(let i = 0; i < player.gameboard.ships.length; i++) {
        const p = document.createElement('p');
        p.textContent = player.gameboard.ships[i].name();
        p.classList.add(`${player.player}-ship`);
        if(player.gameboard.ships[i].length == 0) p.classList.add('destroyed'); 
        shipNamesContainer.append(p)
    }
}



// This function creates the ship names below the boards
function o(player, shipNames) {
    for(let i = 0; i < player.gameboard.ships.length; i++) {
        const p = document.createElement('p');
        p.textContent = player.gameboard.ships[i].name();
        p.classList.add(`${player.player}-ship`);
        shipNames.append(p)
    }
}



// This function places the ships on the document
function place(ships) {
    for(let i = 0; i < ships.length; i++) {
        const nodes = elems().nodesPlayer1;
        const coord = ships[i][0].pos; // array
        const c = [...nodes].find(n => Number(n.dataset.x) == coord[0] && Number(n.dataset.y) == coord[1]);
        let direction;
        if(ships[i].length == 1) {

        }
        else if(ships[i][0].pos[1] == ships[i][1].pos[1]) direction = 'horizontal'
        else if(ships[i][0].pos[0] == ships[i][1].pos[0]) direction = 'vertical'
        createShip(c, direction, ships[i].length)
    }
}





/***/ }),

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "board": () => (/* binding */ board),
/* harmony export */   "computerPlay": () => (/* binding */ computerPlay),
/* harmony export */   "findNextNodes": () => (/* binding */ findNextNodes),
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop),
/* harmony export */   "helper": () => (/* binding */ helper),
/* harmony export */   "isArrayInArray": () => (/* binding */ isArrayInArray),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "restart": () => (/* binding */ restart),
/* harmony export */   "ships": () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./com */ "./src/com.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function play() {
    let attacked;
    let directio;
    let chosen;

    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().play.style.display = 'none';
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().reset.style.display = 'block';
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().message.textContent = "Your turn";
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().randomizePlayer1.style.display = 'none';
    const player1 = _script__WEBPACK_IMPORTED_MODULE_2__.obj.gameL.player1;
    player1.player = 'player1';
    const player2 = _script__WEBPACK_IMPORTED_MODULE_2__.obj.gameL.player2;
    // console.log(player2.gameboard.ships);
    player2.player = 'player2';

    let comPlayed = {status: true}; // this makes sure that I don't play if the com hasn't played yet

    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().reset.addEventListener('click', e => {
        restart(comPlayed);
    });


    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().win.addEventListener('click', e => {
        restart(comPlayed);
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().overlay.style.display = 'none';
    });


    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().allNodes.forEach(i => i.setAttribute('data-clicked', 'false'));// both gameboards will have nodes with a data-clicked status of false
    // after each block is clicked, its status changes from false to true
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().nodesPlayer2.forEach(i => {
        i.addEventListener('click', e => {
            // console.log(e);
            if(e.target.getAttribute('data-clicked') == 'false' && comPlayed.status) { // we first check if the block we clicked has a status of false, if not, nothing happens
                comPlayed.status = false;
                e.target.setAttribute('data-clicked', 'true');
                const attack = [Number(e.path[0].dataset.x), Number(e.path[0].dataset.y)] // the coordinate we attacked
                player1.nodesAttacked.push(attack); // not sure if i still need this
                const o = player2.gameboard.receiveAttack(attack); // the opponent gameboard receives our attack
                // the above variable(o) returns the ship hit if a ship was hit
                if(o == 'missed') { // the following occurs if we missed
                    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().message.textContent = "Player2's turn";
                    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.miss)(e.target); // the dom necessary when we miss
                    let hit = {s: true};
                    const player2ChosenNode = (0,_com__WEBPACK_IMPORTED_MODULE_0__.f)(player2);

                        if(attacked) {
                            let directions = [(0,_dom__WEBPACK_IMPORTED_MODULE_1__.g)(attacked).top, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.g)(attacked).left, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.g)(attacked).right, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.g)(attacked).bottom].filter(i => i); 
                            console.log(directions);
                            if(directions.every(i => i.getAttribute('data-clicked') == 'true')) {
                                const direction = ['top', 'left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                                const amo = (0,_com__WEBPACK_IMPORTED_MODULE_0__.l)(player2, player1, player2ChosenNode.node, direction, comPlayed, hit);
                                if(amo.length == 1) {
                                    attacked = amo[0];
                                } else attacked = undefined;
                            } else {
                                chosen = directions[Math.floor(Math.random() * directions.length)]; // choose a node in any direction
                                console.log(chosen);
                                while(chosen.getAttribute('data-clicked') == 'true') { // find the node that is valid to click
                                    chosen = directions[Math.floor(Math.random() * directions.length)];
                                }
                                if(Number(chosen.dataset.x) > Number(attacked.dataset.x)) directio = 'right' // direction is right
                                else if(Number(chosen.dataset.x) < Number(attacked.dataset.x)) directio = 'left' // direction is left
                                else if(Number(chosen.dataset.y) > Number(attacked.dataset.y)) directio = 'top' // direction is top
                                else if(Number(chosen.dataset.y) < Number(attacked.dataset.y)) directio = 'bottom' // direction is bottom
                                const amo = (0,_com__WEBPACK_IMPORTED_MODULE_0__.l)(player2, player1, chosen, directio, comPlayed, hit);
                            }
                        } else {
                            const direction = ['top', 'left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                            const amo = (0,_com__WEBPACK_IMPORTED_MODULE_0__.l)(player2, player1, player2ChosenNode.node, direction, comPlayed, hit);
                            if(amo.length == 1) {
                                attacked = amo[0];
                            } else attacked = undefined;
                        }
                        // console.log(player2);
                        if(player1.gameboard.shipsSunk.length == 10) { // if all our ships have been sunk
                            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().overlay.style.display = 'flex';
                            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().text.textContent = 'You lose';
                        }

                    // }
                } else { // if we hit a ship
                    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.hitt)(player2, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().player2ShipNames, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().shipNamesP2);

                    // console.log(player2);
                    // This diagonals function works the same as the above loop, but this one fires after every click and only changes the status
                    // of the blocks(that we obviously should not click on) that are diagonal(there's 4 of them) to the clicked node 
                    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.diagonals)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().nodesPlayer2, e.target);
                    // The following css changes apply the X feature on a ship that's been hit
                    e.path[0].style.position = 'relative';
                    e.path[0].classList.add('y');
                    comPlayed.status = true;

                    // This for loop is to change the status of all nodes that should obviously not be clicked, to true and also change their color
                    // for(let i = 0; i < player2.gameboard.shipsSunk.length; i++) { // this loop only fires when a ship has been sunk
                    if(player2.gameboard.shipsSunk[0]) {
                        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.a)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().nodesPlayer2, player2.gameboard.shipsSunk[0].coord, player2.gameboard.shipsSunk[0].direction);
                    }
                    // console.log(player2.gameboard.shipsSunk[0]);
                    if(o.isSunk()) {
                        const coord = player2.gameboard.shipsSunk[0].coord[0].pos;
                        const node = [...(0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().nodesPlayer2].find(i => Number(i.dataset.x) == coord[0] && Number(i.dataset.y) == coord[1]);
                        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createShip)(node, player2.gameboard.shipsSunk[0].direction, player2.gameboard.shipsSunk[0].originalLength);
                    }
                    // }

                    // This is the screen that shows when there is a winner. Still in progress...
                    if(player2.gameboard.shipsSunk.length == 10) {
                        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().overlay.style.display = 'flex';
                        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().text.textContent = 'You win';
                    }
                }
            }
        });
    });
}


// This constructor function is for each ship on the gameboard
function Ship(length) {  
    this.originalLength = length;
    this.direction = null;
    this.coord = [];
    this.length = length;
    this.numberOfTimesHit = 0;
    this.hit = function() {
        this.numberOfTimesHit += 1;
        this.length -= 1;
        return this.numberOfTimesHit
    }
    this.isSunk = function() {
        // if(this.originalLength === this.numberOfTimesHit) {
        if(this.length == 0) {
            // this.sunk = true;
            // return this.sunk
            return true
        } else return false
    }
    this.name = function() {
        if(this.originalLength == 4) return `Battleship (${this.length})` 
        else if(this.originalLength == 3) return `Submarine (${this.length})`
        else if(this.originalLength == 2) return `Cruiser (${this.length})`
        else if(this.originalLength == 1) return `Cannon (${this.length})`;
    }
}


// This constructor function is for each block/node on the board
function Node(pos) {
    this.pos = pos; // The node's coordinates
    this.ship = null; // Whether or not its occupying a ship
    this.status = 'unoccupied';
}


function Gameboard() {
    this.board = board(); // array containing all 100 blocks/nodes 
    this.ships = ships(); // array with all the ships in the gameboard. There's 10 of them
    this.missedAttacks = [];
    this.shipsSunk = [];
    this.placeShips = function() { // places the ships on the board randomly
        let occupied = []; // this array will later contain all nodes being occupied by ships
        for(let i = 0; i < this.ships.length; i++) {
            const chosenDirection = ['vertical', 'horizontal'][Math.floor(Math.random() * 2)]; // Choose between horizontal and vertical
            let node = this.board[Math.floor(Math.random() * 101)]; // choose random node from board
            while(!node || !(node.pos[0] <= (10 - this.ships[i].length) + 1) || helper(node, this.ships[i].length, this.board, chosenDirection)) {
                // This while loop checks for when our node is null, when there isn't enough space for our ship to fill in the specified nodes,
                // and for when the upcoming nodes are occupied or not.
                // If even one of these conditions are true, our node will keep on changing until we have the ideal node which along with its
                // upcoming nodes, can fit the ship and along with its upcoming nodes and surrounding nodes, are unoccupied
                node = this.board[Math.floor(Math.random() * 101)];
            }
            const nextNodes = findNextNodes(node, this.ships[i].length, this.board, chosenDirection); // an array containing the next nodes including our current node
            node.status = 'occupied';
            occupied.push(nextNodes);
            nextNodes.forEach(n => {
                n.status = 'occupied';
                n.ship = this.ships[i]; // all nodes in nextNodes will have a link to our ship
                this.ships[i].coord.push(n);
                if(this.ships[i].length > 1) this.ships[i].direction = chosenDirection;

                // All the code below makes sure that all the nodes surrounding our ship become occupied so that they aren't available for use by
                // any other ships
                // This code is applied on each individual node that has a link to our ship
                let top, topLeft, topRight, bottom, bottomLeft, bottomRight, left, right;
                top = this.board.find(y => y.pos[0] === n.pos[0] && y.pos[1] > n.pos[1]);
                if(top) topLeft = this.board.find(y => top.pos[0] - y.pos[0] == 1 && y.pos[1] === top.pos[1]);
                if(top) topRight = this.board.find(y => y.pos[0] > top.pos[0] && y.pos[1] === top.pos[1]);
                bottom = this.board.find(y => y.pos[0] === n.pos[0] && n.pos[1] - y.pos[1] == 1);
                if(bottom) bottomLeft = this.board.find(y => bottom.pos[0] - y.pos[0] == 1 && y.pos[1] === bottom.pos[1]);
                if(bottom) bottomRight = this.board.find(y => y.pos[0] > bottom.pos[0] && y.pos[1] === bottom.pos[1]);
                left = this.board.find(y => n.pos[0] - y.pos[0] == 1 && y.pos[1] === n.pos[1]);
                right = this.board.find(y => y.pos[0] > n.pos[0] && y.pos[1] === n.pos[1]);
                [top, topLeft, topRight, bottom, bottomLeft, bottomRight, left, right].forEach(t => {
                    if(t) t.status = 'occupied';
                });
            });
        }
        return occupied
    }

    // This function takes in a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the 
    // correct ship, or records the coordinates of the missed shot.
    this.receiveAttack = function([x, y]) { // coordinates is an array of x and y
        const nodeAtCoordinate = this.board.find(i => i.pos[0] === x && i.pos[1] === y);
        if(nodeAtCoordinate.ship){ // if the node at the specified coordinate is occupied by a ship
            nodeAtCoordinate.ship.hit();
            if(nodeAtCoordinate.ship.isSunk()) {
                // this.ships.splice(this.ships.indexOf(nodeAtCoordinate.ship), 1); // once a ship has been sunk, it will be removed from the gameboard array of ships
                this.shipsSunk.unshift(nodeAtCoordinate.ship); // once a ship has been sunk, it will be added to the shipsSunk array
                // if(this.shipsSunk.length == 10) return 'All ships have been destroyed';
            }
            return nodeAtCoordinate.ship
        }  
        else {
            this.missedAttacks.push([x, y]);
            return 'missed'
        }
    }
}


function Player() {
    this.player = null;
    this.nodesAttacked = [];
    this.shipsDestroyed = [];
    this.gameboard = new Gameboard();
    this.attack = function([x, y]) {
        return [x, y]
    }
}


// Picks a random coordinate to attack
// Checks if that coordinate has been attacked, if so, choose another one
function computerPlay(nodesAttacked) {
    let random = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
    while(random[0] == 0 || random[1] == 0 || isArrayInArray(nodesAttacked, random)) {
        random = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
    }
    return random
}



// This function creates our board
function board() {
    const arr = [];
    for(let y = 1; y < 11; y++) {
        for(let x = 1; x < 11; x++) {
            const node = new Node([x, y]);
            arr.push(node);
        }
    }
    return arr
}


// This function checks to see if the next nodes are occupied by ships or not
// It returns False if they're not occupied and true if any one of them is occupied
// The length parameter/argument is responsible for checking the number of upcoming nodes
function helper(node, length, board, direction) {
    let queue = [node];
    for(let i = 0; i < length; i++) {
        if(direction == 'horizontal') {
            if(queue[0].status == 'unoccupied') {
                const next = board.find(i => i.pos[0] > queue[0].pos[0] && i.pos[1] === queue[0].pos[1]);
                if(next) queue.push(next)
                else return true
                queue.shift();
            }
            else return true
        }
        else {
            if(queue[0].status == 'unoccupied') {
                const next = board.find(i => i.pos[0] === queue[0].pos[0] && i.pos[1] > queue[0].pos[1]);
                if(next) queue.push(next)
                else return true
                queue.shift();
            }
            else return true
        }
    }
    return false
}


// This function returns an array of the nodes that come after the specified node
// The specified node is included in this array
function findNextNodes(node, length, board, direction) {
    let queue = [node];
    let arr = [node];
    for(let i = 0; i < length - 1; i++) {
        if(direction == 'horizontal') {
            const nextNode = board.find(i => i.pos[0] > queue[0].pos[0] && i.pos[1] === queue[0].pos[1]);
            arr.push(nextNode);
            queue.push(nextNode);
            queue.shift();
        } else {
            const nextNode = board.find(i => i.pos[0] === queue[0].pos[0] && i.pos[1] > queue[0].pos[1]);
            arr.push(nextNode);
            queue.push(nextNode);
            queue.shift();
        }
    }
    return arr.filter(i => i);
}


// This function build all our ships(10 of them) and holds them inside an array
function ships() {
    const arr = [];
    const arr2 = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]; // these are the lengths of all the ships in the online game, Battleship
    for(let i = 0; i < arr2.length; i++) {
        const node = new Ship(arr2[i]);
        arr.push(node);
    }
    return arr
}



// This function start the game
function gameLoop() {
    let player1 = new Player();
    let player2 = new Player();
    player1.player = 'player1';
    player2.player= 'player2';
    let player1Ships = player1.gameboard.placeShips(); // returns an array of the nodes occupied by ships
    let player2Ships = player2.gameboard.placeShips(); // returns an array of the nodes occupied by ships
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.place)(player1Ships); // places the ships on the webpage
    // console.log(player1Ships);

    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().randomizePlayer1.addEventListener('click', e => {
        const allShips = [...(0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().ships]; // get all ships(divs) from the document
        allShips.forEach(i => i.remove()); // remove all ships from the document
        player1.gameboard.board = board(); // create a new board with unoccupied nodes
        player1Ships = player1.gameboard.placeShips();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.place)(player1Ships);
    });
    
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.o)(player1, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().shipNamesP1);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.o)(player2, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().shipNamesP2);

    return {player1, player2, player1Ships, player2Ships}
}


function restart(comPlayed) {
    comPlayed.status = false;
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().play.style.display = 'block';
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().reset.style.display = 'none';
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().message.textContent = "Place the ships";
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().randomizePlayer1.style.display = 'block';
    [...(0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().player1ShipNames].forEach(w => w.remove());
    [...(0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().player2ShipNames].forEach(w => w.remove());
    [...(0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().ships].forEach(i => i.remove());
    [...(0,_dom__WEBPACK_IMPORTED_MODULE_1__.elems)().allNodes].forEach(i => {
        i.textContent = '';
        i.classList.remove('y');
        i.setAttribute('data-clicked', 'false');
        i.style.backgroundColor = '#B1DEF6';
        i.classList.remove('miss');
    });
    _script__WEBPACK_IMPORTED_MODULE_2__.obj.gameL = gameLoop();
}


function isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
   
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}






/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ "./src/play.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




let obj = {gameL: (0,_play__WEBPACK_IMPORTED_MODULE_1__.gameLoop)()}

;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.elems)().play.addEventListener('click', _play__WEBPACK_IMPORTED_MODULE_1__.play); // when we click on play, the following happens




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxX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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNCQUFzQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQWxtYXJhaScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7ICovXFxyXFxufVxcclxcbi8qIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY3O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2IoMTkwIDE5MCAxOTApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJVxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgLjVmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDIlIDQlIDQlIDQlO1xcclxcbn0gXFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtaW5kaWNhdG9yIHtcXHJcXG4gICAgaGVpZ2h0OiA5dmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm15RmxlZXQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjEzNEQ7XFxyXFxufVxcclxcblxcclxcbi5vcHBvbmVudCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4NkU4QTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cXHJcXG4gICAgLyogYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgKi9cXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgICBwYWRkaW5nOiAwIDAgNSUgOSU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwcyBwe1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG50aCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjM0Y0NDU0O1xcclxcbn1cXHJcXG50ZCB7XFxyXFxuICAgIGhlaWdodDogMi4zZW07XFxyXFxuICAgIHdpZHRoOiAyLjNlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMURFRjY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dGFja2VkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAgeyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMjEzNEQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCA5LCAzMCwgMC4zKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZpcnN0IHtcXHJcXG4gICAgY29sb3I6ICMzRjQ0NTQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMi41JTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ueTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDIuM2VtO1xcclxcbiAgICBoZWlnaHQ6IDAuMmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMi4zZW07XFxyXFxuICAgIGhlaWdodDogMC4yZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTtzICovXFxyXFxufVxcclxcblxcclxcbi5jb250cm9scyB7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCAjRTIxMzREO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb206aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaiB7XFxyXFxuICAgIGhlaWdodDogNzAlO1xcclxcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGltZTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NTQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBsYXksIC5yZXNldCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVzZXQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aW5uZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luIHtcXHJcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZXN0cm95ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAjRTIxMzREO1xcclxcbiAgICBjb2xvcjogI0UyMTM0RDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgICBjb2xvcjogI0UyMTM0RDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiAuOWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0FBQ2hDO0FBQ0E7Ozs7R0FJRzs7QUFFSDtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FB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YXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQWxtYXJhaScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7ICovXFxyXFxufVxcclxcbi8qIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY3O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2IoMTkwIDE5MCAxOTApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJVxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgLjVmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDIlIDQlIDQlIDQlO1xcclxcbn0gXFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtaW5kaWNhdG9yIHtcXHJcXG4gICAgaGVpZ2h0OiA5dmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm15RmxlZXQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjEzNEQ7XFxyXFxufVxcclxcblxcclxcbi5vcHBvbmVudCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4NkU4QTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cXHJcXG4gICAgLyogYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgKi9cXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgICBwYWRkaW5nOiAwIDAgNSUgOSU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwcyBwe1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG50aCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjM0Y0NDU0O1xcclxcbn1cXHJcXG50ZCB7XFxyXFxuICAgIGhlaWdodDogMi4zZW07XFxyXFxuICAgIHdpZHRoOiAyLjNlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMURFRjY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dGFja2VkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAgeyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMjEzNEQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCA5LCAzMCwgMC4zKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZpcnN0IHtcXHJcXG4gICAgY29sb3I6ICMzRjQ0NTQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMi41JTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ueTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDIuM2VtO1xcclxcbiAgICBoZWlnaHQ6IDAuMmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMi4zZW07XFxyXFxuICAgIGhlaWdodDogMC4yZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTtzICovXFxyXFxufVxcclxcblxcclxcbi5jb250cm9scyB7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCAjRTIxMzREO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb206aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaiB7XFxyXFxuICAgIGhlaWdodDogNzAlO1xcclxcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGltZTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NTQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBsYXksIC5yZXNldCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVzZXQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aW5uZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luIHtcXHJcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZXN0cm95ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAjRTIxMzREO1xcclxcbiAgICBjb2xvcjogI0UyMTM0RDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgICBjb2xvcjogI0UyMTM0RDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiAuOWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVsZW1zLCBhLCBkaWFnb25hbHMsIGhpdHQsIG1pc3N9IGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgY29tcHV0ZXJQbGF5IH0gZnJvbSAnLi9wbGF5JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBjYXJlIG9mIGNob29zaW5nIGEgY29vcmRpbmF0ZSwgdGhlbiB0aGUgbm9kZSBhdCB0aGF0IGNvb3JkaW5hdGUgdG8gYXR0YWNrIGFuZCB0aGVuIHJldHVybnMgYm90aCB0aGUgY29vcmRpbmF0ZSBhbmQgbm9kZS5cclxuZnVuY3Rpb24gZihwbGF5ZXIyKSB7XHJcbiAgICBsZXQgY29tID0gY29tcHV0ZXJQbGF5KHBsYXllcjIubm9kZXNBdHRhY2tlZCk7IC8vIHJldHVybnMgY29vcmRpbmF0ZSB0byBhdHRhY2sgXHJcbiAgICBsZXQgbm9kZSA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZChpID0+IE51bWJlcihpLmRhdGFzZXQueCkgPT0gY29tWzBdICYmIE51bWJlcihpLmRhdGFzZXQueSkgPT0gY29tWzFdKTsvLyBmaW5kcyB0aGUgbm9kZSBtYXRjaGluZyB0aGUgYXR0YWNrZWQgY29vcmRpbmF0ZVxyXG4gICAgd2hpbGUobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcpID09ICd0cnVlJykgey8vIGlmIHRoZSBjb29yZGluYXRlIHRoZSBjb20gY2FtZSB1cCB3aXRoIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkLCBpdCdsbCBmaW5kIGFub3RoZXIgb25lXHJcbiAgICAgICAgY29tID0gY29tcHV0ZXJQbGF5KHBsYXllcjIubm9kZXNBdHRhY2tlZCk7XHJcbiAgICAgICAgbm9kZSA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZChpID0+IE51bWJlcihpLmRhdGFzZXQueCkgPT0gY29tWzBdICYmIE51bWJlcihpLmRhdGFzZXQueSkgPT0gY29tWzFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7Y29tLCBub2RlfVxyXG59XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBjYXJlIG9mIGFsbCBtb3ZlcyBtYWRlIGJ5IHRoZSBjb20gYW5kIHBsYXlzIGFkamFjZW50IG1vdmVzIGFmdGVyIGVhY2ggaGl0XHJcbmZ1bmN0aW9uIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyID0gW10pIHtcclxuXHQvLyBpZighbm9kZSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ3RydWUnKSByZXR1cm5cclxuXHQvLyBlbHNlIHtcclxuICAgICAgICAvLyBUaGUgbmV4dCA0IGNvbmRpdGlvbnMgY2hlY2sgaWYgdGhlIGNob3NlbiBub2RlIGlzIHRvdWNoaW5nIGFueSBvbmUgb2YgdGhlIHdhbGxzIGFuZCB0aGF0IHRoZSBkaXJlY3Rpb24gY2hvc2VuIGRvZXNuJ3QgbW92ZSBvdXQgdGhlIGdyaWRcclxuICAgICAgICAvLyBJZiB0cnVlLCBhIG5ldyBkaXJlY3Rpb24gd2lsbCBiZSBjaG9zZW4uIFRoZSBuZXcgZGlyZWN0aW9uIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyB0aGUgb2xkIG9uZS5cclxuICAgICAgICBpZihOdW1iZXIobm9kZS5kYXRhc2V0LnkpID09IDEgJiYgZGlyZWN0aW9uID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV07XHJcbiAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIG5vZGUsIGRpcmVjdGlvbiwgY29tUGxheWVkLCBoaXQsIGFycik7XHJcbiAgICAgICAgfSBlbHNlIGlmKE51bWJlcihub2RlLmRhdGFzZXQueCkgPT0gMSAmJiBkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2JvdHRvbScsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICB9IGVsc2UgaWYoTnVtYmVyKG5vZGUuZGF0YXNldC55KSA9PSAxMCAmJiBkaXJlY3Rpb24gPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWydib3R0b20nLCAnbGVmdCcsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICB9IGVsc2UgaWYoTnVtYmVyKG5vZGUuZGF0YXNldC54KSA9PSAxMCAmJiBkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbSddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb25kaXRpb25zIHNwZWNpZmljYWxsdCB0YWtlIGNhcmUgb2YgdGhlIG1vdmVzIG9mIHRoZSBjb20uIE1ha2luZyBhZGphY2VudCBtb3ZlcyBhZnRlciBlYWNoIGhpdCB3aGVyZSBwb3NzaWJsZVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID4gTnVtYmVyKG5vZGUuZGF0YXNldC54KSAmJiBOdW1iZXIobm9kZS5kYXRhc2V0LnkpID09IE51bWJlcih0LmRhdGFzZXQueSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocmlnaHQudGV4dENvbnRlbnQgPT0gJ01pc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyaWdodC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBmKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGIubm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIHJpZ2h0LCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0LCBhcnIpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgLSBOdW1iZXIodC5kYXRhc2V0LngpID09IDEgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA9PT0gTnVtYmVyKG5vZGUuZGF0YXNldC55KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb20gPSBbTnVtYmVyKG5vZGUuZGF0YXNldC54KSwgTnVtYmVyKG5vZGUuZGF0YXNldC55KV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcShwbGF5ZXIxLCBub2RlLCBjb21QbGF5ZWQsIGhpdCwgY29tKTtcclxuICAgICAgICAgICAgICAgIGlmKHIgPT0gJ21pc3MnKSByZXR1cm4gYXJyXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhcnIubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGFyci51bnNoaWZ0KG5vZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihsZWZ0LnRleHRDb250ZW50ID09ICdNaXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2JvdHRvbScsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbChwbGF5ZXIyLCBwbGF5ZXIxLCBub2RlLCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0LCBhcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlZnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdib3R0b20nLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IGYocGxheWVyMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgYi5ub2RlLCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0LCAgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGxlZnQsIGRpcmVjdGlvbiwgY29tUGxheWVkLCBoaXQsICBhcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgPT09IE51bWJlcih0LmRhdGFzZXQueCkgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA+IE51bWJlcihub2RlLmRhdGFzZXQueSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodG9wLnRleHRDb250ZW50ID09ICdNaXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b3AuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBmKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGIubm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIHRvcCwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIobm9kZS5kYXRhc2V0LngpID09PSBOdW1iZXIodC5kYXRhc2V0LngpICYmIE51bWJlcihub2RlLmRhdGFzZXQueSkgLSBOdW1iZXIodC5kYXRhc2V0LnkpID09IDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoYm90dG9tLnRleHRDb250ZW50ID09ICdNaXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihib3R0b20uZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBmKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGIubm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGJvdHRvbSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgLy8gfSBcclxufVxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaXMgZm9yIHdoZW4gdGhlIGNvbSBhdHRhY2tzIGEgbm9kZSBcclxuZnVuY3Rpb24gcShwbGF5ZXIxLCBub2RlLCBjb21QbGF5ZWQsIGhpdCwgY29tKSB7XHJcbiAgICBpZihub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIGNvbnN0IHAgPSBwbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvbSk7IC8vIG91ciBnYW1lYm9hcmQgcmVjZWl2ZXMgYW4gYXR0YWNrIGZyb20gdGhlIGNvbVxyXG4gICAgICAgIGlmKHAgPT0gJ21pc3NlZCcpIHsgLy8gaWYgdGhlIGNvbSBtaXNzZWRcclxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJyk7IC8vIHRoZSBzdGF0dXMgb2YgdGhlIG5vZGUgY2xpY2tlZCBieSB0aGUgY29tIHNob3VsZCBiZSB0cnVlIG5vd1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdGhpcyBzZXRUaW1lb3V0IGlzIHVzZWQgdG8gc2xvdyBkb3duIHRoZSBtb3ZlcyBvZiB0aGUgY29tcHV0ZXJcclxuICAgICAgICAgICAgICAgIGlmKGNvbVBsYXllZCkgY29tUGxheWVkLnN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgICAgICAgICAgICAgbWlzcyhub2RlKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIGlmKGhpdCkgaGl0LnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuICdtaXNzJ1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBjb20gaGl0cyBhIHNoaXBcclxuICAgICAgICAgICAgaGl0dChwbGF5ZXIxLCBlbGVtcygpLnBsYXllcjFTaGlwTmFtZXMsIGVsZW1zKCkuc2hpcE5hbWVzUDEpO1xyXG4gICAgICAgICAgICBkaWFnb25hbHMoZWxlbXMoKS5ub2Rlc1BsYXllcjEsIG5vZGUsIHRydWUpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHNTdW5rLmxlbmd0aDsgaSsrKSB7IC8vIHRoaXMgbG9vcCBvbmx5IGZpcmVzIHdoZW4gYSBzaGlwIGhhcyBiZWVuIHN1bmtcclxuICAgICAgICAgICAgICAgIGEoZWxlbXMoKS5ub2Rlc1BsYXllcjEsIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzU3Vua1tpXS5jb29yZCwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHNTdW5rW2ldLmRpcmVjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJyk7IC8vIHRoZSBzdGF0dXMgb2YgdGhlIG5vZGUgY2xpY2tlZCBieSB0aGUgY29tIHNob3VsZCBiZSB0cnVlIG5vd1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbVBsYXllZCkgY29tUGxheWVkLnN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3knKTsgICAgXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKlxyXG5pZighYXR0YWNrZWQpIHtcclxuICAgIGNvbnN0IHBsYXllcjJDaG9zZW5Ob2RlID0gZihwbGF5ZXIyKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgY29uc3QgcCA9IHEocGxheWVyMSwgcGxheWVyMkNob3Nlbk5vZGUubm9kZSwgY29tUGxheWVkLCBoaXQsIHBsYXllcjJDaG9zZW5Ob2RlLmNvbSlcclxufVxyXG5pZihwID09ICdtaXNzJykge1xyXG4gICAgLy8gbmV4dCB0aW1lIGl0J2xsIHJ1biB0aGUgYWJvdmUgc3RlcHMgdW50aWwgaXQgaGl0cyBhIG5vZGVcclxufSBlbHNlIHtcclxuICAgIGF0dGFja2VkID0gdGhlIG5vZGUgaXQgaGl0XHJcbiAgICAvLyBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIHN1cnJvdW5kaW5nIG5vZGVzXHJcbiAgICBsZXQgbm9kZURpcmVjdGlvbnMgPSBbZyhhdHRhY2tlZCkudG9wLCBnKGF0dGFja2VkKS5sZWZ0LCBnKGF0dGFja2VkKS5yaWdodCwgZyhhdHRhY2tlZCkuYm90dG9tXS5maWx0ZXIoaSA9PiBpKTsgXHJcbiAgICBjb25zb2xlLmxvZyhub2RlRGlyZWN0aW9ucyk7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBub2RlRGlyZWN0aW9ucy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgIGlmKE51bWJlcihpLmRhdGFzZXQueSkgPiBOdW1iZXIoYXR0YWNrZWQuZGF0YXNldC55KSkgYXJyLnB1c2goJ3RvcCcpXHJcbiAgICAgICAgaWYoTnVtYmVyKGkuZGF0YXNldC55KSA8IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LnkpKSBhcnIucHVzaCgnYm90dG9tJylcclxuICAgICAgICBpZihOdW1iZXIoaS5kYXRhc2V0LngpID4gTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueCkpIGFyci5wdXNoKCdyaWdodCcpXHJcbiAgICAgICAgaWYoTnVtYmVyKGkuZGF0YXNldC54KSA8IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpKSBhcnIucHVzaCgndG9wJylcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgIGNvbnN0IGNob3Nlbk5vZGUgPSBub2RlRGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBub2RlRGlyZWN0aW9ucy5sZW5ndGgpXVxyXG4gICAgY29uc3QgZGlyZWN0aW87XHJcbiAgICBpZihOdW1iZXIoYXR0YWNrZWQuZGF0YXNldC55KSA8IE51bWJlcihjaG9zZW5Ob2RlLmRhdGFzZXQueSkpIGRpcmVjdGlvID0gJ3RvcCdcclxuICAgIGVsc2UgaWYoTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueSkgPiBOdW1iZXIoY2hvc2VuTm9kZS5kYXRhc2V0LnkpKSBkaXJlY3RpbyA9ICdib3R0b20nXHJcbiAgICBlbHNlIGlmKE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpIDwgTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC54KSkgZGlyZWN0aW8gPSAncmlnaHQnXHJcbiAgICBlbHNlIGlmKE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpID4gTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC54KSkgZGlyZWN0aW8gPSAnbGVmdCdcclxuICAgIGNvbnN0IHAgPSBxKHBsYXllcjEsIGNob3Nlbk5vZGUsIGNvbVBsYXllZCwgaGl0LCBbTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC54KSwgTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC55KV0pXHJcblxyXG5cclxuXHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgeyBmLCBsLCBxIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcblxyXG4vLyBBbGwgZXhpc3RpbmcgZWxlbWVudHMgb24gb3VyIGRvY3VtZW50XHJcbmZ1bmN0aW9uIGVsZW1zKCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEnKTtcclxuICAgIGNvbnN0IGdhbWVib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMicpO1xyXG4gICAgY29uc3Qgbm9kZXNQbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI3BsYXllcjEgdGRbZGF0YS14XWApO1xyXG4gICAgY29uc3Qgbm9kZXNQbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI3BsYXllcjIgdGRbZGF0YS14XWApO1xyXG4gICAgY29uc3QgYWxsTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB0ZFtkYXRhLXhdYCk7XHJcbiAgICBjb25zdCBwbGF5ZXIxU2hpcE5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcjEtc2hpcCcpO1xyXG4gICAgY29uc3QgcGxheWVyMlNoaXBOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIyLXNoaXAnKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lc1AxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlMSAuc2hpcHMnKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lc1AyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlMiAuc2hpcHMnKTtcclxuICAgIGNvbnN0IHJhbmRvbWl6ZVBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXplLXBsYXllcjEnKTtcclxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpdicpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcclxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XHJcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhbWVib2FyZDEsIGdhbWVib2FyZDIsIG5vZGVzUGxheWVyMSwgbm9kZXNQbGF5ZXIyLCBwbGF5ZXIxU2hpcE5hbWVzLCBwbGF5ZXIyU2hpcE5hbWVzLCByYW5kb21pemVQbGF5ZXIxLCBzaGlwcyxcclxuICAgICAgICBtZXNzYWdlLCBwbGF5LCBhbGxOb2Rlcywgb3ZlcmxheSwgc2hpcE5hbWVzUDEsIHNoaXBOYW1lc1AyLCByZXNldCwgd2luLCB0ZXh0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IHdoZW4gYSBzaGlwIGhhcyBiZWVuIHN1bmsuIEl0IGNoYW5nZXMgdGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBibG9ja3MgdGhhdCBoYXZlbid0IGJlZW4gY2hhbmdlcyB5ZXQsXHJcbi8vIHRoYXQgd2Ugb2J2aW91c2x5IHNob3VsZCBub3QgY2xpY2sgb24uIEl0IGZpbmlzaGVzIHRoZSBkaWFnb25hbHMoKSBmdW5jdGlvbidzIGpvYlxyXG5mdW5jdGlvbiBhKGIsIGFyciwgZGlyZWN0aW9uLCBmb3JDb20gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9wID0gWy4uLmJdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID09PSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAxXS5wb3NbMF0pICYmIE51bWJlcih0LmRhdGFzZXQueSkgPiBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAxXS5wb3NbMV0pKTtcclxuICAgIGNvbnN0IGJvdHRvbSA9IFsuLi5iXS5maW5kKHQgPT4gTnVtYmVyKHQuZGF0YXNldC54KSA9PT0gTnVtYmVyKGFyclswXS5wb3NbMF0pICYmIE51bWJlcihhcnJbMF0ucG9zWzFdKSAtIE51bWJlcih0LmRhdGFzZXQueSkgPT0gMSk7XHJcbiAgICBjb25zdCByaWdodCA9IFsuLi5iXS5maW5kKHQgPT4gTnVtYmVyKHQuZGF0YXNldC54KSA+IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDFdLnBvc1swXSkgJiYgTnVtYmVyKGFyclthcnIubGVuZ3RoIC0gMV0ucG9zWzFdKSA9PSBOdW1iZXIodC5kYXRhc2V0LnkpKTtcclxuICAgIGNvbnN0IGxlZnQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcihhcnJbMF0ucG9zWzBdKSAtIE51bWJlcih0LmRhdGFzZXQueCkgPT0gMSAmJiBOdW1iZXIodC5kYXRhc2V0LnkpID09PSBOdW1iZXIoYXJyWzBdLnBvc1sxXSkpO1xyXG4gICAgaWYoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICBpZih0b3ApIHtcclxuICAgICAgICAgICAgdG9wLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICB0b3Auc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgdG9wLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYm90dG9tKSB7XHJcbiAgICAgICAgICAgIGJvdHRvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgaWYoIWZvckNvbSkge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGJvdHRvbS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgaWYocmlnaHQpIHtcclxuICAgICAgICAgICAgcmlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGxlZnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZighZGlyZWN0aW9uKSB7IC8vIGlmIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXAgaXMgbnVsbCwgbWVhbmluZyB0aGF0IHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgaXMgMVxyXG4gICAgICAgIGlmKHRvcCkge1xyXG4gICAgICAgICAgICB0b3Auc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIHRvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY4NkU4QSc7XHJcbiAgICAgICAgICAgICAgICB0b3AudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihib3R0b20pIHtcclxuICAgICAgICAgICAgYm90dG9tLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmlnaHQpIHtcclxuICAgICAgICAgICAgcmlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGxlZnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBmaXJlcyBhZnRlciBldmVyeSBjbGljayBhbmQgY2hhbmdlcyB0aGUgc3RhdHVzXHJcbi8vIG9mIHRoZSBibG9ja3ModGhhdCB3ZSBvYnZpb3VzbHkgc2hvdWxkIG5vdCBjbGljayBvbikgdGhhdCBhcmUgZGlhZ29uYWwodGhlcmUncyA0IG9mIHRoZW0pIHRvIHRoZSBjbGlja2VkIG5vZGUgXHJcbmZ1bmN0aW9uIGRpYWdvbmFscyhiLCBuLCBmb3JDb20gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9wID0gWy4uLmJdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID09PSBOdW1iZXIobi5kYXRhc2V0LngpICYmIE51bWJlcih0LmRhdGFzZXQueSkgPiBOdW1iZXIobi5kYXRhc2V0LnkpKTtcclxuICAgIGlmKHRvcCkge1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcih0b3AuZGF0YXNldC54KSAtIE51bWJlcih0LmRhdGFzZXQueCkgPT0gMSAmJiBOdW1iZXIodC5kYXRhc2V0LnkpID09PSBOdW1iZXIodG9wLmRhdGFzZXQueSkpO1xyXG4gICAgICAgIGlmKHRvcExlZnQpIHtcclxuICAgICAgICAgICAgdG9wTGVmdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgaWYoIWZvckNvbSkge1xyXG4gICAgICAgICAgICAgICAgdG9wTGVmdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY4NkU4QSc7XHJcbiAgICAgICAgICAgICAgICB0b3BMZWZ0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wUmlnaHQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcih0LmRhdGFzZXQueCkgPiBOdW1iZXIodG9wLmRhdGFzZXQueCkgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA9PT0gTnVtYmVyKHRvcC5kYXRhc2V0LnkpKTtcclxuICAgICAgICBpZih0b3BSaWdodCkge1xyXG4gICAgICAgICAgICB0b3BSaWdodC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgaWYoIWZvckNvbSkge1xyXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGJvdHRvbSA9IFsuLi5iXS5maW5kKHQgPT4gTnVtYmVyKHQuZGF0YXNldC54KSA9PT0gTnVtYmVyKG4uZGF0YXNldC54KSAmJiBOdW1iZXIobi5kYXRhc2V0LnkpIC0gTnVtYmVyKHQuZGF0YXNldC55KSA9PSAxKTtcclxuICAgIGlmKGJvdHRvbSkge1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbUxlZnQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcihib3R0b20uZGF0YXNldC54KSAtIE51bWJlcih0LmRhdGFzZXQueCkgPT0gMSAmJiBOdW1iZXIodC5kYXRhc2V0LnkpID09PSBOdW1iZXIoYm90dG9tLmRhdGFzZXQueSkpO1xyXG4gICAgICAgIGlmKGJvdHRvbUxlZnQpIHtcclxuICAgICAgICAgICAgYm90dG9tTGVmdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGVmdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gWy4uLmJdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID4gTnVtYmVyKGJvdHRvbS5kYXRhc2V0LngpICYmIE51bWJlcih0LmRhdGFzZXQueSkgPT09IE51bWJlcihib3R0b20uZGF0YXNldC55KSk7XHJcbiAgICAgICAgaWYoYm90dG9tUmlnaHQpIHtcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBFdmVyeXRpbWUgd2Ugb3IgdGhlIGNvbXB1dGVyIG1pc3NlcyBhIHNoaXAsIHRoZSBmb2xsb3dpbmcgY3NzIGNoYW5nZXMgd2lsbCBiZSBtYWRlIHRvIHRoZSBzcG90L25vZGUgdGhhdCdzIGJlZW4gaGl0XHJcbmZ1bmN0aW9uIG1pc3Mobm9kZSkge1xyXG4gICAgbm9kZS50ZXh0Q29udGVudCA9ICdNaXNzJztcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBwbGFjZSB0aGUgc2hpcHMgb24gdGhlIHdlYnBhZ2VcclxuZnVuY3Rpb24gY3JlYXRlU2hpcChub2RlLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgIFxyXG4gICAgaWYoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHsgLy8gaWYgdmVydGljYWxcclxuICAgICAgICBkaXYyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBpZihsZW5ndGggPT0gNCkgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnY2FsYyg0MDAlICsgNnB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMykgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnY2FsYygzMDAlICsgNHB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMikgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnY2FsYygyMDAlICsgMnB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMSkgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7IC8vIGlmIGhvcml6b250YWxcclxuICAgICAgICBkaXYyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBpZihsZW5ndGggPT0gNCkgZGl2Mi5zdHlsZS53aWR0aCA9ICdjYWxjKDQwMCUgKyA2cHgpJztcclxuICAgICAgICBlbHNlIGlmKGxlbmd0aCA9PSAzKSBkaXYyLnN0eWxlLndpZHRoID0gJ2NhbGMoMzAwJSArIDRweCknO1xyXG4gICAgICAgIGVsc2UgaWYobGVuZ3RoID09IDIpIGRpdjIuc3R5bGUud2lkdGggPSAnY2FsYygyMDAlICsgMnB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMSkgZGl2Mi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIWRpcmVjdGlvbikgZGl2Mi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHJcbiAgICBkaXYuYXBwZW5kKGRpdjIpO1xyXG4gICAgbm9kZS5hcHBlbmQoZGl2KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGcobm9kZSkge1xyXG4gICAgY29uc3QgcmlnaHQgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID4gTnVtYmVyKG5vZGUuZGF0YXNldC54KSAmJiBOdW1iZXIobm9kZS5kYXRhc2V0LnkpID09IE51bWJlcih0LmRhdGFzZXQueSkpO1xyXG4gICAgY29uc3QgbGVmdCA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgLSBOdW1iZXIodC5kYXRhc2V0LngpID09IDEgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA9PT0gTnVtYmVyKG5vZGUuZGF0YXNldC55KSk7XHJcbiAgICBjb25zdCB0b3AgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIobm9kZS5kYXRhc2V0LngpID09PSBOdW1iZXIodC5kYXRhc2V0LngpICYmIE51bWJlcih0LmRhdGFzZXQueSkgPiBOdW1iZXIobm9kZS5kYXRhc2V0LnkpKTtcclxuICAgIGNvbnN0IGJvdHRvbSA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgPT09IE51bWJlcih0LmRhdGFzZXQueCkgJiYgTnVtYmVyKG5vZGUuZGF0YXNldC55KSAtIE51bWJlcih0LmRhdGFzZXQueSkgPT0gMSk7XHJcblxyXG4gICAgcmV0dXJuIHtyaWdodCwgbGVmdCwgdG9wLCBib3R0b219XHJcbn1cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIG1lc3Nlc2Fyb3VuZCB3aXRoIHRoZSBzaGlwIG5hbWVzIGJlbG93IHRoZSBib2FyZHNcclxuZnVuY3Rpb24gaGl0dChwbGF5ZXIsIGluZGl2aWR1YWxTaGlwTmFtZXMsIHNoaXBOYW1lc0NvbnRhaW5lciwpIHtcclxuICAgIFsuLi5pbmRpdmlkdWFsU2hpcE5hbWVzXS5mb3JFYWNoKHcgPT4gdy5yZW1vdmUoKSk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHBsYXllci5nYW1lYm9hcmQuc2hpcHNbaV0ubmFtZSgpO1xyXG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIucGxheWVyfS1zaGlwYCk7XHJcbiAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5zaGlwc1tpXS5sZW5ndGggPT0gMCkgcC5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZWQnKTsgXHJcbiAgICAgICAgc2hpcE5hbWVzQ29udGFpbmVyLmFwcGVuZChwKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgc2hpcCBuYW1lcyBiZWxvdyB0aGUgYm9hcmRzXHJcbmZ1bmN0aW9uIG8ocGxheWVyLCBzaGlwTmFtZXMpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gcGxheWVyLmdhbWVib2FyZC5zaGlwc1tpXS5uYW1lKCk7XHJcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5wbGF5ZXJ9LXNoaXBgKTtcclxuICAgICAgICBzaGlwTmFtZXMuYXBwZW5kKHApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBwbGFjZXMgdGhlIHNoaXBzIG9uIHRoZSBkb2N1bWVudFxyXG5mdW5jdGlvbiBwbGFjZShzaGlwcykge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBlbGVtcygpLm5vZGVzUGxheWVyMTtcclxuICAgICAgICBjb25zdCBjb29yZCA9IHNoaXBzW2ldWzBdLnBvczsgLy8gYXJyYXlcclxuICAgICAgICBjb25zdCBjID0gWy4uLm5vZGVzXS5maW5kKG4gPT4gTnVtYmVyKG4uZGF0YXNldC54KSA9PSBjb29yZFswXSAmJiBOdW1iZXIobi5kYXRhc2V0LnkpID09IGNvb3JkWzFdKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uO1xyXG4gICAgICAgIGlmKHNoaXBzW2ldLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNoaXBzW2ldWzBdLnBvc1sxXSA9PSBzaGlwc1tpXVsxXS5wb3NbMV0pIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xyXG4gICAgICAgIGVsc2UgaWYoc2hpcHNbaV1bMF0ucG9zWzBdID09IHNoaXBzW2ldWzFdLnBvc1swXSkgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIGNyZWF0ZVNoaXAoYywgZGlyZWN0aW9uLCBzaGlwc1tpXS5sZW5ndGgpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZWxlbXMsIGEsIGRpYWdvbmFscywgcGxhY2UsIG8sIGhpdHQsIGcsIGNyZWF0ZVNoaXAsIG1pc3N9OyIsImltcG9ydCB7IGYsIGwgfSBmcm9tICcuL2NvbSc7XHJcbmltcG9ydCB7IGVsZW1zLCBhLCBkaWFnb25hbHMsIHBsYWNlLCBvLCBoaXR0LCBnLCBjcmVhdGVTaGlwLCBtaXNzfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gJy4vc2NyaXB0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBwbGF5KCkge1xyXG4gICAgbGV0IGF0dGFja2VkO1xyXG4gICAgbGV0IGRpcmVjdGlvO1xyXG4gICAgbGV0IGNob3NlbjtcclxuXHJcbiAgICBlbGVtcygpLnBsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGVsZW1zKCkucmVzZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgZWxlbXMoKS5yYW5kb21pemVQbGF5ZXIxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjb25zdCBwbGF5ZXIxID0gb2JqLmdhbWVMLnBsYXllcjE7XHJcbiAgICBwbGF5ZXIxLnBsYXllciA9ICdwbGF5ZXIxJztcclxuICAgIGNvbnN0IHBsYXllcjIgPSBvYmouZ2FtZUwucGxheWVyMjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzKTtcclxuICAgIHBsYXllcjIucGxheWVyID0gJ3BsYXllcjInO1xyXG5cclxuICAgIGxldCBjb21QbGF5ZWQgPSB7c3RhdHVzOiB0cnVlfTsgLy8gdGhpcyBtYWtlcyBzdXJlIHRoYXQgSSBkb24ndCBwbGF5IGlmIHRoZSBjb20gaGFzbid0IHBsYXllZCB5ZXRcclxuXHJcbiAgICBlbGVtcygpLnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgcmVzdGFydChjb21QbGF5ZWQpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVsZW1zKCkud2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgcmVzdGFydChjb21QbGF5ZWQpO1xyXG4gICAgICAgIGVsZW1zKCkub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVsZW1zKCkuYWxsTm9kZXMuZm9yRWFjaChpID0+IGkuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAnZmFsc2UnKSk7Ly8gYm90aCBnYW1lYm9hcmRzIHdpbGwgaGF2ZSBub2RlcyB3aXRoIGEgZGF0YS1jbGlja2VkIHN0YXR1cyBvZiBmYWxzZVxyXG4gICAgLy8gYWZ0ZXIgZWFjaCBibG9jayBpcyBjbGlja2VkLCBpdHMgc3RhdHVzIGNoYW5nZXMgZnJvbSBmYWxzZSB0byB0cnVlXHJcbiAgICBlbGVtcygpLm5vZGVzUGxheWVyMi5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ2ZhbHNlJyAmJiBjb21QbGF5ZWQuc3RhdHVzKSB7IC8vIHdlIGZpcnN0IGNoZWNrIGlmIHRoZSBibG9jayB3ZSBjbGlja2VkIGhhcyBhIHN0YXR1cyBvZiBmYWxzZSwgaWYgbm90LCBub3RoaW5nIGhhcHBlbnNcclxuICAgICAgICAgICAgICAgIGNvbVBsYXllZC5zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IFtOdW1iZXIoZS5wYXRoWzBdLmRhdGFzZXQueCksIE51bWJlcihlLnBhdGhbMF0uZGF0YXNldC55KV0gLy8gdGhlIGNvb3JkaW5hdGUgd2UgYXR0YWNrZWRcclxuICAgICAgICAgICAgICAgIHBsYXllcjEubm9kZXNBdHRhY2tlZC5wdXNoKGF0dGFjayk7IC8vIG5vdCBzdXJlIGlmIGkgc3RpbGwgbmVlZCB0aGlzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvID0gcGxheWVyMi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spOyAvLyB0aGUgb3Bwb25lbnQgZ2FtZWJvYXJkIHJlY2VpdmVzIG91ciBhdHRhY2tcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBhYm92ZSB2YXJpYWJsZShvKSByZXR1cm5zIHRoZSBzaGlwIGhpdCBpZiBhIHNoaXAgd2FzIGhpdFxyXG4gICAgICAgICAgICAgICAgaWYobyA9PSAnbWlzc2VkJykgeyAvLyB0aGUgZm9sbG93aW5nIG9jY3VycyBpZiB3ZSBtaXNzZWRcclxuICAgICAgICAgICAgICAgICAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsYXllcjIncyB0dXJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlzcyhlLnRhcmdldCk7IC8vIHRoZSBkb20gbmVjZXNzYXJ5IHdoZW4gd2UgbWlzc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoaXQgPSB7czogdHJ1ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMkNob3Nlbk5vZGUgPSBmKHBsYXllcjIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXR0YWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gW2coYXR0YWNrZWQpLnRvcCwgZyhhdHRhY2tlZCkubGVmdCwgZyhhdHRhY2tlZCkucmlnaHQsIGcoYXR0YWNrZWQpLmJvdHRvbV0uZmlsdGVyKGkgPT4gaSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb25zLmV2ZXJ5KGkgPT4gaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcpID09ICd0cnVlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbScsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW8gPSBsKHBsYXllcjIsIHBsYXllcjEsIHBsYXllcjJDaG9zZW5Ob2RlLm5vZGUsIGRpcmVjdGlvbiwgY29tUGxheWVkLCBoaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFtby5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tlZCA9IGFtb1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgYXR0YWNrZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob3NlbiA9IGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXTsgLy8gY2hvb3NlIGEgbm9kZSBpbiBhbnkgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hvc2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZShjaG9zZW4uZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHsgLy8gZmluZCB0aGUgbm9kZSB0aGF0IGlzIHZhbGlkIHRvIGNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob3NlbiA9IGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKGNob3Nlbi5kYXRhc2V0LngpID4gTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueCkpIGRpcmVjdGlvID0gJ3JpZ2h0JyAvLyBkaXJlY3Rpb24gaXMgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKE51bWJlcihjaG9zZW4uZGF0YXNldC54KSA8IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpKSBkaXJlY3RpbyA9ICdsZWZ0JyAvLyBkaXJlY3Rpb24gaXMgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoTnVtYmVyKGNob3Nlbi5kYXRhc2V0LnkpID4gTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueSkpIGRpcmVjdGlvID0gJ3RvcCcgLy8gZGlyZWN0aW9uIGlzIHRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoTnVtYmVyKGNob3Nlbi5kYXRhc2V0LnkpIDwgTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueSkpIGRpcmVjdGlvID0gJ2JvdHRvbScgLy8gZGlyZWN0aW9uIGlzIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtbyA9IGwocGxheWVyMiwgcGxheWVyMSwgY2hvc2VuLCBkaXJlY3RpbywgY29tUGxheWVkLCBoaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW8gPSBsKHBsYXllcjIsIHBsYXllcjEsIHBsYXllcjJDaG9zZW5Ob2RlLm5vZGUsIGRpcmVjdGlvbiwgY29tUGxheWVkLCBoaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYW1vLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQgPSBhbW9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgYXR0YWNrZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzU3Vuay5sZW5ndGggPT0gMTApIHsgLy8gaWYgYWxsIG91ciBzaGlwcyBoYXZlIGJlZW4gc3Vua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXMoKS5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtcygpLnRleHQudGV4dENvbnRlbnQgPSAnWW91IGxvc2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIGlmIHdlIGhpdCBhIHNoaXBcclxuICAgICAgICAgICAgICAgICAgICBoaXR0KHBsYXllcjIsIGVsZW1zKCkucGxheWVyMlNoaXBOYW1lcywgZWxlbXMoKS5zaGlwTmFtZXNQMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZGlhZ29uYWxzIGZ1bmN0aW9uIHdvcmtzIHRoZSBzYW1lIGFzIHRoZSBhYm92ZSBsb29wLCBidXQgdGhpcyBvbmUgZmlyZXMgYWZ0ZXIgZXZlcnkgY2xpY2sgYW5kIG9ubHkgY2hhbmdlcyB0aGUgc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhlIGJsb2Nrcyh0aGF0IHdlIG9idmlvdXNseSBzaG91bGQgbm90IGNsaWNrIG9uKSB0aGF0IGFyZSBkaWFnb25hbCh0aGVyZSdzIDQgb2YgdGhlbSkgdG8gdGhlIGNsaWNrZWQgbm9kZSBcclxuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbHMoZWxlbXMoKS5ub2Rlc1BsYXllcjIsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNzcyBjaGFuZ2VzIGFwcGx5IHRoZSBYIGZlYXR1cmUgb24gYSBzaGlwIHRoYXQncyBiZWVuIGhpdFxyXG4gICAgICAgICAgICAgICAgICAgIGUucGF0aFswXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wYXRoWzBdLmNsYXNzTGlzdC5hZGQoJ3knKTtcclxuICAgICAgICAgICAgICAgICAgICBjb21QbGF5ZWQuc3RhdHVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmb3IgbG9vcCBpcyB0byBjaGFuZ2UgdGhlIHN0YXR1cyBvZiBhbGwgbm9kZXMgdGhhdCBzaG91bGQgb2J2aW91c2x5IG5vdCBiZSBjbGlja2VkLCB0byB0cnVlIGFuZCBhbHNvIGNoYW5nZSB0aGVpciBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmsubGVuZ3RoOyBpKyspIHsgLy8gdGhpcyBsb29wIG9ubHkgZmlyZXMgd2hlbiBhIHNoaXAgaGFzIGJlZW4gc3Vua1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhKGVsZW1zKCkubm9kZXNQbGF5ZXIyLCBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmtbMF0uY29vcmQsIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXS5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmtbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG8uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmtbMF0uY29vcmRbMF0ucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gWy4uLmVsZW1zKCkubm9kZXNQbGF5ZXIyXS5maW5kKGkgPT4gTnVtYmVyKGkuZGF0YXNldC54KSA9PSBjb29yZFswXSAmJiBOdW1iZXIoaS5kYXRhc2V0LnkpID09IGNvb3JkWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hpcChub2RlLCBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmtbMF0uZGlyZWN0aW9uLCBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmtbMF0ub3JpZ2luYWxMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIHNjcmVlbiB0aGF0IHNob3dzIHdoZW4gdGhlcmUgaXMgYSB3aW5uZXIuIFN0aWxsIGluIHByb2dyZXNzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyMi5nYW1lYm9hcmQuc2hpcHNTdW5rLmxlbmd0aCA9PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtcygpLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXMoKS50ZXh0LnRleHRDb250ZW50ID0gJ1lvdSB3aW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGlzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGlzIGZvciBlYWNoIHNoaXAgb24gdGhlIGdhbWVib2FyZFxyXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCkgeyAgXHJcbiAgICB0aGlzLm9yaWdpbmFsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgdGhpcy5jb29yZCA9IFtdO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLm51bWJlck9mVGltZXNIaXQgPSAwO1xyXG4gICAgdGhpcy5oaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm51bWJlck9mVGltZXNIaXQgKz0gMTtcclxuICAgICAgICB0aGlzLmxlbmd0aCAtPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mVGltZXNIaXRcclxuICAgIH1cclxuICAgIHRoaXMuaXNTdW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy5vcmlnaW5hbExlbmd0aCA9PT0gdGhpcy5udW1iZXJPZlRpbWVzSGl0KSB7XHJcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdW5rXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5hbExlbmd0aCA9PSA0KSByZXR1cm4gYEJhdHRsZXNoaXAgKCR7dGhpcy5sZW5ndGh9KWAgXHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm9yaWdpbmFsTGVuZ3RoID09IDMpIHJldHVybiBgU3VibWFyaW5lICgke3RoaXMubGVuZ3RofSlgXHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm9yaWdpbmFsTGVuZ3RoID09IDIpIHJldHVybiBgQ3J1aXNlciAoJHt0aGlzLmxlbmd0aH0pYFxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5vcmlnaW5hbExlbmd0aCA9PSAxKSByZXR1cm4gYENhbm5vbiAoJHt0aGlzLmxlbmd0aH0pYDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFRoaXMgY29uc3RydWN0b3IgZnVuY3Rpb24gaXMgZm9yIGVhY2ggYmxvY2svbm9kZSBvbiB0aGUgYm9hcmRcclxuZnVuY3Rpb24gTm9kZShwb3MpIHtcclxuICAgIHRoaXMucG9zID0gcG9zOyAvLyBUaGUgbm9kZSdzIGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLnNoaXAgPSBudWxsOyAvLyBXaGV0aGVyIG9yIG5vdCBpdHMgb2NjdXB5aW5nIGEgc2hpcFxyXG4gICAgdGhpcy5zdGF0dXMgPSAndW5vY2N1cGllZCc7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQoKTsgLy8gYXJyYXkgY29udGFpbmluZyBhbGwgMTAwIGJsb2Nrcy9ub2RlcyBcclxuICAgIHRoaXMuc2hpcHMgPSBzaGlwcygpOyAvLyBhcnJheSB3aXRoIGFsbCB0aGUgc2hpcHMgaW4gdGhlIGdhbWVib2FyZC4gVGhlcmUncyAxMCBvZiB0aGVtXHJcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXTtcclxuICAgIHRoaXMuc2hpcHNTdW5rID0gW107XHJcbiAgICB0aGlzLnBsYWNlU2hpcHMgPSBmdW5jdGlvbigpIHsgLy8gcGxhY2VzIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQgcmFuZG9tbHlcclxuICAgICAgICBsZXQgb2NjdXBpZWQgPSBbXTsgLy8gdGhpcyBhcnJheSB3aWxsIGxhdGVyIGNvbnRhaW4gYWxsIG5vZGVzIGJlaW5nIG9jY3VwaWVkIGJ5IHNoaXBzXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hvc2VuRGlyZWN0aW9uID0gWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildOyAvLyBDaG9vc2UgYmV0d2VlbiBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYm9hcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKV07IC8vIGNob29zZSByYW5kb20gbm9kZSBmcm9tIGJvYXJkXHJcbiAgICAgICAgICAgIHdoaWxlKCFub2RlIHx8ICEobm9kZS5wb3NbMF0gPD0gKDEwIC0gdGhpcy5zaGlwc1tpXS5sZW5ndGgpICsgMSkgfHwgaGVscGVyKG5vZGUsIHRoaXMuc2hpcHNbaV0ubGVuZ3RoLCB0aGlzLmJvYXJkLCBjaG9zZW5EaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHdoaWxlIGxvb3AgY2hlY2tzIGZvciB3aGVuIG91ciBub2RlIGlzIG51bGwsIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGZvciBvdXIgc2hpcCB0byBmaWxsIGluIHRoZSBzcGVjaWZpZWQgbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgZm9yIHdoZW4gdGhlIHVwY29taW5nIG5vZGVzIGFyZSBvY2N1cGllZCBvciBub3QuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVuIG9uZSBvZiB0aGVzZSBjb25kaXRpb25zIGFyZSB0cnVlLCBvdXIgbm9kZSB3aWxsIGtlZXAgb24gY2hhbmdpbmcgdW50aWwgd2UgaGF2ZSB0aGUgaWRlYWwgbm9kZSB3aGljaCBhbG9uZyB3aXRoIGl0c1xyXG4gICAgICAgICAgICAgICAgLy8gdXBjb21pbmcgbm9kZXMsIGNhbiBmaXQgdGhlIHNoaXAgYW5kIGFsb25nIHdpdGggaXRzIHVwY29taW5nIG5vZGVzIGFuZCBzdXJyb3VuZGluZyBub2RlcywgYXJlIHVub2NjdXBpZWRcclxuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmJvYXJkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHROb2RlcyA9IGZpbmROZXh0Tm9kZXMobm9kZSwgdGhpcy5zaGlwc1tpXS5sZW5ndGgsIHRoaXMuYm9hcmQsIGNob3NlbkRpcmVjdGlvbik7IC8vIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG5leHQgbm9kZXMgaW5jbHVkaW5nIG91ciBjdXJyZW50IG5vZGVcclxuICAgICAgICAgICAgbm9kZS5zdGF0dXMgPSAnb2NjdXBpZWQnO1xyXG4gICAgICAgICAgICBvY2N1cGllZC5wdXNoKG5leHROb2Rlcyk7XHJcbiAgICAgICAgICAgIG5leHROb2Rlcy5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgbi5zdGF0dXMgPSAnb2NjdXBpZWQnO1xyXG4gICAgICAgICAgICAgICAgbi5zaGlwID0gdGhpcy5zaGlwc1tpXTsgLy8gYWxsIG5vZGVzIGluIG5leHROb2RlcyB3aWxsIGhhdmUgYSBsaW5rIHRvIG91ciBzaGlwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW2ldLmNvb3JkLnB1c2gobik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNoaXBzW2ldLmxlbmd0aCA+IDEpIHRoaXMuc2hpcHNbaV0uZGlyZWN0aW9uID0gY2hvc2VuRGlyZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFsbCB0aGUgY29kZSBiZWxvdyBtYWtlcyBzdXJlIHRoYXQgYWxsIHRoZSBub2RlcyBzdXJyb3VuZGluZyBvdXIgc2hpcCBiZWNvbWUgb2NjdXBpZWQgc28gdGhhdCB0aGV5IGFyZW4ndCBhdmFpbGFibGUgZm9yIHVzZSBieVxyXG4gICAgICAgICAgICAgICAgLy8gYW55IG90aGVyIHNoaXBzXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGNvZGUgaXMgYXBwbGllZCBvbiBlYWNoIGluZGl2aWR1YWwgbm9kZSB0aGF0IGhhcyBhIGxpbmsgdG8gb3VyIHNoaXBcclxuICAgICAgICAgICAgICAgIGxldCB0b3AsIHRvcExlZnQsIHRvcFJpZ2h0LCBib3R0b20sIGJvdHRvbUxlZnQsIGJvdHRvbVJpZ2h0LCBsZWZ0LCByaWdodDtcclxuICAgICAgICAgICAgICAgIHRvcCA9IHRoaXMuYm9hcmQuZmluZCh5ID0+IHkucG9zWzBdID09PSBuLnBvc1swXSAmJiB5LnBvc1sxXSA+IG4ucG9zWzFdKTtcclxuICAgICAgICAgICAgICAgIGlmKHRvcCkgdG9wTGVmdCA9IHRoaXMuYm9hcmQuZmluZCh5ID0+IHRvcC5wb3NbMF0gLSB5LnBvc1swXSA9PSAxICYmIHkucG9zWzFdID09PSB0b3AucG9zWzFdKTtcclxuICAgICAgICAgICAgICAgIGlmKHRvcCkgdG9wUmlnaHQgPSB0aGlzLmJvYXJkLmZpbmQoeSA9PiB5LnBvc1swXSA+IHRvcC5wb3NbMF0gJiYgeS5wb3NbMV0gPT09IHRvcC5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5ib2FyZC5maW5kKHkgPT4geS5wb3NbMF0gPT09IG4ucG9zWzBdICYmIG4ucG9zWzFdIC0geS5wb3NbMV0gPT0gMSk7XHJcbiAgICAgICAgICAgICAgICBpZihib3R0b20pIGJvdHRvbUxlZnQgPSB0aGlzLmJvYXJkLmZpbmQoeSA9PiBib3R0b20ucG9zWzBdIC0geS5wb3NbMF0gPT0gMSAmJiB5LnBvc1sxXSA9PT0gYm90dG9tLnBvc1sxXSk7XHJcbiAgICAgICAgICAgICAgICBpZihib3R0b20pIGJvdHRvbVJpZ2h0ID0gdGhpcy5ib2FyZC5maW5kKHkgPT4geS5wb3NbMF0gPiBib3R0b20ucG9zWzBdICYmIHkucG9zWzFdID09PSBib3R0b20ucG9zWzFdKTtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLmJvYXJkLmZpbmQoeSA9PiBuLnBvc1swXSAtIHkucG9zWzBdID09IDEgJiYgeS5wb3NbMV0gPT09IG4ucG9zWzFdKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5ib2FyZC5maW5kKHkgPT4geS5wb3NbMF0gPiBuLnBvc1swXSAmJiB5LnBvc1sxXSA9PT0gbi5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgW3RvcCwgdG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbSwgYm90dG9tTGVmdCwgYm90dG9tUmlnaHQsIGxlZnQsIHJpZ2h0XS5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHQpIHQuc3RhdHVzID0gJ29jY3VwaWVkJztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBpbiBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIFxyXG4gICAgLy8gY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXHJcbiAgICB0aGlzLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihbeCwgeV0pIHsgLy8gY29vcmRpbmF0ZXMgaXMgYW4gYXJyYXkgb2YgeCBhbmQgeVxyXG4gICAgICAgIGNvbnN0IG5vZGVBdENvb3JkaW5hdGUgPSB0aGlzLmJvYXJkLmZpbmQoaSA9PiBpLnBvc1swXSA9PT0geCAmJiBpLnBvc1sxXSA9PT0geSk7XHJcbiAgICAgICAgaWYobm9kZUF0Q29vcmRpbmF0ZS5zaGlwKXsgLy8gaWYgdGhlIG5vZGUgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlIGlzIG9jY3VwaWVkIGJ5IGEgc2hpcFxyXG4gICAgICAgICAgICBub2RlQXRDb29yZGluYXRlLnNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgIGlmKG5vZGVBdENvb3JkaW5hdGUuc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaGlwcy5zcGxpY2UodGhpcy5zaGlwcy5pbmRleE9mKG5vZGVBdENvb3JkaW5hdGUuc2hpcCksIDEpOyAvLyBvbmNlIGEgc2hpcCBoYXMgYmVlbiBzdW5rLCBpdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZ2FtZWJvYXJkIGFycmF5IG9mIHNoaXBzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzU3Vuay51bnNoaWZ0KG5vZGVBdENvb3JkaW5hdGUuc2hpcCk7IC8vIG9uY2UgYSBzaGlwIGhhcyBiZWVuIHN1bmssIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHNoaXBzU3VuayBhcnJheVxyXG4gICAgICAgICAgICAgICAgLy8gaWYodGhpcy5zaGlwc1N1bmsubGVuZ3RoID09IDEwKSByZXR1cm4gJ0FsbCBzaGlwcyBoYXZlIGJlZW4gZGVzdHJveWVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUF0Q29vcmRpbmF0ZS5zaGlwXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiAnbWlzc2VkJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXllcigpIHtcclxuICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuICAgIHRoaXMubm9kZXNBdHRhY2tlZCA9IFtdO1xyXG4gICAgdGhpcy5zaGlwc0Rlc3Ryb3llZCA9IFtdO1xyXG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB0aGlzLmF0dGFjayA9IGZ1bmN0aW9uKFt4LCB5XSkge1xyXG4gICAgICAgIHJldHVybiBbeCwgeV1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFBpY2tzIGEgcmFuZG9tIGNvb3JkaW5hdGUgdG8gYXR0YWNrXHJcbi8vIENoZWNrcyBpZiB0aGF0IGNvb3JkaW5hdGUgaGFzIGJlZW4gYXR0YWNrZWQsIGlmIHNvLCBjaG9vc2UgYW5vdGhlciBvbmVcclxuZnVuY3Rpb24gY29tcHV0ZXJQbGF5KG5vZGVzQXR0YWNrZWQpIHtcclxuICAgIGxldCByYW5kb20gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSldO1xyXG4gICAgd2hpbGUocmFuZG9tWzBdID09IDAgfHwgcmFuZG9tWzFdID09IDAgfHwgaXNBcnJheUluQXJyYXkobm9kZXNBdHRhY2tlZCwgcmFuZG9tKSkge1xyXG4gICAgICAgIHJhbmRvbSA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmFuZG9tXHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIG91ciBib2FyZFxyXG5mdW5jdGlvbiBib2FyZCgpIHtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgZm9yKGxldCB5ID0gMTsgeSA8IDExOyB5KyspIHtcclxuICAgICAgICBmb3IobGV0IHggPSAxOyB4IDwgMTE7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoW3gsIHldKTtcclxuICAgICAgICAgICAgYXJyLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG59XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBjaGVja3MgdG8gc2VlIGlmIHRoZSBuZXh0IG5vZGVzIGFyZSBvY2N1cGllZCBieSBzaGlwcyBvciBub3RcclxuLy8gSXQgcmV0dXJucyBGYWxzZSBpZiB0aGV5J3JlIG5vdCBvY2N1cGllZCBhbmQgdHJ1ZSBpZiBhbnkgb25lIG9mIHRoZW0gaXMgb2NjdXBpZWRcclxuLy8gVGhlIGxlbmd0aCBwYXJhbWV0ZXIvYXJndW1lbnQgaXMgcmVzcG9uc2libGUgZm9yIGNoZWNraW5nIHRoZSBudW1iZXIgb2YgdXBjb21pbmcgbm9kZXNcclxuZnVuY3Rpb24gaGVscGVyKG5vZGUsIGxlbmd0aCwgYm9hcmQsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IHF1ZXVlID0gW25vZGVdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBpZihxdWV1ZVswXS5zdGF0dXMgPT0gJ3Vub2NjdXBpZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gYm9hcmQuZmluZChpID0+IGkucG9zWzBdID4gcXVldWVbMF0ucG9zWzBdICYmIGkucG9zWzFdID09PSBxdWV1ZVswXS5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYobmV4dCkgcXVldWUucHVzaChuZXh0KVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihxdWV1ZVswXS5zdGF0dXMgPT0gJ3Vub2NjdXBpZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gYm9hcmQuZmluZChpID0+IGkucG9zWzBdID09PSBxdWV1ZVswXS5wb3NbMF0gJiYgaS5wb3NbMV0gPiBxdWV1ZVswXS5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYobmV4dCkgcXVldWUucHVzaChuZXh0KVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5vZGVzIHRoYXQgY29tZSBhZnRlciB0aGUgc3BlY2lmaWVkIG5vZGVcclxuLy8gVGhlIHNwZWNpZmllZCBub2RlIGlzIGluY2x1ZGVkIGluIHRoaXMgYXJyYXlcclxuZnVuY3Rpb24gZmluZE5leHROb2Rlcyhub2RlLCBsZW5ndGgsIGJvYXJkLCBkaXJlY3Rpb24pIHtcclxuICAgIGxldCBxdWV1ZSA9IFtub2RlXTtcclxuICAgIGxldCBhcnIgPSBbbm9kZV07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Tm9kZSA9IGJvYXJkLmZpbmQoaSA9PiBpLnBvc1swXSA+IHF1ZXVlWzBdLnBvc1swXSAmJiBpLnBvc1sxXSA9PT0gcXVldWVbMF0ucG9zWzFdKTtcclxuICAgICAgICAgICAgYXJyLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICBxdWV1ZS5wdXNoKG5leHROb2RlKTtcclxuICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Tm9kZSA9IGJvYXJkLmZpbmQoaSA9PiBpLnBvc1swXSA9PT0gcXVldWVbMF0ucG9zWzBdICYmIGkucG9zWzFdID4gcXVldWVbMF0ucG9zWzFdKTtcclxuICAgICAgICAgICAgYXJyLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICBxdWV1ZS5wdXNoKG5leHROb2RlKTtcclxuICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcihpID0+IGkpO1xyXG59XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBidWlsZCBhbGwgb3VyIHNoaXBzKDEwIG9mIHRoZW0pIGFuZCBob2xkcyB0aGVtIGluc2lkZSBhbiBhcnJheVxyXG5mdW5jdGlvbiBzaGlwcygpIHtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29uc3QgYXJyMiA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXTsgLy8gdGhlc2UgYXJlIHRoZSBsZW5ndGhzIG9mIGFsbCB0aGUgc2hpcHMgaW4gdGhlIG9ubGluZSBnYW1lLCBCYXR0bGVzaGlwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyMi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgU2hpcChhcnIyW2ldKTtcclxuICAgICAgICBhcnIucHVzaChub2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJcclxufVxyXG5cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHN0YXJ0IHRoZSBnYW1lXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKCk7XHJcbiAgICBsZXQgcGxheWVyMiA9IG5ldyBQbGF5ZXIoKTtcclxuICAgIHBsYXllcjEucGxheWVyID0gJ3BsYXllcjEnO1xyXG4gICAgcGxheWVyMi5wbGF5ZXI9ICdwbGF5ZXIyJztcclxuICAgIGxldCBwbGF5ZXIxU2hpcHMgPSBwbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXBzKCk7IC8vIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5vZGVzIG9jY3VwaWVkIGJ5IHNoaXBzXHJcbiAgICBsZXQgcGxheWVyMlNoaXBzID0gcGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwcygpOyAvLyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBub2RlcyBvY2N1cGllZCBieSBzaGlwc1xyXG4gICAgcGxhY2UocGxheWVyMVNoaXBzKTsgLy8gcGxhY2VzIHRoZSBzaGlwcyBvbiB0aGUgd2VicGFnZVxyXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMVNoaXBzKTtcclxuXHJcbiAgICBlbGVtcygpLnJhbmRvbWl6ZVBsYXllcjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjb25zdCBhbGxTaGlwcyA9IFsuLi5lbGVtcygpLnNoaXBzXTsgLy8gZ2V0IGFsbCBzaGlwcyhkaXZzKSBmcm9tIHRoZSBkb2N1bWVudFxyXG4gICAgICAgIGFsbFNoaXBzLmZvckVhY2goaSA9PiBpLnJlbW92ZSgpKTsgLy8gcmVtb3ZlIGFsbCBzaGlwcyBmcm9tIHRoZSBkb2N1bWVudFxyXG4gICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkID0gYm9hcmQoKTsgLy8gY3JlYXRlIGEgbmV3IGJvYXJkIHdpdGggdW5vY2N1cGllZCBub2Rlc1xyXG4gICAgICAgIHBsYXllcjFTaGlwcyA9IHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcHMoKTtcclxuICAgICAgICBwbGFjZShwbGF5ZXIxU2hpcHMpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIG8ocGxheWVyMSwgZWxlbXMoKS5zaGlwTmFtZXNQMSk7XHJcbiAgICBvKHBsYXllcjIsIGVsZW1zKCkuc2hpcE5hbWVzUDIpO1xyXG5cclxuICAgIHJldHVybiB7cGxheWVyMSwgcGxheWVyMiwgcGxheWVyMVNoaXBzLCBwbGF5ZXIyU2hpcHN9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KGNvbVBsYXllZCkge1xyXG4gICAgY29tUGxheWVkLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgZWxlbXMoKS5wbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZWxlbXMoKS5yZXNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZWxlbXMoKS5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGFjZSB0aGUgc2hpcHNcIjtcclxuICAgIGVsZW1zKCkucmFuZG9taXplUGxheWVyMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIFsuLi5lbGVtcygpLnBsYXllcjFTaGlwTmFtZXNdLmZvckVhY2godyA9PiB3LnJlbW92ZSgpKTtcclxuICAgIFsuLi5lbGVtcygpLnBsYXllcjJTaGlwTmFtZXNdLmZvckVhY2godyA9PiB3LnJlbW92ZSgpKTtcclxuICAgIFsuLi5lbGVtcygpLnNoaXBzXS5mb3JFYWNoKGkgPT4gaS5yZW1vdmUoKSk7XHJcbiAgICBbLi4uZWxlbXMoKS5hbGxOb2Rlc10uZm9yRWFjaChpID0+IHtcclxuICAgICAgICBpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCd5Jyk7XHJcbiAgICAgICAgaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIGkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNCMURFRjYnO1xyXG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycpO1xyXG4gICAgfSk7XHJcbiAgICBvYmouZ2FtZUwgPSBnYW1lTG9vcCgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKXtcclxuICAgIHZhciBpdGVtX2FzX3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xyXG4gICBcclxuICAgIHZhciBjb250YWlucyA9IGFyci5zb21lKGZ1bmN0aW9uKGVsZSl7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtX2FzX3N0cmluZztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5zO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBcclxuICAgIHBsYXksIFNoaXAsIE5vZGUsIEdhbWVib2FyZCwgaXNBcnJheUluQXJyYXksIFxyXG4gICAgcmVzdGFydCwgZ2FtZUxvb3AsIGZpbmROZXh0Tm9kZXMsIHNoaXBzLCBoZWxwZXIsIGJvYXJkLCBjb21wdXRlclBsYXksIFBsYXllciBcclxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyBnYW1lTG9vcCwgcGxheSB9IGZyb20gJy4vcGxheSc7XHJcbmltcG9ydCB7IGVsZW1zIH0gZnJvbSAnLi9kb20nO1xyXG5cclxubGV0IG9iaiA9IHtnYW1lTDogZ2FtZUxvb3AoKX1cclxuXHJcbmVsZW1zKCkucGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXkpOyAvLyB3aGVuIHdlIGNsaWNrIG9uIHBsYXksIHRoZSBmb2xsb3dpbmcgaGFwcGVuc1xyXG5cclxuZXhwb3J0IHsgb2JqIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==