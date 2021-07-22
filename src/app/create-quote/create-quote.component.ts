import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Pour la création du Reactiv Form
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { ɵEmptyOutletComponent } from '@angular/router';
import { QuotesService } from "../services/quotes.service";
import { AuthService } from "../authentification/services/auth.service";
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
  // flag pour faire un reset des styles du formulaire une fois soumis
  active: boolean = true;
  // flag pour limiter le crud à un seul utilisateur
  // et vérifier grâce à notre service l'uid de user$
 isAdmin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private quoteServices: QuotesService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [""],
      lastname: ["", Validators.required],
      quote: ["", Validators.required],
      key: [""]
    });

    this.quoteServices.subject.subscribe(data => {
      this.isInEditMode = true;
      this.verb = "modifier";
      console.log("data", data);
      // pour préremplir le formulaire et  puisqu'on  est certain d'avoir récupéré data via le subject
      // on va récupérer les champs de formulaire grâce au formGroup

      // this.form.get('firstname').patchValue(data.first);
      // obligée de passer par une interface pour typer fortement
      this.form.get('firstname').patchValue((data as Quote).firstname);
      this.form.get('lastname').patchValue((data as Quote).lastname)
      this.form.get('quote').patchValue((data as Quote).text);
      this.form.get('key').patchValue((data as Quote).key);

    });

    this.authService.user$.subscribe(user => {
      console.log('user: ', user);
      // on avait sélectionné userAdmin sur la base de user.uid
      // la  preuve qu'on pouvait le faire sur la base de usesr.email...
      if(user && user.email === 'jeannet.julie@gmail.com') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }, error => {
      console.error(error);
    });
  }

  saveQuote() {
    console.log('form valid', this.form.valid);
    if (!this.form.valid) {
      console.log("form NOT valid");
      return;
    }
    console.log("form is valid");
    if (!this.isInEditMode) {
      this.verb = "ajouter";
      this.create.emit(this.form);
    } else if (this.isInEditMode) {
      this.update.emit(this.form);
      this.isInEditMode = !this.isInEditMode;
    }
    // console.log('before reset');
    this.form.reset();
    // old hack de codeconcept pour remise à zéro des styles du formulaire après soumission
    this.active=false;
    setTimeout(() => this.active = true, 0);

    this.verb = "ajouter";
  }

  cancelEdit() {
    this.isInEditMode = false;
    this.verb = "ajouter";
    this.form.reset();
  }

}
