import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(animes: any, term: any): any {
    //check if search term is undefined
    if ( term === undefined) return animes;
  //return updated animes array
  return animes.filter(function(anime){
    return anime.name.toLowerCase().includes(term.toLowerCase());
  });
  }

}
