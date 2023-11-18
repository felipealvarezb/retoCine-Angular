import { Injectable } from '@angular/core';
import { Cinema } from '../models/cinema.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudCinemasService {

  private REST_API: string = 'http://localhost:8000/api/cinemas';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');


  constructor(private httpClient:HttpClient) { }

  getCinemas() : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this.REST_API, {headers: this.httpHeaders});
  }

  getCinemaById(id:string) : Observable<Cinema> {
    return this.httpClient.get(`this.REST_API/${id}`, {headers: this.httpHeaders})
      .pipe( map((res:any) => { return res || {} }) );
  }

  createCinema(data:Cinema): Observable<any> {
    return this.httpClient
      .post(this.REST_API, data, {headers: this.httpHeaders});

  }

  updateCinema(id:string, data:Cinema): Observable<any>{
    return this.httpClient
      .put(`${this.REST_API}/${id}`, data, {headers: this.httpHeaders});

  }

  deleteCinema(id:string): Observable<any>{
    return this.httpClient
    .delete(`${this.REST_API}/${id}`, {headers: this.httpHeaders});
  }
}
