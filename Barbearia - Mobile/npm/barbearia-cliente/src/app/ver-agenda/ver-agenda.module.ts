import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAgendaPageRoutingModule } from './ver-agenda-routing.module';

import { VerAgendaPage } from './ver-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAgendaPageRoutingModule
  ],
  declarations: [VerAgendaPage]
})
export class VerAgendaPageModule {}
