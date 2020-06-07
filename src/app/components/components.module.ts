
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from "./menu/menu.component";
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, MenuUsuarioComponent],
  exports: [HeaderComponent, MenuComponent, MenuUsuarioComponent],

  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class ComponentsModule {}
