import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercheCandidatureTitre'
})
export class RechercheCandidatureTitrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
