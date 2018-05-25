module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return videos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers__ = __webpack_require__("@feathersjs/feathers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client__ = __webpack_require__("@feathersjs/rest-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);



var app = __WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers___default()();
var restClient = __WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client___default()("http://localhost:3030");
app.configure(restClient.axios(__WEBPACK_IMPORTED_MODULE_2_axios___default.a));
var videos = app.service("videos");

/* unused harmony default export */ var _unused_webpack_default_export = (app);

/***/ }),

/***/ "./container/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Button__ = __webpack_require__("./container/components/Button.js");
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\Header.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BUTTONS = [{
  id: 1,
  text: "Home",
  href: "/"
}, {
  id: 2,
  text: "Tabs",
  href: "/tabs"
}, {
  id: 3,
  text: "Contact",
  href: "/contact"
}];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var pathname = this.props.pathname;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-31658598" + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-31658598"
      }, "Aur\xE9lien \xE0 la guitare"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-31658598" + " " + "container-button"
      }, BUTTONS.map(function (button) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Button__["a" /* default */], {
          selected: button.href === pathname,
          key: button.id,
          href: button.href,
          route: button.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, button.text);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "31658598",
        css: ".header.jsx-31658598{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #e056fd;}.container-button.jsx-31658598{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDVyxBQUc0QixBQUtBLDBFQUpnQixBQUsvQiwySEFKa0MsZ0NBQ2xDIiwiZmlsZSI6ImNvbnRhaW5lclxcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuY29uc3QgQlVUVE9OUyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRleHQ6IFwiSG9tZVwiLFxyXG4gICAgaHJlZjogXCIvXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGV4dDogXCJUYWJzXCIsXHJcbiAgICBocmVmOiBcIi90YWJzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGV4dDogXCJDb250YWN0XCIsXHJcbiAgICBocmVmOiBcIi9jb250YWN0XCJcclxuICB9XHJcbl07XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5BdXLDqWxpZW4gw6AgbGEgZ3VpdGFyZTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItYnV0dG9uXCI+XHJcbiAgICAgICAgICB7QlVUVE9OUy5tYXAoYnV0dG9uID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtidXR0b24uaHJlZiA9PT0gcGF0aG5hbWV9XHJcbiAgICAgICAgICAgICAga2V5PXtidXR0b24uaWR9XHJcbiAgICAgICAgICAgICAgaHJlZj17YnV0dG9uLmhyZWZ9XHJcbiAgICAgICAgICAgICAgcm91dGU9e2J1dHRvbi5ocmVmfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2J1dHRvbi50ZXh0fVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwNTZmZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=container\\Header.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Header.propTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./container/VideoMain.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\VideoMain.js";


 // add a type of tab on thebackend either URL or PDF

var VideoMain = function VideoMain(_ref) {
  var width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      src = _ref.src,
      description = _ref.description,
      author = _ref.author,
      tab = _ref.tab;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]]) + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]]) + " " + "title-container"
  }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("iframe", {
    title: title,
    src: src,
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]])
  }, "Your browser does not support iframes.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]]) + " " + "description-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]])
  }, description)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]]) + " " + "author-download"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]]) + " " + "author"
  }, "Author: ", author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]])
  }, "Download the tab:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: tab,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4122717289", [width, width, width]]])
  }, " " + tab))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4122717289",
    css: ".container.__jsx-style-dynamic-selector{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title-container.__jsx-style-dynamic-selector{text-align:center;}.description-container.__jsx-style-dynamic-selector{width:".concat(width, "px;max-width:").concat(width, "px;text-align:justify;}.author-download.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:").concat(width, "px;}.author.__jsx-style-dynamic-selector{font-style:italic;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcVmlkZW9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHd0IsQUFNSyxBQUdtQixBQUt4QixBQUtLLGFBbEJMLEtBTWYsQUFhQSxtQkFWMkMscUNBS1gsSUFKWCxTQVRHLFVBVXhCLG9FQVRxQix3QkFha0IscUNBQ3ZDLGdDQWJBIiwiZmlsZSI6ImNvbnRhaW5lclxcVmlkZW9NYWluLmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8vIGFkZCBhIHR5cGUgb2YgdGFiIG9uIHRoZWJhY2tlbmQgZWl0aGVyIFVSTCBvciBQREZcclxuXHJcbmNvbnN0IFZpZGVvTWFpbiA9ICh7IHdpZHRoLCBoZWlnaHQsIHRpdGxlLCBzcmMsIGRlc2NyaXB0aW9uLCBhdXRob3IsIHRhYiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIj57dGl0bGV9PC9oMT5cclxuICAgICAgPGlmcmFtZSB0aXRsZT17dGl0bGV9IHNyYz17c3JjfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cclxuICAgICAgICA8cD5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpZnJhbWVzLjwvcD5cclxuICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWRvd25sb2FkXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXV0aG9yXCI+QXV0aG9yOiB7YXV0aG9yfTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIERvd25sb2FkIHRoZSB0YWI6XHJcbiAgICAgICAgICA8YSBocmVmPXt0YWJ9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICB7XCIgXCIgKyB0YWJ9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6ICR7d2lkdGh9cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXV0aG9yLWRvd25sb2FkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVmlkZW9NYWluLnByb3BUeXBlcyA9IHtcclxuICBhdXRob3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0YWI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9NYWluO1xyXG4iXX0= */\n/*@ sourceURL=container\\VideoMain.js */"),
    dynamic: [width, width, width]
  }));
};

