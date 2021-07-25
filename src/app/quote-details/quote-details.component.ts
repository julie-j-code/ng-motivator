
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireObject } from '@angular/fire/database';
// pour récupérer les paramètres d'une route
import { ActivatedRoute } from '@angular/router';
import { getMaxListeners } from 'process';
import { Observable, Subject } from 'rxjs';
import Quote from '../models/quote.model';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  quoteId;
  // itemValue = '';
  // quote: Observable<Quote>;
  text;
  firstname;
  lastname;


  constructor(
    private activatedRoute: ActivatedRoute,
    private afDb: AngularFireDatabase
  ) {
  }

  ngOnInit() {
    // pour être cohérent, faut que le paramètre dynamique qu'on récupère soit le même que celui de la route
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.quote = this.afDb.object('quotes').valueChanges();
    // return this.text = this.quote[Object.keys(this.quote)[1]].text;
this.afDb.database.ref('/quotes').orderByChild('key').equalTo(this.quoteId).once('value', snapshot => {
  snapshot.forEach(childSnapshot => {
    var childData = childSnapshot.val();
    this.firstname = childData.firstname;
    this.lastname = childData.lastname;
    this.text = childData.text;
    console.log ('text', this.text);


  });
});
  };





}








