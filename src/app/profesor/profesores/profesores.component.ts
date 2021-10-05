import { Component, Input, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from '../../interfaces/profesor.interface'
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  constructor(private profesorService: ProfesorService) { 
    //this.profesorCurrent = new Profesor();
  }
  ngOnInit(): void {
  }
  @Input() profesorCurrent: Profesor | any;

  enviarModal(profesorSelect: Profesor){
    this.profesorCurrent = profesorSelect;
    //console.log("envia datos");
  }
}
