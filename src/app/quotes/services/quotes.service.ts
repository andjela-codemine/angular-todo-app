import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Quote } from '../interfaces/quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotesUrl = 'https://dummyjson.com/quotes';

  constructor(
    private http: HttpClient
  ) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`QuoteService: ${ message }`);
  }

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(`${ this.quotesUrl }/random`)
      .pipe(
        tap(_ => this.log('fetched quote')),
        catchError(this.handleError<Quote>('get quote'))
      );
  }
}
