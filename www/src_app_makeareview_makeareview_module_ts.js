(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["src_app_makeareview_makeareview_module_ts"],{

/***/ 9214:
/*!***********************************************************!*\
  !*** ./src/app/makeareview/makeareview-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeareviewPageRoutingModule": () => (/* binding */ MakeareviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _makeareview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeareview.page */ 2344);




const routes = [
    {
        path: '',
        component: _makeareview_page__WEBPACK_IMPORTED_MODULE_0__.MakeareviewPage
    }
];
let MakeareviewPageRoutingModule = class MakeareviewPageRoutingModule {
};
MakeareviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeareviewPageRoutingModule);



/***/ }),

/***/ 5550:
/*!***************************************************!*\
  !*** ./src/app/makeareview/makeareview.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeareviewPageModule": () => (/* binding */ MakeareviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic4-rating */ 1874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _makeareview_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeareview-routing.module */ 9214);
/* harmony import */ var _makeareview_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeareview.page */ 2344);








let MakeareviewPageModule = class MakeareviewPageModule {
};
MakeareviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ionic4_rating__WEBPACK_IMPORTED_MODULE_0__.IonicRatingModule,
            _makeareview_routing_module__WEBPACK_IMPORTED_MODULE_1__.MakeareviewPageRoutingModule
        ],
        declarations: [_makeareview_page__WEBPACK_IMPORTED_MODULE_2__.MakeareviewPage]
    })
], MakeareviewPageModule);



/***/ }),

/***/ 2344:
/*!*************************************************!*\
  !*** ./src/app/makeareview/makeareview.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeareviewPage": () => (/* binding */ MakeareviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_makeareview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./makeareview.page.html */ 556);
/* harmony import */ var _makeareview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeareview.page.scss */ 1915);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 4276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 5854);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-service.service */ 410);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global */ 3913);











let MakeareviewPage = class MakeareviewPage {
    constructor(router, db, authService, global, location, screenshot, socialSharing) {
        this.router = router;
        this.db = db;
        this.authService = authService;
        this.global = global;
        this.location = location;
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.data = {};
        this.reviews = [];
        this.state = false;
    }
    ngOnInit() {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.title = this.router.getCurrentNavigation().extras.state.title;
        // this.reviews = this.data.reviews
    }
    ionViewWillEnter() {
        this.db.list(`reviews/${this.data.id}`).valueChanges().subscribe(res => {
            console.log(JSON.stringify(res));
            this.reviews = res;
        });
    }
    back() {
        this.location.back();
    }
    makeReview() {
        let navigationExtras = { state: { data: this.data } };
        this.router.navigate(['/make-review', { Animation: true }], navigationExtras);
    }
    onModelChange(evt) {
    }
    reset() {
        var self = this;
        setTimeout(function () {
            self.state = false;
        }, 5000);
    }
    screenShotURI() {
        this.screenshot.URI(80).then(res => {
            this.state = true;
            this.socialSharing.share(null, null, res.URI, null).then(() => {
                this.global.CreateToast('Screenshot shared');
            }).catch(error => {
                this.global.CreateToast(error);
            });
            this.reset();
        }).catch(error => {
            this.global.CreateToast(error);
        });
    }
};
MakeareviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__.AngularFireDatabase },
    { type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _services_global__WEBPACK_IMPORTED_MODULE_5__.GlobalMethods },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__.Screenshot },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing }
];
MakeareviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-makeareview',
        template: _raw_loader_makeareview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_makeareview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MakeareviewPage);



/***/ }),

