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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./container/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_verifForm__ = __webpack_require__("./tools/verifForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loader_spinner__ = __webpack_require__("react-loader-spinner");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loader_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loader_spinner__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\Contact.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var API_MAIL = "https://apiresume.herokuapp.com/mail";

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "sendEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var _this$state = _this.state,
            name = _this$state.name,
            email = _this$state.email,
            textarea = _this$state.textarea;
        event.preventDefault();

        _this.setState({
          loading: true
        });

        var error = Object(__WEBPACK_IMPORTED_MODULE_3__tools_verifForm__["a" /* default */])(name, email, textarea);

        if (Object.keys(error).length > 0) {
          _this.setState({
            error: error,
            loading: false
          });

          return false;
        }

        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(API_MAIL, {
          email: email,
          subject: "Email from guitar-website",
          text: "".concat(name, " wants to tell you that... ").concat(textarea),
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        }).then(function (response) {
          _this.setState({
            loading: false,
            success: "Your e-mail has been successfully sent",
            error: {
              name: "",
              email: "",
              textarea: "",
              global: ""
            }
          });

          setTimeout(function () {
            _this.setState(_defineProperty({
              success: ""
            }, "success", ""));
          });
        }).catch(function (err) {
          var global = err.message === "Network Error" ? "Your message could not be sent please check your internet connection" : "Error while sending your message";

          _this.setState({
            error: _objectSpread({}, _this.state.error, {
              global: global
            }),
            loading: false
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState({
          name: e.target.value,
          error: _objectSpread({}, _this.state.error, {
            name: ""
          })
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState({
          email: e.target.value,
          error: _objectSpread({}, _this.state.error, {
            email: ""
          })
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleTextArea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState({
          textarea: e.target.value,
          error: _objectSpread({}, _this.state.error, {
            textarea: ""
          })
        });
      }
    });
    _this.state = {
      name: "",
      email: "",
      textarea: "",
      success: "",
      loading: false,
      error: {
        name: "",
        email: "",
        textarea: "",
        global: ""
      }
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          textarea = _state.textarea,
          loading = _state.loading,
          error = _state.error,
          success = _state.success;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-3117394983"
      }, "\u2022 Keep in Touch \u2022"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-3117394983" + " " + "underline"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "contact_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "My name is",
        value: name,
        onChange: this.handleName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "email",
        placeholder: "My e-mail is",
        value: email,
        onChange: this.handleEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.email)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        value: textarea,
        onChange: this.handleTextArea,
        placeholder: "My message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.textarea)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-3117394983"
      }, loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-3117394983" + " " + "loader-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loader_spinner___default.a, {
        type: "Rings",
        color: "black",
        height: "50",
        width: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.sendEmail,
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3117394983"
      }, "SEND")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-3117394983" + " " + "success"
      }, success), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.global))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3117394983",
        css: "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);html.jsx-3117394983{font-family:\"Montserrat\",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body.jsx-3117394983{background:#f2f3eb;}button.jsx-3117394983{overflow:visible;}.success.jsx-3117394983{color:green;}button.jsx-3117394983,select.jsx-3117394983{text-transform:none;}.error.jsx-3117394983{color:red;}button.jsx-3117394983,input.jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{color:#5a5a5a;font:inherit;margin:0;}input.jsx-3117394983{line-height:normal;}textarea.jsx-3117394983{overflow:auto;}#container.jsx-3117394983{border:solid 3px #474544;max-width:768px;margin:60px auto;position:relative;}form.jsx-3117394983{padding:37.5px;}h1.jsx-3117394983{color:#474544;font-size:32px;font-weight:700;-webkit-letter-spacing:7px;-moz-letter-spacing:7px;-ms-letter-spacing:7px;letter-spacing:7px;text-align:center;text-transform:uppercase;}.underline.jsx-3117394983{border-bottom:solid 2px #474544;margin:-0.512em auto;width:80px;}.email.jsx-3117394983{float:right;width:45%;}input[type=\"text\"].jsx-3117394983,[type=\"email\"].jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{background:none;border:none;border-bottom:solid 2px #474544;color:#474544;font-size:1em;font-weight:400;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:0em 0 1.875em 0;padding:0 0 0.875em 0;text-transform:uppercase;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}input[type=\"text\"].jsx-3117394983:focus,[type=\"email\"]:focus.jsx-3117394983,textarea.jsx-3117394983:focus{outline:none;padding:0 0 0.875em 0;}textarea.jsx-3117394983{line-height:150%;height:150px;resize:none;width:100%;}.jsx-3117394983::-webkit-input-placeholder{color:#474544;}.jsx-3117394983:-moz-placeholder{color:#474544;opacity:1;}.jsx-3117394983::-moz-placeholder{color:#474544;opacity:1;}.jsx-3117394983:-ms-input-placeholder{color:#474544;}#form_button.jsx-3117394983{background:none;border:solid 2px #474544;color:#474544;cursor:pointer;display:inline-block;font-family:\"Helvetica\",Arial,sans-serif;font-size:0.875em;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;outline:none;height:60px;width:175px;text-transform:uppercase;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#form_button.jsx-3117394983:hover{background:#474544;color:#f2f3eb;}@media screen and (max-width:768px){#container.jsx-3117394983{margin:20px auto;width:95%;}}@media screen and (max-width:480px){h1.jsx-3117394983{font-size:26px;}.underline.jsx-3117394983{width:68px;}#form_button.jsx-3117394983{padding:15px 25px;}}@media screen and (max-width:420px){h1.jsx-3117394983{font-size:18px;}.underline.jsx-3117394983{width:53px;}input[type=\"text\"].jsx-3117394983,[type=\"email\"].jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{font-size:0.875em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSW9CLEFBRWtGLEFBR3pCLEFBTXpCLEFBSUYsQUFJTCxBQUtRLEFBR1YsQUFPSSxBQU1LLEFBSUwsQUFJVyxBQU9WLEFBSUQsQUFTa0IsQUFNcEIsQUFRSSxBQTBCSCxBQUtJLEFBT0gsQUFJQSxBQUtBLEFBS0EsQUFJRSxBQXVCRyxBQU1BLEFBT0YsQUFJSixBQUlPLEFBTUgsQUFJSixBQU9PLFVBM0t0QixDQXVKRSxBQWNBLENBN0tGLEFBdURZLENBa0NZLENBMUVULEFBVWYsQUFlaUIsQUE2RGpCLEFBSVksQUFLQSxBQUtaLENBL0VBLEFBdUhFLEFBY0EsQ0ExR1ksQUF3RGEsQ0EzSDNCLEFBa0dlLEFBc0RELENBZVosQUFpQkEsQ0E1TEYsQUE2QkEsQUF5SGdCLENBekloQixFQW1EQSxFQWtEQSxBQUtBLENBbEZrQixFQWJQLEFBcUlULENBckZnQyxDQXZCaEIsQ0FzREosRUE5Q1MsQ0E4RnZCLEVBckRBLENBekVBLEtBYW1CLEFBMEZILENBdElZLEFBOEdmLEdBdERRLFFBUVIsQUErQ2IsRUF3QmlCLEdBMUZHLEVBa0NKLElBZGhCLElBaEVnQyxFQXVJVCxJQXhEUCxFQWxDaEIsWUFtQ2tCLEdBd0QyQixPQXZJN0MsTUFnRnFCLDRCQXdERCxNQWpGQSxZQWtGRCxNQWpGUSxXQWtGWixjQWpGZixnQkF3QnlCLHVCQUNELHFCQXlEQyxDQXhERSx5QkFDZCxXQUNtQiw4QkFDSCwyQkFDRCxLQXFEUCxxQkFwRE0seUJBQ0gsc0JBQ00seUJBbURmLEdBbERZLFVBbURiLFlBQ0EsR0FuRFksU0FvREMsZUFuREYsVUFvREssYUFuRFIsZUFvREsseUJBQ0QsUUFwRDFCLGdCQXFEeUIsdUJBQ0gsZ0RBQ3RCIiwiZmlsZSI6ImNvbnRhaW5lclxcQ29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB2ZXJpZkZvcm0gZnJvbSBcIi4uL3Rvb2xzL3ZlcmlmRm9ybVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xyXG5cclxuY29uc3QgQVBJX01BSUwgPSBcImh0dHBzOi8vYXBpcmVzdW1lLmhlcm9rdWFwcC5jb20vbWFpbFwiO1xyXG5cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICB0ZXh0YXJlYTogXCJcIixcclxuICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICB0ZXh0YXJlYTogXCJcIixcclxuICAgICAgICBnbG9iYWw6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNlbmRFbWFpbCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHRleHRhcmVhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgZXJyb3IgPSB2ZXJpZkZvcm0obmFtZSwgZW1haWwsIHRleHRhcmVhKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcikubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoQVBJX01BSUwsIHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogXCJFbWFpbCBmcm9tIGd1aXRhci13ZWJzaXRlXCIsXHJcbiAgICAgICAgdGV4dDogYCR7bmFtZX0gd2FudHMgdG8gdGVsbCB5b3UgdGhhdC4uLiAke3RleHRhcmVhfWAsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBcIllvdXIgZS1tYWlsIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzZW50XCIsXHJcbiAgICAgICAgICBlcnJvcjogeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgdGV4dGFyZWE6IFwiXCIsIGdsb2JhbDogXCJcIiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VjY2VzczogXCJcIiwgc3VjY2VzczogXCJcIiB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2xvYmFsID1cclxuICAgICAgICAgIGVyci5tZXNzYWdlID09PSBcIk5ldHdvcmsgRXJyb3JcIlxyXG4gICAgICAgICAgICA/IFwiWW91ciBtZXNzYWdlIGNvdWxkIG5vdCBiZSBzZW50IHBsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cIlxyXG4gICAgICAgICAgICA6IFwiRXJyb3Igd2hpbGUgc2VuZGluZyB5b3VyIG1lc3NhZ2VcIjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGVycm9yOiB7IC4uLnRoaXMuc3RhdGUuZXJyb3IsIGdsb2JhbCB9LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTmFtZSA9IGUgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgZXJyb3I6IHsgLi4udGhpcy5zdGF0ZS5lcnJvciwgbmFtZTogXCJcIiB9XHJcbiAgICB9KTtcclxuICBoYW5kbGVFbWFpbCA9IGUgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiB7IC4uLnRoaXMuc3RhdGUuZXJyb3IsIGVtYWlsOiBcIlwiIH1cclxuICAgIH0pO1xyXG4gIGhhbmRsZVRleHRBcmVhID0gZSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRleHRhcmVhOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgZXJyb3I6IHsgLi4udGhpcy5zdGF0ZS5lcnJvciwgdGV4dGFyZWE6IFwiXCIgfVxyXG4gICAgfSk7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dGFyZWEsIGxvYWRpbmcsIGVycm9yLCBzdWNjZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gaWQ9XCJmb3JtXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPiZidWxsOyBLZWVwIGluIFRvdWNoICZidWxsOzwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiIC8+XHJcblxyXG4gICAgICAgICAgPGZvcm0gaWQ9XCJjb250YWN0X2Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgbmFtZSBpc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBlLW1haWwgaXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHRhcmVhfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3IudGV4dGFyZWF9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtX2J1dHRvblwiIGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciB0eXBlPVwiUmluZ3NcIiBjb2xvcj1cImJsYWNrXCIgaGVpZ2h0PVwiNTBcIiB3aWR0aD1cIjUwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VuZEVtYWlsfSBpZD1cImZvcm1fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNFTkRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e3N1Y2Nlc3N9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvci5nbG9iYWx9PC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDApO1xyXG5cclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2ViO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzcuNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMC41MTJlbSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICBbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMGVtIDAgMS44NzVlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMC44NzVlbSAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAgICAgICAgIFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjg3NWVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjZm9ybV9idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjZm9ybV9idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2YyZjNlYjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNmb3JtX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgICBbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXX0= */\n/*@ sourceURL=container\\Contact.js */"
      }));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

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

