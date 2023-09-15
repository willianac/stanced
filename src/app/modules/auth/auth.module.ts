import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthComponent } from './auth.component';
import { ErrorMessageModule } from 'src/app/shared/components/error-message/error-message.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
})
export class AuthModule { }
