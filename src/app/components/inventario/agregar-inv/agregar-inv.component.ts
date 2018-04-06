import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';

declare var $;

@Component({
  selector: 'app-agregar-inv',
  templateUrl: './agregar-inv.component.html',
  styles: []
})
export class AgregarInvComponent implements OnInit {

  constructor(
  private servicio:InventarioService,
  private ruta:Router
  ) {
   }

  ngOnInit() {
    this.noEnter();
  }
  noEnter(){
    $(document).ready(function(){
      $(window).keydown(function(event){
        if(event.keyCode == 13) {
          return false;
        }
      });

    })

  }

  kiloMedia:number;
  nroTropa:number;
  agregarInv(forma:NgForm){

    this.kiloMedia = forma.value.kiloMedia;
    this.nroTropa = forma.value.nroTropa;
    if (this.kiloMedia <=0 || this.nroTropa <=0) {
        alert('El valor tiene que ser mayor a 0');
    }else{

      this.servicio.addInventario(this.kiloMedia, this.nroTropa)
      .subscribe(res=>{

         if(res == 'no'){
          $('#noMedias').modal('show');
         }else{

           this.ruta.navigate(['inventario']);
         }
      })
    }
  }


  comprobarInv:boolean = true;
  nroTropaComprobar:string;
  comprobarInventario(forma:NgForm){

    // console.log(forma.value.nombreCategoria)
    this.nroTropaComprobar = forma.value.nroTropa
      //  console.log(this.nroTropaComprobar);
      this.servicio.comprobarInv(this.nroTropaComprobar)
      .subscribe( res =>{
        // console.log(res);
        
        if (res == 1) {
            this.comprobarInv = true;
        }else{
          this.comprobarInv = false;

        }
      })

  }


}
