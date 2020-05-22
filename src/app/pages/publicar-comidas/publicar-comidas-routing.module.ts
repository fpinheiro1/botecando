import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarComidasPage } from './publicar-comidas.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarComidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarComidasPageRoutingModule {}
