import { NgModule } from "@angular/core";
import { ChangeUserinfoModalComponent } from "./change-userinfo-modal.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [ChangeUserinfoModalComponent],
	imports: [CommonModule, FormsModule],
	exports: [ChangeUserinfoModalComponent]
})
export class ChangeUserInfoModal {}