import { IonicRatingModule } from 'ionic4-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeareviewPageRoutingModule } from './makeareview-routing.module';

import { MakeareviewPage } from './makeareview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    MakeareviewPageRoutingModule
  ],
  declarations: [MakeareviewPage]
})
export class MakeareviewPageModule {}
