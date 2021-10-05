export interface Profesor {
  id: number;
  nombre: string;
  apellido?: any;
  edad: number;
  email: string;
  password: string;
  passwordConfirmation?: any;
  createdAt: string;
  updatedAt: string;
  grado_academico: string;
  asignaturas?: any;
  disponibilidad?: any;
  anos_experiencia: number;
  inicio_contrato: string;
  nacimiento?: any;
}
