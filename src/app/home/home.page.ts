import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route : Router) {}

  countryPage() {
    this.route.navigate(['countries']);
  }

  postCountryPage() {
    this.route.navigate(['create-country']);
  }

  universityPage() {
    this.route.navigate(['universities']);
  }

  postUniversityPage() {
    this.route.navigate(['post-university']);
  }

  analyzePage() {
    this.route.navigate(['analyze']);
  }

}


