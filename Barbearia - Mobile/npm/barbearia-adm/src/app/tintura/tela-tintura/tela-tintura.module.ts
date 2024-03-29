import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaTinturaPageRoutingModule } from './tela-tintura-routing.module';

import { TelaTinturaPage } from './tela-tintura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaTinturaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TelaTinturaPage]
})
export class TelaTinturaPageModule {}
