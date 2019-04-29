export class Quote {
public showDescription: boolean;
public showSubmit: boolean;
constructor(public id: number, public name: string, public description: string ) {
  this.showDescription = false;
  this.showSubmit = false;
}
}
