import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercheCandidatureTitre'
})
export class RechercheCandidatureTitrePipe implements PipeTransform {

  transform(value:any,term:any ): any {
    console.log("valus is : ",value);

    console.log("titre candidature is ",term);
    
    
    if(term==null){
      return value;
    }else{
      return value.filter((item:any)=>(item.titre.includes(term)));
    }
  }

}
