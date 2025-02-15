import { MessageService } from 'primeng/api';
import { Inventario, MovimientoRequest, opciones } from '../../../core/models/inventario/inventario.interfaces';
import { InventarioService } from './../../../core/services/inventario.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrl: './listar-inventario.component.scss'
})
export class ListarInventarioComponent implements OnInit {
  private inventarioService: InventarioService = inject(InventarioService)
  private messageService: MessageService = inject(MessageService)

  inventario!: Inventario[];
  idProducto!: number;

  movimiento: FormGroup<MovimientoRequest> = new FormGroup<MovimientoRequest>({
    cantidad: new FormControl(null, Validators.required),
    idProducto: new FormControl(null),
    tipo: new FormControl(null, Validators.required),
  })

  opciones = opciones

  ngOnInit(): void {
    this.getInventario()
  }

  getInventario() {
    this.inventarioService.getInventario().subscribe({
      next: (v => {
        this.messageService.add({ severity: 'success', detail: 'Consulta exitosa' })
        this.inventario = v.body as Inventario[]
      }),
      error: (e => {
        this.messageService.add({ severity: 'error', detail: 'Hubo un error' })
      })
    })
  }

  postMovimiento() {
    this.movimiento.controls.idProducto.setValue(this.idProducto)
    this.inventarioService.postMovimiento(this.movimiento).subscribe({
      next: (v => {
        this.messageService.add({ severity: 'success', detail: 'Movimiento exitoso' })
        this.idProducto = 0
        this.movimiento.reset()
        this.getInventario()
      }),
      error: ((e: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', detail: e.error })
      })
    })
  }

}
