import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewPictureComponent } from "./components/new-picture/new-picture.component";
import { DashboardComponent } from "./dashboard.component";
import { PicturePageComponent } from "./components/picture-page/picture-page.component";

const routes: Routes = [
	{
		path : "",
		component : DashboardComponent
	},
	{
		path : "new",
		component : NewPictureComponent
	},
	{
		path : "picture/:id",
		component : PicturePageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
