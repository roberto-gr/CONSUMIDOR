import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentreviewsPageRoutingModule } from './recentreviews-routing.module';

import { RecentreviewsPage } from './recentreviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentreviewsPageRoutingModule
  ],
  declarations: [RecentreviewsPage]
})
export class RecentreviewsPageModule {}
