import { Component, OnInit } from '@angular/core';

import { CuentasService } from '../../servicios/cuentas.service';
import { ProductosService } from '../../servicios/productos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  constructor(
    
     private cuentas:CuentasService,
     private produ:ProductosService
    ) { }

  ngOnInit() {
  this.getTropa();
  }

  toggle2:boolean=false;
  dataToggle2(){
    this.toggle2 =true;
  
  }
 
 
  nroTropa:any;
  selectTropa(value){
   this.nroTropa = value.nroTropa;
   this.toggle2 =false;
  //  this.pro = true
 }
 
 
 
 
    tro:boolean=false;
    tropa:any
    getTropa(){
     this.produ.getProductos()
     .subscribe(res=>{
       this.tropa= res;
      
       // console.log(this.datas)
     })
   }

loader:boolean=true;
cambio:boolean=false;
 dueHacienda:any
 fechaFaena:any
tot:any
total:any;
totalKilos:any;
getExistencias(forma:NgForm){
   
  this.nroTropa = forma.value.nroTropa;
  
  this.cuentas.getExistencias(this.nroTropa)
  .subscribe(res=>{
    this.tot = res;
    console.log(this.tot);
    
   this.cambio= true

   for (let i = 0; i < this.tot.length; i++) {
     this.dueHacienda = this.tot[i].dueHacienda;
     this.fechaFaena = this.tot[i].fechaFaena;
     this.total = this.tot[i].total;
     this.totalKilos = this.tot[i].totalKilos;
     
   }
  })
  
}

nueva(){
  this.cambio = false;
  this.nroTropa ="";
}

}
