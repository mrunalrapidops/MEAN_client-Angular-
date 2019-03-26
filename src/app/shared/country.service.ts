import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Country} from '../country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private country:Country;
  private baseUri:String = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  
  setter(country:Country){
    this.country = country;
    console.log("from setter::::"+country);
    console.log("from setter::::"+country._id);
    console.log("from setter::::"+country.name);
    console.log("from setter::::"+country.capital);
  }
  getter(){
    return this.country;
  }

  createCountry(country){
    return this.http.post(this.baseUri+'/create',country,{headers:this.headers});
  }

  readCounties(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateCountry(country:Country){
    console.log("updateCountry"+country);
    return this.http.post(this.baseUri+'/update',country,{headers:this.headers});
  }

  deleteCountry(id:String){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
  
}
