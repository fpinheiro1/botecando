import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent],

  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class ComponentsModule {}
