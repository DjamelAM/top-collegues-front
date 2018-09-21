import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value > 0) {

      return `Nombre de points : <span class="text-success">+ ${value}</span>`;

    }
    if (value < 0) {
      return `Nombre de points : <span class="text-danger"> ${value}</span>`;
    }
    else {
      return `Nombre de points : <span class="text-info"> ${value}</span>`;
    }
  }

}
