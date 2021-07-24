import { Component, Input, OnInit } from '@angular/core';
import { QuotesService } from "../services/quotes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // quotes:AngularFireList<any> = null;
  quotes$;
  // contenu:string;

  constructor(private s:QuotesService, private router:Router) {
    // this.quotes=afDb.list('quotes');
  }

  ngOnInit() {
    this.quotes$ = this.s.getQuotes();
  }

  showQuoteDetails(quote) {
    console.log('showQuoteDetails', quote);
    console.log('Contenu', quote.text);
    this.router.navigate([
      '/quote', quote.key
    ]);

    // return this.contenu=quote.text;

  }

}
