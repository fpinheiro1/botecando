import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicacaoDetalhesPage } from './publicacao-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: PublicacaoDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacaoDetalhesPageRoutingModule {}
