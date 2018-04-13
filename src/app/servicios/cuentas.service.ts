import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CuentasService {

  constructor(
    private http:Http
  ) { }

sakdo:any
  getSaldo() {
    return this.http.get("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=getSaldos")
      .map(res => {
        this.sakdo= res;
        if (this.sakdo._body !== '') {
          return res.json();
          
        }
      });
   }

   pagos:any
  getPagos() {
    return this.http.get("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=getPagos")
      .map(res => {
        this.pagos= res;
        if (this.pagos._body !== '') {
          return res.json();
          
        }
      });
   }

   getSaldoId(idCliente) {
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=getSaldosId",
    { 'idCliente': idCliente })
      .map(res => {
        return res.json();
      });
   }
   getFacturaDetalles(idCliente, fechaInicial, fechaFinal){
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=getDetallesFac",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
      .map(res => {
        return res.json();
      });
   }


   getKilos(idCliente, fechaInicial, fechaFinal){
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=totalKilos",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
      .map(res => {
        return res.json();
      });
   }

   totalEntradaId(idCliente) {
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=totalEntradaId",
    { 'idCliente': idCliente })
      .map(res => {
        
        return res.json();
      });
   }

   totalSalidaId(idCliente) {
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=totalSalidaId",
    { 'idCliente': idCliente })
      .map(res => {
        return res.json();
      });
   }


   getCuentaCorriente(idCliente, fechaInicial, fechaFinal){
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=todo",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
      .map(res => {
        return res.json();
      });
   }


   addPagos(idCliente,comprobante,monto,efectivo,cheque, nroCheque,banco,propietario,idVendedor) {
    return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=addPagos",
    { 'idCliente': idCliente, 'comprobante':comprobante , 
    'monto':monto,'efectivo':efectivo, 'cheque':cheque, 'nroCheque':nroCheque , 
    'banco':banco, 'propietario':propietario, 'idVendedor':idVendedor})
      .map(res => {
        return res.json();
      });
   }
   


  //  addPagoss(idCliente,comprobante,monto,efectivo,cheque, nroCheque,banco,propietario) {
  //   return this.http.post("http://localhost/Frigorifico/controllers/cuentasControllers.php?id=addPagoss",
  //   { 'idCliente': idCliente, 'comprobante':comprobante , 
  //   'monto':monto,'efectivo':efectivo, 'cheque':cheque, 'nroCheque':nroCheque , 
  //   'banco':banco, 'propietario':propietario})
  //     .map(res => {
  //       return res.json();
  //     });
  //  }
   

}
