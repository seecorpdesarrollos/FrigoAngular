import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => (
        row.kiloMedia +
        row.nroTropa+
        row.dueHacienda+
        row.fechaFaena+
        row.estado+
         row.nombreVendedor
      ).toLowerCase().indexOf(query) > -1

    );
  }
  // else{
  //    'Nada por mostrar'
  // }
    return array;
  }

}
