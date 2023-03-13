import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {ApiServiceService} from '../api-service.service'
import {CookiesService} from '../cookies.service'

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  show:boolean = false;
  showConfirm:boolean = false;
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
  productImage:any = ''
  
  constructor(private router:Router,private apiService:ApiServiceService,private cookies:CookiesService,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.cookies.isLoggedIn()==false && this.cookies.isAdmin()==false){
      this.router.navigate(['home'])
    }
  }

  onSubmit(data:any){
    console.log(data)
    data.productImage = this.productImage  
    this.apiService.addProduct(data).subscribe((response)=>{
      console.log(response)
    })  
    
  }

  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.productImage = reader.result
      };
    }
  }

  showToast() {
    console.log("IN ToASt")
    this.toastr.success('Hello, World!', 'Success', {
      positionClass: 'toast-top-right',
      progressBar: true,
      timeOut: 3000,
    });
  }

}
