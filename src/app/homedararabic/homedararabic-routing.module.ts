import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomedararabicPage } from './homedararabic.page';

const routes: Routes = [
  {
    path: '',
    component: HomedararabicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomedararabicPageRoutingModule {}
