import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomedarPageRoutingModule } from './homedar-routing.module';

import { HomedarPage } from './homedar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomedarPageRoutingModule
  ],
  declarations: [HomedarPage]
})
export class HomedarPageModule {}
