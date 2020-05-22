import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Subscription } from 'rxjs';
import { Publicacao } from 'src/app/interfaces/publicacao';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/services/auth.service';
import { PublicacaoService } from 'src/app/services/publicacao.service';


@Component({
  selector: 'app-cardapiocomidas',
  templateUrl: './cardapiocomidas.page.html',
  styleUrls: ['./cardapiocomidas.page.scss'],
})
export class CardapiocomidasPage implements OnInit {

  private loading: any;
  public publicacao = new Array<Publicacao>();
  private publicacaoSubscription: Subscription;
  public criterio = "Comidas";
  public subcriterio ="Pratos";
  public criterioHeader:HeaderComponent;
  
  public corbotaocerveja="light";
  public corbotaorefrigerante="success";
  public corbotaosucos="success";
  

   

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

  
    
   
 
  ionViewWillEnter() {
        
    this.publicacaoSubscription = this.publicacaoService.getPublicacoes().subscribe(data => {
    this.publicacao = data;
    this.publicacao.sort(function(a,b){
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



selecionarCriterio(categoria:string, subcategoria:string){
  this.criterio=categoria;
  this.subcriterio=subcategoria;
  if(subcategoria == "Pratos"){

    this.corbotaocerveja="light";
    this.corbotaorefrigerante="success";
    this.corbotaosucos="success"

  } else if (subcategoria == "Porcao"){

    this.corbotaocerveja="success";
    this.corbotaorefrigerante="light";;
    this.corbotaosucos="success";
  } else if (subcategoria = "Suco"){

    this.corbotaocerveja="success";
    this.corbotaorefrigerante="success";
    this.corbotaosucos="light";
  }
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



