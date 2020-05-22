import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapiobebidasPage } from './cardapiobebidas.page';

const routes: Routes = [
  {
    path: '',
    component: CardapiobebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapiobebidasPageRoutingModule {}
