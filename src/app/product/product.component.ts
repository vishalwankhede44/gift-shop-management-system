import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName:string = 'Product Name';
  @Input() productDesc:string = 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  @Input() productPrice:number = 20.00;
  @Input() productId:number = 1;

  constructor() {

   }

  ngOnInit(): void {
  }

  addToCart(productid:any){
    console.log("Add to cart : "+productid)
  }

}
