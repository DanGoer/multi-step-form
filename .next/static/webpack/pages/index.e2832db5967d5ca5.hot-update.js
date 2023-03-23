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

/***/ "./components/AddStep.tsx":
/*!********************************!*\
  !*** ./components/AddStep.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var _AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddStep.module.scss */ \"./components/AddStep.module.scss\");\n/* harmony import */ var _AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubTitle */ \"./components/SubTitle.tsx\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ \"./components/Title.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AddStep() {\n    _s();\n    const { schedule , add , setAdd  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Pick add-ons\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                subTitle: \"Add-ons help enhance your gaming experience.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().add), \" \").concat(add.service && (_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkadd)),\n                        onClick: ()=>setAdd((prevAdd)=>({\n                                    ...prevAdd,\n                                    service: !prevAdd.service\n                                })),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: add.service\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: ()=>setAdd((prevAdd)=>({\n                                                    ...prevAdd,\n                                                    service: !prevAdd.service\n                                                })),\n                                        className: (_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkmark)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: \"Online service\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Access to multiplayer games\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"+$1/mo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"+$10/yr\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().add), \" \").concat(add.storage && (_AddStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkadd)),\n                        onClick: ()=>setAdd({\n                                ...add,\n                                storage: !add.storage\n                            }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: add.storage\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: \"Larger storage\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Extra 1TB of cloud save\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this),\n                                    schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"+$2/mo\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"+$20/yr\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setAdd({\n                                ...add,\n                                profile: !add.profile\n                            }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: add.profile\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: \"Customizable profile\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Custom theme on your profile\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    schedule ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"+$2/mo\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"+$20/yr\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\AddStep.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(AddStep, \"JT2wrsDQZrustJHp95Rc2GSTPX0=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = AddStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddStep);\nvar _c;\n$RefreshReg$(_c, \"AddStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFN0ZXAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUQ7QUFDWjtBQUNUO0FBQ047QUFRNUIsU0FBU0ksVUFBVTs7SUFDakIsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLElBQUcsRUFBRUMsT0FBTSxFQUFFLEdBQUdQLG9FQUFjQTtJQUVoRCxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNOLDhDQUFLQTtnQkFBQ08sT0FBTzs7Ozs7OzBCQUNkLDhEQUFDUixpREFBUUE7Z0JBQUNTLFVBQVU7Ozs7OzswQkFDcEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQ0NKLFdBQVcsR0FBaUJILE9BQWRMLGlFQUFVLEVBQUMsS0FBa0MsT0FBL0JLLElBQUlRLE9BQU8sSUFBSWIsc0VBQWU7d0JBQzFEZSxTQUFTLElBQ1BULE9BQU8sQ0FBQ1UsVUFBbUI7b0NBQ3pCLEdBQUdBLE9BQU87b0NBQ1ZILFNBQVMsQ0FBQ0csUUFBUUgsT0FBTztnQ0FDM0I7OzBDQUdGLDhEQUFDSTtnQ0FBTVQsV0FBV1IsdUVBQWdCOztrREFDaEMsOERBQUNtQjt3Q0FBTUMsTUFBSzt3Q0FBV0MsU0FBU2hCLElBQUlRLE9BQU87Ozs7OztrREFDM0MsOERBQUNTO3dDQUNDUCxTQUFTLElBQ1BULE9BQU8sQ0FBQ1UsVUFBbUI7b0RBQ3pCLEdBQUdBLE9BQU87b0RBQ1ZILFNBQVMsQ0FBQ0csUUFBUUgsT0FBTztnREFDM0I7d0NBRUZMLFdBQVdSLHVFQUFnQjs7Ozs7Ozs7Ozs7OzBDQUkvQiw4REFBQ087O2tEQUNDLDhEQUFDaUI7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUU7Ozs7Ozs7Ozs7Ozs0QkFFSnJCLHlCQUFXLDhEQUFDcUI7MENBQUU7Ozs7O3FEQUFhLDhEQUFDQTswQ0FBRTs7Ozs7b0NBQVc7Ozs7Ozs7a0NBRTVDLDhEQUFDYjt3QkFDQ0osV0FBVyxHQUFpQkgsT0FBZEwsaUVBQVUsRUFBQyxLQUFrQyxPQUEvQkssSUFBSXFCLE9BQU8sSUFBSTFCLHNFQUFlO3dCQUMxRGUsU0FBUyxJQUFNVCxPQUFPO2dDQUFFLEdBQUdELEdBQUc7Z0NBQUVxQixTQUFTLENBQUNyQixJQUFJcUIsT0FBTzs0QkFBQzs7MENBRXRELDhEQUFDUDtnQ0FBTUMsTUFBSztnQ0FBV0MsU0FBU2hCLElBQUlxQixPQUFPOzs7Ozs7MENBQzNDLDhEQUFDSjs7a0RBQ0MsOERBQUNmOzswREFDQyw4REFBQ2lCOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFFOzs7Ozs7Ozs7Ozs7b0NBRUpyQix5QkFBVyw4REFBQ3FCO2tEQUFFOzs7Ozs2REFBYSw4REFBQ0E7a0RBQUU7Ozs7OzRDQUFXOzs7Ozs7Ozs7Ozs7O2tDQUc5Qyw4REFBQ2I7d0JBQUdHLFNBQVMsSUFBTVQsT0FBTztnQ0FBRSxHQUFHRCxHQUFHO2dDQUFFc0IsU0FBUyxDQUFDdEIsSUFBSXNCLE9BQU87NEJBQUM7OzBDQUN4RCw4REFBQ1I7Z0NBQU1DLE1BQUs7Z0NBQVdDLFNBQVNoQixJQUFJc0IsT0FBTzs7Ozs7OzBDQUMzQyw4REFBQ0w7O2tEQUNDLDhEQUFDZjs7MERBQ0MsOERBQUNpQjswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBRTs7Ozs7Ozs7Ozs7O29DQUVKckIseUJBQVcsOERBQUNxQjtrREFBRTs7Ozs7NkRBQWEsOERBQUNBO2tEQUFFOzs7Ozs0Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RDtHQTlEU3RCOztRQUMyQkosZ0VBQWNBOzs7S0FEekNJO0FBK0RULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkU3RlcC50c3g/YTg2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gXCJAL3V0aWxpdHkvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BZGRTdGVwLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTdWJUaXRsZSBmcm9tIFwiLi9TdWJUaXRsZVwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIjtcclxuXHJcbmludGVyZmFjZSBhZGRJIHtcclxuICBzZXJ2aWNlOiBib29sZWFuO1xyXG4gIHN0b3JhZ2U6IGJvb2xlYW47XHJcbiAgcHJvZmlsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gQWRkU3RlcCgpIHtcclxuICBjb25zdCB7IHNjaGVkdWxlLCBhZGQsIHNldEFkZCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8VGl0bGUgdGl0bGU9e1wiUGljayBhZGQtb25zXCJ9IC8+XHJcbiAgICAgIDxTdWJUaXRsZSBzdWJUaXRsZT17XCJBZGQtb25zIGhlbHAgZW5oYW5jZSB5b3VyIGdhbWluZyBleHBlcmllbmNlLlwifSAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5hZGR9ICR7YWRkLnNlcnZpY2UgJiYgc3R5bGVzLmNoZWNrYWRkfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBzZXRBZGQoKHByZXZBZGQ6IGFkZEkpID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4ucHJldkFkZCxcclxuICAgICAgICAgICAgICBzZXJ2aWNlOiAhcHJldkFkZC5zZXJ2aWNlLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2FkZC5zZXJ2aWNlfSAvPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRBZGQoKHByZXZBZGQ6IGFkZEkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnByZXZBZGQsXHJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U6ICFwcmV2QWRkLnNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2ttYXJrfVxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQ+T25saW5lIHNlcnZpY2U8L2g0PlxyXG4gICAgICAgICAgICA8cD5BY2Nlc3MgdG8gbXVsdGlwbGF5ZXIgZ2FtZXM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiskMS9tbzwvcD4gOiA8cD4rJDEwL3lyPC9wPn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWRkfSAke2FkZC5zdG9yYWdlICYmIHN0eWxlcy5jaGVja2FkZH1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkKHsgLi4uYWRkLCBzdG9yYWdlOiAhYWRkLnN0b3JhZ2UgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2FkZC5zdG9yYWdlfSAvPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0PkxhcmdlciBzdG9yYWdlPC9oND5cclxuICAgICAgICAgICAgICA8cD5FeHRyYSAxVEIgb2YgY2xvdWQgc2F2ZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzY2hlZHVsZSA/IDxwPiskMi9tbzwvcD4gOiA8cD4rJDIwL3lyPC9wPn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRBZGQoeyAuLi5hZGQsIHByb2ZpbGU6ICFhZGQucHJvZmlsZSB9KX0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17YWRkLnByb2ZpbGV9IC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDQ+Q3VzdG9taXphYmxlIHByb2ZpbGU8L2g0PlxyXG4gICAgICAgICAgICAgIDxwPkN1c3RvbSB0aGVtZSBvbiB5b3VyIHByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2NoZWR1bGUgPyA8cD4rJDIvbW88L3A+IDogPHA+KyQyMC95cjwvcD59XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkU3RlcDtcclxuIl0sIm5hbWVzIjpbInVzZUZvcm1Db250ZXh0Iiwic3R5bGVzIiwiU3ViVGl0bGUiLCJUaXRsZSIsIkFkZFN0ZXAiLCJzY2hlZHVsZSIsImFkZCIsInNldEFkZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic3ViVGl0bGUiLCJ1bCIsImxpIiwic2VydmljZSIsImNoZWNrYWRkIiwib25DbGljayIsInByZXZBZGQiLCJsYWJlbCIsImNvbnRhaW5lciIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJzcGFuIiwiY2hlY2ttYXJrIiwiaDQiLCJwIiwic3RvcmFnZSIsInByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddStep.tsx\n"));

/***/ })

});