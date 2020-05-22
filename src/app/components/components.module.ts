import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  exports:[
  HeaderComponent
  ],
  
  
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule
    
  ]
})
export class ComponentsModule { }
