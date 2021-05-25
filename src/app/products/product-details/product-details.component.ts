import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShowDivIf = true;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
    
  isShowRev = true;
  
  toggleDisplayRev() {
    this.isShowRev = !this.isShowRev;
  }

}
