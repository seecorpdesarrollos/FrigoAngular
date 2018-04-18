import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductosService} from '../../../servicios/productos.service';

declare var $;
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  constructor(
    private service:ProductosService,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.getProductos();
  }

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 18;
loader:boolean = false;
  getProductos(){
    this.service.getProductos()
    .subscribe(res=>{
      this.loader = true;
      this.data= res;
      // console.log(res)
    })
  }


  idPro:any;
  borrarCat(idProductos){
     console.log(idProductos)
    this.idPro = idProductos
    $('#exampleModalCenter').modal({
      backdrop: false,
      keyboard: true,
      show: true
    })
    // this.service.deleteCategoria(this.idPro)
    // .subscribe(res=>{
    //   this.getProductos();
    // })

  }

  eliminar(){
    this.service.deleteCategoria(this.idPro)
    .subscribe(res=>{
      this.ruta.navigate(['productos/exitos/borrar']);
      setTimeout(()=>{
      this.ruta.navigate(['productos']);
      },3000);
      // console.log(res)
    })
  }

  inprimirTropa(impresion){
   location.reload();
    var contenido= document.getElementById(impresion).innerHTML;
    var contenidoOriginal= document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
  }

}
