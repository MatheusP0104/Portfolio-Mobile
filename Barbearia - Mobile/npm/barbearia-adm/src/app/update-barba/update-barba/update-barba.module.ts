import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBarbaPageRoutingModule } from './update-barba-routing.module';

import { UpdateBarbaPage } from './update-barba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBarbaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateBarbaPage]
})
export class UpdateBarbaPageModule {}
