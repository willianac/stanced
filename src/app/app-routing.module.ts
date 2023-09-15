import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { LoginpageGuard } from './core/guards/loginpage.guard';

const routes: Routes = [
  {path : "", redirectTo : "auth", pathMatch : "full"},
  {
    path : "auth",
    loadChildren : () => import("./modules/auth/auth.module").then(m => m.AuthModule),
    canMatch : [LoginpageGuard]
  },
  {
    path : "dashboard",
    loadChildren : () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule),
    canMatch : [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
