import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm} from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';
import {VendedoresService} from '../../../servicios/vendedores.service';
import { CuentasService } from '../../../servicios/cuentas.service';


declare var $;
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoCuentasComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private ruta:Router,
    private serviceInvrntario:InventarioService,
    private vendedor:VendedoresService,
    private cuenta:CuentasService
  ) {

  }

  ngOnInit() {
    
  this.getClientes();
  this.fecha();
 
  }



  toggle1:boolean=false;
  dataToggle1(){
    this.toggle1 =true;

  }

  public nombreCliente:any;
   public idCliente:any
   selectCli(value){

     this.nombreCliente = value.nombreCliente;
     this.idCliente = value.idCliente;
     this.toggle1 =false;
     // this.pro = true
   }


    diasSemana:any[];
    meses:any;
    f:any;
   public todp:any;
   fecha(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
this.todp = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
   }

  
  loader:boolean = false;
  inventario:any;
  total:any=0;
   public datas: any;
   public filterQuery = "";
   public rowsOnPage = 5;
  nada:boolean=false;
    getClientes(){
      this.service.getClientesTodos()
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
    
    
totakKilos:any;
totalKilos:any;

formu:boolean = false;

public tot:any[];
public salAnterior:any[];
public totSaldo:any[]=[];
saldoActual:number=0;
nroFactura:any;
entrada :any;
entradas :any;
pagos :number=0;
cobros:any;
s:number=0;
dif:number=0;
saldoFinal:number=0
fechaInicial:any;
fechaFinal:any;
sinData:boolean= false;

public saldo:number=0;
public pa:number=0;
public co:number=0;
public toSal:number=0;
public totales:number=0;
public detalles:boolean;
public det:any[];
fe:boolean=false;
fes:boolean=false;
loader1:boolean=false;
ceroData:boolean=false;
totalCompras:number=0;
totalPagos:number=0;
totalSaldos:number=0;
cli(forma:NgForm){ 
  this.idCliente = forma.value.idCliente;
  this.fechaInicial = forma.value.fechaInicial;
  this.fechaFinal = forma.value.fechaFinal;
  this.detalles = forma.value.detalles;
  
  if( this.detalles == true){
    this.cuenta.getFacturaDetalles(this.idCliente,this.fechaInicial, this.fechaFinal)
    .subscribe(res=>{
      this.fes=true;
      this.det = res;
      this.cuenta.getKilos(this.idCliente,this.fechaInicial, this.fechaFinal)
      .subscribe(respu=>{
        this.totakKilos = respu;
        this.totalKilos =this.totakKilos[0] 
        // console.log(this.);
      })
    })  
    
  }
  
  
  
  if (this.fechaInicial.length ==0 && this.fechaFinal.length == 0) {
    this.fe = true;
  }else{
    this.cuenta.saldoAnterior(this.idCliente, this.fechaInicial)
    .subscribe(response=>{
      this.salAnterior= response;


      for (let i = 0; i < this.salAnterior.length; i++) {
        this.toSal = this.toSal  +  parseFloat(this.salAnterior[i].entrada) - parseFloat(this.salAnterior[i].pagos)  ;
        
        // console.log(this.salAnterior);

      }
      
    })

  }
  if(this.fechaInicial > this.fechaFinal ){
      alert ('Erroren las fechas fechas')
    } else{
      this.formu = true;
      
      this.cuenta.getCuentaCorriente(this.idCliente ,this.fechaInicial, this.fechaFinal)
      .subscribe (res=>{  
        this.cuenta.getKilos(this.idCliente,this.fechaInicial, this.fechaFinal)
        .subscribe(respu=>{
        this.totakKilos = respu;
        this.totalKilos =this.totakKilos[0];
        this.loader = true;
        this.loader1 = true;
      })
      
      this.tot = res;

      // console.log(this.tot.length);
      // console.log(this.tot);

      if (this.tot.length == 0) {
        this.ceroData = true;
      }else{
        this.ceroData = false;
      }
                // if(this.tot[0].entrada == 0){
                //   this.saldo = parseFloat(this.tot[0].saldo);
                //   this.pa  =   parseFloat(this.tot[0].pagos);
                //   this.toSal = this.saldo + this.pa;
                 
                  
                // } 
                //  if(this.tot[0].pagos == 0){
                //   this.saldo = parseFloat(this.tot[0].saldo);
                //   this.co  =   parseFloat(this.tot[0].entrada);
                //   this.toSal = this.saldo - this.co;
               
          
                // }
                
                if(res.length == 0){
                  this.sinData = true;
                }
      
              
                
           
                
           for (let i = 0; i < this.tot.length; i++) {
                  
           this.totalCompras = this.totalCompras +  parseFloat(this.tot[i].entrada) ;
           this.totalPagos = this.totalPagos +  parseFloat(this.tot[i].pagos) ;
            
           this.totalSaldos =  this.totalCompras - this.totalPagos ;

           this.totSaldo.push(this.totalSaldos)
            // console.log(this.totSaldo);

      }
      
     
          this.cuenta.totalEntradaId(this.idCliente).
          subscribe(resp=>{
              this.entrada= resp.totalEntrada;
            
              
          })
          this.cuenta.totalSalidaId(this.idCliente).
          subscribe(respu=>{
              this.pagos= respu.totalSalida;
              // console.log(this.pagos);
              
          })
          this.cuenta.getSaldoId(this.idCliente)
          .subscribe(res=>{
            this.saldoActual = res;
            
            this.saldoActual =parseFloat(this.saldoActual[2]);
            this.saldoFinal =parseFloat(res[3]);
            // console.log(res[4]);
        
          })
        
      });

  }
}

// facturas:any;
// numeroFactura:any;
// mostrar:boolean=false;
// todoDetalle:any[];
// a(factura){
//   this.facturas = factura.split(" "); 
//   if(this.facturas[0] == 'Factura'){
//     this.numeroFactura = this.facturas[2] 
//     // alert(this.numeroFactura)
//     this.cuenta.getFacturaDetalles(this.numeroFactura)
//     .subscribe(respuesta=>{
//       this.mostrar = true;
//         this.todoDetalle = respuesta;
      
//     })

//   }
// }

salir(){
  // this.subtotal=0;
  this.formu = false;
  this.ruta.navigate(['ventas']);
  setTimeout(()=>{
    this.ruta.navigate(['cuentas/listadoCuentas']);

  },50);
}


imprimirCuenta(imprimir){
//  $('#hiden').removeClass('hiden');
  location.reload();
  var contenido= document.getElementById(imprimir).innerHTML;
  var contenidoOriginal= document.body.innerHTML;


  document.body.innerHTML = contenido;

  window.print();

  document.body.innerHTML = contenidoOriginal;
 }




}
