import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { UtilsService } from '../utils.service';
import { TbUsuarioService } from '../TbUsuario/tb-usuario.service';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  frmLogin = {
    usuario: '',
    senha: ''
  };

  constructor(
    public loadingCtr: LoadingController,
    public utils: UtilsService,
    private router: Router,
    public TbUsuario: TbUsuarioService,
    private storage: Storage
  ) {
    moment.locale('pt-BR');
  }

  ngOnInit() { }

  ionViewWillEnter(){
    this.TbUsuario.getDadosLogin().then((vLoginInfo:any) => {
      var vLogin         = vLoginInfo.login;
      var vSenha         = vLoginInfo.senha;

      if(vLogin != '' && vSenha != ""){
        this.login(false, vLogin, vSenha);
      } else {
        this.TbUsuario.limparDadosLogin();
      }
    })
    .catch((err) => {
      this.TbUsuario.limparDadosLogin();
      this.router.navigate(['/login']);
    });
  }

  login(form=true, usuario='', senha=''){
    this.loadingCtr.create({
      message: 'Carregando / Loading',
      spinner: 'dots',
    }).then((res) => {
      res.present();

      let vUsuario = '';
      let vSenha   = '';

      if(form){
        vUsuario = this.frmLogin.usuario.trim();
        vSenha   = this.frmLogin.senha.trim();
      } else {
        vUsuario = usuario;
        vSenha   = senha;
      }

      if(vUsuario == '' || vSenha == ''){

        if(form){
          this.utils.showAlert('Erro! / Error!', '', 'Preencha todas as informações antes de prosseguir. / Fill in all the information before proceeding.', ['OK']);
        }
        res.dismiss();

      } else {

        this.TbUsuario.verificaLogin(vUsuario, vSenha).then((response) => {

          res.dismiss();

          let vObjPai = JSON.parse(response + '');

          let vValidade    = moment(vObjPai.pai_validade);
          let vHoje        = moment();
          let vDifValidade = vValidade.diff(vHoje, 'minutes');
          if(vDifValidade < 0){
            res.dismiss();
            this.utils.showAlert('Alerta! / Alert!', '', 'Seu login era válido até ' + vValidade.format('DD/MM/YYYY HH:mm') + '. Entre em contato com a escola. / Your login was valid until ' + vValidade.format('DD/MM/YYYY HH:mm') + '. Please contact the school.', ['OK']);
            return;
          }

          this.TbUsuario.preencheDadosLogin(
            vObjPai.pai_id,
            vUsuario,
            vSenha,
            vObjPai.pai_nome,
            vObjPai.pai_qr,
            vObjPai.pai_validade,
            vObjPai.pai_id_solicitacao,
            vObjPai.pai_aprovado,
            vObjPai.pai_id_solicitacao > 0
          );

          this.router.navigate(['/home']);

        }).catch((err) => {
          if(!form){
            var erroInternet = (typeof err.ok !== 'undefined') ? !err.ok: false;

            if(erroInternet){
              // sem internet
              if(vUsuario != '' && vSenha != ''){
                console.log(2);
                this.router.navigate(['/home']);
              }
            }
            res.dismiss();
          } else {
            res.dismiss();
            this.utils.showAlert('Erro! / Error!', '', err, ['OK']);
          }
        });
      }

      res.onDidDismiss().then((dis) => { });
    });
  }

  solicitarResetSenha(){
    this.loadingCtr.create({
      message: 'Carregando / Loading',
      spinner: 'dots',
    }).then((res) => {
      res.present();

      let vUsuario = this.frmLogin.usuario.trim();
      this.TbUsuario.solicitaSenha(vUsuario).then((response) => {

        res.dismiss();
        this.utils.showAlert('Sucesso! / Success!', '', response, ['OK']);

      }).catch((err) => {

        res.dismiss();
        this.utils.showAlert('Erro! / Error!', '', err, ['OK']);

      });

      res.onDidDismiss().then((dis) => { });
    });
  }

}
