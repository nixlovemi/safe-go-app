import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';
import { AppkeyService } from '../appkey.service';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TbPaiLocalizacaoService {
  wsPath = '';
  appKey = '';

  constructor(
    public utils: UtilsService,
    public http: Http,
    public appkeyServ: AppkeyService,
    private geolocation: Geolocation,
    private storage: Storage,
    private router: Router,
  ) {
    this.wsPath = this.utils.getWsPath();
    this.appKey = this.appkeyServ.getAppKey();
  }

  gravaLocalizacao(pai_id, latitude, longitude, problema){
    return new Promise(
    (resolve, reject) => {
      let url      = this.utils.getWsPath() + '/PaiLocalizacao/estouChegando'
      let postData = {
        'appkey'    : this.appKey,
        'pai_id'    : pai_id,
        'latitude'  : latitude,
        'longitude' : longitude,
        'problema'  : problema,
      };

      this.http.post(url, postData)
      .subscribe((result: any) => {
        let jsonRet = result.json();
        let msg     = jsonRet.msg;
        let erro    = jsonRet.erro;

        if(erro == true){
          reject(msg);
        } else {
          resolve(msg);
        }
      },
      (error) => {
        reject(error.json());
      });
    });
  }

  execEstouChegando(problema){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.storage.get('id').then((pai_id) => {

        this.gravaLocalizacao(pai_id, resp.coords.latitude, resp.coords.longitude, problema).then((msg) => {
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
}
