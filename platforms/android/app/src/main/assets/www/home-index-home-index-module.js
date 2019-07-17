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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"icon-menu\" (click)=\"openMenu()\">\n        <ion-icon src=\"../../assets/menu-icon.svg\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <img class=\"img-logo-new\" src=\"../../assets/safe_go_logo_final-azul.png\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"row-qr\">\n  <ion-row class=\"row-user-info\">\n    <ion-col size=\"2\" text-center>\n      <img class=\"img-logo\" src=\"../../assets/person-icon.png\" />\n    </ion-col>\n    <ion-col size=\"10\">\n      <h2 class=\"user-name\">{{nomeUser}}</h2>\n      <p class=\"user-valid\">Validade/Expiration: {{validadeUser}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"10\" class=\"col-qr-code\">\n      <div id=\"qr-holder\">\n        <qrcode [usesvg]=\"true\" id=\"qr-code\" [qrdata]=\"qrCode\" [size]=\"300\" [level]=\"'M'\"></qrcode>\n      </div>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"5\">\n      <ion-button id=\"btn-chegando\" (click)=\"estouChegando(false)\" expand=\"block\" size=\"large\" class=\"vertical\">\n        <div class=\"vertical\">\n          <!--<ion-icon slot=\"start\" name=\"pin\" class=\"icon\"></ion-icon>-->\n          <ion-icon src=\"../../assets/plane.svg\" slot=\"start\" name=\"pin\" class=\"icon\"></ion-icon>\n          <span class=\"\">\n            Estou chegando<br />\n            <span style=\"color: #666;\">On my way</span>\n          </span>\n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-button id=\"btn-problema\" (click)=\"estouChegando(true)\" expand=\"block\" size=\"large\" class=\"vertical\">\n        <div class=\"vertical\">\n          <!--<ion-icon slot=\"start\" name=\"alert\" class=\"icon\"></ion-icon>-->\n          <ion-icon src=\"../../assets/megaphone.svg\" slot=\"start\" name=\"pin\" class=\"icon\"></ion-icon>\n          <span class=\"\">\n            Estou com<br />problema\n            <br />\n            <span style=\"color: #666;\">In trouble</span>\n          </span>\n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home-index/home-index.page.scss":
/*!*************************************************!*\
  !*** ./src/app/home-index/home-index.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --min-height: 68px; }\n\nion-content {\n  --background: #30A1BA; }\n\n.icon-menu {\n  font-size: 23px; }\n\n#qr-holder {\n  width: 100%;\n  text-align: center;\n  padding: 45px;\n  background-color: #FFF;\n  border-radius: 10px;\n  border: solid 2px #666; }\n\n#qr-code {\n  display: inline-block; }\n\n#qr-holder svg {\n  width: 100%;\n  height: auto; }\n\n#title {\n  font-size: 16px; }\n\n#validade-new {\n  color: #CCC;\n  font-size: 11px; }\n\n.user-validade {\n  position: relative;\n  left: 8px; }\n\n#userName {\n  font-size: 14px;\n  margin: 0px 0px 3px 0px; }\n\n#userValidade {\n  margin: 0;\n  font-size: 11px;\n  color: #CCC; }\n\n.vertical {\n  /*display: flex;\n  flex-direction: column;\n  align-items: center;*/ }\n\ndiv.vertical span {\n  position: relative;\n  left: -2%;\n  margin-left: 4%;\n  font-size: 12px;\n  display: inline-block;\n  vertical-align: middle; }\n\ndiv.vertical .icon {\n  font-size: 40px;\n  vertical-align: middle; }\n\nion-button.vertical {\n  --padding-top: 10px;\n  --padding-bottom: 10px; }\n\n#btn-chegando {\n  --background: #cefecc;\n  --color: #000;\n  text-transform: lowercase;\n  --border-radius: 6px;\n  --border-width: 2px;\n  --border-color: #666;\n  --border-style: solid; }\n\n#btn-problema {\n  --background: #fed5d3;\n  --color: #000;\n  text-transform: lowercase;\n  --border-radius: 6px;\n  --border-width: 2px;\n  --border-color: #666;\n  --border-style: solid; }\n\n.img-logo {\n  width: 55px; }\n\n.user-name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 30px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: -2px; }\n\n.user-valid {\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 300; }\n\n.row-user-info {\n  padding-top: 21px;\n  background-color: #FFF;\n  opacity: 0.95;\n  margin-bottom: 30px; }\n\n.row-qr {\n  --background: url('bg-principal.jpg') no-repeat center center / cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvbml4L05ldEJlYW5zUHJvamVjdHMvc2FmZS1nby1hcHAvc2FmZS1nby1hcHAvc3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWEsRUFBQTs7QUFHakI7RUFDRSxxQkFBYSxFQUFBOztBQUVmO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBRVg7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRTs7dUJDQXFCLEVERUM7O0FBRXhCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsbUJBQWM7RUFDZCxzQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxxQkFBYTtFQUNiLGFBQVE7RUFDUix5QkFBeUI7RUFDekIsb0JBQWdCO0VBQ2hCLG1CQUFlO0VBQ2Ysb0JBQWU7RUFDZixxQkFBZSxFQUFBOztBQUVqQjtFQUNFLHFCQUFhO0VBQ2IsYUFBUTtFQUNSLHlCQUF5QjtFQUN6QixvQkFBZ0I7RUFDaEIsbUJBQWU7RUFDZixvQkFBZTtFQUNmLHFCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHFFQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lLWluZGV4L2hvbWUtaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgaW9uLXRvb2xiYXJ7XG4gICAgLS1taW4taGVpZ2h0OiA2OHB4O1xuICB9XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzBBMUJBO1xufVxuLmljb24tbWVudXtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuI3FyLWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICM2NjY7XG59XG4jcXItY29kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNxci1ob2xkZXIgc3Zne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuI3RpdGxle1xuICBmb250LXNpemU6IDE2cHg7XG59XG4jdmFsaWRhZGUtbmV3e1xuICBjb2xvcjogI0NDQztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnVzZXItdmFsaWRhZGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogOHB4O1xufVxuI3VzZXJOYW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzcHggMHB4O1xufVxuI3VzZXJWYWxpZGFkZXtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjQ0NDO1xufVxuLnZlcnRpY2FsIHtcbiAgLypkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyovXG59XG5kaXYudmVydGljYWwgc3BhbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMiU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5kaXYudmVydGljYWwgLmljb257XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlvbi1idXR0b24udmVydGljYWx7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4jYnRuLWNoZWdhbmRve1xuICAtLWJhY2tncm91bmQ6ICNjZWZlY2M7XG4gIC0tY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1jb2xvcjogIzY2NjtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuI2J0bi1wcm9ibGVtYXtcbiAgLS1iYWNrZ3JvdW5kOiAjZmVkNWQzO1xuICAtLWNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItY29sb3I6ICM2NjY7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5pbWctbG9nb3tcbiAgd2lkdGg6IDU1cHg7XG59XG4udXNlci1uYW1le1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG59XG4udXNlci12YWxpZHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucm93LXVzZXItaW5mb3tcbiAgcGFkZGluZy10b3A6IDIxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuOTU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucm93LXFye1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JnLXByaW5jaXBhbC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogNjhweDsgfVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzMwQTFCQTsgfVxuXG4uaWNvbi1tZW51IHtcbiAgZm9udC1zaXplOiAyM3B4OyB9XG5cbiNxci1ob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjNjY2OyB9XG5cbiNxci1jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbiNxci1ob2xkZXIgc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4jdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuI3ZhbGlkYWRlLW5ldyB7XG4gIGNvbG9yOiAjQ0NDO1xuICBmb250LXNpemU6IDExcHg7IH1cblxuLnVzZXItdmFsaWRhZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDhweDsgfVxuXG4jdXNlck5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzcHggMHB4OyB9XG5cbiN1c2VyVmFsaWRhZGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNDQ0M7IH1cblxuLnZlcnRpY2FsIHtcbiAgLypkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyovIH1cblxuZGl2LnZlcnRpY2FsIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0yJTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG5kaXYudmVydGljYWwgLmljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuaW9uLWJ1dHRvbi52ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7IH1cblxuI2J0bi1jaGVnYW5kbyB7XG4gIC0tYmFja2dyb3VuZDogI2NlZmVjYztcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNjY2O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7IH1cblxuI2J0bi1wcm9ibGVtYSB7XG4gIC0tYmFja2dyb3VuZDogI2ZlZDVkMztcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNjY2O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7IH1cblxuLmltZy1sb2dvIHtcbiAgd2lkdGg6IDU1cHg7IH1cblxuLnVzZXItbmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLTJweDsgfVxuXG4udXNlci12YWxpZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbi5yb3ctdXNlci1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuOTU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLnJvdy1xciB7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmctcHJpbmNpcGFsLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7IH1cbiJdfQ== */"

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
                _this.validadeUser = _this.utils.formatDate(vLoginInfo.validade, 'DD/MM/YYYY');
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