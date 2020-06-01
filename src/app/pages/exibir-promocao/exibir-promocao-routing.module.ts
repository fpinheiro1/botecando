import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibirPromocaoPage } from './exibir-promocao.page';

const routes: Routes = [
  {
    path: '',
    component: ExibirPromocaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibirPromocaoPageRoutingModule {}
