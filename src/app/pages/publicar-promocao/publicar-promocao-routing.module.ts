import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarPromocaoPage } from './publicar-promocao.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarPromocaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarPromocaoPageRoutingModule {}
