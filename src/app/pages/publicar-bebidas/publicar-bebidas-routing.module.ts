import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarBebidasPage } from './publicar-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarBebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarBebidasPageRoutingModule {}
