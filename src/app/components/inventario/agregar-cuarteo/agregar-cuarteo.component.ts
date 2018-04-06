import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';

@Component({
  selector: 'app-agregar-cuarteo',
  templateUrl: './agregar-cuarteo.component.html',
  styles: []
})
export class AgregarCuarteoComponent implements OnInit {

  constructor(
    private service:InventarioService ,
    private ruta:Router
  ) { }



    ngOnInit() {
      this.getInventario();
    }

    loader:boolean = false;
    public data: any[];
    getInventario(){
      this.service.getInventario()
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        })
    }

    toggle:boolean=false;

   dataToggle(){

     this.toggle =true;

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


     agregarCuarteo(forma:NgForm){
        this.kiloMedia= forma.value.kiloMedia;
        this.nroTropa = forma.value.nroTropa;
        this.idInventario = forma.value.idInventario;
    this.service.addCuarteo(this.kiloMedia, this.nroTropa, this.idInventario)
    .subscribe(()=>{
      this.ruta.navigate(['inventario/exitosInv/add']);
      setTimeout(()=>{
        this.ruta.navigate(['inventario/cuarteoList']);

      },3000);
    })
  }

   listado(){
       this.ruta.navigate(['inventario/cuarteoList']);
   }


}
