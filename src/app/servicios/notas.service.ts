import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NotasService {

  constructor( private http:Http) { }


  notaCredito:any;
  getNotaCredito() {
  return this.http.get("https://seecorpdesarrollos.com/Frigorifico/controllers/notasController.php?id=getNotaCredito")
    .map(resultado => {
      this.notaCredito = resultado;
      if (this.notaCredito._body !== '') {
        return resultado.json();
      }
    })
}

  addNotaCredito(descripcionCredito,cantidadCredito,importeCredito,idCliente) {
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/notasController.php?id=addNotaCredito",
      {'descripcionCredito': descripcionCredito, 'cantidadCredito': cantidadCredito,
      'importeCredito': importeCredito, 'idCliente': idCliente })
      .map(res=>res.json());
  }

  deleteNotaCredito(idNotaCredito,idCliente , totalCredito) {
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/notasController.php?id=deleteNotaCredito",
      {'idNotaCredito': idNotaCredito,  'idCliente': idCliente , 'totalCredito':totalCredito })
      .map(res=>res.json());
  }


  // debitos


  addNotaDebito(descripcionDebito,cantidadDebito,importeDebito,nroCheque,idCliente) {
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/notasController.php?id=addNotaDebito",
      {'descripcionDebito': descripcionDebito, 'cantidadDebito': cantidadDebito,
      'importeDebito': importeDebito,  'nroCheque': nroCheque, 'idCliente': idCliente })
      .map(res=>res.json());
  }


  addNotaDebitoSinCheque(descripcionDebito,cantidadDebito,importeDebito ,idCliente) {
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/notasController.php?id=addNotaDebitoSinCheque",
      {'descripcionDebito': descripcionDebito, 'cantidadDebito': cantidadDebito,
      'importeDebito': importeDebito, 'idCliente': idCliente })
      .map(res=>{console.log(res);
      });
  }


  notaDebito:any;
  getnotaDebito() {
  return this.http.get("https://seecorpdesarrollos.com/Frigorifico/controllers/notasController.php?id=getNotaDebito")
    .map(resultado => {
      this.notaDebito = resultado;
      if (this.notaDebito._body !== '') {
        return resultado.json();
      }
    })
}



}
