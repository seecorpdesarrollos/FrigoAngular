import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import { Router } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';
import * as jsPDF from 'jspdf';

declare var $;
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styles: []
})
export class FacturasComponent implements OnInit {

  constructor(
    private service:InventarioService,
    private ruta:Router) {

     }


  ngOnInit() {
    this.getFacturado();
  }

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 2;
loader:boolean = false;
 nro:any

  getFacturado(){
    this.service.getFacturas()
    .subscribe(res=>{
      this.loader = true;
      this.data= res;
      this.nro = res[0].nroFactura;
    
    })
  }

  getDetalle(){
  }


  factura:any;
  todoData:any;
  nombreCliente:any
  direccionCliente:any
  telefonoCliente:any
  fecha:any;
  totalVenta:any
  facturar(nroFactura ,nombreCliente,direccionCliente,telefonoCliente , fecha, totalVenta){
    this.factura = nroFactura;
    this.nombreCliente = nombreCliente;
    this.direccionCliente = direccionCliente;
    this.telefonoCliente = telefonoCliente;
    this.fecha = fecha;
    this.totalVenta = totalVenta;
   $('#factura').modal('show');
    this.service.getDetalles(nroFactura)
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



  }
