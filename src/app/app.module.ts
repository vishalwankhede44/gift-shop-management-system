import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ToastrModule,ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminShowAllOrdersComponent } from './admin-show-all-orders/admin-show-all-orders.component';
import { ShowOrderItemsComponent } from './show-order-items/show-order-items.component';
import { ShowCustomerInfoComponent } from './show-customer-info/show-customer-info.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'admin/login', component:AdminLoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'product', component:ProductComponent},
  {path: 'admin/addProduct', component:AddProductComponent},
  {path: 'admin/productList', component:AdminProductsListComponent},
  {path: 'admin/editProduct/:productId', component:EditProductComponent},
  {path: 'admin/showAllOrders', component:AdminShowAllOrdersComponent},
  {path: 'showOrderItems/:orderId', component:ShowOrderItemsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'home', component:ProductListComponent},
  {path: '**', component:ProductListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    SignupComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminProductsListComponent,
    AddProductComponent,
    EditProductComponent,
    AdminShowAllOrdersComponent,
    ShowOrderItemsComponent,
    ShowCustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
