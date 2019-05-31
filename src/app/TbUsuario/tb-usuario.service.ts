import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';
import { AppkeyService } from '../appkey.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TbUsuarioService {
  wsPath = '';
  appKey = '';

  constructor(public utils: UtilsService, public http: Http, public appkeyServ: AppkeyService) {
    this.wsPath = this.utils.getWsPath();
    this.appKey = this.appkeyServ.getAppKey();
  }

  verificaLogin(usuario, senha){
    return new Promise(
    (resolve, reject) => {
      let url      = this.utils.getWsPath() + '/Pai/verificaLogin'
      let postData = {
        'appkey'  : this.appKey,
        'usuario' : usuario,
        'senha'   : senha,
      };

      this.http.post(url, postData)
      .subscribe((result: any) => {
        let jsonRet = result.json();
        let msg     = jsonRet.msg;
        let erro    = jsonRet.erro;
        let jsonPai = jsonRet.Pai;

        if(erro == true){
          reject(msg);
        } else {
          resolve(jsonPai);
        }
      },
      (error) => {
        reject(error.json());
      });
    });
  }
}
