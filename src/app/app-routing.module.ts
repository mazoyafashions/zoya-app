import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {AboutComponent} from './about/about.component';
import { AddToCartComponent } from './products/add-to-cart/add-to-cart.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import { LoginComponent} from './login/login.component';
import {EchartComponent} from './products/echart/echart.component';
import { AddAddressComponent } from './products/add-address/add-address.component';
import { SelectDeliveryAddressComponent } from './products/select-delivery-address/select-delivery-address.component';
import { SelectPaymentComponent } from './products/select-payment/select-payment.component';
import { CreditDebitAddComponent } from './products/credit-debit-add/credit-debit-add.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'

  },
  {
    path: 'login',
    component:LoginComponent

  },
  // {
  //   path: 'zoya-app',
  //   component:HomeComponent

  // },
  {
    path: 'home',
    component:HomeComponent

  },
  
  {
    path: 'about',
    component:AboutComponent

  },
  // {
  //   path: 'about',
  //   component:AboutComponent

  // },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'add-to-cart',
    component:AddToCartComponent

  },
  {
    path: 'google-map',
    component:GoogleMapComponent

  },
  {
    path: 'echart',
    component:EchartComponent

  },
  {
    path: 'add-address',
    component: AddAddressComponent

  },
  {
    path: 'select-address',
    component: SelectDeliveryAddressComponent

  },
  {
    path: 'select-payment',
    component: SelectPaymentComponent

  },
  {
    path: 'credit-debit',
    component: CreditDebitAddComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
