import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(`PostService: ${ message }`);
  }

  getPosts(limit: number): Observable<Post[]> {
    let params: HttpParams = new HttpParams().set('limit', limit.toString());
    return this.http.get<any>(this.postsUrl, { params }).pipe(
      map(response => response.posts),
      tap(_ => this.log('fetched posts')),
      catchError(this.handleError<Post[]>('get posts'))
    );
  }
}
