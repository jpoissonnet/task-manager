import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateToJMY'
})
export class DateToJMYPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`
  }

}
