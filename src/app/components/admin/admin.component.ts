import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';


declare var $;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  constructor(
    private admin:LoginService,
    private ruta:Router
  ) { }

  ngOnInit() {

  this.getAdmin();
  }


   data:any[];
  getAdmin(){
    
      this.admin.getUsuarios()
      .subscribe(response =>{
        this.data = response;
      })
  }


   public nombreAdmin:any;
   public idAdmin:any;
  change(idAdmin, nombreAdmin){
   
     $('#change').modal('show');
    this.nombreAdmin = nombreAdmin
    this.idAdmin = idAdmin
  }

  
   password:any;
   rol:any
  cambiar(forma:NgForm){
    
    this.password = forma.value.password
    this.rol = forma.value.rol

    $('#change').modal('hide');
    this.admin.updateUsuario(this.password, this.rol, this.idAdmin)
    .subscribe(()=>{
      this.ruta.navigate(['success']);
      setTimeout(()=>{
        this.ruta.navigate(['admin']);
      },2500)
       
      
    });
  }

agregar(forma:NgForm){
  $('#exampleModal').modal('hide');
  this.nombreAdmin = forma.value.nombreAdmin;
  this.password = forma.value.password;
  this.rol = forma.value.rol;
  this.admin.addUsuario(this.nombreAdmin, this.password, this.rol)
  .subscribe(()=>{
    this.ruta.navigate(['success']);
    setTimeout(()=>{
      this.ruta.navigate(['admin']);
    },2500)
     
    
  });
}


}
