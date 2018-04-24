import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultasService {

  constructor(
    private http:Http
  ) { }


  getCli: any;
  getVentas(idCliente) {
   return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/reportesController.php?id=mediasVendidas", 
   { 'idCliente': idCliente })
     .map(res => {
       this.getCli = res;
       if (this.getCli._body !== '') {
        return this.getCli.json();
      }
     });
  }

  fe: any;
  getVentasFecha(fecha1, fecha2) {
   return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/reportesController.php?id=mediasVendidasFecha", 
   { 'fecha1': fecha1 , 'fecha2': fecha2 })
     .map(res => {
       this.fe = res;
       if (this.fe._body !== '') {
       
        return res.json();
      }else{
        return 0;
      }
     });
  }

}
