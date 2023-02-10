import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  exports: [LoginFormComponent]
})
export class LoginModule { }
