import { datos } from "./producto";

export class Cliente implements datos {

    private nombre: string;
  
    constructor(nombre: string) {

      this.nombre = nombre;

    }
  
    public mostrar_datos(nuevo_precio: number): void {

      console.log(`${this.nombre}: El precio del producto ha cambiado a ${nuevo_precio}`);

    }
  }