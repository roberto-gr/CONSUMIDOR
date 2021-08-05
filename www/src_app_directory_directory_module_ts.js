(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["src_app_directory_directory_module_ts"],{

/***/ 1385:
/*!*******************************************************!*\
  !*** ./src/app/directory/directory-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryPageRoutingModule": () => (/* binding */ DirectoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _directory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory.page */ 6771);




const routes = [
    {
        path: '',
        component: _directory_page__WEBPACK_IMPORTED_MODULE_0__.DirectoryPage
    }
];
let DirectoryPageRoutingModule = class DirectoryPageRoutingModule {
};
DirectoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DirectoryPageRoutingModule);



/***/ }),

/***/ 4527:
/*!***********************************************!*\
  !*** ./src/app/directory/directory.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryPageModule": () => (/* binding */ DirectoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _directory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-routing.module */ 1385);
/* harmony import */ var _directory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory.page */ 6771);







let DirectoryPageModule = class DirectoryPageModule {
};
DirectoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _directory_routing_module__WEBPACK_IMPORTED_MODULE_0__.DirectoryPageRoutingModule
        ],
        declarations: [_directory_page__WEBPACK_IMPORTED_MODULE_1__.DirectoryPage]
    })
], DirectoryPageModule);



/***/ }),

/***/ 6771:
/*!*********************************************!*\
  !*** ./src/app/directory/directory.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryPage": () => (/* binding */ DirectoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_directory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./directory.page.html */ 309);
/* harmony import */ var _directory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory.page.scss */ 7993);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/global */ 3913);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);








let DirectoryPage = class DirectoryPage {
    constructor(db, router, global) {
        this.db = db;
        this.router = router;
        this.global = global;
        this.items = [];
        this.limit = 20;
        this.itemList = [];
        this.loadeditemList = [];
        this.backUpList = [];
        this.itemRef = this.db.database.ref('/companies');
    }
    ngOnInit() {
        this.itemRef.limitToFirst(this.limit).once('value', itemList => {
            let items = [];
            itemList.forEach(item => {
                items.push(item.val());
                return false;
            });
            this.itemList = items;
            this.loadeditemList = items;
            // console.log(JSON.stringify(this.loadeditemList))
        });
        this.db.list(`companies`).valueChanges().subscribe(res => {
            // this.items = res
            this.backUpList = res;
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            this.limit += 20; // or however many more you want to load
            this.itemRef.limitToFirst(this.limit).once('value', itemList => {
                let items = [];
                itemList.forEach(item => {
                    items.push(item.val());
                    return false;
                });
                this.itemList = items;
                this.loadeditemList = items;
                console.log(JSON.stringify(this.loadeditemList));
            });
            // if (data.length == 1000) {
            //   event.target.disabled = true;
            // }
        }, 500);
    }
    searchFilterItem() {
        this.items = [];
        this.backUpList.filter(res => {
            if (res.name && this.searchText) {
                if (res.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
                    this.items.push(res);
                }
            }
        });
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    itemClick(data) {
        let navigationExtras = { state: { data: data, title: data.name, } };
        this.router.navigate(['/makeareview', { Animation: true }], navigationExtras);
    }
};
DirectoryPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_global__WEBPACK_IMPORTED_MODULE_2__.GlobalMethods }
];
DirectoryPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
DirectoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-directory',
        template: _raw_loader_directory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_directory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DirectoryPage);



/***/ }),

/***/ 7993:
/*!***********************************************!*\
  !*** ./src/app/directory/directory.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header, ion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-title, ion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content ion-searchbar {\n  width: 90%;\n  margin-left: 5%;\n}\nion-content ion-list ion-item {\n  margin: 0;\n}\nion-content ion-list ion-item p {\n  border-bottom: 1px solid lightgrey;\n  padding-bottom: 5px;\n  width: 100%;\n}\nion-content ion-list ion-item p span {\n  color: lightgrey;\n  font-size: 12px;\n  padding: 2px 0 2px 0;\n  text-overflow: hidden;\n  overflow: hidden;\n}\nion-content ion-list ion-item p #comp {\n  font-size: 14px;\n  color: var(--ion-color-dark) !important;\n}\n.vertical-center {\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUVJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDUjtBQUVPO0VBQ0ksU0FBQTtBQUFYO0FBS1k7RUFDRyxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUhmO0FBSWU7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFGbkI7QUFJZTtFQUNJLGVBQUE7RUFDQSx1Q0FBQTtBQUZuQjtBQVFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSiIsImZpbGUiOiJkaXJlY3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcixpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICBpb24tc2VhcmNoYmFye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG4gICBpb24tbGlzdHtcclxuICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICBpbWd7XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfXB7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwIDJweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAjY29tcHtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfVxyXG59XHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 309:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/directory/directory.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"back-btn\" slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Directory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar placeholder=\"Search\" inputmode=\"string\" type=\"string\" [(ngModel)]=\"searchText\" (ionChange)=\"searchFilterItem()\" [debounce]=\"250\"  mode=\"ios\"></ion-searchbar>\n\n  <div *ngIf=\"searchText\" >\n    <ion-list>\n      <ion-item lines = \"none\" *ngFor=\"let item of items\" (click)=\"itemClick(item)\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.img\" />\n        </ion-avatar>\n        <p >{{item.name}}<br>\n        <span id=\"comp\">{{item.type}}</span> <br>\n        <span>{{item.web}}</span>\n        </p>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"!searchText\" >\n    <ion-list>\n      <ion-item lines = \"none\" *ngFor=\"let item of loadeditemList\" (click)=\"itemClick(item)\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.img\" />\n        </ion-avatar>\n        <p >{{item.name}}<br>\n        <span id=\"comp\">{{item.type}}</span> <br>\n        <span>{{item.web}}</span>\n        </p>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_directory_directory_module_ts.js.map