import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TbUsuarioService {
  wsPath = '';

  constructor(public utils: UtilsService, public http: Http) {
    this.wsPath = this.utils.getWsPath();
  }

  getAll(){
    return new Promise(
      (resolve, reject) => {
        let url = this.wsPath + '/db';

        this.http.get(url)
          .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });

        /*let ret = this.httpClient.get('https://swapi.co/api/films');
        resolve(ret);*/

        /*var httpOptions = {
          headers: new HttpHeaders({
            'cache-control' : 'no-cache',
            'x-apikey'      : '5cec44845f86251ddebe1b1d'
          })
        };*/

        /*var link   = this.wsPath + '/tb-usuario';

        this.http.get(link)
        .subscribe(data => {
          let jsonRet;
          jsonRet = JSON.parse(data["_body"]);

          resolve(jsonRet);
        }, error => {
          reject('Erro ao pegar todos os usuários! Erro:' + error);
        });*/
      }
    );
  }
}
