import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import {CookiesService} from '../cookies.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiServiceService,private toastr:ToastrService,private cookies:CookiesService) { }

  ngOnInit(): void {
    if(!this.cookies.isLoggedIn()){
      this.toastr.info('Please log in first!','User Not Logged In', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
      this.router.navigate(['login'])
    }else{
      this.apiService.getCartItems().subscribe((res)=>{
        console.log(res);
        this.productList = res;
        
      })
    }
  }

  productList = [
    {
      cartId:1,
      customerId:1,
      productName : "",
      description : "",
      price : 0,
      image:"sample.jpg",
      productId: 1,
      qty:1
    }

  ]

  paymentMethod:any = 'UPI';

  removeFromCart(cartId:any){
    this.apiService.deleteFromCart(cartId).subscribe((res)=>{
      this.toastr.success('Product successfully removed from cart', 'Success', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 2000,
      });
      this.ngOnInit();
    })
  }

  placeOrder(){
    console.log(this.productList)
    var price:any = 0.0;
    this.productList.map((product)=>{
        price = price + (product.qty * product.price)
    })
    console.log(price)
    const data = {
      productList : this.productList
    }
    this.apiService.placeOrder(data,this.paymentMethod,price).subscribe((res)=>{
      console.log(res);
      this.toastr.success('Order Placed Successfully!', 'Success', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 2000,
      });
      this.ngOnInit();
    })
  }
}
