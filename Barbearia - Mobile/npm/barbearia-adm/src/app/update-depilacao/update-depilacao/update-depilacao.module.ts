import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDepilacaoPageRoutingModule } from './update-depilacao-routing.module';

import { UpdateDepilacaoPage } from './update-depilacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDepilacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateDepilacaoPage]
})
export class UpdateDepilacaoPageModule {}