/***/ "./pages/contact.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_Contact__ = __webpack_require__("./container/Contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_components_Footer__ = __webpack_require__("./container/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);

var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\contact.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var Contact = function Contact(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-430843866"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__container_Header__["a" /* default */], {
    pathname: props.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__container_Contact__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__container_components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "430843866",
    css: "body{font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNPLEFBRzBFLEFBRzFDLGtEQUN2QixXQUhBIiwiZmlsZSI6InBhZ2VzXFxjb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29udGFpbmVyL0hlYWRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb250YWluZXIvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IENvbnRhY3RDb21wb25lbnQgZnJvbSBcIi4uL2NvbnRhaW5lci9Db250YWN0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWRlciBwYXRobmFtZT17cHJvcHMucGF0aG5hbWV9IC8+XHJcbiAgICA8Q29udGFjdENvbXBvbmVudCAvPlxyXG4gICAgPEZvb3RlciAvPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuQ29udGFjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHsgcGF0aG5hbWU6IGNvbnRleHQucGF0aG5hbWUgfTtcclxufTtcclxuXHJcbkNvbnRhY3QucHJvcFR5cGVzID0ge1xyXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\contact.js */"
  }));
};

Contact.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              pathname: context.pathname
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

Contact.propTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./tools/verifForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var verifForm = function verifForm(name, email, textarea) {
  var error = {};

  if (name.length === 0) {
    error.name = "Please enter your name";
  }

  if (name.length > 16) {
    error.name = "The name you wrotte is too long";
  }

  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    error.email = "Please enter a valid email";
  }

  if (email.length === 0) {
    error.email = "Please enter your email";
  }

  if (!textarea) {
    error.textarea = "Please enter your message";
  }

  return error;
};

/* harmony default export */ __webpack_exports__["a"] = (verifForm);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contact.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "react-loader-spinner":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map