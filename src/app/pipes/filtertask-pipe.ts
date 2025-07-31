interface taskInfo {
  taskName:string,
  taskProgress:string,
} 

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertask'
})
export class FiltertaskPipe implements PipeTransform {

  transform(value:  taskInfo[], progressType: string): taskInfo[] {
    console.log(value, progressType, 'this is data from filtertask...')
    const filteredValue = value.filter((item) => item.taskProgress.toLowerCase() === progressType.toLowerCase())
    return filteredValue;
  }

}
