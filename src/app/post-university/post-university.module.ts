import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostUniversityPageRoutingModule } from './post-university-routing.module';

import { PostUniversityPage } from './post-university.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostUniversityPageRoutingModule
  ],
  declarations: [PostUniversityPage]
})
export class PostUniversityPageModule {}
