(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["src_app_make-review_make-review_module_ts"],{

/***/ 3345:
/*!***********************************************************!*\
  !*** ./src/app/make-review/make-review-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeReviewPageRoutingModule": () => (/* binding */ MakeReviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _make_review_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-review.page */ 6155);




const routes = [
    {
        path: '',
        component: _make_review_page__WEBPACK_IMPORTED_MODULE_0__.MakeReviewPage
    }
];
let MakeReviewPageRoutingModule = class MakeReviewPageRoutingModule {
};
MakeReviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeReviewPageRoutingModule);



/***/ }),

/***/ 5115:
/*!***************************************************!*\
  !*** ./src/app/make-review/make-review.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeReviewPageModule": () => (/* binding */ MakeReviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic4-rating */ 1874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _make_review_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-review-routing.module */ 3345);
/* harmony import */ var _make_review_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make-review.page */ 6155);








let MakeReviewPageModule = class MakeReviewPageModule {
};
MakeReviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ionic4_rating__WEBPACK_IMPORTED_MODULE_0__.IonicRatingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _make_review_routing_module__WEBPACK_IMPORTED_MODULE_1__.MakeReviewPageRoutingModule
        ],
        declarations: [_make_review_page__WEBPACK_IMPORTED_MODULE_2__.MakeReviewPage]
    })
], MakeReviewPageModule);



/***/ }),

/***/ 6155:
/*!*************************************************!*\
  !*** ./src/app/make-review/make-review.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeReviewPage": () => (/* binding */ MakeReviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_make_review_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./make-review.page.html */ 2017);
/* harmony import */ var _make_review_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-review.page.scss */ 8892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/global */ 3913);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth-service.service */ 410);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);









let MakeReviewPage = class MakeReviewPage {
    constructor(router, db, authService, global, location) {
        this.router = router;
        this.db = db;
        this.authService = authService;
        this.global = global;
        this.location = location;
        this.data = {};
    }
    ngOnInit() {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.authService.userId().subscribe(res => {
            this.uid = res.uid;
            this.db.object(`users/${res.uid}`).valueChanges().subscribe(res => {
                this.global.userProfile = res;
                this.name = res['fname'] + ' ' + res['lname'];
            });
            console.log(res.email, this.data);
        });
    }
    back() {
        this.location.back();
    }
    onModelChange(evt) {
        this.rating = evt;
        console.log(this.rating);
    }
    onSubmit() {
        if (!this.rating || !this.sub || !this.comment) {
            this.global.CreateToast(`Please type something first!`);
        }
        else {
            this.global.presentLoading(`Please wait!`);
            this.db.database.ref(`reviews`).child(this.data.id).child(this.uid).update({
                cId: this.data.id,
                rating: this.rating,
                subject: this.sub,
                comment: this.comment,
                name: this.name
            }).then(() => {
                this.global.hideLoading();
                this.global.CreateToast(`Rated successfully!`);
                this.location.back();
                this.db.database.ref(`recentReviews`).child(this.data.id).update(this.data);
                this.db.database.ref(`myReviews`).child(this.uid).child(this.data.id).update({
                    cName: this.data.name,
                    cId: this.data.id,
                    rating: this.rating,
                    subject: this.sub,
                    comment: this.comment,
                    name: this.name
                });
                this.sub = '';
                this.comment = '';
            }).catch(err => {
                console.log(err);
                this.global.timeoutHide(1000);
            });
        }
    }
};
MakeReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__.AngularFireDatabase },
    { type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService },
    { type: _services_global__WEBPACK_IMPORTED_MODULE_2__.GlobalMethods },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
MakeReviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-make-review',
        template: _raw_loader_make_review_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_make_review_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MakeReviewPage);



/***/ }),

/***/ 8892:
/*!***************************************************!*\
  !*** ./src/app/make-review/make-review.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header, ion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-back-button, ion-toolbar ion-back-button {\n  left: 0;\n  top: 2px;\n  position: absolute;\n  color: white;\n}\nion-header ion-title, ion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content .title {\n  position: absolute;\n  margin: 10%;\n  font-weight: bolder;\n}\nion-content ion-avatar {\n  height: auto;\n  width: 100%;\n  text-align: center;\n}\nion-content ion-avatar img {\n  height: 120px;\n  width: 120px;\n  margin-top: 20%;\n}\nion-content .company-info {\n  margin-top: 5%;\n}\nion-content .company-info ion-col {\n  border-bottom: 1px solid #1319c1;\n  margin-left: 5%;\n  text-align: center !important;\n}\nion-content .inputs {\n  margin-top: 5%;\n}\nion-content .inputs ion-input {\n  border: 1px solid grey;\n  height: 45px;\n  border-radius: 10px;\n  width: 80%;\n  margin-left: 10%;\n  padding: 0px 0px 0px 5px;\n}\nion-content ion-textarea {\n  margin-top: 5%;\n  border: 1px solid grey;\n  width: 80%;\n  margin-left: 10%;\n  border-radius: 10px;\n  padding: 5px;\n}\nion-content .bottom-button {\n  width: 80%;\n  height: 40px;\n  background-color: #1319c1;\n  color: white;\n  margin-left: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2UtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVUO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFBUTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBRVo7QUFDSTtFQUNHLGNBQUE7QUFDUDtBQUFRO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUVaO0FBRUk7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQVIiLCJmaWxlIjoibWFrZS1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcixpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46IDEwJTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLWF2YXRhcntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktaW5mb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5wdXRze1xyXG4gICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgfVxyXG4gICAgaW9uLXRleHRhcmVhe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 2017:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/make-review/make-review.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"back-btn\" slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Make a review</ion-title>\n  </ion-toolbar>\n  </ion-header>\n<ion-content>\n<ion-label class=\"title\">Make a review for:</ion-label>\n<ion-avatar>\n  <img [src]=\"data.img\" />\n</ion-avatar>\n<ion-row class=\"company-info\">\n  <ion-col size=\"5\">\n    <ion-label>{{data.name}}</ion-label>\n  </ion-col>\n  <ion-col size=\"5\">\n    <ion-label>{{data.type}}</ion-label>\n  </ion-col>\n</ion-row>\n<ion-row class=\"company-info\">\n  <ion-col size=\"5\">\n    <ion-label>{{data.web}}</ion-label>\n  </ion-col>\n  <ion-col size=\"5\">\n    <ion-label>{{data.phone}}</ion-label>\n  </ion-col>\n</ion-row>\n<rating\nsize=\"default\"\n(ngModelChange)=\"onModelChange($event)\" [(ngModel)]=\"rating\">\n</rating>\n<div class=\"inputs\">\n  <ion-input type=\"text\" placeholder=\"subject\"[(ngModel)]=\"sub\"></ion-input>\n</div>\n<ion-textarea [(ngModel)]=\"comment\" placeholder=\"comments\" cols=\"30\" rows=\"10\"></ion-textarea>\n<ion-button (click)=\"onSubmit()\" fill=\"clear\" shape=\"round\" class=\"bottom-button\">\n  submit\n</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_make-review_make-review_module_ts.js.map