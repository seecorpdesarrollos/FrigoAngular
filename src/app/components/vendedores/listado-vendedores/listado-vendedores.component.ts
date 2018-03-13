import { Component, OnInit } from '@angular/core';
import {VendedoresService} from '../../../servicios/vendedores.service';
@Component({
  selector: 'app-listado-vendedores',
  templateUrl: './listado-vendedores.component.html',
  styles: []
})
export class ListadoVendedoresComponent implements OnInit {

  constructor( private service:VendedoresService) { }

  ngOnInit() {
    this.getVendedores();
  }


    loader:boolean = false;
    inventario:any;
    total:any=0;
     public data: any[];
     public filterQuery = "";
     public rowsOnPage = 2;

      getVendedores(){
        this.service.getVendedores()
        .subscribe(res=>{
          this.loader = true;
          this.data= res;
          for (let i = 0; i < this.data.length; i++) {
           if (this.data[i].cantidad != 0) {

             this.total = parseInt(this.data[i].kiloMedia) + parseInt(this.total);
           }

          }
        })
      }

}
