import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade',
  standalone: true
})
export class GradePipe implements PipeTransform {

  transform(value:number): {grade:string;color:string}{
    let grade = '';
    let color = '';
    if(value>=90){
      grade = 'A';
      color = 'green';
    }else if(value<90 && value > 60){
      grade = 'B';
      color = 'blue';
    }
    else if (value<60 && value > 35){
      grade = 'C';
      color = 'orange';
    }
    else if(value >35){
      grade = 'FAIL';
      color = 'red';
    }
     
    return {grade,color}
  }

}
