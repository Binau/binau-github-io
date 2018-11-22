(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_page_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/page/accueil/accueil.component */ "./src/app/component/page/accueil/accueil.component.ts");
/* harmony import */ var _component_page_multi_screen_multi_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/page/multi-screen/multi-screen.component */ "./src/app/component/page/multi-screen/multi-screen.component.ts");
/* harmony import */ var _component_page_web_worker_web_worker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/page/web-worker/web-worker.component */ "./src/app/component/page/web-worker/web-worker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _component_page_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__["AccueilComponent"] },
    { path: 'multi-ecran', component: _component_page_multi_screen_multi_screen_component__WEBPACK_IMPORTED_MODULE_3__["MultiScreenComponent"] },
    { path: 'web-worker', component: _component_page_web_worker_web_worker_component__WEBPACK_IMPORTED_MODULE_4__["WebWorkerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_page_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/page/app/app.component */ "./src/app/component/page/app/app.component.ts");
/* harmony import */ var _component_fragment_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/fragment/menu/menu.component */ "./src/app/component/fragment/menu/menu.component.ts");
/* harmony import */ var _component_page_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/page/accueil/accueil.component */ "./src/app/component/page/accueil/accueil.component.ts");
/* harmony import */ var _component_page_multi_screen_multi_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/page/multi-screen/multi-screen.component */ "./src/app/component/page/multi-screen/multi-screen.component.ts");
/* harmony import */ var _component_page_web_worker_web_worker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/page/web-worker/web-worker.component */ "./src/app/component/page/web-worker/web-worker.component.ts");
/* harmony import */ var _component_fragment_msg_panel_msg_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/fragment/msg-panel/msg-panel.component */ "./src/app/component/fragment/msg-panel/msg-panel.component.ts");
/* harmony import */ var _component_fragment_count_with_ww_count_with_ww_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/fragment/count-with-ww/count-with-ww.component */ "./src/app/component/fragment/count-with-ww/count-with-ww.component.ts");
/* harmony import */ var _component_fragment_count_no_ww_count_no_ww_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/fragment/count-no-ww/count-no-ww.component */ "./src/app/component/fragment/count-no-ww/count-no-ww.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_web_worker_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/web-worker.service */ "./src/app/service/web-worker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // Components
                _component_fragment_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                // Pages
                _component_page_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_page_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__["AccueilComponent"],
                _component_page_multi_screen_multi_screen_component__WEBPACK_IMPORTED_MODULE_6__["MultiScreenComponent"],
                _component_page_web_worker_web_worker_component__WEBPACK_IMPORTED_MODULE_7__["WebWorkerComponent"],
                _component_fragment_msg_panel_msg_panel_component__WEBPACK_IMPORTED_MODULE_8__["MsgPanelComponent"],
                _component_fragment_count_with_ww_count_with_ww_component__WEBPACK_IMPORTED_MODULE_9__["CountWithWwComponent"],
                _component_fragment_count_no_ww_count_no_ww_component__WEBPACK_IMPORTED_MODULE_10__["CountNoWwComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            providers: [
                _service_web_worker_service__WEBPACK_IMPORTED_MODULE_12__["WebWorkerService"]
            ],
            bootstrap: [_component_page_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/fragment/count-no-ww/count-no-ww.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/fragment/count-no-ww/count-no-ww.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mcmFnbWVudC9jb3VudC1uby13dy9jb3VudC1uby13dy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/fragment/count-no-ww/count-no-ww.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/fragment/count-no-ww/count-no-ww.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <span>{{currentNb}}</span>\n"

/***/ }),

/***/ "./src/app/component/fragment/count-no-ww/count-no-ww.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/fragment/count-no-ww/count-no-ww.component.ts ***!
  \*************************************************************************/
