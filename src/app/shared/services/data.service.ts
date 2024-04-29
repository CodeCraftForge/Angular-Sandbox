import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interfaces/user';
import { Product } from '../interfaces/product';

Injectable({
  providedIn: 'root'
})

interface Endpoints {
  [key: string]: string;
}

export class DataService {

  host: string = 'localhost:3004'
  endpoints: Endpoints = {
    'users': '/users',
    'products': '/products'
  }

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    return this.fetchData('products');
  }

  fetchUsers(): Observable<User[]> {
    return this.fetchData('users');
  }

  private fetchData(endpoint: string): Observable<any> {
    return this.http.get('//' + this.host + this.endpoints[endpoint as keyof Endpoints]);
  }
}
