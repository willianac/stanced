import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditModalComponent } from "./edit-modal.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [EditModalComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [EditModalComponent]
})
export class EditModalModule { }
