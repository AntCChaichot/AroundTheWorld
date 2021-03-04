import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { University } from '../Models/InsertUniversityModel';
import { Country } from '../Models/InsertCountryModel';

@Injectable({
  providedIn: 'root'
})
export class MyDataProviderService {
  private URL = "http://3758ccffbaac.ngrok.io/";
  constructor(public http : HttpClient) { 
    console.log("Hello From MyDataProvider Service");
  }

  getCountryData(countryList,country){
    console.log("Preparing country Data");
    this.http.get(this.URL + "country_info?country=" + country).subscribe(country_result => {
      countryList.push(country_result['data']);
      console.log(country_result);
      console.log(countryList);  
    })
  }

  getUniversityData(universityList,country,amount,event) {
    console.log("Preparing University Data");
    this.http.get(this.URL + "uni_info?uni_country=" + country + "&amount=" +amount).subscribe(uni_result => {
      for (let j=0;j<uni_result['data'].length;j++)
        universityList.push(uni_result['data'][j]);
      console.log(universityList);
      if (amount != 0)
        event.target.complete();
    })
  }

  addCountryExp(new_exp_data : Country) {
    console.log("Preparing to post your experience");
    console.log(new_exp_data);
    return this.http.post(this.URL + "insert_experience",new_exp_data).subscribe(result => {});
  }

  getAllExp(expList) {
    console.log("Getting all Personal Experience");
    return this.http.get(this.URL + 'get_all_exp').subscribe(all_exp_result => {
      for (let exp=0;exp<all_exp_result['data'].length;exp++)
        expList.push(all_exp_result['data'][exp]);
      console.log(expList);
    })
  }

  addUniversity(new_data : University) {
    console.log("Preparing to post your new university");
    console.log(new_data);
    return this.http.post<University>(this.URL + "insert_university",new_data).subscribe(res => {});
  }

  checkUniversityAmount(checkUniList,checkCountryUniName) {
    console.log("Checking universities");
    this.http.get(this.URL + 'check_amount?country=' + checkCountryUniName).subscribe(checkUni_result => {
      for (let l=0;l<checkUni_result['data'].length;l++)
        checkUniList.push(checkUni_result['data'][l]);
      console.log(checkUniList);
    })
  }

  checkSecureWeb(checkLinkList,linkCountryName) {
    console.log("Checking Web Page");
    this.http.get(this.URL + 'check_links?country=' + linkCountryName).subscribe(linkUni_result => {
    checkLinkList.push(linkUni_result['data']);
    console.log(checkLinkList);
    })
  }

  checkBorders(borderList,borderCountry) {
    console.log("Asking for borders");
    this.http.get(this.URL + 'check_borders?country=' + borderCountry).subscribe(border_result => {
    borderList.push(border_result['data']);
    console.log(borderList);
    })
  }
}
