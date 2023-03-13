import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-customer-info',
  templateUrl: './show-customer-info.component.html',
  styleUrls: ['./show-customer-info.component.css']
})
export class ShowCustomerInfoComponent implements OnInit {

  constructor(private apiService:ApiServiceService,private toastr:ToastrService,private route: ActivatedRoute) { }
  
  customer = {
    customerId:1,
    customerMobile:'1010101010',
    customerEmail:'vw@gmail.com',
    customerAddress:'Pune',
    customerName:'Test'
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const customerId = Number(params.get('customerId'));
      this.apiService.getCustomerDetails(customerId).subscribe((res)=>{
        console.log(res);
        this.customer = res;
      })
      });
    }
  }


