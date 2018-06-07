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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_containers_Header__ = __webpack_require__("./src/containers/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_containers_components_Video__ = __webpack_require__("./src/containers/components/Video.js");
var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Videos =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Videos, _React$Component);

  function Videos() {
    _classCallCheck(this, Videos);

    return _possibleConstructorReturn(this, (Videos.__proto__ || Object.getPrototypeOf(Videos)).apply(this, arguments));
  }

  _createClass(Videos, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          videos = _props.videos,
          pathname = _props.pathname,
          err = _props.err;

      if (err.message !== '' && err.status !== '') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, "Error status: ", err.status, " ", err.message);
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-958385827"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-958385827"
      }, "Aur\xE9lien guitar"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-958385827"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-958385827"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_containers_Header__["a" /* default */], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-958385827" + " " + "video-container"
      }, videos.map(function (video) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_containers_components_Video__["a" /* default */], {
          key: video._id,
          id: video._id,
          height: 400,
          width: 600,
          href: "/video?id=".concat(video._id),
          author: video.author,
          title: video.title,
          src: video.video,
          description: video.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "958385827",
        css: "body{font-family:'Lucida Sans Unicode','Lucida Grande',sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}.video-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFcsQUFHOEUsQUFHMUMsQUFHUixrREFGZixXQUhBLGFBTXdCLDhFQUNILDZGQUNOLGFBQ2YiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvY29udGFpbmVycy9IZWFkZXInO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vc3JjL2NvbnRhaW5lcnMvY29tcG9uZW50cy9WaWRlbyc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBhdGhuYW1lOiBzdHJpbmcsXHJcbiAgdmlkZW9zOiBBcnJheTxhbnk+LFxyXG4gIGVycjoge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgc3RhdHVzOiBzdHJpbmdcclxuICB9XHJcbn07XHJcblxyXG5jbGFzcyBWaWRlb3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcGF0aG5hbWUsIHN0b3JlIH0pIHtcclxuICAgIHJldHVybiB7IHBhdGhuYW1lIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHZpZGVvcywgcGF0aG5hbWUsIGVyciB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChlcnIubWVzc2FnZSAhPT0gJycgJiYgZXJyLnN0YXR1cyAhPT0gJycpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgRXJyb3Igc3RhdHVzOiB7ZXJyLnN0YXR1c30ge2Vyci5tZXNzYWdlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5BdXLDqWxpZW4gZ3VpdGFyPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAgICAgIHt2aWRlb3MubWFwKHZpZGVvID0+IChcclxuICAgICAgICAgICAgPFZpZGVvXHJcbiAgICAgICAgICAgICAga2V5PXt2aWRlby5faWR9XHJcbiAgICAgICAgICAgICAgaWQ9e3ZpZGVvLl9pZH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICB3aWR0aD17NjAwfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2AvdmlkZW8/aWQ9JHt2aWRlby5faWR9YH1cclxuICAgICAgICAgICAgICBhdXRob3I9e3ZpZGVvLmF1dGhvcn1cclxuICAgICAgICAgICAgICB0aXRsZT17dmlkZW8udGl0bGV9XHJcbiAgICAgICAgICAgICAgc3JjPXt2aWRlby52aWRlb31cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dmlkZW8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdmlkZW9zIH0pID0+ICh7XHJcbiAgdmlkZW9zOiB2aWRlb3MudmlkZW9zLFxyXG4gIGVycjogdmlkZW9zLmVyclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShWaWRlb3MpO1xyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var pathname = _ref.pathname,
          store = _ref.store;
      return {
        pathname: pathname
      };
    }
  }]);

  return Videos;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var videos = _ref2.videos;
  return {
    videos: videos.videos,
    err: videos.err
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps)(Videos));

/***/ }),

