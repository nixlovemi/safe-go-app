import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';
import { AppkeyService } from '../appkey.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TbPaiLocalizacaoService {
  wsPath = '';
  appKey = '';

  constructor(public utils: UtilsService, public http: Http, public appkeyServ: AppkeyService) {
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
}
