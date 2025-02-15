import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    DividerModule,
    InputTextModule,
    TableModule,
    OverlayPanelModule,
    TooltipModule,
    DropdownModule,
    InputNumberModule
  ],
  exports: [
    ButtonModule,
    ReactiveFormsModule,
    DividerModule,
    InputTextModule,
    TableModule,
    OverlayPanelModule,
    TooltipModule,
    DropdownModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }
