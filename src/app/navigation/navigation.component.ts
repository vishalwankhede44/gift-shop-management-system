import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CookiesService } from '../cookies.service';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,private cookiesService:CookiesService,private toastr:ToastrService) { }
  isLoggedIn: boolean = false
  isAdmin:boolean =  false

  ngOnInit(): void {
    this.isLoggedIn = this.cookiesService.isLoggedIn();
    this.isAdmin = this.cookiesService.isAdmin();
  }
   
  async logout(){
    await this.cookiesService.deleteAll();
    this.toastr.success('User Logged out successfully!','Success', {
      positionClass: 'toast-top-right',
      progressBar: true,
      timeOut: 3000,
    });
    this.router.navigate(['login']);
    
  }




}
