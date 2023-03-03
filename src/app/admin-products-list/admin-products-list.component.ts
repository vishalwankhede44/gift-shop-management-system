import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent implements OnInit {
  
  constructor(private apiService:ApiServiceService,private router: Router) { }
  productList = [{
    productID:11,
    productName:'Sample',
    productDescription:'ABCD',
    productPrice:900.00,
    productImage:"IMAGE"
  }]
  ngOnInit(): void {
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
