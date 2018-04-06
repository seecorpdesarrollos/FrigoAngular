import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';

declare var $;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasVComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private serviceInv:InventarioService,
    private ruta:Router
  ) {

  }

  ngOnInit() {

    this.getClientes();
    this.getInventario();
    this.getTemp();
    this.getInventarioCuarteo();
    this.getTotalTemp();
    this.getTotalTemp1();
    this.getTemp1();
    this.getFactura();
    this.da();

  }

  toggle:boolean=false;
 dataToggle(){
   this.toggle =true;

 }

 toggle1:boolean=false;
dataToggle1(){
  this.toggle1 =true;

}



 kiloMedia:any
 nroTropa:any
 idInventario:any
 pro:boolean = false;
 select(value){

   this.kiloMedia = value.kiloMedia;
   this.nroTropa = value.nroTropa;
   this.idInventario = value.idInventario;
   this.toggle =false;
   this.pro = true
 }


nombreCliente:any;
idCliente:any
 selectCli(value){

   this.nombreCliente = value.nombreCliente;
   this.idCliente = value.idCliente;
   this.toggle1 =false;
   this.pro = true
 }


  data:any
  getInventario(){
    this.serviceInv.getInventario()
    .subscribe(res=>{
      // this.loader = true;
      this.data= res;
      console.log(this.data);
      

    })
  }

  flag:boolean  =false;
  flag1:boolean  =false;


  media(){
    this.flag = true;
    this.flag1 = false;
  }

  cuarteo(){
    this.flag1 = true;
    this.flag = false;
  }


  datos:any
  descripcions:any
  getInventarioCuarteo(){
    this.serviceInv.getCuarteoServicioInventario()
    .subscribe(res=>{

      // this.loader = true;
      this.datos= res;

       // console.log(this.datos)

      this.descripcions= 'dvdcd';
    })
  }


    loader:boolean = false;
    inventario:any;
    total:any=0;
      datas:any;

    nada:boolean=false;
      getClientes(){
        this.service.getClientes()
        .subscribe(res=>{
          this.datas= res;
          // console.log(this.datas)
        })
      }



      medias:any;
      cuarto?:any;
      idCuarto:any
      pesoCuarto:any
      descripcion:any
      precio:any
      temp(forma:NgForm){

        this.medias = forma.value.kiloMedia;
        this.precio = forma.value.precio;
        this.idInventario = forma.value.idInventario;

        this.serviceInv.temporal1(this.medias, this.precio, this.idInventario)
        .subscribe(res=>{

          this.flag = false;
          this.flag1 = false;
          this.ruta.navigate(['ventas/reportes']);
          setTimeout(()=>{
            this.ruta.navigate(['ventas']);

          },5);
          // console.log(res)
        })

      }


      temp1(forma:NgForm){

        // this.medias = forma.value.kiloMedia;
        this.cuarto = forma.value.cuartos.split('/');
        this.pesoCuarto = this.cuarto[0];
        this.idCuarto = this.cuarto[1];
        this.descripcion = this.cuarto[2];
        this.precio = forma.value.precio;
        // this.idInventario = forma.value.idInventario;
       if (this.pesoCuarto <= 0) {
           alert('El cuartos no tiene peso')
       }else{


         this.serviceInv.temporal(this.pesoCuarto, this.idCuarto, this.descripcion, this.precio)
         .subscribe(res=>{
           this.flag = false;
           this.flag1 = false;
           this.ruta.navigate(['ventas/reportes']);
           setTimeout(()=>{
             this.ruta.navigate(['ventas']);

           },5);
           // console.log(res)
         })


       }
      }



temporal:any
      getTemp(){

        this.serviceInv.getTemp()
        .subscribe(res=>{
          this.temporal = res;
        })
      }

totales:any=0;
      getTotalTemp(){
        this.serviceInv.getTotalTemp()
        .subscribe(res=>{
          // console.log(res.total)
          if(res.total == null){
            this.totales = 0;
          }else{

            this.totales= parseFloat(res.total);
            // console.log(this.totales)
              this.da();
          }

        })
      }

      borrarItem(idTemp, descripcion,peso,  idCuarteo){
        this.serviceInv.borrarTempId(idTemp, descripcion, peso, idCuarteo)
        .subscribe(()=>{
          this.ruta.navigate(['ventas/reportes']);
          setTimeout(()=>{
            this.ruta.navigate(['ventas']);

          },5);
          this.getTemp();
          this.getTotalTemp();
        })
      }


      temporal1:any
            getTemp1(){
              this.serviceInv.getTemp1()
              .subscribe(res=>{
                this.temporal1 = res;

              })
            }
      totales1:any=0;
            getTotalTemp1(){
              this.serviceInv.getTotalTemp1()
              .subscribe(res=>{
                if(res.total == null){
                  this.totales1 = 0;
                }else{
                  this.totales1= parseFloat(res.total);

                   // console.log(this.totales1)
                  this.da();
                }

              })
            }
            su:number;
            da(){
              this.su= this.totales+this.totales1;
              // console.log(this.su)
            }

            borrarItem1(idInventario){
              this.serviceInv.borrarTempId1(idInventario)
              .subscribe(()=>{
                this.ruta.navigate(['ventas/reportes']);
                setTimeout(()=>{
                  this.ruta.navigate(['ventas']);

                },5);
                this.getTemp();
                this.getTotalTemp();
                this.getTotalTemp1()
                this.getTemp1()
              })
            }

            // inprimirTropa(impresion){
            //  location.reload();
            //  var contenido= document.getElementById(impresion).innerHTML;
            //  var contenidoOriginal= document.body.innerHTML;
            //
            //  document.body.innerHTML = contenido;
            //
            //  window.print();
            //
            //  document.body.innerHTML = contenidoOriginal;
            // }

             cli:any;
             idCli:any
             nroFactura:any
             to:any;
             admin:any;
            vender(forma:NgForm){
            this.admin = localStorage.getItem('idAdmin');
              this.cli = forma.value.nombreCliente;
              this.idCli = forma.value.idCliente;
              this.nroFactura = forma.value.fac;
              this.to = forma.value.su;
              this.serviceInv.venta(this.idCli ,this.nroFactura, this.to, this.admin)
              .subscribe(res=>{
                  this.ruta.navigate(['ventas/facturas']);
              })

            }

  fac:any
     getFactura(){
       this.serviceInv.getFactura()
       .subscribe(res=>{
         this.fac = parseInt(res[0].total);
         // console.log(this.fac)
       })
     }
}
