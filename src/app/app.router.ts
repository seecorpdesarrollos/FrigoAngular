import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {ProductosComponent} from './components/productos/productos.component';
import {AgregarComponent} from './components/productos/agregar/agregar.component';
import {ListadoComponent} from './components/productos/listado/listado.component';
import {ExitosComponent} from './components/productos/exitos/exitos.component';
import {EditarComponent} from './components/productos/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { SalirComponent } from './components/login/salir.component';
import { RobotComponent } from './components/login/robot.component';
import {InventarioComponent} from './components/inventario/inventario.component';
import {AgregarInvComponent} from './components/inventario/agregar-inv/agregar-inv.component';
import {EditarInvComponent} from './components/inventario/editar-inv/editar-inv.component';
import {ListaInvComponent} from './components/inventario/lista-inv/lista-inv.component';
import {ExitosInvComponent} from './components/inventario/exitos-inv/exitos-inv.component';

import {VendedoresComponent} from './components/vendedores/vendedores.component';
import {ListadoVendedoresComponent} from './components/vendedores/listado-vendedores/listado-vendedores.component';
import {AgregarVendedoresComponent} from './components/vendedores/agregar-vendedores/agregar-vendedores.component';
import {EditarVendedoresComponent} from './components/vendedores/editar-vendedores/editar-vendedores.component';
import {ExitosVendedoresComponent} from './components/vendedores/exitos-vendedores/exitos-vendedores.component';
import {InactivosVendedoresComponent} from './components/vendedores/inactivos-vendedores/inactivos-vendedores.component';

// LoginGuard
import {LoginGuard} from './login.guard';
import {LogoutGuard} from './logout.guard';
// clientes
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListadoClientesComponent } from './components/clientes/listado-clientes/listado-clientes.component';
import { ExitosClientesComponent } from './components/clientes/exitos-clientes/exitos-clientes.component';
import { AgregarClientesComponent } from './components/clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './components/clientes/editar-clientes/editar-clientes.component';
import { InactivosClientesComponent } from './components/clientes/inactivos-clientes/inactivos-clientes.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'principal', component: PrincipalComponent, canActivate:[LoginGuard] },
  { path: 'inventario', component: InventarioComponent, canActivate:[LoginGuard],
   children:[
     { path: 'listadoInv', component: ListaInvComponent },
     { path: 'exitosInv/:id', component: ExitosInvComponent },
     { path: 'agregarInv', component: AgregarInvComponent },
     { path: 'editarInv/:idInventario', component: EditarInvComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'listadoInv'}
   ]
 },
 { path: 'vendedores', component: VendedoresComponent, canActivate:[LoginGuard],
  children:[
    { path: 'listadoVen', component: ListadoVendedoresComponent },
    { path: 'exitosVen/:id', component: ExitosVendedoresComponent },
    { path: 'agregarVen', component: AgregarVendedoresComponent },
    { path: 'editarVen/:idVendedor', component: EditarVendedoresComponent },
    { path: 'venInactivos', component: InactivosVendedoresComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'listadoVen'}
  ]
},
{ path: 'clientes', component: ClientesComponent, canActivate:[LoginGuard],
children:[
  { path: 'listadoCli', component: ListadoClientesComponent },
  { path: 'exitosCli/:id', component: ExitosClientesComponent },
  { path: 'agregarCli', component: AgregarClientesComponent },
  { path: 'editarCli/:idCliente', component: EditarClientesComponent },
  { path: 'cliInactivos', component: InactivosClientesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listadoCli'}
]
},
  { path: 'productos', component: ProductosComponent, canActivate:[LoginGuard],
    children:[
      { path: 'listadoPro', component: ListadoComponent },
      { path: 'exitos/:id', component: ExitosComponent },
      { path: 'agregarPro', component: AgregarComponent },
      { path: 'editarPro/:idProductos', component: EditarComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'listadoPro'}
    ]
   },
  { path: 'salir', component: SalirComponent, canActivate:[LoginGuard] },
  { path: 'robot', component: RobotComponent, canActivate:[LoginGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true});
