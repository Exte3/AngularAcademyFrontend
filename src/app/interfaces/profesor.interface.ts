export interface Profesor {
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

  especialidad: string;
  inicio_contrato: string;

  telefono: string;
  sexo: string;
}
