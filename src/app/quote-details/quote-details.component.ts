
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireObject } from '@angular/fire/database';
// pour récupérer les paramètres d'une route
import { ActivatedRoute } from '@angular/router';
import { Quote } from '../create-quote/create-quote.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

   quoteId;
   quote:Quote;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afDb:AngularFireDatabase
    ) {
   }

  ngOnInit() {
    // pour être cohérent, faut que le paramètre dynamique qu'on récupère soit le même que celui de la route
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
  };


  }








