import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe',
  standalone: true
})
export class MycustompipePipe implements PipeTransform {

  transform(value: any, ...args:any[]): any {
    return "Welcome  Dude "+value;
  }

}
