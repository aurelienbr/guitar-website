webpackHotUpdate(4,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_Header__ = __webpack_require__("./container/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_Tab__ = __webpack_require__("./container/Tab.js");

var _jsxFileName = "C:\\React\\next-guitar-website\\pages\\tabs.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var TabData = [{
  url: "http://hjg.com.ar/ghibli/musica/mononoke/",
  type: "url",
  title: "Princesse mononoke",
  date: "22/05/2018"
}, {
  url: "see_you_again.pdf",
  type: "pdf",
  title: "Nausicaa de la vallée du vent",
  date: "19/05/2018"
}, {
  url: "http://hjg.com.ar/ghibli/musica/mononoke/",
  type: "url",
  title: "Le chateau dans le ciel",
  date: "24/04/2018"
}];

var Tabs = function Tabs(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-430843866"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__container_Header__["a" /* default */], {
    pathname: props.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), TabData.map(function (tab) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__container_Tab__["a" /* default */], {
      url: tab.url,
      title: tab.title,
      date: tab.date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "430843866",
    css: "body{font-family:\"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDTyxBQUcwRSxBQUcxQyxrREFDdkIsV0FIQSIsImZpbGUiOiJwYWdlc1xcdGFicy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcUmVhY3RcXG5leHQtZ3VpdGFyLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9IZWFkZXJcIjtcclxuaW1wb3J0IFRhYnNDb21wb25lbnQgZnJvbSBcIi4uL2NvbnRhaW5lci9UYWJcIjtcclxuXHJcbmNvbnN0IFRhYkRhdGEgPSBbXHJcbiAge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9oamcuY29tLmFyL2doaWJsaS9tdXNpY2EvbW9ub25va2UvXCIsXHJcbiAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgdGl0bGU6IFwiUHJpbmNlc3NlIG1vbm9ub2tlXCIsXHJcbiAgICBkYXRlOiBcIjIyLzA1LzIwMThcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdXJsOiBcInNlZV95b3VfYWdhaW4ucGRmXCIsXHJcbiAgICB0eXBlOiBcInBkZlwiLFxyXG4gICAgdGl0bGU6IFwiTmF1c2ljYWEgZGUgbGEgdmFsbMOpZSBkdSB2ZW50XCIsXHJcbiAgICBkYXRlOiBcIjE5LzA1LzIwMThcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9oamcuY29tLmFyL2doaWJsaS9tdXNpY2EvbW9ub25va2UvXCIsXHJcbiAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgdGl0bGU6IFwiTGUgY2hhdGVhdSBkYW5zIGxlIGNpZWxcIixcclxuICAgIGRhdGU6IFwiMjQvMDQvMjAxOFwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgVGFicyA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWRlciBwYXRobmFtZT17cHJvcHMucGF0aG5hbWV9IC8+XHJcbiAgICB7VGFiRGF0YS5tYXAodGFiID0+IChcclxuICAgICAgPFRhYnNDb21wb25lbnQgdXJsPXt0YWIudXJsfSB0aXRsZT17dGFiLnRpdGxlfSBkYXRlPXt0YWIuZGF0ZX0gLz5cclxuICAgICkpfVxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuVGFicy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHsgcGF0aG5hbWU6IGNvbnRleHQucGF0aG5hbWUgfTtcclxufTtcclxuXHJcblRhYnMucHJvcFR5cGVzID0ge1xyXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\tabs.js */"
  }));
};

Tabs.getInitialProps =
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

Tabs.propTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string.isRequired
};
var _default = Tabs;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabData, "TabData", "C:\\React\\next-guitar-website\\pages\\tabs.js");
  reactHotLoader.register(Tabs, "Tabs", "C:\\React\\next-guitar-website\\pages\\tabs.js");
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
//# sourceMappingURL=4.8e3b2d756326aeb6e8a8.hot-update.js.map