(self["webpackChunkrev"] = self["webpackChunkrev"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(m => m.SignupPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgotpassword/forgotpassword.module */ 2488)).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'directory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_directory_directory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./directory/directory.module */ 4527)).then(m => m.DirectoryPageModule)
    },
    {
        path: 'aboutus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_aboutus_aboutus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aboutus/aboutus.module */ 6202)).then(m => m.AboutusPageModule)
    },
    {
        path: 'recentreviews',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_recentreviews_recentreviews_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recentreviews/recentreviews.module */ 2297)).then(m => m.RecentreviewsPageModule)
    },
    {
        path: 'makeareview',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_makeareview_makeareview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./makeareview/makeareview.module */ 5550)).then(m => m.MakeareviewPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 5486)).then(m => m.ContactPageModule)
    },
    {
        path: 'make-review',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_make-review_make-review_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./make-review/make-review.module */ 5115)).then(m => m.MakeReviewPageModule)
    },
    {
        path: 'review-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_review-history_review-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./review-history/review-history.module */ 5691)).then(m => m.ReviewHistoryPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/global */ 3913);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-service.service */ 410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);







let AppComponent = class AppComponent {
    constructor(plt, authService, global) {
        this.plt = plt;
        this.authService = authService;
        this.global = global;
        this.appPages = [
            { title: 'Directory', url: '/directory', icon: 'document' },
            { title: 'Recent reviews', url: '/recentreviews', icon: 'eye' },
            { title: 'Profile', url: '/profile', icon: 'person' },
            { title: 'Logout', url: null, icon: 'log-out' },
            { title: 'Contact', url: '/contact', icon: 'call' },
            { title: 'About us', url: '/aboutus', icon: 'information-circle' },
        ];
        this.dark = false;
        this.plt.ready().then(() => {
            if (localStorage.getItem('dark') === 'true') {
                this.dark = true;
            }
            else {
                localStorage.setItem('dark', 'false');
                this.dark = false;
            }
            this.authService.checkUser();
        });
    }
    onClick(key) {
        switch (key) {
            case 'Logout':
                this.authService.logoutUser();
                break;
            default:
                break;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService },
    { type: _services_global__WEBPACK_IMPORTED_MODULE_2__.GlobalMethods }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.page */ 2919);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/global */ 3913);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/database.service */ 4382);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-service.service */ 410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating */ 1874);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 4276);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 5854);












//Firebase Imports









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, ionic4_rating__WEBPACK_IMPORTED_MODULE_6__.IonicRatingModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabaseModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabaseModule,
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule,
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.AngularFireStorageModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.firebaseConfig)
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService,
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService,
            _services_global__WEBPACK_IMPORTED_MODULE_1__.GlobalMethods,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__.SocialSharing,
            _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_9__.Screenshot,
            _profile_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
            _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 231);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/global */ 3913);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth-service.service */ 410);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 5041);









let ProfilePage = class ProfilePage {
    constructor(db, authService, global, router, component) {
        this.db = db;
        this.authService = authService;
        this.global = global;
        this.router = router;
        this.component = component;
        this.dark = false;
        this.userData = {};
    }
    ngOnInit() {
        this.authService.userId().subscribe(user => {
            this.db.object(`users/${user.uid}`).valueChanges().subscribe(res => {
                this.userData = res;
            });
        });
    }
    reviewHistory() {
        this.router.navigate(['/review-history']);
    }
    darkMode() {
        if (this.dark) {
            this.dark = false;
            this.component.dark = false;
            localStorage.setItem('dark', 'false');
        }
        else {
            this.dark = true;
            this.component.dark = true;
            localStorage.setItem('dark', 'true');
        }
    }
    logout() {
        this.authService.logoutUser();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__.AngularFireDatabase },
    { type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService },
    { type: _services_global__WEBPACK_IMPORTED_MODULE_2__.GlobalMethods },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 410:
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceService": () => (/* binding */ AuthServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.service */ 4382);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9412);









let AuthServiceService = class AuthServiceService {
    constructor(afAuth, global, database, alertCtrl, nav, db) {
        this.afAuth = afAuth;
        this.global = global;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.db = db;
    }
    registerUser(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                resolve(res);
                value.uid = res.user.uid;
                this.database.updateUser(value);
                this.global.CreateToast(`Account has been created!`);
            }).catch((err) => {
                this.global.CreateToast(err.message);
                reject(err);
            });
        });
    }
    loginUser(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                resolve(res);
                this.global.CreateToast(`User logged in!`);
            }).catch((err) => {
                reject(err);
                this.global.CreateToast(err.message);
            });
        });
    }
    logoutUser() {
        return new Promise((resolve, reject) => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.global.presentLoading('Logging out')).subscribe(() => {
                if (this.afAuth.currentUser) {
                    this.afAuth.signOut()
                        .then(() => {
                        console.log("LOG Out");
                        this.nav.navigateRoot(['/login']);
                        resolve();
                    }).catch((error) => {
                        this.global.timeoutHide(1000);
                        reject(error);
                    });
                }
            }).add(() => { this.global.hideLoading(); });
        });
    }
    userId() {
        return this.afAuth.user;
    }
    getUser(user) {
        return this.db.object(`users/${user.uid}`).valueChanges();
    }
    forgot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                mode: 'ios',
                cssClass: 'my-custom-alert',
                message: '<img class="img" src="../../assets/images/sad.png" alt="alert" /><br />'
                    + '<ion-label class="label-large">Forget Password?</ion-label><br /><ion-label class="label-small">No Worries</ion-label>' +
                    '',
                inputs: [
                    {
                        cssClass: 'alert-input',
                        name: 'email',
                        type: 'email',
                        placeholder: 'Type your email here',
                    },
                ],
                buttons: [
                    {
                        cssClass: 'alert-button-send',
                        text: 'Send Recovery email',
                        handler: data => {
                            this.afAuth.sendPasswordResetEmail(data.email).then(() => {
                                this.global.CreateToast('Check your email!');
                            }).catch(err => {
                                console.log('Recovery email not sent: ' + err);
                                this.global.CreateToast(err.message);
                            });
                        }
                    }, {
                        text: 'Cancel',
                        role: 'Cancel',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                            console.log('Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    isLoggedIn() {
        return this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).toPromise();
    }
    checkUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.isLoggedIn();
            if (user) {
                // do something
                console.log(`User Already LoggedIn`);
                this.nav.navigateForward(['/directory']);
            }
            else {
                // do something else
                console.log(`User not LoggedIn`);
                this.nav.navigateRoot(['/login']);
            }
        });
    }
};
AuthServiceService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _global__WEBPACK_IMPORTED_MODULE_1__.GlobalMethods },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__.AngularFireDatabase }
];
AuthServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AuthServiceService);



