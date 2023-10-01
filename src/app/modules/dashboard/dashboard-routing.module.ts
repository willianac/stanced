import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewcarComponent } from "./components/newcar/newcar.component";
import { DashboardComponent } from "./dashboard.component";
import { CarpageComponent } from "./components/carpage/carpage.component";

const routes: Routes = [
	{
		path : "",
		component : DashboardComponent
	},
	{
		path : "newcar",
		component : NewcarComponent
	},
	{
		path : "car/:id",
		component : CarpageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
