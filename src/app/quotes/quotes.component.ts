import { Component, OnInit } from '@angular/core';
import { QuotesService } from "../services/quotes.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // quotes:AngularFireList<any> = null;
  quotes$;

  constructor(private s:QuotesService) {
    // this.quotes=afDb.list('quotes');
  }


  ngOnInit() {
    this.quotes$ = this.s.getQuotes();

  }

}
