"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utility/FormContext.tsx":
/*!*********************************!*\
  !*** ./utility/FormContext.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MultiFormProvider\": function() { return /* binding */ MultiFormProvider; },\n/* harmony export */   \"useFormContext\": function() { return /* binding */ useFormContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst MultiFormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useFormContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MultiFormContext);\n};\n_s(useFormContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst MultiFormProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const [personalInfo, setPersonalInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\"\n    });\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [schedule, setSchedule] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [plan, setPlan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [add, setAdd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MultiFormContext.Provider, {\n        value: {\n            personalInfo,\n            setPersonalInfo,\n            step,\n            setStep,\n            schedule,\n            setSchedule,\n            plan,\n            setPlan,\n            add,\n            setAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\utility\\\\FormContext.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(MultiFormProvider, \"/RQPtBnntKPTpqq9QdiowOAxiK0=\");\n_c = MultiFormProvider;\n\nvar _c;\n$RefreshReg$(_c, \"MultiFormProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L0Zvcm1Db250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNRyxpQ0FBbUJILG9EQUFhQSxDQUFDLENBQUM7QUFFeEMsTUFBTUksaUJBQWlCLElBQU1IOztJQUFBQSxPQUFBQSxpREFBVUEsQ0FBQ0U7QUFBZ0I7R0FBbERDO0FBTU4sTUFBTUMsb0JBQW9CLFNBQXlCO1FBQXhCLEVBQUVDLFNBQVEsRUFBUzs7SUFDNUMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7UUFDL0NPLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFDN0MsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2dCLEtBQUtDLE9BQU8sR0FBR2pCLCtDQUFRQSxDQUFDO0lBRS9CLHFCQUNFLDhEQUFDQyxpQkFBaUJpQixRQUFRO1FBQ3hCQyxPQUFPO1lBQ0xkO1lBQ0FDO1lBQ0FJO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7a0JBRUNiOzs7Ozs7QUFHUDtJQTdCTUQ7S0FBQUE7QUErQnVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxpdHkvRm9ybUNvbnRleHQudHN4PzAwNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE11bHRpRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIGFueSk7XHJcblxyXG5jb25zdCB1c2VGb3JtQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoTXVsdGlGb3JtQ29udGV4dCk7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IE11bHRpRm9ybVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbcGVyc29uYWxJbmZvLCBzZXRQZXJzb25hbEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NjaGVkdWxlLCBzZXRTY2hlZHVsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWRkLCBzZXRBZGRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TXVsdGlGb3JtQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHBlcnNvbmFsSW5mbyxcclxuICAgICAgICBzZXRQZXJzb25hbEluZm8sXHJcbiAgICAgICAgc3RlcCxcclxuICAgICAgICBzZXRTdGVwLFxyXG4gICAgICAgIHNjaGVkdWxlLFxyXG4gICAgICAgIHNldFNjaGVkdWxlLFxyXG4gICAgICAgIHBsYW4sXHJcbiAgICAgICAgc2V0UGxhbixcclxuICAgICAgICBhZGQsXHJcbiAgICAgICAgc2V0QWRkLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L011bHRpRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IE11bHRpRm9ybVByb3ZpZGVyLCB1c2VGb3JtQ29udGV4dCB9O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIk11bHRpRm9ybUNvbnRleHQiLCJ1c2VGb3JtQ29udGV4dCIsIk11bHRpRm9ybVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwZXJzb25hbEluZm8iLCJzZXRQZXJzb25hbEluZm8iLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInN0ZXAiLCJzZXRTdGVwIiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsInBsYW4iLCJzZXRQbGFuIiwiYWRkIiwic2V0QWRkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utility/FormContext.tsx\n"));

/***/ })

});