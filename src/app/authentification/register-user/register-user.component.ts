import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  newUser={
    email:"",
    password:""
  }

  existingUser={
    email:"",
    password:""
  }
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }



  registerUser(){
    // console.log(this.newUser.email, this.newUser.password);
    this.authService.register(this.newUser.email, this.newUser.password)
    .then(createdUser => {
      console.log('createdUser', createdUser);
      // TODO reset form

    })
    .catch(error => console.error(error.message));
  }

  loginUser() {
    this.authService.login(this.existingUser.email, this.existingUser.password)
      .then(value => {
        console.log('login réussi :)', value);
      })
      .catch(err => {
        console.log('erreur :(', err.message);
      });
}

logoutUser(){
  this.authService.logout();
}

sendVerificationMail(){
  this.authService.sendVerificationMail();
}





}
