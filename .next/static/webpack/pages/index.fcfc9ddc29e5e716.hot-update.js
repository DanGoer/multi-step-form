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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var _ConfirmButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfirmButton */ \"./components/ConfirmButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction summaryCalc(add, plan) {\n    const getYearly = ()=>{\n        let yearlyTemp = 0;\n        if (plan === 0) yearlyTemp = 90;\n        if (plan === 1) yearlyTemp = 120;\n        if (plan === 2) yearlyTemp = 150;\n        if (add.service) yearlyTemp = yearlyTemp + 10;\n        if (add.storage) yearlyTemp = yearlyTemp + 20;\n        if (add.profile) yearlyTemp = yearlyTemp + 20;\n        return yearlyTemp.toString();\n    };\n    const value = {\n        monthly: \"12\",\n        yearly: getYearly()\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const { setStep , schedule , setSchedule , add , plan  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResult(summaryCalc(add, plan));\n    }, []);\n    const handleNextStep = ()=>{\n        setStep(5);\n    };\n    const handlePreviousStep = ()=>{\n        setStep(3);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Monthly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Yearly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 51\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setSchedule(!schedule),\n                                children: \"Change\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$9/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$90/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"+$\",\n                                result === null || result === void 0 ? void 0 : result.monthly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"$\",\n                                result === null || result === void 0 ? void 0 : result.yearly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handler: handlePreviousStep\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConfirmButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handler: handleNextStep,\n                text: \"Next Step\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"vf91ZwOoPlJbiKmwarIQHUnCfR8=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N1bW1hcnlTdGVwLnRzeD8xYjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSBcIkAvdXRpbGl0eS9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuL0JhY2tCdXR0b25cIjtcclxuaW1wb3J0IENvbmZpcm1CdXR0b24gZnJvbSBcIi4vQ29uZmlybUJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIHN1bW1hcnlQcm9wcyB7XHJcbiAgbW9udGhseT86IHN0cmluZztcclxuICB5ZWFybHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bW1hcnlDYWxjKFxyXG4gIGFkZDogeyBzZXJ2aWNlOiBib29sZWFuOyBzdG9yYWdlOiBib29sZWFuOyBwcm9maWxlOiBib29sZWFuIH0sXHJcbiAgcGxhbjogbnVtYmVyXHJcbik6IHN1bW1hcnlQcm9wcyB7XHJcbiAgY29uc3QgZ2V0WWVhcmx5ID0gKCkgPT4ge1xyXG4gICAgbGV0IHllYXJseVRlbXAgPSAwO1xyXG4gICAgaWYgKHBsYW4gPT09IDApIHllYXJseVRlbXAgPSA5MDtcclxuICAgIGlmIChwbGFuID09PSAxKSB5ZWFybHlUZW1wID0gMTIwO1xyXG4gICAgaWYgKHBsYW4gPT09IDIpIHllYXJseVRlbXAgPSAxNTA7XHJcbiAgICBpZiAoYWRkLnNlcnZpY2UpIHllYXJseVRlbXAgPSB5ZWFybHlUZW1wICsgMTA7XHJcbiAgICBpZiAoYWRkLnN0b3JhZ2UpIHllYXJseVRlbXAgPSB5ZWFybHlUZW1wICsgMjA7XHJcbiAgICBpZiAoYWRkLnByb2ZpbGUpIHllYXJseVRlbXAgPSB5ZWFybHlUZW1wICsgMjA7XHJcbiAgICByZXR1cm4geWVhcmx5VGVtcC50b1N0cmluZygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlID0geyBtb250aGx5OiBcIjEyXCIsIHllYXJseTogZ2V0WWVhcmx5KCkgfTtcclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1bW1hcnlTdGVwKCkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxzdW1tYXJ5UHJvcHM+KHt9KTtcclxuICBjb25zdCB7IHNldFN0ZXAsIHNjaGVkdWxlLCBzZXRTY2hlZHVsZSwgYWRkLCBwbGFuIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KHN1bW1hcnlDYWxjKGFkZCwgcGxhbikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dFN0ZXAgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGVwKDUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzU3RlcCA9ICgpID0+IHtcclxuICAgIHNldFN0ZXAoMyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICB7c2NoZWR1bGUgPyA8aDQ+QXJjYWRlIChNb250aGx5KTwvaDQ+IDogPGg0PkFyY2FkZSAoWWVhcmx5KTwvaDQ+fVxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTY2hlZHVsZSghc2NoZWR1bGUpfT5DaGFuZ2U8L2J1dHRvbj5cclxuICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiQ5L21vPC9wPiA6IDxwPiQ5MC95cjwvcD59XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7YWRkLnNlcnZpY2UgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8cD5PbmxpbmUgU2VydmljZTwvcD5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gPHA+JDEvbW88L3A+IDogPHA+JDEwL3lyPC9wPn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YWRkLnN0b3JhZ2UgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8cD5MYXJnZXIgU3RvcmFnZTwvcD5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gPHA+JDIvbW88L3A+IDogPHA+JDIwL3lyPC9wPn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YWRkLnByb2ZpbGUgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8cD5DdXN0b21pemFibGUgUHJvZmlsZTwvcD5cclxuICAgICAgICAgICAge3NjaGVkdWxlID8gPHA+JDIvbW88L3A+IDogPHA+JDIwL3lyPC9wPn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3NjaGVkdWxlID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+VG90YWwgKHBlciBtb250aCk8L3A+XHJcbiAgICAgICAgICAgIDxwPiske3Jlc3VsdD8ubW9udGhseX0vbW88L3A+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+VG90YWwgKHBlciB5ZWFyKTwvcD5cclxuICAgICAgICAgICAgPHA+JHtyZXN1bHQ/LnllYXJseX0vbW88L3A+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxCYWNrQnV0dG9uIGhhbmRsZXI9e2hhbmRsZVByZXZpb3VzU3RlcH0gLz5cclxuICAgICAgPENvbmZpcm1CdXR0b24gaGFuZGxlcj17aGFuZGxlTmV4dFN0ZXB9IHRleHQ9XCJOZXh0IFN0ZXBcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5U3RlcDtcclxuIl0sIm5hbWVzIjpbInVzZUZvcm1Db250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCYWNrQnV0dG9uIiwiQ29uZmlybUJ1dHRvbiIsInN1bW1hcnlDYWxjIiwiYWRkIiwicGxhbiIsImdldFllYXJseSIsInllYXJseVRlbXAiLCJzZXJ2aWNlIiwic3RvcmFnZSIsInByb2ZpbGUiLCJ0b1N0cmluZyIsInZhbHVlIiwibW9udGhseSIsInllYXJseSIsIlN1bW1hcnlTdGVwIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2V0U3RlcCIsInNjaGVkdWxlIiwic2V0U2NoZWR1bGUiLCJoYW5kbGVOZXh0U3RlcCIsImhhbmRsZVByZXZpb3VzU3RlcCIsImRpdiIsInVsIiwibGkiLCJoNCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic3BhbiIsImhhbmRsZXIiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});