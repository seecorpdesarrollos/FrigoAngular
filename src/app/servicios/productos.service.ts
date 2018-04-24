import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductosService {

  constructor(private http:Http) { }

  addProducto(dueHacienda,cantCabeza,cantMedia,fechaFaena,cantKilos,  nroTropa) {
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/productosControllers.php?id=add",
      {'dueHacienda': dueHacienda, 'cantCabeza': cantCabeza,
      'cantMedia': cantMedia, 'fechaFaena': fechaFaena,
      'cantKilos': cantKilos, 'nroTropa': nroTropa })
      .map(res=>res.json())
  }

  editProducto(dueHacienda,cantCabeza,cantMedia,fechaFaena,cantKilos,  nroTropa ,idProductos) {
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/productosControllers.php?id=edit",
      {'dueHacienda': dueHacienda, 'cantCabeza': cantCabeza,
      'cantMedia': cantMedia, 'fechaFaena': fechaFaena,
      'cantKilos': cantKilos, 'nroTropa': nroTropa , 'idProductos':idProductos })
      .map(res=>res.json())
  }


productos:any;
  getProductos() {
  return this.http.get("https://seecorpdesarrollos.com/Frigorifico/controllers/productosControllers.php?id=getProd")
    .map(resultado => {
      this.productos = resultado;
      if (this.productos._body !== '') {
        return resultado.json();
      }
    })
}

deleteCategoria(idProductos){
    return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/productosControllers.php?id=delete", { 'idProductos': idProductos })
     .map(()=>this.getProductos());
  }

  getPros: any;
getProductosId(idProductos) {
 return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/productosControllers.php?id=editarProdId", 
 { 'idProductos': idProductos })
   .map(res => {
     this.getPros = res;
     return this.getPros.json();
   });
}


getTropa: any;
getTropas(nroTropa) {
 return this.http.post("https://seecorpdesarrollos.com/Frigorifico/controllers/reportesController.php?id=getTropa", 
 { 'nroTropa': nroTropa })
   .map(res => {
     this.getTropa = res;
     return this.getTropa.json();
   });
}




}
