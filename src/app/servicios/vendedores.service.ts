import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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


}
