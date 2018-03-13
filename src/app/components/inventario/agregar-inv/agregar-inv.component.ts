import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';

@Component({
  selector: 'app-agregar-inv',
  templateUrl: './agregar-inv.component.html',
  styles: []
})
export class AgregarInvComponent implements OnInit {

  constructor(
  private servicio:InventarioService,
  private ruta:Router
  ) { }

  ngOnInit() {
  }

  kiloMedia:number;
  nroTropa:number;
  agregarInv(forma:NgForm){
    this.kiloMedia = forma.value.kiloMedia;
    this.nroTropa = forma.value.nroTropa;
    if (this.kiloMedia <=0 || this.nroTropa <=0) {
        alert('El valor tiene que ser mayor a 0');
    }else{

      this.servicio.addInventario(this.kiloMedia, this.nroTropa)
      .subscribe(()=>{

        this.ruta.navigate(['inventario']);
      })
    }
  }

}
