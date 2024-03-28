import { Component, Input, TemplateRef, inject, ViewEncapsulation } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgbModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
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

  private modalService = inject(NgbModal);

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

}
