import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapiocomidasPage } from './cardapiocomidas.page';

const routes: Routes = [
  {
    path: '',
    component: CardapiocomidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapiocomidasPageRoutingModule {}
