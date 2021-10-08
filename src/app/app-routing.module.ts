import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { ProfesorComponent } from './profesor/profesor/profesor.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { EditarprofesorComponent } from './profesor/editarprofesor/editarprofesor.component';
import { ProfesoresComponent } from './profesor/profesores/profesores.component';
import { ErrorComponent } from './general/error/error.component';
import { GraficoComponent } from './general/grafico/grafico.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registrarprofesor', component: ProfesorComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'editarprofesor', component: EditarprofesorComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
