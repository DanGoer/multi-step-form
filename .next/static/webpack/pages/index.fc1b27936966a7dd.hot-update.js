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

/***/ "./components/SummaryStep.tsx":
/*!************************************!*\
  !*** ./components/SummaryStep.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var _ConfirmButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfirmButton */ \"./components/ConfirmButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction summaryCalc() {\n    const value = {\n        monthly: \"12\",\n        yearly: \"120\"\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const { setStep , schedule , setSchedule , add  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    const handleNextStep = ()=>{\n        setStep(5);\n    };\n    const handlePreviousStep = ()=>{\n        setStep(3);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Monthly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Yearly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 51\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setSchedule(!schedule),\n                                children: \"Change\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$9/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$90/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"+$12/mo\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"+$120/mo\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handler: handlePreviousStep\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConfirmButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handler: handleNextStep,\n                text: \"Next Step\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"EyiTCLqO/kiSzvvQTdIYOAnn41A=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1bW1hcnlTdGVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUNqQjtBQUNNO0FBRTVDLFNBQVNHLGNBQWM7SUFDckIsTUFBTUMsUUFBUTtRQUFFQyxTQUFTO1FBQU1DLFFBQVE7SUFBTTtJQUM3QyxPQUFPRjtBQUNUO0FBRUEsU0FBU0csY0FBYzs7SUFDckIsTUFBTSxFQUFFQyxRQUFPLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxJQUFHLEVBQUUsR0FBR1gsb0VBQWNBO0lBRTlELE1BQU1ZLGlCQUFpQixJQUFNO1FBQzNCSixRQUFRO0lBQ1Y7SUFFQSxNQUFNSyxxQkFBcUIsSUFBTTtRQUMvQkwsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0M7O2tDQUNDLDhEQUFDQzs7NEJBQ0VQLHlCQUFXLDhEQUFDUTswQ0FBRzs7Ozs7cURBQXdCLDhEQUFDQTswQ0FBRzs7Ozs7b0NBQW9COzBDQUNoRSw4REFBQ0M7Z0NBQU9DLFNBQVMsSUFBTVQsWUFBWSxDQUFDRDswQ0FBVzs7Ozs7OzRCQUM5Q0EseUJBQVcsOERBQUNXOzBDQUFFOzs7OztxREFBWSw4REFBQ0E7MENBQUU7Ozs7O29DQUFVOzs7Ozs7O29CQUV6Q1QsSUFBSVUsT0FBTyxrQkFDViw4REFBQ0w7OzBDQUNDLDhEQUFDSTswQ0FBRTs7Ozs7OzRCQUNGWCx5QkFBVyw4REFBQ1c7MENBQUU7Ozs7O3FEQUFZLDhEQUFDQTswQ0FBRTs7Ozs7b0NBQVU7Ozs7Ozs7b0JBRzNDVCxJQUFJVyxPQUFPLGtCQUNWLDhEQUFDTjs7MENBQ0MsOERBQUNJOzBDQUFFOzs7Ozs7NEJBQ0ZYLHlCQUFXLDhEQUFDVzswQ0FBRTs7Ozs7cURBQVksOERBQUNBOzBDQUFFOzs7OztvQ0FBVTs7Ozs7OztvQkFHM0NULElBQUlZLE9BQU8sa0JBQ1YsOERBQUNQOzswQ0FDQyw4REFBQ0k7MENBQUU7Ozs7Ozs0QkFDRlgseUJBQVcsOERBQUNXOzBDQUFFOzs7OztxREFBWSw4REFBQ0E7MENBQUU7Ozs7O29DQUFVOzs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ0k7MEJBQ0VmLHlCQUNDOztzQ0FDRSw4REFBQ1c7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7Ozs7aURBR0w7O3NDQUNFLDhEQUFDQTtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDQTtzQ0FBRTs7Ozs7OztnQ0FFTjs7Ozs7OzBCQUVILDhEQUFDbkIsbURBQVVBO2dCQUFDd0IsU0FBU1o7Ozs7OzswQkFDckIsOERBQUNYLHNEQUFhQTtnQkFBQ3VCLFNBQVNiO2dCQUFnQmMsTUFBSzs7Ozs7Ozs7Ozs7O0FBR25EO0dBdkRTbkI7O1FBQ3lDUCxnRUFBY0E7OztLQUR2RE87QUF3RFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW1tYXJ5U3RlcC50c3g/MWI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gXCJAL3V0aWxpdHkvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4vQmFja0J1dHRvblwiO1xyXG5pbXBvcnQgQ29uZmlybUJ1dHRvbiBmcm9tIFwiLi9Db25maXJtQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBzdW1tYXJ5Q2FsYygpIHtcclxuICBjb25zdCB2YWx1ZSA9IHsgbW9udGhseTogXCIxMlwiLCB5ZWFybHk6IFwiMTIwXCIgfTtcclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1bW1hcnlTdGVwKCkge1xyXG4gIGNvbnN0IHsgc2V0U3RlcCwgc2NoZWR1bGUsIHNldFNjaGVkdWxlLCBhZGQgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRTdGVwID0gKCkgPT4ge1xyXG4gICAgc2V0U3RlcCg1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2aW91c1N0ZXAgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGVwKDMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAge3NjaGVkdWxlID8gPGg0PkFyY2FkZSAoTW9udGhseSk8L2g0PiA6IDxoND5BcmNhZGUgKFllYXJseSk8L2g0Pn1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2NoZWR1bGUoIXNjaGVkdWxlKX0+Q2hhbmdlPC9idXR0b24+XHJcbiAgICAgICAgICB7c2NoZWR1bGUgPyA8cD4kOS9tbzwvcD4gOiA8cD4kOTAveXI8L3A+fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge2FkZC5zZXJ2aWNlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+T25saW5lIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQxL21vPC9wPiA6IDxwPiQxMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5zdG9yYWdlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+TGFyZ2VyIFN0b3JhZ2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5wcm9maWxlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+Q3VzdG9taXphYmxlIFByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtzY2hlZHVsZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIChwZXIgbW9udGgpPC9wPlxyXG4gICAgICAgICAgICA8cD4rJDEyL21vPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIChwZXIgeWVhcik8L3A+XHJcbiAgICAgICAgICAgIDxwPiskMTIwL21vPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8QmFja0J1dHRvbiBoYW5kbGVyPXtoYW5kbGVQcmV2aW91c1N0ZXB9IC8+XHJcbiAgICAgIDxDb25maXJtQnV0dG9uIGhhbmRsZXI9e2hhbmRsZU5leHRTdGVwfSB0ZXh0PVwiTmV4dCBTdGVwXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeVN0ZXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtQ29udGV4dCIsIkJhY2tCdXR0b24iLCJDb25maXJtQnV0dG9uIiwic3VtbWFyeUNhbGMiLCJ2YWx1ZSIsIm1vbnRobHkiLCJ5ZWFybHkiLCJTdW1tYXJ5U3RlcCIsInNldFN0ZXAiLCJzY2hlZHVsZSIsInNldFNjaGVkdWxlIiwiYWRkIiwiaGFuZGxlTmV4dFN0ZXAiLCJoYW5kbGVQcmV2aW91c1N0ZXAiLCJkaXYiLCJ1bCIsImxpIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInNlcnZpY2UiLCJzdG9yYWdlIiwicHJvZmlsZSIsInNwYW4iLCJoYW5kbGVyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});