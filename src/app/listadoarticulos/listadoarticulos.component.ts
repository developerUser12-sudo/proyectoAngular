import { Component } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Iarticulo } from '../iarticulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadoarticulos',
  standalone: false,
  templateUrl: './listadoarticulos.component.html',
  styleUrl: './listadoarticulos.component.css'
})
export class ListadoarticulosComponent {
  articulos:Iarticulo[]=[];
  constructor(private servicoArticulos: ArticulosService,private router: Router) { }

  ngOnInit(): void {
    this.servicoArticulos.obtenerArticulos().subscribe((data) => { 
      
      this.articulos = data.articulos; 
    });
  }
  redirigirActualizar(id: number): void {
    
    this.router.navigate(['/modificararticulo', id]);
  }

}
