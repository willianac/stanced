import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "./header.component";
import { PopoverMenuComponent } from "./components/popover-menu/popover-menu.component";
import { AvatarModule } from "src/app/shared/components/avatar/avatar.module";

@NgModule({
	declarations : [HeaderComponent, SidebarComponent, PopoverMenuComponent],
	imports : [CommonModule, RouterModule, AvatarModule],
	exports : [HeaderComponent]
})
export class HeaderModule {}