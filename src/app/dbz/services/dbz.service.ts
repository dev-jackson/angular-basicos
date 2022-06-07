import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

    get perosonajes(): Personaje[]{
        return [...this._personajes];
    }


    constructor(){
    }

    agregarPersonaje(nuevoPersonaje: Personaje){
      if(nuevoPersonaje.nombre.trim().length === 0){ return; }
      this._personajes.push(nuevoPersonaje);
    }
}