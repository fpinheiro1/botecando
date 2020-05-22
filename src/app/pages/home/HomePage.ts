import { HeaderComponent } from './../../components/header/header.component';
import { PublicacaoService } from './../../services/publicacao.service';
import { Publicacao } from './../../interfaces/publicacao';
import { Http } from '@angular/http';
import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    
  
  private loading: any;
  public publicacao = new Array<Publicacao>();
  private publicacaoSubscription: Subscription;
  public criterio = 'Comidas';
  public criterioHeader:HeaderComponent;
  public subcategoria = 'Sucos';
  public tag = "<h1>titulo</h1>";
  

   

  constructor(public navCtrl: NavController,
     public http: Http,
     private authService: AuthService,
    private loadingCtrl: LoadingController,
    private publicacaoService: PublicacaoService,
    private toastCtrl: ToastController

      ) {   this.ionViewWillEnter(); 

  }

  ngOnInit() { }

  ngOnDestroy() {  
    this.publicacaoSubscription.unsubscribe();
   }

   selecionarSubCategoria(publicacao:Publicacao){
        
      this.subcategoria=publicacao.subcategoria;
    
   }
 
  ionViewWillEnter() {
        
    this.publicacaoSubscription = this.publicacaoService.getPublicacoes().subscribe(data => {
    this.publicacao = data;
        

    });
  }

selecionarCriterio(tipo:string){
  this.criterio=tipo;
  this.ionViewWillEnter();
  
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


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
    }

    async deletePublicacao(id: string) {
      try {
        await this.publicacaoService.deletePublicacao(id);
        this.presentToast('Entrou na Função');
      } catch (error) {
        this.presentToast('Erro ao tentar deletar');
      }
    }

    async presentToast(message: string) {
      const toast = await this.toastCtrl.create({ message, duration: 2000 });
      toast.present();
    }

}

