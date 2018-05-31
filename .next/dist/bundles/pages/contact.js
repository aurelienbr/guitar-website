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

  function Contact() {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this));
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
          lineNumber: 104
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-3117394983"
      }, "\u2022 Keep in Touch \u2022"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-3117394983" + " " + "underline"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "contact_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "My name is",
        value: name,
        onChange: this.handleName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "email",
        placeholder: "My e-mail is",
        value: email,
        onChange: this.handleEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.email)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        value: textarea,
        onChange: this.handleTextArea,
        placeholder: "My message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.textarea)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-3117394983"
      }, loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-3117394983" + " " + "loader-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loader_spinner___default.a, {
        type: "Rings",
        color: "black",
        height: "50",
        width: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.sendEmail,
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-3117394983"
      }, "SEND")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-3117394983" + " " + "success"
      }, success), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.global))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3117394983",
        css: "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);html.jsx-3117394983{font-family:\"Montserrat\",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body.jsx-3117394983{background:#f2f3eb;}button.jsx-3117394983{overflow:visible;}.success.jsx-3117394983{color:green;}button.jsx-3117394983,select.jsx-3117394983{text-transform:none;}.error.jsx-3117394983{color:red;}button.jsx-3117394983,input.jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{color:#5a5a5a;font:inherit;margin:0;}input.jsx-3117394983{line-height:normal;}textarea.jsx-3117394983{overflow:auto;}#container.jsx-3117394983{border:solid 3px #474544;max-width:768px;margin:60px auto;position:relative;}form.jsx-3117394983{padding:37.5px;}h1.jsx-3117394983{color:#474544;font-size:32px;font-weight:700;-webkit-letter-spacing:7px;-moz-letter-spacing:7px;-ms-letter-spacing:7px;letter-spacing:7px;text-align:center;text-transform:uppercase;}.underline.jsx-3117394983{border-bottom:solid 2px #474544;margin:-0.512em auto;width:80px;}.email.jsx-3117394983{float:right;width:45%;}input[type=\"text\"].jsx-3117394983,[type=\"email\"].jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{background:none;border:none;border-bottom:solid 2px #474544;color:#474544;font-size:1em;font-weight:400;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:0em 0 1.875em 0;padding:0 0 0.875em 0;text-transform:uppercase;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}input[type=\"text\"].jsx-3117394983:focus,[type=\"email\"]:focus.jsx-3117394983,textarea.jsx-3117394983:focus{outline:none;padding:0 0 0.875em 0;}textarea.jsx-3117394983{line-height:150%;height:150px;resize:none;width:100%;}.jsx-3117394983::-webkit-input-placeholder{color:#474544;}.jsx-3117394983:-moz-placeholder{color:#474544;opacity:1;}.jsx-3117394983::-moz-placeholder{color:#474544;opacity:1;}.jsx-3117394983:-ms-input-placeholder{color:#474544;}#form_button.jsx-3117394983{background:none;border:solid 2px #474544;color:#474544;cursor:pointer;display:inline-block;font-family:\"Helvetica\",Arial,sans-serif;font-size:0.875em;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;outline:none;height:60px;width:175px;text-transform:uppercase;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#form_button.jsx-3117394983:hover{background:#474544;color:#f2f3eb;}@media screen and (max-width:768px){#container.jsx-3117394983{margin:20px auto;width:95%;}}@media screen and (max-width:480px){h1.jsx-3117394983{font-size:26px;}.underline.jsx-3117394983{width:68px;}#form_button.jsx-3117394983{padding:15px 25px;}}@media screen and (max-width:420px){h1.jsx-3117394983{font-size:18px;}.underline.jsx-3117394983{width:53px;}input[type=\"text\"].jsx-3117394983,[type=\"email\"].jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{font-size:0.875em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSm9CLEFBRWtGLEFBR3pCLEFBTXpCLEFBSUYsQUFJTCxBQUtRLEFBR1YsQUFPSSxBQU1LLEFBSUwsQUFJVyxBQU9WLEFBSUQsQUFTa0IsQUFNcEIsQUFRSSxBQTBCSCxBQUtJLEFBT0gsQUFJQSxBQUtBLEFBS0EsQUFJRSxBQXVCRyxBQU1BLEFBT0YsQUFJSixBQUlPLEFBTUgsQUFJSixBQU9PLFVBM0t0QixDQXVKRSxBQWNBLENBN0tGLEFBdURZLENBa0NZLENBMUVULEFBVWYsQUFlaUIsQUE2RGpCLEFBSVksQUFLQSxBQUtaLENBL0VBLEFBdUhFLEFBY0EsQ0ExR1ksQUF3RGEsQ0EzSDNCLEFBa0dlLEFBc0RELENBZVosQUFpQkEsQ0E1TEYsQUE2QkEsQUF5SGdCLENBekloQixFQW1EQSxFQWtEQSxBQUtBLENBbEZrQixFQWJQLEFBcUlULENBckZnQyxDQXZCaEIsQ0FzREosRUE5Q1MsQ0E4RnZCLEVBckRBLENBekVBLEtBYW1CLEFBMEZILENBdElZLEFBOEdmLEdBdERRLFFBUVIsQUErQ2IsRUF3QmlCLEdBMUZHLEVBa0NKLElBZGhCLElBaEVnQyxFQXVJVCxJQXhEUCxFQWxDaEIsWUFtQ2tCLEdBd0QyQixPQXZJN0MsTUFnRnFCLDRCQXdERCxNQWpGQSxZQWtGRCxNQWpGUSxXQWtGWixjQWpGZixnQkF3QnlCLHVCQUNELHFCQXlEQyxDQXhERSx5QkFDZCxXQUNtQiw4QkFDSCwyQkFDRCxLQXFEUCxxQkFwRE0seUJBQ0gsc0JBQ00seUJBbURmLEdBbERZLFVBbURiLFlBQ0EsR0FuRFksU0FvREMsZUFuREYsVUFvREssYUFuRFIsZUFvREsseUJBQ0QsUUFwRDFCLGdCQXFEeUIsdUJBQ0gsZ0RBQ3RCIiwiZmlsZSI6ImNvbnRhaW5lclxcQ29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHZlcmlmRm9ybSBmcm9tIFwiLi4vdG9vbHMvdmVyaWZGb3JtXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XHJcblxyXG5jb25zdCBBUElfTUFJTCA9IFwiaHR0cHM6Ly9hcGlyZXN1bWUuaGVyb2t1YXBwLmNvbS9tYWlsXCI7XHJcblxyXG50eXBlIFByb3BzID0ge307XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIG5hbWU6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHRleHRhcmVhOiBzdHJpbmcsXHJcbiAgc3VjY2Vzczogc3RyaW5nLFxyXG4gIGxvYWRpbmc6IGJvb2xlYW4sXHJcbiAgZXJyb3I6IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGVtYWlsOiBzdHJpbmcsXHJcbiAgICB0ZXh0YXJlYTogc3RyaW5nLFxyXG4gICAgZ2xvYmFsOiBzdHJpbmdcclxuICB9XHJcbn07XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICB0ZXh0YXJlYTogXCJcIixcclxuICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICB0ZXh0YXJlYTogXCJcIixcclxuICAgICAgICBnbG9iYWw6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNlbmRFbWFpbCA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dGFyZWEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICBjb25zdCBlcnJvciA9IHZlcmlmRm9ybShuYW1lLCBlbWFpbCwgdGV4dGFyZWEpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9yKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChBUElfTUFJTCwge1xyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICBzdWJqZWN0OiBcIkVtYWlsIGZyb20gZ3VpdGFyLXdlYnNpdGVcIixcclxuICAgICAgICB0ZXh0OiBgJHtuYW1lfSB3YW50cyB0byB0ZWxsIHlvdSB0aGF0Li4uICR7dGV4dGFyZWF9YCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IFwiWW91ciBlLW1haWwgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnRcIixcclxuICAgICAgICAgIGVycm9yOiB7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCB0ZXh0YXJlYTogXCJcIiwgZ2xvYmFsOiBcIlwiIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzOiBcIlwiLCBzdWNjZXNzOiBcIlwiIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zdCBnbG9iYWwgPVxyXG4gICAgICAgICAgZXJyLm1lc3NhZ2UgPT09IFwiTmV0d29yayBFcnJvclwiXHJcbiAgICAgICAgICAgID8gXCJZb3VyIG1lc3NhZ2UgY291bGQgbm90IGJlIHNlbnQgcGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvblwiXHJcbiAgICAgICAgICAgIDogXCJFcnJvciB3aGlsZSBzZW5kaW5nIHlvdXIgbWVzc2FnZVwiO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IHsgLi4udGhpcy5zdGF0ZS5lcnJvciwgZ2xvYmFsIH0sXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVOYW1lID0gKGU6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiB7IC4uLnRoaXMuc3RhdGUuZXJyb3IsIG5hbWU6IFwiXCIgfVxyXG4gICAgfSk7XHJcbiAgaGFuZGxlRW1haWwgPSAoZTogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiB7IC4uLnRoaXMuc3RhdGUuZXJyb3IsIGVtYWlsOiBcIlwiIH1cclxuICAgIH0pO1xyXG4gIGhhbmRsZVRleHRBcmVhID0gKGU6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGV4dGFyZWE6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBlcnJvcjogeyAuLi50aGlzLnN0YXRlLmVycm9yLCB0ZXh0YXJlYTogXCJcIiB9XHJcbiAgICB9KTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCB0ZXh0YXJlYSwgbG9hZGluZywgZXJyb3IsIHN1Y2Nlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cclxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+JmJ1bGw7IEtlZXAgaW4gVG91Y2ggJmJ1bGw7PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCIgLz5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBpZD1cImNvbnRhY3RfZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBuYW1lIGlzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IGUtbWFpbCBpc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUZXh0QXJlYX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvci50ZXh0YXJlYX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm1fYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJSaW5nc1wiIGNvbG9yPVwiYmxhY2tcIiBoZWlnaHQ9XCI1MFwiIHdpZHRoPVwiNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZW5kRW1haWx9IGlkPVwiZm9ybV9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgU0VORFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57c3VjY2Vzc308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yLmdsb2JhbH08L3A+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYzZWI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzNy41cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IC0wLjUxMmVtIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICAgIFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwZW0gMCAxLjg3NWVtIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjg3NWVtIDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4gICAgICAgICAgW3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuICAgICAgICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAuODc1ZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNmb3JtX2J1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNmb3JtX2J1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjJmM2ViO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2Zvcm1fYnV0dG9uIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICAgIFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdfQ== */\n/*@ sourceURL=container\\Contact.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Button__ = __webpack_require__("./container/components/Button.js");
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
        css: ".header.jsx-31658598{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #e056fd;}.container-button.jsx-31658598{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDVyxBQUc0QixBQUtBLDBFQUpnQixBQUsvQiwySEFKa0MsZ0NBQ2xDIiwiZmlsZSI6ImNvbnRhaW5lclxcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwYXRobmFtZTogc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBCVVRUT05TID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGV4dDogXCJIb21lXCIsXHJcbiAgICBocmVmOiBcIi9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0ZXh0OiBcIlRhYnNcIixcclxuICAgIGhyZWY6IFwiL3RhYnNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0ZXh0OiBcIkNvbnRhY3RcIixcclxuICAgIGhyZWY6IFwiL2NvbnRhY3RcIlxyXG4gIH1cclxuXTtcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5BdXLDqWxpZW4gw6AgbGEgZ3VpdGFyZTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItYnV0dG9uXCI+XHJcbiAgICAgICAgICB7QlVUVE9OUy5tYXAoYnV0dG9uID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtidXR0b24uaHJlZiA9PT0gcGF0aG5hbWV9XHJcbiAgICAgICAgICAgICAga2V5PXtidXR0b24uaWR9XHJcbiAgICAgICAgICAgICAgaHJlZj17YnV0dG9uLmhyZWZ9XHJcbiAgICAgICAgICAgICAgcm91dGU9e2J1dHRvbi5ocmVmfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2J1dHRvbi50ZXh0fVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwNTZmZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=container\\Header.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

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
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Button.js";




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
    className: "jsx-146635416" + " " + ((selected ? "selected-button" : "button") || "")
  }, children))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "146635416",
    css: ".container.jsx-146635416{margin-left:10px;margin-right:10px;}.selected-button.jsx-146635416{border-bottom:2px solid #9a4c8e;}p.jsx-146635416{font-size:26px;color:#9a4c8e;}.button.jsx-146635416:hover{border-bottom:1px solid #e056fd;}a.jsx-146635416{height:80px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcY29tcG9uZW50c1xcQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCTyxBQUc0QixBQUllLEFBR2pCLEFBSWlCLEFBR3BCLFlBQ2EsR0FQWCxFQVBJLFlBUXBCLEdBSkEsQUFPQSxHQVZBLEVBY0EiLCJmaWxlIjoiY29udGFpbmVyXFxjb21wb25lbnRzXFxCdXR0b24uanMiLCJzb3VyY2VSb290IjoiQzpcXFJlYWN0XFxuZXh0LWd1aXRhci13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBzdHJpbmcsXHJcbiAgaHJlZjogc3RyaW5nLFxyXG4gIHNlbGVjdGVkOiBib29sZWFuXHJcbn07XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgaHJlZiwgc2VsZWN0ZWQgfTogUHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgIDxhPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyBcInNlbGVjdGVkLWJ1dHRvblwiIDogXCJidXR0b25cIn0+e2NoaWxkcmVufTwvcD5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOWE0YzhlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIGNvbG9yOiAjOWE0YzhlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTA1NmZkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIl19 */\n/*@ sourceURL=container\\components\\Button.js */"
  }));
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
      lineNumber: 23
    },
    className: "jsx-2492281614" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-2492281614"
  }, "You can also contact me here :"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2492281614"
  }, DatasFooter.map(function (data) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: data.href,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: "jsx-2492281614"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: data.src,
      alt: data.alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      className: "jsx-2492281614"
    }));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2492281614",
    css: ".container.jsx-2492281614{height:150px;border-top:1px solid #e056fd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-2492281614{cursor:pointer;margin-left:15px;margin-right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDTyxBQUd3QixBQVFFLGFBUGMsRUFRWixpQkFDQyxVQVJMLFFBU2Ysa0VBUndCLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJjb250YWluZXJcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEYXRhc0Zvb3RlciA9IFtcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vbXktcmVzdW1lLWF1cmVsaWVuLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvcmVzdW1lLnBuZ1wiLFxyXG4gICAgYWx0OiBcIm9ubGluZSBjdlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hdXIlQzMlQTlsaWVuLWJyYWNoZXQtMTQ2NTU2MTQxL1wiLFxyXG4gICAgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2xpbmtlZGluLWxvZ28ucG5nXCIsXHJcbiAgICBhbHQ6IFwibGlua2VkaW5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29yZWxfYmlwL1wiLFxyXG4gICAgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2luc3RhZ3JhbS1sb2dvLnBuZ1wiLFxyXG4gICAgYWx0OiBcImluc3RhZ3JhbVwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8aDI+WW91IGNhbiBhbHNvIGNvbnRhY3QgbWUgaGVyZSA6PC9oMj5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtEYXRhc0Zvb3Rlci5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgPGEgaHJlZj17ZGF0YS5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnNyY30gYWx0PXtkYXRhLmFsdH0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTA1NmZkO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=container\\components\\Footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_Contact__ = __webpack_require__("./container/Contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_components_Footer__ = __webpack_require__("./container/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_Header__ = __webpack_require__("./container/Header.js");

var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\contact.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var Contact = function Contact(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-430843866"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__container_Header__["a" /* default */], {
    pathname: props.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__container_Contact__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__container_components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "430843866",
    css: "body{font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTyxBQUcwRSxBQUcxQyxrREFDdkIsV0FIQSIsImZpbGUiOiJwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENvbnRhY3RDb21wb25lbnQgZnJvbSBcIi4uL2NvbnRhaW5lci9Db250YWN0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb250YWluZXIvSGVhZGVyXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBhdGhuYW1lOiBzdHJpbmdcclxufTtcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAocHJvcHM6IFByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkZXIgcGF0aG5hbWU9e3Byb3BzLnBhdGhuYW1lfSAvPlxyXG4gICAgPENvbnRhY3RDb21wb25lbnQgLz5cclxuICAgIDxGb290ZXIgLz5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbkNvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIHJldHVybiB7IHBhdGhuYW1lOiBjb250ZXh0LnBhdGhuYW1lIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXX0= */\n/*@ sourceURL=pages\\contact.js */"
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

/***/ 5:
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