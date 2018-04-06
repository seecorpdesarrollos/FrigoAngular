import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';
import { ConsultasService } from '../../../servicios/consultas.service';

declare var $;


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private serviceInv:InventarioService,
    private ruta:Router,
    private consulta:ConsultasService

  ) { }

  ngOnInit() {
    this.getClientes();
  }


  toggle:boolean=false;
  dataToggle(){
    this.toggle =true;
 
  }
 
  toggle1:boolean=false;
 dataToggle1(){
   this.toggle1 =true;
 
 }


  pro:boolean=false;
 nombreCliente:any="";
 idCliente:any="";
 selectCli(value){

   this.nombreCliente = value.nombreCliente;
   this.idCliente = value.idCliente;
   this.toggle1 =false;
  //  this.pro = true
 }


public data: any[];
 public filterQuery = "";
 public rowsOnPage = 2;
nada:boolean=false;
public total:number=0;
cant:any;
 vender(forma:NgForm){
   this.consulta.getVentas(this.idCliente)
   .subscribe(res=>{
     this.pro = true;
     this.data= res;
     this.cant = this.data.length

     for (let i = 0; i < this.data.length; i++) {
       
       this.total = this.total + (this.data[i].precio * this.data[i].kilo);
     }
    //  console.log(this.data);
    if(this.data == undefined){
      this.nada= false;
    }else{
      this.nada =true;
    }
     
   })
   
   
 }

 loader:boolean = false;
 inventario:any;

   datas:any;


   getClientes(){
     this.service.getClientes()
     .subscribe(res=>{
       this.datas= res;
       // console.log(this.datas)
     })
   }

   nueva(){
     this.pro = false;
     this.fe = false;
    
   }


   fecha1:any;
   fecha2:any;
   getFecha:any
   fe:boolean=false;
   totals:number=0;
   fecha(forma:NgForm){
    this.fecha1= forma.value.fechaInicial;
    this.fecha2 = forma.value.fechaFinal;
    if (this.fecha1 > this.fecha2) {
      alert('La fecha son erroneas')
    }else{
      
      this.consulta.getVentasFecha(this.fecha1, this.fecha2)
      .subscribe(resp=>{
      this.getFecha = resp;
      for (let i = 0; i < this.getFecha.length; i++) {
       
        this.totals = this.totals + (this.getFecha[i].precio * this.getFecha[i].kilo);
      }
      this.fe = true;
     
    
      })    
    }
     

   }


   print(imprimir){
    location.reload();
 
    var contenido= document.getElementById(imprimir).innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    
    document.body.innerHTML = contenido;
    
    window.print();
    
    document.body.innerHTML = contenidoOriginal;
    this.ruta.navigate(['ventas'])
   }

}
