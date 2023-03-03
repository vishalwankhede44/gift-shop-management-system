import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-order-items',
  templateUrl: './show-order-items.component.html',
  styleUrls: ['./show-order-items.component.css']
})
export class ShowOrderItemsComponent implements OnInit {
  productList:any
  constructor(private apiService:ApiServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService.getOrderItemsOfOrder(Number(params.get('orderId'))).subscribe((res)=>{
        console.log(res)
        this.productList = res;
      })
    });
  }

}
