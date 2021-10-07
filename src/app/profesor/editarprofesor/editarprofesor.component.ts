import { Component, Input, OnInit } from '@angular/core';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../interfaces/profesor.interface';

@Component({
  selector: 'app-editarprofesor',
  templateUrl: './editarprofesor.component.html',
  styleUrls: ['./editarprofesor.component.css'],
})
export class EditarprofesorComponent implements OnInit {
  @Input() profesorCurrent: Profesor | any;
  visibilida: string = 'true';
  show_alert: boolean = false;
  constructor(public profesorService: ProfesorService) {}

  ngOnInit(): void {}
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
  mensaje_password: string | null = '';
  mensaje_rut: string | null = '';
  mensaje_grado_academico: string | null = '';
  mensaje_disponibilidad: string | null = '';
  mensaje_direccion: string | null = '';

  editarProfesor(
    nombre: string,
    apellido: string,
    edad: number | any,
    fnacimiento: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    sexo: string,
    telefono: string,
    especialidad: string,
    anos_experiencia: number | any,
    rut: string,
    grado_academico: string,
    disponibilidad: string,
    direccion: string,
    id: number | any
  ) {
    const profesor: any = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      rut: rut,
      edad: edad,
      email: email,
      sexo: sexo,
      telefono: telefono,
      especialidad: especialidad,
      grado_academico: grado_academico,
      fnacimiento: fnacimiento,
      anos_experiencia: anos_experiencia,
      direccion: direccion,
      disponibilidad: disponibilidad,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    var valido = 0;
    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (/^\s+|\s+$/.test(nombre)) {
      this.mensaje_nombre = 'Introduzca una cadena de texto.';
      nombre = '';
    } else if (nombre.trim() == '') {
      nombre = '';
      this.mensaje_nombre = ' El campo Nombre no puede  estar vacio';
    } else {
      this.mensaje_nombre = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(apellido)) {
      this.mensaje_apellido = 'Introduzca una cadena de texto.';
      apellido = '';
    } else if (apellido.trim() == '') {
      apellido = '';
      this.mensaje_apellido = 'El campo Apellido no puede  estar vacio';
    } else {
      this.mensaje_apellido = '';
      valido++;
    }
    if (/^\s+|\s+$/.test(rut)) {
      this.mensaje_rut = 'Introduzca un Rut';
      rut = '';
    } else if (rut.trim() == '') {
      rut = '';
      this.mensaje_rut = ' El campo Rut no puede  estar vacio';
    } else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) {
      this.mensaje_rut = 'Introduzco un Rut valido';
      rut = '';
    } else {
      this.mensaje_rut = '';
      valido++;
    }

    if (!edad) {
      this.mensaje_edad = 'El campo Edad no puede estar vacio';
      edad = null;
    } else if (/^\s+|\s+$/.test(edad)) {
      this.mensaje_edad = 'Introduzca un numero.';
      edad = null;
    } else if (edad <= 0) {
      this.mensaje_edad = 'El campo Edad no puede ser negativo.';
      edad = null;
    } else {
      this.mensaje_edad = '';
      valido++;
    }

    if (!email) {
      this.mensaje_email = 'El campo Email no puede  estar vacio';
      email = '';
    } else if (/^\s+|\s+$/.test(email)) {
      this.mensaje_email = 'Introduzca un cadena de texto';
      email = '';
    } else if (!regexp.test(email)) {
      this.mensaje_email = 'El Email debe ser valido.';
      email = '';
    } else if (email.trim() == '') {
      this.mensaje_email = 'Introduzca un cadena de texto';
      email = '';
    } else {
      this.mensaje_email = '';
      valido++;
    }
    if (/^\s+|\s+$/.test(sexo)) {
      this.mensaje_sexo = 'Introduzca una cadena de texto.';
      sexo = '';
    } else if (sexo.trim() == '') {
      sexo = '';
      this.mensaje_sexo = ' El campo Sexo no puede  estar vacio';
    } else {
      this.mensaje_sexo = '';
      valido++;
    }
    let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g;
    
    if (/^\s+|\s+$/.test(telefono)) {
      this.mensaje_telefono = 'Introduzca un numero.';
      telefono = '';
    } else if(!regex.test(telefono)) {
      telefono = '';
      this.mensaje_telefono = 'Introduzca en el formato solicitado';
    } else if (telefono.trim() == '') {
      telefono = '';
      this.mensaje_telefono = 'El campo Telefono no puede  estar vacio';
    } else {
      this.mensaje_telefono = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(especialidad)) {
      this.mensaje_especialidad = 'Introduzca una cadena de texto.';
      especialidad = '';
    } else if (especialidad.trim() == '') {
      especialidad = '';
      this.mensaje_especialidad =
        ' El campo Especialidad no puede  estar vacio';
    } else {
      this.mensaje_especialidad = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(grado_academico)) {
      this.mensaje_grado_academico = 'Introduzca una cadena de texto.';
      grado_academico = '';
    } else if (grado_academico.trim() == '') {
      grado_academico = '';
      this.mensaje_grado_academico =
        ' El campo Grado Academico no puede  estar vacio';
    } else {
      this.mensaje_grado_academico = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(fnacimiento)) {
      this.mensaje_fnacimiento = 'Introduzca un cadena de texto.';
      fnacimiento = '';
    } else if (fnacimiento.trim() == '') {
      fnacimiento = '';
      this.mensaje_fnacimiento =
        ' El campo Fecha de Nacimiento no puede  estar vacio';
    } else {
      this.mensaje_fnacimiento = '';
      valido++;
    }

    if (!anos_experiencia) {
      this.mensaje_anosExperiencia =
        'El campo Años de Experencia no puede estar vacio';
      anos_experiencia = null;
    } else if (/^\s+|\s+$/.test(anos_experiencia)) {
      this.mensaje_anosExperiencia = 'Introduzca un numero';
      anos_experiencia = null;
    } else if (anos_experiencia <= 0) {
      this.mensaje_anosExperiencia =
        'El campo Años de Experencia no puede ser negativo.';
      anos_experiencia = null;
    } else {
      this.mensaje_anosExperiencia = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(direccion)) {
      this.mensaje_direccion = 'Introduzca una cadena de texto.';
      direccion = '';
    } else if (direccion.trim() == '') {
      direccion = '';
      this.mensaje_direccion = ' El campo Dirección no puede  estar vacio';
    } else {
      this.mensaje_direccion = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(disponibilidad)) {
      this.mensaje_disponibilidad = 'Introduzca una cadena de texto.';
      disponibilidad = '';
    } else if (disponibilidad.trim() == '') {
      disponibilidad = '';
      this.mensaje_disponibilidad =
        ' El campo Disponibilidad no puede  estar vacio';
    } else {
      this.mensaje_disponibilidad = '';
      valido++;
    }

    if (/^\s+|\s+$/.test(password)) {
      this.mensaje_password = 'Introduzca una cadena de texto.';
      password = '';
      passwordConfirmation = '';
    } else if (password.trim() == '') {
      password = '';
      passwordConfirmation = '';
      this.mensaje_password = 'El campo Contraseña no puede  estar vacio';
    } else if (passwordConfirmation != password) {
      passwordConfirmation = '';
      this.mensaje_password =
        'El Contraseña y su confirmación deben ser iguales';
    } else {
      this.mensaje_password = '';
      valido++;
    }

    if (valido == 14) {
      this.profesorService
        .edit(profesor)
        .subscribe((result) => console.log(result));
      this.profesorService.cargarProfesores();


      this.show_alert = true;
      setTimeout(()=>{ this.show_alert = false }, 3000);


    }
  }
  limpiar(){
    this.mensaje_nombre = '';
    this.mensaje_apellido= '';
    this.mensaje_edad= '';
    this.mensaje_fnacimiento= '';
    this.mensaje_sexo= '';
    this.mensaje_telefono= '';
    this.mensaje_email= '';
    this.mensaje_especialidad= '';
    this.mensaje_anosExperiencia= '';
    this.mensaje_password= '';
    this.mensaje_rut = '';
    this.mensaje_grado_academico = '';
    this.mensaje_disponibilidad  = '';
    this.mensaje_direccion = '';
  }
}
