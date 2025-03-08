import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const DB = "https://www.omdbapi.com/?apikey=78aeea8b";
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  constructor(private httpClient: HttpClient) { }
  obtenerPeliculas(nombre: string, anio: number, tipo: string) {
    let rutaAnio = "";
    nombre = "&s=" + nombre;
    if (anio != 0) {
      rutaAnio = "&y=" + anio;
    }
    if (tipo!="") {
      tipo="&type="+tipo;
    }
    console.log(`${DB}${nombre}${rutaAnio}${tipo}`);

    return this.httpClient.get<any>(`${DB}${nombre}${rutaAnio}${tipo}`);

  }

}
