import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: QuotesComponent },
    { path: 'quote/:id', component: QuoteDetailsComponent },
    { path: 'admin', component: BackendHomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
