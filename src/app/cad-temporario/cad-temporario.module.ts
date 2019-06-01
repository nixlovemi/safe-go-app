import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadTemporarioPage } from './cad-temporario.page';

const routes: Routes = [
  {
    path: '',
    component: CadTemporarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadTemporarioPage]
})
export class CadTemporarioPageModule {}
