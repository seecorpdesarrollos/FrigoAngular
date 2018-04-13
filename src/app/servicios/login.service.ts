import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

  @Injectable()
export class LoginService {

  constructor( private http:Http) { }

  getUsuario(nombreAdmin, password) {
    return this.http.post("http://localhost/Frigorifico/controllers/loginController.php?id=getUsuarios",
      {'nombreAdmin': nombreAdmin, 'password': password })
      .map(res=>res.json())
  }

  getUsuarios() {
    return this.http.get("http://localhost/Frigorifico/controllers/adminController.php?id=getUsuarios")
      .map(res=>{
      return res.json()
      })
  }

  getUsuarioActual(idAdmin) {
    return this.http.post("http://localhost/Frigorifico/controllers/loginController.php?id=usuarioEstado",
      {'idAdmin': idAdmin})
      .map(res=>res.json())
  }
  addUsuario(nombreAdmin , password , rol ) {
    return this.http.post("http://localhost/Frigorifico/controllers/adminController.php?id=addAdmin",
      { 'nombreAdmin':nombreAdmin , 'password': password, 'rol':rol })
      .map(()=>"")
  }

  updateUsuario(password , rol , idAdmin) {
    return this.http.post("http://localhost/Frigorifico/controllers/adminController.php?id=updateAdmin",
      {'password': password, 'rol':rol, 'idAdmin':idAdmin })
      .map(()=>"")
  }



}
