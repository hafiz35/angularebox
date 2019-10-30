import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data.data;
    });

  }

  user: User = { id: 13, email: 'garry123@reqres.in', first_name: 'Garry', last_name: 'Hood', avatar: 'jadhfkjldsahf' };

  createUser(user: User) {
    this.userService.createUser(this.user).subscribe(user => (this.users.push(user)));
  }

  user1: User = { id: 13, email: 'garry123@reqres.in', first_name: 'Harry', last_name: 'Hood', avatar: 'jadhfkjldsahf' };

  updateUser() {
    this.userService.updateUser(this.user1).subscribe(user1 => {
      const upUser = this.users.find(us => us.id === user1.id);
      upUser.email = user1.email;
      upUser.first_name = user1.first_name;
      upUser.last_name = user1.last_name;
    });
  }

  deleteUser(id: number) {
    console.log(id);
    this.userService.getAllUsers().subscribe((user: User[]) => {
      let index=this.users.findIndex(us => us.id === id);
      if(index!==-1)
        this.users.splice(index,1);
    });
  }
  registeredmssg:string="";
  registerid:number=100;
  register(){
    console.log("deleting "+ this.registerid);
    this.userService.getAllUsers().subscribe((user: User[]) => {
      let index=this.users.findIndex(us => us.id === this.registerid);
      if(index!==-1)
        this.registeredmssg="Registered";
      else
        this.registeredmssg="Error";
    });
  }

}
