import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginModule } from './login/login.module';
import { ProfesorModule } from './profesor/profesor.module';
import { CompartidaModule } from './compartida/compartida.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    ProfesorModule,
    CompartidaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
