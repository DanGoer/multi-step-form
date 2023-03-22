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

/***/ "./components/InfoStep.tsx":
/*!*********************************!*\
  !*** ./components/InfoStep.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/FormContext */ \"./utility/FormContext.tsx\");\n/* harmony import */ var _InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoStep.module.scss */ \"./components/InfoStep.module.scss\");\n/* harmony import */ var _InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubTitle */ \"./components/SubTitle.tsx\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ \"./components/Title.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction InfoStep() {\n    _s();\n    const { personalInfo , setPersonalInfo , required  } = (0,_utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"card \".concat((_InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Personal info\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                subTitle: \"Please provide your name, email address, and phone number.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    required.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 26\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 66\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: required.name ? \"\".concat((_InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error), \" input-style\") : \"input-style\",\n                type: \"text\",\n                id: \"name\",\n                placeholder: \"e.g. Stephen King\",\n                value: personalInfo.name,\n                onChange: (e)=>setPersonalInfo({\n                        ...personalInfo,\n                        name: e.target.value\n                    }),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email-Address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    required.email ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 27\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 67\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: required.email ? \"\".concat((_InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error), \" input-style\") : \"input-style\",\n                type: \"email\",\n                id: \"email\",\n                placeholder: \"e.g. stephenking@lorem.com\",\n                value: personalInfo.email,\n                onChange: (e)=>setPersonalInfo({\n                        ...personalInfo,\n                        email: e.target.value\n                    }),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"phone\",\n                        children: \"Phone Number\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    required.phone ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 27\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 67\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: required.phone ? \"\".concat((_InfoStep_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error), \" input-style\") : \"input-style\",\n                type: \"text\",\n                id: \"phone\",\n                placeholder: \"e.g. +1 234 567 890\",\n                value: personalInfo.phone,\n                onChange: (e)=>setPersonalInfo({\n                        ...personalInfo,\n                        phone: e.target.value\n                    }),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\frontendmentorchallenges\\\\SPA\\\\multi-step-form\\\\components\\\\InfoStep.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(InfoStep, \"3sWF+oqvMpzUvCD0A+Qpq0VmgoM=\", false, function() {\n    return [\n        _utility_FormContext__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = InfoStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoStep);\nvar _c;\n$RefreshReg$(_c, \"InfoStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9TdGVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBRVg7QUFFVjtBQUNOO0FBRTVCLFNBQVNJLFdBQVc7O0lBQ2xCLE1BQU0sRUFBRUMsYUFBWSxFQUFFQyxnQkFBZSxFQUFFQyxTQUFRLEVBQUUsR0FBR1Asb0VBQWNBO0lBRWxFLHFCQUNFLDhEQUFDUTtRQUFLQyxXQUFXLFFBQW9CLE9BQVpSLG1FQUFXOzswQkFDbEMsOERBQUNFLDhDQUFLQTtnQkFBQ1EsT0FBTTs7Ozs7OzBCQUNiLDhEQUFDVCxpREFBUUE7Z0JBQUNVLFVBQVM7Ozs7OzswQkFDbkIsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQU87Ozs7OztvQkFDckJSLFNBQVNTLElBQUksaUJBQUcsOERBQUNGO2tDQUFNOzs7Ozs2Q0FBaUMsOERBQUNHOzs7OzRCQUFVOzs7Ozs7OzBCQUV0RSw4REFBQ0M7Z0JBQ0NULFdBQ0VGLFNBQVNTLElBQUksR0FBRyxHQUFnQixPQUFiZixvRUFBWSxFQUFDLGtCQUFnQixhQUFhO2dCQUUvRG1CLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLGFBQVk7Z0JBQ1pDLE9BQU9sQixhQUFhVyxJQUFJO2dCQUN4QlEsVUFBVSxDQUFDQyxJQUNUbkIsZ0JBQWdCO3dCQUFFLEdBQUdELFlBQVk7d0JBQUVXLE1BQU1TLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFBQztnQkFFMURoQixRQUFROzs7Ozs7MEJBRVYsOERBQUNNOztrQ0FDQyw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztvQkFDdEJSLFNBQVNvQixLQUFLLGlCQUFHLDhEQUFDYjtrQ0FBTTs7Ozs7NkNBQWlDLDhEQUFDRzs7Ozs0QkFBVTs7Ozs7OzswQkFFdkUsOERBQUNDO2dCQUNDVCxXQUNFRixTQUFTb0IsS0FBSyxHQUFHLEdBQWdCLE9BQWIxQixvRUFBWSxFQUFDLGtCQUFnQixhQUFhO2dCQUVoRW1CLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLGFBQVk7Z0JBQ1pDLE9BQU9sQixhQUFhc0IsS0FBSztnQkFDekJILFVBQVUsQ0FBQ0MsSUFDVG5CLGdCQUFnQjt3QkFBRSxHQUFHRCxZQUFZO3dCQUFFc0IsT0FBT0YsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29CQUFDO2dCQUUzRGhCLFFBQVE7Ozs7OzswQkFFViw4REFBQ007O2tDQUNDLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O29CQUN0QlIsU0FBU3FCLEtBQUssaUJBQUcsOERBQUNkO2tDQUFNOzs7Ozs2Q0FBaUMsOERBQUNHOzs7OzRCQUFVOzs7Ozs7OzBCQUV2RSw4REFBQ0M7Z0JBQ0NULFdBQ0VGLFNBQVNxQixLQUFLLEdBQUcsR0FBZ0IsT0FBYjNCLG9FQUFZLEVBQUMsa0JBQWdCLGFBQWE7Z0JBRWhFbUIsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsYUFBWTtnQkFDWkMsT0FBT2xCLGFBQWF1QixLQUFLO2dCQUN6QkosVUFBVSxDQUFDQyxJQUNUbkIsZ0JBQWdCO3dCQUFFLEdBQUdELFlBQVk7d0JBQUV1QixPQUFPSCxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQUM7Z0JBRTNEaEIsUUFBUTs7Ozs7Ozs7Ozs7O0FBSWhCO0dBNURTSDs7UUFDNkNKLGdFQUFjQTs7O0tBRDNESTtBQTZEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luZm9TdGVwLnRzeD9hNjVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSBcIkAvdXRpbGl0eS9Gb3JtQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbmZvU3RlcC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IFN1YlRpdGxlIGZyb20gXCIuL1N1YlRpdGxlXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gSW5mb1N0ZXAoKSB7XHJcbiAgY29uc3QgeyBwZXJzb25hbEluZm8sIHNldFBlcnNvbmFsSW5mbywgcmVxdWlyZWQgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2BjYXJkICR7c3R5bGVzLmluZm99YH0+XHJcbiAgICAgIDxUaXRsZSB0aXRsZT1cIlBlcnNvbmFsIGluZm9cIiAvPlxyXG4gICAgICA8U3ViVGl0bGUgc3ViVGl0bGU9XCJQbGVhc2UgcHJvdmlkZSB5b3VyIG5hbWUsIGVtYWlsIGFkZHJlc3MsIGFuZCBwaG9uZSBudW1iZXIuXCIgLz5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAge3JlcXVpcmVkLm5hbWUgPyA8bGFiZWw+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvbGFiZWw+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHJlcXVpcmVkLm5hbWUgPyBgJHtzdHlsZXMuZXJyb3J9IGlucHV0LXN0eWxlYCA6IFwiaW5wdXQtc3R5bGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gU3RlcGhlbiBLaW5nXCJcclxuICAgICAgICB2YWx1ZT17cGVyc29uYWxJbmZvLm5hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgc2V0UGVyc29uYWxJbmZvKHsgLi4ucGVyc29uYWxJbmZvLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwtQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAge3JlcXVpcmVkLmVtYWlsID8gPGxhYmVsPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2xhYmVsPiA6IDxkaXY+PC9kaXY+fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICByZXF1aXJlZC5lbWFpbCA/IGAke3N0eWxlcy5lcnJvcn0gaW5wdXQtc3R5bGVgIDogXCJpbnB1dC1zdHlsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIHN0ZXBoZW5raW5nQGxvcmVtLmNvbVwiXHJcbiAgICAgICAgdmFsdWU9e3BlcnNvbmFsSW5mby5lbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICBzZXRQZXJzb25hbEluZm8oeyAuLi5wZXJzb25hbEluZm8sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICB7cmVxdWlyZWQucGhvbmUgPyA8bGFiZWw+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvbGFiZWw+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHJlcXVpcmVkLnBob25lID8gYCR7c3R5bGVzLmVycm9yfSBpbnB1dC1zdHlsZWAgOiBcImlucHV0LXN0eWxlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiArMSAyMzQgNTY3IDg5MFwiXHJcbiAgICAgICAgdmFsdWU9e3BlcnNvbmFsSW5mby5waG9uZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICBzZXRQZXJzb25hbEluZm8oeyAuLi5wZXJzb25hbEluZm8sIHBob25lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1N0ZXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtQ29udGV4dCIsInN0eWxlcyIsIlN1YlRpdGxlIiwiVGl0bGUiLCJJbmZvU3RlcCIsInBlcnNvbmFsSW5mbyIsInNldFBlcnNvbmFsSW5mbyIsInJlcXVpcmVkIiwiZm9ybSIsImNsYXNzTmFtZSIsImluZm8iLCJ0aXRsZSIsInN1YlRpdGxlIiwic3BhbiIsImxhYmVsIiwiaHRtbEZvciIsIm5hbWUiLCJkaXYiLCJpbnB1dCIsImVycm9yIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImVtYWlsIiwicGhvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InfoStep.tsx\n"));

/***/ })

});