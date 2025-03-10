import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { ModificacionarticuloComponent } from './modificacionarticulo/modificacionarticulo.component';
import { AltaarticuloComponent } from './altaarticulo/altaarticulo.component';
const routes: Routes = [
  {path:'',component:BienvenidaComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'busqueda',component:BusquedaComponent},
  {path:'acercade',component:AcercadeComponent},
  {path:'listadoarticulos',component:ListadoarticulosComponent},
  {path:'altaarticulo',component:AltaarticuloComponent},
  {path: 'modificararticulo/:id', component: ModificacionarticuloComponent},
  {path:'**',component:Pagina404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

