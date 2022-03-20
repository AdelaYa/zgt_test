var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_anime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/anime */ \"./src/js/components/anime.js\");\n/* harmony import */ var _components_anime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_anime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mask */ \"./src/js/components/mask.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/js/components/modal.js\");\n/* harmony import */ var _components_simplebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/simplebar */ \"./src/js/components/simplebar.js\");\n/* harmony import */ var _components_change_city__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/change_city */ \"./src/js/components/change_city.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/base.js?");

/***/ }),

/***/ "./src/js/components/anime.js":
/*!************************************!*\
  !*** ./src/js/components/anime.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/js/components/change_city.js":
/*!******************************************!*\
  !*** ./src/js/components/change_city.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/js/components/modal.js\");\n/* harmony import */ var _make_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make_request */ \"./src/js/components/make_request.js\");\n\n\n\n\n\n\n\n\nvar changeCity = /*#__PURE__*/function () {\n  function changeCity(citiesList) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, changeCity);\n\n    this.cities = citiesList.querySelectorAll('.modal__item');\n    this.url = citiesList.dataset.url;\n    this.initEvents();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(changeCity, [{\n    key: \"initEvents\",\n    value: function () {\n      var _initEvents = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n        var _this = this;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.cities.forEach(function (item) {\n                  item.addEventListener('click', function (event) {\n                    event.preventDefault();\n\n                    _this.makeChange(event.target);\n\n                    _this.sendRequest(event.target);\n                  });\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function initEvents() {\n        return _initEvents.apply(this, arguments);\n      }\n\n      return initEvents;\n    }()\n  }, {\n    key: \"makeChange\",\n    value: function () {\n      var _makeChange = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(city) {\n        var newCity, phone, address, modal;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                newCity = city.dataset.city;\n                phone = city.dataset.phone;\n                address = city.dataset.address;\n                document.querySelectorAll('[data-change=\"city\"]').forEach(function (item) {\n                  item.innerText = newCity;\n                });\n                document.querySelectorAll('[data-change=\"phone\"]').forEach(function (item) {\n                  item.innerText = phone;\n                });\n                document.querySelectorAll('[data-change=\"address\"]').forEach(function (item) {\n                  item.innerText = address;\n                });\n                document.querySelectorAll('[data-phone-change]').forEach(function (item) {\n                  item.href = \"tel:\".concat(phone.replaceAll(/[^0-9]/g, ''));\n                });\n                modal = document.querySelector('.modal.open');\n                modal = new _modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"](modal);\n                modal.closeModal();\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function makeChange(_x) {\n        return _makeChange.apply(this, arguments);\n      }\n\n      return makeChange;\n    }()\n  }, {\n    key: \"sendRequest\",\n    value: function () {\n      var _sendRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(city) {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                data = {\n                  'city': city.getAttribute('data-city')\n                };\n                data = '?' + new URLSearchParams(data).toString();\n                _context3.next = 4;\n                return Object(_make_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('get', city.getAttribute('href') + data, data);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function sendRequest(_x2) {\n        return _sendRequest.apply(this, arguments);\n      }\n\n      return sendRequest;\n    }()\n  }]);\n\n  return changeCity;\n}();\n\nvar modalCity = document.querySelector('#modal-city');\nvar citiesList = modalCity.querySelector('.modal__list');\nnew changeCity(citiesList);\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/change_city.js?");

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelectorAll('.custom-checkbox').forEach(function (item) {\n  var inputParent = item.parentElement;\n  var input = inputParent.querySelector('input[type=checkbox]');\n\n  if (input) {\n    input.addEventListener('change', function () {\n      item.classList.toggle('active');\n    });\n  }\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/form.js?");

/***/ }),

