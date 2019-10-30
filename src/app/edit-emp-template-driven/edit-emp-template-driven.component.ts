import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  constructor() { }
  departments= [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];
  employee = {name:'',salary:'',ispermanent:'',departments:{id:'',name:''}}
  permanent:string[]=["Yes","No"]
  
  ngOnInit() {
  }

}
