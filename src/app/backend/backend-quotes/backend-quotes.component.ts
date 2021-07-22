import { Component, OnInit } from '@angular/core';
import { QuotesService } from "../../services/quotes.service";
import { AuthService } from "../../authentification/services/auth.service";

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {

  quotes$;
  // pour permettre à un seul utilisateur de procéder  au CRUD
  // il nous faudra ensuite pouvoir accéder au service qui dispose de l'observable user$
  // on pourra ensuite utiliser une directive structurelle côté template *ngIf="isAdmin"
  isAdmin:boolean = false;


  constructor(private s:QuotesService, private authService:AuthService ) { }

  ngOnInit(): void {
    this.quotes$=this.s.getQuotes();
    this.authService.user$.subscribe(user=>{
      console.log("user", user);
      if (user && user.uid==="G7U8gEs8w3SZ0A3jkllkgaJ3ZcT2"){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    })
  }

  deleteQuote(quote){
    console.log('deleted quote', quote);
    this.s.deleteQuoteById(quote.key);

  }

  toggleToEditMode(quote){
    this.s.editQuote(quote);

  }

  showQuoteDetails(quote){

  }

}
