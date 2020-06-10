import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/services/promocao.service';
import { ActivatedRoute } from '@angular/router';

import {
  NavController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Promocao } from 'src/app/interfaces/promocao';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-publicar-promocao',
  templateUrl: './publicar-promocao.page.html',
  styleUrls: ['./publicar-promocao.page.scss'],
})
export class PublicarPromocaoPage implements OnInit {
  private promocaoId: string = null;
  public promocao: Promocao = {};
  private loading: any;
  private promocaoSubscription: Subscription;
  /* CRIANDO O LOCAL PARA FAZER UPLOAD DE IMAGEM */
  private afStorage: AngularFireStorage;

  constructor(
    private promocaoService: PromocaoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {
    this.promocaoId = this.activatedRoute.snapshot.params['id'];
    if (this.promocaoId) this.loadProduct();
  }

  ngOnInit() {
    this.promocao.categoria = 'Promoção';
  }

  ngOnDestroy() {
    if (this.promocaoSubscription) this.promocaoSubscription.unsubscribe();
  }

  loadProduct() {
    this.promocaoSubscription = this.promocaoService
      .getPromocao(this.promocaoId)
      .subscribe((data) => {
        this.promocao = data;
      });
  }

  async saveProduct() {
    await this.presentLoading();

    this.promocao.uid = this.authService.getAuth().currentUser.uid;

    if (this.promocaoId) {
      try {
        await this.promocaoService.updatePromocao(
          this.promocaoId,
          this.promocao
        );
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast(error);
        this.loading.dismiss();
      }
    } else {
      try {
        await this.promocaoService.addPromocao(this.promocao);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast(error);
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  /* FUNCAO PARA FAZER O UPLOAD DO ARQUIVO DIRETO NO BANCO */
  uploadPicture(blob: Blob) {
    const ref = this.afStorage.ref('img/');
    const rask = ref.put(blob);
  }
}
