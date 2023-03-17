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

/***/ "./components/InfoStep.tsx":
/*!*********************************!*\
  !*** ./components/InfoStep.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction InfoStep() {\n    _s();\n    const { personalInfo , setPersonalInfo  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const phoneRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"name\",\n                placeholder: \"e.g. Stephen King\",\n                value: personalInfo.name,\n                onChange: (e)=>setPersonalInfo({\n                        ...personalInfo,\n                        name: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: \"Email Address\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: emailRef,\n                type: \"email\",\n                id: \"email\",\n                placeholder: \"e.g. stephenking@lorem.com\",\n                value: personalInfo.email,\n                onChange: (e)=>setPersonalInfo({\n                        ...personalInfo,\n                        email: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"phone\",\n                children: \"Phone Number\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"phone\",\n                placeholder: \"e.g. +1 234 567 890\",\n                value: personalInfo.phone,\n                onChange: (e)=>setPersonalInfo({\n                        ...personalInfo,\n                        phone: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(InfoStep, \"W4340pIEgWaVPW7fuNOQZAvW1/g=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = InfoStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoStep);\nvar _c;\n$RefreshReg$(_c, \"InfoStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9TdGVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUN4QjtBQUUvQixTQUFTRSxXQUFXOztJQUNsQixNQUFNLEVBQUVDLGFBQVksRUFBRUMsZ0JBQWUsRUFBRSxHQUFHSixvRUFBY0E7SUFDeEQsTUFBTUssVUFBVUosNkNBQU1BO0lBQ3RCLE1BQU1LLFdBQVdMLDZDQUFNQTtJQUN2QixNQUFNTSxXQUFXTiw2Q0FBTUE7SUFDdkIscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7Z0JBQU1DLFNBQVE7MEJBQU87Ozs7OzswQkFDdEIsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxhQUFZO2dCQUNaQyxPQUFPWixhQUFhYSxJQUFJO2dCQUN4QkMsVUFBVSxDQUFDQyxJQUNUZCxnQkFBZ0I7d0JBQUUsR0FBR0QsWUFBWTt3QkFBRWEsTUFBTUUsRUFBRUMsTUFBTSxDQUFDSixLQUFLO29CQUFDOzs7Ozs7MEJBRzVELDhEQUFDTjtnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQ0NTLEtBQUtkO2dCQUNMTSxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxhQUFZO2dCQUNaQyxPQUFPWixhQUFha0IsS0FBSztnQkFDekJKLFVBQVUsQ0FBQ0MsSUFDVGQsZ0JBQWdCO3dCQUFFLEdBQUdELFlBQVk7d0JBQUVrQixPQUFPSCxFQUFFQyxNQUFNLENBQUNKLEtBQUs7b0JBQUM7Ozs7OzswQkFHN0QsOERBQUNOO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsYUFBWTtnQkFDWkMsT0FBT1osYUFBYW1CLEtBQUs7Z0JBQ3pCTCxVQUFVLENBQUNDLElBQ1RkLGdCQUFnQjt3QkFBRSxHQUFHRCxZQUFZO3dCQUFFbUIsT0FBT0osRUFBRUMsTUFBTSxDQUFDSixLQUFLO29CQUFDOzs7Ozs7Ozs7Ozs7QUFLbkU7R0F4Q1NiOztRQUNtQ0YsZ0VBQWNBOzs7S0FEakRFO0FBeUNULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5mb1N0ZXAudHN4P2E2NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tIFwiQC91dGlsaXR5L0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW5mb1N0ZXAoKSB7XHJcbiAgY29uc3QgeyBwZXJzb25hbEluZm8sIHNldFBlcnNvbmFsSW5mbyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwaG9uZVJlZiA9IHVzZVJlZigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBTdGVwaGVuIEtpbmdcIlxyXG4gICAgICAgIHZhbHVlPXtwZXJzb25hbEluZm8ubmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICBzZXRQZXJzb25hbEluZm8oeyAuLi5wZXJzb25hbEluZm8sIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHJlZj17ZW1haWxSZWZ9XHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gc3RlcGhlbmtpbmdAbG9yZW0uY29tXCJcclxuICAgICAgICB2YWx1ZT17cGVyc29uYWxJbmZvLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgIHNldFBlcnNvbmFsSW5mbyh7IC4uLnBlcnNvbmFsSW5mbywgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiArMSAyMzQgNTY3IDg5MFwiXHJcbiAgICAgICAgdmFsdWU9e3BlcnNvbmFsSW5mby5waG9uZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICBzZXRQZXJzb25hbEluZm8oeyAuLi5wZXJzb25hbEluZm8sIHBob25lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZm9TdGVwO1xyXG4iXSwibmFtZXMiOlsidXNlRm9ybUNvbnRleHQiLCJ1c2VSZWYiLCJJbmZvU3RlcCIsInBlcnNvbmFsSW5mbyIsInNldFBlcnNvbmFsSW5mbyIsIm5hbWVSZWYiLCJlbWFpbFJlZiIsInBob25lUmVmIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm5hbWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZWYiLCJlbWFpbCIsInBob25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InfoStep.tsx\n"));

/***/ })

});