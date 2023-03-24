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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubTitle */ \"./components/SubTitle.tsx\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ \"./components/Title.tsx\");\n/* harmony import */ var _SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SummaryStep.module.scss */ \"./components/SummaryStep.module.scss\");\n/* harmony import */ var _SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction summaryCalc(add, plan) {\n    const getYearly = ()=>{\n        let yearlyTemp = 0;\n        if (plan === 0) yearlyTemp = 90;\n        if (plan === 1) yearlyTemp = 120;\n        if (plan === 2) yearlyTemp = 150;\n        if (add.service) yearlyTemp = yearlyTemp + 10;\n        if (add.storage) yearlyTemp = yearlyTemp + 20;\n        if (add.profile) yearlyTemp = yearlyTemp + 20;\n        return yearlyTemp.toString();\n    };\n    const getMonthly = ()=>{\n        let monthlyTemp = 0;\n        if (plan === 0) monthlyTemp = 9;\n        if (plan === 1) monthlyTemp = 12;\n        if (plan === 2) monthlyTemp = 15;\n        if (add.service) monthlyTemp = monthlyTemp + 1;\n        if (add.storage) monthlyTemp = monthlyTemp + 2;\n        if (add.profile) monthlyTemp = monthlyTemp + 2;\n        return monthlyTemp.toString();\n    };\n    const value = {\n        monthly: getMonthly(),\n        yearly: getYearly()\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const { schedule , setSchedule , add , plan  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResult(summaryCalc(add, plan));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Finishing up\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                subTitle: \"Double-check everything looks OK before confirming.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default().summary),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            plan === 0 && \"Arcade\",\n                                            plan === 1 && \"Advanced\",\n                                            plan === 2 && \"Pro\",\n                                            \" (Monthly)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            plan === 0 && \"Arcade\",\n                                            plan === 1 && \"Advanced\",\n                                            plan === 2 && \"Pro\",\n                                            \" (Yearly)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setSchedule(!schedule),\n                                        children: \"Change\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sum),\n                                children: [\n                                    \"$\",\n                                    plan === 0 && \"9\",\n                                    plan === 1 && \"12\",\n                                    plan === 2 && \"15\",\n                                    \"/mo\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sum),\n                                children: [\n                                    \"$\",\n                                    plan === 0 && \"90\",\n                                    plan === 1 && \"120\",\n                                    plan === 2 && \"150\",\n                                    \"/yr\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_SummaryStep_module_scss__WEBPACK_IMPORTED_MODULE_5___default().total),\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"+$\",\n                                result === null || result === void 0 ? void 0 : result.monthly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"$\",\n                                result === null || result === void 0 ? void 0 : result.yearly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"iP9GK6nE5l1hZOHiKbAxs7sJop8=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBVyw4REFBQ1k7MENBQUU7Ozs7O3FEQUFZLDhEQUFDQTswQ0FBRTs7Ozs7b0NBQVU7Ozs7Ozs7b0JBRzNDNUIsSUFBSU0sT0FBTyxrQkFDViw4REFBQ2tCOzswQ0FDQyw4REFBQ0k7MENBQUU7Ozs7Ozs0QkFDRloseUJBQVcsOERBQUNZOzBDQUFFOzs7OztxREFBWSw4REFBQ0E7MENBQUU7Ozs7O29DQUFVOzs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ0c7Z0JBQUtaLFdBQVdyQix1RUFBWTswQkFDMUJrQix5QkFDQzs7c0NBQ0UsOERBQUNZO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNBOztnQ0FBRTtnQ0FBR2QsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRSCxPQUFPO2dDQUFDOzs7Ozs7OztpREFHeEI7O3NDQUNFLDhEQUFDaUI7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7O2dDQUFFO2dDQUFFZCxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFGLE1BQU07Z0NBQUM7Ozs7Ozs7O2dDQUV2Qjs7Ozs7Ozs7Ozs7O0FBSVQ7R0FqRlNDOztRQUVzQ3BCLGdFQUFjQTs7O0tBRnBEb0I7QUFrRlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW1tYXJ5U3RlcC50c3g/MWI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gXCJAL3V0aWxpdHkvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3ViVGl0bGUgZnJvbSBcIi4vU3ViVGl0bGVcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3VtbWFyeVN0ZXAubW9kdWxlLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBzdW1tYXJ5UHJvcHMge1xyXG4gIG1vbnRobHk/OiBzdHJpbmc7XHJcbiAgeWVhcmx5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW1tYXJ5Q2FsYyhcclxuICBhZGQ6IHsgc2VydmljZTogYm9vbGVhbjsgc3RvcmFnZTogYm9vbGVhbjsgcHJvZmlsZTogYm9vbGVhbiB9LFxyXG4gIHBsYW46IG51bWJlclxyXG4pOiBzdW1tYXJ5UHJvcHMge1xyXG4gIGNvbnN0IGdldFllYXJseSA9ICgpID0+IHtcclxuICAgIGxldCB5ZWFybHlUZW1wID0gMDtcclxuICAgIGlmIChwbGFuID09PSAwKSB5ZWFybHlUZW1wID0gOTA7XHJcbiAgICBpZiAocGxhbiA9PT0gMSkgeWVhcmx5VGVtcCA9IDEyMDtcclxuICAgIGlmIChwbGFuID09PSAyKSB5ZWFybHlUZW1wID0gMTUwO1xyXG4gICAgaWYgKGFkZC5zZXJ2aWNlKSB5ZWFybHlUZW1wID0geWVhcmx5VGVtcCArIDEwO1xyXG4gICAgaWYgKGFkZC5zdG9yYWdlKSB5ZWFybHlUZW1wID0geWVhcmx5VGVtcCArIDIwO1xyXG4gICAgaWYgKGFkZC5wcm9maWxlKSB5ZWFybHlUZW1wID0geWVhcmx5VGVtcCArIDIwO1xyXG4gICAgcmV0dXJuIHllYXJseVRlbXAudG9TdHJpbmcoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRNb250aGx5ID0gKCkgPT4ge1xyXG4gICAgbGV0IG1vbnRobHlUZW1wID0gMDtcclxuICAgIGlmIChwbGFuID09PSAwKSBtb250aGx5VGVtcCA9IDk7XHJcbiAgICBpZiAocGxhbiA9PT0gMSkgbW9udGhseVRlbXAgPSAxMjtcclxuICAgIGlmIChwbGFuID09PSAyKSBtb250aGx5VGVtcCA9IDE1O1xyXG4gICAgaWYgKGFkZC5zZXJ2aWNlKSBtb250aGx5VGVtcCA9IG1vbnRobHlUZW1wICsgMTtcclxuICAgIGlmIChhZGQuc3RvcmFnZSkgbW9udGhseVRlbXAgPSBtb250aGx5VGVtcCArIDI7XHJcbiAgICBpZiAoYWRkLnByb2ZpbGUpIG1vbnRobHlUZW1wID0gbW9udGhseVRlbXAgKyAyO1xyXG4gICAgcmV0dXJuIG1vbnRobHlUZW1wLnRvU3RyaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7IG1vbnRobHk6IGdldE1vbnRobHkoKSwgeWVhcmx5OiBnZXRZZWFybHkoKSB9O1xyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3VtbWFyeVN0ZXAoKSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPHN1bW1hcnlQcm9wcz4oe30pO1xyXG4gIGNvbnN0IHsgc2NoZWR1bGUsIHNldFNjaGVkdWxlLCBhZGQsIHBsYW4gfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSZXN1bHQoc3VtbWFyeUNhbGMoYWRkLCBwbGFuKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxUaXRsZSB0aXRsZT17XCJGaW5pc2hpbmcgdXBcIn0gLz5cclxuICAgICAgPFN1YlRpdGxlXHJcbiAgICAgICAgc3ViVGl0bGU9e1wiRG91YmxlLWNoZWNrIGV2ZXJ5dGhpbmcgbG9va3MgT0sgYmVmb3JlIGNvbmZpcm1pbmcuXCJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c2NoZWR1bGUgPyAoXHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAge3BsYW4gPT09IDAgJiYgXCJBcmNhZGVcIn1cclxuICAgICAgICAgICAgICAgIHtwbGFuID09PSAxICYmIFwiQWR2YW5jZWRcIn1cclxuICAgICAgICAgICAgICAgIHtwbGFuID09PSAyICYmIFwiUHJvXCJ9IChNb250aGx5KVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAge3BsYW4gPT09IDAgJiYgXCJBcmNhZGVcIn1cclxuICAgICAgICAgICAgICAgIHtwbGFuID09PSAxICYmIFwiQWR2YW5jZWRcIn1cclxuICAgICAgICAgICAgICAgIHtwbGFuID09PSAyICYmIFwiUHJvXCJ9IChZZWFybHkpXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTY2hlZHVsZSghc2NoZWR1bGUpfT5DaGFuZ2U8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3NjaGVkdWxlID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdW19PlxyXG4gICAgICAgICAgICAgICR7cGxhbiA9PT0gMCAmJiBcIjlcIn1cclxuICAgICAgICAgICAgICB7cGxhbiA9PT0gMSAmJiBcIjEyXCJ9XHJcbiAgICAgICAgICAgICAge3BsYW4gPT09IDIgJiYgXCIxNVwifS9tb1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdW19PlxyXG4gICAgICAgICAgICAgICR7cGxhbiA9PT0gMCAmJiBcIjkwXCJ9XHJcbiAgICAgICAgICAgICAge3BsYW4gPT09IDEgJiYgXCIxMjBcIn1cclxuICAgICAgICAgICAgICB7cGxhbiA9PT0gMiAmJiBcIjE1MFwifS95clxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAge2FkZC5zZXJ2aWNlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+T25saW5lIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQxL21vPC9wPiA6IDxwPiQxMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5zdG9yYWdlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+TGFyZ2VyIFN0b3JhZ2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5wcm9maWxlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+Q3VzdG9taXphYmxlIFByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsfT5cclxuICAgICAgICB7c2NoZWR1bGUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5Ub3RhbCAocGVyIG1vbnRoKTwvcD5cclxuICAgICAgICAgICAgPHA+KyR7cmVzdWx0Py5tb250aGx5fS9tbzwvcD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5Ub3RhbCAocGVyIHllYXIpPC9wPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3VsdD8ueWVhcmx5fS9tbzwvcD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeVN0ZXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3ViVGl0bGUiLCJUaXRsZSIsInN0eWxlcyIsInN1bW1hcnlDYWxjIiwiYWRkIiwicGxhbiIsImdldFllYXJseSIsInllYXJseVRlbXAiLCJzZXJ2aWNlIiwic3RvcmFnZSIsInByb2ZpbGUiLCJ0b1N0cmluZyIsImdldE1vbnRobHkiLCJtb250aGx5VGVtcCIsInZhbHVlIiwibW9udGhseSIsInllYXJseSIsIlN1bW1hcnlTdGVwIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic3ViVGl0bGUiLCJ1bCIsInN1bW1hcnkiLCJsaSIsImg0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzdW0iLCJociIsInNwYW4iLCJ0b3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});