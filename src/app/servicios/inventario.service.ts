import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InventarioService {

  constructor( private http:Http) { }


  addInventario(kiloMedia,  nroTropa) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=addInventario",
      {'kiloMedia': kiloMedia, 'nroTropa': nroTropa })
      .map(res=>res.json())
  }

  inventario:any;
    getInventario() {
    return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getInv")
      .map(resultado => {
        this.inventario = resultado;
        if (this.inventario._body !== '') {
          return resultado.json();
        }
      })
  }

  inventarioTropa:any;
    getInventarioTropa(nroTropa) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=getInvTropa",
      { 'nroTropa' :nroTropa })
      .map(resultado => {
        this.inventarioTropa = resultado;
        if (this.inventarioTropa._body !== '') {
          return resultado.json();
        }
      })
  }

  totalKilos:any;
    getTotalTropa(nroTropa) {
      return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=getInvTropaKilos",
      { 'nroTropa' :nroTropa })
      .map(resultado => {
        this.totalKilos = resultado;
        if (this.totalKilos._body !== '') {
          return resultado.json();
        }
      })
  }

  getInv: any;
getInventarioId(idInventario) {
 return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=editarInvId", { 'idInventario': idInventario })
   .map(res => {
     this.getInv = res;
     return this.getInv.json();
   });
}
resultados: any;
comprobarInv(nroTropaComprobar){
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=comprobar",
  {'nroTropaComprobar':nroTropaComprobar})
  .map( resultado =>{
     this.resultados = resultado;
    if (this.resultados._body === 1) {
      return this.resultados.json();
    }else{
      return this.resultados.json();
    }
  })

}

editarInventario(kiloMedia,  nroTropa ,idInventario) {
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=editarInventario",
    {'kiloMedia': kiloMedia, 'nroTropa': nroTropa, 'idInventario':idInventario })
    .map(res=>res.json())
}



}
