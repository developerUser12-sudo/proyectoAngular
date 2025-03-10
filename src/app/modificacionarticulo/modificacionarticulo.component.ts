import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from '../articulos.service';
import { Iarticulo } from '../iarticulo';

@Component({
  selector: 'app-modificacionarticulo',
  standalone: false,
  templateUrl: './modificacionarticulo.component.html',
  styleUrl: './modificacionarticulo.component.css'
})
export class ModificacionarticuloComponent{
  articulo: Iarticulo = { id: 0, descripcion: '', precio: 0 };

  constructor(
    private servicioArticulos: ArticulosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  

  actualizarArticulo(): void {
    this.articulo.id=Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.articulo.id);
    
    this.servicioArticulos.actualizarArticulo(this.articulo.id, this.articulo)
      .subscribe(() => {
        this.router.navigate(['/listadoarticulos']);
      });
  }
}
