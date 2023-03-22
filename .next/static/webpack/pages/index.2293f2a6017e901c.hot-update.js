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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction summaryCalc(add, plan) {\n    const getYearly = ()=>{\n        let yearlyTemp = 0;\n        if (plan === 0) yearlyTemp = 90;\n        if (plan === 1) yearlyTemp = 120;\n        if (plan === 2) yearlyTemp = 150;\n        if (add.service) yearlyTemp = yearlyTemp + 10;\n        if (add.storage) yearlyTemp = yearlyTemp + 20;\n        if (add.profile) yearlyTemp = yearlyTemp + 20;\n        return yearlyTemp.toString();\n    };\n    const getMonthly = ()=>{\n        let monthlyTemp = 0;\n        if (plan === 0) monthlyTemp = 9;\n        if (plan === 1) monthlyTemp = 12;\n        if (plan === 2) monthlyTemp = 15;\n        if (add.service) monthlyTemp = monthlyTemp + 1;\n        if (add.storage) monthlyTemp = monthlyTemp + 2;\n        if (add.profile) monthlyTemp = monthlyTemp + 2;\n        return monthlyTemp.toString();\n    };\n    const value = {\n        monthly: getMonthly(),\n        yearly: getYearly()\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const { setStep , schedule , setSchedule , add , plan  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResult(summaryCalc(add, plan));\n    }, []);\n    const handleNextStep = ()=>{\n        setStep(5);\n    };\n    const handlePreviousStep = ()=>{\n        setStep(3);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Monthly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Yearly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 51\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setSchedule(!schedule),\n                                children: \"Change\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$9/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$90/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"+$\",\n                                result === null || result === void 0 ? void 0 : result.monthly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"$\",\n                                result === null || result === void 0 ? void 0 : result.yearly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"vf91ZwOoPlJbiKmwarIQHUnCfR8=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NBQ0gsOERBQUNBOztnQ0FBRTtnQ0FBRWIsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRixNQUFNO2dDQUFDOzs7Ozs7OztnQ0FFdkI7Ozs7Ozs7Ozs7OztBQUlUO0dBMURTQzs7UUFFK0NqQixnRUFBY0E7OztLQUY3RGlCO0FBMkRULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3VtbWFyeVN0ZXAudHN4PzFiN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tIFwiQC91dGlsaXR5L0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4vQmFja0J1dHRvblwiO1xyXG5pbXBvcnQgQ29uZmlybUJ1dHRvbiBmcm9tIFwiLi9Db25maXJtQnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2Ugc3VtbWFyeVByb3BzIHtcclxuICBtb250aGx5Pzogc3RyaW5nO1xyXG4gIHllYXJseT86IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gc3VtbWFyeUNhbGMoXHJcbiAgYWRkOiB7IHNlcnZpY2U6IGJvb2xlYW47IHN0b3JhZ2U6IGJvb2xlYW47IHByb2ZpbGU6IGJvb2xlYW4gfSxcclxuICBwbGFuOiBudW1iZXJcclxuKTogc3VtbWFyeVByb3BzIHtcclxuICBjb25zdCBnZXRZZWFybHkgPSAoKSA9PiB7XHJcbiAgICBsZXQgeWVhcmx5VGVtcCA9IDA7XHJcbiAgICBpZiAocGxhbiA9PT0gMCkgeWVhcmx5VGVtcCA9IDkwO1xyXG4gICAgaWYgKHBsYW4gPT09IDEpIHllYXJseVRlbXAgPSAxMjA7XHJcbiAgICBpZiAocGxhbiA9PT0gMikgeWVhcmx5VGVtcCA9IDE1MDtcclxuICAgIGlmIChhZGQuc2VydmljZSkgeWVhcmx5VGVtcCA9IHllYXJseVRlbXAgKyAxMDtcclxuICAgIGlmIChhZGQuc3RvcmFnZSkgeWVhcmx5VGVtcCA9IHllYXJseVRlbXAgKyAyMDtcclxuICAgIGlmIChhZGQucHJvZmlsZSkgeWVhcmx5VGVtcCA9IHllYXJseVRlbXAgKyAyMDtcclxuICAgIHJldHVybiB5ZWFybHlUZW1wLnRvU3RyaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TW9udGhseSA9ICgpID0+IHtcclxuICAgIGxldCBtb250aGx5VGVtcCA9IDA7XHJcbiAgICBpZiAocGxhbiA9PT0gMCkgbW9udGhseVRlbXAgPSA5O1xyXG4gICAgaWYgKHBsYW4gPT09IDEpIG1vbnRobHlUZW1wID0gMTI7XHJcbiAgICBpZiAocGxhbiA9PT0gMikgbW9udGhseVRlbXAgPSAxNTtcclxuICAgIGlmIChhZGQuc2VydmljZSkgbW9udGhseVRlbXAgPSBtb250aGx5VGVtcCArIDE7XHJcbiAgICBpZiAoYWRkLnN0b3JhZ2UpIG1vbnRobHlUZW1wID0gbW9udGhseVRlbXAgKyAyO1xyXG4gICAgaWYgKGFkZC5wcm9maWxlKSBtb250aGx5VGVtcCA9IG1vbnRobHlUZW1wICsgMjtcclxuICAgIHJldHVybiBtb250aGx5VGVtcC50b1N0cmluZygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlID0geyBtb250aGx5OiBnZXRNb250aGx5KCksIHllYXJseTogZ2V0WWVhcmx5KCkgfTtcclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1bW1hcnlTdGVwKCkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxzdW1tYXJ5UHJvcHM+KHt9KTtcclxuICBjb25zdCB7IHNldFN0ZXAsIHNjaGVkdWxlLCBzZXRTY2hlZHVsZSwgYWRkLCBwbGFuIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KHN1bW1hcnlDYWxjKGFkZCwgcGxhbikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dFN0ZXAgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGVwKDUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzU3RlcCA9ICgpID0+IHtcclxuICAgIHNldFN0ZXAoMyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICB7c2NoZWR1bGUgPyA8aDQ+QXJjYWRlIChNb250aGx5KTwvaDQ+IDogPGg0PkFyY2FkZSAoWWVhcmx5KTwvaDQ+fVxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTY2hlZHVsZSghc2NoZWR1bGUpfT5DaGFuZ2U8L2J1dHRvbj5cclxuICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQ5L21vPC9wPiA6IDxwPiQ5MC95cjwvcD59XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7YWRkLnNlcnZpY2UgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8cD5PbmxpbmUgU2VydmljZTwvcD5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gPHA+JDEvbW88L3A+IDogPHA+JDEwL3lyPC9wPn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YWRkLnN0b3JhZ2UgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8cD5MYXJnZXIgU3RvcmFnZTwvcD5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gPHA+JDIvbW88L3A+IDogPHA+JDIwL3lyPC9wPn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YWRkLnByb2ZpbGUgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8cD5DdXN0b21pemFibGUgUHJvZmlsZTwvcD5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gPHA+JDIvbW88L3A+IDogPHA+JDIwL3lyPC9wPn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3NjaGVkdWxlID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+VG90YWwgKHBlciBtb250aCk8L3A+XHJcbiAgICAgICAgICAgIDxwPiske3Jlc3VsdD8ubW9udGhseX0vbW88L3A+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+VG90YWwgKHBlciB5ZWFyKTwvcD5cclxuICAgICAgICAgICAgPHA+JHtyZXN1bHQ/LnllYXJseX0vbW88L3A+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnlTdGVwO1xyXG4iXSwibmFtZXMiOlsidXNlRm9ybUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN1bW1hcnlDYWxjIiwiYWRkIiwicGxhbiIsImdldFllYXJseSIsInllYXJseVRlbXAiLCJzZXJ2aWNlIiwic3RvcmFnZSIsInByb2ZpbGUiLCJ0b1N0cmluZyIsImdldE1vbnRobHkiLCJtb250aGx5VGVtcCIsInZhbHVlIiwibW9udGhseSIsInllYXJseSIsIlN1bW1hcnlTdGVwIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2V0U3RlcCIsInNjaGVkdWxlIiwic2V0U2NoZWR1bGUiLCJoYW5kbGVOZXh0U3RlcCIsImhhbmRsZVByZXZpb3VzU3RlcCIsImRpdiIsInVsIiwibGkiLCJoNCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});