(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VrWe:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),e=o("mrSG"),t=o("ZZ/e"),i=o("7S5c"),s=o("UuDV"),r=o("lg5q"),a=o("tdU5"),c=function(){function l(l,n,o,u,e,t,i,s,r){this.menu=l,this.router=n,this.storage=o,this.utils=u,this.TbPaiLocalizacao=e,this.modalController=t,this.popoverController=i,this.events=s,this.TbUsuario=r,this.qrCode=null,this.nomeUser=null,this.validadeUser=null,this.logoUrl=null,this.isTemporario=!0}return l.prototype.ngOnInit=function(){this.logoUrl="../../assets/logo-go.jpeg"},l.prototype.ionViewDidEnter=function(){var l=this;this.TbUsuario.getDadosLogin().then(function(n){""!=n.id?(l.nomeUser=n.nome,l.validadeUser=l.utils.formatDate(n.validade,"DD/MM/YYYY"),l.qrCode=n.qr_code,l.isTemporario=n.is_temporario,l.events.publish("entrouViewHomeIndex")):l.router.navigate(["/homeIndex"])}).catch(function(n){l.router.navigate(["/homeIndex"])})},l.prototype.estouChegando=function(l){void 0===l&&(l=!1),this.TbPaiLocalizacao.execEstouChegando(l)},l.prototype.cadTemporario=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:a.a,componentProps:{value:123}})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},l.prototype.openMenu=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return this.menu.open("menu-principal"),[2]})})},l}(),b=function(){return function(){}}(),d=o("pMnS"),p=o("oBZk"),g=o("JJ7l"),h=u.mb({encapsulation:2,styles:[],data:{}});function m(l){return u.Db(2,[],null,null)}var v=o("ZYCi"),f=o("iw74"),k=u.mb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--min-height:68px}ion-content[_ngcontent-%COMP%]{--background:#30A1BA}.icon-menu[_ngcontent-%COMP%]{font-size:23px}#qr-holder[_ngcontent-%COMP%]{width:100%;text-align:center;padding:45px;background-color:#fff;border-radius:10px;border:2px solid #666}#qr-code[_ngcontent-%COMP%]{display:inline-block}#title[_ngcontent-%COMP%]{font-size:16px}#validade-new[_ngcontent-%COMP%]{color:#ccc;font-size:11px}.user-validade[_ngcontent-%COMP%]{position:relative;left:8px}#userName[_ngcontent-%COMP%]{font-size:14px;margin:0 0 3px}#userValidade[_ngcontent-%COMP%]{margin:0;font-size:11px;color:#ccc}div.vertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5%;font-size:12px;display:inline-block;vertical-align:middle}div.vertical[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:40px;vertical-align:middle}ion-button.vertical[_ngcontent-%COMP%]{--padding-top:10px;--padding-bottom:10px}#btn-chegando[_ngcontent-%COMP%]{--background:#cefecc;--color:#000;text-transform:lowercase;--border-radius:6px;--border-width:2px;--border-color:#666;--border-style:solid}#btn-problema[_ngcontent-%COMP%]{--background:#fed5d3;--color:#000;text-transform:lowercase;--border-radius:6px;--border-width:2px;--border-color:#666;--border-style:solid}.img-logo[_ngcontent-%COMP%]{width:55px}.user-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;font-size:30px;font-weight:700;text-transform:uppercase;letter-spacing:-2px}.user-valid[_ngcontent-%COMP%]{margin-top:0;font-size:14px;font-weight:300}.row-user-info[_ngcontent-%COMP%]{padding-top:21px;background-color:#fff;opacity:.95;margin-bottom:30px}.row-qr[_ngcontent-%COMP%]{--background:url('bg-principal.5b3a93db33fd33dff1eb.jpg') no-repeat center center/cover}"]],data:{}});function z(l){return u.Db(0,[(l()(),u.ob(0,0,null,null,10,"ion-header",[],null,null,null,p.z,p.h)),u.nb(1,49152,null,0,t.A,[u.h,u.k],null,null),(l()(),u.ob(2,0,null,0,8,"ion-toolbar",[],null,null,null,p.J,p.r)),u.nb(3,49152,null,0,t.Ab,[u.h,u.k],null,null),(l()(),u.ob(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.u,p.c)),u.nb(5,49152,null,0,t.k,[u.h,u.k],null,null),(l()(),u.ob(6,0,null,0,3,"ion-button",[["class","icon-menu"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.openMenu()&&u),u},p.t,p.b)),u.nb(7,49152,null,0,t.j,[u.h,u.k],null,null),(l()(),u.ob(8,0,null,0,1,"ion-icon",[["name","menu"],["src","../../assets/menu-icon.svg"]],null,null,null,p.A,p.i)),u.nb(9,49152,null,0,t.B,[u.h,u.k],{name:[0,"name"],src:[1,"src"]},null),(l()(),u.ob(10,0,null,0,0,"img",[["class","img-logo-new"],["src","../../assets/safe_go_logo_final-azul.png"]],null,null,null,null,null)),(l()(),u.ob(11,0,null,null,55,"ion-content",[["class","row-qr"]],null,null,null,p.w,p.e)),u.nb(12,49152,null,0,t.t,[u.h,u.k],null,null),(l()(),u.ob(13,0,null,0,10,"ion-row",[["class","row-user-info"]],null,null,null,p.H,p.p)),u.nb(14,49152,null,0,t.hb,[u.h,u.k],null,null),(l()(),u.ob(15,0,null,0,2,"ion-col",[["size","2"],["text-center",""]],null,null,null,p.v,p.d)),u.nb(16,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(17,0,null,0,0,"img",[["class","img-logo"],["src","../../assets/person-icon.png"]],null,null,null,null,null)),(l()(),u.ob(18,0,null,0,5,"ion-col",[["size","10"]],null,null,null,p.v,p.d)),u.nb(19,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(20,0,null,0,1,"h2",[["class","user-name"]],null,null,null,null,null)),(l()(),u.Cb(21,null,["",""])),(l()(),u.ob(22,0,null,0,1,"p",[["class","user-valid"]],null,null,null,null,null)),(l()(),u.Cb(23,null,["Validade/Expiry Date: ",""])),(l()(),u.ob(24,0,null,0,10,"ion-row",[],null,null,null,p.H,p.p)),u.nb(25,49152,null,0,t.hb,[u.h,u.k],null,null),(l()(),u.ob(26,0,null,0,1,"ion-col",[["size","1"]],null,null,null,p.v,p.d)),u.nb(27,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(28,0,null,0,4,"ion-col",[["class","col-qr-code"],["size","10"]],null,null,null,p.v,p.d)),u.nb(29,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(30,0,null,0,2,"div",[["id","qr-holder"]],null,null,null,null,null)),(l()(),u.ob(31,0,null,null,1,"qrcode",[["id","qr-code"]],null,null,null,m,h)),u.nb(32,638976,null,0,g.a,[u.k],{level:[0,"level"],qrdata:[1,"qrdata"],size:[2,"size"]},null),(l()(),u.ob(33,0,null,0,1,"ion-col",[["size","1"]],null,null,null,p.v,p.d)),u.nb(34,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(35,0,null,0,31,"ion-row",[],null,null,null,p.H,p.p)),u.nb(36,49152,null,0,t.hb,[u.h,u.k],null,null),(l()(),u.ob(37,0,null,0,1,"ion-col",[["size","1"]],null,null,null,p.v,p.d)),u.nb(38,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(39,0,null,0,11,"ion-col",[["size","5"]],null,null,null,p.v,p.d)),u.nb(40,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(41,0,null,0,9,"ion-button",[["class","vertical"],["expand","block"],["id","btn-chegando"],["size","large"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.estouChegando(!1)&&u),u},p.t,p.b)),u.nb(42,49152,null,0,t.j,[u.h,u.k],{expand:[0,"expand"],size:[1,"size"]},null),(l()(),u.ob(43,0,null,0,7,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),u.ob(44,0,null,null,1,"ion-icon",[["class","icon"],["name","pin"],["slot","start"],["src","../../assets/plane.svg"]],null,null,null,p.A,p.i)),u.nb(45,49152,null,0,t.B,[u.h,u.k],{name:[0,"name"],src:[1,"src"]},null),(l()(),u.ob(46,0,null,null,4,"span",[["class",""]],null,null,null,null,null)),(l()(),u.Cb(-1,null,[" Estou chegando"])),(l()(),u.ob(48,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ob(49,0,null,null,1,"span",[["style","color: #666;"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["I'm coming"])),(l()(),u.ob(51,0,null,0,13,"ion-col",[["size","5"]],null,null,null,p.v,p.d)),u.nb(52,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.ob(53,0,null,0,11,"ion-button",[["class","vertical"],["expand","block"],["id","btn-problema"],["size","large"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.estouChegando(!0)&&u),u},p.t,p.b)),u.nb(54,49152,null,0,t.j,[u.h,u.k],{expand:[0,"expand"],size:[1,"size"]},null),(l()(),u.ob(55,0,null,0,9,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),u.ob(56,0,null,null,1,"ion-icon",[["class","icon"],["name","pin"],["slot","start"],["src","../../assets/megaphone.svg"]],null,null,null,p.A,p.i)),u.nb(57,49152,null,0,t.B,[u.h,u.k],{name:[0,"name"],src:[1,"src"]},null),(l()(),u.ob(58,0,null,null,6,"span",[["class",""]],null,null,null,null,null)),(l()(),u.Cb(-1,null,[" Estou com"])),(l()(),u.ob(60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["problema "])),(l()(),u.ob(62,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ob(63,0,null,null,1,"span",[["style","color: #666;"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["I have a problem"])),(l()(),u.ob(65,0,null,0,1,"ion-col",[["size","1"]],null,null,null,p.v,p.d)),u.nb(66,49152,null,0,t.s,[u.h,u.k],{size:[0,"size"]},null)],function(l,n){var o=n.component;l(n,9,0,"menu","../../assets/menu-icon.svg"),l(n,16,0,"2"),l(n,19,0,"10"),l(n,27,0,"1"),l(n,29,0,"10"),l(n,32,0,"M",o.qrCode,300),l(n,34,0,"1"),l(n,38,0,"1"),l(n,40,0,"5"),l(n,42,0,"block","large"),l(n,45,0,"pin","../../assets/plane.svg"),l(n,52,0,"5"),l(n,54,0,"block","large"),l(n,57,0,"pin","../../assets/megaphone.svg"),l(n,66,0,"1")},function(l,n){var o=n.component;l(n,21,0,o.nomeUser),l(n,23,0,o.validadeUser)})}function x(l){return u.Db(0,[(l()(),u.ob(0,0,null,null,1,"app-home-index",[],null,null,null,z,k)),u.nb(1,114688,null,0,c,[t.Fb,v.m,f.b,i.a,s.a,t.Gb,t.Jb,t.d,r.a],null,null)],function(l,n){l(n,1,0)},null)}var C=u.kb("app-home-index",c,x,{},{},[]),w=o("Ip0R"),M=o("gIcY"),_=o("k2u+");o.d(n,"HomeIndexPageModuleNgFactory",function(){return P});var P=u.lb(b,[],function(l){return u.vb([u.wb(512,u.j,u.ab,[[8,[d.a,C]],[3,u.j],u.x]),u.wb(4608,w.j,w.i,[u.u,[2,w.p]]),u.wb(4608,M.m,M.m,[]),u.wb(4608,t.b,t.b,[u.z,u.g]),u.wb(4608,t.Gb,t.Gb,[t.b,u.j,u.q,w.c]),u.wb(4608,t.Jb,t.Jb,[t.b,u.j,u.q,w.c]),u.wb(1073742336,w.b,w.b,[]),u.wb(1073742336,M.k,M.k,[]),u.wb(1073742336,M.b,M.b,[]),u.wb(1073742336,t.Cb,t.Cb,[]),u.wb(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),u.wb(1073742336,_.a,_.a,[]),u.wb(1073742336,b,b,[]),u.wb(1024,v.k,function(){return[[{path:"",component:c}]]},[])])})}}]);