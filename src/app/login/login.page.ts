import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { UtilsService } from '../utils.service';
import { TbUsuarioService } from '../TbUsuario/tb-usuario.service';
import { Storage } from '@ionic/storage';

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
  ) { }

  ngOnInit() {
    this.storage.set('id', '');
    this.storage.set('login', '');
    this.storage.set('nome', '');
    this.storage.set('qr-code', '');
    this.storage.set('validade', '');
    this.storage.set('id_solicitacao', '');
    this.storage.set('aprovado', '');
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

          this.storage.set('id', vObjPai.pai_id);
          this.storage.set('login', vUsuario);
          this.storage.set('nome', vObjPai.pai_nome);
          this.storage.set('qr-code', vObjPai.pai_qr);
          this.storage.set('validade', vObjPai.pai_validade);
          this.storage.set('id_solicitacao', vObjPai.pai_id_solicitacao);
          this.storage.set('aprovado', vObjPai.pai_aprovado);

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
