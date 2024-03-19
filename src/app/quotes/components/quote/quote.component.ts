import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Quote } from '../../interfaces/quote.interface';

@Component({
  selector: 'app-quote',
  standalone: true,
  templateUrl: './quote.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  @Input() quote: Quote | undefined;
}
