import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { ProfesorComponent } from './profesor/profesor/profesor.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { EditarprofesorComponent } from './profesor/editarprofesor/editarprofesor.component';
import { ProfesoresComponent } from './profesor/profesores/profesores.component';


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path:'registro', component: RegistroComponent},
  { path: 'registrarprofesor', component: ProfesorComponent},
  { path: 'profesores', component: ProfesoresComponent},
  { path: 'editarprofesor', component: EditarprofesorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
