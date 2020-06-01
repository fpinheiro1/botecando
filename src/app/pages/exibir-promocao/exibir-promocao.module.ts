import { ComponentsModule } from 'src/app/components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibirPromocaoPageRoutingModule } from './exibir-promocao-routing.module';

import { ExibirPromocaoPage } from './exibir-promocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirPromocaoPageRoutingModule,
    ComponentsModule
   
  ],
  declarations: [ExibirPromocaoPage]
})
export class ExibirPromocaoPageModule {}
