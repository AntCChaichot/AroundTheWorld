import { Component, OnInit } from '@angular/core';
import { MyDataProviderService } from '../providers/my-data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  countryList: any;
  show: boolean = false;
  personal_experience;
  constructor(public mydataprovider: MyDataProviderService, private country_router : Router) { 
    console.log("Welcome");
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.countryList =[];
      event.target.complete();
    }, 2000);
  }

  showCountry(country_name){
    this.countryList = [];
    console.log("Responded");
    console.log(country_name);
    this.mydataprovider.getCountryData(this.countryList,country_name);
    this.show = true;
    console.log(this.countryList[1]);
  }

  backPage() {
    this.country_router.navigate(['/home']);
    this.countryList =[];
  }

  ngOnInit() {
  }

}
