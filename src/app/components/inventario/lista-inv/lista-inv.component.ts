import { Component, OnInit } from '@angular/core';
import {InventarioService} from '../../../servicios/inventario.service';

@Component({
  selector: 'app-lista-inv',
  templateUrl: './lista-inv.component.html',
  styles: []
})
export class ListaInvComponent implements OnInit {

  constructor( private service:InventarioService) { }


    ngOnInit() {
      this.getInventario();
    }


  loader:boolean = false;
  inventario:any;
  total:any=0;
  totales:any=0;
  totalMedia:any=0;
   public data: any[];
   public filterQuery = "";
   public rowsOnPage = 2;

    getInventario(){
      this.service.getInventario()
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        for (let i = 0; i < this.data.length; i++) {
          this.totales = parseInt(this.data[i].kiloMedia) + parseInt(this.totales);

         if (this.data[i].cantidad != 0) {
           this.total = parseInt(this.data[i].kiloMedia) + parseInt(this.total);
         }
         if (this.data[i].cantidad != 0 ) {
             this.totalMedia = parseInt(this.data[i].cantidad) + parseInt(this.totalMedia);

         }

        }
      })
    }


   dataTropa:any[];
   tropa:any;
   totalTropa:any=0;
   totalTropaLength:any=0;
   restante:any=0;
    masInfo(nroTropa){
      // alert('la tropas es :' + nroTropa);
      this.service.getInventarioTropa(nroTropa)
      .subscribe( resTropa=>{
        this.tropa = nroTropa;
        this.dataTropa= resTropa;
        for (let i = 0; i < this.dataTropa.length; i++) {
        this.restante =  this.dataTropa[i].cantMedia;
        }
         this.totalTropaLength= resTropa.length;
         this.service.getTotalTropa(nroTropa)
         .subscribe(resTotal=>{
           this.totalTropa = resTotal[0].total
         });
      })
    }

    imprimir(areaImprimir){
      location.reload();
    var contenido= document.getElementById(areaImprimir).innerHTML;
    var contenidoOriginal= document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
    }
}
