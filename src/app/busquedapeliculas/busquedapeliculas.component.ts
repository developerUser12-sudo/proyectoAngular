import { Component } from '@angular/core';
import { Ipelicula } from '../ipelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-busquedapeliculas',
  standalone: false,
  templateUrl: './busquedapeliculas.component.html',
  styleUrl: './busquedapeliculas.component.css'
})
export class BusquedapeliculasComponent {
  nombre:string="";
  peliculas:Ipelicula[]=[];
  constructor(private servicoPeliculas: PeliculasService) { }
   onButtonClick(): void {
    this.servicoPeliculas.obtenerPeliculas(this.nombre).subscribe((data) => {       
      if (data && data.Search) {
        this.peliculas = data.Search;
        
      } else if (data && Array.isArray(data)) {
        this.peliculas = data;
      }
    });
  }
}
