import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post';

@Pipe({
  name: 'filterPosts'
})

export class PostPipe implements PipeTransform {
  transform(posts: Post[], operation: string): Post[] {
    if (operation === 'all') {
      return posts;
    }
    return posts.filter(post => post.tags.includes(operation));
  }
}
