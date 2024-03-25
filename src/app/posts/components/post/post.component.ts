import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Post } from '../../interfaces/post';
import { NgOptimizedImage } from '@angular/common';
import { AuthorComponent } from '../author/author.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    AuthorComponent,
    CommentsComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post: Post | undefined;
  selectedTag = '';
  @Output() selectedTagChange = new EventEmitter<string>();
  likeClicks: number = 0;

  updateSelectedTag(tag: string) {
    this.selectedTag = tag;
    this.selectedTagChange.emit(this.selectedTag);
  }

  likeClick(): void {
    this.likeClicks++;
  }
}
