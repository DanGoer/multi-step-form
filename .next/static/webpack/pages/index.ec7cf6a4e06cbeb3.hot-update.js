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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubTitle */ \"./components/SubTitle.tsx\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ \"./components/Title.tsx\");\n/* harmony import */ var _SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SummaryStep.module.scss */ \"./components/SummaryStep.module.scss\");\n/* harmony import */ var _SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction summaryCalc(add, plan) {\n    const getYearly = ()=>{\n        let yearlyTemp = 0;\n        if (plan === 0) yearlyTemp = 90;\n        if (plan === 1) yearlyTemp = 120;\n        if (plan === 2) yearlyTemp = 150;\n        if (add.service) yearlyTemp = yearlyTemp + 10;\n        if (add.storage) yearlyTemp = yearlyTemp + 20;\n        if (add.profile) yearlyTemp = yearlyTemp + 20;\n        return yearlyTemp.toString();\n    };\n    const getMonthly = ()=>{\n        let monthlyTemp = 0;\n        if (plan === 0) monthlyTemp = 9;\n        if (plan === 1) monthlyTemp = 12;\n        if (plan === 2) monthlyTemp = 15;\n        if (add.service) monthlyTemp = monthlyTemp + 1;\n        if (add.storage) monthlyTemp = monthlyTemp + 2;\n        if (add.profile) monthlyTemp = monthlyTemp + 2;\n        return monthlyTemp.toString();\n    };\n    const value = {\n        monthly: getMonthly(),\n        yearly: getYearly()\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const { schedule , setSchedule , add , plan  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResult(summaryCalc(add, plan));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Finishing up\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                subTitle: \"Double-check everything looks OK before confirming.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default().summary),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            plan === 0 && \"Arcade\",\n                                            plan === 1 && \"Advanced\",\n                                            plan === 2 && \"Pro\",\n                                            \" (Monthly)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            plan === 0 && \"Arcade\",\n                                            plan === 1 && \"Advanced\",\n                                            plan === 2 && \"Pro\",\n                                            \" (Yearly)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setSchedule(!schedule),\n                                        children: \"Change\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"$\",\n                                    plan === 0 && \"9\",\n                                    plan === 1 && \"12\",\n                                    plan === 2 && \"15\",\n                                    \"/mo\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"$\",\n                                    plan === 0 && \"90\",\n                                    plan === 1 && \"120\",\n                                    plan === 2 && \"150\",\n                                    \"/yr\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"+$\",\n                                result === null || result === void 0 ? void 0 : result.monthly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"$\",\n                                result === null || result === void 0 ? void 0 : result.yearly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"iP9GK6nE5l1hZOHiKbAxs7sJop8=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztvQ0FBVTs7Ozs7OztvQkFHM0M1QixJQUFJTSxPQUFPLGtCQUNWLDhEQUFDa0I7OzBDQUNDLDhEQUFDSTswQ0FBRTs7Ozs7OzRCQUNGWix5QkFBVyw4REFBQ1k7MENBQUU7Ozs7O3FEQUFZLDhEQUFDQTswQ0FBRTs7Ozs7b0NBQVU7Ozs7Ozs7Ozs7Ozs7MEJBSTlDLDhEQUFDRTswQkFDRWQseUJBQ0M7O3NDQUNFLDhEQUFDWTtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDQTs7Z0NBQUU7Z0NBQUdkLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUgsT0FBTztnQ0FBQzs7Ozs7Ozs7aURBR3hCOztzQ0FDRSw4REFBQ2lCO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNBOztnQ0FBRTtnQ0FBRWQsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRixNQUFNO2dDQUFDOzs7Ozs7OztnQ0FFdkI7Ozs7Ozs7Ozs7OztBQUlUO0dBakZTQzs7UUFFc0NwQixnRUFBY0E7OztLQUZwRG9CO0FBa0ZULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3VtbWFyeVN0ZXAudHN4PzFiN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tIFwiQC91dGlsaXR5L0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN1YlRpdGxlIGZyb20gXCIuL1N1YlRpdGxlXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N1bW1hcnlTdGVwLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2Ugc3VtbWFyeVByb3BzIHtcclxuICBtb250aGx5Pzogc3RyaW5nO1xyXG4gIHllYXJseT86IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gc3VtbWFyeUNhbGMoXHJcbiAgYWRkOiB7IHNlcnZpY2U6IGJvb2xlYW47IHN0b3JhZ2U6IGJvb2xlYW47IHByb2ZpbGU6IGJvb2xlYW4gfSxcclxuICBwbGFuOiBudW1iZXJcclxuKTogc3VtbWFyeVByb3BzIHtcclxuICBjb25zdCBnZXRZZWFybHkgPSAoKSA9PiB7XHJcbiAgICBsZXQgeWVhcmx5VGVtcCA9IDA7XHJcbiAgICBpZiAocGxhbiA9PT0gMCkgeWVhcmx5VGVtcCA9IDkwO1xyXG4gICAgaWYgKHBsYW4gPT09IDEpIHllYXJseVRlbXAgPSAxMjA7XHJcbiAgICBpZiAocGxhbiA9PT0gMikgeWVhcmx5VGVtcCA9IDE1MDtcclxuICAgIGlmIChhZGQuc2VydmljZSkgeWVhcmx5VGVtcCA9IHllYXJseVRlbXAgKyAxMDtcclxuICAgIGlmIChhZGQuc3RvcmFnZSkgeWVhcmx5VGVtcCA9IHllYXJseVRlbXAgKyAyMDtcclxuICAgIGlmIChhZGQucHJvZmlsZSkgeWVhcmx5VGVtcCA9IHllYXJseVRlbXAgKyAyMDtcclxuICAgIHJldHVybiB5ZWFybHlUZW1wLnRvU3RyaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TW9udGhseSA9ICgpID0+IHtcclxuICAgIGxldCBtb250aGx5VGVtcCA9IDA7XHJcbiAgICBpZiAocGxhbiA9PT0gMCkgbW9udGhseVRlbXAgPSA5O1xyXG4gICAgaWYgKHBsYW4gPT09IDEpIG1vbnRobHlUZW1wID0gMTI7XHJcbiAgICBpZiAocGxhbiA9PT0gMikgbW9udGhseVRlbXAgPSAxNTtcclxuICAgIGlmIChhZGQuc2VydmljZSkgbW9udGhseVRlbXAgPSBtb250aGx5VGVtcCArIDE7XHJcbiAgICBpZiAoYWRkLnN0b3JhZ2UpIG1vbnRobHlUZW1wID0gbW9udGhseVRlbXAgKyAyO1xyXG4gICAgaWYgKGFkZC5wcm9maWxlKSBtb250aGx5VGVtcCA9IG1vbnRobHlUZW1wICsgMjtcclxuICAgIHJldHVybiBtb250aGx5VGVtcC50b1N0cmluZygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlID0geyBtb250aGx5OiBnZXRNb250aGx5KCksIHllYXJseTogZ2V0WWVhcmx5KCkgfTtcclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1bW1hcnlTdGVwKCkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxzdW1tYXJ5UHJvcHM+KHt9KTtcclxuICBjb25zdCB7IHNjaGVkdWxlLCBzZXRTY2hlZHVsZSwgYWRkLCBwbGFuIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KHN1bW1hcnlDYWxjKGFkZCwgcGxhbikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8VGl0bGUgdGl0bGU9e1wiRmluaXNoaW5nIHVwXCJ9IC8+XHJcbiAgICAgIDxTdWJUaXRsZVxyXG4gICAgICAgIHN1YlRpdGxlPXtcIkRvdWJsZS1jaGVjayBldmVyeXRoaW5nIGxvb2tzIE9LIGJlZm9yZSBjb25maXJtaW5nLlwifVxyXG4gICAgICAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gKFxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIHtwbGFuID09PSAwICYmIFwiQXJjYWRlXCJ9XHJcbiAgICAgICAgICAgICAgICB7cGxhbiA9PT0gMSAmJiBcIkFkdmFuY2VkXCJ9XHJcbiAgICAgICAgICAgICAgICB7cGxhbiA9PT0gMiAmJiBcIlByb1wifSAoTW9udGhseSlcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIHtwbGFuID09PSAwICYmIFwiQXJjYWRlXCJ9XHJcbiAgICAgICAgICAgICAgICB7cGxhbiA9PT0gMSAmJiBcIkFkdmFuY2VkXCJ9XHJcbiAgICAgICAgICAgICAgICB7cGxhbiA9PT0gMiAmJiBcIlByb1wifSAoWWVhcmx5KVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2NoZWR1bGUoIXNjaGVkdWxlKX0+Q2hhbmdlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzY2hlZHVsZSA/IChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgJHtwbGFuID09PSAwICYmIFwiOVwifVxyXG4gICAgICAgICAgICAgIHtwbGFuID09PSAxICYmIFwiMTJcIn1cclxuICAgICAgICAgICAgICB7cGxhbiA9PT0gMiAmJiBcIjE1XCJ9L21vXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICR7cGxhbiA9PT0gMCAmJiBcIjkwXCJ9XHJcbiAgICAgICAgICAgICAge3BsYW4gPT09IDEgJiYgXCIxMjBcIn1cclxuICAgICAgICAgICAgICB7cGxhbiA9PT0gMiAmJiBcIjE1MFwifS95clxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAge2FkZC5zZXJ2aWNlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+T25saW5lIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQxL21vPC9wPiA6IDxwPiQxMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5zdG9yYWdlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+TGFyZ2VyIFN0b3JhZ2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5wcm9maWxlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+Q3VzdG9taXphYmxlIFByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtzY2hlZHVsZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIChwZXIgbW9udGgpPC9wPlxyXG4gICAgICAgICAgICA8cD4rJHtyZXN1bHQ/Lm1vbnRobHl9L21vPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIChwZXIgeWVhcik8L3A+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzdWx0Py55ZWFybHl9L21vPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5U3RlcDtcclxuIl0sIm5hbWVzIjpbInVzZUZvcm1Db250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdWJUaXRsZSIsIlRpdGxlIiwic3R5bGVzIiwic3VtbWFyeUNhbGMiLCJhZGQiLCJwbGFuIiwiZ2V0WWVhcmx5IiwieWVhcmx5VGVtcCIsInNlcnZpY2UiLCJzdG9yYWdlIiwicHJvZmlsZSIsInRvU3RyaW5nIiwiZ2V0TW9udGhseSIsIm1vbnRobHlUZW1wIiwidmFsdWUiLCJtb250aGx5IiwieWVhcmx5IiwiU3VtbWFyeVN0ZXAiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJzY2hlZHVsZSIsInNldFNjaGVkdWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJUaXRsZSIsInVsIiwic3VtbWFyeSIsImxpIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImhyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});