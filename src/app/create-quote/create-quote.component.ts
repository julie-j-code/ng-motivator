import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Pour la création du Reactiv Form
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
// import { ɵEmptyOutletComponent } from '@angular/router';
import { QuotesService } from "../services/quotes.service";

export interface Quote{
  lastname:string,
  firstname:string,
  text:string,
  key:string

}

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form:FormGroup;
  @Output() create=new EventEmitter();
  @Output() update=new EventEmitter();


  constructor(private formBuilder:FormBuilder, private quoteServices:QuotesService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      firstname:[""],
      lastname:["", Validators.required],
      quote:["", Validators.required]
    });

this.quoteServices.subject.subscribe(data=>{
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

  createQuote(){
    console.log('form valid', this.form.valid);
    if(this.form.valid){
      this.create.emit(this.form);

     }
  }

}
