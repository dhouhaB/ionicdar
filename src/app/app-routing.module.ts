import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homedararabic',
    pathMatch: 'full'
  },
  {
    path: 'welcome1',
    loadChildren: () => import('./welcome1/welcome1.module').then( m => m.Welcome1PageModule)
  },
  {
    path: 'homedar',
    loadChildren: () => import('./homedar/homedar.module').then( m => m.HomedarPageModule)
  },
  {
    path: 'homeenglish',
    loadChildren: () => import('./homeenglish/homeenglish.module').then( m => m.HomeenglishPageModule)
  },
  {
    path: 'homedararabic',
    loadChildren: () => import('./homedararabic/homedararabic.module').then( m => m.HomedararabicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
