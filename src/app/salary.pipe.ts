import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var deductions = value * 0.25 + value * 0.12 + 200
    var hra = value * 0.12
    var da = value * 0.22
    var ta = value * 0.28

    return value + hra + da + ta - deductions;
  }
}
