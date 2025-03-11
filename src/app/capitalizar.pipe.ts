import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar',
  standalone: false
})
export class CapitalizarPipe implements PipeTransform {

  transform(nombre: string): string {
    let dividir=nombre.toLowerCase().split(" ");
    let resultado="";
    for (let index = 0; index < dividir.length; index++) {
      resultado+=dividir[index].charAt(0).toUpperCase()+dividir[index].slice(1)+" ";
    }
    return resultado;

  }

}
