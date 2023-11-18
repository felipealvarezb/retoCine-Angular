import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudCategoriesService {

  private REST_API: string = 'http://localhost:8000/api/categories';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');


  constructor(private httpClient:HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.REST_API, {headers: this.httpHeaders});
  }

  getCategoryById(id:string) : Observable<Category> {
    return this.httpClient.get(`this.REST_API/${id}`, {headers: this.httpHeaders})
      .pipe( map((res:any) => { return res || {} }) );
  }

  createCategory(data:Category): Observable<any> {
    return this.httpClient
      .post(this.REST_API, data, {headers: this.httpHeaders});

  }

  updateCategory(id:string, data:Category): Observable<any>{
    return this.httpClient
      .put(`${this.REST_API}/${id}`, data, {headers: this.httpHeaders});

  }

  deleteCategory(id:string): Observable<any>{
    return this.httpClient
    .delete(`${this.REST_API}/${id}`, {headers: this.httpHeaders});
  }
}
