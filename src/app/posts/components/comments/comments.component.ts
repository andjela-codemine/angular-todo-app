import { Component, inject, Input, TemplateRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from '../../services/comments.service';
import { Comments } from '../../interfaces/comments';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  private modalService = inject(NgbModal);
  @Input() postId?: number;
  comments?: Comments[] = [];

  constructor(private commentsService: CommentsService) {}

  openScrollableContent(longContent: TemplateRef<any>) {
    this.getComments();
    this.modalService.open(longContent, { scrollable: true, centered: true });
  }

  getComments() {
    if (this.postId)
      this.commentsService.getComments(this.postId)
        .subscribe(comments => this.comments = comments);
  }
}
