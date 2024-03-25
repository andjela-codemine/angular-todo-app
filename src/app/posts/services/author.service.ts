import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Author } from '../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url: string = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(`AuthorService: ${ message }`);
  }

  getAuthor(id: number): Observable<any> {
    return this.http.get<Author>
    (`${ this.url }/${ id }?select=firstName,lastName,age,gender,email,username,birthDate,image`).pipe(
      catchError(this.handleError<string[]>('get author'))
    );
  }
}

