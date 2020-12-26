import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material"
import { ModalComponent } from '../components/modal/modal.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    FormsModule,
  ],
  exports: [
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    ModalComponent,
  ]
})
export class MaterialModule { }
