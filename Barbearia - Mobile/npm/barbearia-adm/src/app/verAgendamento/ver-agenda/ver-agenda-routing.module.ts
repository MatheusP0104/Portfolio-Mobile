import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAgendaPage } from './ver-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: VerAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAgendaPageRoutingModule {}
