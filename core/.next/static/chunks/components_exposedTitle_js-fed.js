"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcore"] = self["webpackChunkcore"] || []).push([["components_exposedTitle_js"],{

/***/ "./components/exposedTitle.js":
/*!************************************!*\
  !*** ./components/exposedTitle.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react?48ee\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ExportredTitle = function() {\n    _s();\n    console.log(\"---------loading remote component---------\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"HOOKS WORKS\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hero\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: [\n                    \" \",\n                    \"This came fom \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        children: \"checkout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/components/exposedTitle.js\",\n                        lineNumber: 11,\n                        columnNumber: 23\n                    }, _this),\n                    \" !!!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawn/microfe/microfe-demo/core/components/exposedTitle.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"description\",\n                children: \"And it works like a charm v2\"\n            }, void 0, false, {\n                fileName: \"/Users/shawn/microfe/microfe-demo/core/components/exposedTitle.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shawn/microfe/microfe-demo/core/components/exposedTitle.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_s(ExportredTitle, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ExportredTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportredTitle);\nvar _c;\n$RefreshReg$(_c, \"ExportredTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4cG9zZWRUaXRsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF5Qzs7QUFDekMsSUFBTUUsY0FBYyxHQUFHLFdBQU07O0lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzFESCxnREFBUyxDQUFDLFdBQU07UUFDZEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDNUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDbkIsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxPQUFPOztvQkFDbEIsR0FBRztvQkFBQyxnQkFDUztrQ0FBQSw4REFBQ0UsTUFBSTtrQ0FBQyxVQUFROzs7Ozs2QkFBTztvQkFBQSxNQUNyQzs7Ozs7O3FCQUFLOzBCQUNMLDhEQUFDQyxHQUFDO2dCQUFDSCxTQUFTLEVBQUMsYUFBYTswQkFBQyw4QkFBNEI7Ozs7O3FCQUFJOzs7Ozs7YUFDdkQsQ0FDTjtDQUNIO0dBZEtKLGNBQWM7QUFBZEEsS0FBQUEsY0FBYztBQWdCcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcmUvLi9jb21wb25lbnRzL2V4cG9zZWRUaXRsZS5qcz9iNDkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBFeHBvcnRyZWRUaXRsZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJy0tLS0tLS0tLWxvYWRpbmcgcmVtb3RlIGNvbXBvbmVudC0tLS0tLS0tLScpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdIT09LUyBXT1JLUycpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgVGhpcyBjYW1lIGZvbSA8Y29kZT5jaGVja291dDwvY29kZT4gISEhXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5BbmQgaXQgd29ya3MgbGlrZSBhIGNoYXJtIHYyPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0cmVkVGl0bGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJFeHBvcnRyZWRUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImNvZGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/exposedTitle.js\n");

/***/ })

}]);