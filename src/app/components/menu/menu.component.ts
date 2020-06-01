import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  loading: any;

  constructor(private menu: MenuController,
    private authService: AuthService,
    private loadingCtrl: LoadingController) {}

  //funçao para fechar o menu
  
  closeMenu(){
    this.menu.close();
  }

  ngOnInit() {}



async presentLoading() {
  this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
  return this.loading.present();
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

}