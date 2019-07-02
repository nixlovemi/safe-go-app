import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home-index/home-index.module#HomeIndexPageModule'
  },
  {
    path: 'cadTemporario', loadChildren: './cad-temporario/cad-temporario.module#CadTemporarioPageModule'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
