import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeenglishPageRoutingModule } from './homeenglish-routing.module';

import { HomeenglishPage } from './homeenglish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeenglishPageRoutingModule
  ],
  declarations: [HomeenglishPage]
})
export class HomeenglishPageModule {}