/*! exports provided: CountNoWwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountNoWwComponent", function() { return CountNoWwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_web_worker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/web-worker.service */ "./src/app/service/web-worker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountNoWwComponent = /** @class */ (function () {
    function CountNoWwComponent(webWorkerService) {
        this.webWorkerService = webWorkerService;
        this.currentNb = 0;
        this.countNb = 0;
    }
    CountNoWwComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.currentNb = _this.countNb;
        }, 100);
        // Abonnement aux evenements
        this.webWorkerService.startEvent.subscribe(function () { return _this.startWebWorker(); });
        this.webWorkerService.stopEvent.subscribe(function () { return _this.stopWebWorker(); });
    };
    CountNoWwComponent.prototype.startWebWorker = function () {
        if (this.currentImmediate)
            this.stopWebWorker();
        this.doCount();
    };
    CountNoWwComponent.prototype.stopWebWorker = function () {
        clearTimeout(this.currentImmediate);
        this.currentImmediate = null;
    };
    CountNoWwComponent.prototype.doCount = function () {
        console.log('.');
        this.countNb++;
        this.currentImmediate = setTimeout(this.doCount.bind(this), 0);
    };
    CountNoWwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-count-no-ww',
            template: __webpack_require__(/*! ./count-no-ww.component.html */ "./src/app/component/fragment/count-no-ww/count-no-ww.component.html"),
            styles: [__webpack_require__(/*! ./count-no-ww.component.css */ "./src/app/component/fragment/count-no-ww/count-no-ww.component.css")]
        }),
        __metadata("design:paramtypes", [_service_web_worker_service__WEBPACK_IMPORTED_MODULE_1__["WebWorkerService"]])
    ], CountNoWwComponent);
    return CountNoWwComponent;
}());



/***/ }),

/***/ "./src/app/component/fragment/count-with-ww/count-with-ww.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/fragment/count-with-ww/count-with-ww.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mcmFnbWVudC9jb3VudC13aXRoLXd3L2NvdW50LXdpdGgtd3cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/fragment/count-with-ww/count-with-ww.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/fragment/count-with-ww/count-with-ww.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span>{{currentNb}}</span>\n"

/***/ }),

/***/ "./src/app/component/fragment/count-with-ww/count-with-ww.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/fragment/count-with-ww/count-with-ww.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CountWithWwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountWithWwComponent", function() { return CountWithWwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_web_worker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/web-worker.service */ "./src/app/service/web-worker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountWithWwComponent = /** @class */ (function () {
    function CountWithWwComponent(webWorkerService) {
        this.webWorkerService = webWorkerService;
        this.currentNb = 0;
    }
    CountWithWwComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Chargement du worker
        this.myWorker = new Worker('./assets/worker1.js');
        this.myWorker.onmessage = this.onWorker1Message.bind(this);
        // Abonnement aux evenements
        this.webWorkerService.startEvent.subscribe(function () { return _this.startWebWorker(); });
        this.webWorkerService.stopEvent.subscribe(function () { return _this.stopWebWorker(); });
    };
    CountWithWwComponent.prototype.ngOnDestroy = function () {
        if (this.myWorker)
            this.myWorker.terminate();
    };
    CountWithWwComponent.prototype.startWebWorker = function () {
        this.postWorker1({
            start: true
        });
    };
    CountWithWwComponent.prototype.stopWebWorker = function () {
        this.postWorker1({
            stop: true
        });
    };
    CountWithWwComponent.prototype.postWorker1 = function (bean) {
        this.myWorker.postMessage(bean);
    };
    CountWithWwComponent.prototype.onWorker1Message = function (event) {
        //
        var data = event.data;
        this.currentNb = data.currentNb;
    };
    CountWithWwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-count-with-ww',
            template: __webpack_require__(/*! ./count-with-ww.component.html */ "./src/app/component/fragment/count-with-ww/count-with-ww.component.html"),
            styles: [__webpack_require__(/*! ./count-with-ww.component.css */ "./src/app/component/fragment/count-with-ww/count-with-ww.component.css")]
        }),
        __metadata("design:paramtypes", [_service_web_worker_service__WEBPACK_IMPORTED_MODULE_1__["WebWorkerService"]])
    ], CountWithWwComponent);
    return CountWithWwComponent;
}());



/***/ }),

