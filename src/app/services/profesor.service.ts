import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../interfaces/profesor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  url: string = "";
  profesor: Profesor[] = [];

  constructor(private http: HttpClient) {
    this.cargarProfesores();
  }

  public cargarProfesores() {
    this.http.get('assets/data/productos.json').subscribe( (response: Profesor | any) => {
      this.profesor = response.productos;
    });
  }
}
