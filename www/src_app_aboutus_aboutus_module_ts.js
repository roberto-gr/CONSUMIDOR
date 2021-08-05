(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["src_app_aboutus_aboutus_module_ts"],{

/***/ 805:
/*!***************************************************!*\
  !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPageRoutingModule": () => (/* binding */ AboutusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus.page */ 7552);




const routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_0__.AboutusPage
    }
];
let AboutusPageRoutingModule = class AboutusPageRoutingModule {
};
AboutusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutusPageRoutingModule);



/***/ }),

/***/ 6202:
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPageModule": () => (/* binding */ AboutusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus-routing.module */ 805);
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.page */ 7552);







let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutusPageRoutingModule
        ],
        declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_1__.AboutusPage]
    })
], AboutusPageModule);



/***/ }),

/***/ 7552:
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPage": () => (/* binding */ AboutusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_aboutus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aboutus.page.html */ 8110);
/* harmony import */ var _aboutus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.page.scss */ 2847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AboutusPage = class AboutusPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutusPage.ctorParameters = () => [];
AboutusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-aboutus',
        template: _raw_loader_aboutus_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aboutus_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutusPage);



/***/ }),

/***/ 2847:
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header, ion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-back-button, ion-toolbar ion-back-button {\n  left: 0;\n  top: 2px;\n  position: absolute;\n  color: white;\n}\nion-header ion-title, ion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content .info {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 15%;\n}\n.vertical-center {\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjtBQUFJO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNSO0FBS0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKIiwiZmlsZSI6ImFib3V0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcixpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC5pbmZve1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICBwe1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 8110:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"back-btn\" slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About us</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"info\">\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipiscing, elit ornare metus\n      montes fermentum, curae aptent rutrum potenti diam. Vehicula rhoncus\n      dictumst aliquet risus eget magna lacus parturient venenatis, malesuada\n      dui sodales porttitor facilisis cursus conubia nunc, cum nullam rutrum\n      molestie aliquam nam urna tellus. Nullam platea eget litora cum ac ornare\n      metus ante, potenti aptent facilisis taciti volutpat justo mus, varius est\n      fames placerat suspendisse euismod sollicitudin.<br /><br />\n      Hendrerit cras augue euismod vulputate magna justo.\n    </p>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_aboutus_aboutus_module_ts.js.map