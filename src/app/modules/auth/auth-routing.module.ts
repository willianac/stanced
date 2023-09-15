import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path : "",
    component : AuthComponent,
    children : [
      {
        path : "",
        component : LoginFormComponent
      },
      {
        path : "register",
        component : RegisterComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
