(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageb-pageb-module"],{

/***/ "./src/app/pageb/pageb-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pageb/pageb-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagebRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagebRoutingModule", function() { return PagebRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pageb1_pageb1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageb1/pageb1.component */ "./src/app/pageb/pageb1/pageb1.component.ts");
/* harmony import */ var _pageb2_pageb2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageb2/pageb2.component */ "./src/app/pageb/pageb2/pageb2.component.ts");
/* harmony import */ var _pageb_pageb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageb/pageb.component */ "./src/app/pageb/pageb/pageb.component.ts");







const routes = [
    {
        path: '',
        component: _pageb_pageb_component__WEBPACK_IMPORTED_MODULE_4__["PagebComponent"],
        children: [
            {
                path: 'pageb1',
                component: _pageb1_pageb1_component__WEBPACK_IMPORTED_MODULE_2__["Pageb1Component"]
            },
            {
                path: 'pageb2',
                component: _pageb2_pageb2_component__WEBPACK_IMPORTED_MODULE_3__["Pageb2Component"]
            },
        ]
    }
];
class PagebRoutingModule {
}
PagebRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagebRoutingModule });
PagebRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagebRoutingModule_Factory(t) { return new (t || PagebRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagebRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagebRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pageb/pageb.module.ts":
/*!***************************************!*\
  !*** ./src/app/pageb/pageb.module.ts ***!
  \***************************************/
/*! exports provided: PagebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagebModule", function() { return PagebModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pageb1_pageb1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageb1/pageb1.component */ "./src/app/pageb/pageb1/pageb1.component.ts");
/* harmony import */ var _pageb2_pageb2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageb2/pageb2.component */ "./src/app/pageb/pageb2/pageb2.component.ts");
/* harmony import */ var _pageb_pageb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageb/pageb.component */ "./src/app/pageb/pageb/pageb.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pageb_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageb-routing.module */ "./src/app/pageb/pageb-routing.module.ts");








class PagebModule {
}
PagebModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagebModule });
PagebModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagebModule_Factory(t) { return new (t || PagebModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _pageb_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagebRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagebModule, { declarations: [_pageb1_pageb1_component__WEBPACK_IMPORTED_MODULE_2__["Pageb1Component"], _pageb2_pageb2_component__WEBPACK_IMPORTED_MODULE_3__["Pageb2Component"], _pageb_pageb_component__WEBPACK_IMPORTED_MODULE_4__["PagebComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _pageb_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagebRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagebModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pageb1_pageb1_component__WEBPACK_IMPORTED_MODULE_2__["Pageb1Component"], _pageb2_pageb2_component__WEBPACK_IMPORTED_MODULE_3__["Pageb2Component"], _pageb_pageb_component__WEBPACK_IMPORTED_MODULE_4__["PagebComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _pageb_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagebRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pageb/pageb/pageb.component.ts":
/*!************************************************!*\
  !*** ./src/app/pageb/pageb/pageb.component.ts ***!
  \************************************************/
/*! exports provided: PagebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagebComponent", function() { return PagebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagebComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagebComponent.ɵfac = function PagebComponent_Factory(t) { return new (t || PagebComponent)(); };
PagebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagebComponent, selectors: [["app-pageb"]], decls: 12, vars: 2, consts: [["href", "", 3, "routerLink"], ["aria-atomic", "true", "aria-live", "assertive"]], template: function PagebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pageb B\u00C9LA works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page B 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page B 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pageb/pageb1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pageb/pageb2");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2ViL3BhZ2ViL3BhZ2ViLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pageb',
                templateUrl: './pageb.component.html',
                styleUrls: ['./pageb.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pageb/pageb1/pageb1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pageb/pageb1/pageb1.component.ts ***!
  \**************************************************/
/*! exports provided: Pageb1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pageb1Component", function() { return Pageb1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Pageb1Component {
    constructor() { }
    ngOnInit() {
    }
}
Pageb1Component.ɵfac = function Pageb1Component_Factory(t) { return new (t || Pageb1Component)(); };
Pageb1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pageb1Component, selectors: [["app-pageb1"]], decls: 2, vars: 0, template: function Pageb1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page 2 alma works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2ViL3BhZ2ViMS9wYWdlYjEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pageb1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pageb1',
                templateUrl: './pageb1.component.html',
                styleUrls: ['./pageb1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pageb/pageb2/pageb2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pageb/pageb2/pageb2.component.ts ***!
  \**************************************************/
/*! exports provided: Pageb2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pageb2Component", function() { return Pageb2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Pageb2Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Pageb2Component.ɵfac = function Pageb2Component_Factory(t) { return new (t || Pageb2Component)(); };
Pageb2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pageb2Component, selectors: [["app-pageb2"]], decls: 8, vars: 0, template: function Pageb2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page 2 k\u00F6rte works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ez itt egy le\u00EDr\u00E1s love");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ez itt egy le\u00EDr\u00E1s peace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ez itt egy le\u00EDr\u00E1s happiness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2ViL3BhZ2ViMi9wYWdlYjIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pageb2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pageb2',
                templateUrl: './pageb2.component.html',
                styleUrls: ['./pageb2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pageb-pageb-module.js.map