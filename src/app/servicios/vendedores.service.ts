import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class VendedoresService {

  constructor( private http:Http) { }

  addVendedor(nombreVendedor,  telefonoVendedor) {
    return this.http.post("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=addVendedor",
      {'nombreVendedor': nombreVendedor, 'telefonoVendedor': telefonoVendedor })
      .map(res=>res.json())
  }

  vendedor:any;
    getVendedores() {
    return this.http.get("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=geVen")
      .map(resultado => {
        this.vendedor = resultado;
        if (this.vendedor._body !== '') {
          return resultado.json();
        }
      })
  }

  inactivos:any;
    getVendedoresInactivos() {
    return this.http.get("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=geVenInactivo")
      .map(resultado => {
        this.inactivos = resultado;
        if (this.inactivos._body !== '') {
          return resultado.json();
        }
      })
  }




  getVen: any;
getVededorId(idVendedor) {
 return this.http.post("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=geVenId", { 'idVendedor': idVendedor })
   .map(res => {
     this.getVen = res;
     return this.getVen.json();
   });
}

baja: any;
bajaVededorId(idVendedor) {
return this.http.post("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=bajaVenId", { 'idVendedor': idVendedor })
 .map(res => {
   this.baja = res;
   return this.baja.json();
 });
}

alta: any;
altaVededorId(idVendedor) {
return this.http.post("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=altaVenId", { 'idVendedor': idVendedor })
 .map(res => {
   this.alta = res;
   return this.alta.json();
 });
}


resultados: any;
comprobarVen(nombreVendedor){
  return this.http.post("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=comprobarVen",
  {'nombreVendedor':nombreVendedor})
  .map( resultado =>{
     this.resultados = resultado;
    if (this.resultados._body === 1) {
      return this.resultados.json();
    }else{
      return this.resultados.json();
    }
  })

}

editarVendedor(nombreVendedor,  telefonoVendedor ,idVendedor) {
  return this.http.post("http://localhost/Frigorifico/controllers/vendedorControllers.php?id=editarVendedor",
    {'nombreVendedor': nombreVendedor, 'telefonoVendedor': telefonoVendedor, 'idVendedor':idVendedor })
    .map(res=>res.json())
}


}
