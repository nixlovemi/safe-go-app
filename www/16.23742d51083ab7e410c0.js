(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"f+ep":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),i=u("ZZ/e"),t=u("7S5c"),o=u("lg5q"),a=u("wd/R"),r=function(){function n(n,l,u,e,i){this.loadingCtr=n,this.utils=l,this.router=u,this.TbUsuario=e,this.storage=i,this.frmLogin={usuario:"",senha:""},a.locale("pt-BR")}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.TbUsuario.getDadosLogin().then(function(l){var u=l.login,e=l.senha;""!=u&&""!=e?n.login(!1,u,e):n.TbUsuario.limparDadosLogin()}).catch(function(l){n.TbUsuario.limparDadosLogin(),n.router.navigate(["/homeIndex"])})},n.prototype.login=function(n,l,u){var e=this;void 0===n&&(n=!0),void 0===l&&(l=""),void 0===u&&(u=""),this.loadingCtr.create({message:"Carregando",spinner:"dots"}).then(function(i){i.present();var t="",o="";n?(t=e.frmLogin.usuario.trim(),o=e.frmLogin.senha.trim()):(t=l,o=u),""==t||""==o?(n&&e.utils.showAlert("Erro!","","Preencha todas as informa\xe7\xf5es antes de prosseguir.",["OK"]),i.dismiss()):e.TbUsuario.verificaLogin(t,o).then(function(n){i.dismiss();var l=JSON.parse(n+""),u=a(l.pai_validade),r=a();if(u.diff(r,"minutes")<0)return i.dismiss(),void e.utils.showAlert("Alerta!","","Seu login era v\xe1lido at\xe9 "+u.format("DD/MM/YYYY HH:mm")+". Entre em contato com a escola.",["OK"]);e.TbUsuario.preencheDadosLogin(l.pai_id,t,o,l.pai_nome,l.pai_qr,l.pai_validade,l.pai_id_solicitacao,l.pai_aprovado,l.pai_id_solicitacao>0),e.router.navigate(["/home"])}).catch(function(l){n?(i.dismiss(),e.utils.showAlert("Erro!","",l,["OK"])):(void 0!==l.ok&&!l.ok&&""!=t&&""!=o&&e.router.navigate(["/home"]),i.dismiss())}),i.onDidDismiss().then(function(n){})})},n.prototype.solicitarResetSenha=function(){var n=this;this.loadingCtr.create({message:"Carregando",spinner:"dots"}).then(function(l){l.present();var u=n.frmLogin.usuario.trim();n.TbUsuario.solicitaSenha(u).then(function(u){l.dismiss(),n.utils.showAlert("Sucesso!","",u,["OK"])}).catch(function(u){l.dismiss(),n.utils.showAlert("Erro!","",u,["OK"])}),l.onDidDismiss().then(function(n){})})},n}(),s=function(){return function(){}}(),g=u("pMnS"),d=u("gIcY"),b=u("oBZk"),c=u("ZYCi"),h=u("iw74"),p=e.mb({encapsulation:0,styles:[["#bg-login[_ngcontent-%COMP%]{width:100%;height:100%}#bg-login[_ngcontent-%COMP%]::after{content:'';width:100%;height:100%;background-image:url(background-escuro.878625489b65f9328fb4.jpg);background-repeat:no-repeat;background-position:center center;background-attachment:fixed;background-size:cover;opacity:.9;position:absolute;top:0;left:0;z-index:-1}form[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{width:100%;height:100%;z-index:2}ion-row[_ngcontent-%COMP%]{height:100%}ion-button[_ngcontent-%COMP%]{font-weight:300}.required[_ngcontent-%COMP%]{color:red}#img-login[_ngcontent-%COMP%]{width:50%;height:50%;display:block;margin-left:auto;margin-right:auto}#img-login-form[_ngcontent-%COMP%]{width:178px;height:24px;position:relative;left:50%;margin-left:-89px;padding-top:10px;padding-bottom:10px}ion-input[_ngcontent-%COMP%]{color:#fff}ion-item[_ngcontent-%COMP%]{--background:transparent;--background-activated:rgba(0, 0, 0, .3);--background-focused:rgba(0, 0, 0, .3)}.esqueci-senha[_ngcontent-%COMP%]{font-size:12px;position:relative;top:8px}.esqueci-senha[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}#btn-entrar[_ngcontent-%COMP%]{--border-radius:0px!important;background-color:#5b9cb9}"]],data:{}});function m(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,42,"div",[["id","bg-login"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,41,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var i=!0,t=n.component;return"submit"===l&&(i=!1!==e.yb(n,3).onSubmit(u)&&i),"reset"===l&&(i=!1!==e.yb(n,3).onReset()&&i),"ngSubmit"===l&&(i=!1!==t.login()&&i),i},null,null)),e.nb(2,16384,null,0,d.l,[],null,null),e.nb(3,4210688,[["form",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.zb(2048,null,d.a,null,[d.h]),e.nb(5,16384,null,0,d.g,[[4,d.a]],null,null),(n()(),e.ob(6,0,null,null,36,"ion-grid",[],null,null,null,b.z,b.g)),e.nb(7,49152,null,0,i.z,[e.h,e.k],null,null),(n()(),e.ob(8,0,null,0,34,"ion-row",[["justify-content-center",""]],null,null,null,b.I,b.p)),e.nb(9,49152,null,0,i.hb,[e.h,e.k],null,null),(n()(),e.ob(10,0,null,0,32,"ion-col",[["align-self-center",""],["size-lg","5"],["size-md","6"],["size-xs","12"]],null,null,null,b.w,b.d)),e.nb(11,49152,null,0,i.s,[e.h,e.k],null,null),(n()(),e.ob(12,0,null,0,0,"img",[["id","img-login"],["src","../../assets/safe_go_negativo.png"]],null,null,null,null,null)),(n()(),e.ob(13,0,null,0,25,"div",[["padding",""]],null,null,null,null,null)),(n()(),e.ob(14,0,null,null,10,"ion-item",[["class","inpt-transp"]],null,null,null,b.D,b.k)),e.nb(15,49152,null,0,i.G,[e.h,e.k],null,null),(n()(),e.ob(16,0,null,0,8,"ion-input",[["name","usuario"],["placeholder","Usu\xe1rio"],["required",""],["tabindex","1"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var i=!0,t=n.component;return"ionBlur"===l&&(i=!1!==e.yb(n,19)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==e.yb(n,19)._handleInputEvent(u.target.value)&&i),"ngModelChange"===l&&(i=!1!==(t.frmLogin.usuario=u)&&i),i},b.C,b.j)),e.nb(17,16384,null,0,d.j,[],{required:[0,"required"]},null),e.zb(1024,null,d.c,function(n){return[n]},[d.j]),e.nb(19,16384,null,0,i.Lb,[e.k],null,null),e.zb(1024,null,d.d,function(n){return[n]},[i.Lb]),e.nb(21,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.zb(2048,null,d.e,null,[d.i]),e.nb(23,16384,null,0,d.f,[[4,d.e]],null,null),e.nb(24,49152,null,0,i.F,[e.h,e.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),e.ob(25,0,null,null,10,"ion-item",[["class","inpt-transp"]],null,null,null,b.D,b.k)),e.nb(26,49152,null,0,i.G,[e.h,e.k],null,null),(n()(),e.ob(27,0,null,0,8,"ion-input",[["name","senha"],["placeholder","Senha"],["required",""],["tabindex","2"],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var i=!0,t=n.component;return"ionBlur"===l&&(i=!1!==e.yb(n,30)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==e.yb(n,30)._handleInputEvent(u.target.value)&&i),"ngModelChange"===l&&(i=!1!==(t.frmLogin.senha=u)&&i),i},b.C,b.j)),e.nb(28,16384,null,0,d.j,[],{required:[0,"required"]},null),e.zb(1024,null,d.c,function(n){return[n]},[d.j]),e.nb(30,16384,null,0,i.Lb,[e.k],null,null),e.zb(1024,null,d.d,function(n){return[n]},[i.Lb]),e.nb(32,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.zb(2048,null,d.e,null,[d.i]),e.nb(34,16384,null,0,d.f,[[4,d.e]],null,null),e.nb(35,49152,null,0,i.F,[e.h,e.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),e.ob(36,0,null,null,2,"div",[["class","esqueci-senha"],["text-center",""]],null,null,null,null,null)),(n()(),e.ob(37,0,null,null,1,"a",[["href","javascript:;"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.solicitarResetSenha()&&e),e},null,null)),(n()(),e.Cb(-1,null,["Esqueci minha senha"])),(n()(),e.ob(39,0,null,0,3,"div",[["text-center",""]],null,null,null,null,null)),(n()(),e.ob(40,0,null,null,2,"ion-button",[["color","*"],["id","btn-entrar"],["size","large"],["type","submit"]],null,null,null,b.u,b.b)),e.nb(41,49152,null,0,i.j,[e.h,e.k],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(n()(),e.Cb(-1,0,["Entrar"]))],function(n,l){var u=l.component;n(l,17,0,""),n(l,21,0,"usuario",u.frmLogin.usuario),n(l,24,0,"usuario","Usu\xe1rio","","text"),n(l,28,0,""),n(l,32,0,"senha",u.frmLogin.senha),n(l,35,0,"senha","Senha","","password"),n(l,41,0,"*","large","submit")},function(n,l){n(l,1,0,e.yb(l,5).ngClassUntouched,e.yb(l,5).ngClassTouched,e.yb(l,5).ngClassPristine,e.yb(l,5).ngClassDirty,e.yb(l,5).ngClassValid,e.yb(l,5).ngClassInvalid,e.yb(l,5).ngClassPending),n(l,16,0,e.yb(l,17).required?"":null,e.yb(l,23).ngClassUntouched,e.yb(l,23).ngClassTouched,e.yb(l,23).ngClassPristine,e.yb(l,23).ngClassDirty,e.yb(l,23).ngClassValid,e.yb(l,23).ngClassInvalid,e.yb(l,23).ngClassPending),n(l,27,0,e.yb(l,28).required?"":null,e.yb(l,34).ngClassUntouched,e.yb(l,34).ngClassTouched,e.yb(l,34).ngClassPristine,e.yb(l,34).ngClassDirty,e.yb(l,34).ngClassValid,e.yb(l,34).ngClassInvalid,e.yb(l,34).ngClassPending)})}function f(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,1,"app-login",[],null,null,null,m,p)),e.nb(1,114688,null,0,r,[i.Eb,t.a,c.m,o.a,h.b],null,null)],function(n,l){n(l,1,0)},null)}var C=e.kb("app-login",r,f,{},{},[]),v=u("Ip0R");u.d(l,"LoginPageModuleNgFactory",function(){return y});var y=e.lb(s,[],function(n){return e.vb([e.wb(512,e.j,e.ab,[[8,[g.a,C]],[3,e.j],e.x]),e.wb(4608,v.j,v.i,[e.u,[2,v.p]]),e.wb(4608,d.m,d.m,[]),e.wb(4608,i.b,i.b,[e.z,e.g]),e.wb(4608,i.Gb,i.Gb,[i.b,e.j,e.q,v.c]),e.wb(4608,i.Jb,i.Jb,[i.b,e.j,e.q,v.c]),e.wb(1073742336,v.b,v.b,[]),e.wb(1073742336,d.k,d.k,[]),e.wb(1073742336,d.b,d.b,[]),e.wb(1073742336,i.Cb,i.Cb,[]),e.wb(1073742336,c.n,c.n,[[2,c.t],[2,c.m]]),e.wb(1073742336,s,s,[]),e.wb(1024,c.k,function(){return[[{path:"",component:r}]]},[])])})}}]);