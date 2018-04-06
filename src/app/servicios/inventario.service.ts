import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InventarioService {

  constructor( private http:Http) { }


  addInventarioCuarteo(pecho,  mocho , parrillero, completos , largos, bifes, asado,totalPeso, idCuarteo) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=addInventarioCuarteo",
      {'pecho': pecho, 'mocho': mocho, 'parrillero':parrillero, 'completos':completos, 'largos':largos, 'bifes':bifes, 'asado':asado , 'totalPeso':totalPeso , 'idCuarteo':idCuarteo })
      .map(res=>res.json())
  }

  addInventario(kiloMedia,  nroTropa) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=addInventario",
      {'kiloMedia': kiloMedia, 'nroTropa': nroTropa })
      .map(res=>res.json())
  }

  addCuarteo(kiloMedia,  nroTropa ,idInventario) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=addCuarteo",
      {'kiloMedia': kiloMedia, 'nroTropa': nroTropa , 'idInventario': idInventario })
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

  cuarteo:any;
    getCuarteoServicio() {
    return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=cuarteo")
      .map(resultado => {
        this.cuarteo = resultado;
        if (this.cuarteo._body !== '') {
          return resultado.json();
        }
      })
  }

  cuarteoInventario:any;
    getCuarteoServicioInventario() {
    return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=cuarteoInventario")
      .map(resultado => {
        this.cuarteoInventario = resultado;
        if (this.cuarteoInventario._body !== '') {
          return resultado.json();
        }
      })
  }

  inventarioTotal:any;
    getInventarioTotal() {
    return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getInvTotal")
      .map(resultado => {
        this.inventarioTotal = resultado;
        if (this.inventarioTotal._body !== '') {
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

  masinfo:any;
    masInfo(idCuarteoInventario) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=idCuarteoInventario",
      { 'idCuarteoInventario' :idCuarteoInventario })
      .map(resultado => {
        this.masinfo = resultado;
        if (this.masinfo._body !== '') {
          return resultado.json();
        }
      })
  }

  borrar:any;
    borrarCuarteo(idInventario) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=borrarCuarteo",
      { 'idInventario' :idInventario })
      .map(resultado => {
        this.borrar = resultado;
        if (this.borrar._body !== '') {
          return resultado.json();
        }
      })
  }

  borrarCua:any;
    borrarCuarteoId(idCuarteo) {
    return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=borrarCuarteoId",
      { 'idCuarteo' :idCuarteo })
      .map(resultado => {
        this.borrarCua = resultado;
        if (this.borrarCua._body !== '') {
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


temporal(pesoCuarto,idCuarto,descripcion,precio) {
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=temporal",
    {'pesoCuarto': pesoCuarto, 'idCuarto': idCuarto, 'descripcion':descripcion, 'precio':precio })
    .map(res=>res.json())
}

temporal1(medias, nroTropa, precio, idInventario) {
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=temporal1",
    {'medias': medias, 'nroTropa':nroTropa , 'precio': precio, 'idInventario':idInventario })
    .map(res=>res.json())
}


temp:any;
  getTemp() {
  return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getTemp")
    .map(resultado => {
      this.temp = resultado;
      if (this.temp._body !== '') {
        return resultado.json();
      }
    })
}


temp1:any;
  getTemp1() {
  return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getTemp1")
    .map(resultado => {
      this.temp1 = resultado;
      if (this.temp1._body !== '') {
        return resultado.json();
      }
    })
}



total:any;
  getTotalTemp() {
  return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getTotalTemp")
    .map(resultado => {
      this.total = resultado;
      if (this.total._body !== '') {
        return resultado.json();
      }
    })
}

total1:any;
  getTotalTemp1() {
  return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getTotalTemp1")
    .map(resultado => {
      this.total1 = resultado;
      if (this.total1._body !== '') {
        return resultado.json();
      }
    })
}

borra:any;
  borrarTempId(idTemp ,descripcion,peso,  id) {
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=borrarTemp",
    { 'idTemp' :idTemp , 'descripcion' :descripcion , 'peso': peso,  'id' :id })
    .map(resultado => {
      this.borra = resultado;
      if (this.borra._body !== '') {
        return resultado.json();
      }
    })
}

borra1:any;
  borrarTempId1(idInventario) {
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=borrarTemp1",
    { 'idInventario' :idInventario  })
    .map(resultado => {
      this.borra1 = resultado;
      if (this.borra1._body !== '') {
        return resultado.json();
      }
    })
}

factura:any
getFactura() {
return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getFactura")
  .map(resultado => {
    this.factura = resultado;
    if (this.factura._body !== '') {
      return resultado.json();
    }
  })
}


ventas:any;
  venta(idCliente , nroFactura, total, idAdmin) {
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=ventas",
    { 'idCliente' :idCliente , 'nroFactura' : nroFactura, 'total':total , 'idAdmin':idAdmin })
    .map(resultado => {
      this.ventas = resultado;
      if (this.ventas._body !== '') {
        return resultado.json();
      }
    })
}


facturas:any
getFacturas() {
return this.http.get("http://localhost/Frigorifico/controllers/inventarioController.php?id=getFacturas")
  .map(resultado => {
    this.facturas = resultado;
    if (this.facturas._body !== '') {
      return resultado.json();
    }
  })
}


getDet:any;
getDetalles(nroFactura){
  return this.http.post("http://localhost/Frigorifico/controllers/inventarioController.php?id=getDetalles",
    { 'nroFactura' : nroFactura })
    .map(resultado => {
      this.getDet = resultado;
      if (this.getDet._body !== '') {
        return resultado.json();
      }
    })
}





}
