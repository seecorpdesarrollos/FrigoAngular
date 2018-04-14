import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NotasService {

  constructor( private http:Http) { }


  notaCredito:any;
  getNotaCredito() {
  return this.http.get("http://localhost/Frigorifico/controllers/notasController.php?id=getNotaCredito")
    .map(resultado => {
      this.notaCredito = resultado;
      if (this.notaCredito._body !== '') {
        return resultado.json();
      }
    })
}

  addNotaCredito(descripcionCredito,cantidadCredito,importeCredito,idCliente) {
    return this.http.post("http://localhost/Frigorifico/controllers/notasController.php?id=addNotaCredito",
      {'descripcionCredito': descripcionCredito, 'cantidadCredito': cantidadCredito,
      'importeCredito': importeCredito, 'idCliente': idCliente })
      .map(res=>res.json());
  }

  deleteNotaCredito(idNotaCredito,idCliente , totalCredito) {
    return this.http.post("http://localhost/Frigorifico/controllers/notasController.php?id=deleteNotaCredito",
      {'idNotaCredito': idNotaCredito,  'idCliente': idCliente , 'totalCredito':totalCredito })
      .map(res=>res.json());
  }


}
