import { Component, OnInit } from '@angular/core';
import { MyDataProviderService } from '../providers/my-data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage implements OnInit {
  universityList = [];
  pageNumber = 0;
  country_memory;
  constructor(public mydataProvider: MyDataProviderService, public university_router: Router) { }

  ionViewDidLoad(){
    console.log("Preparing University Data");
    this.mydataProvider.getUniversityData(this.universityList,'Thailand',0,"");
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.universityList =[];
      event.target.complete();
    }, 2000);
  }

  showUniversity(country_university){
    this.universityList = [];
    console.log("Responded");
    console.log(country_university);
    this.mydataProvider.getUniversityData(this.universityList,country_university,0,"");
    this.country_memory = country_university
  }

  backPage() {
    this.university_router.navigate(['/home'])
    this.universityList = [];
  }


  doInfinite(event) {
    this.pageNumber++;
    this.mydataProvider.getUniversityData(this.universityList,this.country_memory,this.pageNumber*15,event);
  }

  ngOnInit() {
  }

}
