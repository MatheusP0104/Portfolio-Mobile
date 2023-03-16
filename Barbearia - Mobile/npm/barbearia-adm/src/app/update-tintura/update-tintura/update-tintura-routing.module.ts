import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTinturaPage } from './update-tintura.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTinturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTinturaPageRoutingModule {}
