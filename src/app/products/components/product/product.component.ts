import { Component, inject, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ NgbCarouselModule, NgOptimizedImage ],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product?: Product;

  private modalService: NgbModal = inject(NgbModal);

  openVerticallyCentered(content: TemplateRef<any>): void {
    this.modalService.open(content, { centered: true });
  }
}
