import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, PopoverController, Events } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UtilsService } from '../utils.service';
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
  public isTemporario: boolean = true;
  public colSize = 0;

  constructor(
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    public utils: UtilsService,
    public TbPaiLocalizacao: TbPaiLocalizacaoService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public events: Events,
  ) { }

  ngOnInit() {
    this.logoUrl = '../../assets/logo-go.jpeg';
  }

  ionViewDidEnter(){
    this.storage.get('id').then((pai_id) => {
      if(pai_id == ''){
        this.router.navigate(['/homeIndex']);
      } else {
        this.storage.get('nome').then((pai_nome) => {
          this.storage.get('validade').then((pai_validade) => {
            this.storage.get('qr-code').then((pai_qrcode) => {
              this.storage.get('isTemporario').then((pai_istemporario) => {
                this.nomeUser     = pai_nome;
                this.validadeUser = this.utils.formatDate(pai_validade, 'DD/MM/YYYY HH:MI');
                this.qrCode       = pai_qrcode;
                this.isTemporario = pai_istemporario;

                console.log( this.isTemporario );
                if(this.isTemporario){
                  this.colSize = 6;
                } else {
                  this.colSize = 4;
                }

                this.events.publish('entrouViewHomeIndex');
              });
            });
          });
        });
      }
    }).catch((error) => {
      this.utils.showAlert('Erro!', '', 'Erro ao acessar aplicativo. Msg: ' + error, ['OK']);
      this.router.navigate(['/homeIndex']);
    });
  }

  estouChegando(problema=false){
    this.TbPaiLocalizacao.execEstouChegando(problema);
  }

  async cadTemporario(){
    const modal = await this.modalController.create({
      component: CadTemporarioPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async openMenu(){
    this.menu.open('menu-principal');
  }
}
