import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EditarprofesorComponent } from './editarprofesor/editarprofesor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfesorComponent,
    ProfesoresComponent,
    EditarprofesorComponent
  ],
  exports: [
    ProfesoresComponent,
    ProfesorComponent,
    EditarprofesorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class ProfesorModule { }
