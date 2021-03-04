import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCountryPageRoutingModule } from './create-country-routing.module';

import { CreateCountryPage } from './create-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCountryPageRoutingModule
  ],
  declarations: [CreateCountryPage]
})
export class CreateCountryPageModule {}
