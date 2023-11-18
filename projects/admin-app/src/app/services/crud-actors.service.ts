import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudActorService {
  
  private REST_API: string = 'http://localhost:8000/api/actors';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');


  constructor(private httpClient:HttpClient) { }

  getActors() : Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(this.REST_API, {headers: this.httpHeaders});
  }

  getActorById(id:string) : Observable<Actor> {
    return this.httpClient.get(`${this.REST_API}/${id}`, {headers: this.httpHeaders})
      .pipe( map((res:any) => { return res || {} }) );
  }

  createActor(data:Actor): Observable<any> {
    return this.httpClient
      .post(this.REST_API, data, {headers: this.httpHeaders});

  }

  updateActor(id:string, data:Actor): Observable<any>{
    return this.httpClient
      .put(`${this.REST_API}/${id}`, data, {headers: this.httpHeaders});
  }

  deleteActor(id:string): Observable<any>{
    return this.httpClient
    .delete(`${this.REST_API}/${id}`, {headers: this.httpHeaders});
  }
}
