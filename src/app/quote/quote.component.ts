import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote' 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
         new Quote(1, 'My Fear Is Not Death Itself,But A Death Without A Meaning', 'Who Are You', ),
         new Quote(2, 'Seat Back', 'I Slept With A Dog', ),
         new Quote(3, 'Hate Bootcamp', 'Love Coding But Not Bootcamp', ),
         new Quote(4, 'Ingore Pet But Criminate Peter', 'Love Or Hate He Still Rocks', ),
         new Quote(5, 'Steal The Steel', 'Javascript Almost Fucked Me', ),
         new Quote(6, 'Stalkers Are The Worst', 'I Hate You', ),

     ]

     

     toogleDetails( index ) {
         this.quotes[index].showDescription = !this.quotes[index].showDescription;
         this.quotes[index].showSubmit = !this.quotes[index].showSubmit;
     }
     deleteQuote( isComplete, index) {
       if ( isComplete ) {
         let toDelete = confirm( 'do you want to delete ${this.quote[index].name}' );

         if ( toDelete = true ) {
     this.quotes.splice( index, 1 );
    }
       }
     }
     addNewQuote( quote ) {
        
        this.quotes.push(quote);
     }
  constructor() { }

  ngOnInit() {
  }

}
