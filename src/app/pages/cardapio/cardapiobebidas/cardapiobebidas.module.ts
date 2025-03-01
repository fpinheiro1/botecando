import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapiobebidasPageRoutingModule } from './cardapiobebidas-routing.module';

import { CardapiobebidasPage } from './cardapiobebidas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapiobebidasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardapiobebidasPage]
})
export class CardapiobebidasPageModule {}
