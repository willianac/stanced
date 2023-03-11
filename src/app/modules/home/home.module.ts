import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { HomeRoutingModule } from './home-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './home.component';
import { ErrorMessageModule } from 'src/app/shared/components/error-message/error-message.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
})
export class HomeModule { }
