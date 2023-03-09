import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login-form/login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InOutPutComponent } from './in-out-put/in-out-put.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrosComponent } from './core/carros/carros.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InOutPutComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
