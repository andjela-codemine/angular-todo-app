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
  selectedTag: string = 'all';
  totalPosts: number = 5;

  showPosts: string = '5';
  tags: string[] = [ 'all' ];
  totalNumberOfPosts: number = 0;

  isInfiniteScrollDisabled: boolean = true;

  ngOnInit(): void {
    this.getPosts();
    this.postsService.getAllCategories().subscribe(tags => this.tags.push(...tags));
    this.postsService.getNumberOfPosts()
      .subscribe(total => this.totalNumberOfPosts = total);
  }

  constructor(private postsService: PostService) {}

  selectItem(tag: string): void {
    this.selectedTag = tag;
  }


  getPosts(): void {
    this.postsService.getProducts(this.totalPosts)
      .subscribe(posts => {
        this.posts = posts;
        this.totalPosts = posts.length;
      });
  }

  scrollDistance: number = 2;
  scrollUpDistance: number = 1;

  loadMorePosts(): void {
    if (this.totalNumberOfPosts > this.posts.length) {
      this.totalPosts = this.totalPosts + parseInt(this.showPosts);
      this.getPosts();
    }
  }

  toggleInfiniteScroll(infiniteScrollChecked: boolean): void {
    this.isInfiniteScrollDisabled = !infiniteScrollChecked;
  }
}
