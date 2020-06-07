import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioComidasUsuarioPageRoutingModule } from './cardapio-comidas-usuario-routing.module';

import { CardapioComidasUsuarioPage } from './cardapio-comidas-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioComidasUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardapioComidasUsuarioPage]
})
export class CardapioComidasUsuarioPageModule {}
