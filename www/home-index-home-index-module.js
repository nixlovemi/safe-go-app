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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"icon-menu\" (click)=\"openMenu()\">\n        <ion-icon src=\"../../assets/menu-icon.svg\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <img class=\"img-logo-new\" src=\"../../assets/safe_go_logo_final-azul.png\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"row-user-info\">\n    <ion-col size=\"12\" text-center>\n      <img class=\"img-logo\" src=\"../../assets/person-icon.png\" />\n      <h2 class=\"user-name\">{{nomeUser}}</h2>\n      <p class=\"user-valid\">Validade: {{validadeUser}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row-qr\">\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"10\" class=\"col-qr-code\">\n      <div id=\"qr-holder\">\n        <qrcode id=\"qr-code\" [qrdata]=\"qrCode\" [size]=\"300\" [level]=\"'M'\"></qrcode>\n      </div>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"5\">\n      <ion-button id=\"btn-chegando\" (click)=\"estouChegando(false)\" expand=\"block\" size=\"large\" class=\"vertical\">\n        <div class=\"vertical\">\n          <!--<ion-icon slot=\"start\" name=\"pin\" class=\"icon\"></ion-icon>-->\n          <ion-icon src=\"../../assets/plane.svg\" slot=\"start\" name=\"pin\" class=\"icon\"></ion-icon>\n          <span class=\"\">Estou<br />chegando</span>\n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-button id=\"btn-problema\" (click)=\"estouChegando(true)\" expand=\"block\" size=\"large\" class=\"vertical\">\n        <div class=\"vertical\">\n          <!--<ion-icon slot=\"start\" name=\"alert\" class=\"icon\"></ion-icon>-->\n          <ion-icon src=\"../../assets/megaphone.svg\" slot=\"start\" name=\"pin\" class=\"icon\"></ion-icon>\n          <span class=\"\">Estou com<br />problema</span>\n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home-index/home-index.page.scss":
/*!*************************************************!*\
  !*** ./src/app/home-index/home-index.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --min-height: 68px; }\n\nion-content {\n  --background: #30A1BA; }\n\n.icon-menu {\n  font-size: 23px; }\n\n#qr-holder {\n  width: 100%;\n  text-align: center;\n  padding: 45px;\n  background-color: #FFF;\n  border-radius: 10px;\n  border: solid 2px #666; }\n\n#qr-code {\n  display: inline-block; }\n\n#title {\n  font-size: 16px; }\n\n#validade-new {\n  color: #CCC;\n  font-size: 11px; }\n\n.user-validade {\n  position: relative;\n  left: 8px; }\n\n#userName {\n  font-size: 14px;\n  margin: 0px 0px 3px 0px; }\n\n#userValidade {\n  margin: 0;\n  font-size: 11px;\n  color: #CCC; }\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\ndiv.vertical span {\n  margin-top: 5px;\n  font-size: 12px; }\n\ndiv.vertical .icon {\n  font-size: 40px; }\n\nion-button.vertical {\n  height: 100px; }\n\n#btn-chegando {\n  --background: #cefecc;\n  --color: #000;\n  text-transform: lowercase;\n  --border-radius: 6px;\n  --border-width: 2px;\n  --border-color: #666;\n  --border-style: solid; }\n\n#btn-problema {\n  --background: #fed5d3;\n  --color: #000;\n  text-transform: lowercase;\n  --border-radius: 6px;\n  --border-width: 2px;\n  --border-color: #666;\n  --border-style: solid; }\n\n.img-logo {\n  width: 55px; }\n\n.user-name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 30px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: -2px; }\n\n.user-valid {\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 300; }\n\n.row-user-info {\n  padding-top: 21px;\n  background-color: #FFF; }\n\n.row-qr {\n  padding: 40px 0 30px;\n  background: #30A1BA url('bg-principal.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvbml4L05ldEJlYW5zUHJvamVjdHMvc2FmZS1nby1hcHAvc2FmZS1nby1hcHAvc3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWEsRUFBQTs7QUFHakI7RUFDRSxxQkFBYSxFQUFBOztBQUVmO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQWE7RUFDYixhQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLG9CQUFnQjtFQUNoQixtQkFBZTtFQUNmLG9CQUFlO0VBQ2YscUJBQWUsRUFBQTs7QUFFakI7RUFDRSxxQkFBYTtFQUNiLGFBQVE7RUFDUix5QkFBeUI7RUFDekIsb0JBQWdCO0VBQ2hCLG1CQUFlO0VBQ2Ysb0JBQWU7RUFDZixxQkFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usb0JBQW9CO0VBQ3BCLDJDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtaW5kZXgvaG9tZS1pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICBpb24tdG9vbGJhcntcbiAgICAtLW1pbi1oZWlnaHQ6IDY4cHg7XG4gIH1cbn1cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICMzMEExQkE7XG59XG4uaWNvbi1tZW51e1xuICBmb250LXNpemU6IDIzcHg7XG59XG4jcXItaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzY2Njtcbn1cbiNxci1jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI3RpdGxle1xuICBmb250LXNpemU6IDE2cHg7XG59XG4jdmFsaWRhZGUtbmV3e1xuICBjb2xvcjogI0NDQztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnVzZXItdmFsaWRhZGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogOHB4O1xufVxuI3VzZXJOYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzcHggMHB4O1xufVxuI3VzZXJWYWxpZGFkZXtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjQ0NDO1xufVxuLnZlcnRpY2FsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmRpdi52ZXJ0aWNhbCBzcGFue1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmRpdi52ZXJ0aWNhbCAuaWNvbntcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuaW9uLWJ1dHRvbi52ZXJ0aWNhbHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiNidG4tY2hlZ2FuZG97XG4gIC0tYmFja2dyb3VuZDogI2NlZmVjYztcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNjY2O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG59XG4jYnRuLXByb2JsZW1he1xuICAtLWJhY2tncm91bmQ6ICNmZWQ1ZDM7XG4gIC0tY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1jb2xvcjogIzY2NjtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmltZy1sb2dve1xuICB3aWR0aDogNTVweDtcbn1cbi51c2VyLW5hbWV7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn1cbi51c2VyLXZhbGlke1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5yb3ctdXNlci1pbmZve1xuICBwYWRkaW5nLXRvcDogMjFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi5yb3ctcXJ7XG4gIHBhZGRpbmc6IDQwcHggMCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMzBBMUJBIHVybCgnLi4vLi4vYXNzZXRzL2JnLXByaW5jaXBhbC5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"

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
/* harmony import */ var _TbPaiLocalizacao_tb_pai_localizacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TbPaiLocalizacao/tb-pai-localizacao.service */ "./src/app/TbPaiLocalizacao/tb-pai-localizacao.service.ts");
/* harmony import */ var _TbUsuario_tb_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TbUsuario/tb-usuario.service */ "./src/app/TbUsuario/tb-usuario.service.ts");
/* harmony import */ var _cad_temporario_cad_temporario_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cad-temporario/cad-temporario.page */ "./src/app/cad-temporario/cad-temporario.page.ts");









