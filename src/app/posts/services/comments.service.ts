import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Comments } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://dummyjson.com/comments/post';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(`CommentsService: ${ message }`);
  }

  getComments(id: number): Observable<Comments[]> {
    return this.http.get<any>(`${ this.url }/${ id }`).pipe(
      map(response => response.comments),
      catchError(this.handleError<Comments[]>('get comments'))
    );
  }

}
