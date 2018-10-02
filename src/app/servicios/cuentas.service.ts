import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CuentasService {

  constructor(
    private http:Http
  ) { }

sakdo:any
  getSaldo() {
    return this.http.get("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getSaldos")
      .map(res => {
        this.sakdo= res;
        if (this.sakdo._body !== '') {
          return res.json();
          
        }
      });
   }

   pagos:any
  getPagos() {
    return this.http.get("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getPagos")
      .map(res => {
        this.pagos= res;
        if (this.pagos._body !== '') {
          return res.json();
          
        }
      });
   }



   getSaldoId(idCliente) {
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getSaldosId",
    { 'idCliente': idCliente })
      .map(res => {
        return res.json();
      });
   }
   getFacturaDetalles(idCliente, fechaInicial, fechaFinal){
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getDetallesFac",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
      .map(res => {
        return res.json();
      });
   }


   getKilos(idCliente, fechaInicial, fechaFinal){
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=totalKilos",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
      .map(res => {
        return res.json();
      });
   }

   totalEntradaId(idCliente) {
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=totalEntradaId",
    { 'idCliente': idCliente })
      .map(res => {
        
        return res.json();
      });
   }

   totalSalidaId(idCliente) {
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=totalSalidaId",
    { 'idCliente': idCliente })
      .map(res => {
        return res.json();
      });
   }


   getCuentaCorriente(idCliente, fechaInicial, fechaFinal){
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=todo",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
      .map(res => {
        return res.json();
      });
   }


   addPagos(idCliente,comprobante,monto,efectivo,cheque, nroCheque,banco,propietario,idVendedor, fechaCobro) {
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=addPagos",
    { 'idCliente': idCliente, 'comprobante':comprobante , 
    'monto':monto,'efectivo':efectivo, 'cheque':cheque, 'nroCheque':nroCheque , 
    'banco':banco, 'propietario':propietario, 'idVendedor':idVendedor, 'fechaCobro':fechaCobro})
      .map(res => {
        
        
        return res.json();
      });
   }

   saldoAnterior(idCliente, fechaInicial){
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=saldoAnterior",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial })
      .map(res => {
        return res.json();
      })
   }
   

// comienza principal


inventa:any
getInventaTropa() {
  return this.http.get("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getInventarioTropa")
    .map(res => {
      this.inventa= res;
      if (this.inventa._body !== '') {
        return res.json();
        
      }
    });
 }



disponible:any
getInventaTropaDisponible() {
  return this.http.get("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getInventarioTropaDisponible")
    .map(res => {
      this.disponible= res;
      if (this.disponible._body !== '') {
        return res.json();
        
      }
    });
 }

 vendiso:any
getInventaTropaVendido() {
  return this.http.get("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getInventarioTropaVendido")
    .map(res => {
      this.vendiso= res;
      if (this.vendiso._body !== '') {
        return res.json();
        
      }
    });
 }


 cant:any
 getCant() {
   return this.http.get("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getCant")
     .map(res => {
       this.cant= res;
       if (this.cant._body !== '') {
         return res.json();
         
       }
     });
  }
 
getExistencias(nroTropa){
  return this.http.post("https://losmagnates.com/Frigorifico/controllers/cuentasControllers.php?id=getExistencia",
   {'nroTropa':nroTropa})
  .map(res => {
    this.cant= res;
      return res.json();
      
  });
}


}
