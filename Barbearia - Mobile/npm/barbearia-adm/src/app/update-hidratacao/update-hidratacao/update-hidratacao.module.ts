import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateHidratacaoPageRoutingModule } from './update-hidratacao-routing.module';

import { UpdateHidratacaoPage } from './update-hidratacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateHidratacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateHidratacaoPage]
})
export class UpdateHidratacaoPageModule {}
