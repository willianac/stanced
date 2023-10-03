import { Component, Input } from "@angular/core";

@Component({
	selector: "app-auth-error",
	templateUrl: "auth-error.component.html"
})
export class AuthErrorComponent {
	@Input() message = ""
}