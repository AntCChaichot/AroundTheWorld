import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCountryPage } from './create-country.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCountryPageRoutingModule {}
