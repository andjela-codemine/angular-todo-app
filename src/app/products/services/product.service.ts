import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(`ProductService: ${ message }`);
  }

  getProducts(limit: number, page: number, category?: string): Observable<Product[]> {
    let categoryParam: string = '';
    if (category) {
      categoryParam = `/category/${ category }`;
    }
    const url: string = `${ this.productsUrl }${ categoryParam }?limit=${ limit }&skip=${ (page - 1) * limit }`;
    return this.http.get<any>(url).pipe(
      map(response => response.products),
      tap(_ => this.log('fetched products')),
      catchError(this.handleError<Product[]>('get products'))
    );
  }

  getCategories(): Observable<any> {
    return this.http.get<string[]>('https://dummyjson.com/products/categories').pipe(
      tap(_ => this.log('fetched categories of products')),
      catchError(this.handleError<Product[]>('get categories'))
    );
  }

  getTotalItems(perCategory?: string): Observable<any> {
    let totalItemsParam: string = '';
    if (perCategory) {
      totalItemsParam = `/category/${ perCategory }`;
    }
    return this.http.get<any>(`${ this.productsUrl }${ totalItemsParam }`).pipe(
      map(response => response.total)
    );
  }

  searchTerm(term: string): Observable<any> {
    const searchTermUrl: string = `${ this.productsUrl }/search?q=${ term }`;

    return this.http.get<any>(searchTermUrl).pipe(
      map(response => response.products),
      catchError(this.handleError<Product[]>(`get search?g=${ term }`))
    );
  }
}
