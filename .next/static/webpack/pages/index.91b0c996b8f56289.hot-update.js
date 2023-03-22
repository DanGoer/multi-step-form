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

/***/ "./components/ConfirmButton.tsx":
/*!**************************************!*\
  !*** ./components/ConfirmButton.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var _ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmButton.module.scss */ \"./components/ConfirmButton.module.scss\");\n/* harmony import */ var _ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ConfirmButton() {\n    _s();\n    const { step , setStep , setRequired , personalInfo  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    const handleNextStep = ()=>{\n        const requiredReset = {\n            name: false,\n            email: false,\n            phone: false\n        };\n        if (personalInfo.name === \"\") {\n            setRequired({\n                ...requiredReset,\n                name: true\n            });\n            return;\n        }\n        if (personalInfo.email === \"\") {\n            setRequired({\n                ...requiredReset,\n                email: true\n            });\n            return;\n        }\n        if (personalInfo.phone === \"\") {\n            setRequired({\n                ...requiredReset,\n                phone: true\n            });\n            return;\n        }\n        setStep((prevStep)=>prevStep + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().confirm),\n        onClick: handleNextStep,\n        children: step === 4 ? \"Confirm\" : \"Next Step\"\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\ConfirmButton.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(ConfirmButton, \"lBiZrFwUAfxyLzVzifFrUdhZhpM=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = ConfirmButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmButton);\nvar _c;\n$RefreshReg$(_c, \"ConfirmButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpcm1CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ047QUFFakQsU0FBU0UsZ0JBQWdCOztJQUN2QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxZQUFXLEVBQUVDLGFBQVksRUFBRSxHQUFHTixvRUFBY0E7SUFFbkUsTUFBTU8saUJBQWlCLElBQU07UUFDM0IsTUFBTUMsZ0JBQWdCO1lBQUVDLE1BQU0sS0FBSztZQUFFQyxPQUFPLEtBQUs7WUFBRUMsT0FBTyxLQUFLO1FBQUM7UUFFaEUsSUFBSUwsYUFBYUcsSUFBSSxLQUFLLElBQUk7WUFDNUJKLFlBQVk7Z0JBQUUsR0FBR0csYUFBYTtnQkFBRUMsTUFBTSxJQUFJO1lBQUM7WUFDM0M7UUFDRixDQUFDO1FBQ0QsSUFBSUgsYUFBYUksS0FBSyxLQUFLLElBQUk7WUFDN0JMLFlBQVk7Z0JBQUUsR0FBR0csYUFBYTtnQkFBRUUsT0FBTyxJQUFJO1lBQUM7WUFDNUM7UUFDRixDQUFDO1FBQ0QsSUFBSUosYUFBYUssS0FBSyxLQUFLLElBQUk7WUFDN0JOLFlBQVk7Z0JBQUUsR0FBR0csYUFBYTtnQkFBRUcsT0FBTyxJQUFJO1lBQUM7WUFDNUM7UUFDRixDQUFDO1FBQ0RQLFFBQVEsQ0FBQ1EsV0FBcUJBLFdBQVc7SUFDM0M7SUFFQSxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBV2IsMkVBQWM7UUFBRWUsU0FBU1Q7a0JBQ3pDSixTQUFTLElBQUksWUFBWSxXQUFXOzs7Ozs7QUFHM0M7R0ExQlNEOztRQUM4Q0YsZ0VBQWNBOzs7S0FENURFO0FBMkJULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29uZmlybUJ1dHRvbi50c3g/ZDFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gXCJAL3V0aWxpdHkvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db25maXJtQnV0dG9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBDb25maXJtQnV0dG9uKCkge1xyXG4gIGNvbnN0IHsgc3RlcCwgc2V0U3RlcCwgc2V0UmVxdWlyZWQsIHBlcnNvbmFsSW5mbyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dFN0ZXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXF1aXJlZFJlc2V0ID0geyBuYW1lOiBmYWxzZSwgZW1haWw6IGZhbHNlLCBwaG9uZTogZmFsc2UgfTtcclxuXHJcbiAgICBpZiAocGVyc29uYWxJbmZvLm5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgc2V0UmVxdWlyZWQoeyAuLi5yZXF1aXJlZFJlc2V0LCBuYW1lOiB0cnVlIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGVyc29uYWxJbmZvLmVtYWlsID09PSBcIlwiKSB7XHJcbiAgICAgIHNldFJlcXVpcmVkKHsgLi4ucmVxdWlyZWRSZXNldCwgZW1haWw6IHRydWUgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwZXJzb25hbEluZm8ucGhvbmUgPT09IFwiXCIpIHtcclxuICAgICAgc2V0UmVxdWlyZWQoeyAuLi5yZXF1aXJlZFJlc2V0LCBwaG9uZTogdHJ1ZSB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0U3RlcCgocHJldlN0ZXA6IG51bWJlcikgPT4gcHJldlN0ZXAgKyAxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb25maXJtfSBvbkNsaWNrPXtoYW5kbGVOZXh0U3RlcH0+XHJcbiAgICAgIHtzdGVwID09PSA0ID8gXCJDb25maXJtXCIgOiBcIk5leHQgU3RlcFwifVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtQnV0dG9uO1xyXG4iXSwibmFtZXMiOlsidXNlRm9ybUNvbnRleHQiLCJzdHlsZXMiLCJDb25maXJtQnV0dG9uIiwic3RlcCIsInNldFN0ZXAiLCJzZXRSZXF1aXJlZCIsInBlcnNvbmFsSW5mbyIsImhhbmRsZU5leHRTdGVwIiwicmVxdWlyZWRSZXNldCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicHJldlN0ZXAiLCJidXR0b24iLCJjbGFzc05hbWUiLCJjb25maXJtIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConfirmButton.tsx\n"));

/***/ })

});