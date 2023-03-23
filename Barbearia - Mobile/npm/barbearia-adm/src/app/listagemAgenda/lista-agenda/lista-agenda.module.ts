import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAgendaPageRoutingModule } from './lista-agenda-routing.module';

import { ListaAgendaPage } from './lista-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAgendaPageRoutingModule
  ],
  declarations: [ListaAgendaPage]
})
export class ListaAgendaPageModule {}
