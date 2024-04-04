import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post';

@Pipe({
  name: 'filterPosts'
})

export class PostPipe implements PipeTransform {
  transform(posts: Post[], tag: string): Post[] {
    if (tag === '') {
      return posts;
    }
    return posts.filter((post: Post) => post.tags.includes(tag));
  }
}
