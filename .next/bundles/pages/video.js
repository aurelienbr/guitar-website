module.exports =

        __NEXT_REGISTER_PAGE('/video', function() {
          var comp = 
      webpackJsonp([7],{

/***/ "./api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return videos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers__ = __webpack_require__("./node_modules/@feathersjs/feathers/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client__ = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var app = __WEBPACK_IMPORTED_MODULE_0__feathersjs_feathers___default()();
var restClient = __WEBPACK_IMPORTED_MODULE_1__feathersjs_rest_client___default()("http://localhost:3030");
app.configure(restClient.axios(__WEBPACK_IMPORTED_MODULE_2_axios___default.a));
var videos = app.service("videos");

var _default = app;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "C:\\React\\next-guitar-website\\api.js");
  reactHotLoader.register(restClient, "restClient", "C:\\React\\next-guitar-website\\api.js");
  reactHotLoader.register(videos, "videos", "C:\\React\\next-guitar-website\\api.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\api.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Button__ = __webpack_require__("./container/components/Button.js");
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\Header.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Header.propTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};
var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BUTTONS, "BUTTONS", "C:\\React\\next-guitar-website\\container\\Header.js");
  reactHotLoader.register(Header, "Header", "C:\\React\\next-guitar-website\\container\\Header.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\Header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/VideoMain.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\VideoMain.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
var _default = VideoMain;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VideoMain, "VideoMain", "C:\\React\\next-guitar-website\\container\\VideoMain.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\VideoMain.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Button.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  href: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  selected: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.boolean
};
var _default = Button;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Button, "Button", "C:\\React\\next-guitar-website\\container\\components\\Button.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\components\\Button.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Footer.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = Footer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DatasFooter, "DatasFooter", "C:\\React\\next-guitar-website\\container\\components\\Footer.js");
  reactHotLoader.register(Footer, "Footer", "C:\\React\\next-guitar-website\\container\\components\\Footer.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\components\\Footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\React\\next-guitar-website\\container\\components\\Layout.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = Layout;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, "style", "C:\\React\\next-guitar-website\\container\\components\\Layout.js");
  reactHotLoader.register(Layout, "Layout", "C:\\React\\next-guitar-website\\container\\components\\Layout.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\container\\components\\Layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@feathersjs/commons/lib/arguments.js":
/***/ (function(module, exports) {

const paramCounts = {
  find: 1,
  get: 2,
  create: 2,
  update: 3,
  patch: 3,
  remove: 2
};

function isObjectOrArray (value) {
  return typeof value === 'object' && value !== null;
}

exports.validateArguments = function validateArguments (method, args) {
  // Check if the last argument is a callback which are no longer supported
  if (typeof args[args.length - 1] === 'function') {
    throw new Error('Callbacks are no longer supported. Use Promises or async/await instead.');
  }

  const methodParamCount = paramCounts[method];

  // Check the number of arguments and throw an error if too many are provided
  if (methodParamCount && args.length > methodParamCount) {
    throw new Error(`Too many arguments for '${method}' method`);
  }

  // `params` is always the last argument
  const params = args[methodParamCount - 1];

  // Check if `params` is an object (can be undefined though)
  if (params !== undefined && !isObjectOrArray(params)) {
    throw new Error(`Params for '${method}' method must be an object`);
  }

  // Validate other arguments for each method
  switch (method) {
    case 'create':
      if (!isObjectOrArray(args[0])) {
        throw new Error(`A data object must be provided to the 'create' method`);
      }
      break;
    case 'get':
    case 'remove':
    case 'update':
    case 'patch':
      if (args[0] === undefined) {
        throw new Error(`An id must be provided to the '${method}' method`);
      }

      if ((method === 'update' || method === 'patch') && !isObjectOrArray(args[1])) {
        throw new Error(`A data object must be provided to the '${method}' method`);
      }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/@feathersjs/commons/lib/commons.js":
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__("./node_modules/@feathersjs/commons/lib/utils.js");
const hooks = __webpack_require__("./node_modules/@feathersjs/commons/lib/hooks.js");
const args = __webpack_require__("./node_modules/@feathersjs/commons/lib/arguments.js");
const filterQuery = __webpack_require__("./node_modules/@feathersjs/commons/lib/filter-query.js");

module.exports = Object.assign({}, utils, args, { hooks, filterQuery });


/***/ }),

/***/ "./node_modules/@feathersjs/commons/lib/filter-query.js":
/***/ (function(module, exports, __webpack_require__) {

const { _ } = __webpack_require__("./node_modules/@feathersjs/commons/lib/utils.js");

// Officially supported query parameters ($populate is kind of special)
const PROPERTIES = ['$sort', '$limit', '$skip', '$select', '$populate'];

function parse (number) {
  if (typeof number !== 'undefined') {
    return Math.abs(parseInt(number, 10));
  }
}

// Returns the pagination limit and will take into account the
// default and max pagination settings
function getLimit (limit, paginate) {
  if (paginate && paginate.default) {
    const lower = typeof limit === 'number' ? limit : paginate.default;
    const upper = typeof paginate.max === 'number' ? paginate.max : Number.MAX_VALUE;

    return Math.min(lower, upper);
  }

  return limit;
}

// Makes sure that $sort order is always converted to an actual number
function convertSort (sort) {
  if (typeof sort !== 'object' || Array.isArray(sort)) {
    return sort;
  }

  const result = {};

  Object.keys(sort).forEach(key => {
    result[key] = typeof sort[key] === 'object'
      ? sort[key] : parseInt(sort[key], 10);
  });

  return result;
}

// Converts Feathers special query parameters and pagination settings
// and returns them separately a `filters` and the rest of the query
// as `query`
module.exports = function (query, paginate) {
  let filters = {
    $sort: convertSort(query.$sort),
    $limit: getLimit(parse(query.$limit), paginate),
    $skip: parse(query.$skip),
    $select: query.$select,
    $populate: query.$populate
  };

  return { filters, query: _.omit(query, ...PROPERTIES) };
};


/***/ }),

/***/ "./node_modules/@feathersjs/commons/lib/hooks.js":
/***/ (function(module, exports, __webpack_require__) {

const { each, pick } = __webpack_require__("./node_modules/@feathersjs/commons/lib/utils.js")._;

// To skip further hooks
const SKIP = exports.SKIP = typeof Symbol !== 'undefined'
  ? Symbol('__feathersSkipHooks')
  : '__feathersSkipHooks';

const convertGetOrRemove = ([ id, params = {} ]) => ({ id, params });
const convertUpdateOrPatch = ([ id, data, params = {} ]) => ({ id, data, params });

// Converters from service method arguments to hook object properties
exports.converters = {
  find (args) {
    const [ params = {} ] = args;

    return { params };
  },
  create (args) {
    const [ data, params = {} ] = args;

    return { data, params };
  },
  get: convertGetOrRemove,
  remove: convertGetOrRemove,
  update: convertUpdateOrPatch,
  patch: convertUpdateOrPatch
};

// Create a hook object for a method with arguments `args`
// `data` is additional data that will be added
exports.createHookObject = function createHookObject (method, args, data = {}) {
  const hook = exports.converters[method](args);

  Object.defineProperty(hook, 'toJSON', {
    value () {
      return pick(this, 'type', 'method', 'path',
        'params', 'id', 'data', 'result', 'error');
    }
  });

  return Object.assign(hook, data, {
    method,
    // A dynamic getter that returns the path of the service
    get path () {
      const { app, service } = data;

      if (!service || !app || !app.services) {
        return null;
      }

      return Object.keys(app.services)
        .find(path => app.services[path] === service);
    }
  });
};

// Fallback used by `makeArguments` which usually won't be used
exports.defaultMakeArguments = function defaultMakeArguments (hook) {
  const result = [];

  if (typeof hook.id !== 'undefined') {
    result.push(hook.id);
  }

  if (hook.data) {
    result.push(hook.data);
  }

  result.push(hook.params || {});

  return result;
};

// Turns a hook object back into a list of arguments
// to call a service method with
exports.makeArguments = function makeArguments (hook) {
  switch (hook.method) {
    case 'find':
      return [ hook.params ];
    case 'get':
    case 'remove':
      return [ hook.id, hook.params ];
    case 'update':
    case 'patch':
      return [ hook.id, hook.data, hook.params ];
    case 'create':
      return [ hook.data, hook.params ];
  }

  return exports.defaultMakeArguments(hook);
};

// Converts different hook registration formats into the
// same internal format
exports.convertHookData = function convertHookData (obj) {
  var hook = {};

  if (Array.isArray(obj)) {
    hook = { all: obj };
  } else if (typeof obj !== 'object') {
    hook = { all: [ obj ] };
  } else {
    each(obj, function (value, key) {
      hook[key] = !Array.isArray(value) ? [ value ] : value;
    });
  }

  return hook;
};

// Duck-checks a given object to be a hook object
// A valid hook object has `type` and `method`
exports.isHookObject = function isHookObject (hookObject) {
  return typeof hookObject === 'object' &&
    typeof hookObject.method === 'string' &&
    typeof hookObject.type === 'string';
};

// Returns all service and application hooks combined
// for a given method and type `appLast` sets if the hooks
// from `app` should be added last (or first by default)
exports.getHooks = function getHooks (app, service, type, method, appLast = false) {
  const appHooks = app.__hooks[type][method] || [];
  const serviceHooks = service.__hooks[type][method] || [];

  if (appLast) {
    // Run hooks in the order of service -> app -> finally
    return serviceHooks.concat(appHooks);
  }

  return appHooks.concat(serviceHooks);
};

exports.processHooks = function processHooks (hooks, initialHookObject) {
  let hookObject = initialHookObject;
  let updateCurrentHook = current => {
    // Either use the returned hook object or the current
    // hook object from the chain if the hook returned undefined
    if (current) {
      if (current === SKIP) {
        return SKIP;
      }

      if (!exports.isHookObject(current)) {
        throw new Error(`${hookObject.type} hook for '${hookObject.method}' method returned invalid hook object`);
      }

      hookObject = current;
    }

    return hookObject;
  };
  // First step of the hook chain with the initial hook object
  let promise = Promise.resolve(hookObject);

  // Go through all hooks and chain them into our promise
  hooks.forEach(fn => {
    const hook = fn.bind(this);

    if (hook.length === 2) { // function(hook, next)
      promise = promise.then(hookObject => hookObject === SKIP ? SKIP : new Promise((resolve, reject) => {
        hook(hookObject, (error, result) =>
          error ? reject(error) : resolve(result)
        );
      }));
    } else { // function(hook)
      promise = promise.then(hookObject => hookObject === SKIP ? SKIP : hook(hookObject));
    }

    // Use the returned hook object or the old one
    promise = promise.then(updateCurrentHook);
  });

  return promise
    .then(() => hookObject)
    .catch(error => {
      // Add the hook information to any errors
      error.hook = hookObject;
      throw error;
    });
};

// Add `.hooks` functionality to an object
exports.enableHooks = function enableHooks (obj, methods, types) {
  if (typeof obj.hooks === 'function') {
    return obj;
  }

  let __hooks = {};

  types.forEach(type => {
    // Initialize properties where hook functions are stored
    __hooks[type] = {};
  });

  // Add non-enumerable `__hooks` property to the object
  Object.defineProperty(obj, '__hooks', {
    value: __hooks
  });

  return Object.assign(obj, {
    hooks (allHooks) {
      each(allHooks, (obj, type) => {
        if (!this.__hooks[type]) {
          throw new Error(`'${type}' is not a valid hook type`);
        }

        const hooks = exports.convertHookData(obj);

        each(hooks, (value, method) => {
          if (method !== 'all' && methods.indexOf(method) === -1) {
            throw new Error(`'${method}' is not a valid hook method`);
          }
        });

        methods.forEach(method => {
          const myHooks = this.__hooks[type][method] ||
            (this.__hooks[type][method] = []);

          if (hooks.all) {
            myHooks.push.apply(myHooks, hooks.all);
          }

          if (hooks[method]) {
            myHooks.push.apply(myHooks, hooks[method]);
          }
        });
      });

      return this;
    }
  });
};


/***/ }),

/***/ "./node_modules/@feathersjs/commons/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Removes all leading and trailing slashes from a path
exports.stripSlashes = function stripSlashes (name) {
  return name.replace(/^(\/*)|(\/*)$/g, '');
};

// A set of lodash-y utility functions that use ES6
const _ = exports._ = {
  each (obj, callback) {
    if (obj && typeof obj.forEach === 'function') {
      obj.forEach(callback);
    } else if (_.isObject(obj)) {
      Object.keys(obj).forEach(key => callback(obj[key], key));
    }
  },

  some (value, callback) {
    return Object.keys(value)
      .map(key => [ value[key], key ])
      .some(([val, key]) => callback(val, key));
  },

  every (value, callback) {
    return Object.keys(value)
      .map(key => [ value[key], key ])
      .every(([val, key]) => callback(val, key));
  },

  keys (obj) {
    return Object.keys(obj);
  },

  values (obj) {
    return _.keys(obj).map(key => obj[key]);
  },

  isMatch (obj, item) {
    return _.keys(item).every(key => obj[key] === item[key]);
  },

  isEmpty (obj) {
    return _.keys(obj).length === 0;
  },

  isObject (item) {
    return (typeof item === 'object' && !Array.isArray(item) && item !== null);
  },

  extend (...args) {
    return Object.assign(...args);
  },

  omit (obj, ...keys) {
    const result = _.extend({}, obj);
    keys.forEach(key => delete result[key]);
    return result;
  },

  pick (source, ...keys) {
    const result = {};
    keys.forEach(key => {
      if (source[key] !== undefined) {
        result[key] = source[key];
      }
    });
    return result;
  },

  // Recursively merge the source object into the target object
  merge (target, source) {
    if (_.isObject(target) && _.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (_.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }

          _.merge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      });
    }
    return target;
  }
};

// Return a function that filters a result object or array
// and picks only the fields passed as `params.query.$select`
// and additional `otherFields`
exports.select = function select (params, ...otherFields) {
  const fields = params && params.query && params.query.$select;

  if (Array.isArray(fields) && otherFields.length) {
    fields.push(...otherFields);
  }

  const convert = result => {
    if (!Array.isArray(fields)) {
      return result;
    }

    return _.pick(result, ...fields);
  };

  return result => {
    if (Array.isArray(result)) {
      return result.map(convert);
    }

    return convert(result);
  };
};

// An in-memory sorting function according to the
// $sort special query parameter
exports.sorter = function sorter ($sort) {
  return function (first, second) {
    let comparator = 0;
    _.each($sort, (modifier, key) => {
      modifier = parseInt(modifier, 10);

      if (first[key] < second[key]) {
        comparator -= 1 * modifier;
      }

      if (first[key] > second[key]) {
        comparator += 1 * modifier;
      }
    });
    return comparator;
  };
};

// Duck-checks if an object looks like a promise
exports.isPromise = function isPromise (result) {
  return _.isObject(result) &&
    typeof result.then === 'function';
};

exports.makeUrl = function makeUrl (path, app = {}) {
  const get = typeof app.get === 'function' ? app.get.bind(app) : () => {};
  const env = get('env') || "development";
  const host = get('host') || process.env.HOST_NAME || 'localhost';
  const protocol = (env === 'development' || env === 'test' || (env === undefined)) ? 'http' : 'https';
  const PORT = get('port') || process.env.PORT || 3030;
  const port = (env === 'development' || env === 'test' || (env === undefined)) ? `:${PORT}` : '';

  path = path || '';

  return `${protocol}://${host}${port}/${exports.stripSlashes(path)}`;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@feathersjs/errors/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

const debug = __webpack_require__("./node_modules/debug/src/browser.js")('@feathersjs/errors');

function FeathersError (msg, name, code, className, data) {
  msg = msg || 'Error';

  let errors;
  let message;
  let newData;

  if (msg instanceof Error) {
    message = msg.message || 'Error';

    // NOTE (EK): This is typically to handle validation errors
    if (msg.errors) {
      errors = msg.errors;
    }
  } else if (typeof msg === 'object') { // Support plain old objects
    message = msg.message || 'Error';
    data = msg;
  } else { // message is just a string
    message = msg;
  }

  if (data) {
    // NOTE(EK): To make sure that we are not messing
    // with immutable data, just make a copy.
    // https://github.com/feathersjs/errors/issues/19
    newData = JSON.parse(JSON.stringify(data));

    if (newData.errors) {
      errors = newData.errors;
      delete newData.errors;
    } else if (data.errors) {
      // The errors property from data could be
      // stripped away while cloning resulting newData not to have it
      // For example: when cloning arrays this property
      errors = JSON.parse(JSON.stringify(data.errors));
    }
  }

  // NOTE (EK): Babel doesn't support this so
  // we have to pass in the class name manually.
  // this.name = this.constructor.name;
  this.type = 'FeathersError';
  this.name = name;
  this.message = message;
  this.code = code;
  this.className = className;
  this.data = newData;
  this.errors = errors || {};

  debug(`${this.name}(${this.code}): ${this.message}`);
  debug(this.errors);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, FeathersError);
  } else {
    this.stack = (new Error()).stack;
  }
}

function inheritsFrom (Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

inheritsFrom(FeathersError, Error);

// NOTE (EK): A little hack to get around `message` not
// being included in the default toJSON call.
Object.defineProperty(FeathersError.prototype, 'toJSON', {
  value: function () {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      className: this.className,
      data: this.data,
      errors: this.errors
    };
  }
});

// 400 - Bad Request
function BadRequest (message, data) {
  FeathersError.call(this, message, 'BadRequest', 400, 'bad-request', data);
}

inheritsFrom(BadRequest, FeathersError);

// 401 - Not Authenticated
function NotAuthenticated (message, data) {
  FeathersError.call(this, message, 'NotAuthenticated', 401, 'not-authenticated', data);
}

inheritsFrom(NotAuthenticated, FeathersError);

// 402 - Payment Error
function PaymentError (message, data) {
  FeathersError.call(this, message, 'PaymentError', 402, 'payment-error', data);
}

inheritsFrom(PaymentError, FeathersError);

// 403 - Forbidden
function Forbidden (message, data) {
  FeathersError.call(this, message, 'Forbidden', 403, 'forbidden', data);
}

inheritsFrom(Forbidden, FeathersError);

// 404 - Not Found
function NotFound (message, data) {
  FeathersError.call(this, message, 'NotFound', 404, 'not-found', data);
}

inheritsFrom(NotFound, FeathersError);

// 405 - Method Not Allowed
function MethodNotAllowed (message, data) {
  FeathersError.call(this, message, 'MethodNotAllowed', 405, 'method-not-allowed', data);
}

inheritsFrom(MethodNotAllowed, FeathersError);

// 406 - Not Acceptable
function NotAcceptable (message, data) {
  FeathersError.call(this, message, 'NotAcceptable', 406, 'not-acceptable', data);
}

inheritsFrom(NotAcceptable, FeathersError);

// 408 - Timeout
function Timeout (message, data) {
  FeathersError.call(this, message, 'Timeout', 408, 'timeout', data);
}

inheritsFrom(Timeout, FeathersError);

// 409 - Conflict
function Conflict (message, data) {
  FeathersError.call(this, message, 'Conflict', 409, 'conflict', data);
}

inheritsFrom(Conflict, FeathersError);

// 411 - Length Required
function LengthRequired (message, data) {
  FeathersError.call(this, message, 'LengthRequired', 411, 'length-required', data);
}

inheritsFrom(LengthRequired, FeathersError);

// 422 Unprocessable
function Unprocessable (message, data) {
  FeathersError.call(this, message, 'Unprocessable', 422, 'unprocessable', data);
}

inheritsFrom(Unprocessable, FeathersError);

// 429 Too Many Requests
function TooManyRequests (message, data) {
  FeathersError.call(this, message, 'TooManyRequests', 429, 'too-many-requests', data);
}

inheritsFrom(TooManyRequests, FeathersError);

// 500 - General Error
function GeneralError (message, data) {
  FeathersError.call(this, message, 'GeneralError', 500, 'general-error', data);
}

inheritsFrom(GeneralError, FeathersError);

// 501 - Not Implemented
function NotImplemented (message, data) {
  FeathersError.call(this, message, 'NotImplemented', 501, 'not-implemented', data);
}

inheritsFrom(NotImplemented, FeathersError);

// 502 - Bad Gateway
function BadGateway (message, data) {
  FeathersError.call(this, message, 'BadGateway', 502, 'bad-gateway', data);
}

inheritsFrom(BadGateway, FeathersError);

// 503 - Unavailable
function Unavailable (message, data) {
  FeathersError.call(this, message, 'Unavailable', 503, 'unavailable', data);
}

inheritsFrom(Unavailable, FeathersError);

const errors = {
  FeathersError,
  BadRequest,
  NotAuthenticated,
  PaymentError,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  Timeout,
  Conflict,
  LengthRequired,
  Unprocessable,
  TooManyRequests,
  GeneralError,
  NotImplemented,
  BadGateway,
  Unavailable,
  400: BadRequest,
  401: NotAuthenticated,
  402: PaymentError,
  403: Forbidden,
  404: NotFound,
  405: MethodNotAllowed,
  406: NotAcceptable,
  408: Timeout,
  409: Conflict,
  411: LengthRequired,
  422: Unprocessable,
  429: TooManyRequests,
  500: GeneralError,
  501: NotImplemented,
  502: BadGateway,
  503: Unavailable
};

function convert (error) {
  if (!error) {
    return error;
  }

  const FeathersError = errors[error.name];
  const result = FeathersError
    ? new FeathersError(error.message, error.data)
    : new Error(error.message || error);

  if (typeof error === 'object') {
    Object.assign(result, error);
  }

  return result;
}

module.exports = Object.assign({ convert }, errors);


/***/ }),

/***/ "./node_modules/@feathersjs/feathers/lib/application.js":
/***/ (function(module, exports, __webpack_require__) {

const debug = __webpack_require__("./node_modules/debug/src/browser.js")('feathers:application');
const { stripSlashes } = __webpack_require__("./node_modules/@feathersjs/commons/lib/commons.js");

const Uberproto = __webpack_require__("./node_modules/uberproto/lib/proto.js");
const events = __webpack_require__("./node_modules/@feathersjs/feathers/lib/events.js");
const hooks = __webpack_require__("./node_modules/@feathersjs/feathers/lib/hooks.js");
const version = __webpack_require__("./node_modules/@feathersjs/feathers/lib/version.js");

const Proto = Uberproto.extend({
  create: null
});

const application = {
  init () {
    Object.assign(this, {
      version,
      methods: [
        'find', 'get', 'create', 'update', 'patch', 'remove'
      ],
      mixins: [],
      services: {},
      providers: [],
      _setup: false,
      settings: {}
    });

    this.configure(hooks());
    this.configure(events());
  },

  get (name) {
    return this.settings[name];
  },

  set (name, value) {
    this.settings[name] = value;
    return this;
  },

  disable (name) {
    this.settings[name] = false;
    return this;
  },

  disabled (name) {
    return !this.settings[name];
  },

  enable (name) {
    this.settings[name] = true;
    return this;
  },

  enabled (name) {
    return !!this.settings[name];
  },

  configure (fn) {
    fn.call(this, this);

    return this;
  },

  service (path, service) {
    if (typeof service !== 'undefined') {
      throw new Error('Registering a new service with `app.service(path, service)` is no longer supported. Use `app.use(path, service)` instead.');
    }

    const location = stripSlashes(path);
    const current = this.services[location];

    if (typeof current === 'undefined' && typeof this.defaultService === 'function') {
      return this.use(`/${location}`, this.defaultService(location))
        .service(location);
    }

    return current;
  },

  use (path, service, options = {}) {
    if (typeof path !== 'string' || stripSlashes(path) === '') {
      throw new Error(`'${path}' is not a valid service path.`);
    }

    const location = stripSlashes(path);
    const isSubApp = typeof service.service === 'function' && service.services;
    const isService = this.methods.concat('setup').some(name =>
      (service && typeof service[name] === 'function')
    );

    if (isSubApp) {
      const subApp = service;

      Object.keys(subApp.services).forEach(subPath =>
        this.use(`${location}/${subPath}`, subApp.service(subPath))
      );

      return this;
    }

    if (!isService) {
      throw new Error(`Invalid service object passed for path \`${location}\``);
    }

    // If the service is already Uberproto'd use it directly
    const protoService = Proto.isPrototypeOf(service) ? service : Proto.extend(service);

    debug(`Registering new service at \`${location}\``);

    // Add all the mixins
    this.mixins.forEach(fn => fn.call(this, protoService, location, options));

    if (typeof protoService._setup === 'function') {
      protoService._setup(this, location);
    }

    // Run the provider functions to register the service
    this.providers.forEach(provider =>
      provider.call(this, protoService, location, options)
    );

    // If we ran setup already, set this service up explicitly
    if (this._isSetup && typeof protoService.setup === 'function') {
      debug(`Setting up service for \`${location}\``);
      protoService.setup(this, location);
    }

    this.services[location] = protoService;

    return this;
  },

  setup () {
    // Setup each service (pass the app so that they can look up other services etc.)
    Object.keys(this.services).forEach(path => {
      const service = this.services[path];

      debug(`Setting up service for \`${path}\``);

      if (typeof service.setup === 'function') {
        service.setup(this, path);
      }
    });

    this._isSetup = true;

    return this;
  }
};

module.exports = application;


/***/ }),

/***/ "./node_modules/@feathersjs/feathers/lib/events.js":
/***/ (function(module, exports, __webpack_require__) {

const { EventEmitter } = __webpack_require__("./node_modules/events/events.js");
const Proto = __webpack_require__("./node_modules/uberproto/lib/proto.js");

// Returns a hook that emits service events. Should always be
// used as the very last hook in the chain
const eventHook = exports.eventHook = function eventHook () {
  return function (hook) {
    const { app, service } = hook;
    const eventName = app.eventMappings[hook.method];
    const isHookEvent = service._hookEvents && service._hookEvents.indexOf(eventName) !== -1;

    // If this event is not being sent yet and we are not in an error hook
    if (eventName && isHookEvent && hook.type !== 'error') {
      const results = Array.isArray(hook.result) ? hook.result : [ hook.result ];

      results.forEach(element => service.emit(eventName, element, hook));
    }
  };
};

// Mixin that turns a service into a Node event emitter
const eventMixin = exports.eventMixin = function eventMixin (service) {
  if (service._serviceEvents) {
    return;
  }

  const app = this;
  // Indicates if the service is already an event emitter
  const isEmitter = typeof service.on === 'function' &&
    typeof service.emit === 'function';

  // If not, mix it in (the service is always an Uberproto object that has a .mixin)
  if (typeof service.mixin === 'function' && !isEmitter) {
    service.mixin(EventEmitter.prototype);
  }

  // Define non-enumerable properties of
  Object.defineProperties(service, {
    // A list of all events that this service sends
    _serviceEvents: {
      value: Array.isArray(service.events) ? service.events.slice() : []
    },

    // A list of events that should be handled through the event hooks
    _hookEvents: {
      value: []
    }
  });

  // `app.eventMappings` has the mapping from method name to event name
  Object.keys(app.eventMappings).forEach(method => {
    const event = app.eventMappings[method];
    const alreadyEmits = service._serviceEvents.indexOf(event) !== -1;

    // Add events for known methods to _serviceEvents and _hookEvents
    // if the service indicated it does not send it itself yet
    if (typeof service[method] === 'function' && !alreadyEmits) {
      service._serviceEvents.push(event);
      service._hookEvents.push(event);
    }
  });
};

module.exports = function () {
  return function (app) {
    // Mappings from service method to event name
    Object.assign(app, {
      eventMappings: {
        create: 'created',
        update: 'updated',
        remove: 'removed',
        patch: 'patched'
      }
    });

    // Register the event hook
    // `finally` hooks always run last after `error` and `after` hooks
    app.hooks({ finally: eventHook() });

    // Make the app an event emitter
    Proto.mixin(EventEmitter.prototype, app);

    app.mixins.push(eventMixin);
  };
};


/***/ }),

/***/ "./node_modules/@feathersjs/feathers/lib/hooks.js":
/***/ (function(module, exports, __webpack_require__) {

const { hooks, validateArguments, isPromise, _ } = __webpack_require__("./node_modules/@feathersjs/commons/lib/commons.js");

const {
  createHookObject,
  getHooks,
  processHooks,
  enableHooks,
  makeArguments
} = hooks;

// A service mixin that adds `service.hooks()` method and functionality
const hookMixin = exports.hookMixin = function hookMixin (service) {
  if (typeof service.hooks === 'function') {
    return;
  }

  const app = this;
  const methods = app.methods;
  const mixin = {};

  // Add .hooks method and properties to the service
  enableHooks(service, methods, app.hookTypes);

  // Assemble the mixin object that contains all "hooked" service methods
  methods.forEach(method => {
    if (typeof service[method] !== 'function') {
      return;
    }

    mixin[method] = function () {
      const service = this;
      const args = Array.from(arguments);
      // If the last argument is `true` we want to return
      // the actual hook object instead of the result
      const returnHook = args[args.length - 1] === true
        ? args.pop() : false;

      // A reference to the original method
      const _super = service._super.bind(service);
      // Create the hook object that gets passed through
      const hookObject = createHookObject(method, args, {
        type: 'before', // initial hook object type
        service,
        app
      });
      // A hook that validates the arguments and will always be the very first
      const validateHook = context => {
        validateArguments(method, args);

        return context;
      };
      // The `before` hook chain (including the validation hook)
      const beforeHooks = [ validateHook, ...getHooks(app, service, 'before', method) ];

      // Process all before hooks
      return processHooks.call(service, beforeHooks, hookObject)
        // Use the hook object to call the original method
        .then(hookObject => {
          // If `hookObject.result` is set, skip the original method
          if (typeof hookObject.result !== 'undefined') {
            return hookObject;
          }

          // Otherwise, call it with arguments created from the hook object
          const promise = _super(...makeArguments(hookObject));

          if (!isPromise(promise)) {
            throw new Error(`Service method '${hookObject.method}' for '${hookObject.path}' service must return a promise`);
          }

          return promise.then(result => {
            hookObject.result = result;

            return hookObject;
          });
        })
        // Make a (shallow) copy of hookObject from `before` hooks and update type
        .then(hookObject => Object.assign({}, hookObject, { type: 'after' }))
        // Run through all `after` hooks
        .then(hookObject => {
          // Combine all app and service `after` and `finally` hooks and process
          const afterHooks = getHooks(app, service, 'after', method, true);
          const finallyHooks = getHooks(app, service, 'finally', method, true);
          const hookChain = afterHooks.concat(finallyHooks);

          return processHooks.call(service, hookChain, hookObject);
        })
        .then(hookObject =>
          // Finally, return the result
          // Or the hook object if the `returnHook` flag is set
          returnHook ? hookObject : hookObject.result
        )
        // Handle errors
        .catch(error => {
          // Combine all app and service `error` and `finally` hooks and process
          const errorHooks = getHooks(app, service, 'error', method, true);
          const finallyHooks = getHooks(app, service, 'finally', method, true);
          const hookChain = errorHooks.concat(finallyHooks);

          // A shallow copy of the hook object
          const errorHookObject = _.omit(Object.assign({}, error.hook, hookObject, {
            type: 'error',
            original: error.hook,
            error
          }), 'result');

          return processHooks.call(service, hookChain, errorHookObject)
            .catch(error => {
              errorHookObject.error = error;

              return errorHookObject;
            })
            .then(hook => {
              if (returnHook) {
                // Either resolve or reject with the hook object
                return typeof hook.result !== 'undefined' ? hook : Promise.reject(hook);
              }

              // Otherwise return either the result if set (to swallow errors)
              // Or reject with the hook error
              return typeof hook.result !== 'undefined' ? hook.result : Promise.reject(hook.error);
            });
        });
    };
  });

  service.mixin(mixin);
};

module.exports = function () {
  return function (app) {
    // We store a reference of all supported hook types on the app
    // in case someone needs it
    Object.assign(app, {
      hookTypes: [ 'before', 'after', 'error', 'finally' ]
    });

    // Add functionality for hooks to be registered as app.hooks
    enableHooks(app, app.methods, app.hookTypes);

    app.mixins.push(hookMixin);
  };
};


/***/ }),

/***/ "./node_modules/@feathersjs/feathers/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

const { hooks } = __webpack_require__("./node_modules/@feathersjs/commons/lib/commons.js");
const Proto = __webpack_require__("./node_modules/uberproto/lib/proto.js");
const Application = __webpack_require__("./node_modules/@feathersjs/feathers/lib/application.js");
const version = __webpack_require__("./node_modules/@feathersjs/feathers/lib/version.js");

function createApplication () {
  const app = {};

  // Mix in the base application
  Proto.mixin(Application, app);

  app.init();

  return app;
}

createApplication.version = version;
createApplication.SKIP = hooks.SKIP;

module.exports = createApplication;

// For better ES module (TypeScript) compatibility
module.exports.default = createApplication;


/***/ }),

/***/ "./node_modules/@feathersjs/feathers/lib/version.js":
/***/ (function(module, exports) {

module.exports = '3.1.5';


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/angular-http-client.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class AngularHttpService extends Base {
  request (options, params) {
    const httpClient = this.connection;
    const HttpHeaders = this.options.HttpHeaders;

    if (!httpClient || !HttpHeaders) {
      throw new Error(`Please pass angular's 'httpClient' (instance) and and object with 'HttpHeaders' (class) to feathers-rest`);
    }

    const url = options.url;
    const { connection = {} } = params;
    const headers = new HttpHeaders(
      Object.assign(
        { Accept: 'application/json' },
        this.options.headers,
        options.headers,
        connection.headers
      )
    );
    const requestOptions = Object.assign({
      // method: options.method,
      body: options.body
    }, params.connection, { headers });

    return new Promise((resolve, reject) => {
      httpClient.request(options.method, url, requestOptions)
        .subscribe(resolve, reject);
    })
      .catch(error => {
        const e = error.error;

        if (e) {
          throw (typeof e === 'string' ? JSON.parse(e) : e);
        }

        throw error;
      });
  }
}

module.exports = AngularHttpService;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/angular.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class AngularService extends Base {
  request (options, params) {
    const http = this.connection;
    const Headers = this.options.Headers;

    if (!http || !Headers) {
      throw new Error(`Please pass angular's 'http' (instance) and and object with 'Headers' (class) to feathers-rest`);
    }

    const url = options.url;
    const { connection = {} } = params;
    const headers = new Headers(
      Object.assign(
        { Accept: 'application/json' },
        this.options.headers,
        options.headers,
        connection.headers
      )
    );
    const requestOptions = Object.assign({
      method: options.method,
      body: options.body
    }, connection, { headers });

    return new Promise((resolve, reject) => {
      http.request(url, requestOptions)
        .subscribe(resolve, reject);
    })
      .then(res => res.json())
      .catch(error => {
        const response = error.response || error;

        throw response instanceof Error ? response : (response.json() || response);
      });
  }
}

module.exports = AngularService;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class AxiosService extends Base {
  request (options, params) {
    const config = Object.assign({
      url: options.url,
      method: options.method,
      data: options.body,
      headers: Object.assign({
        Accept: 'application/json'
      }, this.options.headers, options.headers)
    }, params.connection);

    return this.connection.request(config)
      .then(res => res.data)
      .catch(error => {
        const response = error.response || error;

        throw response instanceof Error ? response : (response.data || response);
      });
  }
}

module.exports = AxiosService;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/base.js":
/***/ (function(module, exports, __webpack_require__) {

const query = __webpack_require__("./node_modules/qs/lib/index.js");
const { Unavailable } = __webpack_require__("./node_modules/@feathersjs/errors/lib/index.js");
const { _ } = __webpack_require__("./node_modules/@feathersjs/commons/lib/commons.js");
const { stripSlashes } = __webpack_require__("./node_modules/@feathersjs/commons/lib/commons.js");
const { convert } = __webpack_require__("./node_modules/@feathersjs/errors/lib/index.js");

function toError (error) {
  if (error.code === 'ECONNREFUSED') {
    throw new Unavailable(error.message, _.pick(error, 'address', 'port', 'config'));
  }

  throw convert(error);
}

class Base {
  constructor (settings) {
    this.name = stripSlashes(settings.name);
    this.options = settings.options;
    this.connection = settings.connection;
    this.base = `${settings.base}/${this.name}`;
  }

  makeUrl (params, id) {
    params = params || {};
    let url = this.base;

    if (typeof id !== 'undefined' && id !== null) {
      url += `/${id}`;
    }

    if (Object.keys(params).length !== 0) {
      const queryString = query.stringify(params);

      url += `?${queryString}`;
    }

    return url;
  }

  find (params = {}) {
    return this.request({
      url: this.makeUrl(params.query),
      method: 'GET',
      headers: Object.assign({}, params.headers)
    }, params).catch(toError);
  }

  get (id, params = {}) {
    if (typeof id === 'undefined') {
      return Promise.reject(new Error(`id for 'get' can not be undefined`));
    }

    return this.request({
      url: this.makeUrl(params.query, id),
      method: 'GET',
      headers: Object.assign({}, params.headers)
    }, params).catch(toError);
  }

  create (body, params = {}) {
    return this.request({
      url: this.makeUrl(params.query),
      body,
      method: 'POST',
      headers: Object.assign({ 'Content-Type': 'application/json' }, params.headers)
    }, params).catch(toError);
  }

  update (id, body, params = {}) {
    if (typeof id === 'undefined') {
      return Promise.reject(new Error(`id for 'update' can not be undefined, only 'null' when updating multiple entries`));
    }

    return this.request({
      url: this.makeUrl(params.query, id),
      body,
      method: 'PUT',
      headers: Object.assign({ 'Content-Type': 'application/json' }, params.headers)
    }, params).catch(toError);
  }

  patch (id, body, params = {}) {
    if (typeof id === 'undefined') {
      return Promise.reject(new Error(`id for 'patch' can not be undefined, only 'null' when updating multiple entries`));
    }

    return this.request({
      url: this.makeUrl(params.query, id),
      body,
      method: 'PATCH',
      headers: Object.assign({ 'Content-Type': 'application/json' }, params.headers)
    }, params).catch(toError);
  }

  remove (id, params = {}) {
    if (typeof id === 'undefined') {
      return Promise.reject(new Error(`id for 'remove' can not be undefined, only 'null' when removing multiple entries`));
    }

    return this.request({
      url: this.makeUrl(params.query, id),
      method: 'DELETE',
      headers: Object.assign({}, params.headers)
    }, params).catch(toError);
  }
}

module.exports = Base;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/fetch.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class FetchService extends Base {
  request (options, params) {
    let fetchOptions = Object.assign({}, options, params.connection);

    fetchOptions.headers = Object.assign({
      Accept: 'application/json'
    }, this.options.headers, fetchOptions.headers);

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }

    const fetch = this.connection;

    return fetch(options.url, fetchOptions)
      .then(this.checkStatus)
      .then(response => {
        if (response.status === 204) {
          return null;
        }

        return response.json();
      });
  }

  checkStatus (response) {
    if (response.ok) {
      return response;
    }

    return response.json().then(error => {
      error.response = response;
      throw error;
    });
  }
}

module.exports = FetchService;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

const jQuery = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/jquery.js");
const Superagent = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/superagent.js");
const Request = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/request.js");
const Fetch = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/fetch.js");
const Axios = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/axios.js");
const Angular = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/angular.js");
const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");
const AngularHttpClient = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/angular-http-client.js");

const transports = {
  jquery: jQuery,
  superagent: Superagent,
  request: Request,
  fetch: Fetch,
  axios: Axios,
  angular: Angular,
  angularHttpClient: AngularHttpClient
};

function restClient (base = '') {
  const result = { Base };

  Object.keys(transports).forEach(key => {
    const Service = transports[key];

    result[key] = function (connection, options = {}) {
      if (!connection) {
        throw new Error(`${key} has to be provided to feathers-rest`);
      }

      const defaultService = function (name) {
        return new Service({ base, name, connection, options });
      };

      const initialize = function () {
        if (typeof this.defaultService === 'function') {
          throw new Error('Only one default client provider can be configured');
        }

        this.rest = connection;
        this.defaultService = defaultService;
      };

      initialize.Service = Service;
      initialize.service = defaultService;

      return initialize;
    };
  });

  return result;
}

module.exports = restClient;
module.exports.default = restClient;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/jquery.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class jQueryService extends Base {
  request (options, params) {
    const { connection = {} } = params;
    const headers = Object.assign({}, options.headers, this.options.headers, connection.headers);
    const opts = Object.assign({
      dataType: options.type || 'json'
    }, connection, options, { headers });

    if (options.body) {
      opts.data = JSON.stringify(options.body);
      opts.contentType = 'application/json';
    }

    delete opts.type;
    delete opts.body;

    return new Promise((resolve, reject) => {
      this.connection.ajax(opts).then(resolve, xhr => {
        let error = xhr.responseText;

        try {
          error = JSON.parse(error);
        } catch (e) {
          error = new Error(xhr.responseText);
        }

        error.xhr = error.response = xhr;

        reject(error);
      });
    });
  }
}

module.exports = jQueryService;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/request.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class RequestService extends Base {
  request (options, params) {
    return new Promise((resolve, reject) => {
      const { connection = {} } = params;
      const headers = Object.assign({}, options.headers, connection.headers);

      this.connection(Object.assign({
        json: true
      }, options, params.connection, { headers }), function (error, res, data) {
        if (error) {
          return reject(error);
        }

        if (!error && res.statusCode >= 400) {
          if (typeof data === 'string') {
            return reject(new Error(data));
          }

          data.response = res;

          return reject(Object.assign(new Error(data.message), data));
        }

        resolve(data);
      });
    });
  }
}

module.exports = RequestService;


/***/ }),

/***/ "./node_modules/@feathersjs/rest-client/lib/superagent.js":
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__("./node_modules/@feathersjs/rest-client/lib/base.js");

class SuperagentService extends Base {
  request (options, params) {
    const superagent = this.connection(options.method, options.url)
      .set(this.options.headers || {})
      .set('Accept', 'application/json')
      .set(params.connection || {})
      .set(options.headers || {})
      .type(options.type || 'json');

    return new Promise((resolve, reject) => {
      superagent.set(options.headers);

      if (options.body) {
        superagent.send(options.body);
      }

      superagent.end(function (error, res) {
        if (error) {
          try {
            const response = error.response;
            error = JSON.parse(error.response.text);
            error.response = response;
          } catch (e) {}

          return reject(error);
        }

        resolve(res && res.body);
      });
    });
  }
}

module.exports = SuperagentService;


/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var settle = __webpack_require__("./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__("./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__("./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__("./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/events/events.js":
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: this.linkClicked // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__("./node_modules/qs/lib/parse.js");
var formats = __webpack_require__("./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/qs/lib/utils.js");
var formats = __webpack_require__("./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/uberproto/lib/proto.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
/**
 * A base object for ECMAScript 5 style prototypal inheritance.
 *
 * @see https://github.com/rauschma/proto-js/
 * @see http://ejohn.org/blog/simple-javascript-inheritance/
 * @see http://uxebu.com/blog/2011/02/23/object-based-inheritance-for-ecmascript-5/
 */
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Proto = factory();
	}
}(this, function () {

	function makeSuper(_super, old, name, fn) {
		return function () {
			var tmp = this._super;

			// Add a new ._super() method that is the same method
			// but either pointing to the prototype method
			// or to the overwritten method
			this._super = (typeof old === 'function') ? old : _super[name];

			// The method only need to be bound temporarily, so we
			// remove it when we're done executing
			var ret = fn.apply(this, arguments);
			this._super = tmp;

			return ret;
		};
	}

	function legacyMixin(prop, obj) {
		var self = obj || this;
		var fnTest = /\b_super\b/;
		var _super = Object.getPrototypeOf(self) || self.prototype;
		var _old;

		// Copy the properties over
		for (var name in prop) {
			// store the old function which would be overwritten
			_old = self[name];

			// Check if we're overwriting an existing function
			if(
					((
						typeof prop[name] === 'function' &&
						typeof _super[name] === 'function'
					) || (
						typeof _old === 'function' &&
						typeof prop[name] === 'function'
					)) && fnTest.test(prop[name])
			) {
				self[name] = makeSuper(_super, _old, name, prop[name]);
			} else {
				self[name] = prop[name];
			}
		}

		return self;
	}

	function es5Mixin(prop, obj) {
		var self = obj || this;
		var fnTest = /\b_super\b/;
		var _super = Object.getPrototypeOf(self) || self.prototype;
		var descriptors = {};
		var proto = prop;
		var processProperty = function(name) {
			if(!descriptors[name]) {
				descriptors[name] = Object.getOwnPropertyDescriptor(proto, name);
			}
		};

		// Collect all property descriptors
		do {
			Object.getOwnPropertyNames(proto).forEach(processProperty);
    } while((proto = Object.getPrototypeOf(proto)) && Object.getPrototypeOf(proto));
		
		Object.keys(descriptors).forEach(function(name) {
			var descriptor = descriptors[name];

			if(typeof descriptor.value === 'function' && fnTest.test(descriptor.value)) {
				descriptor.value = makeSuper(_super, self[name], name, descriptor.value);
			}

			Object.defineProperty(self, name, descriptor);
		});

		return self;
	}

	return {
		/**
		 * Create a new object using Object.create. The arguments will be
		 * passed to the new instances init method or to a method name set in
		 * __init.
		 */
		create: function () {
			var instance = Object.create(this);
			var init = typeof instance.__init === 'string' ? instance.__init : 'init';

			if (typeof instance[init] === 'function') {
				instance[init].apply(instance, arguments);
			}
			return instance;
		},
		/**
		 * Mixin a given set of properties
		 * @param prop The properties to mix in
		 * @param obj [optional] The object to add the mixin
		 */
		mixin: typeof Object.defineProperty === 'function' ? es5Mixin : legacyMixin,
		/**
		 * Extend the current or a given object with the given property
		 * and return the extended object.
		 * @param prop The properties to extend with
		 * @param obj [optional] The object to extend from
		 * @returns The extended object
		 */
		extend: function (prop, obj) {
			return this.mixin(prop, Object.create(obj || this));
		},
		/**
		 * Return a callback function with this set to the current or a given context object.
		 * @param name Name of the method to proxy
		 * @param args... [optional] Arguments to use for partial application
		 */
		proxy: function (name) {
			var fn = this[name];
			var args = Array.prototype.slice.call(arguments, 1);

			args.unshift(this);
			return fn.bind.apply(fn, args);
		}
	};

}));


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_Header__ = __webpack_require__("./container/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_components_Layout__ = __webpack_require__("./container/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_VideoMain__ = __webpack_require__("./container/VideoMain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__container_components_Footer__ = __webpack_require__("./container/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api__ = __webpack_require__("./api.js");

var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\video.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
var _default = Video;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Video, "Video", "C:\\React\\next-guitar-website\\pages\\video.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\pages\\video.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/video")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/video.js");


/***/ })

},[6])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=video.js.map