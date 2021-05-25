import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { ModalContentComponent } from '../modal-content/modal-content.component';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

  constructor
  () {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(ModalContentComponent);

  //   dialogRef.afterClosed().subscribe(result => {
      
  //   });
  // }


  isShown: boolean = false; // hidden by default
  toggleShow() {

    this.isShown = !this.isShown;
  }

  isShowDivIf = true;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  

  ngOnInit(): void {
  }
}
