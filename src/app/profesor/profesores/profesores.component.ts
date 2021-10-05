import { Component, Input, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from '../../interfaces/profesor.interface'
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  constructor(public profesorService: ProfesorService) { 
  }
  ngOnInit(): void {
  }
  lista_profesores: Profesor[] = [];

  @Input() profesorCurrent: Profesor| any;

  enviarModal(profesorSelect: Profesor| any){
    //this.profesorCurrent = profesorSelect;
    this.profesorCurrent = this.profesorService.profesor.find(profesor => profesor.id == profesorSelect);
    console.log(this.profesorCurrent);
  }
}
/*
interface Profesor {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;

  fnacimiento: string;
  
  email: string;
  rut: string;
  direccion: string;
  password: string;
  passwordConfirmation: string;
  createdAt: string;
  updatedAt: string;
  
  grado_academico: string;
  asignaturas: string;
  disponibilidad: string;
  anos_experiencia: number;
  

  inicio_contrato: string;

}
*/




