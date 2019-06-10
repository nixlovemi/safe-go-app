import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeMenuPage } from './home-menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    component: HomeMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeMenuPage]
})
export class HomeMenuPageModule {}