import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressBarModule } from "primeng/progressbar";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { PhotoGridComponent } from "./components/photo-grid/photo-grid.component";
import { NewPictureComponent } from "./pages/new-picture/new-picture.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PictureComponent } from "./pages/picture/picture.component";
import { HeaderModule } from "src/app/core/header/header.module";
import { CardPhotoModule } from "src/app/shared/components/card-photo/card-photo.module";
import { CommentComponent } from "./components/comment/comment.component";
import { CommentsContainerComponent } from "./components/comments-container/comments-container-component";
import { MenuModule } from "src/app/shared/components/menu/menu.module";


@NgModule({
	declarations: [
		DashboardComponent, 
		PhotoGridComponent, 
		NewPictureComponent, 
		PictureComponent, 
		CommentComponent, 
		CommentsContainerComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HeaderModule,
		CardPhotoModule,
		MenuModule,
		ProgressBarModule
	]
})
export class DashboardModule { }