/***/ "./src/app/component/fragment/menu/menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/component/fragment/menu/menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper {\r\n\r\n}\r\n\r\n.nav {\r\n  display: block;\r\n  background-color: aliceblue;\r\n}\r\n\r\n.nav-logo {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  padding: 0 20px;\r\n}\r\n\r\n.nav-logo-img {\r\n  width: 50px;\r\n  height: 50px;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n\r\n  padding: 10px 30px 10px 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-item:hover {\r\n  -webkit-filter: opacity(50%);\r\n          filter: opacity(50%);\r\n  color: aliceblue;\r\n  background-color: black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ZyYWdtZW50L21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQzs7QUFFRDtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCOztFQUV2QixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCOztFQUV2Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ZyYWdtZW50L21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53cmFwcGVyIHtcclxuXHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLm5hdi1sb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4ubmF2LWxvZ28taW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbTpob3ZlciB7XHJcbiAgZmlsdGVyOiBvcGFjaXR5KDUwJSk7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/fragment/menu/menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/component/fragment/menu/menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class='nav'>\n  <a class='nav-logo' (click)='onClickLogo()'>\n    <img class='nav-logo-img' alt='logo' src='./assets/logo.png'/>\n  </a>\n  <a\n    (click)='onClickAccueil()'\n    class='nav-item'>Accueil</a>\n  <a\n    (click)='onClickMultiScreen()'\n    class='nav-item'>Multi-Ecran</a>\n  <a\n    (click)='onCLickWebWorker()'\n    class='nav-item'>Web Worker</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/fragment/menu/menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/fragment/menu/menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.onClickLogo = function () {
        this.router.navigate(['']);
    };
    MenuComponent.prototype.onClickAccueil = function () {
        this.router.navigate(['']);
    };
    MenuComponent.prototype.onClickMultiScreen = function () {
        this.router.navigate(['/multi-ecran']);
    };
    MenuComponent.prototype.onCLickWebWorker = function () {
        this.router.navigate(['/web-worker']);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/component/fragment/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/component/fragment/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/component/fragment/msg-panel/msg-panel.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/fragment/msg-panel/msg-panel.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper {\r\n\r\n  background-color: lightcoral;\r\n\r\n  border-top: solid 1px red;\r\n  border-bottom: solid 1px red;\r\n\r\n  padding: 15px 10px;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ZyYWdtZW50L21zZy1wYW5lbC9tc2ctcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUUsNkJBQTZCOztFQUU3QiwwQkFBMEI7RUFDMUIsNkJBQTZCOztFQUU3QixtQkFBbUI7OztDQUdwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mcmFnbWVudC9tc2ctcGFuZWwvbXNnLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndyYXBwZXIge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG5cclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmVkO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZWQ7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/fragment/msg-panel/msg-panel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/fragment/msg-panel/msg-panel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class='wrapper'>\n  <ng-content></ng-content>\n</p>\n"

/***/ }),

