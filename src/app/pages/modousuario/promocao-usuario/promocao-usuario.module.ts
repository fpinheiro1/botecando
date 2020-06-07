import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocaoUsuarioPageRoutingModule } from './promocao-usuario-routing.module';

import { PromocaoUsuarioPage } from './promocao-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocaoUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PromocaoUsuarioPage]
})
export class PromocaoUsuarioPageModule {}
