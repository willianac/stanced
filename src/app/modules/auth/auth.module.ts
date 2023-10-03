import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms"

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./components/register/register.component";
import { InputFillErrorModule } from "src/app/shared/components/input-fill-error/input-fill-error.module";
import { AuthErrorModule } from "src/app/shared/components/auth-error/auth-error.module";

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
		InputFillErrorModule,
		AuthErrorModule
	],
})
export class AuthModule { }
