/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ilogger.ts":
/*!************************!*\
  !*** ./src/Ilogger.ts ***!
  \************************/
/*! exports provided: LogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogType\", function() { return LogType; });\nvar LogType;\r\n(function (LogType) {\r\n    LogType[LogType[\"Console\"] = 0] = \"Console\";\r\n    LogType[LogType[\"Alert\"] = 1] = \"Alert\";\r\n    LogType[LogType[\"Toast\"] = 2] = \"Toast\";\r\n})(LogType || (LogType = {}));\r\n\n\n//# sourceURL=webpack:///./src/Ilogger.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ilogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ilogger */ \"./src/Ilogger.ts\");\n/* harmony import */ var _logger_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger-factory */ \"./src/logger-factory.ts\");\n\r\n\r\nvar logger = _logger_factory__WEBPACK_IMPORTED_MODULE_1__[\"LoggerFactory\"].Create(_Ilogger__WEBPACK_IMPORTED_MODULE_0__[\"LogType\"].Console);\r\nlogger.log(\"Hello Typescript!\");\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/console-logger.ts":
/*!*******************************!*\
  !*** ./src/console-logger.ts ***!
  \*******************************/
/*! exports provided: ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConsoleLogger\", function() { return ConsoleLogger; });\nvar ConsoleLogger = /** @class */ (function () {\r\n    function ConsoleLogger() {\r\n    }\r\n    ConsoleLogger.prototype.log = function (message) {\r\n        console.log(message);\r\n    };\r\n    return ConsoleLogger;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/console-logger.ts?");

/***/ }),

/***/ "./src/logger-factory.ts":
/*!*******************************!*\
  !*** ./src/logger-factory.ts ***!
  \*******************************/
/*! exports provided: LoggerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoggerFactory\", function() { return LoggerFactory; });\n/* harmony import */ var _Ilogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ilogger */ \"./src/Ilogger.ts\");\n/* harmony import */ var _console_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console-logger */ \"./src/console-logger.ts\");\n\r\n\r\nvar LoggerFactory = /** @class */ (function () {\r\n    function LoggerFactory() {\r\n    }\r\n    LoggerFactory.Create = function (logType) {\r\n        switch (logType) {\r\n            case _Ilogger__WEBPACK_IMPORTED_MODULE_0__[\"LogType\"].Console:\r\n                return new _console_logger__WEBPACK_IMPORTED_MODULE_1__[\"ConsoleLogger\"]();\r\n            default:\r\n                return new _console_logger__WEBPACK_IMPORTED_MODULE_1__[\"ConsoleLogger\"]();\r\n        }\r\n    };\r\n    return LoggerFactory;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/logger-factory.ts?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\Programming\\typescript\\learn2\\src\\app.ts */\"./src/app.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/app.ts?");

/***/ })

/******/ });