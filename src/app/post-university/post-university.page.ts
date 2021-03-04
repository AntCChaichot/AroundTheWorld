import { Component, OnInit } from '@angular/core';
import { MyDataProviderService } from '../providers/my-data-provider.service';
import { Router } from '@angular/router';
import { University } from '../Models/InsertUniversityModel';


@Component({
  selector: 'app-post-university',
  templateUrl: './post-university.page.html',
  styleUrls: ['./post-university.page.scss'],
})
export class PostUniversityPage implements OnInit {
  inserted_data: University;
  return_text;
  constructor(public MYdataprovider: MyDataProviderService, private post_uni_router : Router) { }

  postUniversity(new_name,new_location,new_link,new_country) {
    this.return_text = ""
    this.inserted_data = {name:new_name,state_province:new_location,web_pages:new_link,country:new_country};
    this.MYdataprovider.addUniversity(this.inserted_data);
    console.log("Added Successfully!")
    this.return_text = "Added new University, Thank you"
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.return_text ="";
      event.target.complete();
    }, 2000);
  }

  backPage() {
    this.post_uni_router.navigate(['/home'])
    this.return_text = "";
  }

  ngOnInit() {
  }

}
