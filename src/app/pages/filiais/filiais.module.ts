import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiliaisPageRoutingModule } from './filiais-routing.module';

import { FiliaisPage } from './filiais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiliaisPageRoutingModule
  ],
  declarations: [FiliaisPage]
})
export class FiliaisPageModule {}
