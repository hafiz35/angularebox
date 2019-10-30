import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantityselector',
  templateUrl: './quantityselector.component.html',
  styleUrls: ['./quantityselector.component.css']
})
export class QuantityselectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value:number=0;
  zeroStatus:boolean=true;
  increment(){
    this.value++;
    this.zeroStatus=false;
  }
  decrement(){
    this.value--;
    if(this.value===0)  this.zeroStatus=true;
  }


}
