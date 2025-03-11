import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path:'',component:BienvenidaComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'busqueda',component:BusquedaComponent},
  {path:'acercade',component:AcercadeComponent},

  {path:'**',component:Pagina404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

