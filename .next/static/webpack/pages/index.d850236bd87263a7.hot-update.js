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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var _ConfirmButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfirmButton */ \"./components/ConfirmButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction summaryCalc(add, plan) {\n    const value = {\n        monthly: \"12\",\n        yearly: \"120\"\n    };\n    return value;\n}\nfunction SummaryStep() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const { setStep , schedule , setSchedule , add , plan  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setResult(summaryCalc(add, plan));\n    }, []);\n    const handleNextStep = ()=>{\n        setStep(5);\n    };\n    const handlePreviousStep = ()=>{\n        setStep(3);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Monthly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Arcade (Yearly)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 51\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setSchedule(!schedule),\n                                children: \"Change\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$9/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$90/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    add.service && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Online Service\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    add.storage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Larger Storage\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    add.profile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Customizable Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$2/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"$20/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per month)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"+$\",\n                                result === null || result === void 0 ? void 0 : result.monthly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Total (per year)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"$\",\n                                result === null || result === void 0 ? void 0 : result.yearly,\n                                \"/mo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handler: handlePreviousStep\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConfirmButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handler: handleNextStep,\n                text: \"Next Step\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\SummaryStep.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(SummaryStep, \"vf91ZwOoPlJbiKmwarIQHUnCfR8=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = SummaryStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryStep);\nvar _c;\n$RefreshReg$(_c, \"SummaryStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1bW1hcnlTdGVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ1g7QUFDTjtBQUNNO0FBTzVDLFNBQVNLLFlBQ1BDLEdBQTZELEVBQzdEQyxJQUFZLEVBQ1o7SUFDQSxNQUFNQyxRQUFRO1FBQUVDLFNBQVM7UUFBTUMsUUFBUTtJQUFNO0lBQzdDLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTRyxjQUFjOztJQUNyQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQWUsQ0FBQztJQUNwRCxNQUFNLEVBQUVZLFFBQU8sRUFBRUMsU0FBUSxFQUFFQyxZQUFXLEVBQUVWLElBQUcsRUFBRUMsS0FBSSxFQUFFLEdBQUdQLG9FQUFjQTtJQUVwRUMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxVQUFVUixZQUFZQyxLQUFLQztJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNVSxpQkFBaUIsSUFBTTtRQUMzQkgsUUFBUTtJQUNWO0lBRUEsTUFBTUkscUJBQXFCLElBQU07UUFDL0JKLFFBQVE7SUFDVjtJQUVBLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNDOztrQ0FDQyw4REFBQ0M7OzRCQUNFTix5QkFBVyw4REFBQ087MENBQUc7Ozs7O3FEQUF3Qiw4REFBQ0E7MENBQUc7Ozs7O29DQUFvQjswQ0FDaEUsOERBQUNDO2dDQUFPQyxTQUFTLElBQU1SLFlBQVksQ0FBQ0Q7MENBQVc7Ozs7Ozs0QkFDOUNBLHlCQUFXLDhEQUFDVTswQ0FBRTs7Ozs7cURBQVksOERBQUNBOzBDQUFFOzs7OztvQ0FBVTs7Ozs7OztvQkFFekNuQixJQUFJb0IsT0FBTyxrQkFDViw4REFBQ0w7OzBDQUNDLDhEQUFDSTswQ0FBRTs7Ozs7OzRCQUNGVix5QkFBVyw4REFBQ1U7MENBQUU7Ozs7O3FEQUFZLDhEQUFDQTswQ0FBRTs7Ozs7b0NBQVU7Ozs7Ozs7b0JBRzNDbkIsSUFBSXFCLE9BQU8sa0JBQ1YsOERBQUNOOzswQ0FDQyw4REFBQ0k7MENBQUU7Ozs7Ozs0QkFDRlYseUJBQVcsOERBQUNVOzBDQUFFOzs7OztxREFBWSw4REFBQ0E7MENBQUU7Ozs7O29DQUFVOzs7Ozs7O29CQUczQ25CLElBQUlzQixPQUFPLGtCQUNWLDhEQUFDUDs7MENBQ0MsOERBQUNJOzBDQUFFOzs7Ozs7NEJBQ0ZWLHlCQUFXLDhEQUFDVTswQ0FBRTs7Ozs7cURBQVksOERBQUNBOzBDQUFFOzs7OztvQ0FBVTs7Ozs7Ozs7Ozs7OzswQkFJOUMsOERBQUNJOzBCQUNFZCx5QkFDQzs7c0NBQ0UsOERBQUNVO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNBOztnQ0FBRTtnQ0FBR2IsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRSCxPQUFPO2dDQUFDOzs7Ozs7OztpREFHeEI7O3NDQUNFLDhEQUFDZ0I7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7O2dDQUFFO2dDQUFFYixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFGLE1BQU07Z0NBQUM7Ozs7Ozs7O2dDQUV2Qjs7Ozs7OzBCQUVILDhEQUFDUCxtREFBVUE7Z0JBQUMyQixTQUFTWjs7Ozs7OzBCQUNyQiw4REFBQ2Qsc0RBQWFBO2dCQUFDMEIsU0FBU2I7Z0JBQWdCYyxNQUFLOzs7Ozs7Ozs7Ozs7QUFHbkQ7R0E1RFNwQjs7UUFFK0NYLGdFQUFjQTs7O0tBRjdEVztBQTZEVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N1bW1hcnlTdGVwLnRzeD8xYjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSBcIkAvdXRpbGl0eS9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuL0JhY2tCdXR0b25cIjtcclxuaW1wb3J0IENvbmZpcm1CdXR0b24gZnJvbSBcIi4vQ29uZmlybUJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIHN1bW1hcnlQcm9wcyB7XHJcbiAgbW9udGhseT86IHN0cmluZztcclxuICB5ZWFybHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bW1hcnlDYWxjKFxyXG4gIGFkZDogeyBzZXJ2aWNlOiBib29sZWFuOyBzdG9yYWdlOiBib29sZWFuOyBwcm9maWxlOiBib29sZWFuIH0sXHJcbiAgcGxhbjogbnVtYmVyXHJcbikge1xyXG4gIGNvbnN0IHZhbHVlID0geyBtb250aGx5OiBcIjEyXCIsIHllYXJseTogXCIxMjBcIiB9O1xyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3VtbWFyeVN0ZXAoKSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPHN1bW1hcnlQcm9wcz4oe30pO1xyXG4gIGNvbnN0IHsgc2V0U3RlcCwgc2NoZWR1bGUsIHNldFNjaGVkdWxlLCBhZGQsIHBsYW4gfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSZXN1bHQoc3VtbWFyeUNhbGMoYWRkLCBwbGFuKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0U3RlcCA9ICgpID0+IHtcclxuICAgIHNldFN0ZXAoNSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlvdXNTdGVwID0gKCkgPT4ge1xyXG4gICAgc2V0U3RlcCgzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIHtzY2hlZHVsZSA/IDxoND5BcmNhZGUgKE1vbnRobHkpPC9oND4gOiA8aDQ+QXJjYWRlIChZZWFybHkpPC9oND59XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNjaGVkdWxlKCFzY2hlZHVsZSl9PkNoYW5nZTwvYnV0dG9uPlxyXG4gICAgICAgICAge3NjaGVkdWxlID8gPHA+JDkvbW88L3A+IDogPHA+JDkwL3lyPC9wPn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIHthZGQuc2VydmljZSAmJiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxwPk9ubGluZSBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICB7c2NoZWR1bGUgPyA8cD4kMS9tbzwvcD4gOiA8cD4kMTAveXI8L3A+fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHthZGQuc3RvcmFnZSAmJiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxwPkxhcmdlciBTdG9yYWdlPC9wPlxyXG4gICAgICAgICAgICB7c2NoZWR1bGUgPyA8cD4kMi9tbzwvcD4gOiA8cD4kMjAveXI8L3A+fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHthZGQucHJvZmlsZSAmJiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxwPkN1c3RvbWl6YWJsZSBQcm9maWxlPC9wPlxyXG4gICAgICAgICAgICB7c2NoZWR1bGUgPyA8cD4kMi9tbzwvcD4gOiA8cD4kMjAveXI8L3A+fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7c2NoZWR1bGUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5Ub3RhbCAocGVyIG1vbnRoKTwvcD5cclxuICAgICAgICAgICAgPHA+KyR7cmVzdWx0Py5tb250aGx5fS9tbzwvcD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5Ub3RhbCAocGVyIHllYXIpPC9wPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3VsdD8ueWVhcmx5fS9tbzwvcD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPEJhY2tCdXR0b24gaGFuZGxlcj17aGFuZGxlUHJldmlvdXNTdGVwfSAvPlxyXG4gICAgICA8Q29uZmlybUJ1dHRvbiBoYW5kbGVyPXtoYW5kbGVOZXh0U3RlcH0gdGV4dD1cIk5leHQgU3RlcFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnlTdGVwO1xyXG4iXSwibmFtZXMiOlsidXNlRm9ybUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhY2tCdXR0b24iLCJDb25maXJtQnV0dG9uIiwic3VtbWFyeUNhbGMiLCJhZGQiLCJwbGFuIiwidmFsdWUiLCJtb250aGx5IiwieWVhcmx5IiwiU3VtbWFyeVN0ZXAiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJzZXRTdGVwIiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsImhhbmRsZU5leHRTdGVwIiwiaGFuZGxlUHJldmlvdXNTdGVwIiwiZGl2IiwidWwiLCJsaSIsImg0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzZXJ2aWNlIiwic3RvcmFnZSIsInByb2ZpbGUiLCJzcGFuIiwiaGFuZGxlciIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SummaryStep.tsx\n"));

/***/ })

});