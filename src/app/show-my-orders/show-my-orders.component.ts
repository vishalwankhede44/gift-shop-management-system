import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import {CookiesService} from '../cookies.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-show-my-orders',
  templateUrl: './show-my-orders.component.html',
  styleUrls: ['./show-my-orders.component.css']
})
export class ShowMyOrdersComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiServiceService,private toastr:ToastrService,private cookies:CookiesService) { }

  ordersList:any;

  ngOnInit(): void {
    if(!this.cookies.isLoggedIn()){
      this.toastr.info('Please log in first!','User Not Logged In', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
      this.router.navigate(['login'])
    }else{
      this.apiService.getAllMyOrders(9).subscribe((res)=>{
        this.ordersList = res;
        console.log(this.ordersList); 
      })
    }
  }

  viewOrderClick(orderId:any){
    this.router.navigate(['/showOrderItems/'+orderId])
  }


}
