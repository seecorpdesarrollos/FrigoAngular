import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';

declare var $;
@Component({
  selector: 'app-inventario-cuarteo',
  templateUrl: './inventario-cuarteo.component.html',
  styles: []
})
export class InventarioCuarteoComponent implements OnInit {

  constructor(
    private service:InventarioService ,
    private ruta:Router) { }

  ngOnInit() {
    this.getCuarteo();
  }


  loader:boolean = false;
  inventario:any;
  total:any=0;
  totales:any=0;
  totalMedia:any=0;
   public data: any[];
   public filterQuery = "";
   public rowsOnPage = 2;
nada:boolean;
  getCuarteo(){
    this.service.getCuarteoServicioInventario()
    .subscribe(res=>{
      this.loader= true;
      this.data = res;
      if(this.data == undefined){
        console.log(this.data)
        this.nada= false;
      }else{
        this.nada =true;
      }
    })

  }

idCuarteo:any;
  eliminar(idCuarteo , cantidad){
    this.idCuarteo = idCuarteo;
    if (cantidad == 0) {
      $('#cuarteoVendido').modal('show');  
    }else{

      $('#eliminarCuarteo').modal('show');
    }
  }

  borrarCuarteo(idCuarteo){
    // alert(idCuarteo)
    this.service.borrarCuarteoId(idCuarteo)
    .subscribe(res=>{
      // console.log(res)
      this.ruta.navigate(['cuarteo/exitosCuarteo/eliminar']);
      setTimeout(()=>{
        this.ruta.navigate(['cuarteo/inventarioCuerteo']);

      },3000);
    })

  }


datos:any;
masInfo(idCuarteoInventario){

    this.service.masInfo(idCuarteoInventario)
    .subscribe(res=>{
      $('#mas').modal('show');
      this.datos = res;
    });

}


imprimirCuarteo(areaImprimir){
  location.reload();
var contenido= document.getElementById(areaImprimir).innerHTML;
var contenidoOriginal= document.body.innerHTML;

document.body.innerHTML = contenido;

window.print();

document.body.innerHTML = contenidoOriginal;
}

}
