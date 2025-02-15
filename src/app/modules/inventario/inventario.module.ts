import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ListarInventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    PrimeNgModule
  ]
})
export class InventarioModule { }
