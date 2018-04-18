import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../servicios/clientes.service';
import { NgForm } from '@angular/forms';
import { NotasService } from '../../../servicios/notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editardebito',
  templateUrl: './editardebito.component.html',
  styles: []
})
export class EditardebitoComponent implements OnInit {


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
   
   public totalDebito:any;
  agregarDeb(forma:NgForm){
    
     this.descripcionDebito = forma.value.descripcionDebito;
     this.cantidadDebito = forma.value.cantidadDebito;
     this.importeDebito = forma.value.importeDebito;
   
     this.idCliente = forma.value.idCliente;

      this.notas.addNotaDebitoSinCheque(
        this.descripcionDebito,this.cantidadDebito,this.importeDebito, this.idCliente
      ).subscribe(res=>{
        
        // if (res == "noSaldo") {
        //   alert('El cliente no ha realizado  ningun pago con ese numero de cheque. Por favor revisar el número de cheque');
        // }else{
           this.ruta.navigate(['notaDebito/listadoDebito']);

        // }
        
        
      })
     
  }

}
