import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeareviewPage } from './makeareview.page';

const routes: Routes = [
  {
    path: '',
    component: MakeareviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeareviewPageRoutingModule {}
