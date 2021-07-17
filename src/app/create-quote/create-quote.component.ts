import { Component, OnInit } from '@angular/core';
// Pour la création du Reactiv Form
import { FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      firstname:[""],
      lastname:["", Validators.required],
      quote:["", Validators.required]
    })
  }

  createQuote(){
    console.log('form valid', this.form.valid);
    // if(this.form.valid){
      // il ne restera qu'à ajouter en base les valeurs du formulaire

    // }
  }

}
