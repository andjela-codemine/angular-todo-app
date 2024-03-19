import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../interfaces/quote.interface';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements OnInit {
  quote: Quote | undefined;

  constructor(private quoteService: QuotesService) {}

  ngOnInit() {
    this.fetchQuote();
  }

  fetchQuote() {
    this.quoteService.getRandomQuote().subscribe(quote => this.quote = quote);
  }
}
