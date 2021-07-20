import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Pour la création du Reactiv Form
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { ɵEmptyOutletComponent } from '@angular/router';
import { QuotesService } from "../services/quotes.service";

export interface Quote {
  lastname: string,
  firstname: string,
  text: string,
  key: string

}

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form: FormGroup;
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();

  // ajout d'un flag initialisé à false si on n'est pas en mode édition
  isInEditMode = false;
  // création d'une variable pour que le text du bouton de soumission s'adapte si on est en mode édition
  verb = "ajouter";

  constructor(private formBuilder: FormBuilder, private quoteServices: QuotesService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [""],
      lastname: ["", Validators.required],
      quote: ["", Validators.required],
      key:[""]
    });

    this.quoteServices.subject.subscribe(data => {
      this.isInEditMode = true;
      this.verb = "modifier";
      console.log("data", data);
      // pour préremplir le formulaire et  puisqu'on  est certain d'avoir récupéré data via le subject
      // on va récupérer les champs de formulaire grâce au formGroup

      // this.form.get('firstname').patchValue(data.first);
      // obligées de passer par une interface pour typer fortement
      this.form.get('firstname').patchValue((data as Quote).firstname);
      this.form.get('lastname').patchValue((data as Quote).lastname)
      this.form.get('quote').patchValue((data as Quote).text);
      this.form.get('key').patchValue((data as Quote).key);

    });
  }

  saveQuote() {
    console.log('form valid', this.form.valid);
    if (!this.form.valid) {
      console.log("form NOT valid");
      return;
    }
    console.log("form is valid");
    if(!this.isInEditMode){
      this.verb = "ajouter";
      this.create.emit(this.form);
    }else if(this.isInEditMode){
      this.update.emit(this.form);
      this.isInEditMode = !this.isInEditMode;
    }
  }

}
