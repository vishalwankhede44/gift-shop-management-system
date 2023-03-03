import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  show:boolean = false;
  showConfirm:boolean = false;
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
  productImage:any = ''
  constructor(private apiService:ApiServiceService,private toastr:ToastrService,private route: ActivatedRoute) { }

  productId:Number = 0;
  productInfo = {
    productId:0,
    productName:"",
    productPrice:0,
    productImage:"",
    productType:"",
    productDescription:""
  }
  productInfoCopy = {
    productId:0,
    productName:"",
    productPrice:0,
    productImage:"",
    productType:"",
    productDescription:""
  }
  ngOnInit(): void {
    this.showToast()
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('productId'));
    });
    this.apiService.getProduct(this.productId).subscribe((result)=>{
      console.log(result)
      this.productInfo = result;
      this.productInfoCopy = result;
    })
  }

  onSubmit(data:any){
    
    data.productImage = this.productImage  
    if(data.productImage.length==0)
      data.productImage = this.productInfoCopy.productImage

    console.log(data)
    
    this.apiService.editProduct(data,this.productId).subscribe((response)=>{
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
