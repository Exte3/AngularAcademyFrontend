import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  exports: [LoginComponent, RegistroComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class LoginModule {}
