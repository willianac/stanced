import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewPictureComponent } from "./pages/new-picture/new-picture.component";
import { DashboardComponent } from "./dashboard.component";
import { PictureComponent } from "./pages/picture/picture.component";

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
		component : PictureComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