VideoMain.propTypes = {
  author: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  src: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  tab: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (VideoMain);

/***/ }),

/***/ "./container/components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Button.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          href = _props.href,
          selected = _props.selected;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-641674755" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-641674755"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-641674755" + " " + ((selected ? "selected-button" : "button") || "")
      }, children))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "641674755",
        css: ".container.jsx-641674755{margin-left:10px;margin-right:10px;}.selected-button.jsx-641674755{border-bottom:2px solid #9a4c8e;}p.jsx-641674755{font-size:26px;color:#9a4c8e;}.button.jsx-641674755:hover{border-bottom:1px solid #e056fd;}a.jsx-641674755{height:80px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcY29tcG9uZW50c1xcQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUdnQyxBQUllLEFBR2pCLEFBSWlCLEFBR3BCLFlBQ2EsR0FQWCxFQVBJLFlBUXBCLEdBSkEsQUFPQSxHQVZBLEVBY0EiLCJmaWxlIjoiY29udGFpbmVyXFxjb21wb25lbnRzXFxCdXR0b24uanMiLCJzb3VyY2VSb290IjoiQzpcXFJlYWN0XFxuZXh0LWd1aXRhci13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhyZWYsIHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZWxlY3RlZCA/IFwic2VsZWN0ZWQtYnV0dG9uXCIgOiBcImJ1dHRvblwifT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzlhNGM4ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5YTRjOGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMDU2ZmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xlYW5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIl19 */\n/*@ sourceURL=container\\components\\Button.js */"
      }));
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  href: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  selected: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.boolean
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./container/components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Footer.js";


var DatasFooter = [{
  href: "https://my-resume-aurelien.herokuapp.com/",
  src: "/static/images/resume.png",
  alt: "online cv"
}, {
  href: "https://www.linkedin.com/in/aur%C3%A9lien-brachet-146556141/",
  src: "/static/images/linkedin-logo.png",
  alt: "linkedin"
}, {
  href: "https://www.instagram.com/orel_bip/",
  src: "/static/images/instagram-logo.png",
  alt: "instagram"
}];

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-2492281614" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2492281614"
  }, "You can also contact me here :"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2492281614"
  }, DatasFooter.map(function (data) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: data.href,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      className: "jsx-2492281614"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: data.src,
      alt: data.alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      className: "jsx-2492281614"
    }));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2492281614",
    css: ".container.jsx-2492281614{height:150px;border-top:1px solid #e056fd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-2492281614{cursor:pointer;margin-left:15px;margin-right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCTyxBQUd3QixBQVFFLGFBUGMsRUFRWixpQkFDQyxVQVJMLFFBU2Ysa0VBUndCLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJjb250YWluZXJcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEYXRhc0Zvb3RlciA9IFtcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vbXktcmVzdW1lLWF1cmVsaWVuLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvcmVzdW1lLnBuZ1wiLFxyXG4gICAgYWx0OiBcIm9ubGluZSBjdlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hdXIlQzMlQTlsaWVuLWJyYWNoZXQtMTQ2NTU2MTQxL1wiLFxyXG4gICAgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2xpbmtlZGluLWxvZ28ucG5nXCIsXHJcbiAgICBhbHQ6IFwibGlua2VkaW5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29yZWxfYmlwL1wiLFxyXG4gICAgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2luc3RhZ3JhbS1sb2dvLnBuZ1wiLFxyXG4gICAgYWx0OiBcImluc3RhZ3JhbVwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8aDI+WW91IGNhbiBhbHNvIGNvbnRhY3QgbWUgaGVyZSA6PC9oMj5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtEYXRhc0Zvb3Rlci5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgPGEgaHJlZj17ZGF0YS5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnNyY30gYWx0PXtkYXRhLmFsdH0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTA1NmZkO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=container\\components\\Footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./container/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Layout.js";

