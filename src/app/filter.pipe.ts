import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(characters: any[], searchTerm: string): any[] {
    if (!characters || !searchTerm) {
      return characters;
    }

    return characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}