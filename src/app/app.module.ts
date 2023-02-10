import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login-form/login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InOutPutComponent } from './in-out-put/in-out-put.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InOutPutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
