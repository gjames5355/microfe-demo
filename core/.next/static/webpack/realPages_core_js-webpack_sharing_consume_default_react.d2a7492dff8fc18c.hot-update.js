"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("realPages_core_js-webpack_sharing_consume_default_react",{

/***/ "./realPages/core.js":
/*!***************************!*\
  !*** ./realPages/core.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"../node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react?48ee\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"webpack/sharing/consume/default/next/head/next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"../node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"webpack/sharing/consume/default/next/router/next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Core = function(props) {\n    _s();\n    var session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    if (session.status === \"unathenticated\") {\n        router.replace(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-9bec464353e810e1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        className: \"jsx-9bec464353e810e1\",\n                        /*#__PURE__*/ children: \"Core\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-9bec464353e810e1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-9bec464353e810e1\" + \" \" + \"hero\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        onClick: function() {\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)();\n                        },\n                        children: \"Log Out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"48px\"\n                        },\n                        className: \"jsx-9bec464353e810e1\" + \" \" + \"title\",\n                        children: \"Vision Core\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        className: \"jsx-9bec464353e810e1\" + \" \" + \"title\",\n                        children: \"This is a federated page owned by localhost:3000\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"jsx-9bec464353e810e1\",\n                        children: [\n                            \" \",\n                            \"Data from federated \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                                className: \"jsx-9bec464353e810e1\",\n                                children: \"getInitalProps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                                lineNumber: 35,\n                                columnNumber: 31\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {\n                        className: \"jsx-9bec464353e810e1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                        className: \"jsx-9bec464353e810e1\",\n                        children: JSON.stringify(props, null, 2)\n                    }, void 0, false, {\n                        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"9bec464353e810e1\",\n                children: \".hero.jsx-9bec464353e810e1{width:100%;color:#333}.title.jsx-9bec464353e810e1{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:20px}.title.jsx-9bec464353e810e1,.description.jsx-9bec464353e810e1{text-align:center}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shawn/microfe/microfe-demo/core/realPages/core.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Core, \"CFyt82WsygxLBSuQDqWmh+XY7Ew=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Core;\nCore.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var session, ref, ref1;\n        return _Users_shawn_microfe_microfe_demo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getSession)({\n                        req: ctx.req\n                    });\n                case 2:\n                    session = _ctx.sent;\n                    if (session) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    ;\n                    (ref = ctx.res) === null || ref === void 0 ? void 0 : ref.writeHead(302, {\n                        Location: \"/login\"\n                    });\n                    (ref1 = ctx.res) === null || ref1 === void 0 ? void 0 : ref1.end();\n                    return _ctx.abrupt(\"return\", {});\n                case 10:\n                    return _ctx.abrupt(\"return\", {\n                        session: session\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\nvar _c;\n$RefreshReg$(_c, \"Core\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFsUGFnZXMvY29yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ3FDO0FBQzNCO0FBQ0M7O0FBRXhDLElBQU1PLElBQUksR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3RCLElBQU1DLE9BQU8sR0FBR0wsMkRBQVUsRUFBRTtJQUM1QixJQUFNTSxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBSUcsT0FBTyxDQUFDRSxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7UUFDdkNELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7OzswQkFDRiw4REFBQ1osa0RBQUk7O2tDQUNILDhEQUFDYSxPQUFLOztnREFBQyxNQUFJOzs7Ozs2QkFBUTtrQ0FDbkIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2xDOzBCQUVQLDhEQUFDSixLQUFHOzBEQUFXLE1BQU07O2tDQUNuQiw4REFBQ1IsaURBQU07d0JBQ0xhLE9BQU8sRUFBRSxXQUFNOzRCQUNiZix3REFBTyxFQUFFLENBQUM7eUJBQ1g7a0NBQUUsU0FFTDs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNnQixJQUFFO3dCQUFtQkMsS0FBSyxFQUFFOzRCQUFFQyxRQUFRLEVBQUUsTUFBTTt5QkFBRTtrRUFBbkMsT0FBTztrQ0FBOEIsYUFFbkQ7Ozs7OzZCQUFLO2tDQUNMLDhEQUFDQyxJQUFFO2tFQUFXLE9BQU87a0NBQUMsa0RBRXRCOzs7Ozs2QkFBSztrQ0FDTCw4REFBQ0MsTUFBSTs7OzRCQUNGLEdBQUc7NEJBQUMsc0JBQ2U7MENBQUEsOERBQUNDLEtBQUc7OzBDQUFDLGdCQUFjOzs7OztxQ0FBTTs7Ozs7OzZCQUN4QztrQ0FDUCw4REFBQ0MsSUFBRTs7Ozs7OzZCQUFHO2tDQUNOLDhEQUFDRCxLQUFHOztrQ0FBRUUsSUFBSSxDQUFDQyxTQUFTLENBQUNuQixLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7NkJBQU87Ozs7OztxQkFDdkM7Ozs7Ozs7Ozs7YUFrQkYsQ0FDTjtDQUNIO0dBcERLRCxJQUFJOztRQUNRSCx1REFBVTtRQUNYRSxrREFBUzs7O0FBRnBCQyxLQUFBQSxJQUFJO0FBcURWQSxJQUFJLENBQUNxQixlQUFlO2VBQUcsZ0xBQU9DLEdBQUcsRUFBSztZQUk5QnBCLE9BQU8sRUFHWG9CLEdBQU8sRUFHUEEsSUFBTzs7Ozs7MkJBTmEzQiwyREFBVSxDQUFDO3dCQUFFNEIsR0FBRyxFQUFFRCxHQUFHLENBQUNDLEdBQUc7cUJBQUUsQ0FBQzs7b0JBQTVDckIsT0FBTyxZQUFxQzt3QkFFN0NBLE9BQU87Ozs7O29CQUNWb0IsQ0FBQUEsR0FBTyxHQUFQQSxHQUFHLENBQUNFLEdBQUcsY0FBUEYsR0FBTyxXQUFXLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsR0FBTyxDQUFFRyxTQUFTLENBQUMsR0FBRyxFQUFFO3dCQUN0QkMsUUFBUSxFQUFFLFFBQVE7cUJBQ25CLENBQUMsQ0FBQztvQkFDSEosQ0FBQUEsSUFBTyxHQUFQQSxHQUFHLENBQUNFLEdBQUcsY0FBUEYsSUFBTyxXQUFLLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsSUFBTyxDQUFFSyxHQUFHLEVBQUUsQ0FBQztpREFDUixFQUFFOztpREFFRjt3QkFBRXpCLE9BQU8sRUFBRUEsT0FBTztxQkFBRTs7Ozs7O0tBRTlCO29CQWY2Qm9CLEdBQUc7OztHQWVoQyxDQUFDO0FBQ0YsK0RBQWV0QixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlLy4vcmVhbFBhZ2VzL2NvcmUuanM/NzdiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGdldFNlc3Npb24sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IENvcmUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gJ3VuYXRoZW50aWNhdGVkJykge1xuICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvcmU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2lnbk91dCgpO1xuICAgICAgICAgIH19PlxuICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJyBzdHlsZT17eyBmb250U2l6ZTogJzQ4cHgnIH19PlxuICAgICAgICAgIFZpc2lvbiBDb3JlXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgICBUaGlzIGlzIGEgZmVkZXJhdGVkIHBhZ2Ugb3duZWQgYnkgbG9jYWxob3N0OjMwMDBcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBEYXRhIGZyb20gZmVkZXJhdGVkIDxwcmU+Z2V0SW5pdGFsUHJvcHM8L3ByZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkNvcmUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBjb25zdCBzd2FwaSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMScpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAvLyByZXR1cm4gc3dhcGk7XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IGN0eC5yZXEgfSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgY3R4LnJlcz8ud3JpdGVIZWFkKDMwMiwge1xuICAgICAgTG9jYXRpb246ICcvbG9naW4nLFxuICAgIH0pO1xuICAgIGN0eC5yZXM/LmVuZCgpO1xuICAgIHJldHVybiB7fTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBzZXNzaW9uOiBzZXNzaW9uIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDb3JlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsImdldFNlc3Npb24iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkNvcmUiLCJwcm9wcyIsInNlc3Npb24iLCJyb3V0ZXIiLCJzdGF0dXMiLCJyZXBsYWNlIiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm9uQ2xpY2siLCJoMSIsInN0eWxlIiwiZm9udFNpemUiLCJoMyIsInNwYW4iLCJwcmUiLCJiciIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXEiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./realPages/core.js\n");

/***/ })

});