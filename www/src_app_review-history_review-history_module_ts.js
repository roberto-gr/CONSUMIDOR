(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["src_app_review-history_review-history_module_ts"],{

/***/ 8119:
/*!*****************************************************************!*\
  !*** ./src/app/review-history/review-history-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewHistoryPageRoutingModule": () => (/* binding */ ReviewHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _review_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-history.page */ 1954);




const routes = [
    {
        path: '',
        component: _review_history_page__WEBPACK_IMPORTED_MODULE_0__.ReviewHistoryPage
    }
];
let ReviewHistoryPageRoutingModule = class ReviewHistoryPageRoutingModule {
};
ReviewHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewHistoryPageRoutingModule);



/***/ }),

/***/ 5691:
/*!*********************************************************!*\
  !*** ./src/app/review-history/review-history.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewHistoryPageModule": () => (/* binding */ ReviewHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic4-rating */ 1874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _review_history_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-history-routing.module */ 8119);
/* harmony import */ var _review_history_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-history.page */ 1954);








let ReviewHistoryPageModule = class ReviewHistoryPageModule {
};
ReviewHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ionic4_rating__WEBPACK_IMPORTED_MODULE_0__.IonicRatingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _review_history_routing_module__WEBPACK_IMPORTED_MODULE_1__.ReviewHistoryPageRoutingModule
        ],
        declarations: [_review_history_page__WEBPACK_IMPORTED_MODULE_2__.ReviewHistoryPage]
    })
], ReviewHistoryPageModule);



/***/ }),

/***/ 1954:
/*!*******************************************************!*\
  !*** ./src/app/review-history/review-history.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewHistoryPage": () => (/* binding */ ReviewHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_review_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./review-history.page.html */ 4795);
/* harmony import */ var _review_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-history.page.scss */ 3092);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 5854);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 4276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/global */ 3913);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/auth-service.service */ 410);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);










let ReviewHistoryPage = class ReviewHistoryPage {
    constructor(db, auth, global, location, socialSharing, screenshot) {
        this.db = db;
        this.auth = auth;
        this.global = global;
        this.location = location;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.edit = false;
        this.state = false;
        this.reviews = [];
    }
    ngOnInit() {
        this.auth.userId().subscribe(user => {
            this._uid = user.uid;
            this.db.list(`myReviews/${user.uid}`).valueChanges().subscribe(res => {
                this.reviews = res;
                console.log(JSON.stringify(res));
            });
        });
    }
    editReview(index) {
        this.edit = true;
        this.itemIndex = index;
    }
    submit(index, data) {
        if (this.sub === '' || this.comment === '') {
            this.global.CreateToast(`Please type somthing first!`);
        }
        else {
            this.onSubmit(index, data);
        }
    }
    onSubmit(index, data) {
        this.global.presentLoading(`Please wait!`);
        this.db.database.ref(`reviews`).child(data.cId).child(this._uid).update({
            cName: data.cName,
            cId: data.cId,
            rating: this.rating,
            subject: this.sub,
            comment: this.comment,
            name: data.name
        }).then(() => {
            this.global.hideLoading();
            this.global.CreateToast(`Rated successfully!`);
            this.db.database.ref(`myReviews`).child(this._uid).child(data.cId).update({
                cName: data.cName,
                cId: data.cId,
                rating: this.rating,
                subject: this.sub,
                comment: this.comment,
                name: data.name
            });
            this.edit = false;
            this.itemIndex = index;
            this.sub = '';
            this.comment = '';
        }).catch(err => {
            console.log(err);
            this.global.timeoutHide(1000);
        });
    }
    onModelChange(evt) {
    }
    back() {
        this.location.back();
    }
    cancel(index) {
        this.edit = false;
        this.itemIndex = index;
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
                // this.global.CreateToast('Screenshot shared');
            }).catch(error => {
                this.global.CreateToast(error);
            });
            this.reset();
        }).catch(error => {
            this.global.CreateToast(error);
        });
    }
};
ReviewHistoryPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase },
    { type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceService },
    { type: _services_global__WEBPACK_IMPORTED_MODULE_4__.GlobalMethods },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_2__.Screenshot }
];
ReviewHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-review-history',
        template: _raw_loader_review_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_review_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReviewHistoryPage);



/***/ }),

