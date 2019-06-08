(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-index-home-index-module"],{

/***/ "./src/app/TbPaiLocalizacao/tb-pai-localizacao.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/TbPaiLocalizacao/tb-pai-localizacao.service.ts ***!
  \****************************************************************/
/*! exports provided: TbPaiLocalizacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TbPaiLocalizacaoService", function() { return TbPaiLocalizacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _appkey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appkey.service */ "./src/app/appkey.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var TbPaiLocalizacaoService = /** @class */ (function () {
    function TbPaiLocalizacaoService(utils, http, appkeyServ) {
        this.utils = utils;
        this.http = http;
        this.appkeyServ = appkeyServ;
        this.wsPath = '';
        this.appKey = '';
        this.wsPath = this.utils.getWsPath();
        this.appKey = this.appkeyServ.getAppKey();
    }
    TbPaiLocalizacaoService.prototype.gravaLocalizacao = function (pai_id, latitude, longitude, problema) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.utils.getWsPath() + '/PaiLocalizacao/estouChegando';
            var postData = {
                'appkey': _this.appKey,
                'pai_id': pai_id,
                'latitude': latitude,
                'longitude': longitude,
                'problema': problema,
            };
            _this.http.post(url, postData)
                .subscribe(function (result) {
                var jsonRet = result.json();
                var msg = jsonRet.msg;
                var erro = jsonRet.erro;
                if (erro == true) {
                    reject(msg);
                }
                else {
                    resolve(msg);
                }
            }, function (error) {
                reject(error.json());
            });
        });
    };
    TbPaiLocalizacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _appkey_service__WEBPACK_IMPORTED_MODULE_3__["AppkeyService"]])
    ], TbPaiLocalizacaoService);
    return TbPaiLocalizacaoService;
}());



/***/ }),

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-thumbnail slot=\"end\">\n      <img class=\"img-logo-new\" src=\"../../assets/avatar.png\">\n    </ion-thumbnail>\n    <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated user-validade\">\n      <h3 id=\"title\">{{nomeUser}}</h3>\n      <p>Validade: {{validadeUser}}</p>\n    </ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-bottom: 30px;\">\n    <ion-col size=\"12\">\n      <div id=\"qr-holder\">\n        <qrcode id=\"qr-code\" [qrdata]=\"qrCode\" [size]=\"300\" [level]=\"'M'\"></qrcode>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button color=\"primary\" size=\"large\" type=\"button\" expand=\"block\" (click)=\"estouChegando(false)\">Estou chegando</ion-button>\n      <ion-button color=\"danger\" size=\"large\" type=\"button\" expand=\"block\" (click)=\"estouChegando(true)\">Estou com problema</ion-button>\n      <ion-button *ngIf=\"isTemporario == false\" color=\"primary\" size=\"large\" type=\"button\" expand=\"block\" (click)=\"cadTemporario()\">Login Temporário</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home-index/home-index.page.scss":
/*!*************************************************!*\
  !*** ./src/app/home-index/home-index.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  margin-bottom: 30px; }\n\n#qr-holder {\n  width: 100%;\n  text-align: center; }\n\n#qr-code {\n  display: inline-block; }\n\n#title {\n  font-size: 16px; }\n\n#validade-new {\n  color: #CCC;\n  font-size: 11px; }\n\n.img-logo-new {\n  position: relative;\n  left: -8px; }\n\n.user-validade {\n  position: relative;\n  left: 8px; }\n\n#userName {\n  font-size: 14px;\n  margin: 0px 0px 3px 0px; }\n\n#userValidade {\n  margin: 0;\n  font-size: 11px;\n  color: #CCC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvbml4L05ldEJlYW5zUHJvamVjdHMvc2FmZS1nby1hcHAvc2FmZS1nby1hcHAvc3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUVYO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1pbmRleC9ob21lLWluZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4jcXItaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNxci1jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI3RpdGxle1xuICBmb250LXNpemU6IDE2cHg7XG59XG4jdmFsaWRhZGUtbmV3e1xuICBjb2xvcjogI0NDQztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmltZy1sb2dvLW5ld3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtOHB4O1xufVxuLnVzZXItdmFsaWRhZGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogOHB4O1xufVxuI3VzZXJOYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzcHggMHB4O1xufVxuI3VzZXJWYWxpZGFkZXtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjQ0NDO1xufVxuIl19 */"

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _TbPaiLocalizacao_tb_pai_localizacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TbPaiLocalizacao/tb-pai-localizacao.service */ "./src/app/TbPaiLocalizacao/tb-pai-localizacao.service.ts");
/* harmony import */ var _cad_temporario_cad_temporario_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cad-temporario/cad-temporario.page */ "./src/app/cad-temporario/cad-temporario.page.ts");









var HomeIndexPage = /** @class */ (function () {
    function HomeIndexPage(menu, router, storage, utils, geolocation, TbPaiLocalizacao, modalController) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.utils = utils;
        this.geolocation = geolocation;
        this.TbPaiLocalizacao = TbPaiLocalizacao;
        this.modalController = modalController;
        this.qrCode = null;
        this.nomeUser = null;
        this.validadeUser = null;
        this.logoUrl = null;
        this.storage.get('id').then(function (pai_id) {
            if (pai_id == '') {
                _this.router.navigate(['/homeIndex']);
            }
            else {
                _this.logoUrl = '../../assets/logo-go.jpeg';
                _this.storage.get('nome').then(function (val) {
                    _this.nomeUser = val;
                });
                _this.storage.get('validade').then(function (val) {
                    _this.validadeUser = _this.utils.formatDate(val, 'DD/MM/YYYY HH:MI');
                });
                _this.storage.get('qr-code').then(function (val) {
                    _this.qrCode = val;
                });
                _this.storage.get('isTemporario').then(function (val) {
                    _this.isTemporario = val;
                });
            }
        }).catch(function (error) {
            _this.utils.showAlert('Erro!', '', 'Erro ao acessar aplicativo. Msg: ' + error, ['OK']);
            _this.router.navigate(['/homeIndex']);
        });
    }
    HomeIndexPage.prototype.ngOnInit = function () {
    };
    HomeIndexPage.prototype.estouChegando = function (problema) {
        var _this = this;
        if (problema === void 0) { problema = false; }
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.storage.get('id').then(function (pai_id) {
                _this.TbPaiLocalizacao.gravaLocalizacao(pai_id, resp.coords.latitude, resp.coords.longitude, problema).then(function (msg) {
                    _this.utils.showAlert('Sucesso!', '', msg, ['OK']);
                }).catch(function (error) {
                    _this.utils.showAlert('Erro!', '', 'Erro ao enviar sua localização. Msg: ' + error, ['OK']);
                });
            }).catch(function (error) {
                _this.utils.showAlert('Erro!', '', 'Erro ao buscar usuário logado. Faça o login novamente!', ['OK']);
                _this.router.navigate(['/homeIndex']);
            });
        }).catch(function (error) {
            _this.utils.showAlert('Erro!', '', 'Não conseguimos receber sua localização. Msg: ' + error, ['OK']);
        });
    };
    HomeIndexPage.prototype.cadTemporario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cad_temporario_cad_temporario_page__WEBPACK_IMPORTED_MODULE_8__["CadTemporarioPage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
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
            _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _TbPaiLocalizacao_tb_pai_localizacao_service__WEBPACK_IMPORTED_MODULE_7__["TbPaiLocalizacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], HomeIndexPage);
    return HomeIndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-index-home-index-module.js.map