import { Component } from '@angular/core';
import { Ipelicula } from '../ipelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  nombre="";
  anio=0;
  tipo="";
  faltaNombre=false;
  peliculas:Ipelicula[]=[];
  nombreBusqueda="";
  click=false;
  constructor(private servicoPeliculas: PeliculasService) { }
  onButtonClick(): void {
    this.nombreBusqueda=this.nombre;
    this.faltaNombre=false;
    this.peliculas=[];
    this.click=true;
    if (this.nombre=="") {
      this.faltaNombre=true;
    }else{
      this.servicoPeliculas.obtenerPeliculasByParameters(this.nombre,this.anio,this.tipo).subscribe((data) => {       
          this.peliculas = data.Search;
          
      });

    }
 
  }
  
}
