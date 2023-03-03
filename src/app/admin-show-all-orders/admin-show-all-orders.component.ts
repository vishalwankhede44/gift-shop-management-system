import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-show-all-orders',
  templateUrl: './admin-show-all-orders.component.html',
  styleUrls: ['./admin-show-all-orders.component.css']
})
export class AdminShowAllOrdersComponent implements OnInit {

  constructor(private apiService:ApiServiceService,private router: Router) { }

  ordersList:any;

  ngOnInit(): void {
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
