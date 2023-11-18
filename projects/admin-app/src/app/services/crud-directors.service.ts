import { Injectable } from '@angular/core';
import { Director } from '../models/director.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudDirectorService {
  
  private REST_API: string = 'http://localhost:8000/api/directors';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');


  constructor(private httpClient:HttpClient) { }

  getDirectors() : Observable<Director[]> {
    return this.httpClient.get<Director[]>(this.REST_API, {headers: this.httpHeaders});
  }

  getDirectorById(id:string) : Observable<Director> {
    return this.httpClient.get(`${this.REST_API}/${id}`, {headers: this.httpHeaders})
      .pipe( map((res:any) => { return res || {} }) );
  }

  createDirector(data:Director): Observable<any> {
    return this.httpClient
      .post(this.REST_API, data, {headers: this.httpHeaders});

  }

  updateDirector(id:string, data:Director): Observable<any>{
    return this.httpClient
      .put(`${this.REST_API}/${id}`, data, {headers: this.httpHeaders});
  }

  deleteDirector(id:string): Observable<any>{
    return this.httpClient
    .delete(`${this.REST_API}/${id}`, {headers: this.httpHeaders});
  }
}
