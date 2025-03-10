import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CapitalizarPipe } from './capitalizar.pipe';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { AltaarticuloComponent } from './altaarticulo/altaarticulo.component';
import { ModificacionarticuloComponent } from './modificacionarticulo/modificacionarticulo.component';
import { BajaarticuloComponent } from './bajaarticulo/bajaarticulo.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    Pagina404Component,
    BienvenidaComponent,
    CapitalizarPipe,
    BusquedaComponent,
    ListadoarticulosComponent,
    AltaarticuloComponent,
    ModificacionarticuloComponent,
    BajaarticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
