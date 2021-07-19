import { Component, OnInit } from '@angular/core';
// pour récupérer les paramètres d'une route
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  quoteId;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // pour être cohérent, faut que le paramètre dynamique qu'on récupère soit le même que celui de la route
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.quoteId = this.activatedRoute.snapshot.paramMap['id'];
    // this quoteId = this.activatedRoute.snapshot.paramMap.get('id');

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.quoteId = params['id'];
    };
  }


