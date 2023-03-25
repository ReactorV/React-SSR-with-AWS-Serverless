/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ssr-local.js":
/*!**********************!*\
  !*** ./ssr-local.js ***!
  \**********************/
/***/ (() => {

eval("// import { apiHandler as apiHandlerSsr, setHtml } from './ssr'\n// import express from 'express'\n// import serverlessExpress from '@vendia/serverless-express'\n// import indexFile from \"./build-local/index.html\";\n//\n// console.log('indexFile',indexFile)\n// setHtml(indexFile)\n// export const apiHandler = apiHandlerSsr\n//\n// const app = express();\n// app.use(express.static(__dirname + '/../../build-local/static'));\n// app.use(express.static(__dirname + '/../../build-local'));\n//\n// export const staticHandler = serverlessExpress({app})\n\n//# sourceURL=webpack://index/./ssr-local.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ssr-local.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});