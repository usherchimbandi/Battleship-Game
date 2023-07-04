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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Almarai', sans-serif;\r\n    /* border: 1px solid lime; */\r\n}\r\n/* body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\nheader {\r\n    height: 12vh;\r\n    background-color: #F5F5F7;\r\n    box-shadow: 0px 1px 2px rgb(190 190 190);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 2% 0 2%\r\n}\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr .5fr 1fr;\r\n    padding: 2% 4% 4% 4%;\r\n    width: max-content;\r\n} \r\n\r\n\r\n.table {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.table-indicator {\r\n    height: 9vh;\r\n    border-radius: 10px;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 1.4em;\r\n}\r\n\r\n\r\n.myFleet {\r\n    color: white;\r\n    background-color: #E2134D;\r\n}\r\n\r\n.opponent {\r\n    color: white;\r\n    background-color: #686E8A;\r\n}\r\n\r\n\r\ntable {\r\n    /* margin-top: 100px; */\r\n    /* border-collapse: collapse; */\r\n    cursor: default;\r\n}\r\n\r\n.ships {\r\n    padding: 0 0 5% 9%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    row-gap: 10%;\r\n    column-gap: 20%;\r\n    width: 80%;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.ships p{\r\n    font-weight: 600;\r\n}\r\nth {\r\n    font-weight: 600;\r\n    color: #3F4454;\r\n}\r\ntd {\r\n    height: 2.3em;\r\n    width: 2.3em;\r\n    /* border: 1px solid black; */\r\n    background-color: #B1DEF6;\r\n    border-radius: 2px;\r\n}\r\n\r\n.attacked {\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.div {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ship { \r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 2px solid #E2134D;\r\n    background-color: rgba(231, 9, 30, 0.3);\r\n    z-index: 1;\r\n    /* border-radius: 20px; */\r\n}\r\n\r\n\r\n.first {\r\n    color: #3F4454;\r\n    text-align: end;\r\n    padding-right: 2.5%;\r\n\r\n}\r\n\r\n\r\nfooter {\r\n    height: 15vh;\r\n    /* outline: 1px solid black; */\r\n    background-color: #333;\r\n}\r\n\r\n.t {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.y::after {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(45deg);\r\n    /* display: none; */\r\n}\r\n\r\n.y::before {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(-45deg);\r\n    /* display: none;s */\r\n}\r\n\r\n.controls {\r\n    padding: 3%;\r\n    height: 4em;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.random {\r\n    text-decoration: underline dotted #E2134D;\r\n    cursor: pointer;\r\n    transition: all .3s;\r\n}\r\n\r\n.random:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.j {\r\n    height: 70%;\r\n    /* width: 100%; */\r\n    /* border: 1px solid red; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 10%;\r\n    margin: 0 15px;\r\n}\r\n\r\n.message {\r\n    height: 10%;\r\n    width: 100%;\r\n    /* border: 1px solid lime; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.3em;\r\n    background-color: #3F4454;\r\n    font-weight: 600;\r\n    color: white;\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n.play, .reset {\r\n    font-weight: 900;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n    transition: all .4s;\r\n    text-decoration: underline;\r\n}\r\n\r\n.play:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.reset:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.winner {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 2em;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    z-index: 2;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 4em;\r\n}\r\n\r\n.win {\r\n    padding: .4em .8em;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.destroyed {\r\n    text-decoration: line-through #E2134D;\r\n    color: #E2134D;\r\n}\r\n\r\n.miss {\r\n    color: #E2134D;\r\n    font-weight: 900;\r\n    font-size: .9em;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Almarai', sans-serif;\r\n    /* border: 1px solid lime; */\r\n}\r\n/* body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\nheader {\r\n    height: 12vh;\r\n    background-color: #F5F5F7;\r\n    box-shadow: 0px 1px 2px rgb(190 190 190);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 2% 0 2%\r\n}\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr .5fr 1fr;\r\n    padding: 2% 4% 4% 4%;\r\n    width: max-content;\r\n} \r\n\r\n\r\n.table {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.table-indicator {\r\n    height: 9vh;\r\n    border-radius: 10px;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 1.4em;\r\n}\r\n\r\n\r\n.myFleet {\r\n    color: white;\r\n    background-color: #E2134D;\r\n}\r\n\r\n.opponent {\r\n    color: white;\r\n    background-color: #686E8A;\r\n}\r\n\r\n\r\ntable {\r\n    /* margin-top: 100px; */\r\n    /* border-collapse: collapse; */\r\n    cursor: default;\r\n}\r\n\r\n.ships {\r\n    padding: 0 0 5% 9%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    row-gap: 10%;\r\n    column-gap: 20%;\r\n    width: 80%;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.ships p{\r\n    font-weight: 600;\r\n}\r\nth {\r\n    font-weight: 600;\r\n    color: #3F4454;\r\n}\r\ntd {\r\n    height: 2.3em;\r\n    width: 2.3em;\r\n    /* border: 1px solid black; */\r\n    background-color: #B1DEF6;\r\n    border-radius: 2px;\r\n}\r\n\r\n.attacked {\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.div {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ship { \r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 2px solid #E2134D;\r\n    background-color: rgba(231, 9, 30, 0.3);\r\n    z-index: 1;\r\n    /* border-radius: 20px; */\r\n}\r\n\r\n\r\n.first {\r\n    color: #3F4454;\r\n    text-align: end;\r\n    padding-right: 2.5%;\r\n\r\n}\r\n\r\n\r\nfooter {\r\n    height: 15vh;\r\n    /* outline: 1px solid black; */\r\n    background-color: #333;\r\n}\r\n\r\n.t {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.y::after {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(45deg);\r\n    /* display: none; */\r\n}\r\n\r\n.y::before {\r\n    content: '';\r\n    width: 2.3em;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    top: 50%;\r\n    background-color: red;\r\n    transform: rotate(-45deg);\r\n    /* display: none;s */\r\n}\r\n\r\n.controls {\r\n    padding: 3%;\r\n    height: 4em;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.random {\r\n    text-decoration: underline dotted #E2134D;\r\n    cursor: pointer;\r\n    transition: all .3s;\r\n}\r\n\r\n.random:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.j {\r\n    height: 70%;\r\n    /* width: 100%; */\r\n    /* border: 1px solid red; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 10%;\r\n    margin: 0 15px;\r\n}\r\n\r\n.message {\r\n    height: 10%;\r\n    width: 100%;\r\n    /* border: 1px solid lime; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.3em;\r\n    background-color: #3F4454;\r\n    font-weight: 600;\r\n    color: white;\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n.play, .reset {\r\n    font-weight: 900;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n    transition: all .4s;\r\n    text-decoration: underline;\r\n}\r\n\r\n.play:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.reset:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.winner {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 2em;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    z-index: 2;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 4em;\r\n}\r\n\r\n.win {\r\n    padding: .4em .8em;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.destroyed {\r\n    text-decoration: line-through #E2134D;\r\n    color: #E2134D;\r\n}\r\n\r\n.miss {\r\n    color: #E2134D;\r\n    font-weight: 900;\r\n    font-size: .9em;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
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
                const attack = [Number(e.target.dataset.x), Number(e.target.dataset.y)] // the coordinate we attacked
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
                    e.target.style.position = 'relative';
                    e.target.classList.add('y');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzQkFBc0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUDZCO0FBQ21EO0FBQ2pEO0FBQ1Y7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBSztBQUNULElBQUksMkNBQUs7QUFDVCxJQUFJLDJDQUFLO0FBQ1QsSUFBSSwyQ0FBSztBQUNULG9CQUFvQixzREFBaUI7QUFDckM7QUFDQSxvQkFBb0Isc0RBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0EsSUFBSSwyQ0FBSztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLDJDQUFLO0FBQ1Q7QUFDQSxRQUFRLDJDQUFLO0FBQ2IsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLDJDQUFLLGtFQUFrRTtBQUMzRTtBQUNBLElBQUksMkNBQUs7QUFDVDtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxtRUFBbUU7QUFDbkU7QUFDQSxvQ0FBb0M7QUFDcEMsb0JBQW9CLDJDQUFLO0FBQ3pCLG9CQUFvQiwwQ0FBSSxZQUFZO0FBQ3BDLCtCQUErQjtBQUMvQiw4Q0FBOEMsdUNBQUM7QUFDL0M7QUFDQTtBQUNBLDhDQUE4Qyx1Q0FBQyxnQkFBZ0IsdUNBQUMsaUJBQWlCLHVDQUFDLGtCQUFrQix1Q0FBQztBQUNyRztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsdUNBQUM7QUFDN0M7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsb0dBQW9HO0FBQ3BHO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1Q0FBQztBQUM3QztBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLHdDQUF3Qyx1Q0FBQztBQUN6QztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkUsNEJBQTRCLDJDQUFLO0FBQ2pDLDRCQUE0QiwyQ0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixvQkFBb0IsMENBQUksVUFBVSwyQ0FBSyxxQkFBcUIsMkNBQUs7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQVMsQ0FBQywyQ0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0NBQXdDLE9BQU87QUFDckY7QUFDQSx3QkFBd0IsdUNBQUMsQ0FBQywyQ0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQ0FBSztBQUM5Qyx3QkFBd0IsZ0RBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQ0FBSztBQUM3Qix3QkFBd0IsMkNBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDJEQUEyRCxZQUFZO0FBQ3ZFLCtEQUErRCxZQUFZO0FBQzNFLDZEQUE2RCxZQUFZO0FBQ3pFLDREQUE0RCxZQUFZO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IsdUJBQXVCLHVCQUF1QjtBQUM5QywrRkFBK0Y7QUFDL0Ysb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELElBQUksMkNBQUssZ0JBQWdCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLDJDQUFLO0FBQ1QsNkJBQTZCLDJDQUFLLFdBQVc7QUFDN0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQztBQUNBLFFBQVEsMkNBQUs7QUFDYixLQUFLO0FBQ0w7QUFDQSxJQUFJLHVDQUFDLFVBQVUsMkNBQUs7QUFDcEIsSUFBSSx1Q0FBQyxVQUFVLDJDQUFLO0FBQ3BCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFLO0FBQ1QsSUFBSSwyQ0FBSztBQUNULElBQUksMkNBQUs7QUFDVCxJQUFJLDJDQUFLO0FBQ1QsUUFBUSwyQ0FBSztBQUNiLFFBQVEsMkNBQUs7QUFDYixRQUFRLDJDQUFLO0FBQ2IsUUFBUSwyQ0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4Q0FBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWW9CO0FBQ29CO0FBQ1Y7QUFDOUI7QUFDQSxXQUFXLE9BQU8sK0NBQVE7QUFDMUI7QUFDQSw0Q0FBSyxrQ0FBa0MsdUNBQUksR0FBRztBQUM5QztBQUNlOzs7Ozs7O1VDUmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ0FsbWFyYWknLCBzYW5zLXNlcmlmO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaW1lOyAqL1xcclxcbn1cXHJcXG4vKiBib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogMTJ2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNztcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiKDE5MCAxOTAgMTkwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDIlIDAgMiVcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIC41ZnIgMWZyO1xcclxcbiAgICBwYWRkaW5nOiAyJSA0JSA0JSA0JTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn0gXFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtaW5kaWNhdG9yIHtcXHJcXG4gICAgaGVpZ2h0OiA5dmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm15RmxlZXQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjEzNEQ7XFxyXFxufVxcclxcblxcclxcbi5vcHBvbmVudCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4NkU4QTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cXHJcXG4gICAgLyogYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgKi9cXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgICBwYWRkaW5nOiAwIDAgNSUgOSU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwcyBwe1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG50aCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjM0Y0NDU0O1xcclxcbn1cXHJcXG50ZCB7XFxyXFxuICAgIGhlaWdodDogMi4zZW07XFxyXFxuICAgIHdpZHRoOiAyLjNlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMURFRjY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dGFja2VkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAgeyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMjEzNEQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCA5LCAzMCwgMC4zKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZpcnN0IHtcXHJcXG4gICAgY29sb3I6ICMzRjQ0NTQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMi41JTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ueTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDIuM2VtO1xcclxcbiAgICBoZWlnaHQ6IDAuMmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMi4zZW07XFxyXFxuICAgIGhlaWdodDogMC4yZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTtzICovXFxyXFxufVxcclxcblxcclxcbi5jb250cm9scyB7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCAjRTIxMzREO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb206aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaiB7XFxyXFxuICAgIGhlaWdodDogNzAlO1xcclxcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbiAgICBtYXJnaW46IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDU0O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wbGF5LCAucmVzZXQge1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnJlc2V0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2lubmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbiB7XFxyXFxuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGVzdHJveWVkIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggI0UyMTM0RDtcXHJcXG4gICAgY29sb3I6ICNFMjEzNEQ7XFxyXFxufVxcclxcblxcclxcbi5taXNzIHtcXHJcXG4gICAgY29sb3I6ICNFMjEzNEQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjllbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtBQUNoQztBQUNBOzs7O0dBSUc7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O0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGlDQUFpQztJQUNqQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQWxtYXJhaScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7ICovXFxyXFxufVxcclxcbi8qIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY3O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2IoMTkwIDE5MCAxOTApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJVxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgLjVmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDIlIDQlIDQlIDQlO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufSBcXHJcXG5cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1pbmRpY2F0b3Ige1xcclxcbiAgICBoZWlnaHQ6IDl2aDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubXlGbGVldCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyMTM0RDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wcG9uZW50IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2RThBO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDEwMHB4OyAqL1xcclxcbiAgICAvKiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAqL1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwcyB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCA1JSA5JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICByb3ctZ2FwOiAxMCU7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbnRoIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICMzRjQ0NTQ7XFxyXFxufVxcclxcbnRkIHtcXHJcXG4gICAgaGVpZ2h0OiAyLjNlbTtcXHJcXG4gICAgd2lkdGg6IDIuM2VtO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IxREVGNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0YWNrZWQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi5kaXYge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7IFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyMTM0RDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDksIDMwLCAwLjMpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmlyc3Qge1xcclxcbiAgICBjb2xvcjogIzNGNDQ1NDtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjUlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDE1dmg7XFxyXFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi55OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMi4zZW07XFxyXFxuICAgIGhlaWdodDogMC4yZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ueTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHdpZHRoOiAyLjNlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lO3MgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2xzIHtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIGhlaWdodDogNGVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkICNFMjEzNEQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5qIHtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxMCU7XFxyXFxuICAgIG1hcmdpbjogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGltZTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NTQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBsYXksIC5yZXNldCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVzZXQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aW5uZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luIHtcXHJcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZXN0cm95ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAjRTIxMzREO1xcclxcbiAgICBjb2xvcjogI0UyMTM0RDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgICBjb2xvcjogI0UyMTM0RDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiAuOWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVsZW1zLCBhLCBkaWFnb25hbHMsIGhpdHQsIG1pc3N9IGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgY29tcHV0ZXJQbGF5IH0gZnJvbSAnLi9wbGF5JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBjYXJlIG9mIGNob29zaW5nIGEgY29vcmRpbmF0ZSwgdGhlbiB0aGUgbm9kZSBhdCB0aGF0IGNvb3JkaW5hdGUgdG8gYXR0YWNrIGFuZCB0aGVuIHJldHVybnMgYm90aCB0aGUgY29vcmRpbmF0ZSBhbmQgbm9kZS5cclxuZnVuY3Rpb24gZihwbGF5ZXIyKSB7XHJcbiAgICBsZXQgY29tID0gY29tcHV0ZXJQbGF5KHBsYXllcjIubm9kZXNBdHRhY2tlZCk7IC8vIHJldHVybnMgY29vcmRpbmF0ZSB0byBhdHRhY2sgXHJcbiAgICBsZXQgbm9kZSA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZChpID0+IE51bWJlcihpLmRhdGFzZXQueCkgPT0gY29tWzBdICYmIE51bWJlcihpLmRhdGFzZXQueSkgPT0gY29tWzFdKTsvLyBmaW5kcyB0aGUgbm9kZSBtYXRjaGluZyB0aGUgYXR0YWNrZWQgY29vcmRpbmF0ZVxyXG4gICAgd2hpbGUobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcpID09ICd0cnVlJykgey8vIGlmIHRoZSBjb29yZGluYXRlIHRoZSBjb20gY2FtZSB1cCB3aXRoIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkLCBpdCdsbCBmaW5kIGFub3RoZXIgb25lXHJcbiAgICAgICAgY29tID0gY29tcHV0ZXJQbGF5KHBsYXllcjIubm9kZXNBdHRhY2tlZCk7XHJcbiAgICAgICAgbm9kZSA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZChpID0+IE51bWJlcihpLmRhdGFzZXQueCkgPT0gY29tWzBdICYmIE51bWJlcihpLmRhdGFzZXQueSkgPT0gY29tWzFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7Y29tLCBub2RlfVxyXG59XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBjYXJlIG9mIGFsbCBtb3ZlcyBtYWRlIGJ5IHRoZSBjb20gYW5kIHBsYXlzIGFkamFjZW50IG1vdmVzIGFmdGVyIGVhY2ggaGl0XHJcbmZ1bmN0aW9uIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyID0gW10pIHtcclxuXHQvLyBpZighbm9kZSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ3RydWUnKSByZXR1cm5cclxuXHQvLyBlbHNlIHtcclxuICAgICAgICAvLyBUaGUgbmV4dCA0IGNvbmRpdGlvbnMgY2hlY2sgaWYgdGhlIGNob3NlbiBub2RlIGlzIHRvdWNoaW5nIGFueSBvbmUgb2YgdGhlIHdhbGxzIGFuZCB0aGF0IHRoZSBkaXJlY3Rpb24gY2hvc2VuIGRvZXNuJ3QgbW92ZSBvdXQgdGhlIGdyaWRcclxuICAgICAgICAvLyBJZiB0cnVlLCBhIG5ldyBkaXJlY3Rpb24gd2lsbCBiZSBjaG9zZW4uIFRoZSBuZXcgZGlyZWN0aW9uIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyB0aGUgb2xkIG9uZS5cclxuICAgICAgICBpZihOdW1iZXIobm9kZS5kYXRhc2V0LnkpID09IDEgJiYgZGlyZWN0aW9uID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV07XHJcbiAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIG5vZGUsIGRpcmVjdGlvbiwgY29tUGxheWVkLCBoaXQsIGFycik7XHJcbiAgICAgICAgfSBlbHNlIGlmKE51bWJlcihub2RlLmRhdGFzZXQueCkgPT0gMSAmJiBkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2JvdHRvbScsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICB9IGVsc2UgaWYoTnVtYmVyKG5vZGUuZGF0YXNldC55KSA9PSAxMCAmJiBkaXJlY3Rpb24gPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWydib3R0b20nLCAnbGVmdCcsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICB9IGVsc2UgaWYoTnVtYmVyKG5vZGUuZGF0YXNldC54KSA9PSAxMCAmJiBkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbSddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb25kaXRpb25zIHNwZWNpZmljYWxsdCB0YWtlIGNhcmUgb2YgdGhlIG1vdmVzIG9mIHRoZSBjb20uIE1ha2luZyBhZGphY2VudCBtb3ZlcyBhZnRlciBlYWNoIGhpdCB3aGVyZSBwb3NzaWJsZVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID4gTnVtYmVyKG5vZGUuZGF0YXNldC54KSAmJiBOdW1iZXIobm9kZS5kYXRhc2V0LnkpID09IE51bWJlcih0LmRhdGFzZXQueSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocmlnaHQudGV4dENvbnRlbnQgPT0gJ01pc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyaWdodC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBmKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGIubm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIHJpZ2h0LCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0LCBhcnIpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgLSBOdW1iZXIodC5kYXRhc2V0LngpID09IDEgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA9PT0gTnVtYmVyKG5vZGUuZGF0YXNldC55KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb20gPSBbTnVtYmVyKG5vZGUuZGF0YXNldC54KSwgTnVtYmVyKG5vZGUuZGF0YXNldC55KV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcShwbGF5ZXIxLCBub2RlLCBjb21QbGF5ZWQsIGhpdCwgY29tKTtcclxuICAgICAgICAgICAgICAgIGlmKHIgPT0gJ21pc3MnKSByZXR1cm4gYXJyXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhcnIubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGFyci51bnNoaWZ0KG5vZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihsZWZ0LnRleHRDb250ZW50ID09ICdNaXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2JvdHRvbScsICdyaWdodCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbChwbGF5ZXIyLCBwbGF5ZXIxLCBub2RlLCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0LCBhcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlZnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdib3R0b20nLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IGYocGxheWVyMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgYi5ub2RlLCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0LCAgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGxlZnQsIGRpcmVjdGlvbiwgY29tUGxheWVkLCBoaXQsICBhcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgPT09IE51bWJlcih0LmRhdGFzZXQueCkgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA+IE51bWJlcihub2RlLmRhdGFzZXQueSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodG9wLnRleHRDb250ZW50ID09ICdNaXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b3AuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBmKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGIubm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIHRvcCwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIobm9kZS5kYXRhc2V0LngpID09PSBOdW1iZXIodC5kYXRhc2V0LngpICYmIE51bWJlcihub2RlLmRhdGFzZXQueSkgLSBOdW1iZXIodC5kYXRhc2V0LnkpID09IDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoYm90dG9tLnRleHRDb250ZW50ID09ICdNaXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihib3R0b20uZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBmKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGIubm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBsKHBsYXllcjIsIHBsYXllcjEsIGJvdHRvbSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tID0gW051bWJlcihub2RlLmRhdGFzZXQueCksIE51bWJlcihub2RlLmRhdGFzZXQueSldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHEocGxheWVyMSwgbm9kZSwgY29tUGxheWVkLCBoaXQsIGNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZihyID09ICdtaXNzJykgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhcnIudW5zaGlmdChub2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGwocGxheWVyMiwgcGxheWVyMSwgbm9kZSwgZGlyZWN0aW9uLCBjb21QbGF5ZWQsIGhpdCwgYXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgLy8gfSBcclxufVxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaXMgZm9yIHdoZW4gdGhlIGNvbSBhdHRhY2tzIGEgbm9kZSBcclxuZnVuY3Rpb24gcShwbGF5ZXIxLCBub2RlLCBjb21QbGF5ZWQsIGhpdCwgY29tKSB7XHJcbiAgICBpZihub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIGNvbnN0IHAgPSBwbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvbSk7IC8vIG91ciBnYW1lYm9hcmQgcmVjZWl2ZXMgYW4gYXR0YWNrIGZyb20gdGhlIGNvbVxyXG4gICAgICAgIGlmKHAgPT0gJ21pc3NlZCcpIHsgLy8gaWYgdGhlIGNvbSBtaXNzZWRcclxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJyk7IC8vIHRoZSBzdGF0dXMgb2YgdGhlIG5vZGUgY2xpY2tlZCBieSB0aGUgY29tIHNob3VsZCBiZSB0cnVlIG5vd1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdGhpcyBzZXRUaW1lb3V0IGlzIHVzZWQgdG8gc2xvdyBkb3duIHRoZSBtb3ZlcyBvZiB0aGUgY29tcHV0ZXJcclxuICAgICAgICAgICAgICAgIGlmKGNvbVBsYXllZCkgY29tUGxheWVkLnN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgICAgICAgICAgICAgbWlzcyhub2RlKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIGlmKGhpdCkgaGl0LnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuICdtaXNzJ1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBjb20gaGl0cyBhIHNoaXBcclxuICAgICAgICAgICAgaGl0dChwbGF5ZXIxLCBlbGVtcygpLnBsYXllcjFTaGlwTmFtZXMsIGVsZW1zKCkuc2hpcE5hbWVzUDEpO1xyXG4gICAgICAgICAgICBkaWFnb25hbHMoZWxlbXMoKS5ub2Rlc1BsYXllcjEsIG5vZGUsIHRydWUpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHNTdW5rLmxlbmd0aDsgaSsrKSB7IC8vIHRoaXMgbG9vcCBvbmx5IGZpcmVzIHdoZW4gYSBzaGlwIGhhcyBiZWVuIHN1bmtcclxuICAgICAgICAgICAgICAgIGEoZWxlbXMoKS5ub2Rlc1BsYXllcjEsIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzU3Vua1tpXS5jb29yZCwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHNTdW5rW2ldLmRpcmVjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJyk7IC8vIHRoZSBzdGF0dXMgb2YgdGhlIG5vZGUgY2xpY2tlZCBieSB0aGUgY29tIHNob3VsZCBiZSB0cnVlIG5vd1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbVBsYXllZCkgY29tUGxheWVkLnN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3knKTsgICAgXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKlxyXG5pZighYXR0YWNrZWQpIHtcclxuICAgIGNvbnN0IHBsYXllcjJDaG9zZW5Ob2RlID0gZihwbGF5ZXIyKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgY29uc3QgcCA9IHEocGxheWVyMSwgcGxheWVyMkNob3Nlbk5vZGUubm9kZSwgY29tUGxheWVkLCBoaXQsIHBsYXllcjJDaG9zZW5Ob2RlLmNvbSlcclxufVxyXG5pZihwID09ICdtaXNzJykge1xyXG4gICAgLy8gbmV4dCB0aW1lIGl0J2xsIHJ1biB0aGUgYWJvdmUgc3RlcHMgdW50aWwgaXQgaGl0cyBhIG5vZGVcclxufSBlbHNlIHtcclxuICAgIGF0dGFja2VkID0gdGhlIG5vZGUgaXQgaGl0XHJcbiAgICAvLyBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIHN1cnJvdW5kaW5nIG5vZGVzXHJcbiAgICBsZXQgbm9kZURpcmVjdGlvbnMgPSBbZyhhdHRhY2tlZCkudG9wLCBnKGF0dGFja2VkKS5sZWZ0LCBnKGF0dGFja2VkKS5yaWdodCwgZyhhdHRhY2tlZCkuYm90dG9tXS5maWx0ZXIoaSA9PiBpKTsgXHJcbiAgICBjb25zb2xlLmxvZyhub2RlRGlyZWN0aW9ucyk7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBub2RlRGlyZWN0aW9ucy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgIGlmKE51bWJlcihpLmRhdGFzZXQueSkgPiBOdW1iZXIoYXR0YWNrZWQuZGF0YXNldC55KSkgYXJyLnB1c2goJ3RvcCcpXHJcbiAgICAgICAgaWYoTnVtYmVyKGkuZGF0YXNldC55KSA8IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LnkpKSBhcnIucHVzaCgnYm90dG9tJylcclxuICAgICAgICBpZihOdW1iZXIoaS5kYXRhc2V0LngpID4gTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueCkpIGFyci5wdXNoKCdyaWdodCcpXHJcbiAgICAgICAgaWYoTnVtYmVyKGkuZGF0YXNldC54KSA8IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpKSBhcnIucHVzaCgndG9wJylcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgIGNvbnN0IGNob3Nlbk5vZGUgPSBub2RlRGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBub2RlRGlyZWN0aW9ucy5sZW5ndGgpXVxyXG4gICAgY29uc3QgZGlyZWN0aW87XHJcbiAgICBpZihOdW1iZXIoYXR0YWNrZWQuZGF0YXNldC55KSA8IE51bWJlcihjaG9zZW5Ob2RlLmRhdGFzZXQueSkpIGRpcmVjdGlvID0gJ3RvcCdcclxuICAgIGVsc2UgaWYoTnVtYmVyKGF0dGFja2VkLmRhdGFzZXQueSkgPiBOdW1iZXIoY2hvc2VuTm9kZS5kYXRhc2V0LnkpKSBkaXJlY3RpbyA9ICdib3R0b20nXHJcbiAgICBlbHNlIGlmKE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpIDwgTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC54KSkgZGlyZWN0aW8gPSAncmlnaHQnXHJcbiAgICBlbHNlIGlmKE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpID4gTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC54KSkgZGlyZWN0aW8gPSAnbGVmdCdcclxuICAgIGNvbnN0IHAgPSBxKHBsYXllcjEsIGNob3Nlbk5vZGUsIGNvbVBsYXllZCwgaGl0LCBbTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC54KSwgTnVtYmVyKGNob3Nlbk5vZGUuZGF0YXNldC55KV0pXHJcblxyXG5cclxuXHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgeyBmLCBsLCBxIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcblxyXG4vLyBBbGwgZXhpc3RpbmcgZWxlbWVudHMgb24gb3VyIGRvY3VtZW50XHJcbmZ1bmN0aW9uIGVsZW1zKCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEnKTtcclxuICAgIGNvbnN0IGdhbWVib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMicpO1xyXG4gICAgY29uc3Qgbm9kZXNQbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI3BsYXllcjEgdGRbZGF0YS14XWApO1xyXG4gICAgY29uc3Qgbm9kZXNQbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI3BsYXllcjIgdGRbZGF0YS14XWApO1xyXG4gICAgY29uc3QgYWxsTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB0ZFtkYXRhLXhdYCk7XHJcbiAgICBjb25zdCBwbGF5ZXIxU2hpcE5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcjEtc2hpcCcpO1xyXG4gICAgY29uc3QgcGxheWVyMlNoaXBOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIyLXNoaXAnKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lc1AxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlMSAuc2hpcHMnKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lc1AyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlMiAuc2hpcHMnKTtcclxuICAgIGNvbnN0IHJhbmRvbWl6ZVBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXplLXBsYXllcjEnKTtcclxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpdicpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcclxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XHJcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhbWVib2FyZDEsIGdhbWVib2FyZDIsIG5vZGVzUGxheWVyMSwgbm9kZXNQbGF5ZXIyLCBwbGF5ZXIxU2hpcE5hbWVzLCBwbGF5ZXIyU2hpcE5hbWVzLCByYW5kb21pemVQbGF5ZXIxLCBzaGlwcyxcclxuICAgICAgICBtZXNzYWdlLCBwbGF5LCBhbGxOb2Rlcywgb3ZlcmxheSwgc2hpcE5hbWVzUDEsIHNoaXBOYW1lc1AyLCByZXNldCwgd2luLCB0ZXh0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IHdoZW4gYSBzaGlwIGhhcyBiZWVuIHN1bmsuIEl0IGNoYW5nZXMgdGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBibG9ja3MgdGhhdCBoYXZlbid0IGJlZW4gY2hhbmdlcyB5ZXQsXHJcbi8vIHRoYXQgd2Ugb2J2aW91c2x5IHNob3VsZCBub3QgY2xpY2sgb24uIEl0IGZpbmlzaGVzIHRoZSBkaWFnb25hbHMoKSBmdW5jdGlvbidzIGpvYlxyXG5mdW5jdGlvbiBhKGIsIGFyciwgZGlyZWN0aW9uLCBmb3JDb20gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9wID0gWy4uLmJdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID09PSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAxXS5wb3NbMF0pICYmIE51bWJlcih0LmRhdGFzZXQueSkgPiBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAxXS5wb3NbMV0pKTtcclxuICAgIGNvbnN0IGJvdHRvbSA9IFsuLi5iXS5maW5kKHQgPT4gTnVtYmVyKHQuZGF0YXNldC54KSA9PT0gTnVtYmVyKGFyclswXS5wb3NbMF0pICYmIE51bWJlcihhcnJbMF0ucG9zWzFdKSAtIE51bWJlcih0LmRhdGFzZXQueSkgPT0gMSk7XHJcbiAgICBjb25zdCByaWdodCA9IFsuLi5iXS5maW5kKHQgPT4gTnVtYmVyKHQuZGF0YXNldC54KSA+IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDFdLnBvc1swXSkgJiYgTnVtYmVyKGFyclthcnIubGVuZ3RoIC0gMV0ucG9zWzFdKSA9PSBOdW1iZXIodC5kYXRhc2V0LnkpKTtcclxuICAgIGNvbnN0IGxlZnQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcihhcnJbMF0ucG9zWzBdKSAtIE51bWJlcih0LmRhdGFzZXQueCkgPT0gMSAmJiBOdW1iZXIodC5kYXRhc2V0LnkpID09PSBOdW1iZXIoYXJyWzBdLnBvc1sxXSkpO1xyXG4gICAgaWYoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICBpZih0b3ApIHtcclxuICAgICAgICAgICAgdG9wLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICB0b3Auc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgdG9wLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYm90dG9tKSB7XHJcbiAgICAgICAgICAgIGJvdHRvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgaWYoIWZvckNvbSkge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGJvdHRvbS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgaWYocmlnaHQpIHtcclxuICAgICAgICAgICAgcmlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGxlZnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZighZGlyZWN0aW9uKSB7IC8vIGlmIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXAgaXMgbnVsbCwgbWVhbmluZyB0aGF0IHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgaXMgMVxyXG4gICAgICAgIGlmKHRvcCkge1xyXG4gICAgICAgICAgICB0b3Auc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIHRvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY4NkU4QSc7XHJcbiAgICAgICAgICAgICAgICB0b3AudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihib3R0b20pIHtcclxuICAgICAgICAgICAgYm90dG9tLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmlnaHQpIHtcclxuICAgICAgICAgICAgcmlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICBpZighZm9yQ29tKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGxlZnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBmaXJlcyBhZnRlciBldmVyeSBjbGljayBhbmQgY2hhbmdlcyB0aGUgc3RhdHVzXHJcbi8vIG9mIHRoZSBibG9ja3ModGhhdCB3ZSBvYnZpb3VzbHkgc2hvdWxkIG5vdCBjbGljayBvbikgdGhhdCBhcmUgZGlhZ29uYWwodGhlcmUncyA0IG9mIHRoZW0pIHRvIHRoZSBjbGlja2VkIG5vZGUgXHJcbmZ1bmN0aW9uIGRpYWdvbmFscyhiLCBuLCBmb3JDb20gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9wID0gWy4uLmJdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID09PSBOdW1iZXIobi5kYXRhc2V0LngpICYmIE51bWJlcih0LmRhdGFzZXQueSkgPiBOdW1iZXIobi5kYXRhc2V0LnkpKTtcclxuICAgIGlmKHRvcCkge1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcih0b3AuZGF0YXNldC54KSAtIE51bWJlcih0LmRhdGFzZXQueCkgPT0gMSAmJiBOdW1iZXIodC5kYXRhc2V0LnkpID09PSBOdW1iZXIodG9wLmRhdGFzZXQueSkpO1xyXG4gICAgICAgIGlmKHRvcExlZnQpIHtcclxuICAgICAgICAgICAgdG9wTGVmdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgaWYoIWZvckNvbSkge1xyXG4gICAgICAgICAgICAgICAgdG9wTGVmdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY4NkU4QSc7XHJcbiAgICAgICAgICAgICAgICB0b3BMZWZ0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wUmlnaHQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcih0LmRhdGFzZXQueCkgPiBOdW1iZXIodG9wLmRhdGFzZXQueCkgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA9PT0gTnVtYmVyKHRvcC5kYXRhc2V0LnkpKTtcclxuICAgICAgICBpZih0b3BSaWdodCkge1xyXG4gICAgICAgICAgICB0b3BSaWdodC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgaWYoIWZvckNvbSkge1xyXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGJvdHRvbSA9IFsuLi5iXS5maW5kKHQgPT4gTnVtYmVyKHQuZGF0YXNldC54KSA9PT0gTnVtYmVyKG4uZGF0YXNldC54KSAmJiBOdW1iZXIobi5kYXRhc2V0LnkpIC0gTnVtYmVyKHQuZGF0YXNldC55KSA9PSAxKTtcclxuICAgIGlmKGJvdHRvbSkge1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbUxlZnQgPSBbLi4uYl0uZmluZCh0ID0+IE51bWJlcihib3R0b20uZGF0YXNldC54KSAtIE51bWJlcih0LmRhdGFzZXQueCkgPT0gMSAmJiBOdW1iZXIodC5kYXRhc2V0LnkpID09PSBOdW1iZXIoYm90dG9tLmRhdGFzZXQueSkpO1xyXG4gICAgICAgIGlmKGJvdHRvbUxlZnQpIHtcclxuICAgICAgICAgICAgYm90dG9tTGVmdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2ODZFOEEnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGVmdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gWy4uLmJdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID4gTnVtYmVyKGJvdHRvbS5kYXRhc2V0LngpICYmIE51bWJlcih0LmRhdGFzZXQueSkgPT09IE51bWJlcihib3R0b20uZGF0YXNldC55KSk7XHJcbiAgICAgICAgaWYoYm90dG9tUmlnaHQpIHtcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIGlmKCFmb3JDb20pIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjg2RThBJztcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBFdmVyeXRpbWUgd2Ugb3IgdGhlIGNvbXB1dGVyIG1pc3NlcyBhIHNoaXAsIHRoZSBmb2xsb3dpbmcgY3NzIGNoYW5nZXMgd2lsbCBiZSBtYWRlIHRvIHRoZSBzcG90L25vZGUgdGhhdCdzIGJlZW4gaGl0XHJcbmZ1bmN0aW9uIG1pc3Mobm9kZSkge1xyXG4gICAgbm9kZS50ZXh0Q29udGVudCA9ICdNaXNzJztcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBwbGFjZSB0aGUgc2hpcHMgb24gdGhlIHdlYnBhZ2VcclxuZnVuY3Rpb24gY3JlYXRlU2hpcChub2RlLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgIFxyXG4gICAgaWYoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpIHsgLy8gaWYgdmVydGljYWxcclxuICAgICAgICBkaXYyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBpZihsZW5ndGggPT0gNCkgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnY2FsYyg0MDAlICsgNnB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMykgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnY2FsYygzMDAlICsgNHB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMikgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnY2FsYygyMDAlICsgMnB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMSkgZGl2Mi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7IC8vIGlmIGhvcml6b250YWxcclxuICAgICAgICBkaXYyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBpZihsZW5ndGggPT0gNCkgZGl2Mi5zdHlsZS53aWR0aCA9ICdjYWxjKDQwMCUgKyA2cHgpJztcclxuICAgICAgICBlbHNlIGlmKGxlbmd0aCA9PSAzKSBkaXYyLnN0eWxlLndpZHRoID0gJ2NhbGMoMzAwJSArIDRweCknO1xyXG4gICAgICAgIGVsc2UgaWYobGVuZ3RoID09IDIpIGRpdjIuc3R5bGUud2lkdGggPSAnY2FsYygyMDAlICsgMnB4KSc7XHJcbiAgICAgICAgZWxzZSBpZihsZW5ndGggPT0gMSkgZGl2Mi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIWRpcmVjdGlvbikgZGl2Mi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHJcbiAgICBkaXYuYXBwZW5kKGRpdjIpO1xyXG4gICAgbm9kZS5hcHBlbmQoZGl2KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGcobm9kZSkge1xyXG4gICAgY29uc3QgcmlnaHQgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIodC5kYXRhc2V0LngpID4gTnVtYmVyKG5vZGUuZGF0YXNldC54KSAmJiBOdW1iZXIobm9kZS5kYXRhc2V0LnkpID09IE51bWJlcih0LmRhdGFzZXQueSkpO1xyXG4gICAgY29uc3QgbGVmdCA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgLSBOdW1iZXIodC5kYXRhc2V0LngpID09IDEgJiYgTnVtYmVyKHQuZGF0YXNldC55KSA9PT0gTnVtYmVyKG5vZGUuZGF0YXNldC55KSk7XHJcbiAgICBjb25zdCB0b3AgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjFdLmZpbmQodCA9PiBOdW1iZXIobm9kZS5kYXRhc2V0LngpID09PSBOdW1iZXIodC5kYXRhc2V0LngpICYmIE51bWJlcih0LmRhdGFzZXQueSkgPiBOdW1iZXIobm9kZS5kYXRhc2V0LnkpKTtcclxuICAgIGNvbnN0IGJvdHRvbSA9IFsuLi5lbGVtcygpLm5vZGVzUGxheWVyMV0uZmluZCh0ID0+IE51bWJlcihub2RlLmRhdGFzZXQueCkgPT09IE51bWJlcih0LmRhdGFzZXQueCkgJiYgTnVtYmVyKG5vZGUuZGF0YXNldC55KSAtIE51bWJlcih0LmRhdGFzZXQueSkgPT0gMSk7XHJcblxyXG4gICAgcmV0dXJuIHtyaWdodCwgbGVmdCwgdG9wLCBib3R0b219XHJcbn1cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIG1lc3Nlc2Fyb3VuZCB3aXRoIHRoZSBzaGlwIG5hbWVzIGJlbG93IHRoZSBib2FyZHNcclxuZnVuY3Rpb24gaGl0dChwbGF5ZXIsIGluZGl2aWR1YWxTaGlwTmFtZXMsIHNoaXBOYW1lc0NvbnRhaW5lciwpIHtcclxuICAgIFsuLi5pbmRpdmlkdWFsU2hpcE5hbWVzXS5mb3JFYWNoKHcgPT4gdy5yZW1vdmUoKSk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHBsYXllci5nYW1lYm9hcmQuc2hpcHNbaV0ubmFtZSgpO1xyXG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIucGxheWVyfS1zaGlwYCk7XHJcbiAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5zaGlwc1tpXS5sZW5ndGggPT0gMCkgcC5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZWQnKTsgXHJcbiAgICAgICAgc2hpcE5hbWVzQ29udGFpbmVyLmFwcGVuZChwKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgc2hpcCBuYW1lcyBiZWxvdyB0aGUgYm9hcmRzXHJcbmZ1bmN0aW9uIG8ocGxheWVyLCBzaGlwTmFtZXMpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gcGxheWVyLmdhbWVib2FyZC5zaGlwc1tpXS5uYW1lKCk7XHJcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5wbGF5ZXJ9LXNoaXBgKTtcclxuICAgICAgICBzaGlwTmFtZXMuYXBwZW5kKHApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBwbGFjZXMgdGhlIHNoaXBzIG9uIHRoZSBkb2N1bWVudFxyXG5mdW5jdGlvbiBwbGFjZShzaGlwcykge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBlbGVtcygpLm5vZGVzUGxheWVyMTtcclxuICAgICAgICBjb25zdCBjb29yZCA9IHNoaXBzW2ldWzBdLnBvczsgLy8gYXJyYXlcclxuICAgICAgICBjb25zdCBjID0gWy4uLm5vZGVzXS5maW5kKG4gPT4gTnVtYmVyKG4uZGF0YXNldC54KSA9PSBjb29yZFswXSAmJiBOdW1iZXIobi5kYXRhc2V0LnkpID09IGNvb3JkWzFdKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uO1xyXG4gICAgICAgIGlmKHNoaXBzW2ldLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNoaXBzW2ldWzBdLnBvc1sxXSA9PSBzaGlwc1tpXVsxXS5wb3NbMV0pIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xyXG4gICAgICAgIGVsc2UgaWYoc2hpcHNbaV1bMF0ucG9zWzBdID09IHNoaXBzW2ldWzFdLnBvc1swXSkgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIGNyZWF0ZVNoaXAoYywgZGlyZWN0aW9uLCBzaGlwc1tpXS5sZW5ndGgpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZWxlbXMsIGEsIGRpYWdvbmFscywgcGxhY2UsIG8sIGhpdHQsIGcsIGNyZWF0ZVNoaXAsIG1pc3N9OyIsImltcG9ydCB7IGYsIGwgfSBmcm9tICcuL2NvbSc7XHJcbmltcG9ydCB7IGVsZW1zLCBhLCBkaWFnb25hbHMsIHBsYWNlLCBvLCBoaXR0LCBnLCBjcmVhdGVTaGlwLCBtaXNzfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gJy4vc2NyaXB0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBwbGF5KCkge1xyXG4gICAgbGV0IGF0dGFja2VkO1xyXG4gICAgbGV0IGRpcmVjdGlvO1xyXG4gICAgbGV0IGNob3NlbjtcclxuXHJcbiAgICBlbGVtcygpLnBsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGVsZW1zKCkucmVzZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgZWxlbXMoKS5yYW5kb21pemVQbGF5ZXIxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjb25zdCBwbGF5ZXIxID0gb2JqLmdhbWVMLnBsYXllcjE7XHJcbiAgICBwbGF5ZXIxLnBsYXllciA9ICdwbGF5ZXIxJztcclxuICAgIGNvbnN0IHBsYXllcjIgPSBvYmouZ2FtZUwucGxheWVyMjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzKTtcclxuICAgIHBsYXllcjIucGxheWVyID0gJ3BsYXllcjInO1xyXG5cclxuICAgIGxldCBjb21QbGF5ZWQgPSB7c3RhdHVzOiB0cnVlfTsgLy8gdGhpcyBtYWtlcyBzdXJlIHRoYXQgSSBkb24ndCBwbGF5IGlmIHRoZSBjb20gaGFzbid0IHBsYXllZCB5ZXRcclxuXHJcbiAgICBlbGVtcygpLnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgcmVzdGFydChjb21QbGF5ZWQpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVsZW1zKCkud2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgcmVzdGFydChjb21QbGF5ZWQpO1xyXG4gICAgICAgIGVsZW1zKCkub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVsZW1zKCkuYWxsTm9kZXMuZm9yRWFjaChpID0+IGkuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnLCAnZmFsc2UnKSk7Ly8gYm90aCBnYW1lYm9hcmRzIHdpbGwgaGF2ZSBub2RlcyB3aXRoIGEgZGF0YS1jbGlja2VkIHN0YXR1cyBvZiBmYWxzZVxyXG4gICAgLy8gYWZ0ZXIgZWFjaCBibG9jayBpcyBjbGlja2VkLCBpdHMgc3RhdHVzIGNoYW5nZXMgZnJvbSBmYWxzZSB0byB0cnVlXHJcbiAgICBlbGVtcygpLm5vZGVzUGxheWVyMi5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ2ZhbHNlJyAmJiBjb21QbGF5ZWQuc3RhdHVzKSB7IC8vIHdlIGZpcnN0IGNoZWNrIGlmIHRoZSBibG9jayB3ZSBjbGlja2VkIGhhcyBhIHN0YXR1cyBvZiBmYWxzZSwgaWYgbm90LCBub3RoaW5nIGhhcHBlbnNcclxuICAgICAgICAgICAgICAgIGNvbVBsYXllZC5zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IFtOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KSwgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSldIC8vIHRoZSBjb29yZGluYXRlIHdlIGF0dGFja2VkXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLm5vZGVzQXR0YWNrZWQucHVzaChhdHRhY2spOyAvLyBub3Qgc3VyZSBpZiBpIHN0aWxsIG5lZWQgdGhpc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IHBsYXllcjIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrKTsgLy8gdGhlIG9wcG9uZW50IGdhbWVib2FyZCByZWNlaXZlcyBvdXIgYXR0YWNrXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgYWJvdmUgdmFyaWFibGUobykgcmV0dXJucyB0aGUgc2hpcCBoaXQgaWYgYSBzaGlwIHdhcyBoaXRcclxuICAgICAgICAgICAgICAgIGlmKG8gPT0gJ21pc3NlZCcpIHsgLy8gdGhlIGZvbGxvd2luZyBvY2N1cnMgaWYgd2UgbWlzc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbXMoKS5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGF5ZXIyJ3MgdHVyblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pc3MoZS50YXJnZXQpOyAvLyB0aGUgZG9tIG5lY2Vzc2FyeSB3aGVuIHdlIG1pc3NcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGl0ID0ge3M6IHRydWV9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcjJDaG9zZW5Ob2RlID0gZihwbGF5ZXIyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF0dGFja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IFtnKGF0dGFja2VkKS50b3AsIGcoYXR0YWNrZWQpLmxlZnQsIGcoYXR0YWNrZWQpLnJpZ2h0LCBnKGF0dGFja2VkKS5ib3R0b21dLmZpbHRlcihpID0+IGkpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9ucy5ldmVyeShpID0+IGkuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrZWQnKSA9PSAndHJ1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vID0gbChwbGF5ZXIyLCBwbGF5ZXIxLCBwbGF5ZXIyQ2hvc2VuTm9kZS5ub2RlLCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhbW8ubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQgPSBhbW9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGF0dGFja2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9zZW4gPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07IC8vIGNob29zZSBhIG5vZGUgaW4gYW55IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNob3Nlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoY2hvc2VuLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJykgPT0gJ3RydWUnKSB7IC8vIGZpbmQgdGhlIG5vZGUgdGhhdCBpcyB2YWxpZCB0byBjbGlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9zZW4gPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKE51bWJlcihjaG9zZW4uZGF0YXNldC54KSA+IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LngpKSBkaXJlY3RpbyA9ICdyaWdodCcgLy8gZGlyZWN0aW9uIGlzIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihOdW1iZXIoY2hvc2VuLmRhdGFzZXQueCkgPCBOdW1iZXIoYXR0YWNrZWQuZGF0YXNldC54KSkgZGlyZWN0aW8gPSAnbGVmdCcgLy8gZGlyZWN0aW9uIGlzIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKE51bWJlcihjaG9zZW4uZGF0YXNldC55KSA+IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LnkpKSBkaXJlY3RpbyA9ICd0b3AnIC8vIGRpcmVjdGlvbiBpcyB0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKE51bWJlcihjaG9zZW4uZGF0YXNldC55KSA8IE51bWJlcihhdHRhY2tlZC5kYXRhc2V0LnkpKSBkaXJlY3RpbyA9ICdib3R0b20nIC8vIGRpcmVjdGlvbiBpcyBib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW8gPSBsKHBsYXllcjIsIHBsYXllcjEsIGNob3NlbiwgZGlyZWN0aW8sIGNvbVBsYXllZCwgaGl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vID0gbChwbGF5ZXIyLCBwbGF5ZXIxLCBwbGF5ZXIyQ2hvc2VuTm9kZS5ub2RlLCBkaXJlY3Rpb24sIGNvbVBsYXllZCwgaGl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFtby5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja2VkID0gYW1vWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGF0dGFja2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIxLmdhbWVib2FyZC5zaGlwc1N1bmsubGVuZ3RoID09IDEwKSB7IC8vIGlmIGFsbCBvdXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zKCkub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXMoKS50ZXh0LnRleHRDb250ZW50ID0gJ1lvdSBsb3NlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBpZiB3ZSBoaXQgYSBzaGlwXHJcbiAgICAgICAgICAgICAgICAgICAgaGl0dChwbGF5ZXIyLCBlbGVtcygpLnBsYXllcjJTaGlwTmFtZXMsIGVsZW1zKCkuc2hpcE5hbWVzUDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRpYWdvbmFscyBmdW5jdGlvbiB3b3JrcyB0aGUgc2FtZSBhcyB0aGUgYWJvdmUgbG9vcCwgYnV0IHRoaXMgb25lIGZpcmVzIGFmdGVyIGV2ZXJ5IGNsaWNrIGFuZCBvbmx5IGNoYW5nZXMgdGhlIHN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoZSBibG9ja3ModGhhdCB3ZSBvYnZpb3VzbHkgc2hvdWxkIG5vdCBjbGljayBvbikgdGhhdCBhcmUgZGlhZ29uYWwodGhlcmUncyA0IG9mIHRoZW0pIHRvIHRoZSBjbGlja2VkIG5vZGUgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxzKGVsZW1zKCkubm9kZXNQbGF5ZXIyLCBlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjc3MgY2hhbmdlcyBhcHBseSB0aGUgWCBmZWF0dXJlIG9uIGEgc2hpcCB0aGF0J3MgYmVlbiBoaXRcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgneScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbVBsYXllZC5zdGF0dXMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZvciBsb29wIGlzIHRvIGNoYW5nZSB0aGUgc3RhdHVzIG9mIGFsbCBub2RlcyB0aGF0IHNob3VsZCBvYnZpb3VzbHkgbm90IGJlIGNsaWNrZWQsIHRvIHRydWUgYW5kIGFsc28gY2hhbmdlIHRoZWlyIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vuay5sZW5ndGg7IGkrKykgeyAvLyB0aGlzIGxvb3Agb25seSBmaXJlcyB3aGVuIGEgc2hpcCBoYXMgYmVlbiBzdW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyMi5nYW1lYm9hcmQuc2hpcHNTdW5rWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEoZWxlbXMoKS5ub2Rlc1BsYXllcjIsIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXS5jb29yZCwgcGxheWVyMi5nYW1lYm9hcmQuc2hpcHNTdW5rWzBdLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoby5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXS5jb29yZFswXS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBbLi4uZWxlbXMoKS5ub2Rlc1BsYXllcjJdLmZpbmQoaSA9PiBOdW1iZXIoaS5kYXRhc2V0LngpID09IGNvb3JkWzBdICYmIE51bWJlcihpLmRhdGFzZXQueSkgPT0gY29vcmRbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGlwKG5vZGUsIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXS5kaXJlY3Rpb24sIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzU3Vua1swXS5vcmlnaW5hbExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgc2NyZWVuIHRoYXQgc2hvd3Mgd2hlbiB0aGVyZSBpcyBhIHdpbm5lci4gU3RpbGwgaW4gcHJvZ3Jlc3MuLi5cclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIyLmdhbWVib2FyZC5zaGlwc1N1bmsubGVuZ3RoID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zKCkub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtcygpLnRleHQudGV4dENvbnRlbnQgPSAnWW91IHdpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIFRoaXMgY29uc3RydWN0b3IgZnVuY3Rpb24gaXMgZm9yIGVhY2ggc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXHJcbmZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7ICBcclxuICAgIHRoaXMub3JpZ2luYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLmNvb3JkID0gW107XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMubnVtYmVyT2ZUaW1lc0hpdCA9IDA7XHJcbiAgICB0aGlzLmhpdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZUaW1lc0hpdCArPSAxO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZUaW1lc0hpdFxyXG4gICAgfVxyXG4gICAgdGhpcy5pc1N1bmsgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBpZih0aGlzLm9yaWdpbmFsTGVuZ3RoID09PSB0aGlzLm51bWJlck9mVGltZXNIaXQpIHtcclxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN1bmtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZih0aGlzLm9yaWdpbmFsTGVuZ3RoID09IDQpIHJldHVybiBgQmF0dGxlc2hpcCAoJHt0aGlzLmxlbmd0aH0pYCBcclxuICAgICAgICBlbHNlIGlmKHRoaXMub3JpZ2luYWxMZW5ndGggPT0gMykgcmV0dXJuIGBTdWJtYXJpbmUgKCR7dGhpcy5sZW5ndGh9KWBcclxuICAgICAgICBlbHNlIGlmKHRoaXMub3JpZ2luYWxMZW5ndGggPT0gMikgcmV0dXJuIGBDcnVpc2VyICgke3RoaXMubGVuZ3RofSlgXHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm9yaWdpbmFsTGVuZ3RoID09IDEpIHJldHVybiBgQ2Fubm9uICgke3RoaXMubGVuZ3RofSlgO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gVGhpcyBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpcyBmb3IgZWFjaCBibG9jay9ub2RlIG9uIHRoZSBib2FyZFxyXG5mdW5jdGlvbiBOb2RlKHBvcykge1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7IC8vIFRoZSBub2RlJ3MgY29vcmRpbmF0ZXNcclxuICAgIHRoaXMuc2hpcCA9IG51bGw7IC8vIFdoZXRoZXIgb3Igbm90IGl0cyBvY2N1cHlpbmcgYSBzaGlwXHJcbiAgICB0aGlzLnN0YXR1cyA9ICd1bm9jY3VwaWVkJztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZCgpOyAvLyBhcnJheSBjb250YWluaW5nIGFsbCAxMDAgYmxvY2tzL25vZGVzIFxyXG4gICAgdGhpcy5zaGlwcyA9IHNoaXBzKCk7IC8vIGFycmF5IHdpdGggYWxsIHRoZSBzaGlwcyBpbiB0aGUgZ2FtZWJvYXJkLiBUaGVyZSdzIDEwIG9mIHRoZW1cclxuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xyXG4gICAgdGhpcy5zaGlwc1N1bmsgPSBbXTtcclxuICAgIHRoaXMucGxhY2VTaGlwcyA9IGZ1bmN0aW9uKCkgeyAvLyBwbGFjZXMgdGhlIHNoaXBzIG9uIHRoZSBib2FyZCByYW5kb21seVxyXG4gICAgICAgIGxldCBvY2N1cGllZCA9IFtdOyAvLyB0aGlzIGFycmF5IHdpbGwgbGF0ZXIgY29udGFpbiBhbGwgbm9kZXMgYmVpbmcgb2NjdXBpZWQgYnkgc2hpcHNcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaG9zZW5EaXJlY3Rpb24gPSBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07IC8vIENob29zZSBiZXR3ZWVuIGhvcml6b250YWwgYW5kIHZlcnRpY2FsXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ib2FyZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDEpXTsgLy8gY2hvb3NlIHJhbmRvbSBub2RlIGZyb20gYm9hcmRcclxuICAgICAgICAgICAgd2hpbGUoIW5vZGUgfHwgIShub2RlLnBvc1swXSA8PSAoMTAgLSB0aGlzLnNoaXBzW2ldLmxlbmd0aCkgKyAxKSB8fCBoZWxwZXIobm9kZSwgdGhpcy5zaGlwc1tpXS5sZW5ndGgsIHRoaXMuYm9hcmQsIGNob3NlbkRpcmVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2hpbGUgbG9vcCBjaGVja3MgZm9yIHdoZW4gb3VyIG5vZGUgaXMgbnVsbCwgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2UgZm9yIG91ciBzaGlwIHRvIGZpbGwgaW4gdGhlIHNwZWNpZmllZCBub2RlcyxcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBmb3Igd2hlbiB0aGUgdXBjb21pbmcgbm9kZXMgYXJlIG9jY3VwaWVkIG9yIG5vdC5cclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZW4gb25lIG9mIHRoZXNlIGNvbmRpdGlvbnMgYXJlIHRydWUsIG91ciBub2RlIHdpbGwga2VlcCBvbiBjaGFuZ2luZyB1bnRpbCB3ZSBoYXZlIHRoZSBpZGVhbCBub2RlIHdoaWNoIGFsb25nIHdpdGggaXRzXHJcbiAgICAgICAgICAgICAgICAvLyB1cGNvbWluZyBub2RlcywgY2FuIGZpdCB0aGUgc2hpcCBhbmQgYWxvbmcgd2l0aCBpdHMgdXBjb21pbmcgbm9kZXMgYW5kIHN1cnJvdW5kaW5nIG5vZGVzLCBhcmUgdW5vY2N1cGllZFxyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuYm9hcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV4dE5vZGVzID0gZmluZE5leHROb2Rlcyhub2RlLCB0aGlzLnNoaXBzW2ldLmxlbmd0aCwgdGhpcy5ib2FyZCwgY2hvc2VuRGlyZWN0aW9uKTsgLy8gYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbmV4dCBub2RlcyBpbmNsdWRpbmcgb3VyIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgICAgICBub2RlLnN0YXR1cyA9ICdvY2N1cGllZCc7XHJcbiAgICAgICAgICAgIG9jY3VwaWVkLnB1c2gobmV4dE5vZGVzKTtcclxuICAgICAgICAgICAgbmV4dE5vZGVzLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnN0YXR1cyA9ICdvY2N1cGllZCc7XHJcbiAgICAgICAgICAgICAgICBuLnNoaXAgPSB0aGlzLnNoaXBzW2ldOyAvLyBhbGwgbm9kZXMgaW4gbmV4dE5vZGVzIHdpbGwgaGF2ZSBhIGxpbmsgdG8gb3VyIHNoaXBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbaV0uY29vcmQucHVzaChuKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNbaV0ubGVuZ3RoID4gMSkgdGhpcy5zaGlwc1tpXS5kaXJlY3Rpb24gPSBjaG9zZW5EaXJlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWxsIHRoZSBjb2RlIGJlbG93IG1ha2VzIHN1cmUgdGhhdCBhbGwgdGhlIG5vZGVzIHN1cnJvdW5kaW5nIG91ciBzaGlwIGJlY29tZSBvY2N1cGllZCBzbyB0aGF0IHRoZXkgYXJlbid0IGF2YWlsYWJsZSBmb3IgdXNlIGJ5XHJcbiAgICAgICAgICAgICAgICAvLyBhbnkgb3RoZXIgc2hpcHNcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgY29kZSBpcyBhcHBsaWVkIG9uIGVhY2ggaW5kaXZpZHVhbCBub2RlIHRoYXQgaGFzIGEgbGluayB0byBvdXIgc2hpcFxyXG4gICAgICAgICAgICAgICAgbGV0IHRvcCwgdG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbSwgYm90dG9tTGVmdCwgYm90dG9tUmlnaHQsIGxlZnQsIHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdG9wID0gdGhpcy5ib2FyZC5maW5kKHkgPT4geS5wb3NbMF0gPT09IG4ucG9zWzBdICYmIHkucG9zWzFdID4gbi5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYodG9wKSB0b3BMZWZ0ID0gdGhpcy5ib2FyZC5maW5kKHkgPT4gdG9wLnBvc1swXSAtIHkucG9zWzBdID09IDEgJiYgeS5wb3NbMV0gPT09IHRvcC5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYodG9wKSB0b3BSaWdodCA9IHRoaXMuYm9hcmQuZmluZCh5ID0+IHkucG9zWzBdID4gdG9wLnBvc1swXSAmJiB5LnBvc1sxXSA9PT0gdG9wLnBvc1sxXSk7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLmJvYXJkLmZpbmQoeSA9PiB5LnBvc1swXSA9PT0gbi5wb3NbMF0gJiYgbi5wb3NbMV0gLSB5LnBvc1sxXSA9PSAxKTtcclxuICAgICAgICAgICAgICAgIGlmKGJvdHRvbSkgYm90dG9tTGVmdCA9IHRoaXMuYm9hcmQuZmluZCh5ID0+IGJvdHRvbS5wb3NbMF0gLSB5LnBvc1swXSA9PSAxICYmIHkucG9zWzFdID09PSBib3R0b20ucG9zWzFdKTtcclxuICAgICAgICAgICAgICAgIGlmKGJvdHRvbSkgYm90dG9tUmlnaHQgPSB0aGlzLmJvYXJkLmZpbmQoeSA9PiB5LnBvc1swXSA+IGJvdHRvbS5wb3NbMF0gJiYgeS5wb3NbMV0gPT09IGJvdHRvbS5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuYm9hcmQuZmluZCh5ID0+IG4ucG9zWzBdIC0geS5wb3NbMF0gPT0gMSAmJiB5LnBvc1sxXSA9PT0gbi5wb3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmJvYXJkLmZpbmQoeSA9PiB5LnBvc1swXSA+IG4ucG9zWzBdICYmIHkucG9zWzFdID09PSBuLnBvc1sxXSk7XHJcbiAgICAgICAgICAgICAgICBbdG9wLCB0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tLCBib3R0b21MZWZ0LCBib3R0b21SaWdodCwgbGVmdCwgcmlnaHRdLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodCkgdC5zdGF0dXMgPSAnb2NjdXBpZWQnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2NjdXBpZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHRha2VzIGluIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgXHJcbiAgICAvLyBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC5cclxuICAgIHRoaXMucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uKFt4LCB5XSkgeyAvLyBjb29yZGluYXRlcyBpcyBhbiBhcnJheSBvZiB4IGFuZCB5XHJcbiAgICAgICAgY29uc3Qgbm9kZUF0Q29vcmRpbmF0ZSA9IHRoaXMuYm9hcmQuZmluZChpID0+IGkucG9zWzBdID09PSB4ICYmIGkucG9zWzFdID09PSB5KTtcclxuICAgICAgICBpZihub2RlQXRDb29yZGluYXRlLnNoaXApeyAvLyBpZiB0aGUgbm9kZSBhdCB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGUgaXMgb2NjdXBpZWQgYnkgYSBzaGlwXHJcbiAgICAgICAgICAgIG5vZGVBdENvb3JkaW5hdGUuc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgaWYobm9kZUF0Q29vcmRpbmF0ZS5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNoaXBzLnNwbGljZSh0aGlzLnNoaXBzLmluZGV4T2Yobm9kZUF0Q29vcmRpbmF0ZS5zaGlwKSwgMSk7IC8vIG9uY2UgYSBzaGlwIGhhcyBiZWVuIHN1bmssIGl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBnYW1lYm9hcmQgYXJyYXkgb2Ygc2hpcHNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNTdW5rLnVuc2hpZnQobm9kZUF0Q29vcmRpbmF0ZS5zaGlwKTsgLy8gb25jZSBhIHNoaXAgaGFzIGJlZW4gc3VuaywgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgc2hpcHNTdW5rIGFycmF5XHJcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLnNoaXBzU3Vuay5sZW5ndGggPT0gMTApIHJldHVybiAnQWxsIHNoaXBzIGhhdmUgYmVlbiBkZXN0cm95ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlQXRDb29yZGluYXRlLnNoaXBcclxuICAgICAgICB9ICBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcclxuICAgICAgICAgICAgcmV0dXJuICdtaXNzZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUGxheWVyKCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xyXG4gICAgdGhpcy5ub2Rlc0F0dGFja2VkID0gW107XHJcbiAgICB0aGlzLnNoaXBzRGVzdHJveWVkID0gW107XHJcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIHRoaXMuYXR0YWNrID0gZnVuY3Rpb24oW3gsIHldKSB7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gUGlja3MgYSByYW5kb20gY29vcmRpbmF0ZSB0byBhdHRhY2tcclxuLy8gQ2hlY2tzIGlmIHRoYXQgY29vcmRpbmF0ZSBoYXMgYmVlbiBhdHRhY2tlZCwgaWYgc28sIGNob29zZSBhbm90aGVyIG9uZVxyXG5mdW5jdGlvbiBjb21wdXRlclBsYXkobm9kZXNBdHRhY2tlZCkge1xyXG4gICAgbGV0IHJhbmRvbSA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKV07XHJcbiAgICB3aGlsZShyYW5kb21bMF0gPT0gMCB8fCByYW5kb21bMV0gPT0gMCB8fCBpc0FycmF5SW5BcnJheShub2Rlc0F0dGFja2VkLCByYW5kb20pKSB7XHJcbiAgICAgICAgcmFuZG9tID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpXTtcclxuICAgIH1cclxuICAgIHJldHVybiByYW5kb21cclxufVxyXG5cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgb3VyIGJvYXJkXHJcbmZ1bmN0aW9uIGJvYXJkKCkge1xyXG4gICAgY29uc3QgYXJyID0gW107XHJcbiAgICBmb3IobGV0IHkgPSAxOyB5IDwgMTE7IHkrKykge1xyXG4gICAgICAgIGZvcihsZXQgeCA9IDE7IHggPCAxMTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShbeCwgeV0pO1xyXG4gICAgICAgICAgICBhcnIucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB0byBzZWUgaWYgdGhlIG5leHQgbm9kZXMgYXJlIG9jY3VwaWVkIGJ5IHNoaXBzIG9yIG5vdFxyXG4vLyBJdCByZXR1cm5zIEZhbHNlIGlmIHRoZXkncmUgbm90IG9jY3VwaWVkIGFuZCB0cnVlIGlmIGFueSBvbmUgb2YgdGhlbSBpcyBvY2N1cGllZFxyXG4vLyBUaGUgbGVuZ3RoIHBhcmFtZXRlci9hcmd1bWVudCBpcyByZXNwb25zaWJsZSBmb3IgY2hlY2tpbmcgdGhlIG51bWJlciBvZiB1cGNvbWluZyBub2Rlc1xyXG5mdW5jdGlvbiBoZWxwZXIobm9kZSwgbGVuZ3RoLCBib2FyZCwgZGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgcXVldWUgPSBbbm9kZV07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGlmKHF1ZXVlWzBdLnN0YXR1cyA9PSAndW5vY2N1cGllZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBib2FyZC5maW5kKGkgPT4gaS5wb3NbMF0gPiBxdWV1ZVswXS5wb3NbMF0gJiYgaS5wb3NbMV0gPT09IHF1ZXVlWzBdLnBvc1sxXSk7XHJcbiAgICAgICAgICAgICAgICBpZihuZXh0KSBxdWV1ZS5wdXNoKG5leHQpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHF1ZXVlWzBdLnN0YXR1cyA9PSAndW5vY2N1cGllZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBib2FyZC5maW5kKGkgPT4gaS5wb3NbMF0gPT09IHF1ZXVlWzBdLnBvc1swXSAmJiBpLnBvc1sxXSA+IHF1ZXVlWzBdLnBvc1sxXSk7XHJcbiAgICAgICAgICAgICAgICBpZihuZXh0KSBxdWV1ZS5wdXNoKG5leHQpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbm9kZXMgdGhhdCBjb21lIGFmdGVyIHRoZSBzcGVjaWZpZWQgbm9kZVxyXG4vLyBUaGUgc3BlY2lmaWVkIG5vZGUgaXMgaW5jbHVkZWQgaW4gdGhpcyBhcnJheVxyXG5mdW5jdGlvbiBmaW5kTmV4dE5vZGVzKG5vZGUsIGxlbmd0aCwgYm9hcmQsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IHF1ZXVlID0gW25vZGVdO1xyXG4gICAgbGV0IGFyciA9IFtub2RlXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHROb2RlID0gYm9hcmQuZmluZChpID0+IGkucG9zWzBdID4gcXVldWVbMF0ucG9zWzBdICYmIGkucG9zWzFdID09PSBxdWV1ZVswXS5wb3NbMV0pO1xyXG4gICAgICAgICAgICBhcnIucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHROb2RlID0gYm9hcmQuZmluZChpID0+IGkucG9zWzBdID09PSBxdWV1ZVswXS5wb3NbMF0gJiYgaS5wb3NbMV0gPiBxdWV1ZVswXS5wb3NbMV0pO1xyXG4gICAgICAgICAgICBhcnIucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnIuZmlsdGVyKGkgPT4gaSk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGJ1aWxkIGFsbCBvdXIgc2hpcHMoMTAgb2YgdGhlbSkgYW5kIGhvbGRzIHRoZW0gaW5zaWRlIGFuIGFycmF5XHJcbmZ1bmN0aW9uIHNoaXBzKCkge1xyXG4gICAgY29uc3QgYXJyID0gW107XHJcbiAgICBjb25zdCBhcnIyID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdOyAvLyB0aGVzZSBhcmUgdGhlIGxlbmd0aHMgb2YgYWxsIHRoZSBzaGlwcyBpbiB0aGUgb25saW5lIGdhbWUsIEJhdHRsZXNoaXBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBTaGlwKGFycjJbaV0pO1xyXG4gICAgICAgIGFyci5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG59XHJcblxyXG5cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gc3RhcnQgdGhlIGdhbWVcclxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcclxuICAgIGxldCBwbGF5ZXIyID0gbmV3IFBsYXllcigpO1xyXG4gICAgcGxheWVyMS5wbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgICBwbGF5ZXIyLnBsYXllcj0gJ3BsYXllcjInO1xyXG4gICAgbGV0IHBsYXllcjFTaGlwcyA9IHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcHMoKTsgLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbm9kZXMgb2NjdXBpZWQgYnkgc2hpcHNcclxuICAgIGxldCBwbGF5ZXIyU2hpcHMgPSBwbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXBzKCk7IC8vIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5vZGVzIG9jY3VwaWVkIGJ5IHNoaXBzXHJcbiAgICBwbGFjZShwbGF5ZXIxU2hpcHMpOyAvLyBwbGFjZXMgdGhlIHNoaXBzIG9uIHRoZSB3ZWJwYWdlXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxU2hpcHMpO1xyXG5cclxuICAgIGVsZW1zKCkucmFuZG9taXplUGxheWVyMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFNoaXBzID0gWy4uLmVsZW1zKCkuc2hpcHNdOyAvLyBnZXQgYWxsIHNoaXBzKGRpdnMpIGZyb20gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgYWxsU2hpcHMuZm9yRWFjaChpID0+IGkucmVtb3ZlKCkpOyAvLyByZW1vdmUgYWxsIHNoaXBzIGZyb20gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmQgPSBib2FyZCgpOyAvLyBjcmVhdGUgYSBuZXcgYm9hcmQgd2l0aCB1bm9jY3VwaWVkIG5vZGVzXHJcbiAgICAgICAgcGxheWVyMVNoaXBzID0gcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwcygpO1xyXG4gICAgICAgIHBsYWNlKHBsYXllcjFTaGlwcyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgbyhwbGF5ZXIxLCBlbGVtcygpLnNoaXBOYW1lc1AxKTtcclxuICAgIG8ocGxheWVyMiwgZWxlbXMoKS5zaGlwTmFtZXNQMik7XHJcblxyXG4gICAgcmV0dXJuIHtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIxU2hpcHMsIHBsYXllcjJTaGlwc31cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnQoY29tUGxheWVkKSB7XHJcbiAgICBjb21QbGF5ZWQuc3RhdHVzID0gZmFsc2U7XHJcbiAgICBlbGVtcygpLnBsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtcygpLnJlc2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBlbGVtcygpLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsYWNlIHRoZSBzaGlwc1wiO1xyXG4gICAgZWxlbXMoKS5yYW5kb21pemVQbGF5ZXIxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgWy4uLmVsZW1zKCkucGxheWVyMVNoaXBOYW1lc10uZm9yRWFjaCh3ID0+IHcucmVtb3ZlKCkpO1xyXG4gICAgWy4uLmVsZW1zKCkucGxheWVyMlNoaXBOYW1lc10uZm9yRWFjaCh3ID0+IHcucmVtb3ZlKCkpO1xyXG4gICAgWy4uLmVsZW1zKCkuc2hpcHNdLmZvckVhY2goaSA9PiBpLnJlbW92ZSgpKTtcclxuICAgIFsuLi5lbGVtcygpLmFsbE5vZGVzXS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgIGkudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ3knKTtcclxuICAgICAgICBpLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2VkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0IxREVGNic7XHJcbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJyk7XHJcbiAgICB9KTtcclxuICAgIG9iai5nYW1lTCA9IGdhbWVMb29wKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0FycmF5SW5BcnJheShhcnIsIGl0ZW0pe1xyXG4gICAgdmFyIGl0ZW1fYXNfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XHJcbiAgIFxyXG4gICAgdmFyIGNvbnRhaW5zID0gYXJyLnNvbWUoZnVuY3Rpb24oZWxlKXtcclxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1fYXNfc3RyaW5nO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29udGFpbnM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcGxheSwgU2hpcCwgTm9kZSwgR2FtZWJvYXJkLCBpc0FycmF5SW5BcnJheSwgXHJcbiAgICByZXN0YXJ0LCBnYW1lTG9vcCwgZmluZE5leHROb2Rlcywgc2hpcHMsIGhlbHBlciwgYm9hcmQsIGNvbXB1dGVyUGxheSwgUGxheWVyIFxyXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7IGdhbWVMb29wLCBwbGF5IH0gZnJvbSAnLi9wbGF5JztcclxuaW1wb3J0IHsgZWxlbXMgfSBmcm9tICcuL2RvbSc7XHJcblxyXG5sZXQgb2JqID0ge2dhbWVMOiBnYW1lTG9vcCgpfVxyXG5cclxuZWxlbXMoKS5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheSk7IC8vIHdoZW4gd2UgY2xpY2sgb24gcGxheSwgdGhlIGZvbGxvd2luZyBoYXBwZW5zXHJcblxyXG5leHBvcnQgeyBvYmogfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9