/***/ 1915:
/*!***************************************************!*\
  !*** ./src/app/makeareview/makeareview.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header,\nion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-back-button,\nion-toolbar ion-back-button {\n  left: 0;\n  top: 2px;\n  position: absolute;\n  color: white;\n}\nion-header ion-title,\nion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content .logo {\n  height: auto;\n  width: 100%;\n  text-align: center;\n  margin-top: 5%;\n}\nion-content .logo img {\n  height: 120px;\n  width: 120px;\n}\nion-content .company-info {\n  margin-top: 5%;\n}\nion-content .company-info ion-col {\n  border-bottom: 1px solid #1319c1;\n  margin-left: 5%;\n  text-align: center;\n}\nion-content .bottom-button {\n  width: 80%;\n  height: 40px;\n  background-color: #1319c1;\n  color: white;\n  margin-left: 10%;\n  margin-top: 15%;\n  border-radius: 10px;\n}\nion-content ion-title {\n  text-align: center;\n  color: #1319c1;\n  margin-top: 2%;\n}\nion-content .reviews {\n  border: 1px solid grey;\n  width: 80%;\n  margin-left: 10%;\n  height: auto;\n  padding: 10px;\n  margin-top: 3%;\n  border-radius: 20px;\n  margin-bottom: 5%;\n}\nion-content .reviews ion-row ion-col ion-avatar {\n  height: 20px;\n  width: 20px;\n}\nion-content .reviews ion-row ion-col ion-label {\n  color: var(--ion-color-dark);\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: hidden;\n}\nion-content .reviews ion-row ion-col ion-icon {\n  float: right;\n  padding: 5px;\n  height: 20px;\n  width: 20px;\n}\nion-content .reviews .title {\n  margin-left: 5%;\n  font-size: 18px;\n  font-weight: bolder;\n}\nion-content .reviews ion-label {\n  margin-left: 5%;\n}\n.vertical-center {\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VhcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSw4QkFBQTtBQUNKO0FBQUk7O0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFHUjtBQURJOztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUlSO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRlE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUlaO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFGUTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSVo7QUFESTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUdSO0FBREk7RUFDSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQUFnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRXBCO0FBQWdCO0VBRUksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ3BCO0FBR1E7RUFFSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRlo7QUFJUTtFQUNJLGVBQUE7QUFGWjtBQU1BO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISiIsImZpbGUiOiJtYWtlYXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLFxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxOSwgMjUsIDE5Myk7XHJcbiAgICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTksIDI1LCAxOTMpO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm90dG9tLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTksIDI1LCAxOTMpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgfVxyXG4gICAgLnJldmlld3Mge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgLy8gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 556:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/makeareview/makeareview.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"back-btn\" slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{data.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"logo\">\n    <img [src]=\"data.img\" />\n  </div>\n  <ion-row class=\"company-info\">\n    <ion-col size=\"5\">\n      <ion-label>{{data.name}}</ion-label>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-label>{{data.type}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"company-info\">\n    <ion-col size=\"5\">\n      <ion-label>{{data.web}}</ion-label>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-label>{{data.phone}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-button\n    (click)=\"makeReview()\"\n    fill=\"clear\"\n    shape=\"round\"\n    class=\"bottom-button\"\n  >\n    Make Review\n  </ion-button>\n  <ion-title>Latest Reviews</ion-title>\n  <div class=\"reviews\" *ngFor=\"let item of reviews\" >\n    <ion-row>\n      <ion-col class=\"vertical-center\" size=\"11\">\n        <ion-avatar>\n          <img src=\"../../assets/images/placeholder.png\" />\n        </ion-avatar>\n        <ion-label>{{item.name}}</ion-label>\n      </ion-col>\n      <ion-col size=\"1\">\n        <!-- <img src=\"../../assets/share.svg\"> -->\n        <ion-icon (click)=\"screenShotURI()\"  name=\"share-social\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <rating id=\"contact-rating\"\n      size=\"default\"\n      [readonly] = \"true\"\n      [rate] = \"item.rating\"\n      (ngModelChange)=\"onModelChange($event)\"\n    >\n    </rating>\n    <ion-label class=\"title\">{{item.subject}}</ion-label><br><br>\n    <ion-label>{{item.comment}}</ion-label>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_makeareview_makeareview_module_ts.js.map