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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MultiFormProvider\": function() { return /* binding */ MultiFormProvider; },\n/* harmony export */   \"useFormContext\": function() { return /* binding */ useFormContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst MultiFormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useFormContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MultiFormContext);\n};\n_s(useFormContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst MultiFormProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const [required, setRequired] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [personalInfo, setPersonalInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\"\n    });\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [schedule, setSchedule] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [plan, setPlan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [add, setAdd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        service: false,\n        storage: false,\n        profile: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MultiFormContext.Provider, {\n        value: {\n            personalInfo,\n            setPersonalInfo,\n            step,\n            setStep,\n            schedule,\n            setSchedule,\n            plan,\n            setPlan,\n            add,\n            setAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\utility\\\\FormContext.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(MultiFormProvider, \"DuHPUxly06ocoQTBjWIzbAaYCRY=\");\n_c = MultiFormProvider;\n\nvar _c;\n$RefreshReg$(_c, \"MultiFormProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L0Zvcm1Db250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNRyxpQ0FBbUJILG9EQUFhQSxDQUFDLENBQUM7QUFFeEMsTUFBTUksaUJBQWlCLElBQU1IOztJQUFBQSxPQUFBQSxpREFBVUEsQ0FBQ0U7QUFBZ0I7R0FBbERDO0FBTU4sTUFBTUMsb0JBQW9CLFNBQXlCO1FBQXhCLEVBQUVDLFNBQVEsRUFBUzs7SUFDNUMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7UUFDL0NTLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDLElBQUk7SUFDN0MsTUFBTSxDQUFDZ0IsTUFBTUMsUUFBUSxHQUFHakIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDa0IsS0FBS0MsT0FBTyxHQUFHbkIsK0NBQVFBLENBQUM7UUFDN0JvQixTQUFTLEtBQUs7UUFDZEMsU0FBUyxLQUFLO1FBQ2RDLFNBQVMsS0FBSztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDckIsaUJBQWlCc0IsUUFBUTtRQUN4QkMsT0FBTztZQUNMakI7WUFDQUM7WUFDQUk7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQ2Y7Ozs7OztBQUdQO0lBbENNRDtLQUFBQTtBQW9DdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0eS9Gb3JtQ29udGV4dC50c3g/MDA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTXVsdGlGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgYW55KTtcclxuXHJcbmNvbnN0IHVzZUZvcm1Db250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChNdWx0aUZvcm1Db250ZXh0KTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgTXVsdGlGb3JtUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZXF1aXJlZCwgc2V0UmVxdWlyZWRdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtwZXJzb25hbEluZm8sIHNldFBlcnNvbmFsSW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtzY2hlZHVsZSwgc2V0U2NoZWR1bGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FkZCwgc2V0QWRkXSA9IHVzZVN0YXRlKHtcclxuICAgIHNlcnZpY2U6IGZhbHNlLFxyXG4gICAgc3RvcmFnZTogZmFsc2UsXHJcbiAgICBwcm9maWxlOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNdWx0aUZvcm1Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgcGVyc29uYWxJbmZvLFxyXG4gICAgICAgIHNldFBlcnNvbmFsSW5mbyxcclxuICAgICAgICBzdGVwLFxyXG4gICAgICAgIHNldFN0ZXAsXHJcbiAgICAgICAgc2NoZWR1bGUsXHJcbiAgICAgICAgc2V0U2NoZWR1bGUsXHJcbiAgICAgICAgcGxhbixcclxuICAgICAgICBzZXRQbGFuLFxyXG4gICAgICAgIGFkZCxcclxuICAgICAgICBzZXRBZGQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTXVsdGlGb3JtQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTXVsdGlGb3JtUHJvdmlkZXIsIHVzZUZvcm1Db250ZXh0IH07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiTXVsdGlGb3JtQ29udGV4dCIsInVzZUZvcm1Db250ZXh0IiwiTXVsdGlGb3JtUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlcXVpcmVkIiwic2V0UmVxdWlyZWQiLCJwZXJzb25hbEluZm8iLCJzZXRQZXJzb25hbEluZm8iLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInN0ZXAiLCJzZXRTdGVwIiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsInBsYW4iLCJzZXRQbGFuIiwiYWRkIiwic2V0QWRkIiwic2VydmljZSIsInN0b3JhZ2UiLCJwcm9maWxlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utility/FormContext.tsx\n"));

/***/ })

});