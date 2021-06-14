import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EchartComponent } from './echart/echart.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { SelectDeliveryAddressComponent } from './select-delivery-address/select-delivery-address.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { CreditDebitAddComponent } from './credit-debit-add/credit-debit-add.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'product',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component:ProductsListComponent

  },
  {
    path: 'product-details',
    component: ProductDetailsComponent

  },
 
];

@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent, AddToCartComponent, CarouselComponent, EchartComponent, AddAddressComponent, SelectDeliveryAddressComponent, SelectPaymentComponent, CreditDebitAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
