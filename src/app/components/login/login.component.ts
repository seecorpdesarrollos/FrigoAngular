import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login.service';

declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private ruta:Router , private servicio:LoginService ) { }

  ngOnInit() {
  }


  nombreAdmin:string;
  password:any;
  error:boolean = false;
  mostrarError:string;
  loading:boolean = false;
  intentos:number = 0;
  maximosIntentos:string;
  ingresar(login:NgForm){

    this.nombreAdmin = login.value.nombreAdmin;
    this.password = login.value.password;
   this.servicio.getUsuario(this.nombreAdmin, this.password)
   .subscribe( res =>{

      if (res !== false ) {
          this.loading = true;
          this.error = false;
          localStorage.setItem('nombreAdmin' ,this.nombreAdmin);
          localStorage.setItem('idAdmin' ,res.idAdmin);
          localStorage.setItem('rol' ,res.rol);
          localStorage.setItem('fechaCreado' ,res.fechaCreado);

          setTimeout(()=>{
             this.ruta.navigate(['principal'])
          }, 3500)
      }else{
        this.loading = false;
        this.error = true;
        this.mostrarError = "Los datos ingresados no son correctos";
        this.intentos = this.intentos +1;
           if (this.intentos >= 4) {
              // this.ruta.navigate(['/robot']);
              // alert('ssrdtfgjh');
            return  $('.modal').modal('show')
           }
      }
   })

  }

}
