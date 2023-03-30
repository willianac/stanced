import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent,
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
export class HomeRoutingModule { }
