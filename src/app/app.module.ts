import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { Routes, RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { QuantityincrementComponent } from './quantityincrement/quantityincrement.component';
import { QuantityselectorComponent } from './quantityselector/quantityselector.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveFormsComponent } from './edit-emp-reactive-forms/edit-emp-reactive-forms.component';
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'',component:ViewEmpComponent},
  {path:'edit',component:EditEmpComponent},
  {path:'clickme',component:QuantityincrementComponent},
  {path:'selector',component:QuantityselectorComponent},
  {path:'editemptemplatedriven',component:EditEmpTemplateDrivenComponent},
  {path:'editempreactive',component:EditEmpReactiveFormsComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    HeaderComponent,
    QuantityincrementComponent,
    QuantityselectorComponent,
    EditEmpTemplateDrivenComponent,
    EditEmpReactiveFormsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
