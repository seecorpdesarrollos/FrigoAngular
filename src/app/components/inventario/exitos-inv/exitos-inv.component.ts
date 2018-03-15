import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exitos-inv',
  templateUrl: './exitos-inv.component.html',
  styles: []
})
export class ExitosInvComponent implements OnInit {

  constructor( private ruta:Router,  private parametro:ActivatedRoute) { }

  ngOnInit() {
  this.exitos();
  }
  id:any = this.parametro.snapshot.params['id'];
  dato:boolean;
  datos:boolean=false;
  exitos(){

     if (this.id == 'borrar') {
      this.dato = true;
    }else if(this.id == "editar"){
      this.dato=false;
    }else{
       this.datos = true;
    }
   }
  back(){
    this.ruta.navigate(['../inventario']);
  }


}
