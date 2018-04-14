import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasService } from '../../servicios/cuentas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  constructor(
     private rura:Router,
     private cuentas:CuentasService
    ) { }

  ngOnInit() {
    this.invantario();
    this. invantarioDisponible();
    this.invantarioVendido();
    this.invantarioCant();
  }


  cuarteo:any[];
   invantario(){ 
  this.cuentas.getInventaTropa()
    .subscribe(res=>{
      this.cuarteo = res;
      // console.log(this.cuarteo);
   
    })
   }


  disponible:any[];
  invantarioDisponible(){ 
 this.cuentas.getInventaTropaDisponible()
   .subscribe(res=>{
     this.disponible = res;
    //  console.log(this.disponible);
  
   })
  }


  vendido:any[];
  invantarioVendido(){ 
 this.cuentas.getInventaTropaVendido()
   .subscribe(res=>{
     this.vendido = res;
    //  console.log(this.vendido);
  
   })
  }

  cant:any[];
  invantarioCant(){ 
 this.cuentas.getCant()
   .subscribe(res=>{
     this.cant = res;
     console.log(this.cant);
  
   })
  }


}
