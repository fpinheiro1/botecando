import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioBebidasUsuarioPageRoutingModule } from './cardapio-bebidas-usuario-routing.module';

import { CardapioBebidasUsuarioPage } from './cardapio-bebidas-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioBebidasUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardapioBebidasUsuarioPage]
})
export class CardapioBebidasUsuarioPageModule {}
