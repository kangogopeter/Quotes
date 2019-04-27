import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const now: 'new Time' = new Time();
    const nowWithNoDate: any = new Time(now.getFullDay(),  now.getTime());
    const timeIntake = Math.abs( nowWithNoDate - value );
    const secondsInADay = 86400;
    const timeDifference = timeIntake * 0.0001;
    const dateCount = timeDifference / secondsInADay;
    if ( dateCount >= 1 && value > nowWithNoDate) {
    return dateCount;
  } else {
    return null;
  }
}
}
