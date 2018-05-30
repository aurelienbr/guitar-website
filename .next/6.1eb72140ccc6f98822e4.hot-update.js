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
  console.log(tabs);
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3973917943"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__container_Header__["a" /* default */], {
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), tabs.map(function (tab) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__container_Tab__["a" /* default */], {
      url: tab.url,
      title: tab.author,
      date: "12/11/1996",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3973917943",
    css: "body{font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCUyxBQUc0RSxBQUcxQyxrREFDdkIsV0FIQSIsImZpbGUiOiJwYWdlc1xcdGFicy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29udGFpbmVyL0hlYWRlclwiO1xyXG5pbXBvcnQgVGFic0NvbXBvbmVudCBmcm9tIFwiLi4vY29udGFpbmVyL1RhYlwiO1xyXG5cclxuY29uc3QgVGFicyA9ICh7IHBhdGhuYW1lLCB0YWJzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyh0YWJzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciBwYXRobmFtZT17cGF0aG5hbWV9IC8+XHJcbiAgICAgIHt0YWJzLm1hcCh0YWIgPT4gKFxyXG4gICAgICAgIDxUYWJzQ29tcG9uZW50IHVybD17dGFiLnVybH0gdGl0bGU9e3RhYi5hdXRob3J9IGRhdGU9e1wiMTIvMTEvMTk5NlwifSAvPlxyXG4gICAgICApKX1cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuVGFicy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHsgcGF0aG5hbWU6IGNvbnRleHQucGF0aG5hbWUgfTtcclxufTtcclxuXHJcblRhYnMucHJvcFR5cGVzID0ge1xyXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHZpZGVvcyB9KSA9PiAoe1xyXG4gIHRhYnM6IHZpZGVvcy50YWJzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhYnMpO1xyXG4iXX0= */\n/*@ sourceURL=pages\\tabs.js */"
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
//# sourceMappingURL=6.1eb72140ccc6f98822e4.hot-update.js.map