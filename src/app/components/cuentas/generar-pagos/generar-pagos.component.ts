import { Component, OnInit } from '@angular/core';

import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm} from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';
import {VendedoresService} from '../../../servicios/vendedores.service';

declare var $;
@Component({
  selector: 'app-generar-pagos',
  templateUrl: './generar-pagos.component.html',
  styles: []
})
export class GenerarPagosComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private ruta:Router,
    private serviceInvrntario:InventarioService,
    private vendedor:VendedoresService,
  ) {

  }

  ngOnInit() {
    this.getClientes();
    this.getVendedores();

  }


ven:any;
  getVendedores(){
    this.vendedor.getVendedores()
    .subscribe(res=>{
      this.ven = res;
    }
    );
  }


   toggle1:boolean=false;
  dataToggle1(){
    this.toggle1 =true;

  }

  public nombreCliente:any;
   idCliente:any
   selectCli(value){

     this.nombreCliente = value.nombreCliente;
     this.idCliente = value.idCliente;
     this.toggle1 =false;
     // this.pro = true
   }


   getSaldos:any;
   saldo:number;
   getSaldoClienteid(){
       this.service.getSaldo(this.idCliente)
       .subscribe(res=>{
         this.getSaldos= res;
         if( this.getSaldos == 'nada'){
             this.saldo = 0;
             console.log(this.saldo);

         }else{
         this.saldo= parseFloat(this.getSaldos[4]);
           // console.log(this.getSaldos[2]);
         }
       })
   }

deuda(forma:NgForm){
  // console.log(forma.value.idCliente)
  // console.log(forma.value.subTotal)
  // console.log(forma.value.idVendedor)
  this.service.addDeuda(forma.value.idCliente, forma.value.subTotal,forma.value.idVendedor)
  .subscribe(res=>{
    console.log(res);
  })
}

  loader:boolean = false;
  inventario:any;
  total:any=0;
   public datas: any;
   public filterQuery = "";
   public rowsOnPage = 2;
  nada:boolean=false;
    getClientes(){
      this.service.getClientes()
      .subscribe(res=>{
        this.loader = true;
        this.datas= res;
        // console.log(this.data)
         if(this.datas == undefined){
           this.nada= false;
         }else{
           this.nada =true;
         }
      })
    }


formu:boolean=false;
todo:any=[];
subtotal:number=0;
 cli(forma:NgForm){
     // alert('Id cliente es' + this.idCliente);

     this.service.getClienteFacturadoId(this.idCliente)
     .subscribe(res=>{
         this.getSaldoClienteid();
       this.todo = res;
       for (let i = 0; i < this.todo.length; i++) {
          this.todo[i].totalVenta;
           this.subtotal = this.subtotal +   parseFloat(this.todo[i].totalVenta);
           // console.log(this.subtotal);
       }
      if( this.todo == "error"){
        $('#vacio').modal('show');
      }else{

        this.formu= true
      }
     })
 }

 salir(){
   this.subtotal=0;
   this.formu = false;
   this.ruta.navigate(['ventas']);
   setTimeout(()=>{
     this.ruta.navigate(['cuentas/pagos']);

   },50);
 }



   factura:any;
   todoData:any;
   nombreClientes:any
   direccionCliente:any
   telefonoCliente:any
   fecha:any;
   totalVenta:any
   facturar(nroFactura ,nombreCliente,direccionCliente,telefonoCliente , fecha, totalVenta){
     this.factura = nroFactura;
     this.nombreClientes = nombreCliente;
     this.direccionCliente = direccionCliente;
     this.telefonoCliente = telefonoCliente;
     this.fecha = fecha;
     this.totalVenta = totalVenta;
    $('#factura').modal('show');
     this.serviceInvrntario.getDetalles(nroFactura)
     .subscribe(res=>{
       this.todoData = res;
       // console.log(res)
       console.log(this.factura)
     })
   }


   inprimirFactura(facturas){
    location.reload();
    var contenido= document.getElementById(facturas).innerHTML;
    var contenidoOriginal= document.body.innerHTML;


    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
   }

   modal(){
     // location.reload();
     this.ruta.navigate(['ventas']);
     setTimeout(()=>{
       this.ruta.navigate(['pagos']);

     },10);
   }


}
