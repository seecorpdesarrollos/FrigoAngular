import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exitos-inv',
  templateUrl: './exitos-inv.component.html',
  styles: []
})
export class ExitosInvComponent implements OnInit {

  constructor( private ruta:Router,  private parametro:ActivatedRoute,) { }

  ngOnInit() {
  this.exitos();
  }
  id:any = this.parametro.snapshot.params['id'];
  dato:boolean;
  exitos(){
     if (this.id == 'borrar') {
      this.dato = true;
    }else{
      this.dato=false;
    }
   }
  back(){
    this.ruta.navigate(['../inventario']);
  }

}
