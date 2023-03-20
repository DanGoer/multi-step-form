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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var _ConfirmButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfirmButton */ \"./components/ConfirmButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction summaryCalc(add, plan) {\n    const getYearly = ()=>{\n        let yearlyTemp = 0;\n        if (plan === 0) yearlyTemp = 90;\n        if (plan === 1) yearlyTemp = 120;\n        if (plan === 2) yearlyTemp = 150;\n        if (add.service) yearlyTemp = yearlyTemp + 20;\n        if (add.storage) yearlyTemp = yearlyTemp + 10;\n        if (add.profile) yearlyTemp = yearlyTemp + 20;\n    };\n    const value = {\n        monthly: \"12\",\n        yearly: \"120\"\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const { setStep , schedule , setSchedule , add , plan  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResult(summaryCalc(add, plan));\n    }, []);\n    const handleNextStep = ()=>{\n        setStep(5);\n    };\n    const handlePreviousStep = ()=>{\n        setStep(3);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Monthly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Yearly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 51\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setSchedule(!schedule),\n                                children: \"Change\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$9/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$90/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"+$\",\n                                result === null || result === void 0 ? void 0 : result.monthly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"$\",\n                                result === null || result === void 0 ? void 0 : result.yearly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handler: handlePreviousStep\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConfirmButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handler: handleNextStep,\n                text: \"Next Step\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"vf91ZwOoPlJbiKmwarIQHUnCfR8=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL1N1bW1hcnlTdGVwLnRzeD8xYjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSBcIkAvdXRpbGl0eS9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuL0JhY2tCdXR0b25cIjtcclxuaW1wb3J0IENvbmZpcm1CdXR0b24gZnJvbSBcIi4vQ29uZmlybUJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIHN1bW1hcnlQcm9wcyB7XHJcbiAgbW9udGhseT86IHN0cmluZztcclxuICB5ZWFybHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bW1hcnlDYWxjKFxyXG4gIGFkZDogeyBzZXJ2aWNlOiBib29sZWFuOyBzdG9yYWdlOiBib29sZWFuOyBwcm9maWxlOiBib29sZWFuIH0sXHJcbiAgcGxhbjogbnVtYmVyXHJcbik6IHN1bW1hcnlQcm9wcyB7XHJcbiAgY29uc3QgZ2V0WWVhcmx5ID0gKCkgPT4ge1xyXG4gICAgbGV0IHllYXJseVRlbXAgPSAwO1xyXG4gICAgaWYgKHBsYW4gPT09IDApIHllYXJseVRlbXAgPSA5MDtcclxuICAgIGlmIChwbGFuID09PSAxKSB5ZWFybHlUZW1wID0gMTIwO1xyXG4gICAgaWYgKHBsYW4gPT09IDIpIHllYXJseVRlbXAgPSAxNTA7XHJcbiAgICBpZiAoYWRkLnNlcnZpY2UpIHllYXJseVRlbXAgPSB5ZWFybHlUZW1wICsgMjA7XHJcbiAgICBpZiAoYWRkLnN0b3JhZ2UpIHllYXJseVRlbXAgPSB5ZWFybHlUZW1wICsgMTA7XHJcbiAgICBpZiAoYWRkLnByb2ZpbGUpIHllYXJseVRlbXAgPSB5ZWFybHlUZW1wICsgMjA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7IG1vbnRobHk6IFwiMTJcIiwgeWVhcmx5OiBcIjEyMFwiIH07XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdW1tYXJ5U3RlcCgpIHtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8c3VtbWFyeVByb3BzPih7fSk7XHJcbiAgY29uc3QgeyBzZXRTdGVwLCBzY2hlZHVsZSwgc2V0U2NoZWR1bGUsIGFkZCwgcGxhbiB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJlc3VsdChzdW1tYXJ5Q2FsYyhhZGQsIHBsYW4pKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRTdGVwID0gKCkgPT4ge1xyXG4gICAgc2V0U3RlcCg1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2aW91c1N0ZXAgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGVwKDMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAge3NjaGVkdWxlID8gPGg0PkFyY2FkZSAoTW9udGhseSk8L2g0PiA6IDxoND5BcmNhZGUgKFllYXJseSk8L2g0Pn1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2NoZWR1bGUoIXNjaGVkdWxlKX0+Q2hhbmdlPC9idXR0b24+XHJcbiAgICAgICAgICB7c2NoZWR1bGUgPyA8cD4kOS9tbzwvcD4gOiA8cD4kOTAveXI8L3A+fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge2FkZC5zZXJ2aWNlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+T25saW5lIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQxL21vPC9wPiA6IDxwPiQxMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5zdG9yYWdlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+TGFyZ2VyIFN0b3JhZ2U8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZC5wcm9maWxlICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHA+Q3VzdG9taXphYmxlIFByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQyL21vPC9wPiA6IDxwPiQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtzY2hlZHVsZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIChwZXIgbW9udGgpPC9wPlxyXG4gICAgICAgICAgICA8cD4rJHtyZXN1bHQ/Lm1vbnRobHl9L21vPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIChwZXIgeWVhcik8L3A+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzdWx0Py55ZWFybHl9L21vPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8QmFja0J1dHRvbiBoYW5kbGVyPXtoYW5kbGVQcmV2aW91c1N0ZXB9IC8+XHJcbiAgICAgIDxDb25maXJtQnV0dG9uIGhhbmRsZXI9e2hhbmRsZU5leHRTdGVwfSB0ZXh0PVwiTmV4dCBTdGVwXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeVN0ZXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFja0J1dHRvbiIsIkNvbmZpcm1CdXR0b24iLCJzdW1tYXJ5Q2FsYyIsImFkZCIsInBsYW4iLCJnZXRZZWFybHkiLCJ5ZWFybHlUZW1wIiwic2VydmljZSIsInN0b3JhZ2UiLCJwcm9maWxlIiwidmFsdWUiLCJtb250aGx5IiwieWVhcmx5IiwiU3VtbWFyeVN0ZXAiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJzZXRTdGVwIiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsImhhbmRsZU5leHRTdGVwIiwiaGFuZGxlUHJldmlvdXNTdGVwIiwiZGl2IiwidWwiLCJsaSIsImg0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzcGFuIiwiaGFuZGxlciIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});