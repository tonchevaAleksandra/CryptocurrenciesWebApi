import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changed'
})
export class ChangedPipe implements PipeTransform {

  transform(value: number): any {
    const arrow: string = value <= 0 ? '↓' : '↑';
    return `${value.toFixed(2)}% ${arrow}`;
  }

}
