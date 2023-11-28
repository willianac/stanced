import { NgModule } from "@angular/core";
import { ChangeUserinfoModalComponent } from "./change-userinfo-modal.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthErrorModule } from "../auth-error/auth-error.module";

@NgModule({
	declarations: [ChangeUserinfoModalComponent],
	imports: [CommonModule, FormsModule, AuthErrorModule],
	exports: [ChangeUserinfoModalComponent]
})
export class ChangeUserInfoModal {}