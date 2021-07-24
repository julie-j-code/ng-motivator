
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireObject } from '@angular/fire/database';
// pour récupérer les paramètres d'une route
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

   quoteId;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private db:AngularFireDatabase
    ) {
   }

  ngOnInit() {
    // pour être cohérent, faut que le paramètre dynamique qu'on récupère soit le même que celui de la route
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
  };

  }








