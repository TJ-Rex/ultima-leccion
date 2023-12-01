export interface datos { 

    mostrar_datos(nuevo_precio: number): void;

  }
  
  export class Producto{

    private precio: number = 0;

    private observadores: datos[] = [];
  
    constructor(precio: number) {

      this.precio = precio;

    }
  
    public agregar_observador(observador: datos): void {

      this.observadores.push(observador);

    }
  
    public eliminar_observador(observador: datos): void {

      this.observadores = this.observadores.filter(obs => obs !== observador);

    }
  
    public establecer_nuevo_precio(nuevo_precio: number): void {

      this.precio = nuevo_precio;

      this.notificar_observadores();

    }
  
    private notificar_observadores(): void {

      this.observadores.forEach(observador => {

        observador.mostrar_datos(this.precio);});
    }
  }
  
  