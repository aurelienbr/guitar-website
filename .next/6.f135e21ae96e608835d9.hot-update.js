webpackHotUpdate(6,{

/***/ "./pages/tabs.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_Header__ = __webpack_require__("./container/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_Tab__ = __webpack_require__("./container/Tab.js");

var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\tabs.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var Tabs = function Tabs(_ref) {
  var pathname = _ref.pathname,
      tabs = _ref.tabs;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-430843866"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__container_Header__["a" /* default */], {
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), tabs.map(function (tab) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__container_Tab__["a" /* default */], {
      url: tab.url,
      title: tab.author,
      date: "12/11/1996",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "430843866",
    css: "body{font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNPLEFBRzBFLEFBRzFDLGtEQUN2QixXQUhBIiwiZmlsZSI6InBhZ2VzXFx0YWJzLmpzIiwic291cmNlUm9vdCI6IkM6XFxSZWFjdFxcbmV4dC1ndWl0YXItd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb250YWluZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBUYWJzQ29tcG9uZW50IGZyb20gXCIuLi9jb250YWluZXIvVGFiXCI7XHJcblxyXG5jb25zdCBUYWJzID0gKHsgcGF0aG5hbWUsIHRhYnMgfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgIHt0YWJzLm1hcCh0YWIgPT4gKFxyXG4gICAgICA8VGFic0NvbXBvbmVudCB1cmw9e3RhYi51cmx9IHRpdGxlPXt0YWIuYXV0aG9yfSBkYXRlPXtcIjEyLzExLzE5OTZcIn0gLz5cclxuICAgICkpfVxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuVGFicy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHsgcGF0aG5hbWU6IGNvbnRleHQucGF0aG5hbWUgfTtcclxufTtcclxuXHJcblRhYnMucHJvcFR5cGVzID0ge1xyXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHZpZGVvcyB9KSA9PiAoe1xyXG4gIHRhYnM6IHZpZGVvcy50YWJzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhYnMpO1xyXG4iXX0= */\n/*@ sourceURL=pages\\tabs.js */"
  }));
};

Tabs.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
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
    return _ref2.apply(this, arguments);
  };
}();

Tabs.propTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var videos = _ref3.videos;
  return {
    tabs: videos.tabs
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps)(Tabs);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tabs, "Tabs", "C:\\React\\next-guitar-website\\pages\\tabs.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\React\\next-guitar-website\\pages\\tabs.js");
  reactHotLoader.register(_default, "default", "C:\\React\\next-guitar-website\\pages\\tabs.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tabs")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.f135e21ae96e608835d9.hot-update.js.map