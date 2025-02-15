import { FormControl } from "@angular/forms";

export interface Inventario {
  idProducto: number;
  nombreProducto: string;
  cantidadProducto: number;
}

export interface MovimientoRequest {
  idProducto: FormControl<number | null>;
  tipo: FormControl<string | null>;
  cantidad: FormControl<number | null>;
}

export const opciones = [
  {
    nombre: 'salida'
  },
  {
    nombre: 'entrada'
  }
]
