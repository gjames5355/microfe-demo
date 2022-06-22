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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nextjs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-shared */ \"../shared/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,nextjs_shared__WEBPACK_IMPORTED_MODULE_0__.createFederatedCatchAll)([\n    \"home\",\n    \"events\"\n]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFsUGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFFeEQsaUVBQWVBLHNFQUF1QixDQUFDO0lBQUMsTUFBTTtJQUFFLFFBQVE7Q0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja291dC8uL3JlYWxQYWdlcy9pbmRleC5qcz8xMjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsIH0gZnJvbSAnbmV4dGpzLXNoYXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsKFsnaG9tZScsICdldmVudHMnXSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./realPages/index.js\n");

/***/ }),

/***/ "../shared/index.js":
/*!**************************!*\
  !*** ../shared/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFederatedCatchAll\": () => (/* binding */ createFederatedCatchAll),\n/* harmony export */   \"matchFederatedPage\": () => (/* binding */ matchFederatedPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var feather_route_matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feather-route-matcher */ \"feather-route-matcher\");\n/* harmony import */ var feather_route_matcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feather_route_matcher__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nasync function matchFederatedPage(remotes, path) {\n  const maps = await Promise.all(\n    remotes.map(remote => {\n      console.log(window[remote]);\n      return window[remote]\n        .get('./pages-map')\n        .then(factory => ({ remote, config: factory().default }))\n        .catch(() => null);\n    }),\n  );\n\n  const config = {};\n\n  for (let map of maps) {\n    if (!map) continue;\n\n    for (let [path, mod] of Object.entries(map.config)) {\n      config[path] = {\n        remote: map.remote,\n        module: mod,\n      };\n    }\n  }\n\n  const matcher = feather_route_matcher__WEBPACK_IMPORTED_MODULE_1___default()(config);\n  const match = matcher(path);\n\n  return match;\n}\n\nfunction createFederatedCatchAll(remotes) {\n  const FederatedCatchAll = initialProps => {\n    const [lazyProps, setProps] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});\n\n    const { FederatedPage, render404, renderError, needsReload, ...props } = {\n      ...lazyProps,\n      ...initialProps,\n    };\n    console.log(initialProps);\n    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n      console.log(needsReload);\n      if (needsReload) {\n        const runUnderlayingGIP = async () => {\n          const federatedProps = await FederatedCatchAll.getInitialProps(props);\n          setProps(federatedProps);\n        };\n        runUnderlayingGIP();\n      }\n    }, []);\n\n    if (render404) {\n      // TODO: Render 404 page\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('h1', {}, '404 Not Found');\n    }\n    if (renderError) {\n      // TODO: Render error page\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('h1', {}, 'Oops, something went wrong.');\n    }\n\n    if (FederatedPage) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FederatedPage, props);\n    }\n\n    return null;\n  };\n\n  FederatedCatchAll.getInitialProps = async ctx => {\n    const { err, req, res, AppTree, ...props } = ctx;\n    if (err) {\n      // TODO: Run getInitialProps for error page\n      return { renderError: true, ...props };\n    }\n    if (true) {\n      return { needsReload: true, ...props };\n    }\n    console.log('in browser');\n    try {\n      const matchedPage = await matchFederatedPage(remotes, ctx.asPath);\n      console.log('matchedPage', matchedPage);\n\n      const remote = matchedPage?.value?.remote;\n      const mod = matchedPage?.value?.module;\n\n      if (!remote || !mod) {\n        // TODO: Run getInitialProps for 404 page\n        return { render404: true, ...props };\n      }\n\n      console.log('loading exposed module', mod, 'from remote', remote);\n      try {\n        if (!window[remote].__initialized) {\n          window[remote].__initialized = true;\n          await window[remote].init(__webpack_require__.S.default);\n        }\n      } catch (initErr) {\n        console.log('initErr', initErr);\n      }\n\n      const FederatedPage = await window[remote].get(mod).then(factory => factory().default);\n      console.log('FederatedPage', FederatedPage);\n      if (!FederatedPage) {\n        // TODO: Run getInitialProps for 404 page\n        return { render404: true, ...props };\n      }\n\n      const modifiedContext = {\n        ...ctx,\n        query: matchedPage.params,\n      };\n      const federatedPageProps = (await FederatedPage.getInitialProps?.(modifiedContext)) || {};\n      return { ...federatedPageProps, FederatedPage };\n    } catch (err) {\n      console.log('err', err);\n      // TODO: Run getInitialProps for error page\n      return { renderError: true, ...props };\n    }\n  };\n\n  return FederatedCatchAll;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2hhcmVkL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUN3Qjs7QUFFM0M7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw0REFBYTtBQUMvQjs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQ0FBa0MscURBQWMsR0FBRzs7QUFFbkQsWUFBWSwrREFBK0Q7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxhQUFhLDBEQUFtQixTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQW1CLFNBQVM7QUFDekM7O0FBRUE7QUFDQSxhQUFhLDBEQUFtQjtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFFBQVEsSUFBZ0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUF3QjtBQUM1RDtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlY2tvdXQvLi4vc2hhcmVkL2luZGV4LmpzPzAwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVNYXRjaGVyIGZyb20gJ2ZlYXRoZXItcm91dGUtbWF0Y2hlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXRjaEZlZGVyYXRlZFBhZ2UocmVtb3RlcywgcGF0aCkge1xuICBjb25zdCBtYXBzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgcmVtb3Rlcy5tYXAocmVtb3RlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvd1tyZW1vdGVdKTtcbiAgICAgIHJldHVybiB3aW5kb3dbcmVtb3RlXVxuICAgICAgICAuZ2V0KCcuL3BhZ2VzLW1hcCcpXG4gICAgICAgIC50aGVuKGZhY3RvcnkgPT4gKHsgcmVtb3RlLCBjb25maWc6IGZhY3RvcnkoKS5kZWZhdWx0IH0pKVxuICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZm9yIChsZXQgbWFwIG9mIG1hcHMpIHtcbiAgICBpZiAoIW1hcCkgY29udGludWU7XG5cbiAgICBmb3IgKGxldCBbcGF0aCwgbW9kXSBvZiBPYmplY3QuZW50cmllcyhtYXAuY29uZmlnKSkge1xuICAgICAgY29uZmlnW3BhdGhdID0ge1xuICAgICAgICByZW1vdGU6IG1hcC5yZW1vdGUsXG4gICAgICAgIG1vZHVsZTogbW9kLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXRjaGVyID0gY3JlYXRlTWF0Y2hlcihjb25maWcpO1xuICBjb25zdCBtYXRjaCA9IG1hdGNoZXIocGF0aCk7XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwocmVtb3Rlcykge1xuICBjb25zdCBGZWRlcmF0ZWRDYXRjaEFsbCA9IGluaXRpYWxQcm9wcyA9PiB7XG4gICAgY29uc3QgW2xhenlQcm9wcywgc2V0UHJvcHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgeyBGZWRlcmF0ZWRQYWdlLCByZW5kZXI0MDQsIHJlbmRlckVycm9yLCBuZWVkc1JlbG9hZCwgLi4ucHJvcHMgfSA9IHtcbiAgICAgIC4uLmxhenlQcm9wcyxcbiAgICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGluaXRpYWxQcm9wcyk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG5lZWRzUmVsb2FkKTtcbiAgICAgIGlmIChuZWVkc1JlbG9hZCkge1xuICAgICAgICBjb25zdCBydW5VbmRlcmxheWluZ0dJUCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBmZWRlcmF0ZWRQcm9wcyA9IGF3YWl0IEZlZGVyYXRlZENhdGNoQWxsLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgc2V0UHJvcHMoZmVkZXJhdGVkUHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICBydW5VbmRlcmxheWluZ0dJUCgpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGlmIChyZW5kZXI0MDQpIHtcbiAgICAgIC8vIFRPRE86IFJlbmRlciA0MDQgcGFnZVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2gxJywge30sICc0MDQgTm90IEZvdW5kJyk7XG4gICAgfVxuICAgIGlmIChyZW5kZXJFcnJvcikge1xuICAgICAgLy8gVE9ETzogUmVuZGVyIGVycm9yIHBhZ2VcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMScsIHt9LCAnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XG4gICAgfVxuXG4gICAgaWYgKEZlZGVyYXRlZFBhZ2UpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZlZGVyYXRlZFBhZ2UsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBGZWRlcmF0ZWRDYXRjaEFsbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIGNvbnN0IHsgZXJyLCByZXEsIHJlcywgQXBwVHJlZSwgLi4ucHJvcHMgfSA9IGN0eDtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciBlcnJvciBwYWdlXG4gICAgICByZXR1cm4geyByZW5kZXJFcnJvcjogdHJ1ZSwgLi4ucHJvcHMgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybiB7IG5lZWRzUmVsb2FkOiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnaW4gYnJvd3NlcicpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYXRjaGVkUGFnZSA9IGF3YWl0IG1hdGNoRmVkZXJhdGVkUGFnZShyZW1vdGVzLCBjdHguYXNQYXRoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkUGFnZScsIG1hdGNoZWRQYWdlKTtcblxuICAgICAgY29uc3QgcmVtb3RlID0gbWF0Y2hlZFBhZ2U/LnZhbHVlPy5yZW1vdGU7XG4gICAgICBjb25zdCBtb2QgPSBtYXRjaGVkUGFnZT8udmFsdWU/Lm1vZHVsZTtcblxuICAgICAgaWYgKCFyZW1vdGUgfHwgIW1vZCkge1xuICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciA0MDQgcGFnZVxuICAgICAgICByZXR1cm4geyByZW5kZXI0MDQ6IHRydWUsIC4uLnByb3BzIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGV4cG9zZWQgbW9kdWxlJywgbW9kLCAnZnJvbSByZW1vdGUnLCByZW1vdGUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCF3aW5kb3dbcmVtb3RlXS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgd2luZG93W3JlbW90ZV0uX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgd2luZG93W3JlbW90ZV0uaW5pdChfX3dlYnBhY2tfc2hhcmVfc2NvcGVzX18uZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGluaXRFcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXRFcnInLCBpbml0RXJyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgRmVkZXJhdGVkUGFnZSA9IGF3YWl0IHdpbmRvd1tyZW1vdGVdLmdldChtb2QpLnRoZW4oZmFjdG9yeSA9PiBmYWN0b3J5KCkuZGVmYXVsdCk7XG4gICAgICBjb25zb2xlLmxvZygnRmVkZXJhdGVkUGFnZScsIEZlZGVyYXRlZFBhZ2UpO1xuICAgICAgaWYgKCFGZWRlcmF0ZWRQYWdlKSB7XG4gICAgICAgIC8vIFRPRE86IFJ1biBnZXRJbml0aWFsUHJvcHMgZm9yIDQwNCBwYWdlXG4gICAgICAgIHJldHVybiB7IHJlbmRlcjQwNDogdHJ1ZSwgLi4ucHJvcHMgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9kaWZpZWRDb250ZXh0ID0ge1xuICAgICAgICAuLi5jdHgsXG4gICAgICAgIHF1ZXJ5OiBtYXRjaGVkUGFnZS5wYXJhbXMsXG4gICAgICB9O1xuICAgICAgY29uc3QgZmVkZXJhdGVkUGFnZVByb3BzID0gKGF3YWl0IEZlZGVyYXRlZFBhZ2UuZ2V0SW5pdGlhbFByb3BzPy4obW9kaWZpZWRDb250ZXh0KSkgfHwge307XG4gICAgICByZXR1cm4geyAuLi5mZWRlcmF0ZWRQYWdlUHJvcHMsIEZlZGVyYXRlZFBhZ2UgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xuICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgZXJyb3IgcGFnZVxuICAgICAgcmV0dXJuIHsgcmVuZGVyRXJyb3I6IHRydWUsIC4uLnByb3BzIH07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBGZWRlcmF0ZWRDYXRjaEFsbDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../shared/index.js\n");

/***/ })

};
;