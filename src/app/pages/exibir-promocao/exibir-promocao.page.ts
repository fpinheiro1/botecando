import { Promocao } from './../../interfaces/promocao';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Subscription } from 'rxjs';

import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/services/auth.service';
import { PromocaoService } from 'src/app/services/promocao.service';



@Component({
  selector: 'app-exibir-promocao',
  templateUrl: './exibir-promocao.page.html',
  styleUrls: ['./exibir-promocao.page.scss'],
})
export class ExibirPromocaoPage implements OnInit {
  private loading: any;
  public cordestaque: string;
  public promocao = new Array<Promocao>();
  private promocaoSubscription: Subscription;
  public categoria = 'Promoção';
  public criterioHeader:HeaderComponent;

  
  constructor(public navCtrl: NavController,
    public http: Http,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private promocaoService: PromocaoService,
    private toastCtrl: ToastController

      ) {   this.ionViewWillEnter(); 

  }

  ngOnInit() { }

  ngOnDestroy() {  
    this.promocaoSubscription.unsubscribe();
   }

 
  
  tornarDestaque(id,a:Promocao){
        if (a.destaque=="sim"){
        a.destaque = "não";
        a.textobotaodedestaque="Destacar";
        }else {
          a.destaque="sim";
          a.textobotaodedestaque="Remover Destaque";
        }

        this.promocaoService.updatePromocao(a.id,a);
  }
 
  ionViewWillEnter() {
    //Array promocao recebendo os dados do banco.
    this.promocaoSubscription = this.promocaoService.getPromocoes().subscribe(data => {
    this.promocao = data;
    

    
    // Ordernando o array pelo titulo
      this.promocao.sort(function(a,b){
      if (a.titulo > b.titulo) {
        return 1;
      }
      if (a.titulo < b.titulo) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
        

    });
  }



 //função de logout

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

 //função para carregar mensagem aguarde

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
    }

    // funçao para deletar um produto do banco

    async deletePromocao(id: string) {
      try {
        await this.promocaoService.deletePromocao(id);
        this.presentToast('Promoção Deletada');
      } catch (error) {
        this.presentToast('Erro ao tentar deletar');
      }
    }

        
    // Função para criar o alerta na tela
    
    async presentToast(message: string) {
      const toast = await this.toastCtrl.create({ message, duration: 2000 });
      toast.present();
    }

}
