import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { TbUsuarioService } from '../TbUsuario/tb-usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cad-temporario',
  templateUrl: './cad-temporario.page.html',
  styleUrls: ['./cad-temporario.page.scss'],
})
export class CadTemporarioPage implements OnInit {
  currentDate = '';
  maxDate     = '';
  frmCadTemp = {
    usuario: '',
    senha: '',
    nome: '',
    validade: ''
  };

  constructor(
    public modalController: ModalController,
    public utils: UtilsService,
    public TbUsuarioServ: TbUsuarioService,
  ) {
    let momentToday  = moment();
    let today        = momentToday.toISOString();
    this.currentDate = this.utils.formatDate(today, 'YYYY-MM-DD');
    this.maxDate     = momentToday.add(1, 'M').toISOString();
  }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

  postCadTemporario(){

    this.TbUsuarioServ.cadastraLoginTemp(
      this.frmCadTemp.usuario,
      this.frmCadTemp.senha,
      this.frmCadTemp.nome,
      this.utils.formatDate(this.frmCadTemp.validade, 'YYYY-MM-DD HH:MI')
    ).then((msg) => {

      this.utils.showAlert('Sucesso!', '', msg, ['OK']);
      this.closeModal();

    }).catch((error) => {

      this.utils.showAlert('Erro!', '', 'Erro ao cadastrar login temporário. Msg: ' + error, ['OK']);

    });
  }

  clearInput(element){
    this.frmCadTemp[element] = '';
  }
}
