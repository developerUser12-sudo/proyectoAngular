import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Ipelicula } from '../ipelicula';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
    peliculas:Ipelicula[]=[];
  
  constructor(private servicoPeliculas: PeliculasService) { }
  ngOnInit(): void {

    this.servicoPeliculas.obtenerPeliculas().subscribe((data) => {
      this.peliculas = data.Search;

    });


  }
}