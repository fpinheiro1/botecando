import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Subscription } from 'rxjs';
import { Publicacao } from 'src/app/interfaces/publicacao';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/services/auth.service';
import { PublicacaoService } from 'src/app/services/publicacao.service';

@Component({
  selector: 'app-cardapiobebidas',
  templateUrl: './cardapiobebidas.page.html',
  styleUrls: ['./cardapiobebidas.page.scss'],
})
export class CardapiobebidasPage implements OnInit {

 // definição das variaveis
 // criterio inicia como Bebidas e subcategoria como Cerveja.
 // Quando Abrir a pagina cardapio de bebidas, ira listar primeiro as Cervejas

  private loading: any;
  public publicacao = new Array<Publicacao>();
  private publicacaoSubscription: Subscription;
  public criterio = 'Bebidas';
  public subcriterio = 'Cerveja';
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
    //Array publicacao recebendo os dados do banco.
    this.publicacaoSubscription = this.publicacaoService.getPublicacoes().subscribe(data => {
    this.publicacao = data;

    
    // Ordernando o array pelo titulo
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

// função para selecionar o criterio
// de acodro com o botao selecionado, altera os parametros recebidos
// Altera as Variaveis criterio e subcriterio
// Altera as cores dos botoes

selecionarCriterio(categoria:string, subcategoria:string){
  this.criterio=categoria;
  this.subcriterio=subcategoria;
  if(subcategoria == "Cerveja"){

    this.corbotaocerveja="light";
    this.corbotaorefrigerante="success";
    this.corbotaosucos="success"

  } else if (subcategoria == "Refrigerante"){

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

    async deletePublicacao(id: string) {
      try {
        await this.publicacaoService.deletePublicacao(id);
        this.presentToast('Produto Deletado');
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


