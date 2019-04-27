import { Component, OnInit } from '@angular/core';
import {Quote} from './quote.';
import { Time } from './time-count-pipe';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
         new Quote(1, 'My Fear Is Not Death Itself,But A Death Without A Meaning', 'Who Are You', new Time(12, 25)),
         new Quote(2, 'Seat Back', 'I Slept With A Dog', new Time(09, 15)),
         new Quote(3, 'Hate Bootcamp', 'Love Coding But Not Bootcamp', new Time(10, 20)),
         new Quote(4, 'Ingore Pet But Criminate Peter', 'Love Or Hate He Still Rocks', new Time(13, 40)),
         new Quote(5, 'Steal The Steel', 'Javascript Almost Fucked Me', new Time(14, 59)),
         new Quote(6, 'Stalkers Are The Worst', 'I Hate You', new Time(16, 12)),

     ];

     completeQuote( isComplete, index ) {
       if (isComplete) {
         this.quotes.splice(index, 1);
       }
     }

     toogleDetails( index ) {
         this.quotes[index].showDescription = !this.quotes[index].showDescription;
     }
     deleteQuote( isComplete, index) {
       if ( isComplete ) {
         const toDelete = confirm( 'do you want to delete ${this.quote[index].name}' );

         if ( toDelete ) {
     this.quotes.splice( index, 1 );
    }
       }
     }
     addNewQuote( quote ) {
        const quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeTime = new Time(quote.completeTime);
        this.quotes.push(quote);
     }
  constructor() { }

  ngOnInit() {
  }

}
