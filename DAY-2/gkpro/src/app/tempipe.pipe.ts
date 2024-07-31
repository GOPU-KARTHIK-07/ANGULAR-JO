// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'tempipe',
//   standalone: true
// })
// export class TempipePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempipe',
  standalone: true
})
export class TempipePipe implements PipeTransform {
  transform(value: number, unit: string): string {
    if (unit === 'C') {
      // Convert Celsius to Fahrenheit
      return ((value * 9/5) + 32).toFixed(2) + ' F';
    } else if (unit === 'F') {
      // Convert Fahrenheit to Celsius
      return ((value - 32) * 5/9).toFixed(2) + ' C';
    }
    return value.toString();
  }
}
