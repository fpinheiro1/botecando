import { environment } from "./../environments/environment";

import { ComponentsModule } from "./components/components.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

/* IMPORTANDO A EXTENSAO DO FIREBASE NO APP */
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabase } from "@angular/fire/database";
import { HttpModule, Http } from "@angular/http";
import { AngularFirestoreModule } from "@angular/fire/firestore";

/* IMPORTANDO PARA REALIZAR AUTENTICACAO */
import { AngularFireAuthModule } from "@angular/fire/auth";

/* IMPORTANDO O STORAGE FIREBASE PARA ADD IMAGENS */
import { AngularFireStorageModule } from "@angular/fire/storage";
/* import { File } from "@ionic-native/file/ngx";
 */
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