/***/ "./src/js/components/form/send.js":
/*!****************************************!*\
  !*** ./src/js/components/form/send.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _make_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../make_request */ \"./src/js/components/make_request.js\");\n\n\n\n\n\n\nvar SendForm = /*#__PURE__*/function () {\n  function SendForm(form, formType) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SendForm);\n\n    this.form = form;\n    this.formType = formType;\n    this.initEvents();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SendForm, [{\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this = this;\n\n      this.form.addEventListener('submit', function (event) {\n        console.log('submit');\n        event.preventDefault();\n\n        _this.hideErrors();\n\n        _this.startLoading();\n\n        _this.sendRequest();\n      });\n    }\n  }, {\n    key: \"sendRequest\",\n    value: function () {\n      var _sendRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n        var Form_Data, json;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                Form_Data = new FormData(this.form);\n                _context.next = 3;\n                return Object(_make_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.form.method, this.form.action, Form_Data);\n\n              case 3:\n                json = _context.sent;\n                this.stopLoading();\n                this.validate(json);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function sendRequest() {\n        return _sendRequest.apply(this, arguments);\n      }\n\n      return sendRequest;\n    }()\n  }, {\n    key: \"validate\",\n    value: function validate(json) {\n      var response = JSON.parse(json);\n\n      if (response.errors) {\n        for (var field in response.fields) {\n          var elem = this.form.querySelector(\".\".concat(field));\n          console.log(elem.querySelector('.error-field span'));\n          elem.querySelector('.error-field span').textContent = response.fields[field];\n        }\n      } else {\n        this.finish();\n      }\n    }\n  }, {\n    key: \"hideErrors\",\n    value: function hideErrors() {\n      this.form.querySelectorAll('.error-field span').forEach(function (elem) {\n        elem.textContent = '';\n      });\n    }\n  }, {\n    key: \"resetInputs\",\n    value: function resetInputs() {\n      this.form.querySelectorAll('.contact-field').forEach(function (elem) {\n        elem.classList.remove('active');\n        elem.querySelector('input').value = '';\n      });\n      this.form.querySelectorAll('.custom-file').forEach(function (elem) {\n        elem.classList.remove('active');\n        elem.querySelector('input').value = '';\n      });\n    }\n  }, {\n    key: \"startLoading\",\n    value: function startLoading() {\n      this.form.classList.add('loading');\n    }\n  }, {\n    key: \"stopLoading\",\n    value: function stopLoading() {\n      this.form.classList.remove('loading');\n    }\n  }, {\n    key: \"finish\",\n    value: function finish() {\n      var _this2 = this;\n\n      this.form.classList.add('success');\n      this.resetInputs();\n      setTimeout(function () {\n        _this2.form.classList.remove('success');\n      }, 5000);\n    }\n  }]);\n\n  return SendForm;\n}();\n\ndocument.querySelectorAll('.callback__form').forEach(function (item) {\n  new SendForm(item, 'callback');\n});\ndocument.querySelectorAll('.form__consultation').forEach(function (item) {\n  new SendForm(item, 'consultation');\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/form/send.js?");

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function logoMove(event) {\n  if (window.screen.width <= 1200) {\n    var logo = document.querySelector('.header__logo');\n    var headerContainer = document.querySelector('.header > .container');\n    headerContainer.prepend(logo);\n  } else {\n    var _logo = document.querySelector('.header__logo');\n\n    var headerContent = document.querySelector('.header__content');\n    headerContent.prepend(_logo);\n  }\n}\n\nfunction toggleMobileMenu(event) {\n  document.querySelectorAll('.header__burger, .header__content').forEach(function (item) {\n    item.classList.toggle('active');\n  });\n  document.querySelector('html').classList.toggle('lock');\n  document.querySelector('header').classList.toggle('open-menu');\n}\n\nif (document.querySelectorAll('.header__logo, .header, .header__content').length) {\n  logoMove();\n  window.addEventListener('resize', logoMove);\n}\n\nvar burger = document.querySelector('.header__burger');\n\nif (burger) {\n  burger.addEventListener('click', toggleMobileMenu);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/header.js?");

/***/ }),


/***/ "./src/js/components/make_request.js":
/*!*******************************************!*\
  !*** ./src/js/components/make_request.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeRequest; });\n/**\r\n *\r\n * @param {string} method - method request\r\n * @param {string} url - url request\r\n * @param {{}} data - object request\r\n * @returns response\r\n */\nfunction makeRequest(method, url, data) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open(method, url);\n    request.send(data);\n\n    request.onload = function () {\n      if (this.status >= 200 && this.status < 300) {\n        resolve(request.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: request.statusText\n        });\n      }\n    };\n\n    request.onerror = function () {\n      reject({\n        status: this.status,\n        statusText: request.statusText\n      });\n    };\n  });\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/make_request.js?");

/***/ }),


