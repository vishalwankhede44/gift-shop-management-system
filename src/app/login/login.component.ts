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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.apiService.customerLogin(data).subscribe((response)=>{
      console.log(response)
      this.cookies.setCookie('email',response.customerEmail,globals.loginSessionTimeInDays)
      this.cookies.setCookie('id',response.customerId,globals.loginSessionTimeInDays)
      this.cookies.setCookie('name',response.customerName,globals.loginSessionTimeInDays)
      this.cookies.setCookie('type','Customer',globals.loginSessionTimeInDays)
      this.router.navigate(['home'])
    },(error)=>{
      console.log("Error "+error)
    });
    // if(!globals.Methods.validateText(data.username) || !globals.Methods.validateText(data.password)){
    //   globals.popup.msg = "Invalid Input";
    //   globals.popup.type = 'danger';
    //   this.ngOnInit();
    //   return;
    }

    togglePassword(){
      this.show = !this.show;
    }

}
