import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo.component";
import { MenuModule } from "../menu/menu.module";

@NgModule({
	declarations: [PhotoComponent],
	imports: [CommonModule, MenuModule],
	exports: [PhotoComponent]
})
export class PhotoModule {}