import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private afDb: AngularFireDatabase) { }

  getQuotes(){
    return  this.afDb.list('quotes').valueChanges();

  }

  createQuote(quote){
    this.afDb.list('quotes').push(quote);
  }
}
