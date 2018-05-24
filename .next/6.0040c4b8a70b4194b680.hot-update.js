webpackHotUpdate(6,{

/***/ "./container/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\Contact.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        return _this.setState({
          name: name
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(email) {
        return _this.setState({
          email: email
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleTextArea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(textarea) {
        return _this.setState({
          textarea: textarea
        });
      }
    });
    _this.state = {
      name: "",
      email: "",
      textarea: ""
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          textarea = _state.textarea;
      console.log(this.state);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "form",
        "class": "topBefore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-3082177601"
      }, "\u2022 Keep in Touch \u2022"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-3082177601"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "contact_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "My name is",
        value: name,
        onChange: this.handleName,
        id: "name_input",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-3082177601"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "email",
        placeholder: "My e-mail is",
        value: email,
        onChange: this.handleEmail,
        id: "email_input",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3082177601"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        value: textarea,
        onChange: this.handleTextArea,
        placeholder: "My message",
        id: "message_input",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3082177601"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "submit",
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3082177601"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3082177601",
        css: "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);html.jsx-3082177601{font-family:\"Montserrat\",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body.jsx-3082177601{background:#f2f3eb;}button.jsx-3082177601{overflow:visible;}button.jsx-3082177601,select.jsx-3082177601{text-transform:none;}button.jsx-3082177601,input.jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{color:#5a5a5a;font:inherit;margin:0;}input.jsx-3082177601{line-height:normal;}textarea.jsx-3082177601{overflow:auto;}#container.jsx-3082177601{border:solid 3px #474544;max-width:768px;margin:60px auto;position:relative;}form.jsx-3082177601{padding:37.5px;margin:50px 0;}h1.jsx-3082177601{color:#474544;font-size:32px;font-weight:700;-webkit-letter-spacing:7px;-moz-letter-spacing:7px;-ms-letter-spacing:7px;letter-spacing:7px;text-align:center;text-transform:uppercase;}.underline.jsx-3082177601{border-bottom:solid 2px #474544;margin:-0.512em auto;width:80px;}.email.jsx-3082177601{float:right;width:45%;}input[type=\"text\"].jsx-3082177601,[type=\"email\"].jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{background:none;border:none;border-bottom:solid 2px #474544;color:#474544;font-size:1em;font-weight:400;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:0em 0 1.875em 0;padding:0 0 0.875em 0;text-transform:uppercase;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}input[type=\"text\"].jsx-3082177601:focus,[type=\"email\"]:focus.jsx-3082177601,textarea.jsx-3082177601:focus{outline:none;padding:0 0 0.875em 0;}.message.jsx-3082177601{float:none;}.name.jsx-3082177601{float:left;width:45%;}textarea.jsx-3082177601{line-height:150%;height:150px;resize:none;width:100%;}.jsx-3082177601::-webkit-input-placeholder{color:#474544;}.jsx-3082177601:-moz-placeholder{color:#474544;opacity:1;}.jsx-3082177601::-moz-placeholder{color:#474544;opacity:1;}.jsx-3082177601:-ms-input-placeholder{color:#474544;}#form_button.jsx-3082177601{background:none;border:solid 2px #474544;color:#474544;cursor:pointer;display:inline-block;font-family:\"Helvetica\",Arial,sans-serif;font-size:0.875em;font-weight:bold;outline:none;padding:20px 35px;text-transform:uppercase;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#form_button.jsx-3082177601:hover{background:#474544;color:#f2f3eb;}@media screen and (max-width:768px){#container.jsx-3082177601{margin:20px auto;width:95%;}}@media screen and (max-width:480px){h1.jsx-3082177601{font-size:26px;}.underline.jsx-3082177601{width:68px;}#form_button.jsx-3082177601{padding:15px 25px;}}@media screen and (max-width:420px){h1.jsx-3082177601{font-size:18px;}.underline.jsx-3082177601{width:53px;}input[type=\"text\"].jsx-3082177601,[type=\"email\"].jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{font-size:0.875em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBRWtGLEFBR3pCLEFBTXpCLEFBSUYsQUFLRyxBQU9OLEFBTUssQUFJTCxBQUlXLEFBT1YsQUFLRCxBQVNrQixBQU1wQixBQVFJLEFBMEJILEFBS0YsQUFJQSxBQUtNLEFBT0gsQUFJQSxBQUtBLEFBS0EsQUFJRSxBQW1CRyxBQU1BLEFBT0YsQUFJSixBQUlPLEFBTUgsQUFJSixBQU9PLFdBMUZ0QixBQUlZLEFBa0VWLEFBY0EsQ0EzSFUsQ0FrQ1ksQ0EzRVQsQUFVZixBQWdCaUIsQUFzRWpCLEFBSVksQUFLQSxBQUtaLENBekZnQixBQTZIZCxBQWNBLENBL0dZLEFBaUVhLENBOUgzQixBQXFHZSxBQWtERCxDQWVaLEFBaUJBLENBM0xGLEFBc0JBLEFBK0hnQixDQTVJaEIsQ0E0RkEsQ0EzQ0EsRUEyREEsQUFLQSxDQTVGa0IsRUFiUCxBQTJJVCxDQTFGZ0MsQ0E1QmxDLEFBS2tCLENBK0RKLEVBdkRTLENBbUd2QixFQTFEQSxDQTFFQSxLQWFtQixBQW9HSCxDQXpJWSxBQWlIZixHQS9EUSxRQVFSLEFBd0RiLEVBd0JpQixHQXBHRyxFQW1DSixJQWRoQixJQTFEZ0MsRUEwSVQsSUFqRVAsRUFuQ2hCLFlBb0NrQixHQWlFMkIsT0ExSTdDLE1BMEVxQiw0QkFpRUQsTUExRkEsWUEyRkQsTUExRlEsV0EyRlosYUFDSyxDQTNGcEIsZ0JBd0J5QixDQW9FRSxzQkFuRUgsR0FvRU0sbUJBbkVILFNBb0VBLGdCQW5FZCxTQW9FYSxFQW5FTSxzQkFvRVAsUUFuRUksZUFvRVAsWUFuRU0sMEJBQ0QsVUFtRTNCLGVBbEV3QixzQkFDTSw0QkFDSCx5QkFDRCx3QkFDRCx1QkFDSCxnREFDdEIiLCJmaWxlIjoiY29udGFpbmVyXFxDb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgdGV4dGFyZWE6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYW1lID0gbmFtZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZSB9KTtcclxuICBoYW5kbGVFbWFpbCA9IGVtYWlsID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbCB9KTtcclxuICBoYW5kbGVUZXh0QXJlYSA9IHRleHRhcmVhID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0YXJlYSB9KTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCB0ZXh0YXJlYSB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gaWQ9XCJmb3JtXCIgY2xhc3M9XCJ0b3BCZWZvcmVcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+JmJ1bGw7IEtlZXAgaW4gVG91Y2ggJmJ1bGw7PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxmb3JtIGlkPVwiY29udGFjdF9mb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IG5hbWUgaXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lX2lucHV0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgZS1tYWlsIGlzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbF9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHRhcmVhfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlVGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlX2lucHV0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGlkPVwiZm9ybV9idXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwKTtcclxuXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjNlYjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzcuNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTAuNTEyZW0gYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgW3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBlbSAwIDEuODc1ZW0gMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAuODc1ZW0gMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiAgICAgICAgICBbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gICAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMC44NzVlbSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNmb3JtX2J1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDM1cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNmb3JtX2J1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjJmM2ViO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2Zvcm1fYnV0dG9uIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICAgIFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdfQ== */\n/*@ sourceURL=container\\Contact.js */"
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

  reactHotLoader.register(Contact, "Contact", "C:\\React\\next-guitar-website\\container\\Contact.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\Contact.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.0040c4b8a70b4194b680.hot-update.js.map