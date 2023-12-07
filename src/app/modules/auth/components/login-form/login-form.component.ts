import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { IFullUser } from "src/app/core/authentication/user";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent {
	loginForm = this.fb.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(6)]]
	})
	public isLoading = false;
	public showError = false;
	public errorMessage = "";

	constructor(private router: Router, private auth: AuthenticationService, private fb: FormBuilder) {}

	public fazerLogin() {
		this.isLoading = true
		const usuario = this.loginForm.getRawValue() as IFullUser
		this.auth.login(usuario).subscribe({
			next : () => this.router.navigateByUrl("dashboard"),
			error: (err) => {
				this.isLoading = false
				this.showError = true
				if(err.status === 422) {
					return this.errorMessage = err.error.message
				}
				return this.errorMessage = "Erro inesperado do servidor"
			}
		})
	}
}