/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 4134);





let DatabaseService = class DatabaseService {
    constructor(db, global, fbAuth) {
        this.db = db;
        this.global = global;
        this.fbAuth = fbAuth;
    }
    updateUser(value) {
        return new Promise((resolve, reject) => {
            this.db.database.ref(`users`).child(value.uid).update(value)
                .then(res => {
                resolve(res);
                console.log(`userUpdated`);
                // this.global.CreateToast(res['message'])
            }).catch((err) => {
                reject(err);
            });
        });
    }
    fetchList() {
        return this.db.list(`${localStorage.getItem('lang')}`).valueChanges();
    }
    fetchListGlobal(path) {
        return this.db.list(`${path}`).valueChanges();
    }
    addCategory(ref, path, params) {
        return new Promise((resolve, reject) => {
            this.db.database.ref(`${localStorage.getItem('lang')}/${ref}`).child(path).update(params)
                .then(res => {
                resolve(res);
                console.log(`dataIsUploaded`);
                // this.global.CreateToast(res['message'])
            }).catch((err) => {
                reject(err);
            });
        });
    }
    pushCategory(ref, path, params) {
        return new Promise((resolve, reject) => {
            this.db.database.ref(`${localStorage.getItem('lang')}/${ref}`).child(path).push(params)
                .then(res => {
                resolve(res);
                console.log(`dataIsUploaded`);
                // this.global.CreateToast(res['message'])
            }).catch((err) => {
                reject(err);
            });
        });
    }
    pushCategoryGlobal(ref, path, params) {
        return new Promise((resolve, reject) => {
            this.db.database.ref(`${ref}`).child(path).push(params)
                .then(res => {
                resolve(res);
                console.log(`dataIsUploaded`);
                // this.global.CreateToast(res['message'])
            }).catch((err) => {
                reject(err);
            });
        });
    }
    unFav(uid, params) {
        return new Promise((resolve, reject) => {
            this.db.database.ref(`favourites`).child(uid).orderByChild('catId').equalTo(params.catId).once("child_added", snapshot => {
                snapshot.ref.remove();
                this.global.CreateToast(`Removed from favourites!`);
            });
        });
    }
    getCurrentUser() {
        return this.fbAuth.currentUser;
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase },
    { type: _global__WEBPACK_IMPORTED_MODULE_0__.GlobalMethods },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 3913:
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalMethods": () => (/* binding */ GlobalMethods)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let GlobalMethods = class GlobalMethods {
    constructor(toast, alertCtlr, loadingController, modalController) {
        this.toast = toast;
        this.alertCtlr = alertCtlr;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.dark = false;
        this.isLoading = false;
        this.founder = false;
        this.userProfile = {};
        let _dark = localStorage.getItem('dark');
        if (_dark == 'false') {
            this.dark = false;
        }
        else {
            this.dark = true;
        }
    }
    CreateToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 500,
                position: 'top',
            });
            toast.present();
        });
    }
    alertController(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let alert = this.alertCtlr.create({
                message: msg,
                mode: 'ios',
                cssClass: 'my-custom-alert',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            console.log('Alert.canceled.');
                        }
                    }
                ]
            });
            ((yield alert).present());
        });
    }
    presentModal(page, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: page,
                mode: 'ios',
                swipeToClose: true,
                componentProps: { data: data }
            });
            this.currentModal = modal;
            return yield modal.present();
        });
    }
    presentLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const check = yield this.loadingController.getTop();
            if (check) {
                this.loadingController.dismiss();
            }
            const loading = yield this.loadingController.create({
                message: msg,
                cssClass: 'loader-dir',
                spinner: 'bubbles'
            });
            loading.present();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingController.dismiss();
        });
    }
    timeoutHide(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
                const check = yield this.loadingController.getTop();
                if (check) {
                    this.loadingController.dismiss();
                }
            }), time);
        });
    }
    setLanguage(setLang) {
        localStorage.setItem('lang', setLang);
        // this.translate.use(setLang)
    }
};
GlobalMethods.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController }
];
GlobalMethods = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-providers',
        template: ''
    })
], GlobalMethods);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDLyz6IzGixLqCZVDLDdvu1BB3RjO0y5Us",
        authDomain: "consumidor-rd-7574b.firebaseapp.com",
        databaseURL: "https://consumidor-rd-7574b-default-rtdb.firebaseio.com",
        projectId: "consumidor-rd-7574b",
        storageBucket: "consumidor-rd-7574b.appspot.com",
        messagingSenderId: "628397141369",
        appId: "1:628397141369:web:dcf37616038d0f8c05d3a8",
        measurementId: "G-CWC2P57K34"
    }
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, white));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\n.menu-logo {\n  width: 100%;\n  height: auto;\n  text-align: center !important;\n  padding: 10px;\n  margin: 5% 0 5% 0;\n}\n\n.menu-logo img {\n  height: 90px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, white);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUVGOztBQURFO0VBQ0ksWUFBQTtBQUdOOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTs7RUFFRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UseURBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usc0RBQUE7QUFGRjs7QUFLQTtFQUNFLCtCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLCtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5tZW51LWxvZ297XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDUlIDAgNSUgMDtcbiAgaW1ne1xuICAgICAgaGVpZ2h0OiA5MHB4OyBcbiAgfVxufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHdoaXRlKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header, ion-toolbar {\n  --background: rgb(19, 25, 193);\n}\nion-header ion-back-button, ion-toolbar ion-back-button {\n  left: 0;\n  top: 2px;\n  position: absolute;\n  color: white;\n}\nion-header ion-title, ion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\nion-content ion-avatar {\n  height: auto;\n  width: 100%;\n  text-align: center;\n  margin-top: 10%;\n}\nion-content ion-avatar img {\n  height: 100px;\n  width: 100px;\n}\nion-content div {\n  text-align: center;\n}\nion-content div ion-label {\n  color: #1319c1;\n  font-weight: bolder;\n}\nion-content ion-row {\n  margin-top: 10%;\n}\nion-content ion-row ion-col p {\n  float: right;\n  color: #1319c1;\n}\nion-content ion-row ion-col ion-checkbox {\n  color: #1319c1;\n}\nion-content .bottom-btns ion-button {\n  height: 40px;\n  background-color: #1319c1;\n  color: white;\n  border-radius: 10px;\n  width: 80%;\n  margin-top: 10%;\n  text-transform: none;\n}\n.vertical-center {\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjtBQUFJO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRVo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUVaO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFDWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQ2hCO0FBQ1k7RUFDSSxjQUFBO0FBQ2hCO0FBSVE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRlo7QUFNQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTksIDI1LCAxOTMpO1xyXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTksIDI1LCAxOTMpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDE5LCAyNSwgMTkzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxOSwgMjUsIDE5Myk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm90dG9tLWJ0bnMge1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMjUsIDE5Myk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app [class.dark-theme]=\"dark\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <div class=\"menu-logo\">\n            <img src=\"../assets/_logo.png\" alt=\"\">\n          </div>\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of appPages; let i = index\"\n          (click)=\"onClick(p.title)\" >\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[p.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              routerLinkActive=\"selected\"\n            >\n              <ion-icon\n                slot=\"start\"\n                [ios]=\"p.icon + '-outline'\"\n                [md]=\"p.icon + '-sharp'\"\n              ></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 2907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons class=\"back-btn\" slot=\"start\">\r\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-avatar>\r\n    <img src=\"../../assets/images/placeholder.png\" />\r\n  </ion-avatar>\r\n  <div>\r\n    <ion-label>{{userData.fname}} {{userData.lname}}</ion-label>\r\n  </div>\r\n  <ion-item lines = \"full\" class=\"vertical-center\" style=\"--background: transparent; width: 80%; margin: 5% 10% 0 10%;\">\r\n    <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\r\n    <ion-label>{{'Dark Mode'}}</ion-label>\r\n    <ion-toggle slot=\"end\"  (click)=\"darkMode()\" ></ion-toggle>\r\n  </ion-item>\r\n\r\n <div class=\"bottom-btns\">\r\n    <ion-button (click)=\"reviewHistory()\" fill=\"clear\" shape=\"round\">\r\n        Review history\r\n      </ion-button>\r\n      <ion-button (click)=\"logout()\" fill=\"clear\" shape=\"round\">\r\n        Logout\r\n      </ion-button>\r\n </div>\r\n</ion-content>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map