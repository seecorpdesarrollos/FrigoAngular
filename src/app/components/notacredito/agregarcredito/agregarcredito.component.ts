import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../servicios/clientes.service';
import { NgForm } from '@angular/forms';
import { NotasService } from '../../../servicios/notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarcredito',
  templateUrl: './agregarcredito.component.html',
  styles: []
})
export class AgregarcreditoComponent implements OnInit {

  constructor( 
    private service:ClientesService,
    private notas:NotasService,
    private ruta:Router
    ) { }

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

      this.notas.addNotaCredito(
        this.descripcionCredito,this.cantidadCredito,this.importeCredito,this.idCliente
      ).subscribe(res=>{
        
        if (res == "noSaldo") {
          alert('El cliente no tiene saldos pendiente para generar una nota de crédito');
        }else{
          this.ruta.navigate(['/notaCredito/listadoCredito']);

        }
        
        
      })
     
  }
 

}
