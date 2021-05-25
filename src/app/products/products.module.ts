import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'product',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component:ProductListComponent

  // },
  // {
  //   path: 'product-details',
  //   component: ProductDetailsComponent

  // }
];

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
