import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicacaoDetalhesPageRoutingModule } from './publicacao-detalhes-routing.module';

import { PublicacaoDetalhesPage } from './publicacao-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicacaoDetalhesPageRoutingModule
  ],
  declarations: [PublicacaoDetalhesPage]
})
export class PublicacaoDetalhesPageModule {}
