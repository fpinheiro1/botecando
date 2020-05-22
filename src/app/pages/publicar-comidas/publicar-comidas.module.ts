import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarComidasPageRoutingModule } from './publicar-comidas-routing.module';

import { PublicarComidasPage } from './publicar-comidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarComidasPageRoutingModule
  ],
  declarations: [PublicarComidasPage]
})
export class PublicarComidasPageModule {}
