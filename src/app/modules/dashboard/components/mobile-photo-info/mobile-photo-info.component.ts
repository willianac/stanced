import { Component, EventEmitter, Input, Output } from "@angular/core";

type LikeEvent = {
	isPhotoAlreadyLiked: boolean
	id: string
}

@Component({
	selector: "app-mobile-photo-info",
	templateUrl: "./mobile-photo-info.component.html",
	styleUrls: ["./mobile-photo-info.component.css"]
})
export class MobilePhotoInfoComponent {
	@Input() pictureID = "";
	@Input() title = ""
	@Input() owner = ""
	@Input() avatar = ""
	@Input() didUserLiked = false;
	@Input() likeCount = 0
	@Input() heartFilled = false
	@Output() likeEvent = new EventEmitter<LikeEvent>()

	public handleLikeEvent() {
		this.likeEvent.emit({isPhotoAlreadyLiked: this.didUserLiked, id: this.pictureID})
	}
}
