import { FormGroup } from '@angular/forms';
import { inject, Injectable } from '@angular/core';
import { Inventario, MovimientoRequest } from '../models/inventario/inventario.interfaces';
import { HttpClient } from '@angular/common/http';
import { URLAPI } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private httpClient: HttpClient = inject(HttpClient)

  postMovimiento(movimiento: FormGroup<MovimientoRequest>) {
    return this.httpClient.post(`${URLAPI}Productos/movimiento`, movimiento.value, { observe: 'response' })
  }

  getInventario() {
    return this.httpClient.get<Inventario[]>(`${URLAPI}Productos/inventario`, { observe: 'response' })
  }
}
