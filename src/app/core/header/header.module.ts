import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations : [HeaderComponent, SidebarComponent],
    imports : [CommonModule, RouterModule],
    exports : [HeaderComponent]
})
export class HeaderModule {}