import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [HomeComponent, ErrorComponent],
  imports: [CommonModule],
})
export class GeneralModule {}
