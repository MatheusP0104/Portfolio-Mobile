import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-todo',
    loadChildren: () => import('./create-todo/create-todo.module').then( m => m.CreateTodoPageModule)
  },
  {
    path: 'update-todo/:id',
    loadChildren: () => import('./update-cabelo/update-todo.module').then( m => m.UpdateTodoPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./login/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'tela-principal',
    loadChildren: () => import('./principal/tela-principal/tela-principal.module').then( m => m.TelaPrincipalPageModule)
  },
  {
    path: 'tela-cabelo',
    loadChildren: () => import('./cabelo/tela-cabelo/tela-cabelo.module').then( m => m.TelaCabeloPageModule)
  },
  {
    path: 'tela-barba',
    loadChildren: () => import('./barba/tela-barba/tela-barba.module').then( m => m.TelaBarbaPageModule)
  },
  {
    path: 'tela-hidratacao',
    loadChildren: () => import('./hidratacao/tela-hidratacao/tela-hidratacao.module').then( m => m.TelaHidratacaoPageModule)
  },
  {
    path: 'tela-tintura',
    loadChildren: () => import('./tintura/tela-tintura/tela-tintura.module').then( m => m.TelaTinturaPageModule)
  },
  {
    path: 'tela-depilacao',
    loadChildren: () => import('./depilacao/tela-depilacao/tela-depilacao.module').then( m => m.TelaDepilacaoPageModule)
  },
  {
    path: 'tela-loja',
    loadChildren: () => import('./loja/tela-loja/tela-loja.module').then( m => m.TelaLojaPageModule)
  },
  {
    path: 'tela-mapa',
    loadChildren: () => import('./mapa/tela-mapa/tela-mapa.module').then( m => m.TelaMapaPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'tela-perfil',
    loadChildren: () => import('./perfil/tela-perfil/tela-perfil.module').then( m => m.TelaPerfilPageModule)
  },
  {
    path: 'tela-agenda',
    loadChildren: () => import('./agenda/tela-agenda/tela-agenda.module').then( m => m.TelaAgendaPageModule)
  },
  {
    path: 'tela-contato',
    loadChildren: () => import('./contato/tela-contato/tela-contato.module').then( m => m.TelaContatoPageModule)
  },
  {
    path: 'tela-rede-social',
    loadChildren: () => import('./redesSociais/tela-rede-social/tela-rede-social.module').then( m => m.TelaRedeSocialPageModule)
  },
  {
    path: 'update-barba/:id',
    loadChildren: () => import('./update-barba/update-barba/update-barba.module').then( m => m.UpdateBarbaPageModule)
  },
  {
    path: 'update-depilacao/:id',
    loadChildren: () => import('./update-depilacao/update-depilacao/update-depilacao.module').then( m => m.UpdateDepilacaoPageModule)
  },
  {
    path: 'update-tintura/:id',
    loadChildren: () => import('./update-tintura/update-tintura/update-tintura.module').then( m => m.UpdateTinturaPageModule)
  },
  {
    path: 'update-hidratacao/:id',
    loadChildren: () => import('./update-hidratacao/update-hidratacao/update-hidratacao.module').then( m => m.UpdateHidratacaoPageModule)
  },
  {
    path: 'ver-agenda',
    loadChildren: () => import('./verAgendamento/ver-agenda/ver-agenda.module').then( m => m.VerAgendaPageModule)
  },
  {
    path: 'lista-agenda/:id',
    loadChildren: () => import('./listagemAgenda/lista-agenda/lista-agenda.module').then( m => m.ListaAgendaPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
