import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


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

  }
];

@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent, AddToCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