var style = {
  margin: 20,
  padding: 20,
  border: "1px solid black"
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.children);
};

/* unused harmony default export */ var _unused_webpack_default_export = (Layout);

/***/ }),

/***/ "./pages/video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_Header__ = __webpack_require__("./container/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_components_Layout__ = __webpack_require__("./container/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_VideoMain__ = __webpack_require__("./container/VideoMain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__container_components_Footer__ = __webpack_require__("./container/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api__ = __webpack_require__("./api.js");

var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\video.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Video = function Video(_ref) {
  var _React$createElement;

  var video = _ref.video,
      pathname = _ref.pathname;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3973917943"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__container_Header__["a" /* default */], {
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__container_VideoMain__["a" /* default */], (_React$createElement = {
    author: video.author,
    height: 400,
    width: 700,
    title: video.title,
    src: video.video
  }, _defineProperty(_React$createElement, "title", video.title), _defineProperty(_React$createElement, "description", video.description), _defineProperty(_React$createElement, "tab", "http://hjg.com.ar/ghibli/musica/mononoke/"), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 14
  }), _React$createElement)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__container_components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3973917943",
    css: "body{font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx2aWRlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHNEUsQUFHMUMsa0RBQ3ZCLFdBSEEiLCJmaWxlIjoicGFnZXNcXHZpZGVvLmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29udGFpbmVyL0hlYWRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb250YWluZXIvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IFZpZGVvTWFpbiBmcm9tIFwiLi4vY29udGFpbmVyL1ZpZGVvTWFpblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb250YWluZXIvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgdmlkZW9zIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5cclxuY29uc3QgVmlkZW8gPSAoeyB2aWRlbywgcGF0aG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgPFZpZGVvTWFpblxyXG4gICAgICAgIGF1dGhvcj17dmlkZW8uYXV0aG9yfVxyXG4gICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgIHdpZHRoPXs3MDB9XHJcbiAgICAgICAgdGl0bGU9e3ZpZGVvLnRpdGxlfVxyXG4gICAgICAgIHNyYz17dmlkZW8udmlkZW99XHJcbiAgICAgICAgdGl0bGU9e3ZpZGVvLnRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXt2aWRlby5kZXNjcmlwdGlvbn1cclxuICAgICAgICB0YWI9XCJodHRwOi8vaGpnLmNvbS5hci9naGlibGkvbXVzaWNhL21vbm9ub2tlL1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblZpZGVvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHZpZGVvcy5maW5kKHsgcXVlcnk6IHsgX2lkOiBpZCB9IH0pO1xyXG4gIHJldHVybiB7IHZpZGVvOiByZXMuZGF0YVswXSwgcGF0aG5hbWU6IGNvbnRleHQucGF0aG5hbWUgfTtcclxufTtcclxuXHJcblZpZGVvLnByb3BUeXBlcyA9IHtcclxuICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHZpZGVvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xyXG4iXX0= */\n/*@ sourceURL=pages\\video.js */"
  }));
};

Video.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, res;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_9__api__["a" /* videos */].find({
              query: {
                _id: id
              }
            });

          case 3:
            res = _context.sent;
            return _context.abrupt("return", {
              video: res.data[0],
              pathname: context.pathname
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

Video.propTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  video: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/video.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@feathersjs/feathers":
/***/ (function(module, exports) {

module.exports = require("@feathersjs/feathers");

/***/ }),

/***/ "@feathersjs/rest-client":
/***/ (function(module, exports) {

module.exports = require("@feathersjs/rest-client");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=video.js.map