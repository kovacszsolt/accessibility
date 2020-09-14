(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagea-pagea-module"],{

/***/ "./src/app/pagea/pagea-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pagea/pagea-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PageaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageaRoutingModule", function() { return PageaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pagea1_pagea1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagea1/pagea1.component */ "./src/app/pagea/pagea1/pagea1.component.ts");
/* harmony import */ var _pagea2_pagea2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagea2/pagea2.component */ "./src/app/pagea/pagea2/pagea2.component.ts");
/* harmony import */ var _pagea_pagea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagea/pagea.component */ "./src/app/pagea/pagea/pagea.component.ts");







const routes = [
    {
        path: '',
        component: _pagea_pagea_component__WEBPACK_IMPORTED_MODULE_4__["PageaComponent"],
        children: [
            {
                path: 'pagea1',
                component: _pagea1_pagea1_component__WEBPACK_IMPORTED_MODULE_2__["Pagea1Component"]
            },
            {
                path: 'pagea2',
                component: _pagea2_pagea2_component__WEBPACK_IMPORTED_MODULE_3__["Pagea2Component"]
            },
        ]
    }
];
class PageaRoutingModule {
}
PageaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageaRoutingModule });
PageaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageaRoutingModule_Factory(t) { return new (t || PageaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pagea/pagea.module.ts":
/*!***************************************!*\
  !*** ./src/app/pagea/pagea.module.ts ***!
  \***************************************/
/*! exports provided: PageaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageaModule", function() { return PageaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pagea1_pagea1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagea1/pagea1.component */ "./src/app/pagea/pagea1/pagea1.component.ts");
/* harmony import */ var _pagea2_pagea2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagea2/pagea2.component */ "./src/app/pagea/pagea2/pagea2.component.ts");
/* harmony import */ var _pagea_pagea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagea/pagea.component */ "./src/app/pagea/pagea/pagea.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pagea_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagea-routing.module */ "./src/app/pagea/pagea-routing.module.ts");








class PageaModule {
}
PageaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageaModule });
PageaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageaModule_Factory(t) { return new (t || PageaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _pagea_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageaRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageaModule, { declarations: [_pagea1_pagea1_component__WEBPACK_IMPORTED_MODULE_2__["Pagea1Component"], _pagea2_pagea2_component__WEBPACK_IMPORTED_MODULE_3__["Pagea2Component"], _pagea_pagea_component__WEBPACK_IMPORTED_MODULE_4__["PageaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _pagea_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageaRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pagea1_pagea1_component__WEBPACK_IMPORTED_MODULE_2__["Pagea1Component"], _pagea2_pagea2_component__WEBPACK_IMPORTED_MODULE_3__["Pagea2Component"], _pagea_pagea_component__WEBPACK_IMPORTED_MODULE_4__["PageaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _pagea_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageaRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pagea/pagea/pagea.component.ts":
/*!************************************************!*\
  !*** ./src/app/pagea/pagea/pagea.component.ts ***!
  \************************************************/
/*! exports provided: PageaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageaComponent", function() { return PageaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageaComponent {
    constructor() { }
    ngOnInit() {
        console.log('aaaa');
    }
}
PageaComponent.ɵfac = function PageaComponent_Factory(t) { return new (t || PageaComponent)(); };
PageaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageaComponent, selectors: [["app-pagea"]], decls: 13, vars: 2, consts: [[1, "example-spacer"], ["href", "", 3, "routerLink"], ["aria-atomic", "true", "aria-live", "assertive"]], template: function PageaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pagea works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page A 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Page A 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pagea/pagea1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pagea/pagea2");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VhL3BhZ2VhL3BhZ2VhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagea',
                templateUrl: './pagea.component.html',
                styleUrls: ['./pagea.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pagea/pagea1/pagea1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pagea/pagea1/pagea1.component.ts ***!
  \**************************************************/
/*! exports provided: Pagea1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagea1Component", function() { return Pagea1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Pagea1Component {
    constructor() { }
    ngOnInit() {
    }
}
Pagea1Component.ɵfac = function Pagea1Component_Factory(t) { return new (t || Pagea1Component)(); };
Pagea1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pagea1Component, selectors: [["app-pagea1"]], decls: 2, vars: 0, template: function Pagea1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pagea1 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VhL3BhZ2VhMS9wYWdlYTEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pagea1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagea1',
                templateUrl: './pagea1.component.html',
                styleUrls: ['./pagea1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pagea/pagea2/pagea2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pagea/pagea2/pagea2.component.ts ***!
  \**************************************************/
/*! exports provided: Pagea2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagea2Component", function() { return Pagea2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Pagea2Component {
    constructor() { }
    ngOnInit() {
    }
}
Pagea2Component.ɵfac = function Pagea2Component_Factory(t) { return new (t || Pagea2Component)(); };
Pagea2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pagea2Component, selectors: [["app-pagea2"]], decls: 2, vars: 0, template: function Pagea2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pagea2 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VhL3BhZ2VhMi9wYWdlYTIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pagea2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagea2',
                templateUrl: './pagea2.component.html',
                styleUrls: ['./pagea2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pagea-pagea-module.js.map