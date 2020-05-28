import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: 'home',  loadChildren:'./pages/home/home.module#HomePageModule', canActivate:[AuthGuard]
  },

  {
    path: 'login',  loadChildren:'./pages/login/login.module#LoginPageModule', canActivate:[LoginGuard]
  },

    
  {
    path: 'publicacao-detalhes',
    loadChildren: () => import('./pages/publicacao-detalhes/publicacao-detalhes.module').then(m=>m.PublicacaoDetalhesPageModule)
  },
  {
    path: 'publicar-bebidas',
    loadChildren: () => import('./pages/publicar-bebidas/publicar-bebidas.module').then( m => m.PublicarBebidasPageModule)
  },
  {
    path: 'publicar-comidas',
    loadChildren: () => import('./pages/publicar-comidas/publicar-comidas.module').then( m => m.PublicarComidasPageModule)
  },
  {
    path: 'cardapiobebidas',
    loadChildren: () => import('./pages/cardapio/cardapiobebidas/cardapiobebidas.module').then( m => m.CardapiobebidasPageModule)
  },
  {
    path: 'cardapiocomidas',
    loadChildren: () => import('./pages/cardapio/cardapiocomidas/cardapiocomidas.module').then( m => m.CardapiocomidasPageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
