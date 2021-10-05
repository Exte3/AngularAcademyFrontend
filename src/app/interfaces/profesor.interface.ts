export interface Profesor {
  id?: number;
  nombre: string;
  apellido?: string;
  edad: number;
  fnacimiento?: string;
  email: string;

  password: string;
  passwordConfirmation?: string;

  grado_academico: string;
  especialidad?: string;
  disponibilidad?: string;
  anos_experiencia: number;

  rut?: string;
  direccion?: string;
  sexo?: string;
  telefono?: number;
}
