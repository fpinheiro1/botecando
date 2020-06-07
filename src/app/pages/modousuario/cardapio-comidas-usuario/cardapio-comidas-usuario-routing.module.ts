import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioComidasUsuarioPage } from './cardapio-comidas-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioComidasUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioComidasUsuarioPageRoutingModule {}
