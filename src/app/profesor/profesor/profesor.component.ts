import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../interfaces/profesor.interface';
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
})
export class ProfesorComponent implements OnInit {
  constructor(public profesorService: ProfesorService) {}

  ngOnInit(): void {}

  //rut direccion especialidad (cursos curriculum)

  nombre: string = '';
  apellido: string = '';
  edad: number | any = null;
  fnacimiento: string = '';
  email: string = '';

  password: string = '';
  passwordConfirmation: string = '';

  sexo: string = '';
  telefono: string = '';
  especialidad: string = '';
  anos_experiencia: number | any = null;
  gradoAcademico: string = '';
  rut: string = '';

  grado_academico: string = '';
  disponibilidad: string = '';
  direccion: string = '';

  //==========================
  mensaje_nombre: string | null = '';
  mensaje_apellido: string | null = '';
  mensaje_edad: string | null = '';
  mensaje_fnacimiento: string | null = '';
  mensaje_sexo: string | null = '';
  mensaje_telefono: string | null = '';
  mensaje_email: string | null = '';
  mensaje_especialidad: string | null = '';
  mensaje_anosExperiencia: string | null = '';
  mensaje_gradoAcademico: string | null = '';
  mensaje_password: string | null = '';
  mensaje_rut: string | null = '';

  mensaje_grado_academico: string | null = '';
  mensaje_disponibilidad: string | null = '';
  mensaje_direccion: string | null = '';

  insertar(): void {
    var valido = 0;
    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const profesor: any = {
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      edad: this.edad,
      email: this.email,
      sexo: this.sexo,
      telefono: this.telefono,
      especialidad: this.especialidad,
      grado_academico: this.grado_academico,
      fnacimiento: this.fnacimiento,
      anos_experiencia: this.anos_experiencia,
      direccion: this.direccion,
      disponibilidad: this.disponibilidad,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    };

    if (/^\s+|\s+$/.test(this.nombre)) {
      this.mensaje_nombre = 'Introduzca una cadena de texto.';
      this.nombre = '';
    } else if (this.nombre.trim() == '') {
      this.nombre = '';
      this.mensaje_nombre = ' El campo Nombre no puede  estar vacio';
    } else {
      this.mensaje_nombre = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.apellido)) {
      this.mensaje_apellido = 'Introduzca una cadena de texto.';
      this.apellido = '';
    } else if (this.apellido.trim() == '') {
      this.apellido = '';
      this.mensaje_apellido = 'El campo Apellido no puede  estar vacio';
    } else {
      this.mensaje_apellido = '';
      valido++;
    }
    if (/^\s+|\s+$/.test(this.rut)) {
      this.mensaje_rut = 'Introduzca un Rut';
      this.rut = '';
    } else if (this.rut.trim() == '') {
      this.rut = '';
      this.mensaje_rut = ' El campo Rut no puede  estar vacio';
    } else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(this.rut)) {
      this.mensaje_rut = 'Introduzco un Rut valido';
      this.rut = '';
    } else {
      this.mensaje_rut = '';
      valido++;
    }

    if (!this.edad) {
      this.mensaje_edad = 'El campo Edad no puede estar vacio';
      this.edad = null;
    } else if (/^\s+|\s+$/.test(this.edad)) {
      this.mensaje_edad = 'Introduzca un numero.';
      this.edad = null;
    } else if (this.edad <= 0) {
      this.mensaje_edad = 'El campo Edad no puede ser negativo.';
      this.edad = null;
    } else {
      this.mensaje_edad = '';
      valido++;
    }

    if (!this.email) {
      this.mensaje_email = 'El campo Email no puede  estar vacio';
      this.email = '';
    } else if (/^\s+|\s+$/.test(this.email)) {
      this.mensaje_email = 'Introduzca un cadena de texto';
      this.email = '';
    } else if (!regexp.test(this.email)) {
      this.mensaje_email = 'El Email debe ser valido.';
      this.email = '';
    } else if (this.email.trim() == '') {
      this.mensaje_email = 'Introduzca un cadena de texto';
      this.email = '';
    } else {
      this.mensaje_email = '';
      valido++;
    }
    if (/^\s+|\s+$/.test(this.sexo)) {
      this.mensaje_sexo = 'Introduzca una cadena de texto.';
      this.sexo = '';
    } else if (this.sexo.trim() == '') {
      this.sexo = '';
      this.mensaje_sexo = ' El campo Sexo no puede  estar vacio';
    } else {
      this.mensaje_sexo = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.telefono)) {
      this.mensaje_telefono = 'Introduzca un numero.';
      this.telefono = '';
    } else if (this.telefono.trim() == '') {
      this.telefono = '';
      this.mensaje_telefono = 'El campo Telefono no puede  estar vacio';
    } else {
      this.mensaje_telefono = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.especialidad)) {
      this.mensaje_especialidad = 'Introduzca una cadena de texto.';
      this.especialidad = '';
    } else if (this.especialidad.trim() == '') {
      this.especialidad = '';
      this.mensaje_especialidad =
        ' El campo Especialidad no puede  estar vacio';
    } else {
      this.mensaje_especialidad = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.grado_academico)) {
      this.mensaje_grado_academico = 'Introduzca una cadena de texto.';
      this.grado_academico = '';
    } else if (this.grado_academico.trim() == '') {
      this.grado_academico = '';
      this.mensaje_grado_academico =
        ' El campo Grado Academico no puede  estar vacio';
    } else {
      this.mensaje_grado_academico = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.fnacimiento)) {
      this.mensaje_fnacimiento = 'Introduzca un cadena de texto.';
      this.fnacimiento = '';
    } else if (this.fnacimiento.trim() == '') {
      this.fnacimiento = '';
      this.mensaje_fnacimiento =
        ' El campo Fecha de Nacimiento no puede  estar vacio';
    } else {
      this.mensaje_fnacimiento = '';
      valido++;
    }

    if (!this.anos_experiencia) {
      this.mensaje_anosExperiencia =
        'El campo Años de Experencia no puede estar vacio';
      this.anos_experiencia = null;
    } else if (/^\s+|\s+$/.test(this.anos_experiencia)) {
      this.mensaje_anosExperiencia = 'Introduzca un numero';
      this.anos_experiencia = null;
    } else if (this.anos_experiencia <= 0) {
      this.mensaje_anosExperiencia =
        'El campo Años de Experencia no puede ser negativo.';
      this.anos_experiencia = null;
    } else {
      this.mensaje_anosExperiencia = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.direccion)) {
      this.mensaje_direccion = 'Introduzca una cadena de texto.';
      this.direccion = '';
    } else if (this.direccion.trim() == '') {
      this.direccion = '';
      this.mensaje_direccion = ' El campo Dirección no puede  estar vacio';
    } else {
      this.mensaje_direccion = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.disponibilidad)) {
      this.mensaje_disponibilidad = 'Introduzca una cadena de texto.';
      this.disponibilidad = '';
    } else if (this.disponibilidad.trim() == '') {
      this.disponibilidad = '';
      this.mensaje_disponibilidad =
        ' El campo Disponibilidad no puede  estar vacio';
    } else {
      this.mensaje_disponibilidad = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(this.password)) {
      this.mensaje_password = 'Introduzca una cadena de texto.';
      this.password = '';
      this.passwordConfirmation = '';
    } else if (this.password.trim() == '') {
      this.password = '';
      this.passwordConfirmation = '';
      this.mensaje_password = 'El campo Contraseña no puede  estar vacio';
    } else if (this.passwordConfirmation != this.password) {
      this.passwordConfirmation = '';
      this.mensaje_password =
        'El Contraseña y su confirmación deben ser iguales';
    } else {
      this.mensaje_password = '';
      valido++;
    }

    if (valido == 14) {
      this.profesorService
        .save(profesor)
        .subscribe((result) => console.log(result));
      this.profesorService.cargarProfesores();
    }
  }
}
