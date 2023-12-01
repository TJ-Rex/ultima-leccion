export class Proveedor {

    private static instancia: Proveedor | null = null;

    private lista_datos: string[] = [];
  
    constructor() {}
  
    static obtener_instancia(): Proveedor {

      if (!Proveedor.instancia) {

        Proveedor.instancia = new Proveedor();

      }

      return Proveedor.instancia;

    }
  
    agregar_proveedor(proveedor1: string): void {

      this.lista_datos.push(proveedor1);

    }
  
    public mostrar_datos(): void {

      console.log("Listado de Proveedores:");

      this.lista_datos.forEach((proveedor2) => { // forEach: por cada elemento quiero que me imprimas "dato".
        
        console.log(`${proveedor2}`);
        
      });
    }
  }