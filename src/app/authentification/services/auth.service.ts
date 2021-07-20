import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
// sur versions récentes : attention le cours est out of date
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {
  }


  register(email:string, password:string){
    // return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }





}
