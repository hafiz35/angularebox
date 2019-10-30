import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Employee } from './edit-emp-reactive-forms.model';

@Component({
  selector: 'app-edit-emp-reactive-forms',
  templateUrl: './edit-emp-reactive-forms.component.html',
  styleUrls: ['./edit-emp-reactive-forms.component.css']

})
export class EditEmpReactiveFormsComponent implements OnInit {
  departments = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];
 
  employee = { name: 'John', salary: 10000, department: { id: 1, name: 'Payroll' }, skill:''}

  empForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      'salary': new FormControl(this.employee.salary, [
        Validators.required
      ]),
      'department': new FormControl(this.employee.department, []),
      'skill': new FormArray([])
    });
  }
  onAddSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.empForm.get('skill')).push(control);
  }
  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }

}
