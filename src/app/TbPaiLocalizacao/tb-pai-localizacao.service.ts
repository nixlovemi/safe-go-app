import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';
import { AppkeyService } from '../appkey.service';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { Router, RouterEvent } from '@angular/router';
import { TbUsuarioService } from '../TbUsuario/tb-usuario.service';

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
    public TbUsuario: TbUsuarioService,
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
      this.TbUsuario.getDadosLogin().then((vLoginInfo:any) => {
        if(vLoginInfo.id != ""){
          this.gravaLocalizacao(vLoginInfo.id, resp.coords.latitude, resp.coords.longitude, problema).then((msg) => {
            this.utils.showAlert('Sucesso! / Success!', '', msg, ['OK']);
          }).catch((error) => {
            this.utils.showAlert('Erro! / Error!', '', 'Erro ao enviar sua localização. / Error sending your location.', ['OK']);
          });
        } else {
          this.utils.showAlert('Erro! / Error!', '', 'Erro ao buscar usuário logado. Faça o login novamente! / Error searching logged in user. Please login again!', ['OK']);
          this.router.navigate(['/homeIndex']);
        }
      })
      .catch((err) => {
        this.router.navigate(['/homeIndex']);
      });
    }).catch((error) => {
      this.utils.showAlert('Erro! / Error!', '', 'Não conseguimos receber sua localização. / We could not receive your location.', ['OK']);
    });
  }
}
