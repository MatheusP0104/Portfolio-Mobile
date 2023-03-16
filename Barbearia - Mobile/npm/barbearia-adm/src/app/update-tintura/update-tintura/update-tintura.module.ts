import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTinturaPageRoutingModule } from './update-tintura-routing.module';

import { UpdateTinturaPage } from './update-tintura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTinturaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateTinturaPage]
})
export class UpdateTinturaPageModule {}
