import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UtilsService } from '../utils.service';

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

  constructor(
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    public utils: UtilsService,
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
      }
    }).catch((error) => {
      this.utils.showAlert('Erro!', '', 'Erro ao acessar aplicativo. Msg: ' + error, ['OK']);
      this.router.navigate(['/homeIndex']);
    });
  }

  ngOnInit() {
  }

}
