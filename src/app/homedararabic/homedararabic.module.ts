import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomedararabicPageRoutingModule } from './homedararabic-routing.module';

import { HomedararabicPage } from './homedararabic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomedararabicPageRoutingModule
  ],
  declarations: [HomedararabicPage]
})
export class HomedararabicPageModule {}
