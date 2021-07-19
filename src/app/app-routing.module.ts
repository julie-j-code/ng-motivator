import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: QuotesComponent },
    { path: 'quote/:id', component: QuoteDetailsComponent },
    { path: 'admin', component: CreateQuoteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
