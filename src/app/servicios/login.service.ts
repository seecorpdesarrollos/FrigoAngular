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

  getUsuarioActual(idAdmin) {
    return this.http.post("http://localhost/Frigorifico/controllers/loginController.php?id=usuarioEstado",
      {'idAdmin': idAdmin})
      .map(res=>res.json())
  }
  updateUsuario(idAdmin) {
    return this.http.post("http://localhost/Frigorifico/controllers/loginController.php?id=updateEstado",
      {'idAdmin': idAdmin })
      .map(()=>"")
  }



}
