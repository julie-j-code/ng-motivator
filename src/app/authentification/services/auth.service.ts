import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
// sur versions récentes : attention le cours est out of date
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
// AngularFireAuth met à disposition un observable pour connaitre les données rattachées à l'utilisateur actuellement connecté
import { Observable } from "rxjs/observable";
// import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // rappel : on utilise par convention le suffixxe $ pour préciser que c'est un observable
  user$ : Observable<any>;

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {
    this.user$=this.afAuth.authState;
  }


  register(email:string, password:string){

    // return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }





}
