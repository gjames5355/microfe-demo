"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("realPages_core_js",{

/***/ "./realPages/core.js":
/*!***************************!*\
  !*** ./realPages/core.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"../node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"../node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar Core = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-71951eac013e1c14\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        className: \"jsx-71951eac013e1c14\",\n                        /*#__PURE__*/ children: \"Core\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-71951eac013e1c14\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-71951eac013e1c14\" + \" \" + \"hero\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        onClick: function() {\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)();\n                        },\n                        children: \"Log Out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"48px\"\n                        },\n                        className: \"jsx-71951eac013e1c14\" + \" \" + \"title\",\n                        children: \"Vision Core\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        className: \"jsx-71951eac013e1c14\" + \" \" + \"title\",\n                        children: \"This is a federated page owned by localhost:3000\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"jsx-71951eac013e1c14\",\n                        children: [\n                            \" \",\n                            \"Data from federated \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                                className: \"jsx-71951eac013e1c14\",\n                                children: \"getInitalProps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {\n                        className: \"jsx-71951eac013e1c14\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                        className: \"jsx-71951eac013e1c14\",\n                        children: JSON.stringify(props, null, 2)\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"71951eac013e1c14\",\n                children: \".hero.jsx-71951eac013e1c14{width:100%;color:#333}.title.jsx-71951eac013e1c14{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:20px}.title.jsx-71951eac013e1c14,.description.jsx-71951eac013e1c14{text-align:center}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, _this);\n};\n_c = Core;\nCore.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var session, ref, ref1;\n        return _Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getSession)({\n                        req: ctx.req\n                    });\n                case 2:\n                    session = _ctx.sent;\n                    if (session) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    ;\n                    (ref = ctx.res) === null || ref === void 0 ? void 0 : ref.writeHead(302, {\n                        Location: \"/login\"\n                    });\n                    (ref1 = ctx.res) === null || ref1 === void 0 ? void 0 : ref1.end();\n                    return _ctx.abrupt(\"return\", {});\n                case 10:\n                    return _ctx.abrupt(\"return\", {\n                        session: session\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\nvar _c;\n$RefreshReg$(_c, \"Core\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFsUGFnZXMvY29yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNxQztBQUMzQjtBQUV2QyxJQUFNTSxJQUFJLEdBQUcsU0FBQ0MsS0FBSzt5QkFDakIsOERBQUNDLEtBQUc7OzswQkFDRiw4REFBQ1Asa0RBQUk7O2tDQUNILDhEQUFDUSxPQUFLOztnREFBQyxNQUFJOzs7Ozs2QkFBUTtrQ0FDbkIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2xDOzBCQUVQLDhEQUFDSixLQUFHOzBEQUFXLE1BQU07O2tDQUNuQiw4REFBQ0gsaURBQU07d0JBQ0xRLE9BQU8sRUFBRSxXQUFNOzRCQUNiVix3REFBTyxFQUFFLENBQUM7eUJBQ1g7a0NBQUUsU0FFTDs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNXLElBQUU7d0JBQW1CQyxLQUFLLEVBQUU7NEJBQUVDLFFBQVEsRUFBRSxNQUFNO3lCQUFFO2tFQUFuQyxPQUFPO2tDQUE4QixhQUVuRDs7Ozs7NkJBQUs7a0NBQ0wsOERBQUNDLElBQUU7a0VBQVcsT0FBTztrQ0FBQyxrREFFdEI7Ozs7OzZCQUFLO2tDQUNMLDhEQUFDQyxNQUFJOzs7NEJBQ0YsR0FBRzs0QkFBQyxzQkFDZTswQ0FBQSw4REFBQ0MsS0FBRzs7MENBQUMsZ0JBQWM7Ozs7O3FDQUFNOzs7Ozs7NkJBQ3hDO2tDQUNQLDhEQUFDQyxJQUFFOzs7Ozs7NkJBQUc7a0NBQ04sOERBQUNELEtBQUc7O2tDQUFFRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ2YsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Ozs7OzZCQUFPOzs7Ozs7cUJBQ3ZDOzs7Ozs7Ozs7O2FBa0JGO0NBQ1A7QUE3Q0tELEtBQUFBLElBQUk7QUE4Q1ZBLElBQUksQ0FBQ2lCLGVBQWU7ZUFBRyxnTEFBT0MsR0FBRyxFQUFLO1lBSTlCQyxPQUFPLEVBR1hELEdBQU8sRUFHUEEsSUFBTzs7Ozs7MkJBTmF0QiwyREFBVSxDQUFDO3dCQUFFd0IsR0FBRyxFQUFFRixHQUFHLENBQUNFLEdBQUc7cUJBQUUsQ0FBQzs7b0JBQTVDRCxPQUFPLFlBQXFDO3dCQUU3Q0EsT0FBTzs7Ozs7b0JBQ1ZELENBQUFBLEdBQU8sR0FBUEEsR0FBRyxDQUFDRyxHQUFHLGNBQVBILEdBQU8sV0FBVyxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLEdBQU8sQ0FBRUksU0FBUyxDQUFDLEdBQUcsRUFBRTt3QkFDdEJDLFFBQVEsRUFBRSxRQUFRO3FCQUNuQixDQUFDLENBQUM7b0JBQ0hMLENBQUFBLElBQU8sR0FBUEEsR0FBRyxDQUFDRyxHQUFHLGNBQVBILElBQU8sV0FBSyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLElBQU8sQ0FBRU0sR0FBRyxFQUFFLENBQUM7aURBQ1IsRUFBRTs7aURBRUY7d0JBQUVMLE9BQU8sRUFBRUEsT0FBTztxQkFBRTs7Ozs7O0tBRTlCO29CQWY2QkQsR0FBRzs7O0dBZWhDLENBQUM7QUFDRiwrREFBZWxCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWFsUGFnZXMvY29yZS5qcz83N2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgQ29yZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkNvcmU8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2lnbk91dCgpO1xuICAgICAgICB9fT5cbiAgICAgICAgTG9nIE91dFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZScgc3R5bGU9e3sgZm9udFNpemU6ICc0OHB4JyB9fT5cbiAgICAgICAgVmlzaW9uIENvcmVcbiAgICAgIDwvaDE+XG4gICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgIFRoaXMgaXMgYSBmZWRlcmF0ZWQgcGFnZSBvd25lZCBieSBsb2NhbGhvc3Q6MzAwMFxuICAgICAgPC9oMz5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7JyAnfVxuICAgICAgICBEYXRhIGZyb20gZmVkZXJhdGVkIDxwcmU+Z2V0SW5pdGFsUHJvcHM8L3ByZT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxiciAvPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5Db3JlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8gY29uc3Qgc3dhcGkgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLzEnKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgLy8gcmV0dXJuIHN3YXBpO1xuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjdHgucmVxIH0pO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIGN0eC5yZXM/LndyaXRlSGVhZCgzMDIsIHtcbiAgICAgIExvY2F0aW9uOiAnL2xvZ2luJyxcbiAgICB9KTtcbiAgICBjdHgucmVzPy5lbmQoKTtcbiAgICByZXR1cm4ge307XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgc2Vzc2lvbjogc2Vzc2lvbiB9O1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29yZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJnZXRTZXNzaW9uIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJCdXR0b24iLCJDb3JlIiwicHJvcHMiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwib25DbGljayIsImgxIiwic3R5bGUiLCJmb250U2l6ZSIsImgzIiwic3BhbiIsInByZSIsImJyIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInNlc3Npb24iLCJyZXEiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./realPages/core.js\n");

/***/ })

});