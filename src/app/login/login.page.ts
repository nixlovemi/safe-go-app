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
    this.storage.set('id', '');
    this.storage.set('login', '');
    this.storage.set('nome', '');
    this.storage.set('qr-code', '');
    this.storage.set('validade', '');
    this.storage.set('id_solicitacao', '');
    this.storage.set('aprovado', '');
    this.storage.set('isTemporario', true);
  }

  login(){
    this.loadingCtr.create({
      message: 'Carregando',
      spinner: 'dots',
    }).then((res) => {
      res.present();

      let vUsuario = this.frmLogin.usuario.trim();
      let vSenha   = this.frmLogin.senha.trim();

      if(vUsuario == '' || vSenha == ''){

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
          this.storage.set('nome', vObjPai.pai_nome);
          this.storage.set('qr-code', vObjPai.pai_qr);
          this.storage.set('validade', vObjPai.pai_validade);
          this.storage.set('id_solicitacao', vObjPai.pai_id_solicitacao);
          this.storage.set('aprovado', vObjPai.pai_aprovado);
          this.storage.set('isTemporario', vObjPai.pai_id_solicitacao > 0);

          this.router.navigate(['/homeIndex']);

        }).catch((err) => {

          res.dismiss();
          this.utils.showAlert('Erro!', '', err, ['OK']);

        });
      }

      res.onDidDismiss().then((dis) => { });
    });
  }

}
