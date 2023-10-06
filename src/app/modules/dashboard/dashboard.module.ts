import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { PhotoGridComponent } from "./components/photo-grid/photo-grid.component";
import { NewPictureComponent } from "./pages/new-picture/new-picture.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PictureComponent } from "./pages/picture/picture.component";
import { HeaderModule } from "src/app/core/header/header.module";
import { CardPhotoModule } from "src/app/shared/components/card-photo/card-photo.module";


@NgModule({
	declarations: [DashboardComponent, PhotoGridComponent, NewPictureComponent, PictureComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HeaderModule,
		CardPhotoModule
	]
})
export class DashboardModule { }
