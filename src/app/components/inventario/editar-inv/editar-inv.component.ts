import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';

declare var $;
@Component({
  selector: 'app-editar-inv',
  templateUrl: './editar-inv.component.html',
  styles: []
})
export class EditarInvComponent implements OnInit {

  constructor(
    private ruta:Router,
   private parametro:ActivatedRoute,
   private servicio: InventarioService
  ) { }

  ngOnInit() {
    this.getProductosId();
  }

  loader:boolean = false;
  idInventario= this.parametro.snapshot.params['idInventario'];
  inv:any;
  getProductosId(){
        $(window).keydown(function(event){
              if(event.keyCode == 13) {
                  return false;
                }
        });
    this.servicio.getInventarioId(this.idInventario)
    .subscribe(respuesta=>{
      this.loader = true;
      if (respuesta.cantidad == 0) {
        this.loader = false;
        $('#noCantidad').modal('show');
      }else{
         this.loader = true;
         return this.inv = respuesta;
      }
    // console.log(respuesta)
    })
  }


 kiloMedia:number;
 tropa:any;
  editarInv(forma:NgForm){

    this.kiloMedia = forma.value.kiloMedia;
    if (this.kiloMedia <=0) {
        alert('El peso de la media res tiene que ser mayor a 0');
    }else{


      this.tropa = forma.value.nroTropa;
      this.servicio.editarInventario(this.kiloMedia, this.tropa, this.idInventario)
      .subscribe(()=>{
        this.ruta.navigate(['inventario/exitosInv/editar']);
        setTimeout(()=>{
          this.ruta.navigate(['inventario']);

        },3000);
      })
    }

  }

comprobarInv:boolean = true;
nroTropaComprobar:string;
comprobarInventario(forma:NgForm){

  // console.log(forma.value.nombreCategoria)
  this.nroTropaComprobar = forma.value.nroTropa
    // console.log(this.nroTropaComprobar);
    this.servicio.comprobarInv(this.nroTropaComprobar)
    .subscribe( res =>{
      if (res == 1) {
          this.comprobarInv = true;
      }else{
        this.comprobarInv = false;

      }
    })

}

  back(){
    this.ruta.navigate(['inventario']);
  }


}
