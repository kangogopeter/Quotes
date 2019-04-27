export class Quote {
public showDescription: boolean;
constructor(public id: number, public name: string, public description: string, public data: new(Time, getFullDay, getTime) => any ) {
  this.showDescription = false;
}
}
