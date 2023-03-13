import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import {CookiesService} from '../cookies.service'
import {Router} from "@angular/router";
import * as globals from '../globals'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  show:boolean = false;
  showConfirm:boolean = false;
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
    

  constructor(private router:Router,private apiService:ApiServiceService,private toastr:ToastrService,private cookies:CookiesService) { }

  ngOnInit(): void {
  }


  onSubmit(data:any){
    this.apiService.customerSignUp(data).subscribe((response)=>{
      this.cookies.setCookie('email',response.customerEmail,globals.loginSessionTimeInDays)
      this.cookies.setCookie('id',response.customerId,globals.loginSessionTimeInDays)
      this.cookies.setCookie('name',response.customerName,globals.loginSessionTimeInDays)
      this.cookies.setCookie('type','Customer',globals.loginSessionTimeInDays)
      this.router.navigate(['home'])
      this.toastr.success('User Account Created successfully!','Success', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
    },(error)=>{
      this.toastr.error('Invalid Details!','Error', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
      console.log(error)
    });
  }

    togglePassword(){
      this.show = !this.show;
    }

    toggleConfirmPassword(){
      this.showConfirm = !this.showConfirm;
    }
}
