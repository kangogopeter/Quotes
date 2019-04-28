import { Component, Input, PipeTransform } from '@angular/core';
import { Quote} from './quote';
import { Time } from './time-count.pipe.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quote = 'submit';
 bill = 'quotes';

 quotes = [
  new Quote(1, 'My Fear Is Not Death Itself,But A Death Without A Meaning', 'Who Are You', new Time(12, 25)),
  new Quote(2, 'Seat Back', 'I Slept With A Dog', new Time(09, 15)),
  new Quote(3, 'Hate Bootcamp', 'Love Coding But Not Bootcamp', new Time(10, 20)),
  new Quote(4, 'Ingore Pet But Criminate Peter', 'Love Or Hate He Still Rocks', new Time(13, 40)),
  new Quote(5, 'Steal The Steel', 'Javascript Almost Fucked Me', new Time(14, 59)),
  new Quote(6, 'Stalkers Are The Worst', 'I Hate You', new Time(16, 12)),

];
}
