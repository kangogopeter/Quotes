import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote-form.component';
import { Time } from './quote-form.component.spec';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
newQuote = new Quote(0, '', '', new Time());
@Output() addQuote = new EventEmitter<Quote>();

submitGoal() {
  this.addQuote.emit(this.newQuote);
}
  constructor() { }

  ngOnInit() {
  }

}
