webpackHotUpdate(4,{

/***/ "./container/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_verifForm__ = __webpack_require__("./tools/verifForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loader_spinner__ = __webpack_require__("./node_modules/react-loader-spinner/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loader_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loader_spinner__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\Contact.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
            success: "Your e-mail has been successfully sent"
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
        textarea: ""
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
          lineNumber: 84
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-3117394983"
      }, "\u2022 Keep in Touch \u2022"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-3117394983" + " " + "underline"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "contact_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "My name is",
        value: name,
        onChange: this.handleName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "email",
        placeholder: "My e-mail is",
        value: email,
        onChange: this.handleEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.email)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-3117394983"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        value: textarea,
        onChange: this.handleTextArea,
        placeholder: "My message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-3117394983"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.textarea)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-3117394983"
      }, loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-3117394983" + " " + "loader-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loader_spinner___default.a, {
        type: "Rings",
        color: "black",
        height: "50",
        width: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.sendEmail,
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-3117394983"
      }, "SEND")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-3117394983" + " " + "success"
      }, success), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-3117394983" + " " + "error"
      }, error.global))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3117394983",
        css: "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);html.jsx-3117394983{font-family:\"Montserrat\",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body.jsx-3117394983{background:#f2f3eb;}button.jsx-3117394983{overflow:visible;}.success.jsx-3117394983{color:green;}button.jsx-3117394983,select.jsx-3117394983{text-transform:none;}.error.jsx-3117394983{color:red;}button.jsx-3117394983,input.jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{color:#5a5a5a;font:inherit;margin:0;}input.jsx-3117394983{line-height:normal;}textarea.jsx-3117394983{overflow:auto;}#container.jsx-3117394983{border:solid 3px #474544;max-width:768px;margin:60px auto;position:relative;}form.jsx-3117394983{padding:37.5px;}h1.jsx-3117394983{color:#474544;font-size:32px;font-weight:700;-webkit-letter-spacing:7px;-moz-letter-spacing:7px;-ms-letter-spacing:7px;letter-spacing:7px;text-align:center;text-transform:uppercase;}.underline.jsx-3117394983{border-bottom:solid 2px #474544;margin:-0.512em auto;width:80px;}.email.jsx-3117394983{float:right;width:45%;}input[type=\"text\"].jsx-3117394983,[type=\"email\"].jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{background:none;border:none;border-bottom:solid 2px #474544;color:#474544;font-size:1em;font-weight:400;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:0em 0 1.875em 0;padding:0 0 0.875em 0;text-transform:uppercase;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}input[type=\"text\"].jsx-3117394983:focus,[type=\"email\"]:focus.jsx-3117394983,textarea.jsx-3117394983:focus{outline:none;padding:0 0 0.875em 0;}textarea.jsx-3117394983{line-height:150%;height:150px;resize:none;width:100%;}.jsx-3117394983::-webkit-input-placeholder{color:#474544;}.jsx-3117394983:-moz-placeholder{color:#474544;opacity:1;}.jsx-3117394983::-moz-placeholder{color:#474544;opacity:1;}.jsx-3117394983:-ms-input-placeholder{color:#474544;}#form_button.jsx-3117394983{background:none;border:solid 2px #474544;color:#474544;cursor:pointer;display:inline-block;font-family:\"Helvetica\",Arial,sans-serif;font-size:0.875em;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;outline:none;height:60px;width:175px;text-transform:uppercase;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#form_button.jsx-3117394983:hover{background:#474544;color:#f2f3eb;}@media screen and (max-width:768px){#container.jsx-3117394983{margin:20px auto;width:95%;}}@media screen and (max-width:480px){h1.jsx-3117394983{font-size:26px;}.underline.jsx-3117394983{width:68px;}#form_button.jsx-3117394983{padding:15px 25px;}}@media screen and (max-width:420px){h1.jsx-3117394983{font-size:18px;}.underline.jsx-3117394983{width:53px;}input[type=\"text\"].jsx-3117394983,[type=\"email\"].jsx-3117394983,select.jsx-3117394983,textarea.jsx-3117394983{font-size:0.875em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSW9CLEFBRWtGLEFBR3pCLEFBTXpCLEFBSUYsQUFJTCxBQUtRLEFBR1YsQUFPSSxBQU1LLEFBSUwsQUFJVyxBQU9WLEFBSUQsQUFTa0IsQUFNcEIsQUFRSSxBQTBCSCxBQUtJLEFBT0gsQUFJQSxBQUtBLEFBS0EsQUFJRSxBQXVCRyxBQU1BLEFBT0YsQUFJSixBQUlPLEFBTUgsQUFJSixBQU9PLFVBM0t0QixDQXVKRSxBQWNBLENBN0tGLEFBdURZLENBa0NZLENBMUVULEFBVWYsQUFlaUIsQUE2RGpCLEFBSVksQUFLQSxBQUtaLENBL0VBLEFBdUhFLEFBY0EsQ0ExR1ksQUF3RGEsQ0EzSDNCLEFBa0dlLEFBc0RELENBZVosQUFpQkEsQ0E1TEYsQUE2QkEsQUF5SGdCLENBekloQixFQW1EQSxFQWtEQSxBQUtBLENBbEZrQixFQWJQLEFBcUlULENBckZnQyxDQXZCaEIsQ0FzREosRUE5Q1MsQ0E4RnZCLEVBckRBLENBekVBLEtBYW1CLEFBMEZILENBdElZLEFBOEdmLEdBdERRLFFBUVIsQUErQ2IsRUF3QmlCLEdBMUZHLEVBa0NKLElBZGhCLElBaEVnQyxFQXVJVCxJQXhEUCxFQWxDaEIsWUFtQ2tCLEdBd0QyQixPQXZJN0MsTUFnRnFCLDRCQXdERCxNQWpGQSxZQWtGRCxNQWpGUSxXQWtGWixjQWpGZixnQkF3QnlCLHVCQUNELHFCQXlEQyxDQXhERSx5QkFDZCxXQUNtQiw4QkFDSCwyQkFDRCxLQXFEUCxxQkFwRE0seUJBQ0gsc0JBQ00seUJBbURmLEdBbERZLFVBbURiLFlBQ0EsR0FuRFksU0FvREMsZUFuREYsVUFvREssYUFuRFIsZUFvREsseUJBQ0QsUUFwRDFCLGdCQXFEeUIsdUJBQ0gsZ0RBQ3RCIiwiZmlsZSI6ImNvbnRhaW5lclxcQ29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB2ZXJpZkZvcm0gZnJvbSBcIi4uL3Rvb2xzL3ZlcmlmRm9ybVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xyXG5cclxuY29uc3QgQVBJX01BSUwgPSBcImh0dHBzOi8vYXBpcmVzdW1lLmhlcm9rdWFwcC5jb20vbWFpbFwiO1xyXG5cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICB0ZXh0YXJlYTogXCJcIixcclxuICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICB0ZXh0YXJlYTogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2VuZEVtYWlsID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dGFyZWEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICBjb25zdCBlcnJvciA9IHZlcmlmRm9ybShuYW1lLCBlbWFpbCwgdGV4dGFyZWEpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9yKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChBUElfTUFJTCwge1xyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICBzdWJqZWN0OiBcIkVtYWlsIGZyb20gZ3VpdGFyLXdlYnNpdGVcIixcclxuICAgICAgICB0ZXh0OiBgJHtuYW1lfSB3YW50cyB0byB0ZWxsIHlvdSB0aGF0Li4uICR7dGV4dGFyZWF9YCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IFwiWW91ciBlLW1haWwgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3M6IFwiXCIsIHN1Y2Nlc3M6IFwiXCIgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbCA9XHJcbiAgICAgICAgICBlcnIubWVzc2FnZSA9PT0gXCJOZXR3b3JrIEVycm9yXCJcclxuICAgICAgICAgICAgPyBcIllvdXIgbWVzc2FnZSBjb3VsZCBub3QgYmUgc2VudCBwbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uXCJcclxuICAgICAgICAgICAgOiBcIkVycm9yIHdoaWxlIHNlbmRpbmcgeW91ciBtZXNzYWdlXCI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBlcnJvcjogeyAuLi50aGlzLnN0YXRlLmVycm9yLCBnbG9iYWwgfSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU5hbWUgPSBlID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiB7IC4uLnRoaXMuc3RhdGUuZXJyb3IsIG5hbWU6IFwiXCIgfVxyXG4gICAgfSk7XHJcbiAgaGFuZGxlRW1haWwgPSBlID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBlcnJvcjogeyAuLi50aGlzLnN0YXRlLmVycm9yLCBlbWFpbDogXCJcIiB9XHJcbiAgICB9KTtcclxuICBoYW5kbGVUZXh0QXJlYSA9IGUgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0ZXh0YXJlYTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiB7IC4uLnRoaXMuc3RhdGUuZXJyb3IsIHRleHRhcmVhOiBcIlwiIH1cclxuICAgIH0pO1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHRleHRhcmVhLCBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT4mYnVsbDsgS2VlcCBpbiBUb3VjaCAmYnVsbDs8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxmb3JtIGlkPVwiY29udGFjdF9mb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IG5hbWUgaXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3IubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgZS1tYWlsIGlzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3IuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0YXJlYX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRleHRBcmVhfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yLnRleHRhcmVhfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybV9idXR0b25cIiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlJpbmdzXCIgY29sb3I9XCJibGFja1wiIGhlaWdodD1cIjUwXCIgd2lkdGg9XCI1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRFbWFpbH0gaWQ9XCJmb3JtX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICBTRU5EXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPntzdWNjZXNzfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3IuZ2xvYmFsfTwvcD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwKTtcclxuXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjNlYjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM3LjVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTAuNTEyZW0gYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgW3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBlbSAwIDEuODc1ZW0gMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAuODc1ZW0gMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiAgICAgICAgICBbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gICAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMC44NzVlbSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2Zvcm1fYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2Zvcm1fYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3NDU0NDtcclxuICAgICAgICAgICAgY29sb3I6ICNmMmYzZWI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZm9ybV9idXR0b24ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1M3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICAgICAgW3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl19 */\n/*@ sourceURL=container\\Contact.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Contact;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_MAIL, "API_MAIL", "C:\\React\\next-guitar-website\\container\\Contact.js");
  reactHotLoader.register(Contact, "Contact", "C:\\React\\next-guitar-website\\container\\Contact.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\Contact.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.eb75024aa34523c15b5c.hot-update.js.map