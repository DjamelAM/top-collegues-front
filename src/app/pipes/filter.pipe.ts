import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Collegue[], searchText: string): Collegue[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    if (searchText && value) {
      searchText = searchText.toLowerCase();
    }
    return value.filter(collegue => {
      return collegue.pseudo.toLowerCase().includes(searchText);
    });
  }
}