/***/ "./src/js/components/mask.js":
/*!***********************************!*\
  !*** ./src/js/components/mask.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ \"./node_modules/inputmask/index.js\");\n/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mask = new inputmask__WEBPACK_IMPORTED_MODULE_0___default.a({\n  mask: '(+7 (999) 999-99-99)|(8 (999) 999-99-99)',\n  // placeholder: \"\",\n  showMaskOnHover: false,\n  showMaskOnFocus: false\n});\n\nfunction removeInputIcon(event) {\n  var input = event.target;\n  input.classList.toggle('focus');\n}\n\ndocument.querySelectorAll('[type=\"tel\"]').forEach(function (item) {\n  mask.mask(item);\n  item.pattern = '(\\\\+[0-9]{1}|8)[\\\\W\\\\w]+[0-9]{3}[\\\\W\\\\w]+[0-9]{3}-[0-9]{2}-[0-9]{2}';\n});\ndocument.querySelectorAll('form input').forEach(function (item) {\n  item.addEventListener('focus', removeInputIcon);\n  item.addEventListener('blur', removeInputIcon);\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/mask.js?");

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(modal) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Modal);\n\n    this.modal = modal;\n    this.body = document.querySelector('body');\n    this.modalLock = document.querySelectorAll('.modal-lock');\n    this.modalClose = modal.querySelectorAll('.modal-close');\n    this.openModal = this.openModal.bind(this);\n    this.closeModalOnclickNotModal = this.closeModalOnclickNotModal.bind(this);\n    this.initEvents();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Modal, [{\n    key: \"initEvents\",\n    value: function () {\n      var _initEvents = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n        var _this = this;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.modal.addEventListener('click', this.closeModalOnclickNotModal);\n                this.modalClose.forEach(function (item) {\n                  item.addEventListener('click', function (event) {\n                    event.preventDefault();\n\n                    _this.closeModal();\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function initEvents() {\n        return _initEvents.apply(this, arguments);\n      }\n\n      return initEvents;\n    }()\n  }, {\n    key: \"closeModalOnclickNotModal\",\n    value: function () {\n      var _closeModalOnclickNotModal = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (event.target.closest('.modal__content')) {\n                  _context2.next = 4;\n                  break;\n                }\n\n                event.preventDefault();\n                _context2.next = 4;\n                return this.closeModal();\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function closeModalOnclickNotModal(_x) {\n        return _closeModalOnclickNotModal.apply(this, arguments);\n      }\n\n      return closeModalOnclickNotModal;\n    }()\n  }, {\n    key: \"closeModal\",\n    value: function () {\n      var _closeModal = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                this.modal.classList.remove('open');\n                _context3.next = 3;\n                return this.bodyUnLock();\n\n              case 3:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function closeModal() {\n        return _closeModal.apply(this, arguments);\n      }\n\n      return closeModal;\n    }()\n  }, {\n    key: \"openModal\",\n    value: function () {\n      var _openModal = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                this.modal.classList.add('open');\n                _context4.next = 3;\n                return this.bodyLock();\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function openModal() {\n        return _openModal.apply(this, arguments);\n      }\n\n      return openModal;\n    }()\n  }, {\n    key: \"bodyUnLock\",\n    value: function () {\n      var _bodyUnLock = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                this.modalLock.forEach(function (item) {\n                  item.style.paddingRight = '0px';\n                });\n                this.body.style.paddingRight = '0px';\n                this.body.classList.remove('lock');\n\n              case 3:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n\n      function bodyUnLock() {\n        return _bodyUnLock.apply(this, arguments);\n      }\n\n      return bodyUnLock;\n    }()\n  }, {\n    key: \"bodyLock\",\n    value: function () {\n      var _bodyLock = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {\n        var lockPaddingValue;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';\n                this.modalLock.forEach(function (item) {\n                  item.style.paddingRight = lockPaddingValue;\n                });\n                this.body.style.paddingRight = lockPaddingValue;\n                this.body.classList.add('lock');\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, this);\n      }));\n\n      function bodyLock() {\n        return _bodyLock.apply(this, arguments);\n      }\n\n      return bodyLock;\n    }()\n  }]);\n\n  return Modal;\n}();\n\n\ndocument.querySelectorAll('[data-modal]').forEach(function (item) {\n  item.addEventListener('click', function (event) {\n    event.preventDefault();\n    var modalId = event.target.getAttribute('data-modal');\n    var modal = document.querySelector(\"#\".concat(modalId));\n    modal = new Modal(modal);\n    modal.openModal();\n  });\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/modal.js?");

/***/ }),

