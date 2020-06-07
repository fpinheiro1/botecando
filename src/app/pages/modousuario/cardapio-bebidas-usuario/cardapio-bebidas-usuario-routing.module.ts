import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioBebidasUsuarioPage } from './cardapio-bebidas-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioBebidasUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioBebidasUsuarioPageRoutingModule {}
