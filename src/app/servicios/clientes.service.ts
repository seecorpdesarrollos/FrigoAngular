import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ClientesService {

  constructor( private http:Http) { }

  addCliente(nombreCliente,  telefonoCliente, direccionCliente) {
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=addCliente",
      {'nombreCliente': nombreCliente, 'telefonoCliente': telefonoCliente, 'direccionCliente':direccionCliente })
      .map(res=>res.json())
  }

  addDeuda(idCliente,  montoDeuda, idVendedor) {
    return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=deudaCliente",
      {'idCliente': idCliente, 'montoDeuda': montoDeuda, 'idVendedor':idVendedor })
      .map(res=>res.json())
  }

  vendedor:any;
    getClientes() {
    return this.http.get("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=getCli")
      .map(resultado => {
        this.vendedor = resultado;
        if (this.vendedor._body !== '') {
          return resultado.json();
        }
      })
  }

  vendedors:any;
  getClientesTodos() {
  return this.http.get("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=getCliTodos")
    .map(resultado => {
      this.vendedors = resultado;
      if (this.vendedors._body !== '') {
        return resultado.json();
      }
    })
}

  inactivos:any;
    getClientesInactivos() {
    return this.http.get("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=getCliInactivo")
      .map(resultado => {
        this.inactivos = resultado;
        if (this.inactivos._body !== '') {
          return resultado.json();
        }
      })
  }




  getCli: any;
getClienteId(idCliente) {
 return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=getCliId",
  { 'idCliente': idCliente })
   .map(res => {
     this.getCli = res;
    //  console.log(this.getCli);
     return this.getCli.json();
   });
}


getSaldo(idCliente) {
 return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=getSaldo",
  { 'idCliente': idCliente })
   .map(res => {
     return res.json();
   });
}



getClienteFacturadoId(idCliente) {
return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=getClienteFacturadoId",
{ 'idCliente': idCliente })
 .map(res => {

   return res.json();
 });
}

baja: any;
bajaClienteId(idCliente) {
return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=bajaCliente", { 'idCliente': idCliente })
 .map(res => {
   this.baja = res;
   return this.baja.json();
 });
}

alta: any;
altaVededorId(idCliente) {
return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=altaCliente", { 'idCliente': idCliente })
 .map(res => {
   this.alta = res;
   return this.alta.json();
 });
}


resultados: any;
comprobarVen(nombreVendedor){
  return this.http.post("https://losmagnates.com/Frigorifico/controllers/vendedorControllers.php?id=comprobarVen",
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

editarCliente(nombreCliente,  telefonoCliente, direccionCliente ,idCliente) {
  return this.http.post("https://losmagnates.com/Frigorifico/controllers/clienteController.php?id=editarCli",
    {'nombreCliente': nombreCliente, 'telefonoCliente': telefonoCliente, 'direccionCliente': direccionCliente, 'idCliente':idCliente })
    .map(res=>{
      console.log(res)
      res.json()
    })
}


}
