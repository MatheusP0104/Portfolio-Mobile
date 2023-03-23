import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAgendaPage } from './lista-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAgendaPageRoutingModule {}
