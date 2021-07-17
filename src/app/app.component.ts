import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngmotivator';

  onQuoteCreated(quote){
    console.log("quote retrieved", quote);
  }
}
