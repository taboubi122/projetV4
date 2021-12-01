import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ville'
})
export class VillePipe implements PipeTransform {

  transform(nom:string): unknown {
    return nom+' - Tunisie';
  }


}
