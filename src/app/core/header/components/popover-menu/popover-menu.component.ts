import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-popover-menu",
	templateUrl: "./popover-menu.component.html",
	styleUrls: ["./popover-menu.component.css"]
})
export class PopoverMenuComponent {
  @Output() logoutEvent = new EventEmitter();

}
