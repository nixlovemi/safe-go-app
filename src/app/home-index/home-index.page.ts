import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, PopoverController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UtilsService } from '../utils.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TbPaiLocalizacaoService } from '../TbPaiLocalizacao/tb-pai-localizacao.service';
import { CadTemporarioPage } from '../cad-temporario/cad-temporario.page';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.page.html',
  styleUrls: ['./home-index.page.scss'],
})
export class HomeIndexPage implements OnInit {
  public qrCode: string = null;
  public nomeUser: string = null;
  public validadeUser: string = null;
  public logoUrl: string = null;
  public isTemporario: true;

  constructor(
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    public utils: UtilsService,
    private geolocation: Geolocation,
    public TbPaiLocalizacao: TbPaiLocalizacaoService,
    public modalController: ModalController,
    public popoverController: PopoverController,
  ) {
    this.storage.get('id').then((pai_id) => {
      if(pai_id == ''){
        this.router.navigate(['/homeIndex']);
      } else {
        this.logoUrl = '../../assets/logo-go.jpeg';

        this.storage.get('nome').then((val) => {
          this.nomeUser = val;
        });
        this.storage.get('validade').then((val) => {
          this.validadeUser = this.utils.formatDate(val, 'DD/MM/YYYY HH:MI');
        });
        this.storage.get('qr-code').then((val) => {
          this.qrCode = val;
        });
        this.storage.get('isTemporario').then((val) => {
          this.isTemporario = val;
        });
      }
    }).catch((error) => {
      this.utils.showAlert('Erro!', '', 'Erro ao acessar aplicativo. Msg: ' + error, ['OK']);
      this.router.navigate(['/homeIndex']);
    });
  }

  ngOnInit() {
  }

  estouChegando(problema=false){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.storage.get('id').then((pai_id) => {

        this.TbPaiLocalizacao.gravaLocalizacao(pai_id, resp.coords.latitude, resp.coords.longitude, problema).then((msg) => {
          this.utils.showAlert('Sucesso!', '', msg, ['OK']);
        }).catch((error) => {
          this.utils.showAlert('Erro!', '', 'Erro ao enviar sua localização. Msg: ' + error, ['OK']);
        });

      }).catch((error) => {

        this.utils.showAlert('Erro!', '', 'Erro ao buscar usuário logado. Faça o login novamente!', ['OK']);
        this.router.navigate(['/homeIndex']);

      });
    }).catch((error) => {

      this.utils.showAlert('Erro!', '', 'Não conseguimos receber sua localização. Msg: ' + error, ['OK']);

    });
  }

  async cadTemporario(){
    const modal = await this.modalController.create({
      component: CadTemporarioPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async showLogoff(){

  }
}
