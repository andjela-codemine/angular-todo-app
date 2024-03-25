import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`PostService: ${ message }`);
  }

  getProducts(limit: number): Observable<Post[]> {
    const url = `${ this.postsUrl }?limit=${ limit }`;

    return this.http.get<any>(url).pipe(
      map(response => response.posts),
      tap(_ => this.log('fetched posts')),
      catchError(this.handleError<Post[]>('get posts'))
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<any>(this.postsUrl).pipe(
      map(response => response.posts),
      map(posts => {
        return posts.reduce((acc: string[], post: any) => {
          post.tags.forEach((tag: string) => {
            if (!acc.includes(tag)) {
              acc.push(tag);
            }
          });
          return acc;
        }, []);
      }),
      catchError(this.handleError<string[]>('getUniqueTags'))
    );
  }
  getNumberOfPosts(): Observable<number> {
    return this.http.get<any>(this.postsUrl).pipe(
      map(response => response.total)
    );
  }
}
