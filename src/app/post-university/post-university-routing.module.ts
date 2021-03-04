import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostUniversityPage } from './post-university.page';

const routes: Routes = [
  {
    path: '',
    component: PostUniversityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostUniversityPageRoutingModule {}
