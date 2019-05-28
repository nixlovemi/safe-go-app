(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-index-home-index-module"],{

/***/ "./src/app/home-index/home-index.module.ts":
/*!*************************************************!*\
  !*** ./src/app/home-index/home-index.module.ts ***!
  \*************************************************/
/*! exports provided: HomeIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIndexPageModule", function() { return HomeIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-index.page */ "./src/app/home-index/home-index.page.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");








var routes = [
    {
        path: '',
        component: _home_index_page__WEBPACK_IMPORTED_MODULE_6__["HomeIndexPage"],
    }
];
var HomeIndexPageModule = /** @class */ (function () {
    function HomeIndexPageModule() {
    }
    HomeIndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
            ],
            declarations: [_home_index_page__WEBPACK_IMPORTED_MODULE_6__["HomeIndexPage"]]
        })
    ], HomeIndexPageModule);
    return HomeIndexPageModule;
}());



/***/ }),

/***/ "./src/app/home-index/home-index.page.html":
/*!*************************************************!*\
  !*** ./src/app/home-index/home-index.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"hcs\">\n        <p id=\"userName\">{{nomeUser}}</p>\n        <p id=\"userValidade\">Validade: {{validadeUser}}</p>\n        <img class=\"img-logo-new\" src=\"../../assets/logo-go.jpeg\" />\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-bottom: 30px;\">\n    <ion-col size=\"12\">\n      <div id=\"qr-holder\">\n        <qrcode id=\"qr-code\" [qrdata]=\"qrCode\" [size]=\"300\" [level]=\"'M'\"></qrcode>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button color=\"primary\" size=\"large\" type=\"button\" expand=\"block\">Estou chegando</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button color=\"primary\" size=\"large\" type=\"button\" expand=\"block\">Login Temporário</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home-index/home-index.page.scss":
/*!*************************************************!*\
  !*** ./src/app/home-index/home-index.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  margin-bottom: 30px; }\n\n#qr-holder {\n  width: 100%;\n  text-align: center; }\n\n#qr-code {\n  display: inline-block; }\n\n#title {\n  margin-top: 5px;\n  margin-bottom: 0; }\n\n#validade-new {\n  color: #CCC;\n  font-size: 11px; }\n\n.img-logo-new {\n  width: 9%;\n  height: auto;\n  position: absolute;\n  top: -4px;\n  right: 0; }\n\n#userName {\n  font-size: 14px;\n  margin: 0px 0px 3px 0px; }\n\n#userValidade {\n  margin: 0;\n  font-size: 11px;\n  color: #CCC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvL05ldEJlYW5zUHJvamVjdHMvc2FmZS1nby1hcHAvc2FmZS1nby1hcHAvc3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBRVY7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiNxci1ob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3FyLWNvZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jdGl0bGV7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiN2YWxpZGFkZS1uZXd7XG4gIGNvbG9yOiAjQ0NDO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uaW1nLWxvZ28tbmV3e1xuICB3aWR0aDogOSU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwO1xufVxuI3VzZXJOYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzcHggMHB4O1xufVxuI3VzZXJWYWxpZGFkZXtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjQ0NDO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-index/home-index.page.ts":
/*!***********************************************!*\
  !*** ./src/app/home-index/home-index.page.ts ***!
  \***********************************************/
/*! exports provided: HomeIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIndexPage", function() { return HomeIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");






var HomeIndexPage = /** @class */ (function () {
    function HomeIndexPage(menu, router, storage, utils) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.utils = utils;
        this.qrCode = null;
        this.nomeUser = null;
        this.validadeUser = null;
        this.logoUrl = null;
        this.logoUrl = '../../assets/logo-go.jpeg';
        this.storage.get('nome').then(function (val) {
            _this.nomeUser = val;
        });
        this.storage.get('validade').then(function (val) {
            _this.validadeUser = _this.utils.formatDate(val, 'DD/MM/YYYY HH:MI');
        });
        this.storage.get('qr-code').then(function (val) {
            _this.qrCode = val;
        });
    }
    HomeIndexPage.prototype.ngOnInit = function () {
    };
    HomeIndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-index',
            template: __webpack_require__(/*! ./home-index.page.html */ "./src/app/home-index/home-index.page.html"),
            styles: [__webpack_require__(/*! ./home-index.page.scss */ "./src/app/home-index/home-index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]])
    ], HomeIndexPage);
    return HomeIndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-index-home-index-module.js.map