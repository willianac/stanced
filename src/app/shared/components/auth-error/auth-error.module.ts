import { NgModule } from "@angular/core";
import { AuthErrorComponent } from "./auth-error.component";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [AuthErrorComponent],
	imports: [CommonModule],
	exports: [AuthErrorComponent]
})
export class AuthErrorModule {}