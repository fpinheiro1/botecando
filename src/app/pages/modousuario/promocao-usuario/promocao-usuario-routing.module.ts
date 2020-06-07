import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocaoUsuarioPage } from './promocao-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PromocaoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocaoUsuarioPageRoutingModule {}
