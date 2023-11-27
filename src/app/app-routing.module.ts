import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesosComponent } from './accesos/accesos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'menu', component:MenuComponent},
    {path:'inicio', component:InicioComponent},
    {path:'acceso', component:AccesosComponent},
    {path:'categorias', component:CategoriasComponent},
    {path:'productos', component:ProductosComponent},
    {path:'ventas', component:VentasComponent},
    {path:'reportes', component:ReportesComponent},
    {path:'agregarUsuario', component:AgregarUsuarioComponent},
    {path:'agregarCategoria', component:AgregarCategoriaComponent},
    {path:'agregarProducto', component:AgregarProductoComponent},
    {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
