import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes: Observable<any>;


  constructor(private afDb: AngularFireDatabase) { }

  // getQuotes(): Observable<any[]> {
  //   // return this.afDb.list('quotes').valueChanges();

  //   return this.afDb.list('quotes').valueChanges().pipe(
  //     map(quotes => quotes.map(quote => ({ key: quote.key, ...quote.payload.val() })))
  //   );
  // }

  getQuotes() {

    return this.afDb.list('quotes').snapshotChanges().pipe(
      map(quotes => quotes.map(quote => ({ key: quote.key, ...quote.payload.val() as {} }))
    ) );


    // return this.afDb.list('quotes').snapshotChanges().pipe(map( action => action
    //   .map(quote => {
    //     const key = quote.payload.key;
    //     const data = quote.payload.val();
    //     return  data;
    //   })));
  }

  createQuote(quote) {
    return this.afDb.list('quotes').push(quote);
  }
}
