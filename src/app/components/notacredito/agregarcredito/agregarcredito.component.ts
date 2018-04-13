import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../servicios/clientes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregarcredito',
  templateUrl: './agregarcredito.component.html',
  styles: []
})
export class AgregarcreditoComponent implements OnInit {

  constructor( private service:ClientesService  ) { }

  ngOnInit() {
    this.getClientes();  
  }



 toggle1:boolean=false;
 dataToggle1(){
   this.toggle1 =true;
 
 }
 
 
 
 nombreCliente:any;
idCliente:any
  select(value){
 
    this.nombreCliente = value.nombreCliente;
    this.idCliente = value.idCliente;
    this.toggle1 =false;
   //  console.log(this.nroTropa);
    
  }


  datas:any[];
  getClientes(){
    this.service.getClientes()
    .subscribe(res=>{
      this.datas= res;
      // console.log(this.datas)
    })
  }



   descripcionCredito:any;
   cantidadCredito:any;
   importeCredito:any;
  agregarCre(forma:NgForm){
    
     this.descripcionCredito = forma.value.descripcionCredito;
     this.cantidadCredito = forma.value.cantidadCredito;
     this.importeCredito = forma.value.importeCredito;
     this.idCliente = forma.value.idCliente;

     console.log(this.descripcionCredito);
     console.log(this.cantidadCredito);
     console.log(this.importeCredito);
     console.log(this.idCliente);
     
  }
 

}
