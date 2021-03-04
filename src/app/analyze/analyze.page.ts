import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyDataProviderService } from '../providers/my-data-provider.service'

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.page.html',
  styleUrls: ['./analyze.page.scss'],
})
export class AnalyzePage implements OnInit {
  checkedUniList = [];
  linksList = [];
  borderList = [];
  constructor(public myDataProvider : MyDataProviderService, private analyze_router : Router) { }

  backPage() {
    this.analyze_router.navigate(['/home']);
    this.checkedUniList = [];
    this.linksList = [];
    this.borderList = [];
  }  

  showCheckUniversity (check_country_name) {
    this.checkedUniList = [];
    console.log("Responded");
    console.log(check_country_name);
    this.myDataProvider.checkUniversityAmount(this.checkedUniList,check_country_name);
  }

  showWebPages (link_country_name) {
    this.linksList = [];
    console.log("Responded");
    console.log(link_country_name);
    this.myDataProvider.checkSecureWeb(this.linksList,link_country_name);
  }

  showBorders (border_country_name) {
    this.borderList = [];
    console.log("Responded");
    console.log(border_country_name);
    this.myDataProvider.checkBorders(this.borderList,border_country_name);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.checkedUniList =[];
      this.linksList = [];
      this.borderList = [];
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }

}
