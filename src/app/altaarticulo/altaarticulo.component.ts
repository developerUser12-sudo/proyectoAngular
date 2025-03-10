import { Component } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Iarticulo } from '../iarticulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altaarticulo',
  standalone:false,
  templateUrl: './altaarticulo.component.html',
  styleUrls: ['./altaarticulo.component.css']
})
export class AltaarticuloComponent {
  articulo: Iarticulo = { id: 0, descripcion: '', precio: 0 };  // Inicializa con valores vacíos

  constructor(private servicioArticulos: ArticulosService, private router: Router) {}

  onSubmit(): void {
    this.servicioArticulos.agregarArticulo(this.articulo).subscribe(
      (data) => {
        console.log('Articulo agregado exitosamente', data);
        this.router.navigate(['/listadoarticulos']); // Navegar a la lista de artículos después de agregar
      },
      (error) => {
        console.error('Error al agregar artículo', error);
      }
    );
  }
}
