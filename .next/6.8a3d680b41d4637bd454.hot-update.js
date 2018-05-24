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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "form",
        "class": "topBefore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-3082177601"
      }, "\u2022 Keep in Touch \u2022"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-3082177601"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "contact_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
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
          lineNumber: 24
        },
        className: "jsx-3082177601"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
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
          lineNumber: 34
        },
        className: "jsx-3082177601"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
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
          lineNumber: 44
        },
        className: "jsx-3082177601"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3082177601"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "submit",
        id: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3082177601"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3082177601",
        css: "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);html.jsx-3082177601{font-family:\"Montserrat\",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body.jsx-3082177601{background:#f2f3eb;}button.jsx-3082177601{overflow:visible;}button.jsx-3082177601,select.jsx-3082177601{text-transform:none;}button.jsx-3082177601,input.jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{color:#5a5a5a;font:inherit;margin:0;}input.jsx-3082177601{line-height:normal;}textarea.jsx-3082177601{overflow:auto;}#container.jsx-3082177601{border:solid 3px #474544;max-width:768px;margin:60px auto;position:relative;}form.jsx-3082177601{padding:37.5px;margin:50px 0;}h1.jsx-3082177601{color:#474544;font-size:32px;font-weight:700;-webkit-letter-spacing:7px;-moz-letter-spacing:7px;-ms-letter-spacing:7px;letter-spacing:7px;text-align:center;text-transform:uppercase;}.underline.jsx-3082177601{border-bottom:solid 2px #474544;margin:-0.512em auto;width:80px;}.email.jsx-3082177601{float:right;width:45%;}input[type=\"text\"].jsx-3082177601,[type=\"email\"].jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{background:none;border:none;border-bottom:solid 2px #474544;color:#474544;font-size:1em;font-weight:400;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:0em 0 1.875em 0;padding:0 0 0.875em 0;text-transform:uppercase;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}input[type=\"text\"].jsx-3082177601:focus,[type=\"email\"]:focus.jsx-3082177601,textarea.jsx-3082177601:focus{outline:none;padding:0 0 0.875em 0;}.message.jsx-3082177601{float:none;}.name.jsx-3082177601{float:left;width:45%;}textarea.jsx-3082177601{line-height:150%;height:150px;resize:none;width:100%;}.jsx-3082177601::-webkit-input-placeholder{color:#474544;}.jsx-3082177601:-moz-placeholder{color:#474544;opacity:1;}.jsx-3082177601::-moz-placeholder{color:#474544;opacity:1;}.jsx-3082177601:-ms-input-placeholder{color:#474544;}#form_button.jsx-3082177601{background:none;border:solid 2px #474544;color:#474544;cursor:pointer;display:inline-block;font-family:\"Helvetica\",Arial,sans-serif;font-size:0.875em;font-weight:bold;outline:none;padding:20px 35px;text-transform:uppercase;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#form_button.jsx-3082177601:hover{background:#474544;color:#f2f3eb;}@media screen and (max-width:768px){#container.jsx-3082177601{margin:20px auto;width:95%;}}@media screen and (max-width:480px){h1.jsx-3082177601{font-size:26px;}.underline.jsx-3082177601{width:68px;}#form_button.jsx-3082177601{padding:15px 25px;}}@media screen and (max-width:420px){h1.jsx-3082177601{font-size:18px;}.underline.jsx-3082177601{width:53px;}input[type=\"text\"].jsx-3082177601,[type=\"email\"].jsx-3082177601,select.jsx-3082177601,textarea.jsx-3082177601{font-size:0.875em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RG9CLEFBRWtGLEFBR3pCLEFBTXpCLEFBSUYsQUFLRyxBQU9OLEFBTUssQUFJTCxBQUlXLEFBT1YsQUFLRCxBQVNrQixBQU1wQixBQVFJLEFBMEJILEFBS0YsQUFJQSxBQUtNLEFBT0gsQUFJQSxBQUtBLEFBS0EsQUFJRSxBQW1CRyxBQU1BLEFBT0YsQUFJSixBQUlPLEFBTUgsQUFJSixBQU9PLFdBMUZ0QixBQUlZLEFBa0VWLEFBY0EsQ0EzSFUsQ0FrQ1ksQ0EzRVQsQUFVZixBQWdCaUIsQUFzRWpCLEFBSVksQUFLQSxBQUtaLENBekZnQixBQTZIZCxBQWNBLENBL0dZLEFBaUVhLENBOUgzQixBQXFHZSxBQWtERCxDQWVaLEFBaUJBLENBM0xGLEFBc0JBLEFBK0hnQixDQTVJaEIsQ0E0RkEsQ0EzQ0EsRUEyREEsQUFLQSxDQTVGa0IsRUFiUCxBQTJJVCxDQTFGZ0MsQ0E1QmxDLEFBS2tCLENBK0RKLEVBdkRTLENBbUd2QixFQTFEQSxDQTFFQSxLQWFtQixBQW9HSCxDQXpJWSxBQWlIZixHQS9EUSxRQVFSLEFBd0RiLEVBd0JpQixHQXBHRyxFQW1DSixJQWRoQixJQTFEZ0MsRUEwSVQsSUFqRVAsRUFuQ2hCLFlBb0NrQixHQWlFMkIsT0ExSTdDLE1BMEVxQiw0QkFpRUQsTUExRkEsWUEyRkQsTUExRlEsV0EyRlosYUFDSyxDQTNGcEIsZ0JBd0J5QixDQW9FRSxzQkFuRUgsR0FvRU0sbUJBbkVILFNBb0VBLGdCQW5FZCxTQW9FYSxFQW5FTSxzQkFvRVAsUUFuRUksZUFvRVAsWUFuRU0sMEJBQ0QsVUFtRTNCLGVBbEV3QixzQkFDTSw0QkFDSCx5QkFDRCx3QkFDRCx1QkFDSCxnREFDdEIiLCJmaWxlIjoiY29udGFpbmVyXFxDb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgdGV4dGFyZWE6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYW1lID0gZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgaGFuZGxlRW1haWwgPSBlID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgaGFuZGxlVGV4dEFyZWEgPSBlID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0YXJlYTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dGFyZWEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBpZD1cImZvcm1cIiBjbGFzcz1cInRvcEJlZm9yZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT4mYnVsbDsgS2VlcCBpbiBUb3VjaCAmYnVsbDs8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZVwiIC8+XHJcblxyXG4gICAgICAgICAgPGZvcm0gaWQ9XCJjb250YWN0X2Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgbmFtZSBpc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBlLW1haWwgaXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWx9XHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsX2lucHV0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVUZXh0QXJlYX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCJmb3JtX2J1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDApO1xyXG5cclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2ViO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzNy41cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMC41MTJlbSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICBbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNDc0NTQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMGVtIDAgMS44NzVlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMC44NzVlbSAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAgICAgICAgIFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjg3NWVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDU0NDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2Zvcm1fYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzQ3NDU0NDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NzQ1NDQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2Zvcm1fYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3NDU0NDtcclxuICAgICAgICAgICAgY29sb3I6ICNmMmYzZWI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZm9ybV9idXR0b24ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1M3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICAgICAgW3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl19 */\n/*@ sourceURL=container\\Contact.js */"
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
//# sourceMappingURL=6.8a3d680b41d4637bd454.hot-update.js.map