import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomedarPage } from './homedar.page';

const routes: Routes = [
  {
    path: '',
    component: HomedarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomedarPageRoutingModule {}
