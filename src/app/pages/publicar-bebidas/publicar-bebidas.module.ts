import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarBebidasPageRoutingModule } from './publicar-bebidas-routing.module';

import { PublicarBebidasPage } from './publicar-bebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarBebidasPageRoutingModule
  ],
  declarations: [PublicarBebidasPage]
})
export class PublicarBebidasPageModule {}
