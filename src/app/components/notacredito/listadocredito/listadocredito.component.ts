import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../../servicios/notas.service';


declare var $;
@Component({
  selector: 'app-listadocredito',
  templateUrl: './listadocredito.component.html',
  styles: []
})
export class ListadocreditoComponent implements OnInit {

  constructor( private notas:NotasService ) { }

  ngOnInit() {
    this.getNotaCredito();
  }


  loader:boolean = false;
  inventario:any;
  total:any=0;
   public data: any[];
   public filterQuery = "";
   public rowsOnPage = 5;
  nada:boolean=false;
  getNotaCredito(){
       this.notas.getNotaCredito()
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        // console.log(this.data);
        
         if(this.data == undefined){
           this.nada= false;
         }else{
           this.nada =true;
         }
      })
    }


    public  idNotaCredito:any;
    public  idCliente:any;
    public  totalCredito:any;
    eliminar(idNotaCredito , idCliente, totalCredito){

     $('#eliminar').modal('show');
     $('#eliminar').appendTo("body");
     this.idNotaCredito = idNotaCredito;
     this.idCliente = idCliente;
     this.totalCredito = totalCredito;
     
     
    }
    
   

    eliminarNotaCredito(){
      // console.log(this.idNotaCredito);
      // console.log(this.idCliente);
      // console.log(this.totalCredito);
      
      
      this.notas.deleteNotaCredito(this.idNotaCredito, this.idCliente, this.totalCredito)
      .subscribe(res=>{
        // console.log(res);
        this.getNotaCredito();
        
      })
      $('#eliminar').modal('hide');
      
    }


}
