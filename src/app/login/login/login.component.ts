import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: string= "";
  password: string = "";

  mensaje_password: string | any = "";
  mensaje_email:string | any= "";

  insertar(){
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!this.email){
      this.mensaje_email = "El campo Email no puede  estar vacio";
      this.email = "";
    } else if (/^\s+|\s+$/.test(this.email)) {
      this.mensaje_email = "Introduzca un cadena de texto";
      this.email = "";
    } else if (!regexp.test(this.email)) {
      this.mensaje_email = "El Email debe ser valido.";
      this.email = "";
    } else if (this.email.trim() == "") {
      this.mensaje_email = "Introduzca un cadena de texto";
      this.email = "";
    } else {
      this.mensaje_email = "";
    }
    
    if (/^\s+|\s+$/.test(this.password)) {
      this.mensaje_password = "Introduzca una cadena de texto.";
      this.password = "";
    } else if (this.password.trim() == "") {
      this.password = "";
      this.mensaje_password = "El campo Contraseña no puede  estar vacio";
    } else {
      this.mensaje_password = "";
    }
  }
}
