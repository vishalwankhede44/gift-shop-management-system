import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CookiesService } from '../cookies.service';
import {Router} from "@angular/router";

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,private cookiesService:CookiesService) { }
  isLoggedIn: boolean = false

  ngOnInit(): void {
    this.isLoggedIn = this.cookiesService.isLoggedIn();
  }
   
  logout(){
    this.cookiesService.deleteAll();
    this.router.navigate(['login']);
    
  }




}
