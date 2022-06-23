"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import { authenticate } from '../../../utils/authenticate';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                if (!credentials.username) throw new Error(\"username is required\");\n                if (!credentials.password) throw new Error(\"password required\");\n                // const loginResult = await authenticate(\n                //   credentials.username,\n                //   credentials.password,\n                //   credentials.description,\n                //   credentials.type,\n                //   credentials.fingerprint\n                // );\n                if (credentials.username === \"gjames@veritext.com\" && credentials.password === \"wrong\") {\n                    return {\n                        user: credentials.username\n                    };\n                }\n                return null;\n            }\n        }), \n    ],\n    callbacks: {\n        async session ({ session , token , user  }) {\n            if (token.newuser) {\n                session.user.info = token.newuser.user;\n            // session.user.sessiontoken = token.newuser.sessiontoken;\n            }\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (user) {\n                token.newuser = user;\n            }\n            return token;\n        }\n    },\n    session: {\n        jwt: true\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQzRCO0FBQ2xFLDhEQUE4RDtBQUU5RCxpRUFBZUEscURBQVEsQ0FBQztJQUN0QkUsU0FBUyxFQUFFO1FBQ1RELHNFQUFtQixDQUFDO1lBQ2xCLE1BQU1FLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQ0YsV0FBVyxDQUFDRyxRQUFRLEVBQUUsTUFBTSxJQUFJRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFFaEUsMENBQTBDO2dCQUMxQywwQkFBMEI7Z0JBQzFCLDBCQUEwQjtnQkFDMUIsNkJBQTZCO2dCQUM3QixzQkFBc0I7Z0JBQ3RCLDRCQUE0QjtnQkFDNUIsS0FBSztnQkFFTCxJQUNFRixXQUFXLENBQUNDLFFBQVEsS0FBSyxxQkFBcUIsSUFDOUNELFdBQVcsQ0FBQ0csUUFBUSxLQUFLLE9BQU8sRUFDaEM7b0JBQ0EsT0FBTzt3QkFDTEMsSUFBSSxFQUFFSixXQUFXLENBQUNDLFFBQVE7cUJBRTNCLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUM7S0FDSDtJQUNESSxTQUFTLEVBQUU7UUFDVCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFQyxLQUFLLEdBQUVILElBQUksR0FBRSxFQUFFO1lBQ3RDLElBQUlHLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUNqQkYsT0FBTyxDQUFDRixJQUFJLENBQUNLLElBQUksR0FBR0YsS0FBSyxDQUFDQyxPQUFPLENBQUNKLElBQUksQ0FBQztZQUN2QywwREFBMEQ7YUFDM0Q7WUFDRCxPQUFPRSxPQUFPLENBQUM7U0FDaEI7UUFDRCxNQUFNSSxHQUFHLEVBQUMsRUFBRUgsS0FBSyxHQUFFSCxJQUFJLEdBQUVPLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtZQUN0RCxJQUFJVCxJQUFJLEVBQUU7Z0JBQ1JHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHSixJQUFJLENBQUM7YUFDdEI7WUFDRCxPQUFPRyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0RELE9BQU8sRUFBRTtRQUNQSSxHQUFHLEVBQUUsSUFBSTtLQUNWO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29yZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG4vLyBpbXBvcnQgeyBhdXRoZW50aWNhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9hdXRoZW50aWNhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHMudXNlcm5hbWUpIHRocm93IG5ldyBFcnJvcigndXNlcm5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscy5wYXNzd29yZCkgdGhyb3cgbmV3IEVycm9yKCdwYXNzd29yZCByZXF1aXJlZCcpO1xuXG4gICAgICAgIC8vIGNvbnN0IGxvZ2luUmVzdWx0ID0gYXdhaXQgYXV0aGVudGljYXRlKFxuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzLnVzZXJuYW1lLFxuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzLmRlc2NyaXB0aW9uLFxuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzLnR5cGUsXG4gICAgICAgIC8vICAgY3JlZGVudGlhbHMuZmluZ2VycHJpbnRcbiAgICAgICAgLy8gKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgY3JlZGVudGlhbHMudXNlcm5hbWUgPT09ICdnamFtZXNAdmVyaXRleHQuY29tJyAmJlxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSAnd3JvbmcnXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgIC8vIHNlc3Npb250b2tlbjogbG9naW5SZXN1bHQuc2Vzc2lvbixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh0b2tlbi5uZXd1c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pbmZvID0gdG9rZW4ubmV3dXNlci51c2VyO1xuICAgICAgICAvLyBzZXNzaW9uLnVzZXIuc2Vzc2lvbnRva2VuID0gdG9rZW4ubmV3dXNlci5zZXNzaW9udG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4ubmV3dXNlciA9IHVzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJFcnJvciIsInBhc3N3b3JkIiwidXNlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsIm5ld3VzZXIiLCJpbmZvIiwiand0IiwiYWNjb3VudCIsInByb2ZpbGUiLCJpc05ld1VzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();