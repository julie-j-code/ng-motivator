import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

  constructor(private quoteServices:QuotesService){}

  ngOnInit(): void {
  }

  onQuoteCreated(quote){
    console.log("quote retrieved", quote);
    let addedQuote = this.quoteServices.createQuote({
      firstname:quote.value.firstname,
      lastname:quote.value.lastname,
      text:quote.value.quote
    });
    console.log('Added Quote', addedQuote);
  }


}
