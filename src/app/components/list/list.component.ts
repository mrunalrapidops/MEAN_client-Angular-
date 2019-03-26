import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {Country} from '../../country'; 
import {Router} from '@angular/router';
 @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private countries:Country[];
  constructor(private _countryService:CountryService, private router:Router ) { }

  ngOnInit() {
    this.readCountreis();
  }
  readCountreis(){
    this._countryService.readCounties().subscribe(
      data =>{
        console.log(data);
        this.countries = data['msg'];
      }
    ),error =>{
      console.log(error);
    }
  }

  doUpdate(country){
    this._countryService.setter(country);// send object 
    let value = this._countryService.getter();
    /* console.log(value._id,":",value.name,":",value.capital); */
    this.router.navigate(['/createUpdate']);
  }
}
 