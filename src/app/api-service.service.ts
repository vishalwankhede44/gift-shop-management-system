import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CookiesService } from './cookies.service';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly serverURL = 'http://localhost:8989'
  constructor(private http:HttpClient,private cookies:CookiesService) { }

  handleError(error:any){
    return throwError(error.error.message || "Server Error");
  }

  adminLogin(data:any):Observable<any>{
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};
    return this.http.post(this.serverURL+'/admin/login',data,headers).pipe(catchError(this.handleError))
  }

  getAllOrders():Observable<any>{
    return this.http.get(this.serverURL+'/getAllOrders').pipe(catchError(this.handleError))
  }

  getAllMyOrders(orderId:Number):Observable<any>{
    return this.http.get(this.serverURL+'/getAllOrders/'+orderId).pipe(catchError(this.handleError))
  }

  getOrderItemsOfOrder(orderId:Number):Observable<any>{
    return this.http.get(this.serverURL+'/getOrderItems/'+orderId).pipe(catchError(this.handleError))
  }

  updateOrderStatus(orderId:Number,orderStatus:String){
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

     const data = {
      orderId,
      orderStatus
     }

     console.log(data)
     return this.http.post(this.serverURL+'/updateOrderStatus',data,headers).pipe(catchError(this.handleError))
  }

  placeOrder(data:any,paymentMethod:any,price:any):Observable<any>{
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

     data.paymentMethod = paymentMethod;
     data.totalCost = price
     data.customerId = this.cookies.getCookie('id')

     return this.http.post(this.serverURL+'/placeOrder/'+9,data,headers).pipe(catchError(this.handleError))
  }

  getPaymentDetails(pid:any):Observable<any>{
   return this.http.get(this.serverURL+'/getPaymentInfo/'+pid).pipe(catchError(this.handleError))
  }

  getCustomerDetails(cid:any):Observable<any>{
    return this.http.get(this.serverURL+'/getCustomerById/'+cid).pipe(catchError(this.handleError))
   }

  addProduct(data:any):Observable<any>{
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

     return this.http.post( this.serverURL+'/addProduct',data,headers).pipe(catchError(this.handleError))
  }

  editProduct(data:any,productId:Number):Observable<any>{
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

     return this.http.post( this.serverURL+'/editProduct/'+productId,data,headers).pipe(catchError(this.handleError))
  }

  deleteProduct(productId:Number):Observable<any>{
    
      
     var url = this.serverURL+'/deleteProduct/'+productId
     console.log(url)
     return this.http.delete(url).pipe(catchError(this.handleError))
  }

  getAllProducts():Observable<any>{
    return this.http.get(this.serverURL+'/getProducts').pipe(catchError(this.handleError));
  }

  getProduct(productId:Number):Observable<any>{
    return this.http.get(this.serverURL+'/getProduct/'+productId).pipe(catchError(this.handleError));
  }

  getCartItems():Observable<any>{
   
    const customerId=9
    
    return this.http.get(this.serverURL+'/getCartItems/'+customerId).pipe(catchError(this.handleError));
  }

  deleteFromCart(cartId:Number):Observable<any>{
   
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

    return this.http.delete(this.serverURL+'/deleteCartItem/'+cartId).pipe(catchError(this.handleError))

  }

  addToCart(productId:Number,customerId:Number,qty:Number){
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

     const data={
      productId,
      customerId,
      qty
     }

     return this.http.post( this.serverURL+'/addToCart',data,headers).pipe(catchError(this.handleError))

  }

  customerSignUp(data:any):Observable<any>{
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};

     return this.http.post(this.serverURL+'/addCustomer',data,headers).pipe(catchError(this.handleError))     
  }

  customerLogin(data:any):Observable<any>{
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'
     })};
      
      
     return this.http.post( this.serverURL+'/customerLogin',{
      "email":data.email,
      "password":data.password
    },headers).pipe(catchError(this.handleError))
  }
}
