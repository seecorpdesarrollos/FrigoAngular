import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';
import { ProductosService } from '../../../servicios/productos.service';

declare var $;

@Component({
  selector: 'app-agregar-inv',
  templateUrl: './agregar-inv.component.html',
  styles: []
})
export class AgregarInvComponent implements OnInit {

  constructor(
  private servicio:InventarioService,
  private ruta:Router,
  private prod:ProductosService
  ) {
   }

  ngOnInit() {
    this.noEnter();
    this.getProductosTropa();
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
  public nroTropa:number;
  agregarInv(){
      
    // this.kiloMedia = forma.value.kiloMedia;
    // this.nroTropa = forma.value.nroTropa;
    // if (this.kiloMedia <=0 || this.nroTropa <=0) {
    //     alert('El valor tiene que ser mayor a 0');
    // }else{

    //   this.servicio.addInventario(this.kiloMedia, this.nroTropa)
    //   .subscribe(res=>{

    //      if(res == 'no'){
    //       $('#noMedias').modal('show');
    //      }else{

    //        this.ruta.navigate(['inventario']);
    //      }
    //   })
    // }
  }


  comprobarInv:boolean = true;
  nroTropaComprobar:any;
  comprobarInventario(forma:NgForm){
    this.toggle =true;
    // console.log(forma.value.nombreCategoria)
    this.nroTropaComprobar =forma.value.nroTropa;
        // console.log(this.nroTropaComprobar);
      this.servicio.comprobarInv(this.nroTropaComprobar)
      .subscribe( res =>{
        //  console.log(res);
        
        if (res == 1) {
            this.comprobarInv = true;
            this.toggle =false;
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
        }else{
          this.comprobarInv = false;
          this.toggle =false;
        }
      })

  }

  reset(){
    this.ruta.navigate(['inventario'])
    setTimeout(()=>{
    this.ruta.navigate(['inventario/agregarInv'])
      
    },20);
  }


  toggle:boolean=false;
 dataToggle(){
   this.toggle =true;

 }




 pro:boolean = false;
 select(value){
   this.nroTropa = value.nroTropa;
   this.toggle =false;
   this.pro = true;
    
 }

  nroTropas:any
  getProductosTropa(){
    this.prod.getProductos()
    .subscribe(res=>{
    
      this.nroTropas = res
      // console.log(this.nroTropas);
      
    })
  }


}
