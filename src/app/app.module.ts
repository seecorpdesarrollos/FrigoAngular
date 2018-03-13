import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DataTableModule} from "angular2-datatable";

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

// rutas
 // import {APP_ROUTING} from './app.router';
 import {APP_ROUTING} from './app.router';

 // guard
 import {LoginGuard} from './login.guard';
 import {LogoutGuard} from './logout.guard';
// servicios
import {LoginService} from './servicios/login.service';
import {ProductosService} from './servicios/productos.service';
import {InventarioService} from './servicios/inventario.service';
import {VendedoresService} from './servicios/vendedores.service';


import { CabezeraComponent } from './components/menu/cabezera.component';
import { SalirComponent } from './components/login/salir.component';
import { RobotComponent } from './components/login/robot.component';
import { ListadoComponent } from './components/productos/listado/listado.component';
import { AgregarComponent } from './components/productos/agregar/agregar.component';
import { EditarComponent } from './components/productos/editar/editar.component';
import { ExitosComponent } from './components/productos/exitos/exitos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ListaInvComponent } from './components/inventario/lista-inv/lista-inv.component';
import { AgregarInvComponent } from './components/inventario/agregar-inv/agregar-inv.component';
import { EditarInvComponent } from './components/inventario/editar-inv/editar-inv.component';
import {ExitosInvComponent} from './components/inventario/exitosInv/exitos-inv.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ListadoVendedoresComponent } from './components/vendedores/listado-vendedores/listado-vendedores.component';
import { AgregarVendedoresComponent } from './components/vendedores/agregar-vendedores/agregar-vendedores.component';
import { EditarVendedoresComponent } from './components/vendedores/editar-vendedores/editar-vendedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListadoClientesComponent } from './components/clientes/listado-clientes/listado-clientes.component';
import { AgregarClientesComponent } from './components/clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './components/clientes/editar-clientes/editar-clientes.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProductosComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CabezeraComponent,
    SalirComponent,
    RobotComponent,
    ListadoComponent,
    AgregarComponent,
    EditarComponent,
    ExitosComponent,
    InventarioComponent,
    ListaInvComponent,
    AgregarInvComponent,
    EditarInvComponent,
    ExitosInvComponent,
    DataFilterPipe,
    VendedoresComponent,
    ListadoVendedoresComponent,
    AgregarVendedoresComponent,
    EditarVendedoresComponent,
    ClientesComponent,
    ListadoClientesComponent,
    AgregarClientesComponent,
    EditarClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [
   LoginGuard,
   LogoutGuard,
   LoginService,
   ProductosService,
   InventarioService,
   VendedoresService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
