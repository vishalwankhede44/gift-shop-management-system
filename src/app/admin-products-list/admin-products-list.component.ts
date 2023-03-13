import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from '../api-service.service'
import {CookiesService} from '../cookies.service'

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent implements OnInit {
  
  constructor(private router:Router,private apiService:ApiServiceService,private cookies:CookiesService,private toastr: ToastrService) { }

  productList = [{
    productID:11,
    productName:'Sample',
    productDescription:'ABCD',
    productPrice:900.00,
    productImage:"IMAGE"
  }]
  ngOnInit(): void {
    if(this.cookies.isLoggedIn()==false && this.cookies.isAdmin()==false){
      this.router.navigate(['home'])
    }
    this.apiService.getAllProducts().subscribe((res)=>{
      console.log(res)
      this.productList = res;
    })
  }

  editClick(productId:any){
    this.router.navigate(['/admin/editProduct/'+productId])
  }

  deleteClick(productId:any){
    this.apiService.deleteProduct(productId).subscribe((res)=>{
      console.log(res)
      this.ngOnInit()
    })
  }

}
