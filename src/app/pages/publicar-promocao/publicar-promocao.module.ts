import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarPromocaoPageRoutingModule } from './publicar-promocao-routing.module';

import { PublicarPromocaoPage } from './publicar-promocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarPromocaoPageRoutingModule
  ],
  declarations: [PublicarPromocaoPage]
})
export class PublicarPromocaoPageModule {}