var HomeIndexPage = /** @class */ (function () {
    function HomeIndexPage(menu, router, storage, utils, TbPaiLocalizacao, modalController, popoverController, events, TbUsuario) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.utils = utils;
        this.TbPaiLocalizacao = TbPaiLocalizacao;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.events = events;
        this.TbUsuario = TbUsuario;
        this.qrCode = null;
        this.nomeUser = null;
        this.validadeUser = null;
        this.logoUrl = null;
        this.isTemporario = true;
    }
    HomeIndexPage.prototype.ngOnInit = function () {
        this.logoUrl = '../../assets/logo-go.jpeg';
    };
    HomeIndexPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.TbUsuario.getDadosLogin().then(function (vLoginInfo) {
            if (vLoginInfo.id != "") {
                _this.nomeUser = vLoginInfo.nome;
                _this.validadeUser = _this.utils.formatDate(vLoginInfo.validade, 'DD/MM/YYYY HH:MI');
                _this.qrCode = vLoginInfo.qr_code;
                _this.isTemporario = vLoginInfo.is_temporario;
                _this.events.publish('entrouViewHomeIndex');
            }
            else {
                _this.router.navigate(['/homeIndex']);
            }
        })
            .catch(function (err) {
            _this.router.navigate(['/homeIndex']);
        });
    };
    HomeIndexPage.prototype.estouChegando = function (problema) {
        if (problema === void 0) { problema = false; }
        this.TbPaiLocalizacao.execEstouChegando(problema);
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
    HomeIndexPage.prototype.openMenu = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.menu.open('menu-principal');
                return [2 /*return*/];
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
            _TbPaiLocalizacao_tb_pai_localizacao_service__WEBPACK_IMPORTED_MODULE_6__["TbPaiLocalizacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _TbUsuario_tb_usuario_service__WEBPACK_IMPORTED_MODULE_7__["TbUsuarioService"]])
    ], HomeIndexPage);
    return HomeIndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-index-home-index-module.js.map