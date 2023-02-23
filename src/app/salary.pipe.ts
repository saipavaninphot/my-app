import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Rs."+value+"LPA";
  }

}
