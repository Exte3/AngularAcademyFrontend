import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from '../app.component';
import { GraficoComponent } from './grafico/grafico.component';
import { CompartidaModule } from '../compartida/compartida.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent, ErrorComponent, GraficoComponent],
  imports: [CommonModule, FormsModule, BrowserModule, CompartidaModule],
})
export class GeneralModule {}
