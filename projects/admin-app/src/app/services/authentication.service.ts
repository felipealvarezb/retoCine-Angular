import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private REST_API: string = 'http://localhost:8000/api/users';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');


  constructor(private httpClient:HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.httpClient.post(`${this.REST_API}/register`, user);
  }

  loginUser(user: User): Observable<any> {
    return this.httpClient.post(`${this.REST_API}/login`, user);
  }

}
