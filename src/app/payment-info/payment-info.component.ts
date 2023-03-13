import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  constructor(private apiService:ApiServiceService,private toastr:ToastrService,private route: ActivatedRoute) { }

  paymentInfo = {
    p_id : 1,
    amt: 100,
    payment_method: 'UPI'
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    const paymentId = Number(params.get('paymentId'));
    this.apiService.getPaymentDetails(paymentId).subscribe((res)=>{
      console.log(res);
      this.paymentInfo = res;
    })
    });
  }

}
