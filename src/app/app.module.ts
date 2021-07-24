import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component'
import { LoginComponent } from './authentification/login/login.component';

import { QuotesService } from "./services/quotes.service";
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';
import { AuthService } from "./authentification/services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// material design
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [QuotesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
