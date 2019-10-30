import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  configUrl:string="https://reqres.in/api/users?page=2";

  constructor(private http:HttpClient) { }
  
  getAllUsers():Observable<any>{
    return this.http.get(this.configUrl);
  }
  createUser(user:User):Observable<any>{
    return this.http.post<User>(this.configUrl,user);
  }

  updateUser(user:User):Observable<any>{
    return this.http.put<User>(this.configUrl,user);
  }

  deleteUser(user:User):Observable<any>{
    console.log(user.id);
    return this.http.delete<User>(this.configUrl);
  }

}
