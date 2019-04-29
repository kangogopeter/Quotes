import { Component } from '@angular/core';
import { Quote} from './quote';

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
  new Quote(1, `My Fear Is Not Death Itself,But A Death Without A Meaning`, `Who Are You`, ),
  new Quote(2, `Seat Back`, `I Slept With A Dog`, ),
  new Quote(3, `Hate Bootcamp`, `Love Coding But Not Bootcamp`, ),
  new Quote(4, `Ingore Pet But Criminate Peter`, `Love Or Hate He Still Rocks`, ),
  new Quote(5, `Steal The Steel`, `Javascript Almost Fucked Me`, ),
  new Quote(6, `Stalkers Are The Worst`, `I Hate You`, ),

];
}
