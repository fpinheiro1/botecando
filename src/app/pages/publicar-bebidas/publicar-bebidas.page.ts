import { Component, OnInit } from '@angular/core';
import { PublicacaoService } from 'src/app/services/publicacao.service';
import { ActivatedRoute } from '@angular/router';
import { Publicacao } from 'src/app/interfaces/publicacao';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publicar-bebidas',
  templateUrl: './publicar-bebidas.page.html',
  styleUrls: ['./publicar-bebidas.page.scss'],
})
export class PublicarBebidasPage implements OnInit {
  private publicacaoId: string = null;
  public publicacao: Publicacao = {};
  private loading: any;
  private publicacaoSubscription: Subscription;
  

  constructor(
    private publicacaoService: PublicacaoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {   this.publicacaoId = this.activatedRoute.snapshot.params['id'];

  if (this.publicacaoId) this.loadProduct();
 
}

ngOnInit() {
  this.publicacao.categoria="Bebidas";
}

ngOnDestroy() {
  if (this.publicacaoSubscription) this.publicacaoSubscription.unsubscribe();
}

loadProduct() {
  this.publicacaoSubscription = this.publicacaoService.getPublicacao(this.publicacaoId).subscribe(data => {
    this.publicacao = data;
  });
}

async saveProduct() {
    await this.presentLoading();

    this.publicacao.uid = this.authService.getAuth().currentUser.uid;

    if (this.publicacaoId) {
      try {
        await this.publicacaoService.updatePublicacao(this.publicacaoId, this.publicacao);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast(error);
        this.loading.dismiss();
      }
    } else {
      
      try {
        await this.publicacaoService.addPublicacao(this.publicacao);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast(error);
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }



}