/***/ 3092:
/*!*********************************************************!*\
  !*** ./src/app/review-history/review-history.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header, ion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-back-button, ion-toolbar ion-back-button {\n  left: 0;\n  top: 2px;\n  position: absolute;\n  color: white;\n}\nion-header ion-title, ion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content ion-list {\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n  max-height: 100%;\n}\nion-content ion-list .reviews {\n  border: 1px solid grey;\n  width: 80%;\n  margin-left: 10%;\n  height: auto;\n  padding: 10px;\n  margin-top: 3%;\n  border-radius: 20px;\n  margin-bottom: 5%;\n}\nion-content ion-list .reviews ion-row ion-col ion-avatar {\n  height: 20px;\n  width: 20px;\n}\nion-content ion-list .reviews ion-row ion-col ion-label {\n  color: var(--ion-color-dark);\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: hidden;\n}\nion-content ion-list .reviews ion-row ion-col ion-icon {\n  float: right;\n  padding: 5px;\n  height: 20px;\n  width: 20px;\n}\nion-content ion-list .reviews .title {\n  margin-left: 5%;\n  font-size: 18px;\n  font-weight: bolder;\n}\nion-content ion-list .reviews ion-label {\n  margin-left: 5%;\n}\nion-content ion-list #edit-btn {\n  height: 40px;\n  background-color: #1319c1;\n  color: white;\n  border-radius: 10px;\n  width: 80%;\n  margin-left: 10%;\n  animation: both comesUp 0.5s;\n}\nion-content ion-list ion-button {\n  height: 40px;\n  color: white;\n  --border-radius: 10px;\n  width: 80%;\n  margin-left: 10%;\n  animation: both comesUp 0.5s;\n}\nion-input {\n  border: 1px solid grey;\n  height: 45px;\n  border-radius: 10px;\n  width: 90%;\n  margin-left: 5%;\n  padding: 0px 0px 0px 5px;\n}\nion-textarea {\n  border: 1px solid grey;\n  width: 90%;\n  margin-left: 5%;\n  border-radius: 10px;\n  padding: 5px;\n}\n@keyframes comesUp {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFBb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUV4QjtBQUFvQjtFQUVJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ3hCO0FBQ29CO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUN4QjtBQUlZO0VBRUksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhoQjtBQUtZO0VBQ0ksZUFBQTtBQUhoQjtBQU1RO0VBRVEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0YsNEJBQUE7QUFMZDtBQVFRO0VBQ0ksWUFBQTtFQUVBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNGLDRCQUFBO0FBUFY7QUFhQztFQUNHLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQVZKO0FBYUE7RUFFSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBWEo7QUFhQTtFQUNJO0lBQ0UsVUFBQTtFQVZKO0VBWUU7SUFDRSxVQUFBO0VBVko7QUFDRiIsImZpbGUiOiJyZXZpZXctaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE5LCAyNSwgMTkzKTtcbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1pb24tY29udGVudHtcbiAgICBpb24tbGlzdHtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAucmV2aWV3cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWF2YXRhcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNlZGl0LWJ0bntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDI1LCAxOTMpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBib3RoIGNvbWVzVXAgMC41cztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAyNSwgMTkzKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgIGFuaW1hdGlvbjogYm90aCBjb21lc1VwIDAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gI3N1YntcbiAgICAgICAgLy8gICBhbmltYXRpb246IGJvdGggY29tZXNVcCAwLjVzO1xuICAgICAgICAvLyB9XG4gICAgfVxufWlvbi1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcblxufVxuaW9uLXRleHRhcmVhe1xuICAgIC8vIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5Aa2V5ZnJhbWVzIGNvbWVzVXAge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ 4795:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-history/review-history.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"back-btn\" slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Reviews History</ion-title>\n  </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n<ion-list>\n  <div *ngFor=\"let item of reviews; let i = index;\">\n    <div class=\"reviews\">\n      <ion-row>\n        <ion-col class=\"vertical-center\" size=\"11\">\n          <ion-avatar>\n            <img src=\"../../assets/images/placeholder.png\" />\n          </ion-avatar>\n          <ion-label>{{item.name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <!-- <img src=\"../../assets/share.svg\"> -->\n          <ion-icon (click)=\"screenShotURI()\" name=\"share-social\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <rating [hidden] = \"i === itemIndex && edit === true\" id=\"contact-rating\"\n        size=\"default\"\n        [readonly] = \"true\"\n        [rate] = \"item.rating\"\n        (ngModelChange)=\"onModelChange($event)\"\n      >\n      </rating>\n      <rating *ngIf=\"edit && i === itemIndex\" id=\"contact-rating\"\n        size=\"default\"\n        [(ngModel)]=\"rating\"\n        (ngModelChange)=\"onModelChange($event)\"\n      >\n      </rating>\n      <ion-input *ngIf=\"edit && i === itemIndex\"  type=\"text\" placeholder = \"Subject\" [(ngModel)]=\"sub\"></ion-input>\n      <ion-label [hidden] = \"i === itemIndex && edit === true\"  class=\"title\">{{item.subject}}</ion-label><br [hidden] = \"i === itemIndex && edit === true\"><br [hidden] = \"i === itemIndex && edit === true\">\n      <ion-textarea *ngIf=\"edit && i === itemIndex\" type=\"text\" placeholder = \"Comment\" [(ngModel)]=\"comment\"></ion-textarea>\n      <ion-label [hidden] = \"i === itemIndex && edit === true\">{{item.comment}}</ion-label>\n    </div>\n    <ion-button id=\"edit-btn\" fill = \"clear\" [hidden] = \"i === itemIndex && edit === true\" (click)=\"editReview(i)\">\n      Edit Review\n    </ion-button>\n    \n    <ion-button id=\"sub\"color=\"success\"  *ngIf=\"edit && i === itemIndex\"  (click)=\"submit(i,item)\">\n      Submit\n    </ion-button>\n\n    <ion-button  color=\"danger\" *ngIf=\"edit && i === itemIndex\" (click)=\"cancel(i)\">\n      Cancel\n    </ion-button>\n  </div>\n</ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_review-history_review-history_module_ts.js.map