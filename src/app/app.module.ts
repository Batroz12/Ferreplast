import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
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
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    AccesosComponent,
    CategoriasComponent,
    ProductosComponent,
    VentasComponent,
    ReportesComponent,
    AgregarUsuarioComponent,
    AgregarCategoriaComponent,
    AgregarProductoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
