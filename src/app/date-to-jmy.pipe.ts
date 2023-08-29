import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateToJMY'
})
export class DateToJMYPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value instanceof Date) {
      return `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`
    }
    return 'Not a date :' + value;
  }

}
