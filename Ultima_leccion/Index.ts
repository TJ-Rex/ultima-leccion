import { Proveedor } from "./Proveedor";

const instancia_proveedor = Proveedor.obtener_instancia();
  
// Agregar proveedores a la lista

instancia_proveedor.agregar_proveedor("Primer proveedor");

instancia_proveedor.agregar_proveedor("Segundo proveedor");

instancia_proveedor.agregar_proveedor("Tercer proveedor");


instancia_proveedor.mostrar_datos();