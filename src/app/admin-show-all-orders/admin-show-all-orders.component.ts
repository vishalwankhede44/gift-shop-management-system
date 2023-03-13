import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from '../api-service.service'
import {CookiesService} from '../cookies.service'

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin-show-all-orders',
  templateUrl: './admin-show-all-orders.component.html',
  styleUrls: ['./admin-show-all-orders.component.css']
})
export class AdminShowAllOrdersComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiServiceService,private cookies:CookiesService,private toastr: ToastrService) { }

  ordersList:any;

  ngOnInit(): void {
    if(this.cookies.isLoggedIn()==false && this.cookies.isAdmin()==false){
      this.router.navigate(['home'])
    }
    this.apiService.getAllOrders().subscribe((res)=>{
      
      this.ordersList = res;
      console.log(this.ordersList);
    })
  }

  viewOrderClick(orderId:any){
    this.router.navigate(['/showOrderItems/'+orderId])
  }

  updateOrderStatus(orderId:any,orderStatus:any){
    
    this.apiService.updateOrderStatus(orderId,orderStatus).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }
}
