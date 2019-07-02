import { Component } from '@angular/core';

import { Platform, ModalController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TbUsuarioService } from './TbUsuario/tb-usuario.service';
import { Router } from  "@angular/router";
import { TbPaiLocalizacaoService } from './TbPaiLocalizacao/tb-pai-localizacao.service';
import { CadTemporarioPage } from './cad-temporario/cad-temporario.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public isTemporario: boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public TbUsuarioServ: TbUsuarioService,
    private router: Router,
    public TbPaiLocalizacao: TbPaiLocalizacaoService,
    public modalController: ModalController,
    public storage: Storage,
    public events: Events,
    public TbUsuario: TbUsuarioService,
  ) {
    this.initializeApp();
    events.subscribe('entrouViewHomeIndex', () => {
      this.isTemporario = true;

      this.TbUsuario.getDadosLogin().then((vLoginInfo:any) => {
        this.isTemporario  = vLoginInfo.is_temporario;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logoff(){
    this.TbUsuarioServ.limparDadosLogin();
    this.router.navigate(['/']);
  }

  menuEstouChegando(){
    this.TbPaiLocalizacao.execEstouChegando(false);
  }

  menuEstouChegandoProblema(){
    this.TbPaiLocalizacao.execEstouChegando(true);
  }

  async menuCadTemporario(){
    const modal = await this.modalController.create({
      component: CadTemporarioPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
