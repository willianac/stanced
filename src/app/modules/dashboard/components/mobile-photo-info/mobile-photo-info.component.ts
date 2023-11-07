import { Component, Input } from "@angular/core";

@Component({
	selector: "app-mobile-photo-info",
	templateUrl: "./mobile-photo-info.component.html",
	styleUrls: ["./mobile-photo-info.component.css"]
})
export class MobilePhotoInfoComponent {
	@Input() title = ""
	@Input() owner = ""
	@Input() avatar = ""
}