/***/ "./src/app/component/fragment/msg-panel/msg-panel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/fragment/msg-panel/msg-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: MsgPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgPanelComponent", function() { return MsgPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsgPanelComponent = /** @class */ (function () {
    function MsgPanelComponent() {
    }
    MsgPanelComponent.prototype.ngOnInit = function () {
    };
    MsgPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-msg-panel',
            template: __webpack_require__(/*! ./msg-panel.component.html */ "./src/app/component/fragment/msg-panel/msg-panel.component.html"),
            styles: [__webpack_require__(/*! ./msg-panel.component.css */ "./src/app/component/fragment/msg-panel/msg-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MsgPanelComponent);
    return MsgPanelComponent;
}());



/***/ }),

/***/ "./src/app/component/page/accueil/accueil.component.css":
/*!**************************************************************!*\
  !*** ./src/app/component/page/accueil/accueil.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlL2FjY3VlaWwvYWNjdWVpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/page/accueil/accueil.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/page/accueil/accueil.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  accueil works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/page/accueil/accueil.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/page/accueil/accueil.component.ts ***!
  \*************************************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccueilComponent = /** @class */ (function () {
    function AccueilComponent() {
    }
    AccueilComponent.prototype.ngOnInit = function () {
    };
    AccueilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil.component.html */ "./src/app/component/page/accueil/accueil.component.html"),
            styles: [__webpack_require__(/*! ./accueil.component.css */ "./src/app/component/page/accueil/accueil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ }),

/***/ "./src/app/component/page/app/app.component.css":
/*!******************************************************!*\
  !*** ./src/app/component/page/app/app.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content {\r\n  padding: 10px 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3BhZ2UvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/page/app/app.component.html":
/*!*******************************************************!*\
  !*** ./src/app/component/page/app/app.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class='content'>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/page/app/app.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/page/app/app.component.ts ***!
  \*****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'binau-github-io';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/component/page/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/component/page/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/component/page/multi-screen/multi-screen.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/page/multi-screen/multi-screen.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlL211bHRpLXNjcmVlbi9tdWx0aS1zY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/page/multi-screen/multi-screen.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/page/multi-screen/multi-screen.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  multi-screen works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/page/multi-screen/multi-screen.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/page/multi-screen/multi-screen.component.ts ***!
  \***********************************************************************/
/*! exports provided: MultiScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiScreenComponent", function() { return MultiScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiScreenComponent = /** @class */ (function () {
    function MultiScreenComponent() {
    }
    MultiScreenComponent.prototype.ngOnInit = function () {
    };
    MultiScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-screen',
            template: __webpack_require__(/*! ./multi-screen.component.html */ "./src/app/component/page/multi-screen/multi-screen.component.html"),
            styles: [__webpack_require__(/*! ./multi-screen.component.css */ "./src/app/component/page/multi-screen/multi-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiScreenComponent);
    return MultiScreenComponent;
}());



/***/ }),

/***/ "./src/app/component/page/web-worker/web-worker.component.css":
/*!********************************************************************!*\
  !*** ./src/app/component/page/web-worker/web-worker.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.start-wrapper {\r\n\r\n}\r\n\r\n.start-btn {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.stop-btn {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.start-lbl {\r\n\r\n}\r\n\r\n.start-input {\r\n  padding: 10px;\r\n}\r\n\r\n.count-ww-wrapper {\r\n  display: inline-block;\r\n  margin: 20px 0 0 0;\r\n  border: 2px grey solid;\r\n}\r\n\r\n.count-ww-label {\r\n  padding: 20px;\r\n  background-color: rgb(22.35%, 52.94%, 87.45%);\r\n  border-bottom: 2px grey solid;\r\n}\r\n\r\n.count-ww {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 10px;\r\n  background-color: rgb(51.37%, 81.57%, 94.90%);\r\n}\r\n\r\n.count-nw-wrapper {\r\n  display: inline-block;\r\n  margin: 20px 0 0 20px;\r\n  border: 2px grey solid;\r\n}\r\n\r\n.count-nw-label {\r\n  padding: 20px;\r\n  background-color: rgb(22.35%, 52.94%, 87.45%);\r\n  border-bottom: 2px grey solid;\r\n}\r\n\r\n.count-nw {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 10px;\r\n  background-color: rgb(51.37%, 81.57%, 94.90%);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3BhZ2Uvd2ViLXdvcmtlci93ZWItd29ya2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztDQUVDOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUdEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsOENBQThDO0VBQzlDLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDhDQUE4QztDQUMvQzs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhDQUE4QztFQUM5Qyw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw4Q0FBOEM7Q0FDL0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcGFnZS93ZWItd29ya2VyL3dlYi13b3JrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3RhcnQtd3JhcHBlciB7XHJcblxyXG59XHJcblxyXG4uc3RhcnQtYnRuIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zdG9wLWJ0biB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG4uc3RhcnQtbGJsIHtcclxuXHJcbn1cclxuXHJcbi5zdGFydC1pbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi5jb3VudC13dy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gIGJvcmRlcjogMnB4IGdyZXkgc29saWQ7XHJcbn1cclxuXHJcbi5jb3VudC13dy1sYWJlbCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIuMzUlLCA1Mi45NCUsIDg3LjQ1JSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGdyZXkgc29saWQ7XHJcbn1cclxuXHJcbi5jb3VudC13dyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLjM3JSwgODEuNTclLCA5NC45MCUpO1xyXG59XHJcblxyXG4uY291bnQtbnctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMjBweCAwIDAgMjBweDtcclxuICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xyXG59XHJcblxyXG4uY291bnQtbnctbGFiZWwge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLjM1JSwgNTIuOTQlLCA4Ny40NSUpO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBncmV5IHNvbGlkO1xyXG59XHJcblxyXG4uY291bnQtbncge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MS4zNyUsIDgxLjU3JSwgOTQuOTAlKTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/page/web-worker/web-worker.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/component/page/web-worker/web-worker.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n\n  <!-- Message si les webworker ne sont pas accessibles -->\n  <div *ngIf='erreur' class='error-wrapper'>\n    <app-msg-panel>\n      {{erreur}}\n      <div><a class='link' href='https://www.google.com/chrome/' target='_blank'>\n        Chrome : https://www.google.com/chrome/\n      </a></div>\n      <div><a class='link' href='https://www.mozilla.org/fr/firefox/new/' target='_blank'>\n        Firefox : https://www.mozilla.org/fr/firefox/new/\n      </a></div>\n    </app-msg-panel>\n  </div>\n\n<div class='start-wrapper'>\n  <button  class='start-btn' *ngIf='!started'\n          (click)='start()' type='button'>\n    Start\n  </button>\n  <button class='stop-btn' *ngIf='started'\n          (click)='stop()' type='button'>\n    Stop\n  </button>\n\n  <label class='start-lbl' >\n    <input class='start-input'  type='number' [(ngModel)]='nbCount'/>\n  </label>\n</div>\n\n  <div class='count-ww-wrapper'>\n    <div class='count-ww-label'>Avec webworker</div>\n    <app-count-with-ww *ngFor='let loop of loopCount'\n                       class='count-ww'\n    ></app-count-with-ww>\n  </div>\n\n  <div class='count-nw-wrapper'>\n    <div class='count-nw-label'>Sans webworker</div>\n    <app-count-no-ww *ngFor='let loop of loopCount'\n                     class='count-nw'\n    ></app-count-no-ww>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/page/web-worker/web-worker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/page/web-worker/web-worker.component.ts ***!
  \*******************************************************************/
/*! exports provided: WebWorkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebWorkerComponent", function() { return WebWorkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tools_array_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../tools/array.utils */ "./src/app/tools/array.utils.ts");
/* harmony import */ var _service_web_worker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/web-worker.service */ "./src/app/service/web-worker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebWorkerComponent = /** @class */ (function () {
    function WebWorkerComponent(webWorkerService) {
        this.webWorkerService = webWorkerService;
        this.nbCount = 20;
        this.started = false;
    }
    Object.defineProperty(WebWorkerComponent.prototype, "loopCount", {
        get: function () {
            return _tools_array_utils__WEBPACK_IMPORTED_MODULE_1__["ArrayUtils"].arrayFor(this.nbCount);
        },
        enumerable: true,
        configurable: true
    });
    WebWorkerComponent.prototype.ngOnInit = function () {
        // Verification compatibilité
        if (!window.Worker) {
            return this.erreur = 'Votre version de navigateur est obsolete et ne peut pas utilier les web workers. Veuillez telecharger une version de navigateur à jour.';
        }
    };
    WebWorkerComponent.prototype.start = function () {
        this.started = true;
        this.webWorkerService.startEvent.emit();
    };
    WebWorkerComponent.prototype.stop = function () {
        this.webWorkerService.stopEvent.emit();
        this.started = false;
    };
    WebWorkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-worker',
            template: __webpack_require__(/*! ./web-worker.component.html */ "./src/app/component/page/web-worker/web-worker.component.html"),
            styles: [__webpack_require__(/*! ./web-worker.component.css */ "./src/app/component/page/web-worker/web-worker.component.css")]
        }),
        __metadata("design:paramtypes", [_service_web_worker_service__WEBPACK_IMPORTED_MODULE_2__["WebWorkerService"]])
    ], WebWorkerComponent);
    return WebWorkerComponent;
}());



/***/ }),

/***/ "./src/app/service/web-worker.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/web-worker.service.ts ***!
  \***********************************************/
/*! exports provided: WebWorkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebWorkerService", function() { return WebWorkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebWorkerService = /** @class */ (function () {
    function WebWorkerService() {
        this.startEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WebWorkerService.prototype.start = function () {
        this.startEvent.emit();
    };
    WebWorkerService.prototype.stop = function () {
        this.stopEvent.emit();
    };
    WebWorkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebWorkerService);
    return WebWorkerService;
}());



/***/ }),

/***/ "./src/app/tools/array.utils.ts":
/*!**************************************!*\
  !*** ./src/app/tools/array.utils.ts ***!
  \**************************************/
/*! exports provided: ArrayUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return ArrayUtils; });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.arrayFor = function (nb) {
        return new Array(nb);
    };
    return ArrayUtils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Aubin\Developpement\workspace\demos\binau.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map