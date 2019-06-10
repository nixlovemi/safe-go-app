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
  vTeste = '';

  constructor(
    public loadingCtr: LoadingController,
    public utils: UtilsService,
    private router: Router,
    public TbUsuarioServ: TbUsuarioService,
    private storage: Storage
  ) {
    moment.locale('pt-BR');
  }

  ngOnInit() {
    this.storage.get('login').then((vLogin) => {
      if(vLogin != ''){
        this.storage.get('senha').then((vSenha) => {
          this.login(false, vLogin, vSenha);
        });
      } else {
        this.TbUsuarioServ.limparDadosLogin();
      }
    })
    .catch((error) => {
      this.utils.showAlert('Erro!', '', 'Erro ao acessar aplicativo. Msg: ' + error, ['OK']);
      this.TbUsuarioServ.limparDadosLogin();
      this.router.navigate(['/']);
    });
  }

  login(form=true, usuario='', senha=''){
    this.loadingCtr.create({
      message: 'Carregando',
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
        if(!form){
          return;
        }
        res.dismiss();
        this.utils.showAlert('Erro!', '', 'Preencha todas as informações antes de prosseguir.', ['OK']);

      } else {

        this.TbUsuarioServ.verificaLogin(vUsuario, vSenha).then((response) => {

          res.dismiss();

          let vObjPai = JSON.parse(response + '');

          let vValidade    = moment(vObjPai.pai_validade);
          let vHoje        = moment();
          let vDifValidade = vValidade.diff(vHoje, 'minutes');
          if(vDifValidade < 0){
            res.dismiss();
            this.utils.showAlert('Alerta!', '', 'Seu login era válido até ' + vValidade.format('DD/MM/YYYY HH:mm') + '. Entre em contato com a escola.', ['OK']);
            return;
          }

          this.storage.set('id', vObjPai.pai_id);
          this.storage.set('login', vUsuario);
          this.storage.set('senha', vSenha);
          this.storage.set('nome', vObjPai.pai_nome);
          this.storage.set('qr-code', vObjPai.pai_qr);
          this.storage.set('validade', vObjPai.pai_validade);
          this.storage.set('id_solicitacao', vObjPai.pai_id_solicitacao);
          this.storage.set('aprovado', vObjPai.pai_aprovado);
          this.storage.set('isTemporario', vObjPai.pai_id_solicitacao > 0);

          this.router.navigate(['/home']);

        }).catch((err) => {

          if(!form){
            if(err instanceof ProgressEvent){
              // sem internet dá esse erro: err instanceof ProgressEvent
              res.dismiss();
              this.router.navigate(['/home']);
            }
          } else {
            res.dismiss();
            this.utils.showAlert('Erro!', '', err, ['OK']);
          }
        });
      }

      res.onDidDismiss().then((dis) => { });
    });
  }

  solicitarResetSenha(){
    this.loadingCtr.create({
      message: 'Carregando',
      spinner: 'dots',
    }).then((res) => {
      res.present();

      let vUsuario = this.frmLogin.usuario.trim();
      this.TbUsuarioServ.solicitaSenha(vUsuario).then((response) => {

        res.dismiss();
        this.utils.showAlert('Sucesso!', '', response, ['OK']);

      }).catch((err) => {

        res.dismiss();
        this.utils.showAlert('Erro!', '', err, ['OK']);

      });

      res.onDidDismiss().then((dis) => { });
    });
  }

}
