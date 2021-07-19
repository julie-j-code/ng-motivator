import { Component, OnInit } from '@angular/core';
import { QuotesService } from "../../services/quotes.service";

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {

  quotes$;

  constructor(private s:QuotesService) { }

  ngOnInit(): void {
    this.quotes$=this.s.getQuotes();
  }

  deleteQuote(quote){
    console.log('deleted quote', quote);
    this.s.deleteQuoteById(quote.key);

  }

  showQuoteDetails(quote){

  }

}
