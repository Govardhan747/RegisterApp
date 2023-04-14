import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseURL="http://localhost:8080/login";
  private baseURL2="http://localhost:8080/registerUser";

  constructor(private http:HttpClient) { }
  public loginUserFromRemote(user:User){
    return this.http.post(`${this.baseURL}`,user,{responseType:'text'});
  
  }
  registerUserFromRemote(user:User){
    return this.http.post(`${this.baseURL2}`,user,{responseType:'text'})

  }
}
