import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  selectedTag = 'all';
  showPosts = 5;
  tags: string[] = [ 'all' ];
  totalNumberOfPosts = 0;

  ngOnInit() {
    this.getPosts();
    this.postsService.getAllCategories().subscribe(tags => this.tags.push(...tags));
    this.postsService.getNumberOfPosts()
      .subscribe(total => this.totalNumberOfPosts = total);
  }

  constructor(private postsService: PostService) {}

  selectItem(tag: string) {
    this.selectedTag = tag;
  }

  getPosts() {
    this.postsService.getProducts(this.showPosts)
      .subscribe(posts => {
        if (Array.isArray(posts)) {
          this.posts = posts;
        } else {
          console.error('Products data is not an array:', posts);
        }
      });
  }

  changeShowPosts(): void {
    if (this.showPosts > 0) {
      this.getPosts();
    }
  }

  scrollDistance = 2;
  scrollUpDistance = 1;

  loadMorePosts(): void {
    if (this.totalNumberOfPosts > this.posts.length) {
      this.showPosts += 5;
      this.getPosts();
    }
  }
}
