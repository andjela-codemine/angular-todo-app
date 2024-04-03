import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpClient } from '@angular/common/http';
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

  getProducts(limit: number): Observable<Post[]> {
    const url: string = `${ this.postsUrl }?limit=${ limit }`;
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
          post.tags.forEach((tag: string): void => {
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
