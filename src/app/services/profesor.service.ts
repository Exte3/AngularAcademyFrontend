import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../interfaces/profesor.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private url: string;

  profesor: Profesor[] = [];
  constructor(public http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/api';
    this.cargarProfesores();
  }

  public cargarProfesores() {
    this.http
      .get(this.url + '/profesores')
      .subscribe((response: Profesor | any) => {
        this.profesor = response;
        console.log(this.profesor);
      });
  }

  public save(profesor: Profesor) {
    return this.http.post<Profesor>(this.url + '/agregar_profesor', profesor);
  }

  public edit(profesor: Profesor) {
    return this.http.put<Profesor>(this.url + '/actualizar_profesor', profesor);
  }

  public elimina(id: any) {
    return this.http.delete<Profesor>(this.url + '/eliminar_profesor/' + id);
  }
  public ingresar(profesor: Profesor) {
    console.log(profesor.email);
    console.log(profesor.password);
    return this.http
      .post<Profesor>(this.url + '/ingresar', profesor)
      .subscribe((result) => {
        if (result) {
          console.log('funciona');
          this.router.navigate(['/profesores']);
        }
      });
  }
}
