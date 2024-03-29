import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaHidratacaoPageRoutingModule } from './tela-hidratacao-routing.module';

import { TelaHidratacaoPage } from './tela-hidratacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaHidratacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TelaHidratacaoPage]
})
export class TelaHidratacaoPageModule {}
