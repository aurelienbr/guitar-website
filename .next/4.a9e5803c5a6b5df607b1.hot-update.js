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
//# sourceMappingURL=4.a9e5803c5a6b5df607b1.hot-update.js.map