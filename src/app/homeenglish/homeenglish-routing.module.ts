import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeenglishPage } from './homeenglish.page';

const routes: Routes = [
  {
    path: '',
    component: HomeenglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeenglishPageRoutingModule {}
