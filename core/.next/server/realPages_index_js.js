"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "realPages_index_js";
exports.ids = ["realPages_index_js"];
exports.modules = {

/***/ "./realPages/index.js":
/*!****************************!*\
  !*** ./realPages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { createFederatedCatchAll } from 'nextjs-shared';\n\n\n// export default createFederatedCatchAll(['home', 'events']);\nconst Page = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    router.push(\"/core\");\n    return null;\n};\nPage.getInitialProps = async (context)=>{\n    // const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());\n    // return swapi;\n    context.res?.writeHead(302, {\n        Location: \"/core\"\n    });\n    context.res?.end();\n    return {};\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFsUGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDbkI7QUFDZDtBQUUxQiw4REFBOEQ7QUFFOUQsTUFBTUUsSUFBSSxHQUFHLElBQU07SUFDakIsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCRyxNQUFNLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixPQUFPLElBQUksQ0FBQztDQUNiO0FBRURGLElBQUksQ0FBQ0csZUFBZSxHQUFHLE9BQU9DLE9BQU8sR0FBSztJQUN4QyxxR0FBcUc7SUFDckcsZ0JBQWdCO0lBQ2hCQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUMxQkMsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQyxDQUFDO0lBQ0hILE9BQU8sQ0FBQ0MsR0FBRyxFQUFFRyxHQUFHLEVBQUUsQ0FBQztJQUVuQixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7QUFFRixpRUFBZVIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29yZS8uL3JlYWxQYWdlcy9pbmRleC5qcz8xMjdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsIH0gZnJvbSAnbmV4dGpzLXNoYXJlZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbChbJ2hvbWUnLCAnZXZlbnRzJ10pO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcm91dGVyLnB1c2goJy9jb3JlJyk7XG4gIHJldHVybiBudWxsO1xufTtcblxuUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAvLyBjb25zdCBzd2FwaSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMScpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAvLyByZXR1cm4gc3dhcGk7XG4gIGNvbnRleHQucmVzPy53cml0ZUhlYWQoMzAyLCB7XG4gICAgTG9jYXRpb246ICcvY29yZScsXG4gIH0pO1xuICBjb250ZXh0LnJlcz8uZW5kKCk7XG5cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlBhZ2UiLCJyb3V0ZXIiLCJwdXNoIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./realPages/index.js\n");

/***/ })

};
;