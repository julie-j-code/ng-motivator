import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes: Observable<any>;
  subject=new Subject;


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

  deleteQuoteById(id){
    return this.afDb.list('quotes').remove(id);
  }

  // attention : le fait de passer une quote en mode édition
  // se passe avant l'édition de cette quote
  editQuote(quote){
    // subject qui est capable de faire passer une information entre components frères
    this.subject.next(quote);


  }

  updateQuote(quote) {
    console.log('updateQuote', quote, `quotes/${quote.key}`);
    return this.afDb.object(`quotes/${quote.key}`).update(quote);
  }

}
