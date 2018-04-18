import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../../servicios/notas.service';

@Component({
  selector: 'app-listadodebito',
  templateUrl: './listadodebito.component.html',
  styles: []
})
export class ListadodebitoComponent implements OnInit {

  constructor( private notas:NotasService) { }

 
  ngOnInit() {
    this.getNotaDebito();
  }


  loader:boolean = false;
  inventario:any;
  total:any=0;
   public data: any[];
   public filterQuery = "";
   public rowsOnPage = 5;
  nada:boolean=false;
getNotaDebito(){
       this.notas.getnotaDebito()
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        console.log(this.data);
        
         if(this.data == undefined){
           this.nada= false;
         }else{
           this.nada =true;
         }
      })
    }


}
