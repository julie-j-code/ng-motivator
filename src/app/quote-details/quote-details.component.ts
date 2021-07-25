
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireObject } from '@angular/fire/database';
// pour récupérer les paramètres d'une route
import { ActivatedRoute } from '@angular/router';
import { getMaxListeners } from 'process';
import { Observable, Subject } from 'rxjs';
import Quote from '../models/quote.model';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  quoteId;
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

    return this.afDb.database.ref('/quotes').orderByChild('key').equalTo(this.quoteId).once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val();
        this.firstname = childData.firstname;
        this.lastname = childData.lastname;
        this.text = childData.text;
        console.log('text', this.text);
      });
    });
  };


}
