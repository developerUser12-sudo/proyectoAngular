import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const DB = "https://www.omdbapi.com/?apikey=78aeea8b&s=";
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  constructor(private httpClient: HttpClient) { }
  obtenerPeliculas(nombre: string) {
    console.log(`${DB}${nombre}`);
    
    return this.httpClient.get<any>(`${DB}${nombre}`);

  }

}
