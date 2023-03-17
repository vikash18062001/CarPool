import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/loginrequest';
import { SignUpRequest } from '../models/signuprequest';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  login(loginRequest : LoginRequest) : Observable<any>
  {
    return this.http.get<any>(`https://localhost:7177/users/login/${loginRequest.emailId}/${loginRequest.password}`);
  }

  signUpUser(signUpRequest : SignUpRequest) : Observable<any>
  {
    return this.http.post<any>("https://localhost:7177/users/signup",signUpRequest);
  }

  getUserByRideId(rideid : number) :Observable<Array<User>>
  {
    return this.http.get<Array<User>>(`https://localhost:7177/users/getuserbyrideid/${rideid}`);
  }

  getUserByUserId(userid : number) : Observable<User>
  {
    return this.http.get<User>(`https://localhost:7177/users/getuserbyuserid/${userid}`);
  }

  getUser(loginRequest : LoginRequest) : Observable<LoginRequest>
  {
    return this.http.get<LoginRequest>(`https://localhost:7177/users/getuser/${loginRequest.emailId}/${loginRequest.password}`);
  }

}
