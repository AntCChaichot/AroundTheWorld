import { Component, OnInit } from '@angular/core';
import { MyDataProviderService } from '../providers/my-data-provider.service';
import { Router } from '@angular/router';
import { Country } from '../Models/InsertCountryModel';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.page.html',
  styleUrls: ['./create-country.page.scss'],
})
export class CreateCountryPage implements OnInit {
  inserted_exp: Country;
  ret_text;
  expList = [];
  constructor(public myDataProvider: MyDataProviderService, private postCountry_router : Router) { }

  postCountry(country,personal_exp) {
    this.ret_text = ""
    this.inserted_exp = {country:country,exp: personal_exp}
    this.myDataProvider.addCountryExp(this.inserted_exp);
    console.log("Added Successfully!");
    this.ret_text="Posted, Thank you for Sharing!"
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.expList =[];
      this.ret_text = "";
      event.target.complete();
    }, 2000);
  }

  showAllExp() {
    this.expList = [];
    console.log("Responded");
    this.myDataProvider.getAllExp(this.expList);
  }

  backPage() {
    this.postCountry_router.navigate(['/home']);
    this.ret_text ="";
    this.expList = [];
  }

  ngOnInit() {
  }

}
