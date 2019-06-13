import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';
import { AppkeyService } from '../appkey.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TbUsuarioService {
  wsPath = '';
  appKey = '';

  constructor(
    public utils: UtilsService,
    public http: Http,
    public appkeyServ: AppkeyService,
    private storage: Storage,
    private router: Router,
  ) {
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
        /*
        {"_body":{"isTrusted":true},"status":0,"ok":false,"statusText":"","headers":{},"type":3,"url":null}
        */

        //reject(error.json());
        reject(error);
      });
    });
  }

  cadastraLoginTemp(usuario, senha, nome, validade){
    return new Promise(
    (resolve, reject) => {
      this.storage.get('id').then((pai_id) => {

        let url      = this.utils.getWsPath() + '/Pai/cadLoginTemporario'
        let postData = {
          'appkey'         : this.appKey,
          'login'          : usuario,
          'senha'          : senha,
          'nome'           : nome,
          'validade'       : validade,
          'id_solicitacao' : pai_id,
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

      }).catch((error) => {
        this.utils.showAlert('Erro!', '', 'Erro ao buscar usuário logado. Faça o login novamente!', ['OK']);
        this.router.navigate(['/homeIndex']);
      });

    });
  }

  solicitaSenha(usuario){
    return new Promise(
    (resolve, reject) => {

      let url      = this.utils.getWsPath() + '/Pai/solicitaResetSenha'
      let postData = {
        'appkey'         : this.appKey,
        'login'          : usuario,
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

  limparDadosLogin(){
    this.storage.set('id', '');
    this.storage.set('login', '');
    this.storage.set('senha', '');
    this.storage.set('nome', '');
    this.storage.set('qr-code', '');
    this.storage.set('validade', '');
    this.storage.set('id_solicitacao', '');
    this.storage.set('aprovado', '');
    this.storage.set('isTemporario', true);
  }
}
