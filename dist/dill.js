(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dill", [], factory);
	else if(typeof exports === 'object')
		exports["dill"] = factory();
	else
		root["dill"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

  var D = new Date(date);
  var T = {
    "y+": D.getFullYear(),
    "M+": D.getMonth() + 1,
    "d+": D.getDate(),
    "h+": D.getHours(),
    "m+": D.getMinutes(),
    "s+": D.getSeconds(),
    "q+": Math.floor((D.getMonth() + 3) / 3),
    "S": D.getMilliseconds()
  };
  return {
    D: D,
    format: function format(fmt) {
      for (var k in T) {
        if (RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, T[k]);
        }
      }
      return fmt;
    }
  };
};

/***/ }),

/***/ "./src/group.js":
/*!**********************!*\
  !*** ./src/group.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (array, subGroupLength) {
    var index = 0;
    var newArray = [];

    while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }

    return newArray;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = exports.isElement = exports.isDate = exports.isNumber = exports.isError = exports.isObject = exports.isArray = exports.isEmpty = exports.group = exports.date = undefined;

var _date = __webpack_require__(/*! ./date */ "./src/date.js");

var _date2 = _interopRequireDefault(_date);

var _group = __webpack_require__(/*! ./group */ "./src/group.js");

var _group2 = _interopRequireDefault(_group);

var _isEmpty = __webpack_require__(/*! ./is-empty */ "./src/is-empty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isArray = __webpack_require__(/*! ./is-array */ "./src/is-array.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(/*! ./is-object */ "./src/is-object.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _isError = __webpack_require__(/*! ./is-error */ "./src/is-error.js");

var _isError2 = _interopRequireDefault(_isError);

var _isNumber = __webpack_require__(/*! ./is-number */ "./src/is-number.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isDate = __webpack_require__(/*! ./is-date */ "./src/is-date.js");

var _isDate2 = _interopRequireDefault(_isDate);

var _isElement = __webpack_require__(/*! ./is-element */ "./src/is-element.js");

var _isElement2 = _interopRequireDefault(_isElement);

var _isBoolean = __webpack_require__(/*! ./is-boolean */ "./src/is-boolean.js");

var _isBoolean2 = _interopRequireDefault(_isBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.date = _date2.default;
exports.group = _group2.default;
exports.isEmpty = _isEmpty2.default;
exports.isArray = _isArray2.default;
exports.isObject = _isObject2.default;
exports.isError = _isError2.default;
exports.isNumber = _isNumber2.default;
exports.isDate = _isDate2.default;
exports.isElement = _isElement2.default;
exports.isBoolean = _isBoolean2.default;

/***/ }),

/***/ "./src/is-array.js":
/*!*************************!*\
  !*** ./src/is-array.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = Array.isArray || function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};

exports.default = isArray;

/***/ }),

/***/ "./src/is-boolean.js":
/*!***************************!*\
  !*** ./src/is-boolean.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBoolean = function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
};

exports.default = isBoolean;

/***/ }),

/***/ "./src/is-date.js":
/*!************************!*\
  !*** ./src/is-date.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isDate = function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]';
};

exports.default = isDate;

/***/ }),

/***/ "./src/is-element.js":
/*!***************************!*\
  !*** ./src/is-element.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isElement = function isElement(value) {
  return value !== undefined && typeof HTMLElement !== 'undefined' && value instanceof HTMLElement && value.nodeType === 1;
};

exports.default = isElement;

/***/ }),

/***/ "./src/is-empty.js":
/*!*************************!*\
  !*** ./src/is-empty.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;
function isEmpty(obj) {
  if (obj === null) {
    return true;
  }
  if (obj === undefined) {
    return true;
  }
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }
  for (var key in obj) {
    if (obj.hasOwnProperty) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./src/is-error.js":
/*!*************************!*\
  !*** ./src/is-error.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isError = function isError(value) {
  return Object.prototype.toString.call(value) === '[object Error]';
};

exports.default = isError;

/***/ }),

/***/ "./src/is-number.js":
/*!**************************!*\
  !*** ./src/is-number.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isNumber = function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]';
};

exports.default = isNumber;

/***/ }),

/***/ "./src/is-object.js":
/*!**************************!*\
  !*** ./src/is-object.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.default = isObject;

/***/ })

/******/ });
});
//# sourceMappingURL=dill.js.map