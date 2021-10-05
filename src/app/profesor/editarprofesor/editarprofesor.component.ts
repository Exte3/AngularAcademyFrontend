import { Component, Input, OnInit } from '@angular/core';
import { Profesor } from '../../interfaces/profesor.interface'

@Component({
  selector: 'app-editarprofesor',
  templateUrl: './editarprofesor.component.html',
  styleUrls: ['./editarprofesor.component.css']
})
export class EditarprofesorComponent implements OnInit {

  @Input() profesorCurrent: Profesor | any;

  constructor() { }

  ngOnInit(): void {
  }

}
