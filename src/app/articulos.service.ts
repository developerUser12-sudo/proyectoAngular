import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iarticulo } from './iarticulo';
import { Observable } from 'rxjs';
const DB = "https://apiproyecto016.iesruizgijon.es/api/articulos";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private httpClient: HttpClient) { }
  obtenerArticulos() {
    return this.httpClient.get<any>(`${DB}`);
  }
  actualizarArticulo(id: number, articulo: Iarticulo): Observable<Iarticulo> {
    return this.httpClient.put<Iarticulo>(`${DB}/${id}`, articulo);
  }
  obtenerArticuloPorId(id: number): Observable<Iarticulo> {
    return this.httpClient.get<Iarticulo>(`${DB}/${id}`);
  }
  agregarArticulo(articulo: Iarticulo): Observable<Iarticulo> {
    return this.httpClient.post<Iarticulo>(`${DB}`, articulo);
  }
}
