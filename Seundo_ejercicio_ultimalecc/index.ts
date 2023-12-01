import { Producto } from "./producto";
import { Cliente } from "./cliente";


  const producto = new Producto(50);
  
  const cliente1 = new Cliente("Damian");

  const cliente2 = new Cliente("Carolina");

  
  producto.agregar_observador(cliente1);

  producto.agregar_observador(cliente2);
  

  // Cambio de precio
  producto.establecer_nuevo_precio(40);