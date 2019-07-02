(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bg-login\">\n  <form #form=\"ngForm\" (ngSubmit)=\"login()\">\n    <ion-grid>\n    \t<ion-row justify-content-center>\n    \t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <img id=\"img-login\" src=\"../../assets/safe_go_negativo.png\" />\n\n    \t\t\t<div padding>\n            <ion-item class=\"inpt-transp\">\n              <ion-input tabindex=\"1\" type=\"email\" placeholder=\"Usuário\" name=\"usuario\" type=\"text\" [(ngModel)]=\"frmLogin.usuario\" required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"inpt-transp\">\n              <ion-input tabindex=\"2\" placeholder=\"Senha\" name=\"senha\" type=\"password\" [(ngModel)]=\"frmLogin.senha\" required></ion-input>\n            </ion-item>\n\n            <div class=\"esqueci-senha\" text-center>\n              <a href=\"javascript:;\" (click)=\"solicitarResetSenha()\">Esqueci minha senha</a>\n            </div>\n    \t\t\t</div>\n\n          <div text-center>\n            <ion-button id=\"btn-entrar\" color=\"*\" type=\"submit\" size=\"large\">Entrar</ion-button>\n          </div>\n    \t\t</ion-col>\n    \t</ion-row>\n    </ion-grid>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg-login {\n  width: 100%;\n  height: 100%; }\n\n#bg-login::after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url('background-escuro.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n  background-size: cover;\n  opacity: 0.9;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1; }\n\nion-grid, form {\n  width: 100%;\n  height: 100%;\n  z-index: 2; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  /*border: 1px solid #488aff;*/\n  /*background: $white-color;*/ }\n\nion-button {\n  font-weight: 300; }\n\n.required {\n  color: #ff0000; }\n\n#img-login {\n  width: 50%;\n  height: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n#img-login-form {\n  width: 178px;\n  height: 24px;\n  position: relative;\n  left: 50%;\n  margin-left: -89px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\nion-input {\n  color: #FFF; }\n\nion-item {\n  --background: transparent;\n  --background-activated: rgba(0, 0, 0, .3);\n  --background-focused: rgba(0, 0, 0, .3); }\n\n.esqueci-senha {\n  font-size: 12px;\n  position: relative;\n  top: 8px; }\n\n.esqueci-senha a {\n  color: #FFF; }\n\n#btn-entrar {\n  --border-radius: 0px !important;\n  background-color: #5B9CB9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvL05ldEJlYW5zUHJvamVjdHMvc2FmZS1nby1hcHAvc2FmZS1nby1hcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxXQUFVO0VBQ1YsWUFMYyxFQUFBOztBQU9oQjtFQUNDLFdBQVc7RUFDVixXQUFVO0VBQ1YsWUFWYztFQVdkLDhDQUEyRDtFQUMzRCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVcsRUFBQTs7QUFHWjtFQUNFLFdBQVU7RUFDVixZQXpCYztFQTBCZCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQTlCYyxFQUFBOztBQWlDaEI7RUFDRSw2QkFBQTtFQUNBLDRCQUFBLEVBQTZCOztBQUcvQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UseUJBQWE7RUFDYix5Q0FBdUI7RUFDdkIsdUNBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBRVY7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSwrQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuXG59XG5cbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG4kYmdTaXRlOiAjMkUzNjNGO1xuXG4jYmctbG9naW4ge1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG4jYmctbG9naW46OmFmdGVyIHtcblx0Y29udGVudDogJyc7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogJGhlaWdodDEwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC1lc2N1cm8uanBnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdG9wYWNpdHk6IDAuOTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHotaW5kZXg6IC0xO1xufVxuXG5pb24tZ3JpZCwgZm9ybSB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogJGhlaWdodDEwMDtcbiAgei1pbmRleDogMjtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogJGhlaWdodDEwMDtcbn1cblxuaW9uLWNvbCB7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjsqL1xuICAvKmJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjsqL1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnJlcXVpcmVke1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuI2ltZy1sb2dpbntcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4jaW1nLWxvZ2luLWZvcm17XG4gIHdpZHRoOiAxNzhweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04OXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1pbnB1dHtcbiAgY29sb3I6ICNGRkY7XG59XG5pb24taXRlbXtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgwLCAwLCAwLCAuMyk7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKDAsIDAsIDAsIC4zKTtcbn1cbi5lc3F1ZWNpLXNlbmhhe1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG4uZXNxdWVjaS1zZW5oYSBhe1xuICBjb2xvcjogI0ZGRjtcbn1cbiNidG4tZW50cmFye1xuICAtLWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI5Q0I5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _TbUsuario_tb_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TbUsuario/tb-usuario.service */ "./src/app/TbUsuario/tb-usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtr, utils, router, TbUsuario, storage) {
        this.loadingCtr = loadingCtr;
        this.utils = utils;
        this.router = router;
        this.TbUsuario = TbUsuario;
        this.storage = storage;
        this.frmLogin = {
            usuario: '',
            senha: ''
        };
        moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('pt-BR');
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.TbUsuario.getDadosLogin().then(function (vLoginInfo) {
            var vLogin = vLoginInfo.login;
            var vSenha = vLoginInfo.senha;
            if (vLogin != '' && vSenha != "") {
                _this.login(false, vLogin, vSenha);
            }
            else {
                _this.TbUsuario.limparDadosLogin();
            }
        })
            .catch(function (err) {
            _this.TbUsuario.limparDadosLogin();
            _this.router.navigate(['/homeIndex']);
        });
    };
    LoginPage.prototype.login = function (form, usuario, senha) {
        var _this = this;
        if (form === void 0) { form = true; }
        if (usuario === void 0) { usuario = ''; }
        if (senha === void 0) { senha = ''; }
        this.loadingCtr.create({
            message: 'Carregando',
            spinner: 'dots',
        }).then(function (res) {
            res.present();
            var vUsuario = '';
            var vSenha = '';
            if (form) {
                vUsuario = _this.frmLogin.usuario.trim();
                vSenha = _this.frmLogin.senha.trim();
            }
            else {
                vUsuario = usuario;
                vSenha = senha;
            }
            if (vUsuario == '' || vSenha == '') {
                if (form) {
                    _this.utils.showAlert('Erro!', '', 'Preencha todas as informações antes de prosseguir.', ['OK']);
                }
                res.dismiss();
            }
            else {
                _this.TbUsuario.verificaLogin(vUsuario, vSenha).then(function (response) {
                    res.dismiss();
                    var vObjPai = JSON.parse(response + '');
                    var vValidade = moment__WEBPACK_IMPORTED_MODULE_7__(vObjPai.pai_validade);
                    var vHoje = moment__WEBPACK_IMPORTED_MODULE_7__();
                    var vDifValidade = vValidade.diff(vHoje, 'minutes');
                    if (vDifValidade < 0) {
                        res.dismiss();
                        _this.utils.showAlert('Alerta!', '', 'Seu login era válido até ' + vValidade.format('DD/MM/YYYY HH:mm') + '. Entre em contato com a escola.', ['OK']);
                        return;
                    }
                    _this.TbUsuario.preencheDadosLogin(vObjPai.pai_id, vUsuario, vSenha, vObjPai.pai_nome, vObjPai.pai_qr, vObjPai.pai_validade, vObjPai.pai_id_solicitacao, vObjPai.pai_aprovado, vObjPai.pai_id_solicitacao > 0);
                    _this.router.navigate(['/home']);
                }).catch(function (err) {
                    if (!form) {
                        var erroInternet = (typeof err.ok !== 'undefined') ? !err.ok : false;
                        if (erroInternet) {
                            // sem internet
                            if (vUsuario != '' && vSenha != '') {
                                _this.router.navigate(['/home']);
                            }
                        }
                        res.dismiss();
                    }
                    else {
                        res.dismiss();
                        _this.utils.showAlert('Erro!', '', err, ['OK']);
                    }
                });
            }
            res.onDidDismiss().then(function (dis) { });
        });
    };
    LoginPage.prototype.solicitarResetSenha = function () {
        var _this = this;
        this.loadingCtr.create({
            message: 'Carregando',
            spinner: 'dots',
        }).then(function (res) {
            res.present();
            var vUsuario = _this.frmLogin.usuario.trim();
            _this.TbUsuario.solicitaSenha(vUsuario).then(function (response) {
                res.dismiss();
                _this.utils.showAlert('Sucesso!', '', response, ['OK']);
            }).catch(function (err) {
                res.dismiss();
                _this.utils.showAlert('Erro!', '', err, ['OK']);
            });
            res.onDidDismiss().then(function (dis) { });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _TbUsuario_tb_usuario_service__WEBPACK_IMPORTED_MODULE_5__["TbUsuarioService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map