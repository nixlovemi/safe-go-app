(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VrWe:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("mrSG"),t=u("ZZ/e"),i=u("7S5c"),a=u("UuDV"),r=u("lg5q"),c=u("tdU5"),s=function(){function l(l,n,u,o,e,t,i,a,r){this.menu=l,this.router=n,this.storage=u,this.utils=o,this.TbPaiLocalizacao=e,this.modalController=t,this.popoverController=i,this.events=a,this.TbUsuario=r,this.qrCode=null,this.nomeUser=null,this.validadeUser=null,this.logoUrl=null,this.isTemporario=!0,this.colSize=0}return l.prototype.ngOnInit=function(){this.logoUrl="../../assets/logo-go.jpeg"},l.prototype.ionViewDidEnter=function(){var l=this;this.TbUsuario.getDadosLogin().then(function(n){""!=n.id?(l.nomeUser=n.nome,l.validadeUser=l.utils.formatDate(n.validade,"DD/MM/YYYY HH:MI"),l.qrCode=n.qr_code,l.isTemporario=n.is_temporario,l.colSize=l.isTemporario?6:4,l.events.publish("entrouViewHomeIndex")):l.router.navigate(["/homeIndex"])}).catch(function(n){l.router.navigate(["/homeIndex"])})},l.prototype.estouChegando=function(l){void 0===l&&(l=!1),this.TbPaiLocalizacao.execEstouChegando(l)},l.prototype.cadTemporario=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:c.a,componentProps:{value:123}})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},l.prototype.openMenu=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return this.menu.open("menu-principal"),[2]})})},l}(),b=function(){return function(){}}(),d=u("pMnS"),p=u("oBZk"),h=u("JJ7l"),m=o.mb({encapsulation:2,styles:[],data:{}});function g(l){return o.Db(2,[],null,null)}var f=u("Ip0R"),v=u("ZYCi"),k=u("iw74"),C=o.mb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]{margin-bottom:30px}#qr-holder[_ngcontent-%COMP%]{width:100%;text-align:center}#qr-code[_ngcontent-%COMP%]{display:inline-block}#title[_ngcontent-%COMP%]{font-size:16px}#validade-new[_ngcontent-%COMP%]{color:#ccc;font-size:11px}.img-logo-new[_ngcontent-%COMP%]{position:relative;left:-8px}.user-validade[_ngcontent-%COMP%]{position:relative;left:8px}#userName[_ngcontent-%COMP%]{font-size:14px;margin:0 0 3px}#userValidade[_ngcontent-%COMP%]{margin:0;font-size:11px;color:#ccc}.vertical[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}div.vertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:5px;font-size:12px}div.vertical[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:22px}ion-button.vertical[_ngcontent-%COMP%]{height:100px}#btn-chegando[_ngcontent-%COMP%]{background-color:#5b9cb9}#btn-problema[_ngcontent-%COMP%]{background-color:#615f64}#btn-login-temp[_ngcontent-%COMP%]{background-color:#771222}"]],data:{}});function x(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,8,"ion-button",[["class","vertical"],["color","*"],["expand","block"],["fill","solid"],["id","btn-login-temp"],["size","large"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.cadTemporario()&&o),o},p.u,p.b)),o.nb(1,49152,null,0,t.j,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),(l()(),o.ob(2,0,null,0,6,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),o.ob(3,0,null,null,1,"ion-icon",[["class","icon"],["name","person-add"],["slot","start"]],null,null,null,p.B,p.i)),o.nb(4,49152,null,0,t.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.ob(5,0,null,null,3,"span",[["class",""]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["Login"])),(l()(),o.ob(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Cb(-1,null,["Tempor\xe1rio"]))],function(l,n){l(n,1,0,"*","block","solid","large"),l(n,4,0,"person-add")},null)}function w(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,18,"ion-header",[],null,null,null,p.A,p.h)),o.nb(1,49152,null,0,t.A,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,16,"ion-toolbar",[],null,null,null,p.L,p.s)),o.nb(3,49152,null,0,t.Ab,[o.h,o.k],null,null),(l()(),o.ob(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.v,p.c)),o.nb(5,49152,null,0,t.k,[o.h,o.k],null,null),(l()(),o.ob(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openMenu()&&o),o},p.u,p.b)),o.nb(7,49152,null,0,t.j,[o.h,o.k],null,null),(l()(),o.ob(8,0,null,0,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,p.B,p.i)),o.nb(9,49152,null,0,t.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.ob(10,0,null,0,2,"ion-thumbnail",[["class","logo-top"],["slot","end"]],null,null,null,p.J,p.q)),o.nb(11,49152,null,0,t.xb,[o.h,o.k],null,null),(l()(),o.ob(12,0,null,0,0,"img",[["class","img-logo-new"],["src","../../assets/avatar.png"]],null,null,null,null,null)),(l()(),o.ob(13,0,null,0,5,"ion-label",[["class","sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated user-validade"]],null,null,null,p.E,p.l)),o.nb(14,49152,null,0,t.M,[o.h,o.k],null,null),(l()(),o.ob(15,0,null,0,1,"h3",[["id","title"]],null,null,null,null,null)),(l()(),o.Cb(16,null,["",""])),(l()(),o.ob(17,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Cb(18,null,["Validade: ",""])),(l()(),o.ob(19,0,null,null,36,"ion-content",[],null,null,null,p.x,p.e)),o.nb(20,49152,null,0,t.t,[o.h,o.k],null,null),(l()(),o.ob(21,0,null,0,6,"ion-row",[["style","margin-bottom: 30px;"]],null,null,null,p.I,p.p)),o.nb(22,49152,null,0,t.hb,[o.h,o.k],null,null),(l()(),o.ob(23,0,null,0,4,"ion-col",[["size","12"]],null,null,null,p.w,p.d)),o.nb(24,49152,null,0,t.s,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.ob(25,0,null,0,2,"div",[["id","qr-holder"]],null,null,null,null,null)),(l()(),o.ob(26,0,null,null,1,"qrcode",[["id","qr-code"]],null,null,null,g,m)),o.nb(27,638976,null,0,h.a,[o.k],{level:[0,"level"],qrdata:[1,"qrdata"],size:[2,"size"]},null),(l()(),o.ob(28,0,null,0,27,"ion-row",[],null,null,null,p.I,p.p)),o.nb(29,49152,null,0,t.hb,[o.h,o.k],null,null),(l()(),o.ob(30,0,null,0,10,"ion-col",[],null,null,null,p.w,p.d)),o.nb(31,49152,null,0,t.s,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.ob(32,0,null,0,8,"ion-button",[["class","vertical"],["color","*"],["expand","block"],["fill","solid"],["id","btn-chegando"],["size","large"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.estouChegando(!1)&&o),o},p.u,p.b)),o.nb(33,49152,null,0,t.j,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),(l()(),o.ob(34,0,null,0,6,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),o.ob(35,0,null,null,1,"ion-icon",[["class","icon"],["name","pin"],["slot","start"]],null,null,null,p.B,p.i)),o.nb(36,49152,null,0,t.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.ob(37,0,null,null,3,"span",[["class",""]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["Estou"])),(l()(),o.ob(39,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Cb(-1,null,["chegando"])),(l()(),o.ob(41,0,null,0,10,"ion-col",[],null,null,null,p.w,p.d)),o.nb(42,49152,null,0,t.s,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.ob(43,0,null,0,8,"ion-button",[["class","vertical"],["color","*"],["expand","block"],["fill","solid"],["id","btn-problema"],["size","large"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.estouChegando(!0)&&o),o},p.u,p.b)),o.nb(44,49152,null,0,t.j,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),(l()(),o.ob(45,0,null,0,6,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),o.ob(46,0,null,null,1,"ion-icon",[["class","icon"],["name","alert"],["slot","start"]],null,null,null,p.B,p.i)),o.nb(47,49152,null,0,t.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.ob(48,0,null,null,3,"span",[["class",""]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["Estou com"])),(l()(),o.ob(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Cb(-1,null,["problema"])),(l()(),o.ob(52,0,null,0,3,"ion-col",[],null,null,null,p.w,p.d)),o.nb(53,49152,null,0,t.s,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.fb(16777216,null,0,1,null,x)),o.nb(55,16384,null,0,f.h,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,"menu"),l(n,24,0,"12"),l(n,27,0,"M",u.qrCode,300),l(n,31,0,o.qb(1,"",u.colSize,"")),l(n,33,0,"*","block","solid","large"),l(n,36,0,"pin"),l(n,42,0,o.qb(1,"",u.colSize,"")),l(n,44,0,"*","block","solid","large"),l(n,47,0,"alert"),l(n,53,0,o.qb(1,"",u.colSize,"")),l(n,55,0,!u.isTemporario)},function(l,n){var u=n.component;l(n,16,0,u.nomeUser),l(n,18,0,u.validadeUser)})}function z(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,1,"app-home-index",[],null,null,null,w,C)),o.nb(1,114688,null,0,s,[t.Fb,v.m,k.b,i.a,a.a,t.Gb,t.Jb,t.d,r.a],null,null)],function(l,n){l(n,1,0)},null)}var M=o.kb("app-home-index",s,z,{},{},[]),P=u("gIcY"),_=u("k2u+");u.d(n,"HomeIndexPageModuleNgFactory",function(){return O});var O=o.lb(b,[],function(l){return o.vb([o.wb(512,o.j,o.ab,[[8,[d.a,M]],[3,o.j],o.x]),o.wb(4608,f.j,f.i,[o.u,[2,f.p]]),o.wb(4608,P.m,P.m,[]),o.wb(4608,t.b,t.b,[o.z,o.g]),o.wb(4608,t.Gb,t.Gb,[t.b,o.j,o.q,f.c]),o.wb(4608,t.Jb,t.Jb,[t.b,o.j,o.q,f.c]),o.wb(1073742336,f.b,f.b,[]),o.wb(1073742336,P.k,P.k,[]),o.wb(1073742336,P.b,P.b,[]),o.wb(1073742336,t.Cb,t.Cb,[]),o.wb(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),o.wb(1073742336,_.a,_.a,[]),o.wb(1073742336,b,b,[]),o.wb(1024,v.k,function(){return[[{path:"",component:s}]]},[])])})}}]);