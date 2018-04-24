import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../servicios/clientes.service';
import { NgForm } from '@angular/forms';
import { NotasService } from '../../../servicios/notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregardebito',
  templateUrl: './agregardebito.component.html',
  styles: []
})
export class AgregardebitoComponent implements OnInit {

 
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

 


   descripcionDebito:any;
   cantidadDebito:any;
   importeDebito:any;
   nroCheque:any;
   public totalDebito:any;
   cambio:boolean=false;
  agregarDeb(forma:NgForm){
    this.cambio=true;
     this.descripcionDebito = forma.value.descripcionDebito;
     this.cantidadDebito = forma.value.cantidadDebito;
     this.importeDebito = forma.value.importeDebito;
     this.nroCheque = forma.value.nroCheque;
     this.idCliente = forma.value.idCliente;
  this.totalDebito = this.cantidadDebito * this.importeDebito;
      this.notas.addNotaDebito(
        this.descripcionDebito,this.cantidadDebito,this.importeDebito,this.nroCheque , this.idCliente
      ).subscribe(res=>{
        
        if (res == "noSaldo") {
          alert('El cliente no ha realizado  ningun pago con ese numero de cheque o ese cheque ya fue ingresado como nota de debito. Por favor revisar el número de cheque');
        }else{
          this.ruta.navigate(['/notaDebito/listadoDebito']);

        }
        
        
      })
     
  }
 
}
