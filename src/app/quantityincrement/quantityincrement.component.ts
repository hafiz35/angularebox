import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantityincrement',
  templateUrl: './quantityincrement.component.html',
  styleUrls: ['./quantityincrement.component.css']
})
export class QuantityincrementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clicked:number=0;
  OnClick(){
    this.clicked++;
  }
}
