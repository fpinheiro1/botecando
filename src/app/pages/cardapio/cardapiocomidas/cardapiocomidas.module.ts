import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapiocomidasPageRoutingModule } from './cardapiocomidas-routing.module';

import { CardapiocomidasPage } from './cardapiocomidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapiocomidasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardapiocomidasPage]
})
export class CardapiocomidasPageModule {}
