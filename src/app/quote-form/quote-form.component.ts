import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQoute = new Quote(0,"",""new Time());
@Output() addQuote=new EventEmitter<Quote>();

submitGoal(){
  this.addQuote.emit(this.newQuote);
}
  constructor() { }

  ngOnInit() {
  }

}
