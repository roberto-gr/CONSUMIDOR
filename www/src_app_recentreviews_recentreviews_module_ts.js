(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["src_app_recentreviews_recentreviews_module_ts"],{

/***/ 133:
/*!***************************************************************!*\
  !*** ./src/app/recentreviews/recentreviews-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentreviewsPageRoutingModule": () => (/* binding */ RecentreviewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recentreviews_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recentreviews.page */ 1403);




const routes = [
    {
        path: '',
        component: _recentreviews_page__WEBPACK_IMPORTED_MODULE_0__.RecentreviewsPage
    }
];
let RecentreviewsPageRoutingModule = class RecentreviewsPageRoutingModule {
};
RecentreviewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecentreviewsPageRoutingModule);



/***/ }),

/***/ 2297:
/*!*******************************************************!*\
  !*** ./src/app/recentreviews/recentreviews.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentreviewsPageModule": () => (/* binding */ RecentreviewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recentreviews_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recentreviews-routing.module */ 133);
/* harmony import */ var _recentreviews_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recentreviews.page */ 1403);







let RecentreviewsPageModule = class RecentreviewsPageModule {
};
RecentreviewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recentreviews_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecentreviewsPageRoutingModule
        ],
        declarations: [_recentreviews_page__WEBPACK_IMPORTED_MODULE_1__.RecentreviewsPage]
    })
], RecentreviewsPageModule);



/***/ }),

/***/ 1403:
/*!*****************************************************!*\
  !*** ./src/app/recentreviews/recentreviews.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentreviewsPage": () => (/* binding */ RecentreviewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recentreviews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recentreviews.page.html */ 2000);
/* harmony import */ var _recentreviews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recentreviews.page.scss */ 3085);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let RecentreviewsPage = class RecentreviewsPage {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.companies = [];
        this.list = [];
        this.recentReviews = [];
        this.limit = 20;
        this.arr = [];
        this.items = [];
        this.itemRef = this.db.database.ref('/companies');
    }
    ngOnInit() {
        this.db.list(`recentReviews`).valueChanges().subscribe(res => {
            this.recentReviews = res;
        });
    }
    itemClick(data) {
        let navigationExtras = { state: { data: data, title: data.name, } };
        this.router.navigate(['/makeareview', { Animation: true }], navigationExtras);
    }
    filterItem(text) {
        this.companies.filter(res => {
            if (res.id && text) {
                if (res.id.toLowerCase().indexOf(text.toLowerCase()) > -1) {
                    this.arr.push(res);
                }
            }
        });
        this.recentReviews = this.arr;
        console.log(`recentReviews = ${JSON.stringify(this.recentReviews)}`);
    }
    searchFilterItem() {
        this.items = [];
        this.recentReviews.filter(res => {
            if (res.name && this.searchText) {
                if (res.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
                    this.items.push(res);
                }
            }
        });
    }
    findItem(data) {
        return this.companies.some(o => o.id === data);
    }
};
RecentreviewsPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__.AngularFireDatabase },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RecentreviewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-recentreviews',
        template: _raw_loader_recentreviews_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recentreviews_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecentreviewsPage);



/***/ }),

/***/ 3085:
/*!*******************************************************!*\
  !*** ./src/app/recentreviews/recentreviews.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header, ion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-title, ion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content ion-searchbar {\n  width: 90%;\n  margin-left: 5%;\n}\nion-content ion-list ion-item {\n  margin: 0;\n}\nion-content ion-list ion-item p {\n  border-bottom: 1px solid lightgrey;\n  padding-bottom: 5px;\n  width: 100%;\n}\nion-content ion-list ion-item p span {\n  color: lightgrey;\n  font-size: 12px;\n  padding: 2px 0 2px 0;\n  text-overflow: hidden;\n  overflow: hidden;\n}\nion-content ion-list ion-item p #comp {\n  font-size: 14px;\n  color: var(--ion-color-dark) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VudHJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ1I7QUFFTztFQUNJLFNBQUE7QUFBWDtBQUtZO0VBQ0csa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFIZjtBQUllO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRm5CO0FBSWU7RUFDQyxlQUFBO0VBQ0EsdUNBQUE7QUFGaEIiLCJmaWxlIjoicmVjZW50cmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTksIDI1LCAxOTMpO1xyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcbiAgIGlvbi1saXN0e1xyXG4gICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgIGltZ3tcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9cHtcclxuICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDAgMnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICNjb21we1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2000:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recentreviews/recentreviews.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"back-btn\" slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recent Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar placeholder=\"Search\" inputmode=\"string\" type=\"string\" [(ngModel)]=\"searchText\" (ionChange)=\"searchFilterItem()\" [debounce]=\"250\"  mode=\"ios\"></ion-searchbar>\n  <div *ngIf=\"searchText\" >\n    <ion-list>\n      <ion-item lines = \"none\" *ngFor=\"let item of items\" (click)=\"itemClick(item)\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.img\" />\n        </ion-avatar>\n        <p >{{item.name}}<br>\n        <span id=\"comp\">{{item.type}}</span> <br>\n        <span>{{item.web}}</span>\n        </p>\n      </ion-item>\n    </ion-list>\n  </div>\n<div *ngIf=\"!searchText\" >\n\n  <ion-list>\n    <ion-item lines = \"none\" *ngFor=\"let item of recentReviews\" (click)=\"itemClick(item)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.img\" />\n      </ion-avatar>\n      <p >{{item.name}}<br>\n      <span id=\"comp\">{{item.type}}</span> <br>\n      <span>{{item.web}}</span>\n      </p>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_recentreviews_recentreviews_module_ts.js.map