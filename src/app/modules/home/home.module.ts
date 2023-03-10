import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { HomeRoutingModule } from './home-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
})
export class HomeModule { }
