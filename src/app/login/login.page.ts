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
        this.TbUsuarioServ.getAll()
        .then((response) => {
          res.dismiss();

          this.storage.set('id', '1');
          this.storage.set('login', 'nixlovemi@gmail.com');
          this.storage.set('nome', 'Leandro Parra');
          this.storage.set('qr-code', '1-nixlovemi@gmail.com');
          this.storage.set('validade', '2019-12-31T23:59:00.000Z');

          this.router.navigate(['/homeIndex']);

          //console.log(response);
          /*let error     = response["error"];
          let usu_id    = response["usu_id"];
          let usu_nome  = response["usu_nome"];
          let usu_email = response["usu_email"];
          let usu_ativo = response["usu_ativo"];

          if(error == true || usu_ativo == false){
            this.utils.showAlert('Erro!', '', 'Usuário ou senha inválidos!', ['OK']);
          } else {
            this.router.navigate(['/homeIndex/page-inicio']);
          }*/
        })
        .catch((err) => {
          res.dismiss();

          this.utils.showAlert('Erro!', '', 'Erro ao fazer login. Mensagem:' + err, ['OK']);
        });
      }

      res.onDidDismiss().then((dis) => { });
    });
  }

}
