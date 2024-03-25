import { Component, inject, Input, TemplateRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../interfaces/author';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './author.component.html'
})
export class AuthorComponent {
  private modalService = inject(NgbModal);
  @Input() postId?: number;
  author?: Author;

  constructor(private authorService: AuthorService) {}


  getAuthor(): void {
    if (this.postId)
      this.authorService.getAuthor(this.postId).subscribe(author => this.author = author);
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.getAuthor();
    this.modalService.open(content, { centered: true });
  }
}
