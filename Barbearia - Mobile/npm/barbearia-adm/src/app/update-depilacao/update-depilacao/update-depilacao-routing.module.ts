import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDepilacaoPage } from './update-depilacao.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDepilacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDepilacaoPageRoutingModule {}
