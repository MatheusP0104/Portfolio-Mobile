import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDepilacaoPageRoutingModule } from './tela-depilacao-routing.module';

import { TelaDepilacaoPage } from './tela-depilacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDepilacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TelaDepilacaoPage]
})
export class TelaDepilacaoPageModule {}
