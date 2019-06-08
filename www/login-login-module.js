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

module.exports = "<div id=\"bg-login\">\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n    \t<ion-row justify-content-center>\n    \t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <img id=\"img-login\" src=\"../../assets/safe_go_negativo.png\" />\n\n    \t\t\t<div padding>\n            <ion-item class=\"inpt-transp\">\n              <ion-input placeholder=\"Usuário\" name=\"usuario\" type=\"text\" [(ngModel)]=\"frmLogin.usuario\" required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"inpt-transp\">\n              <ion-input placeholder=\"Senha\" name=\"senha\" type=\"password\" [(ngModel)]=\"frmLogin.senha\" required></ion-input>\n            </ion-item>\n\n            <span class=\"esqueci-senha\">\n              <a href=\"javascript:;\" (click)=\"solicitarResetSenha()\">Esqueci minha senha</a>\n            </span>\n    \t\t\t</div>\n\n          <div text-center>\n            <ion-button color=\"primary\" type=\"submit\" size=\"large\">Entrar</ion-button>\n          </div>\n    \t\t</ion-col>\n    \t</ion-row>\n    </ion-grid>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg-login {\n  width: 100%;\n  height: 100%; }\n\n#bg-login::after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url('background-login.jpeg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n  background-size: cover;\n  opacity: 0.9;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1; }\n\nion-grid, form {\n  width: 100%;\n  height: 100%;\n  z-index: 2; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  /*border: 1px solid #488aff;*/\n  /*background: $white-color;*/ }\n\nion-button {\n  font-weight: 300;\n  background-color: #5bb75b; }\n\n.required {\n  color: #ff0000; }\n\n#img-login {\n  width: 50%;\n  height: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n#img-login-form {\n  width: 178px;\n  height: 24px;\n  position: relative;\n  left: 50%;\n  margin-left: -89px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\nion-input {\n  color: #FFF; }\n\nion-item {\n  --background: transparent;\n  --background-activated: rgba(0, 0, 0, .3);\n  --background-focused: rgba(0, 0, 0, .3); }\n\n.esqueci-senha {\n  font-size: 12px;\n  position: relative;\n  top: 8px; }\n\n.esqueci-senha a {\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvbml4L05ldEJlYW5zUHJvamVjdHMvc2FmZS1nby1hcHAvc2FmZS1nby1hcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxXQUFVO0VBQ1YsWUFMYyxFQUFBOztBQU9oQjtFQUNDLFdBQVc7RUFDVixXQUFVO0VBQ1YsWUFWYztFQVdkLDhDQUEyRDtFQUMzRCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVcsRUFBQTs7QUFHWjtFQUNFLFdBQVU7RUFDVixZQXpCYztFQTBCZCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQTlCYyxFQUFBOztBQWlDaEI7RUFDRSw2QkFBQTtFQUNBLDRCQUFBLEVBQTZCOztBQUcvQjtFQUNFLGdCQUFnQjtFQUNoQix5QkFDRixFQUFBOztBQUVBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSx5QkFBYTtFQUNiLHlDQUF1QjtFQUN2Qix1Q0FBcUIsRUFBQTs7QUFFdkI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFFVjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1sb2dpbiB7XG5cbn1cblxuJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGhlaWdodDEwMDogMTAwJTtcbiRiZ1NpdGU6ICMyRTM2M0Y7XG5cbiNiZy1sb2dpbiB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogJGhlaWdodDEwMDtcbn1cbiNiZy1sb2dpbjo6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLWxvZ2luLmpwZWcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0b3BhY2l0eTogMC45O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbmlvbi1ncmlkLCBmb3JtIHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICB6LWluZGV4OiAyO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xufVxuXG5pb24tY29sIHtcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjNDg4YWZmOyovXG4gIC8qYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yOyovXG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiNzViXG59XG5cbi5yZXF1aXJlZHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbiNpbWctbG9naW57XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuI2ltZy1sb2dpbi1mb3Jte1xuICB3aWR0aDogMTc4cHg7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtODlweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24taW5wdXR7XG4gIGNvbG9yOiAjRkZGO1xufVxuaW9uLWl0ZW17XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogcmdiYSgwLCAwLCAwLCAuMyk7XG59XG4uZXNxdWVjaS1zZW5oYXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuLmVzcXVlY2ktc2VuaGEgYXtcbiAgY29sb3I6ICNGRkY7XG59XG4iXX0= */"

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
    function LoginPage(loadingCtr, utils, router, TbUsuarioServ, storage) {
        this.loadingCtr = loadingCtr;
        this.utils = utils;
        this.router = router;
        this.TbUsuarioServ = TbUsuarioServ;
        this.storage = storage;
        this.frmLogin = {
            usuario: '',
            senha: ''
        };
        this.vTeste = '';
        moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('pt-BR');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.storage.set('id', '');
        this.storage.set('login', '');
        this.storage.set('nome', '');
        this.storage.set('qr-code', '');
        this.storage.set('validade', '');
        this.storage.set('id_solicitacao', '');
        this.storage.set('aprovado', '');
        this.storage.set('isTemporario', true);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loadingCtr.create({
            message: 'Carregando',
            spinner: 'dots',
        }).then(function (res) {
            res.present();
            var vUsuario = _this.frmLogin.usuario.trim();
            var vSenha = _this.frmLogin.senha.trim();
            if (vUsuario == '' || vSenha == '') {
                res.dismiss();
                _this.utils.showAlert('Erro!', '', 'Preencha todas as informações antes de prosseguir.', ['OK']);
            }
            else {
                _this.TbUsuarioServ.verificaLogin(vUsuario, vSenha).then(function (response) {
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
                    _this.storage.set('id', vObjPai.pai_id);
                    _this.storage.set('login', vUsuario);
                    _this.storage.set('nome', vObjPai.pai_nome);
                    _this.storage.set('qr-code', vObjPai.pai_qr);
                    _this.storage.set('validade', vObjPai.pai_validade);
                    _this.storage.set('id_solicitacao', vObjPai.pai_id_solicitacao);
                    _this.storage.set('aprovado', vObjPai.pai_aprovado);
                    _this.storage.set('isTemporario', vObjPai.pai_id_solicitacao > 0);
                    _this.router.navigate(['/homeIndex']);
                }).catch(function (err) {
                    res.dismiss();
                    _this.utils.showAlert('Erro!', '', err, ['OK']);
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
            _this.TbUsuarioServ.solicitaSenha(vUsuario).then(function (response) {
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