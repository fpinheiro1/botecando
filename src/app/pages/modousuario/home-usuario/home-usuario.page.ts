
import { Http } from '@angular/http';
import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { NavController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Promocao } from 'src/app/interfaces/promocao';
import { PromocaoService } from 'src/app/services/promocao.service';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.page.html',
  styleUrls: ['./home-usuario.page.scss'],
})
export class HomeUsuarioPage implements OnInit {
  private loading: any;
  private promocaoId: string = null;
  public promocao = new Array<Promocao>();
  private promocaoSubscription: Subscription;
  public categoria = 'Promoção';
  public criterioHeader:HeaderComponent;
  
  

   

  constructor(private menu: MenuController,
    public navCtrl: NavController,
    public http: Http,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private promocaoService: PromocaoService,
    private toastCtrl: ToastController

      ) {   this.ionViewWillEnter(); 

  }

  ngOnInit() { this.menuUsuario(); }

  menuUsuario() {
    this.menu.enable(true, 'usuario'); }

  ngOnDestroy() {  
    this.promocaoSubscription.unsubscribe();
   }

   toggleMenu(){
    this.menu.toggle();
  }
  
  tornarDestaque(id,a:Promocao){
        a.destaque = "sim";
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