import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ProductService: ${ message }`);
  }

  getProducts(limit: number = 9, page: number = 2): Observable<Product[]> {
    const url = `${ this.productsUrl }?limit=${ limit }&skip=${ (page - 1) * limit }`;

    return this.http.get<any>(url).pipe(
      map(response => response.products),
      tap(_ => this.log('fetched products')),
      catchError(this.handleError<Product[]>('get products'))
    );
  }
}