/***/ "./src/containers/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Button__ = __webpack_require__("./src/containers/components/Button.js");
var _jsxFileName = "C:\\React\\next-guitar-website\\src\\containers\\Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BUTTONS = [{
  id: 1,
  text: 'Home',
  href: '/'
}, {
  id: 2,
  text: 'Tabs',
  href: '/tabs'
}, {
  id: 3,
  text: 'Contact',
  href: '/contact'
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
          lineNumber: 31
        },
        className: "jsx-31658598" + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-31658598"
      }, "Aur\xE9lien \xE0 la guitare"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-31658598" + " " + "container-button"
      }, BUTTONS.map(function (button) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Button__["a" /* default */], {
          selected: button.href === pathname,
          key: button.id,
          href: button.href,
          route: button.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, button.text);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "31658598",
        css: ".header.jsx-31658598{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #e056fd;}.container-button.jsx-31658598{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29udGFpbmVyc1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDVyxBQUc0QixBQUtBLDBFQUpnQixBQUsvQiwySEFKa0MsZ0NBQ2xDIiwiZmlsZSI6InNyY1xcY29udGFpbmVyc1xcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBhdGhuYW1lOiBzdHJpbmdcclxufTtcclxuXHJcbmNvbnN0IEJVVFRPTlMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0ZXh0OiAnSG9tZScsXHJcbiAgICBocmVmOiAnLydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGV4dDogJ1RhYnMnLFxyXG4gICAgaHJlZjogJy90YWJzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0ZXh0OiAnQ29udGFjdCcsXHJcbiAgICBocmVmOiAnL2NvbnRhY3QnXHJcbiAgfVxyXG5dO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPkF1csOpbGllbiDDoCBsYSBndWl0YXJlPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1idXR0b25cIj5cclxuICAgICAgICAgIHtCVVRUT05TLm1hcChidXR0b24gPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2J1dHRvbi5ocmVmID09PSBwYXRobmFtZX1cclxuICAgICAgICAgICAgICBrZXk9e2J1dHRvbi5pZH1cclxuICAgICAgICAgICAgICBocmVmPXtidXR0b24uaHJlZn1cclxuICAgICAgICAgICAgICByb3V0ZT17YnV0dG9uLmhyZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YnV0dG9uLnRleHR9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTA1NmZkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXItYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=src\\containers\\Header.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/containers/components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\React\\next-guitar-website\\src\\containers\\components\\Button.js";




var Button = function Button(_ref) {
  var children = _ref.children,
      href = _ref.href,
      selected = _ref.selected;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-146635416" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-146635416"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-146635416" + " " + ((selected ? 'selected-button' : 'button') || "")
  }, children))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "146635416",
    css: ".container.jsx-146635416{margin-left:10px;margin-right:10px;}.selected-button.jsx-146635416{border-bottom:2px solid #9a4c8e;}p.jsx-146635416{font-size:26px;color:#9a4c8e;}.button.jsx-146635416:hover{border-bottom:1px solid #e056fd;}a.jsx-146635416{height:80px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29udGFpbmVyc1xcY29tcG9uZW50c1xcQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCTyxBQUc0QixBQUllLEFBR2pCLEFBSWlCLEFBR3BCLFlBQ2EsR0FQWCxFQVBJLFlBUXBCLEdBSkEsQUFPQSxHQVZBLEVBY0EiLCJmaWxlIjoic3JjXFxjb250YWluZXJzXFxjb21wb25lbnRzXFxCdXR0b24uanMiLCJzb3VyY2VSb290IjoiQzpcXFJlYWN0XFxuZXh0LWd1aXRhci13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IHN0cmluZyxcclxuICBocmVmOiBzdHJpbmcsXHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBocmVmLCBzZWxlY3RlZCB9OiBQcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzZWxlY3RlZCA/ICdzZWxlY3RlZC1idXR0b24nIDogJ2J1dHRvbid9PntjaGlsZHJlbn08L3A+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlbGVjdGVkLWJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzlhNGM4ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzlhNGM4ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwNTZmZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdfQ== */\n/*@ sourceURL=src\\containers\\components\\Button.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./src/containers/components/Video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\React\\next-guitar-website\\src\\containers\\components\\Video.js";




var Video = function Video(_ref) {
  var id = _ref.id,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      src = _ref.src,
      description = _ref.description,
      href = _ref.href,
      author = _ref.author;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-492981028" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    as: "/video/".concat(id),
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-492981028" + " " + "title"
  }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("iframe", {
    title: title,
    src: src,
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: "jsx-492981028"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-492981028"
  }, "Your browser does not support iframes.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "492981028",
    css: ".container.jsx-492981028{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;}.title.jsx-492981028{text-align:center;}.title.jsx-492981028:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29udGFpbmVyc1xcY29tcG9uZW50c1xcVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUd5QixBQU9FLEFBR0gsZUFDakIsQ0FWZSxFQU9mLHdFQU53Qiw4RUFDSCw2RkFDQyxvQkFDdEIiLCJmaWxlIjoic3JjXFxjb250YWluZXJzXFxjb21wb25lbnRzXFxWaWRlby5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBhdXRob3I6IHN0cmluZyxcclxuICBpZDogc3RyaW5nLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBzcmM6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIGhyZWY6IHN0cmluZ1xyXG59O1xyXG5cclxuY29uc3QgVmlkZW8gPSAoe1xyXG4gIGlkLFxyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICB0aXRsZSxcclxuICBzcmMsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaHJlZixcclxuICBhdXRob3JcclxufTogUHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPExpbmsgYXM9e2AvdmlkZW8vJHtpZH1gfSBocmVmPXtocmVmfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8aWZyYW1lIHRpdGxlPXt0aXRsZX0gc3JjPXtzcmN9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxyXG4gICAgICA8cD5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpZnJhbWVzLjwvcD5cclxuICAgIDwvaWZyYW1lPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZTpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcclxuIl19 */\n/*@ sourceURL=src\\containers\\components\\Video.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map