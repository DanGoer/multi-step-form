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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var _ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmButton.module.scss */ \"./components/ConfirmButton.module.scss\");\n/* harmony import */ var _ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ConfirmButton() {\n    _s();\n    const { step , setStep , required , setRequired , personalInfo , setPersonalInfo  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    const handleNextStep = ()=>{\n        if (personalInfo.name === \"\") {\n            setRequired({\n                ...required,\n                name: true\n            });\n            return;\n        }\n        if (personalInfo.email === \"\") {\n            setRequired({\n                ...required,\n                email: true\n            });\n            return;\n        }\n        if (personalInfo.phone === \"\") {\n            setRequired({\n                ...required,\n                phone: true\n            });\n            return;\n        }\n        setStep((prevStep)=>prevStep + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_ConfirmButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().confirm),\n        onClick: handleNextStep,\n        children: step === 4 ? \"Confirm\" : \"Next Step\"\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\ConfirmButton.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(ConfirmButton, \"+NwMeXuA3xMY11JR0OEd1vuBqbI=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = ConfirmButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmButton);\nvar _c;\n$RefreshReg$(_c, \"ConfirmButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpcm1CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ047QUFFakQsU0FBU0UsZ0JBQWdCOztJQUN2QixNQUFNLEVBQ0pDLEtBQUksRUFDSkMsUUFBTyxFQUNQQyxTQUFRLEVBQ1JDLFlBQVcsRUFDWEMsYUFBWSxFQUNaQyxnQkFBZSxFQUNoQixHQUFHUixvRUFBY0E7SUFFbEIsTUFBTVMsaUJBQWlCLElBQU07UUFDM0IsSUFBSUYsYUFBYUcsSUFBSSxLQUFLLElBQUk7WUFDNUJKLFlBQVk7Z0JBQUUsR0FBR0QsUUFBUTtnQkFBRUssTUFBTSxJQUFJO1lBQUM7WUFDdEM7UUFDRixDQUFDO1FBQ0QsSUFBSUgsYUFBYUksS0FBSyxLQUFLLElBQUk7WUFDN0JMLFlBQVk7Z0JBQUUsR0FBR0QsUUFBUTtnQkFBRU0sT0FBTyxJQUFJO1lBQUM7WUFDdkM7UUFDRixDQUFDO1FBQ0QsSUFBSUosYUFBYUssS0FBSyxLQUFLLElBQUk7WUFDN0JOLFlBQVk7Z0JBQUUsR0FBR0QsUUFBUTtnQkFBRU8sT0FBTyxJQUFJO1lBQUM7WUFDdkM7UUFDRixDQUFDO1FBQ0RSLFFBQVEsQ0FBQ1MsV0FBcUJBLFdBQVc7SUFDM0M7SUFFQSxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBV2QsMkVBQWM7UUFBRWdCLFNBQVNSO2tCQUN6Q04sU0FBUyxJQUFJLFlBQVksV0FBVzs7Ozs7O0FBRzNDO0dBL0JTRDs7UUFRSEYsZ0VBQWNBOzs7S0FSWEU7QUFnQ1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25maXJtQnV0dG9uLnRzeD9kMWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSBcIkAvdXRpbGl0eS9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbmZpcm1CdXR0b24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIENvbmZpcm1CdXR0b24oKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgc3RlcCxcclxuICAgIHNldFN0ZXAsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHNldFJlcXVpcmVkLFxyXG4gICAgcGVyc29uYWxJbmZvLFxyXG4gICAgc2V0UGVyc29uYWxJbmZvLFxyXG4gIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0U3RlcCA9ICgpID0+IHtcclxuICAgIGlmIChwZXJzb25hbEluZm8ubmFtZSA9PT0gXCJcIikge1xyXG4gICAgICBzZXRSZXF1aXJlZCh7IC4uLnJlcXVpcmVkLCBuYW1lOiB0cnVlIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGVyc29uYWxJbmZvLmVtYWlsID09PSBcIlwiKSB7XHJcbiAgICAgIHNldFJlcXVpcmVkKHsgLi4ucmVxdWlyZWQsIGVtYWlsOiB0cnVlIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGVyc29uYWxJbmZvLnBob25lID09PSBcIlwiKSB7XHJcbiAgICAgIHNldFJlcXVpcmVkKHsgLi4ucmVxdWlyZWQsIHBob25lOiB0cnVlIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRTdGVwKChwcmV2U3RlcDogbnVtYmVyKSA9PiBwcmV2U3RlcCArIDEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbmZpcm19IG9uQ2xpY2s9e2hhbmRsZU5leHRTdGVwfT5cclxuICAgICAge3N0ZXAgPT09IDQgPyBcIkNvbmZpcm1cIiA6IFwiTmV4dCBTdGVwXCJ9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1CdXR0b247XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtQ29udGV4dCIsInN0eWxlcyIsIkNvbmZpcm1CdXR0b24iLCJzdGVwIiwic2V0U3RlcCIsInJlcXVpcmVkIiwic2V0UmVxdWlyZWQiLCJwZXJzb25hbEluZm8iLCJzZXRQZXJzb25hbEluZm8iLCJoYW5kbGVOZXh0U3RlcCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicHJldlN0ZXAiLCJidXR0b24iLCJjbGFzc05hbWUiLCJjb25maXJtIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConfirmButton.tsx\n"));

/***/ })

});