import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getCartItems().subscribe((res)=>{
      console.log(res);
      this.productList = res;
    })
  }

  productList = [
    {
      cartId:1,
      customerId:1,
      productName : "Product 1",
      description : "Sample DESC. Some quick example text to build on the card title and make up the bulk of the cards content.",
      price : 1500,
      image:"sample.jpg",
      productId: 1,
      qty:1
    }

  ]

  removeFromCart(cartId:any){
    this.apiService.deleteFromCart(cartId).subscribe((res)=>{
      console.log("DELETED!")
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
    this.apiService.placeOrder(this.productList).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }
}
