import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
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
export class CommentsComponent implements OnInit {
  private modalService = inject(NgbModal);
  @Input() postId?: number;
  comments?: Comments[] = [];

  constructor(private commentsService: CommentsService) {}

  openScrollableContent(longContent: TemplateRef<any>) {
    this.modalService.open(longContent, { scrollable: true, centered: true });
  }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    if (this.postId)
      this.commentsService.getComments(this.postId)
        .subscribe(comments => this.comments = comments);
  }
}
