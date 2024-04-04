import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  selectedTag: string = '';

  postsPerAPI: string = '5';
  isInfiniteScrollDisabled: boolean = true;

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(private postsService: PostService) {}

  selectItem(tag: string): void {
    this.selectedTag = tag;
  }

  getPosts(): void {
    this.postsService.getPosts(this.posts.length + parseInt(this.postsPerAPI))
      .subscribe((posts: Post[]): void => {
        this.posts = posts;
      });
  }

  scrollDistance: number = 2;
  scrollUpDistance: number = 1;

  loadMorePosts(): void {
    this.getPosts();
  }

  toggleInfiniteScroll(infiniteScrollChecked: boolean): void {
    this.isInfiniteScrollDisabled = !infiniteScrollChecked;
  }
}
