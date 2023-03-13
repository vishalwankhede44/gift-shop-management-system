import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from '../api-service.service'
import {CookiesService} from '../cookies.service'
import * as globals from '../globals'
import {NavigationComponent} from '../navigation/navigation.component';

@Injectable({
  providedIn: 'root'
})




@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  
  show:boolean = false;
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
    
  constructor(private router:Router,private apiService:ApiServiceService,private cookies:CookiesService) { }

  ngOnInit(): void {
    if(this.cookies.isLoggedIn())
      this.router.navigate(['home'])
  }

  onSubmit(data:any){
    console.log(data)
    this.apiService.adminLogin(data).subscribe((response)=>{
      console.log(response)
      this.cookies.setCookie('email',data.email,globals.loginSessionTimeInDays)
      this.cookies.setCookie('type','Admin',globals.loginSessionTimeInDays)
      this.router.navigate(['home'])
    },(error)=>{
      console.log("Error "+error)
    });
    }

    togglePassword(){
      this.show = !this.show;
    }


}
