import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentreviewsPage } from './recentreviews.page';

const routes: Routes = [
  {
    path: '',
    component: RecentreviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentreviewsPageRoutingModule {}
