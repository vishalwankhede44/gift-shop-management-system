import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService:CookieService) { }

  setCookie(name:string,token:string,expiry:number){
    this.cookieService.set(name,token,expiry);
  }
   
  deleteCookie(name:string){
    this.cookieService.delete(name);
  }
   
  deleteAll(){
    this.cookieService.deleteAll();
  }

  getCookie(name:string){
    return this.cookieService.get(name);
  }

  isLoggedIn():boolean{
    return this.getCookie('type').length != 0 ;
  }

}
