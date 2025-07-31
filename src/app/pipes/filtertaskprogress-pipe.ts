import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertaskprogress',
})
export class FiltertaskprogressPipe implements PipeTransform {

transform(value: string[], progressType: string): string[] {
  // console.log(value, progressType, 'this is value to pipe');
  const filteredProgressType = value.filter(item => item !== progressType);
  // console.log(filteredProgressType, 'this is filtered data...');
  return filteredProgressType; // ✅ Return the filtered array
}


}