/***/ "./src/js/components/product_card.js":
/*!*******************************************!*\
  !*** ./src/js/components/product_card.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sendForm(event) {\n  event.preventDefault();\n  var form = event.target;\n  var button = form.querySelector('button[type=\"submit\"]');\n  button.classList.toggle('ordered');\n\n  if (button.classList.contains('ordered')) {\n    button.innerText = 'Отменить';\n  } else {\n    button.innerText = 'Заказать';\n  }\n}\n\nfunction validNumberInput(event) {\n  var charCode = event.which ? event.which : event.keyCode;\n\n  if (charCode === 46 || charCode > 31 && (charCode < 48 || charCode > 57)) {\n    event.preventDefault();\n  }\n\n  return true;\n}\n\nvar productForm = document.querySelectorAll('.product-form');\nproductForm.forEach(function (item) {\n  item.addEventListener('submit', sendForm);\n  var input = item.querySelectorAll('input[type=\"number\"]').forEach(function (input) {\n    input.addEventListener('keydown', validNumberInput);\n  });\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/product_card.js?");

/***/ }),

/***/ "./src/js/components/simplebar.js":
/*!****************************************!*\
  !*** ./src/js/components/simplebar.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ \"./node_modules/simplebar/dist/simplebar.esm.js\");\n // import 'simplebar/dist/simplebar.css';\n\ndocument.querySelectorAll('[data-simplebar=\"simple\"]').forEach(function (item) {\n  var simpleBar = new simplebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, {// option1: value1,\n    // option2: value2\n  });\n  simpleBar.recalculate();\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/simplebar.js?");

/***/ }),

/***/ "./src/js/components/video.js":
/*!************************************!*\
  !*** ./src/js/components/video.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (document.querySelector('.video')) {\n  // load script for youtube iframe api\n  var loadScript = function loadScript() {\n    var tag = document.createElement('script');\n    tag.src = \"https://www.youtube.com/iframe_api\";\n    var firstScriptTag = document.getElementsByTagName('script')[0];\n    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n  }; // find video\n\n\n  var findVideo = function findVideo() {\n    var video = document.querySelector('.video');\n    setupVideo(video);\n  }; // adding div to place a video\n\n\n  var addPlayerHtml = function addPlayerHtml(wrapper, elementID) {\n    var div = document.createElement('div');\n    div.id = elementID;\n    div.classList.add('video__media');\n    wrapper.append(div);\n  }; // find image, button and video link and remove him from block video.\n\n\n  var setupVideo = function setupVideo(video) {\n    var media = video.querySelector('.video__media');\n    var button = video.querySelector('.video__button');\n    var videoId = parseMediaURL(video.getAttribute('data-video')); // added event click for load video\n\n    video.addEventListener('click', function () {\n      addPlayerHtml(video, 'player');\n      loadVideo('player', videoId);\n      media.remove();\n      button.remove();\n    }); // video.classList.add('video--enabled');\n  }; // find id from url\n\n\n  var parseMediaURL = function parseMediaURL(src) {\n    var regexp = /watch\\?v=([A-z0-9-_\\+]*)/i;\n    var match = src.match(regexp);\n    return match[1];\n  }; // load video with autoplay for start video after click\n\n\n  var loadVideo = function loadVideo(elementId, videoId) {\n    window.YT.ready(function () {\n      new window.YT.Player(elementId, {\n        videoId: videoId,\n        playerVars: {\n          'autoplay': 1\n        },\n        events: {\n          'onReady': onPlayerReady\n        }\n      });\n    });\n  }; // play video\n\n\n  var onPlayerReady = function onPlayerReady(event) {\n    event.target.playVideo();\n  };\n\n  loadScript();\n  findVideo();\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/video.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/base.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form */ \"./src/js/components/form.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product_card */ \"./src/js/components/product_card.js\");\n/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_product_card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/image_gallery */ \"./src/js/components/image_gallery.js\");\n/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/video */ \"./src/js/components/video.js\");\n/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_video__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/map */ \"./src/js/components/map.js\");\n/* harmony import */ var _components_form_send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form/send */ \"./src/js/components/form/send.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Adelya\\PycharmProjects\\\Maxima\\django\\zgt_test\\src\\js\\index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/multi_./src/js/index.js?");

/***/ })

/******/ });