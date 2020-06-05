import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiliaisPage } from './filiais.page';

const routes: Routes = [
  {
    path: '',
    component: FiliaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiliaisPageRoutingModule {}
