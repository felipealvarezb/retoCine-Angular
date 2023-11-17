import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudMoviesService {
  private REST_API: string = 'http://localhost:8000/api/movies';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');


  constructor(private httpClient:HttpClient) { }

  getMovies() : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.REST_API, {headers: this.httpHeaders});
  }

  getMovieById(id:string) : Observable<Movie> {
    return this.httpClient.get(`this.REST_API/${id}`, {headers: this.httpHeaders})
      .pipe( map((res:any) => { return res || {} }) );
  }

  createMovie(data:Movie): Observable<any> {
    return this.httpClient
      .post(this.REST_API, data, {headers: this.httpHeaders});

  }

  updateMovie(id:string, data:Movie): Observable<any>{
    return this.httpClient
      .put(`this.REST_API/${id}`, data, {headers: this.httpHeaders});

  }

  deleteMovie(id:string): Observable<any>{
    return this.httpClient
    .delete(`this.REST_API/${id}`, {headers: this.httpHeaders});
  }
}
