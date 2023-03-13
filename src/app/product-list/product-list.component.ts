import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { CookiesService } from '../cookies.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = {
    productName : "Product 2",
    productDesc : "Sample DESC 2. Some quick example text to build on the card title and make up the bulk of the cards content.",
    productPrice : 1800,
    productImg:"../../assets/images/sample.jpg",
    productID: 2
  }
  productList = [
    {
      productName : "Product 1",
      productDescription : "Sample DESC. Some quick example text to build on the card title and make up the bulk of the cards content.",
      productPrice : 1500,
      productImage:"../../assets/images/sample.jpg",
      productID: 1
    }

  ]
  constructor(private apiService:ApiServiceService, private cookiesService:CookiesService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((res)=>{
      this.productList = res;
      console.log(this.productList)
    })
  }

  showNotLoggedInToast() {
    
    this.toastr.info('Please log in first!','User Not Logged In', {
      positionClass: 'toast-top-right',
      progressBar: true,
      timeOut: 3000,
    });
  }

  addToCart(productid:any){
    if(this.cookiesService.isLoggedIn()){
    this.apiService.addToCart(productid,9,1).subscribe((res)=>{
      if(res)
        this.toastr.success('Product added to cart','Success', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
      else
      this.toastr.error('This product is already in your cart','Oops!', {
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
    })
  }else{
    this.showNotLoggedInToast();
  }
 }

}
