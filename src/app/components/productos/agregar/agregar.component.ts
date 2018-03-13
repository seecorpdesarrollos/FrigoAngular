import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductosService} from '../../../servicios/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {

  constructor(
    private service:ProductosService,
    private ruta:Router
  ) { }

  ngOnInit() {
  }


 dueHacienda:string;
 cantCabeza:number;
 cantMedia:number;
 fechaFaena:any;
 cantKilos:number;
 nroTropa:any;
 agregarPro(forma:NgForm){
   this.dueHacienda = forma.value.dueHacienda;
   this.cantCabeza = forma.value.cantCabeza;
   this.cantMedia = forma.value.cantMedia;
   this.fechaFaena = forma.value.fechaFaena;
   this.cantKilos = forma.value.cantKilos;
   this.nroTropa = forma.value.nroTropa;
   if (this.cantKilos <=0 || this.cantCabeza <=0 || this.cantMedia <=0) {
       alert ('El valor tiene que ser mayor a cero');
   }else{

     this.service.addProducto(
       this.dueHacienda,
       this.cantCabeza,
       this.cantMedia,
       this.fechaFaena,
       this.cantKilos,
       this.nroTropa).subscribe(()=>{
         this.ruta.navigate(['productos/listadoPro']);
       })
   }
 }
}
