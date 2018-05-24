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
      value: function value(e) {
        return _this.setState({
          name: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState({
          email: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleTextArea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState({
          textarea: e.target.value
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
        css: "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);html.jsx-3082177601{font-family:\"Montserrat\",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body.jsx-3082177601{background:#f2f3eb;}button.jsx-3082177601{overflow:visible;}button.jsx-3082177601,select.jsx-3082177601{text-transform:none;}button.jsx-3082177601,input.jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{color:#5a5a5a;font:inherit;margin:0;}input.jsx-3082177601{line-height:normal;}textarea.jsx-3082177601{overflow:auto;}#container.jsx-3082177601{border:solid 3px #474544;max-width:768px;margin:60px auto;position:relative;}form.jsx-3082177601{padding:37.5px;margin:50px 0;}h1.jsx-3082177601{color:#474544;font-size:32px;font-weight:700;-webkit-letter-spacing:7px;-moz-letter-spacing:7px;-ms-letter-spacing:7px;letter-spacing:7px;text-align:center;text-transform:uppercase;}.underline.jsx-3082177601{border-bottom:solid 2px #474544;margin:-0.512em auto;width:80px;}.email.jsx-3082177601{float:right;width:45%;}input[type=\"text\"].jsx-3082177601,[type=\"email\"].jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{background:none;border:none;border-bottom:solid 2px #474544;color:#474544;font-size:1em;font-weight:400;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:0em 0 1.875em 0;padding:0 0 0.875em 0;text-transform:uppercase;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}input[type=\"text\"].jsx-3082177601:focus,[type=\"email\"]:focus.jsx-3082177601,textarea.jsx-3082177601:focus{outline:none;padding:0 0 0.875em 0;}.message.jsx-3082177601{float:none;}.name.jsx-3082177601{float:left;width:45%;}textarea.jsx-3082177601{line-height:150%;height:150px;resize:none;width:100%;}.jsx-3082177601::-webkit-input-placeholder{color:#474544;}.jsx-3082177601:-moz-placeholder{color:#474544;opacity:1;}.jsx-3082177601::-moz-placeholder{color:#474544;opacity:1;}.jsx-3082177601:-ms-input-placeholder{color:#474544;}#form_button.jsx-3082177601{background:none;border:solid 2px #474544;color:#474544;cursor:pointer;display:inline-block;font-family:\"Helvetica\",Arial,sans-serif;font-size:0.875em;font-weight:bold;outline:none;padding:20px 35px;text-transform:uppercase;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#form_button.jsx-3082177601:hover{background:#474544;color:#f2f3eb;}@media screen and (max-width:768px){#container.jsx-3082177601{margin:20px auto;width:95%;}}@media screen and (max-width:480px){h1.jsx-3082177601{font-size:26px;}.underline.jsx-3082177601{width:68px;}#form_button.jsx-3082177601{padding:15px 25px;}}@media screen and (max-width:420px){h1.jsx-3082177601{font-size:18px;}.underline.jsx-3082177601{width:53px;}input[type=\"text\"].jsx-3082177601,[type=\"email\"].jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{font-size:0.875em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBRWtGLEFBR3pCLEFBTXpCLEFBSUYsQUFLRyxBQU9OLEFBTUssQUFJTCxBQUlXLEFBT1YsQUFLRCxBQVNrQixBQU1wQixBQVFJLEFBMEJILEFBS0YsQUFJQSxBQUtNLEFBT0gsQUFJQSxBQUtBLEFBS0EsQUFJRSxBQW1CRyxBQU1BLEFBT0YsQUFJSixBQUlPLEFBTUgsQUFJSixBQU9PLFdBMUZ0QixBQUlZLEFBa0VWLEFBY0EsQ0EzSFUsQ0FrQ1ksQ0EzRVQsQUFVZixBQWdCaUIsQUFzRWpCLEFBSVksQUFLQSxBQUtaLENBekZnQixBQTZIZCxBQWNBLENBL0dZLEFBaUVhLENBOUgzQixBQXFHZSxBQWtERCxDQWVaLEFBaUJBLENBM0xGLEFBc0JBLEFBK0hnQixDQTVJaEIsQ0E0RkEsQ0EzQ0EsRUEyREEsQUFLQSxDQTVGa0IsRUFiUCxBQTJJVCxDQTFGZ0MsQ0E1QmxDLEFBS2tCLENBK0RKLEVBdkRTLENBbUd2QixFQTFEQSxDQTFFQSxLQWFtQixBQW9HSCxDQXpJWSxBQWlIZixHQS9EUSxRQVFSLEFBd0RiLEVBd0JpQixHQXBHRyxFQW1DSixJQWRoQixJQTFEZ0MsRUEwSVQsSUFqRVAsRUFuQ2hCLFlBb0NrQixHQWlFMkIsT0ExSTdDLE1BMEVxQiw0QkFpRUQsTUExRkEsWUEyRkQsTUExRlEsV0EyRlosYUFDSyxDQTNGcEIsZ0JBd0J5QixDQW9FRSxzQkFuRUgsR0FvRU0sbUJBbkVILFNBb0VBLGdCQW5FZCxTQW9FYSxFQW5FTSxzQkFvRVAsUUFuRUksZUFvRVAsWUFuRU0sMEJBQ0QsVUFtRTNCLGVBbEV3QixzQkFDTSw0QkFDSCx5QkFDRCx3QkFDRCx1QkFDSCxnREFDdEIiLCJmaWxlIjoiY29udGFpbmVyXFxDb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgdGV4dGFyZWE6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYW1lID0gZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgaGFuZGxlRW1haWwgPSBlID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgaGFuZGxlVGV4dEFyZWEgPSBlID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0YXJlYTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dGFyZWEgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGlkPVwiZm9ybVwiIGNsYXNzPVwidG9wQmVmb3JlXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPiZidWxsOyBLZWVwIGluIFRvdWNoICZidWxsOzwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lXCIgLz5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBpZD1cImNvbnRhY3RfZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBuYW1lIGlzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZX1cclxuICAgICAgICAgICAgICAgIGlkPVwibmFtZV9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IGUtbWFpbCBpc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbH1cclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0YXJlYX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRleHRBcmVhfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZV9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cImZvcm1fYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYzZWI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM3LjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IC0wLjUxMmVtIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICAgIFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwZW0gMCAxLjg3NWVtIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjg3NWVtIDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4gICAgICAgICAgW3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuICAgICAgICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAuODc1ZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjZm9ybV9idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAzNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjZm9ybV9idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2YyZjNlYjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNmb3JtX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgICBbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXX0= */\n/*@ sourceURL=container\\Contact.js */"
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
//# sourceMappingURL=6.f71db8e0525308065b3f.hot-update.js.map