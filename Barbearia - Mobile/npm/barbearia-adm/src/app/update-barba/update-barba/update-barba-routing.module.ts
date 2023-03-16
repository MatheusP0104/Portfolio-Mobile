import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBarbaPage } from './update-barba.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBarbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBarbaPageRoutingModule {}
