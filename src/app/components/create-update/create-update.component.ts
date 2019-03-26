import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../../shared/country.service';
import {Country} from '../../country';
/* import { TouchSequence } from 'selenium-webdriver';
import { AstMemoryEfficientTransformer } from '@angular/compiler'; */

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
//country:Country;
temp:any;
value_id:string;
username:string;
capital:string;

constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit() {
    console.log("this.country->"+Country);
    const value = this.countryService.getter();
    if(value){
      console.log(value._id,":",value.name,":",value.capital);
      this.value_id=value._id;
      this.username=value.name;
      this.capital=value.capital;
      this.createOrUpdate();
    }else{
      console.log("create new record");
      this.createOrUpdate();
    }
  }
  createOrUpdate(){
  if(this.value_id == undefined){
    console.log("create new record inside fun");
    let country = new Country(this.username,this.capital);
    this.countryService.createCountry(country).subscribe(
      data=>{this.router.navigate(['/']);},
      error=>{console.log("error in create new record")}
    )
  }else{
    console.log(this.value_id,this.username,this.capital);
    let country = new Country(this.username,this.capital);
    //console.log("this.country again->"+country.name);
     this.countryService.updateCountry(country).subscribe(
      data=>{this.router.navigate(['/']);},
      error=>{console.log("error in update new record")}
    ) 
  }
}
}
