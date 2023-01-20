import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

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
    
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
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
