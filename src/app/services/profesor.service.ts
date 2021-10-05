import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../interfaces/profesor.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private url: string;
  profesor: Profesor[] = [];

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
    this.cargarProfesores();
  }

  public cargarProfesores() {
    this.http
      .get(this.url + '/profesores')
      .subscribe((response: Profesor | any) => {
        this.profesor = response.productos;
        console.log(this.profesor);
      });
  }

  public save(profesor: Profesor) {
    return this.http.post<Profesor>(this.url + 'agregar_profesor', profesor);
  }
}
