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
  faltaNombre="";
  peliculas:Ipelicula[]=[];
  nombreBusqueda="";
  constructor(private servicoPeliculas: PeliculasService) { }
  onButtonClick(): void {
    this.nombreBusqueda=this.nombre;
    this.faltaNombre="";
    this.peliculas=[];
    if (this.nombre=="") {
      this.faltaNombre="Tienes que rellenar el parametro nombre";
    }else{
      this.servicoPeliculas.obtenerPeliculas(this.nombre,this.anio,this.tipo).subscribe((data) => {       
          this.peliculas = data.Search;
          
      });

    }
 
  }
  
}
