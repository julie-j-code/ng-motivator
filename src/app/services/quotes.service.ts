import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from "rxjs/operators";
import {Quote} from "../models/quote.model";

// import { DataSnapshot } from '@angular/fire/database/interfaces';
// import * as firebase from 'firebase';
// import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  // option 1
  quotes: Observable<Quote>;
  // option 2
  // quotes:  AngularFireList<Quote>;
  subject=new Subject;
  // private dbPath = '/quotes';
  // quotesRef: AngularFireList<Quote>;


  constructor(private afDb: AngularFireDatabase) {
    // this.quotesRef = afDb.list(this.dbPath);
   }

  //  pour l'option 1
  getQuotes() {
    return this.afDb.list('quotes').snapshotChanges().pipe(
      map(quotes => quotes.map(quote => ({ key: quote.key, ...quote.payload.val() as {} }))
    ) );
  }

  // si on déclare quotes : AngularFireList<any>;
  // l'option 2 ci-dessous marche
  // moins verbeuse
  // pourquoi n'a-t-elle pas été utilisée dans le cours ?
// getQuotes(){
//   this.quotes = this.afDb.list('quotes');
//   return this.quotes.valueChanges();
// }


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
