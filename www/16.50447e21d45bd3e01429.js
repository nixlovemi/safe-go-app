(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"f+ep":function(n,l,e){"use strict";e.r(l);var i=e("CcnG"),u=e("ZZ/e"),t=e("7S5c"),o=e("lg5q"),r=e("wd/R"),a=function(){function n(n,l,e,i,u){this.loadingCtr=n,this.utils=l,this.router=e,this.TbUsuarioServ=i,this.storage=u,this.frmLogin={usuario:"",senha:""},this.vTeste="",r.locale("pt-BR")}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("login").then(function(l){""!=l?n.storage.get("senha").then(function(e){n.login(!1,l,e)}):n.TbUsuarioServ.limparDadosLogin()}).catch(function(l){n.utils.showAlert("Erro!","","Erro ao acessar aplicativo. Msg: "+l,["OK"]),n.TbUsuarioServ.limparDadosLogin(),n.router.navigate(["/"])})},n.prototype.login=function(n,l,e){var i=this;void 0===n&&(n=!0),void 0===l&&(l=""),void 0===e&&(e=""),this.loadingCtr.create({message:"Carregando",spinner:"dots"}).then(function(u){u.present();var t="",o="";if(n?(t=i.frmLogin.usuario.trim(),o=i.frmLogin.senha.trim()):(t=l,o=e),""==t||""==o){if(!n)return;u.dismiss(),i.utils.showAlert("Erro!","","Preencha todas as informa\xe7\xf5es antes de prosseguir.",["OK"])}else i.TbUsuarioServ.verificaLogin(t,o).then(function(n){u.dismiss();var l=JSON.parse(n+""),e=r(l.pai_validade),a=r();if(e.diff(a,"minutes")<0)return u.dismiss(),void i.utils.showAlert("Alerta!","","Seu login era v\xe1lido at\xe9 "+e.format("DD/MM/YYYY HH:mm")+". Entre em contato com a escola.",["OK"]);i.storage.set("id",l.pai_id),i.storage.set("login",t),i.storage.set("senha",o),i.storage.set("nome",l.pai_nome),i.storage.set("qr-code",l.pai_qr),i.storage.set("validade",l.pai_validade),i.storage.set("id_solicitacao",l.pai_id_solicitacao),i.storage.set("aprovado",l.pai_aprovado),i.storage.set("isTemporario",l.pai_id_solicitacao>0),i.router.navigate(["/home"])}).catch(function(l){n?(u.dismiss(),i.utils.showAlert("Erro!","",l,["OK"])):l instanceof ProgressEvent&&(u.dismiss(),i.router.navigate(["/home"]))});u.onDidDismiss().then(function(n){})})},n.prototype.solicitarResetSenha=function(){var n=this;this.loadingCtr.create({message:"Carregando",spinner:"dots"}).then(function(l){l.present();var e=n.frmLogin.usuario.trim();n.TbUsuarioServ.solicitaSenha(e).then(function(e){l.dismiss(),n.utils.showAlert("Sucesso!","",e,["OK"])}).catch(function(e){l.dismiss(),n.utils.showAlert("Erro!","",e,["OK"])}),l.onDidDismiss().then(function(n){})})},n}(),s=function(){return function(){}}(),g=e("pMnS"),d=e("gIcY"),c=e("oBZk"),b=e("ZYCi"),h=e("iw74"),p=i.mb({encapsulation:0,styles:[["#bg-login[_ngcontent-%COMP%]{width:100%;height:100%}#bg-login[_ngcontent-%COMP%]::after{content:'';width:100%;height:100%;background-image:url(background-escuro.878625489b65f9328fb4.jpg);background-repeat:no-repeat;background-position:center center;background-attachment:fixed;background-size:cover;opacity:.9;position:absolute;top:0;left:0;z-index:-1}form[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{width:100%;height:100%;z-index:2}ion-row[_ngcontent-%COMP%]{height:100%}ion-button[_ngcontent-%COMP%]{font-weight:300}.required[_ngcontent-%COMP%]{color:red}#img-login[_ngcontent-%COMP%]{width:50%;height:50%;display:block;margin-left:auto;margin-right:auto}#img-login-form[_ngcontent-%COMP%]{width:178px;height:24px;position:relative;left:50%;margin-left:-89px;padding-top:10px;padding-bottom:10px}ion-input[_ngcontent-%COMP%]{color:#fff}ion-item[_ngcontent-%COMP%]{--background:transparent;--background-activated:rgba(0, 0, 0, .3);--background-focused:rgba(0, 0, 0, .3)}.esqueci-senha[_ngcontent-%COMP%]{font-size:12px;position:relative;top:8px}.esqueci-senha[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}"]],data:{}});function m(n){return i.Db(0,[(n()(),i.ob(0,0,null,null,42,"div",[["id","bg-login"]],null,null,null,null,null)),(n()(),i.ob(1,0,null,null,41,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var u=!0,t=n.component;return"submit"===l&&(u=!1!==i.yb(n,3).onSubmit(e)&&u),"reset"===l&&(u=!1!==i.yb(n,3).onReset()&&u),"ngSubmit"===l&&(u=!1!==t.login()&&u),u},null,null)),i.nb(2,16384,null,0,d.l,[],null,null),i.nb(3,4210688,[["form",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),i.zb(2048,null,d.a,null,[d.h]),i.nb(5,16384,null,0,d.g,[[4,d.a]],null,null),(n()(),i.ob(6,0,null,null,36,"ion-grid",[],null,null,null,c.z,c.g)),i.nb(7,49152,null,0,u.y,[i.h,i.k],null,null),(n()(),i.ob(8,0,null,0,34,"ion-row",[["justify-content-center",""]],null,null,null,c.I,c.p)),i.nb(9,49152,null,0,u.gb,[i.h,i.k],null,null),(n()(),i.ob(10,0,null,0,32,"ion-col",[["align-self-center",""],["size-lg","5"],["size-md","6"],["size-xs","12"]],null,null,null,c.w,c.d)),i.nb(11,49152,null,0,u.r,[i.h,i.k],null,null),(n()(),i.ob(12,0,null,0,0,"img",[["id","img-login"],["src","../../assets/safe_go_negativo.png"]],null,null,null,null,null)),(n()(),i.ob(13,0,null,0,25,"div",[["padding",""]],null,null,null,null,null)),(n()(),i.ob(14,0,null,null,10,"ion-item",[["class","inpt-transp"]],null,null,null,c.D,c.k)),i.nb(15,49152,null,0,u.F,[i.h,i.k],null,null),(n()(),i.ob(16,0,null,0,8,"ion-input",[["name","usuario"],["placeholder","Usu\xe1rio"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,t=n.component;return"ionBlur"===l&&(u=!1!==i.yb(n,19)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==i.yb(n,19)._handleInputEvent(e.target.value)&&u),"ngModelChange"===l&&(u=!1!==(t.frmLogin.usuario=e)&&u),u},c.C,c.j)),i.nb(17,16384,null,0,d.j,[],{required:[0,"required"]},null),i.zb(1024,null,d.c,function(n){return[n]},[d.j]),i.nb(19,16384,null,0,u.Kb,[i.k],null,null),i.zb(1024,null,d.d,function(n){return[n]},[u.Kb]),i.nb(21,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),i.zb(2048,null,d.e,null,[d.i]),i.nb(23,16384,null,0,d.f,[[4,d.e]],null,null),i.nb(24,49152,null,0,u.E,[i.h,i.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),i.ob(25,0,null,null,10,"ion-item",[["class","inpt-transp"]],null,null,null,c.D,c.k)),i.nb(26,49152,null,0,u.F,[i.h,i.k],null,null),(n()(),i.ob(27,0,null,0,8,"ion-input",[["name","senha"],["placeholder","Senha"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,t=n.component;return"ionBlur"===l&&(u=!1!==i.yb(n,30)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==i.yb(n,30)._handleInputEvent(e.target.value)&&u),"ngModelChange"===l&&(u=!1!==(t.frmLogin.senha=e)&&u),u},c.C,c.j)),i.nb(28,16384,null,0,d.j,[],{required:[0,"required"]},null),i.zb(1024,null,d.c,function(n){return[n]},[d.j]),i.nb(30,16384,null,0,u.Kb,[i.k],null,null),i.zb(1024,null,d.d,function(n){return[n]},[u.Kb]),i.nb(32,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),i.zb(2048,null,d.e,null,[d.i]),i.nb(34,16384,null,0,d.f,[[4,d.e]],null,null),i.nb(35,49152,null,0,u.E,[i.h,i.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),i.ob(36,0,null,null,2,"div",[["class","esqueci-senha"],["text-center",""]],null,null,null,null,null)),(n()(),i.ob(37,0,null,null,1,"a",[["href","javascript:;"]],null,[[null,"click"]],function(n,l,e){var i=!0;return"click"===l&&(i=!1!==n.component.solicitarResetSenha()&&i),i},null,null)),(n()(),i.Cb(-1,null,["Esqueci minha senha"])),(n()(),i.ob(39,0,null,0,3,"div",[["text-center",""]],null,null,null,null,null)),(n()(),i.ob(40,0,null,null,2,"ion-button",[["color","primary"],["size","large"],["type","submit"]],null,null,null,c.u,c.b)),i.nb(41,49152,null,0,u.i,[i.h,i.k],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(n()(),i.Cb(-1,0,["Entrar"]))],function(n,l){var e=l.component;n(l,17,0,""),n(l,21,0,"usuario",e.frmLogin.usuario),n(l,24,0,"usuario","Usu\xe1rio","","text"),n(l,28,0,""),n(l,32,0,"senha",e.frmLogin.senha),n(l,35,0,"senha","Senha","","password"),n(l,41,0,"primary","large","submit")},function(n,l){n(l,1,0,i.yb(l,5).ngClassUntouched,i.yb(l,5).ngClassTouched,i.yb(l,5).ngClassPristine,i.yb(l,5).ngClassDirty,i.yb(l,5).ngClassValid,i.yb(l,5).ngClassInvalid,i.yb(l,5).ngClassPending),n(l,16,0,i.yb(l,17).required?"":null,i.yb(l,23).ngClassUntouched,i.yb(l,23).ngClassTouched,i.yb(l,23).ngClassPristine,i.yb(l,23).ngClassDirty,i.yb(l,23).ngClassValid,i.yb(l,23).ngClassInvalid,i.yb(l,23).ngClassPending),n(l,27,0,i.yb(l,28).required?"":null,i.yb(l,34).ngClassUntouched,i.yb(l,34).ngClassTouched,i.yb(l,34).ngClassPristine,i.yb(l,34).ngClassDirty,i.yb(l,34).ngClassValid,i.yb(l,34).ngClassInvalid,i.yb(l,34).ngClassPending)})}function f(n){return i.Db(0,[(n()(),i.ob(0,0,null,null,1,"app-login",[],null,null,null,m,p)),i.nb(1,114688,null,0,a,[u.Db,t.a,b.m,o.a,h.b],null,null)],function(n,l){n(l,1,0)},null)}var v=i.kb("app-login",a,f,{},{},[]),C=e("Ip0R");e.d(l,"LoginPageModuleNgFactory",function(){return y});var y=i.lb(s,[],function(n){return i.vb([i.wb(512,i.j,i.ab,[[8,[g.a,v]],[3,i.j],i.x]),i.wb(4608,C.j,C.i,[i.u,[2,C.p]]),i.wb(4608,d.m,d.m,[]),i.wb(4608,u.b,u.b,[i.z,i.g]),i.wb(4608,u.Fb,u.Fb,[u.b,i.j,i.q,C.c]),i.wb(4608,u.Ib,u.Ib,[u.b,i.j,i.q,C.c]),i.wb(1073742336,C.b,C.b,[]),i.wb(1073742336,d.k,d.k,[]),i.wb(1073742336,d.b,d.b,[]),i.wb(1073742336,u.Bb,u.Bb,[]),i.wb(1073742336,b.n,b.n,[[2,b.t],[2,b.m]]),i.wb(1073742336,s,s,[]),i.wb(1024,b.k,function(){return[[{path:"",component:a}]]},[])])})}}]);