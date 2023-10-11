import { animate, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, Output } from "@angular/core";

const enterTr = transition(":enter", [
	style({
		opacity: 0
	}),
	animate("0.2s linear", style({ opacity: 1 }))
])

const leaveTr = transition(":leave", [
	style({
		opacity: 1
	}),
	animate("0.2s linear", style({ opacity: 0 }))
])

const fadeIn = trigger("fadeIn", [enterTr])
const fadeOut = trigger("fadeOut", [leaveTr])

@Component({
	selector: "app-photo",
	templateUrl: "photo.component.html",
	animations: [fadeIn, fadeOut]
})
export class PhotoComponent {
	@Input() id = ""
	@Input() src = ""
	@Input() alt = ""
	@Output() deleteImageEvent = new EventEmitter<string>()
	isActionsButtonDisplayed = false;
	isPopoverMenuOpen = false;

	public handleActionsButton() {
		this.isActionsButtonDisplayed = !this.isActionsButtonDisplayed
	}

	public handlePopoverMenu() {
		this.isPopoverMenuOpen = !this.isPopoverMenuOpen
	}

	public emitDeleteImageEvent() {
		this.deleteImageEvent.emit(this.id)
	}
}