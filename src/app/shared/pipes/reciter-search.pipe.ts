import { Pipe, PipeTransform } from '@angular/core';
import { ReciterInfo } from '../interfaces/reciter-info';

@Pipe({
  name: 'reciterSearch',
  standalone: true,

})
export class ReciterSearchPipe implements PipeTransform {

  transform(reciterInfo:ReciterInfo[], search:string): ReciterInfo[] {
    if(search==null){
      return reciterInfo;
    }
    
   return  reciterInfo.filter(
    (item)=>{
     return  item.name.toLowerCase().includes(search.toLowerCase());
    }
   )
  
  }

}
